import { faqItems } from "@/data/faq";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { pageTitle, siteName } from "@/lib/seo";

export const metadata = {
  title: pageTitle("FAQ"),
  description: `Read common questions about appointments, treatment prep, aftercare, and the ${siteName} studio experience.`,
};

export default function FaqPage() {
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  return (
    <>
      <PageIntro
        eyebrow="Client care"
        title="Commonly asked."
        description="Everything you need to know about booking, treatment prep, aftercare, and how the studio works before your first visit."
      />

      <section className="section-space pt-0">
        <Container>
          <div className="mx-auto max-w-4xl space-y-16">
            {categories.map((category) => (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <h2 className="font-serif text-3xl text-ink-strong">{category}</h2>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <div className="grid gap-6">
                  {faqItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div
                        key={item.question}
                        className="surface-card rounded-3xl p-6 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-8"
                      >
                        <h3 className="text-lg font-semibold text-ink-strong">
                          {item.question}
                        </h3>
                        <p className="mt-4 leading-8 text-muted">{item.answer}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center text-center">
            <div className="max-w-xl">
              <h3 className="font-serif text-2xl text-ink-strong">
                Still have questions?
              </h3>
              <p className="mt-4 text-muted">
                If you could not find the answer you were looking for, our concierge
                is here to help with specific questions about your skin or our studio.
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
        primaryHref="/contact"
        primaryLabel="Ask a question"
        secondaryHref="/services"
        secondaryLabel="See treatment menu"
      />
    </>
  );
}
