const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];

  try {
    const encode = char => {
      if (i > 1)
        res[res.length] = i;
      res[res.length] = char;
    }

    let i = 1;
    encode(
      str.split('')
        .reduce((a, b) => {
          if (a === b)
            i++;
          else {
            encode(a);
            i = 1;
          }

          return b;
        })
    );
  } catch {
  }

  return res.join('');
}

module.exports = {
  encodeLine
};
