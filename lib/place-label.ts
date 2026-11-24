import { milesBetween } from "@/lib/bertram-distance";

// "Spicewood, TX" → "Spicewood", "Near Jonestown, TX" → "Jonestown"
export const cityOf = (location: string) => location.split(",")[0].replace(/^Near /, "").trim();

/** "In Bertram" for the page's own city, otherwise "Burnet · about 11 mi away". */
export function placeLabel(pageCity: string, otherCity: string): string {
  if (otherCity === pageCity) return `In ${pageCity}`;
  const miles = milesBetween(pageCity, otherCity);
  return miles === null ? otherCity : `${otherCity} · about ${Math.round(miles)} mi away`;
}
