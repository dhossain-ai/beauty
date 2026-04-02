import { galleryItems } from "@/data/gallery";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata = {
  title: "Gallery | Maison de Lueur",
  description: "A curated visual portfolio of our soft luxury beauty rituals.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Portfolio</Badge>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[5.5rem]">
              The visual diary.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              A curated selection of our work, focusing on natural enhancement, refined textures, and the calm environment of our studio.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
            {galleryItems.map((item) => (
              <div key={item.slug} className="break-inside-avoid">
                <div className="group relative w-full overflow-hidden rounded-[2rem] bg-shell-soft shadow-[0_4px_24px_rgba(69,54,48,0.02)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(69,54,48,0.06)]">
                  <MediaFrame
                    aspect={item.aspect}
                    tone={item.imageTone}
                    title={item.title}
                    subtitle={item.service}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/5" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-serif text-xl text-ink-strong drop-shadow-sm">{item.title}</p>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink drop-shadow-sm">{item.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Ready for your own transformation?"
        description="Connect with our specialists for a tailored beauty plan that respects your individual needs."
      />
    </>
  );
}
