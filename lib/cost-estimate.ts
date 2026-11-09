// Cost calculator math: the owner's calculator pricing rules in business-facts.md (2026-11-04).
// These per-tier numbers are for the calculator only; page copy keeps the published ranges in
// data/service-pricing.ts. The internal multi-day mulching rate is deliberately NOT used here.

export type CalculatorService = "land-clearing" | "forestry-mulching" | "rock-removal";
export type Density = "light" | "medium" | "thick";
export type RockLevel = "little" | "some" | "lots";

export const calculatorServices: { value: CalculatorService; label: string }[] = [
  { value: "land-clearing", label: "Land Clearing" },
  { value: "forestry-mulching", label: "Forestry Mulching" },
  { value: "rock-removal", label: "Rock Removal" },
];

/** Land clearing says "Thick brush"; mulching keeps "Thick cedar" (its rates are for thick cedar). */
export function densityOptions(service: CalculatorService): { value: Density; label: string }[] {
  return [
    { value: "light", label: "Light brush" },
    { value: "medium", label: "Medium brush" },
    { value: "thick", label: service === "land-clearing" ? "Thick brush" : "Thick cedar" },
  ];
}

export const rockOptions: { value: RockLevel; label: string }[] = [
  { value: "little", label: "Small rock" },
  { value: "some", label: "Some mixed rock" },
  { value: "lots", label: "Lots of rock, all sizes" },
];

export const MINIMUM_JOB_DOLLARS = 1000;

// Forestry mulching: billed by the day, mulched in place (no haul-off).
const DAY_RATE_LOW = 2500;
const DAY_RATE_HIGH = 3000;
/** Acres mulched per day: [slowest, fastest]. */
const MULCHING_ACRES_PER_DAY: Record<Density, [number, number]> = {
  light: [2, 3],
  medium: [1.25, 1.75],
  thick: [0.7, 1],
};

// Land clearing per acre, Harley raking included. Small jobs cost more per acre (travel and setup).
function clearingPerAcre(acres: number, density: Density): number {
  if (acres < 2) return { light: 3000, medium: 3500, thick: 4000 }[density];
  if (acres < 5) return { light: 2500, medium: 2700, thick: 3000 }[density];
  return { light: 2000, medium: 2200, thick: 3000 }[density];
}
// Rock removal per acre.
const ROCK_PER_ACRE: Record<RockLevel, number> = { little: 2000, some: 3000, lots: 4000 };

// Haul-off: 3–6 loads per acre at $250–$350 per load.
const LOADS_PER_ACRE: [number, number] = [3, 6];
const LOAD_COST: [number, number] = [250, 350];

/** Services that offer the haul-off checkbox. */
export const offersHaulOff = (service: CalculatorService) => service !== "forestry-mulching";
/** Whether haul-off starts checked: always for rock removal; land clearing only on lots under 2 acres. */
export function haulOffDefault(service: CalculatorService, acres: number): boolean {
  if (service === "rock-removal") return true;
  if (service === "land-clearing") return acres > 0 && acres < 2;
  return false;
}
export const haulOffNote = "Haul-offs depend on how much debris and rock there is.";

/** Shown under the land clearing result. */
export const clearingCeilingNote =
  "Steep terrain, trash removal, or rock removal can raise the price up to $4,000 an acre. We'll give you a firm price after we see the property.";

export const priceDrivers: Record<CalculatorService, string> = {
  "land-clearing": "Brush density and lot size move the price most, and hauling debris off adds to it.",
  "forestry-mulching": "Mulching is billed by the day, so how thick the brush is moves the price most.",
  "rock-removal": "How much rock there is, and how big, moves the price most. Hauling it off adds to it.",
};

export interface Estimate {
  low: number;
  high: number;
  /** True when the whole range is at or under the minimum job. */
  minimumOnly: boolean;
}

// To the nearest $50 (outward), so fractional acres don't show odd dollar amounts
// (cents first, so float noise like 4.9 × 3000 = 14700.000000000002 doesn't round up a step)
const cents = (n: number) => Math.round(n * 100) / 100;
const roundDown = (n: number) => Math.floor(cents(n) / 50) * 50;
const roundUp = (n: number) => Math.ceil(cents(n) / 50) * 50;
/** Up to the nearest half day, at least one day. */
const billableDays = (days: number) => Math.max(1, Math.ceil(days * 2) / 2);

export function estimate(
  service: CalculatorService,
  acres: number,
  density: Density,
  rock: RockLevel,
  haulOff: boolean
): Estimate | null {
  if (!Number.isFinite(acres) || acres <= 0) return null;

  let low: number;
  let high: number;

  if (service === "forestry-mulching") {
    // Days are used for the price only, never shown.
    const [slowest, fastest] = MULCHING_ACRES_PER_DAY[density];
    low = billableDays(acres / fastest) * DAY_RATE_LOW;
    high = billableDays(acres / slowest) * DAY_RATE_HIGH;
  } else {
    const perAcre = service === "land-clearing" ? clearingPerAcre(acres, density) : ROCK_PER_ACRE[rock];
    low = high = acres * perAcre;
    if (haulOff) {
      low += Math.ceil(acres * LOADS_PER_ACRE[0]) * LOAD_COST[0];
      high += Math.ceil(acres * LOADS_PER_ACRE[1]) * LOAD_COST[1];
    }
  }

  low = roundDown(low);
  high = roundUp(high);
  if (high <= MINIMUM_JOB_DOLLARS) {
    return { low: MINIMUM_JOB_DOLLARS, high: MINIMUM_JOB_DOLLARS, minimumOnly: true };
  }
  return { low: Math.max(low, MINIMUM_JOB_DOLLARS), high, minimumOnly: false };
}

export const formatDollars = (n: number) => `$${n.toLocaleString("en-US")}`;
