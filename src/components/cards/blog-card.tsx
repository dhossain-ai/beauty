import type { BlogPost } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/ui/media-frame";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="surface-card group flex h-full flex-col rounded-[2rem] p-4 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-5">
      <MediaFrame
        aspect="landscape"
        title={post.category}
        subtitle={post.title}
        label={post.category}
        tone={post.imageTone}
        image={post.image}
        className="rounded-[1.6rem]"
      />
      <div className="flex flex-1 flex-col gap-4 px-2 pb-2 pt-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          <span>{post.publishedAt}</span>
          <span className="h-1 w-1 rounded-full bg-border-strong" />
          <span>{post.readTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="card-title font-serif text-ink-strong transition-colors duration-300 group-hover:text-ink">
            {post.title}
          </h3>
          <p className="text-sm leading-7 text-muted">{post.excerpt}</p>
        </div>
        <div className="mt-auto pt-2">
          <Button
            href={`/journal/${post.slug}`}
            variant="ghost"
            className="w-full sm:w-auto"
          >
            Read article
          </Button>
        </div>
      </div>
    </article>
  );
}
