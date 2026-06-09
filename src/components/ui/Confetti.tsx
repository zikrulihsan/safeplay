import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const COLORS = ['#FFC93C', '#FF6B6B', '#5BC56B', '#7FD0F5', '#A06CD5', '#FF9F1C'];

interface Piece {
  id: string;
  left: number;
  delay: number;
  duration: number;
  rotate: number;
  color: string;
  round: boolean;
}

function makePieces(count: number, burstId: number): Piece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${burstId}-${i}`,
    left: Math.random() * 100,
    delay: Math.random() * 0.2,
    duration: 1.6 + Math.random() * 1.4,
    rotate: 360 + Math.random() * 360,
    color: COLORS[Math.floor(Math.random() * COLORS.length)] ?? COLORS[0]!,
    round: Math.random() > 0.5,
  }));
}

export interface ConfettiBurstProps {
  /** Increment this to trigger a new burst. A value of 0 renders nothing. */
  burstId: number;
  /** Larger celebratory burst (e.g. on a winning result). */
  big?: boolean;
}

/**
 * Renders a one-shot confetti burst whenever `burstId` changes. Purely
 * decorative, so it is skipped entirely when the user prefers reduced motion.
 */
export function ConfettiBurst({ burstId, big = false }: ConfettiBurstProps) {
  const reduceMotion = useReducedMotion();
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (burstId <= 0 || reduceMotion) return;
    const next = makePieces(big ? 60 : 20, burstId);
    setPieces(next);
    const longest = Math.max(...next.map((p) => p.duration + p.delay));
    const timer = window.setTimeout(() => setPieces([]), longest * 1000 + 100);
    return () => window.clearTimeout(timer);
  }, [burstId, big, reduceMotion]);

  if (pieces.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-0 block h-3 w-3"
          style={{
            left: `${p.left}vw`,
            backgroundColor: p.color,
            borderRadius: p.round ? '9999px' : '2px',
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ y: '105vh', opacity: 0.9, rotate: p.rotate }}
          transition={{ duration: p.duration, delay: p.delay, ease: [0.3, 0.6, 0.7, 1] }}
        />
      ))}
    </div>
  );
}
