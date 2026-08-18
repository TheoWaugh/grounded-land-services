"use client";

import { useState, useEffect } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  lotSize: string;
  service: string;
  comments: string;
}

const services = [
  "Forestry Mulching",
  "Land Clearing",
  "Cedar Tree Removal",
  "Rock & Cactus Removal",
  "Rock Crushing",
  "Site Preparation",
  "Utility Trenching",
  "Underbrushing",
  "Fence Line Clearing",
  "Tree Pile Shredding",
  "Site Cleanup",
  "Retaining Walls",
  "Dirt Work",
  "Demolition",
  "Driveways",
  "Rock Removal",
  "Right of way Clearing",
  "Forestry Mulching Cleanup",
  "Other / Multiple Services",
];

export default function QuoteForm({ dark = true }: { dark?: boolean }) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    lotSize: "",
    service: "",
    comments: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      const match = services.find(
        (s) => s.toLowerCase() === serviceParam.toLowerCase()
      );
      if (match) {
        setForm((prev) => ({ ...prev, service: match }));
      }
    }
  }, []);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/maqaelbv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          propertyAddress: form.address,
          city: form.city,
          lotSize: form.lotSize,
          serviceNeeded: form.service,
          comments: form.comments,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }
      } else {
        alert(
          "Something went wrong sending your request. Please call us at (512) 571-6700."
        );
      }
    } catch {
      alert("Network error. Please call us at (512) 571-6700.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = dark
    ? "form-input"
    : "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none focus:border-[#C4922A] transition-colors placeholder-gray-400";

  const selectClass = dark
    ? "form-input !text-black !bg-white/90 [&>option]:text-black [&>option]:bg-white"
    : "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 text-sm outline-none focus:border-[#C4922A] transition-colors";

  const labelClass = dark
    ? "block text-white/60 text-xs font-medium mb-1.5 tracking-wide"
    : "block text-gray-500 text-xs font-medium mb-1.5 tracking-wide";

  if (submitted) {
    return (
      <div className={`rounded-2xl p-10 text-center ${dark ? "bg-white/5 border border-white/10" : "bg-amber-50 border border-amber-100"}`}>
        <div className="w-14 h-14 rounded-full bg-[#D4A840] flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
          Quote Request Received!
        </h3>
        <p className={`text-sm ${dark ? "text-white/60" : "text-gray-500"}`}>
          Thank you, {form.name.split(" ")[0]}! Logan will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="name-input">Full Name *</label>
          <input
            id="name-input"
            type="text"
            name="name"
            required
            placeholder="John Smith"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone-input">Phone Number *</label>
          <input
            id="phone-input"
            type="tel"
            name="phone"
            required
            placeholder="(512) 000-0000"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Email */}
      <div>
        <label className={labelClass} htmlFor="email-input">Email Address *</label>
        <input
          id="email-input"
          type="email"
          name="email"
          required
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Row 3: Property Address + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="address-input">Property Address *</label>
          <input
            id="address-input"
            type="text"
            name="address"
            required
            placeholder="123 Ranch Road"
            value={form.address}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="city-input">City *</label>
          <input
            id="city-input"
            type="text"
            name="city"
            required
            placeholder="Austin"
            value={form.city}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 4: Lot Size + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="lotsize-input">Lot Size (acres)</label>
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
        <div>
          <label className={labelClass} htmlFor="service-select">Service Needed</label>
          <select
            id="service-select"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Comments */}
      <div>
        <label className={labelClass} htmlFor="comments-input">Project Details / Comments</label>
        <textarea
          id="comments-input"
          name="comments"
          rows={4}
          placeholder="Tell us about your project — land conditions, timeline, specific needs..."
          value={form.comments}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

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
          "Request Free Quote →"
        )}
      </button>
    </form>
  );
}
