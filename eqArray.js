const assertEqual = require('./assertEqual');

const eqArray = function(arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return arr1.length === arr2.length ? true : false
};

module.exports = eqArray;
