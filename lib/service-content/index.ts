import { getCityInfo, rockCrushingCities } from "@/data/service-areas";
import { cityFacts } from "@/data/city-facts";
import { landClearingContent } from "./land-clearing";
import { forestryMulchingContent } from "./forestry-mulching";
import { rockCrushingContent } from "./rock-crushing";
import { demolitionContent } from "./demolition";
import { ServiceContent } from "./types";
import { servicePricing } from "@/data/service-pricing";
import { getServiceFaqs } from "@/data/service-faqs";

const templates: Record<string, (city: string, nearby: string[]) => ServiceContent> = {
  "land-clearing": landClearingContent,
  "forestry-mulching": forestryMulchingContent,
  "rock-crushing": rockCrushingContent,
  "demolition": demolitionContent,
};

export function getServiceContent(
  citySlug: string,
  serviceSlug: string
): { content: ServiceContent; cityName: string } | null {
  const cityInfo = getCityInfo(citySlug);
  const template = templates[serviceSlug];
  if (!cityInfo || !template) return null;

  if (serviceSlug === "rock-crushing" && !rockCrushingCities.includes(cityInfo.name)) {
    return null;
  }

const content = template(cityInfo.name, cityInfo.nearby);
  content.pricing = servicePricing[serviceSlug];
  content.faqs = getServiceFaqs(serviceSlug, cityInfo.name, cityInfo.nearby);
  content.county = cityFacts[cityInfo.name]?.county;

  return { content, cityName: cityInfo.name };
}