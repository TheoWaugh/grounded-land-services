"use client";

import YouTubePlayer from "./YouTubePlayer";

interface Props {
  videoId: string;
  caption?: string;
}

// A single video that restarts when it ends. Loading, poster and muted autoplay live in YouTubePlayer.
export default function LoopingVideo({ videoId, caption }: Props) {
  return (
    <div className="my-6">
      <YouTubePlayer videoId={videoId} title={caption} loop />
      {caption && <p className="text-center text-xs text-[#6e6e73] mt-2">{caption}</p>}
    </div>
  );
}
