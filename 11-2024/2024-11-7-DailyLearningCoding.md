
---

**Review JavaScript Fundamentals by Building a Gradebook App**

**Step 1:**
average = sum of all scores / total number of scores
Some function calls have been provided for you to test your code.
- You can use a loop to iterate through the `scores` array and add up all the scores.
- You can use the `length` property to get the total number of scores.
```javascript
function getAverage(scores) {
  let sum = 0;

  // Loop through the scores array and sum up all the scores
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  // Calculate the average by dividing the sum by the total number of scores
  let average = sum / scores.length;

  // Return the average result
  return average;
}

// Test the function with provided examples
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // Result: 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // Result: 85.4
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100])); // Result: 92.4
```

**Step 2:**
```javascript
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
```
- **if**: Used to check the first condition. If this condition is true, the block of code inside the `if` will execute.
- **else if**: Used to check additional conditions if the first condition is false. You can have multiple `else if` statements to check different conditions.
- **else**: This is the final case that will run if all the previous `if` and `else if` conditions are false. You don't have to include `else`.

**Step 3:**
```javascript
function hasPassingGrade(score) {
  let grade = getGrade(score);
  if (grade !== "F") {
    return true;
  } else {
    return false;
  }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
```
- The `getGrade` function returns the letter grade corresponding to the input score.
- If the letter grade is not "F", the `hasPassingGrade` function returns true; otherwise, it returns false.
- **!==**: The inequality operator checks if two values are different both in value and type. If they are, it returns true; otherwise, false.

**Step 4:**
```javascript
function studentMsg(totalScores, studentScore) {
  // Calculate the class average
  let classAverage = getAverage(totalScores);
  
  // Get the student's letter grade
  let studentGrade = getGrade(studentScore);
  
  // Check if the student passed the course and build the message
  if (studentGrade !== "F") {
    return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You passed the course.";
  } else {
    return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You failed the course.";
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
```
- **getAverage(totalScores)** will return the class average from the `totalScores` list.
- **getGrade(studentScore)** will return the letter grade of the student based on their score.
- String concatenation (`+`) is used to build the message with the necessary information.
- The `if` statement checks if the student’s grade is "F" (failing), and if so, the message will say "You failed the course"; otherwise, it will say "You passed the course."

---

**Learn Basic JavaScript by Building a Role-Playing Game**

**Step 1-2:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./styles.css">
    <title>RPG - Dragon Repeller</title>
    <script></script>
  </head>
  <body>
    <div id="game"></div>
  </body>
</html>
```
- The `<script>` tag wraps JavaScript code in the HTML file.
- JavaScript can either be written directly within this tag or linked to an external `.js` file.

**Step 3:**
```html
<script>
  console.log("Hello World");
</script>
```
- `console.log()` is a method in JavaScript that prints information to the console.
- The console is very useful for detecting and debugging code, as well as tracking variable values.

**Step 4:** Remove `console.log("Hello World");`.
```html
<script src="./script.js"></script>
```
- The `src` attribute in the `<script>` tag allows you to link to an external JavaScript file.

**Step 5:** Add `console.log("Hello World");` to `script.js`.

**Step 6-8:** Remove `console.log("Hello World");` to start the project in the file.
```javascript
let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
```
- The `let` keyword is used to declare variables in JavaScript.
- Variables can be initialized with a value when declared.

**Step 9:**
```javascript
let fighting;
```
- When declaring a variable without initializing a value, it will default to `undefined` in JavaScript.

**Step 10:**
```javascript
let monsterHealth;
let inventory = ["stick"];
```
- An array is a data structure in JavaScript that allows you to store multiple values in a single variable.
- Arrays can contain any type of data, including strings, numbers, or even other arrays.

**Step 11-12:**
```html
<body>
  <div id="game">
    <div id="stats">
      <span class="stat">XP: 0</span> 
      <span class="stat">Health: 100</span> 
      <span class="stat">Gold: 50</span> 
    </div>
    <div id="controls"></div>
    <div id="monsterStats"></div>
    <div id="text"></div>
  </div>
</body>
```
- The `<div>` elements are used to create sections on the webpage to organize and display game information.
- Each `<div>` element has a unique `id` attribute for easy access and manipulation via JavaScript.
- The `<span>` elements are commonly used to group inline content without affecting the layout.

**Step 13:**
```html
<span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
<span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
<span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
```
- The `<strong>` element is used to highlight text, usually displaying it in bold.

**Step 14:**
```html
<div id="controls">
  <button id="button1">Go to store</button>
  <button id="button2">Go to cave</button>
  <button id="button3">Fight dragon</button>
</div>
```

**Step 15:**
```javascript
let button1 = document.querySelector("#button1");
```
- `querySelector()` is a powerful method in JavaScript for selecting elements based on CSS selectors, including IDs, classes, or complex selectors.
- The `id` selector in CSS always starts with `#` (e.g., `#button1`).

**Step 16:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./styles.css">
    <title>RPG - Dragon Repeller</title>
  </head>
  <body>
    <div id="game">
      <div id="stats">
        <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
        <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
        <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
      </div>
      <div id="controls">
        <button id="button1">Go to store</button>
        <button id="button2">Go to cave</button>
        <button id="button3">Fight dragon</button>
      </div>
      <div id="monsterStats"></div>
      <div id="text"></div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```
- Placing the `<script>` tag at the end of the `<body>` ensures that JavaScript runs after the HTML has been fully loaded and processed, allowing you to accurately access and manipulate HTML elements.
- This is a common practice to ensure JavaScript doesn't interfere with page loading.

**Step 17-18:**
```javascript
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
```
- `button1` is a variable that you won't reassign a new value to. If you don't plan to reassign a variable, it's best to use `const` to declare it instead of `let`. This will cause JavaScript to throw an error if you accidentally reassign it.
- The `const` keyword is used when you don't intend to change the value of a variable throughout its lifecycle.
- Using `const` helps protect your code from unintentional reassignment.

**Step 19:**
```html
<div id="monsterStats">
  <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
  <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
</div>
```

**Step 20:**
```html
<div id="text">
  <p>Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.</p>
</div>
```

**Step 21:**
```css
body {
  background-color: #0a0a23;
}
```

**Step 22:**
```css
#text {
  background-color: #0a0a23;
  color: #ffffff;
  padding: 10px;
}
```

**Step 23:**
```css
#game {
  max-width: 500px;
  max-height: 400px;
  background-color: #ffffff;
  color: #ffffff;
  margin: 30px auto 0px;
  padding: 10px;
}
```

**Step 24:**
```css
#controls, #stats {
  border: 1px solid #0a0a23;
  color: #0a0a23;
  padding: 5px;
}
```

**Step 25-26:**
```css
#monsterStats {
  display: none;
  border: 1px solid #0a0a23;
  padding: 5px;
  color: #ffffff;
  background-color: #c70d0d;
}
```

**Step 27:**
```css
.stat {
  padding-right: 10px;
}
```

**Step 28:**
```css
button {
  cursor: pointer;
  color: #0a0a23;
  background-color: #feac32;
  background-image: linear-gradient(#fecc4c, #ffac33);
  border: 3px solid #feac32;
}
```

**Step 29-30:**
```javascript
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
```
