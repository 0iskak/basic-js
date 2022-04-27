const {NotImplementedError} = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let i;
  if (typeof sampleActivity != 'string' ||
    isNaN(i = Number(sampleActivity)) ||
    i >= 15 || i <= 0)
    return false;

  const dividend = Math.log(MODERN_ACTIVITY / i);
  const divisor = Math.log(2) / HALF_LIFE_PERIOD;

  return Math.ceil(dividend / divisor);
}

module.exports = {
  dateSample
};
