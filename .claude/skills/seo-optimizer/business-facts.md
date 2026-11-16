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
- Family-owned: YES (owner, 2026-10-22). Mention it plainly, no hype, once per section.
  On the site: homepage hero subtext + homepage "Why Choose Us" intro. Don't add more.
- Payment accepted: Cash, Check, Credit Card

## Services (pages exist on the site)
- Land clearing: $2,000 – $4,000 per acre ONLY (owner, 2026-10-28; was $1,500 – $2,500; density,
  terrain, rock, access). The old "$2,500 – $10,000+ per job" range is retired;
  never use it.
- Forestry mulching: $2,500 – $3,000 per day (density, cedar size, selectivity)
- Minimum job: $1,000 (owner, 2026-10-21)
- Production rates (owner, 2026-10-21). Use these for "how long does it take" answers;
  acres per day depend on ground conditions and terrain. Don't invent other numbers.
  - Forestry mulching (2026 CAT 275 XE + Prinoth M450s mulcher): light brush
    2–3 acres/day; medium brush ~1.5 acres/day; thick cedar ~1 acre/day.
  - Excavator land clearing: light brush 6–7 acres/day; medium brush 5–6 acres/day;
    thick cedar 4–5 acres/day.
  - Land clearing timelines: state the excavator rates directly. Don't say "runs"
    and don't compare land clearing to forestry mulching.
- Cost calculator pricing rules (owner, 2026-11-04). Used ONLY by the calculator math
  (lib/cost-estimate.ts). The published prices above stay exactly as they are; don't write
  these per-tier numbers into page copy.
  - Forestry mulching: days = acres ÷ rate (light 2–3 acres/day, medium 1.25–1.75,
    thick cedar 0.7–1), rounded up to the nearest half day, minimum 1 day. Price = days ×
    $2,500 (low) to days × $3,000 (high). No haul-off (mulched in place). Don't display days.
  - Land clearing (Harley raking included), updated by owner 2026-11-09 (medium revised same day). Density options:
    Light brush, Medium brush, Thick brush. Per acre by job size:
    - Under 2 acres: light $3,000, medium $3,500, thick $4,000. Haul-off ON by default
      (small lots usually need brush hauled off).
    - 2 to 4.9 acres: light $2,500, medium $2,700, thick $3,000. Haul-off off by default.
    - 5 acres and up: light $2,000, medium $2,200, thick $3,000. Haul-off off by default.
    - Haul-off add-on: 3–6 loads per acre at $250–$350 per load.
      Note: "Haul-offs depend on how much debris and rock there is."
    - Under the result: "Steep terrain, trash removal, or rock removal can raise the price up
      to $4,000 an acre. We'll give you a firm price after we see the property."
    - Why: small jobs cost more per acre because of travel and setup. Reaching $4,000/acre
      depends on terrain, trash removal and rock.
  - Rock removal: small rock $2,000/acre, some mixed rock $3,000/acre, lots of rock of all
    sizes $4,000/acre. Haul-off on by default (same 3–6 loads/acre at $250–$350/load).
  - All services: $1,000 minimum job; show a range; keep the estimates-only note.
- INTERNAL ONLY, never on the site or in the calculator (owner, 2026-11-04): mulching jobs
  of 3+ days are charged $2,000/day.
- Rock crushing: $3,000 – $4,000+ per day
- Rock removal: $2,000 – $4,000 per acre (owner, 2026-10-21; replaces $1,750 – $6,000)
- Demolition: $1,500 – $10,000+ per job
Also listed in the site schema: cedar tree removal, site preparation, utility
trenching, underbrushing, fence line clearing, tree pile shredding, site
cleanup, dirt work & grading, driveways, retaining walls.
- Stumps: we do stump REMOVAL with the excavator, NOT stump grinding (owner, 2026-10-22).
  Never list stump grinding as our service.
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
- NOT served (owner, 2026-10-21): Houston, Dallas, Fort Worth, Katy (or any
  Houston/DFW-area city). Never list them in copy, schema, keywords, or the chat bot.

## Proof / trust signals
- Licensed in Texas; fully insured (from TrustBadges). Do NOT say "certified" (owner, 2026-10-20).
- Projects completed: 100+ (owner confirmed TRUE, 2026-10-20)
- Equipment: 2025 CAT 323 excavator; 2026 CAT 275 XE Land Management;
  2020 CAT 299 D3 XE Land Management; 2025 Prinoth M450s-1900 mulching head;
  2025 Bobcat 84" attachment; CAT curved tine industrial grapple rake;
  CAT industrial grapple; standard buckets
- Reviews: 5.0 from 19 Google reviews (owner, Nov 9 2026; 19th is Salvador Rebollar, Dale, TX).
  ✅ 2026-10-21: review/aggregateRating markup REMOVED from the site-wide schema
  (self-serving LocalBusiness reviews aren't eligible for stars). Don't re-add it.
  Keep the visible TrustStrip, TrustBadges and homepage counts in sync with Google.
- The "Kelley Arnold" review is from a family member: removed from the site
  (owner, 2026-10-21). Never show or mark it up.
- Case studies on site: 20 in lib/case-studies.ts (owner confirmed 10 on 2026-10-21; more
  added since, incl. Georgetown 5 ac and Harwood 3 ac on 2026-10-27, Kingsland 0.5 ac and Balcones refuge 5-mile fire break on 2026-10-30, Spicewood Lake Travis lot 0.5 ac and Spicewood sod lots 1.5 ac and Bertram mulching cleanup 1.2 ac and Bertram rock removal 0.5 ac on 2026-11-02, Gonzales forestry mulching 1 ac on 2026-11-03, Dale forestry mulching 2 ac on 2026-11-09, Lampasas rock removal 2 ac on 2026-11-09, Lampasas forestry mulching cleanup 2 ac (grant job, July 2025) on 2026-11-09, Bertram pool demolition 1,575 sq ft on 2026-11-09, Kingsland forestry mulching 1 ac on 2026-11-09, Hudson Bend (near Lake Travis) forestry mulching 0.5 ac on 2026-11-16; e.g. Spicewood 53.8 ac land clearing,
  Gonzales 34.8 ac, Liberty Hill 4.1 ac rock removal)
- Testimonials: on site with names and cities (Testimonials.tsx, app/page.tsx)
- Gallery photo locations: NOT confirmed (every alt says "Bertram, TX"), except
  georgetown-clearing-1/-2.JPEG, confirmed Georgetown (owner, 2026-10-27), and
  /projects/balcones-refuge-fire-break/*, confirmed Balcones Canyonlands NWR (owner, 2026-10-30).
  Leave gallery alt text alone until the owner confirms locations.
- Texas A&M Forest Service Mechanical Fuel Reduction Grant: owner has completed
  a job under this program (forestry mulching / debris reduction). That job: Lampasas, July 2025, private
  landowner, 2 ac forestry mulching cleanup (owner, 2026-11-09); see the Lampasas notes below.
  Program facts (verified 2026-11-10 at https://tfsweb.tamu.edu/mechgrant/ and the 2026 announcement
  https://tfsweb.tamu.edu/texas-am-forest-service-announces-wildfire-mitigation-grant-opportunities-and-landowner-outreach-events/ , dated Apr 23, 2026):
  - Cost-share REIMBURSEMENT grant to reduce wildfire risk to communities; funded through the USDA Forest Service.
  - Rates (actual costs up to): hand-cutting $750/ac; combination $1,500/ac; heavy equipment (forestry mulchers) $2,000/ac.
    Max $20,000 per applicant (program page: per landowner). May not cover 100% of costs.
  - Who (2026 announcement): private landowners, HOAs, nonprofits, city and local government entities in designated
    project areas; 2026 = 39 Central Texas counties. Program page says Central, South, West and Northwest Texas and that
    counties may change yearly. Don't list counties; link the official county map.
  - 2026 window: June 1 - July 14, 2026. Next window opens June 1, 2027 (program page). Grant apps closed as of 2026-11-10.
  - Rules: landowner pays first, reimbursed after post-inspection on paid-in-full invoices (3-6 weeks); contractor must be
    qualified and NOT affiliated with the landowner; landowner can't do the work; no work before the TFS pre-inspection
    (earlier work isn't reimbursed); burning of any kind disqualifies; debris must be removed or mechanically reduced
    (mulching fits); NO minimum fire break width: the official program FAQ doesn't state one (owner, 2026-11-16), so never claim a width rule; one treatment type per application; selection is competitive.
  - Our guide: /guides/texas-mechanical-fuel-reduction-grant (built 2026-11-10; "Last updated: November 2026").
    Update its dates when TFS announces the 2027 round. Always link the official page; never promise eligibility or approval.
- Social: Instagram @Grounded.LandServices, Facebook /GroundedLandServices,
  TikTok @grounded.land.services
- Analytics: Google Analytics 4 (G-KW3HPEJTNW) + Meta Pixel installed

## Priority-city experience (owner, 2026-10-27)
Used on the 7 priority city pages via data/city-local.ts. Research and sources:
seo-reports/city-notes-priority.md.
- Liberty Hill: jobs are rock removal on homesites, subdivision lots and larger ranches;
  also clearing cedar out from under oaks and removing dead trees. Rock is usually loose;
  limestone shelf mostly only shows up when excavating. The 4.1 ac LH rock removal case
  study is NOT the Holton Garrison or Preston Jones job (those are separate LH jobs).
  (owner, 2026-10-28) Large rock outcroppings are also common around Liberty Hill.
  Clearing cedar from under oaks means less competition for water, so the oaks have a better
  chance in the next drought. Dead trees come from drought or disease; oak wilt and
  Hypoxylon canker are both common in Liberty Hill and Central Texas (owner experience).
- Harley rake after clearing (owner, 2026-10-28): grubbing trees brings rock up to the
  surface, so after clearing we run the Harley rake (Bobcat 84" soil conditioner,
  /equipment#harley-rake) to level the ground and pick up leftover debris and rock.
- Georgetown (corrected by owner 2026-10-30): 5-acre selective cedar job, 2 days, CAT 299 only
  (don't mention attachments); cedar piled for burning; NO Harley rake (too many large
  rocks); customer's goal was saving
  his oak trees; outside city limits (no city tree permit needed). Customer not named.
  Photos: public/images/work/georgetown-clearing-1.JPEG and -2.JPEG. Case study:
  /case-studies/georgetown-land-clearing.
- Spicewood: Barrett Garrison's review is the 53.8 ac case-study ranch. Mike Janak's review
  (50 x 300 ft path, huisache, prickly pear) is also from Spicewood: it's the Lake Travis lot job
  (owner, 2026-11-02): mesquite, huisache, prickly pear and rock cleared so the owners could mow
  without popping tires on thorns, plus a chainsawed trail down to their new dock. Case study:
  /case-studies/spicewood-lake-travis-lot (0.5 ac, 1 day, June 2025; CAT 299, industrial grapple,
  Prinoth, Harley rake; cedar mulched, cactus/mesquite/huisache hauled off; river rock). Owner
  OK'd showing his named review on the case study (2026-11-02); the write-up doesn't name him.
  (owner, 2026-11-02) Spicewood ground is mostly limestone (loose rock and solid ledges), with
  river rock near Lake Travis and dolomite on some properties. On the 53.8 ac ranch we used the
  CAT 275, CAT 323, CAT 299, Prinoth mulcher, Harley rake and root grapple, and burned the piles
  on site, then cleaned up. Valleys/low spots: deep black dirt, little rock; slopes and upper end:
  shallow, rocky soil over limestone ledges; we left the steep inclines and largest rock in place.
  Also two neighboring Spicewood lots prepped for sod (stumps, leftover mulch and rock removed on
  one; rock only on the other). Case study /case-studies/spicewood-sod-lots (owner, 2026-11-02):
  1.5 ac total, 3 days, June 2026; CAT 275, grapple, Harley rake; rock left on site. Customers
  not named.
- Balcones Canyonlands NWR fire break (owner, 2026-10-30): completed a 5-mile fire break on
  Balcones Canyonlands National Wildlife Refuge for the U.S. Fish & Wildlife Service (Feb 2026),
  timed around warbler season: started Feb 2, finished before the March 1 nesting-season
  deadline. CAT 275 + Prinoth (skid steer mulcher required: limited access, minimal ground
  disturbance); steep inclines, tight access, rock; mulched a 5-mile slash pile of cedar and
  brush in place. Also a firefighter access route. Owner OK to name the refuge and USFWS.
  Say "wildfire", never "forest fire". Case study: /case-studies/balcones-refuge-fire-break
  (location Leander, TX; off FM 1431; refuge is close to Leander, Jonestown, Liberty Hill and
  Bertram; shown as nearby proof on Jonestown and Liberty Hill). Video: https://youtu.be/KjYxH1hgTwM
- Golden-cheeked warbler: on the Jonestown job we waited until warbler nesting season ended
  (season runs March 1 – September 1) before clearing. Use as our experience on Spicewood,
  Liberty Hill and Jonestown pages. NEVER make legal claims about when a federal permit is
  required; tell landowners with mature cedar-oak woodland to check with USFWS.
- Kingsland forestry mulching (owner, 2026-11-09): 1 ac cedar, mesquite and brush mulched in place in 1 day,
  Aug 2026, CAT 275 + Prinoth, for a builder clearing a homesite; the builder then removed the mulch and
  stumps from the build pad (we did NOT do the stump/mulch removal on this job). We work with builders on
  homesite prep. Customer not named. Case study /case-studies/kingsland-forestry-mulching, photo
  /images/work/kingsland-forestry-mulching.jpeg (GPS stripped in place 2026-11-09; the original with GPS
  is still in git history).
- Hudson Bend forestry mulching (owner, 2026-11-16): 0.5 ac cedar mulched in place in 1 day, Nov 2026,
  CAT 275 + Prinoth, near Lake Travis and Lakeway (NOT a lakeside lot). The owner wanted the property to look more appealing to
  potential buyers (good fit for landowners and realtors getting a lot ready to list). Oaks left standing
  (visible in the photos). Hudson Bend is not a service-area city: locationSlug "lakeway", also listed on
  the Spicewood forestry mulching page. Customer not named. Case study
  /case-studies/hudson-bend-forestry-mulching.
- Bertram pool demolition (owner, 2026-11-09): 1,575 sq ft concrete/gunite pool + patio torn out for
  concrete cancer, about 1 week, June 2026. Took down part of the fence for access; tight space between
  house and pool. CAT 275 + a RENTED Bobcat E80 with a hydraulic hammer (we don't own a hammer or the E80:
  never list them as our equipment). Hauled off 2 loads of concrete and 1 load of rebar; the rest of the
  concrete built up the back of the owners' shooting berm. Backfilled, compacted, graded, poured a 10x8
  concrete pad for a jacuzzi, laid 5 pallets of sod. Customer not named. Case study
  /case-studies/bertram-pool-demolition; main photo is the aerial after shot, gallery reuses
  /images/work/anderson-pool-demo.jpeg (the before/after already on the gallery page).
- Bertram: Dylan Gavit's review is the same job as the Bertram burn-pile mulching case study:
  2 acres cleared on a 5-acre property. ❓ Owner to confirm the acreage before changing it again.
  (owner, 2026-11-02) Our family has lived in Bertram since 2021. Most Bertram properties have
  large limestone outcroppings and loose limestone; some lots have good dirt. Bertram jobs also
  include a forestry mulching cleanup (removed thick mulch, stumps and rock from an earlier
  mulching job, plus some clearing), a rock removal job, and a natural stone retaining wall (in progress as of 2026-11-02:
  "we're turning" the rock into a wall; don't call it finished) built from rock excavated for the homesite. The mulching cleanup is now a case study
  (/case-studies/bertram-mulching-cleanup: 1.2 ac, 3 days, Aug 2026; CAT 275, root grapple, Harley
  rake; debris hauled off; owner wanted mowable, seed-ready ground with no stumps for a future
  house). Customer Gary Gorton (OK to name); his 5-star Google review is on the site and tied to it.
  The rock removal job is now a case study too (/case-studies/bertram-rock-removal: just over
  0.5 ac behind the pool, 2 days, Aug 2026; CAT 275, root grapple, Harley rake; loose rock, cedar
  and cactus removed, large outcroppings kept on purpose; 8 loads hauled to a place that saved the
  owner hundreds in dump truck costs; owner seeding grass and Texas native flowers). Customer:
  "Steve" only in the write-up; his named review (Steve King, Bertram) is tied to it and shows on
  the Bertram rock removal page. The retaining wall job has no case study yet.
- Briggs: no jobs there yet. Pastures are mesquite/prickly pear, and we grub it. Use nearby
  Bertram/Burnet proof and say honestly that it's ~13 miles from our base.
  (owner, 2026-11-02) Confident tone: lead with how close Briggs is and that it's the ground we
  clear, without the "haven't done a job yet" framing. Still never claim a Briggs job.
- Gonzales: the 34.8 ac job was on sandy soil, along the Guadalupe River (owner, 2026-11-03). (owner, 2026-11-03) Second Gonzales job: 1 ac forestry mulching,
  1 day, Oct 2026, CAT 275 + Prinoth; brush, cedar and brush piles left from building the fence, mulched
  in place; owner wanted pasture and a view of their pond; sandy soil with sandstone scattered throughout
  (rough terrain), extra care taken to keep the mulching head from throwing sparks. Customer not named.
  Case study: /case-studies/gonzales-forestry-mulching. Owner prefers flat ground with less rock and
  wants more Gonzales/Luling work.
- Luling: no jobs in Luling itself yet. Closest job: Harwood, TX (~9 mi east), 3 ac forestry
  mulching, case study /case-studies/harwood-forestry-mulching (added 2026-10-27).
  (owner, 2026-11-03) Clint Strittmatter's review is from Harwood, TX; it shows on the Gonzales and Luling pages
  (replacing Emil Millet) but is NOT linked to the Harwood case study. Has NOT worked around oil wells or pumpjacks: never claim it.
- Dale (Caldwell County, near Lockhart and Luling; not a service-area city): (owner, 2026-11-09) 2 ac forestry
  mulching, 1 day, Nov 2026, CAT 275 + Prinoth; thick brush under post oaks with cedar mixed in, dead trees
  and branches, mulched in place; owner wanted it cleared for hunting and leisure and easy to maintain;
  nothing tricky. Customer not named. Case study /case-studies/dale-forestry-mulching, locationSlug
  "luling", shown on Luling pages as nearby work (owner says ~15 mi from Luling). Salvador Rebollar's
  review (Dale, TX) shows on the Luling pages but must NOT be linked to or mentioned on the Dale case
  study: that customer doesn't want to be named there.
- Lampasas: (owner, 2026-11-09) 2 ac rock removal, 1 day, Nov 2026, CAT 275 + Harley rake + standard
  bucket; loose limestone pulled up from clearing and loose sandstone on the ridges, spread out elsewhere on
  the property (not hauled off); 2 old burn piles cleaned up, one still smoldering and piled to be hauled
  off later; pasture Harley-raked level. Owner wanted it mowable without worrying about sparks, for hunting,
  and the pasture leveled. Customer not named. Case study /case-studies/lampasas-rock-removal.
  (owner, 2026-11-09) Completed a Texas A&M Forest Service Mechanical Fuel Reduction Grant job for a private
  landowner in Lampasas (July 2025): 2 ac forestry mulching cleanup, 2 days, CAT 299 + Harley rake; removed
  old mulch left from a previous mulching job, stumps, cactus and surface rock, Harley-raked smooth, hauled
  off 12 loads of debris and cactus. Owner wanted to zero-turn mow and reduce wildfire fuel around the house.
  OK to mention the grant; customer not named. Case study /case-studies/lampasas-mulching-cleanup-grant.
  Link the official program page (https://tfsweb.tamu.edu/mechgrant/) and never promise other landowners
  eligibility (program sets eligible counties and application periods; closed as of 2026-11-09).

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
