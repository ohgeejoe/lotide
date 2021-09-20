const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqualTest", () => {
  it('returns assertion failed', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("returns assertion passed", () => {
    assert.strictEqual(assertEqual(1, 1));
  });
  
});

