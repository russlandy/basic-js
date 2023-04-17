const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

// let email = 'dfdferfdre@ee@ere.ru';

// let reverseEmail = [...email].reverse().join('');
// let domen = email.substring(email.length - reverseEmail.indexOf('@'));
// console.log(domen);

function getEmailDomain(email) {
  let reverseEmail = [...email].reverse().join('');
  return email.substring(email.length - reverseEmail.indexOf('@'));
}

module.exports = {
  getEmailDomain
};
