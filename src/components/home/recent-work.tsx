"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import { ProjectDialog } from "@/components/project-dialog";

export function RecentWork({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const recent = projects.slice(0, 3);

  return (
    <>
      <section className="dash-panel p-5" aria-labelledby="recent-heading">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="dash-eyebrow">Recent work</p>
            <h2
              id="recent-heading"
              className="mt-1 font-pixel text-xl font-bold text-[#F4F4F5]"
            >
              RECENTLY SHIPPED
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 font-mono-code text-[10px] text-[#A1A1AA] transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            See all
            <ArrowRight className="size-3" />
          </Link>
        </div>

        <ul className="mt-3 divide-y divide-white/10">
          {recent.map((project) => (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => setSelected(project)}
                aria-label={`Inspect ${project.title}`}
                className="group flex w-full items-center gap-3 rounded-xl px-1 py-3 text-left transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span className="size-12 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#18181B]">
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    wrapperClassName="h-full w-full"
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate font-pixel text-sm font-bold text-[#F4F4F5] transition-colors group-hover:text-white">
                    {project.title}
                  </span>
                  <span className="mt-0.5 block truncate font-mono-code text-[10px] text-[#A1A1AA]">
                    {project.category} · {project.year}
                  </span>
                </span>

                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/10 text-[#A1A1AA] transition-colors group-hover:border-white/20 group-hover:text-white">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </button>
            </li>
          ))}
        </ul>
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
