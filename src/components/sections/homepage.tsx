import Link from "next/link";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { ComparisonSlider } from "@/components/ui/comparison-slider";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { blogPosts } from "@/data/blog-posts";
import { galleryItems } from "@/data/gallery";
import { beautyMedia } from "@/data/media";
import { services } from "@/data/services";
import { philosophyPillars, studioInfo, trustMetrics } from "@/data/site";
import { specialists } from "@/data/specialists";
import { testimonials } from "@/data/testimonials";

const featuredServices = services.slice(0, 4);
const featuredSpecialists = specialists.slice(0, 3);
const featuredJournalPost = blogPosts[0]!;
const secondaryJournalPosts = blogPosts.slice(1, 3);
const resultPreviewItem = galleryItems[2]!;
const resultHighlights = [
  { label: "Texture", value: "Smoother, brighter finish" },
  { label: "Definition", value: "Brows and lashes stay soft" },
  { label: "Maintenance", value: "Built for real routines" },
];

export function Homepage() {
  return (
    <>
      <section className="pb-14 pt-8 sm:pt-10 lg:pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div className="space-y-8 lg:pr-4">
              <Badge>Vilnius studio • By appointment</Badge>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">
                  Soft luxury beauty rituals
                </p>
                <h1 className="text-balance font-serif text-[3.15rem] leading-[0.92] text-ink-strong sm:text-[4.4rem] lg:text-[5.8rem]">
                  Calm beauty, composed with more intention.
                </h1>
                <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
                  {studioInfo.shortName} is built for women who want refined
                  treatments, a quieter appointment rhythm, and polished results
                  that still feel natural in daylight.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Book a consultation
                </Button>
                <Button href="/services" size="lg" variant="secondary">
                  Explore signature services
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {trustMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.5rem] border border-border/70 bg-white/72 px-5 py-4 shadow-[0_16px_36px_rgba(86,64,54,0.08)] transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <p className="font-serif text-3xl leading-none text-ink-strong">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="surface-panel rounded-[1.75rem] px-5 py-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Studio promise
                </p>
                <p className="mt-2 text-sm leading-7 text-ink">
                  One-to-one appointments, tailored consultation, and beauty
                  work designed to settle into real routines instead of chasing
                  louder trends.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-6 hidden rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(232,210,203,0.38),rgba(232,210,203,0)_68%)] blur-3xl lg:block" />

              <MediaFrame
                aspect="hero"
                title="Editorial calm, salon warmth"
                subtitle="Soft morning light, warm textures, and a quiet consultation-first atmosphere shape every appointment."
                tone="champagne"
                image={beautyMedia.heroSpa}
                priority
                className="relative min-h-[520px] rounded-[2.75rem] sm:min-h-[620px]"
                overlayClassName="max-w-[18rem] sm:max-w-[20rem]"
              />

              <div className="surface-panel absolute bottom-5 left-5 max-w-[14rem] rounded-[1.5rem] px-4 py-4 sm:bottom-7 sm:left-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Reviewed and tailored
                </p>
                <p className="mt-2 font-serif text-2xl leading-none text-ink-strong">
                  Calm from arrival to finish
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="section-space overflow-hidden pt-0">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <Badge variant="outline">Signature services</Badge>
                <h2 className="text-balance font-serif text-[2.45rem] leading-[0.96] text-ink-strong sm:text-[3.05rem] lg:text-[3.8rem]">
                  Signature treatments should read in the cards, not in extra
                  explainer blocks.
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  Start with glow, definition, event prep, and skin reset.
                </p>
              </div>

              <Button href="/services" variant="secondary">
                View full treatment menu
              </Button>
            </div>

            <Carousel slideClassName="w-[88vw] sm:w-[21rem] lg:w-[22.5rem]">
              {featuredServices.map((service) => (
                <article
                  key={service.slug}
                  className="surface-card group flex h-full flex-col rounded-[2rem] p-4 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-5"
                >
                  <MediaFrame
                    aspect="landscape"
                    title={service.title}
                    subtitle={service.highlight}
                    label={service.category}
                    tone={service.imageTone}
                    image={service.image}
                    className="rounded-[1.6rem]"
                    overlayClassName="max-w-[12rem] bg-white/58 p-3 sm:max-w-[13rem] sm:p-4"
                  />
                  <div className="flex flex-1 flex-col gap-4 px-2 pb-2 pt-5">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-muted">
                        {service.duration}
                      </span>
                      <span className="font-semibold text-ink-strong">
                        {service.priceFrom}
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-muted">
                      {service.excerpt}
                    </p>
                    <div className="mt-auto pt-2">
                      <Button
                        href={`/services/${service.slug}`}
                        size="md"
                        variant="secondary"
                      >
                        View details
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      <section className="section-space-tight">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <MediaFrame
              aspect="landscape"
              title="A quieter appointment rhythm"
              subtitle="Warm consultation, tactile care, and enough polish to feel finished without becoming theatrical."
              tone="pearl"
              image={beautyMedia.productFlatlay}
              className="min-h-[320px] sm:min-h-[420px]"
              overlayClassName="max-w-[16rem] bg-white/56 p-4"
            />

            <div className="space-y-6">
              <div className="max-w-xl space-y-4">
                <Badge variant="outline">Studio approach</Badge>
                <h2 className="text-balance font-serif text-[2.3rem] leading-[0.98] text-ink-strong sm:text-[2.95rem] lg:text-[3.55rem]">
                  Fewer words, better balance, clearer atmosphere.
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  The studio experience is warm, consult-led, and intentionally
                  unhurried from the first conversation through aftercare.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {philosophyPillars.slice(0, 2).map((pillar) => (
                  <div
                    key={pillar}
                    className="rounded-[1.6rem] border border-border/70 bg-white/62 p-4"
                  >
                    <p className="text-sm leading-7 text-ink">{pillar}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  Consultation-first care, tailored to real maintenance habits
                </p>
                <Button href="/pricing" variant="secondary">
                  View pricing
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="specialists" className="section-space">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <Badge variant="outline">Studio specialists</Badge>
                <h2 className="text-balance font-serif text-[2.35rem] leading-[0.98] text-ink-strong sm:text-[3rem] lg:text-[3.7rem]">
                  Distinct specialties, lighter presentation, stronger portrait
                  presence.
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  Each specialist is introduced with just enough context to make
                  booking feel clear and personal.
                </p>
              </div>

              <Button href="/specialists" variant="secondary">
                Meet all specialists
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredSpecialists.map((specialist) => (
                <article key={specialist.slug} className="group">
                  <MediaFrame
                    aspect="portrait"
                    title={specialist.name}
                    subtitle=""
                    label={specialist.specialties[0] ?? "Resident specialist"}
                    tone={specialist.imageTone}
                    image={specialist.image}
                    className="rounded-[2rem]"
                    overlayClassName="max-w-[10rem] border-white/55 bg-white/48 p-3 sm:max-w-[11rem] sm:p-3.5"
                  />

                  <div className="space-y-4 px-1 pb-1 pt-4">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                        {specialist.experience}
                      </p>
                      <p className="text-sm leading-6 text-muted">
                        {specialist.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {specialist.specialties.slice(0, 2).map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full border border-border/70 bg-white/72 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div>
                      <Button
                        href={`/specialists/${specialist.slug}`}
                        variant="ghost"
                      >
                        View profile
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight">
        <Container>
          <div className="overflow-hidden rounded-[3rem] bg-[linear-gradient(180deg,#4a3832_0%,#261d1a_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/68">
                    Results preview
                  </p>
                  <h2 className="text-balance font-serif text-[2.55rem] leading-[0.94] text-white sm:text-[3.25rem] lg:text-[4rem]">
                    Results stay soft, but the difference still reads clearly.
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                    Smoother texture, calmer skin, and softly structured detail
                    remain the strongest proof point on the page.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {resultHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.4rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/58">
                        {item.label}
                      </p>
                      <p className="mt-2 font-serif text-[1.5rem] leading-[1] text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative h-[23rem] w-full overflow-hidden rounded-[2.5rem] bg-shell-soft sm:h-[29rem]">
                  <ComparisonSlider
                    beforeTitle="Before Treatment"
                    afterTitle="After 6 Weeks"
                    beforeTone="mocha"
                    afterTone="blush"
                    beforeImage={beautyMedia.detailMaskProcess}
                    afterImage={beautyMedia.portraitSofia}
                    className="h-full w-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <MediaFrame
                  aspect={resultPreviewItem.aspect}
                  title={resultPreviewItem.title}
                  subtitle={resultPreviewItem.service}
                  tone={resultPreviewItem.imageTone}
                  image={resultPreviewItem.image}
                  className="min-h-[280px]"
                  overlayClassName="max-w-[12rem] bg-white/52 p-3.5"
                />

                <div className="rounded-[2rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/58">
                    Treatment focus
                  </p>
                  <div className="mt-4 space-y-4 text-sm text-white/74">
                    <div className="flex justify-between gap-4 border-b border-white/12 pb-3">
                      <span>Target</span>
                      <span className="text-right text-white">
                        Skin texture and hydration
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/12 pb-3">
                      <span>Protocol</span>
                      <span className="text-right text-white">
                        Cellular Renewal Peel
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Timeline</span>
                      <span className="text-right text-white">
                        3 sessions over 6 weeks
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight overflow-hidden">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div className="space-y-4">
              <Badge variant="outline">Client words</Badge>
              <h2 className="text-balance font-serif text-[2.2rem] leading-[0.98] text-ink-strong sm:text-[2.8rem] lg:text-[3.35rem]">
                Tighter proof, lighter section.
              </h2>
              <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Calm, polished service is the most repeated theme in client
                feedback.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                4.9/5 average rating • 900+ premium appointments delivered
              </p>
            </div>

            <Carousel slideClassName="w-[88vw] sm:w-[22rem] lg:w-[23rem]">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      <section id="journal" className="section-space-tight">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
            <Link
              href={`/journal/${featuredJournalPost.slug}`}
              className="group block"
            >
              <article className="surface-card overflow-hidden rounded-[2.5rem] p-4 sm:p-5">
                <MediaFrame
                  aspect="landscape"
                  title={featuredJournalPost.title}
                  subtitle={featuredJournalPost.excerpt}
                  label={featuredJournalPost.category}
                  tone={featuredJournalPost.imageTone}
                  image={featuredJournalPost.image}
                  className="min-h-[320px] rounded-[2rem]"
                  overlayClassName="max-w-[15rem] bg-white/56 p-3.5"
                />
                <div className="space-y-4 px-2 pb-2 pt-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                    <span>{featuredJournalPost.publishedAt}</span>
                    <span className="h-1 w-1 rounded-full bg-border-strong" />
                    <span>{featuredJournalPost.readTime}</span>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink">
                    Read featured article
                  </p>
                </div>
              </article>
            </Link>

            <div className="space-y-5">
              <div className="max-w-xl space-y-4">
                <Badge variant="outline">Beauty journal</Badge>
                <h2 className="text-balance font-serif text-[2.2rem] leading-[0.98] text-ink-strong sm:text-[2.8rem] lg:text-[3.3rem]">
                  A lighter editorial preview with less explanation.
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  Practical beauty guidance should feel calm and easy to scan.
                </p>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/58">
                {secondaryJournalPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/journal/${post.slug}`}
                    className="group block px-5 py-4 transition-colors duration-300 hover:bg-white/76"
                  >
                    <div
                      className={
                        index !== secondaryJournalPosts.length - 1
                          ? "border-b border-border/70 pb-4"
                          : ""
                      }
                    >
                      <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
                        <span>{post.category}</span>
                        <span className="h-1 w-1 rounded-full bg-border-strong" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 font-serif text-[1.85rem] leading-[0.98] text-ink-strong transition-colors duration-300 group-hover:text-ink">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              <div>
                <Button href="/journal" variant="secondary">
                  Read the journal
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        id="contact"
        eyebrow="Ready to book"
        title="Choose a treatment path that feels calm from the first click."
        description="Start with a consultation if you want guidance, browse the treatment menu if you already know the result you want, or use the journal to understand the studio philosophy first."
        primaryHref="/contact"
        primaryLabel="Book a consultation"
        secondaryHref="/services"
        secondaryLabel="Browse treatments"
      />
    </>
  );
}
