**Learn Basic Debugging by Building a Random Background Color Changer**

**Step 1:** Fix the syntax error and separator "Unexpected token, expected ','".

```javascript
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];
```

**Step 2:**
```javascript
console.log(darkColorsArr.length * Math.random());
```
- `Math.random()` generates a random number between 0 and less than 1.
- `Math.floor()` rounds the number to the nearest integer.
- `darkColorsArr.length` helps limit the random index to the array's length.

**Step 3:**
```javascript
function getRandomIndex() {
  console.log(Math.floor(darkColorsArr.length * Math.random()));
}
getRandomIndex();
```
- `Math.random()` generates a random number between 0 and less than 1.
- When multiplied by 10, it generates a number between 0 and less than 10.
- `Math.floor()` rounds this number down to produce an integer between 0 and 9.

**Step 4:**
```javascript
const body = document.querySelector("body");
```
- JavaScript is case-sensitive: Make sure to use the correct capitalization for method names like `querySelector`.

**Step 5:**
```javascript
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

console.log(bgHexCodeSpanElement);
```
- Selecting elements by ID: When using `querySelector` to select an element by its ID, remember to prefix the ID with a `#`.
- Checking for `null` when selecting elements: If the variable returns `null`, double-check the selector to ensure the element exists and that it's correctly written in the HTML.

**Step 6:**
```javascript
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
```
- `getRandomIndex()` is a function, so you need to call it with `()` to get a value, which is a random index from `darkColorsArr`.
- `darkColorsArr[getRandomIndex()]` will return a random color from the array based on the index returned by `getRandomIndex()`.
- Checking for `undefined`: If a variable has an `undefined` value, ensure that the variable is initialized properly and that all functions are called correctly.

**Step 7:**
```javascript
const btn = document.querySelector("#btn");
console.log(btn);
```

**Step 8:**
```javascript
btn.onclick = changeBackgroundColor;
```
- Assigning a function reference to `onclick`: When using the `onclick` property, you need to assign only the function name (without parentheses) to ensure it is called only when the user clicks on the element.
- Avoid calling the function directly when assigning: If you add parentheses `()`, the function will be called immediately rather than being assigned to the event.