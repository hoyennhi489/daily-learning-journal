# 28. Custom Types – Object Types

In TypeScript, object types allow us to define the specific structure of an object: what properties it has and the data type of each property.
This helps us strictly control data, preventing errors caused by incorrect types or property names.

### Syntax:

Example of declaring a person object:

```ts
let aPerson: { name: string; age: number };
```

**Explanation:**

* `{ name: string; age: number }` is an object type.
* Variable `aPerson` must be an object with two properties:

  * `name`: string
  * `age`: number

Common errors when the structure or data type is wrong:

```ts
aPerson = { name: 'Aisle Nevertell', age: "twenty" }; 
// Error: 'age' must be a number, not a string.

aPerson = { name: 'Kushim', yearsOld: 5000 };
// Error: property name must be 'age', not 'yearsOld'.

aPerson = { name: 'User McCodecad', age: 22 };
// Correct: has both 'name' and 'age' with valid types.
```

### Nested Object Types

TypeScript allows objects to contain nested objects or arrays:

```ts
let aCompany: {
  companyName: string;
  boss: { name: string; age: number };
  employees: { name: string; age: number }[];
  employeeOfTheMonth: { name: string; age: number };
  moneyEarned: number;
};
```

**Explanation:**

* `boss` is an object with two properties: `name` and `age`.
* `employees` is an array of objects with `{ name: string; age: number }`.
* `moneyEarned` is a number.

### Using Object Types as Function Parameters

Example from the lesson:

```ts
function sayHappyBirthdayWithObject(personObject: { name: string; age: number }) {
  console.log(`Happy Birthday ${personObject.name}!`);
  console.log(`You are now ${personObject.age} years old!`);
}
```

**Explanation:**

* The function `sayHappyBirthdayWithObject()` only accepts objects with two properties: `name` and `age`.
* If one is missing or has the wrong type, TypeScript will show an error.

**Valid call:**

```ts
sayHappyBirthdayWithObject({ name: 'Cody', age: 10 });
```

**Invalid call:**

```ts
sayHappyBirthdayWithObject({ name: 'Cody' }); // missing age
```

### Array of Objects

Declare an array containing multiple objects of the same type:

```ts
let birthdayBabies: { name: string; age: number }[] = [
  { name: 'Liam', age: 3 },
  { name: 'Emma', age: 1 },
  { name: 'Noah', age: 2 }
];
```

**Explanation:**

* `[]` indicates it’s an array.
* Each element must have the structure `{ name: string; age: number }`.

### Example:

```ts
function sayHappyBirthdayWithObject(personObject: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}) {
  let output = '';

  output += 'Happy Birthday ' + personObject.name + '! ';
  output += 'You are now ' + personObject.age + ' years old! ';
  output += 'Your birthday wish was to receive ' + personObject.giftWish + '. And guess what? You will ';

  if (!personObject.success) {
    output += 'not ';
  }

  output += 'receive it! \n';
  console.log(output);
}

let birthdayBabies: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}[] = [
  { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
  { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
  { name: 'Ava', age: 0, giftWish: '$0.25', success: true }
];

birthdayBabies.forEach(sayHappyBirthdayWithObject);
```

# 29. Custom Types – Type Aliases

In TypeScript, a **type alias** lets us create a new name for an existing type — whether it’s a primitive type (like `string`, `number`) or a complex one (like `object`, `tuple`, `union`, etc.).

### Syntax:

```ts
type <alias_name> = <type>;
```

**Example:**

```ts
type MyString = string;
let myVar: MyString = 'Hi'; // ✅ Valid
```

Meaning `MyString` is simply another name for `string`.

### When to Use Type Aliases

They are especially useful when you have a complex type repeated many times.
Instead of retyping it, you can name it once and reuse it.

**Before:**

```ts
let aCompany: { 
  companyName: string, 
  boss: { name: string; age: number }, 
  employees: { name: string; age: number }[], 
  employeeOfTheMonth: { name: string; age: number },  
  moneyEarned: number
};
```

**After using alias:**

```ts
type Person = { name: string; age: number };

let aCompany: {
  companyName: string;
  boss: Person;
  employees: Person[];
  employeeOfTheMonth: Person;
  moneyEarned: number;
};
```

Shorter, cleaner, and easier to maintain.
Changing `Person` updates all its uses automatically.

### Type Alias Does Not Create a New Type

Type aliases are just names — they don’t create distinct types.

```ts
type MyString = string;
type MyOtherString = string;

let firstString: MyString = 'hello';
let secondString: MyOtherString = firstString; // Works fine
```

Both are just `string`.

### Example: Type Alias for Tuple

**Before:**

```ts
let codecademyCoordinates: [number, number, string, number, number, string] = 
  [40, 43.2, 'N', 73, 59.8, 'W'];

let bermudaTCoordinates: [number, number, string, number, number, string] = 
  [25, 0, 'N', 71, 0, 'W'];
```

**After using alias:**

```ts
type Coord = [number, number, string, number, number, string];

let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0, 'N', 71, 0, 'W'];
```

# 30. Custom Types – Function Types

In JavaScript, functions can be assigned to variables:

```ts
let myFavoriteFunction = console.log;
myFavoriteFunction('Hello World'); // prints: Hello World
```

In TypeScript, we can define **function types** to control exactly what kind of function can be assigned.

### Syntax:

```ts
type TypeName = (param1: type, param2: type, ...) => returnType;
```

Example:

```ts
type StringsToNumberFunction = (arg0: string, arg1: string) => number;
```

This means the variable must hold a function that:

* Takes two `string` parameters
* Returns a `number`

```ts
let myFunc: StringsToNumberFunction;

myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function(a: string, b: string) {
  return a.length - b.length;
};
```

✅ Both valid — parameter names don’t matter, only their types do.

Common mistakes:

```ts
type StringToNumberFunction = (string) => number; // Wrong
type StringToNumberFunction = arg: string => number; // Wrong

// Correct:
type StringToNumberFunction = (arg: string) => number;
```

### Example: Math Tutor with Callback

```ts
function add(a, b){ return a + b; }
function subtract(a, b){ return a - b; }
function multiply(a, b){ return a * b; }
function divide(a, b){ return a / b; }
function wrongAdd(a, b){ return (a + b) + ''; } // returns string

type OperatorFunction = (a: number, b: number) => number;

function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, "!");
  let value25 = operationCallback(2, 5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
  console.log('Now fill out this worksheet.');
}

mathTutor(add);
mathTutor(multiply);

// Error: returns string, not number
mathTutor(wrongAdd);
```

# 31. Custom Types – Generic Types

**Generics** allow us to create flexible, reusable types that work with different data types.

### Example – Array is a built-in Generic Type

```ts
let numbers: Array<number> = [1, 2, 3];
let names: Array<string> = ['Yen', 'Nhi', 'Ho'];
```

`Array<T>` → `T` can be replaced with any type.

---

### Custom Generic Syntax

```ts
type TypeName<T> = {
  // use T as a type placeholder
};
```

Then specify T when using it:

```ts
let variable: TypeName<string>;
let variable2: TypeName<number>;
```

---

### Example: Family<T>

```ts
type Family<T> = {
  parents: [T, T];
  mate: T;
  children: T[];
};
```

**Examples:**

```ts
type Human = { name: string, job: string };
type Dog = { name: string, tailWagSpeed: number };

let theFamily: Family<number> = {
  parents: [3, 4],
  mate: 9,
  children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true],
  mate: false,
  children: [false, false, true, true]
};

let aFamily: Family<Human> = {
  parents: [
    { name: 'Mom', job: 'software engineer' },
    { name: 'Dad', job: 'coding engineer' }
  ],
  mate: { name: 'Matesky', job: 'engineering coder' },
  children: [{ name: 'Babesky', job: 'none' }]
};

let anotherFamily: Family<Dog> = {
  parents: [
    { name: 'Momo', tailWagSpeed: 3 },
    { name: 'Dado', tailWagSpeed: 100 }
  ],
  mate: { name: 'Cheems', tailWagSpeed: 7 },
  children: [
    { name: 'Puppin', tailWagSpeed: 0.001 },
    { name: 'Puppenaut', tailWagSpeed: 0.0001 },
    { name: 'Puppenator', tailWagSpeed: 0.01 }
  ]
};
```

# 32. Custom Types – Generic Functions

**Generic functions** can work with multiple data types while maintaining type safety.
Instead of writing multiple functions for each type, we write one reusable function.

### Example (JavaScript version):

```ts
function getFilledArray(value, n) {
  return Array(n).fill(value);
}

console.log(getFilledArray('cheese', 3)); 
// ['cheese', 'cheese', 'cheese']
```

### Rewritten with Generics in TypeScript:

```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

getFilledArray<string>('cheese', 3);
getFilledArray<number>(9, 5);
```

### Lesson Example

```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{name: string, age: number}>(
  {name: 'J. Dean', age: 24}, 
  6
);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);

console.log(stringArray);
console.log(numberArray);
console.log(personArray);
console.log(coordinateArray);
```