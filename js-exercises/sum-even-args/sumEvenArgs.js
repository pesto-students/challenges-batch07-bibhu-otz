const sumEvenArgs = (...args) => {
  let sum = 0;
  for (const n of args) {
    // eslint-disable-next-line eqeqeq
    if (n % 2 == 0) sum += n;
  }
  return sum;
};

export { sumEvenArgs };
