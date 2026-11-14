import type { Metadata } from "next";
import { ArrowRight, CircleDot, Clock, Mail, MapPin } from "lucide-react";
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
      <div className="lg:flex lg:min-h-[calc(100dvh-6rem)] lg:flex-col lg:justify-center">
      <header className="max-w-2xl">
        <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#A1A1AA]">
          Say hello
        </p>
        <h1 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] pixel-text-shadow mt-2">
          CONTACT
        </h1>
        <p className="font-mono-code text-sm text-[#A1A1AA] leading-relaxed mt-3 max-w-md">
          Systems engineering, backend architecture, and fullstack product
          builds. From first sketch to production.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(340px,400px)] gap-8 lg:gap-12 xl:gap-16 items-start">
        <section>
          <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F4F4F5] pixel-text-shadow leading-tight text-balance">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="mt-4 font-mono-code text-sm leading-relaxed text-[#A1A1AA] max-w-md">
            Share what you are building, when it needs to ship, and any links
            worth opening.
          </p>

          <dl className="mt-7 max-w-md space-y-3.5 font-mono-code text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#A1A1AA]">
                <MapPin className="size-4 text-[#E4E4E7] shrink-0" />
                Location
              </dt>
              <dd className="text-[#F4F4F5] text-right">{PROFILE.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#A1A1AA]">
                <Clock className="size-4 text-[#E4E4E7] shrink-0" />
                Local time
              </dt>
              <dd className="text-[#F4F4F5] text-right">UTC+7 (WIB)</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#A1A1AA]">
                <CircleDot className="size-4 text-[#E4E4E7] shrink-0" />
                Availability
              </dt>
              <dd className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[11px] text-[#E4E4E7]">
                <span className="size-1.5 rounded-full bg-[#10B981]" />
                Open to work
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-28 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono-code text-xs text-[#A1A1AA] transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <GithubIcon className="size-3.5" />
              GitHub
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-28 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono-code text-xs text-[#A1A1AA] transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <InstagramIcon className="size-3.5" />
              Instagram
            </a>
          </div>
        </section>

        <aside className="w-full rounded-2xl border border-white/10 bg-[#121215] p-5 sm:p-6 lg:max-w-[400px] lg:justify-self-end shadow-lg">
          <h2 className="font-pixel text-lg font-bold text-[#F4F4F5]">
            DIRECT CHANNELS
          </h2>
          <p className="mt-1.5 font-mono-code text-xs leading-relaxed text-[#A1A1AA]">
            Send a brief and I will take it from there.
          </p>

          <a
            href={mailto}
            className="mt-5 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Mail className="size-4 text-[#E4E4E7] shrink-0" />
            <span className="font-mono-code text-xs min-[360px]:text-sm text-[#F4F4F5] break-all">
              {CONTACT_EMAIL}
            </span>
          </a>

          <a
            href={mailto}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-[#27272A] px-5 py-2.5 font-mono-code text-sm font-bold text-white transition-all duration-200 hover:bg-[#3F3F46] hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Send Email
            <ArrowRight className="size-4" />
          </a>

          <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 font-mono-code text-xs text-[#A1A1AA]">
            <Clock className="size-3.5 shrink-0 text-[#E4E4E7]" />
            Typical reply within 24 hours
          </div>
        </aside>
      </div>
      </div>
    </SiteShell>
  );
}
