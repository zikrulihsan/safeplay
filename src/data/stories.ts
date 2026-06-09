import type { Story } from '@/types';
import { ApiStory1, ApiStory2, ApiStory3 } from '@/components/stories/illustrations';

/**
 * Example "what should happen" stories, one per hazard topic. Each story models
 * the safe choice through a short, illustrated narrative — never how to perform
 * the unsafe act. Currently only the fire ("api") story is written; add more by
 * following the same shape (see README "Adding a topic story").
 */
export const STORIES: readonly Story[] = [
  {
    hazardId: 'fire',
    title: 'Si Korek Nakal',
    scenes: [
      {
        text: 'Doni sedang bermain di ruang tamu. Di atas meja ada sekotak korek api. Hmm, Doni penasaran ingin memegangnya.',
        Illustration: ApiStory1,
      },
      {
        text: 'Tapi Doni ingat kata Robi: "Api itu bahaya!" Doni menarik tangannya, mundur, lalu memanggil, "Bunda, ada korek api!"',
        Illustration: ApiStory2,
      },
      {
        text: 'Bunda datang dan menyimpan korek api di tempat tinggi yang aman. "Anak hebat, Doni!" kata Bunda sambil tersenyum. ⭐',
        Illustration: ApiStory3,
      },
    ],
    moral: 'Kalau melihat korek api atau pemantik, jangan disentuh ya. Mundur dan panggil orang dewasa — seperti Doni!',
  },
];
