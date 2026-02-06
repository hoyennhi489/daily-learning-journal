/* 1. Count Occurrences
Write a function that takes:
 • An array of numbers
 • A number
Return how many times that number appears in the array.
*/
function countOccurrences(arr, num) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 2, 3, 2, 2, 4], 2)); // 3

/* 2. Remove Falsy Values
Write a function that takes an array
Return a new array without falsy values
(false, 0, "", null, undefined, NaN).
*/
function removeFalsy(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN])); // [1, 2, 3]

/* 3. Capitalize Words
Write a function that takes a string
Capitalize the first letter of each word.

Example:
"hello world" → "Hello World"
*/
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capitalizeWords("hello world")); // Hello World

/* 4. Find Max & Min
Write a function that takes an array of numbers
Return an object: { max: ?, min: ? }
*/
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return {
    max: max,
    min: min,
  };
}

console.log(findMaxMin([5, 2, 9, 1, 7])); // { max: 9, min: 1 }

/* 5. Group By Length
Write a function that takes an array of strings
Group them by string length.

Example:

["a", "bb", "ccc", "dd"]

→

{
  1: ["a"],
  2: ["bb", "dd"],
  3: ["ccc"]
}
*/
function groupByLength(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let len = arr[i].length;

    if (!result[len]) {
      result[len] = [];
    }

    result[len].push(arr[i]);
  }

  return result;
}

console.log(groupByLength(["a", "bb", "ccc", "dd"]));

/* 6. Reverse Array
Write a function that takes an array
Return the reversed array.
*/
function reverseArray(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]

/* 7. Sum of Numbers
Write a function that takes an array of numbers
Return the sum of all elements.
*/
function sumNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumNumbers([1, 2, 3, 4])); // 10

/* 8. Remove Duplicates
Write a function that takes an array
Remove duplicate elements.
*/
function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]

/* 9. Check Palindrome
Write a function that takes a string
Check if it is a palindrome.
*/
function checkPalindrome(str) {
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(checkPalindrome("madam")); // true
console.log(checkPalindrome("hello")); // false

/* 10. Count Words
Write a function that takes a string
Count the number of words.
*/
function countWords(str) {
  let words = str.trim().split(" ");

  return words.length;
}

console.log(countWords("Hello world JS")); // 3