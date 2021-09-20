const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.assert(actual === expected, `🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:  + ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (let letter of sentence) {
    if (letter !== " ") { // Filters the spaces in the string
      if (result[letter]) { // If the letter has already been counted, adds 1 to the count
        result[letter] += 1;
      } else { // If the letter doesn't exist in the result object, creates it
        result[letter] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));