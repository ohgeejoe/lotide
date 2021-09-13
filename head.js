// this program is a function that retries the first element of an array. tested using code from previous assertEqual exercise

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.assert(actual === expected, `🛑🛑🛑 Assertion failed ${actual} !== ${expected}`); 
}
  else {
console.log(`✅✅✅ Assertion Passed:  + ${actual} === ${expected}`);
      }
};


const head = function(array) {
  let first = array[0];
  return first;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");