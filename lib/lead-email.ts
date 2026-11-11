// The automatic thank-you email a customer gets right after sending the quote form (sent by app/api/lead).

export const LEAD_EMAIL_FROM = "Logan – Grounded Land Services <Logan@groundedlandservices.com>";
export const LEAD_EMAIL_REPLY_TO = "Logan@groundedlandservices.com";
export const LEAD_EMAIL_SUBJECT = "We got your request – Grounded Land Services";

// "Land Clearing" → "land clearing", but "ATV Trail Creation" → "ATV trail creation"
const lowerService = (s: string) =>
  s
    .split(" ")
    .map((w) => (w.length > 1 && w === w.toUpperCase() ? w : w.toLowerCase()))
    .join(" ");

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** "Thanks for reaching out about land clearing in Bertram." with the blank parts left out. */
export function thanksSentence(service: string, city: string): string {
  const s = service.trim() ? lowerService(service.trim()) : "";
  const c = city.trim();
  if (s && c) return `Thanks for reaching out about ${s} in ${c}.`;
  if (s) return `Thanks for reaching out about ${s}.`;
  if (c) return `Thanks for reaching out about your project in ${c}.`;
  return "Thanks for reaching out.";
}

export function buildThankYouEmail({ name, service, city }: { name: string; service: string; city: string }) {
  const firstName = name.trim().split(/\s+/)[0] ?? "";
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";
  const paragraphs = [
    `${thanksSentence(service, city)} This is Logan with Grounded Land Services. I'll call or text you shortly to talk about your property and set up a free site visit.`,
    "If you'd like to send photos of your land in the meantime, just reply to this email or text them to (512) 571-6700.",
  ];
  const signature = ["Thanks,", "Logan", "Grounded Land Services · (512) 571-6700", "groundedlandservices.com"];

  const text = [greeting, ...paragraphs, signature.join("\n")].join("\n\n");
  const html = [
    `<p>${escapeHtml(greeting)}</p>`,
    ...paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`),
    `<p>${signature.slice(0, 3).map(escapeHtml).join("<br>")}<br><a href="https://www.groundedlandservices.com">groundedlandservices.com</a></p>`,
  ].join("\n");

  return { subject: LEAD_EMAIL_SUBJECT, text, html };
}
