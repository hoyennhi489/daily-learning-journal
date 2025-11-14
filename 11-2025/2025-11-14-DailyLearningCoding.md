# JAVASCRIPT

## 1. Comments in JavaScript

**Syntax**

1. **Single-line comment:** `//`

```javascript
// This is a single-line comment
```

2. **Multi-line comment:** `/* ... */`

```javascript
/*
  This is a
  multi-line comment
*/
```

* You can also write a multi-line comment on a single line:

```javascript
/* This is a multi-line comment on a single line */
```

**Why comments are important**

* Help communicate ideas between your present self, future self, or colleagues.
* Useful for debugging: temporarily "turn off" code lines without deleting them.
* Mark parts of code that need improvement or completion.

---

### 2. Semicolons (`;`) in JavaScript

* Like a period in English, `;` separates statements.
* **Automatic Semicolon Insertion (ASI):** The browser can automatically insert semicolons if you forget them.
* **Style:** Some developers write semicolons explicitly, others omit them. It usually does not affect the program.

---

### 3. Browser Console

* Open DevTools: right-click → Inspect → choose the **Console** tab (or press `ESC`).
* Enter JavaScript commands directly and see the results.

**Example 1: Print a greeting**

```javascript
console.log("Hello, World");
```

Result:

```
Hello, World
```

**Example 2: Customize text style**

```javascript
console.log("%cHello, World", "color: blue; font-size: 40px");
```

* `%c` allows you to apply CSS to the console output.
* You can change color, font, size, etc.

---

### 4. Outputting multiple words or strings

**Using the `+` operator (string concatenation)**

```javascript
console.log("Hello " + "there, " + "World");
```

Result:

```
Hello there, World
```

**Using the comma `,`**

```javascript
console.log("Hello", "there,", "World");
```

* Outputs each value separately, automatically adding spaces.
* The result looks the same, but the browser handles it differently.

---

## What is a variable in JavaScript?

* A variable is like a container that stores information, which you can use multiple times.
* It makes programs flexible, so you don’t have to repeatedly write the same value.

**Example:**
Instead of typing `"Hello John"` every time, you can store `"John"` in a variable and use it.

---

### 2. Declaring and assigning variables

**Step 1: Declare a variable**

* Use the keyword `var` (or `let`, `const` in ES6) to create a variable.

```javascript
var person; // Declare a variable named person
```

* At this point, `person` exists but has no value, meaning it is `undefined`.

**Step 2: Assign a value to the variable**

* Use the assignment operator `=` to assign a value:

```javascript
person = "John"; // Assign the value "John" to person
```

* You can declare and assign in one step:

```javascript
var person = "John";
```

---

### 3. Accessing variable values

* To check the value of a variable:

```javascript
console.log(person); // Result: John
```

---

### 4. Combining variables with text

* You can print text along with a variable:

```javascript
console.log("Hello", person); // Result: Hello John
```

* Or use string concatenation:

```javascript
console.log("Hello " + person); // Result: Hello John
```

* You can also store text in another variable:

```javascript
var greeting = "Hello";
console.log(greeting, person); // Result: Hello John
```

---

### 5. Reassigning variable values

* Variables are not fixed; you can change their value anytime:

```javascript
greeting = "Hi";
person = "James";
console.log(greeting, person); // Result: Hi James
```

* Note: No need to use `var` again when changing the value of an existing variable.

---

### 6. Summary of variable usage

* Variables help reuse values in programs.
* Allow flexible data changes without rewriting the entire code.
* Are a basic but powerful tool to build JavaScript applications.

**Comprehensive example:**

```javascript
var person = "John";      // Declare and assign value
var greeting = "Hello";   // Declare greeting variable

console.log(greeting, person); // Hello John

// Change variable values
greeting = "Hi";
person = "James";

console.log(greeting, person); // Hi James
```

💡 **Remember:**

* `var` = old-style variable declaration
* `let` = flexible variable declaration (more commonly used)
* `const` = constant declaration
* `=` = assign value
* `console.log()` = print values to console for checking results

---

### Exercises

1. Declare a new variable `petDog` and name it `"Rex"`.
2. Declare a new variable `petCat` and name it `"Pepper"`.
3. Log the `petDog` variable to the console.
4. Log the `petCat` variable to the console.
5. Log `"My pet dog's name is: "` along with the `petDog` variable.
6. Log `"My pet cat's name is: "` along with the `petCat` variable.
7. Declare another variable `catSound` and assign it `"purr"`.
8. Declare another variable `dogSound` and assign it `"woof"`.
9. Log `petDog`, `"says"`, and `dogSound`.
10. Log `petCat`, `"says"`, and `catSound`.
11. Reassign `catSound` to `"meow"`.
12. Log `petCat`, `"now says"`, and `catSound`.

**Solution:**

```javascript
let petDog = "Rex";
let petCat = "Pepper";

console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is:", petDog);
console.log("My pet cat's name is:", petCat);

let catSound = "purr";
let dogSound = "woof";

console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);

catSound = "meow";
console.log(petCat, "now says", catSound);
```

**Output:**

```
Rex
Pepper
My pet dog's name is: Rex
My pet cat's name is: Pepper
Rex says woof
Pepper says purr
Pepper now says meow
```

---

## Primitive Data Types in JavaScript

### 1. Concept of Data in Programming

* Every piece of information in an application is called **data**.
* Data can have many different values, and each value needs to be stored appropriately.
* Programming is like packing items: each type of data is a “box” to store information correctly.

---

### 2. Seven Primitive Data Types in JavaScript

**String**

1. Stores text: names, descriptions, titles, etc.
2. Syntax: use single `' '` or double `" "` quotes.

```javascript
var guitarName = "Fender Stratocaster";
var description = "The best guitar around!";
```

**Number**

1. Stores prices, quantities, numerical calculations.
2. Syntax: just write the number, no quotes needed.

```javascript
var price = 375;
```

**Boolean**

1. Stores true/false values, on/off.
2. Values: `true` or `false`.

```javascript
var inStock = true;
var onSale = false;
```

**Null**

* Represents no value.

```javascript
var selectedItem = null;
```

**Undefined**

* A variable that has been declared but not assigned a value.

```javascript
var newItem;
console.log(newItem); // Result: undefined
```

**BigInt**

1. Stores very large numbers that exceed the `Number` type limit.

```javascript
var bigNumber = 123456789012345678901234567890n; // 'n' at the end
```

**Symbol**

1. Creates a unique identifier to avoid label or key conflicts.

```javascript
var id1 = Symbol("id");
var id2 = Symbol("id");
console.log(id1 === id2); // Result: false
```

---

### 3. Notes on Using Data Types

* Choosing the right data type helps optimize memory and performance.
* Primitive data types are **immutable**, meaning their internal structure cannot be changed.
* Knowing when to use `null` or `undefined` helps manage values that are not yet defined.

---

### Example: Using Different Data Types

```javascript
var guitarName = "Fender Stratocaster"; // string
var price = 375;                         // number
var inStock = true;                      // boolean
var discount = null;                     // null, no discount yet
var newModel;                             // undefined, value not assigned
var bigSerial = 12345678901234567890n;   // BigInt
var uniqueId = Symbol("guitarId");       // symbol

console.log(guitarName, price, inStock);
```

---

## Operators in JavaScript

### Concept of Operators

* Operators are used to perform operations on variables and values.
* They allow you to manipulate data and return results.
* Example: the **assignment operator `=`** is used to assign a value to a variable.

---

### Assignment Operators (Basic Math Operators)

* Addition: `+`
* Subtraction: `-`
* Multiplication: `*`
* Division: `/`

```javascript
console.log(2 + 2); // Result: 4
console.log(10 + 5); // Result: 15
console.log(20 - 18); // Result: 2
console.log(2 * 3); // Result: 6
console.log(8 / 1); // Result: 8
```

---

### Comparison Operators

* Used to compare values, return **Boolean** (`true` or `false`).

Common operators:

* Greater than (`>`): larger than
* Less than (`<`): smaller than
* Equal to (`==`): equals
* Not equal (`!=`): not equal

```javascript
console.log(3 > 2); // true
console.log(2 > 3); // false
console.log(10 == 10); // true
```

> Note: Use `==` for comparison; a single `=` is only for assignment.

---

### Logical Operators

* Used to check multiple conditions at the same time.
* AND (`&&`): all conditions must be true.
* OR (`||`): at least one condition is true.
* NOT (`!`): negates the value; true → false, false → true.

```javascript
var A = 7;
console.log(A > 5 && A < 10); // true
console.log(A > 5 || A > 10); // true
console.log(!(A > 5)); // false
```

---

## JavaScript – Number Data Type

### 1. Basic Concept

* In JavaScript (and other programming languages), there are many data types.
* **Number** is a basic data type used to represent integers and decimals.
* Without Number, you cannot perform calculations in code.

**Examples:**

```javascript
123       // Integer
123.456   // Decimal
```

---

### 2. Basic Operations with Number

* Addition (`+`): `2 + 2` → `4`
* Subtraction (`-`): `4 - 2` → `2`
* Multiplication (`*`): `4 * 4` → `16`
* Division (`/`): `16 / 4` → `4`
* Exponentiation (`**`): `10 ** 2` → `100`
* Modulus (`%`):

```javascript
9 % 8    // 1
16 % 8   // 0 (divisible)
```

---

### 3. Using Parentheses to Control Order of Operations

* JavaScript follows mathematical precedence: multiply/divide first, then add/subtract.

```javascript
2 * 4 + 8       // 16 (2*4 first, then add 8)
2 * (4 + 8)     // 24 (calculate 4+8 first, then multiply by 2)
```

---

### 4. Summary of Common Number Operators

| Operator | Meaning        |
| -------- | -------------- |
| +        | Addition       |
| -        | Subtraction    |
| *        | Multiplication |
| /        | Division       |
| **       | Exponent       |
| %        | Modulus        |

---

## JavaScript – String Data Type

### 1. Basic Concept

* In JavaScript, **string** is used to represent a sequence of characters.
* A string is a collection of characters enclosed in single `' '` or double `" "` quotes.
* This data type is very common, used to store letters, numbers, special characters, etc.

---

### 2. Empty String

* A pair of quotes with nothing inside is called an **empty string**:

```javascript
''  // empty string
""  // empty string
```

* Empty strings have a value but are rarely used directly.

---

### 3. Creating Non-Empty Strings

```javascript
'hello there!'   // string with letters and punctuation
"hello there!"   // also valid
```

* Strings can contain letters, numbers, special characters, but **cannot include line breaks directly**:

```javascript
'hello
there'   // Error
```

---

### 4. Delimiters

* Single `' '` or double `" "` quotes are **delimiters**, separating the string from the rest of the code.

---

### 5. Special Situations

* If a string contains quotes (e.g., `"it’s a lovely day"`), using the same type of quotes will cause an error:

```javascript
'it’s a lovely day'  // Error
```

* Solutions:

1. Use double quotes outside, single quotes inside:

```javascript
"it’s a lovely day"  // Correct
```

2. Use escape character `\` to keep the quote inside:

```javascript
'it\'s a lovely day' // Correct
```

---

### 6. Summary

* A string is a sequence of characters enclosed in `' '` or `" "`.
* Can be empty or contain letters, numbers, special characters.
* Cannot have line breaks directly.
* If using quotes inside, choose a different type or use an escape character.

---

## JavaScript – Boolean Data Type

### 1. Basic Concept

* Boolean is a data type used to check whether a statement is **true** or **false**.
* It only has two possible values: `true` or `false`.
* Boolean is essential for comparing data and controlling program logic.

---

### 2. Basic Number Comparison

```javascript
1 < 2  // true  (1 is less than 2)
1 > 2  // false (1 is not greater than 2)
```

---

### 3. Comparison Operators

| Operator | Meaning                       |
| -------- | ----------------------------- |
| <        | Less than                     |
| >        | Greater than                  |
| ==       | Equal in value (ignores type) |
| ===      | Equal in value and type       |
| !=       | Not equal in value            |
| !==      | Not equal in value or type    |

---

### 4. Examples of `==` and `===`

```javascript
100 == "100"   // true  (compares value only, ignores type)
100 === "100"  // false (same value but different type: Number != String)
```

---

### 5. Examples of `!=` and `!==`

```javascript
1 != 1       // false (1 equals 1, so "not equal" is false)
1 !== "1"    // true  (same value but different type, so not equal)
```

---

### 6. Notes

* A single `=` is used for assignment, **not for comparison**.

```javascript
var score = 100;  // assign value 100 to variable score
```

* Boolean is not only for comparing numbers and strings, but also crucial in `if` statements, loops, and complex logic.

---

## JavaScript – Conditional Statements

### 1. Introduction

* In daily life, we make decisions based on conditions: e.g., if it rains, take an umbrella; if sunny, don’t.
* In JavaScript, **conditional statements** allow code to run depending on whether a condition is `true` or `false`.

---

### 2. if Statement

**Syntax:**

```javascript
if (condition) {
  // code runs if condition is true
}
```

* Checks a condition; if true, executes the code block.

**Example:**

```javascript
var weather = "rainy";

if (weather === "rainy") {
  console.log("Bring an umbrella");
}
```

* If `weather` is `"rainy"`, it prints `"Bring an umbrella"`.
* Comparison operators you can use: `==`, `===`, `>`, `<`, `!=`, `!==`.

---

### 3. if-else Statement

**Syntax:**

```javascript
if (condition) {
  // code if true
} else {
  // code if false
}
```

* Handles both true and false outcomes.

**Example (Driving Test):**

```javascript
var score = 45;

if (score > 40) {
  console.log("You passed the exam");
} else {
  console.log("You did not pass the exam");
}
```

* `score > 40` → `"You passed the exam"`
* `score <= 40` → `"You did not pass the exam"`

---

### 4. else-if Statement

* Used to check multiple conditions.

**Syntax:**

```javascript
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if all are false
}
```

**Example:**

```javascript
var score = 38;

if (score >= 50) {
  console.log("Excellent");
} else if (score >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

* 50 or above → `"Excellent"`
* 40–49 → `"Pass"`
* Below 40 → `"Fail"`

---

### 5. Conclusion

* `if`, `else`, and `else-if` are key tools for checking conditions.
* Allow handling multiple branches of logic based on Boolean values.
* Essential foundation in programming.

---

## JavaScript – Conditional Statements (if, else, else-if, switch)

### 1. Conditional Statements

* Run code based on a condition being `true` or `false`.
* Real-life example: if it rains → take an umbrella; if sunny → no umbrella.

---

### 2. if-else Statement

**Syntax:**

```javascript
if (condition) {
  // runs if condition = true
} else {
  // runs if condition = false
}
```

**Example:**

```javascript
var result = 50;

if (result > 40) {
  console.log("You pass the test");
} else {
  console.log("You did not pass the test");
}
```

* `result = 50` → `"You pass the test"`
* `result = 30` → `"You did not pass the test"`

---

### 3. else-if Statement

* Used when checking multiple conditions.

**Syntax:**

```javascript
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if all false
}
```

**Example:**

```javascript
var place = "first";

if (place === "first") {
  console.log("Gold");
} else if (place === "second") {
  console.log("Silver");
} else if (place === "third") {
  console.log("Bronze");
} else {
  console.log("No medal");
}
```

* `"first"` → `"Gold"`
* `"second"` → `"Silver"`
* `"fourth"` → `"No medal"`

---

### 4. switch Statement

* Handles multiple cases instead of many else-if, making code cleaner.

**Syntax:**

```javascript
switch(variable) {
  case "first":
    console.log("Gold");
    break;
  case "second":
    console.log("Silver");
    break;
  case "third":
    console.log("Bronze");
    break;
  default:
    console.log("No medal");
}
```

* `variable = "first"` → `"Gold"`
* `variable = "fourth"` → `"No medal"`
* **Note:** `break` exits the switch after a case executes.

---

### 5. When to use switch instead of else-if?

* For many conditions, `switch` makes code easier to read.
* `if-else if-else` is better for few conditions or complex logic (`>`, `<`, logical operators).

---

### 6. Conclusion

* `if`, `else`, `else if`, `switch` are crucial for checking conditions in JavaScript.
* Help manage multiple branches and choices based on Boolean values.
* Mastery allows cleaner, more readable, and maintainable code.

---

## JavaScript – Loops

### 1. Why Loops Are Needed

* In real life, many tasks repeat:

  * Buttoning each shirt button, washing each dish, counting down from 10 → 1.
* In JavaScript, **loops** allow code to run multiple times based on a condition.
* Difference from `if`:

  * `if` runs once if condition is true.
  * `loop` runs repeatedly until the condition is false.

---

### 2. Counter Variable

* A counter determines start, end, and step of the loop.
* Usually, `i` is used as a counter variable.
* Without updating the counter, the loop may run forever → **infinite loop**.

---

### 3. for Loop

* Used to repeat code a fixed number of times.

**Syntax:**

```javascript
for (initialization; condition; increment) {
  // code to loop
}
```

* `initialization`: start counter
* `condition`: loop runs while true
* `increment`: update counter after each loop

**Example:**

```javascript
for (var i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
```

**Output:**

```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

---

### 4. while Loop

* Runs as long as the condition is true.

**Syntax:**

```javascript
var i = 1; // initialize counter
while (i <= 5) {
  console.log("Count: " + i);
  i++; // update counter
}
```

**Differences from for loop:**

* Counter initialized outside the loop
* Counter updated inside the loop

---

### 5. When to Use for vs while

* `for` loop: when the number of iterations is known
* `while` loop: when the number of iterations is unknown, based on condition

---

### 6. Important Notes

* Always update the counter to avoid infinite loops.
* Both `for` and `while` can achieve the same result, but `for` is more concise and self-contained.