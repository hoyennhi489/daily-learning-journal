// 1. Extract the ones digit of a 3-digit number
function extractTheOne(n) {
    if (n.toString().length !== 3) return -1; // check if n is not a 3-digit number, return -1

    return n % 10; // return the ones digit
}
console.log(extractTheOne(123)); // 3
console.log(extractTheOne(124)); // 4

// 2. Extract the tens digit of a 3-digit number
function extractTheTens(n) {
    if (n.toString().length !== 3) return -1;

    return Math.trunc((n % 100) / 10); // remove the hundreds digit, divide by 10 to get the tens digit
}
console.log(extractTheTens(123)); // 2

// 3. Extract the hundreds digit of a 3-digit number
function extractTheHundreds(n) {
    if (n.toString().length !== 3) return -1;

    return Math.trunc(n / 100); // divide by 100 and truncate to get the hundreds digit
}
console.log(extractTheHundreds(678)); // 6

// 4. Calculate the sum of the digits of a 3-digit number
function sumDigits(n) {
    if (n.toString().length !== 3) return -1;

    const ones = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    const hundreds = Math.trunc(n / 100);
    return ones + tens + hundreds; // add hundreds + tens + ones
}
console.log(sumDigits(678)); // 21
console.log(sumDigits(958)); // 22