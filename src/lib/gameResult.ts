export interface GameResultSummary {
  star: string;
  title: string;
  message: string;
  /** True when the score is good enough to celebrate. */
  celebrate: boolean;
}

/**
 * Maps a final score to an encouraging, kid-appropriate result. Pure and
 * deterministic so it can be unit-tested in isolation.
 */
export function summariseResult(score: number, total: number): GameResultSummary {
  const ratio = total > 0 ? score / total : 0;

  if (ratio >= 1) {
    return {
      star: '🏆',
      title: 'Hebat Sekali!',
      message: 'Skor sempurna! Kamu sudah jadi Pahlawan Aman sejati!',
      celebrate: true,
    };
  }

  if (ratio >= 0.6) {
    return {
      star: '🌟',
      title: 'Bagus Banget!',
      message: `Kamu dapat ${score} dari ${total} bintang. Ayo coba lagi untuk skor sempurna!`,
      celebrate: true,
    };
  }

  return {
    star: '🙂',
    title: 'Ayo Belajar Lagi!',
    message: `Kamu dapat ${score} bintang. Baca lagi kartunya ya, lalu coba sekali lagi!`,
    celebrate: false,
  };
}
