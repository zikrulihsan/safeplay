import { describe, expect, it } from 'vitest';
import { summariseResult } from './gameResult';

describe('summariseResult', () => {
  it('celebrates a perfect score with a trophy', () => {
    const result = summariseResult(8, 8);
    expect(result.star).toBe('🏆');
    expect(result.celebrate).toBe(true);
  });

  it('celebrates a passing score (>= 60%)', () => {
    const result = summariseResult(5, 8);
    expect(result.celebrate).toBe(true);
    expect(result.message).toContain('5');
  });

  it('encourages retry for a low score', () => {
    const result = summariseResult(2, 8);
    expect(result.celebrate).toBe(false);
    expect(result.star).toBe('🙂');
  });

  it('does not divide by zero when total is 0', () => {
    expect(() => summariseResult(0, 0)).not.toThrow();
    expect(summariseResult(0, 0).celebrate).toBe(false);
  });
});
