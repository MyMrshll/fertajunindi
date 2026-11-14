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
        <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#FCC27D]">
          Say hello
        </p>
        <h1 className="font-pixel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6E8C8] pixel-text-shadow mt-2">
          CONTACT
        </h1>
        <p className="font-mono-code text-sm text-[#B9A9C5] leading-relaxed mt-3 max-w-md">
          Systems engineering, backend architecture, and fullstack product
          builds. From first sketch to production.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(340px,400px)] gap-8 lg:gap-12 xl:gap-16 items-start">
        <section>
          <h2 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F6E8C8] pixel-text-shadow leading-tight text-balance">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="mt-4 font-mono-code text-sm leading-relaxed text-[#B9A9C5] max-w-md">
            Share what you are building, when it needs to ship, and any links
            worth opening.
          </p>

          <dl className="mt-7 max-w-md space-y-3.5 font-mono-code text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#B9A9C5]/85">
                <MapPin className="size-4 text-[#FCC27D] shrink-0" />
                Location
              </dt>
              <dd className="text-[#F6E8C8]/85 text-right">{PROFILE.location}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#B9A9C5]/85">
                <Clock className="size-4 text-[#FCC27D] shrink-0" />
                Local time
              </dt>
              <dd className="text-[#F6E8C8]/85 text-right">UTC+7 (WIB)</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#B9A9C5]/85">
                <CircleDot className="size-4 text-[#FCC27D] shrink-0" />
                Availability
              </dt>
              <dd className="inline-flex items-center gap-1.5 rounded-full border border-[#FCC27D]/40 px-2.5 py-0.5 text-[11px] text-[#FCC27D]">
                <span className="size-1.5 rounded-full bg-[#FCC27D]" />
                Open to work
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-2.5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-28 items-center justify-center gap-2 rounded-full border border-[#F6E8C8]/15 bg-[#2A2C6A]/25 px-4 py-2 font-mono-code text-xs text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
            >
              <GithubIcon className="size-3.5" />
              GitHub
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-28 items-center justify-center gap-2 rounded-full border border-[#F6E8C8]/15 bg-[#2A2C6A]/25 px-4 py-2 font-mono-code text-xs text-[#B9A9C5] transition-colors hover:border-[#FCC27D]/50 hover:text-[#FCC27D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
            >
              <InstagramIcon className="size-3.5" />
              Instagram
            </a>
          </div>
        </section>

        <aside className="w-full rounded-2xl border border-[#F6E8C8]/10 bg-[#191740]/45 p-5 sm:p-6 lg:max-w-[400px] lg:justify-self-end">
          <h2 className="font-pixel text-lg font-bold text-[#F6E8C8]">
            DIRECT CHANNELS
          </h2>
          <p className="mt-1.5 font-mono-code text-xs leading-relaxed text-[#B9A9C5]">
            Send a brief and I will take it from there.
          </p>

          <a
            href={mailto}
            className="mt-5 flex items-center gap-2.5 rounded-xl border border-[#F6E8C8]/10 bg-[#2A2C6A]/25 p-3.5 transition-colors hover:border-[#B95465]/40 hover:bg-[#2A2C6A]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
          >
            <Mail className="size-4 text-[#FCC27D] shrink-0" />
            <span className="font-mono-code text-xs min-[360px]:text-sm text-[#F6E8C8]/90 break-all">
              {CONTACT_EMAIL}
            </span>
          </a>

          <a
            href={mailto}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono-code text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-[#983E4F] hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
          >
            Send Email
            <ArrowRight className="size-4" />
          </a>

          <div className="mt-5 flex items-center gap-2 border-t border-[#F6E8C8]/10 pt-4 font-mono-code text-xs text-[#B9A9C5]">
            <Clock className="size-3.5 shrink-0 text-[#FCC27D]" />
            Typical reply within 24 hours
          </div>
        </aside>
      </div>
      </div>
    </SiteShell>
  );
}
