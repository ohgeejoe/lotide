// the eqObjects function will take in two objects and returns a boolean based on a perfect match.

//pasting assertEqual
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.assert(actual === expected, `🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:  + ${actual} === ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  //should i call the assert equal function instead?
  const objectLengthCheck = function(object1, object2) {
    const key1 = Object.keys(object1);
    const key2 = Object.keys(object2);

    if (key1.length !== key2.length) {
      return false;
    }

    for (const key of key1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (areObjects && !objectLengthCheck(val1, val2) || !areObjects && val1 !== val2) {
        return false;
      }
    }
return true;
  };
  function isObject(object) {
    return typeof object === 'object';
  }
};


module.exports = eqObjects;

//test code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

