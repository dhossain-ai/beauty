import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="surface-card flex h-full flex-col rounded-[2rem] p-5 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
          {testimonial.service}
        </p>
        <p
          className="rounded-full border border-border/70 bg-white/78 px-3 py-1.5 text-sm text-accent-strong shadow-[0_8px_18px_rgba(69,54,48,0.06)]"
          aria-label={`${testimonial.rating} stars`}
        >
          {"★".repeat(testimonial.rating)}
        </p>
      </div>
      <p className="mt-5 font-serif text-[1.7rem] leading-[1.08] text-ink-strong sm:text-[2.05rem] lg:text-[2.3rem]">
        “{testimonial.quote}”
      </p>
      <div className="mt-auto border-t border-border/70 pt-5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted">
          {testimonial.result}
        </p>
        <p className="mt-2 text-base font-medium text-ink">{testimonial.name}</p>
      </div>
    </article>
  );
}
