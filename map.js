//copied in assertArraysEqual and eqArrays
const eqArrays = function(array1, array2) {
  let result = null;
  if (array1.length !== array2.length) {
    result = false;
    console.log("the arrays are different lengths");
  }
  for (let i = 0; i < array1.length; i++) {
    
    if (array1[i] !== array2[i]) {
      return result = false;
    } else {
      result = true;
    }
  }
  return result;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('The arrays are equal!');
  } else {
    console.log('The arrays are not equal');
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);
// // no clue why there is an undefined console logged after.
// console.log(assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]));