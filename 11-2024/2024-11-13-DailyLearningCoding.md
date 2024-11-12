**Learn Form Validation by Building a Calorie Counter.**

Step 1:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Calorie Counter</title>
  </head>
  <body>
    <main>
      <h1>Calorie Counter</h1>
      <div class="container">
        <form id="calorie-counter"></form>
      </div>
    </main>
  </body>
</html>
```

Step 2-3:
```html
<form id="calorie-counter">
  <label for="budget">Budget</label>
  <input id="budget" type="number" min="0" placeholder="Daily calorie budget" required />
</form>
```
- The `for="budget"` attribute links the label to the input element with the `id="budget"`, making the form more accessible when using a keyboard or screen reader.
- `<input type="number" id="budget" name="budget" placeholder="Enter your calorie budget">` creates an input field for the user to enter their daily calorie budget. The `type="number"` ensures only numeric values are accepted.

Step 4-7:
```html
<fieldset id="breakfast">
  <legend>Breakfast</legend>
  <div class="input-container"></div>
</fieldset>
<fieldset id="lunch">
  <legend>Lunch</legend>
  <div class="input-container"></div>
</fieldset>
<fieldset id="dinner">
  <legend>Dinner</legend>
  <div class="input-container"></div>
</fieldset>
<fieldset id="snacks">
  <legend>Snacks</legend>
  <div class="input-container"></div>
</fieldset>
<fieldset id="exercise">
  <legend>Exercise</legend>
  <div class="input-container"></div>
</fieldset>
```

Step 8:
```html
<div class="controls">
  <span></span>
</div>
```
- `<div class="controls">` creates a div with the class `controls`, which helps you easily apply CSS or JavaScript to manage the controls for selecting meal types and adding calorie amounts.
- `<span></span>` is an empty element inside the div, where you can add text or icons to support the dropdown menu and button later.

Step 9-10:
```html
<div class="controls">
  <span>
    <label for="entry-dropdown">Add food or exercise:</label>
    <select id="entry-dropdown" name="options">
      <option value="breakfast" selected>Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      <option value="snacks">Snacks</option>
      <option value="exercise">Exercise</option>
    </select>
    <button type="button" id="add-entry">Add Entry</button>
  </span>
</div>
```

Step 11:
```html
<div>
  <button type="submit">Calculate Remaining Calories</button>
  <button id="clear" type="button">Clear</button>
</div>
```
- Using `type="submit"` for the calculate button: The `type="submit"` on the "Calculate Remaining Calories" button submits the form when clicked, triggering any form data processing.
- Using `type="button"` to prevent the clear button from submitting the form: This attribute is necessary to ensure that the "Clear" button only clears the data fields without submitting the form.

Step 12:
```html
<div id="output" class="output hide"></div>
```
- `<div id="output" class="output hide"></div>` creates an empty div to display the calorie calculation results. `id="output"` identifies the div so it can be accessed in JavaScript, while the `output` and `hide` classes allow for custom styling and visibility control.
- The `hide` class can be used to keep the div hidden until there is a result to display, and you can use JavaScript to remove this class when showing the results.

Step 13:
```html
<script src="./script.js"></script>
```

Step 14-16: Write JavaScript code to make the form work.
```javascript
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
```
- Use `getElementById` to retrieve elements by their ID: `getElementById` is a fast and efficient way to access specific HTML elements when you know their IDs.

Step 17:
```javascript
let isError = false;
```
- Initialize the `isError` variable with the value `false`, indicating that there are initially no errors.
- Naming boolean variables with the "is" prefix: This makes it easier to identify that the variable holds a true/false value or a state (such as whether there's an error or not).

Step 18-19:
```javascript
function cleanInputString(str) {
  const regex = /hello/;
}
```
- `function cleanInputString(str) {}` declares a function named `cleanInputString` with the parameter `str`, which helps process the input string from the form field.
- This function will be used to clean the input string by removing unnecessary characters like `+` or `-`.
- Regex helps find patterns of characters: Regex is a powerful tool for checking or removing unwanted characters from the input string.
  + `const regex = /hello/;` initializes a regular expression to find the word "hello" in a string.

Step 20:
```javascript
function cleanInputString(str) {
  const regex = /\+-/;
}
```
- Use character groups in regex: `/\+-/` allows matching any character in the group, helping you easily find and remove unwanted characters.
- Use backslashes to "escape" special characters: `+` and `-` have special meanings in regex, so you need to use `\` to treat them as regular characters.

Step 21:
```javascript
function cleanInputString(str) {
  const regex = /\+-\s/;
}
```
- `\s` is a shorthand in regex that represents any whitespace character, including spaces, tabs, and newlines.
- `[+\-\s]` is a character group that the regex will look for, which includes `+`, `-`, and any whitespace character. This ensures that you can match and remove unwanted characters when necessary.

Step 22:
```javascript
function cleanInputString(str) {
  const regex = /[+-\s]/g;
}
```
- `[+\-\s]` class of characters: Used to match `+`, `-`, and whitespace characters in the input string.
- `g` flag: Ensures the regex will find all matches in the string, not just the first one.

Step 23:
```javascript
function cleanInputString(str) {
  const regex = /[+-\s]/g;
}
```

Step 24:
```javascript
function cleanInputString(str) {
  const regex = /[+\-\s]/g;  // Regex pattern matches plus, minus, and whitespace
  return str.replace(regex, "");  // Replace matched characters with an empty string
}
```

Step 25-26:
```javascript
function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
console.log(cleanInputString("+-99"))
```
- `cleanInputString("+-99")`: Calling the `cleanInputString` function with the string `"+-99"`, which will remove the `+`, `-`, and whitespace characters.

Step 27: Remove console.log() statements.
```javascript
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
```

Step 28:
```javascript
function isInvalidInput(str) {
  const regex = /e/;
}
```
- The `isInvalidInput` function helps filter out invalid inputs that contain exponents, as exponents are typically not allowed in calorie calculation apps.

Step 29:
```javascript
function isInvalidInput(str) {
  const regex = /e/i;
}
```
- The `i` flag makes the regular expression case-insensitive. This is useful when you want to ensure that both `e` and `E` are handled similarly in exponential numbers.

Step 30-31:
```javascript
function isInvalidInput(str) {
  const regex = /[0-9]e[0-9]/i;
}
```
- By using `[0-9]` before and after `e`, it will only match valid exponents like `1e10`, `1E10`, or `2.5e-3`, but not invalid ones like `e10` or `1e`.

Step 32:
```javascript
function isInvalidInput(str) {
  const regex = /[0-9]+e[0-9]+/i;
}
```
- The `+` after `[0-9]` ensures that at least one digit appears before `e`, and no `e` is allowed in the case of

 an integer.

Step 33: Instead of `[0-9]`, use `\d` to represent a digit.
```javascript
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
}
```
- `\d+`: Ensures that at least one digit appears before and after the `e` in the input.