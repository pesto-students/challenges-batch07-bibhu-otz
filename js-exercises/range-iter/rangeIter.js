function rangeIter(lb, ub) {
  if ((!lb || lb === undefined) && (!ub || ub === undefined)) {
    throw new TypeError('lb and ub value not supplied');
  }
  if (!lb || lb === undefined) {
    throw new TypeError('lb value is not supplied');
  }
  if (!ub || ub === undefined) {
    throw new TypeError('ub not supplied');
  }
  if (typeof ub !== 'number' || typeof lb !== 'number') {
    throw new TypeError('type of lb and ub must be number type');
  }
  const obj = [];
  if (lb < ub) {
    const range = { from: lb, to: ub };
    // eslint-disable-next-line func-names
    range[Symbol.iterator] = function () {
      return {
        current: this.from,
        last: this.to,
        next() {
          if (this.current <= this.last) {
            // eslint-disable-next-line no-plusplus
            return { done: false, value: this.current++ };
          }
          return { done: true };
        },
      };
    };
    for (const num of range) {
      obj.push(num);
    }
  } else if (lb === ub) {
    obj.push(lb);
  }
  return obj;
}

export { rangeIter };
