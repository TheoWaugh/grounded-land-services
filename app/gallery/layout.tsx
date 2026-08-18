import type { Metadata } from "next";
import VideoSchema from "@/app/components/VideoSchema";
import { videoMetadata } from "@/data/video-metadata";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Browse real before-and-after photos and videos of Grounded Land Services' completed land clearing, forestry mulching, and site development projects across Central Texas.",
  alternates: {
    canonical: "https://www.groundedlandservices.com/gallery",
  },
};

const galleryVideoIds = ["aSRb_PbjbIE", "W1AeIo_miIA", "KjYxH1hgTwM", "hLimv0coUqo", "RwfM81A1NRk", "0jYU5H4qCi0", "_3PySbe3zwU", "sroBopMm2rc"];
const galleryVideoSchema = galleryVideoIds
  .map((id) => videoMetadata[id] && { videoId: id, ...videoMetadata[id] })
  .filter((v): v is { videoId: string; name: string; description: string; uploadDate: string } => Boolean(v));

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VideoSchema videos={galleryVideoSchema} />
      {children}
    </>
  );
}