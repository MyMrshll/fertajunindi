"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";
import { ACHIEVEMENTS, Achievement, getAchievementStats } from "@/lib/achievements";
import { CONTACT_EMAIL } from "@/lib/projects";

type CategoryFilter = "all" | "competition" | "certification" | "education" | "engineering";

export function AchievementsClient() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
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
            <Trophy className="size-3 text-[#10B981]" />
            National Champion 2026
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
              Hackathon Gold
            </span>
            <Medal className="size-4 text-[#10B981]" />
          </div>
          <p className="mt-2 font-pixel text-2xl font-bold text-[#F4F4F5]">1st Place</p>
          <p className="mt-0.5 font-mono-code text-[10px] text-[#A1A1AA]">INFEST XII National</p>
        </div>

        <div className="dash-panel p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#A1A1AA]">
              Hackathons
            </span>
            <Trophy className="size-4 text-[#E4E4E7]" />
          </div>
          <p className="mt-2 font-pixel text-2xl font-bold text-[#F4F4F5]">3 Events</p>
          <p className="mt-0.5 font-mono-code text-[10px] text-[#A1A1AA]">USK, ITB, &amp; UTU</p>
        </div>

        <div className="dash-panel p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#A1A1AA]">
              Certification
            </span>
            <CheckCircle2 className="size-4 text-[#10B981]" />
          </div>
          <p className="mt-2 font-pixel text-2xl font-bold text-[#F4F4F5]">Kominfo RI</p>
          <p className="mt-0.5 font-mono-code text-[10px] text-[#A1A1AA]">Digital Talent Scholar</p>
        </div>

        <div className="dash-panel p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#A1A1AA]">
              Engineering
            </span>
            <Sparkles className="size-4 text-[#E4E4E7]" />
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
              {/* Header row: badge and year */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {item.badge && (
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono-code text-[10px] font-semibold tracking-wider ${
                        item.rank === "1st Place"
                          ? "border border-[#10B981]/40 bg-[#10B981]/10 text-[#10B981]"
                          : "border border-white/15 bg-white/5 text-[#E4E4E7]"
                      }`}
                    >
                      {item.rank === "1st Place" && <Medal className="size-3 shrink-0" />}
                      {item.badge}
                    </span>
                  )}
                  {item.category === "education" && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono-code text-[#A1A1AA]">
                      <GraduationCap className="size-3 shrink-0" />
                      Academic
                    </span>
                  )}
                </div>

                <span className="flex items-center gap-1 font-mono-code text-xs text-[#A1A1AA]">
                  <Calendar className="size-3" />
                  {item.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="mt-3 font-pixel text-lg font-bold leading-snug text-[#F4F4F5] transition-colors group-hover:text-white sm:text-xl">
                {item.title}
              </h2>
              <p className="mt-1 font-mono-code text-xs text-[#A1A1AA]">{item.subtitle}</p>

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
    </div>
  );
}
