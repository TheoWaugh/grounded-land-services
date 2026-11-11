import { NextRequest, NextResponse } from "next/server";
import { buildThankYouEmail, LEAD_EMAIL_FROM, LEAD_EMAIL_REPLY_TO } from "@/lib/lead-email";

// Runs alongside the Formspree submission (QuoteForm still sends there exactly as before):
// 1. adds the request as a row in the owner's Google Sheet and saves any photos to Drive (Apps Script web app)
// 2. emails the customer an automatic thank-you through Resend
// Env vars (never in code): LEAD_SHEET_URL, LEAD_SHEET_SECRET, RESEND_API_KEY.

export const maxDuration = 30;
// GET reads the env vars at request time, so photo uploads switch on as soon as they're set
export const dynamic = "force-dynamic";

const LEAD_SOURCES = ["Google Profile", "Calculator", "Chat", "Website"];
const MAX_PHOTOS = 5;
const MAX_PHOTO_CHARS = 2_000_000; // ~1.5 MB per resized photo, as base64
const JPEG_PREFIX = "data:image/jpeg;base64,";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const linkCount = (s: string) => (s.match(/https?:\/\/|www\.|<a\s/gi) ?? []).length;

type Outcome = "sent" | "skipped" | "failed";

async function addToSheet(lead: Record<string, unknown>): Promise<Outcome> {
  const url = process.env.LEAD_SHEET_URL;
  const secret = process.env.LEAD_SHEET_SECRET;
  if (!url || !secret) return "skipped";
  try {
    // Apps Script answers a POST with a redirect to the result; fetch follows it
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, secret }),
      signal: AbortSignal.timeout(25_000),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (data?.ok) return "sent";
    console.error("Lead sheet: Apps Script did not confirm", res.status, data?.error ?? "");
    return "failed";
  } catch (error) {
    console.error("Lead sheet: request failed", error);
    return "failed";
  }
}

async function sendThankYou(to: string, name: string, service: string, city: string): Promise<Outcome> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return "skipped";
  const email = buildThankYouEmail({ name, service, city });
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: LEAD_EMAIL_FROM,
        to: [to],
        reply_to: LEAD_EMAIL_REPLY_TO,
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
      signal: AbortSignal.timeout(15_000),
    });
    if (res.ok) return "sent";
    console.error("Thank-you email: Resend refused", res.status, await res.text().catch(() => ""));
    return "failed";
  } catch (error) {
    console.error("Thank-you email: request failed", error);
    return "failed";
  }
}

/** Tells the quote form whether photos have somewhere to go (the Google Sheet + Drive connection is set up). */
export async function GET() {
  return NextResponse.json({ photos: Boolean(process.env.LEAD_SHEET_URL && process.env.LEAD_SHEET_SECRET) });
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  const name = str(body.name, 100);
  const email = str(body.email, 200);
  const phone = str(body.phone, 40);
  const city = str(body.city, 100);
  const service = str(body.service, 60);
  const comments = str(body.comments, 3000);

  // Spam check. Bots get an "ok" so they don't retry; nothing is saved or sent.
  const elapsedMs = Number(body.elapsedMs);
  const looksLikeSpam =
    str(body._gotcha, 200) !== "" || // the form's hidden bot trap
    !Number.isFinite(elapsedMs) ||
    elapsedMs < 3000 || // filled out faster than a person can type
    linkCount(name) > 0 ||
    linkCount(comments) > 2;
  if (looksLikeSpam) return NextResponse.json({ ok: true });

  if (
    !name ||
    !city ||
    phone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "").length !== 10 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 400 });
  }

  const leadSource = LEAD_SOURCES.includes(str(body.leadSource, 30)) ? str(body.leadSource, 30) : "Website";
  const photos = (Array.isArray(body.photos) ? body.photos : [])
    .filter((p): p is string => typeof p === "string" && p.startsWith(JPEG_PREFIX) && p.length <= MAX_PHOTO_CHARS)
    .slice(0, MAX_PHOTOS)
    .map((p) => p.slice(JPEG_PREFIX.length));

  const [sheet, thankYou] = await Promise.all([
    addToSheet({
      name,
      email,
      phone,
      city,
      service,
      leadSource,
      jobSize: str(body.jobSize, 60),
      estimate: str(body.estimate, 60), // the cost calculator's range, if they used it
      photos,
    }),
    sendThankYou(email, name, service, city),
  ]);

  return NextResponse.json({ ok: true, sheet, email: thankYou });
}
