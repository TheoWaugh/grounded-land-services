import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our full range of land clearing and site development services across Central Texas — forestry mulching, land clearing, cedar removal, rock crushing, demolition, and more.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/services",
  },
};

const allServices = [
  {
    title: "Forestry Mulching",
    desc: "Forestry mulching is an advanced, single-step land clearing method that prioritizes both efficiency and ecological health. Using a high-flow mulching head, we grind unwanted vegetation, brush, and trees into a nutrient-rich organic layer spread across the forest floor. No burn piles, no hauling fees — leaving you with a park-like finish immediately ready for use, while preserving root systems of your desirable legacy trees.",
    pros: [
      "Faster and more cost-effective than traditional clearing",
      "Low soil disturbance: preserves topsoil and root systems",
      "Immediate usability — accessible right away",
      "Improved fire risk reduction without open burning",
      "Versatile: right-of-way, pasture restoration, wildfire mitigation",
      "Natural, long-term site improvement",
    ],
        img: "/images/official/forestry-mulching.jpeg",
    imgPosition: "77% center",
    icon: "🌿",
  },
  {
    title: "Land Clearing",
    desc: "Traditional land clearing is about more than just removing trees — it's about unlocking the full potential of your acreage. Our comprehensive clearing process delivers a total site transformation that turns rugged terrain into a manicured, functional landscape. This is the ideal choice for property owners preparing for a home build, expanding usable pasture, or creating a park-like backyard. Results are level, seed-ready, stump-free, debris-free, and instantly mowable.",
    img: "/images/official/land-clearing.jpeg",
    icon: "🏗️",
  },
    {
    title: "Forestry Mulching Cleanup",
    desc: "Take your mulched property from rough terrain to a smooth, finished surface. Forestry mulching is a great first step, but it leaves behind a thick blanket of mulch, exposed stumps, and hidden debris. Grounded Land Services specializes in complete forestry mulching cleanup throughout Central Texas. We clear away excess mulch, leftover stumps, and smooth the underlying soil so your site is ready for planting, seeding, or construction.",
    img: "/images/service-pics/mulching-cleanup-square.jpeg",
    icon: "🧹",
  },
  {
    title: "Cedar Tree Removal",
    desc: "Restore the natural balance and beauty of your land with professional cedar removal. Certain cedar species can become highly invasive, consuming up to 30 gallons of groundwater per day, starving your grass and desirable hardwoods. Our removal process eliminates these thirsty, high-pollen trees to improve pasture health and increase water availability. Dense cedar stands are also a critical wildfire hazard — clearing them creates a safer, more open landscape with enhanced visibility and long-term property value.",
    img: "/images/official/cedar-removal.jpeg",
    icon: "🌲",
  },
  {
    title: "Rock & Cactus Removal",
    desc: "Reclaim your land from two of Texas's most stubborn obstacles. We remove large embedded rocks that make land unusable and clear invasive cactus — including Prickly Pear — that overrun pastures and make property dangerous for livestock, horses, and people. Our equipment handles everything from surface rock clearing to deep root extraction, leaving your land clean, safe, and ready for grazing, development, or recreational use.",
    img: "/images/official/cactus-rock-removal.jpeg",
    icon: "🪨",
  },
  {
    title: "Rock Crushing",
    desc: "Maximize your land's potential while building a safer, more resilient property. Our rock crushing service utilizes high-performance machinery to process onsite stone into high-quality, usable aggregate. By reducing large, hazardous debris into a functional base material, this process saves you the cost of hauling in external materials for driveways and pads — while ensuring your property is structurally sound and professionally prepared for future development.",
    img: "/images/official/rock-crushing.jpeg",
    icon: "⛏️",
  },
  {
    title: "Tree Pile Shredding",
    desc: "Clear away the clutter of past projects without unsightly burn piles or costly hauling fees. Our high-capacity mulching equipment processes large accumulations of downed trees, brush, and woody debris directly on-site. By turning bulky piles into nutrient-rich organic material, we help improve soil health, suppress weed growth, and reduce fire risk — leaving your property clean, level, and ready for its next phase.",
    img: "/images/official/tree-pile-shredding.jpeg",
    icon: "♻️",
  },
  {
    title: "Fence Line Clearing",
    desc: "Establish clear boundaries and protect your investment with our professional fence line clearing service. We remove dense brush, overhanging limbs, and stubborn debris to create a clean, accessible path for new fence installation or maintenance of existing borders. By eliminating encroaching vegetation, we help prevent structural damage to your fencing, improve property visibility, and ensure your perimeter remains secure and easy to navigate for years to come.",
    img: "/images/official/fence-line-clearing.jpeg",
    icon: "🔒",
  },
  {
    title: "Underbrushing",
    desc: "Transform your property's aesthetic and safety with professional underbrushing. This strategic land management technique focuses on clearing out dense thickets, small invasive trees, and tangled vines while leaving your mature canopy completely intact. By removing ladder fuels that allow ground fires to climb into treetops, underbrushing creates a vital fire-resistant buffer and defensible space around your home — resulting in a park-like environment that boosts property value and improves visibility.",
    img: "/images/official/underbrushing.jpeg",
    icon: "🌱",
  },
      {
    title: "Demolition",
    desc: "Tear down old structures and make room for your next project. Grounded Land Services provides residential and commercial demolition throughout Central Texas. From tearing out concrete pads and old driveways to removing outdated buildings, sheds, and pools, we safely haul away debris and restore your terrain so it's ready for new construction or landscaping.",
    img: "/images/work/anderson-pool-demo.jpeg",
    icon: "🏚️",
  },
  {
    title: "Site Preparation",
    desc: "Before the first brick is laid, site preparation transforms raw land into a construction-ready canvas. This essential phase involves precision clearing, debris removal, and expert grading to ensure a level, stable foundation for your future build. We handle every detail so your contractors can hit the ground running.",
    img: "/images/work/IMG_1641.jpeg",
    icon: "📐",
  },
  
  {
    title: "Utility Trenching",
    desc: "Our utility trenching service provides the critical underground pathways needed for water, electrical, gas, and communication lines. We utilize specialized equipment to ensure every trench is excavated to the exact depth and width required by local codes, protecting your vital systems from frost, surface pressure, and future damage. Our focus on site safety and soil stability ensures your utilities are installed correctly the first time.",
    img: "/images/official/utility-trenching.webp",
    icon: "⚡",
  },
  {
    title: "Dirt Work & Grading",
    desc: "This foundational service involves precision grading, leveling, and moving soil to ensure proper drainage and a stable base for any project. It's the invisible work that prevents future structural issues, flooding, and erosion. Whether you need a pad graded, a driveway crowned, or a large acreage leveled, our equipment operators deliver exact results.",
    img: "/images/official/dirt-work.jpeg",
    icon: "🚜",
  },
  {
    title: "Site Cleanup",
    desc: "The final step of any successful project is a thorough, professional site cleanup. We specialize in transforming a cluttered construction area into a pristine, move-in-ready property by removing wood scraps, metal debris, and leftover materials. Our post-build cleanup focuses on restoring the natural grade, leveling tire ruts, and smoothing soil — leaving you with a polished, professional finish ready for landscaping or immediate use.",
    img: "/images/official/site-cleanup.jpeg",
    icon: "✨",
  },
  {
    title: "Retaining Walls",
    desc: "More than just decorative, retaining walls are engineered to hold back soil and manage elevation changes. They prevent erosion and can turn sloped, unusable land into functional, level space ready for its next step. Our walls are built for both function and lasting visual impact.",
    img: "/images/official/retaining-walls.jpeg",
    icon: "🧱",
  },
];

const otherServices = [
  "Rock Removal",
  "Right-of-Way Clearing",
  "Residential Lot Clearing",
  "Fire Breaks",
  "Commercial Lot Clearing",
  "ATV Trail Creation",
  "Tree & Stump Removal",
  "Gravel Driveways & Roads",
  "Debris Removal",
  "Storm Damage Cleanup",
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/images/service-pics/IMG_0628.jpeg"
          alt="Grounded Land Services equipment"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p className="section-label-light mb-2">Grounded Land Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="max-w-3xl">
            <p className="section-label mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-5 leading-tight">
              We Don&apos;t Just Clear Land.<br />We Prepare It for Its Next Chapter.
            </h2>
            <p className="text-[#6e6e73] text-lg leading-relaxed">
              Grounded Land Services is a premier land clearing and site development company dedicated to transforming raw acreage into functional, high-value assets. We provide versatile solutions tailored to your needs and your land&apos;s unique topography, specializing in both Forestry Mulching and Traditional Land Clearing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services list */}
      <section className="px-6 pb-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {allServices.map((service, i) => (
            <ScrollReveal key={service.title} animation={i % 2 === 0 ? "reveal-left" : "reveal-right"}>
              <div
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className={`service-section flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 rounded-3xl overflow-hidden bg-[#f5f5f7]`}
              >
                {/* Image */}
                <div className="relative lg:w-2/5 h-64 lg:h-auto flex-shrink-0 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: service.imgPosition ?? "center" }}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-[#0a0a0a]">{service.title}</h3>
                  </div>
                  <p className="text-[#6e6e73] leading-relaxed mb-5">{service.desc}</p>
                  {service.pros && (
                    <ul className="space-y-2">
                      {service.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-[#1d1d1f]">
                          <svg className="w-4 h-4 text-[#C4922A] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  )}
<div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-sm px-5 py-2.5 rounded-full border border-[#C4922A] text-[#C4922A] font-semibold hover:bg-[#C4922A] hover:text-black transition-colors inline-flex items-center"
                    >
                      Learn More →
                    </Link>
                    <Link href="/contact#quote" className="btn-primary text-sm px-5 py-2.5 inline-flex">
                      Get a Quote for This Service
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="section-label-light mb-3">Additional Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">We Also Handle</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
{otherServices.map((s, i) => (
<ScrollReveal key={s} delay={([0, 100, 200, 300, 400, 500, 0, 100, 200, 300, 400] as const)[i]}>
                <Link
                  href={
                    s === "Demolition & Debris Removal"
                      ? "/services/demolition"
                      : `/services/${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
                  }
                  className="block bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-[#C4922A]/10 hover:border-[#C4922A]/40 transition-colors"
                >
                  <p className="text-white text-sm font-medium">{s}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
