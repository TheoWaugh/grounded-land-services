import { ServiceContent } from "./types";
import { cityFacts } from "@/data/city-facts";

export function demolitionContent(city: string, nearby: string[]): ServiceContent {
  const nearbyList = nearby.slice(0, 12);
  const facts = cityFacts[city];

const challengesIntro = facts
    ? `Demolition projects in ${city} require more than heavy equipment. The area's ${facts.terrain}, mature stands of ${facts.trees}, densely developed neighborhoods, and rapidly expanding communities near ${facts.nearby} require careful planning before any structure is removed, especially throughout ${facts.county}.`
    : `Demolition projects in ${city} require more than heavy equipment. The area's rocky limestone terrain, mature trees, densely developed neighborhoods, and rapidly expanding communities require careful planning before any structure is removed.`;

  return {
    title: `Demolition in ${city}, Texas`,
    metaDescription: `Professional demolition services in ${city}, TX — safe removal of homes, structures, concrete, and foundations to prepare your site for what's next.`,
    sections: [
      {
        heading: `Professional Demolition Services in ${city}, TX`,
        paragraphs: [
          `Grounded Land Services provides professional demolition services in ${city}, Texas, helping homeowners, ranch owners, developers, and commercial property owners safely remove unwanted structures and prepare properties for their next phase of development. Whether you're tearing down an aging home, removing a barn, demolishing a concrete slab, clearing an abandoned mobile home, or preparing a site for new construction, our experienced team has the equipment and expertise to complete your project safely and efficiently.`,
          `Every demolition project begins with careful planning. We evaluate the structure, surrounding property, utilities, and future goals to ensure the demolition is completed safely while minimizing unnecessary disturbance to the site. Once demolition is complete, we remove debris, grade the area if needed, and leave your property clean and ready for whatever comes next.`,
          `Whether you're preparing for new construction, reclaiming unused land, or removing unsafe structures, Grounded Land Services provides dependable demolition solutions throughout ${city} and the surrounding Central Texas region.`,
        ],
      },
      {
        heading: "Why Property Owners Choose Professional Demolition",
        paragraphs: [
          "Demolition is much more than simply tearing down a structure. A properly planned demolition project improves safety, increases usable property space, and creates a clean foundation for future development.",
        ],
        listIntro: "Professional demolition helps property owners:",
        list: [
          "Remove unsafe or deteriorating buildings", "Eliminate abandoned structures",
          "Prepare land for new construction", "Remove concrete slabs and foundations",
          "Increase usable property space", "Improve property appearance",
          "Reduce liability and safety hazards", "Prepare sites for utility installation",
          "Improve property value", "Simplify future development projects",
        ],
      },
      {
        heading: "Residential vs. Commercial Demolition",
        paragraphs: [
          "Not every demolition project requires the same approach. The size of the structure, surrounding utilities, accessibility, and future plans all influence how the project is completed.",
        ],
        comparison: {
          left: {
            heading: "Residential Demolition",
            listIntro: "Residential demolition is commonly used for:",
            list: [
              "Houses", "Mobile homes", "Garages", "Barns", "Workshops",
              "Storage buildings", "Sheds", "Concrete patios", "Swimming pools", "Driveways",
            ],
          },
          right: {
            heading: "Commercial Demolition",
            listIntro: "Commercial demolition often includes:",
            list: [
              "Office buildings", "Warehouses", "Agricultural facilities",
              "Industrial structures", "Retail buildings", "Concrete parking lots",
              "Equipment pads", "Large foundations",
            ],
          },
        },
      },
      {
        heading: `${city}'s Unique Demolition Challenges`,
        paragraphs: [
          challengesIntro,
          "Many properties also contain aging foundations, underground utilities, septic systems, wells, and buried debris that must be considered throughout the demolition process. Every project begins with a detailed evaluation to help prevent unnecessary delays and ensure the site is safely prepared for future construction.",
          `Whether you're demolishing a home in ${city}, removing ranch structures, or clearing commercial property for redevelopment, professional demolition helps create a clean, safe, and construction-ready site.`,
        ],
      },
      {
        heading: `Why ${city} Properties Benefit from Professional Demolition`,
        paragraphs: [
          "Professional demolition provides more than simply removing unwanted structures. It creates opportunities for redevelopment while improving the overall safety and functionality of your property.",
        ],
        listIntro: `Demolition helps ${city} property owners:`,
        list: [
          "Prepare land for new homes", "Remove unsafe buildings", "Eliminate aging concrete",
          "Improve property accessibility", "Increase usable acreage", "Create build-ready sites",
          "Reduce long-term maintenance", "Improve property appearance", "Increase overall property value",
        ],
      },
      {
        heading: `Why ${city} Property Owners Trust Grounded Land Services`,
        paragraphs: [
          "Grounded Land Services understands that demolition is often the first step toward a much larger project. That's why we approach every demolition with professionalism, careful planning, and attention to detail.",
          "Our experienced operators use professional-grade equipment to safely remove structures, foundations, concrete, and debris while protecting the surrounding property whenever possible. We focus on maintaining a clean worksite, communicating throughout the project, and completing every job efficiently.",
          "Whether you're removing a single structure or clearing multiple buildings across a large property, our goal remains the same: deliver safe demolition services that prepare your land for its next chapter.",
        ],
      },
{
        heading: "Our Demolition Process",
        paragraphs: [
          "Every demolition project begins with careful planning to ensure the structure is removed safely, efficiently, and with minimal impact on the surrounding property. Before any equipment arrives on-site, we evaluate the structure, identify potential hazards, locate underground utilities when required, and develop a demolition plan based on your property's unique conditions.",
        ],
        steps: [
          {
            title: "On-Site Consultation & Planning",
            description: "We walk the property, discuss your goals, evaluate access points, and determine the safest demolition approach.",
          },
          {
            title: "Utility Verification",
            description: "Utilities are verified and disconnected as required before demolition begins.",
          },
          {
            title: "Controlled Demolition",
            description: "Using professional-grade equipment, we systematically remove the structure while minimizing unnecessary disturbance to the surrounding area.",
          },
          {
            title: "Debris Removal & Recycling",
            description: "Concrete, metal, wood, and other materials are separated whenever practical for recycling or responsible disposal.",
          },
          {
            title: "Site Grading & Cleanup",
            description: "Once demolition is complete, we grade the area, remove remaining debris, and leave your property clean and ready for the next phase of development.",
          },
        ],
      },
      {
        paragraphs: [
          "Our goal isn't simply to tear something down — it's to leave you with a property that's ready to move forward.",
        ],
      },
      {
        heading: "Common Reasons Property Owners Choose Demolition",
        paragraphs: [
          "No two demolition projects are alike, but most property owners choose demolition because an existing structure has become unsafe, outdated, or no longer serves its intended purpose.",
        ],
        listIntro: "Common reasons include:",
        list: [
          "Aging homes beyond economical repair", "Fire or storm damage", "Unsafe foundations",
          "Structural failure", "Abandoned buildings", "Property redevelopment",
          "Commercial expansion", "Pool removal", "Concrete deterioration", "Large-scale renovations",
        ],
      },
      {
        paragraphs: [
          "One increasingly common reason for demolition — particularly with older swimming pools — is concrete deterioration, often referred to as concrete cancer.",
          "As reinforcing steel inside concrete begins to corrode, it expands, causing the surrounding concrete to crack, spall, and weaken over time. Once structural deterioration becomes severe, repairs can become extremely costly and may not restore the long-term integrity of the pool. In many cases, complete demolition and removal becomes the most practical and cost-effective solution.",
          "Removing an aging or damaged pool also creates an opportunity to reclaim valuable backyard space for outdoor living areas, patios, landscaping, additional lawn space, or even a new spa or hot tub.",
        ],
      },
      {
        heading: "What Happens After Demolition?",
        paragraphs: [
          "For many contractors, demolition is where the job ends. For Grounded Land Services, it's often where the transformation begins.",
          "Because we specialize in complete land development and site preparation, we can often handle the next phase of your project without requiring you to hire multiple contractors.",
        ],
        listIntro: "After demolition, we can assist with:",
        list: [
          "Complete site cleanup", "Debris removal", "Concrete and foundation removal",
          "Backfilling and compaction", "Rough and finish grading", "Land clearing",
          "Forestry mulching", "Rock removal", "Rock crushing", "Building pad preparation",
          "Driveway construction", "Drainage improvements",
          "Final site preparation for construction", "Seeding and erosion control",
        ],
      },
      {
        heading: `Common Demolition Projects We Complete`,
        listIntro: `Grounded Land Services provides demolition services for a wide variety of residential, agricultural, and commercial projects throughout ${city}, including:`,
        list: [
          "House demolition", "Barn demolition", "Mobile home demolition", "Shed demolition",
          "Garage demolition", "Concrete slab removal", "Foundation removal",
          "Swimming pool demolition", "Asphalt removal", "Driveway removal",
          "Commercial building demolition", "Agricultural building demolition",
          "Site cleanup", "Debris removal", "Construction site preparation",
        ],
      },
{
        heading: `Serving ${city} and the Surrounding Communities`,
        paragraphs: [`Grounded Land Services proudly provides professional demolition services throughout ${city} and nearby communities, including:`],
        list: nearbyList,
        areasServed: true,
      },
    ],
  };
}