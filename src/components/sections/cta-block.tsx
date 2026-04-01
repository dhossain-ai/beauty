import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface CtaBlockProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
}

export function CtaBlock({
  id,
  eyebrow,
  title,
  description,
}: CtaBlockProps) {
  return (
    <section id={id} className="section-space">
      <Container>
        <div className="surface-panel overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
                {eyebrow}
              </p>
              <h2 className="text-balance font-serif text-4xl leading-none text-ink-strong sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href="#services" size="lg">
                Explore signature services
              </Button>
              <Button href="#contact" size="lg" variant="secondary">
                Start a consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
