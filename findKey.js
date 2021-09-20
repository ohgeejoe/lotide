//the findKey function will take in an object and a callback. It will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.


//copying assertEqual function
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.assert(actual === expected, `🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:  + ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//test code
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 7)); // should return undefined