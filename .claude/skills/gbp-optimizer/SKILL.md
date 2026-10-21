---
name: gbp-optimizer
description: Optimize the Google Business Profile for the map pack — drafts the business description, categories, services, weekly posts, review replies, photo plan, and a review-request system. Produces copy for the owner to paste; never logs in. Use for "Google Business Profile", "GBP", "Google Maps", "map pack", or "reviews".
argument-hint: "[optional: 'posts' | 'reviews' | 'audit' to run one part]"
---

# Google Business Profile optimizer (drafts only — owner pastes them in)

Read `../seo-optimizer/business-facts.md` first. Use NAP exactly as written there.
Part to run: $ARGUMENTS (default: all). Claude cannot log in to Google — every
output is copy/paste-ready text plus a checklist.

Why this matters: for "land clearing" searches the map pack usually sits above
the regular results. It is driven by relevance (categories, services,
description), prominence (reviews, links, citations), and distance. We can't
change distance; we can max out the other two.

## Hard rules (Google guidelines — breaking them risks suspension)
- Business name = the real business name only. No keywords or cities added.
- No fake reviews, no review incentives, no asking only happy customers
  through a filter ("review gating"). Ask every customer.
- Don't list cities you don't actually serve. No virtual-office addresses.

## 1. Profile audit checklist → `seo-reports/gbp/audit-<date>.md`
Ask the owner to paste their current profile text (or a screenshot) if not
provided. Check: primary category, secondary categories, service area list,
hours, phone, website link, description, services + descriptions, products,
photos count/recency, posts recency, review count/rating/response rate.

## 2. Categories
Use web search to find the current list of Google Business categories and
what the top-ranking local competitors use (visible on their Maps listings).
Recommend the single most accurate PRIMARY category for land clearing and up
to 5 relevant secondaries that match services actually offered. Explain each.

## 3. Copy to paste → `seo-reports/gbp/profile-copy-<date>.md`
- Business description (≤750 chars; first ~250 chars carry the key message:
  what you do, where, what makes you different). Natural, no stuffing.
- Services list: every real service, each with a 1–2 sentence description
  (≤300 chars) using the words customers search.
- Website link with UTM tracking so GA4 shows GBP traffic separately:
  `https://SITE/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- Service-area list (cities from business-facts.md).

## 4. Posts → `seo-reports/gbp/posts-<date>.md`
Draft 8 weekly posts (≈150–300 words each, one CTA each: Call / Get quote).
Mix: recent project (from seo-projects/), seasonal (burn bans, cedar season,
wildfire prep, pre-build lot prep), FAQ answer, offer only if real. Note a
suggested photo for each from the photo library.

## 5. Photo plan
List photos to upload monthly: equipment, crew at work, before/after, finished
lots, the truck/trailer with logo. Real photos only, no stock. (EXIF
geotagging does not help — skip it.)

## 6. Review system → `seo-reports/gbp/reviews-<date>.md`
- Get-review link instructions (from the GBP dashboard "Ask for reviews").
- A short text + email to send the day the job wraps, and one follow-up
  3 days later. Suggest (don't require) mentioning the service and city —
  natural keywords in reviews help relevance.
- Reply templates: 5-star, mixed, negative. Every reply personalized; never
  argue; never reveal customer details.
- If the owner pastes existing reviews, draft individual replies.

## 7. Summary
End with a ranked, checkbox-style "do this week" list for the owner.
