import { delay } from '.';
import { performance } from 'perf_hooks';

describe('delay', () => {
  it('should resolve the promise after `ms` milliseconds', async () => {
    const waitFor = 100;
    const start = performance.now();
    await delay(waitFor);
    const end = performance.now();
    const delta = end - start;
    expect(delta).toBeGreaterThan(waitFor - 10);
    expect(delta).toBeLessThanOrEqual(waitFor + 10);
  });
});