import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { pageTitle } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: pageTitle(post.title),
    description: post.excerpt,
  };
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Badge>{post.category}</Badge>
            <h1 className="page-title mt-8 text-balance font-serif text-ink-strong">
              {post.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              <span>{post.publishedAt}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2.5rem] sm:aspect-[16/9]">
              <MediaFrame
                aspect="landscape"
                tone={post.imageTone}
                title={post.title}
                subtitle="Editorial"
                label="Journal feature"
                image={post.image}
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="surface-panel grid gap-4 rounded-[2rem] px-5 py-5 text-sm leading-7 text-ink sm:grid-cols-3 sm:px-6">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Studio lens
                </p>
                <p className="mt-2">Slow beauty, low noise, and believable results.</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Best for
                </p>
                <p className="mt-2">Clients refining their home routine between appointments.</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                  Read length
                </p>
                <p className="mt-2">{post.readTime} of calm, practical guidance.</p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            {post.contentBlocks ? (
              <div className="editorial-flow">
                {post.contentBlocks.map((block, index) => {
                  switch (block.type) {
                    case "paragraph":
                      return <p key={index}>{block.value}</p>;
                    case "quote":
                      return (
                        <blockquote key={index}>
                          &ldquo;{block.value}&rdquo;
                        </blockquote>
                      );
                    case "h2":
                      return <h2 key={index}>{block.value}</h2>;
                    case "h3":
                      return <h3 key={index}>{block.value}</h3>;
                    case "ul":
                      return (
                        <ul key={index}>
                          {block.items?.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            ) : (
              <div className="editorial-flow">
                <p>{post.excerpt}</p>
                <p>
                  A full editorial expansion is still being refined, but the current
                  article body already establishes the reading rhythm, spacing, and
                  premium text system for the journal.
                </p>
              </div>
            )}
          </div>
        </Container>
      </article>

      <CtaBlock
        id="book"
        eyebrow="Experience"
        title="Put philosophy into practice."
        description="Book a consultation to start implementing these principles into your own routine."
        primaryHref="/contact"
        primaryLabel="Book a consultation"
        secondaryHref="/journal"
        secondaryLabel="Back to the journal"
      />
    </>
  );
}
