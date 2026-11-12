import { SiteShell } from "@/components/site-shell";

const CARDS = Array.from({ length: 4 });

export default function ProjectsLoading() {
  return (
    <SiteShell>
      <div aria-busy="true" aria-live="polite">
        <span className="sr-only">Loading projects</span>

        <header className="max-w-2xl">
          <div className="skeleton-shimmer h-2.5 w-28 rounded-full" />
          <div className="skeleton-shimmer mt-3 h-9 w-56 rounded-lg sm:h-11 sm:w-72" />
          <div className="skeleton-shimmer mt-4 h-3 w-full max-w-xl rounded-full" />
          <div className="skeleton-shimmer mt-2 h-3 w-4/5 max-w-lg rounded-full" />
          <div className="skeleton-shimmer mt-4 h-3 w-40 rounded-full" />
        </header>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {CARDS.map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl border border-white/12 bg-[#0b0d13]"
            >
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

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="skeleton-shimmer h-2.5 w-40 rounded-full" />
              <div className="skeleton-shimmer mt-2 h-7 w-52 rounded" />
            </div>
            <div className="skeleton-shimmer h-3 w-32 rounded-full" />
          </div>

          <div className="mt-5 grid grid-cols-1 items-start gap-3 md:grid-cols-2">
            {CARDS.map((_, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
              >
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
