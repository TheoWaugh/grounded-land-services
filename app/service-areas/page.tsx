"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { serviceAreas, rockCrushingCities } from "@/data/service-areas";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export default function ServiceAreasPage() {
  const [expandedRegion, setExpandedRegion] = useState<string | null>("Hill Country");
  const [search, setSearch] = useState("");

  const allCities = Object.values(serviceAreas).flat();
  const filtered = search
    ? allCities.filter((c) => c.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
        ]}
      />
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/work/dji_fly_20251022_072324_0022_1768263397042_photo.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p className="section-label-light mb-2">Where We Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Service Areas</h1>
        </div>
      </section>

      {/* Intro + Search */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl mb-10">
              <p className="section-label mb-3">Central & South Central Texas Coverage</p>
              <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">
                We Go Where the Work Takes Us
              </h2>
              <p className="text-[#6e6e73] leading-relaxed">
                Grounded Land Services serves Central and South-Central Texas, from the Austin metro and Hill Country to the San Antonio corridor. Don't see your city? Give us a call at{" "}
                <a href="tel:5125716700" className="font-semibold text-[#C4922A] hover:text-amber-600 transition-colors">
                  (512) 571-6700
                </a>{" "}
                — we may still be able to help.
              </p>
            </div>
          </ScrollReveal>

          {/* Search */}
          <ScrollReveal>
            <div className="relative max-w-md mb-12">
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
                placeholder="Search your city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#f5f5f7] border border-gray-200 rounded-full text-sm text-gray-900 outline-none focus:border-[#C4922A] transition-colors"
              />
            </div>
          </ScrollReveal>

          {/* Search Results */}
          {search && (
            <div className="mb-12">
              {filtered.length > 0 ? (
                <div>
                  <p className="text-sm text-[#6e6e73] mb-4">
                    {filtered.length} city match{filtered.length !== 1 ? "es" : ""} found:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filtered.map((city) => (
                      <div key={city} className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                        <svg className="w-3.5 h-3.5 text-[#C4922A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-amber-900 text-sm font-medium">{city}</span>
                        {rockCrushingCities.includes(city) && (
                          <span className="text-xs text-[#C4922A] bg-amber-100 px-1.5 py-0.5 rounded-full">+ Rock Crushing</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl max-w-md">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-amber-800 text-sm">
                    <strong>{search}</strong> wasn&apos;t found — but we may still service your area!{" "}
                    <a href="tel:5125716700" className="underline">Call us</a> to confirm.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Region Accordion */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-3">
            {Object.entries(serviceAreas).map(([region, cities]) => (
              <div key={region} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedRegion(expandedRegion === region ? null : region)}
                  className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-[#f5f5f7] transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C4922A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-semibold text-[#0a0a0a]">{region}</span>
                    <span className="text-[#6e6e73] text-sm">({cities.length} cities)</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedRegion === region ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${expandedRegion === region ? "max-h-[800px]" : "max-h-0"}`}>
                  <div className="px-6 pb-6 bg-[#f9f9f9]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pt-4">
                      {cities.map((city) => {
                        const citySlug = city.toLowerCase().replace(/\s+/g, "-");
                        return (
                          <div
                            key={city}
                            className="flex flex-col gap-0.5 p-3 bg-white rounded-xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50 transition-all"
                          >
                            <span className="text-sm font-medium text-[#1d1d1f]">{city}</span>
                            <div className="flex gap-1 flex-wrap">
                              <Link
                                href={`/service-areas/${citySlug}/land-clearing`}
                                className="text-xs text-amber-700 bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded-full hover:bg-amber-100 transition-colors"
                              >
                                Land Clearing
                              </Link>
                              <Link
                                href={`/service-areas/${citySlug}/forestry-mulching`}
                                className="text-xs text-amber-700 bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded-full hover:bg-amber-100 transition-colors"
                              >
                                Forestry Mulching
                              </Link>
                              <Link
                                href={`/service-areas/${citySlug}/demolition`}
                                className="text-xs text-amber-700 bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded-full hover:bg-amber-100 transition-colors"
                              >
                                Demolition
                              </Link>
                              {rockCrushingCities.includes(city) && (
                                <Link
                                  href={`/service-areas/${citySlug}/rock-crushing`}
                                  className="text-xs text-amber-700 bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded-full hover:bg-amber-100 transition-colors"
                                >
                                  Rock Crushing
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}