"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import { ProjectDialog } from "@/components/project-dialog";

export function Spotlight({ project }: { project: Project }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section
        aria-labelledby="spotlight-heading"
        className="relative isolate min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-[#121215] shadow-lg"
      >
        <ImageWithSkeleton
          src={project.image}
          alt={project.title}
          wrapperClassName="absolute inset-0"
          className="scale-[1.05] opacity-20 blur-sm"
          style={{ objectPosition: "right center" }}
        />
        <div className="absolute inset-0 bg-[#09090B]/90" />

        <div className="relative z-10 flex min-h-[300px] flex-col justify-between p-5 sm:p-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#E4E4E7] backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-[#10B981]" />
            Featured build
          </span>

          <div className="max-w-md">
            <p className="font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#A1A1AA]">
              {project.category} · {project.year}
            </p>
            <h2
              id="spotlight-heading"
              className="mt-1 font-pixel text-2xl font-bold leading-tight text-[#F4F4F5] pixel-text-shadow sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-2 font-mono-code text-[11px] leading-relaxed text-[#A1A1AA]">
              {project.description}
            </p>
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-[#27272A] px-4 py-2 font-mono-code text-xs font-bold text-white transition-colors hover:bg-[#3F3F46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Inspect project
              <ArrowUpRight className="size-4" />
            </button>
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
