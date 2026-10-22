import { servicePricing, MINIMUM_JOB } from "@/data/service-pricing";
import { MULCHING_RATES, EXCAVATOR_RATES } from "@/data/service-timelines";

// Answer-first "How much / how long" content for the owner's priority services. Rather than adding
// new blocks, it turns the page's own cost-factors and process sections into question-headed
// sections whose first sentence answers the question (what Google and AI tools quote).
export const quickAnswerServices = ["land-clearing", "forestry-mulching", "rock-removal"];

interface Section {
  heading?: string;
  paragraphs?: string[];
}

interface Answers {
  costHeading: string;
  /** First paragraph of the cost section: the price in the first sentence. */
  cost: string;
  /** Leads into the existing cost-factor cards when merging into a cost-factors section. */
  costFactorsLead: string;
  /** Second sentence for a standalone cost section (pages with no cost-factors section). */
  costDetail: string;
  processHeading?: string;
  /** First paragraph of the process section: the timeline in the first sentence. */
  timeline?: string;
}

function answersFor(service: string, city?: string): Answers | null {
  const pricing = servicePricing[service];
  if (!quickAnswerServices.includes(service) || !pricing) return null;
  const inPlace = ` in ${city ?? "Central Texas"}`;
  const inCity = city ? ` in ${city}` : "";
  const cost = (name: string) =>
    `${name}${inPlace} costs ${pricing.range} ${pricing.unit}, with a ${MINIMUM_JOB} minimum job and free on-site estimates.`;

  switch (service) {
    case "land-clearing":
      return {
        costHeading: `How much does land clearing cost${inPlace}?`,
        cost: cost("Land clearing"),
        costFactorsLead: "Where your property falls in that range comes down to these factors:",
        costDetail: "Where your property falls in that range comes down to tree density, terrain, rock, and access.",
        processHeading: `How long does land clearing take${inCity}, and what's the process?`,
        timeline: `Land clearing${inCity} typically covers ${EXCAVATOR_RATES} with our excavator. Acres per day depend on ground conditions and terrain.`,
      };
    case "forestry-mulching":
      return {
        costHeading: `How much does forestry mulching cost${inPlace}?`,
        cost: cost("Forestry mulching"),
        costFactorsLead: "Since it's billed by the day, your total comes down to how much ground we can cover, which depends on these factors:",
        costDetail: "Since it's billed by the day, your total comes down to how much ground we can cover.",
        processHeading: `How long does forestry mulching take${inCity}, and what's the process?`,
        timeline: `Forestry mulching${inCity} covers ${MULCHING_RATES}. That means a 5-acre tract of thick cedar takes about five days, while the same five acres of light brush takes about two.`,
      };
    case "rock-removal":
      return {
        costHeading: `How much does rock removal cost${inPlace}?`,
        cost: cost("Rock removal"),
        costFactorsLead: "Where your property falls in that range comes down to these factors:",
        costDetail: "The price depends mostly on how much rock there is, how deeply it's embedded, and whether it gets hauled off.",
      };
    default:
      return null;
  }
}

const isCostSection = (s: Section) => /\bcost\b/i.test(s.heading ?? "");
const isProcessSection = (s: Section) => /\bprocess\b/i.test(s.heading ?? "");

/**
 * Merges the answers into the page's sections:
 * - cost answer + cost factors → one section headed by the cost question (standalone just before the process section if there's no cost-factors section);
 * - timeline + process → one section headed "How long …, and what's the process?" (only where the owner gave rates).
 */
export function withQuickAnswers<T extends Section>(service: string, sections: T[], city?: string): T[] {
  const a = answersFor(service, city);
  if (!a) return sections;

  const merged = sections.map((s) => {
    if (isCostSection(s)) {
      return { ...s, heading: a.costHeading, paragraphs: [a.cost, a.costFactorsLead] };
    }
    if (isProcessSection(s) && a.timeline && a.processHeading) {
      return { ...s, heading: a.processHeading, paragraphs: [a.timeline, ...(s.paragraphs ?? [])] };
    }
    return s;
  });

  if (sections.some(isCostSection)) return merged;

  // No cost-factors section: the cost question goes just before the process section (cost, then how long).
  const standalone = { heading: a.costHeading, paragraphs: [a.cost, a.costDetail] } as T;
  const processIndex = sections.findIndex(isProcessSection);
  const at = processIndex >= 0 ? processIndex : Math.min(1, merged.length);
  return [...merged.slice(0, at), standalone, ...merged.slice(at)];
}
