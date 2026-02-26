// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1 2 3 4 5 6 7 8 9 10
}


// 2. Calculate the sum from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("Sum from 1 to 100:", sum); // Sum from 1 to 100: 5050


// 3. Check if a number is even or odd
let number1 = 7;
if (number1 % 2 === 0) {
  console.log(number1, "is Even"); 
} else {
  console.log(number1, "is Odd"); // 7 is Odd
}


// 4. Count characters in a string
let text1 = "hello";
console.log("Length:", text1.length); // Length: 5


// 5. Reverse a string
let text2 = "hello";
let reversed = "";
for (let i = text2.length - 1; i >= 0; i--) {
  reversed = reversed + text2[i];
}
console.log("Reversed:", reversed); // Reversed: olleh


// 6. Find the largest number in an array
let arr1 = [5, 2, 9, 1];
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
}
console.log("Max number:", max); // Max number: 9


// 7. Count even numbers in an array
let arr2 = [1, 2, 3, 4, 5, 6];
let count = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 === 0) {
    count = count + 1;
  }
}
console.log("Even count:", count); // Even count: 3


// 8. Check if string contains letter "a"
let text3 = "banana";
if (text3.includes("a")) {
  console.log("String contains 'a'"); // String contains 'a'
} else {
  console.log("String does not contain 'a'");
}


// 9. Calculate factorial
let number2 = 5;
let result = 1;
for (let i = 1; i <= number2; i++) {
  result = result * i;
}
console.log("Factorial:", result); // Factorial: 120


// 10. Remove negative numbers from array
let arr3 = [1, -2, 3, -4, 5];
let newArr = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] >= 0) {
    newArr.push(arr3[i]);
  }
}
console.log("Array without negatives:", newArr); // Array without negatives: [ 1, 3, 5 ]