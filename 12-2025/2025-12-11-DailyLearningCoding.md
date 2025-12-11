# Cross-Cutting Concerns and Higher-Order Components (HOC) in React

## 1. Cross-Cutting Concerns

### 1.1 Definition

Cross-cutting concerns are shared functionalities that appear in many places throughout an application but do not belong to the core business logic.
Common examples:

* Authorization management
* Error handling
* Logging
* Real-time data listening

They are important for the application’s operation but are not “core business logic.”

### 1.2 Why They Are Hard to Reuse with Regular Components

Components are great for UI reuse, but they do not help reuse shared logic neatly.
When the same logic is used in many places, code duplication becomes common.

---

## 2. Introductory Example

### 2.1 Live Orders List

The Little Lemon application needs to display a real-time list of orders.
A component must:

1. Create state to store orders
2. Use `useEffect` to subscribe
3. Update state when new data arrives
4. Unsubscribe on unmount

### 2.2 Newsletter Subscribers List

The application also needs to track the number of newsletter subscribers in real time.

Even though the data is different (orders vs subscribers), the code pattern is identical:

1. Subscribe to a real-time data source
2. Update state when data changes
3. Remove the listener on unmount

### 2.3 Observation

This pattern repeats many times in large applications → duplication and maintainability issues.

---

## 3. First Solution: Custom Hooks (and Their Limitations)

Custom hooks help gather shared logic in one place.
However:

* Every component using the hook becomes stateful
* Each component must be modified to include the hook
* UI and logic are still not fully separated

A better solution should allow UI components to stay stateless while still receiving data.

---

## 4. Higher-Order Components (HOC)

### 4.1 Definition

A Higher-Order Component is a function that takes a component and returns a new component with enhanced capabilities.

* A component transforms **props → UI**
* An HOC transforms **component → enhanced component**
* The goal is to add shared logic without modifying the original component

### 4.2 How It Works

A typical HOC:
`withSubscription(WrappedComponent, selectData)`

* **WrappedComponent**: the component to enhance
* **selectData**: function specifying which data to retrieve (orders or users)
* The HOC returns a new component that:

  * Subscribes to data
  * Manages state updates
  * Passes updated data as the `data` prop
  * Passes through all other props

### 4.3 Advantages

* Centralizes subscription logic in one place
* Reusable across many components
* Original components remain stateless and only receive `data`
* Eliminates repeated real-time data logic

---

## 5. Example of Using an HOC

### 5.1 Creating Two Different Components

* Component A: displays live orders
* Component B: displays newsletter subscribers

Both simply specify:

```js
const LiveOrders = withSubscription(OrderList, dataSource => dataSource.getOrders());
const NewsletterList = withSubscription(UserList, dataSource => dataSource.getUsers());
```

Neither component needs to:

* Add listeners
* Remove listeners
* Create state

→ Everything is handled inside the HOC.

---

## 6. Conclusion

### 6.1 What Was Learned

* Cross-cutting concerns are shared features outside business logic
* Components alone cannot always reuse logic cleanly
* Custom hooks help but have limits
* HOCs are a powerful way to centralize shared logic and keep UI components pure

### 6.2 Suggestion

Another pattern for handling cross-cutting concerns is **Render Props**, which also allows logic sharing without duplication. This can be covered in a follow-up lesson if needed.

---

# Higher-Order Components (HOC)

## 1. Overview

Higher-Order Components are an advanced React pattern that enables reusing shared logic and behaviors without duplicating code or complicating the original components.
An HOC is not a component itself; it is a function that receives a component and returns an enhanced version.

---

## 2. Key Principles When Using HOCs

### 2.1 Do Not Mutate the Original Component

React relies on immutability. HOCs must be pure functions:

* Take the input component
* Return a new component
* Never modify the original component

Incorrect:

```js
const HOC = (WrappedComponent) => {
  WrappedComponent = () => {}; // Mutating the original component
};
```

Correct:
Return a new component and keep `WrappedComponent` unchanged.

---

### 2.2 Pass Through Unrelated Props

An HOC should only inject props related to its functionality while passing through all other props to preserve the original component’s interface.

Example:

```jsx
const withMousePosition = (WrappedComponent) => {
  const injectedProp = { mousePosition: { x: 10, y: 10 } };

  return (originalProps) => {
    return (
      <WrappedComponent
        injectedProp={injectedProp}
        {...originalProps}
      />
    );
  };
};
```

Goal: keep the wrapped component flexible and reusable.

---

## 3. Maximizing Composability

### 3.1 Standard HOC Signature

`Component => Component`
Because input and output types match, HOCs can be stacked.

### 3.2 Configurable HOCs

Some HOCs accept configuration:

```js
const EnhancedComponent = HOC(WrappedComponent, config);
```

### 3.3 Currying — A Common HOC Form

Currying creates HOCs like:

```js
const EnhancedComponent = connect(selector, actions)(WrappedComponent);
```

Breaking it down:

```js
const HOC = connect(selector, actions);
const EnhancedComponent = HOC(WrappedComponent);
```

This pattern is common in libraries such as React Redux.

### 3.4 Composing Multiple HOCs

Many libraries (lodash, Redux, Ramda) provide `compose`:

```js
const enhance = compose(
  withMousePosition,
  withURLLocation,
  connect(selector)
);

const EnhancedComponent = enhance(WrappedComponent);
```

`compose(f, g, h)` is equivalent to:
`(...args) => f(g(h(...args)))`

---

## 4. Important Warnings When Using HOCs

### 4.1 Do Not Create HOCs Inside Render Functions

Common mistake: creating an HOC inside a component’s render function.

Incorrect:

```js
const Component = () => {
  const EnhancedComponent = HOC(WrappedComponent);
  return <EnhancedComponent />;
};
```

Every render creates a new component → state loss and remounting.

Correct:

```js
const EnhancedComponent = HOC(WrappedComponent);

const Component = () => {
  return <EnhancedComponent />;
};
```

---

### 4.2 HOCs Do Not Automatically Forward Refs

`ref` is not a prop.
When using an HOC:

* The `ref` points to the HOC container, not the wrapped component
* To forward the ref, `React.forwardRef` must be used

---

## 5. Final Summary

Key points about HOCs:

* Do not mutate the original component
* Pass through unrelated props
* Maximize reuse via composable HOCs
* Use currying for more flexibility
* Avoid creating HOCs during render
* Use `forwardRef` when ref forwarding is needed

---

# Render Props in React

## 1. Overview

### 1.1 The problem to solve

In many React applications, multiple components need to reuse the same logic, such as:

* Fetching data from a server
* Listening to events
* Checking access permissions
* Managing shared state

If the same logic is repeated across components, the code becomes redundant and harder to maintain.

### 1.2 Code-reuse techniques

Two common techniques for reusing logic are:

1. Higher-Order Components (HOC)
2. Render Props

This lesson focuses on the second technique.

---

## 2. What Render Props Are

### 2.1 Definition

Render props is a pattern in React where a component receives a prop (usually called `render`, but any name works), and this prop must be a function.
The component calls this function inside its render logic, and the function returns a React element.

### 2.2 Meaning

* The parent component handles the shared logic (for example, fetching data).
* The child component decides how the UI should look.
* Logic and UI are completely separated.

### 2.3 Comparison with HOC

| HOC                                      | Render Props                                        |
| ---------------------------------------- | --------------------------------------------------- |
| Injects new props via a wrapper function | Passes data through the render function's parameter |
| Can be harder to trace                   | Clearer and more explicit                           |
| Can create component nesting             | Allows fine-grained UI control                      |

---

## 3. Example: Little Lemon Restaurant

The application needs to display the number of desserts and drinks on the menu.
Data is fetched from the server (simulated in the example).
Goal: avoid duplicating data-fetching logic.

---

## 4. DataFetcher Component Using Render Props

### 4.1 Idea

`DataFetcher` has a single purpose: fetch data from a given URL.
It does not decide how to display the data. The `render` function decides that.

### 4.2 Example code

```jsx
function DataFetcher({ url, render }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (url.includes("desserts")) {
      setData(["Cake", "Pie", "Pudding"]);
    } else if (url.includes("drinks")) {
      setData(["Soda", "Tea", "Coffee"]);
    }
  }, [url]);

  return render(data);
}
```

### 4.3 Key points

* `useEffect` simulates fetching data.
* `return render(data)` is the special part:
  The component does not render its own UI. It delegates UI creation to the function passed in.

---

## 5. Display Components

### 5.1 DessertsCount

```jsx
function DessertsCount() {
  return (
    <DataFetcher
      url="/api/desserts"
      render={(desserts) => (
        <p>Number of desserts: {desserts.length}</p>
      )}
    />
  );
}
```

### 5.2 DrinksCount

```jsx
function DrinksCount() {
  return (
    <DataFetcher
      url="/api/drinks"
      render={(drinks) => (
        <h1>Number of drinks: {drinks.length}</h1>
      )}
    />
  );
}
```

---

## 6. Root App Component

```jsx
function App() {
  return (
    <div>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}
```

---

## 7. Strengths of Render Props

### 7.1 Flexibility

One data-fetching logic, many possible UIs.

### 7.2 Ideal for cross-cutting concerns

Useful for reusable logic such as:

* Data fetching
* Mouse tracking
* Scroll position observation
* Authentication handling

### 7.3 No modification of original components

You only pass a function and decide what to display.

---

## 8. Conclusion

Render props is an important technique for reusing logic in React.
It is suitable when logic and UI must remain fully separated.
Along with HOCs and Hooks, render props is an essential architectural pattern in React.

---

# Testing React Components with Jest and React Testing Library

## 1. Introduction

### 1.1 Problems with manual testing

* Manually testing each part of the application is slow and error-prone.
* Small changes require rechecking many areas.
  → Automated testing is necessary.

### 1.2 Objectives

* Explain the importance of testing.
* Present best practices.
* Introduce Jest and React Testing Library.
* Demonstrate a complete test workflow.

---

## 2. Why Testing Is Necessary

### 2.1 Detect errors early

* Automatically finds bugs before deployment.
* Reduces defects in production.

### 2.2 Improves software quality

* Ensures logic correctness.
* Reduces user complaints.

### 2.3 Saves time and cost

* Fewer bugs → less time fixing and less support needed.
* Optimizes long-term development.

---

## 3. Best Practices for Writing Tests

### 3.1 Do not test implementation details

* Avoid depending on how the component is written internally.
* Only interact with the DOM like a real user.

### 3.2 Test user-like behavior

* Tests should simulate real user actions.
* Examples: finding visible text, clicking, typing.

### 3.3 Tests must be easy to maintain

* When functionality does not change, tests should not break.

---

## 4. Tools: Jest and React Testing Library

### 4.1 Jest

* A JavaScript test runner.
* Provides simulated DOM via JSDOM.
* Supports mocking complex functions.
* Fast execution.

### 4.2 React Testing Library (RTL)

* A testing library focused on user-centric testing.
* Does not rely on component implementation details.
* Provides powerful DOM query methods.
* Integrates well with Jest.

---

## 5. Practical Test Example

Assume `App.js` contains a link to the Little Lemon Restaurant page.

### Goal

Check that the text “Little Lemon Restaurant” always appears.

### Test code

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon link', () => {
  render(<App />);
  const linkElement = screen.getByText('Little Lemon Restaurant');
  expect(linkElement).toBeInTheDocument();
});
```

### Explanation

1. `render()` mounts the component in a simulated DOM.
2. `screen.getByText()` finds the element containing the given text.

   * If found → returns the element
   * If not → returns null or throws an error
3. `expect(...).toBeInTheDocument()` asserts that the element must appear.

---

## 6. How Tests Catch Errors

If a developer mistypes the text (e.g., “Little Orange Restaurant”), the test will fail:

* Log message indicates missing expected text.
* Developer corrects the code.
* Rerun test → passes successfully.

This shows how tests can catch small but important mistakes.

---

# Introduction to Continuous Integration (CI)

## 1. Introduction

Continuous Integration (CI) is a development practice in which developers frequently push code to a version control system like Git.
Each push triggers an automated build and test process.
The goal is to detect errors early, reduce risks, and speed up development.

Example:
When a developer modifies a function and pushes the commit to GitHub, the CI system automatically runs the test suite to ensure the change does not break other parts of the application.

---

## 2. Key Concepts

### 2.1 Feedback Loop

Immediate feedback on code changes, enabling fast error detection and correction.

### 2.2 Automated Testing

Automated scripts confirm whether changes introduce bugs.
This reduces manual testing and increases stability.

### 2.3 Continuous Integration (CI)

Automatically builds and tests the application whenever new commits are pushed.

### 2.4 CI Pipeline

A sequence of automated steps:

1. Fetch source code
2. Build the application
3. Run tests
4. Report results

---

## 3. Why CI Is Needed

### 3.1 Early error detection

When multiple developers work in parallel, merging large code chunks at the end can cause conflicts and errors.
CI prevents this by testing continuously.

### 3.2 Faster development

Automation reduces manual work and repetitive tasks.

### 3.3 Lower integration risk

Instead of a massive integration at the end, the team integrates small changes daily.

Example:
With five developers working simultaneously, waiting until the weekend to merge code is risky. CI reduces that risk by validating every small change immediately.

---

## 4. CI Pipeline Workflow

When new code arrives, the pipeline:

1. Pulls the latest source
2. Builds the application
3. Runs automated test suites
4. Returns the results

   * All tests passing → pipeline continues
   * Any test failing → pipeline stops and reports errors

Example with Node.js and GitHub Actions:

* Install dependencies
* Run `npm test`
* Run ESLint

---

## 5. Typical CI Workflow

### 5.1 Create a branch and develop

A developer creates a new branch and writes code.

### 5.2 Push to GitHub

The CI system triggers automatically.

### 5.3 Receive feedback

* If errors occur → developer fixes them.
* If everything passes → code is ready to deploy.

### 5.4 Deploy to staging

The validated version is deployed to a staging environment for further testing.

---

## 6. Benefits of CI

### 6.1 Increased productivity

Developers no longer need to run tests manually after every change.

### 6.2 Ensured software quality

Every commit is tested thoroughly, ensuring stability.

### 6.3 Faster error discovery

Automated tests offer near-instant feedback on code quality.

Example:
If a commit breaks the login feature, CI will notify the developer immediately rather than weeks later.

---

## 7. Conclusion

CI helps:

* Speed up and stabilize software development
* Reduce integration risks
* Increase team productivity
* Ensure every change is automatically tested

The above content provides complete foundational knowledge of CI, along with practical examples, making it easy to apply in real projects.