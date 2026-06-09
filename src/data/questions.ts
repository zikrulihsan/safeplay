import type { SafetyScenario, SafetyTip } from '@/types';

/** Pool of quiz scenarios. A random subset is drawn each round. */
export const SCENARIOS: readonly SafetyScenario[] = [
  {
    id: 'fork-socket',
    emoji: '🔌',
    text: 'Memasukkan garpu ke stop kontak',
    isSafe: false,
    tip: 'Itu bisa kesetrum! Jauhi colokan listrik ya.',
  },
  {
    id: 'play-ball',
    emoji: '⚽',
    text: 'Bermain bola di taman',
    isSafe: true,
    tip: 'Seru dan sehat! Tetap hati-hati ya.',
  },
  {
    id: 'light-match',
    emoji: '🔥',
    text: 'Menyalakan korek api sendiri',
    isSafe: false,
    tip: 'Api itu bahaya! Biar orang dewasa saja.',
  },
  {
    id: 'read-book',
    emoji: '📚',
    text: 'Membaca buku cerita',
    isSafe: true,
    tip: 'Pintar! Membaca itu menyenangkan.',
  },
  {
    id: 'run-scissors',
    emoji: '✂️',
    text: 'Berlari sambil membawa gunting',
    isSafe: false,
    tip: 'Bisa terluka! Jalan pelan dan minta bantuan.',
  },
  {
    id: 'wash-hands',
    emoji: '🧼',
    text: 'Mencuci tangan sebelum makan',
    isSafe: true,
    tip: 'Bagus! Tangan bersih bikin sehat.',
  },
  {
    id: 'unknown-pills',
    emoji: '💊',
    text: 'Makan obat yang ditemukan di lantai',
    isSafe: false,
    tip: 'Jangan! Bisa keracunan. Tanya orang dewasa dulu.',
  },
  {
    id: 'play-blocks',
    emoji: '🧸',
    text: 'Bermain boneka dan balok',
    isSafe: true,
    tip: 'Aman dan seru! Selamat bermain.',
  },
  {
    id: 'climb-window',
    emoji: '🪟',
    text: 'Memanjat ke pinggir jendela',
    isSafe: false,
    tip: 'Bahaya jatuh! Main di tempat aman saja.',
  },
  {
    id: 'drink-water',
    emoji: '🚰',
    text: 'Minum air putih saat haus',
    isSafe: true,
    tip: 'Sehat! Tubuhmu butuh air.',
  },
];

/** Number of scenarios drawn per game round. */
export const QUESTIONS_PER_ROUND = 8;

/** The four "smart kid" reminders. */
export const TIPS: readonly SafetyTip[] = [
  {
    emoji: '🙋',
    title: 'Tanya Dulu',
    description: 'Kalau bingung atau penasaran, tanya orang dewasa sebelum melakukannya.',
  },
  {
    emoji: '👀',
    title: 'Lihat Sekeliling',
    description: 'Cek dulu ada bahaya atau tidak sebelum bermain di suatu tempat.',
  },
  {
    emoji: '🛑',
    title: 'Berani Bilang Tidak',
    description: 'Kalau diajak melakukan hal berbahaya, kamu boleh menolak!',
  },
  {
    emoji: '📣',
    title: 'Lapor Cepat',
    description: 'Lihat sesuatu yang berbahaya? Segera beri tahu orang dewasa.',
  },
];
