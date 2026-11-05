// Cost calculator math. Only the owner's numbers from business-facts.md (2026-10-21/28):
// land clearing and rock removal $2,000–$4,000 per acre, forestry mulching $2,500–$3,000 per day,
// mulching rates (light 2–3 ac/day, medium ~1.5, thick cedar ~1), $1,000 minimum job.
// Keep in sync with data/service-pricing.ts and data/service-timelines.ts.

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
  { value: "little", label: "Little rock" },
  { value: "some", label: "Some rock" },
  { value: "lots", label: "Lots of rock" },
];

export const MINIMUM_JOB_DOLLARS = 1000;
const PER_ACRE_LOW = 2000;
const PER_ACRE_HIGH = 4000;
const DAY_RATE_LOW = 2500;
const DAY_RATE_HIGH = 3000;
/** Acres per day mulched: [fewest, most]. */
const MULCHING_ACRES_PER_DAY: Record<Density, [number, number]> = {
  light: [2, 3],
  medium: [1.5, 1.5],
  thick: [1, 1],
};

const DENSITY_STEP: Record<Density, number> = { light: 0, medium: 1, thick: 2 };
const ROCK_STEP: Record<RockLevel, number> = { little: 0, some: 1, lots: 2 };

/** Moves along the $2,000–$4,000 per-acre range: step 0 = $2,000–$3,000 … top step = $3,000–$4,000. */
function perAcreBand(step: number, maxStep: number): [number, number] {
  const width = (PER_ACRE_HIGH - PER_ACRE_LOW) / 2;
  const low = PER_ACRE_LOW + (width * step) / maxStep;
  return [low, low + width];
}

export const priceDrivers: Record<CalculatorService, string> = {
  "land-clearing": "Brush density and rock move the price most, then terrain and access.",
  "forestry-mulching": "Mulching is billed by the day, so how thick the brush is moves the price most.",
  "rock-removal": "How much rock there is moves the price most, then how deep it's embedded and haul-off.",
};

export interface Estimate {
  low: number;
  high: number;
  /** True when the whole range is at or under the minimum job. */
  minimumOnly: boolean;
}

const roundDown = (n: number) => Math.floor(n / 100) * 100;
const roundUp = (n: number) => Math.ceil(n / 100) * 100;

export function estimate(service: CalculatorService, acres: number, density: Density, rock: RockLevel): Estimate | null {
  if (!Number.isFinite(acres) || acres <= 0) return null;

  let low: number;
  let high: number;

  if (service === "forestry-mulching") {
    // Priced by the day: days = acres ÷ acres per day (used for the price only, not shown)
    const [slowest, fastest] = MULCHING_ACRES_PER_DAY[density];
    low = (acres / fastest) * DAY_RATE_LOW;
    high = (acres / slowest) * DAY_RATE_HIGH;
  } else {
    const [perLow, perHigh] =
      service === "land-clearing"
        ? perAcreBand(DENSITY_STEP[density] + ROCK_STEP[rock], 4)
        : perAcreBand(ROCK_STEP[rock], 2);
    low = acres * perLow;
    high = acres * perHigh;
  }

  low = roundDown(low);
  high = roundUp(high);
  if (high <= MINIMUM_JOB_DOLLARS) {
    return { low: MINIMUM_JOB_DOLLARS, high: MINIMUM_JOB_DOLLARS, minimumOnly: true };
  }
  return { low: Math.max(low, MINIMUM_JOB_DOLLARS), high, minimumOnly: false };
}

export const formatDollars = (n: number) => `$${n.toLocaleString("en-US")}`;
