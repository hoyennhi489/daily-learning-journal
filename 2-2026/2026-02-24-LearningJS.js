// 1. Write a function that checks if a number is greater than 10

function checkGreaterThanTen(num) {
  if (num > 10) {
    return "Greater than 10";
  } else {
    return "10 or less";
  }
}

console.log(checkGreaterThanTen(15));
console.log(checkGreaterThanTen(8));


// 2. Write a function that finds the smallest number in an array

function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

console.log(findMin([5, 2, 9, 1, 7]));


// 3. Write a function that counts vowels in a string

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

console.log(countVowels("Hello World"));


// 4. Write a function that returns the first element of an array

function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([10, 20, 30]));


// 5. Write a function that multiplies all numbers in an array

function multiplyArray(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }

  return result;
}

console.log(multiplyArray([2, 3, 4]));


// 6. Write a function that checks if a number is positive or negative

function checkPositiveNegative(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkPositiveNegative(5));
console.log(checkPositiveNegative(-2));
console.log(checkPositiveNegative(0));


// 7. Write a function that counts how many numbers are greater than 5 in an array

function countGreaterThanFive(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      count++;
    }
  }

  return count;
}

console.log(countGreaterThanFive([1, 6, 3, 8, 10]));


// 8. Write a function that reverses an array

function reverseArray(arr) {
  let newArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }

  return newArray;
}

console.log(reverseArray([1, 2, 3, 4]));