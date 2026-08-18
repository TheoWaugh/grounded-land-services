"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  "Forestry Mulching",
  "Land Clearing",
  "Cedar Tree Removal",
  "Rock & Cactus Removal",
  "Rock Crushing",
  "Site Preparation",
  "Utility Trenching",
  "Dirt Work",
  "Underbrushing",
  "Fence Line Clearing",
  "Driveways",
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact Us", href: "/contact" },
  { label: "Get a Quote", href: "/contact#quote" },
];

const quoteFormLabels: Record<string, string> = {
  "land-clearing": "Land Clearing",
  "forestry-mulching": "Forestry Mulching",
  "rock-crushing": "Rock Crushing",
  "demolition": "Demolition",
  "cedar-tree-removal": "Cedar Tree Removal",
  "rock-cactus-removal": "Rock & Cactus Removal",
  "tree-pile-shredding": "Tree Pile Shredding",
  "fence-line-clearing": "Fence Line Clearing",
  "site-preparation": "Site Preparation",
  "underbrushing": "Underbrushing",
  "utility-trenching": "Utility Trenching",
  "dirt-work-grading": "Dirt Work & Grading",
  "site-cleanup": "Site Cleanup",
  "retaining-walls": "Retaining Walls",
  "rock-removal": "Rock Removal",
  "right-of-way-clearing": "Right-of-Way Clearing",
  "residential-lot-clearing": "Residential Lot Clearing",
  "fire-breaks": "Fire Breaks",
  "commercial-lot-clearing": "Commercial Lot Clearing",
  "atv-trail-creation": "ATV Trail Creation",
  "tree-stump-removal": "Tree & Stump Removal",
  "gravel-driveways-roads": "Gravel Driveways & Roads",
};

export default function Footer() {
  const pathname = usePathname();
  const cityServiceMatch = pathname?.match(/^\/service-areas\/[^/]+\/([^/]+)/);
  const standaloneServiceMatch = pathname?.match(/^\/services\/([^/]+)$/);
  const serviceSlug = cityServiceMatch?.[1] ?? standaloneServiceMatch?.[1];
  const quoteLabel = serviceSlug ? quoteFormLabels[serviceSlug] : undefined;
  const requestQuoteHref = quoteLabel
    ? `/contact?service=${encodeURIComponent(quoteLabel)}#quote`
    : "/contact#quote";

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* CTA Banner — gold on black */}
      <div className="bg-[#C4922A] py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-black/60 mb-3">
            Ready to Transform Your Land?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-black/65 mb-8 text-lg max-w-xl mx-auto">
            From forestry mulching to rock crushing — we bring the power, precision, and professional finish your project deserves.
          </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={requestQuoteHref}
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:5125716700"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-black font-semibold px-7 py-3.5 rounded-full border-2 border-black/30 hover:border-black/60 transition-colors"
            >
              (512) 571-6700
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logos.png"
              alt="Grounded Land Services"
              width={130}
              height={65}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-white/45 text-sm leading-relaxed mb-6">
            Premier land clearing and site development across Texas. Transforming raw acreage into functional, high-value assets.
          </p>
          {/* Socials */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/Grounded.LandServices"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#C4922A]/15 hover:bg-[#C4922A]/30 border border-[#C4922A]/30 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#D4A840]">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/GroundedLandServices"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#C4922A]/15 hover:bg-[#C4922A]/30 border border-[#C4922A]/30 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#D4A840]">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@grounded.land.services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#C4922A]/15 hover:bg-[#C4922A]/30 border border-[#C4922A]/30 flex items-center justify-center transition-colors"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#D4A840]">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#C4922A] font-semibold text-xs mb-5 tracking-[0.12em] uppercase">Services</h3>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href={`/services#${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="text-white/45 text-sm hover:text-[#D4A840] transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#C4922A] font-semibold text-xs mb-5 tracking-[0.12em] uppercase">Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/45 text-sm hover:text-[#D4A840] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#C4922A] font-semibold text-xs mb-5 tracking-[0.12em] uppercase">Contact</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <svg className="w-4 h-4 text-[#C4922A] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:5125716700" className="text-white/45 text-sm hover:text-[#D4A840] transition-colors">(512) 571-6700</a>
            </li>
            <li className="flex gap-3">
              <svg className="w-4 h-4 text-[#C4922A] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:Logan@groundedlandservices.com" className="text-white/45 text-sm hover:text-[#D4A840] transition-colors break-all">
                Logan@groundedlandservices.com
              </a>
            </li>
            <li className="flex gap-3">
              <svg className="w-4 h-4 text-[#C4922A] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-white/45 text-sm">Serving Central & South-Central Texas</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C4922A]/15 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Grounded Land Services. All rights reserved.</p>
          <p className="text-white/25 text-xs">Licensed · Insured · Certified</p>
        </div>
      </div>
    </footer>
  );
}
