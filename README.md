# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ohgeejoe/lotide`

**Require it:**

`const _ = require('@ohgeejoe/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

head(...): returns the first element of the inputted array
tail(...): returns the array with the first element removed
middle(...): returns the middle element(s) of the inputted array
countOnly(...): takes an inputted array (keys) and object and returns an object containing the matching keys and their value
letterPositions(...): takes an input string and letter and returns the index of that letter within the string
findKeyByValue(...): takes an input object and value and returns the key that contains that value
eqObjects(...): assesses whether two objects are equal (returns true or false)
eqArrays(...): assesses whether two arrays are equal (returns true or false)
countLetters(...): Takes a sentence and returnes an array of the individual letter and its array position
takeUntil(...): function that returns a slice of the array with elements taken from the beginning
without(...): function that removes elements from an array
map(...): function that creates a new array with the results of calling a provided function on every element in the calling array
findKey(...): function that scans the object and return the first key for which the callback returns a truthy value
assertEqual(...): function that asserts if two values are equals
assertArraysEqual(...): function that asserts if two arrays are equals



* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description