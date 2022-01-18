# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jackylin1/lotide`

**Require it:**

`const _ = require('@jackylin1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`head` : Find the value of the first element in an array.
*`tail` : Find the value that is not the first element in an array.
*`middle` : Find the value in the middle of array. (Odd index number will be rounded, even index number will output two elements).
*`assertArraysEqual` : Check if expected array and actual array is equal.
*`eqArray` : Check if expected array and actual array is equal.
*`assertEqual` : Check if expected value and actual value is equal.