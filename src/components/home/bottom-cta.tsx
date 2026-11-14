import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function BottomCta() {
  return (
    <section
      aria-labelledby="bottom-cta-heading"
      className="dash-glass flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
    >
      <div className="flex min-w-0 items-center gap-3.5">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#B95465]/35 bg-[#A94A5A]/15 text-[#FCC27D]">
          <Sparkles className="size-4" />
        </span>
        <div className="min-w-0">
          <p className="dash-eyebrow">Open channel</p>
          <h2
            id="bottom-cta-heading"
            className="mt-0.5 font-pixel text-lg font-bold text-[#F6E8C8]"
          >
            Have a system to build?
          </h2>
          <p className="mt-0.5 line-clamp-2 max-w-xl font-mono-code text-[10px] leading-relaxed text-[#B9A9C5]">
            Open for select collaborations. Email is the fastest way to share
            scope.
          </p>
        </div>
      </div>

      <Link
        href="/contact"
        className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#A94A5A] px-5 py-2.5 font-mono-code text-xs font-bold text-[#F6E8C8] transition-colors hover:bg-[#983E4F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
      >
        Start a conversation
        <ArrowRight className="size-4" />
      </Link>
    </section>
  );
}
