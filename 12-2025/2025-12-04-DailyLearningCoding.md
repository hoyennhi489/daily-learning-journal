# Events in React

## 1. Overview of Events in JavaScript

### 1.1 What are Events?

* Events are a mechanism for JavaScript to interact with HTML.
* They occur when a user or browser performs an action on the page (click, mouse movement, key press, etc.).
* Events help create rich interactive experiences.

### 1.2 How Events Work

* Events are always “listening” in the background.
* When an action occurs, the event is triggered and the corresponding handler code runs.

### 1.3 Simple Event Example

* “Add to Cart” button: each click increases the quantity by 1 (1 → 2 → 3…).

---

## 2. How Events Work in React

### 2.1 Differences Compared to Regular HTML

* HTML uses attributes like:

  * `onclick` (lowercase)
* React uses JSX attributes:

  * `onClick` (camelCase)

### 2.2 React Events Still Rely on the Browser

* The list of events is extensive because the browser supports many interaction types.
* React provides a consistent and optimized way to write event handlers.

---

## 3. Common Event Groups in React

### 3.1 Mouse Events

* `onClick`
* `onDoubleClick`
* `onContextMenu`
* Some belong to the Drag & Drop API.

### 3.2 Clipboard Events

* `onCopy`
* `onCut`
* `onPaste`

### 3.3 Keyboard Events

* `onKeyDown`
* `onKeyUp`
* `onKeyPress`

### 3.4 Composition Events

* Useful for multilingual input (IME).

---

## 4. How React Handles Events (General)

### 4.1 JSX Event Attributes

* Each event is attached using syntax like:

```jsx
<button onClick={handleClick}>Click me</button>
```

### 4.2 Triggering Events

* When the user interacts → event triggers → React calls the handler function.
* Works similarly to plain JavaScript but within the component structure.

---

## 5. Key Focus for Beginners

* No need to memorize the full event list.
* Focus on:

  * Attaching events via JSX.
  * Naming events in camelCase.
  * Each event calls a handler function.
* Advanced events (drag, composition, clipboard) are used only when needed.

---

## 6. Summary

* Events enable powerful interactions in web apps.
* React handles events through JSX with camelCase syntax.
* There are many event groups: mouse, keyboard, clipboard, etc.
* Most importantly, understand the event handling mechanism in React; memorizing all events is unnecessary.

---

# Errors Related to Events in React

## 1. Introduction

* React supports most event types like HTML, but the handling mechanism is different.
* Errors may arise when working with event handlers. Below are common errors and how to handle them.

---

## 2. Event Errors in JavaScript and React

### 2.1 Errors Are Natural in Programming

* Errors occur due to:

  * Syntax mistakes
  * Not accounting for all possible cases
* Errors are part of application development.

### 2.2 Error Handling in JavaScript: try...catch

#### 2.2.1 Example of an Error in JavaScript

```javascript
(5).toUpperCase()
```

* Error occurs because numbers do not have `toUpperCase()`.
* Error message:

```
Uncaught TypeError: 5.toUpperCase is not a function
```

#### 2.2.2 Handling with try...catch

```javascript
try {
    (5).toUpperCase();
} catch(e) {
    console.log(`Oops, you can't uppercase a number. Resulting error:`, e);
}
```

* Result: code does not crash; error message is logged to the console.

---

## 3. Event Errors in React

### 3.1 Example Error in a React Component

```jsx
function NumBillboard(props) {
    return (
      <>
        <h1>{prop.num}</h1>
      </>
    )
}

export default NumBillboard;
```

#### 3.1.1 Cause

* Typo: used `prop` instead of `props`.

#### 3.1.2 Browser Display Error

* React shows an Error Overlay in the browser.
* Message:

```
ReferenceError
prop is not defined
```

#### 3.1.3 Closing the Error Overlay

* Click the X button to hide the error overlay.

### 3.2 Errors in Event Handlers

* Errors can occur when handling events after the UI has rendered.
* Can be handled using JavaScript’s `try...catch` inside the event handler.

#### 3.2.1 Example

```jsx
function handleClick() {
  try {
    undefinedFunction();  // Error occurs here
  } catch (e) {
    console.log("Error in event handler:", e);
  }
}

<button onClick={handleClick}>Click</button>
```

* UI does not crash.
* Error is logged to the console.

---

## 4. Summary

* Event handling errors in React may come from syntax issues, incorrect variable names, or incomplete logic.
* JavaScript provides robust error handling via `try...catch`.
* React displays errors through Error Overlay for easy inspection.
* For errors inside event handlers, use `try...catch` to prevent application crashes.

---

# Event Handling in HTML – JavaScript – React

## 1. Introduction to Browser Events

* Every time the user clicks a button, scrolls the page, closes a popup, etc., the browser generates events.
* Events themselves do nothing; event handlers are needed to respond.

---

## 2. Why Event Handlers Are Needed

* Event: an action that occurs.
* Event handler: an attribute (`onClick`, `onMouseOver`, etc.).
* Action: the result triggered when the event occurs.
* Example:

  * Event: button click
  * Handler: `onClick`
  * Action: open a menu

---

## 3. Event Handling in HTML

### 3.1 HTML Button Example

```html
<button id="js-btn" onclick="clickHandler()">Click me</button>
```

* ID: `js-btn`
* Event attribute: `onclick`
* Value: calls the `clickHandler()` function

### 3.2 Limitations

* Attaching events directly in HTML → hard to maintain, not optimal.
* Better to use separate JavaScript to handle events.

---

## 4. Event Handling in Vanilla JavaScript

### 4.1 Accessing HTML Elements

```javascript
const jsBtn = document.getElementById("js-btn");
```

* Gets the element to listen for events.

### 4.2 Attaching Event Using addEventListener

```javascript
jsBtn.addEventListener("click", function () {
    console.log("clicked");
});
```

* Control events via JavaScript instead of embedding them in HTML.

---

## 5. Event Handling in React

### 5.1 Rules

* Do not manipulate the DOM directly as in plain JavaScript.
* Write declaratively.
* React decides how to update the DOM.

### 5.2 HTML vs React Syntax Differences

| HTML                                   | React (JSX)                                   |
| -------------------------------------- | --------------------------------------------- |
| Event attribute lowercase: `onclick`   | CamelCase: `onClick`                          |
| Value calls function: `clickHandler()` | Value is function reference: `{clickHandler}` |
| Use quotes `" "`                       | Use `{}` to embed expressions                 |

### 5.3 Example Comparison

**HTML**

```html
<button onclick="clickHandler()">Click me</button>
```

**React**

```jsx
<button onClick={clickHandler}>Click me</button>
```

* Note: do not call the function in JSX; just pass the reference.

---

## 6. Passing Handler Functions as Props in React

* Functions can be passed from a parent to a child component via props.

**Example:**

**App.jsx**

```jsx
<Counter onClick={handleCount} />
```

**Counter.jsx**

```jsx
function Counter(props) {
  return <button onClick={props.onClick}>Increase</button>;
}
```

* Child component receives the function and triggers it on event.
* Provides control at the component level, flexible and maintainable.

---

## 7. Conclusion

* Events occur everywhere in the browser.
* HTML can attach events directly, but it’s not optimal.
* Vanilla JavaScript uses `addEventListener`, which is more flexible.
* React uses declarative event handling via props and camelCase JSX attributes.
* Important: do not call functions in JSX; just pass the function reference.

---

# Event Handling and Embedded Expressions in React

## 1. General Introduction

* React allows passing various types of expressions into event handler attributes like `onClick`.
* This lesson covers 4 common ways:

  * Inline ES5 anonymous function
  * Inline ES6 anonymous function (arrow function)
  * Separate function declaration
  * Separate function expression

---

## 2. Inline ES5 Anonymous Function

### Description

* Directly use an ES5-style `function() {}` in the `onClick` attribute.
* Rarely used in modern React apps.

### Example

```jsx
<button onClick={function() { console.log('first example') }}>
  An inline anonymous ES5 function event handler
</button>
```

### When to Use

* Suitable only for small demo snippets.
* Not recommended in production code.

---

## 3. Inline ES6 Anonymous Function (Arrow Function)

### Description

* Pass an arrow function directly into `onClick`.
* Shorter, modern, and more popular than ES5 function usage.

### Example

```jsx
<button onClick={() => console.log('second example')}>
  An inline anonymous ES6 function event handler
</button>
```

### When to Use

* For short event handling logic.
* When you want to keep all logic inside JSX.

---

## 4. Separate Function Declaration

### Description

* Define a function using a declaration (`function name() {}`).
* Pass the function name to the `onClick` attribute.

### Example

```jsx
function App() {
    function thirdExample() {
        console.log('third example');
    }

    return (
        <div className="thirdExample">
            <button onClick={thirdExample}>
                using a separate function declaration
            </button>
        </div>
    );
}
```

### When to Use

* For long or complex event logic.
* When the function needs to be reused in multiple places.

---

## 5. Separate Function Expression

### Description

* Assign an arrow function to a variable (`const`) to create a function expression.
* Pass the variable to the event handler.

### Example

```jsx
function App() {
    const fourthExample = () => console.log('fourth example');

    return (
        <div className="fourthExample">
            <button onClick={fourthExample}>
                using a separate function expression
            </button>
        </div>
    );
}
```

### When to Use

* To separate logic from JSX while keeping arrow function syntax.
* Fits modern React style.

---

## 6. Summary

* There are 4 ways to handle events in React.
* Inline arrow functions and function expressions are the most common.
* Use separate function declarations for complex logic for clarity and maintainability.

---

# Toggling Boolean Values and Handling Multiple Events in JSX

## 1. Goals

* Understand how to toggle Boolean values with user-triggered events.
* Learn to handle multiple events on the same JSX element.
* Practice creating Dark/Light mode using React.

## 2. Concepts

* **Boolean State Variable**: a state variable that can be true or false.
* **Toggle**: switch `true → false` or `false → true`.
* **Event Handling in React**: use attributes like `onClick` or `onMouseOver` to respond to user actions.

---

## 3. Practical Example: Dark Mode Toggle

### Step 1: Create `ModeToggler` Component

```jsx
import React from "react";

function ModeToggler() {
  const darkModeText = <h1>Dark mode is on</h1>;
  const lightModeText = <h1>Light mode is on</h1>;

  let darkModeOn = true;

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn) {
      console.log("Dark mode is on");
    } else {
      console.log("Light mode is on");
    }
  }

  return (
    <div>
      {darkModeOn ? darkModeText : lightModeText}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ModeToggler;
```

### Explanation

1. `darkModeOn = true` → default is Dark mode.
2. `{darkModeOn ? darkModeText : lightModeText}` → conditional JSX shows text based on Boolean value.
3. `handleClick`:

   * `!darkModeOn` → toggle value.
   * `console.log` → check the new state in the console.

---

## 4. Handling Multiple Events

```jsx
<button 
  onClick={handleClick} 
  onMouseOver={() => console.log("Mouse over button")}
>
  Click me or Hover me
</button>
```

* `onClick` → toggle Dark/Light mode.
* `onMouseOver` → log info when hovering over the button.

---

## 5. Important Note

* Using a normal `let` variable alone will **not update the UI** in React.
* To update the interface, use `useState`:

```jsx
import React, { useState } from "react";

function ModeToggler() {
  const [darkModeOn, setDarkModeOn] = useState(true);

  const darkModeText = <h1>Dark mode is on</h1>;
  const lightModeText = <h1>Light mode is on</h1>;

  function handleClick() {
    setDarkModeOn(!darkModeOn);
    console.log(darkModeOn ? "Light mode is on" : "Dark mode is on");
  }

  return (
    <div>
      {darkModeOn ? darkModeText : lightModeText}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ModeToggler;
```

**Advantages of `useState`:**

* React automatically re-renders the UI when state changes.
* No need for manual DOM manipulation.

---

## 6. Summary

* Boolean toggle: use `!state` or `setState(!state)`.
* Conditional JSX: `{condition ? trueValue : falseValue}`.
* Handling multiple events: attach multiple event attributes (`onClick`, `onMouseOver`) to one element.
* React state ensures UI reflects value changes.

---

# Parent-Child and Data Flow in React

## 1. Goals

* Understand parent-child relationships in React.
* Know how to pass data from parent to child using props.
* Avoid multiple updates; keep code clean (DRY principle).

---

## 2. Basic Concepts

* **Parent Component**: holds the original data and passes it to children.
* **Child Component**: receives data and renders it.
* **Props**: mechanism to pass data from parent to child. Data flow is always one-way (parent → child).

---

## 3. Practical Example: Promo Component

### Step 1: Create Components

**PromoHeading.js**

```jsx
import React from "react";

function PromoHeading(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <h2>{props.callToAction}</h2>
    </div>
  );
}

export default PromoHeading;
```

**Promo.js**

```jsx
import React from "react";
import PromoHeading from "./PromoHeading";

function Promo() {
  const data = {
    heading: "99 percent of all items",
    callToAction: "Everything must go"
  };

  return (
    <div>
      <PromoHeading 
        heading={data.heading} 
        callToAction={data.callToAction} 
      />
    </div>
  );
}

export default Promo;
```

---

## 4. Explanation

1. **Single Source of Truth**

   * `heading` and `callToAction` are only stored in the parent (`Promo`).
   * When data changes, child components automatically receive new values.

2. **One-way Data Flow (Parent → Child)**

   * Props go from parent to child.
   * Child cannot modify parent data, making logic easier to control.

3. **Advantages**

   * Avoid updating multiple places when data changes.
   * Reduce the risk of input errors and duplicated code.

---

## 5. Extension

* Data can be used in multiple child components (e.g., sidebar or footer) via the same props.
* To change content, update the parent component; all children automatically receive new data.

---

## 6. Conclusion

* Parent → child data flow simplifies data management.
* Use props to pass dynamic data; avoid updating each component individually.
* This is a fundamental principle for building clean and efficient React applications.

---

# Data Flow in React

## 1. Basic Concepts

* **Props**: Immutable data passed from a parent component to a child component.
* **Unidirectional Data Flow**: Data in React always flows from parent to child, making the app logic clear and easy to understand.
* **Component Tree**: A React app is organized as a tree of components. Data starts at the root component and flows down to children, grandchildren, and deeper nested levels.

---

## 2. Benefits of One-Way Data Flow

1. **Easier to understand app logic**: All data flows in one direction, making it easy to track.
2. **Simplified data flow**: Prevents data from being arbitrarily modified in multiple components.

---

## 3. Example Illustration

**Parent Component**

```jsx
function Dog() {
  return (
    <Puppy name="Max" bowlShape="square" bowlStatus="full" />
  );
}
```

**Child Component**

```jsx
function Puppy(props) {
  return (
    <div>
      {props.name} has <Bowl bowlShape={props.bowlShape} bowlStatus={props.bowlStatus} />
    </div>
  );
}
```

**Grandchild Component**

```jsx
function Bowl(props) {
  return (
    <span>
      {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
    </span>
  );
}
```

* Here:

  * `Dog` is the parent component.
  * `Puppy` is the child component, receiving data via props.
  * `Bowl` is the grandchild component, receiving data from `Puppy`.
* Data moves **one-way** from parent → child → grandchild, making logic clear and easy to debug.

---

## 4. Conclusion

* Props in React are immutable and cannot be modified by child components.
* Data flows in a single direction, from parent to child.
* This flow helps developers:

  * Easily track logic.
  * Reduce errors from arbitrary data changes.
  * Reuse components effectively.

---

# Data Flow in ReactJS

## 1. One-Way Data Flow

* In React, data flows only **from parent → child**.
* Benefits:

  * Easier to understand app logic.
  * Ensures changes propagate correctly through the system.

**Illustration:** Think of data as money:

* Parent (employer) controls the money → this is **props**.
* Child (you) receives money → this is **state**.
* Money always flows from parent to child, never the other way around.

---

## 2. Props (External Data)

* Props are **immutable** data passed from parent to child.
* Children cannot modify props; they only read and display them.
* Props allow passing data without duplicating it.

**Example:**

```jsx
function Child(props) {
  return <h1>{props.message}</h1>;
}
```

---

## 3. State (Internal Data)

* State is data **managed within a component** and can change.
* State enables interactivity in React apps.
* Summary:

  * Props: data from parent, cannot be changed.
  * State: component internal data, can be changed.

**Example:**

```jsx
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentDate: new Date() };
  }

  render() {
    return <Child message={this.state.currentDate.toLocaleTimeString()} />;
  }
}
```

* `App` is the parent component with state `currentDate`.
* `Child` receives data via props `message`.
* When App’s state changes, Child automatically receives the updated value.

---

## 4. Conclusion

* Data always flows from parent → child.
* Props pass external data; state manages internal data.
* Clear distinction between props and state helps:

  * Easier debugging and tracking.
  * Efficient interactive applications.
  * Clean, maintainable code.

---

# React Hooks – Introduction

## 1. What Are Hooks?

* Hooks are special functions introduced in **React 16.8**.
* They allow function components to access **state** and **lifecycle features**.
* Benefits:

  * Reduce repeated code across components.
  * Manage state and complex logic easily.
  * Separate logic into reusable functions.

---

## 2. `useState` Hook

* Most common hook for managing state in function components.

**Basic Syntax:**

```jsx
import { useState } from 'react';

function MyComponent() {
  const [showMenu, setShowMenu] = useState(false);
}
```

* `showMenu` → current state value.
* `setShowMenu` → function to update state.
* `useState(false)` → initial state is `false`.
* Array destructuring keeps the code concise.

---

## 3. Using `useState`

* Update state:

```jsx
setShowMenu(true); // show menu
setShowMenu(!showMenu); // toggle boolean value
```

* `useState` can manage any type: Boolean, String, Number, Array, Object, etc.
* Example: counter

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Clicked {count} times
</button>
```

---

## 4. Benefits of Hooks

* Simple and readable: avoids repeated code.
* Reusable logic: create custom hooks for shared functionality.
* Efficient state management: track data in function components without classes.

---

## 5. Notes on `useState`

* Call hooks at the top level of a component.
* Do not call hooks inside loops, conditions, or nested functions.
* Follow `[state, setState]` naming convention.
* `useState` manages component-specific state; use props or context to share state.

---

# Using Hooks in React

## 1. `useState` – Local State Management

* Allows adding state to function components.
* Local state exists only inside the component.
* Changing state triggers automatic re-render.

**Example:**

```jsx
import { useState } from 'react';

export default function InputComponent() {
  const [inputText, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleReset() {
    setText('hello');
  }

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} />
      <p>Text: {inputText}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```

* `inputText` is the current state.
* `setText` updates the state.
* `handleChange` updates state as the user types.
* `Reset` button resets the state to default.

---

## 2. Managing Multiple Input Fields

* Use a single object to store all input values:

```jsx
import { useState } from 'react';

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: 'Luke',
    lastName: 'Jones',
    email: 'lukeJones@sculpture.com'
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <input name="firstName" value={form.firstName} onChange={handleChange} />
      <input name="lastName" value={form.lastName} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <p>{JSON.stringify(form)}</p>
    </div>
  );
}
```

* `form` is an object containing all input values.
* `setForm` updates individual fields using the spread operator.

---

## 3. Rules for Using Hooks

* Call hooks at the top level, not inside loops or conditions.
* Only call hooks from function components or custom hooks.

---

## 4. `useRef` – Accessing the DOM Directly

* `useRef` allows direct DOM access and manipulation.
* Common uses: focus input, store previous value, other DOM interactions.

**Example:**

```jsx
import { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

* `inputEl.current` points to the DOM element.
* Clicking the button immediately focuses the input.

---

## 5. Conclusion

* `useState` tracks and updates local state in function components.
* `useRef` provides direct access to DOM when needed.
* Hooks keep code clean, readable, and reusable.
* Multiple hooks and custom hooks can be combined to separate reusable logic.

---

# State in React: Basic Concepts and How to Use It

## 1. Concept of State

* **State** is the internal data of a React component that determines its behavior and current UI.
* When state changes, the component automatically **re-renders**, ensuring the UI stays in sync with the data.
* State is usually used for data that changes over time, e.g., alarm mode, input values in a form.
* Think of state as the **“internal memory”** of a component: it stores the information needed to render correctly.

---

## 2. Stateful vs Stateless Components

**Stateless Component**

* Has no state; only displays static data or data received from props.
* Example:

```jsx
function Greeting() {
  return <h1>Hello World</h1>;
}
```

**Stateful Component**

* Has state and can change data over time.
* Example using `useState` hook:

```jsx
import React, { useState } from 'react';

function Clock() {
  const [mode, setMode] = useState('alarmOff'); // initial state is 'alarmOff'

  return (
    <div>
      <p>Current mode: {mode}</p>
      <button onClick={() => setMode('alarmOn')}>Alarm On</button>
      <button onClick={() => setMode('snooze')}>Snooze</button>
    </div>
  );
}
```

* `mode` is the current state value.
* `setMode` is the function to update the state, acting like a **“switch”** to change component behavior.

---

## 3. Relationship Between State and Props

* **Props**: Data passed from parent to child; children cannot modify props.
* **State**: Internal component data; components can change state to control UI.
* Components can pass state down to children via props.

**Example:** If `Clock` has a child `DisplayMode`:

```jsx
function DisplayMode({ mode }) {
  return <p>The alarm mode is {mode}</p>;
}

// In Clock
<DisplayMode mode={mode} />
```

---

## 4. `useState` and Array Destructuring

* `useState` returns an array with **two elements**:

  1. The current state value (`mode`)
  2. A function to update the state (`setMode`)
* Using **array destructuring** in ES6, you can quickly assign these:

```jsx
const [mode, setMode] = React.useState('alarmOff');
```

* This is the standard way to create state in function components.

---

## 5. When to Use State

* When you need to **change the UI** based on user interaction.
* Examples: alarm modes like `alarmOn`, `alarmOff`, `snooze`.
* State keeps related components synchronized. When state changes, all dependent components automatically update.

---

# Why and How to Use State in React

## 1. Why Use State

* State manages data that **changes over time** in a React app.
* It is **internal component data**, automatically triggering re-render on changes.
* Ensures the user always sees the latest UI.
* In short, state is the component’s **“internal memory”** used to control the UI.

---

## 2. `useState` Hook

* Most common hook for creating and tracking state in function components.
* Using `useState` provides:

  1. Current state value (e.g., `word`)
  2. Function to update state (e.g., `setWord`)

```jsx
import React, { useState } from 'react';

function App() {
  const [word, setWord] = useState('Eat'); // initial state is 'Eat'
  
  return <h1>{word} at Little Lemon</h1>;
}
```

---

## 3. Updating State

* **Do not modify state directly:** `word = 'Drink'` will not work.
* Use the setter function to update state (e.g., `setWord`).
* Often combined with event handlers to update state on user actions.

**Example – updating on button click:**

```jsx
function App() {
  const [word, setWord] = useState('Eat');

  function handleClick() {
    setWord('Drink'); // update state
  }

  return (
    <div>
      <h1>{word} at Little Lemon</h1>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}
```

* Clicking the button re-renders the component, showing **“Drink at Little Lemon”**.

---

## 4. State and Props

* Parent components can pass state down to children via props.
* Child components display data based on props without directly changing the parent’s state.

```jsx
function Heading({ message }) {
  return <h1>{message}</h1>;
}

function App() {
  const [word, setWord] = useState('Eat');

  return <Heading message={`${word} at Little Lemon`} />;
}
```

* When `word` changes, `Heading` automatically receives the updated value and re-renders.

---

## 5. Conclusion

* State is a **powerful tool** to manage changing data in React.
* `useState` allows you to create, track, and update state easily.
* Always update state via the setter function, often tied to events (click, input, etc.).
* State ensures the UI stays synchronized with data, keeping the app functional and consistent.

---

# Advanced State Management in React with Context API and useReducer

## 1. Challenges in Complex Applications

* Passing state from parent → child → grandchild using props (**prop drilling**) works well for small apps.
* In larger applications with many component layers, prop drilling becomes **complex and hard to maintain**.
* There is a need for a **centralized state solution** that allows multiple components to access data directly.

---

## 2. Context API – Global State Management Solution

* **Context API** acts like a **“data teleport”**, bypassing the need to pass props through multiple component layers.
* How it works:

  1. **Provider**: Stores the state and wraps components that need access.
  2. **Consumer**: Components that need data retrieve it directly from the Provider.
* Example:

  * `MealsProvider` holds the state `meals` (array of meals).
  * `MealsList` and `Counter` access state directly from `MealsProvider` via `useContext`.
* Advantages:

  * Eliminates prop drilling.
  * Centralized state management, easy to scale.

---

## 3. useReducer – Managing Complex State

* `useReducer` is the **“superpower” of useState**.
* It takes an **initial state** and a **reducer function** to handle complex actions.
* How it works:

  1. Use `dispatch({ type: "ACTION_TYPE" })` instead of `setState`.
  2. Reducer determines how to update state based on the action.
* Example – rideshare app:

  * `state = { money: 100 }`
  * `PICKUP_CUSTOMER` → increases money
  * `REFUEL` → decreases money
  * Buttons trigger actions, and `useReducer` updates state automatically.

---

## 4. Summary

* **Prop drilling**: Only suitable for small apps.
* **Context API**: Centralized state management; avoids passing state through many layers.
* **useReducer**: Handles complex state with clear update logic.
* Combining **Context API + useReducer** is a common pattern for efficient state management in multi-layered React applications.

---

# Stateful vs Stateless Components in React

## 1. Concept

**Stateful Component**

* Stores internal state.
* State can change based on user actions or application logic.
* Usually the parent component passes state down to child components.

**Stateless Component**

* Does not store state.
* Receives data via props from the parent component.
* Props are **immutable** in the child component (cannot be changed internally).

---

## 2. Decision Rules

| When                                      | Component Type |
| ----------------------------------------- | -------------- |
| Component does not need state to function | Stateless      |
| Component needs state to function         | Stateful       |

* Basic principle: **Parent is stateful → children are stateless**.
* Children receive data and render, but do not change state themselves.

---

## 3. Passing Data

**Stateful Component (Parent):**

* Uses `useState` to store state.
* Passes data to child components via props.
* Can pass state, JavaScript values, or functions.

**Stateless Component (Child):**

* Receives props and renders UI.
* Does not modify props.
* Can call a function from props to change parent state if necessary.

---

## 4. Example

**App.js – Stateful Component**

```jsx
import { useState } from "react";
import Child from "./Child";

function App() {
  const [message, setMessage] = useState("Hello from App!");
  
  return <Child message={message} />;
}
```

**Child.js – Stateless Component**

```jsx
function Child({ message }) {
  return <h1>{message}</h1>;
}
```

* `App` contains the state `message` → **stateful**
* `Child` receives `message` via props → **stateless**

---

## 5. Notes

* Stateless components **cannot directly change state** but can call functions passed via props to update the parent state.
* This approach separates **logic from UI**, making large applications easier to maintain.