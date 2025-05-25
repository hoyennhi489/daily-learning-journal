**JAVASCRIPT**

**12.9. bind(), call(), apply() in JavaScript**
**Purpose:** All three are used to assign `this` to a function, but they differ in usage and execution timing.

| Method  | Assigns this | Executes immediately | Pass arguments                  | Return value           |
| ------- | ------------ | -------------------- | ------------------------------- | ---------------------- |
| bind()  | ✅ Yes        | ❌ No                 | Like normal function (a, b, c)  | Returns a NEW function |
| call()  | ✅ Yes        | ✅ Yes                | Like normal function (a, b, c)  | Function result        |
| apply() | ✅ Yes        | ✅ Yes                | Array of arguments (\[a, b, c]) | Function result        |

**Note:** Only works with regular functions, DOES NOT work with arrow functions (because arrow functions do not have their own `this`).

**Example:**

```js
const person = {
  name: 'Alice',
  sayHello(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
};

const anotherPerson = { name: 'Bob' };

// call()
person.sayHello.call(anotherPerson, 'Hi'); // Hi, my name is Bob

// apply()
person.sayHello.apply(anotherPerson, ['Hello']); // Hello, my name is Bob

// bind()
const sayHelloToBob = person.sayHello.bind(anotherPerson, 'Hey');
sayHelloToBob(); // Hey, my name is Bob
```

→ `bind()` returns a NEW FUNCTION with `this` pre-assigned, which you can call later.

| Situation needed         | Use what?                                                      |
| ------------------------ | -------------------------------------------------------------- |
| Want to call immediately | call() or apply()                                              |
| Want to call later       | bind()                                                         |
| Passing argument array   | apply()                                                        |
| Arrow function           | ❌ Do not use call/apply/bind because `this` is lexically bound |

**12.10. Iteration Protocols in JavaScript**
Iteration protocols are not syntax or built-in functions but conventions that enable objects to be iterable by loops like `for...of`.

There are two main protocols:

* Iterable protocol
* Iterator protocol

**12.10.1. Iterable Protocol**
This is a convention that allows an object to be iterated with `for...of`.

Characteristics:

* An object must have a method `[Symbol.iterator]()`.
* This method must return an iterator object (an object with a `next()` method).
* Some built-in types support iteration: Array, String, Set, Map, etc.

Example:

```js
const numberList = [5, 10, 15];
for (const number of numberList) {
  console.log(number); // 5, 10, 15
}
```

Create a simple iterable:

```js
const iterable = {
  [Symbol.iterator]() {
    return {
      next() {
        return { value: 1, done: true };
      }
    };
  }
};
```

**12.10.2. Iterator Protocol**
This is the convention for the object returned from `Symbol.iterator`.

Characteristics:

* Must have a `next()` method.
* `next()` returns an object in the form `{ value, done }`:

  * `value`: current value
  * `done`: `true` if finished, `false` if more elements remain

Example:

```js
const iterator = {
  next() {
    return { value: 1, done: true };
  }
};
```

**12.10.3. Practical Demo: Creating a Custom Iterable**
Example: Iterate over an array by creating a custom iterator

```js
// Define an object capable of iteration (custom iterable)
const myIterable = {
  // Data to iterate over
  data: [100, 200, 300],

  // Implement [Symbol.iterator] method according to the iterable protocol
  [Symbol.iterator]() {
    let index = 0; // Current index in the array
    const data = this.data; // Get the data array

    // Return an iterator object (following iterator protocol)
    return {
      // next() method must return { value, done }
      next() {
        if (index < data.length) {
          // Still have elements to iterate, return current value and done = false
          return { value: data[index++], done: false };
        } else {
          // No more elements, done = true
          return { value: undefined, done: true };
        }
      }
    };
  }
};

// Use for...of loop to iterate over the object
for (const num of myIterable) {
  console.log(num); // Prints 100, then 200, then 300
}
```

### 13. ECMAScript Features by Version 2015 -> 2021

Ecma International is a non-profit standards organization for information and communication systems.

Main standards:

| No. | Name     | Description                                             |
| --- | -------- | ------------------------------------------------------- |
| 1   | ECMA-262 | ECMAScript Language Specification (based on JavaScript) |
| 2   | ECMA-402 | ECMAScript Internationalization API Specification       |
| 3   | ECMA-404 | JSON                                                    |

### 13.1 ECMAScript 2016

Name: ECMAScript 2016
Abbreviation: ES2016 / ES7
Officially finalized in June 2016

Main features:

| No. | Name                       | Description                                             |
| --- | -------------------------- | ------------------------------------------------------- |
| 1   | Array.prototype.includes() | New array method to check if an element exists in array |
| 2   | Exponentiation Operator    | Exponentiation operator similar to Math.pow()           |

#### 13.1.1 Array.prototype.includes()

Method to check if an element exists in an array, returns true or false:

```js
[1, 2].includes(1);          // true  
[1, 2].includes(2);          // true  
[1, 2].includes(3);          // false  
['easy', 'frontend'].includes('easy');          // true  
['easy', 'frontend'].includes('frontend');      // true  
['easy', 'frontend'].includes('easy frontend'); // false  
```

#### 13.1.2 Exponentiation Operator

* The `**` operator is standardized similar to many other languages like Python, Ruby, MATLAB, Lua, Perl, etc.
* Calculates exponentiation replacing `Math.pow()`:

```js
Math.pow(2, 3);   // 8  
console.log(2 ** 3); // 8  
```

### 13.2 ECMAScript 2017

Name: ECMAScript 2017
Abbreviation: ES2017
Officially finalized in June 2017

Main features:

| No. | Feature                            | Description                                                                      |
| --- | ---------------------------------- | -------------------------------------------------------------------------------- |
| 1   | Async functions (important)        | Higher-level abstraction for working with Promises, async/await for cleaner code |
| 2   | Shared memory and atomics          | Shared memory between multiple workers                                           |
| 3   | String padding                     | Add characters to a string to reach a certain length                             |
| 4   | Object.values()                    | Get an array of values from an object                                            |
| 5   | Object.entries()                   | Get an array of `[key, value]` pairs from an object                              |
| 6   | Object.getOwnPropertyDescriptors() | Get property descriptors of an object                                            |
| 7   | Trailing commas                    | Allow trailing commas in function parameters, calls, arrays, objects             |

#### 13.2.1 Async functions (important)

`async` and `await` help write asynchronous code based on Promises in a more readable and concise way.

Example:

```js
// Without async/await:
function main() {
  getAllStudents()
    .then(response => {
      const { data, pagination } = response;
      console.log(data, pagination);
    })
    .catch(error => {
      console.log(error);
    });
}

// With async/await:
async function main() {
  try {
    const response = await getAllStudents();
    const { data, pagination } = response;
    console.log(data, pagination);
  } catch (error) {
    console.log(error);
  }
}
```

#### 13.2.2 Shared memory and atomics

Starting with ES2017, you can create shared memory arrays between web workers and the creator with `SharedArrayBuffer`.

Read more at: [https://github.com/tc39/ecmascript\_sharedmem/blob/master/TUTORIAL.md](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)

#### 13.2.3 String padding

Add characters to the start or end of a string to reach a certain length. Default character is space `' '`.

```js
'1234'.padStart(8);      // '    1234'  
'1234'.padStart(8, '*'); // '****1234'  
'123456'.padStart(8, '*');// '**123456'  
'1234'.padEnd(8, '*');   // '1234****'  
'12'.padEnd(8, '*');     // '12******'  

#### 13.2.4 Object.values()

Get an array of values from an object:

```js
Object.values({
  id: 1,
  name: 'Easy Frontend',
  age: 18,
});
// [1, 'Easy Frontend', 18]
```

#### 13.2.5 Object.entries()

Get an array of `[key, value]` pairs from an object:

```js
Object.entries({
  id: 1,
  name: 'Easy Frontend',
  age: 18,
});
// [
//   ['id', 1],
//   ['name', 'Easy Frontend'],
//   ['age', 18],
// ]
```

#### 13.2.6 Object.getOwnPropertyDescriptors()

Get property descriptors of an object.
Read more: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Object/getOwnPropertyDescriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)

#### 13.2.7 Trailing commas

* Trailing commas are allowed in function parameter lists, calls, arrays, and objects.
* Helps add/remove elements easily and reduces errors with git.

Example with arrays:

```js
[1, 2, 3,].length;   // 3  
[1, 2, 3,,].length;  // 4  
const numberList = [1, 2, 3,];  
console.log(numberList); // [1, 2, 3]  
```

Example with objects (supported since ES5):

```js
const student = {
  id: 1,
  name: 'Easy Frontend',
  age: 18, // trailing comma
};
```

Example with functions (supported since ES2017):

```js
// Function declaration with trailing comma in parameter list
function createStudent({
  id,
  name,
  age,
  hobbies,
  isHero, // trailing comma
}) {
  console.log(id, name, age, hobbies, isHero);
}

// Function call with trailing comma in object
createStudent({
  id: 1,
  name: 'Easy Frontend',
  age: 18,
  hobbies: ['music', 'coding'],
  isHero: false, // trailing comma
});
```

Read more about trailing commas and git benefits at:
[https://pawelgrzybek.com/trailing-comma-in-ecmascript2017-function-parameter-list/](https://pawelgrzybek.com/trailing-comma-in-ecmascript2017-function-parameter-list/)

### 13.3 ECMAScript 2018

Name: ECMAScript 2018
Abbreviation: ES2018
Officially finalized in June 2018

Main features:

| No. | Feature                            | Description                                                     |
| --- | ---------------------------------- | --------------------------------------------------------------- |
| 1   | Rest/Spread properties for objects | Similar to rest/spread for arrays (ES6), but applied to objects |
| 2   | Asynchronous iteration             | `for-await-of` syntax to iterate over async values              |
| 3   | Promise.prototype.finally()        | `.finally()` method to run code regardless of Promise outcome   |
| 4   | Regex improvements                 | (Skipped, will be covered in regex section)                     |

#### 13.3.1 Rest/Spread properties for objects

Before ES2018, rest/spread was only available for arrays:

Rest element (ES6):

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1  
// second = 2  
// rest = [3, 4, 5]
```

Spread element (ES6):

```js
const numberList1 = [1, 2, 3];
const numberList2 = [4, 5, 6];
const mergedList = [...numberList1, ...numberList2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

ES2018 extended this feature to objects.

Rest properties (ES2018):

```js
const student = {
  id: 1,
  name: 'Easy Frontend',
  isHero: false,
}
const { id, ...rest } = student;
// id = 1  
// rest = { name: 'Easy Frontend', isHero: false }
```

Spread properties (ES2018):

```js
const alice = {
  id: 1,
  name: 'Alice',
}
const bob = {
  ...alice,
  name: 'Bob',
};
// bob = { id: 1, name: 'Bob' }
```

#### 13.3.2 Asynchronous iteration with for-await-of

Allows iterating over Promises or iterables that return Promises asynchronously.

Example:

```js
async function fetchData() {
  const studentList = [];
  const pageList = [1, 2, 3, 4];

  for await (const page of pageList) {
    const url = `https://js-post-api.herokuapp.com/api/students?_page=${page}`;
    console.log('-------------');
    console.log('Start', new Date().getTime(), url);
    const response = await fetch(url);
    const responseJSON = await response.json();
    studentList.push(responseJSON.data);
    console.log('End', new Date().getTime(), studentList);
  }
}
fetchData();
```

#### 13.3.3 Promise.prototype.finally()

The `.finally()` method allows running code regardless of whether the Promise fulfilled or rejected, useful for cleanup or common handling.

Example:

```js
fetch('file.json')
  .then(data => data.json())
  .catch(error => console.error(error))
  .finally(() => console.log('finished'));
```