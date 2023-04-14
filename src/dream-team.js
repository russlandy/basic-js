const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  
  let dreamName = [];
  if (Array.isArray(members)) {
    members.forEach(str => {
      if (typeof str === 'string') {
        let firstLetter = str.trim().charAt(0).toUpperCase();
        dreamName.push(firstLetter);
      }
    })
    return dreamName.sort().join('');
  } else return false;

}


module.exports = {
  createDreamTeam
};
