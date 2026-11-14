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
          <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#FCC27D]">
            Profile
          </p>
          <h1 className="mt-2 font-pixel text-3xl font-bold text-[#F6E8C8] pixel-text-shadow sm:text-4xl lg:text-5xl">
            ABOUT
          </h1>
          <p className="mt-3 font-mono-code text-sm leading-relaxed text-[#B9A9C5]">
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
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono-code text-xs text-[#FCC27D]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 shrink-0" />
                <span>{PROFILE.location}</span>
              </span>
              <span className="hidden text-[#B9A9C5]/40 min-[360px]:inline">•</span>
              <span className="text-[#B9A9C5]">
                {PROFILE.role} at {PROFILE.company}
              </span>
            </div>

            <h2 className="mt-4 font-pixel text-2xl font-bold leading-tight text-[#F6E8C8] pixel-text-shadow sm:text-3xl">
              SYSTEMS &amp; SOFTWARE
              <br className="hidden sm:inline" /> ENGINEERING
            </h2>

            <div className="mt-4 space-y-4 font-mono-code text-sm leading-relaxed text-[#B9A9C5]">
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
              <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#B9A9C5]/85">
                Core stack
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {STACK.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[#F6E8C8]/10 bg-[#2A2C6A]/25 px-3 py-1 font-mono-code text-xs text-[#B9A9C5]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-primary py-1.5 pl-5 pr-2 font-mono-code text-xs font-bold text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-[#983E4F] active:scale-[0.98] sm:text-sm"
              >
                <span>View Projects</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#F6E8C8]/25 px-5 py-2 font-mono-code text-xs text-[#F6E8C8]/90 transition-colors duration-200 hover:border-[#B95465]/60 hover:text-[#FCC27D] sm:text-sm"
              >
                <Mail className="size-3.5" />
                Get in Touch
              </a>
            </div>
          </section>
        </div>

        {/* 4. Bottom Strip */}
        <section className="relative z-10 order-4 mt-8 border-t border-[#F6E8C8]/10 pt-5 lg:mt-10 lg:pt-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-xl font-mono-code text-sm leading-relaxed text-[#B9A9C5]">
              Open for systems engineering, backend architecture, and fullstack
              product builds.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded font-mono-code text-xs text-[#FCC27D]/90 transition-colors hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
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
