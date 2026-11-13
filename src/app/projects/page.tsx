import type { Metadata } from "next";
import { LauncherShell } from "@/components/launcher-shell";
import { GithubIcon, InstagramIcon } from "@/components/icons";
import {
  COLLABORATIONS,
  GITHUB_URL,
  INSTAGRAM_URL,
  OTHER_REPOS,
  PROFILE,
  PROJECTS,
} from "@/lib/projects";
import { buildDashboardStats } from "@/lib/dashboard-stats";
import { Greeting } from "./greeting";
import { FeaturedProject } from "./featured-project";
import { ProjectLibrary } from "./project-library";
import { LatestStrip } from "./latest-strip";
import { InsightsPanel } from "./insights-panel";
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
    <LauncherShell>
      <div className="px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <Greeting />
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 font-mono-code text-[10px] uppercase tracking-[0.14em] text-amber-300">
              <span className="size-1.5 rounded-full bg-amber-400" />
              Open to work
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-9 place-items-center rounded-full border border-white/10 text-[#F5EEDB]/55 transition-colors hover:border-amber-400/50 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-white/10 text-[#F5EEDB]/55 transition-colors hover:border-amber-400/50 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </header>

        <div className="mt-4 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-6">
          <div className="min-w-0 space-y-4">
            <FeaturedProject project={PROJECTS[0]} />
            <ProjectLibrary projects={PROJECTS} />
            <LatestStrip project={PROJECTS[PROJECTS.length - 1]} stats={stats} />
          </div>

          <InsightsPanel stats={stats} collaborations={COLLABORATIONS} />
        </div>

        <div className="mt-6">
          <Collaborations />
        </div>
      </div>
    </LauncherShell>
  );
}