import { studioInfo } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { PageIntro } from "@/components/ui/page-intro";
import { pageTitle, siteName } from "@/lib/seo";

export const metadata = {
  title: pageTitle("Contact"),
  description: `Get in touch with ${siteName} to request a consultation, ask a question, or plan your next studio visit.`,
};

export default function ContactPage() {
  const fieldClassName =
    "w-full rounded-[1.15rem] border border-border bg-white/85 px-4 py-3.5 text-sm text-ink shadow-[0_6px_18px_rgba(69,54,48,0.03)] transition-[border-color,box-shadow] duration-300 placeholder:text-muted focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-accent-strong/25";

  return (
    <>
      <PageIntro
        eyebrow="Studio connect"
        title="Let's craft your beauty plan."
        description="We work by appointment so every visit feels focused, calm, and tailored. Share your goals and we will recommend the right treatment path and specialist fit."
      />

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-card rounded-[2.5rem] p-6 sm:p-10">
              <h2 className="font-serif text-3xl text-ink-strong sm:text-4xl">
                Booking Request
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                Tell us what you are hoping to refine, your preferred timing, and
                whether you already have a specialist in mind. We will shape the rest
                around that.
              </p>

              <form className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first_name"
                      className="text-xs font-semibold uppercase tracking-widest text-ink"
                    >
                      First Name
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      className={fieldClassName}
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last_name"
                      className="text-xs font-semibold uppercase tracking-widest text-ink"
                    >
                      Last Name
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      className={fieldClassName}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-widest text-ink"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={fieldClassName}
                    placeholder="hello@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold uppercase tracking-widest text-ink"
                  >
                    Interested In
                  </label>
                  <select id="service" className={fieldClassName}>
                    <option>Skin Rituals</option>
                    <option>Brow & Lash Sculpting</option>
                    <option>Bridal Prep Plan</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-widest text-ink"
                  >
                    Any Specific Goals?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={fieldClassName}
                    placeholder="Tell us what you're hoping to achieve..."
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2">
                  <p className="max-w-md text-sm leading-7 text-muted">
                    Response times are typically within one business day. We confirm
                    every request personally so recommendations stay tailored.
                  </p>
                  <Button type="button" size="lg" fullWidth>
                    Request Appointment
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-10 pl-0 lg:pl-4">
              <div className="surface-panel rounded-[2rem] p-6">
                <h3 className="font-serif text-2xl text-ink-strong">
                  Studio Information
                </h3>
                <div className="mt-6 flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Location
                    </p>
                    <div className="mt-2 text-sm leading-6 text-ink">
                      {studioInfo.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Contact
                    </p>
                    <p className="mt-2 text-sm text-ink">{studioInfo.phone}</p>
                    <p className="text-sm text-ink">{studioInfo.email}</p>
                  </div>
                </div>
              </div>

              <div className="surface-panel rounded-[2rem] p-6">
                <h3 className="font-serif text-2xl text-ink-strong">
                  Business Hours
                </h3>
                <div className="mt-6 flex flex-col gap-3">
                  {studioInfo.hours.map((hour) => (
                    <div
                      key={hour.day}
                      className="flex flex-col gap-1.5 border-b border-border/70 pb-3 text-sm last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                    >
                      <span className="text-muted">{hour.day}</span>
                      <span className="font-medium text-ink sm:text-right">{hour.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-64 overflow-hidden rounded-3xl">
                <MediaFrame
                  aspect="landscape"
                  tone="mocha"
                  className="h-full w-full"
                  title="Studio entrance"
                  subtitle="A quiet arrival, just off the avenue."
                  label={studioInfo.name}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
