"use client";

import { useState, useRef, useEffect, useId } from "react";

interface Props {
  videoId: string;
  caption?: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function LoopingVideo({ videoId, caption }: Props) {
  const [apiReady, setApiReady] = useState(false);
  const playerRef = useRef<any>(null);
  const reactId = useId();
  const containerId = useRef(`yt-loop-${reactId.replace(/:/g, "")}`);

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

  useEffect(() => {
    if (!apiReady) return;

    playerRef.current = new window.YT.Player(containerId.current, {
      videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 1,
        playsinline: 1,
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3,
        loop: 1,
        playlist: videoId,
      },
      events: {
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            playerRef.current?.playVideo?.();
          }
        },
      },
    });

    return () => {
      playerRef.current?.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady]);

  return (
    <div className="my-6">
      <div className="relative w-full aspect-video mx-auto bg-black rounded-2xl overflow-hidden">
        <div id={containerId.current} className="w-full h-full" />
      </div>
      {caption && <p className="text-center text-xs text-[#6e6e73] mt-2">{caption}</p>}
    </div>
  );
}