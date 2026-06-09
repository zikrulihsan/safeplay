import type { IllustrationProps } from '@/types';

export function ChemicalIllustration({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Ilustrasi botol bahan kimia" {...props}>
      <g className={reduceMotion ? undefined : 'animate-bob'}>
        <rect
          x={38}
          y={30}
          width={24}
          height={46}
          rx={8}
          fill="#C8F0C8"
          stroke="#7E4FC0"
          strokeWidth={3}
        />
        <rect x={42} y={20} width={16} height={14} rx={4} fill="#7E4FC0" />
        <text x={50} y={61} fontSize={18} textAnchor="middle" fill="#7E4FC0">
          &#9760;
        </text>
      </g>
    </svg>
  );
}
