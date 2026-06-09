import { cn } from '@/lib/cn';

export interface RobiMascotProps {
  className?: string;
  reduceMotion?: boolean;
}

/** Robi — the friendly robot guardian who hosts the experience. */
export function RobiMascot({ className, reduceMotion = false }: RobiMascotProps) {
  return (
    <svg
      viewBox="0 0 220 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Robi si robot penjaga keamanan sedang melambai"
      className={cn(!reduceMotion && 'animate-bob', className)}
    >
      {/* Antenna */}
      <g style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}>
        {!reduceMotion && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-8 110 42;8 110 42;-8 110 42"
            dur="2.5s"
            repeatCount="indefinite"
          />
        )}
        <line
          x1={110}
          y1={42}
          x2={110}
          y2={14}
          stroke="#6C5B8C"
          strokeWidth={6}
          strokeLinecap="round"
        />
        <circle cx={110} cy={12} r={9} fill="#FF6B6B">
          {!reduceMotion && (
            <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
          )}
        </circle>
      </g>

      {/* Head */}
      <rect
        x={48}
        y={42}
        width={124}
        height={100}
        rx={32}
        fill="#7FD0F5"
        stroke="#4F8FE0"
        strokeWidth={5}
      />
      <rect x={62} y={62} width={96} height={58} rx={22} fill="#3A2E5C" />

      {/* Eyes */}
      <circle cx={92} cy={91} r={13} fill="#9BE7FF" />
      <circle cx={128} cy={91} r={13} fill="#9BE7FF" />
      <circle cx={95} cy={88} r={4} fill="#fff" />
      <circle cx={131} cy={88} r={4} fill="#fff" />

      {/* Cheeks + smile */}
      <circle cx={68} cy={110} r={7} fill="#FF9CA8" opacity={0.8} />
      <circle cx={152} cy={110} r={7} fill="#FF9CA8" opacity={0.8} />
      <path
        d="M98 108 q12 10 24 0"
        stroke="#9BE7FF"
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />

      {/* Body */}
      <rect
        x={58}
        y={146}
        width={104}
        height={78}
        rx={26}
        fill="#FFC93C"
        stroke="#FF9F1C"
        strokeWidth={5}
      />
      <circle cx={110} cy={182} r={22} fill="#fff" stroke="#FF9F1C" strokeWidth={4} />
      <path
        d="M101 182 l6 6 12 -13"
        stroke="#5BC56B"
        strokeWidth={5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arms (waving) */}
      <rect
        x={30}
        y={150}
        width={22}
        height={50}
        rx={11}
        fill="#7FD0F5"
        stroke="#4F8FE0"
        strokeWidth={4}
      >
        {!reduceMotion && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 41 150;18 41 150;0 41 150"
            dur="2.2s"
            repeatCount="indefinite"
          />
        )}
      </rect>
      <rect
        x={168}
        y={150}
        width={22}
        height={50}
        rx={11}
        fill="#7FD0F5"
        stroke="#4F8FE0"
        strokeWidth={4}
      >
        {!reduceMotion && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 179 150;-18 179 150;0 179 150"
            dur="2.2s"
            repeatCount="indefinite"
          />
        )}
      </rect>

      {/* Legs */}
      <rect x={74} y={222} width={20} height={14} rx={7} fill="#6C5B8C" />
      <rect x={126} y={222} width={20} height={14} rx={7} fill="#6C5B8C" />
    </svg>
  );
}
