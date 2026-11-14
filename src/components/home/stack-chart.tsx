import type { DashboardStats } from "@/lib/dashboard-stats";

export function StackChart({ stats }: { stats: DashboardStats }) {
  const max = Math.max(...stats.topStack.map((item) => item.count), 1);
  const stack = stats.topStack.length
    ? stats.topStack
    : [{ name: "No tags", count: 0 }];

  return (
    <section className="dash-panel p-5" aria-labelledby="stack-heading">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="dash-eyebrow">Build footprint</p>
          <h2
            id="stack-heading"
            className="mt-1 font-pixel text-xl font-bold text-[#F4F4F5]"
          >
            STACK IN THE INDEX
          </h2>
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono-code text-[10px] text-[#A1A1AA]">
          {stats.selectedWorks} works
        </span>
      </div>

      <div className="relative mt-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 bottom-11 flex flex-col justify-between"
        >
          {[0, 1, 2, 3].map((line) => (
            <span
              key={line}
              className="border-t border-dashed border-white/10"
            />
          ))}
        </div>

        <ul className="relative flex h-52 items-end gap-2 sm:gap-4">
          {stack.map((item) => (
            <li
              key={item.name}
              className="flex h-full min-w-0 flex-1 flex-col items-center justify-end"
            >
              <span className="font-mono-code text-[10px] text-[#A1A1AA]">
                {item.count}
              </span>
              <span className="flex w-full max-w-14 flex-1 items-end pt-1.5">
                <span
                  className="w-full rounded-t-lg border border-b-0 border-white/20 bg-[#27272A] transition-colors hover:bg-[#3F3F46]"
                  style={{
                    height: `${Math.max((item.count / max) * 100, 4)}%`,
                  }}
                  title={`${item.name}: ${item.count}`}
                />
              </span>
              <span className="mt-2 flex h-8 w-full items-start justify-center truncate font-mono-code text-[9px] leading-tight text-[#A1A1AA] sm:text-[10px]">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-3 border-t border-white/10 pt-3 font-mono-code text-[10px] text-[#A1A1AA]/80">
        Tags counted across {stats.selectedWorks} selected works.
      </p>
    </section>
  );
}
