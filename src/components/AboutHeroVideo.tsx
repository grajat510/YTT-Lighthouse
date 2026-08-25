"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function SpeakerMutedIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function SpeakerOnIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

export default function AboutHeroVideo({
  children,
}: {
  children: React.ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = () => {
      video.play().catch(() => {});
    };
    play();
    const t1 = window.setTimeout(play, 500);
    const t2 = window.setTimeout(play, 1500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full cursor-pointer object-cover"
        poster="/teacher-krishnaji-v2.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Video of Krishnaji, founder of Light House. Click to play or pause."
        onClick={togglePlay}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      >
        <source src="/about-krishnaji.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

      {paused && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/45 text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-16">
        {children}
      </div>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        className="absolute right-4 bottom-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/60 text-white transition-colors hover:bg-black/80 md:right-6 md:bottom-6"
      >
        {muted ? <SpeakerMutedIcon /> : <SpeakerOnIcon />}
      </button>
    </div>
  );
}
