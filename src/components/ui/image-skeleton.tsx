"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ImageWithSkeletonProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  skeletonClassName?: string;
};

export function ImageWithSkeleton({
  className,
  wrapperClassName,
  skeletonClassName,
  onLoad,
  onError,
  alt = "",
  ...props
}: ImageWithSkeletonProps) {
  const imageRef = React.useRef<HTMLImageElement>(null);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loaded, setLoaded] = React.useState(false);
  const [showSkeleton, setShowSkeleton] = React.useState(false);

  React.useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if (image.complete && image.naturalWidth > 0) {
      setLoaded(true);
      return;
    }

    timerRef.current = setTimeout(() => setShowSkeleton(true), 120);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const settle = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setLoaded(true);
  };

  return (
    <span
      className={cn(
        "relative block h-full w-full overflow-hidden",
        wrapperClassName
      )}
    >
      <img
        ref={imageRef}
        alt={alt}
        onLoad={(event) => {
          settle();
          onLoad?.(event);
        }}
        onError={(event) => {
          settle();
          onError?.(event);
        }}
        className={cn(
          "h-full w-full object-cover object-center",
          className
        )}
        {...props}
      />
      <span
        aria-hidden="true"
        className={cn(
          "skeleton-shimmer pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out",
          !loaded && showSkeleton ? "opacity-100" : "opacity-0",
          skeletonClassName
        )}
      />
    </span>
  );
}
