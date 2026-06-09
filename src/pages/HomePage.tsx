import { BackgroundDecor } from '@/components/layout/BackgroundDecor';
import { Footer } from '@/components/layout/Footer';
import { RobiMascot } from '@/components/mascot/RobiMascot';
import { ModuleCard } from '@/components/home/ModuleCard';
import { Reveal } from '@/components/ui/Reveal';
import { MODULES } from '@/data/modules';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * The platform hub. Robi welcomes the child, then a grid of ModuleCards lets
 * them pick a learning module. Modules come straight from the MODULES registry.
 */
export function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <BackgroundDecor reduceMotion={reduceMotion} />

      <main className="relative">
        <header className="relative z-10 px-5 pb-4 pt-12 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-extrabold text-sun-deep shadow-soft">
            <span className="h-2.5 w-2.5 rounded-full bg-grass" aria-hidden="true" />
            Petualangan Anak Pintar
          </span>

          <h1 className="font-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-7xl">
            Aman{' '}
            <span className="relative inline-block text-coral">
              Yuk!
              <span
                className="absolute bottom-1.5 left-0 -z-10 h-3.5 w-full -rotate-2 rounded-lg bg-sun"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg font-bold text-ink-soft">
            Halo teman! Aku <strong>Robi</strong> si robot penjaga. Pilih satu pelajaran, yuk, biar
            kamu jadi anak yang hebat dan peduli sekitar! 🌟
          </p>

          <div className="mx-auto mt-4 w-[min(280px,64vw)]">
            <RobiMascot reduceMotion={reduceMotion} className="h-auto w-full" />
          </div>
        </header>

        <section className="relative z-10 mx-auto max-w-5xl px-5 pb-8 pt-6">
          <h2 className="sr-only">Pilih modul belajar</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module, i) => (
              <Reveal key={module.id} delay={i * 0.06}>
                <ModuleCard module={module} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
