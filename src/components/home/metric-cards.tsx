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
        <span className="font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#B9A9C5]/70">
          INDEX
        </span>
      </div>

      <p className="mt-4 font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#B9A9C5]">
        {label}
      </p>
      <p className="mt-1 font-pixel text-3xl font-bold leading-none text-[#F6E8C8] sm:text-4xl">
        {value}
      </p>
      <p className="mt-1.5 truncate font-mono-code text-[10px] text-[#B9A9C5]/85">
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
        tone="border-[#B95465]/35 bg-[#B95465]/10 text-[#FCC27D]"
      />
      <MetricCard
        label="Collaborations"
        value={stats.collaborations}
        meta={`${stats.privateCollaborations} private / ${stats.publicCollaborations} public`}
        Icon={Users}
        tone="border-[#FCC27D]/30 bg-[#FCC27D]/10 text-[#FCC27D]"
      />
      <MetricCard
        label="Public repos"
        value={stats.publicRepos}
        meta={`${stats.archiveCount} also in the archive`}
        Icon={GithubIcon}
        tone="border-[#578CB3]/35 bg-[#578CB3]/10 text-[#578CB3]"
      />
      <MetricCard
        label="Live links"
        value={stats.liveLinks}
        meta={`${stats.projectDemoCount} project + ${stats.collaborationDemoCount} collabs`}
        Icon={ExternalLink}
        tone="border-[#37D1E3]/30 bg-[#37D1E3]/10 text-[#37D1E3]"
      />
    </section>
  );
}
