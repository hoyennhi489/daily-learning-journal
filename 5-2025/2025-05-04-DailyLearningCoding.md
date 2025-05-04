**JAVASCRIPT**

**9. Object**
• An object is a complex data type that allows storing multiple values through key: value pairs.
• A value can be any data type: number, string, boolean, object, array, function...

**9.1. Declaring an object**

```js
// Declare an object named 'person'
const person = {
    // Property 'name' with a string value "John"
    name: "John",

    // Property 'age' with a number value 30
    age: 30,

    // Property 'isStudent' with a boolean value false
    isStudent: false
};
```

**9.2. Some basic operations with object**

**9.2.1. Accessing properties**
Dot notation (`.`)

```js
// Access property 'name' using dot notation
console.log(person.name); // "John"
```

* Dot notation is used when you know the exact name of the property and it follows variable naming rules.

Bracket notation (`[]`) – used when key is a variable or contains special characters

```js
// Declare an object named 'person'
const person = {
    name: "John",
    age: 30,
    isStudent: false
};

// Access property 'age' using bracket notation
console.log(person["age"]); // 30
```

* Bracket notation is useful when the property name is a variable, contains special characters, or is invalid for dot notation.

**9.2.2. Adding / Updating properties**

```js
// Add a new property 'gender' to object 'person'
person.gender = "male"; // add

// Update the value of property 'age' in object 'person'
person.age = 31; // update
```

* When a property does not exist, JavaScript will automatically add it.
* If the property already exists, it will be overwritten with the new value.

**9.2.3. Deleting properties**

```js
// Delete the property 'isStudent' from object 'person'
delete person.isStudent;
```

* The `delete` operator is used to remove a property from an object.
* After deletion, that property no longer exists in the object.

**9.2.4. Nested objects**

* An object can contain other objects – called nested objects.
* Access them by using multi-level dot notation: `object1.object2.property`.

```js
// Declare object 'user' containing another object inside (address)
const user = {
    name: "Alice",
    address: {
        city: "Hanoi",
        zip: 10000
    }
};

// Access nested property
console.log(user.address.city); // "Hanoi"
```

**9.2.5. Function in object (method)**

```js
// Object 'car' contains a method named 'start'
const car = {
    brand: "Toyota", // Property: car brand

    // Method: a function inside the object
    start: function () {
        console.log("Engine started");
    }
};

// Call the 'start' method of the 'car' object
car.start(); // "Engine started"
```

* `start: function () {...}`
  • This is a **method** — a function attached to an object.
  • A method is an "action" the object can perform.
  • When calling `car.start()`, you tell the object to perform the “start engine” action.

| Component | Role                             |
| --------- | -------------------------------- |
| brand     | Property – stores information    |
| start()   | Method – an action of the object |

**From ES6, you can write methods more concisely:**

```js
const car = {
    brand: "Toyota",
    start() {
        console.log("Engine started");
    }
};

car.start(); // "Engine started"
```

**9.2.6. Check if a key exists in object**
In JavaScript, you can use the `in` operator to check if a key exists in an object:

```js
const student = {
    name: 'Easy Frontend',
    age: 18,
};

'name' in student    // true  -> key 'name' exists in object
'age' in student     // true  -> key 'age' also exists
'isHero' in student  // false -> key 'isHero' does NOT exist
```

**9.2.7. Clone object**
You can clone the `student` object and merge more properties from `moreProps` in 2 ways:

```js
const student = {
    name: 'Easy Frontend',
    age: 18,
};

const moreProps = {
    isHero: true,
    gender: 'male',
};

// Way 1: Use Object.assign()
const clonedStudent = Object.assign({}, student, moreProps);

// Way 2: Use spread operator (...) — shorter syntax
const clonedStudent2 = {
    ...student,
    ...moreProps,
};
```

Both `clonedStudent` and `clonedStudent2` will have the following result:

```js
{
    name: 'Easy Frontend',
    age: 18,
    isHero: true,
    gender: 'male'
}
```

---

**9.3. Value vs Reference**

* For **primitive types** like: number, string, boolean, undefined, null, symbol, bigint
  → JavaScript copies the value when assigning variables → This is **Pass by Value**.

Example:

```js
let a = 5;
let b = a;   // b copies the value of a
b = 10;

console.log(a); // 5
console.log(b); // 10
```

// Primitive types - variables directly store the value

```js
const name = 'Easy Frontend';     // string  
const age = 18;                   // number  
const isHero = true;              // boolean  
const selectedStudent = null;     // null
```

// => These values are stored directly in memory
// For example:
// name = 'Easy Frontend'
// age = 18
// => This is PASS BY VALUE

* For **complex types** like object, array, function:
  → JavaScript copies the reference address (memory location) when assigning.

Example:

```js
const a = { x: 1 };
const b = a;    // b references the same address as a
b.x = 2;

console.log(a.x); // 2
console.log(b.x); // 2
```

`a` and `b` both point to the same object in memory, so when `b.x` changes, `a.x` also changes.

// Complex types (object) - variables store memory references

```js
const student = {
    name: 'Easy Frontend',
    age: 18,
};
```

// => Variable `student` does NOT store the actual value
//    It stores the memory address, e.g., 123456
//    At that address is the actual object:
//    { name: 'Easy Frontend', age: 18 }
//    => This is PASS BY REFERENCE

// Memory layout example:
// student = 123456
//              ---> ADDRESS: 123456
//                     VALUE: { name: 'Easy Frontend', age: 18 }

---

**9.4. Comparing objects**
When comparing reference types (object, array, function), JavaScript compares the memory reference.

• If both variables point to the same address → result is `true`.
• If each variable points to a new object (even if contents are identical) → result is `false`.

**Example 1: Same reference**

```js
const student1 = { name: 'Easy Frontend' };
const student2 = student1; // Same reference

console.log(student1 === student2); // true
```

**Example 2: Same content but different reference**

```js
const student1 = { name: 'Easy Frontend' };  // object 1
const student2 = { name: 'Easy Frontend' };  // object 2

console.log(student1 === student2); // false
```

---

**9.5. Iterating object keys**

**9.5.1. Using for...in**

```js
for (let key in object) {
    // Work with key and object[key]
}
```

Example:

```js
const person = {
    name: "John",
    age: 30,
    gender: "male"
};

for (let key in person) {
    console.log(key, person[key]);
}
```

// Output:
/\*
name John
age 30
gender male
\*/

* `key` in `for (let key in person)` is the name of each property (as string).
* `person[key]` returns the value corresponding to that key.
* The loop iterates all enumerable properties of the object (even ones added later dynamically).
* However: `for...in` does **not guarantee key order** — as objects don’t have a defined order like arrays.

---

**9.5.2. Use Object.keys() / Object.values() / Object.entries()**

```js
const user = {
    name: "Anna",
    email: "anna@example.com",
    age: 25
};

// 1. Get list of keys
console.log(Object.keys(user));     
// Output: ['name', 'email', 'age']

// 2. Get list of values
console.log(Object.values(user));   
// Output: ['Anna', 'anna@example.com', 25]

// 3. Get list of [key, value] pairs
console.log(Object.entries(user));  
// Output: [['name', 'Anna'], ['email', 'anna@example.com'], ['age', 25]]
```

| Method              | Return value           | Description                         |
| ------------------- | ---------------------- | ----------------------------------- |
| Object.keys(obj)    | Array of keys          | Iterate property names              |
| Object.values(obj)  | Array of values        | Iterate corresponding values        |
| Object.entries(obj) | Array of \[key, value] | Useful for looping or destructuring |