"use client";

import { useEffect, useState } from "react";

export default function ScrollGrowBar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const growDistance = 350;
  const minWidthPercent = 8;
  const percent = Math.min(
    100,
    minWidthPercent + (scrollY / growDistance) * (100 - minWidthPercent)
  );

  return (
    <div className="w-full h-1 bg-transparent mt-4">
      <div
        className="h-1 bg-[#C4922A] transition-none"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}