// this function returns all zero based positions in the string where each character is found.
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

// //test code the .e is necessary becuase it would be passing in an object. .e converts to an array.
// assertArraysEqual(letterPositions("hello").e, [1]);
// //test code. didnt skip spaces yet.
// console.log(letterPositions("lighthouse in the house"));