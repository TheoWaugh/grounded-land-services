# Conversion audit: 2026-10-20

Scope: homepage, all /services/* pages, all /service-areas/<city>/<service> pages (plus /contact).
Checked at 390px mobile width. Branch: `seo/2026-10-20-conversion`.

## 1. First-screen check (before changes)

| Page type | (a) What you do | (b) Serves my city | (c) Why trust you | (d) One-tap contact |
|---|---|---|---|---|
| Homepage | Weak: H1 "Reclaim Your Land." The subtitle only said "land clearing and site development" | "Central Texas" only | None above the fold | No: the phone was hidden in the hamburger menu, and "Get a Free Quote" went to another page |
| Service pages | Yes (title + price card) | No (statewide pages) | None until TrustBadges near the bottom | No phone. "Get a Free Estimate" sent people to /contact |
| City pages | Yes | Yes (the title names the city) | None until near the bottom | Same as service pages |
| /contact | Yes | Partly | No | Yes (phone strip) |

## 2. Problems found, ranked by impact
1. **No phone on the first screen on mobile, sitewide.** On phones, the only tap-to-call link was inside the hamburger menu.
2. **Service and city pages said "Fill out the form below!" but there was no form below.** Visitors had to click through to /contact and start again.
3. **GA4 had no conversion events.** Only the desktop header phone link and the form fired Meta Pixel events. Phone taps on mobile (the menu, footer, homepage, contact page and FAQ links) weren't tracked at all.
4. **The Meta Pixel was probably not loading.** `app/layout.tsx` had two `<Script id="meta-pixel">` tags and the first was empty. Next.js loads only one script per id.
5. **The form was long and strict:** 6 required fields, including email and a full street address. The city was free text, and errors showed as browser `alert()` pop-ups. There was no spam protection.
6. **No thank-you page.** Without one there's no clear "what happens next", nothing to count in analytics, and nothing to show while the visitor waits.
7. **Conflicting review counts.** The homepage said "23+ Five-Star Reviews", TrustBadges said 18, and the schema says 24. Google shows 18.
8. City pages pre-selected a service only for 4 of the services. Rock removal and the others started blank.
9. The chat button would have covered a bottom action bar on mobile.

## 3. Changes made
- **Mobile action bar** (`MobileActionBar.tsx`): Call / Text / Get a Free Quote, phones only. It respects the safe-area inset, the body has bottom padding so the footer isn't covered, and the bar slides away while a form field is focused so it never covers the keyboard or the submit button. The chat button was moved up above it.
- **Quote form on every service and city page** (`QuoteSection.tsx`, `id="quote"`). The city and service are pre-selected from the page, and every "Get a Free Estimate" and footer button now scrolls to it.
- **Shorter quote form** (`QuoteForm.tsx`):
  - Name, phone, city and email are required. Email was made required again at the owner's request. City is a text box that suggests our service cities as you type (HTML datalist), accepts any city, and is pre-filled (still editable) on city pages.
  - Service, rough size and details are optional.
  - Inline validation (10-digit phone) and correct mobile keyboards.
  - A hidden `_gotcha` honeypot to catch spam bots.
  - The email subject line now names the service and city. Each submission also includes the page it came from and any UTM tags, so GBP traffic stays traceable.
- **/thank-you page** (noindex). It says Logan will call or text within 24 hours and lays out the 3 next steps, with Call and Text buttons and 3 project cards (Spicewood, Liberty Hill, Gonzales).
- **Trust strip** under the hero on service and city pages and in the homepage hero: "★★★★★ 5.0 on Google (18 reviews)", linked to the Google Business Profile, plus "Licensed & insured · Free on-site estimates · Reply within 24 hrs".
- **Homepage hero:** a subtitle naming the services and areas, a Call button, and the trust strip. "23+ Five-Star Reviews" is now "5.0 Stars on Google", with 18 reviews.
- **Header:** the "Contact Us" button is now "Get a Free Quote" and goes straight to the form.
- **Tracking** (`lib/track.ts` + `ClickTracker.tsx`, one listener sitewide). Each event is sent to GA4 and Meta:

  | GA4 event | Meta event | When it fires |
  |---|---|---|
  | `call_click` | Contact | any tel: link |
  | `text_click` | Contact | any sms: link |
  | `quote_cta_click` | Contact | any quote or contact link |
  | `form_submit` | Lead | on /thank-you, only after a real submission; reloads aren't counted |

  Each event includes `link_location` (mobile_bar, header, home_hero, footer_cta and so on), and form_submit also includes `service` and `city`.
- Removed the duplicate empty Meta Pixel script.
- Put the slug → label list in one shared file (`data/quote-services.ts`).

## 4. Testing (local production build, 390×844, Formspree mocked)
- No horizontal scroll at 390px.
- The Liberty Hill land-clearing page pre-selects city "Liberty Hill" and service "Land Clearing".
- Submitting empty shows inline errors, and the bar hides while typing.
- A valid submission sends the right data (including `page` and `utm_source=gbp`) and redirects to /thank-you.
- Events fired in order: `call_click`, then `quote_cta_click`, then `form_submit`. form_submit fired once, and 0 times after a reload.
- /thank-you has `noindex, follow`. The Meta Pixel (`fbq`) now loads.
- **No live submission was sent.** The Formspree form `maqaelbv` exists: a GET request returns 405 rather than 404.

## 5. Not changed (needs owner input)
- **"100+ Projects Completed"** (homepage stats) and **"Years of Proven Experience"** (the business was founded in 2025). Keep these only if they're true, for example counting jobs done before the business existed.
- "Licensed, Insured & **Certified**": which certification? Name it or drop the word.
- Schema `reviewCount: "24"` and the street address in `app/layout.tsx`. Both are flagged in business-facts.md and waiting on your OK.
- The /contact form section has no trust strip yet, and the service pages don't have a "pricing factors / how it works" block near the top. Both are possible next steps.

## 6. Speed-to-lead (your process)
Most local-service leads hire whoever answers first, and one of your own reviews says *"One of the only companies that responded."* Lean into that:
1. **Get form leads on your phone instantly.** Install the Formspree app or turn on push notifications, or forward the Formspree emails to your carrier's email-to-text address.
2. **Auto-reply to the customer.** Formspree's autoresponse (paid plans) can confirm receipt. Email is a required field, so every lead can get one.
3. **Missed-call text-back.** Set up an automatic text for missed calls: "Sorry I missed you, I'm on a machine. I'll call back within the hour. — Logan". Google Voice, your carrier, or apps like Grasshopper or OpenPhone can do this.
4. Aim to reply within 1 hour during working hours, even when the site says 24.

## 7. Owner decisions (applied 2026-10-20, same branch)
- "100+ Projects Completed" is true, so it stays. "Years of Proven Experience" is now "Clearing Land Since 2020".
- "Certified" was removed everywhere: the homepage card and stats strip, the footer, the contact page FAQ, and the site meta description.
- Schema reviewCount changed from 24 to 18. streetAddress was removed from the schema; Bertram, TX 78605 stays.
- Email is required again on the quote form.
- City went back to a free-text box (required). It suggests our service cities and is pre-filled on city pages.
