const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');


assertArraysEqual(["hey", "hi", "hello"], ["hey", "hi", "hello"]);
assertArraysEqual(["hey", "hi", "bye"], ["hey", "hi", "hello"]);