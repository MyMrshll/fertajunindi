"use client";

import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import { ProjectDialog } from "@/components/project-dialog";

export function ProjectLibrary({ projects }: { projects: Project[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const [selected, setSelected] = useState<Project | null>(null);

  const scroll = (direction: -1 | 1) => {
    scroller.current?.scrollBy({ left: direction * 300, behavior: "smooth" });
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !scroller.current) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: scroller.current.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !scroller.current) return;
    const delta = event.clientX - drag.current.startX;
    if (Math.abs(delta) > 5) drag.current.moved = true;
    scroller.current.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  const openProject = (project: Project) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    setSelected(project);
  };

  return (
    <>
      <section className="dash-panel p-4 sm:p-5" aria-labelledby="library-heading">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="dash-eyebrow">PROJECT LIBRARY</p>
            <h2
              id="library-heading"
              className="mt-1 font-pixel text-xl font-bold text-[#F6E8C8] sm:text-2xl"
            >
              SELECTED WORKS
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-[#F6E8C8]/10 px-2.5 py-1 font-mono-code text-[10px] text-[#B9A9C5]/90">
              {projects.length} titles
            </span>
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll projects left"
              className="grid size-8 place-items-center rounded-full border border-[#F6E8C8]/10 text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll projects right"
              className="grid size-8 place-items-center rounded-full border border-[#F6E8C8]/10 text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onDragStart={(event) => event.preventDefault()}
          className="launcher-scroll mt-4 flex cursor-grab select-none gap-3 overflow-x-auto pb-1 active:cursor-grabbing"
        >
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => openProject(project)}
              aria-label={`Inspect ${project.title}`}
              className="group w-[208px] shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3] 2xl:w-[248px]"
            >
              <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-[#F6E8C8]/10 bg-[#191740]">
                <ImageWithSkeleton
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  wrapperClassName="h-full w-full"
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 rounded-full border border-[#F6E8C8]/15 bg-black/65 px-2 py-0.5 font-mono-code text-[10px] text-[#F6E8C8]/85">
                  #{String(project.id).padStart(2, "0")}
                </span>
                {project.year && (
                  <span className="absolute right-2 top-2 rounded-full border border-[#B95465]/35 bg-[#34182D]/80 px-2 py-0.5 font-mono-code text-[10px] text-[#FCC27D]">
                    {project.year}
                  </span>
                )}
              </div>
              <p className="mt-2.5 truncate font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#FCC27D]">
                {project.category}
              </p>
              <h3 className="mt-0.5 truncate font-pixel text-base font-bold text-[#F6E8C8] transition-colors group-hover:text-[#FCC27D]">
                {project.title}
              </h3>
            </button>
          ))}
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