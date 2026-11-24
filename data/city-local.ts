import { servicePricing, MINIMUM_JOB } from "./service-pricing";
import { milesFromBertram, milesBetween } from "@/lib/bertram-distance";

// Hand-written local content for the owner's priority cities (business-facts.md). Research and
// sources: seo-reports/city-notes-priority.md and city-notes-batch2.md. Only facts with an official source, the existing
// city facts, or the owner's own experience go here. Never add unverified or weak-source claims.

export interface LocalFaq {
  question: string;
  answer: string;
  /** Official source (or our case study) shown under the answer. */
  link?: { label: string; href: string };
  /** City × service pages that show this FAQ. Omit to show it on all of them. The city hub shows every FAQ. */
  services?: string[];
}

/** City × service pages that can have their own local copy. */
type LocalService = "land-clearing" | "forestry-mulching" | "rock-removal" | "demolition";

export interface CityLocal {
  /** What the land is like: terrain, soil, vegetation, land uses, distance from Bertram. Empty keeps the city-facts copy. */
  land: string[];
  /** Our work in and around the city (owner experience only). */
  experience: string[];
  /** Replaces `experience` in "Our Work in …" on that city × service page. */
  serviceExperience?: Partial<Record<LocalService, string[]>>;
  /** One extra local paragraph per service page. */
  serviceNotes: Partial<Record<LocalService, string>>;
  /** Service pages that show "Our Work" right after the how long / process section instead of inside "Why choose us". */
  proofAfterProcess?: LocalService[];
  /** Case study slugs to show, in order: local first, then nearest. */
  studies: string[];
  /** Replaces `studies` on that city × service page. */
  serviceStudies?: Partial<Record<LocalService, string[]>>;
  /** Testimonial names (data/testimonials.ts) to show, in order: local first, then nearest. */
  reviews: string[];
  /** Replaces `reviews` on that city × service page. */
  serviceReviews?: Partial<Record<LocalService, string[]>>;
  faqs: LocalFaq[];
}

const miles = (city: string) => Math.round(milesFromBertram(city) ?? 0);
const milesTo = (a: string, b: string) => Math.round(milesBetween(a, b) ?? 0);

const SOURCES = {
  oakWilt: { label: "Texas A&M Forest Service: preventing oak wilt", href: "https://tfsweb.tamu.edu/prevent-the-spread-of-oak-wilt-in-texas-this-spring" },
  usfws: { label: "U.S. Fish & Wildlife Service, Austin office", href: "https://www.fws.gov/office/austin-ecological-services/species" },
  burnBanMap: { label: "Texas A&M Forest Service: county burn bans", href: "https://tfsweb.tamu.edu/Burnbans/" },
  burnetBurnBan: { label: "Burnet County burn ban order (2026)", href: "https://public.destinyhosted.com/burnemindocs/2026/Spec/20260702_4586/minutes/1574_Burn_Ban.pdf" },
  georgetownTrees: { label: "City of Georgetown: heritage trees", href: "https://georgetowntexas.qscend.com/askgtx/knowledgebase/article/588" },
  libertyHillTrees: { label: "City of Liberty Hill: Heritage Tree Permit", href: "https://www.libertyhilltx.gov/DocumentCenter/View/2756/Heritage-Tree-Permit-Application" },
  burnetBurnRules: { label: "Burnet County: outdoor burning guidelines", href: "https://public.destinyhosted.com/burnemindocs/2021/ComCt/20211123_4392/1373_12._Adopted_Guidleines_for_Outdoor_Burning.pdf" },
  haysBurn: { label: "South Hays ESD 3: outdoor burning", href: "https://shcesd3.specialdistrict.org/outdoor-burning" },
  gillespieBurn: { label: "Gillespie County: burn ban", href: "https://www.gillespiecounty.gov/1253/Burn-Ban" },
  lakewayTrees: { label: "City of Lakeway: 2025 tree ordinance", href: "https://lakeway-tx.civicweb.net/document/99121/" },
  lakewayOaks: { label: "City of Lakeway: oak pruning schedule", href: "https://www.lakeway-tx.gov/1059" },
  wimberleyForms: { label: "City of Wimberley: forms and applications", href: "https://www.cityofwimberley.com/177/Forms-Applications" },
  edwards: { label: "Texas Administrative Code: Edwards Aquifer contributing zone", href: "https://www.law.cornell.edu/regulations/texas/30-Tex-Admin-Code-SS-213-22" },
  tpwdCedar: { label: "Texas Parks and Wildlife: Hill Country habitat management", href: "https://tpwd.texas.gov/landwater/land/habitats/hillcountry/habitat_management/" },
  gonzalesBurn: { label: "Gonzales County: burn ban status", href: "https://newtools.cira.state.tx.us/page/Gonzales.Burn.Ban.Status" },
};

const OAK_WILT_GUIDANCE =
  "Texas A&M Forest Service advises against pruning or wounding oaks from February through June, when the beetles that spread oak wilt are most active, and recommends painting any fresh oak wound right away, any time of year. It lists land and cedar clearing as one source of those wounds.";

function oakWiltFaq(city: string, ourExperience = ""): LocalFaq {
  return {
    question: `When is the safest time to clear around oaks in ${city}?`,
    answer: `${ourExperience}${OAK_WILT_GUIDANCE}`,
    link: SOURCES.oakWilt,
  };
}

/** Owner's warbler experience (Jonestown job, Balcones refuge fire break). Makes no claim about when a federal permit is required. */
function warblerFaq(city: string): LocalFaq {
  const where = city === "Jonestown" ? "here in Jonestown" : "in Jonestown";
  return {
    question: `Does the golden-cheeked warbler affect cedar clearing in ${city}?`,
    answer: `It can. The golden-cheeked warbler is an endangered songbird that nests in Hill Country cedar (Ashe juniper) and oak woodland. On a cedar job ${where}, we waited until the warbler nesting season (March 1 – September 1) was over before we started clearing. We've also completed refuge work timed around warbler nesting season: a 5-mile fire break on the Balcones Canyonlands National Wildlife Refuge for the U.S. Fish & Wildlife Service, finished in February 2026 before nesting season began March 1. We can't tell you whether your property needs a federal permit. If your land has mature cedar-oak woodland, check with the U.S. Fish & Wildlife Service before you clear.`,
    link: SOURCES.usfws,
  };
}

function burnetCountyBurnFaq(city: string): LocalFaq {
  return {
    question: `Can I burn brush piles in ${city}?`,
    answer: `Not during a Burnet County burn ban. The county's orders prohibit outdoor burning in the unincorporated county for 90 days at a time (burning prickly pear for livestock feed is exempt), and the local fire department responds to any outdoor fire it's told about. Check the county's current status before you light a pile, or skip the burn pile entirely with forestry mulching.`,
    link: SOURCES.burnetBurnBan,
    services: ["land-clearing", "forestry-mulching"],
  };
}

function travelFaq(city: string): LocalFaq {
  return {
    question: `Do you travel to ${city}?`,
    answer: `Yes. We're based in Bertram, about ${miles(city)} miles away, and we want more work around Gonzales and Luling. Our 34.8-acre Gonzales job was on sandy soil, and flat, sandy ground with little rock is ground we like working. Our minimum job is ${MINIMUM_JOB}, and the site visit is free.`,
  };
}

const rock = servicePricing["rock-removal"];
const mulching = servicePricing["forestry-mulching"];
const clearing = servicePricing["land-clearing"];

export const cityLocal: Record<string, CityLocal> = {
  "Liberty Hill": {
    land: [
      "Liberty Hill is western Williamson County ranch country: rolling Hill Country with open ranchland, hills and creek valleys between the North and South Forks of the San Gabriel River. The soil runs from clay-rich ground to shallow, rocky limestone soil, with more limestone west of the Balcones Fault Zone and deeper clay toward the east.",
      `Cedar (Ashe juniper), live oak and mesquite are the main trees, with native grasses and mixed brush in between. New homesites and subdivision lots sit right next to working ranches. Liberty Hill is about ${miles("Liberty Hill")} miles from our base in Bertram.`,
    ],
    experience: [
      "Most of our Liberty Hill work is rock removal on new homesites, subdivision lots and larger ranches, plus clearing cedar out from under oaks and taking out dead trees. The rock we pull here is usually loose. Solid limestone shelf mostly shows up only when a job calls for excavating.",
      "On a 4.1-acre Liberty Hill property, we removed the rock and dead trees, hauled off 12 loads of debris, spread 10 loads of dirt, and seeded the whole property with native grass so it could be used as pasture.",
    ],
    serviceExperience: {
      "land-clearing": [
        "Most of our Liberty Hill land clearing is opening up homesites, subdivision lots, and larger ranches. A lot of that work is clearing cedar out from under the oaks. With less competition for water, the oaks have a better chance of making it through the next drought, and the property looks a lot better too. We also take out dead trees, whether they died in a drought or from disease. Oak wilt and Hypoxylon canker are both common across Liberty Hill and Central Texas.",
        "When we clear land, pulling out the trees often brings rock up to the surface with the roots. Most of the rock in Liberty Hill is loose, so it comes out fast. After clearing, we run our [Harley rake](/equipment#harley-rake) over the ground to level it out and pick up the leftover debris and rock, leaving a clean, smooth finish.",
        "On one 4.1-acre Liberty Hill property, we cleared the rock and dead trees, hauled off 12 loads of debris, spread 10 loads of dirt, and seeded the whole property with native grass so it could be used as pasture. [See the full project](/case-studies/liberty-hill-rock-removal)",
      ],
      "forestry-mulching": [
        "On Liberty Hill acreage, forestry mulching is usually about saving the oaks. Cedar grows in thick underneath them and competes for the same water, so mulching the cedar gives the oaks a better chance of making it through the next drought, and it opens the property back up so you can actually see and enjoy it. We also mulch dead trees, whether they died in a drought or from disease like oak wilt or Hypoxylon canker, both common across Liberty Hill and Central Texas.",
        "Forestry mulching is a good fit for the shallow-soil and rocky properties found throughout Liberty Hill. It grinds trees and brush down in place instead of pulling them out by the roots, which often brings rock up to the surface. The nutrient-rich mulch stays on the ground to protect the soil and hold in moisture, with no burn piles and nothing to haul off.",
        "Just down the road in Leander, we mulched a 1-acre wedding venue in one day, clearing cedar, brush, and vines from under the oaks so guests had more shade to gather in. [See the full project](/case-studies/leander-forestry-mulching)",
      ],
      "rock-removal": [
        "Most of our Liberty Hill work is rock removal on new homesites, subdivision lots, and larger ranches. Most of the rock here is loose, which means it comes out quickly and keeps costs down, but large rock outcroppings are also common throughout the area. Solid limestone shelf usually only shows up when a job needs digging or excavation.",
        "On one 4.1-acre Liberty Hill property, we removed the rock and dead trees, hauled off 12 loads of debris, spread 10 loads of dirt, and seeded it with native grass for pasture. [See the full project](/case-studies/liberty-hill-rock-removal)",
      ],
    },
    serviceNotes: {
      "land-clearing": "A typical Liberty Hill land clearing job for us is getting a homesite or subdivision lot open: cedar out from under the oaks, dead trees down, and the loose rock picked up so the ground is ready for what comes next.",
      "forestry-mulching": "On Liberty Hill acreage, mulching is usually about the oaks: grinding up the cedar that has grown in underneath them and the dead trees around them, with no burn piles left behind.",
      "rock-removal": "Rock removal is one of the most common jobs we do in Liberty Hill. On our 4.1-acre job here we used the CAT 275 XE and a Harley rake to pull the rock and dead trees before spreading dirt and seeding.",
    },
    studies: ["liberty-hill-rock-removal", "leander-forestry-mulching", "balcones-refuge-fire-break", "bertram-burn-pile-mulching", "bertram-forestry-mulching", "jonestown-forestry-mulching"],
    reviews: ["Holton Garrison", "Preston Jones", "Dylan Gavit"],
    faqs: [
      {
        question: "Is the rock on Liberty Hill land loose, or solid limestone?",
        answer: `In our experience, the rock on Liberty Hill homesites, subdivision lots and ranches is usually loose. Solid limestone shelf mostly shows up only when a job calls for excavating. Rock removal costs ${rock.range} ${rock.unit}, and the site visit is free.`,
        link: { label: "Our 4.1-acre Liberty Hill rock removal job", href: "/case-studies/liberty-hill-rock-removal" },
        services: ["rock-removal", "land-clearing"],
      },
      {
        question: "Do I need a permit to remove a heritage tree in Liberty Hill?",
        answer: "Inside Liberty Hill city limits, yes. Changing, removing or treating a tree the city has designated as a heritage tree takes a Heritage Tree Permit from the Planning Department. The Planning Director or a designee inspects the tree and approves or denies the request within 10 business days of a complete application.",
        link: SOURCES.libertyHillTrees,
      },
      warblerFaq("Liberty Hill"),
      oakWiltFaq("Liberty Hill"),
    ],
  },

  "Georgetown": {
    land: [
      "Georgetown sits on the Balcones Escarpment at the eastern edge of the Edwards Plateau, so the ground changes across town. On the west and northwest side, Edwards Limestone sits close to the surface and outcrops show up on properties. Toward the east, the land drops into deep, clay-rich Blackland Prairie soil. Lake Georgetown, a reservoir on the North Fork of the San Gabriel River, sits just west of town.",
      `Live oak, pecan, cedar elm, mesquite and hackberry are common, with cedar (Ashe juniper) mostly on the rockier west side. You'll find farms, ranches, acreage and homesites next to new residential and commercial development. Georgetown is about ${miles("Georgetown")} miles from our Bertram base.`,
    ],
    experience: [
      "On a 5-acre property outside Georgetown city limits, the owner's goal was saving his oak trees. In two days with our CAT 299, we pulled the small cedar out from under and around the oaks one at a time, including along the fence line, and piled it for burning.",
      "Because that property was outside city limits, it didn't need a city tree permit. Inside the city and its ETJ, Georgetown has a tree ordinance, so check with the city before large trees come down.",
    ],
    serviceExperience: {
      "land-clearing": [
        "Our Georgetown work is a good example of selective clearing. On a 5-acre property just outside city limits, the owner wanted to save his oaks, so we pulled the small cedar out from under and around them one at a time with our CAT 299, including along the fence line. The job took two days, and we piled the cedar for burning.",
        "That property also had plenty of large rock, which is common on Georgetown's west side, where limestone sits close to the surface. [See the full project](/case-studies/georgetown-land-clearing)",
      ],
      "forestry-mulching": [
        "Around Georgetown, forestry mulching is usually about saving the oaks. Mulching grinds the cedar and brush down in place, so there are no burn piles and nothing to haul off, and the mulch stays on the ground to protect the soil and hold in moisture. It's also a good fit for Georgetown's rocky west side, since it doesn't pull rock up with the roots.",
        "About 12 miles away in Leander, we mulched a 1-acre wedding venue in one day, clearing cedar, brush, and vines from under the oaks so guests had more shade. [See the full project](/case-studies/leander-forestry-mulching)",
      ],
      "rock-removal": [
        "On Georgetown's west and northwest side, Edwards Limestone sits close to the surface, and large rock is common. On our 5-acre Georgetown clearing job, the rock was too big to rake up, which is when rock removal becomes its own step in getting a lot ready to build on or use.",
        "About 12 miles away in Liberty Hill, we removed rock and dead trees from a 4.1-acre property, hauled off the debris, and seeded it for pasture. [See the full project](/case-studies/liberty-hill-rock-removal)",
      ],
    },
    serviceNotes: {
      "land-clearing": "Where your property sits matters here. West-side ground tends to have limestone near the surface, while east-side ground is deeper clay.",
      "rock-removal": "On Georgetown's west side, where Edwards Limestone sits close to the surface, rock is often part of getting a lot ready to use.",
    },
    studies: ["georgetown-land-clearing", "liberty-hill-rock-removal", "leander-forestry-mulching"],
    reviews: ["Holton Garrison", "Preston Jones"],
    faqs: [
      {
        question: "Do I need a permit to remove trees in Georgetown?",
        answer: "Often, yes. Inside Georgetown city limits and its ETJ, removing or pruning a Heritage Tree or Protected Tree requires a city permit. Heritage Trees are 26 inches or larger in diameter at breast height and of listed species such as live oak, post oak, cedar elm, pecan and southern magnolia. Heritage tree work also needs Planning & Zoning approval and a Texas-registered arborist. Our 5-acre Georgetown cedar job was outside city limits, so it didn't need a city tree permit. Ask the city's Urban Forester at trees@georgetowntexas.gov before you clear.",
        link: SOURCES.georgetownTrees,
      },
      {
        question: "How long does selective cedar clearing take around Georgetown?",
        answer: "Our 5-acre Georgetown job took two days with our CAT 299, pulling small cedar one at a time from under and around the oaks the owner wanted to keep. Your timeline depends on how thick the cedar is, how many trees you're saving, and the ground. We'll give you a number at the free site visit.",
        link: { label: "Our 5-acre Georgetown cedar clearing", href: "/case-studies/georgetown-land-clearing" },
      },
      {
        question: "Can you clear cedar around Georgetown without hurting my oaks?",
        answer: "Yes. Saving the oaks was the whole goal of our 5-acre Georgetown job. We pulled the cedar out from under and around them and left the oaks standing.",
        link: { label: "See the before and after", href: "/case-studies/georgetown-land-clearing" },
        services: ["land-clearing", "forestry-mulching"],
      },
      oakWiltFaq("Georgetown"),
    ],
  },

  "Spicewood": {
    land: [
      "Spicewood is rough, rocky Hill Country where the Colorado and Pedernales rivers have been dammed into the upper end of Lake Travis. The rock underneath is unusually varied, and the area is turning from ranch land into homesites and other development. The soil is mostly clay loam and loam, with shallow, stony limestone soil in a lot of spots.",
      `Live, post and blackjack oaks grow alongside dense cedar, mesquite, Texas persimmon, prickly pear and yaupon. Properties run from ranches and large estates to lake-area homes and hunting land. Spicewood is about ${miles("Spicewood")} miles from our Bertram base.`,
    ],
    experience: [
      "Our 53.8-acre Spicewood ranch job took 2.5 months. We grubbed cedar and mesquite over 4 inches, mulched the smaller growth, and used chainsaws on steep, rocky ridges the equipment couldn't reach. Several mature oaks had oak wilt, so we removed the ones too far gone and treated the oaks showing early signs. We also demolished and hauled off 2 old houses and 4 barns.",
      "That ranch's owner, Barrett Garrison, left us a review. So did Mike Janak, who had us clear a 50 by 300 foot path through wooded, sloping ground full of huisache and prickly pear.",
    ],
    serviceExperience: {
      "land-clearing": [
        "Spicewood is some of the most varied ground we clear. On a 53.8-acre ranch here, the valleys and low spots had deep black dirt with little rock, while the slopes and upper end had shallow, rocky soil over limestone ledges. Over 2.5 months, we grubbed cedar and mesquite over 4 inches, mulched the smaller growth, and used chainsaws on the steep ridges the equipment couldn't safely reach.",
        "Several mature oaks on that ranch had oak wilt, so we removed the ones too far gone and treated those showing early signs. We also demolished and hauled off 2 old houses and 4 barns, burned the brush piles on site and cleaned up afterward, then finished the ground with our [Harley rake](/equipment#harley-rake). [See the full project](/case-studies/spicewood-land-clearing)",
        "On a lot right on Lake Travis, we cleared mesquite, huisache, prickly pear, and rock so the owners could mow without popping tires on thorns, then chainsawed a trail down to the water so they could reach their new dock.",
      ],
      "forestry-mulching": [
        "Most Spicewood properties are a mix of thick cedar and mesquite, steep slopes, and rock, so we often combine methods. On a 53.8-acre ranch here, we grubbed the bigger cedar and mesquite and mulched everything smaller, leaving the mulch on the ground to protect the soil on the rocky slopes.",
        "Across the lake, we mulched a 5-mile fire break on Balcones Canyonlands National Wildlife Refuge off FM 1431, working on steep, rocky ground with tight access and finishing before golden-cheeked warbler nesting season. [See the full project](/case-studies/balcones-refuge-fire-break)",
      ],
      "rock-removal": [
        "Almost every Spicewood property we've worked on has had loose limestone rock and solid limestone ledges. Some also have river rock near Lake Travis, or dolomite, a very hard rock. On a 53.8-acre ranch, the slopes and upper end had shallow, rocky soil, so we removed a lot of rock and left the steep inclines and the largest rock in place.",
        "On two neighboring Spicewood lots, both owners wanted their yards ready for sod, and sod needs smooth ground without rock or loose debris underneath so it can root into the soil. On the first lot, a previous clearing job had left old stumps and a layer of mulch behind, so we pulled the stumps, cleared out the leftover mulch, and removed the rock. On the second lot, the ground just needed the rock taken out. Both were left clean and ready for sod. [See the full project](/case-studies/spicewood-sod-lots)",
      ],
    },
    serviceNotes: {
      "land-clearing": "Expect steep ridges and rock. On the 53.8-acre ranch, we finished the ground the equipment couldn't safely reach with chainsaws.",
      "forestry-mulching": "On the 53.8-acre ranch we combined both methods: we grubbed the cedar and mesquite over 4 inches, then mulched everything smaller.",
      "rock-removal": "Clearing in Spicewood often exposes rock. On the 53.8-acre ranch, we removed the rock that came up during clearing along with the old debris.",
    },
    studies: ["spicewood-land-clearing", "spicewood-lake-travis-lot", "spicewood-sod-lots", "balcones-refuge-fire-break", "jonestown-forestry-mulching"],
    serviceStudies: {
      // Hudson Bend is near Lake Travis: nearby lake-area proof for mulching
      "forestry-mulching": ["spicewood-land-clearing", "spicewood-lake-travis-lot", "spicewood-sod-lots", "hudson-bend-forestry-mulching", "balcones-refuge-fire-break", "jonestown-forestry-mulching"],
    },
    reviews: ["Barrett Garrison", "Mike Janak"],
    serviceReviews: {
      "forestry-mulching": ["Barrett Garrison", "Mike Janak", "Tom"],
    },
    faqs: [
      {
        question: "My Spicewood land is steep and rocky. Can you still clear it?",
        answer: "Yes. On a 53.8-acre Spicewood ranch with steep ridges and extremely rocky ground, we cleared what the equipment could reach and used chainsaws on the ridges it couldn't.",
        link: { label: "Our 53.8-acre Spicewood ranch job", href: "/case-studies/spicewood-land-clearing" },
        services: ["land-clearing", "forestry-mulching", "rock-removal"],
      },
      oakWiltFaq(
        "Spicewood",
        "On our 53.8-acre Spicewood ranch, several mature oaks had oak wilt. We removed the ones too far gone and treated the ones showing early signs. "
      ),
      warblerFaq("Spicewood"),
      {
        question: "Can you remove old buildings and junk along with the brush?",
        answer: "Yes. On a Spicewood ranch we demolished and hauled off 2 old houses and 4 old barns, cleaned up years of trash and debris, and cleared the cedar and mesquite in the same job.",
        link: { label: "Our 53.8-acre Spicewood ranch job", href: "/case-studies/spicewood-land-clearing" },
        services: ["land-clearing"],
      },
    ],
  },

  "Bertram": {
    land: [
      "Bertram is our home base, in eastern Burnet County. The land around town is rolling prairie and broken Hill Country that gets more rugged to the west and south toward the Llano Uplift, where granite and older rock start to show up. The soil is clay loam, loam and shallow, rocky limestone soil, with deeper soil in the low spots.",
      "Most properties are ranches, acreage, rural homesites, farms and hunting land. They're grown up in live oak, cedar, mesquite, cedar elm and hackberry, with agarita, Texas persimmon and prickly pear underneath.",
    ],
    experience: [
      "On a 1-acre Bertram property, cedar had grown in under several large red oaks and was competing with them, so we mulched it out in one day along with the dead limbs and trees.",
      "On a 5-acre Bertram property, we cleared 2 acres covered in six old burn piles that had sat for years with dirt and rock mixed in. We used a grapple to separate the brush from the dirt and rock before mulching it, so the owners could start planning their house. That's the job Dylan Gavit reviewed.",
    ],
    serviceExperience: {
      "land-clearing": [
        "Bertram is home. Our family has lived here since 2021, so the free site visit is a short drive for us. Most Bertram properties have plenty of rock, with large limestone outcroppings and lots of loose limestone, though some lots have good dirt. When we clear land here, pulling out the trees often brings rock up with the roots, so we finish with our [Harley rake](/equipment#harley-rake) to level the ground and pick up the leftover debris and rock.",
        "Right here in Bertram, we've also [cleaned up a property left rough by an earlier mulching job](/case-studies/bertram-mulching-cleanup), removing the thick mulch, stumps, and rock and doing some clearing so the owner had usable ground again.",
      ],
      "forestry-mulching": [
        "On a 1-acre Bertram property, cedar had grown in under several large red oaks and was competing with them for water, so we mulched it out in one day along with the dead limbs and trees. On a 5-acre property, we cleared 2 acres covered in six old burn piles that had sat for years with dirt and rock mixed in. We used a grapple to separate the brush from the dirt and rock before mulching it, so the owners could start planning their house.",
        "Mulching also leaves no burn piles behind, which matters here. Burnet County puts burn bans in place during dry spells, so you're not stuck waiting to burn.",
      ],
      "rock-removal": [
        "Rock is part of almost every Bertram property: large limestone outcroppings and lots of loose limestone, with only some lots having good, deep dirt. We've done [rock removal right here in Bertram](/case-studies/bertram-rock-removal). On one Bertram homesite, we're turning the rock dug up for the house into a natural stone retaining wall, so the rock gets put to work instead of hauled off.",
      ],
      demolition: [
        "Right here in Bertram, we [took out a 1,575-square-foot gunite pool](/case-studies/bertram-pool-demolition) that was coming apart from concrete cancer. We took down part of the fence for access, worked carefully in the tight space between the house and the pool, and broke out the pool and patio with our CAT 275 and a rented Bobcat E80 with a hydraulic hammer. Part of the concrete went to build up the back of the owners' shooting berm, which saved on haul-off. Then we backfilled, graded, poured a 10x8 pad for their jacuzzi, and laid sod.",
      ],
    },
    serviceNotes: {
      "land-clearing": "Since we're based in Bertram, the free site visit is a short trip for us.",
      "forestry-mulching": "Both of our Bertram case studies are mulching jobs: cedar under red oaks, and old burn piles sorted with a grapple and mulched.",
      "rock-removal": "Rock here ranges from shallow limestone near town to granite and older rock farther west in the county.",
    },
    studies: ["bertram-burn-pile-mulching", "bertram-forestry-mulching", "bertram-mulching-cleanup", "bertram-rock-removal", "bertram-pool-demolition", "burnet-forestry-mulching", "liberty-hill-rock-removal"],
    serviceStudies: {
      demolition: ["bertram-pool-demolition", "kingsland-land-clearing", "spicewood-land-clearing"],
    },
    reviews: ["Dylan Gavit", "Gary Gorton", "John Cortez", "Holton Garrison", "Preston Jones"],
    serviceReviews: {
      "rock-removal": ["Steve King", "Dylan Gavit", "Gary Gorton", "John Cortez", "Holton Garrison", "Preston Jones"],
    },
    faqs: [
      {
        question: "I have old brush piles mixed with dirt and rock. Can you mulch them?",
        answer: `Yes. On a Bertram property we cleaned up six old burn piles that had dirt and rock mixed all through them. We used a grapple to separate the brush from the heavier material first, then mulched it. Forestry mulching costs ${mulching.range} ${mulching.unit}.`,
        link: { label: "Our Bertram burn pile job", href: "/case-studies/bertram-burn-pile-mulching" },
      },
      burnetCountyBurnFaq("Bertram"),
      {
        question: "Cedar is growing up under my oaks. Is that a problem?",
        answer: "It can be. On a 1-acre Bertram property, cedar had grown in under several large red oaks and was competing with them, so we mulched it out from under and around them in one day.",
        link: { label: "Our 1-acre Bertram oak job", href: "/case-studies/bertram-forestry-mulching" },
      },
      oakWiltFaq("Bertram"),
    ],
  },

  "Briggs": {
    land: [
      `Briggs is a small, unincorporated community in northeastern Burnet County along Highway 183, about ${miles("Briggs")} miles from our Bertram base. The land is gently to moderately rolling prairie: clay loam and loam over limestone and other bedrock at varying depths, not the uniformly shallow rock you find farther into the Hill Country.`,
      "A lot of the pasture here has been taken over by mesquite and prickly pear, with live oak, cedar, cedar elm and hackberry mixed in. Properties are mostly ranches, farms, acreage, homesites and hunting land.",
    ],
    experience: [
      `Briggs is just ${miles("Briggs")} miles from our Bertram base, and mesquite and prickly pear pasture is exactly the kind of ground we clear. We grub it out. Our closest projects are in Bertram and Burnet, and you can see them on this page.`,
    ],
    serviceNotes: {
      "land-clearing": "For mesquite and prickly pear pasture, we grub it out.",
      "forestry-mulching": "Where cedar and brush are mixed into the pasture, mulching cleans it up without leaving burn piles.",
      "rock-removal": "Bedrock depth varies around Briggs, so we look at the ground at the free site visit before we quote rock work.",
    },
    studies: ["bertram-burn-pile-mulching", "bertram-forestry-mulching", "burnet-forestry-mulching"],
    reviews: ["Dylan Gavit", "John Cortez"],
    faqs: [
      {
        question: "Have you worked in Briggs?",
        answer: `Briggs is just ${miles("Briggs")} miles from our base in Bertram, so it's close to home for us. Our closest projects are right down the road: two forestry mulching jobs in Bertram and one in Burnet, and you can see them on this page. Mesquite and prickly pear pasture is exactly the kind of ground we clear.`,
      },
      {
        question: "My pasture is overrun with mesquite and prickly pear. What do you do with it?",
        answer: `We grub it out. Land clearing costs ${clearing.range} ${clearing.unit}, depending on how thick it is, the terrain, rock and access, and the site visit is free.`,
      },
      burnetCountyBurnFaq("Briggs"),
      oakWiltFaq("Briggs"),
    ],
  },

  "Gonzales": {
    land: [
      "Gonzales sits where the Guadalupe and San Marcos rivers meet, in gently rolling farm and pasture country with wooded uplands. Much of the sandier ground is on Carrizo sand: deep, fast-draining sand that is naturally open post oak savanna and fills in with brush when fire is kept out.",
      `Live oak, post oak, pecan, cedar elm, hackberry and mesquite are the common trees, and yaupon, huisache and eastern redcedar are the brush that takes over. Gonzales is about ${miles("Gonzales")} miles from our Bertram base.`,
    ],
    experience: [
      "Our 34.8-acre Gonzales job took a month. Cottonwood, cedar elm and mesquite had grown up under and around big legacy pecans, and the owner wanted usable pasture. We grubbed everything over 2 inches, mulched the smaller growth, and burned the piles on site. The ground was sandy, which let us dig burn pits for our fires to keep them safer and make cleanup easier.",
      "In October 2026 we mulched 1 acre of brush, cedar and old fence-building brush piles in Gonzales in one day, so the owner had open pasture and a view of their pond. That ground was sandy with sandstone scattered through it, so we took extra care to keep the mulching head from throwing sparks.",
      "Gonzales land is some of our favorite to clear: flat, sandy ground that usually has little rock, legacy pecans and oaks, and wide-open pastures. Our equipment works fast here and finishes clean, which helps keep clearing costs down for landowners.",
    ],
    serviceExperience: {
      "land-clearing": [
        "Our 34.8-acre Gonzales job took a month. Cottonwood, cedar elm and mesquite had grown up under and around big legacy pecans along the Guadalupe River, and the owner wanted usable pasture. We grubbed everything over 2 inches, mulched the smaller growth, and burned the piles on site. The ground was sandy, which let us dig burn pits for our fires to keep them safer and make cleanup easier.",
        "Gonzales land is some of our favorite to clear: flat, sandy ground that usually has little rock, legacy pecans and oaks, and wide-open pastures. Our equipment works fast here and finishes clean, which helps keep clearing costs down for landowners.",
      ],
      "forestry-mulching": [
        "Around Gonzales, a lot of our mulching work is opening pasture back up. On a 1-acre Gonzales property, brush and cedar had grown in, along with piles of brush left behind when the fence was built. The owners wanted open pasture and a clear view of their pond, so we mulched it all in place in one day. The sandy ground there has sandstone scattered through it, which makes the terrain rough, so we took extra care to keep the mulching head from throwing sparks. [See the full project](/case-studies/gonzales-forestry-mulching)",
        "In nearby Harwood, we mulched 3 acres of cedar, mesquite, and cactus in one day to open a field for dove season and help the owner pick out a homesite. [See the full project](/case-studies/harwood-forestry-mulching)",
      ],
    },
    serviceNotes: {
      "land-clearing": "On the Gonzales pecan job we combined both methods: we grubbed the bigger trees and mulched the rest.",
      "forestry-mulching": "Mulching works well under big pecans and oaks. On our 1-acre Gonzales mulching job, the brush, cedar and old brush piles were all mulched in place, with nothing burned or hauled off.",
    },
    studies: ["gonzales-land-clearing", "gonzales-forestry-mulching", "harwood-forestry-mulching"],
    serviceStudies: {
      "forestry-mulching": ["gonzales-forestry-mulching", "gonzales-land-clearing", "harwood-forestry-mulching"],
    },
    reviews: ["Clint Strittmatter"],
    faqs: [
      {
        question: "Can you clear under my big pecan trees without damaging them?",
        answer: "That was the whole point of our 34.8-acre Gonzales job. We cleared cottonwood, cedar elm and mesquite from under and around the legacy pecans to open up pasture, grubbing the bigger trees and mulching the rest.",
        link: { label: "Our 34.8-acre Gonzales job", href: "/case-studies/gonzales-land-clearing" },
        services: ["land-clearing", "forestry-mulching"],
      },
      {
        question: "Do I need to tell anyone before I burn brush piles in Gonzales County?",
        answer: "Yes. Gonzales County asks you to call the Sheriff's Office at (830) 672-6524 before any controlled burn, even when there's no burn ban, so they know the location and can tell you about any burn ban or Red Flag Warning in effect.",
        link: SOURCES.gonzalesBurn,
        services: ["land-clearing", "forestry-mulching"],
      },
      travelFaq("Gonzales"),
      oakWiltFaq("Gonzales"),
    ],
  },

  "Luling": {
    land: [
      "Luling sits on the San Marcos River in Caldwell County, in gently rolling farm and pasture land where the Blackland Prairie meets the Post Oak Savannah. In the post oak country, the uplands are mostly sand and sandy loam and the bottoms are clay, often with a dense clay pan a few feet down. Along the river the soil is deeper alluvium.",
      `Post oak, live oak, pecan, cedar elm and mesquite are common, with eastern redcedar, yaupon and huisache filling in. Properties are mostly farms, ranches, hunting land and rural homesites. Luling is about ${miles("Luling")} miles from our Bertram base.`,
    ],
    experience: [
      `Our closest job to Luling is in Harwood, about ${milesTo("Luling", "Harwood")} miles east, where we mulched 3 acres of cedar, mesquite, and cactus in one day to open a field for dove season and help the owner pick out a homesite. About ${milesTo("Luling", "Gonzales")} miles away in Gonzales, cottonwood, cedar elm, and mesquite had grown up under and around a stand of big legacy pecans along the Guadalupe River. Over a month, we cleared [34.8 acres](/case-studies/gonzales-land-clearing), grubbing the bigger trees and mulching the smaller growth, and opened it back up into pasture with the pecans left standing. [We also recently mulched a 1-acre Gonzales property to open up pasture and give the owners a clear view of their pond](/case-studies/gonzales-forestry-mulching). About 15 miles away in Dale, we [mulched 2 acres of thick brush, cedar and dead trees under the post oaks in one day](/case-studies/dale-forestry-mulching) to open the land up for hunting and leisure.`,
      "Luling-area land is some of our favorite to clear: flat, sandy ground with little rock, post oaks and pecans, and wide-open pasture. Our equipment works fast here and finishes clean, which helps keep clearing costs down for landowners.",
    ],
    serviceNotes: {
      "land-clearing": `If you're opening pasture or a homesite near Luling, we'll walk the property at the free site visit and quote it by the acre (${clearing.range} ${clearing.unit}).`,
      "forestry-mulching": "Eastern redcedar, yaupon and huisache are the brush we expect to find on Luling-area pasture.",
    },
    studies: ["harwood-forestry-mulching", "dale-forestry-mulching", "gonzales-land-clearing", "gonzales-forestry-mulching"],
    reviews: ["Clint Strittmatter", "Salvador Rebollar"],
    faqs: [
      {
        question: "Have you worked near Luling?",
        answer: `Yes. We mulched 3 acres of cedar, mesquite and cactus in Harwood, about ${milesTo("Luling", "Harwood")} miles east of Luling, and we cleared 34.8 acres in Gonzales, about ${milesTo("Luling", "Gonzales")} miles away. We also mulched 2 acres of brush and cedar in Dale, about 15 miles from Luling.`,
        link: { label: "Our 3-acre Harwood mulching job", href: "/case-studies/harwood-forestry-mulching" },
      },
      {
        question: "Can I burn brush piles near Luling?",
        answer: "Only when Caldwell County doesn't have a burn ban in effect. In Texas, county judges and commissioners courts set burn bans, and Texas A&M Forest Service posts the current status for every county, updated daily. Check it before you light a pile.",
        link: SOURCES.burnBanMap,
        services: ["land-clearing", "forestry-mulching"],
      },
      travelFaq("Luling"),
      oakWiltFaq("Luling"),
    ],
  },

  "Burnet": {
    land: [],
    experience: [
      "Inside Burnet city limits, we cleared an acre: we stacked and burned the downed cedar, then raked the ground clean. We're based 11 miles away in Bertram, so Burnet jobs are close to home. Burnet sits right where the ground changes, with granite and sand on the west side of town and limestone on the east. Each one clears a little differently, so we come out and look at yours before we quote.",
      "Next to Lake Buchanan, we mulched 2.4 acres of cedar around the oaks in two days for an owner getting ready to sell. The ground was steep and rocky, with trash scattered through it. Near Inks Lake and Lake LBJ, off Park Road 4, we mulched a 1-acre homesite in Kingsland.",
      "Our closest rock removal job is in Bertram, 11 miles away, on half an acre. Around Burnet you can hit granite to the west and limestone to the east, so we look at the rock before we quote.",
    ],
    serviceExperience: {
      "land-clearing": [
        "Inside Burnet city limits, we cleared an acre: we stacked and burned the downed cedar, then raked the ground clean. We're based 11 miles away in Bertram, so Burnet jobs are close to home. Burnet sits right where the ground changes, with granite and sand on the west side of town and limestone on the east. Each one clears a little differently, so we come out and look at yours before we quote.",
      ],
      "forestry-mulching": [
        "Next to Lake Buchanan, we mulched 2.4 acres of cedar around the oaks in two days for an owner getting ready to sell. The ground was steep and rocky, with trash scattered through it. Near Inks Lake and Lake LBJ, off Park Road 4, we mulched a 1-acre homesite in Kingsland.",
      ],
      "rock-removal": [
        "Our closest rock removal job is in Bertram, 11 miles away, on half an acre. Around Burnet you can hit granite to the west and limestone to the east, so we look at the rock before we quote.",
      ],
    },
    serviceNotes: {},
    proofAfterProcess: ["land-clearing", "forestry-mulching"], // owner, 2026-11-24: trying this order on Burnet first
    studies: ["burnet-forestry-mulching", "kingsland-forestry-mulching", "kingsland-land-clearing", "bertram-rock-removal", "bertram-burn-pile-mulching", "bertram-forestry-mulching"],
    reviews: ["John Cortez", "Dylan Gavit", "Gary Gorton", "Steve King"],
    faqs: [
      {
        question: "Have you worked in Burnet?",
        answer: "Yes. We cleared an acre inside city limits, and we mulched 2.4 acres of cedar next to Lake Buchanan. We're based 11 miles away in Bertram.",
        link: { label: "Our 2.4-acre Burnet mulching job", href: "/case-studies/burnet-forestry-mulching" },
      },
      {
        question: "Can I burn my cedar piles?",
        answer: "Outside city limits, only when there's no county burn ban. Burnet County's guidelines say to notify the Sheriff's Office at 512-756-8080 before you burn, and never to burn on Red Flag days. Inside city limits, the City of Burnet has its own burn permit, so check with the Fire Marshal. Or we can mulch the cedar in place and leave no pile at all.",
        link: SOURCES.burnetBurnRules,
        services: ["land-clearing", "forestry-mulching"],
      },
      {
        question: "Do you work lake lots on Buchanan, Inks Lake and LBJ?",
        answer: "Yes. We mulched 2.4 acres next to Lake Buchanan and a 1-acre homesite in Kingsland, near Inks Lake and Lake LBJ off Park Road 4.",
        link: { label: "Our 1-acre Kingsland homesite", href: "/case-studies/kingsland-forestry-mulching" },
      },
      {
        question: "Will the cedar come back?",
        answer: "Cut cedar (Ashe juniper) dies, but new seedlings come up from seed in the soil. Texas Parks and Wildlife says to plan on another treatment in about 7–8 years.",
        link: SOURCES.tpwdCedar,
        services: ["land-clearing", "forestry-mulching"],
      },
    ],
  },

  "Lakeway": {
    land: [],
    experience: [
      "Lakeway lots are often steep and rocky, close to the lake. On a Spicewood lake lot the slope was too steep for equipment, so we chainsawed a trail down to the dock by hand. Lakeway's 2025 tree ordinance lists cedar as unprotected, but hardwoods 12 inches and up are protected, so we go over which trees stay before any work starts.",
      "In Hudson Bend, near Lake Travis, we mulched half an acre of cedar in one day so the lot would look better to buyers. In Jonestown we mulched 1.2 steep, rocky acres in a day. We work for homeowners with large lots, property owners, and realtors.",
    ],
    serviceExperience: {
      "land-clearing": [
        "Lakeway lots are often steep and rocky, close to the lake. On a Spicewood lake lot the slope was too steep for equipment, so we chainsawed a trail down to the dock by hand. Lakeway's 2025 tree ordinance lists cedar as unprotected, but hardwoods 12 inches and up are protected, so we go over which trees stay before any work starts.",
      ],
      "forestry-mulching": [
        "In Hudson Bend, near Lake Travis, we mulched half an acre of cedar in one day so the lot would look better to buyers. In Jonestown we mulched 1.2 steep, rocky acres in a day. We work for homeowners with large lots, property owners, and realtors.",
      ],
    },
    serviceNotes: {},
    studies: ["hudson-bend-forestry-mulching", "spicewood-lake-travis-lot", "jonestown-forestry-mulching", "spicewood-land-clearing", "spicewood-sod-lots"],
    reviews: ["Tom", "Barrett Garrison", "Mike Janak"],
    faqs: [
      {
        question: "Do I need a permit to remove cedar in Lakeway?",
        answer: "Lakeway's 2025 tree ordinance lists cedar as an unprotected tree, and unprotected trees don't need a removal permit. Hardwoods 12 inches and up are protected, and heritage trees (24 inches and up) need a permit. Clearing for commercial or multifamily projects needs a permit too. For a vacant lot, ask the city's Building and Development Services before work starts.",
        link: SOURCES.lakewayTrees,
      },
      {
        question: "When can oaks be trimmed in Lakeway?",
        answer: "Not from February 1 to June 30. The city bans oak pruning then because of oak wilt, every cut must be sealed, and fines are possible.",
        link: SOURCES.lakewayOaks,
      },
      {
        question: "Can you get my lot ready before I list it?",
        answer: "Yes. In Hudson Bend we mulched half an acre of cedar in one day so the lot would show better to buyers. Realtors call us for the same thing.",
        link: { label: "Our half-acre Hudson Bend job", href: "/case-studies/hudson-bend-forestry-mulching" },
      },
      {
        question: "Can you work a steep lot near the lake?",
        answer: "Yes. On a Spicewood lake lot the slope was too steep for equipment, so we cut a trail down to the dock by hand.",
        link: { label: "Our Spicewood lake lot", href: "/case-studies/spicewood-lake-travis-lot" },
      },
    ],
  },

  "Dripping Springs": {
    land: [],
    experience: [
      "Around Dripping Springs you'll hit both solid limestone and loose rock, often on the same property. We look at which you have before we quote.",
      "Our closest mulching job is in Johnson City, where we mulched 1.8 acres of cedar and small brush under oaks on rocky ground. Mulching leaves a layer of nutrient-rich mulch on the ground, so there's no brush pile to burn.",
      "For the Uhland Fall Fest, we cleared 20 acres of mesquite, cactus and cedar elm. In Buda, we cleared thick cedar and brush while keeping the owner's trees. West of Spicewood, we cleared a 53.8-acre ranch.",
    ],
    serviceExperience: {
      "rock-removal": [
        "Around Dripping Springs you'll hit both solid limestone and loose rock, often on the same property. We look at which you have before we quote.",
      ],
      "forestry-mulching": [
        "Our closest mulching job is in Johnson City, where we mulched 1.8 acres of cedar and small brush under oaks on rocky ground. Mulching leaves a layer of nutrient-rich mulch on the ground, so there's no brush pile to burn.",
      ],
      "land-clearing": [
        "For the Uhland Fall Fest, we cleared 20 acres of mesquite, cactus and cedar elm. In Buda, we cleared thick cedar and brush while keeping the owner's trees. West of Spicewood, we cleared a 53.8-acre ranch.",
      ],
    },
    serviceNotes: {},
    studies: ["johnson-city-forestry-mulching", "spicewood-land-clearing", "spicewood-lake-travis-lot", "spicewood-sod-lots", "jonestown-forestry-mulching"],
    reviews: ["Emil Millet"],
    faqs: [
      {
        question: "Do I need a permit to clear cedar in Dripping Springs?",
        answer: "Inside city limits, check with the city's Planning Department first. Dripping Springs has a tree ordinance that protects heritage trees, and a large cedar may count.",
        services: ["land-clearing", "forestry-mulching"],
      },
      {
        question: "Can you get the rock out so I can mow?",
        answer: "Yes. Most properties here have both solid limestone and loose rock. We remove what's in the way and tell you up front what can't come out.",
        services: ["rock-removal", "land-clearing"],
      },
      {
        question: "Can I burn the brush?",
        answer: "Only when Hays County has no burn ban, and within state rules. Questions go to the Hays County Fire Marshal at 512-393-7339. Mulching leaves no pile to burn.",
        link: SOURCES.haysBurn,
        services: ["land-clearing", "forestry-mulching"],
      },
      {
        question: "Will the cedar come back?",
        answer: "Cut cedar dies, but seedlings come up from seed in the soil. Texas Parks and Wildlife says to plan on another treatment in about 7–8 years.",
        link: SOURCES.tpwdCedar,
        services: ["land-clearing", "forestry-mulching"],
      },
    ],
  },

  "Wimberley": {
    land: [],
    experience: [
      "For the Uhland Fall Fest, we cleared 20 acres of mesquite, cactus and cedar elm. In Buda, about 15 miles away, we cleared thick cedar and brush while keeping the owner's legacy oaks. On Wimberley properties, that usually means keeping the legacy hardwoods: oak, cypress and pecan.",
      "Mulching takes out cedar and brush, keeps the trees you want, and leaves a layer of nutrient-rich mulch on the ground. Our closest mulching job is in Johnson City: 1.8 acres of cedar and small brush under oaks on rocky ground.",
    ],
    serviceExperience: {
      "land-clearing": [
        "For the Uhland Fall Fest, we cleared 20 acres of mesquite, cactus and cedar elm. In Buda, about 15 miles away, we cleared thick cedar and brush while keeping the owner's legacy oaks. On Wimberley properties, that usually means keeping the legacy hardwoods: oak, cypress and pecan.",
      ],
      "forestry-mulching": [
        "Mulching takes out cedar and brush, keeps the trees you want, and leaves a layer of nutrient-rich mulch on the ground. Our closest mulching job is in Johnson City: 1.8 acres of cedar and small brush under oaks on rocky ground.",
      ],
      "rock-removal": [], // no rock removal copy yet
    },
    serviceNotes: {},
    studies: ["johnson-city-forestry-mulching", "spicewood-land-clearing", "spicewood-lake-travis-lot", "spicewood-sod-lots", "jonestown-forestry-mulching"],
    reviews: ["Emil Millet"],
    faqs: [
      {
        question: "Can you clear near the Blanco River or Cypress Creek?",
        answer: "Check with the City of Wimberley about the floodplain first. The city has a floodplain development permit, and its development application asks about floodplain and Edwards Aquifer zones.",
        link: SOURCES.wimberleyForms,
      },
      {
        question: "Can you take the cedar and leave the oaks, cypress and pecans?",
        answer: "Yes. We clear around the trees you keep. Texas A&M Forest Service says not to wound oaks from February through June, because of oak wilt.",
        link: SOURCES.oakWilt,
        services: ["land-clearing", "forestry-mulching"],
      },
      {
        question: "Does the Edwards Aquifer affect clearing?",
        answer: "It can. State rules don't cover clearing vegetation without disturbing the soil, but work that changes the ground or how water runs off is regulated. TCEQ can tell you if your property is in the zone.",
        link: SOURCES.edwards,
      },
      {
        question: "Do you travel to Wimberley?",
        answer: "Yes. We're based in Bertram, about 50 miles away. Whether the drive adds to the price depends on the job, and we'll tell you up front.",
      },
    ],
  },

  "Fredericksburg": {
    land: [],
    experience: [
      "Most land around Fredericksburg is rangeland on shallow, rocky limestone hills, with deeper soil in the Pedernales River bottoms. We clear cedar and brush for pasture and keep the live oaks. Planning a vineyard, orchard or cabin site? We can clear the ground and leave the trees you want.",
      "Our closest mulching job is in Johnson City, east on US 290: 1.8 acres of cedar and small brush mulched under oaks on rocky ground.",
    ],
    serviceExperience: {
      "land-clearing": [
        "Most land around Fredericksburg is rangeland on shallow, rocky limestone hills, with deeper soil in the Pedernales River bottoms. We clear cedar and brush for pasture and keep the live oaks. Planning a vineyard, orchard or cabin site? We can clear the ground and leave the trees you want.",
      ],
      "forestry-mulching": [
        "Our closest mulching job is in Johnson City, east on US 290: 1.8 acres of cedar and small brush mulched under oaks on rocky ground.",
      ],
      "rock-removal": [], // no rock removal copy yet
    },
    serviceNotes: {},
    studies: ["johnson-city-forestry-mulching", "kingsland-land-clearing", "kingsland-forestry-mulching", "spicewood-land-clearing", "spicewood-lake-travis-lot", "spicewood-sod-lots"],
    reviews: [],
    faqs: [
      {
        question: "Can I burn brush piles near Fredericksburg?",
        answer: "Only outside city limits and when there's no burn ban. Gillespie County says to notify the Fredericksburg Fire Department first at 830-990-8793 (press 1), and someone must watch the fire the whole time.",
        link: SOURCES.gillespieBurn,
        services: ["land-clearing", "forestry-mulching"],
      },
      {
        question: "Do you travel to Fredericksburg?",
        answer: "Yes. We're based in Bertram, about 60 miles away. Whether the drive adds to the price depends on the job, and we'll tell you up front.",
      },
      {
        question: "Can you work granite ground near Enchanted Rock?",
        answer: "Yes. We work granite and sandy ground regularly west of Burnet, closer to home.",
      },
      {
        question: "Will the cedar come back?",
        answer: "Cut cedar dies, but seedlings come up from seed in the soil. Texas Parks and Wildlife says to plan on another treatment in about 7–8 years.",
        link: SOURCES.tpwdCedar,
        services: ["land-clearing", "forestry-mulching"],
      },
    ],
  },
};

/** Cities where we share the owner's golden-cheeked warbler experience (Jonestown job; the Balcones refuge fire break is near Leander and Jonestown). */
const extraFaqs: Record<string, LocalFaq[]> = {
  "Jonestown": [warblerFaq("Jonestown")],
  "Leander": [warblerFaq("Leander")],
};

/** City × service pages that get the local sections (the owner's priority services). */
export const LOCAL_SERVICES = ["land-clearing", "forestry-mulching", "rock-removal"];

/** Local FAQs for a city hub (every FAQ) or a city × service page (filtered by service). */
export function localFaqs(city: string, service?: string): LocalFaq[] {
  if (service && !LOCAL_SERVICES.includes(service)) return [];
  const faqs = cityLocal[city]?.faqs ?? extraFaqs[city] ?? [];
  return service ? faqs.filter((f) => !f.services || f.services.includes(service)) : faqs;
}
