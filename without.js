//copy of assertArrysEqual function
const assertArraysEqual = function(array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log('The arrays are equal!');
  } else {
    console.log('The arrays are not equal');
  }
};

//copy of eqArrays function
const eqArrays = function(array1,array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
    console.log("the arrays are different lengths");
  }
  for (let i = 0; i < array1.length; i++) {
    
    if (array1[i] !== array2[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

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