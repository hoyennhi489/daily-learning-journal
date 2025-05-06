**JAVASCRIPT**

**10. Array**

**10.1. Declaring an array**

* An array is a special data type in JavaScript used to store a list of values.
* Each element in an array is indexed starting from 0.
* Arrays can contain different data types: numbers, strings, booleans, objects, etc.
* Naming convention: Use the suffix “List” to easily identify it as an array.
  Example: use `numberList` instead of just `numbers`.
  Example of declaring arrays:

```javascript
// Declare an empty array
const numberList = [];

// Array of numbers
const numberList = [1, 2, 3]; // list of numbers

// Array of strings
const wordList = ['Easy', 'Frontend']; // list of strings

// Array of boolean values
const flagList = [true, false, false]; // list of booleans

// Array containing objects (e.g., list of students)
const studentList = [
  { id: 1, name: 'Văn A' },
  { id: 2, name: 'Thị B' },
  { id: 3, name: 'Văn C' }
];
```

* Arrays can also contain other arrays inside — called nested arrays. This is often used to represent matrices, data tables, etc.

```javascript
// List of lists
const board = [
    [1, 2],
    ['a', 'b', 'c'],
    [true, false, false, false]
];
// Note: You can access elements in a nested array using two indices: board[0][1] will return 2.
```

* An array can contain elements with different data types, including numbers, strings, booleans, null, undefined, objects, and even arrays.

```javascript
// Mixed data types array
const mixedList = [
    1,
    2,
    'word',
    true,
    null,
    undefined,
    { id: 1, name: 'Easy' }, // object
    [1, 2, 3]                 // array
];
// Mixing is possible, but in practice, it should be limited for easier control and debugging.
```

**10.2. Accessing array elements**

* Use square brackets `[]` to access elements at a specific index.
* Index starts from 0.
* If the length of the array is n, the last element has an index of n - 1.

```javascript
const numberList = [3, 5, 7];

numberList[0]; // 3
numberList[1]; // 5
numberList[2]; // 7

numberList.length; // Get the length of the array => 3
numberList[numberList.length - 1]; // Get the last element => 7
```

2D Array:

```javascript
const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// Access each row
board[0]; // [1, 2, 3]
board[1]; // [4, 5, 6]
board[2]; // [7, 8, 9]

// Access specific element (format: board[row][column])
board[0][1]; // 2 (row 0, column 1)
board[1][2]; // 6 (row 1, column 2)
```

**10.3. Introduction to Array Object**
Static methods are functions called directly via `Array`, for example: `Array.isArray()`
Instance methods are functions called on a specific array, e.g., `[1, 2, 3].map(...)`

**10.3.1. Static Methods**

| # | Name                 | Description                                   |
| - | -------------------- | --------------------------------------------- |
| 1 | `Array.isArray(arr)` | Check if `arr` is an array                    |
| 2 | `Array.from()`       | Create a new array from a Set, Iterable, etc. |

**10.3.2. Instance Properties**

```javascript
const numberList = [1, 2, 3];
numberList.length; // 3
```

**10.3.3. Instance Methods**

**Group: Element Checking**

| # | Name                    | Description                                                      |
| - | ----------------------- | ---------------------------------------------------------------- |
| 1 | `every(callbackFn)`     | Check if all elements satisfy a condition                        |
| 2 | `some(callbackFn)`      | Check if at least one element satisfies a condition              |
| 3 | `indexOf(value)`        | Find the first index of the element                              |
| 4 | `lastIndexOf(value)`    | Find the last index of the element                               |
| 5 | `includes(value)`       | Check if the array contains the element                          |
| 6 | `find(callbackFn)`      | Find the first element that satisfies the condition              |
| 7 | `findIndex(callbackFn)` | Find the index of the first element that satisfies the condition |

**Group: Adding/Removing Elements**

| # | Name        | Description               |
| - | ----------- | ------------------------- |
| 1 | `push()`    | Add to the end            |
| 2 | `pop()`     | Remove from the end       |
| 3 | `shift()`   | Remove from the beginning |
| 4 | `unshift()` | Add to the beginning      |
| 5 | `splice()`  | Add/remove in the middle  |

**Group: Common Functions**

| # | Name                  | Description                    |
| - | --------------------- | ------------------------------ |
| 1 | `forEach(callbackFn)` | Iterate over elements          |
| 2 | `map(callbackFn)`     | Transform each element         |
| 3 | `filter(callbackFn)`  | Filter by condition            |
| 4 | `slice(start, end)`   | Get a subarray                 |
| 5 | `reduce(callbackFn)`  | Reduce array to a final result |

**Other Functions**

| # | Name                      | Description                     |
| - | ------------------------- | ------------------------------- |
| 1 | `fill(value, start, end)` | Assign values from start to end |
| 2 | `join(separator)`         | Join into a string              |
| 3 | `concat()`                | Concatenate arrays              |
| 4 | `reverse()`               | Reverse the array               |
| 5 | `sort()`                  | Sort the array                  |

**Example illustrations:**

```javascript
Array.isArray(123); // false
Array.isArray('Easy Frontend'); // false
Array.isArray(true); // false
Array.isArray([]); // true
Array.isArray([1, 2, 3]); // true

[null, undefined].fill(false); // [false, false]
Array(5).fill(1); // [1, 1, 1, 1, 1]
['easy', 'frontend'].join('-'); // 'easy-frontend'
[1, 2, 3].reverse(); // [3, 2, 1]
```

**10.4. Array Destructuring**
Array destructuring is a JavaScript feature that allows you to extract values from an array and assign them to variables in one line:

```javascript
const numberList = [3, 5, 7];

// old way
const first = numberList[0];
const second = numberList[1];
const third = numberList[2];

// new way
const [first, second, third] = numberList;

// direct destructuring
const [first, second, third] = [3, 5, 7, 9, 11]; // only first 3

// rest operator (...)
const [first, second, third, ...rest] = [3, 5, 7, 9, 11];
console.log(rest); // [9, 11]
```

**10.5. Clone array**
Creating a separate copy of an array, so modifying one does not affect the other.

**10.5.1. Using slice()**

```javascript
const originalArray = [1, 2, 3];
const clonedArray = originalArray.slice();

console.log(clonedArray); // [1, 2, 3]

const numberList = [1, 2, 3];
const anotherList = numberList.slice();

anotherList[0] = 4;
console.log(numberList); // [1, 2, 3]
console.log(anotherList); // [4, 2, 3]
```

**10.5.2. Using spread operator (...)**

```javascript
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];

clonedArray[0] = 10;
console.log(originalArray); // [1, 2, 3]
console.log(clonedArray);  // [10, 2, 3]

const fruits = ["Apple", "Banana", "Cherry"];
const clonedFruits = [...fruits];
clonedFruits[1] = "Orange";

console.log(fruits); // ["Apple", "Banana", "Cherry"]
console.log(clonedFruits); // ["Apple", "Orange", "Cherry"]
```

**10.5.3. Using Array.from()**

```javascript
const originalArray = [1, 2, 3];
const clonedArray = Array.from(originalArray);

console.log(clonedArray); // [1, 2, 3]
```

* This method creates a new array from an array-like or iterable object.
* `clonedArray` has the same values as `originalArray`, but it's a different array in memory.

**10.5.4. Using concat()**

```javascript
const originalArray = [1, 2, 3];
const clonedArray = originalArray.concat();

console.log(clonedArray); // [1, 2, 3]

const array1 = [1, 2, 3];
const array2 = [4, 5];
const combined = array1.concat(array2);

console.log(combined); // [1, 2, 3, 4, 5]
```

| Purpose            | Code using concat()     | Result                 |
| ------------------ | ----------------------- | ---------------------- |
| Clone array        | `original.concat()`     | `[1, 2, 3]` (new copy) |
| Concatenate arrays | `array1.concat(array2)` | `[1, 2, 3, 4, 5]`      |

---

**11. Loop – Iterating over arrays**

**11.1. Before ES5 – Use for...i loop**

```javascript
const numberList = [2, 4, 6];

for (let i = 0; i < numberList.length; i++) {
  const number = numberList[i];
  console.log(number); // 2, 4, 6
}
// Use this method when you need the index or want to use break/continue.
```

**11.2. ES5 – Use forEach()**

```javascript
const numberList = [2, 4, 6];

numberList.forEach((number, index) => {
  console.log(number, index);
});
// Automatically iterates each element and calls the function with (value, index)
// Cannot use break or return to exit early
```

**11.3. ES6 – Use for...of**

```javascript
const numberList = [2, 4, 6];

for (const number of numberList) {
  console.log(number); // 2, 4, 6
}
// Easy to write, clear, suitable when you don’t care about index
// Can use break/continue if needed
```