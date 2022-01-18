// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require("./assertArraysEqual")
const eqArray = require('./eqArray')
const assertEqual = require('./assertEqual')

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  eqArray,
  assertEqual
};
