// 1. Write a function that takes an array of numbers.
// Return a new array containing only even numbers.

function printEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(printEven([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]

// 2. Write a function that takes an array of numbers.
// Calculate the sum of all elements in the array.

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4]));
// 10

// 3. Write a function that takes a string.
// Return the reversed string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// olleh

// 4. Write a function that takes a string.
// Count the number of occurrences of each character.

function countChar(str) {
  let result = {};

  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

console.log(countChar("banana"));
// { b: 1, a: 3, n: 2 }

// 5. Write a function that takes an array of numbers.
// Find the largest number in the array.

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([4, 7, 2, 9, 1]));
// 9

// 6. Write a function that takes an array of numbers.
// Filter numbers greater than 5.

function filterGreater5(arr) {
  return arr.filter((num) => num > 5);
}

console.log(filterGreater5([2, 6, 8, 1, 4, 9]));
// [6, 8, 9]

// 7. Write a myMap function similar to JavaScript's map.
// The function takes an array and a callback.

function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

console.log(myMap([1, 2, 3], (x) => x * 2));
// [2, 4, 6]

// 8. Write a function to check a string.
// Return true if it is a palindrome, otherwise false.

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("level"));
// true

// 9. Write a program to manage a list of names.
// Functions: add, remove, show.

let list = [];

function add(name) {
  list.push(name);
}

function remove(name) {
  list = list.filter((item) => item !== name);
}

function show() {
  return list;
}

add("Nhi");
add("An");
remove("Nhi");

console.log(show());
// ["An"]

// 10. Write a function that takes a sentence.
// Count how many words are in the sentence.

function countWords(sentence) {
  return sentence.trim().split(" ").length;
}

console.log(countWords("I love learning JavaScript"));
// 4