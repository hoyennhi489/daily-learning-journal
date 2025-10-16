## 25. Custom Types – Introduction

In TypeScript, besides the pre-defined types such as:  
- Primitive types: string, number, boolean, null, undefined, etc.  
- Arrays: string[], number[], boolean[], …

=> We can also create our own custom data types to serve the specific needs of the program.  
=> This is one of the most powerful and interesting features of TypeScript — because it lets you enforce precise types according to your needs, not just rely on default types.

### Example of a Custom Type: Tuples
When you declare:
```ts
let userData: [string, string, number, boolean] = ['Anna', 'Nguyen', 25, true];
````

This is a custom type, created by combining multiple primitive types:

* string → First name
* string → Last name
* number → Age
* boolean → Has a paid account or not

That is: `[string, string, number, boolean]` is a tuple type — also a form of custom type.

### Comparison:

| Type             | Description                 | Example                                        |
| ---------------- | --------------------------- | ---------------------------------------------- |
| Pre-defined Type | Built-in, simple data types | string, number, boolean, string[]              |
| Custom Type      | Types you combine or define | [string, number, boolean], type Person = {...} |

**Illustrative analogy:**

* Pre-defined types are like cooking ingredients: meat, vegetables, bread, cheese...
* Custom types are like finished dishes: burger, sandwich… assembled from many ingredients.

### How to use Custom Types:

Custom types can be used:

1. **When declaring variables:**

```ts
let myVar: compType;
```

2. **In function declarations:**

```ts
function testFn(param: compType): returnedCompType {
  /* code */
}
```

3. **With Type Inference:**

```ts
let inferredTypeVariable = testFn(myVar);
// inferredTypeVariable will have type returnedCompType
```

### Note:

| Content     | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| Custom Type | A data type defined by the developer                       |
| Use         | Helps describe complex data precisely                      |
| Example     | [string, number, boolean], type User = {...}               |
| Benefit     | Increased clarity, better error checking, easier to extend |

## 26. Custom Types – Enums (Enumeration Types in TypeScript)

### 26.1. What is an Enum?

Enum (short for “enumeration”) is an enumerated data type — used to define a fixed set of values, helping limit the values a variable can take.

Simply put: if you have a variable that should only take one of a few specific values, use an enum.

### 26.2. Comparison with other types

| Data type | Possible values              | Characteristic                       |
| --------- | ---------------------------- | ------------------------------------ |
| string    | Any string (infinite)        | Too broad, hard to control           |
| boolean[] | Any boolean array (infinite) | Not specifically limited             |
| enum      | A fixed list of valid values | Helps control & avoid input mistakes |

### 26.3. Basic Enum syntax

```ts
enum Direction {
  North,
  South,
  East,
  West
}
```

This enum defines 4 directions:

* Direction.North
* Direction.South
* Direction.East
* Direction.West

### 26.4. How to use an Enum

```ts
let whichWayToArcticOcean: Direction;

whichWayToArcticOcean = Direction.North; // Valid
whichWayToArcticOcean = Direction.Southeast; // Error: Not in enum
whichWayToArcticOcean = West; // Syntax error: must use Direction.West
```

→ Enum is used like a separate data type, similar to string or number.

### 26.5. How it works under the hood

TypeScript stores enums as numbers.

```ts
enum Direction {
  North,
  South,
  East,
  West
}
```

Automatically mapped:

| Name            | Numeric value |
| --------------- | ------------- |
| Direction.North | 0             |
| Direction.South | 1             |
| Direction.East  | 2             |
| Direction.West  | 3             |

Meaning:

```ts
whichWayToArcticOcean = Direction.North;
console.log(whichWayToArcticOcean == 0); // true
```

### 26.6. Changing numeric values in an Enum

You can specify the starting value or assign each manually:

```ts
enum Direction {
  North = 7,
  South,
  East,
  West
}
```

| Enum  | Value |
| ----- | ----- |
| North | 7     |
| South | 8     |
| East  | 9     |
| West  | 10    |

Or manually assign:

```ts
enum Direction {
  North = 8,
  South = 2,
  East = 6,
  West = 4
}
```

→ (These numbers correspond to arrow key positions on the numeric keypad.)

### Benefits of Enums:

* Limit valid values → reduce typos or incorrect inputs
* Auto numbering (or assign manually)
* More readable and clear than using raw strings
* Easy to extend and manage in large programs

### Real-world example: Pet store

```ts
let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// Create enum Pet
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

// Enum-typed variable
let petOnSaleTS: Pet = Pet.Chinchilla;

// Type-safe array of tuples
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

// Add invalid pet — TypeScript will throw an error
ordersArrayTS.push([Pet.Jerboa, 3]);
```

## 27. Custom Types – String Enums vs. Numeric Enums

### 27.1. Numeric Enums

```ts
enum DirectionNumber {
  North,
  South,
  East,
  West
}
```

TypeScript auto-assigns numeric values:

| Enum  | Value |
| ----- | ----- |
| North | 0     |
| South | 1     |
| East  | 2     |
| West  | 3     |

### 27.2. String Enums

```ts
enum DirectionString {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST'
}
```

* Numeric enums: numbers auto-generated
* String enums: must assign explicit string values

**Best practice:** use ALL CAPS for clarity.

| Criteria                     | Numeric Enum      | String Enum                   |
| ---------------------------- | ----------------- | ----------------------------- |
| Value                        | Numbers (0,1,2,…) | Strings ('NORTH', 'SOUTH', …) |
| Auto-generated               | Yes               | No                            |
| Can assign arbitrary values? | Yes               | No                            |
| Type safety                  | Lower             | Higher                        |

### 27.4. Problem with Numeric Enums

```ts
let whichWayToAntarctica: DirectionNumber;

whichWayToAntarctica = 1; // Valid
whichWayToAntarctica = DirectionNumber.South; // Valid
whichWayToAntarctica = 943205; // Still valid — no error!
```

→ Drawback: Numeric enums accept any number, leading to hard-to-find bugs.

### 27.5. Advantages of String Enums

```ts
let whichWayToAntarctica: DirectionString;

whichWayToAntarctica = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Error
whichWayToAntarctica = 'SOUTH'; // Error!
whichWayToAntarctica = DirectionString.South; // Valid
```

→ You must use `DirectionString.South`, not a literal string.

### Real-world example: Potent Rodent shop

```ts
// Unsafe code (string-based)
let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50]
];

// Safe version using String Enum
enum Pet {
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Chinchilla = 'CHINCHILLA',
  Tarantula = 'TARANTULA'
}

let petOnSaleTS: Pet = Pet.Chinchilla;

// Type-safe array of tuples
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

// Intentional error example
ordersArrayTS.push(['HAMSTER', 1]); // Type error

// Correct way:
ordersArrayTS.push([Pet.Hamster, 1]); 
```
