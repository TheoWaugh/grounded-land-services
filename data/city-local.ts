import { servicePricing, MINIMUM_JOB } from "./service-pricing";
import { milesFromBertram, milesBetween } from "@/lib/bertram-distance";

// Hand-written local content for the owner's priority cities (business-facts.md). Research and
// sources: seo-reports/city-notes-priority.md. Only facts with an official source, the existing
// city facts, or the owner's own experience go here. Never add unverified or weak-source claims.

export interface LocalFaq {
  question: string;
  answer: string;
  /** Official source (or our case study) shown under the answer. */
  link?: { label: string; href: string };
  /** City × service pages that show this FAQ. Omit to show it on all of them. The city hub shows every FAQ. */
  services?: string[];
}

export interface CityLocal {
  /** What the land is like: terrain, soil, vegetation, land uses, distance from Bertram. */
  land: string[];
  /** Our work in and around the city (owner experience only). */
  experience: string[];
  /** One extra local paragraph per service page. */
  serviceNotes: Partial<Record<"land-clearing" | "forestry-mulching" | "rock-removal", string>>;
  /** Case study slugs to show, in order: local first, then nearest. */
  studies: string[];
  /** Testimonial names (data/testimonials.ts) to show, in order: local first, then nearest. */
  reviews: string[];
  faqs: LocalFaq[];
  /** On city × service pages, show "Our Work in …" right under the "Why … Choose" section instead of near the end. */
  proofAfterWhyUs?: boolean;
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

/** Owner's warbler experience (Jonestown job). Makes no claim about when a federal permit is required. */
function warblerFaq(city: string): LocalFaq {
  const where = city === "Jonestown" ? "here in Jonestown" : "in Jonestown";
  return {
    question: `Does the golden-cheeked warbler affect cedar clearing in ${city}?`,
    answer: `It can. The golden-cheeked warbler is an endangered songbird that nests in Hill Country cedar (Ashe juniper) and oak woodland. On a cedar job ${where}, we waited until the warbler nesting season (March 1 – September 1) was over before we started clearing. We can't tell you whether your property needs a federal permit. If your land has mature cedar-oak woodland, check with the U.S. Fish & Wildlife Service before you clear.`,
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
    serviceNotes: {
      "land-clearing": "A typical Liberty Hill land clearing job for us is getting a homesite or subdivision lot open: cedar out from under the oaks, dead trees down, and the loose rock picked up so the ground is ready for what comes next.",
      "forestry-mulching": "On Liberty Hill acreage, mulching is usually about the oaks: grinding up the cedar that has grown in underneath them and the dead trees around them, with no burn piles left behind.",
      "rock-removal": "Rock removal is one of the most common jobs we do in Liberty Hill. On our 4.1-acre job here we used the CAT 275 XE and a Harley rake to pull the rock and dead trees before spreading dirt and seeding.",
    },
    studies: ["liberty-hill-rock-removal", "leander-forestry-mulching", "bertram-burn-pile-mulching", "bertram-forestry-mulching", "jonestown-forestry-mulching"],
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
      "On a 10-acre property outside Georgetown city limits, the owner's goal was saving his oak trees. We spent 10 days with our CAT 299 D3 and grapple pulling cedar out from under and around the oaks, including along the fence line.",
      "Because that property was outside city limits, it didn't need a city tree permit. Inside the city and its ETJ, Georgetown has a tree ordinance, so check with the city before large trees come down.",
    ],
    serviceNotes: {
      "land-clearing": "Where your property sits matters here. West-side ground tends to have limestone near the surface, while east-side ground is deeper clay.",
      "forestry-mulching": "Mulching fits when the goal is the same one our 10-acre Georgetown customer had: keep the oaks and get the cedar out from under them.",
      "rock-removal": "On Georgetown's west side, where Edwards Limestone sits close to the surface, rock is often part of getting a lot ready to use.",
    },
    studies: ["georgetown-land-clearing", "liberty-hill-rock-removal", "leander-forestry-mulching"],
    reviews: ["Holton Garrison", "Preston Jones"],
    faqs: [
      {
        question: "Do I need a permit to remove trees in Georgetown?",
        answer: "Often, yes. Inside Georgetown city limits and its ETJ, removing or pruning a Heritage Tree or Protected Tree requires a city permit. Heritage Trees are 26 inches or larger in diameter at breast height and of listed species such as live oak, post oak, cedar elm, pecan and southern magnolia. Heritage tree work also needs Planning & Zoning approval and a Texas-registered arborist. Our 10-acre Georgetown cedar job was outside city limits, so it didn't need a city tree permit. Ask the city's Urban Forester at trees@georgetowntexas.gov before you clear.",
        link: SOURCES.georgetownTrees,
      },
      {
        question: "How long does it take to clear 10 acres of cedar around Georgetown?",
        answer: "Our 10-acre Georgetown cedar job took 10 days with our CAT 299 D3 and grapple, working around the oaks the owner wanted to keep. Your timeline depends on how thick the cedar is, how many trees you're saving, and the ground. We'll give you a number at the free site visit.",
        link: { label: "Our 10-acre Georgetown cedar clearing", href: "/case-studies/georgetown-land-clearing" },
      },
      {
        question: "Can you clear cedar around Georgetown without hurting my oaks?",
        answer: "Yes. Saving the oaks was the whole goal of our 10-acre Georgetown job. We pulled the cedar out from under and around them and left the oaks standing.",
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
    serviceNotes: {
      "land-clearing": "Expect steep ridges and rock. On the 53.8-acre ranch, we finished the ground the equipment couldn't safely reach with chainsaws.",
      "forestry-mulching": "On the 53.8-acre ranch we combined both methods: we grubbed the cedar and mesquite over 4 inches, then mulched everything smaller.",
      "rock-removal": "Clearing in Spicewood often exposes rock. On the 53.8-acre ranch, we removed the rock that came up during clearing along with the old debris.",
    },
    studies: ["spicewood-land-clearing", "jonestown-forestry-mulching"],
    reviews: ["Barrett Garrison", "Mike Janak"],
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
    serviceNotes: {
      "land-clearing": "Since we're based in Bertram, the free site visit is a short trip for us.",
      "forestry-mulching": "Both of our Bertram case studies are mulching jobs: cedar under red oaks, and old burn piles sorted with a grapple and mulched.",
      "rock-removal": "Rock here ranges from shallow limestone near town to granite and older rock farther west in the county.",
    },
    studies: ["bertram-burn-pile-mulching", "bertram-forestry-mulching", "burnet-forestry-mulching", "liberty-hill-rock-removal"],
    reviews: ["Dylan Gavit", "John Cortez", "Holton Garrison", "Preston Jones"],
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
      `We haven't done a job in Briggs yet, and we won't pretend otherwise. Mesquite and prickly pear pasture is exactly the kind of ground we work, and we grub it out. Our closest projects are in Bertram, about ${miles("Briggs")} miles away, and in Burnet.`,
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
        answer: `Not yet. Briggs is about ${miles("Briggs")} miles from our base in Bertram, where we've done two forestry mulching jobs, and we've also worked in Burnet. You can see those projects on this page.`,
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
      "Gonzales land is some of our favorite to clear: flat, sandy ground with little rock, legacy pecans and oaks, and wide-open pastures. Our equipment works fast here and finishes clean, which helps keep clearing costs down for landowners.",
    ],
    serviceNotes: {
      "land-clearing": "On the Gonzales pecan job we combined both methods: we grubbed the bigger trees and mulched the rest.",
      "forestry-mulching": "Mulching works well under big pecans. On the Gonzales job, everything under 2 inches went through the mulcher instead of being pushed into piles.",
    },
    studies: ["gonzales-land-clearing", "harwood-forestry-mulching"],
    reviews: ["Emil Millet"],
    proofAfterWhyUs: true,
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
      `We haven't done a job inside Luling yet. Our closest job is in Harwood, about ${milesTo("Luling", "Harwood")} miles east of Luling, where we mulched 3 acres of cedar, mesquite and cactus in one day to open a field for dove season and help the owner pick a homesite. Our 34.8-acre Gonzales job is about ${milesTo("Luling", "Gonzales")} miles away.`,
      "Flat, sandy ground without much rock is ground we like working, and we'd like to take on more jobs around Luling and Gonzales.",
    ],
    serviceNotes: {
      "land-clearing": `If you're opening pasture or a homesite near Luling, we'll walk the property at the free site visit and quote it by the acre (${clearing.range} ${clearing.unit}).`,
      "forestry-mulching": "Eastern redcedar, yaupon and huisache are the brush we expect to find on Luling-area pasture.",
    },
    studies: ["harwood-forestry-mulching", "gonzales-land-clearing"],
    reviews: ["Emil Millet"],
    faqs: [
      {
        question: "Have you worked near Luling?",
        answer: `Yes. We mulched 3 acres of cedar, mesquite and cactus in Harwood, about ${milesTo("Luling", "Harwood")} miles east of Luling, and we cleared 34.8 acres in Gonzales, about ${milesTo("Luling", "Gonzales")} miles away. We haven't done a job inside Luling yet.`,
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
};

/** Cities where we share the owner's golden-cheeked warbler experience (Jonestown is where the job was). */
const extraFaqs: Record<string, LocalFaq[]> = {
  "Jonestown": [warblerFaq("Jonestown")],
};

/** City × service pages that get the local sections (the owner's priority services). */
export const LOCAL_SERVICES = ["land-clearing", "forestry-mulching", "rock-removal"];

/** Local FAQs for a city hub (every FAQ) or a city × service page (filtered by service). */
export function localFaqs(city: string, service?: string): LocalFaq[] {
  if (service && !LOCAL_SERVICES.includes(service)) return [];
  const faqs = cityLocal[city]?.faqs ?? extraFaqs[city] ?? [];
  return service ? faqs.filter((f) => !f.services || f.services.includes(service)) : faqs;
}
