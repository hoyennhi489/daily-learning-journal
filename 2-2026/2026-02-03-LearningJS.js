// 1. Count Odd Numbers
// Receive an array of numbers
// Count how many odd numbers are in the array
function countOddWithFilter(arr) {
  return arr.filter((num) => num % 2 !== 0).length;
}
console.log(countOddWithFilter([1, 4, 13, 55, 34])); // 3

function countOddWithLoop(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) count++;
  }
  return count;
}
console.log(countOddWithLoop([1, 4, 13, 55, 34])); // 3

// 2. Find Shortest String
// Receive an array of strings
// Return the shortest string
function findShortestString(arr) {
  let shortest = arr[0];
  for (let word of arr) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}
console.log(findShortestString(["I", "Love", "Javascrip"]));

// 3. Filter Greater Than Average
// Receive an array of numbers
// Calculate the average value of the array
// Return a new array containing numbers greater than the average
function filterGreaterThanAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(filterGreaterThanAverage([1, 2, 3, 4, 5])); // [4, 5]

// 4. All Truthy Check
// Receive an array of any values
// Return true if all elements are truthy
// Otherwise return false

// Method 1: using .filter
function allTruthyCheck(arr) {
  return arr.filter(Boolean).length === arr.length;
}

console.log(allTruthyCheck([0, 1, false, 2, "", 3, null])); // false
console.log(allTruthyCheck([1, "a", true, 5])); // true

// Method 2: using .every = all elements must be truthy
function allTruthyCheck1(arr) {
  return arr.every(Boolean);
}
console.log(allTruthyCheck1([1, "a", true])); // true
console.log(allTruthyCheck1([1, 0, true])); // false

// 5. Find First Duplicate
// Receive an array
// Return the first duplicated element
// If none exists → return undefined
function findFirstDuplicate(arr) {
  let seen = [];

  for (let i = 0; i < arr.length; i++) {
    if (seen.includes(arr[i])) {
      return arr[i];
    }
    seen.push(arr[i]);
  }

  return undefined;
}
console.log(findFirstDuplicate(["a", "b", "a", "c"])); // "a"
console.log(findFirstDuplicate([true, false, true])); // true
console.log(findFirstDuplicate([])); // undefined

// includes - checks whether the array contains a given value