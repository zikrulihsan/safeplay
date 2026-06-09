import { AnimatePresence, motion } from 'framer-motion';
import type { SafetyScenario } from '@/types';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export interface ScenarioCardProps {
  scenario: SafetyScenario;
  answered: boolean;
  lastCorrect: boolean | null;
  reduceMotion?: boolean;
  onAnswer: (choseSafe: boolean) => void;
}

export function ScenarioCard({
  scenario,
  answered,
  lastCorrect,
  reduceMotion = false,
  onAnswer,
}: ScenarioCardProps) {
  const feedback = answered
    ? lastCorrect
      ? `🎉 Benar! ${scenario.tip}`
      : `💡 Hampir! ${scenario.tip}`
    : '';

  const motionProps = reduceMotion
    ? { initial: false as const, animate: { opacity: 1, scale: 1 } }
    : {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
        transition: { duration: 0.25 },
      };

  return (
    <div>
      <div className="my-3.5 flex min-h-[170px] flex-col items-center justify-center gap-3.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario.id}
            {...motionProps}
            className="flex flex-col items-center gap-3.5"
          >
            <span className="text-7xl" aria-hidden="true">
              {scenario.emoji}
            </span>
            <p className="max-w-md font-display text-xl font-bold sm:text-2xl">{scenario.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-2.5 flex flex-wrap justify-center gap-4">
        <Button
          variant="grass"
          size="lg"
          disabled={answered}
          onClick={() => onAnswer(true)}
          className="min-w-40"
        >
          ✅ Aman
        </Button>
        <Button
          variant="coral"
          size="lg"
          disabled={answered}
          onClick={() => onAnswer(false)}
          className="min-w-40"
        >
          🚫 Bahaya
        </Button>
      </div>

      <p
        aria-live="polite"
        className={cn(
          'mt-3 min-h-[3rem] font-display text-xl font-extrabold',
          answered && lastCorrect && 'text-grass-deep',
          answered && lastCorrect === false && 'text-coral-deep',
          answered && lastCorrect === false && !reduceMotion && 'animate-[wiggle_0.4s_ease-in-out]',
        )}
      >
        {feedback}
      </p>
    </div>
  );
}
