import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
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
  title: "Projects — Ferta Junindi",
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
      <main className="space-y-4 sm:space-y-5">
        <header className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <Greeting />
            <p className="mt-1 max-w-xl font-mono-code text-[11px] text-[#B9A9C5]">
              Selected systems, collaborations, and the public archive.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#B95465]/30 bg-[#A94A5A]/[0.08] px-3 py-1.5 font-mono-code text-[10px] uppercase tracking-[0.14em] text-[#FCC27D]">
              <span className="size-1.5 rounded-full bg-[#FCC27D]" />
              Open to work
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-9 place-items-center rounded-full border border-[#F6E8C8]/10 text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-[#F6E8C8]/10 text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-5">
          <div className="min-w-0 space-y-4 sm:space-y-5">
            <FeaturedProject project={PROJECTS[0]} />
            <ProjectLibrary projects={PROJECTS} />
            <LatestStrip
              project={PROJECTS[PROJECTS.length - 1]}
              stats={stats}
            />
          </div>

          <InsightsPanel
            stats={stats}
            collaborations={COLLABORATIONS}
          />
        </div>

        <Collaborations />
      </main>
    </SiteShell>
  );
}
