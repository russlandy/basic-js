const { NotImplementedError } = require('../extensions/index.js');

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
  // let arr = new Map (Object.entries(options));
  // let strStart = String(str);
  // let additionSeparator = String(arr.get('additionSeparator'));
  // let additionRepeatTimes = Number(arr.get('additionRepeatTimes'));
  // let addition = String(arr.get('addition'));
  // let separator = String(arr.get('separator'));
  // let repeatNum = Number(arr.get('repeatTimes'));
  // let addString = '';
  // addString = additionSeparator + addition;
  // let addStrRepeat = addString.repeat(additionRepeatTimes).slice(additionSeparator.length);
  // let totalStr = separator + strStart + addStrRepeat;
  // if (Number.isInteger(repeatNum)) {totalStr = totalStr.repeat(repeatNum).slice(separator.length)};
  // return totalStr
  const repeatArr = []
  
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator: '|';
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes: 1;
  let addition = options.addition !== undefined ? String(options.addition): '';
  let separator = options.separator !== undefined ? options.separator: '+';
  let repeatNum = options.repeatTimes !== undefined ? options.repeatTimes: 1;
  let newstr = String(str);
  
  
  for (let i = 0; i < repeatNum; i++) {
      if (newstr !== undefined && newstr !== null) {
        repeatArr.push(String(newstr))
      }
      for (let k = 0; k < additionRepeatTimes; k++) {
        if (addition !== undefined && addition !== null) {
          repeatArr.push(addition);
        }
        if (k < additionRepeatTimes - 1 && addition !== undefined && addition !== null) {
          repeatArr.push(additionSeparator);
        }
      }
      if (i < repeatNum - 1 && newstr !== null && newstr !== undefined) {
        repeatArr.push(separator);
      } 
    }
    return repeatArr.join('');

    
}



module.exports = {
  repeater
};
