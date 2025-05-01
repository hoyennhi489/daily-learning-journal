// 1. Convert hours to seconds
// 1 hour = 3600 seconds.
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
    if (evens.length === 0) return null; // or "No even numbers"
    
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

// Number.NEGATIVE_INFINITY: is a very small value representing "negative infinity", ensuring that all real numbers will be greater than it.
// Math.max() is a built-in JavaScript function used to find the largest number among the numbers passed in.