// this program is a function that retries the first element of an array. tested using code from previous assertEqual exercise

const assertEqual = require('./assertEqual');

const head = function(array) {
  let first = array[0];
  return first;
};

module.exports = head;

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

