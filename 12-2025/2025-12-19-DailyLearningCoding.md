# Building the “Reserve a Table” Feature for Little Lemon with React

## Lesson Objectives

In this lesson, I work on the table reservation feature for the Little Lemon website.

To implement it correctly and completely, I need to review three core React concepts:

* State in React
* Forms in React
* Unit testing

These three parts are closely connected and are all essential for building a real-world interactive feature.

---

## Why State in React Is Important

State determines the current status of the user interface.

If React did not have state:

* Components would only display static content
* There would be no interaction
* React would merely be a tool for splitting HTML

This helps me understand that components and state are inseparable in React.

---

## The Simplest Example of State: Counter

When learning state, the most common example is a counter.

### Idea

* Display an initial number
* Have buttons to increase or decrease
* When a button is clicked, the displayed number changes immediately

### Example Code

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Số hiện tại: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
    </div>
  );
}
```

### Key Takeaways

* `useState` is used to store state
* When state changes → React re-renders the UI
* This is the foundation for more complex features, including table reservations

---

## State and Forms in React

When working with forms, it is important to clearly understand **controlled components** and **uncontrolled components**.

---

## Controlled Components

A form is fully controlled by React state.

```javascript
import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);

  return (
    <form>
      <input
        placeholder="Tên khách"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <button>Đặt bàn</button>
    </form>
  );
}
```

### Notes

* Data always lives in state
* Easy to control and validate
* Very suitable for reservation forms

---

## Uncontrolled Components

The form is managed by the DOM, and React only reads data when needed using `useRef`.

```javascript
import { useRef } from "react";

function BookingForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Tên khách" />
      <button>Đặt bàn</button>
    </form>
  );
}
```

### Notes

* Uses less state
* Shorter code
* Harder to control data

---

## Why Testing Is Needed

After finishing a feature, I need to be sure that:

* The application works correctly
* Original requirements are still preserved
* New features do not break existing ones

That is why unit testing is necessary.

---

## Unit Test Example for Counter

### Goal

When clicking the **Increase** button, the value should increase by 1.

```javascript
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("tăng số khi nhấn nút Tăng", () => {
  render(<Counter />);

  fireEvent.click(screen.getByText("Tăng"));

  expect(screen.getByText("Số hiện tại: 1")).toBeInTheDocument();
});
```

### Meaning

* Tests behavior instead of implementation
* Helps detect bugs early
* Increases application reliability

---

## Applying This to the Little Lemon Reservation Feature

When building the reservation page:

* State is used to store date, time, and number of guests
* Forms are used to collect information
* Unit tests ensure everything works correctly

These three parts must work together.

---

## Conclusion

* State gives React interactivity
* Forms connect users with the application
* Testing ensures long-term quality

Combining all of these is not simple, but it is a required step to work with React in a serious and professional way.

---

# State in React

## Overview

State in React is the foundation that enables application interactivity.

In the Little Lemon reservation project, state plays the role of storing and updating data that changes over time, such as booking lists or customer information.

To prepare for working with state in this project, I review the key concepts related to state in React.

---

## Related Concepts

### Props

* Props are input data for a component, used to pass data from a parent component to a child component
* Props are read-only and must not be modified directly in the child component

### State

* State is an object that stores data that can change over time in a React application
* When state changes, React automatically re-renders the UI to reflect the new state

### `useState` Hook

`useState` is a hook that allows adding state to functional components.

Basic syntax:

```javascript
const [state, setState] = useState(initialValue);
```

* `state`: current state value
* `setState`: function to update state
* `initialValue`: initial value

---

## Destructuring

### Object Destructuring

Example:

```javascript
import React, { useState } from "react";
```

Here:

* `useState` is extracted directly from the React object
* This allows using `useState` instead of `React.useState`

This approach is commonly used in React imports.

### Array Destructuring

Example:

```javascript
const [tasks, setTasks] = useState([]);
```

* `useState` always returns an array
* The first element is the state
* The second element is the function to update the state

The advantage of array destructuring is that variable names can be chosen freely and do not depend on keys like object destructuring.

---

## Example: Managing a Task List with State

### Initializing State with an Array of Objects

```javascript
import React, { useState } from "react";
import { TaskList } from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Go shopping", done: true },
    { id: 2, task: "Wash dishes", done: false },
  ]);

  return (
    <TaskList tasks={tasks} />
  );
}
```

### Initial Value of the `tasks` State

```javascript
[
  { id: 1, task: "Go shopping", done: true },
  { id: 2, task: "Wash dishes", done: false }
]
```

Using an array of objects as state is very common because:

* It is easy to add, update, or delete items
* It matches how data is usually returned from APIs
* It is convenient for working with complex data

---

## Passing State from Parent to Child Components

In the `return` section:

```jsx
<TaskList tasks={tasks} />
```

Here:

* `tasks` is the state of the `App` component
* This state is passed down to `TaskList` via props
* The `TaskList` component can access the data via `props.tasks`

This demonstrates React’s one-way data flow:

**Parent component → Child component**

---

# Forms in React

## Overview

Forms in React are a special topic because they do not behave the same way as standard DOM elements.

In plain HTML, form elements manage their own state. React, however, prefers to manage state through its own state system.

Therefore, when working with forms in React—especially for features like table reservations—it is essential to understand this difference.

---

## Default Behavior of HTML Forms

Example of a simple HTML form:

```html
<form>
  <label>
    Number of guests:
    <input type="number" name="guests" />
  </label>
  <button type="submit">Submit</button>
</form>
```

### Default Behavior

* When clicking **Submit**, the browser reloads the page or navigates to a new page

In React, this behavior is not desired because applications are usually **Single Page Applications (SPA)**.

---

## `preventDefault()` in React

To prevent the default form behavior, React uses:

```javascript
event.preventDefault();
```

Example:

```javascript
function handleSubmit(event) {
  event.preventDefault();
  console.log("Form has been submitted");
}
```

Thanks to `preventDefault()`:

* The page does not reload
* Form data can be processed using JavaScript
* Full control over the submission flow

---

## Two Ways to Manage Forms

After preventing default behavior, there are two approaches:

* Controlled components
* Uncontrolled components

---

## Controlled Components

### Concept

With controlled components:

* React controls the entire form state
* Input values always come from state
* Every change updates state

### Example

```javascript
import { useState } from "react";

function BookingForm() {
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Số khách:", guests);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Số khách:
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </label>
      <button type="submit">Đặt bàn</button>
    </form>
  );
}
```

### Notes

* Form data always lives in state
* Easy to validate
* Easy to test
* Ideal for important forms like reservations

---

## Uncontrolled Components

### Concept

With uncontrolled components:

* The DOM manages input state
* React only reads values when needed via refs

### Example

```javascript
import { useRef } from "react";

function BookingForm() {
  const guestsRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Số khách:", guestsRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Số khách:
        <input type="number" ref={guestsRef} />
      </label>
      <button type="submit">Đặt bàn</button>
    </form>
  );
}
```

### Notes

* Uses less state
* Cleaner code
* Harder to control and validate data
* Suitable when integrating with external libraries

---

## Quick Comparison

| Criteria         | Controlled  | Uncontrolled |
| ---------------- | ----------- | ------------ |
| Data management  | React state | DOM          |
| Easy to validate | Yes         | No           |
| Easy to test     | Yes         | No           |
| Recommended      | Yes         | Rarely       |

The official React documentation recommends using **controlled components** in most cases.

---

## Final Conclusion

* Forms in React must be handled differently from plain HTML
* `preventDefault()` gives full control over form submission
* Controlled components are the standard approach
* Uncontrolled components are still useful in special cases

---

# Defining the Booking Page in React

## Overview

After completing the application skeleton for Little Lemon, the next step is to build the **Booking Page**, where users can enter information and submit a table reservation request.

The focus of this part is creating a **form controlled by React state**.

The Booking Page will consist of a main component called **BookingPage**, which contains **BookingForm**—the component responsible for handling all form logic.

---

## Requirements for the Booking Form

The form needs to collect the following information:

* Reservation date
* Reservation time
* Number of guests
* Occasion (Birthday, Anniversary, …)
* Submit button

All of these fields will be managed using **React state (Controlled Components)**.

---

## Step 1: Create BookingPage and BookingForm

* **BookingPage**: displays the overall page content
* **BookingForm**: contains the form and manages state

### Simple Example of BookingPage

```javascript
function BookingPage() {
  return (
    <main>
      <h1>Đặt bàn</h1>
      <BookingForm />
    </main>
  );
}
```

---

## Step 2: Build the Form Structure with JSX

Below is the basic form structure, converted from HTML to JSX:

```jsx
<form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
  <label htmlFor="res-date">Chọn ngày</label>
  <input type="date" id="res-date" />

  <label htmlFor="res-time">Chọn giờ</label>
  <select id="res-time">
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
  </select>

  <button type="submit">Đặt bàn</button>
</form>
```

📌 **Notes:**

* `for` in HTML → `htmlFor` in JSX
* All JSX tags must be properly closed

---

## Step 3: Turn the Form into a Controlled Component

At this step, each form field has its own state, and the displayed value always depends on that state.

### Declaring State in BookingForm

```javascript
import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
```

### Connecting State to the Form

```jsx
<form>
  <label htmlFor="res-date">Chọn ngày</label>
  <input
    type="date"
    id="res-date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />

  <label htmlFor="res-time">Chọn giờ</label>
  <select
    id="res-time"
    value={time}
    onChange={(e) => setTime(e.target.value)}
  >
    {availableTimes.map((t) => (
      <option key={t}>{t}</option>
    ))}
  </select>

  <label htmlFor="guests">Số khách</label>
  <input
    type="number"
    id="guests"
    min="1"
    max="10"
    value={guests}
    onChange={(e) => setGuests(e.target.value)}
  />

  <label htmlFor="occasion">Dịp</label>
  <select
    id="occasion"
    value={occasion}
    onChange={(e) => setOccasion(e.target.value)}
  >
    <option>Birthday</option>
    <option>Anniversary</option>
  </select>

  <button type="submit">Đặt bàn</button>
</form>
```

### Why This Approach Matters

* React has full control over form data
* Easy to validate input
* Easy to send data to an API later
* Matches official React recommendations

---

# Adding Booking State

## Overview

In the previous step, BookingForm managed its own state. However, for the Little Lemon reservation system to reflect real-world logic, some state needs to be **shared across multiple components**.

In this lesson, I will:

* Lift state up to a parent component
* Manage a shared list of available times
* Update available times based on the selected date

---

## Lesson Goals

The Booking Page will:

* Display available time slots
* Allow users to select a date → update available times
* Share state between multiple components, such as:

  * BookingForm
  * BookingSlot (displays individual time slots)

To achieve this, we need to apply:

* **Lifting State Up**
* **useReducer** for more complex state than `useState`

---

## Step 1: Lift State Up to the Main Component

### Why Lift State?

If `availableTimes` lives only inside `BookingForm`:

* Other components cannot access it
* Available times cannot be displayed elsewhere

➡️ **Solution:** move the state up to the parent component (`Main`).

### Example: Main Component

```javascript
import { useReducer } from "react";

function Main() {
  return (
    <main>
      <BookingForm />
    </main>
  );
}
```

Now, `availableTimes` will no longer live inside `BookingForm`.

---

## Step 2: Move `availableTimes` to useReducer

### Why useReducer?

* `availableTimes` changes based on the selected date
* Update logic may become more complex in the future
* `useReducer` manages state via actions → new state

### Initial State Function

```javascript
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};
```

### Reducer Function to Update Times

Currently, the logic is simple and just returns the same list:

```javascript
const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return state;
  }
  return state;
};
```

### Using useReducer in Main

```javascript
const [availableTimes, dispatch] = useReducer(
  updateTimes,
  [],
  initializeTimes
);
```

At this point:

* `availableTimes`: list of available time slots
* `dispatch`: function to send actions to update state

---

## Step 3: Pass State and Dispatch to BookingForm

```jsx
<BookingForm
  availableTimes={availableTimes}
  dispatch={dispatch}
/>
```

---

## Step 4: Update BookingForm When the User Selects a Date

### Receiving Props in BookingForm

```javascript
function BookingForm({ availableTimes, dispatch }) {
```

### Dispatch an Action When the Date Changes

```jsx
<input
  type="date"
  onChange={(e) =>
    dispatch({
      type: "UPDATE_TIMES",
      payload: e.target.value,
    })
  }
/>
```

📌 `payload` contains the selected date, which can later be used to call a real API.

### Display Available Times from Shared State

```jsx
<select>
  {availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ))}
</select>
```

---

## BookingSlot Component (Concept)

Each time slot can be its own component:

```javascript
function BookingSlot({ time }) {
  return <li>{time}</li>;
}
```

Later, this component could:

* Mark fully booked time slots
* Disable unavailable times

---

# Unit Testing in React

## Overview

When building a React application, an important question is always:

**How do we know the application is working as expected?**

One simple way is to open the browser and manually test each feature. However:

* This is time-consuming
* Easy to miss bugs
* Not scalable as the application grows

Therefore, automated testing approaches are used, including:

* Unit testing
* Integration testing
* Automated testing

---

## What Is Unit Testing?

Unit testing is the practice of testing the smallest units of source code.

In React applications, a “unit” is usually a **component**.

### Goals

* Ensure components work correctly
* Ensure interactions (clicks, input, rendering) behave as expected
* Detect bugs early when code changes

---

## Example: A Simple Component

Suppose there is a very small React app with just a button to increment a number:

```javascript
import React from "react";

export default function App() {
  const [number, setNumber] = React.useState(1);

  function increment() {
    setNumber((prev) => prev + 1);
  }

  return (
    <>
      <h1 data-testid="currentNumber">{number}</h1>
      <button data-testid="add-one" onClick={increment}>
        Add one
      </button>
    </>
  );
}
```

### Expected Behavior

* Initially displays the number 1
* When the button is clicked → the number increases to 2

---

## Writing a Unit Test for the Component

### Test File: `App.test.js`

```javascript
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("Adds one", () => {
  // Render component
  render(<App />);

  // Get the element displaying the number
  const heading = screen.getByTestId("currentNumber");

  // Check initial value
  expect(heading.textContent).toBe("1");

  // Click the button
  const button = screen.getByTestId("add-one");
  fireEvent.click(button);

  // Check value after click
  expect(heading.textContent).toBe("2");
});
```

---

## Running Unit Tests

After writing the test, run:

```bash
npm test
```

or:

```bash
npm run test
```

If the test passes, the output will look similar to:

```
PASS  src/App.test.js
✓ Adds one (29 ms)

Test Suites: 1 passed
Tests:       1 passed
```

---

## Best Practices for Writing Unit Tests

When writing React tests, keep in mind:

### 1. Avoid Testing Implementation Details

* Do not test internal state
* Do not rely on internal component structure

➡️ **Test behavior, not how the code is written**

### 2. Work with the DOM

* Check what is rendered
* Test user interactions (clicks, input)

### 3. Write Tests the Way Users Use the App

* Users do not care about state
* Users only see the UI and interact with it

### 4. Think About Maintainability

* Tests should be easy to read
* When the UI changes, tests should be easy to update

---

# Adding Unit Tests (Unit Tests)

## Overview

During application development, writing and running tests is an essential step. Testing helps ensure that each small part of the application works as expected, even when the code is modified or extended later.

In this exercise, two unit tests will be written for the Little Lemon web application using React Testing Library, in order to verify:

* The user interface renders correctly
* The state-handling logic works as expected

---

## Objectives of the Exercise

* Become familiar with writing unit tests using React Testing Library
* Test static text rendered in a component
* Test state management logic through reducer functions

---

## Step 1: Testing Static Text in the BookingForm

The first test focuses on ensuring that the `BookingForm` component renders the correct static content, such as headings or labels.

Assume that the `BookingForm` component displays a heading, for example:

```html
<h1>Book Now</h1>
```

### Writing the Test

```javascript
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
```

### Meaning of the Test

* `render()` is used to render the component into the test environment
* `getByText()` finds an element with specific text content
* `toBeInTheDocument()` confirms that the element actually appears in the UI

This test ensures that users always see the correct and necessary content when accessing the booking page.

**Note:** The text content should be adjusted to match the actual content used in the `BookingForm` component.

---

## Step 2: Testing the `initializeTimes` and `updateTimes` Functions

In addition to the UI, the booking application heavily depends on state-handling logic, especially the list of available booking times.

### 1. Testing the `initializeTimes` Function

This function is responsible for initializing the list of available times.

Example:

```javascript
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};
```

#### Unit Test for `initializeTimes`

```javascript
test("initializeTimes returns the correct initial times", () => {
  const result = initializeTimes();
  expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
```

👉 This test confirms that the initial state is set correctly.

---

### 2. Testing the `updateTimes` Function

Currently, the `updateTimes` function simply returns the existing state (there is no logic yet to filter by date).

Example:

```javascript
const updateTimes = (state, action) => {
  return state;
};
```

#### Unit Test for `updateTimes`

```javascript
test("updateTimes returns the same state value", () => {
  const state = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-12-10" };

  const result = updateTimes(state, action);
  expect(result).toEqual(state);
});
```

### Why Is This Test Important?

* The current logic is simple
* Later, when logic is added to update times based on the selected date, this test will help to:

  * Detect bugs
  * Ensure that behavior does not change unexpectedly

---

# Working with APIs and Asynchronous Behavior in React

## Overview

In this lesson, the goal is to send booking data to an API when users make a reservation on the Little Lemon website.

To do this correctly, it is necessary to review some fundamental JavaScript concepts—especially asynchronous behavior—before applying them in React.

React is built on JavaScript, so understanding how JavaScript handles asynchronous operations is essential.

---

## Synchronous and Asynchronous JavaScript

JavaScript is:

* Single-threaded
* Synchronous by nature

This means JavaScript does not handle asynchronous operations on its own. Instead, it:

* Delegates time-consuming tasks to browser APIs
* Receives the results once those tasks are completed

Browser APIs (or Web APIs) include:

* `setTimeout`
* DOM events
* Fetch / XHR (XMLHttpRequest)

**Note:** Browser APIs are not third-party APIs (external APIs used to retrieve data).

---

## Working with Third-Party APIs

Before implementing API calls in React, it is important to know how to:

* Send requests
* Receive JSON data
* Process returned data using plain JavaScript

One of the most common approaches is using `fetch`.

---

## Fetch and Promises

### What Is Fetch?

* `fetch` is a facade function
* It is not part of the JavaScript engine
* It uses the browser’s XHR API under the hood

When calling `fetch`, the result returned is a `Promise`.

---

### Promises in JavaScript

A Promise is an object that represents a value that will be available in the future.

A Promise has three states:

* **Pending** – waiting
* **Fulfilled** – successful
* **Rejected** – failed

When a Promise is fulfilled, JavaScript executes the chained `.then()` functions.

Example (conceptual):

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
    // handle the data
  });
```

---

## Connecting Fetch with React

Calling `fetch` is considered a **side effect** (an operation outside of React’s rendering logic).

Therefore, React requires:

* Using the `useEffect` hook to perform data fetching
* Updating state with `useState` or `useReducer` after receiving the JSON data

### Why Does React Require `useEffect`?

React separates:

* Rendering logic
* Side-effect logic (fetching APIs, external operations)

This separation helps to:

* Make components more predictable
* Prevent uncontrolled repeated API calls
* Make components easier to test and maintain

---

## Sending Data to an API

In addition to fetching data, the application also needs to:

* Submit booking data to an API
* Handle responses from the server

In this lesson:

* Exercises will require completing unit tests related to API interactions
* Ensuring that requests are sent correctly and behave as expected

---

## Source Code Management

Alongside writing code:

* Git should be used
* Track the latest changes
* Commit frequently during development

---

# Connecting the Booking Page to the API

## Overview

In this exercise, the goal is to connect the Little Lemon restaurant’s Booking page with the booking API.

This connection allows the application to:

* Display available times by date
* Prevent double bookings
* Update data in real time

---

## Problem Context

The Booking page already has a UI and form inputs, but it is not yet connected to real data.

Without controlling already-booked times, customers could book the same time slot, leading to a poor user experience.

---

## Solution

* Fetch available time slots from the API
* Update the list when the user selects a different date
* Submit booking information to the API when the form is submitted

---

## Provided API Functions

The API provides two main functions:

### 1. `fetchAPI(date)`

* Accepts a JavaScript `Date` object
* Returns an array of available time slots for that date
* Used to display available booking times

Example result:

```javascript
["17:00", "18:00", "19:30", "21:00"]
```

---

### 2. `submitAPI(formData)`

* Accepts booking form data
* Returns:

  * `true` if submission is successful
  * `false` if submission fails

This function is used when the user clicks the Submit button.

---

## Step 1: Add the API Library

To use the two functions above, the API file must be added to `index.html`:

```html
<script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
```

After this step, `fetchAPI` and `submitAPI` can be called directly in the React code.

---

## Step 2: Update Booking Times from the API

### Initialize Default Times (`initializeTimes`)

**Goal:**

* When the page loads for the first time
* Display available times for the current day

**Approach:**

* Create a `Date` object
* Pass this date to `fetchAPI`

Example logic:

```javascript
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}
```

---

### Update Times When the Date Changes (`updateTimes`)

**Goal:**

* When the user selects a different date
* The list of available times should automatically update

**Approach:**

* Receive the selected date from the form
* Pass that date to `fetchAPI`

Example:

```javascript
function updateTimes(selectedDate) {
  return fetchAPI(new Date(selectedDate));
}
```

---

## Step 3: Verify Application Behavior

After completing the implementation:

* Run the application
* Try selecting different dates
* Observe the list of available times:

  * Does it change by date?
  * Does it display correct data from the API?

If the times update correctly, the API connection is successful.

---

## Importance of the Date Object

In this exercise:

* The API does not accept date strings
* The API requires a JavaScript `Date` object

Therefore:

* Date values from the form must be converted using `new Date()`

* This is a **critical step** for the API to work correctly.

---

# Sending the New Booking Page Data to the API

## Overview

After you have:

* Retrieved available booking times from the API
* Updated the available times based on the date selected by the user

The next step is to submit the booking data to the API and display a confirmation page when the booking is successful.

---

## Problem Context

In the Little Lemon application:

* The user fills out the table booking form
* Clicks the **Submit** button
* The data must be sent to the API
* If the submission is successful → navigate to the booking confirmation page

To achieve this, the following are required:

* A confirmation page
* A function to handle form submission
* Navigation using React Router

---

## Key Concepts

### `submitForm`

* An intermediary function
* Receives data from the form
* Sends that data to `submitAPI`
* Navigates based on the result

### `ConfirmedBooking`

* A component representing the confirmation page
* Only displays a successful booking message

### `useNavigate`

* A hook from React Router
* Used to navigate programmatically
* No need to click a link

---

## Step 1: Create the Booking Confirmation Page

Create the `ConfirmedBooking` component.

This component is very simple and only needs to display a message.

Example:

```js
function ConfirmedBooking() {
  return (
    <div>
      <h1>Booking Confirmed 🎉</h1>
      <p>Thank you for booking a table at Little Lemon.</p>
    </div>
  );
}

export default ConfirmedBooking;
```

### Add a Route for the Confirmation Page

In the routing file (for example, `App.js`):

```js
<Route path="/confirmed" element={<ConfirmedBooking />} />
```

As a result:

* When navigating to `/confirmed`
* The confirmation page will be displayed

---

## Step 2: Set Up the Form Submission Function

Create the `submitForm` function inside the `Main` component.

The goal of this function is to:

* Receive form data
* Send the data to the API
* Navigate to another page if successful

Example logic:

```js
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <BookingForm submitForm={submitForm} />
  );
}
```

### Brief Explanation

* `submitAPI(formData)` returns `true` or `false`
* If it returns `true` → navigate to the confirmation page

---

## Step 3: Update the Submit Handling in `BookingForm`

Receive `submitForm` via props.

Inside `BookingForm`:

```js
function BookingForm({ submitForm }) {
  // form state here
```

Call `submitForm` when the form is submitted.

Example:

```js
function handleSubmit(e) {
  e.preventDefault();

  submitForm({
    date,
    time,
    guests,
    occasion
  });
}
```

Attach it to the form:

```js
<form onSubmit={handleSubmit}>
```

### Result

* When the Submit button is clicked
* The form data is sent to the API
* If successful → the app navigates to the confirmation page

---

## Step 4: Test the Application

### How to Test

1. Run the application
2. Fill out the booking form completely
3. Click **Submit**

### Verify:

* Does the app navigate to the confirmation page?
* Is the confirmation message displayed correctly?

If the `ConfirmedBooking` page is shown → the task is complete.

---

## Overall Data Flow

```
BookingForm
   ↓ (formData)
submitForm (Main)
   ↓
submitAPI(formData)
   ↓
navigate("/confirmed")
```

This flow clearly shows:

* Data flows from the form to the parent component
* API logic is handled in `Main`
* The UI is separated, making it easier to manage

---

# Updating Unit Tests for API Queries

## Overview

Once the booking functionality is connected to the API, the old unit tests are no longer suitable.

This is because:

* `initializeTimes` now calls the API
* `updateTimes` now receives the selected date as additional data

Therefore, the unit tests must be updated to reflect the new behavior.

---

## Objectives of the Task

Update unit tests for:

* `initializeTimes`
* `updateTimes`

Ensure that the tests are compatible with API calls.

Run the tests and confirm that all of them pass.

---

## Review of Key Concepts

### Unit Testing

* Tests individual functions in isolation
* Ensures the logic works correctly
* Helps detect bugs early when code changes

### `initializeTimes`

Responsible for:

* Calling `fetchAPI`
* Retrieving the initial list of available booking times

Currently:

* It no longer returns a hard-coded array

### `updateTimes`

Receives:

* The current `state`
* An `action` (which contains the selected date)

Calls `fetchAPI` based on the new date.

---

## Step 1: Update the Test for `initializeTimes`

### The Problem

Old tests were typically written like this:

```js
expect(initializeTimes()).toEqual([...])
```

However:

* `initializeTimes` now calls `fetchAPI`
* The result depends on the API
* Old tests will fail

### How to Fix the Test

#### Idea:

* No need to check each specific time
* Only verify that:

  * The result is an array
  * The array is not empty

### Example with Jest:

```js
test("initializeTimes returns available times from API", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});
```

### Meaning:

* The mock API used in the exercise always returns valid time slots
* The test only needs to confirm that the function works correctly

---

## Step 2: Update the Test for `updateTimes`

### The Problem

Previously:

* `updateTimes` might not have required a date
* Tests did not pass `action.date`

Now:

* `updateTimes` requires a date
* Old tests will fail

### How to Fix the Test

You need to:

* Create a `Date`
* Pass that date into the action

### Example:

```js
test("updateTimes returns updated times for selected date", () => {
  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    date: new Date()
  };

  const result = updateTimes(state, action);
  expect(result.length).toBeGreaterThan(0);
});
```

### Meaning:

* The test correctly simulates real behavior
* `updateTimes` receives a date → calls the API → returns a list of times

---

## Step 3: Run All Unit Tests

### Execute:

```bash
npm test
```

### Expected Result:

* No tests fail
* `initializeTimes` ✔
* `updateTimes` ✔

If the tests pass:

* The API calling logic is correct
* The reducer and state management are stable

---

## Test Flow Summary

| Function          | What to Verify                              |
| ----------------- | ------------------------------------------- |
| `initializeTimes` | Returns a non-empty array of times          |
| `updateTimes`     | Returns a new array when a date is provided |
| API               | Called indirectly, not tested in detail     |

---

# Adding Unit Tests for Form Validation and Submission

## Overview

In the previous exercise, HTML5 and JavaScript validations were added to the table booking form.

To ensure that these validation functions work correctly and remain error-free when updating or extending the application, we need to write **unit tests** for:

* HTML5 validation
* JavaScript validation functions
* Form submission interactions

Writing unit tests ensures reliable code and reduces the risk of regression errors when adding new features.

---

## Practice Scenario

* **HTML5 Validation Test:** Confirm that the input fields have the correct HTML5 attributes.
* **JavaScript Validation Test:** Ensure validation functions return correct results for valid and invalid data.
* **Form Submission Test:** Verify that the form submits correctly when data is valid.

Run all tests to ensure everything works properly.

---

## Step 1: Test HTML5 Validation

Suppose the booking form has “Name” and “Guests” fields:

```html
<form>
  <input type="text" name="name" required minLength={2} />
  <input type="number" name="guests" required min={1} max={20} />
  <button type="submit">Book Table</button>
</form>
```

### Unit Test Using React Testing Library:

```js
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("name and guests fields have correct HTML5 attributes", () => {
  render(<BookingForm />);
  
  const nameInput = screen.getByPlaceholderText(/name/i);
  expect(nameInput).toHaveAttribute("required");
  expect(nameInput).toHaveAttribute("minlength", "2");

  const guestsInput = screen.getByPlaceholderText(/guests/i);
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "20");
});
```

**Significance:**
Ensures that HTML is set up correctly and input fields comply with HTML5 standards.

---

## Step 2: Test JavaScript Validation Functions

Suppose we have a function to validate the customer name:

```js
export function validateName(name) {
  return name.length >= 2;
}
```

### Unit Test for Valid and Invalid Cases:

```js
import { validateName } from "./validation";

test("validateName returns true if name has 2 or more characters", () => {
  expect(validateName("John")).toBe(true);
});

test("validateName returns false if name has fewer than 2 characters", () => {
  expect(validateName("A")).toBe(false);
});
```

Similarly, tests can be written for functions validating the number of guests.

**Significance:**
Ensures the validation function works correctly for all possible cases.

---

## Step 3: Test Form Submission

Suppose we want to test submitting the form when a user fills in valid data:

```js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("submits form when valid data is entered", () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: "Alice" } });
  fireEvent.change(screen.getByPlaceholderText(/guests/i), { target: { value: "4" } });
  fireEvent.click(screen.getByText(/book table/i));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
```

**Significance:**
Simulates user interaction and ensures the form submits correctly when data is valid.

---

## Step 4: Run All Tests

Run the following command:

```bash
npm test
```

Verify that all unit tests pass 100% before deploying.

---

# Web Accessibility (A11y)

## Overview

Web applications must be accessible to everyone, including people with disabilities or limitations in vision, hearing, cognition, or mobility.

Accessibility is not optional; in many countries, websites and applications must comply with anti-discrimination standards for people with disabilities.

The main goal is to ensure that everyone has an equivalent experience on the web, regardless of their abilities or assistive technology.

---

## Key Elements of Web Accessibility

According to WCAG (Web Content Accessibility Guidelines) by W3C, there are four main principles when building an accessible website:

### 1. Perceivable

Users must be able to perceive the information on the page.
**Example:** Provide text alternatives for images or videos.

* Visually impaired users often rely on screen readers to convert text into speech or braille.

### 2. Operable

Users must be able to interact with and use all functionality of the website.
**Examples:**

* Keyboard navigation
* Selecting links from menus
* Play/pause audio or video

A simple, uncluttered interface and avoiding unnecessary functionality help users with disabilities interact easily.

### 3. Understandable

Information and operation must be easy to understand and use.

* Language should be clear and simple
* Content should be well-organized
* Navigation should be intuitive so users can quickly find information

### 4. Robust

Content and functionality should work well with various assistive technologies, such as screen readers.

* Ensures that everyone can access and use the website regardless of the software or device they are using.

---

## Why Accessibility Matters

* Improves the user experience (UX) for all visitors
* Shows respect and consideration for users, increasing loyalty and support for the business
* Complies with legal regulations regarding disability rights

---

## Conclusion

Web accessibility is a crucial aspect of modern web design and development.

Focusing on accessibility helps to:

* Ensure everyone has a fair experience on the web
* Increase customer satisfaction and credibility
* Make websites compatible with multiple technologies and devices