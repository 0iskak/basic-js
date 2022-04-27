const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  try {
    return matrix
      .map(row => row.filter(value => value === '^^').length)
      .reduce((a, b) => a + b);
  } catch {
    return 0;
  }
}

module.exports = {
  countCats
};
