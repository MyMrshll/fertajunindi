import { SiteShell } from "@/components/site-shell";

const SHELF = Array.from({ length: 5 });

export default function ProjectsLoading() {
  return (
    <SiteShell>
      <main
        className="space-y-4 sm:space-y-5"
        aria-busy="true"
        aria-live="polite"
      >
        <span className="sr-only">Loading project index</span>

        <header className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="skeleton-shimmer h-2 w-24 rounded-full" />
            <div className="skeleton-shimmer mt-2 h-8 w-48 rounded-lg" />
            <div className="skeleton-shimmer mt-3 h-2.5 w-64 max-w-full rounded-full" />
          </div>
          <div className="flex gap-2">
            <div className="skeleton-shimmer h-8 w-28 rounded-full" />
            <div className="skeleton-shimmer size-9 rounded-full" />
            <div className="skeleton-shimmer size-9 rounded-full" />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-5">
          <div className="min-w-0 space-y-4 sm:space-y-5">
            <section className="relative overflow-hidden rounded-3xl border border-[#F6E8C8]/15 bg-[#191740] p-5 sm:p-7">
              <div className="skeleton-shimmer h-2.5 w-32 rounded-full" />
              <div className="skeleton-shimmer mt-4 h-10 w-64 max-w-full rounded-lg sm:h-12 sm:w-80" />
              <div className="skeleton-shimmer mt-4 h-3 w-full max-w-md rounded-full" />
              <div className="skeleton-shimmer mt-2 h-3 w-3/4 max-w-sm rounded-full" />
              <div className="mt-4 flex gap-1.5">
                <div className="skeleton-shimmer h-5 w-16 rounded-full" />
                <div className="skeleton-shimmer h-5 w-20 rounded-full" />
                <div className="skeleton-shimmer h-5 w-14 rounded-full" />
              </div>
              <div className="skeleton-shimmer mt-6 h-10 w-36 rounded-full" />
            </section>

            <section className="dash-panel p-4 sm:p-5">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <div className="skeleton-shimmer h-2.5 w-28 rounded-full" />
                  <div className="skeleton-shimmer mt-2 h-7 w-48 rounded" />
                </div>
                <div className="skeleton-shimmer h-8 w-24 rounded-full" />
              </div>
              <div className="mt-4 flex gap-3 overflow-hidden">
                {SHELF.map((_, index) => (
                  <div key={index} className="w-[208px] shrink-0 2xl:w-[248px]">
                    <div className="skeleton-shimmer aspect-[2/1] rounded-xl" />
                    <div className="skeleton-shimmer mt-2.5 h-2.5 w-20 rounded-full" />
                    <div className="skeleton-shimmer mt-2 h-4 w-32 rounded" />
                  </div>
                ))}
              </div>
            </section>

            <section className="dash-panel flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="skeleton-shimmer size-12 rounded-lg" />
                <div>
                  <div className="skeleton-shimmer h-2 w-24 rounded-full" />
                  <div className="skeleton-shimmer mt-2 h-4 w-32 rounded" />
                </div>
              </div>
              <div className="flex-1">
                <div className="skeleton-shimmer h-2 w-32 rounded-full" />
                <div className="skeleton-shimmer mt-2 h-1.5 w-full rounded-full" />
              </div>
              <div className="skeleton-shimmer h-9 w-28 rounded-full" />
            </section>
          </div>

          <aside className="flex flex-col gap-4">
            <section className="dash-panel p-5">
              <div className="skeleton-shimmer h-2.5 w-28 rounded-full" />
              <div className="skeleton-shimmer mt-2 h-7 w-40 rounded" />
              <div className="mt-4 space-y-2">
                {SHELF.map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="skeleton-shimmer size-9 rounded-lg" />
                    <div className="flex-1">
                      <div className="skeleton-shimmer h-3 w-32 rounded-full" />
                      <div className="skeleton-shimmer mt-1.5 h-2.5 w-24 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="dash-panel p-5">
              <div className="skeleton-shimmer h-2.5 w-28 rounded-full" />
              <div className="skeleton-shimmer mt-2 h-7 w-36 rounded" />
              <div className="mt-4 flex items-center gap-5">
                <div className="skeleton-shimmer size-32 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="skeleton-shimmer h-3 w-full rounded-full" />
                  <div className="skeleton-shimmer h-3 w-4/5 rounded-full" />
                  <div className="skeleton-shimmer h-3 w-3/5 rounded-full" />
                </div>
              </div>
            </section>

            <section className="dash-panel p-5">
              <div className="skeleton-shimmer h-2.5 w-28 rounded-full" />
              <div className="skeleton-shimmer mt-2 h-7 w-36 rounded" />
              <div className="skeleton-shimmer mt-3 h-2.5 w-40 rounded-full" />
              <div className="skeleton-shimmer mt-3 h-9 w-full rounded-lg" />
            </section>
          </aside>
        </div>
      </main>
    </SiteShell>
  );
}
