### 33. Custom Types – Union Types (Defining Unions)

Union type in TypeScript allows a variable, parameter, or value to hold multiple possible data types — but still within clear limits.
The vertical bar `|` is used to “combine” multiple allowed types.

**Syntax:**

```ts
let ID: string | number;
```

This means the variable `ID` can hold either a `string` or a `number`.

```ts
ID = 1;       // ✅ Valid (number)
ID = '001';   // ✅ Valid (string)
ID = true;    // ❌ Error - boolean is not part of the union
```

**Union helps programs:**

* Be more flexible than fixed types (e.g., only string).
* Be safer than using the `any` type.

**Union in functions:**

Union types are often used for function parameters when a function needs to handle multiple kinds of input data.

**Example:**

```ts
function getMarginLeft(margin: string | number) {
  return { 'marginLeft': margin };
}
```

`margin` can be `"10px"` or `10` without causing an error.

**Example from the lesson:**

```ts
function printNumsAndStrings(statement) {
  console.log(`Log: ${statement}`);
}
```

If you hover over `statement`, you’ll see TypeScript infers it as `any`.
We need to explicitly specify the type using a **Union Type**.

**Rewrite the function safely:**

```ts
function printNumsAndStrings(statement: string | number) {
  console.log(`Log: ${statement}`);
}

// Call the function with both data types
printNumsAndStrings(42);
printNumsAndStrings('Hello, TypeScript!');
```

**Explanation:**

* `statement: string | number` → allows both strings and numbers.
* The function works fine for both data types.
* If you pass another type (like boolean or object), TypeScript will give a warning.

**Result:**
After compiling with `tsc` and running `node index.js`, the output will be:

```
Log: 42
Log: Hello, TypeScript!
```

**Extended Example:**

```ts
// The variable can be true, false, or "unknown"
let status: boolean | 'unknown';
status = true;        // ✅
status = 'unknown';   // ✅
status = 'yes';       // ❌ Invalid

// Function with a union type
function display(input: string | number | boolean) {
  console.log(`Value: ${input}`);
}
display('TypeScript');
display(2025);
display(false);
```

**Example 2:**

```ts
// Define a function using a Union Type
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

// Call the function with valid types
printNumsAndStrings('hello!');
printNumsAndStrings(2025);

// ❌ If you try passing another type (e.g., boolean), TypeScript throws an error
// printNumsAndStrings(true);
```

**Explanation:**

* `string | number` is a **Union Type**, meaning `statement` can be either a string or a number.
* It helps control input types, disallowing values outside these two types.
* TypeScript will catch the error at **code-writing time**, avoiding runtime logic bugs.

### 34. Union Types – Type Narrowing

When using Union Types, a variable can hold multiple data types (like `string | number`).
However, in certain parts of code, we need to **determine the exact current type** to apply appropriate logic or methods.

**Type Narrowing** is the process by which TypeScript identifies the specific type of a variable at a given point in the program.

**Example:**

```ts
function getMarginLeft(margin: string | number) {
  if (typeof margin === 'string') {
    // margin is determined as a string here
    return margin.toLowerCase();
  }
}
```

**Explanation:**

* `margin` initially has the type `string | number`.
* Inside `if (typeof margin === 'string')`, TypeScript narrows the type of `margin` to `string`.
* Therefore, you can safely call `toLowerCase()` without an error.

If you call `margin.toLowerCase()` **outside** the `if` block, TypeScript will give an error because `number` doesn’t have that method.

**Type Guard – Type Checker:**

A **Type Guard** is a conditional expression used to identify a variable’s actual runtime type, for example:

```ts
typeof value === 'string'
typeof value === 'number'
value instanceof SomeClass
Array.isArray(value)
```

TypeScript uses these to **narrow** a union type into a specific one inside conditional branches.

**Example:**
Write a function `formatValue()` that accepts a parameter of type `string | number` and handles each type differently.

```ts
function formatValue(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
  }

  if (typeof value === 'number') {
    console.log(value.toFixed(2));
  }
}

// Function calls
formatValue('Hiya');  // Output: hiya
formatValue(42);      // Output: 42.00
```

| Code line                   | Meaning                           |
| --------------------------- | --------------------------------- |
| `typeof value === 'string'` | Type Guard checks for string type |
| `value.toLowerCase()`       | String method                     |
| `typeof value === 'number'` | Type Guard checks for number type |
| `value.toFixed(2)`          | Formats number to two decimals    |

TypeScript automatically **narrows** `value` to the appropriate type in each branch.

### 35. Union Types – Inferred Union Return Types

One of TypeScript’s powerful features is **type inference** —
it can automatically deduce types without you explicitly declaring them.

When applied to **function return types**,
TypeScript can determine the return type based on the function’s `return` statements.

If a function returns multiple types, TypeScript automatically creates a **Union Type** for all possible return values.

**Example 1:**

```ts
function getBook() {
  try {
    return getBookFromServer();
  } catch (error) {
    return `Something went wrong: ${error}`;
  }
}
```

**Explanation:**

* When `getBookFromServer()` succeeds → returns a `Book` object.
* When it fails (in `catch`) → returns a `string`.
  → TypeScript automatically infers the return type as:

```ts
Book | string
```

No need to manually declare a return type — TypeScript understands it.

**Example 2:**

Assume we have a data type `User` and a function `createUser()` simulating user account creation (success or failure):

```ts
type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}
```

Now we store the return value in a variable with the correct type:

```ts
let userData: User | string = createUser();
```

| Component                    | Meaning                                             |                                     |
| ---------------------------- | --------------------------------------------------- | ----------------------------------- |
| `User`                       | Object type containing `id` and `username`          |                                     |
| `'Could not create a user.'` | Error message string                                |                                     |
| `User                        | string`                                             | Union of both possible return types |
| `createUser()`               | Function that may return either type                |                                     |
| `userData`                   | Variable storing the function’s result (union type) |                                     |

### 36. Union Types – Unions and Arrays

In TypeScript, **Union Types** allow a variable or value to belong to multiple data types.
When combined with **arrays**, unions let us create flexible arrays containing different element types, while still maintaining type safety.

**Syntax for union arrays:**

```ts
let myArray: (type1 | type2 | type3)[] = [/* values */];
```

**Note:**
You must use parentheses `()` around the union before `[]`.
Without them, the type may be misinterpreted.

**Example 1:**

```ts
const dateNumber = new Date().getTime(); // number
const dateString = new Date().toString(); // string

const timesList: (string | number)[] = [dateNumber, dateString];
```

Here, `timesList` is an array that can contain both numbers and strings.
If we try to add another type, TypeScript throws an error:

```ts
timesList.push(true); // ❌ Error: boolean not allowed
```

**Example 2:**

We have a function `formatListings()` that takes a list of addresses (strings) and prices (numbers).
We’ll use a **Union Array Type** to handle both types safely.

```ts
function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900,
]);

console.log(result);
```

**Explanation:**

| Component           | Description                                           |                                     |
| ------------------- | ----------------------------------------------------- | ----------------------------------- |
| `(string            | number)[]`                                            | Array containing strings or numbers |
| `typeof listing`    | Checks the current element’s type                     |                                     |
| `.toUpperCase()`    | Converts string to uppercase                          |                                     |
| `.toLocaleString()` | Formats number with locale (e.g., `226800 → 226,800`) |                                     |
| `` `$${value}` ``   | Formats as currency (e.g., `$226,800`)                |                                     |

**Program output:**

```ts
[
  '123 MAIN ST',
  '$226,800',
  '580 BROADWAY APT 4A',
  '$337,900'
]
```

### 37. Union Types – Common Key Value Pairs

When declaring a Union Type between multiple data types or objects,
TypeScript only allows access to properties or methods that **all** types in the union share.

In other words:
You can only use **common properties** among all union members.

**Example with primitive types:**

```ts
const batteryStatus: boolean | number = false;

batteryStatus.toString(); // Valid
batteryStatus.toFixed(2); // Error
```

**Explanation:**

* Both `boolean` and `number` have `.toString()` → OK.
* Only `number` has `.toFixed()` → TypeScript throws an error.

TypeScript ensures you only access what exists on *all* types in the union.

**Example with object types:**

```ts
type Goose = { 
  isPettable: boolean; 
  hasFeathers: boolean;
  canThwartAPicnic: boolean;
}

type Moose = {
  isPettable: boolean; 
  hasHoofs: boolean;
}

const pettingZooAnimal: Goose | Moose = { isPettable: true };

console.log(pettingZooAnimal.isPettable); // OK
console.log(pettingZooAnimal.hasHoofs);   // Error
```

**Explanation:**

* Both `Goose` and `Moose` have `isPettable` → allowed.
* Only `Moose` has `hasHoofs` → not allowed when type is `Goose | Moose`.

**Lesson application: social media events**

Suppose we have two social media event types:

* `Like`
* `Share`

Each event may hold different user info.

We want TypeScript to ensure we only access **common properties** safely.

```ts
type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);
```

**Explanation:**
If one of the types (Like or Share) didn’t have `displayName`,
TypeScript would show an error — because it can’t guarantee all union members have that property.
So, we must ensure that accessed properties exist in **all** types of the union.

**Output:**

```
You have an update from Veronica Krauss.
```

### 38. Union Types – Unions with Literal Types

**Literal Types** allow you to specify exact, fixed values for a data type.
When you combine several literal types with a union (`|`),
you can create a set of valid states your program can use.

👉 This is a common way to represent clear, logical program states.

**Example 1: Traffic Light**

```ts
type Color = 'green' | 'yellow' | 'red';

function changeLight(color: Color) {
  // ...
}
```

* `Color` only allows `'green'`, `'yellow'`, or `'red'`.
* If you call `changeLight('purple')`, TypeScript throws an error:

❌ `Argument of type '"purple"' is not assignable to parameter of type 'Color'.`

**Meaning:**
Literal unions restrict valid values → reducing errors and improving clarity.

**Example 2: Practical application – Download status**

We’ll simulate the states of a download button.
Possible states:

* `'idle'` (waiting)
* `'downloading'` (in progress)
* `'complete'` (finished)

```ts
type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status) {
  if (status === 'idle') {
    console.log('Download');
  } else if (status === 'downloading') {
    console.log('Downloading...');
  } else if (status === 'complete') {
    console.log('Your download is complete!');
  }
}

downloadStatus('idle');
downloadStatus('downloading');
downloadStatus('complete');

// If you pass any other value, TypeScript will show an error
```