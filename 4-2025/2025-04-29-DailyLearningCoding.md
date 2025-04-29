**JAVASCRIPT**

## 6.6. Number

- **Number** is a primitive data type in JavaScript used to represent numeric values.
- JavaScript does not differentiate between integers and floating-point numbers, unlike many other languages. All numbers in JavaScript are of the `Number` type.

```js
let x = 10; // integer
let y = 3.14; // floating-point number
```

### 6.6.1. Arithmetic Operators

```js
const sum = 1 + 2; // 3        → addition
const subtract = 1 - 2; // -1       → subtraction
const multiply = 1 * 2; // 2        → multiplication
const divide = 1 / 4; // 0.25     → division

const remainder = 7 % 5; // 2 because 7 = 5x1 + 2 → modulus
```

- **Increment**

```js
let count = 1;
const n = count++; // 1 → postfix: return value first, then increment count to 2

let count = 1;
const n = ++count; // 2 → prefix: increment count to 2 first, then assign to n
```

- **Decrement**

```js
let count = 1;
const n = count--; // 1 → postfix: return value first, then decrement count

let count = 1;
const n = --count; // 0 → prefix: decrement count first, then assign to n
```

- **Unary Plus Operator**

```js
const n = +"123"; // 123 → convert string to number
```

- **Unary Negation Operator**

```js
const n = -"123"; // -123 → convert string to number and negate it
```

- **Exponentiation Operator**

```js
const n = 2 ** 3; // 8 → equivalent to 2^3 (2 raised to the power of 3)
```

### 6.6.2. Assignment Operators

```js
// Addition Assignment Operator
let n = 1;
n += 1; // 2 → equivalent to: n = n + 1

// Subtraction Assignment Operator
let n = 1;
n -= 1; // 0 → equivalent to: n = n - 1

// Multiplication Assignment Operator
let n = 1;
n *= 3; // 3 → equivalent to: n = n * 3

// Division Assignment Operator
let n = 1;
n /= 2; // 0.5 → equivalent to: n = n / 2
```

### 6.6.3. `toString(base)`

- Calling `toString()` on a number converts it to a string.
- `base` specifies the numeral system to convert the number to. JavaScript supports base values from 2 to 36.

```js
const n = 20;

n.toString(); // '20'   → default base 10 (Decimal)
n.toString(10); // '20'   → base 10 (Decimal)
n.toString(16); // '14'   → base 16 (Hexadecimal)
n.toString(8); // '24'   → base 8 (Octal)
n.toString(2); // '10100' → base 2 (Binary)
```

- **Common numeral systems:**
  - 2: binary (Binary)
  - 8: octal (Octal)
  - 10: decimal (Decimal)
  - 16: hexadecimal (Hexadecimal)

## 6.7. Built-in object: `Number`

- `Number` is a built-in object in JavaScript used to work with numbers (both integers and floating-point numbers).

### 6.7.1. Using `Number(value)` as a function:

- It converts a value (string, boolean, etc.) into a number type.
- If it cannot convert, it returns `NaN` (Not-a-Number).

```js
Number(123); // → 123
Number("123"); // → 123
Number("abc"); // → NaN
```

### 6.7.2. Static Properties of `Number` in JavaScript

| #   | Property                   | Value                   | Description                                               |
| --- | -------------------------- | ----------------------- | --------------------------------------------------------- |
| 1   | `Number.EPSILON`           | 2.220446049250313e-16   | The smallest difference between two representable numbers |
| 2   | `Number.MIN_VALUE`         | 5e-324                  | The smallest positive number (close to 0)                 |
| 3   | `Number.MAX_VALUE`         | 1.7976931348623157e+308 | The largest representable positive number                 |
| 4   | `Number.MIN_SAFE_INTEGER`  | -9007199254740991       | The smallest safe integer (-(2⁵³ - 1))                    |
| 5   | `Number.MAX_SAFE_INTEGER`  | 9007199254740991        | The largest safe integer (2⁵³ - 1)                        |
| 6   | `Number.NaN`               | NaN                     | "Not-a-Number" – A value that is not a valid number       |
| 7   | `Number.NEGATIVE_INFINITY` | -Infinity               | Negative infinity                                         |
| 8   | `Number.POSITIVE_INFINITY` | Infinity                | Positive infinity                                         |

### 6.7.3. Static Methods

- These are functions that belong to the `Number` object, and are called directly using `Number`, without needing to create an instance of the object.

| Method                | Description                                                         | Example                              |
| --------------------- | ------------------------------------------------------------------- | ------------------------------------ |
| `Number.isFinite()`   | Checks if a value is a finite number                                | `Number.isFinite(123)` → `true`      |
| `Number.isNaN()`      | Checks if a value is `NaN`                                          | `Number.isNaN(NaN)` → `true`         |
| `Number.isInteger()`  | Checks if a value is an integer                                     | `Number.isInteger(4.5)` → `false`    |
| `Number.parseFloat()` | Converts a string to a floating-point number (same as `parseFloat`) | `Number.parseFloat("3.14")` → `3.14` |
| `Number.parseInt()`   | Converts a string to an integer (same as `parseInt`)                | `Number.parseInt("10")` → `10`       |

### 6.7.4. Instance Methods

- These methods operate on a specific `Number` value – meaning you need to have a `Number` object or number value to call them.

| Method             | Description                                             | Example                                                   |
| ------------------ | ------------------------------------------------------- | --------------------------------------------------------- |
| `toFixed(n)`       | Rounds the number to `n` digits after the decimal point | `(1.2345).toFixed(2)` → `"1.23"`                          |
| `toString()`       | Converts the number to a string                         | `(123).toString()` → `"123"`                              |
| `toExponential()`  | Displays the number in exponential notation             | `(12345).toExponential(2)` → `"1.23e+4"`                  |
| `toLocaleString()` | Converts the number to a string in local format         | `(1234567.89).toLocaleString('en-US')` → `"1,234,567.89"` |

### 6.7.5. Convert to numbers (`parseInt` and `parseFloat`)

```js
Number("123"); // 123

Number.parseInt("1.5"); // 1
Number.parseFloat("1.5"); // 1.5

Number("123.5a"); // NaN
Number.parseInt("123.5a"); // 123
Number.parseFloat("123.5a"); // 123.5

Number(null); // 0
Number(undefined); // NaN

Number(true); // 1
Number(false); // 0
```

- `parseInt()` reads an integer from the beginning of the string until a non-numeric character is encountered.
- `parseFloat()` works similarly but allows floating-point numbers.
- `null` becomes `0` when converted using `Number()`, but `undefined` becomes `NaN`.
- `true` becomes `1`, and `false` becomes `0`.

### 6.7.6. Difference Between `toFixed()` and `toPrecision()` in JavaScript

- Both `toFixed()` and `toPrecision()` convert a number to a string.
- `toFixed(digits)`: rounds the number to `digits` decimal places.
- `toPrecision(digits)`: rounds the number to `digits` significant figures.

```js
const n = 123.525;

n.toFixed(); // "124"     → Rounds to the nearest integer
n.toFixed(0); // "124"
n.toFixed(1); // "123.5"
n.toFixed(2); // "123.53"
n.toFixed(3); // "123.525"
n.toFixed(4); // "123.5250"
n.toFixed(5); // "123.52500"

n.toPrecision(); // "123.525" (same as n.toString())
n.toString(); // "123.525"

n.toPrecision(0); // ❌ Error: argument must be between 1 and 100
n.toPrecision(1); // "1e+2"   (100)
n.toPrecision(2); // "1.2e+2" (120)
n.toPrecision(3); // "124"
n.toPrecision(4); // "123.5"
n.toPrecision(5); // "123.53"
n.toPrecision(6); // "123.525"
n.toPrecision(7); // "123.5250"
n.toPrecision(8); // "123.52500"
```

## 6.8. Built-in object: `Math`

- `Math` is a built-in object in JavaScript, serving as a math toolbox. You don't need to create it, just call it and you're good to go.

### 6.8.1. Common Mathematical Properties (Static)

| Name         | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| `Math.PI`    | The value of Pi, approximately 3.14159, often used for calculating the area of circles |
| `Math.SQRT2` | The square root of 2, approximately 1.414                                              |

```js
console.log(Math.PI); // Result: 3.141592653...
console.log(Math.SQRT2); // Result: 1.414213...
```

### 6.8.2. Common Mathematical Methods

| Method           | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `Math.ceil(x)`   | Rounds a number upwards                              |
| `Math.floor(x)`  | Rounds a number downwards                            |
| `Math.round(x)`  | Rounds to the nearest integer                        |
| `Math.trunc(x)`  | Returns the integer part, truncates the decimal part |
| `Math.random()`  | Returns a random number between 0 and 1 (exclusive)  |
| `Math.abs(x)`    | Returns the absolute value of a number               |
| `Math.pow(x, y)` | Returns x raised to the power of y                   |
| `Math.sqrt(x)`   | Returns the square root of x                         |

```js
console.log(Math.ceil(4.2)); // Result: 5
console.log(Math.floor(4.9)); // Result: 4
console.log(Math.round(4.5)); // Result: 5
console.log(Math.trunc(4.7)); // Result: 4
console.log(Math.random()); // Example: 0.723 (it changes every time)
```

> ✅ `Math` is a built-in JavaScript object.  
> ✅ Used for performing mathematical calculations quickly and easily.  
> ✅ You don’t need to create a `Math` object, just use it like this: `Math.method()` or `Math.property`.
