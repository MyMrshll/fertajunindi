"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const MESSAGE =
  "Welcome to Ferta's studio. I'm Pixel, the desk cat. Click a project card to inspect the work.";

const CAT_MATRIX = [
  "........................",
  "........................",
  "......o.........o.......",
  ".....oao.......oao......",
  ".....oaao.....oaao......",
  ".....oooooooooooooo.....",
  ".....occcaaaaaaccco.....",
  ".....oceeecccceeeco.....",
  ".....ocepeccccepeco.....",
  ".....oceeecccceeeco.....",
  "..cccocccdcnncdcccoccc..",
  ".....occcddooddccco.....",
  "...ccocccdoddodcccocc...",
  ".....oooooooooooooo.....",
  "........oooooooooaao....",
  "........ocddddco.ooao...",
  "........oaddddao..oao...",
  ".......ocaddddacooao....",
  ".......occdoodccoao.....",
  ".......occcoocccoo......",
  "........occoocco........",
  "........................",
  "........................",
  "........................",
] as const;

const CAT_PALETTE: Record<string, string> = {
  o: "#01011A",
  c: "#F6E8C8",
  d: "#B9A9C5",
  a: "#B46D60",
  e: "#37D1E3",
  p: "#0E0926",
  n: "#B95465",
};

function PixelCat() {
  const body: ReactNode[] = [];
  const eyes: ReactNode[] = [];

  CAT_MATRIX.forEach((row, y) => {
    row.split("").forEach((pixel, x) => {
      if (pixel === ".") return;
      const fill = CAT_PALETTE[pixel];
      if (!fill) return;
      const cell = (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />
      );
      if (pixel === "e" || pixel === "p") eyes.push(cell);
      else body.push(cell);
    });
  });

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-full w-full drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <g>{body}</g>
      <g className="cat-eyes">{eyes}</g>
    </svg>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function StudioCat({
  zenMode = false,
  anchorClassName = "absolute bottom-full left-4 sm:left-auto sm:right-8",
  bubbleAlign,
}: {
  zenMode?: boolean;
  anchorClassName?: string;
  bubbleAlign?: "start" | "end";
}) {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const reducedMotion = useReducedMotion();
  const interacted = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!interacted.current) setOpen(true);
    }, 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (zenMode) setOpen(false);
  }, [zenMode]);

  useEffect(() => {
    if (!open) {
      setTyped("");
      return;
    }

    if (reducedMotion) {
      setTyped(MESSAGE);
      return;
    }

    setTyped("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(MESSAGE.slice(0, index));
      if (index >= MESSAGE.length) window.clearInterval(timer);
    }, 18);

    return () => window.clearInterval(timer);
  }, [open, reducedMotion]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toggle = () => {
    interacted.current = true;
    setOpen((value) => !value);
  };

  return (
    <div
      className={cn(
        "studio-cat-anchor z-30 transition-opacity duration-300",
        anchorClassName,
        zenMode ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <div className="relative">
        <div
          id="studio-cat-bubble"
          aria-hidden={!open}
          className={cn(
            "relative mb-3 w-full max-w-[19rem] rounded-xl border border-[#F6E8C8]/15 bg-[#191740]/95 p-4 pr-9 text-left shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 ease-out sm:absolute sm:bottom-full sm:right-0 sm:mb-4 sm:w-[min(19rem,calc(100vw-2rem))]",
            bubbleAlign === "end"
              ? "left-auto right-0 origin-bottom-right"
              : bubbleAlign === "start"
                ? "left-0 origin-bottom-left"
                : "left-0 origin-bottom-left sm:left-auto sm:right-0 sm:origin-bottom-right",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-2 scale-95 opacity-0 max-sm:hidden"
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute -bottom-[7px] size-3.5 rotate-45 border-b border-r border-[#F6E8C8]/15 bg-[#191740]",
              bubbleAlign === "end"
                ? "left-auto right-6"
                : bubbleAlign === "start"
                  ? "left-6"
                  : "left-6 min-[375px]:left-8 sm:left-auto sm:right-7"
            )}
          />

          <button
            type="button"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            aria-label="Dismiss cat message"
            className="absolute right-1.5 top-1.5 grid size-8 place-items-center rounded-md text-[#B9A9C5]/90 transition-colors hover:bg-[#F6E8C8]/10 hover:text-[#F6E8C8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]"
          >
            <X className="size-3.5" />
          </button>

          <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#FCC27D]">
            Pixel · Studio cat
          </p>

          <p
            aria-hidden="true"
            className="mt-1.5 font-mono-code text-xs leading-relaxed text-[#F6E8C8]"
          >
            {typed}
            {!reducedMotion && typed.length < MESSAGE.length && (
              <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-[1px] animate-pulse bg-[#FCC27D]" />
            )}
          </p>

          <span className="sr-only">{MESSAGE}</span>
        </div>

        <span
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {open ? MESSAGE : ""}
        </span>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="studio-cat-bubble"
          aria-label={open ? "Hide Pixel's message" : "Show Pixel's message"}
          title="Pixel — click to talk"
          className="relative block rounded-xl transition-transform duration-200 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0926]"
        >
          <span className="studio-cat-sprite cat-idle block">
            <PixelCat />
          </span>
        </button>

        <div
          aria-hidden="true"
          className="pointer-events-none mx-auto mt-1 h-2 w-14 rounded-full bg-black/40 blur-[2px]"
        />
      </div>
    </div>
  );
}
