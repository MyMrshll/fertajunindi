"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Images,
  LayoutGrid,
  X,
  ZoomIn,
} from "lucide-react";
import {
  COLLECTION_LABELS,
  GALLERY_ITEMS,
  getGalleryStats,
  type GalleryAspect,
  type GalleryCollection,
  type GalleryItem,
} from "@/lib/gallery";
import { INSTAGRAM_URL } from "@/lib/projects";

const ASPECT_CLASS: Record<GalleryAspect, string> = {
  portrait: "aspect-[3/4]",
  poster: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  photo: "aspect-[3/2]",
  wide: "aspect-[2/1]",
  banner: "aspect-[3/1]",
};

const ASPECT_WEIGHT: Record<GalleryAspect, number> = {
  portrait: 4 / 3,
  poster: 5 / 4,
  square: 1,
  landscape: 3 / 4,
  photo: 2 / 3,
  wide: 1 / 2,
  banner: 1 / 3,
};

const CARD_TEXT_WEIGHT = 0.34;

function buildColumns(items: GalleryItem[], count: number): GalleryItem[][] {
  const columns: GalleryItem[][] = Array.from({ length: count }, () => []);
  const totals = new Array<number>(count).fill(0);
  for (const item of items) {
    let target = 0;
    for (let index = 1; index < count; index += 1) {
      if (totals[index] < totals[target]) target = index;
    }
    columns[target].push(item);
    totals[target] += ASPECT_WEIGHT[item.aspect] + CARD_TEXT_WEIGHT;
  }
  return columns;
}

type Filter = "all" | GalleryCollection;

const FILTERS: Array<{ key: Filter; label: string }> = [
  { key: "all", label: "All" },
  { key: "awards", label: "Awards" },
  { key: "craft", label: "Craft" },
  { key: "portrait", label: "Portrait" },
];

export function GalleryClient() {
  const allItems = GALLERY_ITEMS;
  const stats = useMemo(() => getGalleryStats(allItems), [allItems]);
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === "all"
        ? allItems
        : allItems.filter((item) => item.collection === filter),
    [allItems, filter],
  );
  const columns = useMemo(
    () => buildColumns(items, Math.max(1, Math.min(3, items.length))),
    [items],
  );

  const active: GalleryItem | null =
    openIndex === null ? null : items[openIndex] ?? null;

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (direction: number) => {
      setOpenIndex((current) => {
        if (current === null || items.length === 0) return current;
        return (current + direction + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, step]);

  const counts: Record<Filter, number> = {
    all: stats.total,
    awards: stats.byCollection.awards,
    craft: stats.byCollection.craft,
    portrait: stats.byCollection.portrait,
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#A1A1AA]">
            Visual archive
          </span>
          <span className="text-white/20">•</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono-code text-[10px] text-[#E4E4E7]">
            <Images className="size-3.5" />
            {stats.total} frames
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono-code text-[10px] text-[#E4E4E7]">
            <LayoutGrid className="size-3.5" />
            {stats.collections} collections
          </span>
        </div>

        <h1 className="font-pixel text-3xl font-bold tracking-tight text-[#F4F4F5] pixel-text-shadow sm:text-4xl lg:text-5xl">
          GALLERY
        </h1>
        <p className="max-w-2xl font-mono-code text-sm leading-relaxed text-[#A1A1AA]">
          Frames from the studio: award nights, visual experiments, and the
          portraits behind the profile. Click any frame to open it full size.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
        {FILTERS.map(({ key, label }) => {
          const activeTab = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`rounded-full px-3.5 py-1.5 font-mono-code text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                activeTab
                  ? "border border-white/30 bg-[#27272A] font-bold text-white"
                  : "border border-transparent text-[#A1A1AA] hover:border-white/10 hover:text-white"
              }`}
            >
              {label} ({counts[key]})
            </button>
          );
        })}
      </div>

      {items.length === 0 ? (
        <section className="dash-panel p-6 font-mono-code text-sm text-[#A1A1AA]">
          No frames in this collection yet.
        </section>
      ) : (
        <div
          className="columns-1 gap-4 sm:columns-2 xl:grid xl:items-start xl:gap-4"
          style={{
            gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
          }}
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="contents xl:flex xl:flex-col xl:gap-4">
              {column.map((item) => {
                const index = items.findIndex((entry) => entry.id === item.id);
                return (
                  <article
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${item.title}`}
                    onClick={() => setOpenIndex(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setOpenIndex(index);
                      }
                    }}
                    className="group mb-4 block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-[#121215] text-left transition-colors hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 xl:mb-0"
                  >
              <div
                className={`relative w-full overflow-hidden bg-[#09090B] ${ASPECT_CLASS[item.aspect]}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-2.5 top-2.5 grid size-7 place-items-center rounded-full border border-white/15 bg-black/60 text-white/75 backdrop-blur-sm transition-colors group-hover:border-white/40 group-hover:text-white">
                  <ZoomIn className="size-3.5" />
                </span>
                <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#09090B]/85 px-3 py-1 font-mono-code text-[11px] text-white">
                    <ZoomIn className="size-3.5" />
                    View frame
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#A1A1AA]">
                    {COLLECTION_LABELS[item.collection]}
                  </span>
                  {item.year && (
                    <span className="font-mono-code text-[10px] text-[#A1A1AA]">
                      {item.year}
                    </span>
                  )}
                </div>
                <h2 className="mt-1.5 font-pixel text-base font-bold leading-snug text-[#F4F4F5]">
                  {item.title}
                </h2>
                <p className="mt-1 line-clamp-3 font-mono-code text-xs leading-relaxed text-[#A1A1AA]">
                  {item.caption}
                </p>
              </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      )}

      <section className="dash-panel mt-8 flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
        <div>
          <p className="dash-eyebrow">Visual log</p>
          <h2 className="mt-0.5 font-pixel text-base font-bold text-[#F4F4F5]">
            More frames land on Instagram first.
          </h2>
          <p className="mt-0.5 font-mono-code text-xs text-[#A1A1AA]">
            Studio cuts, award nights, and the occasional late-night build.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono-code text-xs text-[#F4F4F5] transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            View achievements
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#27272A] px-5 py-2 font-mono-code text-xs font-bold text-white transition-colors hover:bg-[#3F3F46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#121215] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="min-w-0">
                <p className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-[#A1A1AA]">
                  {COLLECTION_LABELS[active.collection]}
                  {active.year ? ` · ${active.year}` : ""}
                </p>
                <h2 className="truncate font-pixel text-base font-bold text-[#F4F4F5]">
                  {active.title}
                </h2>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="font-mono-code text-[11px] text-[#A1A1AA]">
                  {String((openIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close gallery dialog"
                  autoFocus
                  className="rounded-lg p-1.5 text-[#A1A1AA] transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black">
              <img
                src={active.src}
                alt={active.title}
                className="max-h-[62vh] w-auto max-w-full object-contain"
              />

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous frame"
                className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#121215]/90 text-[#F4F4F5] transition-colors hover:border-white/40 hover:bg-[#27272A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next frame"
                className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#121215]/90 text-[#F4F4F5] transition-colors hover:border-white/40 hover:bg-[#27272A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 px-4 py-3 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-3xl font-mono-code text-xs leading-relaxed text-[#A1A1AA]">
                {active.caption}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono-code text-[10px] text-[#A1A1AA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
