"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Sparkles,
  Trophy,
  X,
  ZoomIn,
} from "lucide-react";
import { ACHIEVEMENTS, Achievement, getAchievementStats } from "@/lib/achievements";
import { PixelMedal } from "@/components/ui/pixel-medal";
import { CONTACT_EMAIL } from "@/lib/projects";

type CategoryFilter = "all" | "competition" | "certification" | "education" | "engineering";

export function AchievementsClient() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption?: string; title: string } | null>(null);
  const stats = getAchievementStats();

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <header className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#A1A1AA]">
            Awards &amp; Milestones
          </span>
          <span className="text-white/20">•</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono-code text-[10px] text-[#E4E4E7]">
            <PixelMedal variant="gold" className="size-3.5" />
            2x National Champion
          </span>
        </div>

        <h1 className="font-pixel text-3xl font-bold tracking-tight text-[#F4F4F5] pixel-text-shadow sm:text-4xl lg:text-5xl">
          ACHIEVEMENTS
        </h1>
        <p className="max-w-2xl font-mono-code text-sm leading-relaxed text-[#A1A1AA]">
          Verified national hackathon victories, government certifications, academic
          training, and systems engineering leadership.
        </p>
      </header>

      {/* Metric Cards Strip */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="dash-panel p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#A1A1AA]">
              National Golds
            </span>
            <PixelMedal variant="gold" className="size-6" />
          </div>
          <p className="mt-2 font-pixel text-2xl font-bold text-[#F4F4F5]">
            {stats.goldMedals} Wins
          </p>
          <p className="mt-0.5 font-mono-code text-[10px] text-[#A1A1AA]">INFEST XII &amp; KST PTKI</p>
        </div>

        <div className="dash-panel p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#A1A1AA]">
              Hackathon Podiums
            </span>
            <PixelMedal variant="bronze" className="size-6" />
          </div>
          <p className="mt-2 font-pixel text-2xl font-bold text-[#F4F4F5]">3 Podiums</p>
          <p className="mt-0.5 font-mono-code text-[10px] text-[#A1A1AA]">1st (2x) &amp; 3rd Place</p>
        </div>

        <div className="dash-panel p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#A1A1AA]">
              Certification
            </span>
            <CheckCircle2 className="size-5 text-[#10B981]" />
          </div>
          <p className="mt-2 font-pixel text-2xl font-bold text-[#F4F4F5]">Kominfo RI</p>
          <p className="mt-0.5 font-mono-code text-[10px] text-[#A1A1AA]">Junior Web Developer</p>
        </div>

        <div className="dash-panel p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#A1A1AA]">
              Engineering
            </span>
            <PixelMedal variant="trophy" className="size-6" />
          </div>
          <p className="mt-2 font-pixel text-2xl font-bold text-[#F4F4F5]">Tech Lead</p>
          <p className="mt-0.5 font-mono-code text-[10px] text-[#A1A1AA]">Nuanscape Architecture</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
        {[
          { key: "all", label: `All (${ACHIEVEMENTS.length})` },
          { key: "competition", label: `Hackathons & Competitions (${stats.competitions})` },
          { key: "certification", label: `Certifications (${stats.certifications})` },
          { key: "education", label: "Education & Academics" },
          { key: "engineering", label: "Systems & Leadership" },
        ].map(({ key, label }) => {
          const active = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key as CategoryFilter)}
              className={`rounded-full px-3.5 py-1.5 font-mono-code text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                active
                  ? "border border-white/20 bg-white/10 font-bold text-[#F4F4F5]"
                  : "border border-transparent text-[#A1A1AA] hover:border-white/10 hover:text-white"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Achievements List */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filteredAchievements.map((item) => (
          <article
            key={item.id}
            className={`dash-panel group flex flex-col justify-between p-5 transition-all duration-200 ${
              item.highlight
                ? "border-white/20 bg-[#141418] shadow-lg"
                : "border-white/10 bg-[#121215]"
            }`}
          >
            <div>
              {/* Header row: Pixel Medal, Badge & Year */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1.5 shadow-inner">
                    <PixelMedal
                      variant={item.medalVariant ?? (item.category === "education" ? "certified" : "trophy")}
                      className="size-8"
                      alt={item.title}
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {item.badge && (
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono-code text-[10px] font-semibold tracking-wider ${
                          item.rank === "1st Place"
                            ? "border border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981]"
                            : item.rank === "3rd Place"
                            ? "border border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#FBBF24]"
                            : "border border-white/15 bg-white/5 text-[#E4E4E7]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {item.category === "education" && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono-code text-[#A1A1AA]">
                        <GraduationCap className="size-3.5 shrink-0" />
                        Academic
                      </span>
                    )}
                  </div>
                </div>

                <span className="flex shrink-0 items-center gap-1 font-mono-code text-xs text-[#A1A1AA]">
                  <Calendar className="size-3" />
                  {item.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="mt-3.5 font-pixel text-lg font-bold leading-snug text-[#F4F4F5] transition-colors group-hover:text-white sm:text-xl">
                {item.title}
              </h2>
              <p className="mt-1 font-mono-code text-xs text-[#A1A1AA]">{item.subtitle}</p>

              {/* Photo Attachment if available */}
              {item.image && (
                <div className="mt-3.5 overflow-hidden rounded-xl border border-white/10 bg-[#09090B]">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedImage({ src: item.image!, caption: item.imageCaption, title: item.title })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedImage({ src: item.image!, caption: item.imageCaption, title: item.title });
                      }
                    }}
                    className="group/img relative aspect-[16/10] sm:aspect-[16/9] w-full cursor-zoom-in overflow-hidden bg-black/40 focus:outline-none"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover/img:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover/img:opacity-100 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3 py-1 font-mono-code text-xs text-white backdrop-blur-sm">
                        <ZoomIn className="size-3.5" />
                        Click to view full photo
                      </span>
                    </div>
                  </div>
                  {item.imageCaption && (
                    <p className="border-t border-white/5 bg-[#121215] px-3.5 py-2.5 font-mono-code text-[11px] leading-relaxed text-[#A1A1AA]">
                      {item.imageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* Description */}
              <p className="mt-3 font-mono-code text-xs leading-relaxed text-[#A1A1AA]/90">
                {item.description}
              </p>
            </div>

            {/* Footer: Tags & Links */}
            <div className="mt-4 pt-3 border-t border-white/[0.06]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono-code text-[10px] text-[#A1A1AA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono-code text-[11px] text-[#E4E4E7] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <span>{item.linkLabel ?? "Verification"}</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Action Strip */}
      <section className="dash-panel mt-8 flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
        <div>
          <p className="dash-eyebrow">Collaboration Channel</p>
          <h2 className="mt-0.5 font-pixel text-base font-bold text-[#F4F4F5]">
            Looking for a Hackathon Teammate or Systems Builder?
          </h2>
          <p className="mt-0.5 font-mono-code text-xs text-[#A1A1AA]">
            Available for select competitive hackathons, systems research, and high-stakes builds.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono-code text-xs text-[#F4F4F5] transition-colors hover:border-white/30 hover:text-white"
          >
            Explore Projects
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#27272A] px-5 py-2 font-mono-code text-xs font-bold text-white transition-colors hover:bg-[#3F3F46]"
          >
            <span>Start Conversation</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </section>

      {/* Full Photo Lightbox Dialog */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-[#121215] p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
              <span className="font-pixel text-sm font-bold text-[#F4F4F5]">
                {selectedImage.title}
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close dialog"
                className="rounded-lg p-1 text-[#A1A1AA] hover:bg-white/10 hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-auto rounded-lg bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="h-auto max-h-[70vh] w-full object-contain"
              />
            </div>

            {selectedImage.caption && (
              <p className="mt-2.5 font-mono-code text-xs leading-relaxed text-[#A1A1AA]">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
