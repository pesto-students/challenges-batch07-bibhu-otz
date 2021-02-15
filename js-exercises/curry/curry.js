/* eslint-disable no-else-return */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      // eslint-disable-next-line func-names
      return function (a) {
        return curried(...[...args, a]);
      };
    }
  };
}
// eslint-disable-next-line no-unused-vars
function add(a, b) {
  return a + b;
}
export {
  curry,
};
