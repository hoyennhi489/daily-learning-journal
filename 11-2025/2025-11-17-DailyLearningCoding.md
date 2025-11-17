# **Math.random() & Math.ceil() in JavaScript**

## 1. **Math.random()**

• Returns a random decimal number in the range
**0 ≤ x < 1** (examples: 0.12345, 0.9876…)
• To generate numbers greater than 1, multiply it by a number:

```js
var decimal = Math.random();
console.log(decimal);      // 0 → 0.99
console.log(decimal * 10); // 0 → 9.999
```

➡️ The more you multiply, the larger the range becomes.

---

## 2. **Math.ceil()**

• Rounds a number **up** to the nearest integer.
• Examples:

```js
Math.ceil(0.0001); // 1
Math.ceil(0.5);    // 1
Math.ceil(0.99);   // 1

Math.ceil(1.01);   // 2
Math.ceil(1.5);    // 2
Math.ceil(2.99);   // 3
```

➡️ No matter how small or large the decimal part is, `ceil` always rounds up.

---

## 3. **Combining random + ceil**

Generate a random integer from **1 to 10**:

```js
var decimal = Math.random() * 10;
var rounded = Math.ceil(decimal);

console.log(rounded); // value from 1 → 10
```

Running again will produce a different number each time.

---

# **Strings in JavaScript**

## 1. Example variables

```js
var greet = "Hello, ";
var place = "World";
```

## 2. **length — string length**

```js
greet.length; // 7
```

→ Counts all characters including spaces and punctuation.

## 3. **charAt() — get character by index**

```js
greet.charAt(0); // "H"
```

→ Strings start at index 0.

## 4. **concat() — join strings**

```js
"Wo".concat("rl").concat("d"); // "World"
```

## 5. **indexOf() — find first occurrence**

```js
"ho-ho-ho".indexOf("h"); // 0
"ho-ho-ho".indexOf("o"); // 1
"ho-ho-ho".indexOf("-"); // 2
```

## 6. **lastIndexOf() — find last occurrence**

```js
"ho-ho-ho".lastIndexOf("o"); // 7
```

## 7. **split() — split string into an array**

```js
"ho-ho-ho".split("-");
// ["ho", "ho", "ho"]
```

## 8. **toUpperCase() — uppercase**

```js
greet.toUpperCase(); // "HELLO, "
```

## 9. **toLowerCase() — lowercase**

```js
greet.toLowerCase(); // "hello, "
```

---

# **Iterables, Strings, and Array-like Behavior**

## 1. What is an iterable?

• An iterable is any data type that can be looped over using a `for...of` loop.
• In JavaScript:

* Arrays are iterable.
* Strings are also iterable.

## 2. Strings behave like arrays

• They have a `length` property.
• Characters can be accessed using indexes:

```js
greeting[0] // H
greeting[1] // O
```

• You can use a `for` loop to iterate over characters.

---

## 3. Example with Array

```js
var veggies = ["onion", "parsley", "carrot"];
console.log(veggies.length);   // 3
console.log(veggies[0]);       // onion
console.log(veggies[1]);       // parsley

for (var i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}
```

Output:
• 3
• onion
• parsley
• onion, parsley, carrot

---

## 4. Example with String

```js
var greeting = "howdy";
console.log(greeting.length); // 5
console.log(greeting[0]);     // H
console.log(greeting[1]);     // O

for (var i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}
```

Output:
• 5
• H
• O
• h, o, w, d, y (each character)

---

## 5. Strings are **not** arrays

• You cannot use Array methods, for example:

```js
"hello".pop();  // Error: greet.pop is not a function
```

• Strings only **look** like arrays, but they are not actual arrays.

---

## 6. String concatenation

Two methods:

### a) Using `+`

```js
var greet = "Hello ";
var user = "Lisa";
console.log(greet + user); // Hello Lisa
```

### b) Using `.concat()`

```js
console.log(greet.concat(user)); // Hello Lisa
```

Conclusion: `+` or `.concat` both allow string concatenation.

---

# **Exercise: Create Arrays and Objects**

### Tasks:

1. Create a new empty array and assign it to the variable `clothes`.
2. Add 5 items of your favorite clothes using the `push()` method.
3. Remove the 5th clothing item using the `pop()` method.
4. Add a new clothing item using `push()`.
5. Use `console.log` to display the 3rd item in the `clothes` array.
6. Create a new empty object and assign it to the variable `favCar`.
7. Using dot notation, assign a `color` property to `favCar` with a string value.
8. Using dot notation, assign a `convertible` property to `favCar` with a boolean value.
9. Log the entire `favCar` object to the console.

### Solution:

```js
// 1. Create empty array
let clothes = [];

// 2. Add 5 clothing items
clothes.push("T-shirt");
clothes.push("Jeans");
clothes.push("Jacket");
clothes.push("Hoodie");
clothes.push("Sneakers");

// 3. Remove the 5th item
clothes.pop();

// 4. Add a new item
clothes.push("Sweater");

// 5. Print the 3rd item
console.log(clothes[2]);

// 6. Create empty object
let favCar = {};

// 7. Add color property
favCar.color = "red";

// 8. Add convertible property
favCar.convertible = false;

// 9. Log the object
console.log(favCar);
```

---

# **Object Methods in JavaScript**

## 1. What is an object?

• An object contains key–value pairs called **properties**.
• A property value can be:

* number
* string
* boolean
* array
* another object
* function

When a property’s value is a function, it is called a **method**.

---

## 2. Add properties to an object

Using dot notation:

```js
var car = {};
car.color = "red";
car.mileage = 98765;
```

---

## 3. Add methods

A method is just a property whose value is a function:

```js
car.turnTheKey = function() {
    console.log("The engine is running");
};
```

---

## 4. Full example

```js
var car = {};

car.mileage = 98765;
car.color = "red";

car.turnTheKey = function() {
    console.log("The engine is running");
};

car.lightsOn = function() {
    console.log("The lights are on");
};
```

---

## 5. Calling methods

Methods must be accessed through the object:

```js
car.turnTheKey();  // The engine is running
car.lightsOn();    // The lights are on
```

---

## 6. Key points to remember

• Method = property containing a function.
• Must call methods like: `object.method()`.
• Every key–value pair is a property, but a property holding a function is called a method.
• When calling a method, JavaScript will:

1. Find the object in memory.
2. Find the property containing the function.
3. Execute the function.

---

# **typeof Operator in JavaScript**

## 1. What is typeof?

`typeof` is an operator in JavaScript used to check the data type of a value.
It returns a string naming the data type.

Examples:

```js
typeof 10;       // "number"
typeof "Hello";  // "string"
```

---

## 2. Syntax

Two forms:

```js
typeof value
typeof(value)
```

Both return the same result.

---

## 3. typeof with basic data types

### String

```js
typeof "JavaScript"; // "string"
```

### Number

Includes integers and decimals:

```js
typeof 7;      // "number"
typeof 3.14;   // "number"
```

### Boolean

```js
typeof true;   // "boolean"
typeof false;  // "boolean"
```

---

## 4. typeof with comparison expressions

Expressions like `1 < 2` return true/false → typeof gives `"boolean"`.

```js
typeof (1 < 2);   // "boolean"
```

---

## 5. typeof with special types

### Array

JavaScript returns `"object"` for arrays:

```js
typeof [1, 2, 3]; // "object"
```

### Object

```js
typeof { name: "Nhi" }; // "object"
```

### Function

This is a special case:

```js
typeof function() {}; // "function"
```

---

## 6. Notes

### null

This is a historical bug:

```js
typeof null; // "object"
```

Even though `null` is not an object, JavaScript still returns `"object"`.

### Array

Even though it’s an array, typeof still gives `"object"`.

To correctly check an array:

```js
Array.isArray([1, 2, 3]); // true
```

---

## 7. Quick summary table

| Value         | typeof result |
| ------------- | ------------- |
| "Hello"       | "string"      |
| 10, 3.14      | "number"      |
| true, false   | "boolean"     |
| 1 < 2         | "boolean"     |
| [1, 2, 3]     | "object"      |
| { a: 1 }      | "object"      |
| function() {} | "function"    |
| null          | "object"      |
| undefined     | "undefined"   |

---

# **Bugs and Errors in JavaScript**

## **1. What is a Bug?**

* A bug occurs when the program still runs, but does not work the way you expect.
* JavaScript does not throw an error, but the result is logically wrong.

**Example of a bug:**

```js
function add(a, b) {
  console.log(a + b);
}

add("1", 2); // Result: "12"
console.log("still running");
```

✔ The program still runs
❌ But it concatenates strings instead of adding numbers → bug

---

## **2. What is an Error?**

* An error immediately stops the program.
* Code after the error does not run.
* JavaScript reports the error and “throws” it.

**Example of an error:**

```js
console.log(c + d); 
console.log("This line never runs");
```

→ Error: ReferenceError: c is not defined
→ The next line does not run.

---

## **3. Common Types of Errors in JavaScript**

### **3.1. ReferenceError**

Occurs when you use a variable that has not been declared.

```js
console.log(x); // ReferenceError
```

### **3.2. SyntaxError**

Occurs when you write incorrect syntax that JavaScript cannot parse.

Example:

```js
let name = "Nhi;  // missing closing quote
function () {     // function name missing
```

Even one character wrong can prevent the program from running.

### **3.3. TypeError**

Occurs when you use a method on the wrong data type.

```js
5.pop();   // ❌ pop is not a function on number
```

→ TypeError: 5.pop is not a function

---

## **4. Difference Between Bug and Error**

| Type      | Program Behavior  | Reason                                   |
| --------- | ----------------- | ---------------------------------------- |
| **Bug**   | Still runs        | Wrong logic, wrong values                |
| **Error** | Stops immediately | Syntax issue, wrong variable, wrong type |

---

## **5. Important Notes**

* Bugs are harder to detect because they don’t stop the program.
* Errors are easier to fix because the browser reports them clearly.
* Every programmer writes bugs → it’s normal.

---

# **Error Handling in JavaScript (try, catch, throw)**

## **1. Problem: When an error occurs, the program stops**

Example:

```js
console.log(a + b); // a and b do not exist
console.log("This line never runs");
```

JavaScript throws a **ReferenceError**.
The program stops and the next line doesn't run.

---

## **2. Solution: try – catch**

JavaScript provides a mechanism similar to “throwing and catching a ball.”

* **try** → contains code that may cause an error
* **catch** → catches the error if try fails
* The program continues running normally

**Example:**

```js
try {
  console.log(a + b); // error
} catch (err) {
  console.log("There was an error");
  console.log(err);
}

console.log("My program does not stop");
```

Output:

* Shows the error
* Shows messages inside catch
* Prints "My program does not stop"
  → The program continues.

---

## **3. throw – Manually creating errors**

You can manually throw an error:

```js
throw new Error("Something went wrong");
throw new ReferenceError("Variable missing");
```

Example inside try:

```js
try {
  throw new ReferenceError("Manual reference error");
} catch (err) {
  console.log(err);
  console.log("There was a reference error");
}

console.log("My program does not stop");
```

* Error is thrown from try
* catch handles it
* Program continues normally

If throw is outside try, the program stops because the error isn't caught.

---

## **4. try – catch Structure**

```js
try {
  // code that may throw
} catch (err) {
  // handle error
}
```

* `err` is the error object
* You can rename it: err, error, e, etc.

---

## **5. Benefits of try – catch**

| Scenario          | Result                            |
| ----------------- | --------------------------------- |
| Without try–catch | Program stops on error            |
| With try–catch    | Error handled → program continues |

---

## **6. Key Points**

* **throw**: create manual errors or validate conditions
* **try–catch**: prevent program crashes
* This technique is called **error handling**—very important in programming.

---

# **Error Handling (try, catch, throw) – Summary**

## **1. Errors stop the program**

Example:

```js
console.log(a + b);
console.log("This line never runs");
```

## **2. try – catch Mechanism**

Works like “catching a ball”.

Example:

```js
try {
  console.log(a + b);
} catch (err) {
  console.log("There was an error");
  console.log(err);
}

console.log("My program does not stop");
```

## **3. throw – create custom errors**

```js
throw new Error("Something went wrong");
```

Example:

```js
try {
  throw new ReferenceError("Manual reference error");
} catch (err) {
  console.log(err);
  console.log("There was a reference error");
}

console.log("My program does not stop");
```

## **4. Structure**

```js
try {}
catch (err) {}
```

## **5. Benefits**

| Without try–catch   | With try–catch    |
| ------------------- | ----------------- |
| Error stops program | Program continues |

## **6. Summary**

* **throw** → create errors
* **try–catch** → prevent crashes
* Critical part of JavaScript error handling

---

# **Errors in JavaScript: Syntax, Logic, and Runtime**

## **1. Common Error Types**

* ReferenceError
* SyntaxError
* TypeError
* RangeError
* Others: AggregateError, Error, InternalError, URIError

This lesson focuses on Reference, Syntax, Type, Range, and Logical errors.

---

## **2. ReferenceError**

Occurs when using a variable that is not declared:

```js
console.log(username);
```

Result:

```
Uncaught ReferenceError: username is not defined
```

---

## **3. SyntaxError**

Occurs when code contains invalid syntax:

```js
var a "there's no assignment operator here";
```

Result:

```
Uncaught SyntaxError: Unexpected string
```

Note: Syntax errors cannot be caught using try–catch if they occur before runtime.

---

## **4. TypeError**

Occurs when calling an invalid method on a data type:

```js
"hello".pop(); // TypeError: "hello".pop is not a function
```

Strings do not support array methods like `pop()`.

---

## **5. RangeError**

Occurs when a value is outside the allowed range:

```js
(10).toString(2);   // '1010'
(10).toString(8);   // '12'
(10).toString(100); // RangeError
```

Result:

```
Uncaught RangeError: toString() radix argument must be between 2 and 36
```

---

## **6. Logical Error**

The program runs normally but gives the wrong result:

```js
function addNumbers(a, b) {
  return a - b; // Logical error
}
console.log(addNumbers(5, 3)); // Output: 2 (Wrong, expected 8)
```

Fixing logical errors:

* Use breakpoints to inspect variables
* Review code logic
* Ask for code review

---

## **7. Error Object Properties**

Errors in JavaScript are objects with properties:

```js
try {
  let a = b;
} catch (error) {
  console.log(error.name);    // ReferenceError
  console.log(error.message); // b is not defined
  console.log(error.stack);   // Stack trace
}
```

* **name**: error type
* **message**: error description
* **stack**: where the error occurred

---

## **8. Best Practices for Error Handling**

* Use try–catch for predictable runtime errors
* Validate inputs
* Use specific error types when throwing custom errors

Example:

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.log(error.message);
}
```

---

## **9. Distinguishing Error Types**

| Error Type        | When It Happens     | Result                          |
| ----------------- | ------------------- | ------------------------------- |
| **SyntaxError**   | Before running code | Execution stops                 |
| **Logic Error**   | During execution    | Wrong result, program continues |
| **Runtime Error** | During execution    | Program stops unless handled    |

---

# **Empty Values in JavaScript: null, undefined, and Empty String**

## **1. Concept**

In JavaScript, there are situations where you need to indicate where a value or object should exist. There are three common empty values:

1. **null** – indicates the intentional absence of an object value.
2. **undefined** – indicates a value has not been defined.
3. **Empty string ("")** – a string containing no characters.

---

## **2. null**

* A deliberate value to indicate "nothing here."
* Often appears when a JavaScript method cannot return a valid object.

**Example:**

```js
let letters = "abc";
console.log(letters.match("a")); // Array containing information about 'a'
console.log(letters.match("d")); // null, because 'd' does not exist
```

---

## **3. undefined**

* The default value of a variable that has not been assigned or when no return value exists.
* Has only one value: `undefined`.
* Appears when:

  1. A variable is declared but not assigned a value.
  2. A function does not return a value.
  3. Accessing a non-existent property of an object.

**Example:**

```js
let noise;
console.log(noise); // undefined

noise = "thunder";
console.log(noise); // "thunder"

let game = { score: 1000 };
console.log(game.Score); // undefined, incorrect property name
```

**Note:**

* `undefined` is different from an undeclared variable. If a variable is undeclared, a ReferenceError occurs.
* Often considered a placeholder indicating that a value will be assigned later.

---

## **4. Empty String ("")**

* A string containing no characters.
* Can be created using single or double quotes:

```js
let empty1 = '';
let empty2 = "";
console.log(empty1.length); // 0
console.log(empty2.length); // 0
```

---

## **5. Summary**

| Empty Value | Meaning                     | Example                               |
| ----------- | --------------------------- | ------------------------------------- |
| null        | No object value             | `let result = null;`                  |
| undefined   | Value not defined           | `let x; console.log(x); // undefined` |
| ""          | Empty string, no characters | `let str = "";`                       |

* `null` – actively assigned to indicate nothing exists.
* `undefined` – automatically assigned by JavaScript when a variable is uninitialized or does not exist.
* Empty string – valid value but contains no characters.

---

# **Exercise: Prevent Errors with addTwoNums**

**Task:**

1. Create a function `addTwoNums(a, b)` and print the sum `a + b`.
2. Call the function with `5` and `"5"` (string).
3. Add `try...catch` to handle errors.
4. Check parameter types:

   * If `a` is not a number → throw `TypeError("The first argument is not a number.")`
   * If `b` is not a number → throw `TypeError("The second argument is not a number.")`
5. In `catch`, print `"Error!"` along with the error.
6. Call the function with `5` and `"5"` to test the error.
7. Add `console.log("It still works")` below the function.

**Complete Code:**

```js
function addTwoNums(a, b) {
    try {
        if (typeof a !== "number") {
            throw new TypeError("The first argument is not a number.");
        } else if (typeof b !== "number") {
            throw new TypeError("The second argument is not a number.");
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

addTwoNums(5, "5");

console.log("It still works");
```

**Output:**

```
Error! TypeError: The second argument is not a number.
It still works
```

---

# **Exercise: Defensive Programming with letterFinder**

Defensive programming assumes that all arguments a function receives may be of the wrong type, wrong value, or both. You proactively think about such situations to reduce errors from invalid input.

**Requirements for this exercise:**

* `word` length must be ≥ 2
* `match` length must be 1
* Both `word` and `match` must be strings

**Original Code:**

```js
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
```

**Tasks:**

1. Above the `for` loop, declare `condition1 = typeof(word) === 'string' && word.length >= 2;`
2. Declare `condition2 = typeof(match) === 'string' && match.length === 1;`
3. Use `if (condition1 && condition2)` to wrap the loop.
4. In `else`, `console.log("Please pass correct arguments to the function.");`
5. Test with invalid input (numbers)
6. Test with valid input, e.g., `letterFinder("cat", "c")`

**Complete Code:**

```js
function letterFinder(word, match) {
    let condition1 = typeof(word) === 'string' && word.length >= 2;
    let condition2 = typeof(match) === 'string' && match.length === 1;
    
    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === match) {
                console.log('Found the', match, 'at', i);
            } else {
                console.log('---No match found at', i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder(123, 4);      // Fails
letterFinder("cat", "c");  // Succeeds
```

---

# **Functional Programming in JavaScript**

## **1. Concept**

* Like human languages have different styles (formal, colloquial), programming languages have paradigms.
* Two common paradigms:

  1. Functional Programming (FP)
  2. Object-Oriented Programming (OOP)
* Both aim to instruct computers to perform operations.

---

## **2. Features of Functional Programming**

* Data and functions are separated.
* Data can exist outside the function.
* Functions receive parameters, process data, and return values.

> OOP differs: data and methods are encapsulated in objects.

**Example: Currency Conversion**

```js
let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

function convertCurrency(amount, rate) {
  return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);

console.log(currencyTwo); // 120
```

**Explanation:**

1. Data: `currencyOne`, `currencyTwo`, `exchangeRate` are predefined.
2. Function `convertCurrency`: takes `amount` and `rate`, returns `amount * rate`.
3. `currencyTwo` is updated with the return value.
4. Result: console prints 120.

---

## **3. Benefits**

* Separates data from processing logic.
* Easier to maintain, test, and reuse functions.
* Suitable for data processing and computation.

---

# **Returning Values from Functions**

## **1. Concept**

* Functions can return values using `return`.
* If no return, default is `undefined`.

```js
console.log('Hello'); // Output: Hello, undefined
```

* Explicit return:

```js
function consoleLog(val) {
    console.log(val);
    return val;
}
consoleLog('Hello'); 
// Output:
// Hello
// 'Hello' (return value)
```

---

## **2. Benefits**

Returned values can:

* Be passed to other functions
* Used in further calculations
* Assigned to variables

Helps functions remain pure, reduces side effects, and increases reusability.

---

## **3. Examples**

### a. Double a number

```js
function doubleIt(num) {
    return num * 2;
}
```

### b. Create an object

```js
function objectMaker(val) {
    return { prop: val };
}
```

### c. Combine

```js
doubleIt(10).toString(); // "20"
objectMaker(doubleIt(100)); // { prop: 200 }
```

**Explanation:**

* `doubleIt(100)` returns 200
* `objectMaker(200)` creates `{ prop: 200 }`

---

## **4. Conclusion**

* Returning values increases flexibility and reusability.
* Supports modular code and functional programming principles:

  * Pure functions
  * Avoid side effects
* Understanding and using `return` is fundamental for effective JavaScript.

---

# **Recursive Functions in JavaScript**

## **1. Concept**

* A function calls itself to perform a task.
* Like a treadmill: repeats but can stop when a condition is met.
* Recursion replaces loops for repeated tasks.

---

## **2. Basic Example Without Stop Condition**

```js
function example() {
    console.log("line one");
    console.log("line two");
    console.log("line three");
    example(); // Infinite recursion
}
example();
```

* Without a stop condition, the function runs infinitely.

---

## **3. Avoiding Infinite Loops**

```js
let counter = 3;

function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example();
}

example(); // Output: 3, 2, 1
```

* Stop condition (`if (counter === 0) return`) prevents infinite recursion.
* Counter changes each call, moving toward the stop condition.

---

## **4. Benefits**

* Enables repetition without traditional loops (`for`/`while`).
* Useful for divide-and-conquer problems:

  * Factorial
  * Tree traversal
  * Fibonacci sequence

---

## **5. Key Principles**

* Function must call itself.
* Must have a stop condition.
* Parameters or variables must change toward the stop condition.

> Visualization: each recursive call is a treadmill step; function stops when `counter === 0`.

---

# **Scope in JavaScript**

## **1. Concept**

* Scope defines which parts of code can access variables and functions.
* Similar to a one-way mirror: inside can see outside, but outside cannot see inside.

---

## **2. Types of Scope**

### a. Global Scope

* Variables declared outside any function.
* Accessible anywhere.

```js
let globalVar = "I am global";

function test() {
    console.log(globalVar); // Accessible
}

test();
console.log(globalVar); // Accessible
```

### b. Local Scope (Function Scope)

* Variables declared inside a function.
* Accessible only within that function.

```js
function myFunction() {
    let localVar = "I am local";
    console.log(localVar); // OK
}

myFunction();
console.log(localVar); // Error: localVar is not defined
```

---

## **3. Scope Chain**

* Each function holds a reference to its parent scope.
* JavaScript looks for variables from local → parent → global.

```js
let a = 1;

function outer() {
    let b = 2;
    function inner() {
        let c = 3;
        console.log(a, b, c); // Accesses local, parent, and global
    }
    inner();
}

outer(); // Output: 1 2 3
```

---

## **4. Summary**

* **Global Scope:** variables accessible anywhere
* **Local Scope:** variables accessible only within function
* **Scope Chain:** if variable not in current scope, JS looks up through parent scopes until found or error occurs

---

# **Functional Programming (FP) Model**

## **1. Goals**

* Understand that multiple programming paradigms exist.
* Grasp the basic differences between FP and OOP.
* Understand how FP works at a fundamental level.

---

## **2. Core Concepts**

### a. FP vs OOP

| Feature          | Functional Programming (FP)          | Object-Oriented Programming (OOP)                |
| ---------------- | ------------------------------------ | ------------------------------------------------ |
| Data & Functions | Separate                             | Grouped inside objects                           |
| Principle        | Often uses immutable values          | Methods can modify object properties             |
| Example          | `getTotal(a, b)` returns a new value | `virtualPet.nap()` changes the `sleepy` property |

---

### b. Principles of FP

#### i. First-Class Functions

* Functions are treated as values:

  * Can be stored in variables
  * Can be passed to other functions
  * Can be returned from other functions

```js
function addTwoNums(a, b) {
    return a + b;
}

function randomNum() {
    return Math.floor(Math.random() * 10 + 1);
}

let useRandom = true;
let getNumber = useRandom ? randomNum : () => 42;
```

---

#### ii. Higher-Order Functions

* A function is called higher-order if:

  * It takes one or more functions as arguments
  * Returns another function

```js
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(() => 42, () => 42); // 84
addTwoNums(() => 42, () => Math.floor(Math.random() * 10 + 1)); // 42 + random number
```

---

#### iii. Pure Functions & Side Effects

* **Pure function:** always returns the same result for the same input and has no side effects.

```js
function addTwoNums(a, b) {
    return a + b;
}
addTwoNums(5, 6); // always returns 11
```

* **Side effect:** any change outside the function scope, e.g.:

  * Modifying global variables
  * Calling browser APIs
  * Calling `Math.random()` (output not predictable)

---

## **3. Summary**

* FP separates data and functions, prefers immutable values.
* OOP groups data and methods in objects.
* FP commonly relies on:

  1. First-class functions
  2. Higher-order functions
  3. Pure functions (avoiding side effects)

---

# **Scope in JavaScript**

## **1. Basic Concept**

* Scope determines which parts of code can access variables and which cannot.

* Basic types of scope:

  1. **Global scope:** code outside all functions → accessible anywhere.
  2. **Local scope (Function scope):** code inside a function → only accessible within that function.

* ES5: only functions create local scope

* ES6: block scope introduced (using `{}` in `if`, `for`, `while`)

---

## **2. Block Scope**

* Variables declared with `let` or `const` are valid only inside the block:

```js
{
  let name = "Alice";
  const age = 25;
  console.log(name); // Alice
}
console.log(name); // Error, name is not defined
```

* Allows two variables with the same name in different scopes without conflict.

---

## **3. Differences Between var, let, and const**

| Keyword | Scope             | Hoisting                                       | Can Redeclare? | Can Reassign?       |
| ------- | ----------------- | ---------------------------------------------- | -------------- | ------------------- |
| var     | Function / Global | Can be accessed before declaration (undefined) | Yes            | Yes                 |
| let     | Block             | Cannot access before declaration               | No             | Yes                 |
| const   | Block             | Cannot access before declaration               | No             | No (constant value) |

**Example:**

```js
// ES5
var user = "Miranda";
user = "John"; // OK
var user = "Alice"; // OK

// ES6
let userLet = "Miranda";
userLet = "John"; // OK
// let userLet = "Alice"; // Error, cannot redeclare

const userConst = "Miranda";
// userConst = "John"; // Error, cannot reassign
```

**Quick note:**

* `let` → use when value may change
* `const` → use for constant values

---

## **4. Conclusion**

* `var` → flexible but prone to errors due to hoisting and limited scope
* `let` and `const` → stricter, block scope, safer code
* Understanding scope prevents variable conflicts and side effects

---

## **5. Quick Summary: var vs let vs const**

1. **var – Most Flexible**

* Hoisting: accessible before declaration (value undefined)

```js
console.log(user); // undefined
var user = "Mark";
```

* Can redeclare multiple times

```js
var user = "Mary";
var user = "Joanna";
```

* Function scope, not block scope

2. **let – Stricter**

* Cannot access before declaration → ReferenceError

```js
console.log(user); // ReferenceError
let user = "Anna";
```

* Cannot redeclare in the same scope

```js
let user = "Anna";
let user = "Bob"; // SyntaxError
```

* Can reassign value after declaration

```js
let user = undefined;
user = "Anna"; 
console.log(user); // Anna
```

* Block scope

3. **const – Strictest**

* Must be initialized

```js
const user; // SyntaxError
```

* Cannot redeclare or reassign

```js
const user = "Anna";
user = "Bob"; // TypeError
```

* Block scope

**Advice:**

* Prefer `const` in modern JS, use `let` only if value changes.

---

# **OOP vs Functional Programming**

## **1. Programming Paradigms**

* Paradigms = styles or approaches to write code
* Two compared:

  * FP → separates data and functions
  * OOP → groups data and functions into objects

---

## **2. Functional Programming (Approach 1)**

* Data separated: `shoePrice`, `tax`
* Function separate: `totalPrice(shoes, tax)`
* Function receives data via parameters and returns a result

```js
var shoes = 100;
var tax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, tax);
console.log(toPay); // 120
```

---

## **3. Object-Oriented Programming (Approach 2)**

* OOP combines data + related functions into an object

```js
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log(calculation);
    }
};

purchase1.totalPrice(); // 120
```

* **Attributes:** `shoes`, `stateTax`
* **Method:** `totalPrice()`

---

## **4. OOP Advantages**

* Can create multiple objects like `purchase1`, `purchase2`
* Easy to access object data using dot notation
* Organizes code: all related data & functions together

---

## **5. Problem with Repeating Code**

* If multiple objects have similar methods, the same method must be written multiple times → wasteful

---

## **6. Solution: this Keyword**

* Instead of referencing object name, use `this` inside methods

```js
this.shoes
```

* `this` refers to the current object
* Allows copying the same method to multiple objects without changing the object name

---

## **7. Still Repeating Method Code**

* Even with `this`, each object needs its own method:

```js
var purchase1 = { totalPrice() {...} }
var purchase2 = { totalPrice() {...} }
```

* Not fully optimal

---

## **8. True Optimization: Class**

* Class acts as a **template** to create multiple objects
* Methods defined once, reused across objects

---

## **Summary in 5 Lines**

1. FP: separates functions and data
2. OOP: groups data + methods into objects
3. `this` avoids hardcoding object names
4. OOP improves code reuse better than FP
5. Class → creates multiple objects without repeating methods

---

# **Classes in JavaScript**

## **1. When to Use Classes**

* Use classes when you need to create many objects with the same structure, e.g.:

  * 100 cars in a racing game
  * 50 characters in a game
  * Hundreds of products in an online store
* Creating each object manually is time-consuming and error-prone.
* Classes solve this problem by acting as blueprints.

---

## **2. What is a Class?**

* A class is like a **blueprint**.
* From a class, you can create multiple objects of the same type.

---

## **3. Syntax for Creating a Class**

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("Turbo is ON!");
    }
}
```

* Use the `class` keyword
* Class name starts with a capital letter: `Car`
* Inside the class:

  1. **constructor()**

     * Receives parameters
     * Assigns them to object properties using `this`
  2. **Methods**

     * No `function` keyword needed
     * Just write method name: `turboOn()`

---

## **4. Creating an Object from a Class (Instantiation)**

```js
let car1 = new Car("red", 200);
```

* `new Car()` → creates a new object based on the `Car` blueprint
* `car1` has all properties and methods defined in `Car`

---

## **5. Accessing Object Methods**

```js
car1.turboOn();
```

* Call a method with `object.method()`
* The method uses the data of that object (`this`)

---

## **6. Passing Parameters to Methods**

```js
class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    accelerate(amount) {
        this.speed += amount;
        console.log(this.speed);
    }
}

let car1 = new Car("red", 200);
car1.accelerate(20); // 220
```

---

## **Summary in 5 Lines**

1. Class is a blueprint to create multiple similar objects.
2. Use `class` and `constructor()`.
3. `constructor` assigns data to object via `this`.
4. Methods inside class don’t use the `function` keyword.
5. Create objects with the `new` keyword.

---

# **Object-Oriented Programming (OOP)**

## **Benefits of OOP**

* OOP models real-world relationships.
* Helps you:

  * Write modular code
  * Maintain flexibility
  * Reuse code
  * Organize code clearly by objects

---

## **4 Main Principles of OOP**

### 1. **Inheritance**

* A child class inherits properties and methods from a parent class
* Example hierarchy:

  * `Animal` (base class)
  * `Mammal` (inherits `Animal`)
  * `Elephant` (inherits `Mammal`)

```js
class Animal {}
class Mammal extends Animal {}
class Elephant extends Mammal {}
```

* **Benefits:**

  * Reduce duplicate code
  * Model hierarchical relationships

---

### 2. **Encapsulation**

* Hides internal implementation details, exposing only what’s necessary
* Example:

```js
"abc".toUpperCase()
```

* You don’t need to know how `toUpperCase()` works, just that it works
* **Benefits:**

  * Prevents external interference
  * Keeps code clean and easy to use

---

### 3. **Abstraction**

* Focuses on the essence of an object, ignoring unnecessary details
* Difference from encapsulation:

  * Abstraction → simplifies the idea, creates general models
  * Encapsulation → hides details
* Example:

  * “Car” is an abstraction of many types of vehicles (car, motorcycle, truck)
  * You only need to know `move()`, not the specific implementation

---

### 4. **Polymorphism**

* “Same name” → multiple behaviors
* Real-world example:

  * Doorbell → rings to call someone
  * Bicycle bell → rings to alert
* Code example:

```js
const bicycle = {
    bell() { return "Ring, ring! Watch out!"; }
}

const door = {
    bell() { return "Ring, ring! Come here!"; }
}

function ringTheBell(thing) {
    console.log(thing.bell());
}

ringTheBell(bicycle);
ringTheBell(door);
```

* Example with classes:

```js
class Bird {
    useWings() {
        console.log("Flying!");
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely flapping!");
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Swimming!");
    }
}
```

* `Eagle` extends behavior of `Bird`
* `Penguin` completely overrides it

---

## **Summary**

* **Inheritance:** child class uses code from parent class
* **Encapsulation:** hide internal details
* **Abstraction:** focus on the essence, ignore details
* **Polymorphism:** same name, different behaviors
* OOP makes code extensible, reusable, and models real-world scenarios clearly

---

# **CONSTRUCTORS IN JAVASCRIPT**

## **1. What is a Constructor?**

* A constructor is a **special function** used to create an instance of an object.
* All constructor names start with a capital letter.
  **Examples:**

```js
new Date();
new Map();
new Error();
```

---

## **2. Built-in Objects (Native Objects)**

* JavaScript has many built-in objects, e.g.:
  `Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON…`
* Some have constructors (Date, Map…) while others do not (Math).

---

## **3. Using a Constructor**

* Use the `new` operator before the constructor.
  **Example:**

```js
new Date(); // returns an object containing the current date and time
```

---

## **4. Objects WITHOUT a Constructor**

* Example: `Math`

```js
new Math(); // Uncaught TypeError: Math is not a constructor
```

* Reason: Math is a static object containing properties and methods accessed directly.
  **Example:**

```js
Math.pow(2, 5); // 32
```

* No need to create an instance → constructor is meaningless.

---

## **5. Creating a Custom Constructor**

```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    };
}

let kiwi = new Icecream("kiwi");
let apple = new Icecream("apple");
```

---

## **6. Performance Notes**

* Avoid using constructors for primitive types:

  * String, Number, Boolean

```js
let a = new String("apple"); // object
let b = "apple";             // primitive
```

* `b` is faster and safer for comparison:

```js
new String("plum") === new String("plum"); // false
"plum" === "plum";                         // true
```

---

## **7. Avoid Constructors for Simple Objects**

* Instead of:

```js
new Object();
new Array();
new Function();
new RegExp();
```

* Use literals:

  * Object literal: `{}`
  * Array literal: `[]`
  * Function literal: `() => {}` or `function(){}`
  * RegExp literal: `/abc/`
    **Example:**

```js
"abcd".match(/d/);
```

---

## **8. When to Use Constructors**

* For complex types where each instance has its own data:

```js
new Date();
new Map();
new Set();
new WeakMap();
new WeakSet();
new Promise();
new Error();
```

---

## **9. Summary**

Understanding constructors helps you:
✔ Create custom objects
✔ Use built-in objects correctly
✔ Optimize performance
✔ Write clean, maintainable code

* Combining constructors with literals makes you a **flexible and efficient JavaScript developer**.

---

# **INHERITANCE & PROTOTYPE IN JAVASCRIPT**

## **1. What is a Prototype?**

* In real life, inheritance means acquiring traits or properties from previous generations.
* In JavaScript, inheritance is based on **prototypes**.
* A prototype is an object that serves as a **template**, containing properties/methods shared across objects.
* JavaScript uses **prototype-based inheritance**.

---

## **2. Basic Prototype Example**

```js
var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true
};
```

---

## **3. Creating Inherited Objects with Object.create()**

```js
let eagle1 = Object.create(bird);
console.log(eagle1); // {}
```

* Although the object looks empty, it inherits properties from `bird`:

```js
eagle1.hasWings      // true
eagle1.canFly        // true
eagle1.hasFeathers   // true
```

---

## **4. Creating Multiple Inherited Objects**

```js
let eagle2 = Object.create(bird);
console.log(eagle2.hasWings); // true
```

* All objects created with `Object.create(bird)` share the same prototype.

---

## **5. Overriding Inherited Properties**

* Example: Penguin that cannot fly:

```js
let penguin1 = Object.create(bird);
penguin1.canFly = false;

console.log(penguin1); 
// { canFly: false }

penguin1.canFly       // false (overridden)
penguin1.hasFeathers  // true  (inherited)
```

* JavaScript searches for properties in order:

  1. Current object
  2. Prototype
* If found in the object itself, it stops → allows easy overriding.

---

## **6. Override Does Not Affect Prototype or Other Objects**

```js
penguin1.canFly = false;
// Only affects penguin1, not bird, eagle1, or eagle2
```

---

## **7. Object.create() vs Class Syntax**

* `Object.create()` is fine for simple inheritance models.
* For complex systems → prefer **classes** (more readable and familiar).
* Classes are **syntactic sugar over prototypes** (“under the hood”).

---

## **Quick Summary**

* JavaScript inheritance is **prototype-based**
* **Prototype** = template object with shared properties/methods
* `Object.create(proto)` creates a new object inheriting from `proto`
* Override properties by defining them in the child object
* Overrides do **not** change the prototype or other objects
* For complex projects → prefer **class syntax** for easier management