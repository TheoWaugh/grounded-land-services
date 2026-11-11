// Where a quote request came from, for the "Lead source" column in the owner's Google Sheet.
// Kept in sessionStorage so it survives the visitor moving from page to page before filling out the form.

export type LeadSource = "Google Profile" | "Calculator" | "Chat" | "Website";

const UTM_KEY = "gls_utm";
const CLICK_KEY = "gls_lead_source";

function read<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

/** Call on every page load: keeps the first tagged link of the visit (e.g. a GBP post's utm_ tags). */
export function rememberUtm() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source") ?? "";
  const campaign = params.get("utm_campaign") ?? "";
  if ((source || campaign) && !read(UTM_KEY)) write(UTM_KEY, { source, campaign });
}

/** The cost calculator's or chat's quote link was clicked. */
export function markLeadSource(source: "Calculator" | "Chat", estimate = "") {
  write(CLICK_KEY, { source, estimate });
}

export function getLeadSource(): { source: LeadSource; estimate: string } {
  const params = new URLSearchParams(window.location.search);
  const utm = read<{ source: string; campaign: string }>(UTM_KEY) ?? {
    source: params.get("utm_source") ?? "",
    campaign: params.get("utm_campaign") ?? "",
  };
  const click = read<{ source: "Calculator" | "Chat"; estimate: string }>(CLICK_KEY);
  const estimate = click?.source === "Calculator" ? click.estimate : "";

  if (utm.source.toLowerCase() === "google" || utm.campaign.toLowerCase().includes("gbp")) {
    return { source: "Google Profile", estimate };
  }
  if (click) return { source: click.source, estimate };
  return { source: "Website", estimate: "" };
}
