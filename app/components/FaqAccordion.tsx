"use client";

import { useState } from "react";

interface Faq {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const sorted = [...faqs].sort((a, b) => b.question.length - a.question.length);
  const filtered = search
    ? sorted.filter(
        (f) =>
          f.question.toLowerCase().includes(search.toLowerCase()) ||
          f.answer.toLowerCase().includes(search.toLowerCase())
      )
    : sorted;

  return (
    <div>
      {faqs.length > 8 && (
        <div className="relative max-w-md mx-auto mb-6">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-100 rounded-full text-sm text-gray-900 outline-none focus:border-[#C4922A] transition-colors placeholder-gray-400 shadow-sm"
          />
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-center text-sm text-[#6e6e73] py-6">
          No questions match &ldquo;{search}&rdquo; — try a different search term.
        </p>
      ) : (
        <div className="columns-1 sm:columns-2 xl:columns-4 gap-3 [&>*]:mb-3">
          {filtered.map((faq) => {
            const globalIndex = sorted.indexOf(faq);
            const isOpen = openIndex === globalIndex;
            return (
              <div key={faq.question} className="break-inside-avoid">
                <div
                  className={`rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? "border-[#C4922A] shadow-[0_4px_12px_-4px_rgba(196,146,42,0.3)]"
                      : "border-amber-100 hover:border-[#C4922A]/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    className="w-full text-left group"
                  >
                    <div className="flex items-center gap-2.5 py-2.5 pl-3 pr-2.5">
                      <span
                        className={`flex-shrink-0 w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                          isOpen ? "bg-[#C4922A]" : "bg-gray-200 group-hover:bg-amber-300"
                        }`}
                      />
                      <span className="flex-1 font-semibold text-[#0a0a0a] text-[13px] leading-snug">
                        {faq.question}
                      </span>
                      <span
                        className={`relative flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200 ${
                          isOpen ? "bg-[#C4922A]" : "bg-[#f0f0f0] group-hover:bg-amber-100"
                        }`}
                      >
                        <span
                          className={`absolute w-2 h-[1.5px] rounded-full transition-colors duration-200 ${
                            isOpen ? "bg-black" : "bg-[#6e6e73]"
                          }`}
                        />
                        <span
                          className={`absolute w-[1.5px] h-2 rounded-full transition-all duration-200 ${
                            isOpen ? "opacity-0 bg-black" : "opacity-100 bg-[#6e6e73]"
                          }`}
                        />
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-3 pr-2.5 pb-2">
                        <div className="h-px bg-amber-200 mb-2" />
                        <p className="text-xs text-[#6e6e73] leading-relaxed">{faq.answer}</p>
                        {faq.link && (
                          <a
                            href={faq.link.href}
                            className="inline-flex items-center gap-1 mt-2 mb-1 text-xs font-semibold text-[#C4922A] hover:text-amber-600 transition-colors"
                          >
                            {faq.link.label}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}