import { HAZARDS } from '@/data/hazards';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { HazardCard } from './HazardCard';

export interface HazardSectionProps {
  reduceMotion?: boolean;
}

export function HazardSection({ reduceMotion = false }: HazardSectionProps) {
  return (
    <section id="bahaya" className="relative z-10 mx-auto max-w-5xl px-5 pt-16">
      <SectionHeading
        emoji="⚠️"
        title="Awas, Ini Berbahaya!"
        subtitle="Ketuk tiap kartu untuk tahu apa yang harus kamu lakukan 👆"
        reduceMotion={reduceMotion}
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {HAZARDS.map((hazard, i) => (
          <Reveal key={hazard.id} delay={i * 0.06}>
            <HazardCard hazard={hazard} reduceMotion={reduceMotion} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
