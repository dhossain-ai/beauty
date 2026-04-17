import { specialists } from "@/data/specialists";
import { SpecialistCard } from "@/components/cards/specialist-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { pageTitle, siteName } from "@/lib/seo";

export const metadata = {
  title: pageTitle("Specialists"),
  description: `Meet the ${siteName} specialists behind the studio's calm, polished beauty rituals.`,
};

export default function SpecialistsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our team"
        title="Studio specialists"
        description="Meet the resident artists shaping the Lauryta experience, each focused on natural-looking results and an unhurried client rhythm."
      />

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {specialists.map((specialist) => (
              <SpecialistCard key={specialist.slug} specialist={specialist} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Find your perfect match."
        description="Not sure who to book with? Contact our studio concierge to be paired with the best specialist for your needs."
        primaryHref="/contact"
        primaryLabel="Speak to the studio"
        secondaryHref="/services"
        secondaryLabel="Explore treatments"
      />
    </>
  );
}
