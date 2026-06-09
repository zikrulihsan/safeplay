import { useEffect, useState } from 'react';
import { useGame } from '@/hooks/useGame';
import { summariseResult } from '@/lib/gameResult';
import { ConfettiBurst } from '@/components/ui/Confetti';
import { ScoreBoard } from './ScoreBoard';
import { ScenarioCard } from './ScenarioCard';
import { GameResult } from './GameResult';

/** Delay before auto-advancing to the next question, in milliseconds. */
const ADVANCE_DELAY_MS = 1700;

export interface SafetyGameProps {
  reduceMotion?: boolean;
}

export function SafetyGame({ reduceMotion = false }: SafetyGameProps) {
  const game = useGame();
  const { status, answered, lastCorrect, currentScenario, next, score, total } = game;
  const [burst, setBurst] = useState(0);

  // Celebrate correct answers with confetti.
  useEffect(() => {
    if (answered && lastCorrect) setBurst((b) => b + 1);
  }, [answered, lastCorrect]);

  // Auto-advance shortly after an answer is given.
  useEffect(() => {
    if (!answered) return;
    const timer = window.setTimeout(() => next(), ADVANCE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [answered, next]);

  // Celebrate a winning final result.
  useEffect(() => {
    if (status === 'finished' && summariseResult(score, total).celebrate) {
      setBurst((b) => b + 1);
    }
  }, [status, score, total]);

  return (
    <div className="relative overflow-hidden rounded-[34px] border-[5px] border-sun bg-white px-6 pb-9 pt-7 text-center shadow-soft">
      <ConfettiBurst burstId={burst} big={status === 'finished'} />
      <ScoreBoard score={score} questionNumber={game.questionNumber} total={total} />

      {status === 'playing' && currentScenario ? (
        <ScenarioCard
          scenario={currentScenario}
          answered={answered}
          lastCorrect={lastCorrect}
          reduceMotion={reduceMotion}
          onAnswer={game.answer}
        />
      ) : (
        <div className="py-6">
          <GameResult
            score={score}
            total={total}
            reduceMotion={reduceMotion}
            onReplay={game.start}
          />
        </div>
      )}
    </div>
  );
}
