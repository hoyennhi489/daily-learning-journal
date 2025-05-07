**JAVASCRIPT**

### 10.7. Add/Remove Elements

Functions for adding and removing elements:

| No | Function Name                                 | Description                                      |
| -- | --------------------------------------------- | ------------------------------------------------ |
| 1  | push(element1, ..., elementN)                 | Adds elements to the end of the array            |
| 2  | pop()                                         | Removes the last element of the array            |
| 3  | shift()                                       | Removes the first element of the array           |
| 4  | unshift(element1, ..., elementN)              | Adds elements to the beginning of the array      |
| 5  | splice(start, deleteCount, item1, ..., itemN) | Adds/Removes elements in the middle of the array |

Examples:

```javascript
// Add elements to the end of the array
const numberList = [1, 2, 3];
numberList.push(4, 5); // push() adds elements 4 and 5 to the end of the array.
console.log(numberList); // [1, 2, 3, 4, 5]

// Remove the last element from the array
const numberList = [1, 2, 3];
const lastNumber = numberList.pop(); // pop() removes the last element (3) and returns it.
console.log(numberList, lastNumber); // [1, 2], 3

// Add element to the beginning of the array
const numberList = [1, 2, 3];
numberList.unshift(0); // unshift() adds element 0 to the beginning of the array.
console.log(numberList); // [0, 1, 2, 3]

// Remove the first element from the array
const numberList = [1, 2, 3];
const firstNumber = numberList.shift(); // shift() removes the first element (1) and returns it.
console.log(numberList, firstNumber); // [2, 3], 1

// Add/Remove elements in the middle of the array
const numberList = [0, 3, 5, 7];
numberList.splice(1, 2, 2, 4); // splice(1, 2, 2, 4) starts at index 1, removes 2 elements (3, 5), then inserts 2 and 4.
console.log(numberList); // [0, 2, 4, 7]

// Remove 1 element from the middle
const numberList = [10, 20, 30, 40, 50];
numberList.splice(2, 1); // starts at index 2 (value 30), removes 1 element
console.log(numberList); // [10, 20, 40, 50]

// Remove 2 elements from the middle
const numberList = [10, 20, 30, 40, 50];
numberList.splice(1, 3); // starts at index 1 (value 20), removes 3 elements (20, 30, 40)
console.log(numberList); // [10, 50]
```

### 10.8. Checking Element Existence in an Array

Functions for checking element existence:

| No | Function Name              | Description                                            |
| -- | -------------------------- | ------------------------------------------------------ |
| 1  | every(callbackFn)          | Checks if all elements satisfy the condition           |
| 2  | some(callbackFn)           | Checks if at least one element satisfies the condition |
| 3  | indexOf(searchElement)     | Returns the first index of the element                 |
| 4  | lastIndexOf(searchElement) | Returns the last index of the element                  |
| 5  | includes(searchElement)    | Returns true/false if the element exists               |

Examples:

```javascript
// every() – All elements must satisfy the condition
[2, 4, 6].every(x => x % 2 === 0); // true (all even)
[1, 2, 3].every(x => x > 0);       // true (all > 0)
[1, 2, 3].every(x => x > 1);       // false (1 is not > 1)

const numbers = [2, 4, 6];
const allEven = numbers.every(x => x % 2 === 0);
console.log(allEven); // true

// some() – Only one element must satisfy the condition
[1, 3, 5].some(x => x % 2 === 0); // false (no even numbers)
[1, 3, 4].some(x => x % 2 === 0); // true (4 is even)

const numbers = [1, 3, 4];
const hasEven = numbers.some(x => x % 2 === 0);
console.log(hasEven); // true

// indexOf() – Finds the first occurrence of the element
const tags = ['easy', 'frontend', 'easy'];
const index = tags.indexOf('easy');
console.log(index); // 0

// lastIndexOf() – Finds the last occurrence of the element
const tags = ['easy', 'frontend', 'easy'];
const lastIndex = tags.lastIndexOf('easy');
console.log(lastIndex); // 2

// includes() – Checks if the element exists
const tags = ['easy', 'frontend'];
const isExist = tags.includes('easy');
console.log(isExist); // true
```

### 10.9. `find()` – Search for an Element

In JavaScript, there are two common methods for searching elements in an array:

| Name                  | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| find(callbackFn)      | Finds the first element that satisfies the condition              |
| findIndex(callbackFn) | Finds the index of the first element that satisfies the condition |

#### 10.9.1. `find(callbackFn)` – Finds the first element that satisfies the condition

* **Purpose**: Iterates over the array and finds the first value that satisfies the condition provided in the callback.
* **Returns**: The element found. If no element is found, it returns `undefined`.

Examples:

```javascript
[2, 4, 5, 6].find(x => x % 2 !== 0); // 5 (first odd number)

const numbers = [2, 4, 5, 6];
const firstOdd = numbers.find(x => x % 2 !== 0);
console.log(firstOdd); // 5

const numbers = [2, 4, 7, 10];
const result = numbers.find(x => x > 5); // finds number greater than 5
console.log(result); // 7 (first element greater than 5)
```

#### 10.9.2. `findIndex(callbackFn)` – Finds the index of the first element that satisfies the condition

* **Purpose**: Similar to `find`, but instead of returning the element, it returns the index of the first element that satisfies the condition.
* **Returns**: The index. If no element is found, it returns `-1`.

Examples:

```javascript
[2, 4, 5, 6].findIndex(x => x % 2 !== 0); // 2 (index of the first odd number)

const numbers = [2, 4, 5, 6];
const firstOddIndex = numbers.findIndex(x => x % 2 !== 0);
console.log(firstOddIndex); // 2

const numbers = [2, 4, 7, 10];
const index = numbers.findIndex(x => x > 5);
console.log(index); // 2 (7 is the first element greater than 5, located at index 2)
```

### 10.10. Implementing `find()` with `for...i`

```javascript
function myFind(array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}
```

Explanation:

* `function myFind(array, callbackFn)` is the custom function.
* `array` is the array you want to search.
* `callbackFn` is the function that checks the condition (like `x => x > 5`).
* The loop iterates through the array and checks if the element satisfies the condition in the `callbackFn`. If so, it returns the element and ends the function.
* If no element satisfies the condition, `undefined` is returned.

### 10.11. `map()` – Transform an Array

The `map()` method is used to create a new array by applying a function to each element of the original array. It does not modify the original array but returns a new one with the results.

Syntax:

```javascript
array.map(function(currentValue, index, array) {
    // Return the transformed element
})
```

* `currentValue`: The current element being processed.
* `index` (optional): The index of the current element.
* `array` (optional): The array that `map()` is called on.

Examples:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const numberList = [1, 3, 5, 7];
numberList.map(x => x + 1); // [2, 4, 6, 8]
numberList.map(x => x * 2); // [2, 6, 10, 14]

const wordList = ['easy', 'frontend'];
wordList.map(x => x.length); // [4, 8]
wordList.map(x => `super-${x}`); // ['super-easy', 'super-frontend']
```

**10.12. Filtering an array with the `filter()` function**

* The `filter()` function is a built-in method of the JavaScript array object.
* Purpose: This function is used to create a new array.
* The `filter()` method does not modify the original array.
* Return result: It returns a new array containing the elements that meet the filter condition.

**Syntax:**

```javascript
array.filter(callbackFn(currentValue, index, array) {
  // condition returns true or false
});
```

- `callbackFn`: A function that is called for each element in the array.

  +  `currentValue`: The value of the current element in the array.
  + `index`: The position (index) of the current element in the array (optional).
  + `array`: The original array on which `filter()` was called (optional).
-  The `callbackFn` function must return `true` or `false`:
   + If it returns `true`, the element will be included in the result array.
   + If it returns `false`, the element will be excluded.

**Example:**

```javascript
const numberList = [1, 3, 5, 2, 7];

// Filter even numbers in the array
const evenNumbers = numberList.filter(x => x % 2 === 0);
console.log(evenNumbers); // [2]

// Filter numbers greater than 2
const numbersGreaterThanTwo = numberList.filter(x => x > 2);
console.log(numbersGreaterThanTwo); // [3, 5, 7]

// Filter numbers less than or equal to 10, or multiples of 5
const filteredNumbers = numberList.filter(x => x <= 10 || x % 5 === 0);
console.log(filteredNumbers); // [1, 3, 5, 2, 7]

/*
numberList.filter(x => x % 2 === 0) returns [2] because 2 is an even number.
numberList.filter(x => x > 2) returns [3, 5, 7] because these numbers are greater than 2.
numberList.filter(x => x <= 10 || x % 5 === 0) returns the entire array [1, 3, 5, 2, 7] because all numbers are <= 10.
*/
```

**10.13. Sorting an array with the `sort()` function**

* `sort()` is a method used to sort the elements in an array.
* In JavaScript, the `sort(compareFn)` function is available to sort arrays with a custom condition.
* If a value is `null` or `undefined`, it is automatically placed at the end of the array, with `null` before `undefined`.
* If the `compareFn` function is not provided, the elements will be converted to strings and compared using Unicode values.
* If `compareFn(a, b)` is provided, the result of the function determines the order:

  * If the result < 0, `a` will come before `b`
  * If the result = 0, `a` and `b` are considered equal
  * If the result > 0, `a` will come after `b`
* The `sort()` function returns the sorted array (but it's the same current array, not a new one)

```javascript
const numberList = [2, 5, 3, 1];

// Case without passing compareFn
// JavaScript converts elements to strings and compares using Unicode
numberList.sort(); // [1, 2, 3, 5]

// Example with null and undefined
// JavaScript still converts them to strings to sort; actual result is often as below
[null, 2, 1, 5, 3, undefined, null].sort();
// Common result: [1, 2, 3, 5, null, null, undefined]
// But don't rely on this order if not using compareFn
```

**Ways to write the function:**

```javascript
// v1: Full version – manual comparison
function compareFn(a, b) {
  if (a > b) return 1;     // a comes after b
  if (a === b) return 0;   // no change
  return -1;               // a comes before b
}
[2, 1, 3].sort(compareFn); // Result: [1, 2, 3]

// v2: Shorter version – more efficient for numbers
function compareFn(a, b) {
  return a - b;  
  // < 0 → a before b; 
  // = 0 → no change; 
  // > 0 → a after b
}
[2, 1, 3].sort(compareFn); // Result: [1, 2, 3]

// v3: Inline comparison function using arrow function
[2, 1, 3].sort((a, b) => a - b); // Result: [1, 2, 3]
```