import { useState } from 'react';
import type { Accent, Hazard } from '@/types';
import { cn } from '@/lib/cn';

const ACCENT_GRADIENT: Record<Accent, string> = {
  fire: 'from-[#FF8A5B] to-[#E84855]',
  electricity: 'from-[#FFC93C] to-[#FF9F1C]',
  sharp: 'from-[#7FD0F5] to-[#4F8FE0]',
  water: 'from-[#5BC9E8] to-[#2F7FD0]',
  chemical: 'from-[#A06CD5] to-[#7E4FC0]',
  heights: 'from-[#5BC56B] to-[#2FA84F]',
};

export interface HazardCardProps {
  hazard: Hazard;
  reduceMotion?: boolean;
}

export function HazardCard({ hazard, reduceMotion = false }: HazardCardProps) {
  const [flipped, setFlipped] = useState(false);
  const { title, warning, why, safeAction, accent, Illustration } = hazard;

  return (
    <button
      type="button"
      aria-expanded={flipped}
      aria-label={`Bahaya ${title}. ${warning}. Ketuk untuk melihat penjelasan.`}
      onClick={() => setFlipped((f) => !f)}
      className="perspective block h-[340px] w-full text-left"
    >
      <div
        className={cn(
          'preserve-3d relative h-full w-full',
          !reduceMotion && 'transition-transform duration-700',
          flipped && 'rotate-y-180',
        )}
        style={reduceMotion ? undefined : { transitionTimingFunction: 'cubic-bezier(.6,.2,.1,1)' }}
      >
        {/* Front */}
        <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-[28px] border-4 border-white bg-white p-6 text-center shadow-soft">
          <Illustration reduceMotion={reduceMotion} className="mb-2 h-28 w-28" />
          <h3 className="font-display text-2xl font-extrabold text-ink">{title}</h3>
          <span className="mt-1.5 rounded-full bg-[#FFE3E3] px-3.5 py-1 text-sm font-extrabold text-coral-deep">
            {warning}
          </span>
          <span className="absolute bottom-4 text-sm font-extrabold text-ink-soft opacity-80">
            Ketuk aku 👆
          </span>
        </div>

        {/* Back */}
        <div
          className={cn(
            'backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center rounded-[28px] border-4 border-white bg-gradient-to-br p-6 text-center text-white shadow-soft',
            ACCENT_GRADIENT[accent],
          )}
        >
          <h3 className="font-display text-xl font-extrabold">Kenapa? 🤔</h3>
          <p className="mt-3.5 flex items-start gap-2.5 text-left font-bold leading-snug">
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-white/30">
              ⚠️
            </span>
            <span>{why}</span>
          </p>
          <p className="mt-3 flex items-start gap-2.5 text-left font-bold leading-snug">
            <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-white/30">
              ✅
            </span>
            <span>{safeAction}</span>
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-grass-deep">
            👍 Kamu pasti bisa aman!
          </span>
        </div>
      </div>
    </button>
  );
}
