import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { GITHUB_URL } from "@/lib/projects";
import { GithubIcon } from "@/components/icons";
import { ProjectsGrid } from "./projects-grid";
import { Collaborations } from "./collaborations";

export const metadata: Metadata = {
  title: "Projects — Ferta Junindi",
  description:
    "Selected production systems, tools, and experiments built by Ferta Junindi between 2025 and 2026.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <header className="max-w-2xl">
        <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-amber-400">
          Selected Works
        </p>
        <h1 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EEDB] pixel-text-shadow mt-2">
          PROJECTS
        </h1>
        <p className="font-mono-code text-sm text-[#F5EEDB]/60 leading-relaxed mt-3">
          Selected projects from github.com/MyMrshll, plus Nuanscape studio work
          and invited collaborations. Click any card to inspect the case study.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 font-mono-code text-[11px] text-amber-300/90 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
        >
          <GithubIcon className="size-3.5" />
          github.com/MyMrshll
        </a>
      </header>

      <ProjectsGrid />
      <Collaborations />
    </SiteShell>
  );
}
