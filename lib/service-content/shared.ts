import { caseStudies } from "@/lib/case-studies";
import { slugify } from "@/data/service-areas";
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
 * "Why choose us" proof: an equipment line, this city's case studies (any service) or a link to all
 * of them, and the customer reviews rendered inside the section.
 */
export function whyUsProof(city: string, equipmentSentence: string): Required<Pick<ServiceSection, "paragraphs" | "showReviews">> & Pick<ServiceSection, "list"> {
  const local = caseStudies.filter((c) => c.locationSlug === slugify(city));
  return {
    paragraphs: [
      equipmentSentence,
      local.length > 0 ? `Recent work in ${city}:` : "See more of our completed projects in our [case studies](/case-studies).",
    ],
    list:
      local.length > 0
        ? local.map((c) => ({ label: `${c.title} (${c.acreage}, ${c.timeline})`, href: `/case-studies/${c.slug}` }))
        : undefined,
    showReviews: true,
  };
}
