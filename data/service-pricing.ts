export interface ServicePricing {
  label: string;
  range: string;
  unit: string;
  note: string;
}

export const servicePricing: Record<string, ServicePricing> = {
  "land-clearing": {
    label: "Traditional Land Clearing",
    range: "$2,500 – $10,000+",
    unit: "per job",
    note: "Pricing depends on acreage, tree density, terrain, rock removal requirements, and accessibility.",
  },
"forestry-mulching": {
    label: "Forestry Mulching",
    range: "$2,500 – $3,000",
    unit: "per day",
    note: "Pricing depends on brush density, cedar size, and how selective the clearing needs to be.",
  },
"rock-crushing": {
    label: "Rock Crushing",
    range: "$3,000 – $4,000+",
    unit: "per day",
    note: "Pricing depends on rock volume, depth, and the amount of aggregate being produced for reuse.",
  },
  "demolition": {
    label: "Demolition",
    range: "$1,500 – $10,000+",
    unit: "per job",
    note: "Pricing depends on structure size, materials, foundation type, and debris hauling needs.",
  },
};