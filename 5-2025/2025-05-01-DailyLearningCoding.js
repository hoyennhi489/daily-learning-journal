// Math exercises
// 1. Write a function to calculate the area of a rectangle
// Formula: Area = a * b
function calcAreaOfRectangle(a, b) {
    if (a <= 0 || b <= 0) return -1;
    return a * b;
}
console.log(calcAreaOfRectangle(6, 7)); // Area = 42

// 2. Write a function to calculate the perimeter of a rectangle
// Formula: Perimeter = (a + b) * 2
function calcPerimeterOfRectangle(a, b) {
    if (a <= 0 || b <= 0) return -1;
    return (a + b) * 2;
}
console.log(calcPerimeterOfRectangle(2, 1)); // Perimeter = 6

// 3. Write a function to calculate the area of a circle
// Formula: Area = π * r * r
function calcAreaOfCircle(r) {
    if (r <= 0) return -1;
    return Math.PI * r * r;
}
console.log(calcAreaOfCircle(2)); // Area ≈ 12.566

// Number type checking exercises
// 1. Write a function to check if a number is odd/even
function checkNumberIsOddEven (a) {
    if (a % 2 == 0) {
        isValid = "is an even number";
    } else {
        isValid = "is an odd number";
    }
    return isValid;
}
console.log(checkNumberIsOddEven(3));
console.log(checkNumberIsOddEven(10));

// V2
function isEven (n) {
    return n % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(3));

function isOdd (n) {
    return n % 2 !== 0;
}
console.log(isOdd(6));
console.log(isOdd(3));

// 2. Write a function to check if a number is divisible by 5
function divisibleBy5 (a) {
    if (a >= 0 && a % 5 == 0) {
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid;
}
console.log(divisibleBy5(3));
console.log(divisibleBy5(10));

// 3. Write a function to check if a number is a perfect square
function isPerfectSquare(n) {
    if (n < 0) return false; // Negative numbers are not perfect squares

    let sqrt = Math.sqrt(n); // Calculate square root of n
    return sqrt === Math.floor(sqrt); // Check if the square root is an integer
}
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(20)); // false

// V2
function isPerfectSquare(n) {
    if (n < 0) return false;
    const sqrt = Math.sqrt(n);
    const sqrtInt = Math.trunc(sqrt);
    return sqrtInt * sqrtInt === n;
}
console.log(isPerfectSquare(4)); // true
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(20)); // false

// Math.sqrt(): built-in JavaScript function to calculate the square root (√) of a number

// Find MAX exercises
// 1. Convert hours to seconds
// 1 hour = 3600 seconds
function hoursToSeconds(hours) {
    return hours * 3600;
}
console.log(hoursToSeconds(2));
console.log(hoursToSeconds(1));

// 2. Given 3 numbers, find the max
// V1
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findMax(2, 5, 1));
console.log(findMax(9, 5, 3));

// V2
function findMax(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;

    return max;
}
console.log(findMax(7, 5, 3));

// 3. Given 3 numbers, find the max even number
function findMaxEvenNumber(a, b, c) {
    const evens = [a, b, c].filter(n => n % 2 === 0);
    if (evens.length === 0) return null; // or "No even number"

    return Math.max(...evens);
}
console.log(findMaxEvenNumber(3, 6, 8)); // 8
console.log(findMaxEvenNumber(5, 7, 9)); // null

// V2
function findMaxEven(a, b, c) {
    let max = Number.NEGATIVE_INFINITY;

    if (a % 2 === 0 && a > max) max = a;
    if (b % 2 === 0 && b > max) max = b;
    if (c % 2 === 0 && c > max) max = c;

    return max;
}
console.log(findMaxEven(7, 5, 3));
console.log(findMaxEven(2, 6, 10));

// Number.NEGATIVE_INFINITY: a very small value representing negative infinity, ensures any real number will be larger than it
// Math.max(): built-in JavaScript function to find the largest number among the arguments

// Digit extraction exercises
// 1. Get the unit digit of a 3-digit number
function extractTheOne(n) {
    if (n.toString().length !== 3) return -1; // check if n is not a 3-digit number, return -1

    return n % 10; // return the unit digit
}
console.log(extractTheOne(123)); // 3
console.log(extractTheOne(124)); // 4

// 2. Get the tens digit of a 3-digit number
function extractTheTens(n) {
    if (n.toString().length !== 3) return -1;

    return Math.trunc((n % 100) / 10); // remove hundreds, divide by 10 to get the tens digit
}
console.log(extractTheTens(123)); // 2

// 3. Get the hundreds digit of a 3-digit number
function extractTheHundreds(n) {
    if (n.toString().length !== 3) return -1;

    return Math.trunc(n / 100); // divide by 100 and truncate to get the hundreds digit
}
console.log(extractTheHundreds(678)); // 6

// 4. Calculate the sum of digits of a 3-digit number
function sumDigits(n) {
    if (n.toString().length !== 3) return -1;

    const ones = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    const hundreds = Math.trunc(n / 100);
    return ones + tens + hundreds; // sum of hundreds + tens + ones
}
console.log(sumDigits(678)); // 21
console.log(sumDigits(958)); // 22