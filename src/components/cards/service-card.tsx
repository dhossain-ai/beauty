"use client";

import Image from "next/image";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
import type { Service } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { locale } = useSiteLanguage();

  return (
    <article className="surface-card group flex h-full flex-col rounded-[2rem] p-4 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
        {service.image ? (
          <Image
            src={service.image.src}
            alt={service.image.alt || service.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            style={{ objectPosition: service.image.position ?? "center" }}
          />
        ) : (
          <div className="absolute inset-0 bg-stone-100 transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
        )}
        
        <div className="absolute inset-x-3 bottom-3 rounded-[1.25rem] bg-white/75 p-3.5 shadow-sm backdrop-blur-md">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-stone-500">
            {service.category}
          </p>
          {service.highlight && (
            <p className="mt-1.5 text-sm leading-5 text-stone-600">
              {service.highlight}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 px-2 pb-2 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge variant="outline">{service.category}</Badge>
          <span className="text-sm font-medium text-muted">{service.duration}</span>
        </div>
        <div className="space-y-3">
          <h3 className="card-title font-serif text-ink-strong transition-colors duration-300 group-hover:text-ink">
            {service.title}
          </h3>
          <p className="text-sm leading-7 text-muted">{service.excerpt}</p>
        </div>
        <div className="mt-auto flex flex-col gap-4 border-t border-border/70 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">
              {locale === "lt" ? "Kaina" : "Price"}
            </p>
            <p className="mt-1 text-lg font-semibold text-ink-strong">
              {service.priceFrom}
            </p>
          </div>
          <Button
            href={`/services/${service.slug}`}
            size="md"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            {locale === "lt" ? "Plačiau" : "Details"}
          </Button>
        </div>
      </div>
    </article>
  );
}
