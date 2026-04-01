import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="surface-card flex h-full flex-col rounded-[2rem] p-6 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
          {testimonial.service}
        </p>
        <p className="text-sm text-accent-strong" aria-label={`${testimonial.rating} stars`}>
          {"★".repeat(testimonial.rating)}
        </p>
      </div>
      <p className="mt-6 font-serif text-3xl leading-tight text-ink-strong">
        “{testimonial.quote}”
      </p>
      <div className="mt-8 border-t border-border/70 pt-5">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
          {testimonial.result}
        </p>
        <p className="mt-2 text-base font-medium text-ink">{testimonial.name}</p>
      </div>
    </article>
  );
}
