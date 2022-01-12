const eqArrays = function(arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return arr1.length === arr2.length ? true : false
};

const assertArraysEqual = function (actual, expected)
{
  if (eqArrays(actual,expected)) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const middle = function(arr){
  let half = arr.length/2
  let halfPlusOne = half + 1
  const newArr = [];
  
  // if (arr.length <= 2)
  // {
  //   return [];
  // }
  // else if (arr.length % 2 !== 0){
  //   newArr.push(arr[parseInt(half)])
  // }
  // else
  // {
  //   newArr.push(arr[half], arr[halfPlusOne])
  // }

  if (arr.length <= 2) return [];
  arr.length % 2 ? newArr.push(arr[parseInt(half)]) : newArr.push(arr[half], arr[halfPlusOne]) // if even go for the second case, if odd the first case
  
  return newArr
}

console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1])) // => []

