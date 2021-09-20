const middle = require('../middle');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#middleTest", () => {
  //using deepEqual because StrictEqual dosent point to the same variable/place in memory. deepEqual looks at the values within the array.
  it('should return [] given [1] to middle function. ', () => {
    assert.deepEqual(middle([1]),[]);
  });

  it('should return [] given [1,2]', () => {
    assert.deepEqual(middle([1,2]),[]);
  });

  it('should return [2] given [1,2,3]', () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });

  it('should return [3] given [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });

  it('should return [3] given [1,2,3,4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2,3]);
  });

  it('should return [3] given [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
  
});


// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]