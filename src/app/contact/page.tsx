import type { Metadata } from "next";
import { ArrowRight, Clock, Mail, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { GithubIcon, InstagramIcon } from "@/components/icons";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  INSTAGRAM_URL,
  PROFILE,
} from "@/lib/projects";

const mailto = `mailto:${CONTACT_EMAIL}?subject=Project%20inquiry`;

export const metadata: Metadata = {
  title: "Contact — Ferta Junindi",
  description:
    "Contact Ferta Junindi for systems engineering, backend architecture, and fullstack product builds.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <header className="max-w-2xl">
        <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-amber-400">
          Direct line
        </p>
        <h1 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EEDB] pixel-text-shadow mt-2">
          CONTACT
        </h1>
        <p className="font-mono-code text-sm text-[#F5EEDB]/60 leading-relaxed mt-3">
          Open for systems engineering, backend architecture, and fullstack
          product builds. Email is the fastest way to share project scope or
          timelines.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <section>
          <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F5EEDB] pixel-text-shadow leading-tight">
            LET&apos;S WORK
            <br /> TOGETHER
          </h2>
          <p className="mt-4 font-mono-code text-sm leading-relaxed text-[#F5EEDB]/70 max-w-md">
            Open for systems engineering, backend architecture, and fullstack
            product builds. I typically respond within 24 hours.
          </p>

          <dl className="mt-7 space-y-3.5 font-mono-code text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#F5EEDB]/45">
                <MapPin className="size-4 text-amber-400 shrink-0" />
                Location
              </dt>
              <dd className="text-[#F5EEDB]/80 text-right">{PROFILE.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#F5EEDB]/45">
                <Clock className="size-4 text-amber-400 shrink-0" />
                Local time
              </dt>
              <dd className="text-[#F5EEDB]/80 text-right">UTC+7 (WIB)</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-[#F5EEDB]/45">Availability</dt>
              <dd className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 px-2.5 py-0.5 text-[11px] text-amber-300">
                <span className="size-1.5 rounded-full bg-[#f59e0b]" />
                Open to work
              </dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 font-mono-code text-xs text-[#F5EEDB]/75 transition-colors hover:border-amber-400/50 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <GithubIcon className="size-3.5" />
              GitHub
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 font-mono-code text-xs text-[#F5EEDB]/75 transition-colors hover:border-amber-400/50 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <InstagramIcon className="size-3.5" />
              Instagram
            </a>
          </div>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
          <h2 className="font-pixel text-lg font-bold text-[#F5EEDB]">
            DIRECT CHANNELS
          </h2>
          <p className="mt-1.5 font-mono-code text-xs leading-relaxed text-[#F5EEDB]/55">
            Email is the fastest way to share project scope or timelines.
          </p>

          <a
            href={mailto}
            className="mt-5 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition-colors hover:border-amber-400/40 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Mail className="size-4 text-amber-400 shrink-0" />
            <span className="font-mono-code text-sm text-[#F5EEDB]/85 break-all">
              {CONTACT_EMAIL}
            </span>
          </a>

          <a
            href={mailto}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono-code text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-[#FFF8EB] hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Send Email
            <ArrowRight className="size-4" />
          </a>

          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-[#F5EEDB]/40">
              Elsewhere
            </p>
            <div className="mt-3 flex flex-col gap-2 font-mono-code text-xs">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 text-[#F5EEDB]/65 transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
              >
                <span>github.com/MyMrshll</span>
                <ArrowRight className="size-3.5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 text-[#F5EEDB]/65 transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
              >
                <span>@fertajunindi</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
