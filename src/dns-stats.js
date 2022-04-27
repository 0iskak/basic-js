const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = new Map();
  const increment = domain => {
    const i = stats.get(domain);
    stats.set(domain, i === undefined ? 1 : i + 1);
  };

  domains.map(domain => domain.split('.').reverse())
    .forEach(domain => {
      for (let i = 1; i <= domain.length; i++)
        increment('.'.concat(domain.slice(0, i).join('.')));
    });

  return Object.fromEntries(stats);
}

module.exports = {
  getDNSStats
};
