import { ServiceContent } from "./types";
import { cityFacts } from "@/data/city-facts";
import { servicePricing } from "@/data/service-pricing";
import { bertramSentence } from "@/lib/bertram-distance";
import { FLEET, whyUsProof } from "./shared";

// Answer-first layout: opening answer → before/after → cost → process → local conditions →
// why us → removal vs. crushing → benefits → areas → related.
export function rockRemovalContent(city: string, nearby: string[]): ServiceContent {
  const nearbyList = nearby.slice(0, 12);
  const facts = cityFacts[city];
  const price = servicePricing["rock-removal"];
  const proof = whyUsProof(city, `We've completed 100+ projects, and our fleet includes ${FLEET}.`);

  return {
    title: `Rock Removal in ${city}, Texas`,
    metaDescription: `Professional rock removal in ${city}, TX — excavating surface rock, boulders, and embedded limestone to make land safe, usable, and build-ready.`,
    sections: [
      {
        heading: `Rock Removal in ${city}, Texas`,
        paragraphs: [
          `[Grounded Land Services](/) provides [rock removal](/services/rock-removal) in ${city} for ${price.range} ${price.unit}, excavating surface rock, boulders, and embedded limestone so the ground can be built on, driven across, and maintained. ${bertramSentence(city)}`,
        ],
        compareSlider: {
          beforeSrc: "/images/service-pics/liberty-hill-rock-removal-2.jpeg",
          beforeLabel: "Before",
          afterSrc: "/images/work/liberty-hill-rock-removal-1.jpeg",
          afterLabel: "After",
        },
      },
      // "How much does rock removal cost in {city}?" is added just before this (lib/quick-answers.ts)
      {
        heading: "Our Process",
        steps: [
          { title: "Evaluate & Plan", description: "We look at the rock, surrounding terrain, site access, and what the property owner needs the area to be used for. From there, we determine whether the rock should be removed or whether crushing in place is a better fit." },
          { title: "Remove or Process in Place", description: "Rock is excavated and removed when it needs to be taken out of a specific area. Where surface rock can remain in place, a rock crusher attachment can break it down and create smoother, more manageable ground." },
          { title: "Clean Up & Prepare", description: "After the work is complete, we clean up the area and leave the ground in a usable condition for the next phase of the project, whether that means construction, access, pasture maintenance, drainage, or general property use." },
        ],
      },
      {
        heading: `${city}'s Unique Rock Challenges`,
        paragraphs: [
          facts
            ? `Rock removal in ${city} often involves ${facts.terrain} within ${facts.county}. Ground conditions here are typically ${facts.groundConditions}, which means usable soil can sit directly over solid limestone, fractured rock, or harder layers that only become a problem once excavation reaches them.`
            : `Rock removal in ${city} often involves the shallow limestone and exposed rock conditions found across Central Texas and the Texas Hill Country. In some areas, usable soil may cover solid limestone, while other locations have large surface rock, fractured limestone, or harder layers that become a problem when excavation reaches them.`,
          `Terrain can complicate the work as well. Sloped properties, wooded areas, and uneven ground can hide rock until clearing or excavation actually begins. A lot that looks open from the surface may still have shallow rock under the exact spot planned for a driveway, homesite, drainage feature, or utility line.`,
          `Rock type and depth can also change across short distances on the same property. That's why rock removal in ${city} is better approached as a site-specific excavation problem, evaluated on the ground, rather than assuming every lot nearby has the same conditions.`,
        ],
        areaMapQuery: `${city}, Texas`,
      },
      {
        heading: "Why Trust Grounded Land Services",
        ...proof,
        paragraphs: [
          "[Grounded Land Services](/) evaluates each rock removal project individually. The location of the rock, its size and amount, surrounding terrain, site access, and intended use of the property all affect how the work should be approached.",
          "We use [equipment](/equipment) suited to the conditions on the site rather than treating every rock removal project the same way. Depending on the property, that can mean removing the rock entirely or processing it in place. The goal is to leave the surrounding property clean, accessible, and ready for its next use.",
          ...proof.paragraphs,
        ],
        media: [
          { type: "image", src: "/images/service-pics/why-choose-us.jpeg", alt: "Why choose Grounded Land Services" },
        ],
      },
      {
        heading: "Should I choose rock removal or rock crushing?",
        paragraphs: [
          "Choose rock removal when large or embedded rock has to be dug out and taken away from a homesite, driveway, road, or construction area. Choose [rock crushing](/services/rock-crushing) when scattered surface rock can be broken down where it sits to make a pasture or open area smoother and easier to mow.",
        ],
        closingParagraphs: [
          "The two services can also be used together. Larger rock can be excavated and removed from areas where it creates a specific problem, while smaller or scattered surface rock can be crushed in place to create smoother, more maintainable ground.",
        ],
      },
      {
        heading: "Why Property Owners Choose Rock Removal",
        paragraphs: [
          "Rock removal is the process of excavating, breaking, and removing rock that interferes with the use or development of a property. Depending on the site, rock may need to be removed from the surface or excavated from below grade to create usable ground.",
          "Rock removal can make difficult ground more practical to build on, drive across, maintain, and use. Common reasons for removing rock include:",
        ],
        scenarios: [
          { icon: "⚠️", title: "Improved Safety", description: "Removes large exposed rocks and other obstacles that can create hazards for vehicles, equipment, livestock, or people." },
          { icon: "🚜", title: "Better Access", description: "Creates more usable routes for vehicles, equipment, trailers, and construction traffic." },
          { icon: "🏡", title: "More Usable Space", description: "Opens areas that would otherwise be limited by surface rock or shallow bedrock." },
          { icon: "🔥", title: "Reduced Fire Risk", description: "Removes exposed rock that can spark when struck by mower blades, a common cause of grass fires in dry conditions." },
          { icon: "🚧", title: "Fewer Obstacles", description: "Clears rock from areas being developed for homesites, driveways, roads, utilities, or fencing." },
          { icon: "🔄", title: "Long-Term Usability", description: "Addresses rock that could continue interfering with access, maintenance, drainage, or future improvements." },
        ],
      },
      {
        heading: "When Property Owners Need Rock Removal",
        paragraphs: [
          "Rock removal is typically needed when rock interferes with a specific project or use of the property, such as:",
        ],
        scenarios: [
          { icon: "🏡", title: "Preparing a Homesite", description: "Remove rock that interferes with the planned building area, foundation preparation, or site grading." },
          { icon: "🛣️", title: "Building or Improving a Driveway", description: "Clear rock that prevents a practical driveway alignment or makes the existing route difficult to maintain." },
          { icon: "🚜", title: "Opening Up Access Roads", description: "Remove rock and other obstacles from routes needed for ranch, construction, or property access." },
          { icon: "🐄", title: "Improving Pasture and Ranch Land", description: "Remove larger or problematic rock from areas that need to be more accessible and usable." },
          { icon: "💧", title: "Preparing for Drainage or Utilities", description: "Remove rock that interferes with drainage work, utility installation, trenching, or other below-grade construction." },
          { icon: "⚠️", title: "Making a Property Safer", description: "Remove large or unstable surface rocks that create problems around roads, work areas, structures, or frequently used portions of the property." },
        ],
        media: [
          { type: "image", src: "/images/work/liberty-hill-rock-removal-after-1.jpeg", alt: "Completed rock removal job in Liberty Hill, TX" },
        ],
      },
      {
        heading: `Serving ${city} and the Surrounding Communities`,
        paragraphs: [`Grounded Land Services proudly provides professional rock removal services throughout ${city} and surrounding communities, including:`],
        list: nearbyList,
        areasServed: true,
      },
      {
        heading: "Related Services",
        relatedServices: [
          { label: "Rock Crushing", href: "/services/rock-crushing" },
          { label: "Land Clearing", href: "/services/land-clearing" },
          { label: "Forestry Mulching", href: "/services/forestry-mulching" },
          { label: "Site Preparation", href: "/services/site-preparation" },
          { label: "Dirt Work & Grading", href: "/services/dirt-work-grading" },
          { label: "Cedar Tree Removal", href: "/services/cedar-tree-removal" },
        ],
      },
    ],
  };
}
