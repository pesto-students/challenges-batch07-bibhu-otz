function bind(fn, obj) {
  // eslint-disable-next-line func-names
  return function (...args) {
    return fn.apply(obj, args);
  };
}

module.exports = { bind };
