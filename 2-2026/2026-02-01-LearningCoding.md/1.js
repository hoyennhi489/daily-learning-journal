// 1. Count Even Numbers
//  Receive an array of numbers
//  Count how many even numbers are in the array
function countEvenNumbers(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEvenNumbers([2, 3, 6, 12, 7])); // 3


// 2. Find Longest String
//  Receive an array of strings
//  Return the longest string
function findLongestString(arr) {
  let longest = "";

  for (let word of arr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(findLongestString(["I", "Love", "Javascrip"])); // "Javascrip"


// 3. Remove Falsy Values
//  Receive an array with any values
//  Return a new array with all falsy values removed
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3, null, undefined, NaN]));
// [1, 2, 3]


// 4. Sum Greater Than 10
//  Receive an array of numbers
//  Calculate the sum of numbers greater than 10
function sumGreaterThan10(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumGreaterThan10([5, 12, 8, 20, 3, 15])); // 47


// 5. Has Duplicate
//  Receive an array
//  Return true if there are duplicate elements
//  Otherwise, return false
function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(hasDuplicate([1, 2, 3, 4])); // false
console.log(hasDuplicate([1, 2, 3, 2])); // true


// Set - does NOT allow duplicate elements
// size - .size = number of elements in the Set