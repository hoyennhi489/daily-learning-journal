// 1. Write a function to calculate the sum from 1 to 10

function sumFrom1To10() {
  let sum = 0;

  for (let i = 1; i <= 10; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumFrom1To10()); // 55



// 2. Write a function to check if a number is even or odd

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}

console.log(checkEvenOdd(7)); // Odd number



// 3. Write a function to count numbers greater than 5 in an array

function countGreaterThan5(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countGreaterThan5([2, 6, 8, 3, 10])); // 3



// 4. Write a function to find the maximum number in an array

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([5, 9, 2, 20, 11])); // 20



// 5. Write a function to reverse a string

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

console.log(reverseString("hello")); // olleh



// 6. Write a function to calculate the factorial of a number

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5)); // 120



// 7. Write a function to check if a string contains the letter "a"

function hasLetterA(str) {
  if (str.includes("a")) {
    return "Contains letter a";
  } else {
    return "Does not contain letter a";
  }
}

console.log(hasLetterA("javascript")); // Contains letter a



// 8. Write a function to calculate the sum of even numbers from 1 to 20

function sumEven1To20() {
  let sum = 0;

  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }

  return sum;
}

console.log(sumEven1To20()); // 110



// 9. Write a function to find the minimum number in an array

function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

console.log(findMin([8, 3, 15, 1, 9])); // 1



// 10. Write a function to count the number of characters in a string

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("frontend")); // 8