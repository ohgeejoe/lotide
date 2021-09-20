// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.assert(actual === expected, `🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:  + ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;