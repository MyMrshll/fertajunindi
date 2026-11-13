import { SiteShell } from "@/components/site-shell";

const CARDS = Array.from({ length: 4 });
const METRICS = Array.from({ length: 6 });

export default function ProjectsLoading() {
  return (
    <SiteShell>
      <div aria-busy="true" aria-live="polite">
        <span className="sr-only">Loading dashboard</span>

        <header className="max-w-3xl">
          <div className="skeleton-shimmer h-2.5 w-52 rounded-full" />
          <div className="skeleton-shimmer mt-3 h-9 w-56 rounded-lg sm:h-11 sm:w-72" />
          <div className="skeleton-shimmer mt-4 h-3 w-full max-w-xl rounded-full" />
          <div className="skeleton-shimmer mt-2 h-3 w-4/5 max-w-lg rounded-full" />
          <div className="skeleton-shimmer mt-4 h-3 w-40 rounded-full" />
        </header>

        <div className="dash-glass mt-6 rounded-2xl p-3 sm:p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
            {METRICS.map((_, index) => (
              <div key={index} className="dash-readout px-3 py-3">
                <div className="skeleton-shimmer h-2.5 w-20 rounded-full" />
                <div className="skeleton-shimmer mt-2 h-7 w-12 rounded" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
          <section className="dash-panel p-4 sm:p-6 xl:col-span-8">
            <div className="skeleton-shimmer h-2.5 w-40 rounded-full" />
            <div className="skeleton-shimmer mt-2 h-7 w-52 rounded" />

            <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {CARDS.map((_, index) => (
                <article key={index} className="dash-card overflow-hidden rounded-2xl">
                  <div className="skeleton-shimmer aspect-[16/10] w-full" />
                  <div className="p-4 sm:p-5">
                    <div className="skeleton-shimmer h-2.5 w-24 rounded-full" />
                    <div className="skeleton-shimmer mt-2 h-5 w-2/3 rounded" />
                    <div className="skeleton-shimmer mt-3 h-3 w-full rounded-full" />
                    <div className="skeleton-shimmer mt-2 h-3 w-4/5 rounded-full" />
                    <div className="mt-3 flex gap-1.5">
                      <div className="skeleton-shimmer h-5 w-16 rounded-full" />
                      <div className="skeleton-shimmer h-5 w-20 rounded-full" />
                      <div className="skeleton-shimmer h-5 w-14 rounded-full" />
                    </div>
                    <div className="skeleton-shimmer mt-4 h-3 w-24 rounded-full" />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="dash-panel p-5 xl:col-span-4">
            <div className="skeleton-shimmer h-2.5 w-28 rounded-full" />
            <div className="skeleton-shimmer mt-2 h-7 w-40 rounded" />
            <div className="mt-5 space-y-3">
              {CARDS.map((_, index) => (
                <div key={index}>
                  <div className="skeleton-shimmer h-3 w-full rounded-full" />
                  <div className="skeleton-shimmer mt-2 h-1.5 w-full rounded-full" />
                </div>
              ))}
            </div>
            <div className="skeleton-shimmer mt-6 h-8 w-full rounded-xl" />
          </aside>
        </div>

        <section className="dash-panel mt-6 p-5 sm:p-6">
          <div className="skeleton-shimmer h-2.5 w-40 rounded-full" />
          <div className="skeleton-shimmer mt-2 h-7 w-52 rounded" />
          <div className="mt-5 grid grid-cols-1 items-start gap-3 md:grid-cols-2">
            {CARDS.map((_, index) => (
              <div key={index} className="dash-card rounded-xl p-4">
                <div className="skeleton-shimmer h-4 w-2/5 rounded" />
                <div className="skeleton-shimmer mt-2 h-3 w-1/2 rounded-full" />
                <div className="skeleton-shimmer mt-3 h-3 w-full rounded-full" />
                <div className="skeleton-shimmer mt-2 h-3 w-3/4 rounded-full" />
                <div className="skeleton-shimmer mt-3 h-3 w-28 rounded-full" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
