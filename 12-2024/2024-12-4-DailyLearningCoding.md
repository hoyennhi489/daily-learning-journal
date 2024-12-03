**Learn Functional Programming by Building a Spreadsheet.**

### **Step 1-5**:
```javascript
window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
}
```

1. **`window.onload`**:
   - This event handler is triggered when the entire content of the page (including HTML, CSS, images, etc.) has fully loaded. The code inside the function will run only after the page is completely loaded.

2. **`document.getElementById("container")`**:
   - Retrieves the HTML element with the `id` attribute set to `"container"`. The variable `container` stores a reference to this element, allowing further DOM manipulation.

3. **`createLabel(name)`**:
   - This function creates a new `div` element (a label) with the given `name` and appends it to the `container` element.

4. **Inside `createLabel`**:
   - **`document.createElement("div")`**: Creates a new `div` element.
   - **`label.className = "label"`**: Adds a CSS class `label` to the `div` element.
   - **`label.textContent = name`**: Sets the text content of the `div` to the `name` passed in as a parameter.
   - **`container.appendChild(label)`**: Appends the newly created `div` element to the container in the DOM.


### **Step 6-9**:
```javascript
const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
```

1. **`range(start, end)`**:
   - A function that generates an array of numbers starting from `start` to `end`.

2. **Inside `range`**:
   - **`Array(end - start + 1)`**: Creates an empty array with a length equal to the number of elements between `start` and `end` (inclusive).
   - **`.fill(start)`**: Fills the array with the initial value of `start`.
   - **`.map((element, index) => element + index)`**: Iterates over the array, adding `index` to `element` to create a sequence of numbers from `start` to `end`.


### **Step 10-12**:
```javascript
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));
```

1. **`charRange(start, end)`**:
   - A function that generates an array of characters from `start` to `end`.

2. **Inside `charRange`**:
   - **`start.charCodeAt(0)`** and **`end.charCodeAt(0)`**: Convert the first characters of `start` and `end` into their Unicode values (e.g., `'A'` becomes `65`).
   - **`range(start.charCodeAt(0), end.charCodeAt(0))`**: Calls the `range` function to generate an array of Unicode values from `start` to `end`.
   - **`.map(code => String.fromCharCode(code))`**: Converts each Unicode value back into its corresponding character using `String.fromCharCode(code)`.


### **Step 13-19**:
```javascript
window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach(number => {
    createLabel(number);
    letters.forEach(letter => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      container.appendChild(input);
    })
  })
}
```

1. **Creating the Labels for Letters**:
   - **`charRange("A", "J")`**: Generates an array `["A", "B", ..., "J"]` using the `charRange` function.
   - **`letters.forEach(createLabel)`**: Loops through the `letters` array and creates labels for each letter.

2. **Creating Labels for Numbers and Input Fields**:
   - **`range(1, 99)`**: Generates an array of numbers from 1 to 99 using the `range` function.
   - **`letters.forEach(letter)`**: For each letter in the `letters` array, it creates an input field for each number.
   - **Creating the `<input>` fields**:
     - **`input.type = "text"`**: Sets the input type to `"text"`.
     - **`input.id = letter + number`**: Sets the `id` of the input to be a combination of the letter and number (e.g., `A1`, `B1`, ..., `J99`).
     - **`input.ariaLabel = letter + number`**: Sets an accessible label for the input field to improve accessibility.
     - **`container.appendChild(input)`**: Appends the newly created input field to the container.


### **Step 20-22**:
```javascript
const sum = nums => nums.reduce((acc, el) => acc + el, 0);
const isEven = num => num % 2 === 0;
const average = nums => sum(nums) / nums.length;
```

1. **`sum(nums)`**:
   - A function that calculates the sum of all numbers in the `nums` array using the `reduce` method.

2. **`isEven(num)`**:
   - A function that checks if a number `num` is even by using the modulo operator (`num % 2 === 0`).

3. **`average(nums)`**:
   - A function that calculates the average of the numbers in the `nums` array by dividing the sum of the numbers by the length of the array.


### **Step 23-25**:
```javascript
const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1;
  return isEven(length)
    ? average([sorted[middle], sorted[middle + 1]])
    : sorted[Math.ceil(middle)];
}
```

1. **`median(nums)`**:
   - A function that calculates the median of the `nums` array.
   
2. **Inside `median`**:
   - **`sorted = nums.slice().sort((a, b) => a - b)`**: Creates a sorted copy of the `nums` array.
   - **`length`**: Stores the length of the sorted array.
   - **`middle`**: Determines the index of the middle element (for odd-length arrays) or the two middle elements (for even-length arrays).
   - **If the length is even**: The median is the average of the two middle values.
   - **If the length is odd**: The median is the middle value.


### **Step 26**:
```javascript
const spreadsheetFunctions = {
  sum,
  average,
  median
}
```

1. **`spreadsheetFunctions`**:
   - An object that groups together the functions `sum`, `average`, and `median` for easy access.


### **Step 27-32**:
```javascript
const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {
    // Handle formula
  }
}
```

1. **`update(event)`**:
   - This function is triggered when an input field's value changes (`onchange` event).
   
2. **Inside `update`**:
   - **`event.target`**: Refers to the element that triggered the event (the input field).
   - **`value.replace(/\s/g, "")`**: Removes any whitespace from the input value.
   - **`value.startsWith('=')`**: Checks if the input value starts with the `=` character (indicating a formula).


### **Step 33-35**:
```javascript
const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
}
```

1. **`evalFormula(x, cells)`**:
   - A function designed to evaluate a formula based on the input `x` and an array of `cells`.
   
2. **`idToText(id)`**:
   - A helper function that retrieves the value of a cell by searching for the cell with the matching `id`.
