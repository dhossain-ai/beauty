import type { Specialist } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/ui/media-frame";

interface SpecialistCardProps {
  specialist: Specialist;
}

export function SpecialistCard({ specialist }: SpecialistCardProps) {
  return (
    <article className="surface-card flex h-full flex-col rounded-[2rem] p-4 sm:p-5">
      <MediaFrame
        aspect="portrait"
        title={specialist.name}
        subtitle={specialist.role}
        tone={specialist.imageTone}
        className="rounded-[1.75rem]"
      />
      <div className="space-y-5 px-2 pb-2 pt-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {specialist.experience}
          </p>
          <h3 className="font-serif text-3xl leading-none text-ink-strong">
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
      </div>
    </article>
  );
}
