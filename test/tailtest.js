const assert = require('chai').assert;
let tail = require('../tail')

describe("#tail", () => {
  it("returns 2 for result.length", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
  
  it("returns 'Lighthouse' for result[0]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });
  
  it("returns 'Labs' for result[1]", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

it("returns 3 for words.length", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);
  assert.strictEqual(words.length, 3);
});
});