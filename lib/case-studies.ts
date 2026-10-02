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
];