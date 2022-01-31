/**
 * Create a promise that resolves after the given number of milliseconds
 *
 * @param ms  milliseconds to wait for
 * @returns   promise
 */
export function delay(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}