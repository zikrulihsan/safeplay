import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { gameReducer, useGame, type GameState } from './useGame';
import { QUESTIONS_PER_ROUND } from '@/data/questions';

const baseState: GameState = {
  status: 'playing',
  deck: [
    { id: 'a', emoji: '🔥', text: 'danger one', isSafe: false, tip: 'tip a' },
    { id: 'b', emoji: '⚽', text: 'safe one', isSafe: true, tip: 'tip b' },
  ],
  index: 0,
  score: 0,
  answered: false,
  lastCorrect: null,
};

describe('gameReducer', () => {
  it('scores a correct answer and locks the question', () => {
    const next = gameReducer(baseState, { type: 'ANSWER', choseSafe: false });
    expect(next.score).toBe(1);
    expect(next.answered).toBe(true);
    expect(next.lastCorrect).toBe(true);
  });

  it('does not score a wrong answer', () => {
    const next = gameReducer(baseState, { type: 'ANSWER', choseSafe: true });
    expect(next.score).toBe(0);
    expect(next.lastCorrect).toBe(false);
  });

  it('ignores a second answer for the same question', () => {
    const answered = gameReducer(baseState, { type: 'ANSWER', choseSafe: false });
    const again = gameReducer(answered, { type: 'ANSWER', choseSafe: true });
    expect(again).toBe(answered);
  });

  it('advances to the next question on NEXT', () => {
    const answered = gameReducer(baseState, { type: 'ANSWER', choseSafe: false });
    const next = gameReducer(answered, { type: 'NEXT' });
    expect(next.index).toBe(1);
    expect(next.answered).toBe(false);
  });

  it('finishes after the last question', () => {
    let state = { ...baseState, index: 1 };
    state = gameReducer(state, { type: 'ANSWER', choseSafe: true });
    state = gameReducer(state, { type: 'NEXT' });
    expect(state.status).toBe('finished');
  });

  it('does not advance before answering', () => {
    const next = gameReducer(baseState, { type: 'NEXT' });
    expect(next).toBe(baseState);
  });
});

describe('useGame', () => {
  it('initialises with a full round and zero score', () => {
    const { result } = renderHook(() => useGame());
    expect(result.current.total).toBe(QUESTIONS_PER_ROUND);
    expect(result.current.score).toBe(0);
    expect(result.current.status).toBe('playing');
    expect(result.current.currentScenario).not.toBeNull();
  });

  it('advances through a full round to a finished state', () => {
    const { result } = renderHook(() => useGame());
    for (let i = 0; i < QUESTIONS_PER_ROUND; i += 1) {
      const safe = result.current.currentScenario?.isSafe ?? true;
      act(() => result.current.answer(safe));
      act(() => result.current.next());
    }
    expect(result.current.status).toBe('finished');
    expect(result.current.score).toBe(QUESTIONS_PER_ROUND);
  });

  it('restarts cleanly via start()', () => {
    const { result } = renderHook(() => useGame());
    act(() => result.current.answer(true));
    act(() => result.current.start());
    expect(result.current.score).toBe(0);
    expect(result.current.answered).toBe(false);
    expect(result.current.status).toBe('playing');
  });
});
