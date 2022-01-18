const middle = require ('../middle');
const assert = require('chai').assert;


describe("#head", () => {

it("returns [] for [1, 2]", () => {
  middle([1,2]);
});

it("returns [2] for [1,2,3]", () => {
  middle([1,2,3]);
});

it("returns [3] for [1, 2, 3, 4, 5]", () => {
  middle([1,2,3,4,5]);
});

it("returns [2,3] for [1,2,3,4]", () => {
  middle([1,2,3,4]);
});

it("returns [3,4] for [1,2,3,4,5,6]", () => {
  middle([1,2,3,4,5,6]);
});

it("returns [] for [1]", () => {
  middle([1]);
});

});