---
name: seo-optimizer
description: Full SEO + AI-search (AIO/GEO) optimization pass for the Grounded Land Services Next.js site. Runs the audit, fixes technical SEO, adds answer-ready content and schema, fills content gaps, and builds a backlink plan. Use when asked to "optimize the site", "run SEO", "improve rankings", or "get cited by AI".
argument-hint: "[optional focus, e.g. 'land clearing' or 'Georgetown page']"
---

# SEO + AI Search Optimizer (orchestrator)

Goal: rank in the top 3 (map pack + organic) for "land clearing" and related
searches across the Austin Metro service area, and be the business that AI
answers (Google AI Overviews, ChatGPT, Perplexity, Claude, Copilot) cite.

Focus for this run: $ARGUMENTS (if empty, do the whole site, prioritizing the
land clearing pages).

## Ground rules (read first, every run)
1. Read `business-facts.md` in this folder. It is the ONLY source for phone,
   address, license/insurance, prices, years in business, equipment, reviews,
   and service areas. **Never invent any of these.** If a fact is missing,
   write `TODO(owner): ...` in the code and list it in the report.
2. Read `reference.md` in this folder for the SEO/AIO rules to apply.
3. Work on a new git branch: `seo/<yyyy-mm-dd>`. Never push to main.
4. After changes, run `npm run build` and fix anything you broke. Run
   `npm run lint` if it exists.
5. No keyword stuffing, no hidden text, no doorway pages with swapped city
   names, no fake reviews or ratings in schema. These get sites penalized.

## Recommended order (run as SEPARATE sessions — one per line — for quality)
Doing everything in one session rushes the later steps and produces a diff
too big to review. If this command is run with no focus, do step 1 only,
then tell the owner the next command to run.

1. `/seo-track baseline`   — record where things stand BEFORE any changes.
2. `/seo-audit`            — prioritized audit report (no code changes).
3. Fix Critical + High technical items from the audit (this command, with
   focus "technical fixes").
4. `/conversion-optimize`  — call bar, quote form, trust, lead tracking.
   (Do this early: every later ranking gain is worth more once visitors convert.)
5. `/gbp-optimizer`        — Google Business Profile copy + review system.
6. `/ai-answer-optimize`   — answer-first sections, FAQs, schema.
7. `/seo-content-gaps`     — one or two pages per session.
8. `/add-project`          — ongoing, every time a good job wraps up.
9. `/backlink-builder`     — prospect list + outreach drafts.
10. `/seo-track`           — monthly comparison.

## When run with a focus
Do only that focus, then write `seo-reports/summary-<date>.md`:
- what changed (file-by-file),
- TODO(owner) list (facts, photos, reviews needed),
- off-site actions only the owner can do, ranked by expected impact,
- the next command to run.
Show the owner the diff summary and ask before committing.
