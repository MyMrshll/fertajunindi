import React from "react";

export type MedalVariant = "gold" | "silver" | "bronze" | "trophy" | "certified";

interface PixelMedalProps {
  variant?: MedalVariant;
  className?: string;
  size?: number;
  alt?: string;
}

export function PixelMedal({
  variant = "gold",
  className = "size-8 shrink-0",
  alt = "Pixel Medal",
}: PixelMedalProps) {
  let src = "/images/icons/pixel-medal-gold.svg";
  if (variant === "bronze") {
    src = "/images/icons/pixel-medal-bronze.svg";
  } else if (variant === "silver") {
    src = "/images/icons/pixel-medal-silver.svg";
  } else if (variant === "trophy") {
    src = "/images/icons/pixel-trophy.svg";
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`inline-block select-none image-rendering-pixelated ${className}`}
      style={{ imageRendering: "pixelated" }}
      loading="lazy"
    />
  );
}
