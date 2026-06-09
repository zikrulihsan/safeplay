import type { IllustrationProps } from '@/types';

/** Scene 2 — Doni remembers Robi's lesson, steps back, and calls his mother. */
export function ApiStory2({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 220 160"
      role="img"
      aria-label="Doni mundur dengan tangan menolak dan memanggil Bunda"
      {...props}
    >
      {/* Floor */}
      <rect x="0" y="138" width="220" height="22" rx="8" fill="#FFE3B0" />

      {/* Table with matchbox, left behind */}
      <rect x="6" y="92" width="74" height="12" rx="6" fill="#C68A4E" />
      <rect x="14" y="104" width="9" height="34" rx="4" fill="#A8703A" />
      <rect x="64" y="104" width="9" height="34" rx="4" fill="#A8703A" />
      <rect x="28" y="76" width="30" height="16" rx="4" fill="#E84855" />
      <rect x="28" y="84" width="30" height="8" rx="3" fill="#C5283D" />

      {/* "No touching" sign over the matchbox */}
      <g className={reduceMotion ? undefined : 'animate-wiggle'} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <circle cx="43" cy="62" r="11" fill="none" stroke="#E84855" strokeWidth="3.5" />
        <line x1="35" y1="70" x2="51" y2="54" stroke="#E84855" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* Doni stepping back, hand up */}
      <g>
        <rect x="120" y="118" width="11" height="22" rx="5" fill="#3A2E5C" />
        <rect x="136" y="118" width="11" height="22" rx="5" fill="#3A2E5C" />
        <rect x="114" y="86" width="40" height="38" rx="16" fill="#FF6B6B" />
        {/* stop hand raised */}
        <rect
          x="96"
          y="84"
          width="34"
          height="11"
          rx="5.5"
          fill="#FFD9B7"
          transform="rotate(18 130 90)"
        />
        <circle cx="98" cy="80" r="8" fill="#FFD9B7" />
        {/* head */}
        <circle cx="134" cy="68" r="20" fill="#FFD9B7" />
        <path d="M116 60 Q134 40 152 60 Q146 52 134 51 Q122 52 116 60Z" fill="#5C3A21" />
        <circle cx="128" cy="68" r="2.6" fill="#3A2E5C" />
        <circle cx="141" cy="68" r="2.6" fill="#3A2E5C" />
        <path d="M128 78 Q134 74 140 78" stroke="#3A2E5C" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </g>

      {/* Speech bubble: "Bunda!" */}
      <g className={reduceMotion ? undefined : 'animate-bob'} style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
        <rect x="158" y="38" width="56" height="30" rx="12" fill="#fff" stroke="#A06CD5" strokeWidth="3" />
        <path d="M168 66 L160 80 L180 68Z" fill="#fff" stroke="#A06CD5" strokeWidth="3" />
        <text x="186" y="58" fontSize="15" fontWeight="bold" fill="#7E4FC0" textAnchor="middle">
          Bunda!
        </text>
      </g>
    </svg>
  );
}
