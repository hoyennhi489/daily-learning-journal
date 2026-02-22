// 1. Remove Duplicates
// Write a function that removes duplicate values from an array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]


// 2. Count Occurrences
// Write a function that counts how many times a number appears in an array

function countOccurrences(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));
// 3


// 3. Capitalize First Letter
// Write a function that capitalizes the first letter of each word

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world javascript"));
// "Hello World Javascript"


// 4. Check Palindrome
// Write a function to check if a string is a palindrome
// (ignore spaces and case)


function isPalindrome(str) {
  const cleaned = str.replace(/\s/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("madam"));        // true
console.log(isPalindrome("hello"));        // false
console.log(isPalindrome("Race Car"));     // true


// 5. Find Second Largest Number
// Write a function to find the second largest number in an array
// Do NOT use sort()

function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] < largest) {
      second = arr[i];
    }
  }

  return second;
}

console.log(secondLargest([10, 5, 8, 20, 15]));
// 15


// 6. Flatten Array (1 level)
// Write a function that flattens an array one level

function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flatten([1, [2, 3], [4, 5]]));
// [1, 2, 3, 4, 5]


// 7. Group By Length
// Write a function that groups strings by their length

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

console.log(groupByLength(["a", "hi", "hello", "to", "cat"]));
/*
{
  1: ["a"],
  2: ["hi", "to"],
  3: ["cat"],
  5: ["hello"]
}
*/