// Local Google reviews for cities without a full local block (data/city-local.ts).
// Reviewer names match data/testimonials.ts.
const cityReviews: Record<string, { names: string[]; services?: string[] }> = {
  "Killeen": { names: ["James Mathis"] },
};

/** Reviewers to show on a city page. A city with `services` shows them only on those service pages, not the hub. */
export function reviewsFor(city: string, service?: string): string[] {
  const entry = cityReviews[city];
  if (!entry) return [];
  return !entry.services || (service && entry.services.includes(service)) ? entry.names : [];
}
