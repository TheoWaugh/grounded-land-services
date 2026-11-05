// Conversion events, sent to GA4 (gtag) and Meta Pixel (fbq) when they're loaded.
// GA4 names: call_click, text_click, quote_cta_click, form_submit, calculator_used, calculator_quote_click
// Mark call_click, text_click and form_submit as Key Events in GA4.

type EventName =
  | "call_click"
  | "text_click"
  | "quote_cta_click"
  | "form_submit"
  | "calculator_used"
  | "calculator_quote_click";

// Standard Meta events; anything not listed here is sent as a Meta custom event with the GA4 name.
const metaEvents: Partial<Record<EventName, string>> = {
  call_click: "Contact",
  text_click: "Contact",
  quote_cta_click: "Contact",
  form_submit: "Lead",
};

export function trackEvent(name: EventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  const payload = { page_path: window.location.pathname, ...params };
  // gtag.js loads lazily; queue on dataLayer (same shim as the GA snippet) so early clicks aren't lost
  const dataLayer = (w.dataLayer = w.dataLayer || []);
  if (typeof w.gtag !== "function") {
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      dataLayer.push(arguments);
    };
  }
  w.gtag("event", name, payload);
  if (typeof w.fbq === "function") {
    const metaEvent = metaEvents[name];
    if (metaEvent) w.fbq("track", metaEvent, { content_name: name });
    else w.fbq("trackCustom", name, params);
  }
}
