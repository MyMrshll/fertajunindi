import type { DashboardStats } from "@/lib/dashboard-stats";

export function DashboardSignal({ stats }: { stats: DashboardStats }) {
  const maxStack = Math.max(1, ...stats.topStack.map((item) => item.count));
  const maxYear = Math.max(1, ...stats.years.map((item) => item.count));

  return (
    <aside className="dash-panel flex h-full flex-col gap-6 p-5">
      <section aria-labelledby="stack-signal-heading">
        <p className="dash-eyebrow">STACK SIGNAL</p>
        <h2
          id="stack-signal-heading"
          className="mt-1 font-pixel text-2xl font-bold text-[#F5EEDB]"
        >
          MOST USED
        </h2>

        <div className="mt-4 space-y-3">
          {stats.topStack.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between gap-3 font-mono-code text-[11px]">
                <span className="min-w-0 truncate text-[#F5EEDB]/70">
                  {item.name}
                </span>
                <span className="shrink-0 text-amber-300">{item.count}</span>
              </div>
              <div
                className="dash-readout mt-1.5 h-1.5 w-full overflow-hidden rounded-full"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-amber-400/80"
                  style={{ width: `${(item.count / maxStack) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="year-signal-heading"
        className="border-t border-white/10 pt-5"
      >
        <p className="dash-eyebrow">INDEX YEARS</p>
        <h2
          id="year-signal-heading"
          className="mt-1 font-pixel text-2xl font-bold text-[#F5EEDB]"
        >
          BY YEAR
        </h2>

        <div className="mt-4 space-y-3">
          {stats.years.map((item) => (
            <div key={item.year}>
              <div className="flex items-center justify-between gap-3 font-mono-code text-[11px]">
                <span className="text-[#F5EEDB]/70">{item.year}</span>
                <span className="text-amber-300">{item.count}</span>
              </div>
              <div
                className="dash-readout mt-1.5 h-1.5 w-full overflow-hidden rounded-full"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-[#F5EEDB]/35"
                  style={{ width: `${(item.count / maxYear) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-auto border-t border-white/10 pt-4 font-mono-code text-[10px] leading-relaxed text-[#F5EEDB]/40">
        Index snapshot derived from local portfolio data. No live telemetry.
      </p>
    </aside>
  );
}
