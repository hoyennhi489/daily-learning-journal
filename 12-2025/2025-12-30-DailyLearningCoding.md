# A DETAILED OVERVIEW OF DATA STRUCTURES

## 1. The Importance of Data Structures

Data structures are a core foundation of programming and are a topic that appears frequently in coding interviews.
From basic structures such as strings, Booleans, and arrays to more advanced structures like collections, graphs, trees, and heaps, all of them directly affect:

* Program performance
* System scalability
* Code stability and maintainability

Understanding the data being processed and choosing an appropriate data structure helps reduce program runtime and minimize potential errors.

## 2. The Concept of Data Structures

A data structure is a way of modeling data in order to:

* Store data efficiently in computer memory
* Organize data in an orderly manner
* Perform fast access and update operations

A data structure can represent simple or complex objects, depending on the needs of the application.

## 3. Mutable and Immutable

### 3.1. Immutable Data Structures

* Data cannot be changed after it is created
* Any modification operation creates a new copy
* Safer, with fewer bugs caused by unintended changes

Examples:

* Strings in many programming languages
* Tuples in Python

### 3.2. Mutable Data Structures

* Allow data to be modified directly
* Suitable for complex objects or large datasets
* Reduce the cost of creating copies

Examples:

* Lists, Arrays
* Dictionaries, Sets

Immutable structures should not always be chosen by default. The choice depends on:

* Data complexity
* Performance requirements
* Memory constraints

## 4. Classification of Data Structures by Storage Method

Data structures are commonly divided into two main groups based on how elements are organized in memory.

## 5. Linear Data Structures

### 5.1. Characteristics

* Elements are stored in a sequential order
* Each element (except the first) is linked to the previous element
* Easy to implement and easy to understand

### 5.2. Examples

* Array
* List
* Stack
* Queue

## 6. Data Types in Linear Structures

In some programming languages:

* Only one data type is allowed within a structure

  * Example: integer array, string array

In other languages:

* Multiple data types can be mixed within the same structure

Mixing data types increases flexibility but can easily cause logical errors, especially when performing operations such as addition, subtraction, or comparison.

## 7. Index and Element Access

* Each element in an array or list has an index
* The index is used to access any element in the structure

Important characteristics:

* Most programming languages use zero-based indexing
* `array[0]` is the first element
* `array[4]` is the fifth element

Accessing an index that exceeds the array bounds will cause a runtime error.

## 8. Length of Data Structures

Most programming languages support retrieving the length of an array or list:

* Java: `array.length`
* Python: `len(array)`

Knowing the length helps to:

* Traverse data safely
* Avoid out-of-bounds access errors

## 9. Data Structures as First-Class Objects

Data structures are considered first-class objects, meaning they:

* Can be assigned to variables
* Can be passed into functions as parameters
* Can be returned from functions

### 9.1. Reference Passing Issues

When passing an array or list into a function:

* Usually, only a reference is passed
* Changes made inside the function may affect the original data

This can lead to bugs that are difficult to detect.
A safer approach is to create a copy of the data structure before passing it into the function.

## 10. Memory Management and Memory Leaks

### 10.1. Memory Allocation and Deallocation

* Memory can be allocated dynamically
* If memory is not released when no longer needed, it will be wasted

### 10.2. Memory Leaks

A memory leak occurs when:

* Memory is continuously allocated
* Memory is not reclaimed after use

Consequences:

* Increased system resource consumption
* Slower program execution
* Potential application crashes

Many modern compilers and runtime environments provide automatic memory management, but careful programming is still essential.

## 11. Nonlinear Data Structures

### 11.1. Characteristics

* Elements are not arranged in a straight line
* Multiple branches and relationships can exist

### 11.2. Examples

* Tree
* Graph

### 11.3. Advantages

* Support natural hierarchical organization
* Enable fast querying and searching
* Suitable for data with complex relationships

---

# STRING DATA STRUCTURE

## 1. Concept of a String

A string is a fundamental data structure that appears in every programming language.
A string is an ordered sequence of characters or symbols, enclosed in single quotes (`' '`) or double quotes (`" "`) to represent text.

Examples:

* `"Hello World"`
* `'Data Structures'`

Most programming languages support:

* **ASCII characters**: each character usually occupies 1 byte of memory
* **Unicode**: supports multiple languages and may occupy multiple bytes depending on the encoding (UTF-8, UTF-16, etc.)

## 2. The Role of Strings in Programming

Strings are used to:

* Store and process text
* Display messages
* Handle input and output
* Analyze textual data from various sources

Strings form the foundation of many important fields, especially **Natural Language Processing (NLP)**.

## 3. String Representation and Processing in Programming Languages

Although syntax differs across languages, most support the following basic operations:

* Creating strings
* Copying strings
* Assigning strings to variables
* Comparing strings
* Searching for substrings
* Concatenating strings
* Handling collections of multiple strings

Some languages allow algebraic comparisons on strings, for example:

* Equality comparison (`==`) returning true or false
* Lexicographical order comparison (`<`, `>`)

Some languages allow variables to be embedded directly into strings (string interpolation), while others require variables to be placed inside special delimiters.

## 4. Escape Characters

Escape characters are used to represent special symbols inside a string, especially when those symbols might otherwise be misinterpreted by the syntax.

Example: inserting quotation marks into a string:

```
String = "the man said \"two more pints please\" to the barman"
```

The backslash (`\`) tells the compiler that the quotation mark is part of the content, not the end of the string.

Common escape characters include:

* `\"` : double quotation mark
* `\'` : single quotation mark
* `\n` : newline
* `\t` : tab

Implementation details may vary between languages, but the general principle is the same.

## 5. Strings in Natural Language Processing (NLP)

NLP is a field that makes extensive use of strings to:

* Analyze text
* Process human language
* Extract information from textual data

Strings may be read from:

* Social media
* PDF files
* Plain text documents
* Online forums

Differences in character encoding across these sources can cause subtle and hard-to-detect errors if not handled carefully.

## 6. Tokenization

Tokenization is the process of converting a string into an array of smaller strings based on one or more delimiters.

Examples:

* Splitting a paragraph into sentences using `.`
* Splitting a sentence into words using a space `" "`

### Example of Tokenization Issues

Consider the string:

```
At 3.30 I arrived at the store and spent 40,40 dollars.
```

Although this is a single sentence, the period and comma are used for:

* Time
* Monetary values

If a period is naively used as a delimiter, the sentence will be split incorrectly.
Therefore, tokenizing natural language text must be done with care.

## 7. Parsing Formatted Strings

When data is clearly formatted, processing becomes easier.

Examples:

* CSV (Comma-Separated Values)
* TSV (Tab-Separated Values)

During parsing:

* The string is split into an array
* Delimiters are removed
* The size of the array depends on the number of delimiters

Newline characters are also commonly treated as delimiters.

## 8. String Immutability

### 8.1. What Is an Immutable String?

An immutable string is a string whose content cannot be changed after it is created.
When a modification is needed, the system creates a new string instead of modifying the original one.

Many languages use immutable strings, such as:

* Java
* C#
* JavaScript
* Python
* Go

Some other languages allow mutable strings, such as Ruby or PHP.

### 8.2. Reasons for Using Immutable Strings

Programming languages use immutable strings for the following reasons:

* **Memory efficiency**
  Identical strings can share the same memory location instead of creating multiple copies.

* **Improved safety**
  Prevents strings from being modified unintentionally.

* **Efficient read operations**
  Especially suitable for applications that process large amounts of text with many repeated strings.

Example:
If multiple variables contain the value `"string"`, they can all point to the same memory location.
When changing the value to `"chuỗi"`:

* The original string is not modified
* A new string is created, and the variable points to the new memory location

### 8.3. Limitations of Immutable Strings

* If a program frequently modifies string content
* Each modification creates a new string

This can lead to increased memory usage and reduced performance in certain situations.

---

# INTEGER

## 1. Concept of Integers

An integer is a data type used to store numeric values without a fractional (decimal) part.
Integers can be:

* **Signed**: include negative numbers, positive numbers, and zero
* **Unsigned**: include only non-negative numbers (zero and positive numbers)

Examples:

* Signed: -10, -1, 0, 25
* Unsigned: 0, 5, 100

Integers cannot represent fractional values. When decimal values are required, other data types such as `float`, `double`, or `decimal` are used.

## 2. Representation of Integers in Computers

### 2.1 Binary Representation

In computers, all integers are stored in binary form (base-2), consisting only of bits 0 and 1.

Examples:

* 5 (decimal) → 00000101 (binary)
* 10 → 00001010

Common memory sizes for integers:

* 1 byte (8 bits)
* 2 bytes (16 bits)
* 4 bytes (32 bits)
* 8 bytes (64 bits)

The size depends on:

* The programming language
* The system architecture
* The intended use

### 2.2 Representation of Negative Integers

To distinguish between positive and negative numbers, computers need a mechanism to represent the sign.

**Sign-Magnitude Representation**

* The leftmost bit represents the sign:

  * 0 → positive
  * 1 → negative
* The remaining bits represent the absolute value

Example (4 bits):

| Value | Binary |
| ----- | ------ |
| +2    | 0010   |
| +1    | 0001   |
| +0    | 0000   |
| -0    | 1000   |
| -1    | 1001   |
| -2    | 1010   |

Disadvantages:

* Both +0 and -0 exist
* Arithmetic operations are complex
* Rarely used in modern systems

In practice, **Two’s Complement** is the most widely used representation, but this concept is usually not explored in depth when learning Front-End development.

## 3. Integers and Memory

### 3.1 Memory Allocation in Different Languages

Statically typed languages such as:

* C
* C++
* Rust
* Ada

allow developers to control the size of integers to optimize memory usage.

Examples in C/C++:

* `unsigned char` → 1 byte (0–255)
* `unsigned short int` → 2 bytes
* `int` → usually 4 bytes
* `long long` → 8 bytes

This is especially important in:

* Embedded systems
* Microcontrollers
* Devices with limited memory

### 3.2 Practical Example in Rust

Rust provides many explicit integer types:

* `u8` → 0 to 255 (1 byte)
* `i8` → -128 to 127
* `u16`, `i16`
* `u32`, `i32`
* `u64`, `i64`

In image processing:

* Each pixel often has a value from 0 to 255
* Using `u8` saves memory
* Improves processing performance

## 4. Integers in Front-End Languages

### 4.1 JavaScript and Python

High-level languages such as JavaScript and Python do not allow direct control over integer size.

* **JavaScript**:

  * Only one numeric type: `Number`
  * Follows the IEEE 754 standard (64-bit floating point)

* **Python**:

  * Integers can grow arbitrarily large

Advantages:

* Easy to learn
* Fewer errors
* No concern about small integer overflow

Disadvantages:

* Higher memory usage
* Not suitable for resource-constrained systems

For Front-End development, this trade-off is generally acceptable.

## 5. Integer Wrapper Classes in Java

Java provides two ways to work with integers:

### 5.1 Primitive Type

* `int`
* Uses 4 bytes
* Fast and memory-efficient

### 5.2 Wrapper Class `Integer`

* Wraps an `int` value into an object
* Provides many utility methods:

  * String-to-number conversion
  * Comparison
  * Retrieving minimum and maximum values

Characteristics:

* Immutable
* Thread-safe

Disadvantages:

* Uses more memory (around 16 bytes per object)
* Slower than `int`

## 6. When This Knowledge Matters for Front-End

In Front-End development:

* Byte-level memory optimization is not required
* Detailed numeric type selection is unnecessary

However, it is important to understand:

* The difference between integers and floating-point numbers
* JavaScript’s precision limitations
* Converting between strings and numbers from user input and APIs

Common example of an error:

```js
"10" + 1 // "101"
```

---

# Boolean and Conditional Statements in Programming

## 1. What Is Boolean?

Boolean is a data type that has only two possible values:

* **true**
* **false**

In programming, Boolean is used to:

* Make decisions
* Control the flow of program execution
* Determine whether a condition is true or false

Common real-life examples:

* True / false questions
* On / off switches
* Login success / failure

## 2. Boolean Expressions

A Boolean expression is an expression that evaluates to either `true` or `false`.

Examples:

* `5 > 3` → true
* `10 == 8` → false
* `age >= 18` → true or false depending on the value of `age`

Boolean expressions are the foundation of decision-making in code.

## 3. Relational Operators

Relational operators are used to compare values in Boolean expressions.

| Operator | Meaning                  |
| -------- | ------------------------ |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

Example:

```js
let score = 80;
score >= 50 // true
```

## 4. Conditional Statements

Conditional statements allow a program to execute different blocks of code depending on a Boolean condition.

Common conditional statements:

* `if`
* `else if`
* `else`
* `while`

Example (JavaScript / Front-End):

```js
if (right > wrong) {
    doTheRightThing();
} else if (wrong > right) {
    doTheWrongThing();
} else {
    keepResearching();
}
```

Explanation:

* If the first condition is true → the `if` block runs
* Otherwise, the `else if` condition is checked
* If all conditions are false → the `else` block runs

## 5. Logical Operators

Logical operators are used to combine multiple Boolean expressions.

| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `        |         | ` | OR |
| `&&`     | AND     |   |    |
| `!`      | NOT     |   |    |

Example:

```js
if (condition1 || condition2) {
    doActionOne();
} else if (condition1 && condition2) {
    doActionTwo();
} else if (!condition1) {
    doActionFour();
} else {
    waitForInstruction();
}
```

## 6. Real-World Examples (Front-End Related)

### Login Check

```js
if (isLoggedIn && hasPermission) {
    showDashboard();
} else {
    showLoginForm();
}
```

### Form Validation

```js
if (email !== "" && password.length >= 6) {
    submitForm();
}
```

## 7. Boolean in Systems and AI

Boolean logic is the foundation of:

* Electronic circuit design
* Basic AI logic
* Automated decision-making (robots, sensors)

Example:

* Robot vacuum cleaner:

  * If near an obstacle OR collision detected → change direction
  * If nothing is detected → continue moving

## 8. Conclusion

* Boolean has only `true` and `false`
* But when combined with:

  * Relational operators
  * Logical operators
  * Conditional statements

→ it can create very complex decision systems

Boolean is the backbone of programming and is especially important in:

* Front-End development (UI rendering, event handling)
* Back-End systems
* AI and automated systems

---

# ARRAY

## 1. What Is an Array?

An array is a data structure used to store multiple related values in a single variable.

Example:

```js
let numbers = [1, 2, 3, 4];
```

Instead of creating many separate variables, arrays help to:

* Manage data more easily
* Loop through and process data efficiently
* Reduce code duplication

## 2. Common Characteristics of Arrays

* Each element has an index
* Indexing starts at 0
* Elements are stored contiguously in memory (logically)
* Elements are accessed using:

```js
arrayName[index]
```

Example:

```js
numbers[0] // 1
numbers[3] // 4
```

If an index exceeds the array length → an error or `undefined` occurs.

## 3. Data Types in Arrays

### 3.1 Statically Typed Languages

Some languages require all elements to be of the same type:

* `int[]`
* `string[]`

### 3.2 Dynamically Typed Languages (JavaScript)

JavaScript allows mixing different data types in the same array:

```js
let mixed = [1, "hello", true, null];
```

This is flexible but can easily cause logical errors if not carefully controlled.

## 4. Array Initialization

### 4.1 Static Initialization

* Fixed size
* Less flexible
* Often stored on the stack

Example (static languages):

```java
int[] arr = new int[5];
```

### 4.2 Dynamic Initialization

* Flexible size
* Usually stored on the heap
* Common in JavaScript

Example:

```js
let arr = [];
arr.push(10);
arr.push(20);
```

## 5. Iterating Over an Array

Array iteration is very common in Front-End development.

### 5.1 Basic `for` Loop

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### 5.2 Why Use `.length`?

* Prevents index-out-of-bounds errors
* Keeps code safe when the array size changes

Ways to get array length:

* `array.length`
* `len(array)` (Python)
* `array.size()` (Java, C++ containers)

## 6. Array Memory Management

### 6.1 Stack Memory

* Exists only during function execution
* Destroyed when the function ends
* Fast but limited

### 6.2 Heap Memory

* Persists longer
* Can be shared across functions
* Flexible but slower than stack

In JavaScript:

* Arrays always reside in the heap
* Variables only store references

## 7. Shallow Copy vs Deep Copy

### 7.1 Shallow Copy

Only copies the reference, not the actual array.

```js
let a = [1, 2, 3];
let b = a;

b[0] = 99;
console.log(a); // [99, 2, 3]
```

→ Changing one variable affects the other.

### 7.2 Deep Copy

Creates a completely new array in memory.

```js
let a = [1, 2, 3];
let b = [...a];

b[0] = 99;
console.log(a); // [1, 2, 3]
```

→ Safer, but uses more memory.

## 8. Two-Dimensional Arrays (Matrices)

### 8.1 Concept

A two-dimensional array is an array of arrays.

* Represents tables
* Row–column data structure
* Accessed using two indices:

```js
matrix[row][column]
```

### 8.2 Example of a 2D Array

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
```

Accessing elements:

```js
matrix[0][1] // 2
matrix[1][2] // 6
```

### 8.3 Iterating Over a 2D Array

```js
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
```

Always use `matrix[i].length` to:

* Avoid out-of-bounds errors
* Support non-uniform (jagged) arrays

## 9. Applications of Arrays in Front-End

* Rendering lists (`map`)
* State management (React)
* Storing form data
* Processing API responses
* Tables, menus, galleries, shopping carts

Example:

```js
users.map(user => {
  return `<li>${user.name}</li>`;
});
```

---

## OBJECT

### 1. General Introduction

An **Object** is one of the most important concepts in modern programming, especially in **Object-Oriented Programming (OOP)**.
Most Front-End frameworks (React, Vue, Angular) rely heavily on objects.

An object helps to:

* Group related data and behavior into a single unit
* Reduce code duplication
* Organize programs clearly and make them easier to extend

### 2. Definition of an Object

An object is a programming structure that consists of two parts:

#### 2.1. State (Attributes / Properties)

* Data that describes the object
* Examples: name, age, speed, login status

#### 2.2. Behavior (Methods)

* Actions that the object can perform
* Represented by methods

**Example:**

```javascript
let person = {
  name: "An",
  age: 20,
  run() {
    console.log("Running...");
  }
};
```

* `name`, `age` → state
* `run()` → behavior

### 3. Class and Object

#### 3.1. What is a Class?

A **class** is a blueprint for creating objects.

* A class defines:

  * What properties an object will have
  * What methods an object will have
* An **object** is an instance of a class

#### 3.2. Example in JavaScript (ES6)

```javascript
class Player {
  constructor(agility, speed, fitness) {
    this.agility = agility;
    this.speed = speed;
    this.fitness = fitness;
  }

  kick() {
    console.log("Kick the ball");
  }

  setFitness(value) {
    this.fitness = value;
  }
}
```

Creating objects from the class:

```javascript
let player1 = new Player(54, 88, 90);
let player2 = new Player(90, 64, 83);
```

* `player1` and `player2` are two different objects
* They share the same structure but have separate data

### 4. Instance Variables

Instance variables are properties that:

* Belong to a specific object
* Are not shared between objects

```javascript
player1.fitness = 80;
```

This change:

* Affects only `player1`
* Does not affect `player2`

This is a key concept that allows code to model the real world.

### 5. Methods

A **method** is a function inside an object or class, used to:

* Manipulate the object’s data
* Represent behavior

**Example:**

```javascript
player1.kick();
player1.setFitness(75);
```

### 6. Getter and Setter

Getters and setters are used to:

* Control how data is read and written
* Protect the object’s state

**Example:**

```javascript
class Player {
  getFitness() {
    return this.fitness;
  }

  setFitness(value) {
    if (value >= 0) {
      this.fitness = value;
    }
  }
}
```

### 7. Inheritance

Inheritance allows:

* A child class to reuse properties and methods from a parent class
* Avoiding code duplication

**Example:**

```javascript
class Human {
  run() {
    console.log("Running");
  }
}

class Player extends Human {
  kick() {
    console.log("Kick ball");
  }
}

class Referee extends Human {
  whistle() {
    console.log("Whistle");
  }
}
```

* `Player` and `Referee` inherit from `Human`
* The `run()` method does not need to be rewritten

### 8. Polymorphism

Polymorphism means: **one behavior, many implementations**.

**Example:**

```javascript
class Shape {
  area() {}
}

class Square extends Shape {
  area() {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
```

* The `area()` method is called in the same way
* Each object handles it differently

Polymorphism helps to:

* Make code flexible
* Extend functionality without modifying existing code

### 9. Objects in Front-End Development

In Front-End development, objects appear everywhere:

* State in React
* Props
* API responses
* Component configuration
* Event objects

**Example:**

```javascript
const user = {
  id: 1,
  name: "Lan",
  isLoggedIn: true
};
```

Most UI data is modeled using objects.

---

## Lists and Sets in Programming

### 1. General Introduction

When programming, one of the most common problems is how to store data appropriately. Choosing the right data structure helps a program run faster, be easier to maintain, and have fewer bugs.

In this lesson, we study two very important and commonly used data structures found in many programming languages, including JavaScript used in Front-End development:

* **List**
* **Set**

Each structure has its own advantages and limitations, and is suitable for different use cases.

### 2. What is a List?

#### 2.1 Concept of a List

A **list** is a collection of elements used to store multiple values within a single structure.

In most programming languages, a list is represented as an object, meaning:

* It does not only store data
* It also provides built-in methods to process data

Examples of common operations:

* Sorting (`sort`)
* Adding elements
* Removing elements
* Iterating through the list

In JavaScript (Front-End), a list is typically represented by an **Array**.

#### 2.2 Data Types in a List

Depending on the programming language:

* A list may contain only one data type (string, number, float, etc.)
* Or it may contain multiple data types (as in JavaScript)

Conceptually, a list is a **container**—a place that holds elements.

### 3. Ways to Implement a List

Lists are commonly implemented in two main ways:

#### 3.1 Array-based List

**Characteristics**

* Elements are stored contiguously in memory
* Have a well-defined order
* Very fast access by index

**Size considerations**

* Some languages require specifying the initial size
* Some languages allow automatic resizing

However, automatic resizing is not free:

* When the array is full, the system must:

  * Create a new, larger array
  * Copy all existing data into it

**Consequences**

* If the list grows many times inside a loop
* The computational cost can be very high

→ In cases where large data is known in advance, it is better to initialize the list with a sufficiently large size from the beginning.

#### 3.2 Linked List

**Structure**
Each element (node) consists of:

* Data
* A pointer to the next element

A linked list has:

* **Head**: the first element
* **Tail**: the last element

**How it works**

* Starts as an empty list
* When adding an element:

  * Create a new node
  * Link the previous node to the new node

**Advantages**

* Very fast size expansion
* Suitable for large data
* No need to copy the entire dataset

**Disadvantages**

* Uses extra memory for pointers
* Slower random access compared to arrays

### 4. What is a Set?

#### 4.1 Concept of a Set

A **set** is similar to a list but has several important differences:

* No guaranteed order
* Contains only unique elements
* Does not allow duplicate data

If a value that already exists is added to a set:

* The data does not change

In JavaScript, `Set` is commonly used to:

* Remove duplicate values
* Perform very fast existence checks

#### 4.2 Characteristics of a Set

* Element order is not guaranteed
* When printing a set:

  * The order may differ from the insertion order
* Elements in a set:

  * Cannot be modified directly
  * To change a value, it must be removed and added again

### 5. Performance of Set and Hashing

#### 5.1 Why is Set Lookup So Fast?

A set uses a **hash table** to store data.

Process:

1. Data is passed into a hash function
2. The hash function produces a fixed value
3. The data is stored at the position corresponding to that value

→ As a result, searching in a set has a time complexity of:

* **O(1)** (very fast)

#### 5.2 Comparison with List

* **List**:

  * Must scan elements one by one
  * Time complexity: **O(n)**
* **Set**:

  * Based on hashing
  * No need to traverse all elements
  * Time complexity: **O(1)**

#### 5.3 Collision Problem

When the dataset becomes very large:

* Two different values may produce the same hash
* This is called a **collision**

Consequences:

* Performance degrades
* The set is no longer perfectly fast

→ With extremely large datasets, sets are still fast, but not theoretically perfect.

### 6. When to Use a List vs. a Set?

**Use a List when:**

* Order matters
* Index-based access is needed
* Duplicate data is allowed
* Displaying UI lists (menus, list items, tables, etc.)

**Use a Set when:**

* Only unique values are needed
* Fast existence checking is required
* Removing duplicate data
* Logic processing rather than display

### 7. Conclusion

Lists and sets are extremely important data structures, especially in Front-End development:

* **List (Array)** is suitable for UI display and manipulation
* **Set** is suitable for logic processing and performance optimization

Understanding the strengths and weaknesses of each helps in choosing the right tool for each specific problem.

---

## Stack and Queue in Data Structures

### 1. Overview of Stack and Queue

Stack and queue are two very common **abstract data structures** in programming. They can be implemented in various ways depending on the programming language, but they all follow the same core principles for adding and removing elements.

Unlike lists or arrays (which allow random access), stacks and queues use **sequential access**.

This approach helps to:

* Strictly control data processing order
* Simplify logic in many real-world problems

### 2. Stack

#### 2.1 Concept of Stack

A **stack** is a linear data structure where elements are stacked on top of each other.

Key characteristics:

* Elements in the middle cannot be accessed
* Operations are performed only at the top of the stack

Operating principle:

* **FILO (First-In, Last-Out)**
* Also known as **LIFO (Last-In, First-Out)**

This means:

* The most recently added element is removed first

#### 2.2 Real-World Example of Stack

A very familiar example is **Ctrl + Z (Undo)**:

* The most recent action is undone first
* Pressing Ctrl + Z multiple times reverses actions step by step

**Ctrl + Y (Redo)** can be seen as:

* Pushing actions back onto the stack

#### 2.3 Basic Stack Operations

A stack usually has only a small number of operations:

| Method  | Meaning                                  |
| ------- | ---------------------------------------- |
| push    | Add an element to the top of the stack   |
| pop     | Remove and return the top element        |
| peek    | View the top element without removing it |
| isEmpty | Check if the stack is empty              |
| isFull  | Check if the stack is full               |

Notes:

* `push` and `pop` modify the stack
* `peek` does not modify the stack

The concept of **Stack Overflow** comes from:

* The stack being full while still attempting to push a new element

#### 2.4 Stack Example

Example: a deck of 52 cards

* All cards are stacked together
* Each time a card is dealt, the top card is taken
* This makes managing the deck state very simple

### 3. Queue

#### 3.1 Concept of Queue

A **queue** is also a linear data structure and shares some similarities with a stack in terms of operations, but its working principle is completely different.

Principle:

* **FIFO (First-In, First-Out)**
* The first element added is the first to be processed

#### 3.2 Real-World Example of Queue

A very common example:

* A line of people waiting to buy fast food
* The first person in line is served first
* People who arrive later stand at the end of the line

#### 3.3 How a Queue Works

* Elements are added at the rear of the queue
* Elements are removed from the front of the queue

In other words:

* The removed element is the one that was added earliest

#### 3.4 Example in Computer Science

**Load Balancing Systems**:

* Tasks are placed into a queue in the order they arrive
* When a server becomes free:

  * It takes the first task in the queue to process
* Ensures fairness and efficiency

### 4. Comparison Between Stack and Queue

| Criteria            | Stack         | Queue                          |
| ------------------- | ------------- | ------------------------------ |
| Principle           | LIFO / FILO   | FIFO                           |
| Operation position  | Top           | Front and rear                 |
| Real-world examples | Undo, history | Waiting lines, task processing |
| Order control       | Reverse order | Chronological order            |


### 5. When to Use Stack or Queue?

**Use Stack when:**

* Processing in reverse order is needed
* Undo / Redo functionality
* Tree traversal, graph traversal
* Managing action history

**Use Queue when:**

* Processing in arrival order is required
* Task queues
* Asynchronous processing
* Server systems, requests, events