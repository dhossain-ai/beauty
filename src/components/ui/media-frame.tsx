import Image from "next/image";
import type { MediaAspect, ImageTone, MediaImage } from "@/lib/types";
import { cn } from "@/lib/cn";

interface MediaFrameProps {
  title: string;
  subtitle: string;
  label?: string;
  tone?: ImageTone;
  aspect?: MediaAspect;
  className?: string;
  overlayClassName?: string;
  image?: MediaImage;
  priority?: boolean;
  sizes?: string;
}

const toneClasses: Record<ImageTone, string> = {
  champagne: "from-[#f5e7da] via-[#fff9f4] to-[#d9bfaf]",
  blush: "from-[#ead8d2] via-[#fff8f6] to-[#d6b1a8]",
  taupe: "from-[#d8cbbc] via-[#faf6f1] to-[#b59784]",
  mocha: "from-[#d2c0b7] via-[#fbf7f3] to-[#9d7f72]",
  pearl: "from-[#f4ece4] via-[#fffdf9] to-[#d3c4b5]",
};

const aspectClasses: Record<MediaAspect, string> = {
  hero: "aspect-[4/5] sm:aspect-[5/6]",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[5/4] sm:aspect-[4/3]",
  square: "aspect-square",
};

export function MediaFrame({
  title,
  subtitle,
  label = "Maison de Lueur",
  tone = "champagne",
  aspect = "portrait",
  className,
  overlayClassName,
  image,
  priority = false,
  sizes,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "group relative isolate min-w-0 overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[0_28px_70px_rgba(86,64,54,0.14)] sm:rounded-[2rem]",
        aspectClasses[aspect],
        className,
      )}
    >
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes={
              sizes ??
              (aspect === "hero"
                ? "(min-width: 1024px) 42rem, (min-width: 640px) 70vw, 100vw"
                : "(min-width: 1280px) 24rem, (min-width: 768px) 40vw, 100vw")
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            style={{ objectPosition: image.position ?? "center" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_26%,rgba(37,27,22,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.24),rgba(255,255,255,0)_28%),radial-gradient(circle_at_84%_14%,rgba(255,244,236,0.14),rgba(255,255,255,0)_20%)]" />
        </>
      ) : (
        <>
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-out group-hover:scale-[1.035]",
              toneClasses[tone],
            )}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),rgba(255,255,255,0)_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.55),rgba(255,255,255,0)_18%),linear-gradient(180deg,rgba(255,255,255,0)_24%,rgba(63,43,34,0.2)_100%)]" />
          <div className="absolute left-[12%] top-[16%] h-28 w-28 rounded-full border border-white/45 bg-white/22" />
          <div className="absolute right-[14%] top-[24%] h-36 w-24 rounded-[999px] border border-white/55 bg-white/24" />
          <div className="absolute bottom-[18%] left-[12%] h-20 w-40 rounded-[1.75rem] border border-white/45 bg-white/18 backdrop-blur-sm" />
        </>
      )}
      <div
        className={cn(
          "absolute inset-x-3 bottom-3 rounded-[1.25rem] border border-white/60 bg-white/68 p-3.5 backdrop-blur-md transition-transform duration-500 ease-out group-hover:translate-y-[-0.2rem] sm:inset-x-5 sm:bottom-5 sm:rounded-[1.5rem] sm:p-5",
          overlayClassName,
        )}
      >
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[0.7rem] sm:tracking-[0.28em]">
          {label}
        </p>
        <h3 className="mt-2 font-serif text-[1.45rem] leading-[0.95] text-ink-strong sm:text-3xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
