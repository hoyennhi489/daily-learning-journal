**JAVASCRIPT**

**16.10. Remove Element**

**16.10.1. Remove the Element Itself (`Element.remove()`)**
This is a simple and effective way to remove an element from the DOM.
Example: Automatically remove a message after 3 seconds

```js
const message = document.getElementById('successMessage');

if (message) {
  setTimeout(() => {
    message.remove(); // Remove the message element after 3 seconds
  }, 3000);
}
```

**16.10.2. Remove All Children Elements**
There are several ways to remove all child elements from a parent element. Here are 3 common methods:

| Method                        | Description                          | Pros/Cons                                  |
| ----------------------------- | ------------------------------------ | ------------------------------------------ |
| `target.innerHTML = ''`       | Set `innerHTML` to an empty string   | Not optimal, triggers HTML parser          |
| `target.textContent = ''`     | Set `textContent` to an empty string | Faster, recommended by MDN                 |
| Using `removeChild` in a loop | Remove each `lastElementChild`       | Efficient and allows more explicit control |

Example with `removeChild`:

```js
const ulElement = document.getElementById('todoList');

if (ulElement) {
  while (ulElement.lastElementChild) {
    ulElement.removeChild(ulElement.lastElementChild);
  }
}
```

---

**16.11. Clone Element**
Notes when cloning elements:

* When cloning an element with an `id`, you must change the new `id` to avoid duplication in the DOM.
* `cloneNode(true)` will:

  * Copy all attributes, values, and child content.
  * Copy inline event listeners (e.g., `onclick="..."`)
  * **Does not copy** events attached using `addEventListener()` or `.onclick = ...`

**Example 1: Clone an element with inline event**

```html
<!-- HTML -->
<h1 id="title" onclick="console.log('title click')">Easy Frontend</h1>
```

```js
// JS
const h1Element = document.getElementById('title');

if (h1Element) {
  const clonedH1 = h1Element.cloneNode(true);
  h1Element.id = 'newTitle';
  clonedH1.click(); // Logs: 'title click'
}
```

**Example 2: Clone an element with JavaScript-attached event**

```html
<!-- HTML -->
<h1 id="title">Easy Frontend</h1>
```

```js
// JS
const h1Element = document.getElementById('title');

if (h1Element) {
  h1Element.addEventListener('click', () => {
    console.log('title click');
  });

  const clonedH1 = h1Element.cloneNode(true);
  clonedH1.click(); // ❌ Nothing logged
}
```

**Reason**: Events attached via `addEventListener()` are **not** copied by `cloneNode`.

---

**16.12. Render Complex Todo Item**

**16.12.1. The Problem with Complex HTML**
For simple structures:

```html
<li>Learn JavaScript</li>
```

You can easily use `createElement`:

```js
function createTodoElement(todo) {
  const liElement = document.createElement('li');
  liElement.textContent = todo.title;
  return liElement;
}
```

But with more complex HTML:

```html
<li>
  <div class="todo alert alert-secondary" role="alert">
    <div class="d-flex justify-content-between align-items-center">
      <p class="todo__title mb-0">TODO TITLE</p>
      <div class="todo__actions">
        <button type="button" class="btn btn-success mark-as-done">Finish</button>
        <button type="button" class="btn btn-danger remove">Remove</button>
      </div>
    </div>
  </div>
</li>
```

Manually creating each element using `createElement` becomes complex, error-prone, and hard to maintain.

**16.12.2. Solution: Use the `<template>` Tag**
**Step 1: Define the HTML template**

```html
<template id="todoTemplate">
  <li>
    <div class="todo alert alert-secondary" role="alert">
      <div class="d-flex justify-content-between align-items-center">
        <p class="todo__title mb-0">TODO TITLE</p>
        <div class="todo__actions">
          <button type="button" class="btn btn-success mark-as-done">Finish</button>
          <button type="button" class="btn btn-danger remove">Remove</button>
        </div>
      </div>
    </div>
  </li>
</template>
```

The content inside `<template>` is not rendered directly but can be cloned via JavaScript.

**Step 2: Clone and update content with JavaScript**

```js
function createTodoElement(todo) {
  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return;

  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  const todoTitleElement = todoElement.querySelector('.todo__title');
  if (todoTitleElement) todoTitleElement.textContent = todo.title;

  // TODO: Add event listeners to buttons if needed

  return todoElement;
}
```

---

**16.13. Introduction to Browser Events**

**16.13.1. Common Event Types**

| Event Group     | Examples                                      |
| --------------- | --------------------------------------------- |
| Mouse Events    | click, contextmenu, mouseover, mouseout, etc. |
| Keyboard Events | keydown, keyup                                |
| Form Events     | submit, focus                                 |
| Document Events | DOMContentLoaded                              |
| Window Events   | beforeunload                                  |

**16.13.2. Ways to Attach Events in the DOM**
**Method 1: HTML `onEvent` Attributes**
Not recommended – makes HTML hard to maintain

```html
<button onclick="alert('thank you! :P')">Click me</button>
```

**Method 2: JavaScript `onEvent` Properties**
Only one handler per event

```html
<button id="clickMeButton">Click me</button>
```

```js
const clickMeButton = document.getElementById('clickMeButton');
if (clickMeButton) {
  clickMeButton.onclick = function () {
    alert('thank you! :P');
  };
}
```

**Method 3: `addEventListener` (Recommended)**
Allows multiple handlers for the same event

```js
const clickMeButton = document.getElementById('clickMeButton');
if (clickMeButton) {
  clickMeButton.addEventListener('click', function () {
    alert('thank you! :P');
  });
  clickMeButton.addEventListener('click', function () {
    alert('thank you again haha');
  });
}
```

**16.13.3. How to Remove an Event Listener**

```html
<button id="clickMeButton">Click me</button>
```

```js
const clickMeButton = document.getElementById('clickMeButton');
if (clickMeButton) {
  function handleClick() {
    alert('thank you! :P');
  }

  clickMeButton.addEventListener('click', handleClick);
  clickMeButton.removeEventListener('click', handleClick);
}
```

---

**16.14. Persist Data When Reloading**
**Problem**:
Reloading the page will clear all current UI data unless it is stored.
Example: todo list, form content, shopping cart, etc.

**Solution: Use `localStorage`**

* A browser-based local storage system
* Data persists after reload or browser close
* Only supports strings (→ use `JSON.stringify()` and `JSON.parse()` for objects/arrays)

**Data Flow:**

1. Load data from `localStorage` (if available)
2. Render it to the UI
3. Perform operations (CRUD)
4. Update DOM and save changes to `localStorage`

Example:

```js
// Step 1: Load data
const todoList = JSON.parse(localStorage.getItem('todo_list')) || [];

// Step 2: Render UI
function renderTodoList(todos) {
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    document.getElementById('todoList').appendChild(li);
  });
}
renderTodoList(todoList);

// Step 3: Add new todo and save
function addTodo(newTodo) {
  todoList.push(newTodo);
  const li = document.createElement('li');
  li.textContent = newTodo;
  document.getElementById('todoList').appendChild(li);
  localStorage.setItem('todo_list', JSON.stringify(todoList));
}
```

**Remember:**

* `localStorage` data persists after reload
* Must stringify before saving
* Parse when reading
* Stored in key-value pairs

---

**16.15. Capturing and Bubbling**

**16.15.1. Event Propagation Phases**
When an event is triggered (e.g., click), it goes through 3 phases:

| Phase     | Description                    |
| --------- | ------------------------------ |
| Capturing | From document → target element |
| Target    | On the target element itself   |
| Bubbling  | Back from target → document    |

**JavaScript uses Bubbling by default**

**16.15.2. Some Common Event Object Properties**

| Property                           | Description                                          |
| ---------------------------------- | ---------------------------------------------------- |
| `event.target`                     | The actual element that triggered the event          |
| `event.currentTarget`              | The element handling the current event               |
| `event.eventPhase`                 | Current phase (1: Capturing, 2: Target, 3: Bubbling) |
| `event.stopPropagation()`          | Stops the event from bubbling up                     |
| `event.stopImmediatePropagation()` | Stops other handlers on the same element             |

**Example 1: Default Bubbling**

```html
<div onclick="console.log('div click')">
  <button onclick="console.log('button click')">click me</button>
</div>
```

Result:

```
button click
div click
```

**Prevent Bubbling**

```js
const button = document.getElementById('buttonId');
if (button) {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('button click');
  });

  button.click();
}
// Output: 'button click'
```

**Prevent Other Handlers with `stopImmediatePropagation()`**

```js
const button = document.getElementById('buttonId');
if (button) {
  button.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('button click');
  });

  button.addEventListener('click', (event) => {
    console.log('tada!!!');
  });

  button.click();
}
// Output: 'button click'
```

---

**16.16. Browser Default Actions**

**16.16.1. Common Default Browser Behaviors**

| Event              | Default Behavior                                    |
| ------------------ | --------------------------------------------------- |
| `mousedown`        | Starts text selection                               |
| `click` (checkbox) | Toggles check state                                 |
| `click` (`<a>`)    | Navigates to the `href` link                        |
| `submit`           | Submits form and reloads the page                   |
| `keydown`          | Inserts characters into input or triggers shortcuts |

**16.16.2. How to Prevent Default Behavior**

| Method                                                | Description                         |
| ----------------------------------------------------- | ----------------------------------- |
| HTML: `onclick="return false;"`                       | Not recommended – inline JavaScript |
| JS: `element.onclick = function () { return false; }` | Also not recommended                |
| ✅ JS: `addEventListener` + `event.preventDefault()`   | Recommended approach                |

**Example 1: Prevent link navigation**

```html
<a href="https://google.com" onclick="return false;">Go to Google</a>
```

**Example 2: Using `onEvent` property**

```js
const anchorElement = document.querySelector('a');
anchorElement.onclick = function () {
  return false;
};
```

**Example 3: Using `addEventListener` (Recommended)**

```html
<form id="myForm">
  <button type="submit">Submit</button>
</form>
```

```js
const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form submission prevented!');
});
```

**Note: Passive Events**
Some events like `touchstart`, `wheel`, etc., can be marked with `{ passive: true }` to improve performance, but this prevents use of `preventDefault()`.