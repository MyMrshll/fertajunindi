"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type ProjectItem, defaultProjects } from "@/components/ui/portfolio-gallery";

export interface HotspotCoordinates {
  xPct: number;
  yPct: number;
  wPct: number;
  hPct: number;
}

export const LAPTOP_COORDS: HotspotCoordinates = {
  xPct: 0.510,
  yPct: 0.400,
  wPct: 0.175,
  hPct: 0.185,
};

export const MUG_COORDS: HotspotCoordinates = {
  xPct: 0.658,
  yPct: 0.608,
  wPct: 0.054,
  hPct: 0.060,
};

export const DEVELOPER_COORDS: HotspotCoordinates = {
  xPct: 0.230,
  yPct: 0.320,
  wPct: 0.230,
  hPct: 0.420,
};

export interface WorkspaceHotspotProps {
  /**
   * The container element bounding the object-cover media (usually the Hero section or video wrapper)
   */
  containerRef: React.RefObject<HTMLElement | null>;
  /**
   * Single simple word label (defaults to "PROJECTS")
   */
  label?: string;
  /**
   * Callback invoked when the hotspot is clicked (e.g. navigate to Projects or Contact slide)
   */
  onClick?: () => void;
  /**
   * Hotspot coordinates on the original illustration. Defaults to LAPTOP_COORDS.
   */
  coords?: HotspotCoordinates;
  /**
   * Optional project item for accessibility aria-label or fallback
   */
  project?: ProjectItem;
  /**
   * Optional project selector callback
   */
  onSelectProject?: (project: ProjectItem) => void;
  /**
   * Additional custom CSS classes for the hotspot wrapper
   */
  className?: string;
}

const BASE_IMAGE_ASPECT = 1116 / 836; // ~1.3349 (4:3 aspect ratio)

export function WorkspaceHotspot({
  containerRef,
  label = "PROJECTS",
  onClick,
  coords = LAPTOP_COORDS,
  project = defaultProjects[0],
  onSelectProject,
  className = "",
}: WorkspaceHotspotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const [boxStyle, setBoxStyle] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  }>({ left: 0, top: 0, width: 0, height: 0 });

  const hotspotRef = useRef<HTMLDivElement>(null);

  // Responsive calculation matching CSS object-cover object-center
  const updateRect = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerW = container.clientWidth;
    const containerH = container.clientHeight;
    if (containerW === 0 || containerH === 0) return;

    const { xPct, yPct, wPct, hPct } = coords;
    const imageAspect = BASE_IMAGE_ASPECT;
    const containerAspect = containerW / containerH;

    let renderedW: number;
    let renderedH: number;
    let offsetX: number;
    let offsetY: number;

    if (containerAspect > imageAspect) {
      // Container is wider than 4:3 -> video width is 100%, height is scaled up, cropped top/bottom
      renderedW = containerW;
      renderedH = containerW / imageAspect;
      offsetX = 0;
      offsetY = (containerH - renderedH) / 2;
    } else {
      // Container is taller than 4:3 -> video height is 100%, width is scaled up, cropped left/right
      renderedH = containerH;
      renderedW = containerH * imageAspect;
      offsetY = 0;
      offsetX = (containerW - renderedW) / 2;
    }

    setBoxStyle({
      left: Math.round(offsetX + xPct * renderedW),
      top: Math.round(offsetY + yPct * renderedH),
      width: Math.round(wPct * renderedW),
      height: Math.round(hPct * renderedH),
    });
  }, [containerRef]);

  useEffect(() => {
    updateRect();

    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      updateRect();
    });
    observer.observe(container);

    window.addEventListener("resize", updateRect);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateRect);
    };
  }, [containerRef, updateRect]);

  // Click handler: directly triggers navigation or custom action
  const handleClick = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (onClick) {
      onClick();
    } else if (onSelectProject) {
      onSelectProject(project);
    }
  };

  // Mobile tap interaction: first tap activates discovery state, second tap triggers action
  const handleTouch = (e: React.TouchEvent) => {
    if (!isMobileActive) {
      e.preventDefault();
      setIsMobileActive(true);
    } else {
      handleClick();
    }
  };

  // Close mobile tooltip when tapping elsewhere
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent | TouchEvent) => {
      if (hotspotRef.current && !hotspotRef.current.contains(e.target as Node)) {
        setIsMobileActive(false);
      }
    };

    document.addEventListener("pointerdown", handleGlobalClick);
    return () => {
      document.removeEventListener("pointerdown", handleGlobalClick);
    };
  }, []);

  const isActive = isHovered || isFocused || isMobileActive;

  // Don't render until coordinates are calculated
  if (boxStyle.width === 0 || boxStyle.height === 0) {
    return null;
  }

  return (
    <div
      ref={hotspotRef}
      role="button"
      tabIndex={0}
      aria-label={`Interactive workstation: Navigate to ${label}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e);
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onTouchStart={handleTouch}
      style={{
        position: "absolute",
        left: `${boxStyle.left}px`,
        top: `${boxStyle.top}px`,
        width: `${boxStyle.width}px`,
        height: `${boxStyle.height}px`,
      }}
      className={`z-20 cursor-pointer select-none transition-all duration-300 outline-none group ${className}`}
    >
      {/* Visual Hotspot Box — 100% Invisible in Default State */}
      <div
        className={`w-full h-full relative rounded-lg transition-all duration-300 ${
          isActive
            ? "scale-[1.03] bg-[#37D1E3]/[0.05] shadow-[0_0_26px_rgba(55,209,227,0.4),inset_0_0_16px_rgba(55,209,227,0.18)]"
            : "scale-100 bg-transparent shadow-none"
        }`}
      >
        {/* Retro Indie Pixel-Art Corner Brackets [ ] in Warm Amber / Sunset Gold */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Top-Left Bracket */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#37D1E3] shadow-[0_0_8px_#FCC27D]" />
          {/* Top-Right Bracket */}
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#37D1E3] shadow-[0_0_8px_#FCC27D]" />
          {/* Bottom-Left Bracket */}
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#37D1E3] shadow-[0_0_8px_#FCC27D]" />
          {/* Bottom-Right Bracket */}
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#37D1E3] shadow-[0_0_8px_#FCC27D]" />
        </div>

        {/* Floating Discovery Tooltip: 1 Single Word with Warm Sunset Styling */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 360, damping: 25 }}
              className="absolute -top-11 sm:-top-12 left-1/2 -translate-x-1/2 pointer-events-auto flex flex-col items-center whitespace-nowrap z-30"
            >
              {/* Single Word Warm Badge */}
              <div
                onClick={handleClick}
                className="flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#191740]/95 border border-[#37D1E3]/80 text-[#F6E8C8] font-pixel text-xs sm:text-sm font-bold tracking-widest shadow-[0_0_20px_rgba(55,209,227,0.45),0_6px_16px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FCC27D] animate-pulse shadow-[0_0_8px_#FCC27D]" />
                <span>{label}</span>
                <span className="font-mono-code text-[11px] text-[#FCC27D]">↗</span>
              </div>

              {/* Warm Down-Pointing Arrow */}
              <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#37D1E3] mt-0.5 opacity-90 shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default WorkspaceHotspot;
