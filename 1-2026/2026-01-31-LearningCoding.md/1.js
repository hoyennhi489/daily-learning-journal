// 1. Count Negative Numbers
// Receive an array of numbers
// Count how many numbers are less than 0
function countNegativeNumbers(arr) {
  let count = 0;

  for (let number of arr) {
    if (number < 0) {
      count++;
    }
  }

  return count;
}
console.log(countNegativeNumbers([1, -2, 3, -5, -7])); // 3


// 2. Get First Truthy
// Receive an array of any values
// Return the first truthy value in the array
// If none → return undefined
function getFirstTruthy(arr) {
  for (let item of arr) {
    if (item) {
      return item;
    }
  }
  return undefined;
}
console.log(getFirstTruthy([0, "", null, "Hello", 5])); // "Hello"


// 3. Multiply All Numbers
// Receive an array of numbers
// Calculate the product of all elements in the array
function multiplyAllNumbers(arr) {
  let result = 1;

  for (let number of arr) {
    result *= number;
  }

  return result;
}
console.log(multiplyAllNumbers([2, 3, 4])); // 24


// 4. Shortest String
// Receive an array of strings
// Return the shortest string
function shortestString(arr) {
  let shortest = arr[0];

  for (let str of arr) {
    if (str.length < shortest.length) {
      shortest = str;
    }
  }

  return shortest;
}
console.log(shortestString(["apple", "cat", "banana"])); // "cat"


// 5. Check All Even
// Receive an array of numbers
// Return true if all numbers are even, otherwise false
function checkAllEven(arr) {
  for (let number of arr) {
    if (number % 2 !== 0) {
      return false;
    }
  }
  return true;
}
console.log(checkAllEven([2, 4, 6])); // true
console.log(checkAllEven([2, 3, 6])); // false