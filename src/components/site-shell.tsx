"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, InstagramIcon } from "@/components/icons";
import { CONTACT_EMAIL, GITHUB_URL, INSTAGRAM_URL } from "@/lib/projects";
import {
  ArrowUpRight,
  FolderKanban,
  House,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Trophy,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

type RailItem = {
  href: string;
  label: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
};

const NAV_ITEMS: RailItem[] = [
  { href: "/", label: "Home", description: "Landing page", Icon: House },
  {
    href: "/dashboard",
    label: "Dashboard",
    description: "Studio overview",
    Icon: LayoutDashboard,
  },
  {
    href: "/about",
    label: "About",
    description: "Background & stack",
    Icon: UserRound,
  },
  {
    href: "/projects",
    label: "Projects",
    description: "Selected work",
    Icon: FolderKanban,
  },
  {
    href: "/achievements",
    label: "Achievements",
    description: "Awards & milestones",
    Icon: Trophy,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Start a conversation",
    Icon: MessageSquare,
  },
  {
    href: GITHUB_URL,
    label: "GitHub",
    description: "Public repositories",
    Icon: GithubIcon,
    external: true,
  },
];

const SOCIALS = [
  {
    href: GITHUB_URL,
    label: "GitHub",
    description: "Public repositories",
    Icon: GithubIcon,
  },
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    description: "Visual log",
    Icon: InstagramIcon,
  },
];

const RAIL_SOCIALS = SOCIALS.filter(({ label }) => label !== "GitHub");

function ExpandedLabel({
  label,
  description,
  external,
}: {
  label: string;
  description: string;
  external?: boolean;
}) {
  return (
    <span className="grid min-w-0 grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover/rail:grid-cols-[1fr] group-focus-within/rail:grid-cols-[1fr]">
      <span className="min-w-0 overflow-hidden whitespace-nowrap text-left opacity-0 transition-opacity duration-200 group-hover/rail:opacity-100 group-focus-within/rail:opacity-100">
        <span className="flex items-center gap-1.5 font-mono-code text-[11px] leading-tight">
          {label}
          {external && <ArrowUpRight className="size-3 shrink-0" />}
        </span>
        <span className="mt-0.5 block font-mono-code text-[9px] leading-tight text-[#A1A1AA]">
          {description}
        </span>
      </span>
    </span>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="dash-canvas min-h-[100dvh] text-[#F4F4F5]">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-14">
          <aside className="group/rail relative z-40 hidden lg:block lg:w-[88px] lg:shrink-0 transition-[width] duration-300 ease-out lg:hover:w-[264px] lg:focus-within:w-[264px]">
            <div className="sticky top-6 ml-3 h-[calc(100dvh-3rem)] w-[64px] overflow-x-hidden overflow-y-auto rounded-[28px] border border-white/10 bg-[#121215] p-2.5 shadow-[0_24px_70px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-[width] duration-300 ease-out group-hover/rail:w-[240px] group-focus-within/rail:w-[240px]">
              <div className="flex h-full flex-col">
                <Link
                  href="/"
                  aria-label="Ferta Junindi home"
                  className="flex h-12 w-full items-center justify-center gap-0 rounded-2xl px-0.5 transition-colors duration-200 group-hover/rail:justify-start group-hover/rail:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-white/15 bg-[#18181B]">
                    <img
                      src="/images/profile.jpg"
                      alt=""
                      className="size-full object-cover"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-[#121215] bg-[#10B981]" />
                  </span>
                  <span className="grid min-w-0 grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover/rail:grid-cols-[1fr] group-focus-within/rail:grid-cols-[1fr]">
                    <span className="min-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/rail:opacity-100 group-focus-within/rail:opacity-100">
                      <span className="block font-pixel text-sm font-bold leading-tight text-[#F4F4F5]">
                        FERTA JUNINDI
                      </span>
                      <span className="mt-0.5 block font-mono-code text-[9px] uppercase tracking-[0.16em] text-[#A1A1AA]">
                        Systems Engineer
                      </span>
                      <span className="mt-1 flex items-center gap-1.5 font-mono-code text-[9px] uppercase tracking-[0.12em] text-[#A1A1AA]">
                        <span className="size-1.5 rounded-full bg-[#10B981]" />
                        Open to work
                      </span>
                    </span>
                  </span>
                </Link>

                <nav
                  aria-label="Main navigation"
                  className="mt-5 flex w-full flex-col gap-1"
                >
                  {NAV_ITEMS.map((item) => {
                    const active = pathname === item.href;
                    const className = cn(
                      "flex h-11 w-full items-center justify-center gap-0 rounded-xl border px-2.5 transition-all duration-200 group-hover/rail:justify-start group-hover/rail:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                      active
                        ? "border-white/20 bg-[#27272A] text-white shadow-sm"
                        : "border-transparent text-[#A1A1AA] hover:border-white/10 hover:bg-white/5 hover:text-[#F4F4F5]"
                    );

                    const icon = (
                      <item.Icon className="size-[18px] shrink-0" />
                    );

                    if (item.external) {
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.label}
                          className={className}
                        >
                          {icon}
                          <ExpandedLabel
                            label={item.label}
                            description={item.description}
                            external
                          />
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-label={item.label}
                        aria-current={active ? "page" : undefined}
                        className={className}
                      >
                        {icon}
                        <ExpandedLabel
                          label={item.label}
                          description={item.description}
                        />
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-auto flex w-full flex-col gap-1 pt-4">
                  {RAIL_SOCIALS.map(({ href, label, description, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-full items-center justify-center gap-0 rounded-xl border border-transparent px-2.5 text-[#A1A1AA] transition-all duration-200 group-hover/rail:justify-start group-hover/rail:gap-3 hover:border-white/10 hover:bg-white/5 hover:text-[#F4F4F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      <Icon className="size-[18px] shrink-0" />
                      <ExpandedLabel
                        label={label}
                        description={description}
                        external
                      />
                    </a>
                  ))}

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label="Email Ferta Junindi"
                    className="relative flex h-11 w-full items-center justify-center gap-0 rounded-xl border border-transparent px-2.5 text-[#A1A1AA] transition-all duration-200 group-hover/rail:justify-start group-hover/rail:gap-3 hover:border-white/10 hover:bg-white/5 hover:text-[#F4F4F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <Mail className="size-[18px] shrink-0" />
                    <span className="absolute right-2 top-2 size-1.5 rounded-full bg-[#10B981]" />
                    <ExpandedLabel
                      label="Email"
                      description="Get in touch"
                    />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1 py-4 lg:py-10 xl:py-12">
            <div className="dash-panel mb-4 flex items-center justify-between gap-3 px-4 py-3 lg:hidden">
              <Link
                href="/"
                className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <img
                  src="/images/profile.jpg"
                  alt="Ferta Junindi"
                  className="size-9 rounded-lg border border-white/15 object-cover"
                />
                <span className="min-w-0">
                  <span className="block truncate font-pixel text-sm font-bold leading-tight text-[#F4F4F5]">
                    FERTA JUNINDI
                  </span>
                  <span className="mt-0.5 block font-mono-code text-[9px] uppercase tracking-[0.18em] text-[#A1A1AA]">
                    Systems Engineer
                  </span>
                </span>
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email Ferta Junindi"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-[#A1A1AA] transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <Mail className="size-4" />
              </a>
            </div>

            <nav
              aria-label="Main navigation"
              className="mb-5 flex items-center gap-1 overflow-x-auto pb-1 [scrollbar-width:none] sm:grid sm:grid-cols-6 lg:hidden"
            >
              {NAV_ITEMS.filter((item) => !item.external).map((item) => {
                const active = pathname === item.href;
                const className = cn(
                  "flex shrink-0 min-w-0 items-center justify-center rounded-lg px-2.5 py-1.5 font-mono-code text-[11px] sm:px-1 sm:text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                  active ? "dash-nav-active" : "dash-nav-item"
                );

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

            {children}

            <footer className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5 lg:hidden">
              <div className="flex items-center gap-2.5">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="dash-readout flex size-9 items-center justify-center rounded-full text-[#A1A1AA] transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 font-mono-code text-[11px] text-[#A1A1AA] hover:text-white"
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
