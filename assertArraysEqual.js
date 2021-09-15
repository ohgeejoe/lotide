//copied eqArrays function
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

const assertArraysEqual = function(array1,array2) {
  if (eqArrays(array1,array2)) {
    console.log('The arrays are equal!');
  } else {
    console.log('The arrays are not equal');
  }
};
//test cases
//assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]);
//assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]);