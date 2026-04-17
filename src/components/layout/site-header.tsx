"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { navigation, siteContent, studioInfo } = useSiteLanguage();

  return (
    <header className="sticky top-0 z-50 pt-2.5 sm:pt-4">
      <Container>
        <div className="surface-panel rounded-[1.75rem] px-3.5 py-3 shadow-[0_22px_50px_rgba(86,64,54,0.11)] sm:px-5 min-[1450px]:rounded-full">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <Link
              href="/"
              className="min-w-0 max-w-[10rem] sm:max-w-none"
              onClick={() => setIsOpen(false)}
            >
              <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-muted sm:text-[0.62rem]">
                {siteContent.header.brandPrefix}
              </span>
              <span className="mt-1 block truncate font-serif text-[1.9rem] leading-none text-ink-strong sm:text-3xl">
                {studioInfo.shortName}
              </span>
            </Link>

            <nav className="hidden items-center gap-1 min-[1450px]:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-[color,background-color] duration-300 xl:px-3.5",
                    pathname === item.href
                      ? "bg-white/78 text-ink shadow-[0_10px_26px_rgba(69,54,48,0.08)]"
                      : "text-muted hover:bg-white/50 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-2 min-[1450px]:flex">
              <LanguageToggle />
              <Button href="/contact" variant="primary">
                {siteContent.cta.book}
              </Button>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={siteContent.header.navigationToggleLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/70 bg-white/70 text-ink shadow-[0_10px_24px_rgba(69,54,48,0.08)] transition-colors duration-300 hover:bg-white min-[1450px]:hidden"
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
              "overflow-hidden transition-[max-height,opacity,margin] duration-300 min-[1450px]:hidden",
              isOpen ? "mt-3 max-h-[32rem] opacity-100 sm:mt-4" : "max-h-0 opacity-0",
            )}
          >
            <nav className="flex flex-col gap-2 rounded-[1.5rem] border border-border/70 bg-white/75 p-3 shadow-[0_22px_42px_rgba(69,54,48,0.08)]">
              <div className="flex items-center justify-between gap-3 rounded-[1rem] border border-border/70 bg-white/78 px-4 py-3">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">
                  {siteContent.header.mobileNavigationLabel}
                </span>
                <LanguageToggle />
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[1rem] px-4 py-3 text-sm font-medium transition-[background-color,color] duration-300",
                    pathname === item.href
                      ? "bg-shell-soft text-ink-strong"
                      : "text-ink hover:bg-shell-soft",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2" fullWidth>
                {siteContent.cta.book}
              </Button>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
