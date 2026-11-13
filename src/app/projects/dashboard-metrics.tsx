import type { DashboardStats } from "@/lib/dashboard-stats";

type MetricKey =
  | "selectedWorks"
  | "collaborations"
  | "publicRepos"
  | "followers"
  | "archiveCount"
  | "liveLinks";

const METRICS: Array<{ key: MetricKey; label: string; hint: string }> = [
  { key: "selectedWorks", label: "Selected works", hint: "case studies" },
  { key: "collaborations", label: "Collaborations", hint: "invited" },
  { key: "publicRepos", label: "Public repos", hint: "github" },
  { key: "followers", label: "Followers", hint: "github" },
  { key: "archiveCount", label: "Archive", hint: "additional" },
  { key: "liveLinks", label: "Live demos", hint: "external" },
];

export function DashboardMetrics({ stats }: { stats: DashboardStats }) {
  return (
    <section
      aria-label="Portfolio metrics"
      className="dash-glass mt-6 rounded-2xl p-3 sm:p-4"
    >
      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
        {METRICS.map(({ key, label, hint }) => (
          <div key={key} className="dash-readout min-w-0 px-3 py-3">
            <dt className="font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#F5EEDB]/50">
              {label}
            </dt>
            <dd className="mt-1 flex items-baseline gap-1.5">
              <span className="font-pixel text-2xl font-bold text-[#F5EEDB]">
                {String(stats[key]).padStart(2, "0")}
              </span>
              <span className="font-mono-code text-[10px] text-[#F5EEDB]/35">
                {hint}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
