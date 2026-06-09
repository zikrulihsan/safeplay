export interface ScoreBoardProps {
  score: number;
  questionNumber: number;
  total: number;
}

export function ScoreBoard({ score, questionNumber, total }: ScoreBoardProps) {
  return (
    <div className="mb-2 flex flex-wrap items-center justify-between gap-2.5">
      <div className="rounded-full bg-[#FFF2CC] px-4 py-2 font-extrabold text-sun-deep">
        ⭐ Skor: <span aria-live="polite">{score}</span>
      </div>
      <div className="font-extrabold text-ink-soft">
        Soal {questionNumber} / {total}
      </div>
    </div>
  );
}
