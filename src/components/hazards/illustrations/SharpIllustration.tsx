import type { IllustrationProps } from '@/types';

export function SharpIllustration({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Ilustrasi benda tajam" {...props}>
      <g className={reduceMotion ? undefined : 'animate-bob'}>
        <rect x={44} y={20} width={12} height={44} rx={3} fill="#E0EAF5" />
        <path d="M44 20 L56 20 L50 8 Z" fill="#B9CBE0" />
        <rect x={42} y={62} width={16} height={26} rx={5} fill="#3A2E5C" />
      </g>
    </svg>
  );
}
