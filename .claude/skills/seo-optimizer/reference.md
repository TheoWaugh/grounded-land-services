# SEO / AIO rules for this site

## Technical (Next.js)
- Detect App Router (`app/`) vs Pages Router (`pages/`) and use the matching
  metadata API (`export const metadata` / `generateMetadata` vs `next/head`).
- Every indexable page: unique `<title>` (≤60 chars, primary keyword + city
  near the front + brand), unique meta description (140–160 chars, includes a
  reason to click and the phone if known), canonical URL, Open Graph + Twitter
  tags, exactly one `<h1>`.
- `app/sitemap.ts` (or `sitemap.xml`) listing every real page with lastModified.
- `app/robots.ts` allowing search + AI crawlers: Googlebot, Bingbot,
  OAI-SearchBot, ChatGPT-User, GPTBot, ClaudeBot, Claude-SearchBot,
  PerplexityBot, Google-Extended, Applebot. Point to the sitemap.
- Images: `next/image`, descriptive alt text (what's actually in the photo +
  location if true), width/height set, compressed.
- Core Web Vitals: avoid layout shift, lazy-load below-the-fold, no giant
  client-side bundles on service pages. Prefer server components.
- Internal links: every city page links to its service pages and vice versa,
  with descriptive anchor text ("land clearing in Georgetown", not "click here").
- No orphan pages, no broken links, no duplicate titles.

## Structured data (JSON-LD in a <script type="application/ld+json">)
- Site-wide: `LocalBusiness` (or `HomeAndConstructionBusiness`) with name,
  url, telephone, address/areaServed, geo (if real), openingHours, sameAs
  (social/GBP links), logo, image. Only facts from business-facts.md.
- Service pages: `Service` with provider → the LocalBusiness, areaServed.
- FAQ sections: `FAQPage` mirroring the visible Q&A exactly.
- Breadcrumbs: `BreadcrumbList`.
- NEVER add `aggregateRating`/`review` markup unless the reviews are shown on
  the page and are real.
- Validate: output must be valid JSON; mention Rich Results Test in the report.

## AI answer optimization (AIO / GEO)
- Answer-first: under each H2 phrased as a question, the first 1–2 sentences
  directly answer it (40–60 words), then detail. AI systems lift these.
- Use concrete, checkable specifics: price ranges, timelines ("a 2-acre
  cedar lot typically takes 1–2 days"), equipment names, local conditions.
  Only if true per business-facts.md.
- Clear entity signals: business name + service + area stated plainly
  ("Grounded Land Services provides land clearing in Austin, Round Rock, ...").
- Comparison/decision content: "Forestry mulching vs traditional land
  clearing", "Do I need a permit to clear land in Travis County?" (verify
  anything regulatory; cite the official source or mark TODO).
- Tables and short lists for costs, factors, process steps.
- Visible "Last updated" dates and an author/owner bio on guides.
- Optional: `/llms.txt` summarizing the business and key page URLs (cheap,
  low-evidence, harmless).

## Content quality
- Write for a landowner deciding who to hire: what it costs, how long, what
  happens to debris, permits, equipment, before/after photos, guarantees.
- City pages must contain genuinely local info (terrain, typical projects,
  neighborhoods, drive time, local regs) — not the same text with the city
  swapped. If you can't make a city page genuinely unique, report it instead
  of generating filler.
- Match the site's existing voice and components. Don't restyle the site.
