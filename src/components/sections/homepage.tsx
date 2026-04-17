"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
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
import { getHomepageContent } from "@/data/homepage";
import { beautyMedia } from "@/data/media";
import { services } from "@/data/services";
import { specialists } from "@/data/specialists";

const serviceMap = new Map(services.map((service) => [service.slug, service]));
const specialistMap = new Map(
  specialists.map((specialist) => [specialist.slug, specialist]),
);
const galleryItemMap = new Map(galleryItems.map((item) => [item.slug, item]));
const blogPostMap = new Map(blogPosts.map((post) => [post.slug, post]));

export function Homepage() {
  const { locale } = useSiteLanguage();
  const homepageContent = getHomepageContent(locale);
  const resultPreviewItem = galleryItemMap.get(homepageContent.results.preview.slug);
  const featuredJournalPost = blogPostMap.get(
    homepageContent.journal.featuredPost.slug,
  );

  return (
    <>
      <section className="pb-12 pt-6 sm:pt-8 lg:pb-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div className="space-y-7 lg:pr-4">
              <Badge>{homepageContent.hero.badge}</Badge>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">
                  {homepageContent.hero.eyebrow}
                </p>
                <h1 className="display-title text-balance font-serif text-ink-strong">
                  {homepageContent.hero.title}
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  {homepageContent.hero.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  {homepageContent.hero.primaryLabel}
                </Button>
                <Button href="/services" size="lg" variant="secondary">
                  {homepageContent.hero.secondaryLabel}
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {homepageContent.trustMetrics.map((metric) => (
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
                  {homepageContent.hero.promiseLabel}
                </p>
                <p className="mt-2 text-sm leading-7 text-ink">
                  {homepageContent.hero.promiseText}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-6 hidden rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(232,210,203,0.38),rgba(232,210,203,0)_68%)] blur-3xl lg:block" />

              <MediaFrame
                aspect="hero"
                title={homepageContent.hero.mediaTitle}
                subtitle={homepageContent.hero.mediaSubtitle}
                label={homepageContent.hero.mediaLabel}
                tone="champagne"
                image={beautyMedia.heroSpa}
                priority
                className="relative min-h-[440px] rounded-[2.3rem] sm:min-h-[560px] sm:rounded-[2.75rem] lg:min-h-[620px]"
                overlayClassName="max-w-[13rem] bg-white/66 sm:max-w-[17rem]"
              />

              <div className="surface-panel absolute bottom-4 left-4 max-w-[12.5rem] rounded-[1.35rem] px-4 py-4 sm:bottom-7 sm:left-7 sm:max-w-[15rem] sm:rounded-[1.5rem]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  {homepageContent.hero.mediaStatLabel}
                </p>
                <p className="mt-2 font-serif text-2xl leading-none text-ink-strong">
                  {homepageContent.hero.mediaStatValue}
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
                <Badge variant="outline">{homepageContent.services.badge}</Badge>
                <h2 className="section-title text-balance font-serif text-ink-strong">
                  {homepageContent.services.title}
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {homepageContent.services.description}
                </p>
              </div>

              <Button href="/services" variant="secondary">
                {homepageContent.services.ctaLabel}
              </Button>
            </div>

            <Carousel slideClassName="w-[84vw] sm:w-[20rem] md:w-[21rem] xl:w-[22.5rem]">
              {homepageContent.services.cards.map((serviceCard) => {
                const service = serviceMap.get(serviceCard.slug);

                if (!service) {
                  return null;
                }

                return (
                  <article
                    key={service.slug}
                    className="surface-card group flex h-full flex-col rounded-[2rem] p-4 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-5"
                  >
                    <MediaFrame
                      aspect="landscape"
                      title={serviceCard.title}
                      subtitle={serviceCard.highlight}
                      label={serviceCard.category}
                      tone={service.imageTone}
                      image={service.image}
                      className="rounded-[1.6rem]"
                      overlayClassName="max-w-[10.75rem] bg-white/58 p-3 sm:max-w-[12rem] sm:p-3.5"
                    />
                    <div className="flex flex-1 flex-col gap-4 px-2 pb-2 pt-5">
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="font-medium text-muted">
                          {serviceCard.duration}
                        </span>
                        <span className="font-semibold text-ink-strong">
                          {serviceCard.priceFrom}
                        </span>
                      </div>
                      <p className="text-sm leading-7 text-muted">
                        {serviceCard.excerpt}
                      </p>
                      <div className="mt-auto pt-2">
                        <Button
                          href={`/services/${service.slug}`}
                          size="md"
                          variant="secondary"
                        >
                          {locale === "lt" ? "Plačiau" : "Details"}
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </Carousel>
          </div>
        </Container>
      </section>

      <section className="section-space-tight">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <MediaFrame
              aspect="landscape"
              title={homepageContent.approach.mediaTitle}
              subtitle={homepageContent.approach.mediaSubtitle}
              tone="pearl"
              image={beautyMedia.productFlatlay}
              className="min-h-[320px] sm:min-h-[420px]"
              overlayClassName="max-w-[16rem] bg-white/60 p-4"
            />

            <div className="space-y-6">
              <div className="max-w-xl space-y-4">
                <Badge variant="outline">{homepageContent.approach.badge}</Badge>
                <h2 className="section-title text-balance font-serif text-ink-strong">
                  {homepageContent.approach.title}
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {homepageContent.approach.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {homepageContent.approach.pillars.map((pillar) => (
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
                  {homepageContent.approach.note}
                </p>
                <Button href="/pricing" variant="secondary">
                  {homepageContent.approach.ctaLabel}
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
                <Badge variant="outline">{homepageContent.specialists.badge}</Badge>
                <h2 className="section-title text-balance font-serif text-ink-strong">
                  {homepageContent.specialists.title}
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {homepageContent.specialists.description}
                </p>
              </div>

              <Button href="/specialists" variant="secondary">
                {homepageContent.specialists.ctaLabel}
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {homepageContent.specialists.cards.map((specialistCard) => {
                const specialist = specialistMap.get(specialistCard.slug);

                if (!specialist) {
                  return null;
                }

                return (
                  <article
                    key={specialist.slug}
                    className="group flex h-full flex-col"
                  >
                    <MediaFrame
                      aspect="portrait"
                      title={specialist.name}
                      subtitle=""
                      label={specialistCard.specialties[0] ?? specialist.name}
                      tone={specialist.imageTone}
                      image={specialist.image}
                      className="rounded-[2rem]"
                      overlayClassName="max-w-[10.75rem] border-white/55 bg-white/48 p-3 sm:max-w-[11.5rem] sm:p-3.5"
                    />

                    <div className="flex flex-1 flex-col space-y-4 px-1 pb-1 pt-4">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                          {specialistCard.experience}
                        </p>
                        <p className="text-sm leading-6 text-muted">
                          {specialistCard.role}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {specialistCard.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="rounded-full border border-border/70 bg-white/72 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ink"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto border-t border-border/70 pt-4">
                        <Button href={`/specialists/${specialist.slug}`} variant="ghost">
                          {locale === "lt" ? "Plačiau" : "Profile"}
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space-tight">
        <Container>
          <div className="overflow-hidden rounded-[3rem] bg-[linear-gradient(180deg,#4a3832_0%,#261d1a_100%)] px-5 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/68">
                    {locale === "lt" ? "Rezultatų apžvalga" : "Results preview"}
                  </p>
                  <h2 className="section-title text-balance font-serif text-white">
                    {homepageContent.results.title}
                  </h2>
                  <p className="max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                    {homepageContent.results.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {homepageContent.results.highlights.map((item) => (
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

                <div className="relative h-[20rem] w-full overflow-hidden rounded-[2.5rem] bg-shell-soft sm:h-[27rem] lg:h-[29rem]">
                  <ComparisonSlider
                    beforeTitle={homepageContent.results.comparisonBeforeTitle}
                    afterTitle={homepageContent.results.comparisonAfterTitle}
                    beforeTone="mocha"
                    afterTone="blush"
                    beforeImage={beautyMedia.detailMaskProcess}
                    afterImage={beautyMedia.portraitSofia}
                    className="h-full w-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {resultPreviewItem ? (
                  <MediaFrame
                    aspect={resultPreviewItem.aspect}
                    title={homepageContent.results.preview.title}
                    subtitle={homepageContent.results.preview.subtitle}
                    label={homepageContent.results.preview.label}
                    tone={resultPreviewItem.imageTone}
                    image={resultPreviewItem.image}
                    className="min-h-[280px]"
                    overlayClassName="max-w-[12rem] bg-white/52 p-3.5"
                  />
                ) : null}

                <div className="rounded-[2rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/58">
                    {homepageContent.results.focusLabel}
                  </p>
                  <div className="mt-4 space-y-4 text-sm text-white/74">
                    {homepageContent.results.focusRows.map((row, index) => (
                      <div
                        key={row.label}
                        className={
                          index !== homepageContent.results.focusRows.length - 1
                            ? "flex flex-col gap-1.5 border-b border-white/12 pb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                            : "flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                        }
                      >
                        <span>{row.label}</span>
                        <span className="text-right text-white">{row.value}</span>
                      </div>
                    ))}
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
            <div className="max-w-md space-y-4">
              <Badge variant="outline">{homepageContent.testimonials.badge}</Badge>
              <h2 className="section-title text-balance font-serif text-ink-strong">
                {homepageContent.testimonials.title}
              </h2>
              <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {homepageContent.testimonials.description}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {homepageContent.testimonials.meta}
              </p>
            </div>

            <Carousel slideClassName="w-[84vw] sm:w-[21rem] md:w-[22rem] xl:w-[23rem]">
              {homepageContent.testimonials.items.map((testimonial) => (
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
            {featuredJournalPost ? (
              <Link
                href={`/journal/${featuredJournalPost.slug}`}
                className="group block"
              >
                <article className="surface-card overflow-hidden rounded-[2.5rem] p-4 transition-[transform,box-shadow,border-color] duration-500 ease-out group-hover:-translate-y-1 group-hover:border-border-strong/70 group-hover:shadow-[var(--shadow-card-hover)] sm:p-5">
                  <MediaFrame
                    aspect="landscape"
                    title={homepageContent.journal.featuredPost.title}
                    subtitle={homepageContent.journal.featuredPost.excerpt}
                    label={homepageContent.journal.featuredPost.category}
                    tone={featuredJournalPost.imageTone}
                    image={featuredJournalPost.image}
                    className="min-h-[320px] rounded-[2rem]"
                    overlayClassName="max-w-[15rem] bg-white/56 p-3.5"
                  />
                  <div className="space-y-4 px-2 pb-2 pt-5">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                      <span>{homepageContent.journal.featuredPost.publishedAt}</span>
                      <span className="h-1 w-1 rounded-full bg-border-strong" />
                      <span>{homepageContent.journal.featuredPost.readTime}</span>
                    </div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/76 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-ink shadow-[0_10px_24px_rgba(69,54,48,0.08)] transition-[transform,box-shadow] duration-300 group-hover:translate-x-1 group-hover:shadow-[0_14px_30px_rgba(69,54,48,0.12)]">
                      {homepageContent.journal.featuredCtaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </p>
                  </div>
                </article>
              </Link>
            ) : null}

            <div className="space-y-5">
              <div className="max-w-xl space-y-4">
                <Badge variant="outline">{homepageContent.journal.badge}</Badge>
                <h2 className="section-title text-balance font-serif text-ink-strong">
                  {homepageContent.journal.title}
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {homepageContent.journal.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/58">
                {homepageContent.journal.secondaryPosts.map((post, index) => {
                  const sourcePost = blogPostMap.get(post.slug);

                  if (!sourcePost) {
                    return null;
                  }

                  return (
                    <Link
                      key={post.slug}
                      href={`/journal/${post.slug}`}
                      className="group block px-4 py-4 transition-colors duration-300 hover:bg-white/84 sm:px-5"
                    >
                      <div
                        className={
                          index !== homepageContent.journal.secondaryPosts.length - 1
                            ? "border-b border-border/70 pb-4"
                            : ""
                        }
                      >
                        <div className="grid grid-cols-[4.5rem_1fr] items-center gap-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/70 bg-shell-soft">
                            {sourcePost.image ? (
                              <Image
                                src={sourcePost.image.src}
                                alt={sourcePost.image.alt}
                                fill
                                sizes="(min-width: 640px) 6.5rem, 5rem"
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                style={{
                                  objectPosition:
                                    sourcePost.image.position ?? "center",
                                }}
                              />
                            ) : null}
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(35,25,21,0.14)_100%)]" />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
                              <span>{post.category}</span>
                              <span className="h-1 w-1 rounded-full bg-border-strong" />
                              <span>{post.readTime}</span>
                            </div>
                            <h3 className="card-title mt-3 font-serif text-ink-strong transition-colors duration-300 group-hover:text-ink">
                              {post.title}
                            </h3>
                            <p className="mt-3 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-ink/76 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink">
                              {locale === "lt" ? "Skaityti" : "Read article"}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div>
                <Button href="/journal" variant="secondary">
                  {homepageContent.journal.buttonLabel}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        id="contact"
        eyebrow={homepageContent.finalCta.eyebrow}
        title={homepageContent.finalCta.title}
        description={homepageContent.finalCta.description}
        primaryHref="/contact"
        primaryLabel={homepageContent.finalCta.primaryLabel}
        secondaryHref="/services"
        secondaryLabel={homepageContent.finalCta.secondaryLabel}
      />
    </>
  );
}
