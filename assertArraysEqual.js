const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count ++;
    } else {
      count --;
    }
  }
  if (count === arr1.length && count === arr2.length) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function (actual, expected)
{
  if (eqArrays(actual,expected)) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
}

console.log(assertArraysEqual([1,2,3],[1,2,'3']))