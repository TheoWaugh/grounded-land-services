import Image from "next/image";
import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import RichText from "../components/RichText";

export const metadata: Metadata = {
  title: "Our Equipment",
  description: "The equipment behind every Grounded Land Services project — CAT excavators, land management compact track loaders, and a full attachment lineup built to handle Central Texas terrain.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/equipment",
  },
};

interface UsedFor {
  label: string;
  href?: string;
}

interface EquipmentItem {
  id?: string;
  name: string;
  category: string;
  icon: string;
  image: string;
  imagePosition?: string;
  description: string;
  specs: { label: string; value: string }[];
  usedFor: UsedFor[];
}

const baseMachines: EquipmentItem[] = [
  {
          
    name: "2025 CAT 323 Excavator",
    category: "Excavator",
    icon: "🚜",
    image: "/images/service-pics/cat-323-pic.jpeg",
    description:
      "Our 2025 CAT 323 is a mid-size hydraulic excavator built for demanding land clearing, excavation, and site preparation work. With an operating weight of roughly 56,000 lbs and a powerful C7.1 engine, it runs a wide range of attachments and handles everything from stump and root removal to grading, trenching, and demolition across rugged Central Texas terrain.",
    specs: [
      { label: "Operating Weight", value: "55,100 lbs" },
      { label: "Horsepower", value: "172 hp" },
      { label: "Hydraulic Flow", value: "Up to 113 GPM" },
      { label: "Max Dig Depth", value: "22.1 ft" },
    ],
    usedFor: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Cedar Tree Removal", href: "/services/cedar-tree-removal" },
      { label: "Rock Removal", href: "/services/rock-removal" },
      { label: "Site Preparation", href: "/services/site-preparation" },
      { label: "Utility Trenching", href: "/services/utility-trenching" },
      { label: "Dirt Work & Grading", href: "/services/dirt-work-grading" },
      { label: "Retaining Walls", href: "/services/retaining-walls" },
      { label: "Right-of-Way Clearing", href: "/services/right-of-way-clearing" },
      { label: "Residential Lot Clearing", href: "/services/residential-lot-clearing" },
      { label: "Fire Breaks", href: "/services/fire-breaks" },
      { label: "Commercial Lot Clearing", href: "/services/commercial-lot-clearing" },
      { label: "Tree & Stump Removal", href: "/services/tree-stump-removal" },
      { label: "Demolition & Debris Removal", href: "/services/demolition" },
      { label: "Storm Damage Cleanup", href: "/services/storm-damage-cleanup" },
      { label: "Forestry Mulching Cleanup", href: "/services/forestry-mulching-cleanup" },
    ],
  },
  {
        name: "2026 CAT 275 XE Land Management",
    category: "Compact Track Loader",
    icon: "🌲",
    image: "/images/service-pics/IMG_2509.jpeg",
    description:
      "Our largest land-management platform, the 2026 CAT 275 XE is purpose-built for high-production vegetation and land-management work. Its XE high-flow hydraulic system delivers up to 40 GPM and 134 horsepower, providing the hydraulic power needed to run our specialized attachment lineup. With the capability to run numerous high-flow attachments, the 275 XE can be configured for [forestry mulching](/services/forestry-mulching), [land clearing](/services/land-clearing), [rock crushing](/services/rock-crushing), and more. Its combination of power, stability, and attachment versatility allows us to match the machine to the demands of each project.",
    specs: [
      { label: "Horsepower", value: "134 hp" },
      { label: "Hydraulic Flow", value: "40 GPM" },
      { label: "Hydraulic Pressure", value: "4,496 psi" },
      { label: "Rated Operating Capacity", value: "4,484 lbs" },
    ],
    usedFor: [{ label: "Versatile Enough for Our Full Range of Services", href: "/services" }],
  },
  {
        name: "2020 CAT 299 D3 XE Land Management",
    category: "Compact Track Loader",
    icon: "🌳",
    image: "/images/service-pics/cat-299-pic.jpeg",
    description:
      "The 2020 CAT 299 D3 XE, is built specifically for demanding vegetation management work. Its high-flow, high-pressure XE hydraulic system delivers a calculated hydraulic power rating of 94 hp, giving it the muscle to run our full attachment lineup across the densest cedar stands and largest acreage projects.",
    specs: [
      { label: "Horsepower", value: "110 hp" },
      { label: "Hydraulic Flow", value: "40 GPM" },
      { label: "Hydraulic Pressure", value: "4,061" },
      { label: "Rated Operating Capacity", value: "4,340" },
    ],
    usedFor: [{ label: "Versatile Enough for Our Full Range of Services", href: "/services" }],
  },
];

const attachments: EquipmentItem[] = [
    {
    id: "prinoth",
    name: "2025 Prinoth M450s-1900 Mulching Head",
    category: "Forestry Mulcher Attachment",
    icon: "⚙️",
    image: "/images/service-pics/cat-275-pic.jpeg",
    description:
      "Runs on our CAT 275 XE and CAT 299D3 XE platforms. The Prinoth M450S-1900 is a premium forestry mulching head built for demanding vegetation management. Its 74.8-inch cutting width, BCS rotor with 40 cutting tools, and heavy-duty hydraulic system deliver efficient processing and a consistent mulch finish through dense cedar, brush, and small trees. We chose the M450S for its combination of cutting performance, durability, and efficiency in the dense vegetation found throughout Central Texas. Paired with our 134-hp CAT 275 XE and its 40 GPM high-flow hydraulics, the M450S operates within its recommended range and gives us the power and productivity needed for demanding forestry mulching projects.",
    specs: [
      { label: "Working Width", value: "74.8 in" },
      { label: "Power Range", value: "80–150 hp" },
      { label: "Hydraulic Flow", value: "26–52.8 GPM" },
      { label: "Cutting Teeth", value: "40" },
    ],
    usedFor: [
      { label: "Forestry Mulching", href: "/services/forestry-mulching" },
      { label: "Underbrushing", href: "/services/underbrushing" },
      { label: "Cedar Tree Removal", href: "/services/cedar-tree-removal" },
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Tree Pile Shredding", href: "/services/tree-pile-shredding" },
      { label: "Fence Line Clearing", href: "/services/fence-line-clearing" },
      { label: "Right-of-Way Clearing", href: "/services/right-of-way-clearing" },
      { label: "Fire Breaks", href: "/services/fire-breaks" },
      { label: "Residential Lot Clearing", href: "/services/residential-lot-clearing" },
      { label: "ATV Trail Creation", href: "/services/atv-trail-creation" },
      { label: "Forestry Mulching Cleanup", href: "/services/forestry-mulching-cleanup" },
    ],
  },
    {
    id: "harley-rake",
    name: "2025 Bobcat 84\" Soil Conditioner (Harley Rake)",
    category: "High-Flow Attachment",
    icon: "🪨",
    image: "/images/work/harley-rake-pic.jpeg",
    imagePosition: "center 70%",
    description:
      "Runs on our CAT 275 XE and CAT 299D3 XE platforms. Our 84-inch high-flow Harley rake is a finishing attachment designed to transform rough, disturbed ground into a clean, smooth, usable surface. It conditions and levels soil while collecting leftover debris, roots, rocks, and surface material that remain after clearing, excavation, or construction. We use the Harley rake when a project needs more than simply clearing the property. Its ability to rake, condition, level, and collect surface debris allows us to leave behind a clean, seed-ready and zero-turn-ready finish that's ideal for lawns, homesites, pastures, driveways, and other areas where a smooth, finished surface matters.",
    specs: [
      { label: "Working Width", value: "84 in" },
      { label: "Type", value: "High-Flow Soil Conditioner" },
    ],
    usedFor: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Rock & Cactus Removal", href: "/services/rock-cactus-removal" },
      { label: "Site Preparation", href: "/services/site-preparation" },
      { label: "Dirt Work & Grading", href: "/services/dirt-work-grading" },
      { label: "Site Cleanup", href: "/services/site-cleanup" },
      { label: "Rock Removal", href: "/services/rock-removal" },
      { label: "Residential Lot Clearing", href: "/services/residential-lot-clearing" },
      { label: "Gravel Driveways & Roads", href: "/services/gravel-driveways-roads" },
      { label: "Demolition & Debris Removal", href: "/services/demolition" },
      { label: "Storm Damage Cleanup", href: "/services/storm-damage-cleanup" },
      { label: "Forestry Mulching Cleanup", href: "/services/forestry-mulching-cleanup" },
    ],
  },
  {
    name: "CAT Curved Tine Industrial Grapple Rake",
    category: "Grapple Attachment",
    icon: "🦾",
    image: "/images/work/275-pic-equipment.jpeg",
    imagePosition: "center 60%",
    description:
      "Runs on our CAT 275 and 299 platforms. This curved tine industrial grapple rake handles heavy debris, brush, and root balls, making it a key tool for cleanup and material handling after clearing.",
    specs: [
      { label: "Working Width", value: "84 in (2,136 mm)" },
      { label: "Type", value: "Curved Tine Grapple Rake" },
    ],
    usedFor: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Cedar Tree Removal", href: "/services/cedar-tree-removal" },
      { label: "Rock & Cactus Removal", href: "/services/rock-cactus-removal" },
      { label: "Rock Removal", href: "/services/rock-removal" },
      { label: "Residential Lot Clearing", href: "/services/residential-lot-clearing" },
      { label: "Tree & Stump Removal", href: "/services/tree-stump-removal" },
      { label: "Demolition & Debris Removal", href: "/services/demolition" },
      { label: "Storm Damage Cleanup", href: "/services/storm-damage-cleanup" },
      { label: "Forestry Mulching Cleanup", href: "/services/forestry-mulching-cleanup" },
      { label: "Site Preparation", href: "/services/site-preparation" },
    ],
  },
  {
    name: "CAT Industrial Grapple",
    category: "Grapple Bucket Attachment",
    icon: "🪣",
    image: "/images/service-pics/grapple-bucket-pic.jpeg",
    imagePosition: "center 65%",
    description:
      "Runs on our CAT 275 and 299 platforms. This 86-inch bucket with bolt-on teeth is built for heavier digging and material handling tasks during land clearing, site prep, and cleanup work.",
    specs: [
      { label: "Working Width", value: "86 in (2,198 mm)" },
      { label: "Type", value: "Bolt-On Teeth Bucket" },
    ],
    usedFor: [
      { label: "Land Clearing", href: "/services/land-clearing" },
      { label: "Cedar Tree Removal", href: "/services/cedar-tree-removal" },
      { label: "Site Preparation", href: "/services/site-preparation" },
      { label: "Site Cleanup", href: "/services/site-cleanup" },
      { label: "Residential Lot Clearing", href: "/services/residential-lot-clearing" },
      { label: "Tree & Stump Removal", href: "/services/tree-stump-removal" },
      { label: "Demolition & Debris Removal", href: "/services/demolition" },
      { label: "Storm Damage Cleanup", href: "/services/storm-damage-cleanup" },
      { label: "Forestry Mulching Cleanup", href: "/services/forestry-mulching-cleanup" },
    ],
  },
  {
    name: "Standard Buckets (86\")",
    category: "Bucket Attachment",
    icon: "🪨",
    image: "/images/service-pics/bucket-pic.jpeg",
    imagePosition: "center 65%",
    description:
      "Runs on our CAT 275 and 299 platforms. These standard 86-inch rock and smooth buckets round out our lineup for grading, material handling, and finish work across every project type.",
    specs: [
      { label: "Working Width", value: "86 in" },
      { label: "Type", value: "Rock & Smooth Buckets" },
    ],
    usedFor: [
      { label: "Rock & Cactus Removal", href: "/services/rock-cactus-removal" },
      { label: "Site Preparation", href: "/services/site-preparation" },
      { label: "Dirt Work & Grading", href: "/services/dirt-work-grading" },
      { label: "Site Cleanup", href: "/services/site-cleanup" },
      { label: "Rock Removal", href: "/services/rock-removal" },
      { label: "Tree & Stump Removal", href: "/services/tree-stump-removal" },
      { label: "Gravel Driveways & Roads", href: "/services/gravel-driveways-roads" },
      { label: "Demolition & Debris Removal", href: "/services/demolition" },
    ],
  },
];

function EquipmentCard({ item, index }: { item: EquipmentItem; index: number }) {
  return (
    <div id={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-2 border-[#0a0a0a] rounded-3xl overflow-hidden scroll-mt-24">
      <div className={`relative w-full aspect-[4/3] ${index % 2 === 1 ? "md:order-2" : ""}`}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          style={{ objectPosition: item.imagePosition ?? "center" }}
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
            <h3 className="text-2xl font-bold text-[#0a0a0a]">{item.name}</h3>
          </div>
        </div>
        <p className="text-[#3a3a3c] leading-relaxed text-sm mb-5"><RichText text={item.description} /></p>
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
        <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Used For</p>
        <div className="flex flex-wrap gap-2">
          {item.usedFor.map((use) =>
            use.href ? (
              <a
                key={use.label}
                href={use.href}
                className="px-3 py-1.5 bg-white border-2 border-[#0a0a0a] rounded-full text-xs font-medium text-[#0a0a0a] hover:bg-[#f5f5f5] transition-colors"
              >
                {use.label}
              </a>
            ) : (
              <span
                key={use.label}
                className="px-3 py-1.5 bg-white border-2 border-[#0a0a0a] rounded-full text-xs font-medium text-[#0a0a0a]"
              >
                {use.label}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

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
              Every project starts with the right machine for the job. Grounded Land Services operates a fleet of CAT excavators and land management compact track loaders, paired with a full attachment lineup, giving us the power and precision to handle every service we offer across the Texas Hill Country and Central Texas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Base Machines */}
      <section className="pb-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#D4A840] to-[#C4922A] rounded-full inline-block" />
            Base Machines
          </h2>
          <div className="space-y-12">
            {baseMachines.map((item, i) => (
              <ScrollReveal key={item.name} delay={([0, 100, 200] as const)[i]}>
                <EquipmentCard item={item} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Attachments */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-8 flex items-center gap-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#D4A840] to-[#C4922A] rounded-full inline-block" />
            Attachments
          </h2>
          <div className="space-y-12">
            {attachments.map((item, i) => (
              <ScrollReveal key={item.name} delay={([0, 100, 200, 300, 400] as const)[i]}>
                <EquipmentCard item={item} index={i} />
              </ScrollReveal>
            ))}
          </div>
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