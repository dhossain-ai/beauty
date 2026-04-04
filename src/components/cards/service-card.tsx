import type { Service } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/ui/media-frame";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="surface-card group flex h-full flex-col rounded-[2rem] p-4 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-5">
      <MediaFrame
        aspect="landscape"
        title={service.title}
        subtitle={service.highlight}
        label={service.category}
        tone={service.imageTone}
        image={service.image}
        className="rounded-[1.6rem]"
      />
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
              Investment
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
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
