import { cn } from '@/lib/cn';

function Cloud({ className }: { className?: string }) {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" className={className} aria-hidden="true">
      <ellipse cx="40" cy="40" rx="40" ry="20" fill="#fff" />
      <ellipse cx="75" cy="30" rx="30" ry="22" fill="#fff" />
      <ellipse cx="95" cy="42" rx="25" ry="16" fill="#fff" />
    </svg>
  );
}

export interface BackgroundDecorProps {
  reduceMotion?: boolean;
}

/** Soft floating blobs and drifting clouds behind all content. */
export function BackgroundDecor({ reduceMotion = false }: BackgroundDecorProps) {
  const float = reduceMotion ? '' : 'animate-drift';
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <span
        className={cn(
          'absolute -left-12 -top-16 h-60 w-60 rounded-full bg-sky opacity-50 blur-sm',
          float,
        )}
      />
      <span
        className={cn(
          'absolute -right-10 top-1/3 h-44 w-44 rounded-full bg-[#FFE08A] opacity-50 blur-sm',
          float,
        )}
        style={{ animationDelay: '-4s' }}
      />
      <span
        className={cn(
          'absolute -bottom-12 left-[10%] h-52 w-52 rounded-full bg-[#FFC9C9] opacity-50 blur-sm',
          float,
        )}
        style={{ animationDelay: '-8s' }}
      />
      <span
        className={cn(
          'absolute bottom-[20%] right-[15%] h-40 w-40 rounded-full bg-[#C8F0C8] opacity-50 blur-sm',
          float,
        )}
        style={{ animationDelay: '-12s' }}
      />
      {!reduceMotion && (
        <>
          <Cloud className="absolute left-0 top-[8%] animate-floatX opacity-90" />
          <Cloud
            className="absolute left-0 top-[18%] scale-75 animate-floatX opacity-90"
            // longer, offset drift for parallax feel
          />
        </>
      )}
    </div>
  );
}
