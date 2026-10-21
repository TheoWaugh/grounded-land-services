---
name: seo-audit
description: Audit the Next.js site for technical SEO, on-page SEO, structured data, and AI-search readiness, and write a prioritized report. Use when asked to audit, check, or score the site's SEO.
argument-hint: "[optional live URL to also check, e.g. https://example.com]"
---

# SEO + AIO audit

Read `../seo-optimizer/reference.md` and `../seo-optimizer/business-facts.md` first.

1. Map the site: list every route (app/ or pages/), its title, meta
   description, H1, word count, canonical, schema types present, internal
   links in/out, images missing alt.
2. Check sitemap, robots, canonical tags, 404 page, redirects, duplicate
   titles/descriptions, missing H1s, thin pages (< 400 words of real content).
3. Check structured data against the reference rules. Flag invalid JSON-LD and
   any rating/review markup that isn't backed by visible real reviews.
4. AI-readiness: does each service page answer "how much", "how long",
   "what's included", "do I need a permit", "why you"? Are answers in the
   first sentence under question-style headings? Are AI crawlers allowed?
5. NAP consistency: search the codebase for every phone number, address, and
   business-name variant. Flag mismatches.
6. If a live URL was given ($ARGUMENTS), fetch the homepage and 2–3 key pages
   to confirm what's actually deployed, and note differences from the repo.
7. Use web search for "land clearing Austin TX" and 2–3 service-area cities:
   note who ranks top 3 and what their pages have that ours don't (sections,
   FAQs, pricing, word count, schema, photos). Summarize — don't copy text.

Write `seo-reports/audit-<yyyy-mm-dd>.md` with a table:
| Priority (Critical/High/Medium/Low) | Page | Issue | Fix | Effort |
Then a short "Competitor gap" section and a "Missing owner facts" list.
Do not change code in this skill — audit only.
