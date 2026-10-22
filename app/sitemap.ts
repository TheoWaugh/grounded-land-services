import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { servicesContent } from "@/lib/services-content";
import { caseStudies } from "@/lib/case-studies";
import { serviceAreas, slugify, rockCrushingCities } from "@/data/service-areas";

const BASE_URL = "https://www.groundedlandservices.com";

const citySlugs = Object.values(serviceAreas)
  .flat()
  .map((city) => ({ name: city, slug: slugify(city) }));

// lastModified = the newest git commit date among a page's source files, so it only
// changes when the content does. If git isn't available, it's omitted rather than faked.
const commitDates = new Map<string, Date | undefined>();
function commitDate(file: string): Date | undefined {
  if (!commitDates.has(file)) {
    let date: Date | undefined;
    try {
      const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], { encoding: "utf8" }).trim();
      date = out ? new Date(out) : undefined;
    } catch {
      date = undefined;
    }
    commitDates.set(file, date);
  }
  return commitDates.get(file);
}
function lastModified(...files: string[]): Date | undefined {
  const dates = files.map(commitDate).filter((d): d is Date => Boolean(d));
  return dates.length ? new Date(Math.max(...dates.map((d) => d.getTime()))) : undefined;
}

type Entry = MetadataRoute.Sitemap[number];
function entry(path: string, files: string[], changeFrequency: Entry["changeFrequency"], priority: number): Entry {
  const modified = lastModified(...files);
  return {
    url: `${BASE_URL}${path}`,
    ...(modified ? { lastModified: modified } : {}),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    entry("", ["app/page.tsx"], "weekly", 1.0),
    entry("/services", ["app/services/page.tsx"], "monthly", 0.9),
    entry("/service-areas", ["app/service-areas/page.tsx", "data/service-areas.ts"], "monthly", 0.85),
    entry("/contact", ["app/contact/page.tsx"], "yearly", 0.9),
    entry("/case-studies", ["app/case-studies/page.tsx", "lib/case-studies.ts"], "weekly", 0.8),
    entry("/gallery", ["app/gallery/page.tsx"], "weekly", 0.8),
    entry("/equipment", ["app/equipment/page.tsx"], "monthly", 0.6),
    entry("/faq", ["app/faq/page.tsx", "lib/services-content/index.ts"], "monthly", 0.7),
    entry("/privacy", ["app/privacy/page.tsx"], "yearly", 0.2),
  ];

  const servicePages = Object.keys(servicesContent).map((slug) =>
    entry(`/services/${slug}`, ["lib/services-content/index.ts", "app/services/[service]/page.tsx"], "monthly", 0.8)
  );

  const caseStudyPages = caseStudies.map((study) =>
    entry(`/case-studies/${study.slug}`, ["lib/case-studies.ts", "app/case-studies/[slug]/page.tsx"], "monthly", 0.7)
  );

  const cityHubPages = citySlugs.map((city) =>
    entry(
      `/service-areas/${city.slug}`,
      ["app/service-areas/[city]/page.tsx", "data/city-facts.ts", "lib/case-studies.ts"],
      "monthly",
      0.75
    )
  );

  const coreServices = ["land-clearing", "forestry-mulching", "rock-removal", "rock-crushing", "demolition"];
  const rockServices = ["rock-crushing", "rock-removal"];
  const cityServicePages: MetadataRoute.Sitemap = [];

  for (const city of citySlugs) {
    for (const service of coreServices) {
      if (rockServices.includes(service) && !rockCrushingCities.includes(city.name)) {
        continue;
      }
      cityServicePages.push(
        entry(
          `/service-areas/${city.slug}/${service}`,
          [`lib/service-content/${service}.ts`, "data/service-faqs.ts", "data/city-facts.ts", "app/service-areas/[city]/[service]/page.tsx"],
          "monthly",
          0.75
        )
      );
    }
  }

  return [...staticPages, ...servicePages, ...caseStudyPages, ...cityHubPages, ...cityServicePages];
}
