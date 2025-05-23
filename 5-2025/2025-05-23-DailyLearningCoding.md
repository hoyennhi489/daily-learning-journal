**JAVASCRIPT**

**12. ES6 and Some Concepts in JavaScript**

**12.1. Strict Mode**: A special mode in JavaScript (introduced in ES5) that helps detect errors and avoid unpredictable behavior in code.

  **How to enable:**
+ Whole file:
```javascript
'use strict';
// Code below applies strict mode
```

+ Inside a function:
```javascript
function myFunc() {
  'use strict';
  // Only this function uses strict mode
}
```

+ Automatically enabled in: ES6 Modules, Classes

**Reasons to use:**

+ Prevent unintended global variables
```javascript
'use strict';
name = "John"; // ❌ ReferenceError
```

+ Disallow assigning values to non-writable keywords (read-only)  
```javascript
'use strict';
undefined = 5; // ❌ TypeError
```

+ Disallow deleting non-deletable properties  
```javascript
'use strict';
delete Object.prototype; // ❌ TypeError
```

+ Forbid octal literals  
```javascript
'use strict';
console.log(015); // ❌ SyntaxError
console.log(0o15); // ✅ OK (decimal 13)
```

**12.2. Scope**: refers to the area in which a variable is declared and accessible.

* There are 4 main types of scope:

| Tên Scope      | Mô tả ngắn                                    |
|----------------|----------------------------------------------|
| Block Scope    | Bên trong cặp dấu `{}`                        |
| Function Scope | Trong một hàm                                |
| Lexical Scope  | Phụ thuộc vào nơi hàm được định nghĩa (not gọi) |
| Global Scope   | Ngoài tất cả các hàm, có thể truy cập ở mọi nơi |

**12.2.1. Block Scope (let, const)**: Variables declared using `let` or `const` only exist within the current {} block.

```javascript
{
  const name = 'Easy Frontend';
}
console.log(name); // runtime error: name is not defined
```

* Explanation: The `name` variable is declared inside a block using `const`, so it only exists inside that block. Calling `console.log(name)` outside results in an error.

```javascript
{
  {
    const name = 'Easy Frontend';
  }
  console.log(name); // runtime error: name is not defined
}
```

* Explanation: Even with nested blocks, `name` only exists in the inner block, so `console.log(name)` outside causes an error.

```javascript
if (n > 10) {
  const name = 'Easy Frontend';
}
console.log(name); // runtime error: name is not defined
```

* Explanation: Even if `n > 10` is true, the variable only exists inside the `if` block and is not accessible outside.

```javascript
for (let i = 0; i < 10; i++) {
  const name = 'Easy Frontend';
}
console.log(name); // runtime error: name is not defined
```

* Explanation: On each iteration, `name` is re-declared inside the loop block, so it doesn’t exist outside.

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 5 === 0) {
    const isDivisibleToFive = true;
  }
  console.log(isDivisibleToFive); // ???
}
console.log(isDivisibleToFive); // ???
```

* Inside the for loop, `isDivisibleToFive` is declared using `const` inside the `if` block, so it only exists inside that `if`.
* When `console.log(isDivisibleToFive)` is outside the `if` block, it causes a ReferenceError, regardless of whether `i % 5 === 0`.
* On the last line, outside the entire loop, `isDivisibleToFive` is not defined → error.

→ Summary: Variables declared using `const` or `let` only exist within the block `{}` they are declared in and cannot be accessed outside. This differs from `var`, which has function or global scope (if not enclosed in a function).

**12.2.2. Function Scope**: Variables only exist within that specific function and are inaccessible from outside.

```javascript
function sayHello() {
  const name = 'Easy Frontend';
  console.log(name); // 'Easy Frontend'

  function print() {
    const language = 'en';
    console.log(language); // 'en'
  }

  print();
  console.log(language);
  // ReferenceError: language is not defined
}

sayHello();
console.log(name);
// ReferenceError: name is not defined
```

• Variables declared with `const` or `let` only exist within the block or function they are declared in.
• You cannot access local variables from outside the function or block.
• This is an important principle to avoid variable name collisions and increase code safety.

**12.2.3. Lexical Scope (Static Scope)**: A function can access variables in the scope where it was defined, not where it is called.

```javascript
const name = 'Global';

function outer() {
  function inner() {
    console.log(name); // ✅ 'Outer' because it's defined inside `outer`
  }

  return inner;
}

const fn = outer();
fn(); // ✅ still remembers the `name` variable in outer's scope
```

→ This is the foundation of **Closures**.

* A closure is when a function "remembers" the scope where it was declared, even after that scope has ended.

- Even though `outer()` has finished, `inner()` still keeps a "connection" to `outer()`’s scope – that’s what creates a closure.
- The variable `name = 'Outer'` is not lost because `inner()` still references it.

**12.2.4. Global Scope:**

* Global scope is where a variable is declared outside any function.
* Variables in global scope can be accessed from anywhere in the program (unless shadowed by a local variable with the same name).

```javascript
let channel = "Easy Frontend";
console.log(channel); // Accessible everywhere

window.channel;     // in browser
global.channel;     // in Node.js
globalThis.channel; // ES2020 works everywhere
```

In JavaScript, there’s always a “global object” – it holds global functions, variables, etc. This object has different names in different environments:

| Environment         | Name of Global Object |
| ------------------- | --------------------- |
| Browser             | window                |
| Node.js             | global                |
| Web Worker          | self                  |
| Everywhere (ES2020) | globalThis            |

```javascript
// Method 1: Using var (automatically attaches to global object)
var site = 'easyfrontend.com';
console.log(window.site); // In browser
console.log(globalThis.site); // Always works

// Method 2: Directly attach to globalThis
globalThis.channel = 'Easy Frontend';
console.log(channel); // Accessible from anywhere
```

**Note:**

| Declaration Method  | Attached to Global Object? |
| ------------------- | -------------------------- |
| var                 | ✅ Yes                      |
| let / const         | ❌ No                       |
| globalThis.name = … | ✅ Yes                      |

**12.2.5. Scope Chain**
• When you access a variable inside a function, JavaScript looks for that variable in the current scope first.
• If not found, it moves up to the parent scope, and so on, up to the global scope.
• This search process is called the “scope chain”.

```javascript
const fullName = "Easy"; // Global variable

function profile() {
  const fullName = "Frontend"; // Variable in profile (parent of sayName)

  function sayName() {
    const fullName = "Boooom"; // Variable in sayName (parent of writeName)

    function writeName() {
      return fullName; // Gets the nearest fullName in the scope chain
    }

    return writeName();
  }

  return sayName();
}

console.log(profile()); // Result?
```

→ When `writeName()` runs, it looks for `fullName` in its own scope → not found.
→ Then it looks in `sayName()` → finds `const fullName = "Boooom"` → uses that value.
→ So `writeName()` returns `"Boooom"`.
→ Final result of `profile()` is `"Boooom"`.

**12.3. Hoisting in JavaScript**

* Hoisting is a mechanism in JavaScript where the compiler automatically “lifts” variable and function declarations to the top of their current scope before execution.
* Only **declarations** are hoisted, not **initializations**.

**12.3.1. Hoisting with Variables**

* During execution, JavaScript moves variable declarations to the top of their scope before running the code.

| Variable Type | Hoisted (Declaration) | Initialization Value | Scope           | Behavior when accessed before declaration |
| ------------- | --------------------- | -------------------- | --------------- | ----------------------------------------- |
| var           | Yes                   | undefined            | function/global | Returns undefined, no error               |
| let           | No (TDZ)              | N/A                  | block           | ReferenceError (in Temporal Dead Zone)    |
| const         | No (TDZ)              | N/A                  | block           | ReferenceError (TDZ)                      |

**Example:**

* `var` hoisted:

```javascript
console.log(a); // undefined (not an error)
var a = 10;
console.log(a); // 10
```

* JS compiler hoists `var a;` to the top (declaration only).
* When it reaches `console.log(a)`, the variable is declared but not initialized → returns `undefined`.

- `let` and `const` are not accessible before declaration (technically hoisted but in TDZ):

```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
```

* `let` and `const` are trapped in a **Temporal Dead Zone (TDZ)** from the beginning of the block until their actual declaration.
* Accessing them in the TDZ causes a ReferenceError.

**12.3.2. Hoisting with Functions**

* **Function Declaration**: Entire function is hoisted, can be called before it's defined.

```javascript
sayHello(); // works

function sayHello() {
  console.log('Hello!');
}
```

* **Function Expression**: Only the variable is hoisted (as `undefined` if using `var`), not the function itself.

```javascript
sum(1, 2); // ❌ TypeError: sum is not a function

var sum = function (a, b) {
  return a + b;
};

sum(1, 2); // ✅ 3
```

**Comparison: var, let, const**

| Feature                            | var             | let           | const         |
| ---------------------------------- | --------------- | ------------- | ------------- |
| Redeclaration in same scope        | ✅ Allowed       | ❌ Not allowed | ❌ Not allowed |
| Reassignment                       | ✅ Allowed       | ✅ Allowed     | ❌ Not allowed |
| Scope                              | function/global | block/global  | block/global  |
| Hoisting                           | ✅ (undefined)   | ❌ (TDZ)       | ❌ (TDZ)       |
| Part of global object (in browser) | ✅ Yes           | ❌ No          | ❌ No          |

```javascript
var channelName = '';
var channelName = 'Easy Frontend'; // ✅ Works
// var allows redeclaration in the same scope → no error

const channelName = '';
const channelName = 'Easy Frontend';
// ❌ Error: Identifier 'channelName' has already been declared
// const does not allow redeclaration → SyntaxError

let channelName = '';
let channelName = 'Easy Frontend';
// ❌ Error: Identifier 'channelName' has already been declared
// let also does not allow redeclaration in the same scope
```

**Function vs Block Scope:**

```javascript
function sayHello() {
  {
    const language = 'en'; // Only usable inside this block {}
    var message = 'hello'; // Usable throughout the function
  }

  console.log(language); // ❌ Error: language is not defined
  console.log(message);  // ✅ 'hello'
}
```

**Do let and const get hoisted? YES — but differently than var.**
The difference is the **Temporal Dead Zone (TDZ)**:
• When a `let` or `const` variable is declared, it is hoisted to the top of the block scope (like `var`).
• However, unlike `var`, you cannot access them before the actual declaration line.
• The period from the top of the block to the actual declaration is called the TDZ.
• Accessing them during the TDZ → ReferenceError.

```javascript
// Using variable `a` before it’s declared with `let`
// `a` is hoisted but NOT initialized → error
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

// Using variable `b` before it’s declared with `const`
// `b` is hoisted but NOT initialized → error
console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;

// Variable `c` is hoisted and automatically initialized to undefined
console.log(c); // undefined
var c = 30;
```

```javascript
/*
SUMMARY:
- var: hoisted + initialized to undefined → can be used before assignment
- let & const: hoisted but NOT initialized → using before causes error
*/
```

❓ "Do let and const get hoisted?"
✅ "Yes, but differently from var — they are in the Temporal Dead Zone (TDZ), so you can't use them before they are declared."