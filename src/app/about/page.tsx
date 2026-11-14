import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { GithubIcon, InstagramIcon } from "@/components/icons";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  INSTAGRAM_URL,
  PROFILE,
} from "@/lib/projects";

const STACK = ["Go", "TypeScript", "Python", "PostgreSQL", "Docker", "Linux"];

export const metadata: Metadata = {
  title: "About — Ferta Junindi",
  description:
    "Systems engineer and fullstack developer based in Aceh, Indonesia. Building compilers, distributed tools, and practical software at Nuanscape.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="pb-2">
      <header className="max-w-3xl">
        <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#FCC27D]">
          Profile
        </p>
        <h1 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6E8C8] pixel-text-shadow mt-2">
          ABOUT
        </h1>
        <p className="font-mono-code text-sm text-[#B9A9C5] leading-relaxed mt-3 max-w-2xl">
          Systems engineer and fullstack builder. I design compilers, distributed
          tools, and practical software that lasts.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] 2xl:grid-cols-[minmax(0,1fr)_400px] gap-8 xl:gap-14 items-start">
        <section>
          <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F6E8C8] pixel-text-shadow leading-tight">
            SYSTEMS &amp; SOFTWARE
            <br className="hidden sm:inline" /> ENGINEERING
          </h2>

          <div className="mt-4 max-w-2xl space-y-4 font-mono-code text-sm leading-relaxed text-[#B9A9C5]">
            <p>
              I am a systems engineer and fullstack developer based in Indonesia.
              At Nuanscape, I lead engineering across web platforms, automated
              agent pipelines, and backend infrastructure.
            </p>
            <p>
              Most of my work centers on Go, TypeScript, and Python, building
              document compilers, low-latency APIs, and production runtimes that
              stay straightforward to operate.
            </p>
          </div>

          <div className="mt-7">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#B9A9C5]/85">
              Core stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <li
                  key={tech}
                  className="font-mono-code text-xs text-[#B9A9C5] px-3 py-1 rounded-full border border-[#F6E8C8]/10 bg-[#2A2C6A]/25"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-primary hover:bg-[#983E4F] text-primary-foreground font-mono-code font-bold text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <span className="size-6 rounded-full bg-primary-foreground text-primary flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#F6E8C8]/25 text-[#F6E8C8]/90 hover:text-[#FCC27D] hover:border-[#B95465]/60 font-mono-code text-xs sm:text-sm transition-colors duration-200"
            >
              <Mail className="size-3.5" />
              Get in Touch
            </a>
          </div>
        </section>

        <aside className="rounded-2xl border border-[#F6E8C8]/10 bg-[#191740]/45 p-5 xl:p-6">
          <img
            src="/images/profile.jpg"
            alt="Ferta Junindi"
            className="size-16 rounded-2xl object-cover border-2 border-[#FCC27D]/70"
          />
          <h2 className="font-pixel text-lg font-bold text-[#F6E8C8] mt-4">
            FERTA JUNINDI
          </h2>
          <p className="font-mono-code text-[11px] text-[#B9A9C5] mt-1">
            {PROFILE.role} at {PROFILE.company}
          </p>

          <dl className="mt-5 space-y-2.5 font-mono-code text-xs">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[#B9A9C5]/85">Location</dt>
              <dd className="text-[#F6E8C8]/85 text-right">{PROFILE.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[#B9A9C5]/85">Public repos</dt>
              <dd className="text-[#F6E8C8]/85 tabular-nums">{PROFILE.publicRepos}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[#B9A9C5]/85">Followers</dt>
              <dd className="text-[#F6E8C8]/85 tabular-nums">{PROFILE.followers}</dd>
            </div>
          </dl>

          <div className="mt-5 flex items-center gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-full border border-[#F6E8C8]/10 bg-[#2A2C6A]/25 text-[#B9A9C5] transition-colors duration-200 hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-[#F6E8C8]/10 bg-[#2A2C6A]/25 text-[#B9A9C5] transition-colors duration-200 hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </aside>
      </div>

      <section className="mt-12 border-t border-[#F6E8C8]/10 pt-6 xl:mt-14 xl:pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-mono-code text-sm text-[#B9A9C5] leading-relaxed max-w-xl">
            Open for systems engineering, backend architecture, and fullstack
            product builds.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono-code text-xs text-[#FCC27D]/90 hover:text-[#FCC27D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3] rounded"
          >
            Contact
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
      </div>
    </SiteShell>
  );
}
