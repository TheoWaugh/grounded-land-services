import { BERTRAM, cityCoordinates } from "@/data/city-coordinates";
import { serviceAreas } from "@/data/service-areas";

/** Cities this close to Bertram (straight line) can be described as "nearby". */
export const NEARBY_MILES = 50;

// Region names as they read mid-sentence ("the surrounding San Antonio area").
const regionPhrase: Record<string, string> = {
  "Austin Metro": "Austin metro",
  "Hill Country": "Hill Country",
  "Central Texas": "Central Texas",
  "San Antonio Area": "San Antonio",
};

type Point = { lat: number; lng: number };

function greatCircleMiles(from: Point, to: Point): number {
  const rad = (d: number) => (d * Math.PI) / 180;
  const a =
    Math.sin(rad(to.lat - from.lat) / 2) ** 2 +
    Math.cos(rad(from.lat)) * Math.cos(rad(to.lat)) * Math.sin(rad(to.lng - from.lng) / 2) ** 2;
  return 2 * 3958.8 * Math.asin(Math.sqrt(a));
}

/** Straight-line (great-circle) miles from Bertram, or null if we don't have the city's coordinates. */
export function milesFromBertram(city: string): number | null {
  const c = cityCoordinates[city];
  return c ? greatCircleMiles(BERTRAM, c) : null;
}

/** Straight-line miles between two cities in data/city-coordinates.ts, or null if either is missing. */
export function milesBetween(a: string, b: string): number | null {
  const from = cityCoordinates[a];
  const to = cityCoordinates[b];
  return from && to ? greatCircleMiles(from, to) : null;
}

/**
 * The "based in Bertram" sentence for a city page. Only cities within 50 miles are called nearby;
 * anything farther (or without coordinates) gets the regional wording instead.
 */
export function bertramSentence(city: string): string {
  const closing = "been doing this work since 2020, and every job starts with a free on-site estimate.";
  if (city === "Bertram") return `We're based right here in Bertram, have ${closing}`;
  const miles = milesFromBertram(city);
  if (miles !== null && miles <= NEARBY_MILES) return `We're based in nearby Bertram, have ${closing}`;
  const region = Object.entries(serviceAreas).find(([, cities]) => cities.includes(city))?.[0];
  const area = region ? `the surrounding ${regionPhrase[region] ?? region} area` : "the surrounding area";
  return `Based in Bertram, we serve ${city} and ${area}. We've ${closing}`;
}
