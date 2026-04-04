import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
  bodyClassName?: string;
  children?: ReactNode;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  bodyClassName,
  children,
}: PageIntroProps) {
  const isCentered = align === "center";

  return (
    <section className={cn("page-intro-space", className)}>
      <Container>
        <div
          className={cn(
            "space-y-6 sm:space-y-7",
            isCentered && "mx-auto max-w-4xl text-center",
          )}
        >
          <Badge>{eyebrow}</Badge>
          <div className={cn("space-y-5", isCentered && "mx-auto max-w-3xl")}>
            <h1 className="page-title text-balance font-serif text-ink-strong">
              {title}
            </h1>
            <p
              className={cn(
                "max-w-[42rem] text-base leading-7 text-muted sm:text-lg sm:leading-8 lg:text-xl lg:leading-9",
                isCentered && "mx-auto max-w-2xl",
                bodyClassName,
              )}
            >
              {description}
            </p>
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
