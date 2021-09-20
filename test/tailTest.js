const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns lighthouse and labs", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), [ 'Lighthouse', 'Labs' ]);
    
  });
});
