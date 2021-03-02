const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  const cbCallLimiter = (...args) => {
    if (count < n) {
      count += 1;
      return cb(...args);
    } return null;
  };
  return cbCallLimiter;
};

export {
  limitFunctionCallCount,
};
