import { caseStudies } from "@/lib/case-studies";
import { slugify } from "@/data/service-areas";
import { cityLocal, type CityLocal } from "@/data/city-local";
import type { ServiceSection } from "./types";

// Pieces shared by the answer-first city templates (land clearing, forestry mulching, rock removal).

/** Reads correctly whether the city's invasive growth is one plant or a list. */
export function invasiveSentence(city: string, invasiveVegetation: string): string {
  return `On overgrown ${city} acreage, we most often clear ${invasiveVegetation}.`;
}

/** The owner's fleet (business-facts.md). */
export const FLEET =
  "a 2025 CAT 323 excavator, a 2026 CAT 275 XE and a 2020 CAT 299 D3 XE land management track loader, plus CAT grapples and a grapple rake";

/**
 * Priority cities (data/city-local.ts): the hand-written local conditions plus this service's local
 * note, replacing the generic city-facts paragraphs. Null for every other city.
 */
export function localConditions(city: string, service: keyof CityLocal["serviceNotes"]): string[] | null {
  const local = cityLocal[city];
  if (!local) return null;
  const note = local.serviceNotes[service];
  return note ? [...local.land, note] : local.land;
}

/**
 * "Why choose us" proof: an equipment line, this city's case studies (any service) or a link to all
 * of them, and the customer reviews rendered inside the section. Priority cities point to the
 * local-proof block instead, which lists their case studies and the nearest ones.
 */
export function whyUsProof(city: string, equipmentSentence: string): Required<Pick<ServiceSection, "paragraphs" | "showReviews">> & Pick<ServiceSection, "list"> {
  if (cityLocal[city]) {
    return {
      paragraphs: [equipmentSentence, `See [our work in and near ${city}](#local-proof) below.`],
      showReviews: true,
    };
  }
  const slug = slugify(city);
  const local = caseStudies.filter((c) => c.locationSlug === slug || c.nearbyCitySlugs?.includes(slug));
  const where = local.some((c) => c.locationSlug !== slug) ? "in and near" : "in";
  return {
    paragraphs: [
      equipmentSentence,
      local.length > 0 ? `Recent work ${where} ${city}:` : "See more of our completed projects in our [case studies](/case-studies).",
    ],
    list:
      local.length > 0
        ? local.map((c) => ({ label: `${c.title} (${c.acreage}, ${c.timeline})`, href: `/case-studies/${c.slug}` }))
        : undefined,
    showReviews: true,
  };
}
