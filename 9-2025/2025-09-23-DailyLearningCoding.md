# TYPESCRIPT

## 1. JavaScript & TypeScript

### 1.1. JavaScript

* Released: 1995, designed as a lightweight scripting language for the web.
* 1999: Started supporting dynamic web, but only became popular from 2005.
* Characteristics:

  * Flexible, easy to learn, suitable for small applications.
  * Not strict → easily causes errors in large projects (hundreds/thousands of files).
  * No warning when a code change breaks something elsewhere.

### 1.2. Limitations of JavaScript

* Difficult to manage in large-scale applications.
* Leads to many hard-to-detect runtime errors.

### 1.3. TypeScript

* Developed by Microsoft, released in 2012.
* Goal: Combine JavaScript’s flexibility with the strictness of typed languages.
* Key features:

  * Adds a type system.
  * Helps detect errors early, clarifies structure, supports code refactoring.
  * Adds new JS features (arrow functions, classes…) before JS officially had them.

### 1.4. Current Role

* One of the most loved programming languages worldwide.
* Used in many large projects (Angular, Webpack, Amazon, Google…).
* Encouraged by coding education platforms (like Codecademy).

👉 Summary:

* **JavaScript** = easy to learn, flexible, but loose.
* **TypeScript** = JavaScript + type system + powerful tools → safer, maintainable code, suitable for large projects.

## 2. TypeScript Setup

* Install libraries:

```bash
npm install -g typescript@4.8.3 ts-node@10.9.1
```

* Check TypeScript Compiler version:

```bash
tsc -v
```

Expected result: `Version 4.8.3`

* If error occurs when running `tsc`:

```
'tsc' is not recognized as an internal or external command,
operable program or batch file.
```

Solutions:

* Use Git Bash instead of CMD.
* Close CMD, then reopen it (to update PATH).
* If it still doesn’t work, set up environment variable (PATH) for your machine.
  👉 Detailed instructions available on StackOverflow.

## 3. What is TypeScript?

### 3.1. Definition

* TypeScript = JavaScript + Type System.
* A superset of JavaScript: includes all traditional JS features, plus new ones.

### 3.2. How to use

* Write code in `.ts` files.
* Run through TypeScript Compiler (`tsc`):

  * Checks for errors.
  * If valid → compiles into JavaScript (`.js`).
* TypeScript code often looks identical to JavaScript after compilation.

### 3.3. Example

**TypeScript (input):**

```ts
let firstName = 'Anders';
```

**JavaScript (output):**

```js
let firstName = 'Anders';
```

👉 100% identical.

### 3.4. Significance

* Helps detect errors early.
* Makes code more understandable and clear.
* Especially useful in large projects.

👉 Summary:
TypeScript helps us write JavaScript more safely, with error checking, while still running as normal JS.

## 4. Working with TypeScript & JavaScript

* **TypeScript:** `.ts` files
* **JavaScript:** `.js` files (after compiled from `.ts`)

### 4.1. Compile TypeScript

Use command:

```bash
tsc index.ts
```

👉 Creates a corresponding `index.js` file.
👉 If code has errors, the compiler will report them immediately.

### 4.2. Run JavaScript file

Use command:

```bash
node index.js
```

👉 Executes code with Node.js.

### 4.3. Check created files

Use command:

```bash
ls
```

To see if `index.js` exists in the folder.

**Summary:**

* Write code in `index.ts`
* Compile: `tsc index.ts` → generates `index.js`
* Run code: `node index.js`

## 5. Type Inference

### 5.1. JavaScript

* JS allows assigning any value to a variable (flexible).
* But when a variable is assigned multiple types → can cause confusion or errors.

### 5.2. TypeScript

* When a variable is declared with an initial value, TS automatically infers its type.
* That variable cannot be reassigned to a different type.
* This is called **Type Inference**.

### 5.3. Basic Primitive Types

* `boolean`
* `number`
* `null`
* `string`
* `undefined`

**Incorrect example:**

```ts
let order = 'first';  // order has type string
order = 1;            // ❌ Error: Type 'number' is not assignable to type 'string'
```

**Correct example:**

```ts
let order = 'first';  // order has type string
order = '1';          // ✅ still a string
```

**Reminder:**

* TypeScript automatically infers type from the initial value.
* A variable cannot later change to a different type.

## TypeScript Exercise: Fixing Type Errors

**Original buggy code:**

```ts
let aged = true;
let realAge = 0;

if (aged) {
  realAge = '4 years';   // ❌ Error: string assigned to number
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);
```

**Runtime result:** `NaN years` (incorrect).

**Error explanation:**

* Variable `realAge` was initialized with `0` → type `number`.
* Later assigned `'4 years'` (string) → TypeScript reports an error.
* When multiplying `string * 7` → result is `NaN`.

**Fixed code:**

```ts
let aged = true;
let realAge = 0;

if (aged) {
  realAge = 4;   // ✅ Use number instead of string
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);
```

**Correct result:** `28 years`

**Key takeaways:**

* TypeScript has a type system.
* `number` and `string` cannot replace each other.
* For calculations → use `number`.
* For displaying text like `"4 years"` → use `string`.