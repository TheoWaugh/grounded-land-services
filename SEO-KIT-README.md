# SEO + AI Search + Leads Kit for Claude Code — Grounded Land Services

## Install (Windows / PowerShell)
1. Copy everything in this kit into the ROOT of your grounded-land-services
   project (next to package.json): the `.claude` folder, `seo-projects`,
   and `seo-data`. If `.claude` already exists, merge the `skills` folder in.
2. Fill in `.claude/skills/seo-optimizer/business-facts.md` with REAL facts.
   Claude is told never to invent phone numbers, prices, reviews, or licenses.
3. Put your best photos in `seo-projects/library/`.
4. In the project folder run `claude`.
5. Tip: add `seo-data/gsc/`, `seo-data/analytics/`, and `seo-data/leads.csv`
   to `.gitignore` if you don't want customer/traffic data in the repo
   (the repo is on a friend's GitHub account).

## Order to run (one per session)
| # | Command | What it does |
|---|---------|--------------|
| 1 | `/seo-track baseline` | Records current rankings, traffic, AI mentions, leads |
| 2 | `/seo-audit https://yoursite.com` | Prioritized audit, no code changes |
| 3 | `/seo-optimizer technical fixes` | Fixes the Critical/High audit items |
| 4 | `/conversion-optimize` | Call bar, quote form, trust, lead tracking |
| 5 | `/gbp-optimizer` | Google Business Profile copy, posts, review system |
| 6 | `/ai-answer-optimize` | FAQs, answer-first sections, schema, AI crawlers |
| 7 | `/seo-content-gaps` | Finds + drafts missing pages (1–2 per session) |
| 8 | `/add-project upgrade-existing` then `/add-project` | Upgrades your current case studies, then adds new jobs (ongoing) |
| 9 | `/backlink-builder` | Link prospects CSV + outreach drafts |
| 10 | `/seo-track` | Monthly comparison — what's working |

## Adding a project
1. Make a folder: `seo-projects/inbox/cedar-liberty-hill/`
2. Drop in before/during/after photos.
3. Copy `seo-projects/TEMPLATE.md` into it as `notes.md` and fill it in.
4. Run `/add-project`. GPS data is stripped from photos automatically.

## Monthly routine (~30 min of your time)
- Export Search Console (and Bing) CSVs into `seo-data/gsc/<date>/`.
- Run the prompts in `seo-data/ai-prompts.md`, log in `ai-citations.csv`.
- Spot-check the map pack from a few cities, log in `map-pack.csv`.
- Keep `leads.csv` updated as leads come in (note where they found you).
- Run `/seo-track`.

Reports land in `seo-reports/`. Code changes go on `seo/<date>` branches —
review with `git diff` before merging.
