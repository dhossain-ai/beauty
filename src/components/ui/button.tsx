import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  fullWidth?: boolean;
}

type ButtonProps = SharedProps & ComponentPropsWithoutRef<"button">;
type ButtonLinkProps = SharedProps & { href: string };

const baseStyles =
  "inline-flex max-w-full select-none items-center justify-center gap-2 rounded-full text-center text-sm font-semibold leading-5 tracking-[0.02em] whitespace-normal transition-[transform,background-color,border-color,color,box-shadow] duration-500 ease-out touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong/65 focus-visible:ring-offset-2 focus-visible:ring-offset-shell-soft active:translate-y-px disabled:pointer-events-none disabled:opacity-60 sm:whitespace-nowrap";

const variants = {
  primary:
    "border border-[#4a3933]/55 bg-[#35241f] text-[#fffaf5] shadow-[0_18px_42px_rgba(69,54,48,0.2)] hover:-translate-y-0.5 hover:border-[#5d4b43]/58 hover:bg-[#2b1d19] hover:text-[#fffaf5] hover:shadow-[0_22px_48px_rgba(69,54,48,0.24)]",
  secondary:
    "border border-border-strong/90 bg-white/90 text-ink-strong shadow-[0_14px_32px_rgba(69,54,48,0.1)] hover:-translate-y-0.5 hover:border-mocha/45 hover:bg-white hover:shadow-[0_18px_40px_rgba(69,54,48,0.14)]",
  ghost:
    "border border-border/85 bg-white/46 text-ink-strong shadow-[0_8px_20px_rgba(69,54,48,0.06)] hover:-translate-y-0.5 hover:border-border-strong/90 hover:bg-white/82 hover:shadow-[0_14px_32px_rgba(69,54,48,0.1)]",
};

const sizes = {
  md: "min-h-11 px-4 py-3 sm:px-5",
  lg: "min-h-12 px-5 py-3.5 sm:px-6",
};

function getClassName({
  className,
  fullWidth,
  size = "md",
  variant = "primary",
}: SharedProps) {
  return cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );
}

export function Button(props: ButtonProps | ButtonLinkProps) {
  if ("href" in props) {
    const { children, className, fullWidth, href, size, variant } = props;

    return (
      <Link
        href={href}
        className={getClassName({
          className,
          children,
          fullWidth,
          size,
          variant,
        })}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    fullWidth,
    size,
    type = "button",
    variant,
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={getClassName({
        className,
        children,
        fullWidth,
        size,
        variant,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
