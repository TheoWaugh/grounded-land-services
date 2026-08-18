interface VideoSchemaItem {
  videoId: string;
  name: string;
  description: string;
  uploadDate: string;
}

export default function VideoSchema({ videos }: { videos: VideoSchemaItem[] }) {
  if (videos.length === 0) return null;

  const jsonLd = videos.map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.name,
    description: v.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`,
    uploadDate: v.uploadDate,
    embedUrl: `https://www.youtube.com/embed/${v.videoId}`,
    publisher: { "@id": "https://www.groundedlandservices.com/#business" },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd) }}
    />
  );
}