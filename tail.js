const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let outcome = [];
  for (let i = 1; i < arr.length; i++) {
    outcome.push(arr[i]);
  }
  return outcome;
};

module.exports = tail;