import { ServiceContent } from "./types";
import { cityFacts } from "@/data/city-facts";

export function landClearingContent(city: string, nearby: string[]): ServiceContent {
  const nearbyList = nearby.slice(0, 12);
  const facts = cityFacts[city];

const challengesParagraph = facts
    ? `Land clearing in ${city} presents unique challenges due to ${facts.terrain} found throughout ${facts.county}, along with dense growth of ${facts.trees}, and rapidly growing residential developments near ${facts.nearby}. Every property requires careful planning to preserve desirable trees while removing invasive vegetation and preparing the site for future use.`
    : `Land clearing in ${city} presents unique challenges due to Texas's rocky terrain, dense brush, and rapidly growing residential developments. Every property requires careful planning to preserve desirable trees while removing invasive vegetation and preparing the site for future use.`;
  return {
    title: `Traditional Land Clearing in ${city}, Texas`,
    metaDescription: `Professional traditional land clearing services in ${city}, TX — cedar and brush removal, stump grinding, and construction-ready site prep.`,
    sections: [
      {
        heading: `Professional Traditional Land Clearing Services in ${city}, TX`,
        paragraphs: [
          `[Grounded Land Services](/) provides [professional traditional land clearing](/services/land-clearing) in ${city}, Texas, helping homeowners, ranch owners, developers, and commercial property owners transform overgrown land into clean, usable property. Whether you're preparing a homesite, expanding pasture, developing commercial land, or reclaiming acreage covered in cedar, mesquite, brush, and heavy vegetation, our experienced team has the equipment and expertise to complete the job efficiently and safely.`,
          `Unlike [forestry mulching](/services/forestry-mulching), which leaves root systems and mulch on the ground, traditional land clearing completely removes trees, stumps, brush, rocks, and debris, creating a clean slate for future development. If your project requires foundations, roads, utilities, septic systems, barns, arenas, or finished landscaping, traditional land clearing is often the preferred solution because it prepares the property for construction from the ground up.`,
          `Our goal is simple: deliver land that is cleaner, safer, easier to maintain, and ready for whatever comes next.`,
        ],
        areaMapQuery: `${city}, Texas`,
      },
      {
        heading: "Land Clearing vs. Forestry Mulching",
        paragraphs: [
          `Many ${city} property owners ask whether they should choose traditional land clearing or forestry mulching. Although both services remove unwanted vegetation, they are designed for very different goals. Choosing the right method depends on how you plan to use your property once the work is complete.`,
        ],
        comparison: {
          left: {
            heading: "Traditional Land Clearing",
            list: [
              "Removes trees, brush, stumps, and root systems",
              "Creates a build-ready site",
              "Best for construction and development",
              "Ideal for home sites and commercial projects",
              "Allows grading and excavation to begin",
              "Produces a completely cleared property",
              "Removes heavy vegetation permanently",
            ],
          },
          right: {
            heading: "Forestry Mulching",
            list: [
              "Grinds brush and small trees into mulch",
              "Leaves the existing root systems in place",
              "Best for property maintenance",
              "Ideal for ranches, hunting properties, and recreational land",
              "Minimal ground disturbance",
              "Leaves a natural layer of protective mulch",
              "Excellent for controlling invasive brush",
            ],
          },
        },
        compareSlider: {
          beforeSrc: "/images/service-pics/traditional-land-clearing.jpeg",
          beforeLabel: "Traditional Land Clearing",
          afterSrc: "/images/service-pics/fine-mulch.jpeg",
          afterLabel: "Forestry Mulching",
        },
        closingParagraphs: [
          "Our team can evaluate your property and recommend the best approach — or combine both methods to maximize results.",
        ],
      },
      {
        heading: "Why Choose Traditional Land Clearing?",
        paragraphs: [
          "Traditional land clearing is the best choice when a property needs to be completely transformed rather than selectively managed. While forestry mulching is an excellent option for vegetation management, traditional clearing permanently removes unwanted vegetation and obstacles, allowing property owners to maximize the usable space on their land.",
          "Traditional land clearing is ideal for:",
        ],
        list: [
          "New home construction", "Barndominium sites", "Commercial developments",
          "Ranch improvements", "Pasture conversions", "Driveway construction",
          "Utility installation", "Septic system installation", "Building pads",
          "Agricultural development", "Recreational properties", "Property restoration",
        ],
      },
      
      {
        heading: `${city}'s Unique Land Clearing Challenges`,
        paragraphs: [
          challengesParagraph,
          `Grounded Land Services has experience working throughout the greater ${city} area, including rural acreage, residential lots, ranches, commercial developments, and recreational properties. We understand local terrain, drainage concerns, and the importance of protecting valuable native hardwoods while creating functional, build-ready land.`,
        ],
      },
      {
        heading: "Benefits of Professional Land Clearing",
        paragraphs: [
          "Professional land clearing provides far more than improved appearance. Properly cleared property can significantly increase usability, safety, and long-term value.",
        ],
        list: [
          "Increased property value", "More usable acreage", "Improved accessibility",
          "Reduced wildfire risk", "Better drainage", "Healthier native vegetation",
          "Improved livestock grazing", "Easier property maintenance",
          "Enhanced curb appeal", "Construction-ready building sites",
        ],
      },
      {
        heading: `Why ${city} Property Owners Choose Grounded Land Services`,
        paragraphs: [
          "Grounded Land Services is committed to delivering exceptional workmanship, honest communication, and reliable service on every project. We understand that no two properties are alike, which is why every land clearing project begins with a detailed evaluation of your goals, terrain, vegetation, and future plans.",
          "Our experienced operators use professional-grade equipment capable of efficiently removing trees, brush, stumps, rocks, and debris while minimizing unnecessary disturbance to the surrounding landscape. We take pride in leaving properties clean, organized, and ready for the next phase of development.",
        ],
      },
{
        heading: "Our Traditional Land Clearing Process",
        steps: [
          {
            title: "Free On-Site Consultation",
            description: "We evaluate your property, discuss your goals, and create a land clearing plan tailored to your project.",
          },
          {
            title: "Land Clearing",
            description: "We remove unwanted trees, brush, stumps, rocks, and debris while protecting valuable vegetation whenever possible.",
          },
          {
            title: "Final Walkthrough",
            description: "We review the completed work to ensure your property is ready for the next phase.",
          },
        ],
        loopingVideo: {
          videoId: "BRUpzEYxYFg",
          caption: "Land clearing process in action",
        },
      },
{
        heading: `Areas We Serve Around ${city}`,
        paragraphs: [`Grounded Land Services proudly provides traditional land clearing throughout the greater ${city} area, including:`],
        list: nearbyList,
        areasServed: true,
      },
      {
        heading: "Related Services",
        relatedServices: [
          { label: "Forestry Mulching", href: "/services/forestry-mulching" },
          { label: "Forestry Mulching Cleanup", href: "/services/forestry-mulching-cleanup" },
          { label: "Cedar Tree Removal", href: "/services/cedar-tree-removal" },
          { label: "Rock & Cactus Removal", href: "/services/rock-cactus-removal" },
          { label: "Rock Crushing", href: "/services/rock-crushing" },
          { label: "Demolition", href: "/services/demolition" },
          { label: "Site Preparation", href: "/services/site-preparation" },
          { label: "Underbrushing", href: "/services/underbrushing" },
          { label: "Fence Line Clearing", href: "/services/fence-line-clearing" },
          { label: "Residential Lot Clearing", href: "/services/residential-lot-clearing" },
          { label: "Commercial Lot Clearing", href: "/services/commercial-lot-clearing" },
        ],
      },
    ],
  };
}