import type { Hazard } from '@/types';
import {
  ChemicalIllustration,
  ElectricityIllustration,
  FireIllustration,
  HeightsIllustration,
  SharpIllustration,
  WaterIllustration,
} from '@/components/hazards/illustrations';

/**
 * The six core safety topics. Each is framed as "what NOT to do" plus the
 * safe alternative, so the content never explains how to perform the unsafe act.
 */
export const HAZARDS: readonly Hazard[] = [
  {
    id: 'fire',
    title: 'Api',
    warning: 'JANGAN main korek api',
    why: 'Api panas! Bisa membakar kulit dan menyebabkan kebakaran.',
    safeAction: 'Jauhi api dan panggil orang dewasa kalau melihat api.',
    accent: 'fire',
    Illustration: FireIllustration,
  },
  {
    id: 'electricity',
    title: 'Listrik',
    warning: 'JANGAN colok stop kontak',
    why: 'Listrik bisa membuatmu kesetrum. Sangat berbahaya!',
    safeAction: 'Jangan masukkan jari atau benda ke colokan. Tangan basah jauhi listrik.',
    accent: 'electricity',
    Illustration: ElectricityIllustration,
  },
  {
    id: 'sharp',
    title: 'Benda Tajam',
    warning: 'JANGAN main pisau & gunting',
    why: 'Pisau dan gunting tajam bisa melukai tangan atau temanmu.',
    safeAction: 'Minta bantuan orang dewasa. Pakai gunting khusus anak saja.',
    accent: 'sharp',
    Illustration: SharpIllustration,
  },
  {
    id: 'water',
    title: 'Air Dalam',
    warning: 'JANGAN main air sendirian',
    why: 'Kolam, sungai, dan ember besar bisa membuatmu tenggelam.',
    safeAction: 'Selalu ada orang dewasa dan pakai pelampung saat bermain air.',
    accent: 'water',
    Illustration: WaterIllustration,
  },
  {
    id: 'chemical',
    title: 'Obat & Kimia',
    warning: 'JANGAN minum sembarangan',
    why: 'Obat, sabun, dan cairan pembersih bisa membuatmu keracunan.',
    safeAction: 'Jangan makan atau minum yang tidak dikenal. Tanya orang dewasa dulu.',
    accent: 'chemical',
    Illustration: ChemicalIllustration,
  },
  {
    id: 'heights',
    title: 'Tempat Tinggi',
    warning: 'JANGAN panjat jendela',
    why: 'Memanjat jendela atau pagar tinggi bisa membuatmu jatuh.',
    safeAction: 'Bermainlah di tempat yang datar dan aman. Jauhi pinggir jendela.',
    accent: 'heights',
    Illustration: HeightsIllustration,
  },
];
