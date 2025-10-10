### 22. ARRAYS – ARRAY TYPE INFERENCE

TypeScript can automatically infer data types based on the initial value.
When you assign an initial value to a variable, TypeScript infers its type without needing you to explicitly declare it.

**Example:**

```ts
let examAnswers = [true, false, false];
```

TypeScript automatically infers that `examAnswers` is of type `boolean[]`, not `[boolean, boolean, boolean]`.

**Why `boolean[]` and not a tuple?**

* `[boolean, boolean, boolean]` is a tuple: fixed length and specific data type order.
* `boolean[]` is a regular array, flexible and extendable.

**Example:**

```ts
examAnswers[3] = true; // No error — because arrays can grow
```

If it were a tuple, you’d get an error:

```ts
let tupleOfExamAnswers: [boolean, boolean, boolean] = [true, false, false];
tupleOfExamAnswers[3] = true; // Type Error: tuple only has 3 elements
```

### Type Inference with `.concat()`

When using `.concat()`, TypeScript always returns an array, not a tuple, even if you concatenate a tuple with another array.

**Example:**

```ts
let tup: [number, number, number] = [1, 2, 3];
let concatResult = tup.concat([4, 5, 6]);
```

TypeScript infers `concatResult` as `number[]`, not a tuple.

**Result:**

```
[1, 2, 3, 4, 5, 6]
```

**Example – Given a tuple:**

```ts
let dogTup: [string, string, string] = ['poodle', 'bulldog', 'beagle'];
```

**Requirement:**
Create a variable `myArr` of type `string[]`, but without using `Array` or `[]` syntax.
Hint: use the `.concat()` method to “convert a tuple into an array.”
Verify that `myArr` is an array, not a tuple.

**Solution:**

```ts
let myArr = dogTup.concat();
myArr[50] = 'not a dog';
```

`myArr` is inferred by TypeScript as `string[]`.
If `myArr` were a tuple, TypeScript would throw an error because tuples have fixed length.
Since there’s no error, `myArr` is truly an array, proving that type inference works.

### 23. ARRAYS – REST PARAMETERS

In JavaScript and TypeScript, rest parameters allow a function to accept an indefinite number of arguments.
These arguments are collected into an array.
Rest parameters are declared using the `...` (spread) syntax.

**Example (without types):**

```ts
function smush(firstString, ...otherStrings) {
  let output = firstString;
  for (let i = 0; i < otherStrings.length; i++) {
    output = output.concat(otherStrings[i]);
  }
  return output;
}

smush('hi ', 'there'); // Result: 'hi there'
smush('a', 'h', 'h', 'H', 'H', 'H', '!', '!'); // Result: 'ahhHHH!!'
```

`otherStrings` is an array containing all parameters after `firstString`.
This allows the function to handle many arguments without knowing how many in advance.

### Problem: Missing Type Annotation

Without type annotations, TypeScript cannot guarantee type safety.

**Example:**

```ts
smush(1, 2, 3); // Error: parameters are numbers, not strings
```

This causes a runtime error because `.concat()` works only on strings.

### Adding Type Annotations to Rest Parameters

The syntax is the same as arrays:
Use `type[]` after the parameter name.
Precede it with `...` (rest parameter).

**Correct syntax:**

```ts
function smush(firstString: string, ...otherStrings: string[]): string {
  let output = firstString;
  for (let i = 0; i < otherStrings.length; i++) {
    output = output.concat(otherStrings[i]);
  }
  return output;
}
```

Now:

* `firstString` must be a string.
* `otherStrings` is an array of strings (`string[]`).
* If someone calls `smush(1, 2, 3)`, TypeScript will immediately throw an error.

**Example:**

```ts
function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}
```

**Check type error:**

```ts
addPower('a string', 4, 5, 6);
```

TypeScript error:

```
Argument of type 'string' is not assignable to parameter of type 'number'.
```

You can’t calculate exponents of a string.

### Summary:

| Concept          | Explanation                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| Rest Parameter   | Collects multiple arguments into an array                                    |
| Type Declaration | Use array-like syntax (e.g., `...nums: number[]`)                            |
| Purpose          | Allows flexible handling of multiple arguments while maintaining type safety |
| Common Error     | Forgetting to specify the type, leading to runtime type errors               |

Notes:
Rest parameters behave like arrays, so their types should match array syntax.
When using TypeScript, always declare type annotations clearly for each parameter, especially rest parameters.
This enables TypeScript to catch errors early and prevent runtime issues.

### 24. ARRAYS – SPREAD SYNTAX (in TypeScript)

In JavaScript and TypeScript, the spread syntax (`...`) is used to “spread” array or tuple elements into individual values.

This syntax is especially useful when:

* Calling functions with many parameters.
* Passing all values from an array or tuple without manually listing each one.

**Example – Without Spread Syntax:**

```ts
function gpsNavigate(
  startLatitudeDegrees: number,
  startLatitudeMinutes: number,
  startNorthOrSouth: string,
  startLongitudeDegrees: number,
  startLongitudeMinutes: number,
  startEastOrWest: string,
  endLatitudeDegrees: number,
  endLatitudeMinutes: number,
  endNorthOrSouth: string,
  endLongitudeDegrees: number,
  endLongitudeMinutes: number,
  endEastOrWest: string
) {
  /* Navigate from point A to point B */
}
```

To call this function normally:

```ts
gpsNavigate(40, 43.2, 'N', 73, 59.8, 'W', 25, 0, 'N', 71, 0, 'W');
```

It’s long, hard to read, and error-prone.

### 24.1. Solution with Tuples and Spread Syntax

Instead of passing each argument manually, group related values into a tuple (a fixed-length array with defined types):

```ts
let codecademyCoordinates: [number, number, string, number, number, string] =
  [40, 43.2, 'N', 73, 59.8, 'W'];

let bermudaTCoordinates: [number, number, string, number, number, string] =
  [25, 0, 'N', 71, 0, 'W'];
```

Now call the function more cleanly using spread syntax:

```ts
gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
```

Meaning:
Pass all values in `codecademyCoordinates` and `bermudaTCoordinates` as arguments to `gpsNavigate`.

You can even reverse it easily:

```ts
gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates);
```

Much shorter, clearer, and easier to maintain.

### 24.2. Spread Syntax with an Array of Tuples

Suppose we have an array of tuples, each representing arguments for a function `performDanceMove()`:

```ts
function performDanceMove(moveName: string, moveReps: number, hasFlair: boolean) {
  console.log(`Performing ${moveReps} ${moveName} moves${hasFlair ? " with flair!" : "."}`);
}
```

We can store dance moves like this:

```ts
let danceMoves = [
  ['twist', 2, false],
  ['jump', 1, true],
  ['shake', 3, true],
];
```

With correct typing:

```ts
let danceMoves: [string, number, boolean][] = [
  ['twist', 2, false],
  ['jump', 1, true],
  ['shake', 3, true],
];
```

Meaning:
`danceMoves` is an array (`[]`) containing multiple tuples, each with `[string, number, boolean]`.

### 24.3. Looping and Using Spread Syntax

You can use `for...of` or `forEach` to iterate over all moves:

```ts
for (let move of danceMoves) {
  performDanceMove(...move);
}
```

`...move` spreads the elements of each tuple, so this is equivalent to:

```ts
performDanceMove(move[0], move[1], move[2]);
```

### Summary:

| Concept               | Description                                 | Example                             |
| --------------------- | ------------------------------------------- | ----------------------------------- |
| Spread Syntax (`...`) | Spreads elements in an array or tuple       | `myFunc(...myArray)`                |
| Tuple                 | Fixed-length array with specific types      | `[string, number, boolean]`         |
| Array of Tuples       | Array containing multiple tuples            | `[[string, number, boolean], ...]`  |
| Use Case              | Call functions with many parameters cleanly | `gpsNavigate(...tupleA, ...tupleB)` |

Notes:
Spread syntax makes code shorter, cleaner, and easier to read.
In TypeScript, combining it with tuple types ensures correct argument count and types.
You can use spread syntax for:

* Function calls
* Copying arrays or objects
* Concatenating arrays