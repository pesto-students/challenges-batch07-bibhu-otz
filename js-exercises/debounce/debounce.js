function debounce(fn, timeInMs) {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, timeInMs);
  };
}

export { debounce };
