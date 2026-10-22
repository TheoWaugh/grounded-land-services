import Image from "next/image";
import { ServiceMediaItem } from "@/lib/services-content/types";
import YouTubePlayer from "./YouTubePlayer";

export default function ServiceMedia({ items }: { items: ServiceMediaItem[] }) {
  const gridCols = items.length > 1 ? "sm:grid-cols-2" : "grid-cols-1";

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-4 my-6`}>
      {items.map((item, i) => (
        <figure key={i} className="rounded-2xl overflow-hidden border border-gray-100">
          {item.type === "image" ? (
            <div className="relative w-full aspect-video">
              <Image
                src={item.src}
                alt={item.alt ?? ""}
                fill
                className="object-cover"
                style={{ objectPosition: item.position ?? "center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {item.caption && (
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/70 text-white text-xs font-semibold rounded-full">
                  {item.caption}
                </span>
              )}
            </div>
          ) : (
            <YouTubePlayer videoId={item.src} title={item.caption} loop />
          )}
          {item.caption && item.type !== "image" && (
            <figcaption className="px-3 py-2 text-xs text-[#6e6e73] bg-[#f9f9f9]">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}