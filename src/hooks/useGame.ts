import { useCallback, useMemo, useReducer } from 'react';
import type { SafetyScenario } from '@/types';
import { QUESTIONS_PER_ROUND, SCENARIOS } from '@/data/questions';
import { shuffle } from '@/lib/shuffle';

export type GameStatus = 'playing' | 'finished';

export interface GameState {
  readonly status: GameStatus;
  readonly deck: readonly SafetyScenario[];
  readonly index: number;
  readonly score: number;
  /** Whether the current scenario has been answered (locks the buttons). */
  readonly answered: boolean;
  /** Result of the last answer, or null before answering. */
  readonly lastCorrect: boolean | null;
}

export type GameAction =
  | { type: 'START'; deck: readonly SafetyScenario[] }
  | { type: 'ANSWER'; choseSafe: boolean }
  | { type: 'NEXT' };

function buildDeck(rng?: () => number): SafetyScenario[] {
  return shuffle(SCENARIOS, rng).slice(0, QUESTIONS_PER_ROUND);
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START':
      return {
        status: 'playing',
        deck: action.deck,
        index: 0,
        score: 0,
        answered: false,
        lastCorrect: null,
      };

    case 'ANSWER': {
      if (state.answered || state.status !== 'playing') return state;
      const current = state.deck[state.index];
      if (!current) return state;
      const correct = action.choseSafe === current.isSafe;
      return {
        ...state,
        answered: true,
        lastCorrect: correct,
        score: correct ? state.score + 1 : state.score,
      };
    }

    case 'NEXT': {
      if (!state.answered) return state;
      const nextIndex = state.index + 1;
      if (nextIndex >= state.deck.length) {
        return { ...state, status: 'finished' };
      }
      return { ...state, index: nextIndex, answered: false, lastCorrect: null };
    }

    default:
      return state;
  }
}

export interface UseGameResult {
  status: GameStatus;
  score: number;
  total: number;
  /** 1-based number of the current question. */
  questionNumber: number;
  currentScenario: SafetyScenario | null;
  answered: boolean;
  lastCorrect: boolean | null;
  start: () => void;
  answer: (choseSafe: boolean) => void;
  next: () => void;
}

/**
 * Encapsulates all quiz state as a reducer-driven state machine.
 *
 * @param rng - Optional random source used when building the deck, enabling
 *   deterministic tests.
 */
export function useGame(rng?: () => number): UseGameResult {
  const [state, dispatch] = useReducer(gameReducer, undefined, () => ({
    status: 'playing' as GameStatus,
    deck: buildDeck(rng),
    index: 0,
    score: 0,
    answered: false,
    lastCorrect: null,
  }));

  const start = useCallback(() => dispatch({ type: 'START', deck: buildDeck(rng) }), [rng]);
  const answer = useCallback((choseSafe: boolean) => dispatch({ type: 'ANSWER', choseSafe }), []);
  const next = useCallback(() => dispatch({ type: 'NEXT' }), []);

  const currentScenario = useMemo(() => state.deck[state.index] ?? null, [state.deck, state.index]);

  return {
    status: state.status,
    score: state.score,
    total: state.deck.length,
    questionNumber: state.index + 1,
    currentScenario,
    answered: state.answered,
    lastCorrect: state.lastCorrect,
    start,
    answer,
    next,
  };
}
