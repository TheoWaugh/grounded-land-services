import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/case-studies";
import LeadConfirmation from "./LeadConfirmation";

export const metadata: Metadata = {
  title: "Thank You — Quote Request Received",
  description: "Your quote request was received. Logan will reach out within 24 hours.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

const featuredSlugs = ["spicewood-land-clearing", "liberty-hill-rock-removal", "gonzales-land-clearing"];
const featured = featuredSlugs
  .map((slug) => caseStudies.find((c) => c.slug === slug))
  .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] pt-32 pb-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-[#D4A840] flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Got it, thanks!</h1>
          <LeadConfirmation />
          <p className="text-white/70 text-lg leading-relaxed mb-10">
            Logan, the owner, will call or text you <strong className="text-white">within 24 hours</strong> to
            talk through your project and set up a free on-site estimate.
          </p>

          <div className="text-left bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
            <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">What happens next</p>
            <ol className="space-y-4">
              {[
                { title: "Logan reaches out", desc: "A call or text within 24 hours to learn about your land and goals." },
                { title: "Free on-site estimate", desc: "We walk the property and give you a clear, detailed quote." },
                { title: "Schedule your project", desc: "Pick a start date. We clear, clean up, and leave the site ready to use." },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="text-[#D4A840] font-bold text-sm w-6 flex-shrink-0">0{i + 1}</span>
                  <div>
                    <p className="text-white font-medium">{step.title}</p>
                    <p className="text-white/55 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="text-white/60 mb-4">Need us sooner? Call or text anytime:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:5125716700" data-track="thank_you" className="btn-primary">
              Call (512) 571-6700
            </a>
            <a href="sms:5125716700" data-track="thank_you" className="btn-secondary">
              Text Us
            </a>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="py-16 px-6 bg-[#f5f5f7]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8 text-center">
              While you wait, see some recent projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {featured.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={study.afterPhoto}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-[#C4922A] uppercase tracking-wide mb-1">
                      {study.location} · {study.acreage}
                    </p>
                    <h3 className="font-bold text-[#0a0a0a] group-hover:text-[#C4922A] transition-colors">
                      {study.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/case-studies" className="btn-dark">
                All Case Studies
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
