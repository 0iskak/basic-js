const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const s = n.toString();
  const outs = [];
  for (let i = s.length - 1; i >= 0; i--)
    outs.push(s.substring(0, i) + s.substring(i + 1));

  return Math.max.apply(null, outs);
}

module.exports = {
  deleteDigit
};
