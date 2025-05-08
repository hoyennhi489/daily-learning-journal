**JAVASCRIPT**

**10.14. Iterating through an array and performing calculations with the reduce() function**

`reduce()` is a function used to combine (calculate) all elements in an array into a single value.

**Syntax:**

```javascript
array.reduce((accumulator, currentValue, index, array) => {
    // logic
}, initialValue);
```

* **accumulator**: The accumulated value (intermediate result).
* **currentValue**: The current element of the array.
* **index (optional)**: The position of the current element.
* **array (optional)**: The original array being iterated.
* **initialValue**: The initial value of the accumulator.

**Example:**

```javascript
// Calculate the sum of the elements in the array
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // Output: 15

// Multiply all elements
const nums = [1, 2, 3, 4];
const product = nums.reduce((acc, val) => acc * val, 1);
console.log(product); // Output: 24

// Concatenate strings
const words = ["Hello", "World"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence); // Output: "Hello World"

// Count the occurrences of elements
// Array containing fruits, which may have duplicates
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Use reduce to count the occurrences of each fruit
const count = fruits.reduce((acc, fruit) => {
  // If fruit already exists in acc, increase by 1
  // If not, initialize with 0 and then add 1
  acc[fruit] = (acc[fruit] || 0) + 1;

  // Return accumulator to continue the loop
  return acc;
}, {}); // Start with an empty object {}

console.log(count); 
// Result: { apple: 3, banana: 2, orange: 1 }
```

### When to use `reduce()`?

* When you need to combine data from an array into a single value.
* When you want to avoid using `for` or `forEach` loops.
* When you need to process the array in a customized way, such as calculations, grouping, etc.

---

**10.15. Implementing the `reduce` function with `for...i`**

```javascript
function reduce(arr, callbackFn, initialValue) {
    // Step 1: Check the input
    if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
      throw new Error('Invalid parameters'); // Invalid parameters
    }
  
    // Step 2: If array is empty and no initialValue, throw an error
    if (arr.length === 0 && initialValue === undefined) {
      throw new Error('Should have initialValue when arr is empty');
    }
  
    // Step 3: Determine the starting value and starting index
    const hasInitialValue = initialValue !== undefined;
    let accumulator = hasInitialValue ? initialValue : arr[0];
    let startIndex = hasInitialValue ? 0 : 1;
  
    // Step 4: Iterate through the array with for
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callbackFn(accumulator, arr[i], i);
    }
  
    // Step 5: Return the final result
    return accumulator;
}
```