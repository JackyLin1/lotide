const eqArray = require('./eqArray')
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(arr) {
  let half = arr.length / 2;
  const newArr = [];
  
  if (arr.length <= 2) return [];
  arr.length % 2 ? newArr.push(arr[parseInt(half)]) : newArr.push(arr[half-1], arr[half]); // if even go for the second case, if odd the first case
  
  return newArr;
};

module.exports = middle;


