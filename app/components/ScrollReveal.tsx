"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
  threshold = 0.15,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay ? `delay-${delay}` : "";

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`${animation} ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
