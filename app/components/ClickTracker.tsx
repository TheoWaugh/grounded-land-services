"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/track";

// One listener for the whole site, so every tel:/sms:/quote link is counted
// without wiring onClick handlers into each component.
export default function ClickTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const location = link.dataset.track ?? "";

      if (href.startsWith("tel:")) {
        trackEvent("call_click", { link_location: location });
      } else if (href.startsWith("sms:")) {
        trackEvent("text_click", { link_location: location });
      } else if (href.includes("#quote") || href.startsWith("/contact")) {
        trackEvent("quote_cta_click", { link_location: location, link_text: link.textContent?.trim().slice(0, 60) ?? "" });
      }
    };
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
