import { notFound } from "next/navigation";
import { specialists } from "@/data/specialists";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";

export function generateStaticParams() {
  return specialists.map((specialist) => ({ slug: specialist.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialist = specialists.find((item) => item.slug === slug);

  if (!specialist) {
    return { title: "Not Found" };
  }

  return {
    title: `${specialist.name} | Maison de Lueur`,
    description: specialist.role,
  };
}

export default async function SpecialistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialist = specialists.find((item) => item.slug === slug);

  if (!specialist) {
    notFound();
  }

  const signatureTreatments = specialist.signatureServices
    ? services.filter((item) => specialist.signatureServices?.includes(item.slug))
    : [];

  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative h-full min-h-[460px] w-full overflow-hidden rounded-[2.5rem]">
              <MediaFrame
                aspect="portrait"
                title={specialist.name}
                subtitle="Resident specialist"
                label="Artist portrait"
                tone={specialist.imageTone}
                className="h-full w-full"
              />
            </div>

            <div className="space-y-6 lg:pl-8">
              <Badge>{specialist.role}</Badge>
              <h1 className="text-balance font-serif text-[3.25rem] leading-[0.95] text-ink-strong sm:text-[4.6rem]">
                {specialist.name}
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-strong">
                {specialist.experience}
              </p>

              <div className="surface-panel rounded-[1.7rem] p-6">
                <p className="font-serif text-xl italic text-ink">
                  &ldquo;{specialist.quote}&rdquo;
                </p>
              </div>

              {specialist.bio ? (
                <p className="mt-8 text-lg leading-relaxed text-muted lg:text-xl">
                  {specialist.bio}
                </p>
              ) : null}

              <div className="pt-8">
                <Button href="/contact" size="lg" className="px-10">
                  Request {specialist.name.split(" ")[0]}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {specialist.specialties && specialist.specialties.length > 0 ? (
        <section className="section-space pt-0">
          <Container>
            <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Core Competencies
              </h3>
              <div className="mt-5 flex flex-wrap gap-4">
                {specialist.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-border/70 bg-white/60 px-5 py-2.5 text-sm font-medium text-ink shadow-[0_4px_12px_rgba(69,54,48,0.03)]"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {signatureTreatments.length > 0 ? (
        <section className="section-space">
          <Container>
            <SectionHeading
              eyebrow="Expertise"
              title="Signature Treatments"
              description="The rituals and protocols this specialist executes with exceptional precision."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {signatureTreatments.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {specialist.recentWorkImages && specialist.recentWorkImages.length > 0 ? (
        <section className="section-space bg-shell-soft/70">
          <Container>
            <SectionHeading
              eyebrow="Results"
              title="Recent studio work"
              description="A preview of subtle shaping, restored glow, and the kind of believable refinement this specialist is known for."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {specialist.recentWorkImages.map((image, index) => (
                <MediaFrame
                  key={`${image.title}-${index}`}
                  aspect={image.aspect}
                  tone={image.tone}
                  title={image.title}
                  subtitle="Portfolio match"
                  label="Specialist portfolio"
                  className="w-full"
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title={`Book time with ${specialist.name.split(" ")[0]}.`}
        description="Whether you know exactly what you need or prefer to start with a consultation, our studio is ready to build your plan."
        primaryHref="/contact"
        primaryLabel="Request consultation"
        secondaryHref="/specialists"
        secondaryLabel="Meet the full team"
      />
    </>
  );
}
