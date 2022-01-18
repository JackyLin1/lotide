const assertEqual = require('./assertEqual')
const eqArray = require("./eqArray");

const assertArraysEqual = function (actual, expected)
{
  if (eqArray(actual,expected)) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
}

module.exports = assertArraysEqual;