import Link from "next/link";
import { navigation, studioInfo } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="section-space-tight border-t border-white/70">
      <Container>
        <div className="surface-panel rounded-[2.5rem] px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <div>
                <p className="font-serif text-4xl leading-none text-ink-strong">
                  {studioInfo.shortName}
                </p>
                <p className="mt-3 max-w-lg text-base leading-8 text-muted">
                  {studioInfo.tagline} This Phase 0 foundation uses structured
                  static content and reusable components so future page and CMS
                  work can extend cleanly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="#contact">Book consultation</Button>
                <Button href="#journal" variant="secondary">
                  Read the journal
                </Button>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-muted">
                  Navigate
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-ink transition-colors hover:text-accent-strong"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-muted">
                  Contact
                </p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-ink">
                  <p>{studioInfo.phone}</p>
                  <p>{studioInfo.email}</p>
                  <p>{studioInfo.addressLines.join(", ")}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-muted">
                  Hours
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

          <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {studioInfo.shortName}. Built as a premium frontend-only concept.</p>
            <div className="flex flex-wrap gap-4">
              {studioInfo.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent-strong"
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
