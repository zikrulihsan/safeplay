import type { ComponentType, SVGProps } from 'react';

/** Stable identifiers for each safety hazard topic. */
export type HazardId = 'fire' | 'electricity' | 'sharp' | 'water' | 'chemical' | 'heights';

/** Accent palette keys used to theme hazard cards and gradients. */
export type Accent = 'fire' | 'electricity' | 'sharp' | 'water' | 'chemical' | 'heights';

/** Props passed to every animated SVG illustration component. */
export type IllustrationProps = SVGProps<SVGSVGElement> & {
  /** When true, looping decorative animation is suppressed (reduced-motion). */
  reduceMotion?: boolean;
};

/** A single safety topic shown as a flippable card. */
export interface Hazard {
  readonly id: HazardId;
  /** Short topic name, e.g. "Api". */
  readonly title: string;
  /** The core "don't do this" message, e.g. "JANGAN main korek api". */
  readonly warning: string;
  /** Why it is dangerous, in kid-friendly language. */
  readonly why: string;
  /** What the child should do instead. */
  readonly safeAction: string;
  /** Visual accent used for the card back gradient and pills. */
  readonly accent: Accent;
  /** Animated SVG illustration for the card front. */
  readonly Illustration: ComponentType<IllustrationProps>;
}

/** A single "Aman atau Bahaya?" quiz scenario. */
export interface SafetyScenario {
  readonly id: string;
  readonly emoji: string;
  /** The action being judged, e.g. "Memasukkan garpu ke stop kontak". */
  readonly text: string;
  /** True when the action is safe; false when it is dangerous. */
  readonly isSafe: boolean;
  /** Encouraging explanation shown after the child answers. */
  readonly tip: string;
}

/** A reusable "smart kid" reminder shown in the tips section. */
export interface SafetyTip {
  readonly emoji: string;
  readonly title: string;
  readonly description: string;
}

/** One illustrated beat of a topic's example story. */
export interface StoryScene {
  /** Short, kid-friendly narration for this scene (1–2 sentences). */
  readonly text: string;
  /** Scene-specific illustration drawn for this beat. */
  readonly Illustration: ComponentType<IllustrationProps>;
  /** Optional accessible description of the illustration. */
  readonly imageAlt?: string;
}

/**
 * A short, illustrated "what should happen" story tied to a hazard topic, told
 * across a few scenes and closing with Robi's takeaway message.
 */
export interface Story {
  /** The hazard topic this story belongs to. */
  readonly hazardId: HazardId;
  /** Story title, e.g. "Si Korek Nakal". */
  readonly title: string;
  /** Ordered scenes the child steps through. */
  readonly scenes: readonly StoryScene[];
  /** Closing "Pesan Robi" lesson shown on the final scene. */
  readonly moral: string;
}
