const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(noReverse = true) {
    this.noReverse = noReverse; 
  }

  
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    
    const lettersNum = {};
    for (let i = 0; i < letters.length; i++) {
      lettersNum[letters[i]] = i;
    }
    
    let crypto = '';
    key = key.toUpperCase();
      message =  message.toUpperCase()


    for (let i = 0, j = 0; i < message.length; i++) {
      if (letters.includes(message[i])) {
        // crypto += letters[(lettersNum[message[i]] + lettersNum[key[i % key.length]]) % letters.length]
        let keyNumber = letters.indexOf(key[j % key.length]);
        let messageNumber = letters.indexOf(message[i]);
        let cryptoLetterNumber = (messageNumber + keyNumber) % letters.length;
        let cryptoLetter = letters[cryptoLetterNumber];
        crypto += cryptoLetter;
        j++
      } else crypto += message[i];
      
    }
  
    return this.noReverse ? crypto : crypto.split('').reverse().join('');

  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lettersNum = {};
    for (let i = 0; i < letters.length; i++) {
      lettersNum[letters[i]] = i;
    }
    key = key.toUpperCase();
    message =  message.toUpperCase()
    let decrypto = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (letters.includes(message[i])) {
        let keyNumber = letters.indexOf(key[j % key.length]);
        let messageNumber = letters.indexOf(message[i]);
        let cryptoLetterNumber = (messageNumber - keyNumber + letters.length) % letters.length;
        let cryptoLetter = letters[cryptoLetterNumber];
        decrypto += cryptoLetter;
        j++
        // decrypto += letters[(lettersNum[message[i]] - lettersNum[key[i % key.length]] + letters.length) % letters.length]
      } else decrypto += message[i];
    }
    return this.noReverse ? decrypto : decrypto.split('').reverse().join('');

  }
}
// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
  VigenereCipheringMachine
};
