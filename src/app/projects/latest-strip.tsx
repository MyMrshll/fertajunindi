import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import type { DashboardStats } from "@/lib/dashboard-stats";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";

export function LatestStrip({
  project,
  stats,
}: {
  project: Project;
  stats: DashboardStats;
}) {
  const coverage = Math.round((stats.archiveCount / stats.publicRepos) * 100);

  return (
    <section className="dash-panel flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
      <div className="flex min-w-0 items-center gap-3 sm:w-[240px]">
        <div className="size-12 shrink-0 overflow-hidden rounded-lg border border-[#F6E8C8]/10">
          <ImageWithSkeleton
            src={project.image}
            alt={project.title}
            wrapperClassName="h-full w-full"
          />
        </div>
        <div className="min-w-0">
          <p className="dash-eyebrow">LATEST ADDITION</p>
          <p className="mt-0.5 truncate font-pixel text-sm font-bold text-[#F6E8C8]">
            {project.title}
          </p>
          <p className="truncate font-mono-code text-[10px] text-[#B9A9C5]/80">
            {project.category} · {project.year}
          </p>
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3 font-mono-code text-[10px] text-[#B9A9C5]/85">
          <span>ARCHIVE COVERAGE</span>
          <span className="text-[#B9A9C5]">
            {stats.archiveCount} / {stats.publicRepos} repos
          </span>
        </div>
        <div
          className="dash-readout mt-1.5 h-1.5 w-full overflow-hidden rounded-full border border-[#F6E8C8]/10 bg-[#F6E8C8]/10"
          role="progressbar"
          aria-valuenow={coverage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Archive coverage"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#B95465] to-[#FCC27D]"
            style={{ width: `${coverage}%` }}
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#A94A5A] px-3.5 py-2 font-mono-code text-[11px] font-bold text-[#F6E8C8] transition-colors hover:bg-[#983E4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
          >
            Live demo
            <ArrowUpRight className="size-3.5" />
          </a>
        )}
        <a
          href="#archive"
          className="inline-flex items-center gap-1.5 rounded-full border border-[#F6E8C8]/15 px-3.5 py-2 font-mono-code text-[11px] text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
        >
          Archive
        </a>
      </div>
    </section>
  );
}