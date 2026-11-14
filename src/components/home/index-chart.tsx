import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DashboardStats } from "@/lib/dashboard-stats";

export function IndexChart({ stats }: { stats: DashboardStats }) {
  const segments = [
    {
      label: "Selected works",
      value: stats.selectedWorks,
      color: "#E4E4E7",
    },
    {
      label: "Collaborations",
      value: stats.collaborations,
      color: "#A1A1AA",
    },
    {
      label: "Archive repos",
      value: stats.archiveCount,
      color: "#52525B",
    },
  ];
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);
  const circumference = 2 * Math.PI * 42;
  let offset = 0;

  return (
    <section className="dash-panel p-5" aria-labelledby="index-heading">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="dash-eyebrow">Index mix</p>
          <h2
            id="index-heading"
            className="mt-1 font-pixel text-xl font-bold text-[#F4F4F5]"
          >
            WHAT IS INSIDE
          </h2>
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono-code text-[10px] text-[#A1A1AA]">
          {total} entries
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4 sm:gap-6">
        <div className="relative grid size-32 shrink-0 place-items-center sm:size-36">
          <svg
            viewBox="0 0 100 100"
            className="size-32 -rotate-90 sm:size-36"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="10"
            />
            {segments.map((segment) => {
              const length = (segment.value / total) * circumference;
              const circle = (
                <circle
                  key={segment.label}
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="10"
                  strokeDasharray={`${length} ${circumference - length}`}
                  strokeDashoffset={-offset}
                />
              );
              offset += length;
              return circle;
            })}
          </svg>
          <div className="absolute text-center">
            <p className="font-pixel text-2xl font-bold text-[#F4F4F5]">
              {total}
            </p>
            <p className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#A1A1AA]">
              indexed
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-2.5">
          {segments.map((segment) => (
            <div key={segment.label} className="flex items-center gap-2">
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ backgroundColor: segment.color }}
              />
              <span className="min-w-0 flex-1 truncate font-mono-code text-[10px] text-[#A1A1AA]">
                {segment.label}
              </span>
              <span className="font-mono-code text-[10px] text-[#F4F4F5]">
                {segment.value}
              </span>
              <span className="w-8 text-right font-mono-code text-[9px] text-[#A1A1AA]/75">
                {Math.round((segment.value / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/projects"
        className="mt-4 inline-flex items-center gap-1.5 rounded font-mono-code text-[11px] text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        Open the project launcher
        <ArrowRight className="size-3.5" />
      </Link>
    </section>
  );
}
