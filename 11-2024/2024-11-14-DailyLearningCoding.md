
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