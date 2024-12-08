
**Step 91-92: `evalFormula` handles formulas, expands cell ranges, and calculates the result.**

```javascript
const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => character => idToText(character + num);
  const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
  const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
  const cellRegex = /[A-J][1-9][0-9]?/gi;
  const cellExpanded = rangeExpanded.replace(cellRegex, match => idToText(match.toUpperCase()));
  const functionExpanded = applyFunction(cellExpanded);
  return functionExpanded === x ? functionExpanded : evalFormula(functionExpanded, cells);
}
```

- **`idToText`**: Used to get the value of a cell from the `cells` list by finding the cell with the corresponding `id`. Each cell in `cells` has an `id` and a `value`.

- **`rangeRegex`**: This regular expression finds cell ranges in the formula, such as A1:B3, where the column is specified by a letter and the row by a number.

- **`rangeFromString`**: Converts the string number values (e.g., "1" and "3") into an array of numbers from 1 to 3.

- **`elemValue`**: This function takes a row number (`num`) and a column letter (`character`) and returns the value of the corresponding cell. For example, for "A1", it returns the value of the cell with ID "A1".

- **`addCharacters`**: Converts a range of columns into cell values for specific rows.

- **`rangeExpanded`**: Uses `rangeRegex` to find cell ranges in the formula and expands them into a list of individual cells, replacing them with actual values.

- **`cellRegex`**: This regular expression finds individual cells in the formula (e.g., "A1") and replaces them with the value of the cell.

- **`functionExpanded`**: Applies a function to the expanded formula (e.g., SUM, AVERAGE).

- **Recursion**: If the calculated formula (`functionExpanded`) differs from the original formula (`x`), the function calls itself to continue processing nested dependent formulas.

**Step 93-96: Update listens for formula input events and updates cells when changes occur.**

```javascript
const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {
    element.value = evalFormula(value.slice(1), Array.from(document.getElementById("container").children));
  }
}
```

- **`event.target`**: Gets the DOM object that the user has changed (e.g., the cell where the user has entered a formula).

- **Cleaning the input**: The `replace(/\s/g, "")` method removes all white spaces from the formula.

- **Check if formula starts with "="**: If the formula starts with the "=" sign (indicating it's a formula), the function calls `evalFormula` to evaluate and calculate the result of the formula. The calculated result is then updated in the cell.



**Step 97-104: `spreadsheetFunctions` provides a set of mathematical and array processing functions that can be used in spreadsheet formulas.**

```javascript
const spreadsheetFunctions = {
  sum,
  average,
  median,
  even: nums => nums.filter(isEven),
  someeven: nums => nums.some(isEven),
  everyeven: nums => nums.every(isEven),
  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num => num + 1),
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  range: nums => range(...nums),
  nodupes: nums => [...new Set(nums).values()]
}
```

- **`sum`**: Calculates the sum of values in an array.
- **`average`**: Calculates the average value of the array.
- **`median`**: Calculates the median value.
- **`even`**: Filters even values in the array.
- **`someeven`**: Checks if there is at least one even value in the array.
- **`everyeven`**: Checks if all values in the array are even.
- **`firsttwo`**: Gets the first two elements of the array.
- **`lasttwo`**: Gets the last two elements of the array.
- **`has2`**: Checks if the array contains the number 2.
- **`increment`**: Increments each value in the array by 1.
- **`random`**: Generates a random number within a specified range.
- **`range`**: Creates a range of numbers from the start value to the end value.
- **`nodupes`**: Removes duplicate values from the array.

**Step 105:**

```javascript
const spreadsheetFunctions = {
  sum,
  average,
  median,
  even: nums => nums.filter(isEven),
  someeven: nums => nums.some(isEven),
  everyeven: nums => nums.every(isEven),
  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num => num + 1),
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  range: nums => range(...nums),
  nodupes: nums => [...new Set(nums).values()],
  "": arg => arg // Default handler function
};
```

- **`"": arg => arg`**: This is a default handler function that returns the argument as it is. This helps avoid errors when the formula is undefined or empty.

--- 
