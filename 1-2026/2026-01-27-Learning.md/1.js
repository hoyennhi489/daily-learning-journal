// 1. Reverse Array
// Receive an array.
// Return the array in reversed order.
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray(["h", "e", "l", "l", "o"]));
// reverse() - reverses an array


// 2. Count Truthy
// Receive any array.
// Count how many values are truthy.
function countTruthy(arr) {
  return arr.filter(Boolean).length;
}

console.log(countTruthy([0, 1, true, false, "", "hello", null, 5])); // 4

// .filter() - filters elements based on a condition


// 3. Is All Positive
// Receive an array of numbers.
// Return true if all numbers are greater than 0.
function isAllPositive(arr) {
  for (let num of arr) {
    if (num <= 0) {
      return false;
    }
  }
  return true;
}

console.log(isAllPositive([2, 4, 6, 8])); // true
console.log(isAllPositive([-1, -2])); // false


// 4. Find Missing Number
// Receive an array of numbers from 1 to N with one number missing.
// Return the missing number.
function findMissingNumber(arr) {
  let n = arr.length + 1;

  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

console.log(findMissingNumber([1, 2, 4, 5]));

// .includes() - checks if a value exists in an array (or string)


// 5. Unique Count
// Receive an array.
// Return the number of unique elements.
function uniqueCount(arr) {
  return new Set(arr).size;
}

console.log(uniqueCount([1, 2, 2, 3, 4, 4])); // 4
console.log(uniqueCount(["a", "b", "a", "c"])); // 3

// Set() - automatically removes duplicate values
// .size - number of unique elements


// 6. Password Strength
// Receive a password string.
// Check: length ≥ 8 characters and contains both letters and numbers.
function passwordStrength(password) {
  let hasLetter = false;
  let hasNumber = false;

  for (let char of password) {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z")
    ) {
      hasLetter = true;
    }

    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  return password.length >= 8 && hasLetter && hasNumber;
}

console.log(passwordStrength("abc12345")); // true
console.log(passwordStrength("abcdefg")); // false (missing number)
console.log(passwordStrength("12345678")); // false (missing letter)
console.log(passwordStrength("ab12")); // false (too short)


// 7. Group By Length
// Receive an array of strings.
// Group strings by their length.
function groupByLength(arr) {
  let result = {};

  for (let word of arr) {
    let length = word.length;

    if (result[length] === undefined) {
      result[length] = [];
    }

    result[length].push(word);
  }

  return result;
}

console.log(groupByLength(["hi", "cat", "dog", "a", "bird"]));

// Expected output:
// {
//   "1": ["a"],
//   "2": ["hi"],
//   "3": ["cat", "dog"],
//   "4": ["bird"]
// }