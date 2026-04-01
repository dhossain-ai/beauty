import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        isCentered && "items-center text-center",
        className,
      )}
    >
      <Badge variant="outline">{eyebrow}</Badge>
      <div className={cn("max-w-2xl space-y-4", isCentered && "mx-auto")}>
        <h2 className="text-balance font-serif text-4xl leading-none text-ink-strong sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-muted sm:text-lg">{description}</p>
      </div>
      {action}
    </div>
  );
}
