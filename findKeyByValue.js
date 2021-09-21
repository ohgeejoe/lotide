//the fucntion findKeyByValue takes in an object and a value. It scans the object and returns the first first which contains the given value.

//pasting assertEqual
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const findKeyByValue = function(inputObject,inputKey) {
  const objectKeys = Object.keys(inputObject); //object.keys returns an array of the objects key names.
  for (let key of objectKeys) { //the for of loop creates a loop iterating thorugh the object. key is the element, ObjectKeys is the object
    if (inputObject[key] === inputKey) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// // Test code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);