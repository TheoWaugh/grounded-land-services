---
name: seo-track
description: Measure SEO, map-pack, AI-citation, and lead results over time — records a baseline, then compares monthly and says what's working. Uses Google Search Console exports, GA4/analytics data, a manual AI-citation log, and a lead log. Use for "track", "report", "are we ranking", "is it working", or monthly check-ins.
argument-hint: "['baseline' for the first run, otherwise leave empty for a monthly comparison]"
---

# SEO + AI + leads tracker

Mode: $ARGUMENTS ("baseline" = first run; empty = compare to last snapshot).
Data lives in `seo-data/`. Snapshots in `seo-data/snapshots/<yyyy-mm-dd>.md`.
Never make up numbers. If a data source is missing, say exactly how to get it.

## Data sources (owner drops files in; Claude reads them)
1. **Google Search Console** — the source of truth for Google rankings.
   Owner exports: Performance → Search results → last 28 days → Export → CSV
   (Queries and Pages) into `seo-data/gsc/<yyyy-mm-dd>/`.
   If Search Console isn't set up, give step-by-step setup instructions
   (domain property, DNS verification, submit sitemap) and stop that section.
2. **Bing Webmaster Tools** — same export idea into `seo-data/bing/<date>/`.
   Bing matters because ChatGPT's search leans on Bing's index. If not set
   up, include setup steps (it can import from Search Console).
3. **Analytics** — detect what the site uses (GA4, Vercel Analytics,
   Plausible...). Owner exports sessions by source + key events (calls,
   form submits — see /conversion-optimize) into `seo-data/analytics/<date>/`.
4. **AI citation log** — `seo-data/ai-citations.csv`. Claude can't query
   ChatGPT/Perplexity/Gemini for the owner, and its own answers don't count.
   Each month the owner runs the prompts in `seo-data/ai-prompts.md` in a
   logged-OUT/private window and logs: date, tool, prompt, mentioned (y/n),
   linked (y/n), competitors named. Include Google's AI Overview for the
   same queries.
5. **Map pack** — owner logs a monthly spot check in `seo-data/map-pack.csv`
   (search "land clearing" from a phone in 3–4 different cities; record our
   position or "not shown"). Web-search rank checks from Claude are NOT
   location-accurate — never report them as real rankings.
6. **Leads** — `seo-data/leads.csv` (date, source: google maps / google
   search / AI / referral / other, service, city, became job y/n, job value
   optional). Leads are the real scoreboard.

## Baseline run
Create any missing files/templates above, record whatever data exists, and
list what's missing with setup steps. Save snapshot.

## Monthly run
Compare to the previous snapshot and write `seo-reports/monthly-<date>.md`:
- Top 20 queries: clicks, impressions, avg position, change. Call out
  "land clearing" terms and each city separately.
- Pages gaining/losing; pages with high impressions + low CTR (→ rewrite
  title/description) and positions 4–15 (→ closest to top 3; improve these first).
- Map-pack and AI-citation changes; which competitors keep appearing.
- Leads by source vs. last month; conversion rate from visits to leads.
- What changed on the site since last snapshot (from git log) so results
  can be connected to actions. Be honest when a change can't be linked.
- Next month's top 5 actions, ranked by expected impact.
Changes typically take weeks to months to show — don't overreact to one month.
