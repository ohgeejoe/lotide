// this function returns all zero based positions in the string where each character is found.

//copying assertArraysEqual
const assertArraysEqual = function(array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log('The arrays are equal!');
  } else {
    console.log('The arrays are not equal');
  }
};

//copying eqArrays
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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const word = sentence[i];
    if (word !== ' ') {
      if (!results[word]) {//if the letter is not an object
        results[word] = [i];
      } else {
        results[word].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

//test code the .e is necessary becuase it would be passing in an object. .e converts to an array.
assertArraysEqual(letterPositions("hello").e, [1]);
//test code. didnt skip spaces yet.
console.log(letterPositions("lighthouse in the house"));