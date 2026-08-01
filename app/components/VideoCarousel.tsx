"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";

interface Props {
  videoIds: string[];
  captions?: string[];
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function VideoCarousel({ videoIds, captions }: Props) {
  const [current, setCurrent] = useState(0);
  const [apiReady, setApiReady] = useState(false);
  const playerRef = useRef<any>(null);
  const reactId = useId();
  const containerId = useRef(`yt-player-${reactId.replace(/:/g, "")}`);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % videoIds.length);
  }, [videoIds.length]);

  // Load the YouTube IFrame API once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }
    const existingScript = document.getElementById("youtube-iframe-api");
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prevCallback?.();
      setApiReady(true);
    };
  }, []);

  // Create the player once the API is ready
  useEffect(() => {
    if (!apiReady) return;

    playerRef.current = new window.YT.Player(containerId.current, {
      videoId: videoIds[0],
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 1,
        playsinline: 1,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        fs: 0,
      },
      events: {
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            advance();
          }
        },
      },
    });

    return () => {
      playerRef.current?.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady]);

  // When "current" changes (auto-advance or dot click), load the new video
  useEffect(() => {
    if (playerRef.current?.loadVideoById) {
      playerRef.current.loadVideoById(videoIds[current]);
    }
  }, [current, videoIds]);

  const caption = captions?.[current];

  return (
    <div className="my-6">
      <div className="relative w-full aspect-video mx-auto bg-black rounded-2xl overflow-hidden">
        <div id={containerId.current} className="w-full h-full" />
      </div>

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