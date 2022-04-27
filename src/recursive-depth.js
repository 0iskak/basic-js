const {NotImplementedError} = require('../extensions/index.js');
const {c} = require("sinon/lib/sinon/spy-formatters");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const depths = Array(arr.length).fill(1);
    for (let i = 0; i < arr.length; i++)
      if (Array.isArray(arr[i]))
        depths[i] += arr[i].length === 0 ?
          1 : this.calculateDepth(arr[i]);

    return Math.max.apply(null, depths);
  }
}

module.exports = {
  DepthCalculator
};
