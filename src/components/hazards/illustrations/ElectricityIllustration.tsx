import type { IllustrationProps } from '@/types';

export function ElectricityIllustration({ reduceMotion = false, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Ilustrasi sambaran listrik" {...props}>
      <path
        className={reduceMotion ? undefined : 'animate-flicker'}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        d="M56 8 L30 54 H48 L42 92 L74 40 H54 Z"
        fill="#FFD23F"
        stroke="#FF9F1C"
        strokeWidth={3}
        strokeLinejoin="round"
      />
      {!reduceMotion && (
        <>
          <circle cx={22} cy={26} r={5} fill="#fff">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={80} cy={70} r={4} fill="#fff">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.1s" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  );
}
