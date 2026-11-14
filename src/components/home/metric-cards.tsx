import type { ComponentType } from "react";
import { ExternalLink, Layers, Users } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { DashboardStats } from "@/lib/dashboard-stats";

function MetricCard({
  label,
  value,
  meta,
  Icon,
  tone,
}: {
  label: string;
  value: number;
  meta: string;
  Icon: ComponentType<{ className?: string }>;
  tone: string;
}) {
  return (
    <article className="dash-panel group relative min-w-0 overflow-hidden p-4 sm:p-5">
      <div className="flex items-start justify-between gap-2">
        <span
          className={`grid size-9 place-items-center rounded-xl border ${tone}`}
        >
          <Icon className="size-4" />
        </span>
        <span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#A1A1AA]/70">
          INDEX
        </span>
      </div>

      <p className="mt-4 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#A1A1AA]">
        {label}
      </p>
      <p className="mt-1 font-pixel text-3xl font-bold leading-none text-[#F4F4F5] sm:text-4xl">
        {value}
      </p>
      <p className="mt-1.5 truncate font-mono-code text-[10px] text-[#A1A1AA]/85">
        {meta}
      </p>
    </article>
  );
}

export function MetricCards({ stats }: { stats: DashboardStats }) {
  return (
    <section
      aria-label="Portfolio metrics"
      className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4"
    >
      <MetricCard
        label="Selected works"
        value={stats.selectedWorks}
        meta={`${stats.projectDemoCount} live demo`}
        Icon={Layers}
        tone="border-white/15 bg-white/5 text-[#E4E4E7]"
      />
      <MetricCard
        label="Collaborations"
        value={stats.collaborations}
        meta={`${stats.privateCollaborations} private / ${stats.publicCollaborations} public`}
        Icon={Users}
        tone="border-white/15 bg-white/5 text-[#E4E4E7]"
      />
      <MetricCard
        label="Public repos"
        value={stats.publicRepos}
        meta={`${stats.archiveCount} also in the archive`}
        Icon={GithubIcon}
        tone="border-white/15 bg-white/5 text-[#E4E4E7]"
      />
      <MetricCard
        label="Archived repos"
        value={stats.archiveCount}
        meta="Raw Github experiments"
        Icon={ExternalLink}
        tone="border-white/15 bg-white/5 text-[#E4E4E7]"
      />
    </section>
  );
}
