import type { ComponentType } from 'react';

/** Whether a learning module is ready to play or still being built. */
export type ModuleStatus = 'available' | 'coming-soon';

/**
 * Accent palette keys for a module's card and pages. Each maps to an existing
 * color in `tailwind.config.ts`, so adding a module needs no Tailwind changes.
 */
export type ModuleAccent = 'coral' | 'grass' | 'sun' | 'grape' | 'sky';

/**
 * One learning module in the "Aman Yuk" platform. The registry in
 * `src/data/modules.ts` is the single source of truth: the home hub renders a
 * card per module and the router builds one route per `slug`.
 */
export interface LearningModule {
  readonly id: string;
  /** URL path segment, e.g. 'keselamatan' -> /#/keselamatan. */
  readonly slug: string;
  /** Display name shown on the card and module page. */
  readonly title: string;
  /** Short, kid-friendly description shown on the card. */
  readonly tagline: string;
  /** Emoji icon for the card and placeholder page. */
  readonly emoji: string;
  /** Color theme key (see ModuleAccent). */
  readonly accent: ModuleAccent;
  /** 'available' modules render their page; 'coming-soon' show a placeholder. */
  readonly status: ModuleStatus;
  /** Page component for an available module; omitted while 'coming-soon'. */
  readonly Component?: ComponentType;
}
