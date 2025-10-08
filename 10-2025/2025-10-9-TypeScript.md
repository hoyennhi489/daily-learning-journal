### 10. Functions – Introduction (TypeScript / JavaScript)

#### 10.1. Functions in JavaScript

When declaring a function in JavaScript, we expect it to be called with the correct **data types** for its parameters.
=> However, JavaScript is very flexible with types, so it does **not** perform type checking when calling a function.

* **Example: The problem when not checking data types**

```js
function printLengthOfText(text) {
  console.log(text.length);
}

printLengthOfText(3); // Output: undefined
```

* `3` is a number, it doesn’t have a `.length` property, so the result is `undefined`.
* No error is thrown, but the program behaves incorrectly.

- **Handling type errors in traditional JavaScript**
  JS developers often manually check types and throw errors if they’re wrong:

```js
function printLengthOfText(text) {
  if (typeof text !== 'string') {
    throw new Error('Argument is not a string!');
  }
  console.log(text.length);
}

printLengthOfText(3); // Error: Argument is not a string!
```

* **Advantages:** Early error detection.
* **Disadvantages:**

  * Verbose and repetitive.
  * Must manually add checks in every function.

#### 10.2. How TypeScript helps

TypeScript detects type errors **as you write code**, before running it.
=> Therefore, such type errors are prevented early.

**PRACTICE – Fixing data type errors in code**

```js
// Function 1: printOperations()
// Check whether both parameters are numbers
function printOperations(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers!');
  }

  // If valid, print the sum and quotient
  console.log(a + b, a / b);
}

// Call printOperations()
// Expected output: 12 1
printOperations(6, 6);

// Function 2: exclaim()
// Print the name with "!" repeated a given number of times
function exclaim(name, count) {
  for (let i = 0; i < count; i += 1) {
    console.log(`${name}!`);
  }
}

// 🧪 Call exclaim()
// Print 'Muriel!' 6 times
exclaim('Muriel', 6);
```

**How to run:**

* Save this code in a file named `index.js`
* Open the terminal in the folder containing the file
* Run:

```
node index.js
```

**Output:**

```
12 1
Muriel!
Muriel!
Muriel!
Muriel!
Muriel!
Muriel!
```

### 11. Functions – Parameter Type Annotations

#### 11.1. Type Annotations for Parameters

In TypeScript, you can declare parameter types just like variables:

```ts
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet('Katz');  // ✅ OK
greet(1337);    // ❌ Error: 1337 is not a string
```

* **Syntax:** parameterName: type
* Helps TypeScript catch type errors **before running the code**.

#### 11.2. When type is not declared

If you don’t specify a type annotation, TypeScript treats the parameter as **any** (it can take any value):

```ts
function printKeyValue(key: string, value) {
  console.log(`${key}: ${value}`);
}

printKeyValue('Courage', 1337);    // ✅ Output: Courage: 1337
printKeyValue('Mood', 'scared');   // ✅ Output: Mood: scared
```

→ `value` has no type annotation → it can accept numbers, strings, or any type.

**Example:**

```ts
function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled('Hiya', 5);
```

* **Function triple:**

  * `value: number` → must be a number
  * Returns `value * 3`
  * Example: `triple(5)` → 15

* **Function greetTripled:**

  * `greeting: string` → must be a string
  * `value: number` → must be a number
  * Calls `triple(value)` to get the tripled value
  * Prints: `"Hiya, 15!"`

**Note:** If called incorrectly, e.g. `greetTripled(5, 'Hiya')`,
TypeScript reports an error before running the code → preventing runtime bugs.

### 12. Functions – Optional Parameters

#### 12.1. Optional Parameters

In TypeScript, by default, if you don’t pass all parameters, it throws an error:

```ts
function greet(name: string) {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}

greet('Anders'); // ✅ Hello, Anders!
greet();         // ❌ Error: Expected 1 arguments, but got 0
```

Although JavaScript still runs (`name` will be `undefined`), TypeScript **requires** all parameters to be passed.

#### 12.2. Making parameters optional

* Add a `?` after the parameter name:

```ts
function greet(name?: string) {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}

greet('Anders'); // Hello, Anders!
greet();         // Hello, Anonymous!
```

* `name?: string` → parameter can be either `string` or `undefined`.
* When omitted, the default `|| 'Anonymous'` is used.

**Example:** when calling `proclaim()` without an argument, it should print `"I'm not ready..."`

```ts
function proclaim(status?: string) {
  console.log(status || "I'm not ready...");
}

// Test calls:
proclaim("All set!");  // Output: All set!
proclaim();             // Output: I'm not ready...
```

* `status?: string` → optional parameter
* If not passed, `status` is `undefined` → `"I'm not ready..."` is used.

**Notes:**

* Optional parameters must always come **after required ones**.
* You can combine optional parameters with **default values** for cleaner code:

```ts
function proclaim(status: string = "I'm not ready...") {
  console.log(status);
}
```

→ When calling `proclaim()`, it automatically uses the default value.

### 13. Functions – Default Parameters

#### 13.1. Default Parameters

In TypeScript, you can assign a **default value** to a parameter.
If no value is provided when calling the function, the default is used.

**Example:**

```ts
function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}

greet('Anders'); // Hello, Anders!
greet();         // Hello, Anonymous!
```

TypeScript automatically infers the parameter type as `string`
because the default value `'Anonymous'` is a string.
=> No need to explicitly declare `name: string`.

#### 13.2. Difference between `?` and Default Parameters

| Syntax             | Meaning                              |                                                       |
| ------------------ | ------------------------------------ | ----------------------------------------------------- |
| Optional parameter | `function greet(name?: string)`      | `name` can be a string or undefined                   |
| Default parameter  | `function greet(name = 'Anonymous')` | If not passed, it automatically becomes `'Anonymous'` |

→ When using a default value, you don’t need the `?` anymore.

**Example:**

* Use default parameters instead of optional ones.
* Parameters:

  * `status` has default `'not ready...'`
  * `repeat` has default `1`
* Remove `||` inside the function (no longer needed).

```ts
function proclaim(status?: string, repeat?: number) {
  for (let i = 0; i < repeat || 0; i += 1) {
    console.log(`I'm ${status || 'not ready...'}`);
  }
}

proclaim();
proclaim('ready?');
proclaim('ready!', 3);
```

**Solution:**

```ts
function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i++) {
    console.log(`I'm ${status}`);
  }
}

// Function calls:
proclaim();               // Output: I'm not ready...
proclaim('ready!');       // Output: I'm ready!
proclaim('ready!', 3);    // Output (3 times): I'm ready!
```

---

### 14. Functions – Inferring Return Types

#### 14.1. TypeScript can infer the return type automatically

When a function has a `return`, TypeScript looks at the returned value to infer its type.

**Example:**

```ts
function createGreeting(name: string) {
  return `Hello, ${name}!`;
}
```

* The return value is a string.
* TypeScript infers the return type as `string`.

#### 14.2. How TypeScript infers variable type from function return

```ts
const myGreeting = createGreeting('Aisle Nevertell');
```

* `createGreeting()` returns a string.
* Therefore, `myGreeting` is also inferred as a string.
* No need to explicitly write `: string`.

#### 14.3. Type inference helps catch errors

```ts
function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`; // <-- returns a string
}

const liquidAmount: number = ouncesToCups(3);
// Error: Type 'string' is not assignable to type 'number'
```

TypeScript detects:

* The function returns a **string**.
* But you’re assigning it to a **number** variable → exact type error.

**Example:**

```ts
function getRandomNumber() {
  return Math.random();
}
```

**Task:**

* Create a variable `myVar` with type `number`.
* Do not use `:` (no manual typing).
* Do not assign a literal number.
* Do not use any function except the given one.

**Solution:**

```ts
const myVar = getRandomNumber();
```

* `getRandomNumber()` returns a number.
* TypeScript infers: `myVar` is a number.