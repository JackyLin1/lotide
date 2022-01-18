const assertEqual = require('../assertEqual.js')
const eqArray = require('../eqArray.js')

console.log(eqArray([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArray([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArray(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArray(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true);