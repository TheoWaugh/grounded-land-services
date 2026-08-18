import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Our Equipment",
  description: "The equipment behind every Grounded Land Services project — CAT excavators, land management compact track loaders, and a Prinoth forestry mulching head, built to handle Central Texas terrain.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/equipment",
  },
};

const equipment = [
  {
    name: "CAT 323 Excavator",
    category: "Excavator",
    icon: "🚜",
    image: "/images/service-pics/IMG_0628.jpeg",
    description:
      "Our CAT 323 is a mid-size hydraulic excavator built for demanding land clearing, excavation, and site preparation work. With an operating weight of roughly 56,000 lbs and a powerful C7.1 engine, it handles everything from stump and root removal to grading, trenching, and rock work across rugged Central Texas terrain.",
    specs: [
      { label: "Operating Weight", value: "~56,000 lbs" },
      { label: "Engine", value: "Cat C7.1" },
      { label: "Max Dig Depth", value: "~22 ft" },
      { label: "Bucket Capacity", value: "1.3 m³" },
    ],
    usedFor: ["Land clearing", "Excavation & grading", "Stump & root removal", "Rock work"],
  },
  {
    name: "CAT 275 XE Land Management",
    category: "Compact Track Loader",
    icon: "🌲",
    image: "/images/service-pics/323-pic-equipment.jpeg",
    description:
      "The CAT 275 XE Land Management is purpose-built for high-production vegetation and forestry mulching work. Its high-flow XE hydraulic system delivers up to 40 GPM and 134 horsepower, giving our mulching head the power it needs to process dense cedar, brush, and hardwoods efficiently.",
    specs: [
      { label: "Horsepower", value: "134 hp" },
      { label: "Hydraulic Flow", value: "Up to 40 GPM" },
      { label: "Hydraulic Pressure", value: "Up to 4,061 psi" },
      { label: "Rated Operating Capacity", value: "4,484 lbs" },
    ],
    usedFor: ["Forestry mulching", "Cedar removal", "Brush clearing", "Underbrushing"],
  },
  {
    name: "CAT 299 XE Land Management",
    category: "Compact Track Loader",
    icon: "🌳",
    image: "/images/service-pics/275-pic-equipment.jpeg",
    description:
      "Our largest land management platform, the CAT 299 XE, is built specifically for demanding vegetation management — mulching, brush cutting, and vegetation control. Its high-flow, high-pressure XE hydraulic system delivers a calculated hydraulic power rating of 94 hp, giving it the muscle to tackle the densest cedar stands and largest acreage projects.",
    specs: [
      { label: "Engine", value: "Cat C3.8" },
      { label: "Hydraulic Power", value: "94 hp" },
      { label: "Fuel Capacity", value: "58 gal (dual tanks)" },
      { label: "Purpose", value: "Vegetation & land management" },
    ],
    usedFor: ["Large-acreage forestry mulching", "Dense cedar clearing", "Vegetation management", "Extended runtime projects"],
  },
  {
    name: "Prinoth M450s-1900 Mulching Head",
    category: "Forestry Mulcher Attachment",
    icon: "⚙️",
    image: "/images/service-pics/IMG_3180.jpeg",
    description:
      "The Prinoth M450s-1900 is a high-performance forestry mulching head that pairs with our compact track loaders to grind cedar, brush, and small trees into fine mulch in a single pass. Its BCS-style rotor and heavy-duty hydraulic motor deliver a clean, evenly processed finish across even the densest Central Texas brush.",
    specs: [
      { label: "Working Width", value: "74.8 in" },
      { label: "Power Range", value: "80–150 hp" },
      { label: "Hydraulic Flow", value: "26–52.8 GPM" },
      { label: "Weight", value: "~2,668 lbs" },
    ],
    usedFor: ["Forestry mulching", "Cedar & brush grinding", "Fine mulch finish", "Selective clearing"],
  },
];

export default function EquipmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Equipment", url: "/equipment" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/images/service-pics/IMG_0628.jpeg"
          alt="Grounded Land Services CAT excavator on cleared Texas land"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p className="section-label-light mb-2">The Equipment Behind The Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Equipment</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-[#3a3a3c] leading-relaxed">
              Every project starts with the right machine for the job. Grounded Land Services operates a fleet of CAT excavators and land management compact track loaders, paired with a Prinoth forestry mulching head, giving us the power and precision to handle everything from selective cedar removal to full site clearing across the Texas Hill Country and Central Texas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Equipment Cards */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {equipment.map((item, i) => (
            <ScrollReveal key={item.name} delay={([0, 100, 200, 300] as const)[i]}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-2 border-[#0a0a0a] rounded-3xl overflow-hidden">
                <div className={`relative w-full aspect-[4/3] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#C4922A]">
                        {item.category}
                      </p>
                      <h2 className="text-2xl font-bold text-[#0a0a0a]">{item.name}</h2>
                    </div>
                  </div>
                  <p className="text-[#3a3a3c] leading-relaxed text-sm mb-5">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {item.specs.map((spec) => (
                      <div key={spec.label} className="bg-[#f9f9f9] rounded-xl p-3">
                        <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-0.5">
                          {spec.label}
                        </p>
                        <p className="text-sm font-bold text-[#0a0a0a]">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">
                    Used For
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.usedFor.map((use) => (
                      <span
                        key={use}
                        className="px-3 py-1.5 bg-white border-2 border-[#0a0a0a] rounded-full text-xs font-medium text-[#0a0a0a]"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="w-full bg-[#0a0a0a] py-10 px-6 text-center">
        <p className="text-white text-2xl font-bold mb-2">
          Ready to put our equipment to work on your property?
        </p>
        <p className="text-white/70 text-base mb-6">
          Fill out the &ldquo;Request a Quote&rdquo; form or give us a call for immediate assistance!
        </p>
        <a
          href="/contact#quote"
          className="inline-block px-8 py-4 bg-[#C4922A] rounded-full text-black font-bold text-base hover:bg-amber-500 transition-colors"
        >
          Get a Free Quote
        </a>
      </div>
    </>
  );
}