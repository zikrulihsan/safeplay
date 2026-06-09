import { Link } from 'react-router-dom';
import type { LearningModule, ModuleAccent } from '@/types/module';
import { cn } from '@/lib/cn';

/** Accent key -> chunky card styling, reusing the existing Tailwind palette. */
const ACCENT_CLASSES: Record<ModuleAccent, string> = {
  coral: 'bg-coral text-white shadow-coral-deep',
  grass: 'bg-grass text-white shadow-grass-deep',
  sun: 'bg-sun text-ink shadow-sun-deep',
  grape: 'bg-grape text-white shadow-grape-deep',
  sky: 'bg-sky-deep text-white shadow-[#4F8FE0]',
};

export interface ModuleCardProps {
  module: LearningModule;
}

/**
 * A tappable card linking to a module's page. Available modules invite the
 * child in; "coming-soon" modules still link to a friendly placeholder and
 * carry a "Segera" badge so they read as a promise, not a dead end.
 */
export function ModuleCard({ module }: ModuleCardProps) {
  const isComingSoon = module.status === 'coming-soon';

  return (
    <Link
      to={`/${module.slug}`}
      aria-label={`${module.title}${isComingSoon ? ' — segera hadir' : ''}`}
      className={cn(
        'group relative flex flex-col gap-2 rounded-[28px] p-6 text-left shadow-chunky transition-transform duration-100 will-change-transform',
        'hover:-translate-y-1 active:translate-y-1 active:shadow-chunky-sm',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/40',
        ACCENT_CLASSES[module.accent],
      )}
    >
      {isComingSoon && (
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink">
          Segera
        </span>
      )}

      <span className="text-5xl" aria-hidden="true">
        {module.emoji}
      </span>
      <h3 className="font-display text-2xl font-extrabold leading-tight">{module.title}</h3>
      <p className="font-bold opacity-90">{module.tagline}</p>

      <span className="mt-2 font-extrabold opacity-90">
        {isComingSoon ? 'Intip dulu yuk' : 'Ayo mulai'} <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
