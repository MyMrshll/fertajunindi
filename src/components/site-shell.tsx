"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, InstagramIcon } from "@/components/icons";
import { CONTACT_EMAIL, GITHUB_URL, INSTAGRAM_URL, PROFILE } from "@/lib/projects";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { href: string; label: string; external?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: GITHUB_URL, label: "GitHub", external: true },
];

const SOCIALS = [
  { href: GITHUB_URL, label: "GitHub", Icon: GithubIcon },
  { href: INSTAGRAM_URL, label: "Instagram", Icon: InstagramIcon },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-[100dvh] bg-[#07090e] text-[#F5EEDB]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <aside className="border-b border-white/10 lg:border-b-0 lg:w-[288px] lg:shrink-0">
            <div className="flex flex-col justify-between lg:sticky lg:top-0 lg:h-[100dvh] lg:border-r lg:border-white/10 lg:py-10 lg:pr-8">
              <div>
                <div className="flex items-center gap-4 pt-6 lg:pt-0">
                  <img
                    src="/images/profile.jpg"
                    alt="Ferta Junindi"
                    className="size-14 lg:size-20 rounded-2xl object-cover border-2 border-amber-400/70 shadow-[0_0_24px_rgba(245,158,11,0.15)]"
                  />
                  <div className="min-w-0">
                    <p className="font-pixel text-lg lg:text-xl font-bold leading-tight tracking-tight">
                      FERTA JUNINDI
                    </p>
                    <p className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-[#F5EEDB]/55 mt-1">
                      Systems Engineer
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1.5 font-mono-code text-[11px] uppercase tracking-[0.14em] text-amber-300">
                      <span className="size-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                      Open to work
                    </span>
                    <p className="mt-1.5 font-mono-code text-[11px] leading-snug text-[#F5EEDB]/50">
                      {PROFILE.location}
                    </p>
                    <p className="font-mono-code text-[11px] leading-snug text-[#F5EEDB]/40">
                      {PROFILE.publicRepos} public repos
                    </p>
                  </div>
                </div>

                <nav aria-label="Main navigation" className="mt-5 lg:mt-10 flex lg:flex-col gap-1.5">
                  {NAV_ITEMS.map((item) => {
                    const active = pathname === item.href;
                    const className = cn(
                      "font-mono-code text-sm rounded-lg px-3 py-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                      active
                        ? "bg-amber-400/10 text-amber-300 border border-amber-400/25"
                        : "text-[#F5EEDB]/60 border border-transparent hover:text-[#F5EEDB] hover:bg-white/5"
                    );

                    if (item.external) {
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
                          {item.label} ↗
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={className}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="hidden lg:flex flex-col gap-5 pb-2">
                <div className="flex items-center gap-2.5">
                  {SOCIALS.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F5EEDB]/65 transition-colors duration-200 hover:border-amber-400/50 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 font-mono-code text-[11px] text-[#F5EEDB]/50 transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                >
                  <Mail className="size-3.5" />
                  {CONTACT_EMAIL}
                </a>

                <p className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-[#F5EEDB]/30">
                  © 2026 Ferta Junindi
                </p>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1 py-8 lg:py-12">
            {children}

            <footer className="lg:hidden mt-14 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F5EEDB]/65 transition-colors hover:border-amber-400/50 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 font-mono-code text-[11px] text-[#F5EEDB]/50 hover:text-amber-300"
              >
                <Mail className="size-3.5" />
                Email
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
