import { ServiceFaq } from "@/lib/service-content/types";
import { servicePricing } from "./service-pricing";
import { rockCrushingCities } from "./service-areas";

function forestryMulchingFaqs(city: string): ServiceFaq[] {
  const pricing = servicePricing["forestry-mulching"];
  return [
    {
      question: `How much does forestry mulching cost in ${city}?`,
      answer: `Forestry mulching in ${city} typically runs ${pricing.range} ${pricing.unit}. ${pricing.note}`,
    },
    {
      question: "How many acres can you mulch per day?",
      answer: `Production rates depend on vegetation density and terrain, but our equipment can typically clear multiple acres per day on ${city}-area properties with moderate brush and cedar cover. Denser cedar thickets or steep terrain will slow progress.`,
    },
    {
      question: "Do you remove cedar trees?",
      answer: "Yes — cedar removal is one of the most common reasons property owners choose forestry mulching. Our equipment grinds cedar of all sizes into mulch directly on-site.",
    },
    {
      question: "Will forestry mulching damage live oaks?",
      answer: `No. Our operators selectively clear unwanted brush and cedar while carefully working around mature live oaks and other desirable hardwoods you want to preserve on your ${city} property.`,
    },
    {
      question: "Can you clear around fences?",
      answer: "Yes, we regularly clear brush and cedar growth along fence lines to improve visibility, access, and long-term fence maintenance.",
    },
    {
      question: "Do you haul debris away?",
      answer: "No hauling is needed — forestry mulching grinds vegetation into mulch that stays on the property, eliminating the cost and hassle of hauling debris away.",
    },
    {
      question: "Is burning required?",
      answer: "No. Because vegetation is processed into mulch on-site, forestry mulching eliminates the need for burn piles entirely.",
    },
    {
      question: "Does mulch prevent erosion?",
      answer: "Yes — the layer of mulch left behind helps protect exposed soil from erosion caused by rain and wind while retaining valuable soil moisture.",
    },
    {
      question: "Will grass grow through mulch?",
      answer: "Yes, native grasses typically grow back through the mulch layer over time, especially once sunlight reaches the ground after cedar and brush removal.",
    },
    {
      question: "Do you work on rocky properties?",
      answer: `Yes — our equipment is built to handle the rocky, limestone-heavy terrain common throughout ${city} and the surrounding area.`,
    },
    {
      question: "Can you mulch steep slopes?",
      answer: "In most cases, yes. We evaluate each property's terrain individually and use equipment suited for slopes and uneven ground where it's safe to operate.",
    },
    {
      question: "How soon can you start?",
      answer: `Scheduling depends on current demand in the ${city} area, but we work to get on-site as quickly as possible after your free estimate.`,
    },
    {
      question: "Do you work year-round?",
      answer: "Yes, forestry mulching can be done year-round in Central Texas, though scheduling may shift slightly during extended wet periods.",
    },
    {
      question: "Do you provide free estimates?",
      answer: `Yes, Grounded Land Services provides free on-site estimates in ${city} and throughout the surrounding area. Call (512) 571-6700 to schedule a walkthrough.`,
    },
    {
      question: "Can you clear for fire mitigation?",
      answer: "Yes — removing cedar, dead vegetation, and excess underbrush significantly reduces combustible fuel loads and helps create defensible space around homes and structures.",
    },
    {
      question: "Do you clear hunting land?",
      answer: `Yes, forestry mulching is commonly used on ${city}-area hunting properties to improve wildlife habitat, create shooting lanes, and encourage native browse.`,
    },
    {
      question: "Can you create trails?",
      answer: "Yes, forestry mulching is an efficient way to open new trails or restore overgrown ones across your property.",
    },
    {
      question: "How long does a project take?",
      answer: `Most residential-scale projects in ${city} take 1–2 days, while larger acreage or ranch projects may take several days depending on density and terrain.`,
    },
  ];
}

function landClearingFaqs(city: string, nearby: string[]): ServiceFaq[] {
  const pricing = servicePricing["land-clearing"];
  const areasServed = nearby.slice(0, 15).join(", ");

  return [
    {
      question: "What is traditional land clearing?",
      answer: "Traditional land clearing is the complete removal of trees, brush, stumps, roots, rocks, and debris to prepare a property for construction, agriculture, or major site development. Unlike forestry mulching, traditional land clearing removes vegetation entirely, leaving the property ready for grading, building pads, driveways, septic systems, and other improvements.",
    },
    {
      question: "When should I choose traditional land clearing instead of forestry mulching?",
      answer: "Traditional land clearing is the better choice when your property requires complete site preparation for new construction, commercial development, pasture conversion, utility installation, or building pads. Forestry mulching is ideal for selective vegetation management, while traditional land clearing completely removes obstacles from the site.",
    },
    {
      question: "What types of properties do you clear?",
      answer: `Grounded Land Services clears residential lots, ranches, farms, commercial properties, hunting land, subdivisions, industrial sites, and large acreage throughout ${city} and Central Texas.`,
    },
    {
      question: "Do you remove tree stumps during land clearing?",
      answer: "Yes. Traditional land clearing typically includes removing tree stumps and major root systems so the property is ready for construction, grading, or future development.",
    },
    {
      question: "Do you remove rocks during land clearing?",
      answer: "Yes. Depending on the project, we can remove surface rocks, excavate larger rock formations, or crush reusable rock into aggregate for driveways, roads, and building pads.",
    },
    {
      question: "What happens to the trees and brush after clearing?",
      answer: "The material can be hauled away, burned where permitted, chipped into mulch, stacked for later use, or processed using forestry equipment depending on the property owner's goals and local regulations.",
    },
    {
      question: "Can you clear land for a new home?",
      answer: `Absolutely. Traditional land clearing is one of the most common first steps when preparing a ${city} property for a custom home, barndominium, shop, barn, or commercial building.`,
    },
    {
      question: "Can you clear land for a septic system?",
      answer: "Yes. We regularly clear and prepare areas for septic systems, utility installation, driveways, and other infrastructure improvements.",
    },
    {
      question: "Will land clearing damage healthy trees?",
      answer: "No. If you want to preserve live oaks or other desirable trees, we carefully identify and protect them during the clearing process while removing only the unwanted vegetation.",
    },
    {
      question: `How long does traditional land clearing take in ${city}?`,
      answer: "Every project is different. Smaller residential lots may take one or two days, while larger ranches or commercial developments can take several weeks depending on acreage, vegetation density, terrain, and project scope.",
    },
    {
      question: `How much does traditional land clearing cost in ${city}?`,
      answer: `Traditional land clearing in ${city} typically runs ${pricing.range} ${pricing.unit}. ${pricing.note} We provide free on-site estimates to develop an accurate quote for your project.`,
    },
    {
      question: "Do you provide free estimates?",
      answer: `Yes. Grounded Land Services offers free on-site consultations and estimates throughout ${city} and the surrounding Central Texas communities.`,
    },
    {
      question: "Do I need permits for land clearing?",
      answer: "Permit requirements vary depending on your city, county, HOA, and the scope of the project. We can help identify potential permitting requirements before work begins.",
    },
    {
      question: "Can you clear heavily wooded property?",
      answer: "Yes. We have the equipment and experience to clear everything from light brush to heavily wooded properties with dense cedar, mesquite, yaupon, and mature trees.",
    },
    {
      question: `Can you clear rocky land in ${city}?`,
      answer: "Absolutely. Central Texas is known for rocky limestone terrain, and our equipment is designed to handle challenging ground conditions. We also offer rock removal and rock crushing services when needed.",
    },
    {
      question: "Can you prepare my property for construction after clearing?",
      answer: "Yes. In addition to land clearing, we provide grading, building pad preparation, rock removal, demolition, driveway construction, and other site preparation services to help get your property construction-ready.",
    },
    {
      question: "What is the difference between land clearing and site preparation?",
      answer: "Land clearing removes trees, brush, stumps, rocks, and debris. Site preparation goes a step further by grading the land, building pads, improving drainage, installing driveways, and preparing the property for construction.",
    },
    {
      question: "What equipment do you use for traditional land clearing?",
      answer: "We use professional-grade excavators, skid steers, mulching equipment, grading equipment, and specialized attachments to complete projects safely and efficiently while minimizing unnecessary disturbance to the property.",
    },
    {
      question: "What areas do you serve?",
      answer: `Grounded Land Services proudly serves ${city}, ${areasServed}, and surrounding communities throughout Central Texas.`,
    },
    {
      question: "Why choose Grounded Land Services for traditional land clearing?",
      answer: "Grounded Land Services combines professional equipment, experienced operators, attention to detail, and outstanding customer service to deliver high-quality land clearing projects. Whether you're preparing land for construction, improving a ranch, or reclaiming overgrown acreage, we're committed to leaving your property clean, functional, and ready for its next phase of development.",
    },
  ];
}

function rockCrushingFaqs(city: string): ServiceFaq[] {
  const pricing = servicePricing["rock-crushing"];
  const areasServed = rockCrushingCities.filter((c) => c !== city).join(", ");

  return [
    {
      question: "What is mobile rock crushing?",
      answer: "Mobile rock crushing is the process of crushing natural stone, limestone, concrete, or other rock materials directly on your property using specialized equipment. Instead of hauling material away, it is processed into reusable aggregate for roads, driveways, building pads, and other construction projects.",
    },
    {
      question: "Why should I crush rock instead of hauling it away?",
      answer: "Crushing rock on-site often saves money by reducing hauling, disposal, and imported material costs. It also creates valuable aggregate that can be reused throughout your property for future construction projects.",
    },
    {
      question: `What types of rock can be crushed in ${city}?`,
      answer: "Our rock crushing services can process limestone, sandstone, granite, fieldstone, excavated rock, and many other natural stone materials commonly found throughout Central Texas.",
    },
    {
      question: "Can you crush concrete?",
      answer: "Yes. We can crush concrete from demolished driveways, foundations, patios, sidewalks, parking lots, and other structures into reusable aggregate for future construction projects.",
    },
    {
      question: "What can crushed rock be used for?",
      answer: "Crushed rock is commonly used for driveways, ranch roads, private roads, building pads, parking areas, drainage projects, culvert backfill, erosion control, base material for concrete and asphalt, and general site preparation.",
    },
    {
      question: "Is rock crushing less expensive than hauling rock away?",
      answer: "In many cases, yes. Mobile rock crushing can significantly reduce trucking, disposal, and imported material costs by allowing the existing rock to be reused directly on your property.",
    },
    {
      question: `Can you crush limestone found on my ${city} property?`,
      answer: `Absolutely. Limestone is one of the most common materials we process throughout ${city} and the Texas Hill Country. It produces an excellent aggregate for roads, driveways, and building pads.`,
    },
    {
      question: "Do you remove the rock before crushing it?",
      answer: "If necessary, yes. We can excavate large rocks, boulders, or exposed limestone before processing the material into reusable aggregate.",
    },
    {
      question: "How small can the rock be crushed?",
      answer: "The finished product depends on your project's needs. Aggregate can be processed into various sizes suitable for road base, driveways, drainage applications, and other construction uses.",
    },
    {
      question: "Can crushed rock be used for driveways?",
      answer: "Yes. Crushed limestone is one of the most popular materials for ranch roads, residential driveways, private roads, and commercial access roads throughout Central Texas.",
    },
    {
      question: "Do you provide rock crushing for ranches?",
      answer: "Yes. Ranch owners frequently use our rock crushing services to improve roads, create building pads, develop livestock areas, and recycle excavated limestone into useful construction material.",
    },
    {
      question: "Can rock crushing help prepare a building site?",
      answer: "Absolutely. Crushing excavated rock into reusable aggregate provides a stable base for homes, shops, barns, commercial buildings, and other construction projects.",
    },
    {
      question: "Do you crush rock during land clearing projects?",
      answer: "Yes. Rock crushing is often combined with land clearing, excavation, demolition, grading, and site preparation to maximize efficiency and reduce overall project costs.",
    },
    {
      question: "Can you crush rock from demolition projects?",
      answer: "Yes. Concrete, masonry, and other materials generated during demolition can often be processed into reusable aggregate instead of being hauled to a landfill.",
    },
    {
      question: `How long does a rock crushing project take in ${city}?`,
      answer: "Every project is different. The timeline depends on the volume of material, accessibility, desired aggregate size, and overall project scope. Smaller projects may be completed in a single day, while larger developments can take several days or longer.",
    },
    {
      question: `How much does rock crushing cost in ${city}?`,
      answer: `Rock crushing in ${city} typically runs ${pricing.range} ${pricing.unit}. ${pricing.note} Grounded Land Services provides free on-site estimates for every project.`,
    },
    {
      question: "Is rock crushing environmentally friendly?",
      answer: "Yes. Mobile rock crushing reduces landfill waste, minimizes truck traffic, lowers fuel consumption, and recycles existing materials into useful products that can remain on the property.",
    },
    {
      question: "Can crushed rock improve drainage?",
      answer: "Yes. Properly sized crushed rock is commonly used around culverts, drainage ditches, retaining walls, and erosion control projects to improve water movement and reduce soil erosion.",
    },
    {
      question: "What areas do you serve?",
      answer: `Grounded Land Services proudly provides professional rock crushing services throughout ${city}, ${areasServed}, and surrounding communities across Central Texas.`,
    },
    {
      question: "Why choose Grounded Land Services for rock crushing?",
      answer: "Grounded Land Services combines professional equipment, experienced operators, and a commitment to quality workmanship to deliver efficient, cost-effective rock crushing solutions. Whether you're recycling limestone, processing demolition material, or producing aggregate for roads and building pads, we focus on maximizing the value of your existing materials while helping reduce project costs.",
    },
  ];
}

function demolitionFaqs(city: string, nearby: string[]): ServiceFaq[] {
  const pricing = servicePricing["demolition"];
  const areasServed = nearby.slice(0, 15).join(", ");

  return [
    {
      question: "What types of structures do you demolish?",
      answer: `Grounded Land Services provides demolition services for a wide variety of residential, agricultural, and commercial structures, including homes, barns, sheds, garages, mobile homes, shops, commercial buildings, concrete slabs, swimming pools, driveways, retaining walls, and other structures throughout ${city} and Central Texas.`,
    },
    {
      question: "Do you provide complete demolition and debris removal?",
      answer: "Yes. Our demolition services include the safe removal of structures, debris loading and hauling, site cleanup, and rough grading when needed. Our goal is to leave your property clean and ready for the next phase of development.",
    },
    {
      question: "Do you remove concrete slabs and foundations?",
      answer: "Absolutely. We remove concrete slabs, building foundations, patios, sidewalks, driveways, retaining walls, and other concrete structures using professional demolition equipment.",
    },
    {
      question: "Do you demolish swimming pools?",
      answer: "Yes. We provide complete swimming pool demolition and removal services. Whether your pool is outdated, damaged, or no longer being used, we can safely demolish the structure, remove the debris, backfill the excavation, compact the soil, and prepare the area for landscaping, outdoor living spaces, or future construction.",
    },
    {
      question: "What is concrete cancer, and can it require pool demolition?",
      answer: "Concrete cancer is a common term used to describe the deterioration of reinforced concrete caused by corrosion of the steel reinforcing bars inside the structure. As the steel rusts, it expands, causing the surrounding concrete to crack, separate, and weaken over time. Many older swimming pools develop significant structural damage due to concrete deterioration. When repairs become too costly or can no longer restore the structural integrity of the pool, demolition and removal are often the most practical and cost-effective solution.",
    },
    {
      question: "Can you remove old barns and agricultural buildings?",
      answer: `Yes. We regularly demolish barns, livestock shelters, storage buildings, workshops, and other agricultural structures throughout ${city} and Central Texas.`,
    },
    {
      question: "Do you demolish mobile homes?",
      answer: "Yes. We safely demolish and remove mobile homes, manufactured homes, and modular structures while properly disposing of debris and preparing the site for future use.",
    },
    {
      question: "Can you demolish a house?",
      answer: "Yes. We provide complete residential house demolition services for homeowners preparing to build a new home, redevelop a property, or remove unsafe structures.",
    },
    {
      question: "Do you remove demolition debris?",
      answer: "Yes. We haul away wood, concrete, roofing materials, metal, brick, masonry, and other demolition debris so your property is left clean and ready for redevelopment.",
    },
    {
      question: "Can you grade the property after demolition?",
      answer: "Absolutely. After demolition, we can provide rough grading, finish grading, backfilling, compaction, drainage improvements, and complete site preparation to prepare your property for its next use.",
    },
    {
      question: "Can you prepare my property for new construction after demolition?",
      answer: "Yes. In addition to demolition, Grounded Land Services offers land clearing, forestry mulching, rock removal, rock crushing, grading, building pad preparation, driveway construction, and complete site preparation.",
    },
    {
      question: `How long does a demolition project take in ${city}?`,
      answer: "Every project is different. Smaller structures may be demolished in a single day, while larger homes, commercial buildings, or multi-structure projects may take several days depending on size, accessibility, and cleanup requirements.",
    },
    {
      question: `How much does demolition cost in ${city}?`,
      answer: `Demolition in ${city} typically runs ${pricing.range}. ${pricing.note} We provide free on-site estimates for every demolition project.`,
    },
    {
      question: "Do I need permits for demolition?",
      answer: "Permit requirements vary depending on the city, county, and type of structure being demolished. Our team can help determine what permits may be required before work begins.",
    },
    {
      question: "Can you remove underground foundations?",
      answer: "Yes. We can excavate and remove foundations, footings, retaining walls, underground concrete, and other buried structures when required for future construction.",
    },
    {
      question: "Is demolition environmentally responsible?",
      answer: "Whenever practical, demolition materials such as concrete, metal, and other recyclable materials are separated for recycling or reuse. We strive to minimize landfill waste while responsibly disposing of materials that cannot be recycled.",
    },
    {
      question: "Can you recycle demolished concrete?",
      answer: "Yes. Concrete removed during demolition can often be crushed into reusable aggregate for roads, driveways, building pads, and other construction projects through our rock crushing services.",
    },
    {
      question: "What happens after demolition is complete?",
      answer: "After demolition, many property owners choose to move directly into site preparation. Grounded Land Services can backfill excavations, compact soil, perform grading, remove rocks, clear vegetation, install driveways, prepare building pads, and leave the property ready for construction.",
    },
    {
      question: "What areas do you serve?",
      answer: `Grounded Land Services proudly provides demolition services throughout ${city}, ${areasServed}, and surrounding communities across Central Texas.`,
    },
    {
      question: "Why choose Grounded Land Services for demolition?",
      answer: "Grounded Land Services combines professional equipment, experienced operators, and meticulous attention to detail to complete demolition projects safely, efficiently, and responsibly. From initial planning through final cleanup and site preparation, we focus on delivering high-quality results while preparing your property's next chapter.",
    },
  ];
}

export function getServiceFaqs(serviceSlug: string, city: string, nearby: string[]): ServiceFaq[] {
  switch (serviceSlug) {
    case "forestry-mulching":
      return forestryMulchingFaqs(city);
    case "land-clearing":
      return landClearingFaqs(city, nearby);
    case "rock-crushing":
      return rockCrushingFaqs(city);
    case "demolition":
      return demolitionFaqs(city, nearby);
    default:
      return [];
  }
}