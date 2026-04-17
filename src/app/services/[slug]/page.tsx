import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { specialists } from "@/data/specialists";
import { ServiceCard } from "@/components/cards/service-card";
import { SpecialistCard } from "@/components/cards/specialist-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageTitle } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Not Found" };
  }

  return {
    title: pageTitle(service.title),
    description: service.excerpt,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedSpecialists = service.recommendedSpecialists
    ? specialists.filter((item) => service.recommendedSpecialists?.includes(item.slug))
    : [];

  const otherServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <Badge>{service.category}</Badge>
              <h1 className="page-title text-balance font-serif text-ink-strong">
                {service.title}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted">
                {service.excerpt}
              </p>

              <div className="space-y-4">
                <Button href="/contact" size="lg">
                  Request Booking
                </Button>
                <div className="grid max-w-lg gap-3 sm:grid-cols-2">
                  <div className="surface-panel rounded-full px-4 py-3 text-sm font-semibold text-ink">
                    <span className="text-muted">Duration</span>
                    <span className="ml-2 text-ink-strong">{service.duration}</span>
                  </div>
                  <div className="surface-panel rounded-full px-4 py-3 text-sm font-semibold text-ink">
                    <span className="text-muted">Investment</span>
                    <span className="ml-2 text-ink-strong">{service.priceFrom}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-[2.5rem] sm:min-h-[420px]">
              <MediaFrame
                aspect="portrait"
                title={service.title}
                subtitle="Signature ritual"
                label="Treatment portrait"
                tone={service.imageTone}
                image={service.image}
                className="h-full w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8 lg:pr-6">
              <h2 className="font-serif text-3xl text-ink-strong sm:text-4xl">
                Treatment Overview
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                {service.overview || service.excerpt}
              </p>

              {service.benefits && service.benefits.length > 0 ? (
                <div className="mt-10">
                  <h3 className="font-serif text-2xl text-ink-strong">Key Benefits</h3>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="surface-card flex items-start gap-4 rounded-[1.6rem] p-4 text-sm leading-6 text-ink"
                      >
                        <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-accent-strong" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-4">
              <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8 xl:sticky xl:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  The Promise
                </p>
                <p className="mt-4 font-serif text-2xl leading-tight text-ink-strong">
                  {service.highlight}
                </p>
                <hr className="my-8 border-border/70" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  Recommended Frequency
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Every 4 to 6 weeks depending on goals, barrier condition, and the
                  level of corrective work in your plan.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {service.process && service.process.length > 0 ? (
        <section className="section-space bg-shell-soft/70">
          <Container>
            <SectionHeading
              eyebrow="The Protocol"
              title="Step-by-step refinement."
              description="Every phase of this treatment is purposefully designed to build upon the last, maximizing both efficacy and relaxation."
            />

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="surface-card group relative rounded-[2.2rem] p-8 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink font-serif text-xl text-white shadow-lg">
                    {index + 1}
                  </span>
                  <h4 className="mt-2 font-serif text-2xl text-ink-strong">
                    {step.title}
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {relatedSpecialists.length > 0 ? (
        <section className="section-space">
          <Container>
            <SectionHeading
              eyebrow="Expert matching"
              title="Certified Specialists"
              description="These studio resident artists have completed advanced certification in this exact protocol."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSpecialists.map((specialist) => (
                <SpecialistCard key={specialist.slug} specialist={specialist} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {otherServices.length > 0 ? (
        <section className="section-space pt-0">
          <Container>
            <SectionHeading
              eyebrow="Continue exploring"
              title="More rituals in the studio menu."
              description="If you are building a longer-term treatment cadence, these complementary services are often paired alongside this protocol."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Begin your journey."
        description={`Secure your appointment for the ${service.title} and experience the difference of unhurried, custom-tailored care.`}
        primaryHref="/contact"
        primaryLabel="Request appointment"
        secondaryHref="/pricing"
        secondaryLabel="View pricing"
      />
    </>
  );
}
