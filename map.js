//copied in assertArraysEqual and eqArrays
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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