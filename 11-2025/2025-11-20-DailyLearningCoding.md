**DOM Manipulation in JavaScript (JavaScript DOM Manipulation)**

**1. What is DOM?**
The DOM (Document Object Model) is an object model that the browser creates from HTML code.

The DOM works like a remote control for the webpage, allowing you to change specific parts of the page: text, images, attributes, structure, colors, etc.

The DOM is organized as a tree structure, where each HTML tag is a node.

The browser stores the DOM as JavaScript objects so you can access and manipulate it through code.

**2. How does the browser create the DOM?**

1. The user enters a URL in the browser.
2. The browser connects to the website’s server.
3. The HTML file is downloaded.
4. The content is displayed.
5. The DOM is automatically built in memory from the downloaded HTML.

The DOM is a representation of HTML, used to manipulate it with JavaScript.

**3. How to view and work with the DOM using DevTools**
Open DevTools: right-click on the page → Inspect.
Two important tabs:

* **Elements:** view and edit the DOM using a visual interface (GUI).
* **Console:** use JavaScript to access and modify the DOM.

The global variable that contains the entire DOM is: `document`.

**4. Example: Adding an h2 element to the page using DOM**
**Step 1: Create a new element**

```javascript
const h2 = document.createElement('h2');
```

The element is only created in memory and is not yet displayed on the page.

**Step 2: Add content to the element**

```javascript
h2.innerText = 'This is an h2 heading';
```

**Step 3: Add attributes**

```javascript
h2.setAttribute('id', 'sub-heading');
h2.setAttribute('class', 'secondary');
```

**Step 4: Attach the element to the page**

```javascript
document.body.appendChild(h2);
```

After appending, the h2 tag will appear on the webpage.

**5. Important notes**

* Changes made to the DOM in DevTools only temporarily affect your browser.
* Reloading the page will erase all changes.
* You are not changing the actual website, only the copy on your machine.

---

**JavaScript Selectors and DOM Manipulation**

**1. What is DOM Manipulation?**
One of JavaScript’s most powerful features is its ability to manipulate the DOM.
Examples:

* Clicking a button to change text color
* Displaying a pop-up message
* Changing HTML content in real time

To do this, you need to locate and access elements in the HTML document.

**2. Document Object and DOM**
In JavaScript, you can access the entire webpage using the keyword `document`.
`document` represents the Document Object Model (DOM) – the in-memory version of the webpage.
You can also run `console.log(document)` to view the full DOM structure.

**3. Using Selectors to find elements in the DOM**

**3.1 querySelector**
`document.querySelector()` returns the first element matching a CSS selector.
Example: if the page has 2 `<p>` tags:

```javascript
document.querySelector('p')
```

The command returns the first `<p>` tag.

Similarly:

```javascript
document.querySelector('a')
```

→ returns the first `<a>` tag on the page.

**3.2 querySelectorAll**
`document.querySelectorAll()` returns all elements matching the selector.
Example:

```javascript
document.querySelectorAll('p')
```

→ returns a list containing 2 `<p>` tags.

**3.3 getElementById**
Used to get an element by its ID.
Example: to get an element with `id="heading"`:

```javascript
document.getElementById('heading')
```

→ returns the `<h1>` tag with the ID “heading”.

**3.4 getElementsByClassName**
Used to get all elements with the same class.
Example: for `class="txt"`:

```javascript
document.getElementsByClassName('txt')
```

→ returns a list containing 2 `<p>` tags with the class "txt".

**4. Important notes for beginners**

* With ID:

  * Use singular method → `getElementById`
  * Returns a single element or null if not found.
* With Class:

  * Use plural method → `getElementsByClassName`
  * Returns a collection (list), or an empty collection if no element exists.
* `querySelector`: returns the first element
* `querySelectorAll`: returns all matching elements

---

**Event Handling in JavaScript**

**1. What is an Event?**
When using a webpage and you:

* click a button,
* click a like icon,
* tap on a phone screen,

all of these actions are called **user-triggered events**.

Events occur continuously on a webpage, and JavaScript can:

* listen to these events,
* determine which part of the page will listen,
* run code when the event occurs.

Example:
You want to listen to a click event on the “Add to Cart” button.
When the event occurs, you can update the product quantity in the cart from 1 → 2 → 3…

The code executed when the event occurs is called the **event handler**.

**2. Listening to events with `addEventListener()`**
The most common way to listen to events is using `addEventListener()`.

**Step 1: Select the element to listen to**
Example: listen for a click on the `<body>`:

```javascript
const target = document.querySelector('body');
```

**Step 2: Create an event handler function**

```javascript
function handleClick() {
  console.log('clicked the body');
}
```

**Step 3: Attach the event listener to the element**

```javascript
target.addEventListener('click', handleClick);
```

Now, when you click anywhere on the webpage, the console will show:
`clicked the body`

**3. Listening to events using HTML event attributes**
Another way is to attach events directly in HTML using attributes like `onclick`.

**Step 1: Create another handler**

```javascript
function handleClick2() {
  console.log('clicked the heading');
}
```

**Step 2: Add the attribute to HTML**
In the `<h1>` tag, update it to:

```html
<h1 onclick="handleClick2()">Heading</h1>
```

When clicking on the content inside H1:

* The H1 handler runs (`clicked the heading`)
* The body handler also runs (`clicked the body`)

One click → both listeners are triggered.

**4. Important notes**

* `addEventListener()` is standard, more flexible, and recommended in most cases.
* Event attributes like `onclick=""` are simple but should be limited in large projects.
* One event can trigger multiple listeners simultaneously (event bubbling).
* Clicking outside H1 only triggers the body listener.

---

**Exercise – Updating webpage content with JavaScript**

**1. Learning objectives**

* Know how to get input from the user.
* Know how to display that data on the webpage.
* Understand how to combine DOM Manipulation and Event Handling.

**2. Getting input from users with `prompt()`**
The simplest way to get input:

```javascript
let answer = prompt('What is your name?');
```

If the user enters their name, the value is stored in the `answer` variable.
You can display this value on the page by creating a new `<h1>`:

```javascript
let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1');
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}
```

This method is simple and quick, but not suitable for complex tasks.
So we will switch to using an HTML input.

**3. Creating a test interface using JavaScript**
First, create a heading and an input box:

```javascript
var h1 = document.createElement('h1');
h1.innerText = "Type into the input to make this text change";

var input = document.createElement('input');
input.setAttribute('type', 'text');

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);
```

When running this code:

* The page displays an `<h1>`
* Below it is an input box

**4. Listening to user input events**
We need to listen to the `change` event on the input.
The `change` event triggers when the user:

1. Types text
2. Presses Enter

Example: log the input data to the console:

```javascript
input.addEventListener('change', function() {
    console.log(input.value);
});
```

**5. Completing the exercise – Updating the `<h1>` content**
When the user types in the input and presses Enter, we want the `<h1>` content to update accordingly.

Complete code:

```javascript
var h1 = document.createElement('h1');
h1.innerText = "Type into the input to make this text change";

var input = document.createElement('input');
input.setAttribute('type', 'text');

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value;
});
```

**Result:**

* The user types something into the input box
* Presses Enter
* The `<h1>` content updates to match the entered string

---

**Exercise – Collecting Data and Changing Page Content with Click Events**

**Learning objectives**

* Access and manipulate the content of an HTML element.
* Assign an element to a variable for further processing.
* Practice using arrays and the switch statement.
* Change the content of an `<h1>` tag by clicking.
* Learn how to attach events using `addEventListener()`.

**Task 1: Access example.com**

1. Open your browser.
2. Go to:
   [http://www.example.com](http://www.example.com)
3. Open Developer Tools → Console.

The page will display:

```
Example Domain
This domain is for use in illustrative examples in documents...
```

You will interact directly with this page through the Console.

**Task 2: Get the h1 element into a variable**
Use `document.querySelector()` to select the `<h1>` tag.

```javascript
let h1 = document.querySelector('h1');
```

Now, all operations will be performed via the `h1` variable.

**Task 3: Create an array of data**
Declare a variable `arr` to store strings used to change the `<h1>` content.

```javascript
let arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];
```

**Task 4: Write a click handler function**
You need to write a function `handleClicks()` to change the `<h1>` content each time it is clicked.

Requirements:

* No parameters.
* Use a `switch` statement.
* Check the current value of `h1.innerText`.

Correct version according to the exercise:

```javascript
function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;

        case arr[1]:
            h1.innerText = arr[2];
            break;

        case arr[2]:
            h1.innerText = arr[3];
            break;

        default:
            h1.innerText = arr[0];
    }
}
```

Step-by-step meaning:

* If `h1` shows "Example Domain" → change to "First Click".
* If it shows "First Click" → change to "Second Click".
* If it shows "Second Click" → change to "Third Click".
* Any other state → return to "Example Domain".

**Task 5: Attach click event to h1**
Add a listener to call `handleClicks` when the user clicks `<h1>`:

```javascript
h1.addEventListener('click', handleClicks);
```

**Result**
After running all the code in the Console on example.com:

* Each click on the `<h1>` tag will change its content according to the array order.
* After reaching the last value, it loops back to the first.

This is a simple simulation of:

* Collecting data,
* Checking the state,
* Manipulating the DOM,
* Handling events.

---

**Moving Data on the Web with JSON**

**1. Overview**
Modern web systems operate with millions of websites, services, and databases linked together. To exchange data, these systems need a common data format. Previously, XML was widely used, but since around 2001, **JSON (JavaScript Object Notation)** – proposed by Douglas Crockford – has become the most popular data exchange format.

JSON is popular because:

1. Lightweight and easy to read, with syntax similar to JavaScript objects.
2. Easy to process in JavaScript since JSON is essentially a subset of JavaScript.

**2. What is JSON?**
JSON is:

* A **data exchange format**
* A **file format** (`.json`)
* A specially formatted string with strict rules

All valid JSON is JavaScript, but not all JavaScript is JSON.

For example, JSON does **not** allow functions, `undefined`, `BigInt`, or keys without double quotes.

**3. Real-world JSON example**
Suppose you need stock price data. A data provider may give a file:
`stockPrices.json`
You download it → receive a JSON string → convert it into an object for use in JavaScript.

Example parsed JSON object:

```javascript
const currencyInfo = {
    USD: { ... },
    GBP: { ... },
    EUR: { ... }
};
```

You can then easily access:

```javascript
currencyInfo.USD
```

**4. JSON syntax rules**
JSON only allows the following data types:

*Primitive types:*

* string
* number
* boolean
* null

*Complex types:*

* object
* array

(Functions are not allowed)

Important rules:

* All keys in objects must have double quotes.
* Strings must use double quotes `" "`, not single quotes `' '`.
* Elements are separated by commas.
* Boolean values: `true`, `false`
* Null value: `null`

**5. What happens if JSON is invalid?**
If the JSON string has syntax errors:

* JavaScript cannot parse it.
* If you try to `stringify` a function → it is silently removed.
* If you `stringify` a BigInt → error:

```
Uncaught TypeError: Do not know how to serialize a BigInt
```

**6. Examples of valid JSON**

Simple JSON object:

```json
{"color":"red"}
```

Nested JSON object:

```json
{"color":"red", "nestedObject": { "color": "blue" }}
```

JSON array:

```json
["one", "two", "three"]
```

JSON array containing objects:

```json
[
    { "color": "blue" },
    { "color": "red" }
]
```

**7. Data types not supported by JSON**

| Data Type | Result when stringified |
| --------- | ----------------------- |
| function  | Silently removed        |
| undefined | Removed                 |
| BigInt    | TypeError               |
| Symbol    | Removed                 |

Example error with BigInt:

```javascript
JSON.stringify(123n)
// Uncaught TypeError: Do not know how to serialize a BigInt
```

**8. Workflow for using JSON on the web**
A common workflow:

1. Get JSON data as a string from the server.
2. Use `JSON.parse()` to convert it into an object:

```javascript
const data = JSON.parse(jsonString);
```

3. Work with the data as a JavaScript object.
4. If you need to send data back to the server, convert it to JSON:

```javascript
const json = JSON.stringify(data);
```

---

**Converting Between JSON Strings and JavaScript Objects**

**1. What is JSON?**
JSON (JavaScript Object Notation) is a text string structured like a JavaScript object.
It is not an object itself, but a string describing an object.

Example of a valid JSON string:

```json
{"greeting": "hello"}
```

If you enter a JSON string in the console, it does not throw an error because JSON is part of valid JavaScript syntax.
To work with the data inside JSON, we need to convert it into a real object.

**2. Convert JSON string → JavaScript object (using `JSON.parse`)**

**Step 1: Create JSON string**

```javascript
const JSONstr = '{"greeting": "hello"}';
```

**Step 2: Parse JSON**

```javascript
JSON.parse(JSONstr);
```

This returns a real JavaScript object.

**Step 3: Assign to a variable**

```javascript
const aPlainObj = JSON.parse(JSONstr);
```

Now `aPlainObj` is an object and can be manipulated:

```javascript
aPlainObj.greeting = "hi";
console.log(aPlainObj);
// { greeting: "hi" }
```

**3. Convert JavaScript object → JSON string (using `JSON.stringify`)**

**Step 1: Create an object**

```javascript
const data = {
    name: "John",
    age: 30
};
```

**Step 2: Convert object to JSON string**

```javascript
JSON.stringify(data);
```

The resulting JSON string:

```json
{"name":"John","age":30}
```

**Notes:**

* Keys and string values must use double quotes `" "`.
* JSON only accepts basic values: string, number, boolean, null, array, object.

**4. Limitations of JSON**

**4.1. JSON cannot store functions**

```javascript
const obj = {
    x: 1,
    sayHi() { console.log("hi"); }
};
JSON.stringify(obj)
// {"x":1} → function is removed
```

**4.2. JSON does not support comments**

```json
{
  "name": "Alice" // error
}
```

**4.3. JSON can only represent supported data types**
Example: BigInt will cause an error:

```javascript
JSON.stringify(123n);
// Uncaught TypeError
```

---

**Node.js and npm – Introduction and Basic Usage**

**1. History and Context**

* JavaScript was originally only used in browsers for front-end development.
* In 2009, Ryan Dahl used Google V8 Engine to run JavaScript on the server, creating Node.js.
* Node.js enables JavaScript to be a full-stack language, running both client and server.

**2. What is Node.js?**

* Node.js is a standalone environment for running JavaScript outside the browser.
* Can run:

  * On the command line (terminal/shell)
  * In desktop applications
  * On back-end web apps
* Before Node.js, backends often used PHP, Python, C#, Ruby, Java.

**3. npm – Node Package Manager**

* npm comes with Node.js.
* Manages libraries and frameworks as modules/packages.
* npm module: independent code published on the npm repository (around 11 million modules).

**4. Basic usage of Node.js and npm**

**4.1. Run JavaScript with Node**

```bash
node filename.js   # run JS file
node               # open REPL to run JS directly
```

**4.2. Install a module with npm**

```bash
npm install lowercase   # example installing "lowercase" module
```

* After installation, the module can be imported and used.
* All installed modules are stored in `node_modules`.

**4.3. Create a Node project**

1. Create a project folder.
2. Run npm:

```bash
npm init -y
```

3. Creates `package.json`:

* Contains all project dependencies.
* Easy to share: colleagues only need `npm install` to install all packages.

**4.4. Manage dependencies**

* Dependencies may have their own dependencies.
* Running `npm install` can install hundreds of MB of packages into `node_modules`.

**5. Summary**

* Node.js: runs JavaScript outside the browser, enabling full-stack development.
* npm: manages packages/modules, allowing code reuse from the community.
* Command line usage:

  * `node` – run JS
  * `npm` – install modules from npm repository
* `package.json`: central for dependency management, making projects easy to share and port.

---

**Testing JavaScript**

**1. Why test code?**

* When building an application, you want to make sure it works correctly.
* With JavaScript, before deployment, you need to test your code.
* Testing verifies expected code behavior.

**2. Example: `concatStrings` function**

```javascript
function concatStrings(a, b) {
  return a + b;
}
```

* Goal: concatenate two strings.
* Examples:

```javascript
concatStrings('abc', 'def') // returns 'abcdef'
concatStrings('1', '2')     // returns '12'
```

* You can add comments to describe expectations:

```javascript
// concatStrings('abc', 'def') => 'abcdef'
```

**3. Limitations of comments**

* Can write anything, may be ambiguous.
* No standard structure.
* Cannot execute to test code.

**4. Using a testing framework (e.g., Jest)**

* Tests describe code expectations.
* Tests can be automatically executed.
* Example with Jest:

```javascript
test('concatStrings joins two strings', () => {
  expect(concatStrings('abc', 'def')).toBe('abcdef');
  expect(concatStrings('123', '456')).toBe('123456');
});
```

* `expect` → defines expected result.
* `toBe` → checks if actual result matches expected.

**5. Benefits of testing**

* **Conciseness**: clear and direct.
* **Clarity**: know exact input parameters.
* **Repeatability**: can run multiple times with consistent results.

**6. Red-Green-Refactor Cycle**

1. **Red**: write test before code → test fails.
2. **Green**: write code to make test pass.
3. **Refactor**: improve code without changing behavior.

* Foundation of **Test-Driven Development (TDD)**.

**7. Summary of TDD**
a. Write a failing test.
b. Write code to pass the test.
c. Refactor code while ensuring tests still pass.

**8. Benefits of automated testing**

* Can run any number of times.
* Saves effort.
* Detects bugs early.
* Ensures code works as expected.

---

**Introduction to Software Testing**

**1. Concept of Software Testing**

* Software Testing is the process of verifying software to ensure it works according to requirements.
* Main goal: confirm the software functions correctly, is bug-free, and meets requirements.
* Perspective depends on role:

  * UX Designer: test interface and user experience
  * Project Manager: ensure software works well with other systems
  * Developer: write code that works correctly and doesn’t break the system

**2. Common Types of Testing**
Three main types, visualized as a pyramid:

**a. End-to-End (E2E) Testing**

* Tests the entire software from the end-user perspective.
* Real example: employee tests a new laptop from the production line as a regular user.
* In web development: open app, click, log in, add products to cart…
* Characteristics:

  * Not necessarily performed by developers
  * Slow and time-consuming
* Popular frameworks: WebDriverJS, Protractor, Cypress

**b. Integration Testing**

* Tests how system components work together.
* Example: test modules, APIs, and database interactions.
* Characteristics:

  * Faster and cheaper than E2E, but slower than Unit Test
* Popular frameworks: React Testing Library, Enzyme

**c. Unit Testing**

* Tests the smallest unit of code, usually a function or method.
* Performed in isolation from the rest of the app.
* Characteristics:

  * Fast, easy to write, and run frequently
  * Ensures each small part of code works correctly

**3. Testing Pyramid**

* Base: Unit Test – fastest, cheapest
* Middle: Integration Test – medium speed and cost
* Top: E2E Test – slowest, most expensive

The pyramid emphasizes writing many Unit Tests, fewer Integration Tests, and few E2E Tests to save time and cost while ensuring quality.

**4. Summary**

* Testing confirms software works according to requirements.
* Types: E2E, Integration, Unit – each with different goals, speed, and cost.
* Testing helps:

  * Detect bugs early
  * Ensure software quality
  * Give confidence to UX designers, developers, and project managers