import { ServiceCard } from "@/components/cards/service-card";
import { SpecialistCard } from "@/components/cards/specialist-card";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { ComparisonSlider } from "@/components/ui/comparison-slider";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/data/blog-posts";
import { galleryItems } from "@/data/gallery";
import { beautyMedia } from "@/data/media";
import { pricingSnippets } from "@/data/pricing";
import { services } from "@/data/services";
import { philosophyPillars, studioInfo, trustMetrics } from "@/data/site";
import { specialists } from "@/data/specialists";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

const featuredServices = services.slice(0, 5);
const featuredSpecialists = specialists.slice(0, 3);
const pricingPreview = pricingSnippets.slice(0, 2);
const featuredJournalPost = blogPosts[0]!;
const secondaryJournalPosts = blogPosts.slice(1, 3);
const galleryPreviewItems = [
  galleryItems[0]!,
  galleryItems[1]!,
  galleryItems[4]!,
  galleryItems[5]!,
];
const galleryPreviewLayout = [
  "md:col-span-5 md:row-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-5",
];
const resultPreviewItems = [galleryItems[2]!, galleryItems[6]!];
const serviceHighlights = [
  {
    label: "Most booked",
    value: "Radiance Facial Ritual",
    description: "A fast read on glow, touch, and finish.",
  },
  {
    label: "Best first visit",
    value: "Consult-led skin mapping",
    description: "Clear direction before building a routine.",
  },
  {
    label: "Signature mood",
    value: "Soft polish, never overdone",
    description: "Designed for modern, believable beauty results.",
  },
];
const specialistGuidance = [
  {
    title: "Skin reset",
    description: "Book Amelia or Monika for hydration, texture, and bridal prep.",
  },
  {
    title: "Brows and lashes",
    description: "Eva leads low-maintenance definition with a softer finish.",
  },
  {
    title: "Occasion polish",
    description: "Sofia is the calm choice for event-ready beauty planning.",
  },
];
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
                <h1 className="text-balance font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.75rem] lg:text-[6.4rem]">
                  Calm beauty, composed with more intention.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-muted sm:text-xl">
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

              <div className="grid gap-3 sm:grid-cols-[1.12fr_0.88fr]">
                <div className="surface-panel rounded-[1.75rem] px-5 py-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                    Studio promise
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink">
                    One-to-one appointments, tailored consultation, and beauty
                    work designed to settle into real routines instead of
                    chasing louder trends.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-ink-strong/12 bg-ink px-5 py-4 text-shell-soft shadow-[0_20px_52px_rgba(38,29,26,0.18)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/65">
                    Signature pairing
                  </p>
                  <p className="mt-2 font-serif text-2xl leading-none text-white">
                    Skin glow + brow balance
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">
                    The fastest way to understand the studio finish before real
                    event season begins.
                  </p>
                </div>
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

              <div className="surface-panel absolute bottom-5 left-5 max-w-[15rem] rounded-[1.5rem] px-4 py-4 sm:bottom-7 sm:left-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Reviewed and tailored
                </p>
                <p className="mt-2 font-serif text-2xl leading-none text-ink-strong">
                  Calm from arrival to finish
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Each treatment starts with a short consultation so the result
                  stays believable and maintenance-friendly.
                </p>
              </div>

              <div className="absolute right-5 top-5 hidden max-w-[15rem] rounded-[1.5rem] border border-white/35 bg-white/18 px-4 py-4 text-white shadow-[0_20px_44px_rgba(48,35,29,0.18)] backdrop-blur-md sm:block">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                  House style
                </p>
                <p className="mt-2 font-serif text-2xl leading-none">
                  Refined, rested, recognisably you
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="section-space overflow-hidden pt-0">
        <Container>
          <div className="overflow-hidden rounded-[3rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,252,248,0.82)_0%,rgba(241,228,218,0.94)_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div className="space-y-5">
                <Badge variant="outline">Signature services</Badge>
                <h2 className="text-balance font-serif text-[2.85rem] leading-[0.94] text-ink-strong sm:text-[3.6rem] lg:text-[4.65rem]">
                  Start with a tighter edit of the treatments clients book
                  first.
                </h2>
                <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
                  Explore the treatments women return to for glow, definition,
                  event prep, and skin reset, each shaped to feel polished
                  without becoming overdone.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {serviceHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/65 bg-white/62 p-4 shadow-[0_14px_30px_rgba(86,64,54,0.06)]"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-muted">
                      {item.label}
                    </p>
                    <p className="mt-2 font-serif text-[1.75rem] leading-[0.98] text-ink-strong">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Carousel slideClassName="w-[86vw] sm:w-[22rem] lg:w-[24rem]">
                {featuredServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </Carousel>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <MediaFrame
              aspect="landscape"
              title="A quieter appointment rhythm"
              subtitle="Soft luxury here means warm consultation, tactile care, and enough polish to feel finished without becoming theatrical."
              tone="pearl"
              className="min-h-[320px] sm:min-h-[420px]"
            />

            <div className="space-y-8">
              <SectionHeading
                eyebrow="Studio approach"
                title="The experience stays intimate, consult-led, and quietly luxurious."
                description="Every appointment is designed to feel warm, unhurried, and clear from the first conversation through aftercare, so the studio atmosphere supports the treatment instead of competing with it."
              />

              <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/58">
                {philosophyPillars.map((pillar, index) => (
                  <div
                    key={pillar}
                    className={cn(
                      "flex items-start gap-3 px-5 py-4",
                      index !== philosophyPillars.length - 1 &&
                        "border-b border-border/70",
                    )}
                  >
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-accent-strong" />
                    <p className="text-sm leading-7 text-ink">{pillar}</p>
                  </div>
                ))}
              </div>

              <div className="surface-card rounded-[2rem] p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-muted">
                  Pricing preview
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {pricingPreview.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-border/70 bg-white/62 p-4"
                    >
                      <p className="font-medium text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {item.note}
                      </p>
                      <p className="mt-3 font-semibold text-ink-strong">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="specialists" className="section-space">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
            <div className="space-y-6 xl:pr-6">
              <SectionHeading
                eyebrow="Studio specialists"
                title="Different specialties, one consistent standard of soft-definition work."
                description="Meet the resident specialists behind the studio rituals, each introduced with a distinct focus so choosing the right artist feels straightforward and personal."
                action={
                  <Button href="/specialists" variant="secondary">
                    Meet all specialists
                  </Button>
                }
              />

              <div className="rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,250,246,0.94)_0%,rgba(232,210,203,0.42)_100%)] p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Who to book
                </p>
                <div className="mt-4 space-y-4">
                  {specialistGuidance.map((item) => (
                    <div
                      key={item.title}
                      className="border-b border-border/70 pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="font-serif text-2xl leading-none text-ink-strong">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredSpecialists.map((specialist) => (
                <SpecialistCard key={specialist.slug} specialist={specialist} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight">
        <Container>
          <div className="overflow-hidden rounded-[3rem] bg-[linear-gradient(180deg,#4a3832_0%,#261d1a_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/68">
                    Results preview
                  </p>
                  <h2 className="text-balance font-serif text-[2.9rem] leading-[0.92] text-white sm:text-[3.7rem] lg:text-[4.55rem]">
                    Proof stays soft, but the difference is clear.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                    Our results philosophy stays rooted in believable change:
                    smoother texture, calmer skin, and softly structured detail
                    that still feels recognisably yours.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {resultHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white/58">
                        {item.label}
                      </p>
                      <p className="mt-2 font-serif text-[1.7rem] leading-[0.98] text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative h-[24rem] w-full overflow-hidden rounded-[2.5rem] bg-shell-soft sm:h-[30rem]">
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

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {resultPreviewItems.map((item) => (
                  <MediaFrame
                    key={item.slug}
                    aspect={item.aspect}
                    title={item.title}
                    subtitle={item.service}
                    tone={item.imageTone}
                    className="min-h-[250px]"
                  />
                ))}

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

      <section id="gallery" className="section-space-tight">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionHeading
              eyebrow="Gallery preview"
              title="Just enough image rhythm to sell the atmosphere."
              description="A curated mix of studio details and treatment outcomes gives the brand an editorial image rhythm while keeping the scroll light and elegant."
              action={
                <Button href="/gallery" variant="secondary">
                  View full gallery
                </Button>
              }
            />

            <div className="grid gap-4 md:grid-cols-8">
              {galleryPreviewItems.map((item, index) => (
                <div
                  key={item.slug}
                  className={cn("md:col-span-4", galleryPreviewLayout[index])}
                >
                  <MediaFrame
                    aspect={item.aspect}
                    title={item.title}
                    subtitle={item.service}
                    tone={item.imageTone}
                    className="h-full min-h-[250px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space overflow-hidden">
        <Container>
          <div className="overflow-hidden rounded-[3rem] border border-border/70 bg-[linear-gradient(135deg,rgba(232,210,203,0.38)_0%,rgba(255,252,248,0.92)_48%,rgba(244,236,228,0.9)_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="space-y-6">
                <SectionHeading
                  eyebrow="Client words"
                  title="Testimonials now sit in their own calmer proof section."
                  description="Client feedback stays specific, soft, and reassuring, reflecting the same calm confidence as the rest of the studio presentation."
                />

                <div className="rounded-[1.75rem] border border-border/70 bg-white/66 p-5 shadow-[0_16px_34px_rgba(86,64,54,0.06)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                    Review snapshot
                  </p>
                  <p className="mt-3 font-serif text-4xl leading-none text-ink-strong">
                    4.9/5 average rating
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Clients usually mention how calm the appointment feels
                    before they talk about the result, which is exactly what a
                    soft luxury studio should deliver.
                  </p>
                </div>
              </div>

              <Carousel slideClassName="w-[90vw] sm:w-[24rem] lg:w-[25rem]">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </Container>
      </section>

      <section id="journal" className="section-space-tight">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <article className="surface-card overflow-hidden rounded-[2.5rem] p-4 sm:p-6">
              <MediaFrame
                aspect="landscape"
                title={featuredJournalPost.title}
                subtitle={featuredJournalPost.excerpt}
                label={featuredJournalPost.category}
                tone={featuredJournalPost.imageTone}
                className="min-h-[320px] rounded-[2rem]"
              />
              <div className="space-y-4 px-2 pb-2 pt-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  <span>{featuredJournalPost.publishedAt}</span>
                  <span className="h-1 w-1 rounded-full bg-border-strong" />
                  <span>{featuredJournalPost.readTime}</span>
                </div>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  A featured article anchors the journal preview with practical,
                  thoughtful guidance for women who want polished routines
                  without added complexity.
                </p>
                <div>
                  <Button
                    href={`/journal/${featuredJournalPost.slug}`}
                    variant="secondary"
                  >
                    Read featured article
                  </Button>
                </div>
              </div>
            </article>

            <div className="space-y-6">
              <SectionHeading
                eyebrow="Beauty journal"
                title="An editorial voice, trimmed to one feature and two follow-up reads."
                description="The journal extends the brand beyond appointments, offering calm beauty guidance that feels useful, polished, and easy to return to."
                action={
                  <Button href="/journal" variant="secondary">
                    Read the journal
                  </Button>
                }
              />

              <div className="grid gap-4">
                {secondaryJournalPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-[2rem] border border-border/70 bg-white/60 p-5 shadow-[0_14px_30px_rgba(86,64,54,0.05)]"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                      <span>{post.category}</span>
                      <span className="h-1 w-1 rounded-full bg-border-strong" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-[2rem] leading-[0.95] text-ink-strong">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <Button href={`/journal/${post.slug}`} variant="ghost">
                        Read article
                      </Button>
                    </div>
                  </article>
                ))}
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
