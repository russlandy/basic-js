const { NotImplementedError } = require('../extensions/index.js');

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
  // let str = 'aabbbc';
  let newStr = '';
  let count = 1;
  for (let i=1; i < str.length; i++) {
    if (str[i] === str[i-1]) {
      count++;
    } else {
      newStr += (count === 1 ? '' : count) + str[i - 1];
      count = 1;
    }
  }
  newStr += (count === 1 ? '' : count) + str[str.length - 1];
  return newStr;
}

module.exports = {
  encodeLine
};
