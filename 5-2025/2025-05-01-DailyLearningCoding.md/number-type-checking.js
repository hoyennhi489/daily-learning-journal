// 1. Write a function to check if a number is odd/even
function checkNumberIsOddEven(a) {
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
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(6));
console.log(isEven(3));

function isOdd(n) {
    return n % 2 !== 0;
}
console.log(isOdd(6));
console.log(isOdd(3));

// 2. Write a function to check if a number is divisible by 5
function divisibleBy5(a) {
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

    let sqrt = Math.sqrt(n); // Calculate the square root of n
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

// Math.sqrt() is a JavaScript function used to calculate the square root (√) of a number.