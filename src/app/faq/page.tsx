import { faqItems } from "@/data/faq";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "FAQ | Maison de Lueur",
  description: "Common questions about our rituals, studio policies, and skin philosophy.",
};

export default function FaqPage() {
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Client Care</Badge>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[5.5rem]">
              Commonly asked.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Everything you need to know about preparing for your visit and maintaining your results.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="mx-auto max-w-4xl space-y-16">
            {categories.map((category) => (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-4">
                  <h2 className="font-serif text-3xl text-ink-strong">{category}</h2>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <div className="grid gap-6">
                  {faqItems
                    .filter((item) => item.category === category)
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="surface-card rounded-3xl p-8 transition-shadow hover:shadow-md"
                      >
                        <h3 className="text-lg font-semibold text-ink-strong">
                          {item.question}
                        </h3>
                        <p className="mt-4 leading-8 text-muted">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center text-center">
            <div className="max-w-xl">
              <h3 className="font-serif text-2xl text-ink-strong">Still have questions?</h3>
              <p className="mt-4 text-muted">
                If you couldn't find the answer you were looking for, our concierge is here to help with any specific inquiries about your skin or our studio.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Experience the studio."
        description="Connect with our specialists for a tailored beauty plan that respects your individual needs."
      />
    </>
  );
}
