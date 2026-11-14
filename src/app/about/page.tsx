import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import {
  CONTACT_EMAIL,
  PROFILE,
} from "@/lib/projects";
import { AboutLanyard } from "@/components/about/about-lanyard";

const STACK = ["Go", "TypeScript", "Python", "PostgreSQL", "Docker", "Linux"];

export const metadata: Metadata = {
  title: "About — Ferta Junindi",
  description:
    "Systems engineer and fullstack developer based in Aceh, Indonesia. Building compilers, distributed tools, and practical software at Nuanscape.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="relative flex min-h-[calc(100dvh-6rem)] flex-col justify-between pb-2">
        {/* 1. Header (Left column top on desktop) */}
        <header className="relative z-10 order-1 w-full max-w-2xl lg:max-w-[430px] xl:max-w-[500px] 2xl:max-w-xl">
          <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#A1A1AA]">
            Profile
          </p>
          <h1 className="mt-2 font-pixel text-3xl font-bold text-[#F4F4F5] pixel-text-shadow sm:text-4xl lg:text-5xl">
            ABOUT
          </h1>
          <p className="mt-3 font-mono-code text-sm leading-relaxed text-[#A1A1AA]">
            Systems engineer and fullstack builder. I design compilers, distributed
            tools, and practical software that lasts.
          </p>
        </header>

        {/* 2. SINGLE RESPONSIVE 3D FLOATING LANYARD:
            - In-flow on mobile right below Header (h-[340px] sm:h-[380px])
            - Absolute on desktop (lg:absolute lg:-top-10 xl:-top-12 lg:h-[calc(100%+2.5rem)]) suspended from ceiling */}
        <div className="relative order-2 my-2 h-[340px] w-full shrink-0 pointer-events-none sm:h-[380px] lg:absolute lg:-top-10 xl:-top-12 lg:inset-x-0 lg:my-0 lg:h-[calc(100%+2.5rem)] xl:h-[calc(100%+3rem)] lg:w-full z-20">
          <AboutLanyard className="h-full w-full" />
        </div>

        {/* 3. Bio & Stack Section (Left column body on desktop, follows Header) */}
        <div className="relative z-10 order-3 w-full max-w-2xl lg:max-w-[430px] xl:max-w-[500px] 2xl:max-w-xl">
          <section className="mt-2 lg:mt-6">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-xs text-[#E4E4E7]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0" />
                <span>{PROFILE.location}</span>
              </span>
              <span className="hidden text-white/20 min-[360px]:inline">•</span>
              <span className="text-[#A1A1AA]">
                {PROFILE.role} at {PROFILE.company}
              </span>
            </div>

            <h2 className="mt-4 font-pixel text-2xl font-bold leading-tight text-[#F4F4F5] pixel-text-shadow sm:text-3xl">
              SYSTEMS &amp; SOFTWARE
              <br className="hidden sm:inline" /> ENGINEERING
            </h2>

            <div className="mt-4 space-y-4 font-mono-code text-sm leading-relaxed text-[#A1A1AA]">
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

            <div className="mt-6">
              <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#A1A1AA]/85">
                Core stack
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {STACK.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono-code text-xs text-[#A1A1AA]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#27272A] py-1.5 pl-5 pr-2 font-mono-code text-xs font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#3F3F46] active:scale-[0.98] sm:text-sm"
              >
                <span>View Projects</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 font-mono-code text-xs text-[#F4F4F5] transition-colors duration-200 hover:border-white/30 hover:text-white sm:text-sm"
              >
                <Mail className="size-3.5" />
                Get in Touch
              </a>
            </div>
          </section>
        </div>

        {/* 4. Bottom Strip */}
        <section className="relative z-10 order-4 mt-8 border-t border-white/10 pt-5 lg:mt-10 lg:pt-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-xl font-mono-code text-sm leading-relaxed text-[#A1A1AA]">
              Open for systems engineering, backend architecture, and fullstack
              product builds.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono-code text-xs text-[#A1A1AA] transition-colors hover:text-white"
            >
              Start a conversation
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
