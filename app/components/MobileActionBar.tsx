"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Sticky Call / Text / Quote bar on phones. Hidden while typing in a form
// field so it never sits on top of the keyboard or the submit button.
export default function MobileActionBar() {
  const pathname = usePathname();
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const isField = (el: EventTarget | null) =>
      el instanceof HTMLElement && el.matches("input, textarea, select");
    const onFocusIn = (e: FocusEvent) => isField(e.target) && setTyping(true);
    const onFocusOut = (e: FocusEvent) => isField(e.target) && setTyping(false);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  // Pages with a quote form scroll to it; others go to the contact page form
  const quoteHref = pathname?.startsWith("/services/") || pathname?.startsWith("/service-areas/") || pathname === "/" || pathname === "/contact"
    ? "#quote"
    : "/contact#quote";

  const btn = "flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold";

  return (
    <nav
      aria-label="Contact Grounded Land Services"
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 bg-[#0a0a0a] border-t border-[#C4922A]/30 pb-[env(safe-area-inset-bottom)] transition-transform duration-200 ${
        typing ? "translate-y-full" : ""
      }`}
    >
      <div className="flex h-16">
        <a href="tel:5125716700" data-track="mobile_bar" className={`${btn} text-white`}>
          <svg className="w-5 h-5 text-[#D4A840]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <a href="sms:5125716700" data-track="mobile_bar" className={`${btn} text-white border-x border-white/10`}>
          <svg className="w-5 h-5 text-[#D4A840]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Text
        </a>
        <a href={quoteHref} data-track="mobile_bar" className={`${btn} flex-[1.4] bg-[#C4922A] text-black text-sm`}>
          Get a Free Quote
        </a>
      </div>
    </nav>
  );
}
