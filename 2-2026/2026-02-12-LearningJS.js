// 1. Write a function that takes a number and checks whether it is even or odd

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));


// 2. Write a function to calculate the sum of numbers in an array

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4]));


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

console.log(countChar("Hello World"));


// 4. Write a function to count the occurrences of each element in an array

function countNumber(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (result[num]) {
      result[num]++;
    } else {
      result[num] = 1;
    }
  }

  return result;
}

console.log(countNumber([1, 2, 2, 3, 1]));


// 5. Write a function to find the second largest number in an array

function secondMax(arr) {
  let max = Math.max(...arr);
  let newArr = arr.filter(num => num !== max);

  return Math.max(...newArr);
}

console.log(secondMax([3, 5, 1, 9, 7]));


// 6. Write a function to remove duplicate elements from an array

function uniqueArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(uniqueArray([1, 2, 2, 3, 3, 4]));


// 7. Re-implement the map function

function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

console.log(myMap([1, 2, 3], x => x * 2));


// 8. Check if a string is a palindrome

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


// 9. Manage a name list

let list = [];

function add(name) {
  list.push(name);
}

function remove(name) {
  list = list.filter(item => item !== name);
}

function show() {
  console.log(list);
}

add("Nhi");
add("An");
add("Binh");
show();

remove("An");
show();


// 10. Write a function to flatten nested arrays

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten([1, [2, [3, 4], 5]]));