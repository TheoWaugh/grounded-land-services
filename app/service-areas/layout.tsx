import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Grounded Land Services proudly serves Central Texas, including the Austin Metro, Hill Country, San Antonio Area, and beyond. Find your city and explore our land clearing services.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/service-areas",
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}