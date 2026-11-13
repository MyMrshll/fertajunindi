import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import {
  COLLABORATIONS,
  GITHUB_URL,
  OTHER_REPOS,
  PROFILE,
  PROJECTS,
} from "@/lib/projects";
import { GithubIcon } from "@/components/icons";
import { buildDashboardStats } from "@/lib/dashboard-stats";
import { DashboardMetrics } from "./dashboard-metrics";
import { DashboardSignal } from "./dashboard-signal";
import { ProjectsGrid } from "./projects-grid";
import { Collaborations } from "./collaborations";

export const metadata: Metadata = {
  title: "Dashboard — Ferta Junindi",
  description:
    "Public portfolio index of selected systems, collaborations, and experiments by Ferta Junindi. Metrics are derived from the portfolio source.",
};

export default function ProjectsPage() {
  const stats = buildDashboardStats({
    projects: PROJECTS,
    collaborations: COLLABORATIONS,
    otherRepos: OTHER_REPOS,
    profile: PROFILE,
  });

  return (
    <SiteShell>
      <header className="max-w-3xl">
        <p className="dash-eyebrow">PUBLIC PORTFOLIO / PROJECT INDEX</p>
        <h1 className="mt-2 font-pixel text-3xl font-bold text-[#F5EEDB] pixel-text-shadow sm:text-4xl lg:text-5xl">
          DASHBOARD
        </h1>
        <p className="mt-3 font-mono-code text-sm leading-relaxed text-[#F5EEDB]/60">
          A public index of selected systems, invited collaborations, and
          experiments. Every count below is derived from the portfolio source,
          not fabricated telemetry.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded font-mono-code text-[11px] text-amber-300/90 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <GithubIcon className="size-3.5" />
          github.com/MyMrshll
        </a>
      </header>

      <DashboardMetrics stats={stats} />

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
        <section
          className="dash-panel p-4 sm:p-6 xl:col-span-8"
          aria-labelledby="selected-works-heading"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="dash-eyebrow">01 / SELECTED WORKS</p>
              <h2
                id="selected-works-heading"
                className="mt-1 font-pixel text-2xl font-bold text-[#F5EEDB] sm:text-3xl"
              >
                PROJECT INDEX
              </h2>
            </div>
            <span className="dash-readout px-3 py-1.5 font-mono-code text-[11px] text-[#F5EEDB]/65">
              {stats.selectedWorks} entries
            </span>
          </div>

          <ProjectsGrid />
        </section>

        <div className="min-w-0 xl:col-span-4">
          <DashboardSignal stats={stats} />
        </div>
      </div>

      <Collaborations />
    </SiteShell>
  );
}
