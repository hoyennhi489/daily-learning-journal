// 1. Min Number
// Receive an array of numbers
// Return the smallest number in the array
function minNumber(arr) {
  return Math.min(...arr);
}
console.log(minNumber([10, 5, 100, -50])); // -50


// 2. Sum Odd Numbers
// Receive an array of numbers
// Calculate the sum of odd numbers
function sumOddNumber(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(sumOddNumber([1, 2, 3, 4])); // 4


// 3. Count Falsy Values
// Receive an array of any values
// Count how many falsy values are in the array
function countFalsyNumber(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      count++;
    }
  }

  return count;
}
console.log(countFalsyNumber([0, 1, false, "hello", "", null, undefined, NaN])); // 6


// 4. Longest String
// Receive an array of strings
// Return the string with the longest length
function longestString(arr) {
  let longest = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}
console.log(longestString(["cat", "elephant", "dog"])); // elephant


// 5. Check Includes
// Receive an array and a value
// Return true if the array contains the value, otherwise false
function checkIncludes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(checkIncludes([1, 2, 3, 4], 3)); // true
console.log(checkIncludes(["a", "b", "c"], "d")); // false