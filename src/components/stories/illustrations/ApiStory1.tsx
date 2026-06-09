import type { IllustrationProps } from '@/types';

/** Scene 1 — Doni notices a box of matches on the table and feels curious. */
export function ApiStory1({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 220 160"
      role="img"
      aria-label="Doni berdiri di dekat meja dan melihat sekotak korek api"
      {...props}
    >
      {/* Floor */}
      <rect x="0" y="138" width="220" height="22" rx="8" fill="#FFE3B0" />

      {/* Table */}
      <rect x="108" y="92" width="96" height="14" rx="6" fill="#C68A4E" />
      <rect x="118" y="106" width="10" height="34" rx="4" fill="#A8703A" />
      <rect x="184" y="106" width="10" height="34" rx="4" fill="#A8703A" />

      {/* Matchbox on the table */}
      <rect x="138" y="74" width="36" height="20" rx="4" fill="#E84855" />
      <rect x="138" y="84" width="36" height="10" rx="3" fill="#C5283D" />
      <rect x="150" y="62" width="3.5" height="14" rx="1.5" fill="#F4D58D" />
      <rect x="158" y="62" width="3.5" height="14" rx="1.5" fill="#F4D58D" />
      <circle cx="151.75" cy="61" r="3" fill="#FF6B35" />
      <circle cx="159.75" cy="61" r="3" fill="#FF6B35" />

      {/* Doni (curious child) */}
      <g>
        {/* legs */}
        <rect x="44" y="118" width="11" height="22" rx="5" fill="#3A2E5C" />
        <rect x="60" y="118" width="11" height="22" rx="5" fill="#3A2E5C" />
        {/* body */}
        <rect x="38" y="86" width="40" height="38" rx="16" fill="#FF6B6B" />
        {/* reaching arm */}
        <rect
          x="72"
          y="92"
          width="44"
          height="11"
          rx="5.5"
          fill="#FFD9B7"
          transform="rotate(-12 72 97)"
        />
        {/* head */}
        <circle cx="58" cy="68" r="20" fill="#FFD9B7" />
        <path d="M40 60 Q58 40 76 60 Q70 52 58 51 Q46 52 40 60Z" fill="#5C3A21" />
        <circle cx="52" cy="68" r="2.6" fill="#3A2E5C" />
        <circle cx="65" cy="68" r="2.6" fill="#3A2E5C" />
        <path d="M52 77 Q58 82 64 77" stroke="#3A2E5C" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </g>

      {/* Curiosity mark */}
      <text
        x="92"
        y="56"
        fontSize="26"
        fontWeight="bold"
        fill="#FF9F1C"
        className={reduceMotion ? undefined : 'animate-wiggle'}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      >
        ?
      </text>
    </svg>
  );
}
