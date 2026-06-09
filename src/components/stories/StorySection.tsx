import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { HazardId } from '@/types';
import { HAZARDS } from '@/data/hazards';
import { STORIES } from '@/data/stories';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export interface StorySectionProps {
  reduceMotion?: boolean;
}

/**
 * "Cerita Robi" — a separate section under the hazard grid. Children pick a
 * topic, then step through an illustrated story scene by scene. Topics without
 * a story yet are shown as locked ("segera hadir"), matching the platform's
 * coming-soon pattern.
 */
export function StorySection({ reduceMotion = false }: StorySectionProps) {
  const storyByHazard = useMemo(() => new Map(STORIES.map((s) => [s.hazardId, s])), []);
  const defaultId = STORIES[0]?.hazardId ?? null;

  const [activeId, setActiveId] = useState<HazardId | null>(defaultId);
  const [sceneIndex, setSceneIndex] = useState(0);

  const selectTopic = (id: HazardId) => {
    setActiveId(id);
    setSceneIndex(0);
  };

  // No stories authored yet — render nothing rather than an empty section.
  if (STORIES.length === 0) return null;

  const story = activeId ? storyByHazard.get(activeId) : undefined;
  const scene = story?.scenes[sceneIndex];
  if (!story || !scene) return null;

  const isFirst = sceneIndex === 0;
  const isLast = sceneIndex === story.scenes.length - 1;
  const { Illustration } = scene;

  return (
    <section id="cerita" className="relative z-10 mx-auto max-w-5xl px-5 pt-16">
      <SectionHeading
        emoji="📖"
        title="Cerita Robi"
        subtitle="Dengar cerita seru biar makin paham — pilih topiknya, yuk!"
        reduceMotion={reduceMotion}
      />

      {/* Topic picker */}
      <Reveal>
        <div
          role="tablist"
          aria-label="Pilih topik cerita"
          className="mb-6 flex flex-wrap justify-center gap-2.5"
        >
          {HAZARDS.map((hazard) => {
            const hasStory = storyByHazard.has(hazard.id);
            const isActive = hazard.id === activeId;
            return (
              <button
                key={hazard.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                disabled={!hasStory}
                aria-label={hasStory ? hazard.title : `${hazard.title} — cerita segera hadir`}
                onClick={() => selectTopic(hazard.id)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-display font-extrabold transition-transform',
                  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-grape/40',
                  isActive && 'bg-coral text-white shadow-chunky-sm',
                  !isActive && hasStory && 'bg-white text-ink shadow-soft hover:-translate-y-0.5',
                  !hasStory && 'cursor-default bg-white/60 text-ink-soft opacity-70',
                )}
              >
                <hazard.Illustration reduceMotion={reduceMotion} className="h-5 w-5" aria-hidden="true" />
                {hazard.title}
                {!hasStory && <span aria-hidden="true">🔒</span>}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Story stage */}
      <Reveal>
        <div className="mx-auto max-w-2xl rounded-[32px] border-4 border-white bg-white p-6 shadow-soft sm:p-8">
          <h3 className="text-center font-display text-2xl font-extrabold text-coral-deep">
            {story.title}
          </h3>

          <div
            aria-live="polite"
            className="mt-4 flex flex-col items-center gap-4 text-center"
          >
            <div className="grid w-full place-items-center rounded-[24px] bg-cream p-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={sceneIndex}
                  initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                  animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex w-full flex-col items-center gap-3"
                >
                  <Illustration reduceMotion={reduceMotion} className="h-auto w-full max-w-[300px]" />
                  <p className="text-lg font-bold leading-snug text-ink">{scene.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {isLast && (
              <p className="flex items-start gap-2.5 rounded-2xl bg-grass/15 px-4 py-3 text-left font-bold leading-snug text-grass-deep">
                <span aria-hidden="true">🤖</span>
                <span>
                  <span className="font-display">Pesan Robi: </span>
                  {story.moral}
                </span>
              </p>
            )}
          </div>

          {/* Progress dots */}
          <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
            {story.scenes.map((_, i) => (
              <span
                key={i}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  i === sceneIndex ? 'w-6 bg-coral' : 'w-2.5 bg-ink/20',
                )}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <Button
              variant="sky"
              onClick={() => setSceneIndex((i) => Math.max(0, i - 1))}
              disabled={isFirst}
              aria-label="Adegan sebelumnya"
            >
              ← Tadi
            </Button>

            <span className="font-extrabold text-ink-soft">
              Adegan {sceneIndex + 1} dari {story.scenes.length}
            </span>

            {isLast ? (
              <Button variant="grass" onClick={() => setSceneIndex(0)}>
                Ulangi 🔄
              </Button>
            ) : (
              <Button variant="coral" onClick={() => setSceneIndex((i) => i + 1)}>
                Lanjut →
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
