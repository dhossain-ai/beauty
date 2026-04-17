import { philosophyPillars, studioInfo } from "@/data/site";
import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageTitle, siteName } from "@/lib/seo";

export const metadata = {
  title: pageTitle("About"),
  description: `Discover the studio philosophy, calm environment, and soft luxury approach behind ${siteName}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Studio story"
        title="Intention behind the polish."
        description={`${studioInfo.name} was created as an alternative to rushed, trend-led appointments. Treatments here are designed to feel restorative, warm, and carefully considered from the first consultation onward.`}
      />

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-[2.5rem] sm:min-h-[400px]">
              <MediaFrame
                aspect="portrait"
                title="Salon interior"
                subtitle="Warm, layered, and intentionally calm."
                label="Studio atmosphere"
                tone="taupe"
                className="h-full w-full"
              />
            </div>

            <div className="space-y-8 pl-0 lg:pl-10">
              <SectionHeading
                eyebrow="Our approach"
                title="Soft luxury from arrival to finish."
                description="We prioritize subtle, camera-ready results that still look incredibly natural up close. Our treatments are built around your individual features, never a template."
              />

              <div className="grid gap-3">
                {philosophyPillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="surface-card flex items-start gap-3 rounded-[1.5rem] px-5 py-4"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-accent-strong" />
                    <p className="text-sm leading-7 text-ink">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-shell-soft">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow="The environment"
              title="Designed for calm."
              description="Every element of our space is chosen to slow down your day and elevate your routine. A quiet atmosphere, signature scents, and private treatment rooms ensure focus remains entirely on you."
              align="center"
            />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <MediaFrame
              aspect="landscape"
              title="Treatment room"
              subtitle="Private, quiet, and light-filled."
              label="Studio detail"
              tone="blush"
              className="min-h-[260px] sm:h-[300px]"
            />
            <MediaFrame
              aspect="landscape"
              title="Consultation area"
              subtitle="Designed for unhurried planning."
              label="Studio detail"
              tone="champagne"
              className="min-h-[260px] sm:h-[300px]"
            />
          </div>
        </Container>
      </section>

      <CtaBlock
        id="contact"
        eyebrow="Visit us"
        title="Experience the studio."
        description="We look forward to welcoming you."
        primaryHref="/contact"
        primaryLabel="Plan your visit"
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
    </>
  );
}
