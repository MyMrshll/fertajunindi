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
    { label: "Selected works", value: stats.selectedWorks, color: "#E4E4E7" },
    { label: "Collaborations", value: stats.collaborations, color: "#A1A1AA" },
    { label: "Public repos", value: stats.publicRepos, color: "#52525B" },
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
              className="mt-1 font-pixel text-xl font-bold text-[#F4F4F5]"
            >
              INVITED WORK
            </h2>
          </div>
          <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono-code text-[10px] text-[#A1A1AA]">
            {stats.collaborations}
          </span>
        </div>

        <div className="mt-4 space-y-1">
          {collaborations.slice(0, 5).map((item) => {
            const content = (
              <div className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-white/5">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/5 font-pixel text-[10px] font-bold text-[#E4E4E7]">
                  {initials(item.name)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-pixel text-xs font-bold text-[#F4F4F5]">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block truncate font-mono-code text-[10px] text-[#A1A1AA]">
                    {item.owner} · {item.role}
                  </span>
                </span>
                {item.visibility === "private" ? (
                  <Lock className="size-3.5 shrink-0 text-[#A1A1AA]" aria-label="Private" />
                ) : (
                  <ArrowUpRight className="size-3.5 shrink-0 text-[#A1A1AA] transition-colors group-hover:text-white" aria-label="Public" />
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
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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
          className="mt-3 inline-flex items-center gap-1.5 rounded font-mono-code text-[11px] text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          View all {stats.collaborations}
          <ArrowRight className="size-3.5" />
        </a>
      </section>

      <section className="dash-panel p-5" aria-labelledby="statistic-heading">
        <p className="dash-eyebrow">YOUR STATISTIC</p>
        <h2
          id="statistic-heading"
          className="mt-1 font-pixel text-xl font-bold text-[#F4F4F5]"
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
                stroke="rgba(255,255,255,0.07)"
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
              <p className="font-pixel text-2xl font-bold text-[#F4F4F5]">{total}</p>
              <p className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#A1A1AA]">
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
                <span className="min-w-0 flex-1 truncate font-mono-code text-[10px] text-[#A1A1AA]">
                  {segment.label}
                </span>
                <span className="font-mono-code text-[11px] text-[#F4F4F5]">
                  {String(segment.value).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/about"
          className="mt-4 inline-flex items-center gap-1.5 rounded font-mono-code text-[11px] text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          About the engineer
          <ArrowRight className="size-3.5" />
        </Link>
      </section>

      <section className="dash-panel p-5" aria-labelledby="channel-heading">
        <p className="dash-eyebrow">OPEN CHANNEL</p>
        <h2
          id="channel-heading"
          className="mt-1 font-pixel text-xl font-bold text-[#F4F4F5]"
        >
          GET IN TOUCH
        </h2>
        <p className="mt-2 font-mono-code text-[10px] text-[#A1A1AA]">
          {PROFILE.location} · UTC+7
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="mt-3 block truncate rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono-code text-[11px] text-[#A1A1AA] transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          {CONTACT_EMAIL}
        </a>
        <Link
          href="/contact"
          className="mt-3 inline-flex items-center gap-1.5 rounded font-mono-code text-[11px] text-[#A1A1AA] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          Start a conversation
          <ArrowRight className="size-3.5" />
        </Link>
      </section>
    </aside>
  );
}