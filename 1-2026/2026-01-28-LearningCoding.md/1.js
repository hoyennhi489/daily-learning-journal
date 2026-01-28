/* 1. Max Number
Takes an array of numbers.
Returns the largest number in the array.
*/
function maxNumber(arr) {
  return Math.max(...arr);
}
console.log(maxNumber([10, 5, 8, 20, 2])); // 20
// Math.max() returns the largest number among the given values.

/* 2. Sum Even Numbers
Takes an array of numbers.
Calculates the sum of all even numbers in the array.
*/
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumEvenNumbers([10, 5, 8, 20, 2])); // 40

/* 3. Remove Falsy Values
Takes an array of any values.
Returns a new array containing only truthy values.
*/
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, "", 3, null])); // [1, 2, 3]

/* 4. Most Frequent Element
Takes an array.
Returns the most frequent element in the array.
*/
function mostFrequentElement(arr) {
  let count = {};
  let maxCount = 0;
  let mostFrequent = null;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    count[item] = (count[item] || 0) + 1;

    if (count[item] > maxCount) {
      maxCount = count[item];
      mostFrequent = item;
    }
  }

  return mostFrequent;
}

console.log(mostFrequentElement([1, 2, 2, 3, 3, 3, 4])); // 3

/* 5. Reverse String
Takes a string.
Returns the string reversed.
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"

/* 6. Count Positives
Takes an array of numbers.
Counts how many numbers are greater than 0.
*/
function countPositives(arr) {
  return arr.filter((num) => num > 0).length;
}
console.log(countPositives([1, -2, 3, 0, 4, -5])); // 3