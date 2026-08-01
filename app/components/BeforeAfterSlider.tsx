"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  beforeSrc: string;
  beforeLabel: string;
  afterSrc: string;
  afterLabel: string;
}

export default function BeforeAfterSlider({ beforeSrc, beforeLabel, afterSrc, afterLabel }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => setContainerWidth(el.offsetWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden select-none cursor-ew-resize border border-gray-100"
      onMouseDown={(e) => {
        dragging.current = true;
        updatePosition(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updatePosition(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* After image (full width, base layer) */}
      <div className="absolute inset-0">
        <Image src={afterSrc} alt={afterLabel} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
      </div>

      {/* Before image (clipped to slider position) */}
      {containerWidth > 0 && (
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <div className="relative h-full" style={{ width: containerWidth }}>
            <Image src={beforeSrc} alt={beforeLabel} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
          </div>
        </div>
      )}

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 text-white text-xs font-semibold rounded-full">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#C4922A] text-black text-xs font-semibold rounded-full">
        {afterLabel}
      </span>
    </div>
  );
}