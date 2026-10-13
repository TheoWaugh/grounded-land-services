export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  location: string;
  locationSlug: string; // matches the city slug in service-areas
  acreage: string;
  timeline: string;
  services: { label: string; slug: string }[]; // slug matches /services/[slug]
  equipmentUsed?: { label: string; equipmentId: string }[]; // equipmentId matches an id on the Equipment page
  beforePhoto?: string; // if present, renders the before/after slider
  afterPhoto: string; // always required — the primary "after" shot
  galleryPhotos?: string[]; // additional photos for the individual page
  videoIds?: string[]; // YouTube video IDs
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "liberty-hill-rock-removal",
    title: "Rock Removal in Liberty Hill, Texas",
    description: "Rock removal and complete property cleanup across 4.1 acres in Liberty Hill. We removed rock and dead trees, hauled off 12 loads of debris, spread 10 loads of dirt, and finished by seeding the entire property with native Texas grass seed.",
    longDescription: "This 4.1-acre Liberty Hill property had loose rock, dead trees, and a large amount of construction debris that needed to be cleaned up before it could be used as pasture. Grounded Land Services removed the rock and dead trees, hauled off 12 loads of debris, and spread 10 loads of dirt in areas that needed additional material.\n\nOnce the cleanup was finished, we seeded the entire 4.1 acres with native Texas grass seed, leaving the property pristine, open, and ready for native grass to establish and the land to be used as pasture.",
    location: "Liberty Hill, TX",
    locationSlug: "liberty-hill",
    acreage: "4.1 Acres",
    timeline: "5 Days",
    services: [
      { label: "Rock Removal", slug: "rock-removal" },
      { label: "Land Clearing", slug: "land-clearing" },
    ],
    equipmentUsed: [
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Harley Rake", equipmentId: "harley-rake" },
    ],
    beforePhoto: "/images/service-pics/liberty-hill-rock-removal-2.jpeg",
    afterPhoto: "/images/work/liberty-hill-rock-removal-1.jpeg",
    galleryPhotos: [
      "/images/work/liberty-hill-rock-removal-after-2.jpeg",
      "/images/work/liberty-hill-rock-removal-after-3.jpeg",
      "/images/work/liberty-hill-rock-removal-after-4.jpeg",
      "/images/work/liberty-hill-rock-removal-3.JPEG",
      "/images/work/liberty-hill-rock-removal-5.JPEG",
      "/images/work/liberty-hill-rock-removal-6.JPEG",
      "/images/work/liberty-hill-rock-removal-7.JPEG",
    ],
  },
  {
    slug: "spicewood-land-clearing",
    title: "Land Clearing in Spicewood, Texas",
    description: "53.8 acres of dense cedar and mesquite cleared in Spicewood, Texas. We grubbed large cedar and mesquite, mulched smaller growth left behind, and used chainsaws to clear the steep, rocky ridges that equipment couldn't access.",
    longDescription: "This 53.8-acre Spicewood property was heavily overgrown with cedar and mesquite, with extremely rocky terrain, steep ridges, old structures, and years of accumulated trash. We grubbed cedar and mesquite larger than 4 inches, then mulched the smaller growth that remained, and used chainsaws to clear steep areas that equipment couldn't access.\n\nThe property also had oak wilt affecting several mature oaks. We removed trees that were too far gone and treated oaks showing early signs of the disease while preserving desirable oaks and native trees. We also demolished and hauled off 2 old houses and 4 old barns, removed accumulated debris and rock exposed during clearing, and piled and burned the cleared trees on site.\n\nThe result was a much more open and usable 53.8-acre property with the unwanted cedar, mesquite, structures, debris, and rock removed while preserving the desirable trees throughout the property.",
    location: "Spicewood, TX",
    locationSlug: "spicewood",
    acreage: "53.8 Acres",
    timeline: "2.5 Months",
    services: [
      { label: "Land Clearing", slug: "land-clearing" },
      { label: "Rock Removal", slug: "rock-removal" },
      { label: "Demolition", slug: "demolition" },
      { label: "Forestry Mulching", slug: "forestry-mulching" },
    ],
    equipmentUsed: [
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Cat 323", equipmentId: "cat-323" },
      { label: "Cat 299", equipmentId: "cat-299" },
      { label: "Prinoth Forestry Mulcher", equipmentId: "prinoth" },
      { label: "Harley Rake", equipmentId: "harley-rake" },
      { label: "Grapple Rake", equipmentId: "grapple-rake" },
    ],
    afterPhoto: "/images/work/garrison-clearing-4-land-clearing.jpeg",
    galleryPhotos: [
      "/images/work/garrison-clearing-2-land-clearing.jpeg",
      "/images/work/garrison-clearing-3-land-clearing.jpeg",
      "/images/work/dji_fly_20251022_072324_0022_1768263397042_photo.jpeg",
      "/images/work/garrison-1.JPG",
    ],
     videoIds: ["W1AeIo_miIA"],
  },
  {
    slug: "gonzales-land-clearing",
    title: "Land Clearing in Gonzales, Texas",
    description: "34.8 acres cleared in Gonzales, Texas. We cleared cottonwood, cedar elm, and mesquite trees from beneath and around large legacy pecan trees. Trees larger than 2 inches were grubbed, while the remaining vegetation was mulched with our forestry mulcher.",
    longDescription: "This 34.8-acre Gonzales property had cottonwood, cedar elm, and mesquite growing heavily beneath and around several large legacy pecan trees. The goal of the project was to clear the unwanted growth while opening up the areas around the mature pecan trees to create a usable pasture.\n\nWe grubbed cottonwood, cedar elm, and mesquite trees larger than 2 inches. After the larger trees were removed, we used our forestry mulcher to process the remaining smaller vegetation and growth throughout the property.\n\nThe trees that were cleared were stacked into piles and burned on site. Once the clearing was completed, the property was opened up around the mature pecan trees, with the larger unwanted vegetation removed and the remaining smaller growth mulched.",
    location: "Gonzales, TX",
    locationSlug: "gonzales",
    acreage: "34.8 Acres",
    timeline: "1 Month",
    services: [
      { label: "Land Clearing", slug: "land-clearing" },
      { label: "Forestry Mulching", slug: "forestry-mulching" },
    ],
    equipmentUsed: [
      { label: "Cat 323", equipmentId: "cat-323" },
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Cat 299", equipmentId: "cat-299" },
      { label: "Prinoth Forestry Mulcher", equipmentId: "prinoth" },
      { label: "Grapple Rake", equipmentId: "grapple-rake" },
    ],
    afterPhoto: "/images/work/gonzales-5.JPG",
    galleryPhotos: [
      "/images/work/gonzales-1.jpeg",
      "/images/work/gonzales-6.jpeg",
      "/images/work/gonzales-2.jpeg",
      "/images/work/gonzales-3.jpeg",
      "/images/work/gonzales-4.jpeg",
    ],
    videoIds: ["aSRb_PbjbIE"],
  },
  {
    slug: "bertram-forestry-mulching",
    title: "Forestry Mulching in Bertram, Texas",
    description: "1 acre of cedar overgrowth cleared in Bertram, Texas. We mulched dense cedar growing beneath and around large red oaks, along with dead limbs and trees throughout the property.",
    longDescription: "This 1-acre Bertram property had dense cedar growth underneath and around several large red oaks. The cedar had started to compete with the mature oaks and was contributing to their decline.\n\nGrounded Land Services mulched the cedar overgrowth throughout the property, focusing on the areas directly beneath and around the red oaks. We also mulched numerous piles of dead limbs and dead trees that were scattered throughout the property.\n\nThe main goal of the project was to remove the cedar overgrowth and dead vegetation surrounding the red oaks, opening up the area around the mature trees and reducing the competing growth. The property was left with the red oaks more exposed and the surrounding areas cleared of the heavy cedar and dead material.",
    location: "Bertram, TX",
    locationSlug: "bertram",
    acreage: "1 Acre",
    timeline: "1 Day",
    services: [
      { label: "Forestry Mulching", slug: "forestry-mulching" },
    ],
    equipmentUsed: [
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Prinoth Mulching Head", equipmentId: "prinoth" },
    ],
    afterPhoto: "/images/work/henson-clearing-4-mulching.jpeg",
    galleryPhotos: [
      "/images/work/henson-before-after-2-mulching.jpeg",
      "/images/work/henson-before-after-mulching.jpeg",
      "/images/work/henson-clearing-2-mulching.jpeg",
      "/images/work/henson-clearing-3-mulching.jpeg",
      "/images/work/henson-before-after-3-mulching.jpeg",
      "/images/work/henson-clearing-mulching.jpeg",
    ],
  },
  {
    slug: "johnson-city-forestry-mulching",
    title: "Forestry Mulching in Johnson City, Texas",
    description: "1.8 acres of overgrown property mulched in Johnson City, Texas. We cleared small brush and cedar from beneath the customer's oak trees after the property had become too overgrown for their tractor to maintain. Rocky terrain made some areas more difficult to access, and rain during the project delayed completion. The property was left with a fresh start and the oaks opened up.",
    longDescription: "This 1.8-acre Johnson City property had become too overgrown for the owner's tractor to keep up with. Small brush and cedar had grown throughout the property, including beneath and around the existing oak trees.\n\nGrounded Land Services came in with a forestry mulcher to clear the small brush and cedar, giving the property a fresh start and opening up the areas around the oaks. The rocky terrain made some sections more difficult to work through than others.\n\nRain also moved in during the project and delayed completion. Once the work was finished, the overgrown brush and cedar had been mulched, leaving the property more open and manageable for the owners to maintain going forward.",
    location: "Johnson City, TX",
    locationSlug: "johnson-city",
    acreage: "1.8 Acres",
    timeline: "1 Day",
    services: [
      { label: "Forestry Mulching", slug: "forestry-mulching" },
    ],
    equipmentUsed: [
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Prinoth Forestry Mulcher", equipmentId: "prinoth" },
    ],
    afterPhoto: "/images/work/IMG_1592.jpeg",
    galleryPhotos: [
      "/images/work/IMG_7145.jpeg",
      "/images/work/IMG_7142.jpeg",
      "/images/work/IMG_7144.jpeg",
    ],
  },
{
    slug: "rockdale-forestry-mulching",
    title: "Forestry Mulching in Rockdale, Texas",
    description: "1.6 acres of overgrown property mulched in Rockdale, Texas. We cleared dead trees, cedar elms, mesquite, and hackberry to open up the property and make it easier to access.",
    longDescription: "This 1.6-acre Rockdale property had a mix of dead trees, cedar elms, mesquite, and hackberry that made portions of the property difficult to access and see.\n\nGrounded Land Services mulched the trees and brush across the property, opening up the overgrown areas and creating better access throughout the acreage. The main goal of the project was to make the property easier for potential buyers to walk and get a better view of the land.\n\nAfter the mulching was completed, the property was more open and accessible, giving visitors a much clearer view of the acreage and making it easier to walk and evaluate the property.",
    location: "Rockdale, TX",
    locationSlug: "rockdale",
    acreage: "1.6 Acres",
    timeline: "2 Days",
    services: [
      { label: "Forestry Mulching", slug: "forestry-mulching" },
    ],
    equipmentUsed: [
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Prinoth Forestry Mulcher", equipmentId: "prinoth" },
    ],
    afterPhoto: "/images/work/rockdale-mulching-2.jpeg",
    videoIds: ["pjVyQg81nEE"],
    galleryPhotos: [
      "/images/work/rockdale-mulching-1.JPG",
    ],
  },
{
    slug: "jonestown-forestry-mulching",
    title: "Forestry Mulching in Jonestown, Texas",
    description: "1.2 acres of forestry mulching in Jonestown, Texas. We mulched down large and small cedar trees, dead brush and limbs, and several dead red oaks to open up the property for recreational use. Despite the steep incline, rocky terrain, and trash scattered throughout, we completed the job in just one day.",
    longDescription: "This 1.2-acre property in Jonestown, Texas, needed clearing to make the area more accessible for recreational use. The property had large and small cedar trees, dead brush and limbs, and several dead red oaks that needed to be mulched.\n\nWe used our Prinoth mulching head paired with our Cat 275 to clear the unwanted vegetation and dead material throughout the area. The steep incline, rocky terrain, and trash scattered throughout the property made some sections more challenging to work through, but we completed the entire job in one day.\n\nThe result was a more open area that the owner can enjoy, with the cedar overgrowth, dead brush, limbs, and dead trees mulched in place.",
    location: "Jonestown, TX",
    locationSlug: "jonestown",
    acreage: "1.2 Acres",
    timeline: "1 Day",
    services: [
      { label: "Forestry Mulching", slug: "forestry-mulching" },
    ],
    equipmentUsed: [
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Prinoth Mulching Head", equipmentId: "prinoth" },
    ],
    afterPhoto: "/images/work/lago-vista-mulching.JPG",
    videoIds: ["CNAVOtb9FeU"],
  },
{
    slug: "carmine-forestry-mulching",
    title: "Forestry Mulching in Carmine, Texas",
    description: "5.8 acres of forestry mulching in Carmine, Texas. We mulched up massive dead cedar trees, dense cedar growth, heavy brush, and dead limbs/trees to open the property, create pasture land and hunting access. We also cleared around legacy oaks to reduce competition for water. An extra fine mulch finish left a thin layer of material to help promote grass growth.",
    longDescription: "This 5.8-acre Carmine property had massive dead cedar trees, dense cedar growth, heavy brush, and dead limbs/trees throughout the area. The owner wanted to open up the property, create pasture land, improve access for hunting, and clear competing cedar growth around the legacy oaks to reduce competition for water.\n\nWe used our Prinoth forestry mulcher paired with our Cat 275 to process the cedar, brush, and dead vegetation in place. Special attention was given to opening up the areas around the mature oaks while clearing the overgrown sections of the property.\n\nFor the final pass, we gave the property an extra fine mulch finish, leaving a thin layer of mulched material across the cleared areas. This finish was intended to help grass establish and grow through the mulch as the property develops into pasture.\n\nThe result was a more open and accessible 5.8-acre property, with reduced cedar competition around the legacy oaks and the groundwork laid for future pasture growth and hunting use.",
    location: "Carmine, TX",
    locationSlug: "carmine",
    acreage: "5.8 Acres",
    timeline: "5 Days",
    services: [
      { label: "Forestry Mulching", slug: "forestry-mulching" },
    ],
    equipmentUsed: [
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Prinoth Mulching Head", equipmentId: "prinoth" },
    ],
    afterPhoto: "/images/work/carmine-mulching.jpeg",
    galleryPhotos: [
      "/images/work/B8149350-A976-41F6-8DF0-33DA9C4C31ED.jpeg",
      "/images/work/0D85F6BC-81E3-48AD-ABF8-A506D42A0520.jpeg",
      "/images/work/F6E63EEB-DC78-41A9-AD5D-C83E2F489DAA.jpeg",
    ],
  },
  {
    slug: "burnet-forestry-mulching",
    title: "Forestry Mulching in Burnet, Texas",
    description: "2.4 acres of forestry mulching in Burnet, Texas. We mulched cedar growth, including dead cedar trees, to open up the property and the existing oaks ahead of the owner's plans to sell. Despite steep, rocky terrain and scattered trash, we completed the job in just two days, leaving the land more open and appealing to potential buyers.",
    longDescription: "This 2.4-acre property in Burnet, Texas, had cedar growth throughout the land, including dead cedar trees growing around the existing oaks. With the owner preparing to sell, the goal was to clear the cedar, open up the oaks, and make the property more visible and appealing to potential buyers.\n\nWe used our Prinoth forestry mulcher paired with our Cat 275 to clear the cedar across the property, processing both live and dead trees in place. The steep, rocky terrain made some sections more challenging to work through, and scattered trash added to the obstacles during the job.\n\nDespite these conditions, we completed the project in two days. The result was a more open property with the cedar overgrowth cleared and the oaks more visible, giving potential buyers a better view of the land.",
    location: "Burnet, TX",
    locationSlug: "burnet",
    acreage: "2.4 Acres",
    timeline: "2 Days",
    services: [
      { label: "Forestry Mulching", slug: "forestry-mulching" },
    ],
    equipmentUsed: [
      { label: "Cat 275 XE", equipmentId: "cat-275" },
      { label: "Prinoth Mulching Head", equipmentId: "prinoth" },
    ],
    afterPhoto: "/images/work/IMG_0534.jpeg",
    galleryPhotos: [
      "/images/work/IMG_0535.jpeg",
    ],
  },
];