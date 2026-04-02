"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  slideClassName?: string;
  options?: any;
  showArrows?: boolean;
}

export function Carousel({
  children,
  className,
  slideClassName,
  options,
  showArrows = true,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    ...options,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4">
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <div
                key={index}
                className={cn("flex-none pl-4", slideClassName)}
              >
                {child}
              </div>
            ))
          ) : (
            <div className={cn("flex-none pl-4", slideClassName)}>
              {children}
            </div>
          )}
        </div>
      </div>

      {showArrows && (
        <div className="flex items-center justify-end gap-3 mt-8 lg:absolute lg:-bottom-20 lg:right-0 mt-8">
          <button
            onClick={scrollPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/70 bg-white/72 text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-white disabled:pointer-events-none disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/70 bg-white/72 text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-white disabled:pointer-events-none disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
