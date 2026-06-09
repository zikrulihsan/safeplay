import { motion } from 'framer-motion';
import { RobiMascot } from '@/components/mascot/RobiMascot';
import { Button } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const HAZARDS_ANCHOR = 'bahaya';

export function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToHazards = () => {
    document.getElementById(HAZARDS_ANCHOR)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.6, delay, ease: 'easeOut' as const },
        };

  return (
    <header className="relative z-10 px-5 pb-6 pt-12 text-center">
      <motion.span
        {...fadeUp(0.05)}
        className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-extrabold text-sun-deep shadow-soft"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-grass" aria-hidden="true" />
        Petualangan Anak Aman
      </motion.span>

      <motion.h1
        {...fadeUp(0.15)}
        className="font-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-7xl"
      >
        Aman{' '}
        <span className="relative inline-block text-coral">
          Yuk!
          <span
            className="absolute bottom-1.5 left-0 -z-10 h-3.5 w-full -rotate-2 rounded-lg bg-sun"
            aria-hidden="true"
          />
        </span>
      </motion.h1>

      <motion.p {...fadeUp(0.3)} className="mx-auto mt-4 max-w-xl text-lg font-bold text-ink-soft">
        Halo teman! Aku <strong>Robi</strong> si robot penjaga. Ayo belajar hal-hal yang{' '}
        <strong>tidak boleh</strong> kita lakukan supaya selalu aman! 🛡️
      </motion.p>

      <motion.div {...fadeUp(0.25)} className="mx-auto mt-4 w-[min(360px,82vw)]">
        <RobiMascot reduceMotion={reduceMotion} className="h-auto w-full" />
      </motion.div>

      <motion.div {...fadeUp(0.45)} className="mt-6">
        <Button variant="coral" size="lg" onClick={scrollToHazards}>
          Mulai Belajar! 🚀
        </Button>
      </motion.div>

      <p
        className={
          reduceMotion
            ? 'mt-8 font-extrabold text-ink-soft'
            : 'mt-8 animate-bob font-extrabold text-ink-soft'
        }
        aria-hidden="true"
      >
        ▼ Geser ke bawah ▼
      </p>
    </header>
  );
}
