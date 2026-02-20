// 1. Write a function that takes a number and checks if it is even or odd

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4)); // Even
console.log(checkEvenOdd(7)); // Odd



// 2. Write a function to calculate the sum of numbers in an array

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10



// 3. Write a function to count characters in a string (excluding spaces)

function countChar(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }

  return count;
}

console.log(countChar("Hello World")); // 10



// 4. Write a function to find the largest number in an array

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([3, 7, 2, 9, 5])); // 9



// 5. Write a function to reverse a string

function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("hello")); // olleh

// 6. Write a function that checks if a number is positive, negative, or zero

function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(5));   // Positive
console.log(checkNumber(-3));  // Negative
console.log(checkNumber(0));   // Zero



// 7. Write a function that counts how many even numbers are in an array

function countEven(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countEven([1, 2, 3, 4, 6])); // 3



// 8. Write a function that converts a string to uppercase

function toUpper(str) {
  return str.toUpperCase();
}

console.log(toUpper("hello world")); // HELLO WORLD



// 9. Write a function that checks if a number exists in an array

function exists(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }

  return false;
}

console.log(exists([1, 3, 5, 7], 5)); // true
console.log(exists([1, 3, 5, 7], 2)); // false



// 10. Write a function that calculates the average of numbers in an array

function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(average([2, 4, 6, 8])); // 5