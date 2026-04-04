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
        "flex flex-col gap-4 sm:gap-6",
        isCentered && "items-center text-center",
        className,
      )}
    >
      <Badge variant="outline">{eyebrow}</Badge>
      <div className={cn("max-w-2xl space-y-4", isCentered && "mx-auto")}>
        <h2 className="section-title text-balance font-serif text-ink-strong">
          {title}
        </h2>
        <p className="max-w-[44rem] text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:leading-9">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
