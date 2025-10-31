**REACT TESTING LIBRARY (RTL)**

### **1. What is React Testing Library?**

React Testing Library (RTL) is a library that helps you test the **user interface (UI)** of React applications from the **real user’s perspective**.

In other words:
Instead of testing internal code, RTL helps you test **behavior** — checking whether users can **see, click, and input data** as expected.

It focuses on the question:

> “When users interact with the page, does everything work correctly?”

RTL is often used **together with Jest**.

### **2. Why Use React Testing Library?**

| Reason                               | Explanation                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------- |
| Easy to learn and simple             | Natural syntax that mimics real user behavior                                    |
| Independent of internal code details | Tests through the UI without caring whether a component uses `<div>` or `<span>` |
| Works well with Jest                 | Jest handles logic testing, RTL handles UI testing                               |
| Recommended by the React team        | Replaces Enzyme – an older library focused on internal component structure       |

### **3. Installing React Testing Library**

If you already have a React or React + TypeScript project, simply run:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

The `@testing-library/jest-dom` package provides additional visual matchers such as:

* `toBeInTheDocument()`
* `toHaveTextContent()`
* `toBeVisible()`

### **4. Structure of a Test with RTL**

Each test usually follows three steps, similar to Unit Tests:

* **Render:** Display the component in the test environment
* **Act:** Simulate user actions (click, input, select, etc.)
* **Assert:** Verify the expected result

**Example:**

**Component to test — `Counter.tsx`**

```tsx
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Value: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
```

**Test file — `Counter.test.tsx`**

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("displays initial value as 0", () => {
  render(<Counter />);
  const title = screen.getByText(/Value:/i);
  expect(title).toHaveTextContent("0");
});

test("increases value when 'Increase' button is clicked", () => {
  render(<Counter />);
  const button = screen.getByText("Increase");
  fireEvent.click(button);
  expect(screen.getByText(/Value:/i)).toHaveTextContent("1");
});

test("decreases value when 'Decrease' button is clicked", () => {
  render(<Counter />);
  const button = screen.getByText("Decrease");
  fireEvent.click(button);
  expect(screen.getByText(/Value:/i)).toHaveTextContent("-1");
});
```

**Explanation:**

* `render(<Counter />)` creates the component inside the test environment.
* `screen.getByText()` finds an element by its visible text.
* `fireEvent.click()` simulates a button click.
* `expect(...).toHaveTextContent()` checks the displayed result.

### **5. Common Functions in React Testing Library**

| Category               | Function                                                                   | Description                                                |
| ---------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Find element           | `getByText`, `getByRole`, `getByLabelText`, `getByPlaceholderText`         | Find visible elements in the UI                            |
| Find multiple elements | `getAllByText`, `getAllByRole`                                             | When there are multiple matching elements                  |
| Async queries          | `findByText`, `findByRole`                                                 | For elements that appear later (due to async or API calls) |
| Simulate user actions  | `fireEvent.click`, `fireEvent.change`, `fireEvent.submit`                  | Simulate user interaction                                  |
| DOM assertions         | `toBeInTheDocument`, `toHaveTextContent`, `toBeVisible`, `toHaveAttribute` | Verify DOM results                                         |

### **6. Testing a Form with Input**

**Example Component — `LoginForm.tsx`**

```tsx
import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setSubmitted(true)}>Submit</button>

      {submitted && <p>Hello, {username}</p>}
    </div>
  );
}
```

**Test File — `LoginForm.test.tsx`**

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";

test("displays greeting after entering name and clicking Submit", () => {
  render(<LoginForm />);
  const input = screen.getByPlaceholderText("Enter your name");
  fireEvent.change(input, { target: { value: "Nhi" } });

  const button = screen.getByText("Submit");
  fireEvent.click(button);

  expect(screen.getByText("Hello, Nhi")).toBeInTheDocument();
});
```

### **7. Comparison: Jest vs React Testing Library**

| Criteria     | Jest                                     | React Testing Library                     |
| ------------ | ---------------------------------------- | ----------------------------------------- |
| Purpose      | Test logic (functions, classes, modules) | Test React UI                             |
| Type of test | Unit test, integration test              | UI test, behavior test                    |
| DOM testing  | Not built-in                             | Built-in (`getByText`, `getByRole`, etc.) |
| Syntax       | `expect(value).toBe()`                   | `expect(element).toBeInTheDocument()`     |

Combining these two libraries allows you to test both **logic** and **UI** comprehensively in React.

### **8. Best Practices**

1. **Test behavior, not implementation details**

   * Don’t test whether a component uses `<div>` or `<span>`.
   * Instead, test whether users **see the correct text** or **buttons work properly**.

2. **Use role or text-based queries**

   * Prefer `getByRole()` or `getByText()` over `getByTestId()`, as they reflect real user interaction.

3. **Avoid snapshot tests for dynamic UI**

   * Snapshots are better suited for static UIs that change infrequently.

4. **Use `findBy...` for asynchronous operations**

   * If your component uses `useEffect` to call APIs, use `findByText()` or `waitFor()` to wait for results.

### **9. Summary**

| Topic                 | Summary                                                |
| --------------------- | ------------------------------------------------------ |
| Purpose               | Test React UI as real users would                      |
| Works with            | Jest                                                   |
| Main steps            | Render → Act → Assert                                  |
| Common actions        | `render`, `screen`, `fireEvent`, `expect`              |
| Best testing approach | Focus on user behavior (clicking, typing, seeing text) |