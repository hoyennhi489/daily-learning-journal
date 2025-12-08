# Understanding and Using `map()` in JavaScript

## 1. Basic Concepts

### 1.1. Arrays in JavaScript

* An array is a collection of elements.
* In JavaScript, arrays represent lists.
* Each element in an array can be a number, string, object, etc.

### 1.2. Practical Issue

When fetching data from external services (APIs), the returned data often contains more information than needed for display.
→ It's necessary to transform the data to extract the desired information.

---

## 2. What is `map()`?

### 2.1. Definition

* `map()` is a method used to transform each element of an array.
* `map()` does not modify the original array; it returns a new array.

### 2.2. Uses

* Remove unnecessary fields.
* Create a new data structure that is easier to use.
* Standardize API data.

---

## 3. Practical Example: Little Lemon Dessert List

### 3.1. Initial Data (Simulated)

```javascript
const data = [
  {
    id: 1,
    title: "Lemon Pie",
    image: "lemon.jpg",
    description: "Fresh and tangy pie",
    price: 5
  },
  {
    id: 2,
    title: "Chocolate Cake",
    image: "choco.jpg",
    description: "Rich chocolate flavor",
    price: 7
  }
];
```

The data has 5 properties, but we only want to display:

* `content = title + " - " + description`
* `price`

---

## 4. Using `map()` to Transform the List

### 4.1. Step 1: Create a New Array

```javascript
const topDesserts = data.map((item) => {
  return item;
});
```

### 4.2. Step 2: Keep Only the Necessary Information

```javascript
const topDesserts = data.map((item) => {
  return {
    content: `${item.title} - ${item.description}`,
    price: item.price
  };
});
```

### 4.3. Final Result

```javascript
console.log(topDesserts);
```

Result:

```javascript
[
  { content: "Lemon Pie - Fresh and tangy pie", price: 5 },
  { content: "Chocolate Cake - Rich chocolate flavor", price: 7 }
]
```

---

## 5. Simple Explanation

### 5.1. Why Use `map()`?

* To avoid modifying the original data.
* To create a new list with a clear structure.
* To display information neatly for the end user.

### 5.2. When to Use `map()`?

* When you need to:

  * Modify element content
  * Create new elements based on old elements
  * Standardize API data

---

## 6. A Simpler Example

Example: doubling numeric values

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(n => n * 2);

console.log(doubled);  // [2, 4, 6]
```

---

## 7. Summary

* `map()` creates a new array.
* Each new element is based on an old element.
* Very useful for handling API data.
* Helps shorten and format data for easy display.

---

# Displaying Lists in React Using `map()` in JSX

## 1. Overview

### 1.1. Main Idea

In React, it is possible to transform a data list into a list of React components using `map()` directly in JSX.

### 1.2. Practical Case

Little Lemon wants to display a list of desserts with:

* id
* title
* image
* description
* price

Goal: display only `title` and `price` as a list.

---

## 2. JSX and Components

### 2.1. What is JSX?

* JSX is a JavaScript syntax extension for describing the UI.
* It allows writing HTML-like code in JavaScript.

### 2.2. Components in React

* A component is a function that returns JSX.
* HTML tags in JSX are also components (e.g., `<ul>`, `<li>`).

---

## 3. Steps to Display a List

### 3.1. Step 1: Create a Variable for `map` Results

```javascript
const listItems = desserts.map((dessert) => {
  return <li></li>;
});
```

Initially returns empty `<li>` to set up the structure.

### 3.2. Step 2: Create Content for Each Element

Create a variable `itemText`:

```javascript
const itemText = `${dessert.title} - ${dessert.price}`;
```

Use dot notation to access data:

* `dessert.title`
* `dessert.price`

### 3.3. Step 3: Insert Text into JSX

```javascript
const listItems = desserts.map((dessert) => {
  const itemText = `${dessert.title} - ${dessert.price}`;
  return <li key={dessert.id}>{itemText}</li>;
});
```

Note: `key` is very important in React when rendering lists.

### 3.4. Step 4: Insert List into JSX Return

In the component return:

```javascript
return (
  <ul>
    {listItems}
  </ul>
);
```

---

## 4. Complete Example

```javascript
function DessertList({ desserts }) {
  const listItems = desserts.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li key={dessert.id}>{itemText}</li>;
  });

  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

Result:

* A simple list of desserts is displayed.
* Visitors can quickly see names and prices.
* Data is transformed using `map()` and displayed neatly in JSX.

---

## 5. Summary

* `map()` can return React elements.
* Use `{}` in JSX to embed JavaScript expressions.
* Use `<li>` for each item and `<ul>` to wrap the list.
* Each element needs a unique `key`.

---

# Understanding and Using Keys in React When Working with Lists

## 1. Why Keys are Needed in React

### 1.1. React Automatically Optimizes UI

* React is like “autopilot,” optimizing most UI updates automatically.
* It uses a diffing algorithm to compute the minimal changes needed.

### 1.2. When Manual Intervention is Needed

* When React cannot automatically determine which elements are unchanged, updated, added, or removed.
* Common case: lists.

---

## 2. What are Keys?

### 2.1. Definition

Keys are unique identifiers used to:

* Help React know which items have changed.
* Retain or discard internal state of each element during UI updates.
* Optimize performance when re-rendering lists.

### 2.2. Visual Example

Drinks list:

```javascript
["Beer", "Wine", "Cider"]
```

* Adding "Cider" at the end → React easily recognizes the existing order.
* Adding at the beginning → React may misinterpret and re-render everything unless keys are used.

---

## 3. How React Uses Keys to Optimize

### 3.1. Without Keys

Adding an element at the start of the list makes React:

* Think “Beer” → “Cider”, “Wine” → “Beer”, …
* Causes unnecessary changes, reducing performance.

### 3.2. With Keys

Example:

```javascript
<li key="beer">Beer</li>
<li key="wine">Wine</li>
<li key="cider">Cider</li>
```

React knows:

* “cider” is the new element.
* “beer” and “wine” only change positions, not elements.

Result: highly optimized.

---

## 4. Rules for Choosing Correct Keys

### 4.1. Golden Rule

Use a stable and unique value in the list.

### 4.2. Best Key: ID from Data

Example:

```javascript
{drinks.map(drink => (
  <li key={drink.id}>{drink.name}</li>
))}
```

* IDs from a database are stable and unique.

---

## 5. Other Key Options (and Risks)

### 5.1. Random Key (`Math.random`, `uuid`, `nanoid`)

Not recommended because:

* Every re-render → key changes → React deletes the entire list and recreates it.
* Loses performance + element state.

### 5.2. Using Index

Only use when no better option exists.
Do **not** use index if:

* The list can be reordered.
* Elements can be added/removed.
* Users interact with items to create state.

Because:

* Index changes with position → React may misinterpret updates.

---

## 6. Consequences of Wrong Keys

### 6.1. Reduced Performance

React must:

* Delete old elements.
* Create new elements unnecessarily.

### 6.2. Unpredictable UI Bugs

Examples:

* Input loses value.
* Component loses focus.
* State jumps to another item.

---

## 7. Key Rules Summary

* Key must be unique within the list.
* Key must be stable across renders.
* Best: ID from data.
* Index is the last resort.

---

## 8. Illustration Examples

### 8.1. Good Example

```javascript
const drinks = [
  { id: 101, name: "Beer" },
  { id: 102, name: "Wine" }
];

<ul>
  {drinks.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

### 8.2. Bad Example

```javascript
{drinks.map((item, index) => (
  <li key={index}>{item.name}</li>
))}
```

---

# Controlled Components in React

## 1. Why are Controlled Components Important?

* While browsing the web, forms are everywhere (email subscriptions, login, account creation, etc.).
* In React, forms do not behave like regular DOM elements because React wants to control the UI consistently.
* Traditional HTML forms:

  * Maintain their own internal state in the DOM.
  * On submit, send a request via the `action` attribute → default behavior, making detailed control difficult.

---

## 2. What is a Controlled Component?

Controlled Components are a technique where:

* React state becomes the **single source of truth** for the input.
* The DOM no longer maintains its own state → React has full control.

**Benefits:**

* Control every input change.
* Easy to validate and handle submit logic.
* Easier to debug and keep in sync.

---

## 3. How to Create a Controlled Component

**Key elements:**

1. Local state (usually with `useState`)
2. `value` prop
3. `onChange` prop

**Basic Example:**

```javascript
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

**Mechanism:**

* `value={state}` → React decides what the input displays.
* `onChange` gets `event.target.value` → updates state → re-renders → input updates according to React.

---

## 4. Handling Form Submit with `onSubmit`

* Attach `onSubmit` to the `<form>` element:

```javascript
<form onSubmit={handleSubmit}>
```

* Callback receives a DOM-like event object.
* Commonly used:

```javascript
event.preventDefault(); // prevent default HTML submit
```

* Inside the callback, you can:

  * Validate input
  * Send API requests
  * Reset the form

---

## 5. Controlled vs Uncontrolled Components

* **Controlled:** state is managed by React → better when logic is needed.
* **Uncontrolled:** state is kept in the DOM (like traditional HTML input).
* React recommends **Controlled Components** by default, but some inputs can still behave as uncontrolled.

---

## 6. Conclusion

* Controlled Components let React fully manage forms.
* Use `value` + `onChange` to keep the input in sync with state.
* Use `onSubmit` to handle submit logic instead of relying on HTML default behavior.
* This is a core technique for form handling in React.

---

Dưới đây là bản dịch đầy đủ và rõ ràng sang tiếng Anh:

---

## Understanding and Using `map()` in JavaScript

### 1. Basic Concepts

#### 1.1. Arrays in JavaScript

* An array is a collection of elements.
* In JavaScript, arrays represent lists of data.
* Each element in an array can be a number, string, object, etc.

#### 1.2. Real-world Problem

When fetching data from external services (APIs), the returned data often contains more information than needed for display.
→ We need to transform the data to extract only the required details.

---

### 2. What is `map()`?

#### 2.1. Definition

* `map()` is a method used to transform each element of an array.
* `map()` does not modify the original array; it returns a new array.

#### 2.2. Use Cases

* Remove unnecessary fields.
* Create a new, easier-to-use data structure.
* Normalize data returned from APIs.

---

### 3. Practical Example: Little Lemon Dessert List

#### 3.1. Initial Data (Mock Example)

```js
const data = [
  {
    id: 1,
    title: "Lemon Pie",
    image: "lemon.jpg",
    description: "Fresh and tangy pie",
    price: 5
  },
  {
    id: 2,
    title: "Chocolate Cake",
    image: "choco.jpg",
    description: "Rich chocolate flavor",
    price: 7
  }
];
```

The data includes 5 fields, but we only want to display:

* `content = title + " - " + description`
* `price`

---

### 4. Using `map()` to Transform the List

#### 4.1. Step 1: Create a New Array

```js
const topDesserts = data.map((item) => {
  return item;
});
```

#### 4.2. Step 2: Keep Only the Needed Information

```js
const topDesserts = data.map((item) => {
  return {
    content: `${item.title} - ${item.description}`,
    price: item.price
  };
});
```

#### 4.3. Final Result

```js
console.log(topDesserts);
```

Output:

```js
[
  { content: "Lemon Pie - Fresh and tangy pie", price: 5 },
  { content: "Chocolate Cake - Rich chocolate flavor", price: 7 }
]
```

---

### 5. Easy Explanation

#### 5.1. Why use `map()`?

* You don’t want to modify the original data.
* You want a new list with a clear structure.
* You want to present clean information to end users.

#### 5.2. When should you use `map()`?

Use it when you need to:

* transform item content
* create a new item based on an old one
* normalize data from an API

---

### 6. A Simpler Example

Example: doubling numeric values

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6]
```

---

### 7. Summary

* `map()` creates a new array.
* Each new element is derived from an existing one.
* It’s very useful for handling API data.
* Helps simplify and format data for display.

---

# Displaying Lists with `map()` in React using JSX

### 1. Overview

#### 1.1. Main Idea

In React, you can transform a data list into a list of React components by using `map()` directly inside JSX.

#### 1.2. Real Case

Little Lemon wants to display a list of desserts with:

* id
* title
* image
* description
* price

Goal: Only display `title` and `price` as a list.

---

### 2. JSX and Components

#### 2.1. What is JSX?

* JSX is a JavaScript syntax extension used to describe UI.
* It allows writing HTML-like code inside JavaScript.

#### 2.2. Components in React

* A component is a function that returns JSX.
* HTML-like tags in JSX represent components (e.g., `<ul>`, `<li>`).

---

### 3. Steps to Display the List

#### 3.1. Step 1: Create a Variable for the `map()` Result

```js
const listItems = desserts.map((dessert) => {
  return <li></li>;
});
```

Initially return an empty `<li>` to set the structure.

#### 3.2. Step 2: Add Content for Each Item

Create `itemText`:

```js
const itemText = `${dessert.title} - ${dessert.price}`;
```

Use dot notation:

* `dessert.title`
* `dessert.price`

#### 3.3. Step 3: Put the Text Inside JSX

```js
const listItems = desserts.map((dessert) => {
  const itemText = `${dessert.title} - ${dessert.price}`;

  return <li key={dessert.id}>{itemText}</li>;
});
```

Note:

* `key` is crucial when rendering lists.

#### 3.4. Step 4: Return the JSX with the List

```jsx
return (
  <ul>
    {listItems}
  </ul>
);
```

---

### 4. Complete Example

```jsx
function DessertList({ desserts }) {
  const listItems = desserts.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li key={dessert.id}>{itemText}</li>;
  });

  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

**Result**

* The dessert list is displayed simply.
* Users can quickly see the name and price.
* Data is transformed with `map()` and cleanly rendered with JSX.

---

### 5. Summary

* `map()` can return React elements.
* Use `{}` in JSX to embed JavaScript expressions.
* Use `<li>` for each item and `<ul>` to wrap the list.
* Each element needs a unique `key`.

---

# Understanding and Using Keys in React When Working with Lists

## 1. Why Keys Are Needed in React

### 1.1. React Automatically Optimizes the UI

* React works like an “auto-pilot” system, optimizing most UI updates by itself.
* It uses a diffing algorithm to calculate the minimal set of changes needed.

### 1.2. When Do You Need to Intervene Manually?

* When React cannot automatically determine which items remain the same, which change, which are added, or which are removed.
* This commonly happens with lists.

---

## 2. What Are Keys?

### 2.1. Definition

Keys are unique identifiers used to:

* Help React understand which items have changed.
* Determine whether to preserve or reset the internal state of each item when the UI updates.
* Improve rendering performance.

### 2.2. Visual Example

Given a drink list:
`["Beer", "Wine", "Cider"]`

* If “Cider” is added to the end, React easily detects the structure remains mostly the same.
* If added to the beginning, React misinterprets changes and may re-render everything — unless keys are used.

---

## 3. How React Uses Keys for Optimization

### 3.1. Without Keys

When adding an element to the start of the list, React might think:

* “Beer” → becomes “Cider”
* “Wine” → becomes “Beer”
* … and so on
  This causes unnecessary updates and reduced performance.

### 3.2. With Keys

Example:

```jsx
<li key="beer">Beer</li>
<li key="wine">Wine</li>
<li key="cider">Cider</li>
```

React now understands:

* `"cider"` is a new item.
* `"beer"` and `"wine"` just moved; they are not new items.

Result: major performance improvements.

---

## 4. Rules for Choosing the Right Key

### 4.1. Golden Rule

Use a **stable and unique** value from the list.

### 4.2. Best Key: ID from Your Data

Example:

```jsx
{drinks.map(drink => (
  <li key={drink.id}>{drink.name}</li>
))}
```

* IDs usually come from a database → stable and unique.

---

## 5. Other Key Options (and Their Risks)

### 5.1. Random Keys (Math.random, uuid, nanoid)

Avoid them because:

* Keys change every render → React deletes and recreates the entire list.
* Causes performance loss and item state resets.

### 5.2. Using Index

Only use as a last resort.

Avoid using index when:

* The list is sorted.
* Items may be inserted or removed.
* Each item might hold internal state from user interaction.

Reason:

* Index changes based on position → React misinterprets updates.

---

## 6. Consequences of Bad Keys

### 6.1. Performance Drops

React must:

* Remove old items.
* Recreate new ones unnecessarily.

### 6.2. Unpredictable UI Bugs

Examples:

* Input values disappear.
* Components lose focus.
* State jumps from one item to another.

---

## 7. Summary Rules

* Keys must be unique within the list.
* Keys must remain stable across renders.
* Best option: ID from your data.
* Index should only be used as a fallback.

---

## 8. Example

### 8.1. Good Example

```jsx
const drinks = [
  { id: 101, name: "Beer" },
  { id: 102, name: "Wine" }
];

<ul>
  {drinks.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

### 8.2. Not Recommended

```jsx
{drinks.map((item, index) => (
  <li key={index}>{item.name}</li>
))}
```

---

# Controlled Components in React

## 1. Why Controlled Components Matter

* On the web, forms appear everywhere: email sign-ups, login, account creation…
* In React, forms don’t behave like normal DOM elements because React aims for consistent UI control.
* Traditional HTML forms:

  * Store state inside the DOM.
  * Automatically submit via `action` — harder to control precisely.

---

## 2. What Is a Controlled Component?

A controlled component is when:

* React state becomes the **single source of truth** for the input.
* The DOM no longer manages state — React controls everything.

**Benefits:**

* Full control over input changes.
* Easy validation and submission logic.
* Easier debugging and synchronization.

---

## 3. How to Create a Controlled Component

Main parts:

1. Local state (usually `useState`)
2. The `value` prop
3. The `onChange` prop

Basic example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Mechanism:

* `value={state}` → React decides what the input displays.
* `onChange` reads `event.target.value` → updates state → triggers re-render → input updates according to React.

---

## 4. Handling Form Submission with `onSubmit`

* Attach `onSubmit` to the `<form>`:

```jsx
<form onSubmit={handleSubmit}>
```

* The callback receives a DOM-like event.
* Common usage:

```js
event.preventDefault(); // prevent default HTML submission
```

Inside the handler, you can:

* Validate input
* Send API requests
* Reset the form

---

## 5. Controlled vs Uncontrolled

* **Controlled:** state managed by React → best when logic is involved.
* **Uncontrolled:** state inside the DOM (like traditional HTML inputs).
* React recommends controlled components, though some input types may still behave uncontrolled.

---

## 6. Conclusion

* Controlled components let React fully manage the form.
* Use `value` + `onChange` to sync input with state.
* Use `onSubmit` to handle submit logic instead of default HTML behavior.
* A core technique for handling forms in React.

---

# Controlled vs Uncontrolled Components in React

## 1. Basic Concepts

### **Uncontrolled Components**

* These are regular HTML inputs.
* The DOM itself manages the input's state; React does not control it.
* You read values using a React ref.
* Suitable for simple forms where the UI does not need to update on every change.

### **Controlled Components**

* The input value is controlled by React state.
* Every change triggers `onChange` → updates state → component re-renders.
* Data and UI always stay in sync.
* Suitable for forms with validation, input formatting, conditional display, or dynamic inputs.

---

## 2. How They Work

### **Uncontrolled**

```jsx
const inputRef = useRef(null);
<input ref={inputRef} type="text" />;
```

Reading the value:

```jsx
const value = inputRef.current.value;
```

### **Controlled**

```jsx
const [value, setValue] = useState("");

<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

* The state always represents the current input value.

---

## 3. Special Input: `<input type="file" />`

* Always uncontrolled.
* The file value cannot be set programmatically.
* Files are accessed via a ref:

```jsx
const files = fileRef.current.files;
```

---

## 4. When Should You Use Each?

### **Uncontrolled**

* Simple forms.
* Only need values when submitting.
* No real-time validation.

### **Controlled**

* Need validation on each keystroke.
* Need to enable/disable submit button.
* Need to format input values.
* Need dependent inputs.
* Dynamic forms (add/remove fields).

---

## 5. Feature Comparison

| Feature                                   | Uncontrolled | Controlled |
| ----------------------------------------- | ------------ | ---------- |
| Get value on submit                       | ✔️           | ✔️         |
| Validate on submit                        | ✔️           | ✔️         |
| Real-time validation                      | ❌            | ✔️         |
| Disable submit button based on conditions | ❌            | ✔️         |
| Input formatting                          | ❌            | ✔️         |
| Multiple inputs representing one value    | ❌            | ✔️         |
| Dynamic inputs                            | ❌            | ✔️         |

---

## 6. Conclusion

* **Uncontrolled:** simpler, good for small forms.
* **Controlled:** more powerful and flexible, ideal for real-world forms with logic.

---

# Building Forms and Controlled Components in React

## 1. Why Use React for Forms?

* Forms often involve complex behaviors (validation, formatting, state, accessibility).
* React helps manage input, state, and form behavior in a clear way.
* Controlled components allow complete control over data flow.

---

## 2. Controlled vs Uncontrolled

### **Uncontrolled Form**

* State lives inside the DOM.
* Values are accessed via refs when needed.
* Form behaves like traditional HTML forms (submit → page refresh).
* Suitable for very simple forms.

### **Controlled Form**

* Input values are stored in component state.
* Every change is captured using `onChange`.
* The UI always matches the state.
* Enables: instant validation, disabling the submit button, formatting, custom submit logic.

---

## 3. Converting an Uncontrolled Form → Controlled Form

1. Create state for the input:

```jsx
const [name, setName] = useState("");
```

2. Bind state and event handler to the input:

```jsx
<input 
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

3. Customize the submit behavior:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted");
  setName("");
};
```

* Use `onSubmit` on the `<form>`.
* Call `event.preventDefault()` to stop the default HTML submission behavior.

---

## 4. Enhancing Form Control

### Disable the Submit Button When Form Is Invalid

```jsx
<button disabled={name === ""}>Submit</button>
```

### Reset Input

* After submission: `setName("")`

### Connect Label and Input (Accessibility)

```jsx
<label htmlFor="name">Name</label>
<input id="name" ... />
```

---

## 5. Important Notes

* In React, `for` cannot be used in `<label>` → use `htmlFor`.
* `preventDefault()` is the correct way to stop default form submission.
* Controlled components are ideal for complex, logic-heavy forms.

---

## 6. General Workflow for a Controlled Form in React

a. Create state for each input.
b. Bind the state to the `value` attribute.
c. Use `onChange` to update state on every keystroke.
d. Use `onSubmit` to handle custom submission logic.
e. Call `preventDefault()` to block default form behavior.
f. Add validation, disable buttons, and format input as needed.
g. Add accessibility (`htmlFor`, `id`).

---

## 7. Final Conclusion

* Controlled forms give you full control over data flow, real-time validation, and precise input handling, greatly improving UX.
* React makes form building flexible, scalable, and maintainable.
* Moving from uncontrolled to controlled forms allows you to handle every part of the form’s logic with confidence.

---

# **Building a Feedback Form in React (Controlled Components + Validation)**

## **1. Lesson Objectives**

Create a feedback form for the Little Lemon restaurant with:

* A slider to select a score from 0–10
* A textarea for comments
* Validation rules:

  * If score ≤ 5 → comment must be at least 10 characters
* Use controlled components
* Reset the form after submission

---

## **2. Starting the Project**

* The project is created using Create React App.
* Initially, the form only includes:

  * A header
  * A Submit button

---

## **3. Creating the Score Slider (0–10)**

### **3.1 Build the UI**

Create a `<div>` containing:

* A `<label>`: “Score”
* An `<input type="range" min="0" max="10" />`

### **3.2 Convert the input into a controlled component**

Create state:

```js
const [score, setScore] = useState(10);
```

Wrap into the input:

```jsx
<input 
  type="range"
  min="0"
  max="10"
  value={score}
  onChange={(e) => setScore(e.target.value)}
/>
```

### **3.3 Display the numeric value next to the label**

Example:

```
Score: {score}
```

---

## **4. Creating the Comments Textarea**

### **4.1 Create state**

```js
const [comments, setComments] = useState("");
```

### **4.2 UI**

* A `<label>`
* A `<textarea>`

### **4.3 Controlled component**

```jsx
<textarea
  value={comments}
  onChange={(e) => setComments(e.target.value)}
/>
```

---

## **5. Validation When Submitting**

### **5.1 Handle form submission**

```jsx
<form onSubmit={handleSubmit}>
```

### **5.2 Validation logic inside `handleSubmit`**

1. Call `event.preventDefault()` to stop the default behavior.
2. Check:

   * If score ≤ 5 **and** comment length < 10 → show an alert and `return`.
3. Otherwise:

   * Log success
   * Reset the form:

     ```js
     setScore(10);
     setComments("");
     ```

---

## **6. Overall Form Flow**

1. User drags the slider → updates score
2. User types a comment → updates comments
3. User clicks Submit:

   * If score is low (≤ 5), a longer comment is required
   * If valid → show success → reset form

---

## **7. Complete (Simplified) React Example**

```jsx
function FeedbackForm() {
  const [score, setScore] = useState(10);
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (score <= 5 && comments.length < 10) {
      alert("Please provide a comment of at least 10 characters.");
      return;
    }

    console.log("Feedback submitted");
    setScore(10);
    setComments("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback</h2>

      <div>
        <label>Score: {score}</label>
        <input
          type="range"
          min="0"
          max="10"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

# **Props and State in React**

## **1. Illustrative Analogy (Restaurant Example)**

* Blueprints = React Components (shared templates)
* Customizing each restaurant (furniture, colors…) = Props and State
* Each component has a template, but data is customized via props and state

---

## **2. What Are Props and State?**

Both:

* Are plain JavaScript objects
* Influence how a component renders
* Are raw data used to generate UI

---

## **3. Differences Between Props and State**

### **Props**

* Passed from parent to child
* Similar to function parameters
* Immutable inside the receiving component
* A component can pass props down to its children

### **State**

* Managed internally within a component
* Like variables inside a function
* Mutable (updated using setState or hooks)
* Updating state → triggers re-render
* Represents a snapshot in time
* Private to the component

---

## **4. Similarities**

* Both are JS objects
* Both feed data into render()
* Both cause UI updates when changed

---

## **5. Rules for Choosing Props vs State**

* If data changes over time **within** a component → use state
* If data comes from a parent and is not modified → use props

---

## **6. When Should You Use State?**

* State adds complexity
* Avoid state unless needed
* Interactive applications require some state
* Avoid having too many components hold state

---

## **7. Component Types Based on Props and State**

### **7.1 Stateless Components**

* Have props, no state
* Purely presentational
* Easy to read and test

### **7.2 Stateful Components**

* Have both props and state
* Handle complex logic (user interactions, API calls, data processing…)
* Keep their number reasonable
* Push presentation into stateless components

---

## **8. Summary**

* Props: external data, read-only, like function parameters
* State: internal data, mutable, triggers re-renders
* Use state for dynamic data
* Use props for static or parent-provided data
* Use stateless components for UI
* Use stateful components for logic

---

# **React Context**

## **1. Problem in Large React Apps**

* Data passes through props from parent → child
* When many components need the same data, props must be passed through many layers
* Intermediate components don’t need the data but still receive it
* This is *props drilling*

---

## **2. When Props Become Inefficient**

Common global data:

* Theme (light/dark)
* Locale
* Authenticated user
* Settings

These are **global state**.

---

## **3. Solution: React Context API**

* Allows passing data through the component tree **without props**
* Ideal for global data

---

## **4. How to Create Context (Example: UserContext)**

### Step 1: Create a context

```js
const UserContext = createContext(undefined);
```

### Step 2: Create a Provider

```jsx
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "John" });
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}
```

### Step 3: Custom hook

```js
function useUser() {
  return useContext(UserContext);
}
```

### Step 4: Wrap the entire app

```jsx
<UserProvider>
  <App />
</UserProvider>
```

### Step 5: Consume the data

```js
const { user } = useUser();
```

Used in:

* Header
* Pages

---

## **5. Result**

* App displays authenticated user in multiple components
* No more props drilling

---

## **6. Important Notes**

Use Context for global state, but avoid overuse.
Use props/state when the data:

* Only belongs to a few components
* Doesn’t need global sharing

---

# **How Re-rendering Works with Context**

## **1. React’s Default Behavior**

* A re-render in a parent → re-renders all children
* Example:
  App → A → B → C
  If App re-renders → all descendants re-render

---

## **2. Problem with Context**

* When the `value` of a Provider changes → all consumers re-render
* Even if the value is the same but newly created:

  ```js
  const value = { a: 'hi', b: 'bye' };
  ```

  New object ≠ previous object

---

## **3. Optimization #1: React.memo**

* Prevents re-render if props haven’t changed
* Useful for large subtrees under a provider

---

## **4. Optimization #2: useMemo for Stable References**

Avoid recreating objects:
❌ Wrong:

```js
const value = { a: 'hi', b: 'bye' };
```

✔️ Correct:

```js
const value = useMemo(() => ({ a, b }), [a, b]);
```

---

## **5. Summary**

* React re-renders from parent to children
* Context triggers re-renders when value reference changes
* React.memo blocks re-renders based on props
* useMemo stabilizes object references
* Combine both for best performance