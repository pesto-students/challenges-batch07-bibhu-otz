/* eslint-disable func-names */

function sumFibs(num) {
  // eslint-disable-next-line func-names
  // eslint-disable-next-line no-shadow
  const fib = function (num) {
    let n = 0; let nPlusOne = 1; let
      temp;
    let sum = 0;
    while (n <= num) {
      temp = n;
      n += nPlusOne;
      nPlusOne = temp;

      if (nPlusOne % 2 !== 0) {
        sum += nPlusOne;
      }
    }

    return sum;
  };
  return fib(num);
}

function cacheFunction() { }

export { sumFibs, cacheFunction };
