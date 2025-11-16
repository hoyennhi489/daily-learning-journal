## **Functions in JavaScript**

### 1. What are functions used for?

* Functions are like small programs: you predefine a set of instructions, and you can call them whenever you need to run them multiple times.
* Like a washing machine: each mode (sports wash, synthetics, etc.) runs a fixed set of instructions → functions work the same way.
* **DRY principle – Don’t Repeat Yourself**: functions prevent you from rewriting the same repetitive code.

### 2. How to create a function (function declaration)

Basic structure:

```javascript
function functionName() {
    // code to run when the function is called
}
```

* `function` keyword
* Function name (your choice)
* `()` parentheses
* `{}` braces containing the body (where code will run)

**Note:** Declaring a function does not run the code; it only describes *what to do when called*.

### 3. How to call (invoke) a function

To run a function:

```javascript
functionName();
```

Words like “run”, “call”, and “invoke” all mean: execute the code inside the function.

### 4. Simple function (no parameters)

Example:

* Create variables `a = 10`, `b = 20`
* Create variable `c = a + b`
* Print the result

If you want to repeat multiple times → put this code into a function:

```javascript
function addTwoNums() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}

addTwoNums(); // call function
```

**Limit:** This function always adds 10 + 20 because the values are fixed.

### 5. Using parameters to make functions more flexible

To handle different values → use **parameters**.

* **Parameters** = variable names in parentheses
* **Arguments** = actual values you pass when calling the function

Example:

```javascript
function addTwoNums(a, b) {
    console.log(a + b);
}

addTwoNums(5, 7);   // arguments: 5, 7
addTwoNums(10, 30);
addTwoNums(100, 200);
```

**Advantages:**

* Works for any values
* Cleaner, more flexible, reusable
* No need to modify the function itself

### 6. Summary

* Functions help avoid repeating code (DRY principle).
* Structure: `function name() { ... }`
* Function does not run until called.
* Parameters ≈ “temporary variable names”, arguments = “actual values”.
* Functions with parameters → flexible and reusable.

---

## **Introduction to Arrays in JavaScript**

### 1. Why use arrays?

* Like a train with multiple carriages, each carrying a different type of cargo.
* You can add or remove carriages without disturbing the overall order.
* JavaScript also has a way to store multiple ordered values — **arrays**.

### 2. Problems with using multiple separate variables

Example:

```javascript
var carriage0 = "wheat";
var carriage1 = "coal";
var carriage2 = "wood";
```

* When adding a second train, you can’t reuse names like `carriage0`, `carriage1`.
* Long names like `train2carriage0` are cumbersome and don’t show they belong to the same group.

**Solution:** use arrays to group values.

### 3. Creating an array

Use square bracket syntax:

```javascript
var train1 = [];
```

Then add elements separated by commas:

```javascript
var train1 = ["wheat", "coal", "wood"];
```

### 4. Arrays are automatically indexed

* JavaScript automatically numbers each element starting from 0.
* Example array: `["wheat", "coal", "wood"]`
  | Index | Value |
  |-------|-------|
  | 0     | wheat |
  | 1     | coal  |
  | 2     | wood  |

### 5. Accessing array elements

Use syntax: `arrayName[index]`
Example:

```javascript
train1[0]; // "wheat"
train1[1]; // "coal"
```

### 6. Conclusion

Arrays allow you to:

* Group related values (like train carriages)
* Keep them in a specific order
* Access each element by its index

**→ Array = an ordered collection of values, easy to access and manage.**

---

## **Building and Calling Functions in JavaScript**

### 1. Function declaration

Example: create a function `listArrayItems` that takes a parameter `arr` (array):

```javascript
function listArrayItems(arr) {
    // array processing code goes here
}
```

`arr` is just a parameter name; we will pass a real array when calling the function.

### 2. Why use a for loop in a function

To iterate over an array, use a for loop:

* Start at 0 (because array index starts at 0)
* Run until before `arr.length`
* Increment by 1 (`i++`)

Full loop:

```javascript
for (var i = 0; i < arr.length; i++) {
    // process arr[i]
}
```

### 3. Adding the loop to the function

```javascript
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        // currently do nothing with arr[i]
    }
}
```

### 4. Print each element

Simplest way:

```javascript
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
```

Output:

```
red
orange
yellow
green
blue
purple
pink
```

### 5. Print with index

```javascript
console.log(i, arr[i]);
```

Output:

```
0 'red'
1 'orange'
2 'yellow'
...
```

Count from 1 instead of 0:

```javascript
console.log(i + 1, arr[i]);
```

### 6. Adding a condition inside the function

Example: if the element is `"red"` print `"tomato!"` instead of `"red"`:

```javascript
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'red') {
            console.log(i * 100, "tomato!");
        } else {
            console.log(i * 100, arr[i]);
        }
    }
}
```

Output:

```
0 'tomato!'
100 'orange'
200 'yellow'
300 'green'
400 'blue'
500 'purple'
600 'pink'
```

### Summary

* Function = group code + reuse → avoid repeating code.
* Parameter = variable name inside function
* Argument = actual value passed when calling function
* You can put loops and conditions inside functions as needed

---

## **Exercise: Practice Functions**

**Task 1:**
Write a function named `letterFinder` with two parameters: `word` and `match`.

**Note:** Strings can be treated like arrays in JavaScript. You can access individual characters with an index, just like arrays.

**Task 2:**
Add a for loop inside the function. The loop counter should start from 0, increment by 1, and run while the counter is less than `word.length`.

**Task 3:**
Inside the loop, use the counter variable to access each letter: `word[i]`. Check if `word[i] === match`.

**Task 4:**
If true, log:

```javascript
console.log('Found the', match, 'at', i);
```

**Task 5:**
Add an else statement:

```javascript
console.log('---No match found at', i);
```

**Task 6:**
Call the function:

```javascript
letterFinder("test", "t");
```

**Expected output:**

```
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3
```

**Solution:**

```javascript
function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test", "t");
```

---

## **Objects in JavaScript**

### 1. When to use objects

* When you have multiple pieces of related data about a single entity (e.g., a game character).
* Using separate variables → long names and JavaScript can’t relate them.
* Objects group related data together.

### 2. What is an object?

* A collection of **properties**
* Each property has:

  * `key`: property name
  * `value`: property value
* `key: value` is called a **key–value pair**.

### 3. Creating objects with dot notation

Step 1: Create an empty object:

```javascript
var storeManager = {};
```

Step 2: Add properties:

```javascript
storeManager.movement = 5;
storeManager.socialSkills = 3;
storeManager.streetSmarts = 4;
storeManager.health = 10;
```

### 4. Creating objects using key–value pairs

Shorter syntax:

```javascript
var assistantManager = {
  movement: 4,
  socialSkills: 2,
  streetSmarts: 5,
  health: 8
};
```

* Each property: `key: value`
* Properties separated by commas

### 5. Adding new properties after creation

```javascript
storeManager.nextAchievement = "Level 2";
assistantManager.nextAchievement = "Level 1";
```

### 6. Summary

* Objects group related data
* Code becomes shorter and structured
* Two ways to create objects:

  1. Dot notation
  2. Key–value in braces
* Can add new properties anytime

---

## **Objects and Dot Notation in JavaScript**

### 1. Goals

After learning this, you can:

* Explain a common way to build objects with object literals (`{}`).
* Add or update properties using dot notation.

### 2. What is an object?

* A collection of related data stored as key–value pairs.
* Useful for:

  * Grouping related data
  * Representing real-world entities (user, product)
  * Easily adding, deleting, updating data
* Objects make code concise, readable, and manageable

### 3. Creating an object with object literal

Step 1: Empty object:

```javascript
var user = {}; // empty object
```

Step 2: Object with properties:

```javascript
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
};
```

* Readable syntax:

  1. Declare variable and assign object literal
  2. Assign values to keys with `:`

Example:

```javascript
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100
};

console.log(table);        // display entire object
console.log(table.color);  // access single property -> 'brown'
```

### 4. Creating object with dot notation

* Can start with empty object, then add properties:

```javascript
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
```

* Can combine both methods:

```javascript
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
```

### 5. Updating object properties

```javascript
house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}
```

### 6. Summary

* Objects = group related data by key–value
* Object literal `{}`: create object with all properties immediately
* Dot notation: add or update properties
* Can combine both for flexibility

---

## **Bracket Notation in JavaScript**

### 1. Goals

After learning this, you will be able to:

* Explain how to build objects using bracket notation.
* Understand that bracket notation allows keys with spaces or numbers.
* Understand that keys in bracket notation can evaluate expressions.

### 2. What is bracket notation?

* An alternative syntax to dot notation for accessing or adding object properties.
* Syntax:

```javascript
object["propertyName"] = value;
```

* The key is placed inside square brackets and is a string.

### 3. Basic example

```javascript
var house2 = {};
house2["rooms"] = 4;
house2['color'] = "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
```

* You can combine dot notation and bracket notation:

```javascript
var car = {};
car.color = "red";        // dot notation
car["color"] = "green";   // bracket notation
car["speed"] = 200;       
car.speed = 100;
console.log(car);         // {color: "green", speed: 100}
```

### 4. Using spaces or numbers in keys

* Bracket notation allows keys with spaces:

```javascript
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}
```

* Numbers can also be used as strings:

```javascript
car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 4}
```

**Note:** Using numbers as keys is generally discouraged as it conveys little meaningful information.

### 5. Bracket notation can evaluate expressions

* Dot notation only accepts fixed property names, while bracket notation can use expressions:

```javascript
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
};
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}
// Output:
// 100
// 200
// red
```

* In the example above, `arrOfKeys[i]` is evaluated each loop:

1. `i = 0` → `arrOfKeys[0] = "speed"` → `drone["speed"] = 100`
2. `i = 1` → `arrOfKeys[1] = "altitude"` → `drone["altitude"] = 200`
3. `i = 2` → `arrOfKeys[2] = "color"` → `drone["color"] = "red"`

* This allows dynamic access and iteration over object properties.

### 6. Summary

* **Bracket notation:** `object["key"] = value`
* Advantages:

  1. Allows keys with spaces or numbers.
  2. Can evaluate expressions for dynamic property access.
* Dot notation and bracket notation can be combined for objects.

---

## **Arrays are Objects in JavaScript**

### 1. Goals

After learning this, you will be able to:

* Understand that arrays are objects with built-in properties and methods.
* Know how to add elements to an array using `push()`.
* Know how to remove the last element of an array using `pop()`.

### 2. Arrays are objects

* Arrays in JavaScript are objects.
* They have built-in properties and methods.

### 3. Adding elements to an array: `push()`

```javascript
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push("pear");  // ['apple', 'pear']
```

### 4. Removing the last element: `pop()`

```javascript
fruits.pop();
console.log(fruits); // ['apple']
```

### 5. Combining arrays with functions

* Create a function that accepts multiple parameters and pushes them into an array:

```javascript
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr; // return the array
}

var myArray = arrayBuilder('apple', 'pear', 'plum');
console.log(myArray); // ['apple', 'pear', 'plum']
```

* Using `return` allows the array to be stored in another variable:

```javascript
var simpleArr = arrayBuilder('apple','pear','plum');
console.log(simpleArr); // ['apple','pear','plum']
```

### 6. Summary

* Arrays are objects with built-in methods.
* `push()`: adds an element to the end of an array.
* `pop()`: removes the last element of an array.
* Arrays can be built inside functions and returned using `return`.

---

## **The Math Object in JavaScript**

### 1. Common Constants

| Constant | Approx. Value | Meaning                |
| -------- | ------------- | ---------------------- |
| Math.PI  | 3.14159       | Pi                     |
| Math.E   | 2.718         | Euler’s number         |
| Math.LN2 | 0.693         | Natural logarithm of 2 |

---

### 2. Rounding Methods

| Method        | Description                                             |
| ------------- | ------------------------------------------------------- |
| Math.ceil(x)  | Rounds up to the nearest integer                        |
| Math.floor(x) | Rounds down to the nearest integer                      |
| Math.round(x) | Rounds to the nearest integer (0.5 or higher rounds up) |
| Math.trunc(x) | Removes the decimal part, keeps only the integer        |

---

### 3. Arithmetic and Analytic Methods

| Method               | Example           | Result |
| -------------------- | ----------------- | ------ |
| Math.pow(a, b)       | Math.pow(2, 3)    | 8      |
| Math.sqrt(x)         | Math.sqrt(16)     | 4      |
| Math.cbrt(x)         | Math.cbrt(8)      | 2      |
| Math.abs(x)          | Math.abs(-10)     | 10     |
| Math.min(a, b, c...) | Math.min(9, 8, 7) | 7      |
| Math.max(a, b, c...) | Math.max(9, 8, 7) | 9      |

---

### 4. Logarithmic Methods

| Method        | Description                     |
| ------------- | ------------------------------- |
| Math.log(x)   | Natural logarithm (base e) of x |
| Math.log2(x)  | Base-2 logarithm of x           |
| Math.log10(x) | Base-10 logarithm of x          |

---

### 5. Trigonometric Methods

| Method      | Description               |
| ----------- | ------------------------- |
| Math.sin(x) | Sine of x (in radians)    |
| Math.cos(x) | Cosine of x (in radians)  |
| Math.tan(x) | Tangent of x (in radians) |

---

### 6. Using Math Results

* You can assign the result to a variable for reuse:

```javascript
var myNum = Math.sqrt(16);
console.log(myNum); // 4

var myNum2 = Math.pow(3, 4);
console.log(myNum2); // 81
```

* Using the Math object simplifies calculations, keeps code clean, and makes results reusable later.