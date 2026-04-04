import type { Specialist } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/ui/media-frame";

interface SpecialistCardProps {
  specialist: Specialist;
}

export function SpecialistCard({ specialist }: SpecialistCardProps) {
  return (
    <article className="surface-card group flex h-full flex-col rounded-[2rem] p-4 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-5">
      <MediaFrame
        aspect="portrait"
        title={specialist.name}
        subtitle={specialist.role}
        label="Resident specialist"
        tone={specialist.imageTone}
        image={specialist.image}
        className="rounded-[1.75rem]"
      />
      <div className="space-y-5 px-2 pb-2 pt-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {specialist.experience}
          </p>
          <h3 className="card-title font-serif text-ink-strong transition-colors duration-300 group-hover:text-ink">
            {specialist.name}
          </h3>
          <p className="text-sm leading-7 text-muted">{specialist.role}</p>
        </div>
        <p className="text-sm leading-7 text-ink">“{specialist.quote}”</p>
        <div className="flex flex-wrap gap-2">
          {specialist.specialties.map((specialty) => (
            <Badge key={specialty} variant="soft" className="tracking-[0.18em]">
              {specialty}
            </Badge>
          ))}
        </div>
        <div className="mt-4 border-t border-border/70 pt-5">
           <Button href={`/specialists/${specialist.slug}`} size="md" variant="secondary" fullWidth>
             View Profile
           </Button>
        </div>
      </div>
    </article>
  );
}
