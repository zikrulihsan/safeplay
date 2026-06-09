import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { summariseResult } from '@/lib/gameResult';

export interface GameResultProps {
  score: number;
  total: number;
  reduceMotion?: boolean;
  onReplay: () => void;
}

export function GameResult({ score, total, reduceMotion = false, onReplay }: GameResultProps) {
  const { star, title, message } = summariseResult(score, total);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-3.5"
      role="status"
    >
      <span className={reduceMotion ? 'text-6xl' : 'animate-wiggle text-6xl'} aria-hidden="true">
        {star}
      </span>
      <h3 className="font-display text-3xl font-extrabold text-ink">{title}</h3>
      <p className="max-w-sm font-bold text-ink-soft">{message}</p>
      <Button variant="grape" onClick={onReplay} className="mt-1">
        Main Lagi 🔄
      </Button>
    </motion.div>
  );
}
