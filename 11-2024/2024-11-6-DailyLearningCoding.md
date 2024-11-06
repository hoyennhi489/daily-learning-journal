
**Step 99:**
```javascript
for (let i = count; false; false) {

}
```

**Step 100:**
```javascript
for (let i = count; i > 0; false) {

}
```
- The `>` operator is used to check if the value of `i` is greater than 0.
- The loop will stop when `i` is no longer greater than 0, meaning when `i` equals 0 or becomes negative.

**Step 101:**
```javascript
for (let i = count; i > 0; i = i - 1) {

}
```
- `i--` is shorthand for `i = i - 1`. This is a common way to decrease the value of `i` on each iteration.
- This helps the loop run in reverse order (from 10 down to 1, instead of from 1 to 10).

**Step 102:**
```javascript
for (let i = count; i > 0; i = i - 1) {
  rows.push(padRow(i, count));
}
```

**Step 103:**
```javascript
for (let i = count; i > 0; i -= 1) {
  rows.push(padRow(i, count));
}
```
- `let i = count;`  
  Initializes the variable `i` with the value of `count`. This is the starting value for the loop.
  
- `i > 0;`  
  The loop condition. The loop will continue running as long as `i` is greater than 0. When `i` reaches 0, the loop stops.
  
- `i -= 1`  
  After each iteration, the value of `i` will decrease by 1. This is equivalent to `i = i - 1`, which decreases the value of `i` on each loop iteration.
  
- `rows.push(padRow(i, count));`  
  On each iteration, the `padRow(i, count)` function will be called with `i` and `count` as arguments. The returned result will be pushed into the `rows` array using the `.push()` method.

- `padRow(i, count)`: This might be a function that you define to create a string or row for an inverted pyramid. `i` and `count` are input parameters that could be used to adjust the number of spaces or stars in each row.

**Step 106:**
```javascript
const numbers = [1, 2, 3];

console.log(numbers);
```
- `const numbers = [1, 2, 3];`: This is how you declare an array in JavaScript with the elements 1, 2, and 3. The array is assigned to the `numbers` variable.
- `console.log(numbers);`: Prints the `numbers` array to the console. You will see the output:  
  `[1, 2, 3]`

**Step 107:**
```javascript
const numbers = [1, 2, 3];

const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);
```
- `.unshift()` method:
  + How it works: `.unshift()` adds one (or more) elements to the beginning of the array and returns the new length of the array.
  + Difference from `.push()`: `.push()` adds elements to the end of the array, while `.unshift()` adds to the start.
  
- Declaring the `unshifted` variable: You will declare a variable `unshifted` using the `const` keyword. Then you use the `.unshift()` method to add the number 5 to the start of the `numbers` array.
  
- Printing the new array: Finally, you will print the value of `unshifted` and the modified `numbers` array to check the result.

**Step 108:**
```javascript
const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);
```
- `.shift()` method:
  + How it works: `.shift()` removes the first element of the array and returns that element.
  + Comparison with `.pop()`: `.pop()` removes the last element of the array, whereas `.shift()` removes the first element.
  
- Declaring the `shifted` variable: You will declare a variable `shifted` and assign it the value returned by `.shift()` when applied to the `numbers` array.
  
- Printing the value of `shifted`: After removing the first element of the array, you print the value of the `shifted` variable to the console.

**Step 109:**
Remove your `numbers` array, and the method calls and log calls.

**Step 110:**
```javascript
// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/
```

**Step 111:**
```javascript
for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
}
```

**Step 112:**
```javascript
let inverted = true;
```
- `let inverted = true;`: The `inverted` variable is initialized with the value `true`, meaning by default the pyramid will be inverted. You do not change the value of this variable in the current code, but you can modify it later (for example, in tests or if you wish to adjust the code).
- Using `let` instead of `const`: If you use `const`, you cannot change the value of the variable after it has been assigned, but since you may need to change this variable later in the process, `let` is the appropriate choice.

**Step 113:**
```javascript
for (let i = 1; i <= count; i++) {
  if (inverted) {

  }
  rows.unshift(padRow(i, count));
}
```

**Step 114:**
Move your `.unshift()` call into your `if` block:
```javascript
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  }
}
```

**Step 115:**
```javascript
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {

  }
}
```

**Step 116:**
```javascript
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}
```

**Step 117:**
Remove all comments.

**Step 118:**
```javascript
const character = "!";
const count = 10;
const rows = [];
let inverted = false;
```
