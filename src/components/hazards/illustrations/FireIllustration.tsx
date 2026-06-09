import type { IllustrationProps } from '@/types';

export function FireIllustration({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Ilustrasi api" {...props}>
      <g
        className={reduceMotion ? undefined : 'animate-flicker'}
        style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
      >
        <path
          d="M50 12 C62 34 78 40 70 64 C66 80 56 86 50 86 C44 86 30 80 30 64 C24 44 40 38 50 12Z"
          fill="#FFD23F"
        />
        <path
          d="M50 30 C58 44 66 48 60 64 C57 74 53 78 50 78 C47 78 38 74 38 64 C34 50 44 44 50 30Z"
          fill="#FF6B35"
        />
        <path
          d="M50 48 C54 56 58 58 55 66 C53 71 51 73 50 73 C49 73 45 71 45 66 C43 58 47 54 50 48Z"
          fill="#FFF3B0"
        />
      </g>
    </svg>
  );
}
