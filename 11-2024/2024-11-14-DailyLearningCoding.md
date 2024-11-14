
**Step 34-36:**
```javascript
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
console.log(isInvalidInput("10"));
```
- `str.match(regex)`: The `.match()` function returns an array containing the strings that match the regular expression in `str`. If no match is found, `.match()` returns `null`.

**Step 37:** Remove the `console.log`.

**Step 38:**
```javascript
console.log(entryDropdown.value);
```

**Step 39-42:**
```javascript
function addEntry() {
  const targetId = '#' + entryDropdown.value;
  const targetInputContainer = document.querySelector(`${targetId} .input-container`);
}
```
- Using `#` before the value of `entryDropdown.value` creates a selector that matches the `id` of the fieldsets you created earlier in HTML. This will help you identify the correct place to add the entry (e.g., adding it to the fieldset with id `#breakfast`, `#lunch`, etc.).
- Template literals make your code shorter and more readable, especially when you need to embed variables into strings.
  + To use template literals, just enclose the string with backticks and place variables inside `${}`.
  + Using template literals helps avoid errors and makes the code more maintainable, as it eliminates the need for string concatenation (`+`).

**Step 43-52:**
```javascript
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.innerHTML += HTMLString;
}
```

**Step 53:**
```javascript
addEntryButton.addEventListener("click", addEntry);
```
- `addEventListener()`: This method is used to attach an event listener to an element. It listens for a specific event (e.g., 'click') and calls a function when that event occurs.
- Callback function: This is the function that will be executed when the event happens.

**Step 54:**
```javascript
const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
```

**Step 55:**
```javascript
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.insertAdjacentHTML();
}
```
- **Using `insertAdjacentHTML()`:** The `insertAdjacentHTML()` method adds new HTML content to an element without affecting its current content. This prevents losing the values in input fields.

**Step 56:**
```javascript
targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
```
- `targetInputContainer`: This is the DOM element where you want to insert the content. In this case, it will be the container that holds the entries you want to add.
- `.insertAdjacentHTML('beforeend', HTMLString)`: This method adds the HTML content to the end of `targetInputContainer` without replacing any existing content. The content added is the value in the `HTMLString` variable.

**Step 57-59:**
```javascript
function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    console.log(item); 
  }
}
```
- **NodeList**: A NodeList is a collection of nodes in an HTML document, created when using methods like `querySelectorAll()` to select elements based on a selector.
- **The `for...of` loop** is a convenient way to iterate through elements of an iterable object (like Arrays, NodeLists, Maps, Sets, etc.).
- **Using `for...of` to loop through a NodeList**: When using `querySelectorAll()` to get a list of HTML elements, you get a NodeList. You can use `for...of` to access each element in the NodeList without needing to convert it into an array.

**Step 60:**
```javascript
for (const item of list) {
  const currVal = item.value;
}
```

**Step 61:**
```javascript
const currVal = cleanInputString(item.value);
```
- `currVal` is assigned the cleaned value of `item.value` by calling `cleanInputString(item.value)`.
- This step ensures `currVal` contains the sanitized version of the user's input, improving consistency and security for the data.

**Step 62-66:**
```javascript
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
}
```
- `invalidInputMatch` will hold the result returned by the `isInvalidInput(currVal)` function, determining if `currVal` is invalid input.
- This step helps check the validity of the input before further processing, ensuring the input data is accurate and meets requirements.
- If `invalidInputMatch` contains an array with invalid results, a message is displayed via the `alert()` function.
- The template literal `${invalidInputMatch[0]}` inserts the first value in the `invalidInputMatch` array into the alert message, helping the user understand the invalid part of the input.
- `alert()`: Displays a warning message to the user about the invalid input.
- `isError = true;`: Sets the `isError` flag to `true` to indicate that an error has occurred within the function.
- `return null;`: Ends the function and returns `null`, signaling that the function didn't succeed due to invalid input.
- `Number(currVal)`: Converts the value of `currVal` into a number. If `currVal` is a valid numeric string, it will be converted into a number. If not, it returns `NaN`.
- `calories += Number(currVal)`: Uses the `+=` operator to add the numeric value of `currVal` to the total calories.

**Step 67:**
```javascript
return calories;
```
- After the loop finishes and all items have been processed, it returns the total calories.

**Step 68:**
```javascript
function calculateCalories(e) {

}
```
- `e`: This is the parameter that receives the event sent by the browser when the event occurs (for example, when the user clicks or inputs something). `e` is a common name for this argument, but you can use another name if needed.

**Step 69:**
```javascript
function calculateCalories(e) {
  e.preventDefault(); 
  isError = false; 
}
```
- `e.preventDefault()`: This method stops the default action of the event. In this case, the default action of a submit event would be to refresh the page, but you want to prevent that so that data can be processed without losing the page.
- `isError = false;`: Resets the global error flag `isError` to `false` before starting to process new data, ensuring that if there was an error in a previous submission, it gets reset.

**Step 70:**
```javascript
function calculateCalories(e) {
  e.preventDefault();
  isError = false;
  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type="number"]');
}
```
- `document.querySelectorAll('#breakfast input[type="number"]')`: This method returns a NodeList containing all `<input>` elements with `type="number"` within the element with id `#breakfast`. This allows you to get all the number input fields within that section of the page.
- `breakfastNumberInputs`: This variable will hold all the number input fields within the element with id `#breakfast`, making it easy to access and process their values.