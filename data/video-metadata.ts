// Poster images (shown until a video loads) are finished-result photos of the same kind of job.
// posterPosition crops before/after composites to the "after" half.
const LAND_CLEARING_POSTER = "/images/official/homepage.jpeg"; // Gonzales land clearing, finished
const MULCHING_POSTER = "/images/work/henson-clearing-4-mulching.jpeg"; // Bertram mulching, finished

export const videoPosters: Record<string, { src: string; position?: string }> = {
  "aSRb_PbjbIE": { src: LAND_CLEARING_POSTER },
  "W1AeIo_miIA": { src: LAND_CLEARING_POSTER },
  "BRUpzEYxYFg": { src: LAND_CLEARING_POSTER },
  "sroBopMm2rc": { src: LAND_CLEARING_POSTER },
  "KjYxH1hgTwM": { src: MULCHING_POSTER },
  "RwfM81A1NRk": { src: MULCHING_POSTER },
  "_3PySbe3zwU": { src: MULCHING_POSTER },
  "hLimv0coUqo": { src: "/images/work/dji_fly_20260130_143526_0122_1769999345932_photo.jpeg" }, // Bertram burn-pile case study, after
  "pjVyQg81nEE": { src: "/images/work/rockdale-mulching-2.jpeg" }, // Rockdale case study, after
  "CNAVOtb9FeU": { src: "/images/work/lago-vista-mulching.JPG" }, // Jonestown case study, after
  "0jYU5H4qCi0": { src: "/images/work/anderson-pool-demo.jpeg", position: "center bottom" }, // before/after; bottom = finished
};
export const DEFAULT_VIDEO_POSTER = { src: LAND_CLEARING_POSTER };

export const videoMetadata: Record<string, { name: string; description: string; uploadDate: string }> = {
  "aSRb_PbjbIE": { name: "Land Clearing in Action", description: "Traditional land clearing project completed by Grounded Land Services in Central Texas.", uploadDate: "2026-07-31" },
  "W1AeIo_miIA": { name: "Completed Land Clearing Project", description: "A finished land clearing project showing the results of traditional land clearing services in Central Texas.", uploadDate: "2026-07-30" },
  "BRUpzEYxYFg": { name: "Land Clearing Process", description: "Behind-the-scenes look at the land clearing process performed by Grounded Land Services.", uploadDate: "2026-07-31" },
  "KjYxH1hgTwM": { name: "Forestry Mulching in Action", description: "Forestry mulching equipment clearing cedar and brush on Central Texas acreage.", uploadDate: "2026-07-31" },
  "hLimv0coUqo": { name: "Forestry Mulching in Action", description: "Forestry mulching equipment clearing cedar and brush on Central Texas acreage.", uploadDate: "2026-07-31" },
  "RwfM81A1NRk": { name: "Forestry Mulching in Action", description: "Forestry mulching equipment clearing cedar and brush on Central Texas acreage.", uploadDate: "2026-07-31" },
  "_3PySbe3zwU": { name: "Forestry Mulching in Action", description: "Forestry mulching equipment clearing cedar and brush on Central Texas acreage.", uploadDate: "2026-08-12" },
    "0jYU5H4qCi0": { name: "Pool Demolition", description: "Pool demolition project completed by Grounded Land Services in Central Texas.", uploadDate: "2026-07-31" },
  "sroBopMm2rc": { name: "Completed Land Clearing Project", description: "Completed land clearing and cedar removal project by Grounded Land Services in the Texas Hill Country.", uploadDate: "2026-08-17" },
"CNAVOtb9FeU": { name: "Forestry Mulching in Jonestown, TX", description: "Forestry mulching project completed by Grounded Land Services in Jonestown, Texas.", uploadDate: "2026-10-12" },
"pjVyQg81nEE": { name: "Forestry Mulching in Rockdale, TX", description: "Forestry mulching project completed by Grounded Land Services in Rockdale, Texas.", uploadDate: "2026-10-12" },
};