const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str === undefined ? '' : str;
  const repeatTimes = options.repeatTimes === undefined ?
    1 : options.repeatTimes;
  const separator = options.separator === undefined ?
    '+' : options.separator  + '';
  const addition = options.addition === undefined ?
    '' : options.addition + '';
  const additionRepeatTimes = options.additionRepeatTimes === undefined ?
    1 : options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator === undefined ?
    '|' : options.additionSeparator + '';

  return Array(repeatTimes).fill(str +
    Array(additionRepeatTimes)
      .fill(addition)
      .join(additionSeparator)
  ).join(separator);
}

module.exports = {
  repeater
};
