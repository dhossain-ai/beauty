"use client";

import Link from "next/link";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const { navigation, siteContent, studioInfo } = useSiteLanguage();

  return (
    <footer className="section-space-tight border-t border-white/70">
      <Container>
        <div className="surface-panel rounded-[2.25rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 sm:gap-10 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <div>
                <p className="max-w-md font-serif text-4xl leading-[0.95] text-ink-strong sm:text-5xl">
                  {studioInfo.name}
                </p>
                <p className="mt-3 max-w-xl text-base leading-7 text-muted sm:leading-8">
                  {siteContent.footer.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/contact">{siteContent.cta.footerBook}</Button>
                <Button href="/journal" variant="secondary">
                  {siteContent.cta.footerJournal}
                </Button>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[0.72fr_1.08fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-muted">
                  {siteContent.footer.navigationHeading}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-ink transition-colors duration-300 hover:text-accent-strong"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-muted">
                  {siteContent.footer.contactHeading}
                </p>
                <div className="mt-4 space-y-3 break-words text-sm leading-7 text-ink">
                  <p>{studioInfo.phone}</p>
                  <p>{studioInfo.email}</p>
                  <p>{studioInfo.addressLines.join(", ")}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-muted">
                  {siteContent.footer.hoursHeading}
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-ink">
                  {studioInfo.hours.map((entry) => (
                    <p key={entry.day}>
                      <span className="font-medium">{entry.day}</span>
                      <br />
                      <span className="text-muted">{entry.value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p>{siteContent.footer.copyright}</p>
            <div className="flex flex-wrap gap-4">
              {studioInfo.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:text-accent-strong"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
