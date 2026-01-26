// 1. Count Words
// Write a function that takes a sentence.
// Return the number of words in the sentence (words are separated by spaces).
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

console.log(countWords("Hello world")); // 2
console.log(countWords("  I love JavaScript  ")); // 3

// trim() → removes spaces at the beginning and end
// split(/\s+/) → splits words by one or more spaces
// length → counts the number of words



// 2. Hide Email
// Take an email address.
// Hide part of the string before "@", keeping only the first 2 characters.
function hideEmail(email) {
  let [name, domain] = email.split("@");
  let hidden = name.slice(0, 2) + "***";
  return hidden + "@" + domain;
}

console.log(hideEmail("hyn489@gmail.com")); // hy***@gmail.com

// slice(start, end) → cuts a string
// split() → splits a string into an array



// 3. Is Palindrome
// Take a string.
// Return true if it reads the same forwards and backwards, otherwise false.
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// split("") → splits string into characters
// reverse() → reverses the array
// join("") → joins characters back into a string



// 4. Repeat Character
// Take a character (or string) and a number.
// Return a string that repeats the character the given number of times.
function repeatCharacter(word, number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += word;
  }
  return result;
}

console.log(repeatCharacter("hello", 3)); // hellohellohello



// 5. Find Longest Word
// Take a sentence.
// Return the longest word in the sentence.
function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(findLongestWord("I LOVE JAVASCRIPT"));

// for...of → loops through each element in an array


// 6. Sum Numbers
// Take an array of numbers.
// Return the sum of all numbers.
function sumNumbers(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumNumbers([1, 2, 3, 4])); // 10
console.log(sumNumbers([5, 10, 15])); // 30



// 7. Find Max
// Take an array of numbers.
// Return the largest number.

// Method 1
function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([1, 5, 9, 20, 5])); // 20

// Method 2: using Math.max()
function findMaxWithMath(arr) {
  return Math.max(...arr);
}

console.log(findMaxWithMath([1, 5, 9, 20, 5])); // 20



// 8. Even Numbers Only
// Take an array of numbers.
// Return a new array containing only even numbers.
function evenNumbersOnly(arr) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(evenNumbersOnly([2, 3, 4, 5, 7, 8])); // [2, 4, 8]

// filter() → filters elements in an array