import { blogPosts } from "@/data/blog-posts";
import { galleryItems } from "@/data/gallery";
import { pricingSnippets } from "@/data/pricing";
import { services } from "@/data/services";
import { philosophyPillars, studioInfo, trustMetrics } from "@/data/site";
import { specialists } from "@/data/specialists";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";
import { BlogCard } from "@/components/cards/blog-card";
import { ServiceCard } from "@/components/cards/service-card";
import { SpecialistCard } from "@/components/cards/specialist-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
const galleryLayout = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-8",
];

import { Carousel } from "@/components/ui/carousel";
import { ComparisonSlider } from "@/components/ui/comparison-slider";

export function Homepage() {
  return (
    <>
      <section className="pb-12 pt-8 sm:pt-10 lg:pb-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
            <div className="space-y-8">
              <Badge>Vilnius studio • By appointment</Badge>
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">
                  Soft luxury beauty rituals
                </p>
                <h1 className="text-balance font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[6.2rem]">
                  Calm beauty, polished with intention.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-muted sm:text-xl">
                  {studioInfo.shortName} is designed for women who want refined
                  treatments, a quiet premium atmosphere, and natural-looking
                  results that still feel modern.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="#contact" size="lg">
                  Start with a consultation
                </Button>
                <Button href="#services" size="lg" variant="secondary">
                  Explore signature services
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {trustMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="surface-panel rounded-[1.5rem] px-5 py-4 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
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
            </div>

            <div className="relative">
              <MediaFrame
                aspect="hero"
                title="Editorial calm, salon warmth"
                subtitle="Tasteful placeholder visuals hold the composition now and can be replaced with real photography later without changing the layout system."
                tone="champagne"
                className="min-h-[460px] rounded-[2.5rem] sm:min-h-[560px]"
                overlayClassName="max-w-[18rem]"
              />

              <div className="surface-panel absolute bottom-4 left-4 max-w-[15rem] rounded-[1.5rem] px-4 py-4 sm:bottom-6 sm:left-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Signature pairing
                </p>
                <p className="mt-2 font-serif text-2xl leading-none text-ink-strong">
                  Skin + brow refinement
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Our most requested pre-event combination for a polished,
                  camera-ready finish.
                </p>
              </div>

              <div className="surface-panel absolute right-4 top-4 hidden rounded-full px-4 py-3 text-sm text-ink sm:flex sm:items-center sm:gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent-strong" />
                Reviewed, tailored, and calm from arrival to finish
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight pt-0">
        <Container>
          <div className="surface-panel rounded-[2.25rem] px-6 py-6 sm:px-8 sm:py-7">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
                  Trusted studio experience
                </p>
                <p className="mt-3 max-w-xl font-serif text-3xl leading-tight text-ink-strong sm:text-4xl">
                  A premium local beauty concept that already feels credible on
                  mobile, tablet, and desktop.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-border/70 bg-white/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                    Review snapshot
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    “The entire visit feels beautifully considered.”
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-white/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    Event prep, low-maintenance polish, and women who want soft
                    definition.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-white/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                    Studio promise
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    Elegant treatment design without noisy trends or overdone
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="section-space overflow-hidden">
        <Container>
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Signature services"
              title="A service system built for calm, modern beauty results."
              description="Explore the treatments clients return to for luminous skin, softly structured brows, and low-maintenance polish that still feels elevated."
              action={
                <Button href="/services" variant="secondary">
                  Explore all services
                </Button>
              }
            />

            <Carousel slideClassName="w-[85vw] sm:w-[22rem] lg:w-[24rem]">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      <section className="section-space-tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-7">
              <SectionHeading
                eyebrow="About the philosophy"
                title="Soft luxury means tailored beauty with restraint, rhythm, and warmth."
                description="The studio language stays warm and editorial without slipping into trend noise: layered neutrals, touch-friendly surfaces, and refined typography that reads clearly on every screen."
              />

              <div className="grid gap-3">
                {philosophyPillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="surface-panel flex items-start gap-3 rounded-[1.5rem] px-4 py-4"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent-strong" />
                    <p className="text-sm leading-7 text-ink">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <MediaFrame
                aspect="portrait"
                title="Quiet luxury atmosphere"
                subtitle="A premium environment that feels restorative rather than theatrical."
                tone="blush"
                className="h-full min-h-[420px]"
              />
              <div className="grid gap-4">
                <MediaFrame
                  aspect="square"
                  title="Tailored plans"
                  subtitle="Structured consultation points support future CMS and booking upgrades."
                  tone="taupe"
                />
                <div className="surface-card rounded-[2rem] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                    Pricing preview
                  </p>
                  <div className="mt-4 space-y-4">
                    {pricingSnippets.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start justify-between gap-4 border-b border-border/70 pb-4 last:border-b-0 last:pb-0"
                      >
                        <div>
                          <p className="font-medium text-ink">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-muted">
                            {item.note}
                          </p>
                        </div>
                        <p className="font-semibold text-ink-strong">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="specialists" className="section-space">
        <Container>
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Studio specialists"
              title="Specialists presented with enough polish to feel premium from day one."
              description="Meet the resident artists behind the studio rituals, each introduced with clear specialties, calm authority, and an approachable luxury tone."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {specialists.map((specialist) => (
                <SpecialistCard key={specialist.slug} specialist={specialist} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight pb-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Subtle refinement"
                title="Results that look rested, not reinvented."
                description="The results language stays soft and believable, focusing on hydrated texture, balanced definition, and the kind of polish that still feels recognisably yours."
              />
              <div className="surface-card rounded-[2rem] p-5">
                <p className="text-sm font-semibold tracking-wide text-ink">Treatment Focus</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
                  <div className="flex justify-between border-b border-border/70 pb-2">
                    <span>Target</span><span>Skin texture & hydration</span>
                  </div>
                  <div className="flex justify-between border-b border-border/70 pb-2">
                    <span>Protocol</span><span>Cellular Renewal Peel</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Timeline</span><span>3 sessions over 6 weeks</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[25rem] w-full overflow-hidden rounded-[2.5rem] bg-shell-soft sm:h-[32rem]">
              <ComparisonSlider 
                beforeTitle="Before Treatment" 
                afterTitle="After 6 Weeks" 
                beforeTone="mocha" 
                afterTone="blush" 
                className="h-full w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section id="gallery" className="section-space-tight">
        <Container>
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Gallery preview"
              title="An image-led results section that already has editorial rhythm."
              description="A flexible mosaic rhythm keeps studio details, result imagery, and treatment mood shots feeling curated rather than template-driven."
            />

            <div className="grid gap-4 md:grid-cols-12">
              {galleryItems.map((item, index) => (
                <div
                  key={item.slug}
                  className={cn(
                    "md:col-span-6",
                    galleryLayout[index] ?? "md:col-span-6",
                  )}
                >
                  <MediaFrame
                    aspect={item.aspect}
                    title={item.title}
                    subtitle={item.service}
                    tone={item.imageTone}
                    className="h-full min-h-[280px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space overflow-hidden">
        <Container>
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Client words"
              title="Testimonials are styled as premium proof, not filler."
              description="Social proof sits inside the same calm visual system as the rest of the site, so the trust layer feels elegant instead of promotional."
            />

            <Carousel slideClassName="w-[90vw] sm:w-[26rem] lg:w-[28rem]">
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
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Beauty journal"
              title="Editorial blog cards give the brand a more complete, sellable feel."
              description="The journal extends the brand beyond treatments, giving the studio a thoughtful editorial voice and a stronger portfolio-ready finish."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        id="contact"
        eyebrow="Final call to action"
        title="Ready for a calm, tailored studio visit?"
        description="Book a consultation, explore the treatment menu, or browse the journal for the rituals and guidance behind the Maison de Lueur experience."
        primaryHref="/services"
        primaryLabel="Browse treatments"
        secondaryHref="/contact"
        secondaryLabel="Book a consultation"
      />
    </>
  );
}
