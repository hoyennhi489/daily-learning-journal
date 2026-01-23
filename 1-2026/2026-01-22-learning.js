// 1. Create variables & functions to receive scores of 2 teams
import "./styles.css";

let name = "Nhi";

function football(vietnam = 0, china = 0) {
  console.log(china);
  if (vietnam > china) {
    console.log("Happy!");
  } else if (vietnam < china) {
    console.log("sad");
  } else {
    console.log("OK");
  }
}
football(3);
football(3, 7);
football(7, 7);

// 2. For loop (count from number → number)
function count(from, to) {
  for (let i = from; i <= to; i++) {
    console.log(i);
  }
}
count(20, 65);

// 3. Array in for loop
let arr = [];

function addItemsToArr(from, to) {
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
}
addItemsToArr(5, 10);
console.log(arr); // [5, 6, 7, 8, 9, 10]
// push() adds elements to an array

// 4. Multiplication and returning function result inside a function
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 7));
// 28
// return: returns a value

function myNameAndAge(name, age) {
  console.log("Hello my name is: " + name, ", Im " + age + " year old");
}
myNameAndAge("Nhi", multiply(4, 7)); // Hello my name is: Nhi , Im 28 year old

// 5. Replace an element in an array
function replace(array, index, value) {
  console.log("the array is " + array);
  console.log("index is " + index);
  console.log(array[1]);
  // array[1] = value;
  // console.log(array);
  array[index] = value;
  console.log(array);
}
replace([6, 7, "cam"], 0, "cookie"); // ["cookie", 7, "cam"]

// 6. Check if both are strings
function tatCaPhaiStringKhong(a, b) {
  if (typeof (a, b) === "string") {
    console.log(true);
  } else {
    console.log(false);
  }
}
tatCaPhaiStringKhong("ngon", undefined); //false
// typeof is used to check data type

/* 7. Say hello
Write a function that takes a name and returns "Hello, <name>!".
*/
function sayHello(name) {
  console.log("Hello, " + name);
}
sayHello("Nhi"); // Hello, Nhi

/* 8. Is it a number?
Write a function that takes one parameter and returns true if it’s a number.
*/
function itIsANumber(a) {
  if (typeof a === "number") {
    console.log(true);
  } else {
    console.log(false);
  }
}
itIsANumber(1); // true
itIsANumber("Nhi"); // false

/* 9. Add two numbers
Write a function that takes two numbers and returns their sum.
*/
function addTwoNumber(a, b) {
  console.log(a + b);
}
addTwoNumber(4, 6); //10

/* 10. Convert minutes to seconds
Write a function that takes minutes and returns how many seconds that is.
*/
function convertMinutesToSeconds(minutes) {
  if (typeof minutes === "number") {
    console.log(minutes * 60);
  } else {
    console.log("need number to continue");
  }
}
convertMinutesToSeconds(true); // need number to continue
convertMinutesToSeconds(6); // 360

/*
11. First character 
Write a function that takes a string and returns its first character.
12. Yes or no
Write a function that takes a boolean and returns "Yes" if true, "No" if false.
*/
function firstCharacter(string) {
  console.log(string[0]);
}
firstCharacter("chuoi"); // c
firstCharacter("Nhi"); // N

function yesOrNo(boolean) {
  if (boolean === true) {
    console.log("yes");
  } else if (boolean == false) {
    console.log("no");
  } else console.log("need boolean");
}
yesOrNo(true); // yes
yesOrNo(false);// no

/*
13. Even or odd
Write a function that takes a number and returns "even" or "odd".

14. Longer than 5 characters
Write a function that takes a string and returns true if its length is more than 5.
*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Is even");
  } else {
    console.log("Is Odd");
  }
}
evenOrOdd(24); // Is even
evenOrOdd(37); // Is Odd

function longerThan5Characters(string) {
  if (string.length >= 5) {
    console.log(true);
  } else {
    console.log(false);
  }
}
longerThan5Characters("Trongs"); // true
longerThan5Characters("cam"); // false

/* 15. Write a function that takes a word and a number, and returns the word repeated that many times.
Example: repeat("hi", 3) → "hihihi"
*/
function wordRepeated(word, number) {
  let result = "";
  for (let i = 0; i <= number; i++) {
    result = result + word;
  }
  console.log(result);
}
wordRepeated("hi", 4); // hihihihi

/* 16. Return anything
Write a function that takes one parameter and returns it exactly as it is.
*/
function returnAnything(a) {
  return a;
}
console.log(returnAnything(3)); // 3

/* 17. Always true
Write a function that takes no parameters and always returns true.
*/
function alwaysTrue() {
  return true;
}
console.log(alwaysTrue()); // true

/* 18. Make it uppercase
Write a function that takes a string and returns it in uppercase.
*/
function uppercase(string) {
  return string.toUpperCase();
}
console.log(uppercase("hello")); //HELLO
// toUpperCase: used to convert a string to uppercase

/* 19. Add one
Write a function that takes a number and returns that number plus 1.
*/
function addOne(number) {
  return number + 1
}
console.log(addOne(2)); //3

/* 20. Is it empty?
Write a function that takes a string and returns true if it’s empty, otherwise false.
*/
function isItEmpty(string) {
  if (string === "") {
    console.log(true);
  } else {
    console.log(false);
  }
}
isItEmpty(""); //true
isItEmpty("Nhi"); //false

// 21. Double it
// Write a function that takes a number and returns twice that number.
function doubleIt(number){
  return number * 2
}
console.log(doubleIt(3));

// 22. Say goodbye
// Write a function that takes a name and returns "Goodbye, <name>".
function sayGoodBye(name) {
  return "Goodbye, " + name;
}
console.log(sayGoodBye("Nhi")); //Goodbye, Nhi

// 23. Boolean flip
// Write a function that takes a boolean and returns the opposite value.
function booleanFlip(boolean) {
  return !boolean;
}
console.log(booleanFlip(true)); //false
console.log(booleanFlip(false)); //true
// ! = invert boolean value

/* 24. Length of a string
Write a function that takes a string and returns its length.
*/
function lengthOfAString(string) {
  return string.length;
}
console.log(lengthOfAString("Nhi")); //3
console.log(lengthOfAString("Ho Yen Nhi")); //10

/* 25. Always zero
Write a function that takes any parameter and always returns 0.
*/
function alwaysZero(value) {
  return 0;
}

console.log(alwaysZero(5));        // 0
console.log(alwaysZero("Nhi"));    // 0
console.log(alwaysZero(true));     // 0