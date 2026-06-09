import type { IllustrationProps } from '@/types';

/** Scene 3 — Mom puts the matches away safely and Doni is a happy, safe hero. */
export function ApiStory3({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 220 160"
      role="img"
      aria-label="Bunda menyimpan korek api di tempat tinggi, Doni tersenyum aman"
      {...props}
    >
      {/* Floor */}
      <rect x="0" y="138" width="220" height="22" rx="8" fill="#FFE3B0" />

      {/* Mom holding the matchbox up high */}
      <g>
        <rect x="40" y="116" width="12" height="24" rx="6" fill="#3A2E5C" />
        <rect x="58" y="116" width="12" height="24" rx="6" fill="#3A2E5C" />
        {/* dress */}
        <path d="M36 78 Q55 70 74 78 L82 118 L28 118Z" fill="#A06CD5" />
        {/* raised arm + matchbox kept safe */}
        <rect x="64" y="44" width="11" height="40" rx="5.5" fill="#FFD9B7" transform="rotate(-10 69 64)" />
        <rect x="64" y="30" width="30" height="16" rx="4" fill="#E84855" />
        <rect x="64" y="38" width="30" height="8" rx="3" fill="#C5283D" />
        {/* head */}
        <circle cx="55" cy="58" r="19" fill="#FFD9B7" />
        <path d="M37 56 Q40 32 55 33 Q70 32 73 56 Q73 44 55 43 Q37 44 37 56Z" fill="#3A2E5C" />
        <circle cx="49" cy="58" r="2.5" fill="#3A2E5C" />
        <circle cx="61" cy="58" r="2.5" fill="#3A2E5C" />
        <path d="M49 66 Q55 71 61 66" stroke="#3A2E5C" strokeWidth="2.3" fill="none" strokeLinecap="round" />
      </g>

      {/* Doni, safe and proud, thumbs up */}
      <g>
        <rect x="138" y="120" width="10" height="20" rx="5" fill="#3A2E5C" />
        <rect x="152" y="120" width="10" height="20" rx="5" fill="#3A2E5C" />
        <rect x="132" y="92" width="36" height="34" rx="14" fill="#FF6B6B" />
        {/* thumbs-up arm */}
        <rect x="120" y="96" width="22" height="10" rx="5" fill="#FFD9B7" />
        <circle cx="119" cy="98" r="7" fill="#FFD9B7" />
        {/* head */}
        <circle cx="150" cy="76" r="18" fill="#FFD9B7" />
        <path d="M134 69 Q150 51 166 69 Q160 61 150 60 Q140 61 134 69Z" fill="#5C3A21" />
        <circle cx="144" cy="76" r="2.5" fill="#3A2E5C" />
        <circle cx="156" cy="76" r="2.5" fill="#3A2E5C" />
        <path d="M143 84 Q150 90 157 84" stroke="#3A2E5C" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </g>

      {/* Star reward */}
      <path
        d="M194 36 l4.5 9.5 10.5 1.4 -7.7 7.3 1.9 10.4 -9.2-4.9 -9.2 4.9 1.9-10.4 -7.7-7.3 10.5-1.4Z"
        fill="#FFC93C"
        stroke="#FF9F1C"
        strokeWidth="2"
        className={reduceMotion ? undefined : 'animate-wiggle'}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />
    </svg>
  );
}
