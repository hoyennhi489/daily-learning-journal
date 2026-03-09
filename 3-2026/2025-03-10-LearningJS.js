// Exercise 1
// Write a function that takes a number n
// If n is even return "even"
// If n is odd return "odd"

function checkNumber(n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(checkNumber(7)); //odd
console.log(checkNumber(2)); //even


// Exercise 2
// Write a function to calculate the sum of numbers from 1 to n
// Example:
// sumToN(5) → 15
// because 1 + 2 + 3 + 4 + 5 = 15

function sumToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumToN(5)); //15
console.log(sumToN(10)); //55


// Exercise 3
// Write a function to reverse a string
// Example:
// reverseString("hello") → "olleh"

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello")); // olleH
console.log(reverseString("World")); // dlroW


// Exercise 4
// Write a function to count the number of vowels in a string
// Vowels include: a, e, i, o, u
// Example:
// countVowels("javascript") → 3

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello World")); // 3
console.log(countVowels("javascript")); // 3


// Exercise 5
// Write a function to find the largest number in an array
// Example:
// findMax([3,7,2,9,5]) → 9

function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 7, 2, 9, 5])); // 9


// Exercise 6
// Write a function that takes an array of numbers
// Return a new array that only contains even numbers
// Example:
// getEvenNumbers([1,2,3,4,5,6]) → [2,4,6]

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


// Exercise 7
// Write a function to check if a string is a palindrome
// A palindrome is a string that reads the same forward and backward
// Example:
// isPalindrome("madam") → true
// isPalindrome("hello") → false

function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");
  return str === reverse;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// Exercise 8
// Write a program that prints numbers from 1 to 100
// If the number is divisible by 3 print "Fizz"
// If the number is divisible by 5 print "Buzz"
// If the number is divisible by both 3 and 5 print "FizzBuzz"

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(10);


// Exercise 9
// Write a function to find the most frequent element in an array
// Example:
// mostFrequent([1,2,2,3,3,3,4]) → 3

function mostFrequent(arr) {
  let count = {};
  let maxCount = 0;
  let result;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      result = num;
    }
  }
  return result;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4])); // 3


// Exercise 10
// Write a function to flatten a nested array
// Example:
// flatten([1,[2,3],[4,[5]]]) → [1,2,3,4,5]

function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten([1, [2, 3], [4, [5]]])); // [1, 2, 3, 4, 5]