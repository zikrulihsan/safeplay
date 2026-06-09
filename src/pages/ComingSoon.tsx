import { useNavigate } from 'react-router-dom';
import type { LearningModule } from '@/types/module';
import { BackgroundDecor } from '@/components/layout/BackgroundDecor';
import { Footer } from '@/components/layout/Footer';
import { RobiMascot } from '@/components/mascot/RobiMascot';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface ComingSoonProps {
  module: LearningModule;
}

/**
 * Friendly placeholder for a module that is still being built. It reuses the
 * module's own emoji, title, and tagline so the child sees a real preview of
 * what is coming, with Robi and a way back home.
 */
export function ComingSoon({ module }: ComingSoonProps) {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

  return (
    <>
      <BackgroundDecor reduceMotion={reduceMotion} />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-5 py-16 text-center">
        <span className="text-7xl" aria-hidden="true">
          {module.emoji}
        </span>

        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-extrabold text-sun-deep shadow-soft">
          <span className="h-2.5 w-2.5 rounded-full bg-grass" aria-hidden="true" />
          Segera Hadir
        </span>

        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          {module.title}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-lg font-bold text-ink-soft">{module.tagline}</p>

        <div className="mx-auto mt-6 w-[min(240px,56vw)]">
          <RobiMascot reduceMotion={reduceMotion} className="h-auto w-full" />
        </div>

        <p className="mt-4 font-bold text-ink-soft">
          Robi masih menyiapkan pelajaran ini. Sabar ya, segera bisa kamu coba! 🤖
        </p>

        <div className="mt-6">
          <Button variant={module.accent} size="lg" onClick={() => navigate('/')}>
            ← Kembali ke Beranda
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}
