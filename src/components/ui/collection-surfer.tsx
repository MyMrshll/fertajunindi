"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  MotionValue,
  AnimatePresence,
} from "framer-motion";
import { X, ExternalLink, Terminal, Layers } from "lucide-react";

export interface CollectionItem {
  id: number;
  image: string;
  title: string;
  category?: string;
  year?: string;
  description?: string;
  tags?: string[];
}

export type CollectionSurferVariant = "magnetic" | "uplift" | "simple";

export const DEFAULT_COLLECTION_ITEMS: CollectionItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    title: "COMPILER CORE",
    category: "MakalahKu Architecture",
    year: "2026",
    description: "Academic document compiler with citation standard parsing, typst rendering, and Next.js / FastAPI services.",
    tags: ["Next.js 15", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    title: "SENIORA ANALYTICS",
    category: "Counseling Hub",
    year: "2026",
    description: "Counseling telemetry and complaint dispatch with tokenized links, WhatsApp bot bridge, and Turso remote SQLite sync.",
    tags: ["TypeScript", "Turso SQLite", "PicoClaw", "Tailwind"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    title: "DESIPHONK SYNTH",
    category: "Media Pipeline",
    year: "2026",
    description: "Media generation engine coordinating audio synthesis, track composition, and FFmpeg video assembly.",
    tags: ["Python 3.12", "FFmpeg", "SQLite", "Kie.ai"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    title: "NAPASKITA GRID",
    category: "Air Quality IoT",
    year: "2025",
    description: "Air telemetry collector handling continuous MQTT sensor streams, geospatial summaries, and threshold alerts.",
    tags: ["Node 22", "MQTT / WebSockets", "TimescaleDB"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    title: "UTU AWARDS PLATFORM",
    category: "Evaluation Engine",
    year: "2026",
    description: "Competition judging system with multi-stage scoring criteria, rubric tabulation, and audit logs.",
    tags: ["React 19", "Framer Motion", "Tailwind v4"],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    title: "AGENT RUNTIME",
    category: "Tool Gateway",
    year: "2026",
    description: "Agent orchestrator runtime with NDJSON heartbeat streaming and automated command execution.",
    tags: ["Go", "NDJSON Proxy", "Microservices"],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    title: "CYBER TELEMETRY",
    category: "Security & Monitoring",
    year: "2026",
    description: "Security auditing dashboard, rate-limiting gatekeeper, and automated server health monitoring.",
    tags: ["Redis", "API Gateway", "Linux eBPF"],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
    title: "DISTRIBUTED CLUSTER",
    category: "Linux VPS Deployment",
    year: "2026",
    description: "Cloud infrastructure automation with systemd daemon watchdogs and zero-downtime container deployments.",
    tags: ["Docker Swarm", "Caddy", "Bash Automation"],
  },
];

interface CollectionSurferProps {
  items?: CollectionItem[];
  variant?: CollectionSurferVariant;
  title?: string;
  subtitle?: string;
  onItemClick?: (item: CollectionItem) => void;
}

export function CollectionSurfer({
  items = DEFAULT_COLLECTION_ITEMS,
  variant = "magnetic",
  title = "PROJECT ARCHIVE",
  subtitle,
  onItemClick,
}: CollectionSurferProps) {
  const triplicatedItems = [...items, ...items, ...items];
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  // Responsive stage geometry: tighter fan on small screens
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const update = () => setCompact(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Drag interaction state (mouse/pointer drag only, zero scroll listener)
  const dragDistancePerItem = 400;
  const loopDistance = items.length * dragDistancePerItem;

  const initialProgress = dragDistancePerItem * (compact ? 2.0 : 2.2);
  const dragOffset = useMotionValue(initialProgress);
  useEffect(() => {
    dragOffset.set(initialProgress);
  }, [initialProgress, dragOffset]);
  const prefersReducedMotion = useReducedMotion();
  const dragSpring = useSpring(dragOffset, {
    mass: 0.15,
    stiffness: 140,
    damping: 25,
  });
  const progressSource = prefersReducedMotion ? dragOffset : dragSpring;

  // Track drag state & distance to differentiate between click and drag
  const isPointerDownRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const lastPointerXRef = useRef(0);

  // Pure drag loop value
  const combinedProgress = useTransform(progressSource, (dragVal) => {
    const raw = Number(dragVal) || 0;
    return ((raw % loopDistance) + loopDistance) % loopDistance;
  });

  // 3D Isometric Step vectors tuned for landscape cards
  const stepX = compact ? 172 : 322;
  const stepY = compact ? -56 : -64;
  const stepZ = compact ? -120 : -250;

  const x = useTransform(
    combinedProgress,
    [0, loopDistance],
    [0, -items.length * stepX]
  );
  const y = useTransform(
    combinedProgress,
    [0, loopDistance],
    [0, -items.length * stepY]
  );
  const z = useTransform(
    combinedProgress,
    [0, loopDistance],
    [0, items.length * stepZ]
  );

  // Mouse position in viewport coordinates for interactive magnetic scaling
  const mouseX = useMotionValue(-10000);
  const mouseY = useMotionValue(-10000);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (variant === "simple" || isPointerDownRef.current) return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    if (variant === "simple") return;
    mouseX.set(-10000);
    mouseY.set(-10000);
    isPointerDownRef.current = false;
  };

  // Mouse / pointer drag handlers on the 3D scene viewport
  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    isDraggingRef.current = false;
    dragStartXRef.current = e.clientX;
    lastPointerXRef.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current && e.buttons !== 1) return;
    const totalDelta = dragStartXRef.current - e.clientX;
    if (Math.abs(totalDelta) > 6) {
      isDraggingRef.current = true;
    }
    const delta = e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;
    dragOffset.set(dragOffset.get() + delta * -2.2);
  };

  const handlePointerUp = () => {
    isPointerDownRef.current = false;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  const handleCardClick = (item: CollectionItem) => {
    if (isDraggingRef.current) return;
    if (onItemClick) {
      onItemClick(item);
    } else {
      setSelectedItem(item);
    }
  };

  const handleSceneKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      const dir = e.key === "ArrowLeft" ? -1 : 1;
      dragOffset.set(dragOffset.get() + dir * dragDistancePerItem);
    }
  };

  return (
    <div
      id="about-archive"
      className="relative w-full h-[calc(100dvh-4.5rem)] min-h-[560px] max-h-[900px] flex flex-col justify-between overflow-hidden select-none bg-transparent pt-20 sm:pt-24 pb-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Visual Header */}
      <div className="relative z-30 w-full page-content pointer-events-none shrink-0">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {subtitle && (
              <span className="font-mono-code text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                {subtitle}
              </span>
            )}
            <h3 className="font-pixel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F6E8C8] pixel-text-shadow leading-tight">
              {title}
              <span className="text-[#FCC27D] text-lg sm:text-2xl ml-2 font-mono-code font-normal">
                ({items.length})
              </span>
            </h3>
          </div>
          <div className="font-mono-code text-xs text-[#F6E8C8]/90 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCC27D]" />
            <span>Drag &amp; Click Cards to Inspect</span>
          </div>
        </div>
      </div>

      {/* 3D Scene Viewport with Mouse Drag Support */}
      <div
        className="relative flex-1 w-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3]/50 focus-visible:ring-inset rounded-2xl"
        role="group"
        aria-label="Project archive. Drag with the mouse or use the left and right arrow keys to browse. Press Enter on a card to inspect it."
        tabIndex={0}
        style={{
          perspective: "1800px",
          perspectiveOrigin: "50% 42%",
        }}
        onKeyDown={handleSceneKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <motion.div
          className="relative w-0 h-0 pointer-events-auto"
          style={{
            x,
            y,
            z,
            transformStyle: "preserve-3d",
          }}
        >
          {triplicatedItems.map((item, i) => (
            <Card
              key={`${item.id}-${i}`}
              item={item}
              i={i - items.length}
              totalOriginal={items.length}
              stepX={stepX}
              stepY={stepY}
              stepZ={stepZ}
              mouseX={mouseX}
              mouseY={mouseY}
              variant={variant}
              reduceMotion={Boolean(prefersReducedMotion)}
              onCardClick={() => handleCardClick(item)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal Inspector for Clicked Card */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            style={{ position: "fixed", left: 0, top: 0, width: "100vw", height: "100vh" }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#191740] border border-[#F6E8C8]/20 p-6 sm:p-8 shadow-2xl text-[#F6E8C8]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F6E8C8]/10 hover:bg-[#2A2C6A]/50 flex items-center justify-center text-[#F6E8C8] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-2 mb-3 font-mono-code text-xs text-[#FCC27D]">
                <Terminal className="w-4 h-4" />
                <span className="uppercase font-semibold tracking-wider">
                  {selectedItem.category}
                </span>
                <span className="text-white/30">•</span>
                <span>{selectedItem.year || "2026"}</span>
              </div>

              <h3 className="font-pixel text-2xl sm:text-3xl font-bold text-[#F6E8C8] mb-4">
                {selectedItem.title}
              </h3>

              {/* Card Image Banner */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-5 border border-[#F6E8C8]/10">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191740]/90 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Description */}
              <p className="font-mono-code text-xs sm:text-sm text-[#F6E8C8]/90 leading-relaxed mb-5">
                {selectedItem.description ||
                  "Fullstack production project with clean data boundaries and reliable runtime behavior."}
              </p>

              {/* Tags */}
              {selectedItem.tags && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F6E8C8]/10">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-code text-[11px] px-3 py-1 rounded-full bg-[#2A2C6A]/30 border border-[#F6E8C8]/10 text-[#FCC27D]/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Card({
  item,
  i,
  totalOriginal,
  stepX,
  stepY,
  stepZ,
  mouseX,
  mouseY,
  variant,
  reduceMotion,
  onCardClick,
}: {
  item: CollectionItem;
  i: number;
  totalOriginal: number;
  stepX: number;
  stepY: number;
  stepZ: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  variant: CollectionSurferVariant;
  reduceMotion: boolean;
  onCardClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Distance from mouse to center of card (recomputed only on pointer move)
  const distance = useTransform([mouseX, mouseY], ([mx, my]) => {
    if (!ref.current || variant === "simple") return 400;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return Math.sqrt(Math.pow(Number(mx) - centerX, 2) + Math.pow(Number(my) - centerY, 2));
  });

  const targetScale = useTransform(distance, [0, 360], reduceMotion ? [1, 1] : [1.18, 1]);
  const springScale = useSpring(targetScale, {
    mass: 0.4,
    stiffness: 240,
    damping: 22,
  });

  const targetUplift = useTransform(distance, [0, 360], reduceMotion ? [0, 0] : [-35, 0]);
  const springUplift = useSpring(targetUplift, {
    mass: 0.4,
    stiffness: 240,
    damping: 22,
  });

  const transform = useTransform([springScale, springUplift], ([s, u]) => {
    const scaleVal = Number(s);
    const upliftVal = Number(u);

    // Depth loops with the same period as the card set so wrapping stays seamless
    const depth = ((i % totalOriginal) + totalOriginal) % totalOriginal;

    const baseX = (i - 0.55) * stepX;
    const baseY = (i + 1.9) * stepY + upliftVal;
    const baseZ = depth * stepZ;

    return `translate3d(${baseX}px, ${baseY}px, ${baseZ}px) rotateY(-36deg) scale(${scaleVal})`;
  });

  const displayNum = String((((i % totalOriginal) + totalOriginal) % totalOriginal) + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      onClick={onCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCardClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Inspect project ${item.title}`}
      className="absolute w-[320px] sm:w-[400px] md:w-[470px] aspect-[16/10] rounded-2xl bg-[#191740]/95 border border-[#F6E8C8]/20 overflow-hidden shadow-2xl transition-colors duration-300 group hover:border-[#FCC27D] hover:shadow-[0_0_25px_rgba(185,84,101,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37D1E3] cursor-pointer"
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Index Number Badge */}
      <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-black/65 border border-[#F6E8C8]/10 text-[#F6E8C8] font-mono-code text-xs font-semibold">
        #{displayNum}
      </div>

      {/* Year Badge */}
      {item.year && (
        <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-[#34182D]/90 border border-[#B95465]/35 text-[#FCC27D] font-mono-code text-[11px]">
          {item.year}
        </div>
      )}

      {/* Landscape Image with subtle zoom on card hover */}
      <div className="relative w-full h-full brightness-80 group-hover:brightness-105 transition-all duration-300">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center pointer-events-none select-none"
          loading="lazy"
        />
      </div>

      {/* Bottom Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0926] via-[#0E0926]/55 to-transparent pointer-events-none" />

      {/* Card Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 font-mono-code z-10">
        {item.category && (
          <span className="text-[11px] sm:text-xs text-[#FCC27D] block uppercase tracking-wider mb-1 font-semibold">
            {item.category}
          </span>
        )}
        <h4 className="font-pixel text-lg sm:text-2xl font-bold text-[#F6E8C8] group-hover:text-[#FCC27D] transition-colors truncate">
          {item.title}
        </h4>
      </div>
    </motion.div>
  );
}

export default CollectionSurfer;
