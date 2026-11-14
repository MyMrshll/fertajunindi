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
        className="relative isolate min-h-[300px] overflow-hidden rounded-3xl border border-[#F6E8C8]/15 bg-[#191740] shadow-[0_18px_44px_rgba(1,1,26,0.42)]"
      >
        <ImageWithSkeleton
          src={project.image}
          alt={project.title}
          wrapperClassName="absolute inset-0"
          className="scale-[1.05] opacity-30 blur-sm"
          style={{ objectPosition: "right center" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(14,9,38,0.98)_0%,rgba(14,9,38,0.86)_42%,rgba(14,9,38,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,9,38,0.62)_0%,transparent_70%)]" />

        <div className="relative z-10 flex min-h-[300px] flex-col justify-between p-5 sm:p-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B95465]/35 bg-[#0E0926]/55 px-3 py-1 font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#FCC27D] backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-[#FCC27D]" />
            Featured build
          </span>

          <div className="max-w-md">
            <p className="font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#B9A9C5]">
              {project.category} · {project.year}
            </p>
            <h2
              id="spotlight-heading"
              className="mt-1 font-pixel text-2xl font-bold leading-tight text-[#F6E8C8] pixel-text-shadow sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-2 font-mono-code text-[11px] leading-relaxed text-[#B9A9C5]">
              {project.description}
            </p>
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#A94A5A] px-4 py-2 font-mono-code text-xs font-bold text-[#F6E8C8] transition-colors hover:bg-[#983E4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
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
