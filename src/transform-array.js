const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error('\'arr\' parameter must be an instance of the Array!');

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let s = arr[i].toString();
    const [, , c1, c2] = s.split(/-/);
    if (c1 === 'double') {
      if (c2 === 'next' && i + 1 !== arr.length)
        res[res.length] = arr[i + 1];
      else if (c2 === 'prev' && i - 1 !== -1)
        res[res.length] = res[res.length - 1];
    } else if (c1 === 'discard') {
      if (c2 === 'next') {
        res[res.length] = null;
        i++;
      }
      else res.pop();
    } else {
      res[res.length] = arr[i];
    }
  }

  return res.filter(i => i != null);
}

module.exports = {
  transform
};
