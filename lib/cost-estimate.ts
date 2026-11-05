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

export const densityOptions: { value: Density; label: string }[] = [
  { value: "light", label: "Light brush" },
  { value: "medium", label: "Medium brush" },
  { value: "thick", label: "Thick cedar" },
];

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

// Land clearing per acre, Harley raking included.
const CLEARING_PER_ACRE: Record<Density, number> = { light: 3000, medium: 3500, thick: 4000 };
// Rock removal per acre.
const ROCK_PER_ACRE: Record<RockLevel, number> = { little: 2000, some: 3000, lots: 4000 };

// Haul-off: 3–6 loads per acre at $250–$350 per load.
const LOADS_PER_ACRE: [number, number] = [3, 6];
const LOAD_COST: [number, number] = [250, 350];

/** Haul-off checkbox: offered for these services, and whether it starts checked. */
export const haulOffDefault: Partial<Record<CalculatorService, boolean>> = {
  "land-clearing": false,
  "rock-removal": true,
};
export const haulOffNote = "Haul-offs depend on how much debris and rock there is.";

export const priceDrivers: Record<CalculatorService, string> = {
  "land-clearing": "Brush density moves the price most, and hauling debris off adds to it.",
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
const roundDown = (n: number) => Math.floor(n / 50) * 50;
const roundUp = (n: number) => Math.ceil(n / 50) * 50;
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
    const perAcre = service === "land-clearing" ? CLEARING_PER_ACRE[density] : ROCK_PER_ACRE[rock];
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
