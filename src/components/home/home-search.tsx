"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectDialog } from "@/components/project-dialog";

export function HomeSearch({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return projects.slice(0, 4);

    return projects
      .filter((project) =>
        [project.title, project.category, ...(project.tags ?? [])]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(needle))
      )
      .slice(0, 5);
  }, [projects, query]);

  return (
    <div
      className="relative w-full sm:w-72"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
        }
      }}
    >
      <label htmlFor="home-project-search" className="sr-only">
        Search projects
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#A1A1AA]"
      />
      <input
        id="home-project-search"
        type="search"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            event.currentTarget.blur();
          }
        }}
        placeholder="Search projects…"
        aria-expanded={open}
        aria-controls="home-project-search-results"
        autoComplete="off"
        className="dash-readout h-10 w-full rounded-full pl-10 pr-4 font-mono-code text-xs text-[#F4F4F5] placeholder:text-[#A1A1AA]/60 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
      />

      <div
        id="home-project-search-results"
        hidden={!open}
        className="absolute right-0 top-[calc(100%+8px)] z-40 w-full min-w-60 overflow-hidden rounded-2xl border border-white/10 bg-[#121215] p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] sm:w-80"
      >
        <p className="px-3 py-2 font-mono-code text-[9px] uppercase tracking-[0.18em] text-[#A1A1AA]">
          {query ? `${results.length} matches` : "Selected works"}
        </p>

        {results.length === 0 ? (
          <p className="px-3 pb-3 pt-1 font-mono-code text-xs text-[#A1A1AA]">
            No project matches “{query}”.
          </p>
        ) : (
          <ul className="max-h-72 overflow-y-auto">
            {results.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(project);
                    setOpen(false);
                    setQuery("");
                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <span className="min-w-0">
                    <span className="block truncate font-pixel text-sm font-bold text-[#F4F4F5]">
                      {project.title}
                    </span>
                    <span className="mt-0.5 block truncate font-mono-code text-[10px] text-[#A1A1AA]">
                      {project.category} · {project.year}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono-code text-[10px] text-[#A1A1AA]">
                    #{String(project.id).padStart(2, "0")}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ProjectDialog
        project={selected}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelected(null);
        }}
      />
    </div>
  );
}
