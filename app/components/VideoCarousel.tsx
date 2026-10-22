"use client";

import { useState, useCallback } from "react";
import YouTubePlayer from "./YouTubePlayer";

interface Props {
  videoIds: string[];
  captions?: string[];
}

// Plays videos one after another; each dot jumps to a video. Loading, poster and muted autoplay
// live in YouTubePlayer, which remounts (via key) for each video.
export default function VideoCarousel({ videoIds, captions }: Props) {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % videoIds.length);
  }, [videoIds.length]);

  const caption = captions?.[current];

  return (
    <div className="my-6">
      <YouTubePlayer key={videoIds[current]} videoId={videoIds[current]} title={caption} onEnded={advance} />

      {caption && <p className="text-center text-xs text-[#6e6e73] mt-2">{caption}</p>}

      {videoIds.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {videoIds.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-[#C4922A]" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Show video ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
