import type { MetadataRoute } from "next";
import { servicesContent } from "@/lib/services-content";
import { serviceAreas, slugify, rockCrushingCities } from "@/data/service-areas";

const BASE_URL = "https://www.groundedlandservices.com";

const citySlugs = Object.values(serviceAreas)
  .flat()
  .map((city) => ({ name: city, slug: slugify(city) }));

const citySlugSet = new Set(citySlugs.map((c) => c.slug));

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const serviceSlugs = Object.keys(servicesContent);
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const coreServices = ["land-clearing", "forestry-mulching", "rock-crushing", "demolition"];
  const cityServicePages: MetadataRoute.Sitemap = [];

  for (const city of citySlugs) {
    for (const service of coreServices) {
      if (service === "rock-crushing" && !rockCrushingCities.includes(city.name)) {
        continue;
      }
      cityServicePages.push({
        url: `${BASE_URL}/service-areas/${city.slug}/${service}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  return [...staticPages, ...servicePages, ...cityServicePages];
}