"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { videoPosters, DEFAULT_VIDEO_POSTER } from "@/data/video-metadata";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

// Loads the YouTube IFrame API once, the first time any player on the page needs it.
let apiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        resolve();
      };
      const tag = document.createElement("script");
      tag.id = "youtube-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    });
  }
  return apiPromise;
}

interface Props {
  videoId: string;
  title?: string;
  /** Restart when the video ends (LoopingVideo). */
  loop?: boolean;
  /** Called when the video ends (VideoCarousel advances). */
  onEnded?: () => void;
}

/**
 * Lazy YouTube player: shows a finished-result poster until the video scrolls near the viewport,
 * then loads the player. Autoplay only ever happens muted, and not at all for visitors who prefer
 * reduced motion — they get the poster with a play button instead.
 */
export default function YouTubePlayer({ videoId, title = "Project video", loop = false, onEnded }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const onEndedRef = useRef(onEnded);
  useEffect(() => {
    onEndedRef.current = onEnded;
  }, [onEnded]);
  const containerId = `yt-${useId().replace(/:/g, "")}`;
  const [mode, setMode] = useState<"poster" | "autoplay" | "clicked">("poster");
  const [ready, setReady] = useState(false);
  const poster = videoPosters[videoId] ?? DEFAULT_VIDEO_POSTER;

  // Start loading when the video is about to scroll into view (muted autoplay), unless reduced motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMode((m) => (m === "poster" ? "autoplay" : m));
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mode === "poster") return;
    let cancelled = false;
    loadYouTubeApi().then(() => {
      if (cancelled) return;
      playerRef.current = new window.YT.Player(containerId, {
        videoId,
        playerVars: {
          autoplay: 1,
          // Autoplay without a click is always muted; a visitor's click may play with sound.
          mute: mode === "autoplay" ? 1 : 0,
          controls: 1,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: () => setReady(true),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onStateChange: (event: any) => {
            if (event.data !== window.YT.PlayerState.ENDED) return;
            if (loop) playerRef.current?.playVideo?.();
            onEndedRef.current?.();
          },
        },
      });
    });
    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
    // Only (re)create the player when it's first activated; videoId changes remount via `key`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode === "poster"]);

  return (
    <div ref={wrapperRef} className="relative w-full aspect-video mx-auto bg-black rounded-2xl overflow-hidden">
      {mode !== "poster" && <div id={containerId} className="absolute inset-0 w-full h-full" />}
      {!ready && (
        <button
          type="button"
          onClick={() => setMode("clicked")}
          className="group absolute inset-0 w-full h-full"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={poster.src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            style={{ objectPosition: poster.position ?? "center" }}
          />
          <span className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#C4922A] text-black flex items-center justify-center shadow-lg">
            <svg className="w-7 h-7 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
