# Introduction to React Hooks

React Hooks were first introduced at a React conference. Initially, many engineers were skeptical about whether Hooks were necessary, but after using them, most found that they made code shorter, easier to maintain, and more performant.
Hooks allow you to use state, lifecycle, and reusable logic without needing class components. Previously, class components became increasingly bulky, hard to split up, and difficult to reuse. Hooks solved these weaknesses.

## 1. Why React Hooks Were Created

### 1.1. Class Components Were Becoming Complex

* Components were large and hard to break down.
* Logic was spread across many lifecycle methods.
* Reusing logic between components was difficult.

### 1.2. The Need for Improvement

* Simplify code.
* Break logic into smaller, manageable parts.
* Reuse logic between components.

### 1.3. Internal Testing Process

Meta typically tests new technologies internally before releasing them publicly. Hooks were validated by many engineering teams and showed clear improvements.

## 2. Hooks Were Introduced Without Breaking Existing Code

Hooks are optional. You can continue using class components without errors. This allows a gradual transition.

## 3. Tips for Learning Hooks

1. It will feel difficult at first—almost “magical.”
2. Once familiar, your code becomes easier to read.
3. Early investment in learning will pay off long term.
4. There’s no need to immediately abandon class components.

## 4. Essential Hooks You Should Know

### 4.1. useState – Manage Simple State

Example: Counting button clicks

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### 4.2. useEffect – Handle Side Effects

Example: Log to console when `count` changes

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Increase ({count})
    </button>
  );
}
```

### 4.3. useRef – Store Values Without Re-rendering

Example: Get a reference to an input

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
```

## 5. Hooks Help Split and Reuse Logic

Example: Extracting data-fetching logic into a custom hook

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json));
  }, [url]);

  return data;
}
```

Using it in a component:

```jsx
function UserList() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  if (!users) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

---

## Understanding and Using useState in React

## 1. Review of Array Destructuring

### 1.1. What Is Array Destructuring?

Array destructuring lets you extract items from an array and assign them to individual variables.

Example:

```js
const veggies = ['Carrot', 'Potato', 'Onion'];

const [v1, v2, v3] = veggies;

console.log(v1); // Carrot
console.log(v2); // Potato
console.log(v3); // Onion
```

### 1.2. Why React Uses an Array for useState’s Return Value

* Arrays let you freely name variables, e.g.:

  ```js
  const [count, setCount] = useState(0);
  ```
* If React used object destructuring, property names would need to be fixed → less flexible.

---

## 2. How useState Works

### 2.1. What Does useState Return?

When calling:

```js
const value = useState('Lemon');
console.log(value);
```

Result:

```
['Lemon', ƒ setState()]
```

### 2.2. Destructuring the Return Value

```js
const [restaurantName, setRestaurantName] = useState('Lemon');
```

* `restaurantName`: the state value
* `setRestaurantName`: the state updater function

---

## 3. Important Rule: Update State Only via the Setter Function

Incorrect:

```js
restaurantName = 'Little Lemon';
```

Correct:

```js
setRestaurantName('Little Lemon');
```

---

## 4. State Changes Through Events

In React apps, most state updates come from user interactions:

* mouse clicks
* keyboard typing
* mouse movements
* form submissions

Example:

```jsx
function App() {
  const [restaurantName, setRestaurantName] = useState('Lemon');

  function updateRestaurantName() {
    setRestaurantName('Little Lemon');
  }

  return (
    <>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>Update Name</button>
    </>
  );
}
```

When clicking the button:

* `updateRestaurantName` runs
* `setRestaurantName` updates the state
* State changes from *Lemon* → *Little Lemon*
* UI re-renders

---

## 5. Practical Example: Little Lemon Inventory Management

Goal: Track the number of carrots in stock and increase the amount when new stock arrives.

Complete code:

```jsx
import { useState } from 'react';

function Inventory() {
  const [carrotCount, setCarrotCount] = useState(10);

  function addCarrot() {
    setCarrotCount(carrotCount + 1);
  }

  return (
    <>
      <h2>Carrots in stock: {carrotCount}</h2>
      <button onClick={addCarrot}>Add 1 carrot</button>
    </>
  );
}

export default Inventory;
```

---

## 6. Conclusion

### 6.1. Key Points

* `useState` returns a two-item array
* Always use the state variable + setter function
* Never update state directly
* When state changes, the UI automatically re-renders

### 6.2. When useState Is Appropriate

* To store simple data
* To manage state inside a component
* To update the UI in response to user actions

---

# **Working with Complex Data in useState**

## **1. Introduction**

When working with React, state is sometimes more than just numbers or strings—it can be complex objects or arrays. Updating these incorrectly may prevent the UI from re-rendering or cause bugs. This lesson explains how to handle them properly.

## **2. Key Concepts**

### **2.1. useState**

A hook used to declare state variables inside function components.

### **2.2. Immutability**

Do not mutate the original object directly. Always create a new copy so React knows the value has changed.

### **2.3. Spread Operator (…)**

Used to create a shallow copy of an object.

```js
const newObj = { ...oldObj };
```

### **2.4. prevState**

The previous state value, used in functional updates to ensure you always work with the latest state.

---

## **3. Basic Example: Storing State with an Object**

**Not optimized code:**

```js
import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });

  function updateGreeting() {
    setGreeting({ greet: "Hello, World-Wide Web" });
  }
}
```

This works but becomes inefficient when the object grows with many properties.

---

## **4. How to Update Object State Correctly**

### **4.1. Create a copy → modify → setState**

```js
function updateGreeting() {
  const newGreeting = { ...greeting };
  newGreeting.greet = "Hello, World-Wide Web";
  setGreeting(newGreeting);
}
```

**Benefits:**

* Doesn't mutate the original object.
* React detects a new reference and re-renders.

---

## **5. Incorrect Updates and Why They Fail**

### **5.1. Reassigning a const variable → error**

```js
function updateGreeting() {
  greeting = { greet: "Hello, World-Wide Web" }; // Wrong
  setGreeting(greeting);
}
```

Error: you cannot reassign a `const`.

### **5.2. Mutating the object directly → React may not re-render**

```js
function updateGreeting() {
  greeting.greet = "Hello, World-Wide Web"; // Wrong
  setGreeting(greeting);
}
```

The value changes but the object reference does not → React won’t detect a change.

---

## **6. Recommended: Functional Updates**

When updating only a part of the object:

```js
function updateGreeting() {
  setGreeting(prevState => {
    return { ...prevState, place: "World-Wide Web" };
  });
}
```

Explanation:

* `prevState` is the previous value.
* Spread operator creates a new object.
* Only update the needed property.
* Return a completely new object.

---

## **7. Complete Example with a Complex Object**

```js
import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState({
    greet: "Hello",
    place: "World"
  });

  function updateGreeting() {
    setGreeting(prevState => {
      return {
        ...prevState,
        place: "World-Wide Web"
      };
    });
  }

  return (
    <div>
      <h1>{greeting.greet}, {greeting.place}</h1>
      <button onClick={updateGreeting}>Update</button>
    </div>
  );
}
```

---

## **8. Summary**

Key points:

1. Never mutate object state directly.
2. Always use the spread operator to create copies.
3. When the update depends on previous state, use functional updates:

   ```js
   setState(prev => ({ ...prev, key: value }));
   ```
4. Incorrect updates may not throw errors but will prevent React from re-rendering correctly.

---

# **Building a Goals App in React (Using useState)**

## **1. App Structure**

The application has 3 components:

1. **GoalForm** – receives new goals from the user
2. **ListOfGoals** – displays the list of goals
3. **App** – contains main state and passes props to children

---

## **2. GoalForm Component**

### **a. State: formData**

```js
const [formData, setFormData] = useState({ goal: "", by: "" });
```

Includes two fields:

* `goal`: name of the goal
* `by`: deadline

### **b. changeHandler**

Updates state when an input changes:

```js
function changeHandler(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}
```

Explanation:

* `e.target.name` is `"goal"` or `"by"`.
* Bracket notation updates dynamic keys.

### **c. submitHandler**

```js
function submitHandler(e) {
  e.preventDefault();
  props.onAdd(formData);
  setFormData({ goal: "", by: "" });
}
```

### **d. JSX**

Inputs are controlled using `value` + `onChange`.

---

## **3. App Component**

### **a. Main State**

```js
const [allGoals, setAllGoals] = useState([]);
```

### **b. addGoal Function**

```js
function addGoal(goalEntry) {
  setAllGoals(prevGoals => [...prevGoals, goalEntry]);
}
```

### **c. Render**

Pass `onAdd` to GoalForm and `allGoals` to ListOfGoals.

---

## **4. ListOfGoals Component**

Maps each goal to a list item:

```js
props.goals.map(g => (
  <li>{g.goal} – {g.by}</li>
));
```

---

# **useEffect, Side Effects, and Pure/Impure Functions**

## **1. Key Concepts**

* **Side effect**: Actions that affect the outside world
  (console.log, fetch, DOM manipulation, timers, localStorage, etc.)
* **Pure function**: Same input → same output; no side effects
* **Impure function**: Contains side effects

---

## **2. Why Move Side Effects Out of the Component Body?**

* Component rendering should be fast and pure.
* Side effects inside render cause unpredictable behavior.
* `useEffect` isolates and controls when effects run.

---

## **3. Basic useEffect Syntax**

```js
useEffect(() => {
  // effect runs after render
  return () => {
    // cleanup
  };
}, [deps]);
```

---

## **4. Examples**

### **a) Pure function**

```js
function EstablishedYear({ year }) {
  return <h2>established year: {year}</h2>;
}
```

### **b) Impure: side effect inside render (bad)**

```js
function ShoppingCart({ total }) {
  console.log("total", total);
  return <div>Total: {total}</div>;
}
```

### **c) Move side effect into useEffect (correct)**

```js
function ShoppingCart({ total }) {
  useEffect(() => {
    console.log("total", total);
  }, [total]);

  return <div>Total: {total}</div>;
}
```

---

## **5. Real Example: Fetch with Cleanup**

```js
useEffect(() => {
  let cancelled = false;

  fetch("/api/menu")
    .then(res => res.json())
    .then(data => {
      if (!cancelled) setItems(data);
    })
    .catch(err => {
      if (!cancelled) console.error(err);
    });

  return () => {
    cancelled = true;
  };
}, []);
```

---

## **6. Common Patterns & Notes**

* Register listeners/timers inside effect + cleanup
* Always include correct dependencies
* Avoid infinite loops
* For async effects, define async inside the effect

---

## **7. Quick Checklist**

1. Is this code a side effect? If yes → useEffect.
2. When should it run? Set the right dependencies.
3. If it creates resources → return cleanup.
4. Don’t mutate state inside render.

---

# **Mastering useEffect**

## **1. What is useEffect?**

A React hook for handling side effects such as:

* API calls
* Updating document.title
* Event listeners
* External system synchronization
* Subscriptions

All code inside `useEffect` runs *after* React updates the UI.

---

## **2. Basic Syntax**

```js
useEffect(() => {
  // runs after every render
});
```

---

## **3. Dependency Array**

### **3.1 No dependency array**

Runs after every render → can waste performance.

### **3.2 Empty array**

```js
useEffect(() => {
  document.title = "Little Lemon";
}, []);
```

Runs once after mount.

### **3.3 Run when a value changes**

```js
useEffect(() => {
  document.title = `Little Lemon v${version}`;
}, [version]);
```

---

## **4. Multiple useEffects**

Helps separate concerns:

```js
useEffect(() => {
  document.title = "Little Lemon";
}, []);

useEffect(() => {
  fetch(`/menu/${id}`)
    .then(res => res.json())
    .then(data => setData(data));
}, [id]);
```

---

## **5. Cleanup Function**

```js
useEffect(() => {
  LemonChat.subscribeToMessages(chatId, () => setStatus("online"));

  return () => {
    setStatus("offline");
    LemonChat.unsubscribeFromMessages(chatId);
  };
}, [chatId]);
```

---

## **6. When React Runs Cleanup**

1. Before running the next effect
2. When the component unmounts

---

## **7. Summary**

| Concept            | Meaning                           |
| ------------------ | --------------------------------- |
| useEffect          | Runs side effects after render    |
| Dependency Array   | Controls when effect re-runs      |
| []                 | Run once on mount                 |
| No deps            | Run after every render            |
| Cleanup            | Removes resources, prevents leaks |
| Multiple useEffect | Keeps logic separated             |

---

# **useEffect (Little Lemon App)**

### **1. Context**

The Little Lemon restaurant wants to:

* Click a button → show the message *"Welcome to Little Lemon"*
* Click again → hide the message
* It also wants to update the browser tab title (`document.title`)

→ Updating the browser tab title is a side effect, so we use **useEffect**.

---

### **2. Logic inside the component**

The initial JSX includes:

* An `<h1>`
* A `<button>` to toggle
* `toggle && <h2>Welcome to Little Lemon</h2>` using the logical AND operator for conditional rendering.

State:

```js
const [toggle, setToggle] = useState(false);
```

Click handler:

```js
const clickHandler = () => {
  setToggle(prev => !prev);
};
```

---

### **3. Add useEffect to update the browser tab**

`useEffect` runs on every render.

Without dependency array:

```js
useEffect(() => {
  document.title = toggle
    ? "Welcome to Little Lemon"
    : "Using the useEffect hook";
});
```

Every button click → `document.title` updates correctly.

---

### **4. Owner wants: only update once when the component mounts**

→ Use an empty dependency array `[]`.

```js
useEffect(() => {
  document.title = "Using the useEffect hook";
}, []); // runs only once
```

After that, no matter how many times the button is clicked, the tab title won't change.

---

### **5. Track the change of the toggle state**

→ Put `toggle` in the dependency array.

```js
useEffect(() => {
  document.title = toggle
    ? "Welcome to Little Lemon"
    : "Using the useEffect hook";
}, [toggle]);
```

Explanation:

* Every time `toggle` changes → `useEffect` runs again
* `clickHandler` calls `setToggle` → updates toggle → triggers useEffect

---

### **6. Complete code**

```js
import { useState, useEffect } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(prev => !prev);
  };

  useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect hook";
  }, [toggle]); // track toggle changes

  return (
    <div>
      <h1>Little Lemon</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}
```

---

### **7. Main meaning of useEffect in this lesson**

✔ Handle side effects (update the browser tab)
✔ Control when it runs using the dependency array:

* `useEffect(fn)` → runs on every render
* `useEffect(fn, [])` → runs once (on mount)
* `useEffect(fn, [value])` → runs when the value changes

---

# **Rules of Hooks**

### **What are Hooks?**

When using Hooks, placing them incorrectly will cause React errors. You must follow the rules so Hooks run correctly and consistently across renders.

### **4 Rules of Hooks**

#### **1. Only call Hooks inside React function components or custom Hooks**

Do NOT call Hooks in normal JavaScript functions.
Example of incorrect usage: calling `useState` inside a function like `nameLooper`.

You *can* call the state updater function (`setPetName`) anywhere.

---

#### **2. Only call Hooks at the top level of the component**

Do NOT place Hooks inside:

* if
* for/while
* nested functions
* return

Hooks must be directly inside the component body, before the return.

---

#### **3. You can call as many Hooks as you want**

As long as you follow rule 4.

---

#### **4. Hooks must be called in the same order on every render**

React relies on the order of Hooks to assign state.
If you put a Hook inside a condition, the order may change → error: *"Invalid hook call"*.

---

### **Correct way to run conditional logic in an effect**

Do **not** write:

```js
if (visible) {
  useEffect(() => {...});
}
```

Correct:

```js
useEffect(() => {
  if (visible) {
    // logic
  }
}, [visible]);
```

---

### **Summary**

1. Only call Hooks in components or custom Hooks.
2. Only call Hooks at the top level.
3. You can call many Hooks.
4. Keep the same order of Hooks between renders.

---

# **Fetch API**

### **1. Why understand Fetch?**

Fetch helps JavaScript send requests to a server and get JSON data.
Before using it, you need to understand how JavaScript “delegates work” (asynchronous behavior).

---

### **2. JavaScript is single-threaded**

JavaScript can only do one task at a time.
If it had to do everything sequentially, programs would be slow.

→ So JS delegates tasks to Browser APIs to handle work in parallel.

---

### **3. The “post office” analogy**

* Browser = post office
* JavaScript = 1 clerk
* Web APIs = other clerks JS can delegate tasks to

JS receives a task → gives it to Web APIs → continues working without waiting.
→ This is asynchronous JavaScript.

---

### **4. How Fetch works**

Fetch is NOT a pure JavaScript function.
It’s a *facade function* allowing JavaScript to call the Browser’s Fetch API.

Process:

1. JS calls `fetch()`
2. Fetch API sends the request to the server
3. JS does NOT wait; it continues executing
4. When Fetch API finishes → returns the result to JS → JS processes the JSON

---

### **5. Example from the video**

```js
console.log("another customer approaching");

fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => console.log(data));

console.log("our valued customer");
```

Actual execution order:

1. `"another customer approaching"`
2. `"our valued customer"`
3. JSON data from the API

Reason: `fetch()` is delegated to the Web API → JS does not wait.

---

### **6. Key meaning**

Understanding that:

* Fetch is asynchronous
* Fetch does NOT run in JS's thread
* JS does not wait for Fetch to complete

→ You will use Fetch correctly in React (especially inside useEffect).

---

# **Fetching data in React using Hooks (useEffect + Fetch API)**

### **1. Overview**

Fetching data from third-party APIs is common in React apps.
This is considered a side effect → React requires using `useEffect`.

Conditional rendering is also needed to show loading states or errors.

---

### **2. Why fetch inside useEffect?**

#### **2.1. What is useEffect?**

`useEffect` runs side effects after the component renders:

* Fetching API data
* Listening to events
* Synchronizing data

#### **2.2. Fetching is a side effect**

Fetch does not directly affect UI, but it changes state afterward.
React separates this to avoid render issues.

---

### **3. Fetch API in React**

#### **3.1. Example: Fetch Bitcoin price**

```js
import { useState, useEffect } from "react";

export default function App() {
  const [btcData, setBtcData] = useState({});

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  }, []);
}
```

#### **3.2. Meaning of each part**

* `useState({})`: stores the received API data
* `useEffect(..., [])`: runs once after the component renders
* `fetch().then()`: calls the API and updates state

---

### **4. Extracting the fetch function for cleaner code**

#### **4.1. Refactored code**

```js
import { useState, useEffect } from "react";

export default function App() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
}
```

#### **4.2. Benefits**

* Cleaner code
* Reusable
* Simplifies useEffect

---

### **5. Conditional rendering**

#### **5.1. Why needed**

API data usually arrives slowly or might fail.
UI should display appropriate messages while waiting.

#### **5.2. Simple conditional example**

```jsx
return someStateVariable.length > 0 ? (
  <div>
    <h1>Data returned:</h1>
    <h2>{someStateVariable.results[0].price}</h2>
  </div>
) : (
  <h1>Data pending...</h1>
);
```

#### **5.3. How it works**

* Before data arrives → array length = 0 → show “Data pending…”
* After data arrives → array has items → show real data

---

### **6. Summary**

1. Fetching data is a side effect → requires `useEffect`.
2. Fetch works the same as in plain JS but placed inside useEffect.
3. You can extract fetch into a separate function.
4. Conditional rendering improves UI when data is loading or failing.

---

## How to Fetch Random Data from the Web Using React (State + Effect Hook)

### 1. Problem Context

#### 1.1. Little Lemon’s Requirement

Little Lemon Restaurant wants to run a contest to randomly select one customer to receive a free meal.
All users registered in the app will automatically be included.

#### 1.2. Technical Goal

To simulate the winner-selection feature, we will learn how to:

* Fetch random data from the web
* Handle loading states
* Update the UI based on the returned data

The demo uses the **randomuser.me** API.

---

## 2. How the Application Works

### 2.1. When the App Runs

* Initially, the UI displays: **“Data pending”**
* In the background, the `fetchData()` function starts fetching data from the API
* When the data is successfully returned, React updates the state
* The component re-renders and displays the user data

### 2.2. Observing Loading Behavior with DevTools

To better see the “loading” state:

1. Open DevTools
2. Go to the **Network** tab
3. Select a slow network speed (e.g., *Slow 3G*)
4. Reload the app

You’ll notice the **“Data pending”** message stays longer before the data arrives.

---

## 3. Code Breakdown

### 3.1. Initializing State

```js
const [user, setUser] = useState([]);
```

* Initial state is an empty array
* Used to store the data received from the API

### 3.2. The `fetchData` Function

```js
const fetchData = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((json) => setUser(json.results[0]))
    .catch((error) => console.log(error));
};
```

Explanation:

* Calls the Random User API
* Converts the response to JSON
* Saves the returned user data into state
* Hooks are **not used** inside this function (to follow the Rules of Hooks)

### 3.3. Calling `fetchData` Inside `useEffect`

```js
useEffect(() => {
  fetchData();
}, []);
```

* `useEffect` runs after the initial render
* The empty `[]` ensures it only runs once
* This is the correct place to perform fetch side effects

### 3.4. Conditional Rendering

```js
return Object.keys(user).length > 0 ? (
  <div>
    <h1>Data returned</h1>
    <h2>{user.name.first}</h2>
    <h2>{user.name.last}</h2>
  </div>
) : (
  <h1>Data pending...</h1>
);
```

How it works:

* `Object.keys(user)` returns the list of keys in the object
* If `length > 0` → data has arrived → display name
* If `length === 0` → still loading → show “Data pending”

---

## 4. React Re-render Mechanism

When the data fetch completes:

1. `setUser()` updates the state
2. React automatically re-renders the component
3. The ternary operator runs again
4. The UI shows real data instead of the loading message

---

## 5. Applying It to Little Lemon

With this logic, Little Lemon can:

* Fetch the customer list from an internal API
* Randomly select a winner
* Update the UI with the winner’s information

---

## 6. Key Takeaways

1. `useState` stores fetched API data
2. `useEffect` performs side effects such as data fetching
3. Hooks are not used inside regular functions like `fetchData`
4. Conditional rendering shows loading states cleanly
5. Updating state triggers a re-render and updates the UI

---

# Introduction and Usage of `useReducer` in React

## 1. Overview

`useState` is great for simple states.
However, when logic becomes complex—multiple steps, nested values, or when new state depends on previous state—`useState` becomes cumbersome.

In these cases, **useReducer** is more suitable.

---

## 2. What is `useReducer`?

### 2.1. Definition

`useReducer` allows you to manage state using a *reducer function*—a function that takes the current state and an action, then returns the new state.

### 2.2. Structure

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

* `reducer(state, action)`: defines how the state changes
* `initialState`: initial value
* `dispatch(action)`: triggers the reducer

### 2.3. Action Structure

An action is an object:

```js
{ type: "ACTION_NAME", payload: ... }
```

* `type` describes what is happening
* `payload` carries extra data (optional)

---

## 3. When to Use `useReducer`

### 3.1. Good Use Cases

* Complex state update logic
* Multiple actions affecting one state
* New state depends on previous state

### 3.2. Real Example

A spending tracker for Little Lemon:

* Deduct money for ingredients
* Add money when meals are sold
* Handle special events (e.g., celebrity visit)

Using `useState` would require many update functions → messy.
`useReducer` keeps logic clean.

---

## 4. Example: Expense Tracking App

### 4.1. Initial State

```js
const initialState = { wallet: 100 };
```

### 4.2. Reducer

```js
function reducer(state, action) {
  switch (action.type) {
    case "BUY_INGREDIENTS":
      return { wallet: state.wallet - 10 };

    case "SELL_MEAL":
      return { wallet: state.wallet + 10 };

    case "CELEBRITY_VISIT":
      return { wallet: state.wallet + 5000 };

    default:
      return state;
  }
}
```

### 4.3. Using `useReducer` in a Component

```js
const [state, dispatch] = useReducer(reducer, initialState);

return (
  <div>
    <p>Wallet: {state.wallet}</p>

    <button onClick={() => dispatch({ type: "BUY_INGREDIENTS" })}>
      Shopping for veggies
    </button>

    <button onClick={() => dispatch({ type: "SELL_MEAL" })}>
      Serve meal to customer
    </button>

    <button onClick={() => dispatch({ type: "CELEBRITY_VISIT" })}>
      Celebrity visit
    </button>
  </div>
);
```

### 4.4. What Happens

* **Shopping for veggies** → wallet decreases by 10
* **Serve meal** → wallet increases by 10
* **Celebrity visit** → wallet increases by 5000

All updates happen via `dispatch`.

---

## 5. Benefits of `useReducer`

### 5.1. Clear and Organized Logic

All update logic lives in the reducer → easy to maintain.

### 5.2. Easy to Handle Multiple Actions

You can add many `action.type` branches without cluttering your component.

### 5.3. Great for Complex Cases

Situations that require multiple steps or conditional transitions are easier to model.

---

## 6. Conclusion

* Use **useState** for simple states
* Use **useReducer** when logic becomes complex or when many actions modify the same state
* It’s a powerful tool for structuring scalable React apps

---

# When to Choose `useReducer` vs. `useState`

## 1. General Principle

### 1.1. Use `useState` when:

* State is simple
* Updates are straightforward
* Data is primitive (numbers, strings, booleans)

Example:

```js
const [isOpen, setIsOpen] = useState(false);
```

### 1.2. Use `useReducer` when:

* State is complex with many properties
* Many actions affect the same state
* New state depends on old state
* You want to separate logic from UI

Example:

```js
const [state, dispatch] = useReducer(reducer, {
  loading: false,
  data: [],
  error: null
});
```

---

## 2. No Hard Rules

There’s no rule like:

> “If an object has 3+ properties, use `useReducer`.”

Reality:

* Some small objects still need reducers because update logic is complex
* Some big objects are fine with `useState` if logic is simple

**Most important guideline:**
Choose what makes the code easier to read and maintain.

---

## 3. Clear Pros/Cons

### 3.1. `useState`

**Pros:**

* Fast to set up
* Easy to understand
* Perfect for simple cases

**Cons:**

* Gets messy with large or multi-step state updates
* Harder to manage related logic scattered across multiple handlers

### 3.2. `useReducer`

**Pros:**

* Excellent for complex state
* Centralized logic → clean and scalable
* Easy to extend

**Cons:**

* Requires more setup
* Overkill for simple state

---

## 4. How to Decide

Think of a spectrum:

* **Left side → simple:** choose `useState`
  (booleans, counters, simple forms)

* **Right side → complex:** choose `useReducer`
  (nested objects, many actions, business logic)

There's no strict boundary.
The decision is based on **logic complexity**, not object size.

---

## 5. Comparison Examples

### 5.1. When `useState` is better

Toggle:

```js
const [darkMode, setDarkMode] = useState(false);
```

Reducer would be unnecessary.

### 5.2. When `useReducer` is better

Shopping cart management:

* Add item
* Remove item
* Update quantity
* Compute total

```js
function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_ITEM":
      return { ...state, cart: state.cart.filter(i => i.id !== action.payload) };

    case "UPDATE_QTY":
      return { ...state, cart: state.cart.map(...) };

    default:
      return state;
  }
}
```

Using `useState` for this would be chaotic.

---

## 6. Summary

* **useState** → simple state, straightforward updates
* **useReducer** → complex state, multiple actions, multi-step logic

---

# **Using useRef to Access the DOM and Control Elements**

## **1. Introduction**

**useRef** is a React Hook that lets you directly access a DOM node or store a mutable value that does not trigger a re-render.
In the following example, the goal is to automatically focus an input field using useRef.

---

## **2. When to Use useRef**

### **2.1 Accessing the DOM Directly**

Use useRef when you need to perform direct DOM operations such as:

* Focusing an input
* Scrolling to a position
* Playing a video
* Measuring DOM element size

### **2.2 Storing Mutable Values Without Re-Rendering**

Examples:

* Counting render times
* Storing a timeout ID
* Keeping previous values

---

## **3. How useRef Works**

### **3.1 Creating a ref**

```js
const inputRef = useRef();
```

Result:
`inputRef` is an object like:

```js
{ current: null }
```

### **3.2 Assigning the ref in JSX**

```jsx
<input ref={inputRef} />
```

After React renders, `inputRef.current` becomes the DOM node of the `<input>` element.

### **3.3 Accessing the DOM Node**

```js
inputRef.current.focus();
```

This moves the cursor into the input field.

---

## **4. Full Example: Focusing a Search Input**

```jsx
import { useRef } from "react";

function App() {
  const formInputRef = useRef();

  function focusInput() {
    formInputRef.current.focus();
  }

  return (
    <>
      <h1>Using useRef to access the underlying DOM</h1>

      <input type="text" ref={formInputRef} placeholder="Search inventory..." />

      <br />

      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;
```

---

## **5. Simple Explanation**

a. Create a ref with useRef → `formInputRef`.
b. Assign it to the input using the `ref` attribute.
c. When the button is clicked, the `focusInput` function runs.
d. `formInputRef.current.focus()` focuses the input’s DOM node directly.

---

## **6. How React Handles It**

1. React renders the input to the screen.
2. The DOM node is assigned to `formInputRef.current`.
3. When `.focus()` is called, React does not re-render; the DOM is manipulated directly.

---

## **7. Real-World Use Cases Beyond Little Lemon**

| Scenario                                  | Why use useRef                                  |
| ----------------------------------------- | ----------------------------------------------- |
| Auto-focusing email input in a login form | Better UX                                       |
| Auto-scroll to bottom in a chat app       | Need DOM access                                 |
| Play or pause a video                     | Call DOM methods like `videoRef.current.play()` |
| Store previous values without UI updates  | useRef does not trigger re-renders              |

---

# **Custom Hooks in React**

## **1. Basic Concepts**

### **1.1 useState**

Used to declare and manage state inside functional components.

### **1.2 useEffect**

Handles side effects such as logging, API calls, or reacting to state changes.

### **1.3 Custom Hook**

A JavaScript function whose name starts with **use**.
Purpose: extract and reuse stateful logic across multiple components.
Custom Hooks **do not** add new features to React—they simply help you reuse logic cleanly.

---

## **2. Why We Need Custom Hooks**

Custom Hooks help:

1. Avoid duplicated logic across components
2. Separate concerns → cleaner and more maintainable components
3. Move complex logic outside the UI layer

Example: Instead of repeating useEffect logging logic everywhere, use one Custom Hook.

---

## **3. Example App**

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
```

Requirement: log the value whenever **count** changes → we use useEffect.

---

## **4. Creating a Custom Hook: useConsoleLog**

### **4.1 Naming Rule**

Names must start with **use**.
Example: `useConsoleLog`.

### **4.2 File: `useConsoleLog.js`**

```js
import { useEffect } from "react";

function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
}

export default useConsoleLog;
```

This hook logs the variable whenever it changes.

---

## **5. Using the Custom Hook in App**

### **5.1 Import**

```js
import useConsoleLog from "./useConsoleLog";
```

### **5.2 Call the hook**

```js
useConsoleLog(count);
```

### **5.3 Complete App.js**

```jsx
import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function App() {
  const [count, setCount] = useState(0);
  useConsoleLog(count);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default App;
```

Whenever `count` changes, its new value is printed to the console.

---

## **6. Conclusion**

* Custom Hooks are a powerful way to extract and reuse logic between components.
* All Custom Hooks must start with **use**.
* They rely on existing Hooks like useState, useEffect, useRef, useReducer, etc.
* They help keep the code cleaner, easier to maintain, and scalable.

---

# **JSX, Components and Elements in React**

## **1. Introduction to JSX**

### **1.1 What is JSX**

JSX is a JavaScript syntax extension that allows writing code that looks like HTML directly inside JavaScript.
Its purpose is to describe UI in a clear and intuitive way.

**Example:**

```js
const element = <h1>Welcome to Little Lemon</h1>;
```

### **1.2 JSX is not HTML**

Even though JSX looks like HTML, it is more powerful because:

* It combines markup + logic inside the same component.
* It allows JavaScript expressions inside `{ }`.

**Example:**

```js
const name = "Little Lemon";
const element = <h2>Welcome to {name}</h2>;
```

---

## **2. Components in React**

### **2.1 What is a Component**

A component is a function or class that returns JSX.
It is used to break the UI into small, reusable pieces.

**Example:**

```js
function Welcome() {
  return <h1>Welcome to Little Lemon</h1>;
}
```

### **2.2 UI as a Component Tree**

The entire React UI is a tree of components, starting from the root component.

---

## **3. Elements in React**

### **3.1 What is an Element**

A React element is a plain JavaScript object that represents:

* A DOM node (div, button, h1…)
* Or a React component

An element has two main properties:

* **type**: the type of node (e.g., `"button"` or `SubmitButton`)
* **props**: a collection of attributes

**Example element:**

```js
{
  type: "button",
  props: {
    children: "Click here",
    disabled: false
  }
}
```

### **3.2 JSX → Element**

When writing:

```jsx
<button>Click</button>
```

React converts JSX into an element:

```js
React.createElement("button", null, "Click");
```

---

## **4. How React Processes JSX**

### **4.1 From JSX → Element Tree**

React reads all JSX from the root component and creates an element tree.

### **4.2 Elements Are Only Descriptions**

Elements are not the actual DOM.
They simply describe the UI structure in a lightweight way.

### **4.3 Example: Functional Component**

```js
function SubmitButton() {
  return <button>Submit</button>;
}
```

React creates an element like:

```js
{
  type: SubmitButton,
  props: { children: undefined }
}
```

---

## **5. Mixing DOM Nodes and Components**

React allows mixing:

* Developer-created components
* Real DOM elements (div, button, etc.)

**Example: Logout component**

```js
function Logout() {
  return (
    <div>
      <h2>Log out</h2>
      <SubmitButton />
    </div>
  );
}
```

The element tree includes:

* `type: "div"`
* `type: "h2"`
* `type: SubmitButton`

React asks each component what UI it should render.

---

## **6. Virtual DOM**

### **6.1 What is Virtual DOM**

The Virtual DOM is a JavaScript-based representation of the real DOM.

### **6.2 Purpose**

It enables React to update the UI efficiently by:

* Comparing two element trees
* Updating only the differences in the real DOM

---

## **7. How UI Updates Work**

1. React receives new JSX → creates a new element tree
2. Compares it with the old one (diffing)
3. Detects differences
4. Updates only the necessary parts of the real DOM

All operations happen quickly because React works with JavaScript objects.

---

## **8. Complete Example**

### **8.1 Initial JSX**

```js
function App() {
  return (
    <div>
      <h1>Little Lemon</h1>
      <SubmitButton />
    </div>
  );
}
```

### **8.2 Element Tree (simulated)**

```js
{
  type: "div",
  props: {
    children: [
      { type: "h1", props: { children: "Little Lemon" } },
      { type: SubmitButton, props: {} }
    ]
  }
}
```

### **8.3 SubmitButton returns an element**

```js
{
  type: "button",
  props: { children: "Submit" }
}
```

---

## **9. Summary**

### **JSX**

* Syntax to describe UI
* Looks like HTML but more powerful

### **Component**

* A function returning JSX
* Builds the UI tree

### **Element**

* Object describing DOM or component
* Flow: JSX → Element → Virtual DOM → Real DOM

### **Virtual DOM**

* Representation of the real DOM
* Enables fast, efficient updates

---

# **Component Composition and the Children Prop in React**

## **1. Overview of the Children Prop**

`children` is a special prop available in every React component.

Its main roles:

* Allow inserting arbitrary JSX into a component
* Enable flexible UI composition

Thanks to `children`, components can be nested in many ways.

---

## **2. Two Main Features of Composition**

### **2.1 Containment**

Some components do not know what will be placed inside them.
They simply provide a structure to contain other UI parts, such as:

* Sidebar
* Dialog (modal)
* Navigation container

These “box-like” components should accept content through the `children` prop.

**Dialog example:**

```js
function Dialog({ children }) {
  return (
    <div className="overlay">
      <div className="modal">{children}</div>
    </div>
  );
}
```

### **2.2 Specialization**

Specialization means a component represents a specialized version of a more general component.

Example:

* **Dialog**: general-purpose component
* **ConfirmationDialog**: a specialized version

```js
function ConfirmationDialog() {
  return (
    <Dialog>
      <h2>Confirm</h2>
      <p>Please confirm this action.</p>
    </Dialog>
  );
}
```

---

## **3. Example: Little Lemon – Delete Account**

### **3.1 Basic Components Already Available**

* **Button**: receives children as button content
* **Alert**: generic overlay + modal box; accepts content via children

### **3.2 Step 1: Create a Specialized Warning Button**

```js
function DeleteButton() {
  return (
    <Button color="red">
      Delete
    </Button>
  );
}
```

DeleteButton specializes Button by:

* Using red color
* Providing custom text: “Delete”

### **3.3 Step 2: Render Alert Using Containment**

```js
function DeleteAccountDialog() {
  return (
    <Alert>
      <h1>Delete account</h1>
      <p>
        If the account is deleted, all data will be lost.  
        The chef's delicious recipes will no longer be available.
      </p>
      <DeleteButton />
    </Alert>
  );
}
```

Meaning:

* **Alert** handles modal structure
* **DeleteAccountDialog** supplies specific content via children
* This combines containment + specialization

---

## **4. Summary**

### **Children Prop**

* Embeds JSX inside a component
* Enables nested and flexible UI

### **Containment**

* “Box” components
* Do not know their content
* Receive content via children

### **Specialization**

* Specific version of a general component
* Reuses structure, adds customization

---

# Types of Children in JSX

In JSX, any content placed between the opening and closing tags of a component is passed into that component through a special prop called **children**. Children can be many types: strings, numbers, JSX elements, JavaScript expressions, functions, or even values that React ignores (such as `null`).
Below is a detailed breakdown.

---

## 1. Strings (String Literals)

A string placed between tags is treated as children.

```jsx
<MyComponent>Little Lemon</MyComponent>
```

The `children` content is the string `"Little Lemon"`.

### Whitespace Rules in JSX

JSX follows several important spacing rules:

1. Removes leading/trailing whitespace and empty lines.
2. Removes empty lines right after the opening tag or before the closing tag.
3. Collapses multiple lines into a single space.

The following snippets render the same output:

```jsx
<div>   Little Lemon   </div>

<div>
  Little Lemon
</div>

<div>
  Little
  Lemon
</div>
```

---

## 2. JSX Elements

You can pass JSX elements as children. This enables nested components.

```jsx
<Alert>
  <Title />
  <Body />
</Alert>
```

Mixing children types is allowed:

```jsx
<Alert>
  <div>Are you sure?</div>
  <Body />
</Alert>
```

### React Fragments

Return multiple elements without wrapping them in a DOM node:

```jsx
<>
  <li>Pizza margarita</li>
  <li>Pizza diavola</li>
</>
```

Equivalent to:

```jsx
<React.Fragment>
  <li>Pizza margarita</li>
  <li>Pizza diavola</li>
</React.Fragment>
```

---

## 3. JavaScript Expressions

Place expressions inside `{}` to pass them as children.

These two forms are equivalent:

```jsx
<MyComponent>Little Lemon</MyComponent>

<MyComponent>{'Little Lemon'}</MyComponent>
```

Rendering a list:

```jsx
function Dessert(props) {
  return <li>{props.title}</li>;
}

function List() {
  const desserts = ['tiramisu', 'ice cream', 'cake'];

  return (
    <ul>
      {desserts.map((dessert) => (
        <Dessert key={dessert} title={dessert} />
      ))}
    </ul>
  );
}
```

Mixing expressions with other content:

```jsx
function Hello(props) {
  return <div>Hello {props.name}!</div>;
}
```

---

## 4. Functions as Children

A child can be a function. React will not render the function but will pass it down to the child component.

This pattern is important (covered in deeper lessons):

```jsx
<DataProvider>
  {data => <Profile info={data} />}
</DataProvider>
```

---

## 5. Ignored Values: false, null, undefined, true

React ignores the following values:

* `false`
* `null`
* `undefined`
* `true`

These all behave the same:

```jsx
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

### Boolean values are useful for conditional rendering

```jsx
<div>
  {showModal && <Modal />}
</div>
```

### Important Note: 0 *is still rendered*

```jsx
{0 && <Component />} // prints 0
```

Correct approach:

```jsx
{props.desserts.length > 0 && (
  <DessertList desserts={props.desserts} />
)}
```

Or:

```jsx
{!!props.desserts.length && (
  <DessertList desserts={props.desserts} />
)}
```

---

## Summary

| Type                         | Rendered?                  | Example                   |
| ---------------------------- | -------------------------- | ------------------------- |
| String                       | Yes                        | `"Little Lemon"`          |
| JSX Elements                 | Yes                        | `<div>Hi</div>`           |
| JS Expressions               | Yes                        | `{name}`, `{items.map()}` |
| Function                     | Not rendered automatically | `{data => ...}`           |
| false, null, undefined, true | No                         | `{false}`                 |
| Number                       | Yes                        | `{0}`, `{100}`            |

Understanding children allows you to build flexible, reusable, and easily expandable components.

---

# Manipulating Children with React.cloneElement and React.Children.map

## 1. Introduction

In React, `props.children` is a special prop containing everything between a component’s tags. Normally, components simply render children as they are. However, React provides powerful APIs that allow parents to transform children before rendering.

Two key APIs:

* **React.cloneElement**
* **React.Children.map**

These allow parent components to modify children, add props, or extend their behavior.

---

## 2. React.cloneElement

### 2.1 Concept

`React.cloneElement(element, newProps)` creates a **clone** of a React element.

* New props are merged with existing ones.
* Since props are immutable, cloning is the correct way to modify them.

Example:

```jsx
const newButton = React.cloneElement(originalButton, {
  disabled: true,
  style: { color: 'red' }
});
```

### 2.2 Importing

Option 1:

```jsx
import React from 'react';
React.cloneElement(...)
```

Option 2:

```jsx
import { cloneElement } from 'react';
cloneElement(...)
```

### 2.3 When to Use cloneElement

It allows a parent component to:

1. Modify the child’s props
2. Add new props
3. Extend the child’s functionality

Example:

```jsx
const EnhancedChild = React.cloneElement(child, {
  onClick: () => console.log("Clicked")
});
```

---

## 3. React.Children.map

### 3.1 Purpose

`React.Children.map(children, fn)`:

* Works like `Array.map`
* But it handles the many possible forms of `props.children`:

  * one element
  * multiple elements
  * null
  * nested structures

→ React ensures every child is processed correctly.

### 3.2 Example

```jsx
React.Children.map(props.children, child => {
  return <div className="wrapper">{child}</div>;
});
```

---

## 4. Row Component Use Case

### 4.1 Background

Little Lemon wants to display each order in a row:

* Dish name
* Quantity
* Price
* Order time
* Customer name

The current Row component renders children directly → items appear squished together.

### 4.2 Goal

* Add horizontal spacing between children
* Create a `spacing` prop (in px)
* Automatically add `marginLeft` for children except the first

---

## 5. Implementation

### 5.1 Iterate through children

```jsx
React.Children.map(children, (child, index) => child);
```

### 5.2 Create spacing style

```jsx
const childStyle = { marginLeft: `${spacing}px` };
```

### 5.3 Apply style via cloneElement

```jsx
return React.cloneElement(child, {
  style: {
    ...child.props.style,
    ...(index > 0 ? childStyle : {})
  }
});
```

---

## 6. Full Row Component

```jsx
function Row({ children, spacing }) {
  return (
    <div style={{ display: 'flex' }}>
      {React.Children.map(children, (child, index) => {
        
        const childStyle = index > 0 
          ? { marginLeft: `${spacing}px` }
          : {};

        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...childStyle
          }
        });
      })}
    </div>
  );
}
```

---

## 7. Usage Example

```jsx
<Row spacing={32}>
  <span>Pizza Margherita</span>
  <span>2</span>
  <span>$20</span>
  <span>12:45 PM</span>
  <span>Maria Rodriguez</span>
</Row>
```

Result:
→ Children appear as columns with equal spacing.

---

## 8. Conclusion

| API                    | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| **React.cloneElement** | Clone and merge props to modify or extend children |
| **React.Children.map** | Safely iterate and transform all children          |

These APIs enable:

* Automatic child adjustments
* Dynamic props injection
* Flexible layout components
* More powerful component patterns

---

# Spread Operator in React and Designing Flexible Components

## 1. Overview

The spread operator (`...`) is a powerful JavaScript feature that simplifies object operations. In React, it is most commonly used to:

* Copy objects
* Merge props
* Forward all props to child components
* Build flexible and reusable components

---

## 2. Spread Operator in JavaScript

### 2.1 Copy objects

```jsx
const order = { item: "Pizza", price: 12 };
const copy = { ...order };
```

### 2.2 Merge objects

```jsx
const original = { item: "Pizza", price: 12 };
const amended = { ...original, item: "Pasta" };
```

→ Later props override earlier ones.

---

## 3. Spread Operator in React

Because props are objects, the spread operator is useful for:

* Passing all props to a child component
* Forwarding props to DOM elements
* Reducing repetitive code
* Preprocessing props in wrapper components

---

## 4. Example: Passing Props to Order Component

### Manual passing:

```jsx
<Order id={1} userName="Maria" item="Pizza" price={10} />
```

### Using spread:

```jsx
const orderProps = { id: 1, userName: "Maria", item: "Pizza", price: 10 };

<Order {...orderProps} />;
```

Cleaner and more flexible.

---

## 5. Building a Flexible Button Component

### 5.1 Requirements

Little Lemon needs screen components for:

* Sign up
* Log in

Both buttons are almost identical except text and action.
→ Use spread operator to forward native HTML button props.

### 5.2 Flexible Button Component

```jsx
function Button({ type, children, ...nativeProps }) {
  const styles = {
    primary: { background: "yellow" },
    secondary: { background: "gray" },
  };

  return (
    <button style={styles[type]} {...nativeProps}>
      {children}
    </button>
  );
}
```

Explanation:

* `type` and `children` are custom props
* All other props (onClick, disabled, id, etc.) are placed into `nativeProps`
* `nativeProps` is spread onto the `<button>` element

---

## 6. LoginButton Component

```jsx
function LoginButton(props) {
  return (
    <Button
      type="secondary"
      onClick={() => alert("Logging in")}
      {...props}
    >
      Log in
    </Button>
  );
}
```

* Pre-configured props: `type`, `onClick`
* Still accepts additional props from the outside

---

## 7. Important: Spread Order Determines Overrides

### 7.1 Issue

In `App`:

```jsx
<LoginButton onClick={() => alert("Signing up")} />
```

Expected: show “Signing up”
Actual: shows “Logging in”

### 7.2 Why?

Because in `LoginButton`:

```jsx
<Button
  type="secondary"
  onClick={() => alert("Logging in")}
  {...props}
/>
```

→ `props.onClick` comes **after**, so it overrides the default.

But if written as:

```jsx
<Button
  {...props}
  onClick={() => alert("Logging in")}
/>
```

→ The internal onClick overrides the external one.

---

## 8. Key Takeaways

### 8.1 Benefits of Spread Operator

* Reduces repetition
* Makes prop forwarding easier
* Enables flexible component wrappers
* Simplifies component API design

### 8.2 Caveats

* Order determines which props override others
* Over-spreading may:

  * Pass unnecessary props
  * Hide important props
  * Cause unpredictable behavior

### 8.3 Simple Rule

Allow override:

```jsx
<Component defaultProp="A" {...props} />
```

Prevent override:

```jsx
<Component {...props} defaultProp="A" />
```