const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    
  },
  addLink(value) {
    let element = `( ${value} )`
    this.chain.push(element);
    return this;

  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let newArr = this.chain.join('~~');
    this.chain = [];
    return newArr;

  }
};

module.exports = {
  chainMaker
};
