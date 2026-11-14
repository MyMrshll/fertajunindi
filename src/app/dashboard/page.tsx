import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import Hero from "@/components/Hero";
import { SiteShell } from "@/components/site-shell";
import { HomeGreeting } from "@/components/home/home-greeting";
import { HomeSearch } from "@/components/home/home-search";
import { MetricCards } from "@/components/home/metric-cards";
import { StackChart } from "@/components/home/stack-chart";
import { IndexChart } from "@/components/home/index-chart";
import { RecentWork } from "@/components/home/recent-work";
import { Spotlight } from "@/components/home/spotlight";
import { BottomCta } from "@/components/home/bottom-cta";
import { buildDashboardStats } from "@/lib/dashboard-stats";
import {
  COLLABORATIONS,
  CONTACT_EMAIL,
  OTHER_REPOS,
  PROFILE,
  PROJECTS,
} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Dashboard — Ferta Junindi",
  description:
    "Studio dashboard of Ferta Junindi: selected systems, collaborations, and the public project archive.",
};

export default function Home() {
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
            <HomeGreeting />
            <p className="mt-1 max-w-xl font-mono-code text-[11px] text-[#B9A9C5]">
              Selected systems, collaborations, and the public archive.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center xl:w-auto">
            <HomeSearch projects={PROJECTS} />
            <div className="hidden items-center gap-2 sm:flex">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email Ferta Junindi"
                className="grid size-10 place-items-center rounded-full border border-[#F6E8C8]/10 text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
              >
                <Mail className="size-4" />
              </a>
              <Link
                href="/about"
                aria-label="About Ferta Junindi"
                className="relative rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
              >
                <img
                  src="/images/profile.jpg"
                  alt={PROFILE.name}
                  className="size-10 rounded-xl border border-[#FCC27D]/40 object-cover"
                />
                <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-[#0E0926] bg-[#FCC27D]" />
              </Link>
            </div>
          </div>
        </header>

        <Hero />

        <MetricCards stats={stats} />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-5">
          <StackChart stats={stats} />
          <IndexChart stats={stats} />
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:gap-5">
          <RecentWork projects={PROJECTS} />
          <Spotlight project={PROJECTS[0]} />
        </div>

        <BottomCta />
      </main>
    </SiteShell>
  );
}
