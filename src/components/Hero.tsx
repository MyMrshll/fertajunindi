"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  WorkspaceHotspot,
  LAPTOP_COORDS,
  MUG_COORDS,
} from "@/components/ui/workspace-hotspot";
import { GithubIcon, InstagramIcon } from "@/components/icons";
import { StudioCat } from "@/components/studio-cat";
import { CONTACT_EMAIL, GITHUB_URL, INSTAGRAM_URL } from "@/lib/projects";
import { cn } from "@/lib/utils";
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  Eye,
  EyeOff,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function Hero() {
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [zenMode, setZenMode] = useState<boolean>(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleZenMode = () => {
    setZenMode((prev) => !prev);
  };

  const mailto = `mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`;

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-background text-foreground select-none">
      {/* 1. Floating Pill Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 pt-4 sm:pt-5 px-4 sm:px-8 flex justify-center pointer-events-none transition-all duration-500",
          zenMode ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        )}
      >
        <nav
          className={cn(
            "navbar-pill w-[calc(100%-2rem)] max-w-sm sm:w-auto sm:max-w-none px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full inline-flex items-center justify-between sm:justify-center gap-2 sm:gap-6 backdrop-blur-md",
            zenMode ? "pointer-events-none" : "pointer-events-auto"
          )}
        >
          <Link
            href="/"
            className="font-pixel text-base sm:text-lg font-bold text-foreground tracking-tight hover:scale-110 transition-transform px-2 py-1"
          >
            FJ
          </Link>

          <div className="flex items-center gap-0.5 sm:gap-5 text-[11px] sm:text-base font-medium">
            <Link
              href="/"
              aria-current="page"
              className="relative px-1 sm:px-0 py-2 sm:py-1.5 text-foreground font-semibold whitespace-nowrap"
            >
              Home
              <span className="absolute left-1 sm:left-0 right-1 sm:right-0 bottom-1 sm:bottom-0 h-[2px] bg-foreground rounded-full" />
            </Link>
            <Link
              href="/about"
              className="px-1 sm:px-0 py-2 sm:py-1.5 text-foreground/65 hover:text-foreground transition-colors whitespace-nowrap"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-1 sm:px-0 py-2 sm:py-1.5 text-foreground/65 hover:text-foreground transition-colors whitespace-nowrap"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-1 sm:px-0 py-2 sm:py-1.5 text-foreground/65 hover:text-foreground transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </div>

          <div className="hidden sm:block h-4 w-px bg-white/20" />

          <div className="hidden sm:flex items-center gap-3 text-foreground/85">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white hover:scale-110 transition-transform"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white hover:scale-110 transition-transform"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* 2. CTA Stage */}
      <section
        ref={heroSectionRef}
        className="relative w-full h-full shrink-0 overflow-hidden flex flex-col justify-between"
      >
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="/poster.jpg"
            className="w-full h-full object-cover object-center pixel-video transition-all duration-700"
          >
            <source src="/night-coding-room-4k-vibrant.mp4" type="video/mp4" />
            <source src="/night-coding-room-vibrant.mp4" type="video/mp4" />
            <source src="/night-coding-room-clean.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Interactive workspace hotspots: laptop = projects, mug = contact */}
        <WorkspaceHotspot
          containerRef={heroSectionRef}
          coords={LAPTOP_COORDS}
          label="PROJECTS"
          onClick={() => router.push("/projects")}
        />

        <WorkspaceHotspot
          containerRef={heroSectionRef}
          coords={MUG_COORDS}
          label="CONTACT"
          onClick={() => {
            window.location.href = mailto;
          }}
        />

        <div className="pt-24 pointer-events-none" />

        <div
          className={cn(
            "relative z-10 w-full page-content pb-6 flex flex-col justify-end transition-all duration-700",
            zenMode
              ? "opacity-0 translate-y-8 pointer-events-none"
              : "opacity-100 translate-y-0"
          )}
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 sm:gap-8 w-full">
            <div className="flex flex-col justify-end max-w-full">
              <h1 className="font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-foreground tracking-tight leading-none pixel-text-shadow">
                FERTA JUNINDI
              </h1>

              <div className="font-pixel text-xs sm:text-base md:text-lg text-foreground/90 tracking-[0.38em] sm:tracking-[0.52em] mt-1 sm:mt-2 pl-0.5 pixel-text-shadow">
                STUDIO
              </div>
            </div>

            <div className="flex flex-col items-start pb-1">
              <div className="flex flex-col gap-3.5 sm:gap-4">
                <p className="font-mono-code text-xs sm:text-sm md:text-base text-foreground leading-snug subtle-shadow max-w-md">
                  Systems engineer &amp; fullstack builder.
                  <br />
                  Designing compilers, distributed tools,
                  <br />
                  and practical software that lasts.
                </p>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-3 sm:gap-4 pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full bg-primary hover:bg-[#FFF8EB] text-primary-foreground font-mono-code font-bold text-xs sm:text-sm shadow-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>View Projects</span>
                    <span className="size-6 sm:size-7 rounded-full bg-primary-foreground text-primary flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="size-3.5 sm:size-4" />
                    </span>
                  </Link>

                  <a
                    href={mailto}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/25 text-foreground/85 hover:text-amber-200 hover:border-amber-400/60 font-mono-code text-xs sm:text-sm transition-colors duration-200"
                  >
                    <Mail className="size-3.5 sm:size-4" />
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-3 border-t border-white/15 flex items-center justify-end text-foreground/75">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                title={isPlaying ? "Pause" : "Play"}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-foreground"
              >
                {isPlaying ? (
                  <Pause className="size-4 text-foreground" />
                ) : (
                  <Play className="size-4 text-amber-400" />
                )}
              </button>

              <span className="text-white/20">|</span>

              <button
                type="button"
                onClick={toggleMute}
                title={isMuted ? "Unmute sound" : "Mute sound"}
                aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                className="p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-foreground"
              >
                {isMuted ? (
                  <VolumeX className="size-4 text-foreground/70" />
                ) : (
                  <Volume2 className="size-4 text-amber-400 animate-pulse" />
                )}
              </button>

              <span className="text-white/20">|</span>

              <button
                type="button"
                onClick={toggleZenMode}
                title="Zen Mode: Hide UI to view clean background artwork"
                aria-label="Zen Mode: Hide UI"
                className="p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors cursor-pointer text-foreground"
              >
                <Eye className="size-4 text-foreground" />
              </button>
            </div>
          </div>

          <StudioCat zenMode={zenMode} />
        </div>
      </section>

      {/* 3. Zen Mode Restore Overlay */}
      {zenMode && (
        <div
          onClick={toggleZenMode}
          className="absolute inset-0 z-50 cursor-pointer flex items-end justify-center pb-12 bg-transparent"
        >
          <div className="px-5 py-2.5 rounded-full bg-[#121024]/85 border border-white/20 text-xs font-mono-code text-foreground backdrop-blur-md shadow-2xl flex items-center gap-2.5 hover:scale-105 transition-transform animate-pulse">
            <EyeOff className="size-4 text-amber-300" />
            <span>ZEN VIEW ACTIVE — CLICK ANYWHERE TO RESTORE</span>
          </div>
        </div>
      )}
    </div>
  );
}
