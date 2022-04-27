const {NotImplementedError} = require('../extensions/index.js');
const {checkForThrowingErrors} = require("../extensions");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },
  addLink(value) {
    if (value === undefined)
      value = '';
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position = Number(position)) || position < 1 ||
      position > this.getLength()) {
      this.values = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.values = this.values.slice(0, position - 1)
      .concat(this.values.slice(position));
    return this;
  },
  reverseChain() {
    this.values = this.values.reverse();
    return this;
  },
  finishChain() {
    const s = this.values.map(value => `( ${value} )`).join('~~');
    this.values = [];
    return s;
  }
};

module.exports = {
  chainMaker
};
