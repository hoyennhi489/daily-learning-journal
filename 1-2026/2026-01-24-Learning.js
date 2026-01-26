/*
1. Reverse a Word
   Write a function that takes a string.
   Return the string reversed.

2. First & Last
   Write a function that takes a string.
   Return the first and last character together.

3. Longer Than 3
   Write a function that takes an array of strings.
   Return only the strings longer than 3 characters.

4. Count Letter
   Write a function that takes a string and a letter.
   Return how many times the letter appears.

5. Remove Duplicates
   Write a function that takes an array.
   Return a new array with duplicates removed.

6. Starts With
   Write a function that takes a string and a letter.
   Return true if the string starts with that letter.

7. Capitalize Word
   Write a function that takes a word.
   Return the word with the first letter capitalized.

8. Total Length
   Write a function that takes an array of strings.
   Return the total number of characters across all strings.

9. Remove All Spaces
   Write a function that takes a string.
   Return the string with all spaces removed.

10. Is Empty
    Write a function that takes a string or an array.
Return true if it is empty, otherwise false
*/

// 1. Reverse a Word
// Reverse a string
function reverseWord(str) {
  return str
    .split("") // Split string into an array of characters
    .reverse() // Reverse the array
    .join(""); // Join the array back into a string
}

console.log(reverseWord("hello"));
// "olleh"


// 2. First & Last
// Get the first and last character
function firstAndLast(str) {
  return str[0] + str[str.length - 1];
}

console.log(firstAndLast("world"));
// "wd"


// 3. Longer Than 3
// Filter strings longer than 3 characters
function longerThan3(arr) {
  return arr.filter((word) => word.length > 3);
}

console.log(longerThan3(["hi", "hello", "sun", "world"]));
// ["hello", "world"]


// 4. Count Letter
// Count how many times a letter appears
function countLetter(str, letter) {
  let count = 0;

  for (let char of str) {
    // Loop through each character
    if (char === letter) count++;
  }

  return count;
}

console.log(countLetter("banana", "a"));
// 3


// 5. Remove Duplicates
// Remove duplicate elements
function removeDuplicates(arr) {
  return [...new Set(arr)];
  // Set automatically removes duplicates
  // ... converts Set back into an array
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
// [1, 2, 3, 4]


// 6. Starts With
// Check if the string starts with a specific letter
function startsWith(str, letter) {
  return str.startsWith(letter);
}

console.log(startsWith("hello", "h"));
// true


// 7. Capitalize Word
// Capitalize the first letter of a word
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
  // toUpperCase() → capitalize first letter
  // slice(1) → get the rest of the word
}

console.log(capitalizeWord("apple"));
// "Apple"


// 8. Total Length
// Calculate total length of all strings in an array
function totalLength(arr) {
  return arr.reduce((sum, word) => sum + word.length, 0);
}

console.log(totalLength(["hi", "hello", "cat"]));
// 10


// 9. Remove All Spaces
// Remove all spaces from a string
function removeSpaces(str) {
  return str.replaceAll(" ", "");
}

console.log(removeSpaces("a b c d"));
// "abcd"


// 10. Is Empty
// Check if a string or array is empty
function isEmpty(value) {
  return value.length === 0;
}

console.log(isEmpty(""));
// true

console.log(isEmpty([1, 2]));
// false