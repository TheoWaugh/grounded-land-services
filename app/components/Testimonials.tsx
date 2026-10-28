"use client";

import { useState } from "react";
import { testimonials, type Testimonial } from "@/data/testimonials";


const featuredNames = ["Jacque Mendenhall", "Christopher Durst", "Mckenzie Schultz"];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="break-inside-avoid relative p-7 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group flex flex-col"
    >
      <svg
        className="absolute top-6 right-6 w-9 h-9 text-amber-100 group-hover:text-amber-200 transition-colors duration-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
      </svg>

      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#C4922A]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <p className="text-[15px] text-[#2d2d2f] leading-relaxed mb-6 relative z-10">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4A840] to-[#C4922A] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-bold text-[#0a0a0a]">{t.name}</p>
          {t.location && <p className="text-xs text-[#6e6e73] tracking-wide">{t.location}</p>}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const featured = featuredNames
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is Testimonial => Boolean(t));

  const rest = testimonials
    .filter((t) => !featuredNames.includes(t.name))
    .sort((a, b) => b.quote.length - a.quote.length);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {featured.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      {rest.length > 0 && (
        <>
          {showAll && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5 mt-5">
              {rest.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0a0a0a] rounded-full text-sm font-semibold text-[#0a0a0a] hover:bg-[#f5f5f5] transition-colors"
            >
              {showAll ? "Show Less" : `See More Reviews (${rest.length})`}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}