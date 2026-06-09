import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BackgroundDecor } from '@/components/layout/BackgroundDecor';
import { Footer } from '@/components/layout/Footer';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface ModuleLayoutProps {
  children: ReactNode;
}

/**
 * Shared chrome for every module page: the animated background, a top bar with
 * a "back to home" link and the platform logo, and the parents' footer.
 * Centralising this keeps each module page focused on its own content.
 */
export function ModuleLayout({ children }: ModuleLayoutProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <BackgroundDecor reduceMotion={reduceMotion} />

      <nav className="relative z-20 mx-auto flex max-w-5xl items-center justify-between px-5 pt-5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-display font-extrabold text-ink shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun"
        >
          <span aria-hidden="true">←</span> Beranda
        </Link>
        <Link
          to="/"
          className="font-display text-xl font-extrabold text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun"
        >
          Aman Yuk! <span aria-hidden="true">🛡️</span>
        </Link>
      </nav>

      <main className="relative">{children}</main>

      <Footer />
    </>
  );
}
