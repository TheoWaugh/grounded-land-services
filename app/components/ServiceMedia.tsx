import Image from "next/image";
import { ServiceMediaItem } from "@/lib/services-content/types";

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
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video mx-auto bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${item.src}?autoplay=1&mute=1&loop=1&playlist=${item.src}&controls=1`}
                title={item.caption ?? "Video"}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {item.caption && (
            <figcaption className="px-3 py-2 text-xs text-[#6e6e73] bg-[#f9f9f9]">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}