const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');

describe("#assertArraysEqualsTest", () => {
  it('returns that the arrays are equal. Both ["hey", "hi", "hello"]', () => {
    assert.strictEqual(assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]));
  });

  it('returns that the arrays are not equal.', () => {
    assert.strictEqual(assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]));
  
  });
});


