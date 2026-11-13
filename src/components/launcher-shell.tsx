"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { House, LayoutGrid, Mail, UserRound } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { GITHUB_URL, PROFILE } from "@/lib/projects";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home", Icon: House },
  { href: "/about", label: "About", Icon: UserRound },
  { href: "/projects", label: "Projects", Icon: LayoutGrid },
  { href: "/contact", label: "Contact", Icon: Mail },
];

export function LauncherShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="dash-canvas min-h-[100dvh] text-[#F5EEDB]">
      <div className="flex min-h-[100dvh]">
        <aside className="sticky top-0 hidden h-[100dvh] w-[84px] shrink-0 flex-col items-center justify-between border-r border-white/10 bg-[#080b11]/80 py-5 backdrop-blur-xl lg:flex">
          <div className="flex flex-col items-center gap-8">
            <Link
              href="/"
              aria-label="Ferta Junindi home"
              className="grid size-11 place-items-center rounded-xl bg-amber-400 font-pixel text-sm font-bold text-[#1a1206] shadow-[0_0_22px_rgba(245,158,11,0.28)] transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              FJ
            </Link>

            <nav aria-label="Main navigation" className="flex flex-col items-center gap-2">
              {NAV_ITEMS.map(({ href, label, Icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-label={label}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative grid size-11 place-items-center rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                      active
                        ? "border-amber-400/35 bg-amber-400 text-[#1a1206] shadow-[0_0_20px_rgba(245,158,11,0.18)]"
                        : "border-transparent text-[#F5EEDB]/45 hover:border-white/10 hover:bg-white/[0.04] hover:text-[#F5EEDB]"
                    )}
                  >
                    <Icon className="size-5" />
                    <span className="pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-md border border-white/10 bg-[#0b0f16] px-2.5 py-1 font-mono-code text-[10px] text-[#F5EEDB]/80 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100">
                      {label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-xl text-[#F5EEDB]/45 transition-colors hover:bg-white/[0.04] hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <GithubIcon className="size-5" />
            </a>
            <Link href="/about" aria-label="About Ferta Junindi" className="relative">
              <img
                src="/images/profile.jpg"
                alt={PROFILE.name}
                className="size-10 rounded-xl border border-amber-400/40 object-cover"
              />
              <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-[#080b11] bg-amber-400" />
            </Link>
          </div>
        </aside>

        <div className="min-w-0 flex-1 pb-24 lg:pb-0">{children}</div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-around border-t border-white/10 bg-[#080b11]/92 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-xl lg:hidden"
      >
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-w-14 flex-col items-center gap-1 rounded-lg px-2 py-1.5 font-mono-code text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                active ? "text-amber-300" : "text-[#F5EEDB]/45"
              )}
            >
              <Icon className="size-5" />
              {label}
            </Link>
          );
        })}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-14 flex-col items-center gap-1 rounded-lg px-2 py-1.5 font-mono-code text-[10px] text-[#F5EEDB]/45 transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <GithubIcon className="size-5" />
          GitHub
        </a>
      </nav>
    </div>
  );
}