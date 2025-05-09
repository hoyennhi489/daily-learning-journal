**JAVASCRIPT**

**Coding Exercise: List numbers in the range \[a, b]**

Write a function `createArrayInRange(a, b)` to create an array of numbers in the range \[a, b] (inclusive of a and b).
Given `a` and `b` that satisfy the conditions: -100 < a < b < 100, return an array containing numbers from a to b.

Examples:

* `createArrayInRange(1, 5)` --> `[1, 2, 3, 4, 5]`
* `createArrayInRange(-2, 1)` --> `[-2, -1, 0, 1]`

Write this in two ways:

1. Using `for...i`: `createArrayInRangeV1(a, b)`
2. Using `Array.from()`: `createArrayInRangeV2(a, b)`

```javascript
// using for...i
function createArrayInRangeV1(a, b) {
    const result = [];
    
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    
    return result;
}

// using Array.from()
function createArrayInRangeV2(a, b) {
    const length = b - a + 1;
    return Array.from({length}, (x, idx) => a + idx);
}
```

**Coding Exercise: Check if a number is prime**

Write a function `isPrime(n)` that takes a positive integer `n` (0 <= n < 1000) and returns `true` or `false` indicating whether `n` is a prime number.

* Return `true` if it is a prime number
* Otherwise, return `false`

A prime number is a number that is divisible only by 1 and itself (i.e., it has exactly two divisors: 1 and the number itself).

Example of prime numbers: 2, 3, 5, 7, 11, 13, 17, ...

Examples:

* `isPrime(2)` --> `true`
* `isPrime(3)` --> `true`
* `isPrime(4)` --> `false` because 4 is divisible by 2 in addition to 1

Solve this in two ways:

1. Method 1: Loop from 2 to n-1 to check: `isPrimeV1(n)`
2. Method 2: Loop from 2 to the square root of n to check: `isPrimeV2(n)`

```javascript
// Using loop from 2 to n - 1
function isPrimeV1(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Using loop from 2 to square root of n
function isPrimeV2(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
```

**Coding Exercise: List divisors of a positive integer n**

Write a function `getDivisorList(n)` that takes a positive integer `n` (1 <= n <= 1000) and returns an array of divisors of `n`.

Examples:

* `getDivisorList(1)` --> `[1]`
* `getDivisorList(10)` --> `[1, 2, 5, 10]`
* `getDivisorList(12)` --> `[1, 2, 3, 4, 6, 12]`

Write this function in three approaches:

1. Using `for...i` from 1 to n: `getDivisorListV1(n)`
2. Using `Array.from()` and `filter()` to loop from 1 to n: `getDivisorListV2(n)`
3. Using `Array.from()`, `forEach()`, and `sort()`, and only loop until the square root of n: `getDivisorListV3(n)`

```javascript
// Using for...i from 1 to n
function getDivisorListV1(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result;
}

// Using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
    return Array.from({ length: n }, (_, i) => i + 1).filter(i => n % i === 0);
}

// Using Array.from(), forEach and sort(), only loop until the square root of n
function getDivisorListV3(n) {
    let divisors = [];
    Array.from({ length: Math.floor(Math.sqrt(n)) }, (_, i) => i + 1).forEach(i => {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    });
    return divisors.sort((a, b) => a - b);
}
```

**Coding Exercise: Check if a number is a perfect number**

Write a function `isPerfectNumber(n)` to check if `n` is a perfect number, where `n` satisfies 1 < n < 1000.
Return `true` if it is a perfect number, otherwise return `false`.

A perfect number is a number where the sum of all its divisors (excluding the number itself, i.e., from 1 to n - 1) equals the number itself.
Example: 6 = 1 + 2 + 3 (so 6 is a perfect number).

```javascript
function isPerfectNumber(n) {
    if (n <= 1) return false;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
```