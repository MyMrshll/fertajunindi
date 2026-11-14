"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { GithubIcon } from "@/components/icons";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import { ProjectDialog } from "@/components/project-dialog";

export function FeaturedProject({ project }: { project: Project }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        aria-labelledby="featured-project-heading"
        className="relative isolate min-h-[320px] overflow-hidden rounded-3xl border border-[#F6E8C8]/15 bg-[#191740] shadow-[0_18px_44px_rgba(1,1,26,0.42)]"
      >
        <ImageWithSkeleton
          src={project.image}
          alt={project.title}
          wrapperClassName="absolute inset-0"
          className="scale-[1.05] opacity-30 blur-sm"
          style={{ objectPosition: "right center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(14,9,38,0.98)_0%,rgba(14,9,38,0.86)_45%,rgba(14,9,38,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,9,38,0.72)_0%,transparent_70%)]" />

        <div className="relative z-10 flex min-h-[320px] flex-col justify-between gap-6 p-5 sm:p-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B95465]/35 bg-[#0E0926]/55 px-3 py-1 font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#FCC27D] backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-[#FCC27D]" />
            Featured project
          </span>

          <div className="max-w-2xl">
            <p className="font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#B9A9C5]">
              {project.category} · {project.year}
            </p>
            <h2
              id="featured-project-heading"
              className="mt-1 font-pixel text-3xl font-bold leading-tight text-[#F6E8C8] pixel-text-shadow sm:text-4xl lg:text-5xl"
            >
              {project.title}
            </h2>
            <p className="mt-2 max-w-xl font-mono-code text-xs leading-relaxed text-[#B9A9C5] sm:text-sm">
              {project.description}
            </p>

            {project.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#F6E8C8]/10 bg-[#0E0926]/45 px-2.5 py-0.5 font-mono-code text-[10px] text-[#B9A9C5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#A94A5A] px-5 py-2.5 font-mono-code text-xs font-bold text-[#F6E8C8] transition-colors hover:bg-[#983E4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3] sm:w-auto"
              >
                Inspect project
                <ArrowUpRight className="size-4" />
              </button>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#F6E8C8]/15 bg-[#0E0926]/35 px-5 py-2.5 font-mono-code text-xs text-[#B9A9C5] backdrop-blur-md transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3] sm:w-auto"
                >
                  <GithubIcon className="size-4" />
                  Repository
                </a>
              )}
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
