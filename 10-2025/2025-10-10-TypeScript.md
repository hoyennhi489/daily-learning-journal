### **15. Functions – Explicit Return Types**

In TypeScript, you can explicitly specify the data type that a function will return (instead of letting TypeScript infer it automatically).
=> Syntax: place a colon “:” after the closing parenthesis of the parameters, then write the desired data type.

Example:

```ts
function createGreeting(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined; 
  // ❌ Error: Type 'undefined' is not assignable to type 'string'
}
```

TypeScript reports an error because:
• The function is declared to return a string
• But one branch returns undefined
=> This doesn’t match the string type.

**Syntax with arrow function:**

```ts
const createArrowGreeting = (name?: string): string => {
  if (name) {
    return `Hello, ${name}!`;
  }

  return undefined; // ❌ Same error
};
```

Both regular functions and arrow functions can have explicit return type annotations.

**Benefits of explicit return types:**

| Benefit                       | Explanation                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| Strict checking               | Ensures every return statement matches the declared type        |
| Readability & maintainability | Anyone reading the code knows exactly what the function returns |
| Early error detection         | TypeScript warns immediately when the return type is incorrect  |

### **16. Functions – Void Return Type**

In TypeScript, if a function doesn’t return any value, its return type must be `void`.

Example:

```ts
function logGreeting(name: string): void {
  console.log(`Hello, ${name}!`);
}
```

* This function prints a greeting but doesn’t have a return statement.
* Therefore, its return type is `void`.
* If you try `return "Hi!"` → TypeScript will throw an error because `"Hi!"` is a string.

**When to use `void`:**
Use `void` when:
• The function only performs actions (side effects) and doesn’t return data.
• Examples: logging, updating the UI, modifying global variables, etc.

Do **not** use `void` when:
• The function actually returns a value (string, number, boolean, etc.).

Example:

```ts
function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

makeFruitSalad('banana', 'pineapple');
```

### **17. Functions – Documentation Comments**

Unlike normal comments (`//` or `/* ... */`), documentation comments are written using `/** ... */` and are used to describe functions, classes, variables, or parameters in detail.

```ts
/**
 * This is a description comment for the function.
 */
```

**Structure of a documentation comment:**
A standard documentation comment usually looks like this:

```ts
/**
 * [Short description of the function’s purpose]
 *
 * @param [parameter_name] - [Parameter explanation]
 * @param [second_parameter_name] - [Explanation of the second parameter]
 * @returns [Explanation of the return value]
 */
```

**Example 1 — makeFruitSalad():**
This function doesn’t return any value; it only prints mixing instructions.

```ts
/**
 * Prints the instructions for mixing two fruits together to make a salad.
 *
 * @param fruit1 - Name of the first fruit.
 * @param fruit2 - Name of the second fruit.
 * @returns Does not return any value (void).
 */
function makeFruitSalad(fruit1: string, fruit2: string): void {
  console.log(`Mix the ${fruit1} with the ${fruit2}.`);
}

makeFruitSalad("apple", "banana");
```

Result:

```
Mix the apple with the banana.
```

**Example 2 — proclaim():**
This function prints a status message multiple times and doesn’t return anything.

```ts
/**
 * Prints the speaker's status, repeating it the specified number of times.
 *
 * @param status - The status to print (e.g., 'ready', 'not ready...').
 * @param repeat - Number of times to repeat the message.
 * @returns Does not return any value (void).
 */
function proclaim(status: string = 'not ready...', repeat: number = 1): void {
  for (let i = 0; i < repeat; i++) {
    console.log(`I'm ${status}`);
  }
}

proclaim("ready", 3);
```

Result:

```
I'm ready
I'm ready
I'm ready
```

**Benefits of Documentation Comments:**

* Shows tooltips when hovering over function names in VS Code.
* Helps others (or yourself later) quickly understand the purpose and usage of the function.
* Works well with documentation tools such as TypeDoc.

| Element      | Meaning                                                     |
| ------------ | ----------------------------------------------------------- |
| `/** ... */` | Start and end of a documentation block                      |
| `@param`     | Describes each parameter of the function                    |
| `@returns`   | Describes the function’s return value                       |
| Use when     | Writing functions with multiple parameters or complex logic |

---

### **18. ARRAYS – INTRODUCTION**

* An array is a collection of values of the same data type.
* All elements in an array must have the same type as declared.
* In JavaScript, arrays can hold multiple types, but TypeScript helps enforce consistent typing.

Example:

```ts
let firstArray = [1, 2, 3, 4];       // all numbers ✅
let secondArray = [5, '6', [7]];     // contains number, string, and array ❌ (not consistent)
```

=> `firstArray` is valid in TypeScript because all elements are `number[]`.
=> `secondArray` is valid in JavaScript, but not in TypeScript due to mixed types.

**Why type checking matters:**
Suppose you have an array `customersArray` storing customer names:

```ts
let customersArray = ['Alice', 'Bob', 3, 'Charlie'];
```

If one element isn’t a string (e.g., number 3), your program may crash when generating a report.

**Checkpoint 1: Check array elements**

```ts
function checkCustomersArray() {
  for (let el of customersArray) {
    if (typeof el !== 'string') {
      console.log(`Type error: ${el} should be a string!`);
    }
  }
}
checkCustomersArray();
```

Result:

```
Type error: 3 should be a string!
```

**Checkpoint 2: Prevent invalid data using `.push()`**

```ts
customersArray.push(42); // wrong type!
```

Solution: create a function that only allows strings:

```ts
function stringPush(val) {
  if (typeof val === 'string') {
    customersArray.push(val);
  } else {
    console.log(`Type error: ${val} is not a string!`);
  }
}
stringPush('David'); // ✅
stringPush(42);      // ❌
```

**Checkpoint 3: Remaining issue**
Someone can still assign a wrong value directly:

```ts
customersArray[4] = 4;  // ❌
```

=> This shows that manual type checking is tedious and error-prone.

**TypeScript advantage:**
You can define array element types from the start:

```ts
let customersArray: string[] = ['Alice', 'Bob', 'Charlie'];
customersArray.push(5); // ❌ Error immediately!
```

| Concept         | Description                                    |
| --------------- | ---------------------------------------------- |
| Array           | Collection of same-type elements               |
| JavaScript      | Allows mixed types in arrays                   |
| TypeScript      | Enforces element types                         |
| Manual checking | Use loop + typeof                              |
| TS solution     | Define array type: `let arr: string[] = [...]` |

### **19. ARRAYS – ARRAY TYPE ANNOTATIONS**

TypeScript allows you to specify the type of array elements by adding `[]` after the type.

Syntax:

```ts
let arrayName: dataType[] = [/* elements */];
```

Example:

```ts
let names: string[] = ['Danny', 'Samantha'];
```

→ `names` is an array containing only string values.

Alternative syntax using generics:

```ts
let names: Array<string> = ['Danny', 'Samantha'];
```

Both forms are equivalent:
• `string[]` → shorter and more common
• `Array<T>` → emphasizes generic type understanding

**Type errors:**

```ts
let names: string[] = [1, 2, 3]; // ❌ Type Error
```

**Invalid push:**

```ts
let names: string[] = ['Damien'];
names.push(666); // ❌ Type Error
```

Explanation: `names` is `string[]`, so only strings are allowed.


### **20. ARRAYS – MULTI-DIMENSIONAL ARRAYS**

Besides `string[]`, TypeScript supports:
• `number[]` (numbers only)
• `boolean[]` (true/false)
• Any custom type (objects, etc.)

**Multi-dimensional arrays:** arrays containing arrays of the same type.

Syntax:

```ts
let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];
```

`string[][]` means each element of the main array is a `string[]`.

Examples:

```ts
let stringArr: string[][] = [
  ['apple', 'banana'],
  ['cherry', 'date']
];

let numberArr: number[][] = [
  [1, 2],
  [3, 4, 5]
];

let booleanArr: boolean[][] = [
  [true, false],
  [false, true]
];
```

Empty arrays:

```ts
let names: string[] = [];
let numbers: number[] = [];
names.push('Isabella'); // ✅
numbers.push(30);       // ✅
```

| Concept                 | Explanation                     | Example                             |
| ----------------------- | ------------------------------- | ----------------------------------- |
| Homogeneous array       | All elements have the same type | `string[]`, `number[]`, `boolean[]` |
| Multi-dimensional array | Array of arrays                 | `string[][]`, `number[][]`          |
| Empty array             | Should include type annotation  | `let arr: string[] = [];`           |
| Adding elements         | Must match declared type        | `names.push('Anna');` ✅             |

Example:

```ts
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['fasting', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];

let bestMealPlan: string [][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean [][] = [bestBooleans, bestBooleans];
let numbersMulti: number [][][] = [ [[1],[2,3]], [[7],bestNumbers] ];
```

### **21. ARRAYS – TUPLES**

* Previously, arrays in TypeScript held elements of the same type.
* JavaScript allows mixed types in arrays, and TypeScript supports this through **Tuples**.

**Tuple:** an array with a fixed number of elements, each having a specific type at each position.

Example:

```ts
let ourTuple: [string, number, string, boolean] = ['Is', 7, 'our favorite number?', false];
```

* `ourTuple` has type `[string, number, string, boolean]`
* Elements:
  • string → 'Is'
  • number → 7
  • string → 'our favorite number?'
  • boolean → false

**21.1. Errors for incorrect type or length**

Example 1 – wrong number of elements:

```ts
let numbersTuple: [number, number, number] = [1, 2, 3, 4]; // ❌ Error
```

Example 2 – wrong types:

```ts
let mixedTuple: [number, string, boolean] = ['hi', 3, true]; // ❌ Error
```

The types and order must match exactly.

**21.2. Difference between Tuple and Array in TypeScript**

* In JavaScript: tuples act like arrays
  • Have `.length`
  • Can access/modify by index

However, TypeScript distinguishes them:

```ts
let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there', 'there'];

tup = ['there', 'there']; // ✅ valid
tup = arr;                // ❌ Error
```

| Concept       | Explanation                             | Example                                         |
| ------------- | --------------------------------------- | ----------------------------------------------- |
| Tuple         | Fixed-length array with specified types | `[string, number, boolean]`                     |
| Order matters | Types must be in correct order          | `[number, string]` ≠ `[string, number]`         |
| Array ≠ Tuple | Array = variable length, same type      | `string[]` vs `[string, string]`                |
| Fixed length  | Cannot add new elements                 | `tup[2] = value` ❌ if tuple has only 2 elements |