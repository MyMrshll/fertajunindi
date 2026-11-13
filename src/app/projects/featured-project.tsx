"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { GithubIcon } from "@/components/icons";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import { ProjectDialog } from "./project-dialog";

export function FeaturedProject({ project }: { project: Project }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section className="launcher-hero relative overflow-hidden rounded-3xl border border-amber-400/15">
        <div className="relative z-10 grid gap-5 p-5 sm:p-7 md:grid-cols-[1.15fr_0.85fr] md:items-center lg:p-8">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.08] px-3 py-1 font-mono-code text-[10px] uppercase tracking-[0.16em] text-amber-300">
              <span className="size-1.5 rounded-full bg-amber-400" />
              Featured project
            </span>

            <p className="mt-4 font-mono-code text-[11px] uppercase tracking-[0.18em] text-[#F5EEDB]/45">
              {project.category} · {project.year}
            </p>
            <h2 className="mt-1.5 max-w-xl font-pixel text-3xl font-bold leading-tight text-[#F5EEDB] pixel-text-shadow sm:text-4xl lg:text-5xl">
              {project.title}
            </h2>
            <p className="mt-3 max-w-xl font-mono-code text-xs leading-relaxed text-[#F5EEDB]/62 sm:text-sm">
              {project.description}
            </p>

            {project.tags && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/25 px-2.5 py-0.5 font-mono-code text-[10px] text-[#F5EEDB]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 font-mono-code text-xs font-bold text-[#1a1206] transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:w-auto"
              >
                Inspect project
                <ArrowUpRight className="size-4" />
              </button>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono-code text-xs text-[#F5EEDB]/75 transition-colors hover:border-amber-400/50 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 sm:w-auto"
                >
                  <GithubIcon className="size-4" />
                  Repository
                </a>
              )}
            </div>
          </div>

          <div className="relative mt-6 md:mt-0 md:min-h-[280px]">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.55)] md:absolute md:left-auto md:right-2 md:top-1/2 md:w-[86%] md:-translate-y-1/2 md:rotate-[-3deg] xl:right-4">
              <ImageWithSkeleton
                src={project.image}
                alt={project.title}
                wrapperClassName="aspect-[2/1] w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <span className="absolute bottom-2 left-2 z-10 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 font-mono-code text-[10px] text-[#F5EEDB]/75 backdrop-blur-sm">
                #{String(project.id).padStart(2, "0")} / {project.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      <ProjectDialog
        project={selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </>
  );
}