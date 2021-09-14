const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.assert(actual === expected, `🛑🛑🛑 Assertion failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed:  + ${actual} === ${expected}`);
  }
};


//loop through each element in array one within that loop compare to the corresponding elemtn in array 2 (using position i), if this fails at anypoint, break
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


//test conditions

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
