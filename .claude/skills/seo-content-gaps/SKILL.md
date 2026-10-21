---
name: seo-content-gaps
description: Find and draft missing SEO content for the land-services site — service pages, service-area pages, cost guides, comparison and permit guides — based on keyword and competitor gaps. Use when asked what content is missing or to add pages.
argument-hint: "[optional topic or city]"
---

# Content gap finder + drafter

Read `../seo-optimizer/reference.md` and `../seo-optimizer/business-facts.md` first.

1. Inventory existing pages and topics.
2. Build a gap list using web search for the target area (Austin Metro and
   every city in business-facts.md). Candidate content:
   - Service pages that are missing or thin (land clearing, forestry mulching,
     cedar clearing, brush clearing, lot clearing for new construction,
     rock removal, demolition, driveway/pad prep — only services the owner
     actually offers).
   - Hub page: "Land Clearing in Austin, TX" as the strongest, most complete
     page on the site (this is the main ranking target).
   - Guides: "How much does land clearing cost in Central Texas?",
     "Forestry mulching vs traditional land clearing",
     "Cedar (Ashe juniper) removal: what to know",
     "Do you need a permit to clear land in [County]?" (verify with official
     sources; link them),
     "How to prep a lot for building a house in the Hill Country".
   - Project/case-study pages with real before/after photos (TODO for photos).
3. Rank gaps by: search demand for the area, closeness to buying intent, and
   how weak the current top results are.
4. Draft the top items as real pages in the site's structure, following the
   answer-first + FAQ + schema rules. Add them to the sitemap and link them
   from relevant existing pages.
5. City pages: only create one if you can include genuinely local content;
   otherwise add it to the report as "needs owner input: local project
   examples, terrain, neighborhoods".
6. Report to `seo-reports/content-gaps-<date>.md`: ranked gap table, what you
   drafted, and what the owner must supply.
