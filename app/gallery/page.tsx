"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import VideoCarousel from "../components/VideoCarousel";

const allImages = [
  { src: "/images/work/dji_fly_20251022_072324_0022_1768263397042_photo.jpeg", alt: "Aerial view of cleared land", tag: "Aerial" },
  { src: "/images/work/dji_fly_20251216_170548_0077_1768262973755_photo.jpeg", alt: "Drone shot of property", tag: "Aerial" },
  { src: "/images/work/dji_fly_20260130_143526_0122_1769999345932_photo.jpeg", alt: "Aerial land clearing result", tag: "Aerial" },
  { src: "/images/work/IMG_0363.jpeg", alt: "Land clearing with mulch finish", tag: "Mulching" },
  { src: "/images/work/IMG_0534.jpeg", alt: "Cleared land site preparation", tag: "Land Clearing" },
  { src: "/images/work/IMG_0535.jpeg", alt: "Cleared land project", tag: "Land Clearing" },
  { src: "/images/work/IMG_0570.jpeg", alt: "Rock crushing project", tag: "Rock Crushing" },
  { src: "/images/work/IMG_0699.jpeg", alt: "Site preparation work", tag: "Site Prep" },
  { src: "/images/work/IMG_0702.jpeg", alt: "Property cleared and graded", tag: "Land Clearing" },
  { src: "/images/work/IMG_1502.jpeg", alt: "Cedar tree removal", tag: "Cedar Removal" },
  { src: "/images/work/IMG_1592.jpeg", alt: "Tree pile shredding", tag: "Mulching" },
  { src: "/images/work/IMG_1593.jpeg", alt: "Fence line clearing", tag: "Land Clearing" },
  { src: "/images/work/IMG_1641.jpeg", alt: "Site preparation grading", tag: "Site Prep" },
  { src: "/images/work/IMG_1809.jpeg", alt: "Land clearing project complete", tag: "Land Clearing" },
  { src: "/images/work/IMG_1890.jpeg", alt: "Underbrushing with mature trees preserved", tag: "Underbrushing" },
  { src: "/images/work/IMG_2966.jpeg", alt: "Land clearing results", tag: "Land Clearing" },
  { src: "/images/work/IMG_3180.jpeg", alt: "Cleared property ready for development", tag: "Site Prep" },
  { src: "/images/work/IMG_6405.jpeg", alt: "Utility trenching project", tag: "Utility" },
  { src: "/images/work/henson-clearing-4-mulching.jpeg", alt: "Henson property forestry mulching", tag: "Mulching" },
  { src: "/images/work/garrison-clearing-4-land-clearing.jpeg", alt: "Garrison property land clearing", tag: "Land Clearing" },
  { src: "/images/work/garrison-clearing-3-land-clearing.jpeg", alt: "Garrison property land clearing", tag: "Land Clearing" },
  { src: "/images/work/garrison-clearing-2-land-clearing.jpeg", alt: "Garrison property land clearing", tag: "Land Clearing" },
  { src: "/images/work/anderson-pool-demo.jpeg", alt: "Anderson pool demolition", tag: "Site Prep" },
  { src: "/images/work/wedding-before-after-3-mulching.jpeg", alt: "Wedding venue before and after forestry mulching", tag: "Mulching" },
  { src: "/images/work/wedding-before-after-2-mulching.jpeg", alt: "Wedding venue before and after forestry mulching", tag: "Mulching" },
  { src: "/images/work/wedding-before-after-1-mulching.jpeg", alt: "Wedding venue before and after forestry mulching", tag: "Mulching" },
  { src: "/images/work/henson-before-after-3-mulching.jpeg", alt: "Henson property before and after forestry mulching", tag: "Mulching" },
  { src: "/images/work/henson-before-after-2-mulching.jpeg", alt: "Henson property before and after forestry mulching", tag: "Mulching" },
  { src: "/images/work/henson-before-after-mulching.jpeg", alt: "Henson property before and after forestry mulching", tag: "Mulching" },
  { src: "/images/work/henson-clearing-3-mulching.jpeg", alt: "Henson property forestry mulching", tag: "Mulching" },
  { src: "/images/work/henson-clearing-2-mulching.jpeg", alt: "Henson property forestry mulching", tag: "Mulching" },
  { src: "/images/work/henson-clearing-mulching.jpeg", alt: "Henson property forestry mulching", tag: "Mulching" },
  { src: "/images/work/balcones-trail-mulching.jpeg", alt: "Balcones Trail forestry mulching", tag: "Mulching" },
  { src: "/images/work/275-pic-equipment.jpeg", alt: "Grounded Land Services equipment", tag: "Equipment" },
  { src: "/images/work/323-pic-equipment.jpeg", alt: "Grounded Land Services equipment", tag: "Equipment" },
  { src: "/images/work/mendenhall-clearing-land-clearing.jpeg", alt: "Mendenhall property land clearing", tag: "Land Clearing" },
  { src: "/images/work/IMG_6567.jpeg", alt: "Completed land project", tag: "Land Clearing" },
  { src: "/images/work/IMG_7142.jpeg", alt: "Dirt work and grading", tag: "Dirt Work" },
  { src: "/images/work/IMG_7144.jpeg", alt: "Driveway construction", tag: "Driveways" },
  { src: "/images/work/IMG_7145.jpeg", alt: "Site cleanup complete", tag: "Site Cleanup" },
  { src: "/images/work/077B2E5E-1FAE-4AA1-8427-01227EF05118.jpeg", alt: "Land clearing before and after", tag: "Land Clearing" },
  { src: "/images/work/07BE24F3-A999-4B83-AF2F-EEF630E6F1AC.jpeg", alt: "Brush clearing project", tag: "Land Clearing" },
  { src: "/images/work/0D85F6BC-81E3-48AD-ABF8-A506D42A0520.jpeg", alt: "Cedar removal results", tag: "Cedar Removal" },
  { src: "/images/work/22B0719A-A744-4ADE-85E7-F9AA93064B88.jpeg", alt: "Mulching project complete", tag: "Mulching" },
  { src: "/images/work/3E0906A9-AD6F-4F64-83BB-7F83B3CEC204.jpeg", alt: "Cleared acreage", tag: "Land Clearing" },
  { src: "/images/work/40E7FF8B-C150-407E-9C2B-20EB9C32B4F4.jpeg", alt: "Site prep project", tag: "Site Prep" },
  { src: "/images/work/4214E3C7-9969-4B6A-B1B5-C9E958CA7619.jpeg", alt: "Land clearing work", tag: "Land Clearing" },
  { src: "/images/work/42D640F8-AEBD-4073-9F8A-B55073F78DD4.jpeg", alt: "Brush removal", tag: "Mulching" },
  { src: "/images/work/497D4F69-C9AD-4DC7-93C7-5A8184A544BE.jpeg", alt: "Property transformation", tag: "Land Clearing" },
  { src: "/images/work/67BC4B9E-CAA7-492D-B8F8-30D7B891D19B.jpeg", alt: "Rock crushing results", tag: "Rock Crushing" },
  { src: "/images/work/8DC89224-6F9C-4CB6-B77A-1CCAFD2C0DD0.jpeg", alt: "Graded land surface", tag: "Dirt Work" },
  { src: "/images/work/B8149350-A976-41F6-8DF0-33DA9C4C31ED.jpeg", alt: "Cleared property", tag: "Land Clearing" },
  { src: "/images/work/F6E63EEB-DC78-41A9-AD5D-C83E2F489DAA.jpeg", alt: "Land transformation complete", tag: "Land Clearing" },
  { src: "/images/service-pics/IMG_0628.jpeg", alt: "CAT excavator on cleared land", tag: "Equipment" },
  { src: "/images/service-pics/IMG_2337.jpeg", alt: "Service in action", tag: "Mulching" },
  { src: "/images/service-pics/IMG_2509.jpeg", alt: "Forestry mulching service", tag: "Mulching" },
  { src: "/images/service-pics/IMG_2911.jpeg", alt: "Land clearing in progress", tag: "Land Clearing" },
  { src: "/images/service-pics/IMG_2966.jpeg", alt: "Site preparation", tag: "Site Prep" },
  { src: "/images/service-pics/IMG_3053.jpeg", alt: "Cedar removal in progress", tag: "Cedar Removal" },
  { src: "/images/service-pics/IMG_3180.jpeg", alt: "Mulching complete", tag: "Mulching" },
  { src: "/images/service-pics/IMG_3191.jpeg", alt: "Land ready for development", tag: "Site Prep" },
  { src: "/images/work/spicewood-harley-raking1.JPEG", alt: "Harley raking in Spicewood, TX", tag: "Site Prep" },
  { src: "/images/work/harley-rake-pic.JPEG", alt: "Harley rake equipment", tag: "Equipment" },
  { src: "/images/work/king-rock-removal.jpeg", alt: "Rock removal project", tag: "Site Prep" },
];

const tags = ["All", "Land Clearing", "Forestry Mulching", "Cedar Removal", "Rock Crushing", "Site Prep", "Aerial", "Dirt Work", "Driveways", "Equipment"];
const galleryVideos = [
  { id: "aSRb_PbjbIE", caption: "Land clearing in action" },
  { id: "W1AeIo_miIA", caption: "Completed land clearing project" },
  { id: "KjYxH1hgTwM", caption: "Forestry mulching in action" },
  { id: "hLimv0coUqo", caption: "Forestry mulching in action" },
  { id: "RwfM81A1NRk", caption: "Forestry mulching in action" },
  { id: "0jYU5H4qCi0", caption: "Pool Demolition" },
];
export default function GalleryPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered = activeTag === "All" ? allImages : allImages.filter((img) => img.tag === activeTag);

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/images/work/dji_fly_20260130_143526_0122_1769999345932_photo.jpeg"
          alt="Gallery hero"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
          <p className="section-label-light mb-2">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Project Gallery</h1>
        </div>
      </section>

      {/* Video showcase */}
      <section className="py-4 px-6 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] inline-flex items-center gap-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-[#D4A840] to-[#C4922A] rounded-full inline-block" />
              Video Highlights
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <VideoCarousel
              videoIds={galleryVideos.map((v) => v.id)}
              captions={galleryVideos.map((v) => v.caption)}
            />
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTag === tag
                    ? "bg-[#0a0a0a] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 px-6 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-2 flex items-center gap-3">
            <span className="w-1.5 h-7 bg-gradient-to-b from-[#D4A840] to-[#C4922A] rounded-full inline-block" />
            Photos
          </h2>
          <p className="text-[#6e6e73] text-sm mb-8">
            Showing {filtered.length} of {allImages.length} photos
          </p>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={img.src + i}
                className="gallery-item break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImg(img.src)}
              >
                <div className="relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="gallery-img w-full h-auto"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  <span className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#6e6e73]">
              No photos found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImg}
              alt="Full size gallery image"
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[85vh] rounded-xl"
            />
          </div>
        </div>
      )}

    </>
  );
}
