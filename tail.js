//this function returns the tail of an array

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.assert(actual === expected, `🛑🛑🛑 Assertion failed 
    ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:  + ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let tailsarray = array.shift();
  return tailsarray;
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);