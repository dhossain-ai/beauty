import { pricingCategories, pricingSnippets } from "@/data/pricing";
import { faqItems } from "@/data/faq";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata = {
  title: "Pricing & Memberships | Maison de Lueur",
  description: "Transparent, premium pricing for our soft luxury beauty rituals.",
};

export default function PricingPage() {
  const treatmentFaqs = faqItems.filter((f) => f.category === "Treatments");
  const studioFaqs = faqItems.filter((f) => f.category === "Studio");

  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Investment</Badge>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[5.5rem]">
              Pricing & Protocols.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              We believe in complete transparency. Our pricing reflects the high-grade ingredients we use, the time we reserve exclusively for you, and the specialized training of our artists.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
           <div className="flex flex-col gap-20">
              {pricingCategories.map((category) => {
                 const isMembership = category.title === "Studio Memberships";
                 
                 return (
                   <div key={category.title} className={`grid gap-10 lg:grid-cols-[0.8fr_1.2fr] ${isMembership ? "rounded-[3rem] bg-shell-soft/50 p-8 lg:p-12" : ""}`}>
                      <div className="lg:pr-10">
                         <h2 className="font-serif text-3xl text-ink-strong sm:text-4xl">{category.title}</h2>
                         <p className="mt-4 text-lg text-muted">{category.description}</p>
                      </div>
                      
                      <div className="grid gap-4 sm:grid-cols-2">
                         {category.packages.map((pkg) => (
                            <div 
                               key={pkg.title} 
                               className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 ${
                                  pkg.isPopular 
                                    ? "bg-ink text-shell-soft shadow-[0_20px_40px_rgba(69,54,48,0.12)] ring-1 ring-ink-strong" 
                                    : "border border-border/70 bg-white shadow-sm"
                               }`}
                            >
                               {pkg.isPopular && (
                                 <div className="absolute -top-3 right-6 rounded-full bg-accent-strong px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-ink shadow-sm">
                                   Most Requested
                                 </div>
                               )}
                               <div>
                                  <h3 className={`font-serif text-2xl ${pkg.isPopular ? "text-shell-soft" : "text-ink-strong"}`}>{pkg.title}</h3>
                                  <p className={`mt-2 text-sm ${pkg.isPopular ? "text-white/70" : "text-muted"}`}>{pkg.description}</p>
                                  
                                  <ul className="mt-6 flex flex-col gap-3">
                                     {pkg.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm">
                                           <span className={`mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full ${pkg.isPopular ? "bg-accent-strong" : "bg-ink/30"}`} />
                                           <span className={pkg.isPopular ? "text-white/90" : "text-ink"}>{item}</span>
                                        </li>
                                     ))}
                                  </ul>
                               </div>
                               
                               <div className={`mt-8 border-t pt-6 ${pkg.isPopular ? "border-white/10" : "border-border/70"}`}>
                                  <p className={`font-serif text-3xl ${pkg.isPopular ? "text-white" : "text-ink-strong"}`}>{pkg.price}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                 );
              })}
           </div>
        </Container>
      </section>

      <section className="section-space shrink-0 bg-shell-soft">
        <Container>
          <div className="mb-14 text-center">
             <SectionHeading 
               eyebrow="Common Questions"
               title="Studio FAQ"
               description="Everything you need to know before booking your first appointment."
             />
          </div>
          
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
             <div>
                <h3 className="mb-6 font-serif text-2xl text-ink-strong">Treatments & Booking</h3>
                <div className="flex flex-col gap-6">
                   {treatmentFaqs.map((faq, i) => (
                      <div key={i} className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                         <h4 className="font-semibold text-ink">{faq.question}</h4>
                         <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
                      </div>
                   ))}
                </div>
             </div>
             
             <div>
                <h3 className="mb-6 font-serif text-2xl text-ink-strong">Studio Policies</h3>
                <div className="flex flex-col gap-6">
                   {studioFaqs.map((faq, i) => (
                      <div key={i} className="rounded-2xl border border-border/50 bg-white p-6 shadow-sm">
                         <h4 className="font-semibold text-ink">{faq.question}</h4>
                         <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Ready to begin?"
        description="Connect with our concierge to secure your preferred date and time."
      />
    </>
  );
}
