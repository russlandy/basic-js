const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == null) return 'Unable to determine the time of year!';
  if (date instanceof Date == false) throw new Error('Invalid date!');
  try {date.toLocaleString()}
  catch(e) {
    // e.message = 'Invalid date!'
    // return e.message
    if(e) throw new Error('Invalid date!');
  }

  let t = date.getUTCMonth();
  if (t >= 0 && t < 2 || t == 11) {return 'winter'};
  if (t >= 2 && t < 5) {return 'spring'};
  if (t >= 5 && t < 8) {return 'summer'};
  if (t >= 8 && t < 11) {return 'autumn'};


}
// getSeason(new Date(2020, 11, 31));


module.exports = {
  getSeason
};
