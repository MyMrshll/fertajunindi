"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Terminal } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProjectItem {
  title: string;
  category: string;
  year?: string;
  src: string;
  alt: string;
  tags?: string[];
  link?: string;
  description?: string;
}

interface PortfolioGalleryProps {
  title?: string;
  subtitle?: string;
  archiveButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  projects?: ProjectItem[];
  className?: string;
  onProjectClick?: (project: ProjectItem, index: number) => void;
}

export const defaultProjects: ProjectItem[] = [
  {
    title: "MakalahKu",
    category: "Compiler",
    year: "2026",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    alt: "MakalahKu Code Architecture",
    tags: ["Next.js", "PostgreSQL", "FastAPI"],
    link: "https://makalahku.dev",
    description:
      "Automated academic paper formatter adhering to Indonesian university citation standards, with multi-model routing and Typst export.",
  },
  {
    title: "Seniora & BK",
    category: "Counseling",
    year: "2026",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    alt: "Seniora Analytics & Complaint Management",
    tags: ["TypeScript", "Turso", "Tailwind"],
    description:
      "Counseling and student complaint management system featuring tokenized action links, WhatsApp notification relays, and distributed SQLite replication.",
  },
  {
    title: "DesiPhonk",
    category: "Media Pipeline",
    year: "2026",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    alt: "DesiPhonk Audio Synthesizer",
    tags: ["Python", "FFmpeg", "SQLite"],
    description:
      "Scheduled media production system that coordinates audio generation, video clip stitching, and automated rendering with FFmpeg.",
  },
  {
    title: "NapasKita",
    category: "Air Telemetry",
    year: "2025",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    alt: "NapasKita Telemetry & Sensors",
    tags: ["Node 22", "MQTT", "TimescaleDB"],
    description:
      "Telemetry ingestion service collecting continuous PM2.5 and PM10 sensor data with real-time geospatial alerts.",
  },
  {
    title: "UTU Awards",
    category: "Judging App",
    year: "2026",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    alt: "UTU Awards Platform",
    tags: ["React 19", "Motion", "Tailwind"],
    description:
      "Competition evaluation platform featuring multi-stage rubric calculation, real-time score reconciliation, and audit logs.",
  },
  {
    title: "Agent Gateway",
    category: "Tool Gateway",
    year: "2026",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    alt: "Agent Protocol Gateway Server Infrastructure",
    tags: ["Go", "NDJSON", "Linux"],
    description:
      "NDJSON streaming proxy providing heartbeat keep-alives and headless agent tool execution across background worker processes.",
  },
];

export function PortfolioGallery({
  title = "SELECTED WORKS",
  subtitle,
  archiveButton = {
    text: "Contact Studio",
  },
  projects: customProjects,
  className = "",
  onProjectClick,
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number>(0);
  const projects = customProjects || defaultProjects;

  const dragX = useMotionValue(0);
  const dragSpring = useSpring(dragX, {
    mass: 0.15,
    stiffness: 180,
    damping: 26,
  });

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    dragStartXRef.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 1) {
      const deltaX = dragStartXRef.current - e.clientX;
      if (Math.abs(deltaX) > 6) {
        isDraggingRef.current = true;
      }
      dragX.set(dragX.get() + e.movementX * 1.5);
    }
  };

  const handlePointerUp = () => {
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 60);
  };

  const handleCardClick = (item: ProjectItem, index: number) => {
    if (isDraggingRef.current) return;
    if (onProjectClick) {
      onProjectClick(item, index);
    }
  };

  const handlePan = (direction: "left" | "right") => {
    const shift = direction === "left" ? 180 : -180;
    dragX.set(Math.max(-220, Math.min(220, dragX.get() + shift)));
  };

  return (
    <div
      aria-label={title}
      className={cn(
        "relative w-full page-content flex-1 flex flex-col justify-between py-2 sm:py-4 select-none",
        className
      )}
    >
      {/* Header Section */}
      <div className="relative z-10 text-center shrink-0">
        {subtitle && (
          <span className="text-xs font-medium text-muted-foreground block mb-1">
            {subtitle}
          </span>
        )}
        <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-1 pixel-text-shadow">
          {title}
        </h2>

        {/* Dynamic Project Meta Readout */}
        <div className="h-7 flex items-center justify-center text-xs text-muted-foreground">
          {hoveredIndex !== null ? (
            <motion.div
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/90 border border-border text-foreground"
            >
              <Terminal className="size-3 text-white shrink-0" />
              <span className="font-semibold text-foreground">{projects[hoveredIndex].title}</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="text-muted-foreground">{projects[hoveredIndex].category}</span>
            </motion.div>
          ) : (
            <span className="tracking-wide flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#10B981] shrink-0" />
              <span>{projects.length} Production Systems · 2025–2026</span>
            </span>
          )}
        </div>
      </div>

      {/* Desktop Aligned 6-Card Deck (Fits comfortably inside 1280-1440px without side clipping) */}
      <div
        className="hidden md:flex relative flex-1 items-center justify-center py-2 cursor-grab active:cursor-grabbing touch-none overflow-x-clip"
        style={{ perspective: "2200px" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <motion.div
          style={{ x: dragSpring }}
          className="flex items-stretch justify-center gap-3 lg:gap-3.5 xl:gap-4 py-3"
        >
          {projects.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

            const middle = (projects.length - 1) / 2;
            const dist = Math.abs(index - middle);

            const targetY = isHovered ? -14 : isOtherHovered ? 3 : 0;
            const targetRotateY = isHovered ? 0 : (index - middle) * -1.4;
            const targetScale = isHovered ? 1.03 : isOtherHovered ? 0.985 : 1;
            const targetOpacity = isOtherHovered ? 0.78 : 1;

            return (
              <div
                key={item.title}
                data-project-card="true"
                className="relative shrink-0 cursor-pointer"
                style={{
                  zIndex: isHovered ? 50 : 20 - dist,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(item, index)}
              >
                <motion.div
                  animate={{
                    y: targetY,
                    rotateY: targetRotateY,
                    scale: targetScale,
                    opacity: targetOpacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 24,
                    mass: 0.8,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="flex flex-col justify-between rounded-xl overflow-hidden bg-card border border-border shadow-lg transition-colors duration-200 w-[160px] lg:w-[176px] xl:w-[196px] h-[310px] xl:h-[326px] group hover:border-white/30 hover:shadow-2xl"
                >
                  {/* Fixed-Height Image Banner */}
                  <div className="relative h-[160px] xl:h-[172px] w-full overflow-hidden bg-muted/40 shrink-0">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                  {/* Uniform Card Content & Baseline */}
                  <div className="p-3.5 flex flex-col justify-between flex-1 gap-2 min-w-0">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-[#A1A1AA] font-medium tracking-wide uppercase truncate">
                          {item.category}
                        </span>
                        <span className="text-muted-foreground tabular-nums shrink-0">
                          {item.year}
                        </span>
                      </div>

                      <h4 className="font-pixel text-base xl:text-lg font-bold text-foreground tracking-tight truncate group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    {/* Single-Line Tech Badges (Uniform across all 6 cards) */}
                    <div className="flex items-center gap-1 overflow-hidden">
                      {item.tags?.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="shrink-0">
                          {tag}
                        </Badge>
                      ))}
                      {(item.tags?.length || 0) > 2 && (
                        <span className="text-xs text-muted-foreground shrink-0 pl-0.5">
                          +{item.tags!.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile Touch Carousel (Edge-to-Edge Full-Bleed Snap Cards) */}
      <div className="block md:hidden relative my-auto py-3">
        <div
          ref={mobileScrollRef}
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(el.scrollLeft / (265 + 14));
            setMobileActiveIndex(Math.max(0, Math.min(projects.length - 1, idx)));
          }}
          className="-mx-6 px-6 flex gap-3.5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
        >
          {projects.map((item, index) => (
            <div
              key={item.title}
              className="w-[265px] shrink-0 snap-center rounded-xl overflow-hidden bg-card border border-border shadow-xl cursor-pointer"
              onClick={() => handleCardClick(item, index)}
            >
              <div className="relative aspect-[16/10] w-full bg-muted/40">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-3.5 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-[#A1A1AA] font-medium uppercase truncate">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground tabular-nums shrink-0">{item.year}</span>
                </div>
                <h4 className="font-pixel text-base font-bold text-foreground truncate">
                  {item.title}
                </h4>
                {item.tags && (
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    {item.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {projects.map((p, i) => (
            <span
              key={p.title}
              className={cn(
                "size-1.5 rounded-full transition-all duration-300",
                i === mobileActiveIndex ? "bg-white w-4" : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>

      {/* Bottom Action Row */}
      <div className="flex items-center justify-between shrink-0 pt-2 pb-2">
        <div className="hidden md:flex items-center gap-1.5">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => handlePan("left")}
            aria-label="Pan deck left"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => handlePan("right")}
            aria-label="Pan deck right"
          >
            <ChevronRight />
          </Button>
        </div>

        <div className="mx-auto md:mx-0">
          <Button size="lg" onClick={archiveButton.onClick}>
            <span>{archiveButton.text}</span>
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <div className="hidden md:block w-16" />
      </div>
    </div>
  );
}

export default PortfolioGallery;
