---
name: conversion-optimize
description: Turn website visitors into calls and quote requests — mobile call bar, better quote form, above-the-fold trust and CTAs, thank-you page, lead tracking, and lead-handling checks. Use for "more leads", "more calls", "conversions", "people visit but don't call", or "quote form".
argument-hint: "[optional page to focus on]"
---

# Conversion optimizer (clicks → customers)

Read `../seo-optimizer/business-facts.md` and the "Leads" section in it.
Scope: $ARGUMENTS (default: homepage, all service pages, city pages).
Assume most visitors are on a phone, often standing on the property.
Work on a branch; build and test on the local dev server before finishing.

## 1. Audit first → `seo-reports/conversion-audit-<date>.md`
For each page at a 390px mobile width, answer: within the first screen, can
a visitor tell (a) what you do, (b) that you serve their city, (c) why trust
you, (d) how to contact you in one tap? Also check page speed issues, broken
or non-clickable phone numbers, form fields, where form submissions actually
go, and whether any conversion tracking exists. Rank fixes by impact.

## 2. Contact paths
- Every phone number is a `tel:` link in the exact format from business-facts.
- **Sticky mobile action bar** (bottom of screen, mobile only): "Call" (tel:)
  + "Get a Quote" (to the form). Add "Text" (`sms:`) only if the owner takes
  texts. Must not cover content, cookie banners, or the form's submit button;
  respect safe-area insets. Desktop: phone in the header, always visible.
- No pop-ups, no auto-playing chat widgets.

## 3. Quote form (short beats long)
Fields: name, phone, city/area (dropdown of service cities + "Other"),
service (dropdown), rough size (optional), short description (optional),
photos (optional, only if the backend can store them safely). Email optional.
- Clear labels, correct mobile keyboards (`type="tel"`), big tap targets,
  inline validation, honeypot field for spam (no third-party CAPTCHA unless
  the owner asks). Put it on every service/city page, not only /contact.
- Verify delivery: find where submissions go (API route, Formspree,
  Resend, email service...). Test ONLY on localhost with test data. If
  there's no working delivery, stop and report options — don't guess.
- Submit → **thank-you page** (`/thank-you`, noindex) that says what happens
  next and when (use the real response time from business-facts.md), shows
  the phone number, and links to projects.

## 4. Trust at the point of decision
Next to CTAs and in the first screen: real review rating/count (only if in
business-facts.md, linked to the GBP), "Licensed & insured" only if true,
years in business, owner name/photo, equipment photo, 2–3 recent project
cards, service-area list. One clear promise if true (free on-site estimate,
response within X hours). Short testimonial quotes with permission.

## 5. Page copy
- Headline: service + area + outcome ("Land Clearing in Austin & Hill
  Country — Build-Ready Lots Without the Mess").
- Primary CTA above the fold and repeated after each major section.
- "How it works" in 3–4 steps (call → on-site estimate → clearing →
  cleanup) and a pricing-factors section so visitors know what to expect.
- Answer the objections from business-facts.md "customer questions".

## 6. Tracking (so /seo-track can count leads)
Detect the analytics tool. Fire events for: phone click (`tel:`), text
click, form submit success (fire on the thank-you page), quote CTA click.
Name them clearly (`call_click`, `form_submit`, ...). If GA4 exists, note
for the owner which events to mark as Key Events. If no analytics exists,
list options and stop — don't add a tool without the owner's OK.
Keep GBP link UTMs from /gbp-optimizer working.

## 7. Speed-to-lead (owner process — report, don't build unless asked)
Add to the report: most local-service leads hire whoever responds first.
Recommend: form notifications to the owner's phone (email-to-text or the
form service's app), an instant auto-reply to the customer confirming
receipt, and a missed-call text-back option from their phone carrier/app.

## 8. Finish
`npm run build`, check the mobile layout, and summarize changes + TODO(owner).
