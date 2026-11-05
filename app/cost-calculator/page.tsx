import { Metadata } from "next";
import Link from "next/link";
import CostCalculator from "@/app/components/CostCalculator";
import FaqAccordion from "@/app/components/FaqAccordion";
import FaqPageSchema from "@/app/components/FaqPageSchema";
import BreadcrumbSchema from "@/app/components/BreadcrumbSchema";
import { servicePricing, MINIMUM_JOB } from "@/data/service-pricing";

const clearing = servicePricing["land-clearing"];
const mulching = servicePricing["forestry-mulching"];
const rockRemoval = servicePricing["rock-removal"];

export const metadata: Metadata = {
  title: { absolute: "Land Clearing Cost Calculator | Central Texas" },
  description: `Estimate your land clearing, forestry mulching or rock removal cost. Land clearing runs ${clearing.range} ${clearing.unit}; mulching ${mulching.range} ${mulching.unit}. Free site visits.`,
  alternates: {
    canonical: "https://www.groundedlandservices.com/cost-calculator",
  },
};

const faqs = [
  {
    question: "How much does land clearing cost per acre in Central Texas?",
    answer: `Land clearing costs ${clearing.range} ${clearing.unit}, with Harley raking included. Thicker brush costs more per acre, and hauling debris off site is extra. Terrain and access matter too, and we give you a firm price at a free site visit.`,
  },
  {
    question: "How is forestry mulching priced?",
    answer: `Forestry mulching costs ${mulching.range} ${mulching.unit}, so your total depends on how thick the brush is and how much ground there is to cover. For how long a mulching job takes, see our forestry mulching page.`,
    link: { label: "Forestry mulching", href: "/services/forestry-mulching" },
  },
  {
    question: "Is there a minimum job?",
    answer: `Yes. Our minimum job is ${MINIMUM_JOB}. If your estimate comes in under that, the price is the ${MINIMUM_JOB} minimum.`,
  },
];

export default function CostCalculatorPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Cost Calculator", url: "/cost-calculator" },
        ]}
      />
      <FaqPageSchema faqs={faqs} />

      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p className="section-label-light mb-2">Central Texas Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Land Clearing Cost Calculator</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-lg text-[#3a3a3c] leading-relaxed mb-8">
          Land clearing in Central Texas costs {clearing.range} {clearing.unit}, forestry mulching costs{" "}
          {mulching.range} {mulching.unit}, and rock removal costs {rockRemoval.range} {rockRemoval.unit}, with a{" "}
          {MINIMUM_JOB} minimum job. Enter your acreage below for a rough range, then we&apos;ll give you a firm number
          at a free site visit.
        </p>

        <CostCalculator />

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#D4A840] to-[#C4922A] rounded-full inline-block" />
            How we estimate
          </h2>
          <ul className="space-y-4 text-[15px] text-[#3a3a3c] leading-relaxed">
            <li>
              <strong className="text-[#0a0a0a]">
                <Link href="/services/land-clearing" className="hover:text-[#C4922A] transition-colors">Land clearing</Link>:
              </strong>{" "}
              {clearing.range} {clearing.unit}, with Harley raking included. The calculator prices it by brush density:
              light brush costs less per acre, thick cedar costs more. Check &ldquo;Haul debris off site&rdquo; to add
              haul-off loads. Haul-offs depend on how much debris and rock there is.
            </li>
            <li>
              <strong className="text-[#0a0a0a]">
                <Link href="/services/forestry-mulching" className="hover:text-[#C4922A] transition-colors">Forestry mulching</Link>:
              </strong>{" "}
              {mulching.range} {mulching.unit}. The calculator works out how many days your acreage and brush take,
              rounded up to the nearest half day with a one-day minimum, then multiplies by the day rate. Everything is
              mulched in place, so there&apos;s nothing to haul off.
            </li>
            <li>
              <strong className="text-[#0a0a0a]">
                <Link href="/services/rock-removal" className="hover:text-[#C4922A] transition-colors">Rock removal</Link>:
              </strong>{" "}
              {rockRemoval.range} {rockRemoval.unit}, priced by how much rock there is and how big it is. Haul-off is
              checked by default; uncheck it if the rock is staying on your property.
            </li>
            <li>
              <strong className="text-[#0a0a0a]">Minimum job:</strong> {MINIMUM_JOB}. If an estimate comes in lower, it
              shows the minimum.
            </li>
          </ul>
          <p className="text-[15px] text-[#3a3a3c] leading-relaxed mt-5">
            These ranges are a starting point, not a quote. Terrain, access, cedar size, how deep the rock is, and what
            happens to the debris all change the final number. We walk every property before we price it, and the site
            visit is free.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5 flex items-center gap-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#D4A840] to-[#C4922A] rounded-full inline-block" />
            Cost questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </section>
      </div>
    </>
  );
}
