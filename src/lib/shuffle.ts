/**
 * Returns a new array with the elements of `input` shuffled using a
 * Fisher–Yates shuffle. The original array is not mutated.
 *
 * @param input - Source array.
 * @param rng - Random source returning a float in [0, 1). Injectable for
 *   deterministic testing. Defaults to `Math.random`.
 */
export function shuffle<T>(input: readonly T[], rng: () => number = Math.random): T[] {
  const result = [...input];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const a = result[i] as T;
    const b = result[j] as T;
    result[i] = b;
    result[j] = a;
  }
  return result;
}
