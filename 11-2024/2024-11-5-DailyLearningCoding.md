
**Step 66:**
```javascript
for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow());
}
```

**Step 67:**
```javascript
for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}
```

**Step 68:**
```javascript
function padRow(rowNumber, rowCount) {
  return " " + character.repeat(rowNumber) + " ";
}
```
- **String concatenation operator (+):** Helps to concatenate multiple strings together, which is useful when you need to format output with additional spaces or special characters.
- **Reusable function structure:** Encapsulating logic in a function makes it easier to reuse multiple times and keeps the source code more maintainable.

**Step 69:**
```javascript
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}
```
- **Centering the pyramid:** Calculating the spaces at the beginning and end will ensure that each row in the pyramid is centered, creating a more uniform and visually appealing shape.
- **Using .repeat():** This method makes it easy to generate a string of spaces without writing it multiple times, resulting in cleaner and more understandable code.

**Step 70:**
```javascript
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
```
- The formula **2 * rowNumber - 1** is a way to calculate the number of `#` characters for each row in the pattern.
  + For example: If `rowNumber` is 1, the number of characters will be 1. If `rowNumber` is 2, the number of characters will be 3, and if `rowNumber` is 3, the number of characters will be 5.

**Step 71:**
```javascript
for (let i = 1; i <= 3; i += 1) {
  test(i);
  rows.push(padRow(i + 1, count));
}
```
- This is a shorthand way to keep your code concise and more readable. Instead of writing `test = test + 1`, you can write `test += 1`.
- Both statements have the same effect: they increment the value of `test` by 1.

**Step 72:**
```javascript
for (let i = 0; i < count; i++) {
  rows.push(padRow(i + 1, count));
}
```
- The `++` operator is a shorthand and efficient way to increment the value of a variable by 1.
- You can use it in prefix (++i) or postfix (i++) form. In postfix, the value of the variable is used before it is incremented, while in prefix, the variable is incremented before it is used.

**Step 73:**
```javascript
for (let i = 1; i < count; i++) {
  rows.push(padRow(i + 1, count));
}
```

**Step 74:**
```javascript
for (let i = 1; i < count; i++) {
  rows.push(padRow(i, count));
}
```

**Step 75:**
```javascript
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
```

**Step 76:**
```javascript
// TODO: Change this to a different kind of loop
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
```
- Use `//` to start a comment on the same line. Everything after `//` on that line will be ignored by the JavaScript compiler.

**Step 77:**
```
/*
TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
*/
```
- Multi-line comments are useful when you want to explain a large part of code or temporarily disable a block of code without deleting it.
- Everything between `/*` and `*/` will be ignored by the compiler, allowing you to easily group multiple lines of code into a single comment.

**Step 78:**
```javascript
if (true) {
  console.log("Condition is true");
}
```

**Step 79:**
```javascript
if (false) {
  console.log("Condition is true");
}
```

**Step 80:**
```javascript
if ("false") {
  console.log("Condition is true");
}
```

**Step 82:**
```javascript
if ("") {
  console.log("Condition is true");
}
```

**Step 83:**
```javascript
if ("") {
  console.log("Condition is true"); // No output
} else if (5 < 10) {
  console.log("5 is less than 10"); // Outputs "5 is less than 10"
}
```
- Using the `else if` statement: helps you organize your code more clearly when you need to check multiple conditions. It helps avoid nesting multiple `if` statements and keeps the code cleaner.
- **Order of Checking:** Only one true condition in the if-else chain is enough to execute the corresponding block of code, and the remaining conditions will not be checked.

**Step 83:**
```javascript
if ("") {
  console.log("Condition is true");
} else if (5 < 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
}
```
- The `else` block is used to handle cases where none of the preceding conditions are satisfied. It is often used to provide a default value or handle unexpected situations.
- **Order of Checking:** When one of the conditions in the `if` or `else if` is true, the corresponding block of code will be executed, and the remaining blocks will not be checked.

**Step 84:**
```javascript
let continueLoop = false; // Loop control variable
let done = 0; // Status tracking variable
```
- The `continueLoop` variable is assigned the value `false`, which can be used in the future to control a loop.
- The `done` variable is initialized to 0 and can be used to track the status or the number of times a task has been executed.

**Step 85:**
```javascript
let continueLoop = false;
let done = 0;
while (continueLoop) {
  // Loop body is empty
}
```
- The `while` loop checks the condition before each execution. If the condition is true, it executes the block of code in the loop body. If the condition is false, the loop will stop.

**Step 86:**
```javascript
while (continueLoop) {
  done++; 
}
```
- **Infinite Loop:**
  + An infinite loop occurs when the loop's condition is always true and there is no way to exit it. This can lead to crashing or freezing your computer, as it never stops.
- **Increment Operator:**
  + Using an increment operator (like `done++`) allows you to increase the value of the `done` variable each time the loop runs. This helps control the condition and may help exit the loop if you set a stopping condition.

**Step 87:**
```javascript
while (continueLoop) {
  done++;
  if (done == count) {
    // ...
  }
}
```
- **Equality Comparison Operator ==:**
  + The `==` operator compares the values of two variables without considering data types. For example, `5 == '5'` will return true because both have the value 5, even though one is a number and the other is a string.
- **If Statement:**
  + The `if` statement will execute a block of code if the specified condition is true. If the condition is false, that block of code will not be executed.

**Step 88-89:**
```javascript
while (continueLoop) {
  done++;
  if (done === count) {
    continueLoop = false;
  }
}
```
- To stop the loop, you need to change the condition of the loop. By assigning `false` to `continueLoop`, the loop will no longer continue executing and will exit.

**Step 90:**
```javascript
while (continueLoop) {
  done++;
  rows.push(padRow(done, count));
  if (done === count) {
    continueLoop = false;
  } 
}
```
- **Using Arrays:**
  + The `rows` array is used to store the rows of the pyramid. By pushing the rows into this array, you can create and store the entire structure of the pyramid.
- **Calling the padRow Function:**
  + The `padRow` function is used to create a pyramid row based on the number of rows (`done`) and the total number of rows (`count`). Calling this function with the appropriate parameters will return a pyramid row.
- **Pushing to the Array:**
  + Use the `push()` method of the array to add the new row to the end of the `rows` array.

**Step 91:**
```javascript
while (done !== count) { // Check if done is not equal to count
  done++; // Increment the value of the

 done variable
  rows.push(padRow(done, count)); // Push the result of padRow into the rows array
}
```
- **Strict Inequality Operator !==:**
  + The `!==` operator checks not only the value but also the data type. For example, `"5" !== 5` will return true because one is a string and the other is a number.
- **Update Loop Condition:**
  + Using `!==` in the `while` loop condition will help the loop continue running until `done` reaches the value of `count`.

**Step 92:** Remove the entire `if` statement.
```javascript
while (done !== count) {
  done++;
  rows.push(padRow(done, count));
}
```

**Step 93:** Remove your `continueLoop` variable.
```javascript
let done = 0;

while (done !== count) {
  done++;
  rows.push(padRow(done, count));
}
```

**Step 94:**
```javascript
let done = 0;

while (done <= count) {
  done++;
  rows.push(padRow(done, count));
}
```

**Step 95:**
```javascript
while (rows.length < count) { // Check if rows.length is less than count
  rows.push(padRow(rows.length, count)); // Push the result of padRow into the rows array
}
```
- **Using the Array Length Property:**
  + The `length` property allows you to easily check the number of elements in the array without using a separate counting variable like `done`.
- **Avoiding Off-by-One Errors:**
  + Checking `rows.length` instead of `done` helps you avoid off-by-one errors, as the value of `done` has already been incremented before calling the `padRow` function.

**Step 96:**
```javascript
while (rows.length < count) {
  done++;
  rows.push(padRow(rows.length + 1, count));
}
```
- Using `rows.length + 1` allows you to correctly calculate the current number of rows you are creating without using a counting variable like `done`.
- Using `rows.length + 1` ensures that you are passing the correct value for the row number to the `padRow` function, as `rows.length` will always indicate the number of rows that have been added to the array.

**Step 97:**
```javascript
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}
```

**Step 98:**
```javascript
/*
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}
*/
```