import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "soft" | "outline" | "solid";
  className?: string;
}

const variants = {
  soft: "border border-white/60 bg-white/65 text-ink shadow-[0_10px_24px_rgba(80,58,49,0.08)]",
  outline: "border border-border-strong/70 bg-transparent text-ink",
  solid: "border border-transparent bg-ink text-shell-soft",
};

export function Badge({
  children,
  variant = "soft",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] sm:px-4 sm:text-[0.68rem] sm:tracking-[0.26em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
