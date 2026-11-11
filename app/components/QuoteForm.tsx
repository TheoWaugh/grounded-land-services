"use client";

import { useState, useEffect, useId, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { serviceAreas } from "@/data/service-areas";
import { quoteServices } from "@/data/quote-services";
import { getLeadSource } from "@/lib/lead-source";
import { resizePhoto } from "@/lib/resize-photo";

const MAX_PHOTOS = 5;
// Keeps the whole request well under the host's 4.5 MB upload limit
const MAX_PHOTO_CHARS_TOTAL = 3_500_000;

interface FormData {
  name: string;
  phone: string;
  city: string;
  service: string;
  lotSize: string;
  comments: string;
  email: string;
}

type Errors = Partial<Record<"name" | "phone" | "email" | "city", string>>;

// Autocomplete suggestions for the City field (any city can still be typed)
const serviceCities = [...new Set(Object.values(serviceAreas).flat())].sort();

const phoneDigits = (value: string) => value.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");

function validate(form: FormData): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (phoneDigits(form.phone).length !== 10) errors.phone = "Please enter a 10-digit phone number.";
  if (!form.city.trim()) errors.city = "Please enter your city or nearest town.";
  // Listed after city so the first error focused matches the on-screen order
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "Please enter a valid email, like name@example.com.";
  return errors;
}

export default function QuoteForm({
  dark = true,
  defaultService = "",
  defaultCity = "",
}: {
  dark?: boolean;
  defaultService?: string;
  defaultCity?: string;
}) {
  const router = useRouter();
  const cityListId = useId();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    city: defaultCity,
    service: quoteServices.includes(defaultService) ? defaultService : "",
    lotSize: "",
    comments: "",
    email: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoNote, setPhotoNote] = useState("");
  const [addingPhotos, setAddingPhotos] = useState(false);
  // Photos only have somewhere to go once the Google Sheet connection is set up on the server
  const [photosEnabled, setPhotosEnabled] = useState(false);
  const photoInputId = useId();
  // When the form appeared, for the server's "filled out too fast to be a person" spam check
  const shownAt = useRef(0);

  useEffect(() => {
    fetch("/api/lead")
      .then((r) => r.json())
      .then((d: { photos?: boolean }) => setPhotosEnabled(d.photos === true))
      .catch(() => {});
  }, []);

  useEffect(() => {
    shownAt.current = Date.now();
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      const match = quoteServices.find(
        (s) => s.toLowerCase() === serviceParam.toLowerCase()
      );
      if (match) {
        setForm((prev) => ({ ...prev, service: match }));
      }
    }
    // From the cost calculator: ?acres=5 → "5 acres"
    const acres = Number(params.get("acres"));
    if (acres > 0) {
      setForm((prev) => ({ ...prev, lotSize: `${acres} acre${acres === 1 ? "" : "s"}` }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    if (touched[e.target.name]) setErrors(validate(next));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    setErrors(validate(form));
  };

  const addPhotos = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = ""; // so the same photo can be picked again after removing it
    if (files.length === 0) return;
    setAddingPhotos(true);
    setPhotoNote("");
    const next = [...photos];
    let unreadable = 0;
    let tooMany = false;
    for (const file of files) {
      if (next.length >= MAX_PHOTOS) {
        tooMany = true;
        break;
      }
      const dataUrl = await resizePhoto(file);
      if (!dataUrl) unreadable++;
      else if (next.reduce((sum, p) => sum + p.length, dataUrl.length) > MAX_PHOTO_CHARS_TOTAL) tooMany = true;
      else next.push(dataUrl);
    }
    setPhotos(next);
    setAddingPhotos(false);
    if (unreadable) setPhotoNote(`${unreadable === 1 ? "One photo" : `${unreadable} photos`} couldn't be added. Try a JPG, or text it to (512) 571-6700.`);
    else if (tooMany) setPhotoNote(`Up to ${MAX_PHOTOS} photos. You can text more to (512) 571-6700.`);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    setTouched({ name: true, phone: true, email: true, city: true });
    if (Object.keys(found).length > 0) {
      const firstField = e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`);
      firstField?.focus();
      return;
    }

    const city = form.city.trim();
    const lead = { service: form.service || "Not specified", city };

    // Bots fill the hidden field; skip sending but act normally
    if (honeypot) {
      router.push("/thank-you");
      return;
    }

    setLoading(true);
    setSendError(false);
    const params = new URLSearchParams(window.location.search);

    // Also send to our server: adds a row to the owner's Google Sheet (with photos) and emails the customer.
    // Formspree below stays the main delivery; if this one fails, the lead still arrives by email.
    const { source, estimate } = getLeadSource();
    const sheetAndEmail = fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone,
        city,
        service: form.service,
        jobSize: form.lotSize.trim(),
        estimate,
        leadSource: source,
        comments: form.comments,
        photos,
        elapsedMs: Date.now() - shownAt.current,
        _gotcha: honeypot,
      }),
    }).catch(() => null);

    try {
      const res = await fetch("https://formspree.io/f/maqaelbv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New quote request: ${lead.service} in ${city}`,
          name: form.name.trim(),
          phone: form.phone,
          email: form.email.trim(),
          city,
          serviceNeeded: form.service,
          lotSize: form.lotSize,
          comments: form.comments,
          page: window.location.pathname,
          utm_source: params.get("utm_source") ?? "",
          utm_medium: params.get("utm_medium") ?? "",
          utm_campaign: params.get("utm_campaign") ?? "",
        }),
      });

      if (res.ok) {
        try {
          sessionStorage.setItem("gls_lead", JSON.stringify({ ...lead, page: window.location.pathname }));
        } catch {}
        // Let the photos finish uploading before leaving the page (but never wait more than 20 seconds)
        await Promise.race([sheetAndEmail, new Promise((resolve) => setTimeout(resolve, 20_000))]);
        router.push("/thank-you");
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = dark
    ? "form-input"
    : "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-base outline-none focus:border-[#C4922A] transition-colors placeholder-gray-400";

  const selectClass = dark
    ? "form-input !text-black !bg-white/90 [&>option]:text-black [&>option]:bg-white [&_optgroup]:text-black"
    : "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-base outline-none focus:border-[#C4922A] transition-colors";

  const labelClass = dark
    ? "block text-white/70 text-sm font-medium mb-1.5"
    : "block text-gray-600 text-sm font-medium mb-1.5";

  const optionalClass = dark ? "text-white/40 font-normal" : "text-gray-400 font-normal";
  const errorClass = "mt-1.5 text-sm text-red-400";
  const fieldError = (field: keyof Errors) =>
    touched[field] && errors[field] ? (
      <p id={`${field}-error`} className={errorClass}>{errors[field]}</p>
    ) : null;
  const invalidProps = (field: keyof Errors) =>
    touched[field] && errors[field]
      ? { "aria-invalid": true, "aria-describedby": `${field}-error` }
      : {};

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from people, filled by bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="company-website">Leave this field empty</label>
        <input
          id="company-website"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="name-input">Your Name</label>
          <input
            id="name-input"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="John Smith"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass}
            {...invalidProps("name")}
          />
          {fieldError("name")}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone-input">Phone Number</label>
          <input
            id="phone-input"
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(512) 000-0000"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass}
            {...invalidProps("phone")}
          />
          {fieldError("phone")}
        </div>
      </div>

      {/* Row 2: City + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="city-input">Property City / Area</label>
          <input
            id="city-input"
            type="text"
            name="city"
            list={cityListId}
            autoComplete="address-level2"
            autoCapitalize="words"
            placeholder="e.g. Liberty Hill"
            value={form.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass}
            {...invalidProps("city")}
          />
          {/* Suggestions only: any city can be typed */}
          <datalist id={cityListId}>
            {serviceCities.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
          {fieldError("city")}
        </div>
        <div>
          <label className={labelClass} htmlFor="service-select">
            Service Needed <span className={optionalClass}>(optional)</span>
          </label>
          <select
            id="service-select"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Not sure / choose one...</option>
            {quoteServices.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>


      {/* Row 3: Email + Lot Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="email-input">
            Email
          </label>
          <input
            id="email-input"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass}
            {...invalidProps("email")}
          />
          {fieldError("email")}
        </div>
        <div>
          <label className={labelClass} htmlFor="lotsize-input">
            Rough Size <span className={optionalClass}>(optional)</span>
          </label>
          <input
            id="lotsize-input"
            type="text"
            name="lotSize"
            placeholder="e.g. 5 acres"
            value={form.lotSize}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Comments */}
      <div>
        <label className={labelClass} htmlFor="comments-input">
          Project Details <span className={optionalClass}>(optional)</span>
        </label>
        <textarea
          id="comments-input"
          name="comments"
          rows={3}
          placeholder="What's on the land now, what you want it to look like, timeline, property address..."
          value={form.comments}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Photos (hidden until the server can store them) */}
      {photosEnabled && (
      <div>
        <p className={labelClass}>
          Photos of Your Property <span className={optionalClass}>(optional, up to {MAX_PHOTOS})</span>
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {photos.map((src, i) => (
            <div key={i} className="relative w-16 h-16">
              {/* eslint-disable-next-line @next/next/no-img-element -- local preview of the visitor's own photo */}
              <img src={src} alt={`Photo ${i + 1}`} className="w-16 h-16 object-cover rounded-lg" />
              <button
                type="button"
                onClick={() => setPhotos((prev) => prev.filter((_, j) => j !== i))}
                aria-label={`Remove photo ${i + 1}`}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black text-white text-sm leading-none flex items-center justify-center border border-white/40"
              >
                ×
              </button>
            </div>
          ))}
          {photos.length < MAX_PHOTOS && (
            <label
              htmlFor={photoInputId}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed text-sm font-medium cursor-pointer transition-colors focus-within:ring-2 focus-within:ring-[#C4922A] ${
                dark ? "border-white/30 text-white/80 hover:border-[#D4A840]" : "border-gray-300 text-gray-600 hover:border-[#C4922A]"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {addingPhotos ? "Adding…" : photos.length ? "Add more" : "Add photos"}
              <input
                id={photoInputId}
                type="file"
                accept="image/*"
                multiple
                onChange={addPhotos}
                disabled={addingPhotos}
                className="sr-only"
              />
            </label>
          )}
        </div>
        {photoNote && <p className={`mt-1.5 text-sm ${dark ? "text-white/60" : "text-gray-500"}`}>{photoNote}</p>}
      </div>
      )}

      {sendError && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong sending your request. Please call or text us at{" "}
          <a href="tel:5125716700" className="underline font-semibold">(512) 571-6700</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={loading || addingPhotos}
        className="w-full btn-primary justify-center py-4 text-base font-semibold"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            Sending...
          </span>
        ) : (
          "Request Free Estimate →"
        )}
      </button>
      <p className={`text-center text-sm ${dark ? "text-white/50" : "text-gray-500"}`}>
        Free on-site estimates · Logan replies within 24 hours
      </p>
      <p className={`text-center text-xs ${dark ? "text-white/40" : "text-gray-400"}`}>
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-[#D4A840]">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
