**JAVASCRIPT**

### 7.6. Imprecise Calculations

This refers to the phenomenon where real number (decimal) calculations do not yield absolutely precise results due to the limitations of how computers represent numbers in binary.

**Example:**

```javascript
0.1 + 0.2 === 0.3; // false
// Expected 0.3, but the result is 0.30000000000000004 due to rounding error.
console.log((0.1).toFixed(20)); // 0.10000000000000000555
console.log((0.2).toFixed(20)); // 0.20000000000000001110
console.log((0.1 + 0.2).toFixed(20)); // 0.30000000000000004441
console.log((0.3).toFixed(20)); // 0.29999999999999998890
```

These lines print decimal numbers with 20 digits after the decimal point. You can observe that:

- `0.1 + 0.2` is **not exactly** equal to `0.3` due to small representation errors.

**Correct way to compare:**

- Avoid direct comparison (`===`) between floating-point numbers.
- Instead, use `Number.EPSILON` to check for "almost equal."

```javascript
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON; // true
```

This means: “Is `0.1 + 0.2` approximately equal to `0.3`?”

- `Math.abs(x)` gives the absolute value of `x` (i.e., removes the negative sign if any).
- `Math.abs(0.30000000000000004 - 0.3) = 0.000000000000000044`

`Number.EPSILON` is the smallest difference JavaScript can recognize between two close numbers. It is a "safe" way to compare floating-point numbers.

- `Number.EPSILON` is a very small number ≈ `2.220446049250313e-16`
- It represents the smallest acceptable deviation between two numbers in computing.

**Alternative: Rounding with `toFixed` for comparison:**

```javascript
console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1)); // true
/*
- (0.1 + 0.2) is actually 0.30000000000000004
- .toFixed(1) rounds it to "0.3" (as a string)
- (0.3).toFixed(1) also returns "0.3"
- Comparing "0.3" === "0.3" → true
*/
```

### 7.7. Rounding Numbers

JavaScript provides 4 common rounding methods in the `Math` object:

| No. | Function        | Description                                                    |
| --- | --------------- | -------------------------------------------------------------- |
| 1   | `Math.ceil(x)`  | Rounds up to the nearest integer (towards positive infinity)   |
| 2   | `Math.floor(x)` | Rounds down to the nearest integer (towards negative infinity) |
| 3   | `Math.round(x)` | Rounds to the nearest integer (traditional rounding)           |
| 4   | `Math.trunc(x)` | Removes the decimal part, keeps only the integer part          |

**Comparison table:**

| Value `x` | `Math.floor(x)` | `Math.ceil(x)` | `Math.round(x)` | `Math.trunc(x)` |
| --------- | --------------- | -------------- | --------------- | --------------- |
| 3.2       | 3               | 4              | 3               | 3               |
| 2.5       | 2               | 3              | 3               | 2               |
| -1.1      | -2              | -1             | -1              | -1              |
| -1.6      | -2              | -1             | -2              | -1              |

#### - `Math.floor(x)` – Round down

- Always returns the largest integer less than or equal to `x`.
- For negative numbers, it goes further into the negative direction.

Examples:

```javascript
Math.floor(3.2) → 3
Math.floor(2.5) → 2
Math.floor(-1.1) → -2
Math.floor(-1.6) → -2
```

#### - `Math.ceil(x)` – Round up

- Always returns the smallest integer greater than or equal to `x`.

Examples:

```javascript
Math.ceil(3.2) → 4
Math.ceil(2.5) → 3
Math.ceil(-1.1) → -1
Math.ceil(-1.6) → -1
```

#### - `Math.round(x)` – Round to nearest integer

- If decimal part < 0.5 → round down.
- If decimal part ≥ 0.5 → round up.

Examples:

```javascript
Math.round(3.2) → 3
Math.round(2.5) → 3
Math.round(-1.1) → -1
Math.round(-1.6) → -2
```

#### - `Math.trunc(x)` – Truncate decimal part

- Simply removes the decimal part without rounding.

Examples:

```javascript
Math.trunc(3.2) → 3
Math.trunc(2.5) → 2
Math.trunc(-1.1) → -1
Math.trunc(-1.6) → -1
```

### 7.8. Random Number [0, n]

This means generating a random number from 0 up to `n`, including 0 and possibly `n` depending on how it's handled.

- Basic function:

```javascript
Math.random();
```

Returns a random **float** in the range `[0, 1)`

#### 7.8.1. Random float from 0 to n:

```javascript
Math.random() * n;
```

Example:

```javascript
function randomNumber(n) {
  if (n <= 0) return -1; // Return -1 if n is invalid
  const random = Math.random() * n; // Random float from 0 to n
  return random;
}

console.log(randomNumber(3));
```

#### 7.8.2. Random integer from 0 to n:

```javascript
Math.floor(Math.random() * (n + 1));
```

- `Math.floor(...)` → rounds down to get an integer

Examples:

```javascript
function randomInt(n) {
  return Math.floor(Math.random() * (n + 1));
}

console.log(randomInt(5)); // Possible outputs: 0, 1, 2, 3, 4, 5
```

Alternative rounding version:

```javascript
function randomNumber(n) {
  if (n <= 0) return -1;
  const random = Math.random() * n;
  const result = Math.round(random); // Rounded to an integer
  return result;
}
```

### 7.9. Random Number [a, b]

This is about generating a random number in the range from `a` to `b`, **inclusive**.

#### 7.9.1. Random float in [a, b):

```javascript
Math.random() * (b - a) + a;
```

- `Math.random()` → creates a float in [0, 1)
- Multiply by `(b - a)` → expands the range to [0, b - a)
- Add `a` → shifts the range to [a, b)

Example:

```javascript
function randomFloat(a, b) {
  return Math.random() * (b - a) + a;
}

console.log(randomFloat(3, 7)); // Float between 3 and almost 7
```

#### 7.9.2. Random integer in [a, b]:

```javascript
Math.floor(Math.random() * (b - a + 1)) + a;
```

- `(b - a + 1)` ensures `b` is included
- `Math.floor()` gets an integer
- Adding `a` shifts the result into the correct range

Example:

```javascript
function randomInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(randomInt(3, 7)); // Integer between 3 and 7
```
