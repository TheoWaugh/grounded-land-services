---
name: ai-answer-optimize
description: Make the site's pages easy for Google AI Overviews, ChatGPT, Perplexity, and Claude to quote and cite — answer-first sections, FAQs with FAQPage schema, LocalBusiness/Service schema, AI crawler access, llms.txt. Use for AIO, GEO, AEO, or "get cited by AI" requests.
argument-hint: "[optional page or topic, e.g. 'land-clearing']"
---

# AI answer optimization

Read `../seo-optimizer/reference.md` and `../seo-optimizer/business-facts.md` first.
Scope: $ARGUMENTS (default: all service pages, land clearing first).

For each page in scope:
1. List the 5–10 questions a landowner would ask an AI about this service in
   this area (cost, time, permits, cedar/brush, what happens to debris,
   mulching vs clearing, best season, equipment, lot prep for building).
   Use web search to see which questions actually show up ("People also ask",
   forums) — summarize, don't copy.
2. Restructure or add H2/H3 headings phrased as those questions. First
   sentence under each = the direct answer. Add specifics only from
   business-facts.md; otherwise insert `TODO(owner): need X`.
3. Add a visible FAQ section (5–8 Q&As) + matching `FAQPage` JSON-LD.
4. Add/repair `Service` JSON-LD and ensure site-wide `LocalBusiness` JSON-LD
   exists once (e.g. in the root layout) with `sameAs` links.
5. Add a short cost-factors table and a "How it works" numbered process where
   it fits.
6. Make sure `robots` allows the AI crawlers in reference.md, and create
   `public/llms.txt` (business summary, services, service area, key URLs).
7. Build, then list every change and every TODO(owner) in
   `seo-reports/aio-<date>.md`.

Reuse the site's existing components/styles. Keep the voice plain and local.
