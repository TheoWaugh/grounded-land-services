import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real completed projects from Grounded Land Services — land clearing, forestry mulching, rock removal, and more across Central and South-Central Texas.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p className="section-label-light mb-2">Real Projects, Real Results</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-[#3a3a3c] leading-relaxed">
              Browse completed land clearing, forestry mulching, rock removal, and site work projects from across Central and South-Central Texas. Each project includes real photos, location, acreage, and timeline.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.slug} delay={([0, 100, 200, 300] as const)[i % 4]}>
              <Link href={`/case-studies/${study.slug}`} className="group block rounded-2xl overflow-hidden border-2 border-[#0a0a0a] bg-white card-hover">
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={study.afterPhoto}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#0a0a0a] mb-2 group-hover:text-[#C4922A] transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-[#6e6e73] text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.map((s) => (
                      <span key={s.slug} className="px-2.5 py-1 bg-[#f5f5f7] text-[#1d1d1f] text-xs font-medium rounded-full">
                        {s.label}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-0.5">Location</p>
                      <p className="text-sm font-bold text-[#0a0a0a]">{study.location}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-0.5">Acreage</p>
                      <p className="text-sm font-bold text-[#0a0a0a]">{study.acreage}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-0.5">Timeline</p>
                      <p className="text-sm font-bold text-[#0a0a0a]">{study.timeline}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {caseStudies.length === 0 && (
          <p className="text-center text-[#6e6e73] py-12">Case studies coming soon.</p>
        )}
      </section>

      {/* CTA */}
      <div className="w-full bg-[#0a0a0a] py-10 px-6 text-center">
        <p className="text-white text-2xl font-bold mb-2">
          Ready to start your own project?
        </p>
        <p className="text-white/70 text-base mb-6">
          Fill out the &ldquo;Request a Quote&rdquo; form or give us a call for immediate assistance!
        </p>
        <Link
          href="/contact#quote"
          className="inline-block px-8 py-4 bg-[#C4922A] rounded-full text-black font-bold text-base hover:bg-amber-500 transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
    </>
  );
}