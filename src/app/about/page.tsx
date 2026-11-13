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
      <header className="max-w-2xl">
        <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-amber-400">
          Profile
        </p>
        <h1 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EEDB] pixel-text-shadow mt-2">
          ABOUT
        </h1>
        <p className="font-mono-code text-sm text-[#F5EEDB]/60 leading-relaxed mt-3">
          Systems engineer and fullstack builder. I design compilers, distributed
          tools, and practical software that lasts.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-8 xl:gap-12 items-start">
        <section>
          <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F5EEDB] pixel-text-shadow leading-tight">
            SYSTEMS &amp; SOFTWARE
            <br className="hidden sm:inline" /> ENGINEERING
          </h2>

          <div className="mt-4 space-y-4 font-mono-code text-sm leading-relaxed text-[#F5EEDB]/70">
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
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#F5EEDB]/45">
              Core stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <li
                  key={tech}
                  className="font-mono-code text-xs text-[#F5EEDB]/70 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-primary hover:bg-[#FFF8EB] text-primary-foreground font-mono-code font-bold text-xs sm:text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <span className="size-6 rounded-full bg-primary-foreground text-primary flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/25 text-[#F5EEDB]/85 hover:text-amber-200 hover:border-amber-400/60 font-mono-code text-xs sm:text-sm transition-colors duration-200"
            >
              <Mail className="size-3.5" />
              Get in Touch
            </a>
          </div>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <img
            src="/images/profile.jpg"
            alt="Ferta Junindi"
            className="size-16 rounded-2xl object-cover border-2 border-amber-400/70"
          />
          <h2 className="font-pixel text-lg font-bold text-[#F5EEDB] mt-4">
            FERTA JUNINDI
          </h2>
          <p className="font-mono-code text-[11px] text-[#F5EEDB]/55 mt-1">
            {PROFILE.role} at {PROFILE.company}
          </p>

          <dl className="mt-5 space-y-2.5 font-mono-code text-xs">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[#F5EEDB]/45">Location</dt>
              <dd className="text-[#F5EEDB]/80 text-right">{PROFILE.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[#F5EEDB]/45">Public repos</dt>
              <dd className="text-[#F5EEDB]/80 tabular-nums">{PROFILE.publicRepos}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[#F5EEDB]/45">Followers</dt>
              <dd className="text-[#F5EEDB]/80 tabular-nums">{PROFILE.followers}</dd>
            </div>
          </dl>

          <div className="mt-5 flex items-center gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F5EEDB]/65 transition-colors duration-200 hover:border-amber-400/50 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F5EEDB]/65 transition-colors duration-200 hover:border-amber-400/50 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </aside>
      </div>

      <section className="mt-14 border-t border-white/10 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-mono-code text-sm text-[#F5EEDB]/60 leading-relaxed max-w-xl">
            Open for systems engineering, backend architecture, and fullstack
            product builds.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono-code text-xs text-amber-300/90 hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
          >
            Contact
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
