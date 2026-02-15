// 1. Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Calculate the sum from 1 to n

function sumToN(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumToN(5)); // 15

// 3. Check if a number is positive / negative / zero

function checkNumber(num) {
  if (num > 0) {
    return "Positive number";
  } else if (num < 0) {
    return "Negative number";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));

// 4. Count even numbers in an array

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

// 5. Find the largest number in an array (without using Math.max)

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

// 6. Convert lowercase letters to uppercase

function toUpper(str) {
  return str.toUpperCase();
}

console.log(toUpper("hello")); // HELLO

// 7. Calculate the average of an array

function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(average([2, 4, 6, 8])); // 5

// 8. Check if a number exists in an array

function checkExist(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }

  return false;
}

console.log(checkExist([1, 3, 5, 7], 5)); // true
console.log(checkExist([1, 3, 5, 7], 2)); // false

// 9. Count the number of words in a sentence

function countWord(str) {
  let words = str.split(" ");

  return words.length;
}

console.log(countWord("Hello my name is Nhi")); // 5

// 10. Remove the last element of an array (without using pop)

function removeLast(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(removeLast([1, 2, 3, 4])); // [1,2,3]