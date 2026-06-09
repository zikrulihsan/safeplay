import { describe, expect, it } from 'vitest';
import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('does not mutate the original array', () => {
    const source = [1, 2, 3, 4, 5];
    const copy = [...source];
    shuffle(source);
    expect(source).toEqual(copy);
  });

  it('preserves all elements (is a permutation)', () => {
    const source = [1, 2, 3, 4, 5];
    const result = shuffle(source);
    expect([...result].sort((a, b) => a - b)).toEqual(source);
  });

  it('is deterministic given a fixed rng', () => {
    const source = ['a', 'b', 'c', 'd'];
    const fixedRng = () => 0; // always picks index 0 in the swap
    expect(shuffle(source, fixedRng)).toEqual(shuffle(source, fixedRng));
  });

  it('handles empty and single-element arrays', () => {
    expect(shuffle([])).toEqual([]);
    expect(shuffle([42])).toEqual([42]);
  });
});
