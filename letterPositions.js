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

const letterPositions = function(sentence) {
  const results = {};
  
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(sentence.indexOf(sentence[i], i));
      } else {
        results[sentence[i]] = [sentence.indexOf(sentence[i])];
      }

    }
  }
  return results;
};

console.log(letterPositions('hello light house'));