class Cycled extends Array {
  constructor(array) {
    if (!Array.isArray(array)) {
      throw new TypeError('Expected an array');
    }
    super(...array);
    // eslint-disable-next-line no-underscore-dangle
    this._index = 0;
  }

  * [Symbol.iterator]() {
    let { length } = this;

    // eslint-disable-next-line no-plusplus
    while (length-- > 0) {
      yield this.current();
      // eslint-disable-next-line no-plusplus
      this.index++;
    }
  }

  index() {
    return this.index;
  }

  step(steps) {
    // eslint-disable-next-line no-underscore-dangle
    this._index = (this.length + this._index + steps) % this.length;
    // eslint-disable-next-line no-underscore-dangle
    return this[this._index];
  }

  current() {
    return this.step(0);
  }

  next() {
    return this.step(1);
  }

  previous() {
    return this.step(-1);
  }
}
export { Cycled };
