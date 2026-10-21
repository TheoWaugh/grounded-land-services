"use client";

import { useEffect, useSyncExternalStore } from "react";
import { trackEvent } from "@/lib/track";

type Lead = { service: string; city: string; page?: string };

// The quote form sets "gls_lead" in sessionStorage right before redirecting here.
// It's moved into memory and cleared, and each lead is tracked once, so reloads
// and direct visits to /thank-you are not counted as leads.
let current: { lead: Lead; tracked: boolean } | null = null;
function readLead(): Lead | null {
  try {
    const raw = sessionStorage.getItem("gls_lead");
    if (raw) {
      sessionStorage.removeItem("gls_lead");
      current = { lead: JSON.parse(raw), tracked: false };
    }
  } catch {}
  return current?.lead ?? null;
}

const subscribe = () => () => {};

export default function LeadConfirmation() {
  const lead = useSyncExternalStore(subscribe, readLead, () => null);

  useEffect(() => {
    if (!lead || !current || current.tracked) return;
    current.tracked = true;
    trackEvent("form_submit", {
      service: lead.service ?? "",
      city: lead.city ?? "",
      form_page: lead.page ?? "",
    });
  }, [lead]);

  if (!lead) return null;
  return (
    <p className="text-[#D4A840] font-medium mb-3">
      Your request{lead.service !== "Not specified" ? ` for ${lead.service}` : ""} in {lead.city} was received.
    </p>
  );
}
