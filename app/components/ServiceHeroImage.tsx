"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ServiceHeroImage({
  src,
  alt,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const bar = document.querySelector("[data-sticky-title-bar]");
      if (!container || !bar) return;

      const rect = container.getBoundingClientRect();
      const barBottom = bar.getBoundingClientRect().bottom;

      const imageHeight = rect.height;
      const progress = (barBottom - rect.top) / imageHeight;
      const newOpacity = 1 - Math.min(1, Math.max(0, progress));
      setOpacity(newOpacity);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<div ref={containerRef} className="relative z-0 w-full mb-3">
      <div
        className="relative w-full h-80 md:h-[32rem] overflow-hidden"
        style={{ opacity }}
      >
<Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition }}
          sizes="100vw"
        />
      </div>
    </div>
  );
}