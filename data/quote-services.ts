// Service slug → label used in the quote form's "Service" dropdown.
// Labels match the page titles in lib/services-content so ?service= prefill works.
// Ordered by owner priority (land clearing, forestry mulching, rock removal first).
export const quoteServiceLabels: Record<string, string> = {
  "land-clearing": "Land Clearing",
  "forestry-mulching": "Forestry Mulching",
  "rock-removal": "Rock Removal",
  "cedar-tree-removal": "Cedar Tree Removal",
  "rock-crushing": "Rock Crushing",
  "rock-cactus-removal": "Rock & Cactus Removal",
  "residential-lot-clearing": "Residential Lot Clearing",
  "commercial-lot-clearing": "Commercial Lot Clearing",
  "site-preparation": "Site Preparation",
  "underbrushing": "Underbrushing",
  "fence-line-clearing": "Fence Line Clearing",
  "tree-pile-shredding": "Tree Pile Shredding",
  "forestry-mulching-cleanup": "Forestry Mulching Cleanup",
  "tree-stump-removal": "Tree & Stump Removal",
  "demolition": "Demolition",
  "dirt-work-grading": "Dirt Work & Grading",
  "gravel-driveways-roads": "Gravel Driveways & Roads",
  "utility-trenching": "Utility Trenching",
  "retaining-walls": "Retaining Walls",
  "right-of-way-clearing": "Right-of-Way Clearing",
  "fire-breaks": "Fire Breaks",
  "atv-trail-creation": "ATV Trail Creation",
  "site-cleanup": "Site Cleanup",
  "storm-damage-cleanup": "Storm Damage Cleanup",
};

export const quoteServices = [...Object.values(quoteServiceLabels), "Other / Multiple Services"];
