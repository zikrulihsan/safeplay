import type { IllustrationProps } from '@/types';

export function HeightsIllustration({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Ilustrasi jendela tinggi" {...props}>
      <g className={reduceMotion ? undefined : 'animate-bob'}>
        <rect
          x={26}
          y={20}
          width={48}
          height={56}
          rx={4}
          fill="#E0EAF5"
          stroke="#2FA84F"
          strokeWidth={3}
        />
        <line x1={50} y1={20} x2={50} y2={76} stroke="#2FA84F" strokeWidth={3} />
        <line x1={26} y1={48} x2={74} y2={48} stroke="#2FA84F" strokeWidth={3} />
        <path d="M70 80 l8 -8 m0 8 l-8 -8" stroke="#FF6B6B" strokeWidth={4} strokeLinecap="round" />
      </g>
    </svg>
  );
}
