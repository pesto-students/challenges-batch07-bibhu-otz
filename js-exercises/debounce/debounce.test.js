import { debounce } from './debounce';

describe('debounce', () => {
  test('Will run after ~5s and print "hello" only once', () => {
    /* eslint-disable no-console */
    const debouncedFn = debounce(() => console.log('hello'), 5000);
    /* eslint-enable no-console */
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
    debouncedFn();
  });
});
