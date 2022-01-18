const assert = require('chai').assert;
let tail = require('../tail')

describe("#tail", () => {
  it("returns 2 for result.length", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
  });
  
  it("returns 'Lighthouse' for result[0]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[0], "Lighthouse");
  });
  
  it("returns 'Labs' for result[1]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[0], "Lighthouse");
  });

it("returns 3 for words.length", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);
  assert.deepEqual(words.length, 3);
});
});