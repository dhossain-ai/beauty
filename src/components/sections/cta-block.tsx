import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface CtaBlockProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CtaBlock({
  id,
  eyebrow,
  title,
  description,
  primaryHref = "/services",
  primaryLabel = "Explore signature services",
  secondaryHref = "/contact",
  secondaryLabel = "Start a consultation",
}: CtaBlockProps) {
  return (
    <section id={id} className="section-space">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-border/70 bg-[linear-gradient(135deg,rgba(255,252,248,0.94)_0%,rgba(241,226,214,0.9)_52%,rgba(255,248,243,0.96)_100%)] px-6 py-10 shadow-[0_24px_60px_rgba(86,64,54,0.1)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(232,210,203,0.38),rgba(232,210,203,0))]" />
          <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(215,185,166,0.28),rgba(215,185,166,0))]" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="relative space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ink/68">
                {eyebrow}
              </p>
              <h2 className="text-balance font-serif text-4xl leading-none text-ink-strong sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {description}
              </p>
            </div>

            <div className="relative rounded-[2rem] border border-white/78 bg-white/74 p-4 shadow-[0_22px_48px_rgba(86,64,54,0.1)] backdrop-blur-md sm:p-5 lg:min-w-[18rem] lg:justify-self-end">
              <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col">
                <Button href={primaryHref} size="lg" fullWidth>
                  {primaryLabel}
                </Button>
                <Button
                  href={secondaryHref}
                  size="lg"
                  variant="secondary"
                  fullWidth
                >
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
