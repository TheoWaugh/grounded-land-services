"use client";

import { useState, useEffect, useId } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { serviceAreas } from "@/data/service-areas";
import { quoteServices } from "@/data/quote-services";

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

  useEffect(() => {
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

      {sendError && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong sending your request. Please call or text us at{" "}
          <a href="tel:5125716700" className="underline font-semibold">(512) 571-6700</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
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
