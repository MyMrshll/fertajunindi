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
  o: "#2a1608",
  c: "#F5EEDB",
  d: "#D8CFB8",
  a: "#f59e0b",
  e: "#FFC400",
  p: "#1a1206",
  n: "#b45309",
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

export function StudioCat({ zenMode }: { zenMode: boolean }) {
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
        "studio-cat-anchor absolute bottom-full left-4 sm:left-auto sm:right-8 z-30 transition-opacity duration-300",
        zenMode ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <div className="relative">
        <div
          id="studio-cat-bubble"
          aria-hidden={!open}
          className={cn(
            "absolute bottom-full left-0 sm:left-auto sm:right-0 mb-4 w-[min(19rem,calc(100vw-2rem))] origin-bottom-left sm:origin-bottom-right rounded-xl border border-white/15 bg-[#0b0d13]/95 p-4 pr-9 text-left shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 ease-out",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-2 scale-95 opacity-0"
          )}
        >
          <span
            aria-hidden="true"
            className="absolute -bottom-[7px] left-6 min-[375px]:left-8 sm:left-auto sm:right-7 size-3.5 rotate-45 border-b border-r border-white/15 bg-[#0b0d13]"
          />

          <button
            type="button"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            aria-label="Dismiss cat message"
            className="absolute right-2 top-2 rounded-md p-1 text-[#F5EEDB]/50 transition-colors hover:bg-white/10 hover:text-[#F5EEDB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400]"
          >
            <X className="size-3.5" />
          </button>

          <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#FFC400]">
            Pixel · Studio cat
          </p>

          <p
            aria-hidden="true"
            className="mt-1.5 font-mono-code text-xs leading-relaxed text-[#F5EEDB]"
          >
            {typed}
            {!reducedMotion && typed.length < MESSAGE.length && (
              <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-[1px] animate-pulse bg-[#FFC400]" />
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
          className="relative block rounded-xl transition-transform duration-200 hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090e]"
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
