const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  for (const c of s1) {
    const index = s2.indexOf(c);
    console.log(index);
    if (index === -1)
      continue;

    sum++;
    s2 = s2.substring(0, index) + s2.substring(index + 1);
  }

  return sum;
}

module.exports = {
  getCommonCharacterCount
};
