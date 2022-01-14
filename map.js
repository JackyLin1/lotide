// An array to map
// A callback function
const eqArrays = function(arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return arr1.length === arr2.length ? true : false;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => typeof(word));
const results4 = map(words, word => word + 'hi');

// console.log(results1)
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2,[ 6, 7, 2, 5, 3 ]);
assertArraysEqual(results3,[ 'string', 'string', 'string', 'string', 'string' ]);
assertArraysEqual(results4, [ 'groundhi', 'controlhi', 'tohi', 'majorhi', 'tomhi' ]);
