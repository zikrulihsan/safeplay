import type { IllustrationProps } from '@/types';

export function WaterIllustration({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Ilustrasi air dalam" {...props}>
      <path
        className={reduceMotion ? undefined : 'animate-bob'}
        d="M50 14 C50 14 74 46 74 64 A24 24 0 0 1 26 64 C26 46 50 14 50 14Z"
        fill="#9BE7FF"
        stroke="#2F7FD0"
        strokeWidth={3}
      />
      <circle cx={42} cy={58} r={4} fill="#fff" opacity={0.8} />
    </svg>
  );
}
