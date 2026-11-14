"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { StudioCat } from "@/components/studio-cat";
import { CONTACT_EMAIL } from "@/lib/projects";
import {
  ArrowRight,
  Mail,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

const mailto = `mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduced) {
      videoRef.current?.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !isMuted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="launcher-hero relative isolate overflow-hidden rounded-3xl border border-white/10"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          poster="/poster.jpg"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="pixel-video h-full w-full object-cover object-center opacity-40"
        >
          <source src="/night-coding-room-4k-vibrant.mp4" type="video/mp4" />
          <source src="/night-coding-room-vibrant.mp4" type="video/mp4" />
          <source src="/night-coding-room-clean.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#09090B]/85" />
      </div>

      <div className="relative z-10 flex min-h-[360px] flex-col justify-between gap-8 p-5 sm:min-h-[380px] sm:p-7 lg:min-h-[400px] lg:p-8">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#E4E4E7] backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-[#10B981]" />
            Open for select work
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause background video" : "Play background video"}
              className="grid size-9 place-items-center rounded-full border border-white/15 bg-black/40 text-[#F4F4F5] backdrop-blur-md transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:size-10"
            >
              {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute background video" : "Mute background video"}
              className="grid size-9 place-items-center rounded-full border border-white/15 bg-black/40 text-[#F4F4F5] backdrop-blur-md transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:size-10"
            >
              {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 max-w-2xl">
            <p className="dash-eyebrow">Systems engineer &amp; fullstack builder</p>
            <h2
              id="hero-heading"
              className="mt-2 font-pixel text-[clamp(2.35rem,7vw,4.8rem)] font-bold leading-[0.95] tracking-tight text-[#F4F4F5] pixel-text-shadow"
            >
              FERTA JUNINDI
            </h2>
            <p className="mt-1.5 font-pixel text-[10px] tracking-[0.52em] text-[#A1A1AA] sm:text-xs">
              STUDIO
            </p>

            <p className="mt-4 max-w-lg font-mono-code text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
              Designing compilers, distributed tools, and practical software
              that lasts.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:mt-6">
              <Link
                href="/projects"
                className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-white/20 bg-[#27272A] py-1.5 pl-5 pr-1.5 font-mono-code text-xs font-bold text-white transition-all duration-200 hover:bg-[#3F3F46] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:text-sm"
              >
                <span>View Projects</span>
                <span className="grid size-7 place-items-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>

              <a
                href={mailto}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 font-mono-code text-xs text-[#F4F4F5] backdrop-blur-md transition-colors duration-200 hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:text-sm"
              >
                <Mail className="size-3.5" />
                Get in Touch
              </a>
            </div>
          </div>

          <div className="w-full shrink-0 self-start sm:w-auto sm:self-end">
            <StudioCat anchorClassName="relative" />
          </div>
        </div>
      </div>
    </section>
  );
}
