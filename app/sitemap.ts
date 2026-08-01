import type { MetadataRoute } from "next";

const BASE_URL = "https://www.groundedlandservices.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
  ];
}
