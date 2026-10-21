# Business facts: Grounded Land Services
Pre-filled from the website code and confirmed by the owner on 2026-10-20.
Lines marked ❓ still need the owner's answer. Claude must not invent anything that's blank or ❓.

## Identity (must match Google Business Profile EXACTLY)
- Display name: Grounded Land Services
- Phone: (512) 571-6700
- Email: Logan@groundedlandservices.com
- Address: HIDDEN on Google Business Profile (owner believes it's set to
  private; service-area business). Based in Bertram, TX 78605.
  ✅ RESOLVED 2026-10-20: streetAddress removed from the LocalBusiness schema
  (app/layout.tsx); it keeps addressLocality Bertram / TX / 78605 + areaServed.
  The street address appears nowhere else on the site. Never publish it.
- Website: https://www.groundedlandservices.com
- Google Business Profile share link: https://share.google/GiUNVko4QWfbPBpOW
- Hours: Mon–Fri 6:00 AM – 6:00 PM; Sat–Sun 8:00 AM – 5:00 PM
- Year founded: 2025
- Experience: doing land clearing work since 2020 (use "since 2020" for any years-of-experience wording)
- Owner: Logan
- Payment accepted: Cash, Check, Credit Card

## Services (pages exist on the site)
- Land clearing: $2,500 – $10,000+ per job (acreage, density, terrain, rock, access)
- Forestry mulching: $2,500 – $3,000 per day (density, cedar size, selectivity)
- Rock crushing: $3,000 – $4,000+ per day
- Rock removal: $1,750 – $6,000 per acre
- Demolition: $1,500 – $10,000+ per job
Also listed in the site schema: cedar tree removal, site preparation, utility
trenching, underbrushing, fence line clearing, tree pile shredding, site
cleanup, dirt work & grading, driveways, retaining walls.
PRIORITY services (owner): 1. Land clearing  2. Forestry mulching  3. Rock removal

## Service area (from data/service-areas.ts)
Based in Bertram. ~100 cities across 4 regions:
- Austin Metro (17): Austin, Bee Cave, Buda, Cedar Creek, Driftwood, Dripping
  Springs, Elgin, Hutto, Kyle, Leander, Liberty Hill, Manor, Paige, Rockdale,
  Round Rock, Taylor, Thorndale
- Hill Country (30): Bandera, Bertram, Blanco, Boerne, Briggs, Burnet, Canyon
  Lake, Fredericksburg, Georgetown, Goldthwaite, Horseshoe Bay, Johnson City,
  Kerrville, Lampasas, Llano, Marble Falls, Mason, New Braunfels, Round
  Mountain, San Marcos, Spicewood, Wimberley, Kingsland, Granite Shoals,
  Meadowlakes, Lago Vista, Jonestown, Lakeway, San Saba, Mullin
- Central Texas (24) and San Antonio Area (26): see data/service-areas.ts
- Rock crushing / rock removal: limited to 26 Hill Country + Austin cities
PRIORITY cities (owner): Liberty Hill, Georgetown, Spicewood, Gonzales,
Luling, Bertram, Briggs. Focus content, case studies, and links here first.

## Proof / trust signals
- Licensed in Texas; fully insured (from TrustBadges). Do NOT say "certified" (owner, 2026-10-20).
- Projects completed: 100+ (owner confirmed TRUE, 2026-10-20)
- Equipment: 2025 CAT 323 excavator; 2026 CAT 275 XE Land Management;
  2020 CAT 299 D3 XE Land Management; 2025 Prinoth M450s-1900 mulching head;
  2025 Bobcat 84" attachment; CAT curved tine industrial grapple rake;
  CAT industrial grapple; standard buckets
- Reviews: 5.0 from 18 Google reviews (owner, Oct 2026).
  ✅ RESOLVED 2026-10-20: schema aggregateRating reviewCount set to 18 to match Google.
  Keep the schema, TrustStrip, TrustBadges and homepage counts in sync when reviews grow.
- Case studies on site: 28 entries in lib/case-studies.ts (e.g. Spicewood
  53.8 ac land clearing, Gonzales 34.8 ac, Liberty Hill 4.1 ac rock removal)
- Testimonials: on site with names and cities (Testimonials.tsx)
- Social: Instagram @Grounded.LandServices, Facebook /GroundedLandServices,
  TikTok @grounded.land.services
- Analytics: Google Analytics 4 (G-KW3HPEJTNW) + Meta Pixel installed

## Leads & contact
- Best way to reach you: call or text (512) 571-6700, or the quote form
- Takes texts at (512) 571-6700: YES (add an sms: Text button)
- Response time to a new lead: within 24 hours
- Free estimates: YES
- Where quote-form submissions go: check app/components/QuoteForm.tsx and confirm with owner

## Real customer questions (what people ask you on calls)
- How much per day?
- How much per acre?
- Can we schedule a site visit?
(Answer these near the top of service pages and in FAQs: day rates and
per-acre ranges are in the pricing above; site visits/estimates are free.)
