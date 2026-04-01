import type { MediaAspect, ImageTone } from "@/lib/types";
import { cn } from "@/lib/cn";

interface MediaFrameProps {
  title: string;
  subtitle: string;
  tone?: ImageTone;
  aspect?: MediaAspect;
  className?: string;
  overlayClassName?: string;
}

const toneClasses: Record<ImageTone, string> = {
  champagne: "from-[#f5e7da] via-[#fff9f4] to-[#d9bfaf]",
  blush: "from-[#ead8d2] via-[#fff8f6] to-[#d6b1a8]",
  taupe: "from-[#d8cbbc] via-[#faf6f1] to-[#b59784]",
  mocha: "from-[#d2c0b7] via-[#fbf7f3] to-[#9d7f72]",
  pearl: "from-[#f4ece4] via-[#fffdf9] to-[#d3c4b5]",
};

const aspectClasses: Record<MediaAspect, string> = {
  hero: "aspect-[4/5] md:aspect-[5/6]",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export function MediaFrame({
  title,
  subtitle,
  tone = "champagne",
  aspect = "portrait",
  className,
  overlayClassName,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_28px_70px_rgba(86,64,54,0.14)]",
        aspectClasses[aspect],
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-[1.03]",
          toneClasses[tone],
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),rgba(255,255,255,0)_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.55),rgba(255,255,255,0)_18%),linear-gradient(180deg,rgba(255,255,255,0)_24%,rgba(63,43,34,0.2)_100%)]" />
      <div className="absolute left-[12%] top-[16%] h-28 w-28 rounded-full border border-white/45 bg-white/22" />
      <div className="absolute right-[14%] top-[24%] h-36 w-24 rounded-[999px] border border-white/55 bg-white/24" />
      <div className="absolute bottom-[18%] left-[12%] h-20 w-40 rounded-[1.75rem] border border-white/45 bg-white/18 backdrop-blur-sm" />
      <div
        className={cn(
          "absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/60 bg-white/68 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-5",
          overlayClassName,
        )}
      >
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-muted">
          Placeholder visual
        </p>
        <h3 className="mt-2 font-serif text-2xl leading-none text-ink-strong sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-6 text-muted">{subtitle}</p>
      </div>
    </div>
  );
}
