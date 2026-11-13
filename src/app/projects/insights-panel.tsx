import Link from "next/link";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import type { Collaboration } from "@/lib/projects";
import { CONTACT_EMAIL, PROFILE } from "@/lib/projects";
import type { DashboardStats } from "@/lib/dashboard-stats";

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function InsightsPanel({
  stats,
  collaborations,
}: {
  stats: DashboardStats;
  collaborations: Collaboration[];
}) {
  const total = stats.selectedWorks + stats.collaborations + stats.publicRepos;
  const circumference = 2 * Math.PI * 42;
  const segments = [
    { label: "Selected works", value: stats.selectedWorks, color: "#fbbf24" },
    { label: "Collaborations", value: stats.collaborations, color: "#d97706" },
    { label: "Public repos", value: stats.publicRepos, color: "#f5eedb" },
  ];

  let offset = 0;

  return (
    <aside className="flex min-w-0 flex-col gap-4 xl:sticky xl:top-4 xl:self-start">
      <section className="dash-panel p-5" aria-labelledby="collaborators-heading">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="dash-eyebrow">COLLABORATORS</p>
            <h2
              id="collaborators-heading"
              className="mt-1 font-pixel text-xl font-bold text-[#F5EEDB]"
            >
              INVITED WORK
            </h2>
          </div>
          <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono-code text-[10px] text-[#F5EEDB]/50">
            {stats.collaborations}
          </span>
        </div>

        <div className="mt-4 space-y-1">
          {collaborations.slice(0, 5).map((item) => {
            const content = (
              <div className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/[0.04]">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-amber-400/15 bg-gradient-to-br from-amber-400/20 to-transparent font-pixel text-[10px] font-bold text-amber-300">
                  {initials(item.name)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-pixel text-xs font-bold text-[#F5EEDB]">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block truncate font-mono-code text-[10px] text-[#F5EEDB]/40">
                    {item.owner} · {item.role}
                  </span>
                </span>
                {item.visibility === "private" ? (
                  <Lock className="size-3.5 shrink-0 text-[#F5EEDB]/35" aria-label="Private" />
                ) : (
                  <ArrowUpRight className="size-3.5 shrink-0 text-[#F5EEDB]/35 transition-colors group-hover:text-amber-300" aria-label="Public" />
                )}
              </div>
            );

            if (item.url) {
              return (
                <a
                  key={`${item.owner}/${item.name}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  {content}
                </a>
              );
            }

            return <div key={`${item.owner}/${item.name}`}>{content}</div>;
          })}
        </div>

        <a
          href="#collaborations"
          className="mt-3 inline-flex items-center gap-1.5 rounded font-mono-code text-[11px] text-amber-300/90 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          View all {stats.collaborations}
          <ArrowRight className="size-3.5" />
        </a>
      </section>

      <section className="dash-panel p-5" aria-labelledby="statistic-heading">
        <p className="dash-eyebrow">YOUR STATISTIC</p>
        <h2
          id="statistic-heading"
          className="mt-1 font-pixel text-xl font-bold text-[#F5EEDB]"
        >
          INDEX MIX
        </h2>

        <div className="mt-4 flex items-center gap-5">
          <div className="relative grid size-32 shrink-0 place-items-center">
            <svg viewBox="0 0 100 100" className="size-32 -rotate-90" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgba(245,238,219,0.07)"
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
              <p className="font-pixel text-2xl font-bold text-[#F5EEDB]">{total}</p>
              <p className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#F5EEDB]/40">
                indexed
              </p>
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-2">
            {segments.map((segment) => (
              <div key={segment.label} className="flex items-center gap-2">
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="min-w-0 flex-1 truncate font-mono-code text-[10px] text-[#F5EEDB]/55">
                  {segment.label}
                </span>
                <span className="font-mono-code text-[11px] text-[#F5EEDB]">
                  {String(segment.value).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/about"
          className="mt-4 inline-flex items-center gap-1.5 rounded font-mono-code text-[11px] text-amber-300/90 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          About the engineer
          <ArrowRight className="size-3.5" />
        </Link>
      </section>

      <section className="dash-panel p-5" aria-labelledby="channel-heading">
        <p className="dash-eyebrow">OPEN CHANNEL</p>
        <h2
          id="channel-heading"
          className="mt-1 font-pixel text-xl font-bold text-[#F5EEDB]"
        >
          GET IN TOUCH
        </h2>
        <p className="mt-2 font-mono-code text-[10px] text-[#F5EEDB]/45">
          {PROFILE.location} · UTC+7
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-3 block truncate rounded-lg border border-white/10 bg-black/20 px-3 py-2 font-mono-code text-[11px] text-[#F5EEDB]/70 transition-colors hover:border-amber-400/40 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          {CONTACT_EMAIL}
        </a>
        <Link
          href="/contact"
          className="mt-3 inline-flex items-center gap-1.5 rounded font-mono-code text-[11px] text-amber-300/90 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Start a conversation
          <ArrowRight className="size-3.5" />
        </Link>
      </section>
    </aside>
  );
}