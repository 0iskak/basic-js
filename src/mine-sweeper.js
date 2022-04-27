const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const result = [];

  function square(x, y) {
    function check(dx, dy) {
      try {
        return matrix[y + dy][x + dx] ? 1 : 0;
      } catch {
        return 0;
      }
    }

    return check(-1, 0) + check(-1, 1) + check(0, 1) + check(1, 1) +
    check(1, 0) + check(1, -1) + check(0, -1) + check(-1, -1);
  }

  for (let y = 0; y < height; y++) {
    result[y] = new Array(width);
    for (let x = 0; x < width; x++)
      result[y][x] = square(x, y);
  }

  return result;
}

module.exports = {
  minesweeper
};
