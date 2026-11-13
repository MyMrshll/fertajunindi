"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/projects";
import { GithubIcon } from "@/components/icons";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProjectsGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="dash-card group relative overflow-hidden rounded-2xl"
          >
            <button
              type="button"
              onClick={() => setSelected(project)}
              aria-label={`Inspect ${project.title}`}
              className="absolute inset-0 z-10 rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />

            <div className="relative aspect-[16/10] overflow-hidden">
              <ImageWithSkeleton
                src={project.image}
                alt={project.title}
                loading="lazy"
                wrapperClassName="h-full w-full"
                className="transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/85 via-[#07090e]/10 to-transparent" />
              <span className="absolute top-3 left-3 font-mono-code text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-black/70 border border-white/15 text-[#F5EEDB]">
                #{String(index + 1).padStart(2, "0")}
              </span>
              {project.year && (
                <span className="absolute top-3 right-3 font-mono-code text-[11px] px-2.5 py-0.5 rounded-full bg-amber-950/85 border border-amber-400/35 text-amber-200">
                  {project.year}
                </span>
              )}
            </div>

            <div className="p-4 sm:p-5">
              {project.category && (
                <p className="font-mono-code text-[11px] uppercase tracking-[0.14em] text-amber-400">
                  {project.category}
                </p>
              )}
              <h2 className="font-pixel text-lg sm:text-xl font-bold text-[#F5EEDB] mt-1 transition-colors group-hover:text-amber-200">
                {project.title}
              </h2>
              {project.description && (
                <p className="font-mono-code text-xs sm:text-[13px] leading-relaxed text-[#F5EEDB]/60 mt-2 line-clamp-2">
                  {project.description}
                </p>
              )}

              {project.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-code text-[10px] px-2 py-0.5 rounded-full border border-white/10 bg-black/20 text-[#F5EEDB]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <span className="mt-4 inline-flex items-center gap-1 font-mono-code text-[11px] uppercase tracking-[0.14em] text-amber-300/90">
                Inspect
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </article>
        ))}
      </div>

      <Dialog
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="sm:max-w-2xl bg-[#0b0f16] text-[#F5EEDB] border border-white/15 p-6">
          {selected && (
            <>
              <DialogHeader>
                <div className="font-mono-code text-[11px] uppercase tracking-[0.14em] text-amber-400">
                  {selected.category} · {selected.year}
                </div>
                <DialogTitle className="font-pixel text-2xl sm:text-3xl font-bold text-[#F5EEDB]">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="font-mono-code text-sm text-[#F5EEDB]/65 leading-relaxed">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>

              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <ImageWithSkeleton
                  src={selected.image}
                  alt={selected.title}
                  wrapperClassName="h-full w-full"
                />
              </div>

              {selected.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-code text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[#F5EEDB]/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {selected.link && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 font-mono-code text-xs font-bold text-[#1a1206] transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  >
                    <GithubIcon className="size-4" />
                    Repository
                  </a>
                )}
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-mono-code text-xs text-[#F5EEDB]/80 transition-colors hover:border-amber-400/60 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    Live Demo
                    <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
