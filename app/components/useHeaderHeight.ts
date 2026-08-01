"use client";

import { useEffect, useState } from "react";

export function useHeaderHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const updateHeight = () => setHeight(header.getBoundingClientRect().height);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return height;
}