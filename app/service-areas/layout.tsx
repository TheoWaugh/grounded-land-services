import type { Metadata } from "next";

export const metadata: Metadata = {
  // Template keeps the brand on child pages (city hubs and city × service pages).
  title: {
    default: "Central Texas Service Areas",
    template: "%s | Grounded Land Services",
  },
  description: "Land clearing, forestry mulching and rock removal across the Austin Metro, Hill Country, Central Texas and San Antonio area. Find your city for a free estimate.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/service-areas",
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
