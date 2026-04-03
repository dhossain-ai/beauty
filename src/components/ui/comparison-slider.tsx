"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { MediaFrame } from "./media-frame";
import type { ImageTone } from "@/lib/types";

interface ComparisonSliderProps {
  beforeTitle: string;
  afterTitle: string;
  beforeTone?: ImageTone;
  afterTone?: ImageTone;
  beforeImage?: {
    src: string;
    alt: string;
    position?: string;
  };
  afterImage?: {
    src: string;
    alt: string;
    position?: string;
  };
  className?: string;
}

export function ComparisonSlider({
  beforeTitle,
  afterTitle,
  beforeTone = "taupe",
  afterTone = "champagne",
  beforeImage,
  afterImage,
  className,
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [handleMove, isDragging]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [handleMove, isDragging]);

  const stopDragging = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", stopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [handleMouseMove, handleTouchMove, isDragging, stopDragging]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative select-none overflow-hidden rounded-[2.5rem] bg-shell-soft",
        className
      )}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      <MediaFrame
        aspect="landscape"
        tone={afterTone}
        title={afterTitle}
        subtitle=""
        image={afterImage}
        className="h-full w-full rounded-none"
        overlayClassName="opacity-0 md:opacity-100 right-4 left-auto text-right"
      />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 min-w-full">
          <MediaFrame
            aspect="landscape"
            tone={beforeTone}
            title={beforeTitle}
            subtitle=""
            image={beforeImage}
            className="h-full w-full rounded-none"
          />
        </div>
      </div>

      <div
        className="absolute bottom-0 top-0 z-20 w-1 -ml-[0.5px] cursor-ew-resize bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
          <svg className="h-4 w-4 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
            <path d="M9 18l6-6-6-6" opacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
