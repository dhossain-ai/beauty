import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { pageTitle, siteName } from "@/lib/seo";

export const metadata = {
  title: pageTitle("Services"),
  description: `Explore ${siteName} signature services, from skin rituals to brow and lash refinement.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Menu of services"
        title="Signature rituals"
        description="A treatment menu built around soft refinement, realistic maintenance, and a calm premium experience from consultation to finish."
      />

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Ready to begin your journey?"
        description="Schedule a studio visit or a complimentary consultation to discuss your ideal treatment plan."
        primaryHref="/pricing"
        primaryLabel="View pricing"
        secondaryHref="/contact"
        secondaryLabel="Book a consultation"
      />
    </>
  );
}
