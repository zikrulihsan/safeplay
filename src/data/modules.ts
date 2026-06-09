import type { LearningModule } from '@/types/module';
import { SafetyModule } from '@/pages/SafetyModule';

/**
 * Registry of every learning module on the platform — the single source of
 * truth for both the home hub (one card per entry) and the router (one route
 * per `slug`). Adding a new module is a one-object edit here: provide metadata
 * and, once its page exists, flip `status` to 'available' and set `Component`.
 */
export const MODULES: readonly LearningModule[] = [
  {
    id: 'keselamatan',
    slug: 'keselamatan',
    title: 'Keselamatan di Rumah',
    tagline: 'Kenali bahaya api, listrik, dan benda tajam bersama Robi.',
    emoji: '🛡️',
    accent: 'coral',
    status: 'available',
    Component: SafetyModule,
  },
  {
    id: 'lingkungan',
    slug: 'lingkungan',
    title: 'Sayang Lingkungan',
    tagline: 'Buang sampah pada tempatnya, hemat air, dan rawat tanaman.',
    emoji: '🌱',
    accent: 'grass',
    status: 'coming-soon',
  },
  {
    id: 'jalan',
    slug: 'jalan',
    title: 'Aman di Luar Rumah',
    tagline: 'Menyeberang dengan benar dan waspada saat di jalan.',
    emoji: '🚦',
    accent: 'sun',
    status: 'coming-soon',
  },
  {
    id: 'sosial',
    slug: 'sosial',
    title: 'Sopan & Berbagi',
    tagline: 'Antre, berbagi, dan berkata tolong, maaf, terima kasih.',
    emoji: '🤝',
    accent: 'grape',
    status: 'coming-soon',
  },
  {
    id: 'kebersihan',
    slug: 'kebersihan',
    title: 'Bersih & Sehat',
    tagline: 'Cuci tangan, sikat gigi, dan kebiasaan sehat setiap hari.',
    emoji: '🧼',
    accent: 'sky',
    status: 'coming-soon',
  },
];
