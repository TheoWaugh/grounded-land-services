import { ServiceContent } from "./types";
import { cityFacts } from "@/data/city-facts";

export function rockRemovalContent(city: string, nearby: string[]): ServiceContent {
  const nearbyList = nearby.slice(0, 12);
  const facts = cityFacts[city];

  return {
    title: `Rock Removal in ${city}, Texas`,
    metaDescription: `Professional rock removal in ${city}, TX — excavating surface rock, boulders, and embedded limestone to make land safe, usable, and build-ready.`,
    sections: [
            {
        heading: `Rock Removal in ${city}, Texas`,
        paragraphs: [
          `Rock removal is the process of excavating, breaking, and removing rock that interferes with the use or development of a property. Depending on the site, rock may need to be removed from the surface or excavated from below grade to create usable ground.`,
          `[Grounded Land Services](/) provides [rock removal](/services/rock-removal) in ${city}, Texas, for residential, ranch, agricultural, and construction properties throughout the surrounding area. We remove rock for homesites, driveways, pastures, ranch improvements, and other projects where exposed or buried rock is limiting the property.`,
          `Rock conditions can change significantly from one property to the next. We evaluate each site individually to determine the location, size, depth, and amount of rock involved before deciding how it should be handled, and whether some of that material can be reused rather than hauled away.`,
        ],
        areaMapQuery: `${city}, Texas`,
      },
      {
        heading: "Why Property Owners Choose Rock Removal",
        paragraphs: [
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
        compareSlider: {
          beforeSrc: "/images/service-pics/liberty-hill-rock-removal-2.jpeg",
          beforeLabel: "Before",
          afterSrc: "/images/work/liberty-hill-rock-removal-1.jpeg",
          afterLabel: "After",
        },
      },
      
      {
        heading: "Rock Removal vs. Rock Crushing",
        paragraphs: [
          "Rock removal and [rock crushing](/services/rock-crushing) are two different ways to deal with rock on a property. Rock removal is used when rock needs to be excavated and taken out of a specific area, while rock crushing breaks surface rock down in place. Rock crushing is similar to [forestry mulching](/services/forestry-mulching), except the goal is to reduce exposed rock instead of trees and brush.",
        ],
        comparison: {
          left: {
            heading: "Rock Removal Makes Sense When...",
            list: [
              "Large rock needs to be excavated from a homesite, driveway, road, or construction area",
              "Rock needs to be removed to open up more usable ground",
              "Rock is interfering with drainage, utilities, or access",
              "Rock needs to be completely removed from a specific area",
              "Removing the rock will make the property safer, easier to maintain, and more enjoyable to use",
            ],
          },
          right: {
            heading: "Rock Crushing Makes Sense When...",
            list: [
              "Surface rock is scattered throughout a pasture or open area",
              "Rock can be broken down where it sits instead of excavated",
              "The goal is to create smoother, more manageable ground",
              "Pasture needs to be easier to mow, maintain, or drive across",
              "The property owner wants to reduce exposed rock without excavating and hauling it away",
            ],
          },
        },
        closingParagraphs: [
          "The two services can also be used together. Larger rock can be excavated and removed from areas where it creates a specific problem, while smaller or scattered surface rock can be crushed in place to create smoother, more maintainable ground.",
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
        heading: "Why Trust Grounded Land Services",
        paragraphs: [
          "[Grounded Land Services](/) evaluates each rock removal project individually. The location of the rock, its size and amount, surrounding terrain, site access, and intended use of the property all affect how the work should be approached.",
          "We use [equipment](/equipment) suited to the conditions on the site rather than treating every rock removal project the same way. Depending on the property, that can mean removing the rock entirely or processing it in place, as outlined above. The goal is to leave the surrounding property clean, accessible, and ready for its next use.",
        ],
        media: [
          { type: "image", src: "/images/service-pics/why-choose-us.jpeg", alt: "Why choose Grounded Land Services" },
        ],
      },
            {
        heading: "Our Process",
        steps: [
          { title: "Evaluate & Plan", description: "We look at the rock, surrounding terrain, site access, and what the property owner needs the area to be used for. From there, we determine whether the rock should be removed or whether crushing in place is a better fit." },
          { title: "Remove or Process in Place", description: "Rock is excavated and removed when it needs to be taken out of a specific area. Where surface rock can remain in place, a rock crusher attachment can break it down and create smoother, more manageable ground." },
          { title: "Clean Up & Prepare", description: "After the work is complete, we clean up the area and leave the ground in a usable condition for the next phase of the project, whether that means construction, access, pasture maintenance, drainage, or general property use." },
        ],
      },
            {
        heading: `Serving ${city} and the Surrounding Communities`,
        paragraphs: [`Grounded Land Services proudly provides professional rock removal services throughout ${city} and surrounding communities, including:`],
        list: nearbyList,
        areasServed: true,
      },
    ],
  };
}