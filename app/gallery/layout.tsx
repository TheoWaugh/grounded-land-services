import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Browse real before-and-after photos and videos of Grounded Land Services' completed land clearing, forestry mulching, and site development projects across Central Texas.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}