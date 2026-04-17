import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { BlogCard } from "@/components/cards/blog-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { PageIntro } from "@/components/ui/page-intro";
import { pageTitle, siteName } from "@/lib/seo";

export const metadata = {
  title: pageTitle("Journal"),
  description: `Read editorial notes, treatment guidance, and slow beauty insight from ${siteName}.`,
};

export default function JournalPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <PageIntro
        eyebrow="Editorial"
        title="The Journal."
        description="A slower, more editorial layer of the brand covering treatment timing, maintenance habits, and the beauty rituals that support calm, polished results."
      />

      {featuredPost && (
        <section className="section-space pt-0">
          <Container>
            <Link href={`/journal/${featuredPost.slug}`} className="group block">
              <div className="surface-panel grid gap-8 rounded-[2.5rem] p-5 transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-card-hover)] sm:p-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-10 lg:p-10">
                <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-[2rem] sm:min-h-[320px] lg:min-h-[400px]">
                  <MediaFrame
                    aspect="landscape"
                    tone={featuredPost.imageTone}
                    title={featuredPost.title}
                    subtitle="Featured edit"
                    label="Featured story"
                    image={featuredPost.image}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-6 lg:pl-2">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    <span>{featuredPost.category}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{featuredPost.publishedAt}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="section-title font-serif text-ink-strong">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg leading-8 text-muted">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink">
                    Read article
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {regularPosts.length > 0 && (
        <section className="section-space">
          <Container>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {regularPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBlock
        id="journal-invite"
        eyebrow="Studio Edit"
        title="Bring the journal into your routine."
        description="When you are ready to translate these notes into a tailored in-studio plan, book a consultation and we will map the right treatment cadence for you."
        primaryHref="/contact"
        primaryLabel="Book a consultation"
        secondaryHref="/services"
        secondaryLabel="View treatments"
      />
    </>
  );
}
