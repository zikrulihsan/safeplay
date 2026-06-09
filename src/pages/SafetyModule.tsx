import { Hero } from '@/components/layout/Hero';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { HazardSection } from '@/components/hazards/HazardSection';
import { StorySection } from '@/components/stories/StorySection';
import { SafetyGame } from '@/components/game/SafetyGame';
import { TipsSection } from '@/components/tips/TipsSection';
import { Reveal } from '@/components/ui/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * The original "Aman Yuk" child-safety experience, now scoped as a single
 * module rendered inside ModuleLayout. Shared chrome (BackgroundDecor, nav,
 * Footer) lives in the layout; this page owns only the safety content.
 */
export function SafetyModule() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Hero />

      <HazardSection reduceMotion={reduceMotion} />

      <StorySection reduceMotion={reduceMotion} />

      <section className="relative z-10 mx-auto max-w-5xl px-5 pt-16">
        <SectionHeading
          emoji="🎮"
          title="Aman atau Bahaya?"
          subtitle="Pilih jawaban yang benar dan kumpulkan bintang!"
          reduceMotion={reduceMotion}
        />
        <Reveal>
          <SafetyGame reduceMotion={reduceMotion} />
        </Reveal>
      </section>

      <TipsSection reduceMotion={reduceMotion} />
    </>
  );
}
