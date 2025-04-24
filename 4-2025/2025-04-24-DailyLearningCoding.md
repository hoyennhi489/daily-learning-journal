**JAVASCRIPT**

**6.4. if….else**  
The `if...else` statement is used to check a condition and perform an action based on whether the condition is true or false.  
* **Basic syntax of if...else:**
```javascript
if (condition) {
  // Execute when the condition is true
} else {
  // Execute when the condition is false
}
```

Example:  
```javascript
let age = 18;

if (age >= 18) {
  console.log("Old enough.");
} else {
  console.log("Not old enough.");
}
```

* **Extended syntax of if...else if...else**  
```javascript
if (condition_1) {
  // Execute when condition 1 is true
} else if (condition_2) {
  // Execute when condition 2 is true
} else {
  // Execute when no condition is true
}
```
- `else if` is used when you want to check multiple conditions, while `else` is the final option when none of the conditions are true.

Example:  
```javascript
let score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Average or poor");
}
```

**Exercise:**  
Write a function that takes an integer between 1 and 12 and returns the name of the corresponding month.  
```javascript
// using if...else
function printMonth(n) {
    let month = '';

    if (n === 1) month = 'Jan';
    else if (n === 2) month = 'Feb';
    else if (n === 3) month = 'Mar';
    else if (n === 4) month = 'Apr';
    else if (n === 5) month = 'May';
    else if (n === 6) month = 'Jun';
    else if (n === 7) month = 'Jul';
    else if (n === 8) month = 'Aug';
    else if (n === 9) month = 'Sep';
    else if (n === 10) month = 'Oct';
    else if (n === 11) month = 'Nov';
    else if (n === 12) month = 'Dec';
    else month = 'Invalid number';

    return month;
}
```

* **Shortened syntax for a single line statement**  
```javascript
if (condition) console.log("Execute when true");
else console.log("Execute when false");
```

**6.5. switch...case**  
The `switch` statement is used to check multiple values of a variable (usually a number or a string). It replaces multiple `if...else if...` statements and helps make the code cleaner.  
- **Why use switch instead of if...else:**  
`switch...case` is commonly used when you need to check many possible values of a variable. Compared to `if...else`, `switch` makes the code easier to read when checking many values of a variable.

* **Syntax:**
```javascript
switch (variable) {
  case value_1:
    // Execute if variable === value_1
    break;

  case value_2:
    // Execute if variable === value_2
    break;

  default:
    // Execute if no case matches
}
```

=> In the `switch` statement, the `break` keyword stops further checking of cases after a case is executed. Without `break`, the program will continue checking the next cases even if they don't match, which is called "fall-through."

**Exercise:**  
Write a function that takes an integer between 1 and 12 and returns the name of the corresponding month.  
```javascript
function printMonth(n) {
    let month = '';

    switch (n) {
        case 1: month = 'Jan'; break;
        case 2: month = 'Feb'; break;
        case 3: month = 'Mar'; break;
        case 4: month = 'Apr'; break;
        case 5: month = 'May'; break;
        case 6: month = 'Jun'; break;
        case 7: month = 'Jul'; break;
        case 8: month = 'Aug'; break;
        case 9: month = 'Sep'; break;
        case 10: month = 'Oct'; break;
        case 11: month = 'Nov'; break;
        case 12: month = 'Dec'; break;
        default: month = 'Invalid number';
    }

    return month;
}
```