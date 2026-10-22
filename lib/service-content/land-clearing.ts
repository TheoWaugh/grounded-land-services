import { ServiceContent, ServiceSection } from "./types";
import { cityFacts } from "@/data/city-facts";
import { servicePricing } from "@/data/service-pricing";
import { landClearingCostFactors } from "@/data/land-clearing-cost-factors";
import { bertramSentence } from "@/lib/bertram-distance";
import { FLEET, invasiveSentence, whyUsProof } from "./shared";

// Answer-first layout: opening answer → video → cost → how long + process → local conditions →
// why us → land clearing vs. mulching → benefits → areas → related.
export function landClearingContent(city: string, nearby: string[]): ServiceContent {
  const nearbyList = nearby.slice(0, 12);
  const facts = cityFacts[city];

const soilContext = facts?.soil
  ? ` The area's ${facts.soil} plays a major role in how vegetation grows and how ground equipment performs on-site.`
  : "";
const groundContext = facts?.groundConditions
  ? ` Ground conditions vary across the property, with ${facts.groundConditions} throughout the area.`
  : "";

const challengesParagraph = facts
    ? `Land clearing in ${city} presents unique challenges due to ${facts.terrain} found throughout ${facts.county}, along with dense growth of ${facts.trees}, and rapidly growing residential developments near ${facts.nearby}.${soilContext}${groundContext} Every property requires careful planning to preserve desirable trees while removing invasive vegetation and preparing the site for future use.`
    : `Land clearing in ${city} presents unique challenges due to Texas's rocky terrain, dense brush, and rapidly growing residential developments. Every property requires careful planning to preserve desirable trees while removing invasive vegetation and preparing the site for future use.`;

  const videos = {
    videoIds: ["aSRb_PbjbIE", "W1AeIo_miIA"],
    captions: ["Land clearing in action", "Completed land clearing project"],
  };

  const comparison: ServiceSection["comparison"] = {
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
  };
  const compareSlider = {
    beforeSrc: "/images/service-pics/traditional-land-clearing.jpeg",
    beforeLabel: "Traditional Land Clearing",
    afterSrc: "/images/service-pics/fine-mulch.jpeg",
    afterLabel: "Forestry Mulching",
  };
  const vsHeading = "Should I choose land clearing or forestry mulching?";
  const vsAnswer = "Choose traditional land clearing when you need bare, stump-free ground for a home, driveway, building pad, or septic system. Choose [forestry mulching](/services/forestry-mulching) when you want to keep the good trees, skip the burn piles and hauling, and leave a layer of mulch that protects the soil.";
  const vsClosing = "Our team can evaluate your property and recommend the best approach — or combine both methods to maximize results.";

  const challenges: ServiceSection = {
    heading: `${city}'s Unique Land Clearing Challenges`,
    paragraphs: [
      challengesParagraph,
      `Grounded Land Services has experience working throughout the greater ${city} area, including rural acreage, residential lots, ranches, commercial developments, and recreational properties. We understand local terrain, drainage concerns, and the importance of protecting valuable native hardwoods while creating functional, build-ready land.`,
    ],
    areaMapQuery: `${city}, Texas`,
  };
  const benefits: ServiceSection = {
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
  };
  const whyUsParagraphs = [
    "Grounded Land Services is committed to delivering exceptional workmanship, honest communication, and reliable service on every project. We understand that no two properties are alike, which is why every land clearing project begins with a detailed evaluation of your goals, terrain, vegetation, and future plans.",
    "Our experienced operators use professional-grade equipment capable of efficiently removing trees, brush, stumps, rocks, and debris while minimizing unnecessary disturbance to the surrounding landscape. We take pride in leaving properties clean, organized, and ready for the next phase of development.",
  ];
  const process: ServiceSection = {
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
  };
  const areas: ServiceSection = {
    heading: `Areas We Serve Around ${city}`,
    paragraphs: [`Grounded Land Services proudly provides traditional land clearing throughout the greater ${city} area, including:`],
    list: nearbyList,
    areasServed: true,
  };
  const related: ServiceSection = {
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
  };

  const title = `Traditional Land Clearing in ${city}, Texas`;
  const metaDescription = `Professional traditional land clearing services in ${city}, TX — cedar and brush removal, stump grinding, and construction-ready site prep.`;

  const price = servicePricing["land-clearing"];
  const proof = whyUsProof(city, `We've completed 100+ projects and work with ${FLEET} for stumps, brush, and debris. [See our equipment](/equipment).`);

  return {
    title,
    metaDescription,
    sections: [
      {
        heading: `Professional Traditional Land Clearing Services in ${city}, TX`,
        paragraphs: [
          `[Grounded Land Services](/) provides [traditional land clearing](/services/land-clearing) in ${city} for ${price.range} ${price.unit}, removing trees, stumps, brush, and debris to leave a clean, build-ready site. With our excavator we typically clear 4–7 acres a day, depending on how thick the brush is and the terrain. ${bertramSentence(city)}`,
        ],
        videoCarousel: videos,
      },
      {
        // Becomes "How much does land clearing cost in {city}?" (lib/quick-answers.ts)
        heading: "Land Clearing Cost Factors",
        iconCards: landClearingCostFactors,
        iconCardsColumns: 4,
      },
      process, // Becomes "How long does land clearing take in {city}, and what's the process?"
      facts?.invasiveVegetation
        ? { ...challenges, paragraphs: [...(challenges.paragraphs ?? []), invasiveSentence(city, facts.invasiveVegetation)] }
        : challenges,
      {
        heading: `Why ${city} Property Owners Choose Grounded Land Services`,
        ...proof,
        paragraphs: [...whyUsParagraphs, ...proof.paragraphs],
      },
      {
        heading: vsHeading,
        paragraphs: [vsAnswer],
        comparison,
        compareSlider,
        closingParagraphs: [vsClosing],
      },
      benefits,
      areas,
      related,
    ],
  };
}
