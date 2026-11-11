import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/app/components/FaqAccordion";
import FaqPageSchema from "@/app/components/FaqPageSchema";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import YouTubePlayer from "@/app/components/YouTubePlayer";
import { GRANT_GUIDE_PATH } from "@/lib/grant-guide";

// Program facts checked against the official pages on 2026-11-10 (see business-facts.md).
// Update the dates and LAST_UPDATED when Texas A&M Forest Service announces the 2027 round.
const LAST_UPDATED = "November 2026";
const PROGRAM_URL = "https://tfsweb.tamu.edu/mechgrant/";
const ANNOUNCEMENT_URL =
  "https://tfsweb.tamu.edu/texas-am-forest-service-announces-wildfire-mitigation-grant-opportunities-and-landowner-outreach-events/";
const QUOTE_HREF = "/contact?service=Forestry%20Mulching#quote";
const PATH = GRANT_GUIDE_PATH;

export const metadata: Metadata = {
  title: { absolute: "Texas A&M Forest Service Fuel Reduction Grant Guide" },
  description:
    "The Texas Mechanical Fuel Reduction Grant reimburses landowners up to $2,000 an acre for forestry mulching cedar and brush, up to $20,000. Rates, rules, dates and how to apply.",
  alternates: { canonical: `https://www.groundedlandservices.com${PATH}` },
};

const rates = [
  { method: "Hand-cutting", rate: "Up to $750 per acre" },
  { method: "Combination of hand and heavy equipment", rate: "Up to $1,500 per acre" },
  { method: "Heavy equipment (forestry mulchers)", rate: "Up to $2,000 per acre" },
  { method: "Maximum per applicant", rate: "$20,000" },
];

const faqs = [
  {
    question: "Is my county eligible for the Mechanical Fuel Reduction Grant?",
    answer:
      "Check the county map on the official Texas A&M Forest Service program page. In 2026 the grant covered 39 designated Central Texas counties, and the Forest Service says the eligible counties can change each year with the funding source.",
    link: { label: "Official program page and county map", href: PROGRAM_URL },
  },
  {
    question: "Can I burn the brush on a grant project?",
    answer:
      "No. Burning of any kind isn't allowed under this grant and disqualifies the project. The debris has to be removed or mechanically reduced, which is why forestry mulching, where everything is mulched in place, is a good fit.",
  },
  {
    question: "Do I have to pay for the work up front?",
    answer:
      "Yes. It's a reimbursement grant: you pay the contractor in full, then submit your paid invoices after the Forest Service inspects the finished work, and they pay you back up to the approved amount. It may not cover 100% of the cost.",
  },
  {
    question: "Can you help with my grant estimate?",
    answer:
      "Yes. We'll walk your property at a free site visit and give you a written estimate for forestry mulching that you can use in your application. We can't promise your application will be approved, since selection is up to Texas A&M Forest Service.",
    link: { label: "Get your grant estimate", href: QUOTE_HREF },
  },
];

const h2 = "text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4 flex items-center gap-3";
const bar = <span className="w-1.5 h-7 bg-gradient-to-b from-[#D4A840] to-[#C4922A] rounded-full inline-block flex-shrink-0" />;
const p = "text-[15px] text-[#3a3a3c] leading-relaxed mb-4";
const a = "font-semibold text-[#C4922A] hover:text-amber-600 transition-colors";
const external = { target: "_blank", rel: "noopener noreferrer" };

function CtaButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Link
        href={QUOTE_HREF}
        data-track="grant_guide"
        className="inline-flex justify-center px-8 py-4 bg-[#C4922A] rounded-full text-black font-bold text-base hover:bg-amber-500 transition-colors"
      >
        Get your grant estimate
      </Link>
      <a
        href="tel:5125716700"
        data-track="grant_guide"
        className={`inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 transition-colors ${
          dark ? "border-white text-white hover:bg-white/10" : "border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#f5f5f5]"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
        </svg>
        Call (512) 571-6700
      </a>
    </div>
  );
}

export default function GrantGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Texas Fuel Reduction Grant Guide", url: PATH },
        ]}
      />
      <FaqPageSchema faqs={faqs} />

      <section className="relative min-h-[22rem] md:min-h-[28rem] flex items-end overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/projects/balcones-refuge-fire-break/fire-break-balcones-canyonlands-mulched-cedar.webp"
          alt="Wildfire fire break mulched through cedar on Balcones Canyonlands National Wildlife Refuge near Leander, Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 pb-12">
          <p className="section-label-light mb-2">Wildfire Grant Guide</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            How to Get Paid Back for Clearing Cedar: The Texas Mechanical Fuel Reduction Grant
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-sm text-[#6e6e73] mb-6">Last updated: {LAST_UPDATED}</p>

        <p className="text-lg text-[#3a3a3c] leading-relaxed mb-4">
          Texas A&amp;M Forest Service&apos;s{" "}
          <a href={PROGRAM_URL} {...external} className={a}>
            Mechanical Fuel Reduction Grant
          </a>{" "}
          reimburses Central Texas landowners for clearing wildfire fuel like cedar and brush, up to $2,000 an acre for
          forestry mulching and up to $20,000 per applicant. We&apos;re a family-owned contractor based in Bertram that
          has completed grant work for a private landowner and a 5-mile fire break on Balcones Canyonlands National
          Wildlife Refuge.
        </p>
        <p className="text-sm text-[#6e6e73] leading-relaxed mb-8">
          This guide explains the program in plain English. Texas A&amp;M Forest Service decides who&apos;s eligible and
          who&apos;s approved, so always check the official page for the current rules.
        </p>
        <div className="mb-14">
          <CtaButtons />
        </div>

        <section className="mb-12">
          <h2 className={h2}>
            {bar}
            What is the Mechanical Fuel Reduction Grant?
          </h2>
          <p className={p}>
            It&apos;s a reimbursement program from Texas A&amp;M Forest Service that pays landowners back for removing
            wildfire fuel, to lower the risk of wildfire reaching homes and communities. It covers defensible space around
            homes and fuel breaks, cleared by hand or with equipment like forestry mulchers. The program is funded through
            the USDA Forest Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>
            {bar}
            How much does it pay?
          </h2>
          <p className={p}>
            It pays back up to $2,000 an acre for heavy equipment like forestry mulchers, with a maximum of $20,000 per
            applicant. You&apos;re reimbursed for your actual costs, up to these limits:
          </p>
          <div className="overflow-x-auto rounded-2xl border-2 border-[#0a0a0a] mb-4">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-[#0a0a0a] text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Type of work</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Reimbursement</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.method} className={i === rates.length - 1 ? "bg-[#f9f9f9] font-semibold" : "border-b border-gray-200"}>
                    <td className="px-4 py-3 text-[#0a0a0a]">{r.method}</td>
                    <td className="px-4 py-3 text-[#3a3a3c] whitespace-nowrap">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#6e6e73] leading-relaxed">
            Rates from the{" "}
            <a href={ANNOUNCEMENT_URL} {...external} className={a}>
              2026 program announcement
            </a>
            . The grant may not cover 100% of your project. For comparison, our{" "}
            <Link href="/services/forestry-mulching" className={a}>
              forestry mulching
            </Link>{" "}
            runs $2,500 to $3,000 a day.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>
            {bar}
            Who can apply?
          </h2>
          <p className={p}>
            Private landowners, homeowner associations, nonprofit organizations and city and local governments in the
            designated counties can apply. In 2026 that was 39 Central Texas counties, and the Forest Service says the
            eligible counties can change each year.{" "}
            <a href={PROGRAM_URL} {...external} className={a}>
              Check the county map on the official program page
            </a>{" "}
            to see if your property qualifies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>
            {bar}
            When can I apply?
          </h2>
          <p className={p}>
            The 2026 application window was June 1 to July 14, 2026, and the next round is expected to open around June
            1, 2027.{" "}
            <a href={PROGRAM_URL} {...external} className={a}>
              Confirm the dates on the official page
            </a>{" "}
            before you plan around them. The window is short, so get a contractor&apos;s estimate ready before it opens.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>
            {bar}
            What are the rules?
          </h2>
          <p className={p}>The biggest rules are about who pays, who does the work, and what happens to the brush:</p>
          <div className="grid md:grid-cols-5 gap-6 mb-4">
          <ul className="md:col-span-3 space-y-3 text-[15px] text-[#3a3a3c] leading-relaxed list-disc pl-5">
            <li>
              <strong className="text-[#0a0a0a]">It&apos;s a reimbursement.</strong> You pay the contractor first, then
              get paid back after the work is inspected.
            </li>
            <li>
              <strong className="text-[#0a0a0a]">A qualified contractor does the work.</strong>{" "}
              The contractor can&apos;t
              be affiliated with you, and you can&apos;t do the work yourself.
            </li>
            <li>
              <strong className="text-[#0a0a0a]">Don&apos;t start early.</strong>{" "}
              Work can&apos;t begin until the Forest
              Service&apos;s pre-inspection, and work started before it isn&apos;t reimbursed.
            </li>
            <li>
              <strong className="text-[#0a0a0a]">No burning.</strong> Burning the debris disqualifies the project. The
              brush has to be removed or mechanically reduced, which is why{" "}
              <Link href="/services/forestry-mulching" className={a}>
                forestry mulching
              </Link>{" "}
              fits so well: everything is mulched in place, with no burn piles and nothing to haul off.
            </li>
          </ul>
          <figure className="md:col-span-2 md:self-end">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/service-pics/cat-275-pic.jpeg"
                alt="Grounded Land Services CAT 275 compact track loader with a Prinoth M450s forestry mulching head on freshly mulched ground"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
            <figcaption className="text-xs text-[#6e6e73] mt-2 leading-relaxed">
              Our CAT 275 and Prinoth mulching head turn brush into mulch on the spot, so there&apos;s nothing to burn.
            </figcaption>
          </figure>
          </div>
          <p className="text-sm text-[#6e6e73] leading-relaxed">
            Selection is competitive and approval isn&apos;t guaranteed. The{" "}
            <a href={PROGRAM_URL} {...external} className={a}>
              official program page
            </a>{" "}
            has the full rules.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>
            {bar}
            How does the process work with us?
          </h2>
          <p className={p}>It starts with a free site visit and ends with you submitting for reimbursement:</p>
          <ol className="space-y-4 mb-4">
            {[
              ["Free site visit", "We walk your property with you and talk through where fuel reduction makes the most sense."],
              ["Estimate for your application", "We give you a written estimate for the work to include with your grant application."],
              ["You apply", "You submit your application to Texas A&M Forest Service during the application window."],
              ["After approval, we do the work", "Once you're approved and the Forest Service has done its pre-inspection, we mulch the cedar and brush in place."],
              ["You submit for reimbursement", "After the final inspection, you send in your paid invoice and the Forest Service pays you back up to the approved amount."],
            ].map(([title, text], i) => (
              <li key={title} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C4922A] text-black font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-[15px] text-[#3a3a3c] leading-relaxed pt-1">
                  <strong className="text-[#0a0a0a]">{title}.</strong> {text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12">
          <h2 className={h2}>
            {bar}
            What grant and wildfire work have you done?
          </h2>
          <p className={p}>
            We&apos;ve done Mechanical Fuel Reduction Grant work for a private landowner in Lampasas, and wildfire fuel
            work on a national wildlife refuge:
          </p>
          <ul className="space-y-3 text-[15px] text-[#3a3a3c] leading-relaxed list-disc pl-5">
            <li>
              <Link href="/case-studies/lampasas-mulching-cleanup-grant" className={a}>
                Forestry mulching cleanup in Lampasas
              </Link>
              : 2 acres of old mulch, stumps, cactus and rock cleared to cut wildfire fuel around the owner&apos;s house.
              The landowner received the Mechanical Fuel Reduction Grant for the work.
            </li>
            <li>
              <Link href="/case-studies/balcones-refuge-fire-break" className={a}>
                5-mile fire break at Balcones Canyonlands National Wildlife Refuge
              </Link>
              : mulched for the U.S. Fish &amp; Wildlife Service, with nothing burned or hauled off.
            </li>
          </ul>

          {/* The Lampasas grant job only has after photos, so these sit side by side (no before/after slider) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              {
                src: "/projects/lampasas-mulching-cleanup-grant/forestry-mulching-cleanup-lampasas-raked-after.webp",
                alt: "Lampasas, Texas property after wildfire fuel reduction: old mulch, stumps, cactus and rock removed and the ground raked smooth",
              },
              {
                src: "/projects/lampasas-mulching-cleanup-grant/wildfire-fuel-reduction-lampasas-oaks-after.webp",
                alt: "Oaks left standing on open, mowable ground after grant-funded wildfire fuel reduction in Lampasas, Texas",
              },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 384px" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6e6e73] mt-2">After: the Lampasas grant job, finished July 2025.</p>

          <div className="mt-8">
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wide mb-3">
              Video: the Balcones Canyonlands fire break
            </p>
            <YouTubePlayer videoId="KjYxH1hgTwM" title="5-mile fire break at Balcones Canyonlands National Wildlife Refuge" loop />
          </div>
        </section>

        <div className="bg-[#0a0a0a] rounded-2xl py-10 px-6 text-center mb-14">
          <p className="text-white text-2xl font-bold mb-2">Planning to apply?</p>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Get a free site visit and a written estimate ready before the next application window opens.
          </p>
          <CtaButtons dark />
        </div>

        <section>
          <h2 className={h2}>
            {bar}
            Grant questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </section>
      </div>
    </>
  );
}
