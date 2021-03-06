//this program takes an array and returns the middle-most element of the given array.
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const middleArray = [];

  if (array.length <= 2) { // this handles array with length 1 or 2.
    return middleArray;
  } else {

    let middleIndex = Math.ceil(array.length / 2) - 1; //this variable statement stores the locaiton of the middle elements. The -1 is neccesary becuase javascript is a zero based index system.

    //now dealing with odd number of elements.
    if (array.length % 2 !== 0) {
      middleArray.push(array[middleIndex]);
    }
    //in even cases (everything else)
    else {
      middleArray.push(array[middleIndex], array[middleIndex + 1]);//plus one since even numbered arrays will have two middle elements.
    }
    return middleArray;
  }
};

//test cases.

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;