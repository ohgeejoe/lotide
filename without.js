//copy of assertArrysEqual function
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

//the without function shall take in a source array and an itemsToRemove array. Returns a new array.
const without = function(source,itemsToRemove) {
  let newarray = [];
  for (let i = 0; i < source.length; i++) {
    let goneElements = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        goneElements = true;
      }
    }
    if (goneElements === false) {
      newarray.push(source[i]);
    }
  }
  return newarray;
};

module.exports = without;

//test conditions
//console.log(without([1, 2, 3], [1])) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//should be equal!