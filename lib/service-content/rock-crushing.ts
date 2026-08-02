import { ServiceContent } from "./types";
import { cityFacts } from "@/data/city-facts";

export function rockCrushingContent(city: string, nearby: string[]): ServiceContent {
  const nearbyList = nearby.slice(0, 12);
  const facts = cityFacts[city];

const challengesIntro = facts
    ? `${city} sits on ${facts.terrain} within ${facts.county}. Many properties near ${facts.nearby} contain exposed bedrock, surface rock, and large outcroppings that can complicate construction, limit usable land, and increase development costs.`
    : `${city} and the surrounding Texas Hill Country are built on limestone formations that create unique challenges for landowners and developers. Many properties contain exposed bedrock, surface limestone, and large rock outcroppings that can complicate construction, limit usable land, and increase development costs.`;

  return {
    title: `Rock Crushing in ${city}, Texas`,
    metaDescription: `Professional mobile rock crushing services in ${city}, TX — turn on-site limestone into usable aggregate for roads, driveways, and building pads.`,
    sections: [
      {
        heading: `Professional Rock Crushing Services in ${city}, TX`,
        paragraphs: [
          `Grounded Land Services provides professional rock crushing services in ${city}, Texas, helping homeowners, ranch owners, developers, and commercial property owners transform unusable rock into valuable material for future projects. Whether you're clearing a construction site, reclaiming agricultural land, building roads, preparing a homesite, or improving ranch infrastructure, our mobile rock crushing services eliminate the need to haul large quantities of rock off your property.`,
          `Instead of paying to remove natural limestone and imported materials, we crush rock directly on-site into reusable aggregate that can be used for driveways, private roads, parking areas, building pads, erosion control, and other construction projects. This efficient process reduces hauling costs, minimizes waste, and creates valuable material from resources already found on your property.`,
          `Every property presents different challenges, which is why we evaluate each project individually to determine the most efficient and cost-effective rock crushing solution for your land.`,
        ],
        areaMapQuery: `${city}, Texas`,
      },
      {
        heading: "Why Property Owners Choose Rock Crushing",
        paragraphs: [
          "Central Texas is known for its rocky terrain, and many properties contain large amounts of limestone that can make development difficult. Rather than viewing rock as an obstacle, mobile rock crushing turns it into a valuable resource that can be reused throughout the property.",
        ],
        listIntro: "Rock crushing offers several advantages, including:",
        list: [
          "Reduce expensive hauling and disposal costs", "Produce reusable crushed stone on-site",
          "Build durable ranch roads and driveways", "Create stable building pads",
          "Improve drainage and erosion control", "Reduce imported material costs",
          "Increase usable property space", "Prepare sites for future construction",
          "Recycle existing natural resources", "Improve overall property value",
        ],
      },
{
        heading: "Rock Crushing vs. Hauling Rock Away",
        paragraphs: [
          "One of the biggest decisions property owners face is whether to haul unwanted rock off the property or crush it for reuse.",
        ],
        comparison: {
          left: {
            heading: "Rock Crushing",
            paragraphs: [
              "Mobile rock crushing processes existing limestone and natural stone directly on-site into usable aggregate. Instead of paying for trucking and disposal, the material becomes a valuable asset that can be used throughout the property.",
            ],
            listIntro: "Rock crushing is ideal for:",
            list: [
              "Ranch roads", "Gravel driveways", "Building pads", "Parking areas",
              "Culvert backfill", "Drainage improvements", "Road base",
              "Site preparation", "Large acreage developments", "Commercial projects",
            ],
          },
          right: {
            heading: "Rock Removal",
            paragraphs: [
              "Rock removal involves excavating and hauling stone away from the property. This option is often necessary when rock cannot be reused or when excavation must reach a specific depth for utilities, foundations, or septic systems.",
              `Many ${city}-area projects benefit from combining both services. Large rocks can be excavated, crushed into usable aggregate, and immediately reused elsewhere on the property, reducing waste and lowering construction costs.`,
            ],
          },
        },
      },
      {
        heading: `${city}'s Unique Rock Challenges`,
        paragraphs: [
          challengesIntro,
          "Excavating and hauling this material away is often one of the most expensive parts of a site development project. Mobile rock crushing provides a more efficient solution by converting excavated rock into reusable aggregate, eliminating unnecessary waste while creating materials that can be used throughout the property.",
          `Whether you're building a custom home, developing commercial property, constructing ranch roads, or preparing land for agriculture in ${city}, professional rock crushing helps maximize the value of your existing materials while reducing transportation costs and environmental impact.`,
        ],
      },
      {
        heading: `Why ${city} Properties Benefit from Rock Crushing`,
        paragraphs: [
          "Professional rock crushing provides far more than simply reducing the size of large rocks. It creates construction-grade material that can be reused immediately, helping property owners complete projects more efficiently and economically.",
        ],
        listIntro: `Rock crushing helps ${city} property owners:`,
        list: [
          "Reduce material hauling costs", "Eliminate disposal fees",
          "Produce high-quality road base", "Build durable driveways",
          "Improve drainage systems", "Create stable building foundations",
          "Recycle natural limestone", "Reduce truck traffic on-site",
          "Accelerate project timelines", "Increase long-term property value",
        ],
      },
      {
        heading: `Why ${city} Property Owners Trust Grounded Land Services`,
        paragraphs: [
          "Grounded Land Services understands that every property is different. Our team evaluates the size, type, and intended use of the material before recommending the most effective rock crushing solution. We focus on maximizing efficiency while producing clean, consistent aggregate that can be reused immediately on your property.",
          "Whether we're supporting a residential homesite, commercial development, ranch improvement project, or road construction, our goal is to help clients save money by turning existing materials into valuable resources. From start to finish, we prioritize professionalism, communication, and high-quality workmanship on every project.",
        ],
      },
      {
        heading: "Our Rock Crushing Process",
        steps: [
          {
            title: "Free On-Site Consultation",
            description: "We inspect your property, evaluate the material, and determine the best crushing solution.",
          },
          {
            title: "Material Assessment",
            description: "We assess the type, quantity, and intended use of the rock to produce the right aggregate.",
          },
          {
            title: "Rock Crushing",
            description: "Natural stone or concrete is processed into reusable aggregate for roads, driveways, building pads, and drainage.",
          },
          {
            title: "Material Placement",
            description: "The finished aggregate is spread or stockpiled where it's needed, reducing hauling costs and waste.",
          },
          {
            title: "Final Walkthrough",
            description: "We clean the work area and review the completed project to ensure everything meets your expectations.",
          },
        ],
      },
      {
        heading: "Common Rock Crushing Projects We Complete",
        listIntro: `Grounded Land Services provides rock crushing services for a wide range of projects throughout ${city}, including:`,
        list: [
          "Ranch road construction", "Gravel driveway installation", "Building pad preparation",
          "Commercial site development", "Residential site preparation", "Land clearing projects",
          "Demolition recycling", "Limestone processing", "Parking lot construction",
          "Utility projects", "Drainage improvements", "Erosion control",
          "Large acreage development", "Construction material recycling", "Infrastructure improvements",
        ],
      },
{
        heading: `Serving ${city} and the Surrounding Communities`,
        paragraphs: [`Grounded Land Services proudly provides professional rock crushing services throughout ${city} and surrounding communities, including:`],
        list: nearbyList,
        areasServed: true,
      },
    ],
  };
}