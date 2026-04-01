"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, studioInfo } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="surface-panel rounded-full px-4 py-3 sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="min-w-0" onClick={() => setIsOpen(false)}>
              <span className="block truncate font-serif text-3xl leading-none text-ink-strong">
                {studioInfo.shortName}
              </span>
              <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted">
                Soft luxury beauty studio
              </span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex">
              <Button href="#contact" variant="primary">
                Book a calm visit
              </Button>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/70 bg-white/70 text-ink lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
            >
              <span className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-px w-5 bg-current transition-transform duration-300",
                    isOpen && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-5 bg-current transition-opacity duration-300",
                    isOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-5 bg-current transition-transform duration-300",
                    isOpen && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-[max-height,opacity,margin] duration-300 lg:hidden",
              isOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <nav className="flex flex-col gap-2 rounded-[1.5rem] border border-border/70 bg-white/75 p-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[1rem] px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-shell-soft"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="#contact" className="mt-2" fullWidth>
                Book a calm visit
              </Button>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
