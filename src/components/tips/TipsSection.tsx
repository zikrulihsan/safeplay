import { TIPS } from '@/data/questions';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export interface TipsSectionProps {
  reduceMotion?: boolean;
}

export function TipsSection({ reduceMotion = false }: TipsSectionProps) {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-5 pt-16">
      <SectionHeading
        emoji="💡"
        title="Jurus Anak Pintar"
        subtitle="Ingat 4 hal ajaib ini setiap hari!"
        reduceMotion={reduceMotion}
      />
      <Reveal>
        <ul className="grid list-none grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          {TIPS.map((tip) => (
            <li
              key={tip.title}
              className="rounded-3xl border-[3px] border-[#FFE08A] bg-white p-5 shadow-soft transition-transform duration-200 hover:-translate-y-1.5 hover:-rotate-1"
            >
              <span className="text-4xl" aria-hidden="true">
                {tip.emoji}
              </span>
              <h3 className="mb-1 mt-2 font-display text-xl font-extrabold text-ink">
                {tip.title}
              </h3>
              <p className="font-bold leading-snug text-ink-soft">{tip.description}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
