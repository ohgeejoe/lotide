const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe("#eqArraysTest", () => {
  it('returns true, [1,2,3] is equal to [1,2,3]', () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true));
  });

  it("returns false, [1,2,3] is not equal to [3,2,1]", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false));
  });
  
});


