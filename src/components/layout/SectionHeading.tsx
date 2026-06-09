import { Reveal } from '@/components/ui/Reveal';

export interface SectionHeadingProps {
  emoji: string;
  title: string;
  subtitle?: string;
  reduceMotion?: boolean;
}

export function SectionHeading({
  emoji,
  title,
  subtitle,
  reduceMotion = false,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-8 text-center">
      <span
        className={reduceMotion ? 'block text-5xl' : 'block animate-wiggle text-5xl'}
        aria-hidden="true"
      >
        {emoji}
      </span>
      <h2 className="mt-1 font-display text-3xl font-extrabold text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 font-bold text-ink-soft">{subtitle}</p>}
    </Reveal>
  );
}
