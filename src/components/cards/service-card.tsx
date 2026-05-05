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
      <div className="relative aspect-[1.18/1] overflow-hidden rounded-[1.6rem]">
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
      </div>
      
      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Badge variant="outline" className="border-stone-200 bg-white/70 text-stone-500">
            {service.category}
          </Badge>
          <span className="text-sm font-medium text-stone-500">{service.duration}</span>
        </div>

        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="card-title font-serif text-[1.45rem] leading-[1.1] text-stone-950 transition-colors duration-300 group-hover:text-stone-700 sm:text-2xl">
            {service.title}
          </h3>
          <p className="shrink-0 text-sm font-semibold text-stone-950 mt-1">
            {service.priceFrom}
          </p>
        </div>

        <p className="mb-6 text-sm leading-7 text-stone-600">
          {service.excerpt}
        </p>

        <div className="mt-auto pt-2">
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
