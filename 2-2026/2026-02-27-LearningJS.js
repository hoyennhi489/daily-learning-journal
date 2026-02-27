// 1. Print numbers from 10 down to 1
function printNumbers() {
  for (let i = 10; i >= 1; i--) {
    console.log(i); // 10 9 8 7 6 5 4 3 2 1
  }
}
printNumbers();

// 2. Calculate the sum from 1 to 50
function sumFrom1To50() {
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumFrom1To50()); // 1275

// 3. Check if a number is greater than 100
function isGreaterThan100(number) {
  return number > 100;
}
console.log(isGreaterThan100(120)); // true

// 4. Count the number of characters in a string
function countCharacters(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    count++;
  }
  return count;
}
console.log(countCharacters("javascript")); // 10

// 5. Find the smallest number in an array
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([8, 3, 12, 5, 1])); // 1

// 6. Count numbers greater than 5 in an array
function countGreaterThan5(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      count++;
    }
  }
  return count;
}
console.log(countGreaterThan5([2, 7, 4, 9, 1, 6])); // 3

// 7. Reverse an array
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 8. Check if a string contains the letter "e"
function hasLetterE(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "e") {
      return true;
    }
  }
  return false;
}
console.log(hasLetterE("hello")); // true

// 9. Multiply all numbers in an array
function multiplyArray(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}
console.log(multiplyArray([2, 3, 4])); // 24

// 10. Count negative numbers in an array
function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(countNegativeNumbers([3, -1, 5, -7, 8, -2])); // 3