"use client";

import { useEffect, useState } from "react";
import { useHeaderHeight } from "./useHeaderHeight";

export default function ServiceStickyTitle({ title }: { title: string }) {
  const headerHeight = useHeaderHeight();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const growDistance = 350;
  const minWidthPercent = 12;
  const percent = Math.min(
    100,
    minWidthPercent + (scrollY / growDistance) * (100 - minWidthPercent)
  );

return (
    <div
      className="sticky z-40 bg-white w-full"
      style={{ top: headerHeight }}
      data-sticky-title-bar
    >
      <div className="max-w-3xl mx-auto px-6 pt-4 pb-3">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] leading-tight">
          {title}
        </h1>
      </div>
      <div className="w-full h-1 bg-gray-100">
        <div className="h-1 bg-[#C4922A]" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}