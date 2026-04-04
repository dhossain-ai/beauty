"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback } from "react";
import { cn } from "@/lib/cn";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  slideClassName?: string;
  options?: EmblaOptionsType;
  showArrows?: boolean;
}

export function Carousel({
  children,
  className,
  slideClassName,
  options,
  showArrows = true,
}: CarouselProps) {
  const slideItems = Children.toArray(children);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    ...options,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className={cn("group relative min-w-0", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-3 sm:-ml-4">
          {slideItems.length > 1 ? (
            slideItems.map((child, index) => (
              <div key={index} className={cn("flex-none pl-3 sm:pl-4", slideClassName)}>
                {child}
              </div>
            ))
          ) : (
            <div className={cn("flex-none pl-3 sm:pl-4", slideClassName)}>
              {children}
            </div>
          )}
        </div>
      </div>

      {showArrows && slideItems.length > 1 && (
        <div className="mt-6 flex items-center justify-center sm:mt-8 sm:justify-end lg:absolute lg:-bottom-24 lg:right-0 lg:mt-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/78 p-1 shadow-[0_18px_38px_rgba(69,54,48,0.12)] backdrop-blur-md sm:p-1.5">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-border-strong/70 bg-white text-ink-strong shadow-[0_10px_22px_rgba(69,54,48,0.08)] transition-[transform,background-color,box-shadow,color] duration-300 hover:-translate-y-0.5 hover:bg-shell-soft hover:text-ink hover:shadow-[0_16px_30px_rgba(69,54,48,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong/65 focus-visible:ring-offset-2 focus-visible:ring-offset-shell-soft disabled:pointer-events-none disabled:opacity-50 sm:h-12 sm:w-12"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-border-strong/70 bg-white text-ink-strong shadow-[0_10px_22px_rgba(69,54,48,0.08)] transition-[transform,background-color,box-shadow,color] duration-300 hover:-translate-y-0.5 hover:bg-shell-soft hover:text-ink hover:shadow-[0_16px_30px_rgba(69,54,48,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong/65 focus-visible:ring-offset-2 focus-visible:ring-offset-shell-soft disabled:pointer-events-none disabled:opacity-50 sm:h-12 sm:w-12"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
