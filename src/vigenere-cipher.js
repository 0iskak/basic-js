const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = false) {
    this.reverse = reverse;
    this.table = new Map();
    this.all = this.alphabet();

    for (let i = 0; i < this.all.length; i++)
      this.table.set(this.all[i], this.alphabet(i));
  }

  alphabet(shift = 0) {
    const res = [];
    const from = 'A'.charCodeAt(0);
    const to = 'Z'.charCodeAt(0);

    for (let i = from + shift; i <= to; i++)
      res[res.length] = String.fromCharCode(i);
    for (let i = 0; i < shift; i++)
      res[res.length] = String.fromCharCode(from + i);

    return res;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined)
      throw new Error('Incorrect arguments!');

    str = str.toUpperCase();
    key = key.toUpperCase();

    const res = [];
    let i = 0;
    str.split('').forEach(char => {
      const array = this.table.get(char);
      if (array === undefined) {
        res[res.length] = char;
        return;
      }

      res[res.length] = array[this.all.indexOf(key[i])];
      if (++i === key.length) i = 0;
    });

    return (this.reverse ? res.reverse() : res).join('');
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined)
      throw new Error('Incorrect arguments!');

    str = str.toUpperCase();
    key = key.toUpperCase();

    const res = [];
    let i = 0;
    str.split('').forEach(char => {
      if (!this.all.includes(char)) {
        res[res.length] = char;
        return;
      }

      let shift = this.all.indexOf(char) - this.all.indexOf(key[i]);
      if (shift < 0)
        shift = this.all.length + shift;
      res[res.length] = this.all[shift];

      if (++i === key.length) i = 0;
    });

    return (this.reverse ? res.reverse() : res).join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
