---
name: add-project
description: Turn a real completed job (photos + notes) into a project/case-study page on the site, linked from the matching service and city pages, plus a GBP post and social caption. Use when the owner says "add a project", "new job", "before and after", or drops files in seo-projects/inbox/.
argument-hint: "[inbox folder name | 'upgrade-existing' to improve the case studies already on the site]"
---

# Add a project page

Read `../seo-optimizer/business-facts.md` and `../seo-optimizer/reference.md` first.

## FIRST: find the existing case studies
The site already has a case studies page with several case studies. Before
anything else, find it (search the code for "case stud", "projects",
"portfolio") and how it's built (one page with sections? a data file? one
route per case study?). ALWAYS add to that existing setup and match its
design. Never create a second projects or case-studies section.

## Mode: upgrade-existing
If $ARGUMENTS is "upgrade-existing", don't add new jobs. For each existing
case study, report then fix (one or two per session if they need a lot):
- Does it have its own URL? If they're all on one page, propose (and ask the
  owner before doing) giving each its own page, with the current page kept as
  the index linking to them. Separate pages can rank for "<service> <city>".
- Missing facts (city, acreage, equipment, duration, what the land became) →
  list as TODO(owner) questions; don't invent.
- Photo alt text, file size, and EXIF/GPS (strip it).
- Title, description, H1, answer-first summary, BreadcrumbList schema.
- Links: from the matching service page and city page, and back.
- Sitemap entry.
Write `seo-reports/case-studies-upgrade-<date>.md` with what changed and the
questions for the owner.

## Input the owner provides (new jobs)
`seo-projects/inbox/<short-name>/` containing:
- photos (before, during, after — phone photos are fine)
- `notes.md` (copy `seo-projects/TEMPLATE.md`): city, service, acreage,
  vegetation/terrain, equipment, duration, what the customer wanted, anything
  tricky, whether the customer gave permission to be named/quoted.
Process: $ARGUMENTS (default: every folder in the inbox).

If notes are missing key facts (city, service, duration), ASK the owner
before writing. Never invent acreage, times, or quotes.

## Steps
1. **Privacy first.** Strip ALL EXIF metadata (GPS pins the customer's
   property) — e.g. with `sharp` (`.rotate()` then output without
   `withMetadata`). Location on the page: city or area only, never a street
   address, unless notes say the customer approved it. No house numbers,
   license plates, or faces of customers visible — flag photos that show them.
2. **Images.** Resize to max 2000px wide, convert to WebP (keep a JPG
   fallback only if the site already uses them), descriptive filenames
   (`cedar-clearing-liberty-hill-after.webp`), save under
   `public/projects/<slug>/`. Alt text describes what's in the photo + city.
3. **Page.** Add it to the existing case studies setup (see FIRST above),
   following the same pattern and components as the case studies already there.
   - Title: `<Service> in <City>, TX: <short result> | Grounded Land Services`
   - H1 + a 2–3 sentence answer-first summary (what, where, how big, how long)
   - Sections: The job, The approach (equipment + why), The result,
     before/after gallery, customer quote (only with permission), CTA
     ("Have a similar lot in <City>? Call / Get a quote").
   - JSON-LD: BreadcrumbList; reference the site's LocalBusiness and the
     relevant Service. No review markup.
4. **Link it in.** Add a card/link on: the matching service page, the
   matching city page (create a TODO if that city page doesn't exist), and the
   existing case studies index page. Add to the sitemap.
5. **Reuse it.** Write to `seo-reports/projects/<slug>-promo.md`:
   a GBP post (with suggested photo), a Facebook/Instagram caption, and a
   1-line "recent project" blurb for the homepage.
6. Move the inbox folder to `seo-projects/done/<slug>/`, run `npm run build`,
   and summarize what was created.
