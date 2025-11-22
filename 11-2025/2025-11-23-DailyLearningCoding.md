# Introduction to Jest and Key Testing Concepts

### 1. Why use Jest?

JavaScript does not have built-in testing capabilities, so the community has created various testing libraries like Jasmine, Mocha, Karma, and QUnit.
Among them, **Jest** is a popular, powerful, and easy-to-use testing framework.

Jest can be used to test:

* Plain JavaScript
* React (very common)
* Babel, TypeScript
* Node.js
* Angular, Vue, and many other frameworks

In short, **Jest is suitable for most modern JavaScript projects**.

---

### 2. What is Code Coverage?

Code coverage measures the percentage of source code executed by tests.

**Example:**

* 80% coverage → 20% of code is not tested.
* 100% coverage → does not guarantee all cases are checked; it only ensures each line of code is executed at least once by a test.

**Benefits of code coverage:**

* Helps identify parts of the code that are untested.
* Higher coverage reduces the risk of hidden bugs.
* Easier to write tests in projects with many existing tests, but depends on whether the software requirements are fully defined.

---

### 3. What is Mocking?

Mocking allows you to separate the code being tested from its dependencies (external elements like APIs, databases, or other modules).

**Uses of mocking:**

* Enables unit tests to run independently, without relying on the backend or server.
* Avoids bottlenecks when the backend is incomplete but frontend development must continue.
* Allows simulating data as if it came from the server.
* Helps ship features faster.

**Example:**

* Frontend needs to display a user list → backend API is not ready yet.
* Use a mock to generate fake data → frontend development continues.

**Jest supports mocking by default**, no extra library required.

---

### 4. Testing Asynchronous Code in Jest

Jest makes async testing simple:

* No complicated setup required.
* Supports callbacks, promises, and async/await seamlessly.

---

### 5. Snapshot Testing

Snapshot testing helps detect regressions in the DOM.

**How it works:**

* Jest saves the current state of a DOM or UI component as a **snapshot**.
* When code changes → Jest compares the new state with the previous snapshot.
* Differences → you decide whether the change is intended or a bug.

Snapshot testing is very useful for React components or UI with stable structure.

---

### 6. Lesson Summary

a. JavaScript has no built-in testing → Jest is a powerful, popular framework.
b. Jest can test multiple types of projects: plain JS, React, Node, Babel, TS…
c. Code coverage measures how much code is tested; high coverage reduces bugs.
d. Mocking separates code under test from dependencies, simulates data, helps dev work independently.
e. Jest makes asynchronous testing easy.
f. Snapshot testing detects unusual changes in DOM/UI.

---

# Writing Tests with Jest

### 1. Environment Setup

* NodeJS and npm are required.
* Check versions:

```bash
node --version
npm --version
```

---

### 2. Create a Node Project

* Initialize `package.json`:

```bash
npm init -y
```

---

### 3. Install Jest

* Install Jest locally:

```bash
npm install --save-dev jest
```

* Update `package.json` scripts:

```json
"scripts": {
  "test": "jest"
}
```

---

### 4. Create the File to Test

Example: `addFive.js`

```javascript
function addFive(value) {
  return value + 5;
}

module.exports = addFive;
```

---

### 5. Create a Test File

* Naming convention: `filename.test.js`
  Example: `addFive.test.js`

```javascript
const addFive = require('./addFive');
```

---

### 6. Write Tests in Jest

* Use `test(description, fn)`
* Use `expect()` to set expectations

Example:

```javascript
test('returns the number plus five', () => {
  expect(addFive(10)).toBe(15);
});
```

**Quick explanation:**

* `test()` → describes what you want to check
* `expect()` → the actual value
* `toBe()` → compares with the expected value

---

### 7. Run Tests

```bash
npm run test
```

Results show **PASS** or **FAIL**.

**Summary:**

* Jest = testing library for JavaScript
* Test files named: `*.test.js`
* `test()` creates tests, `expect()` checks values
* Run tests: `npm run test`

---

# Test Driven Development (TDD)

### 1. Requirements & TDD

* All software is built based on **requirements**, usually described in natural language.
* **Test Driven Development (TDD)** is a process where tests are written **before code**, according to requirements.

---

### 2. How TDD Works (High-Level)

Team workflow:

1. Receive requirements → define a feature.
2. Write a **failing test** for the feature.
3. Write code to make the test pass.

It may feel “backward” compared to traditional coding, but this is the essence of TDD.

---

### 3. Real-Life Example of TDD

**Without TDD:**

* You go to your car.
* Arrive at work → realize you forgot your keys.

**With TDD:**

1. Test: Do I have my keys? → Fail
2. Get the keys
3. Test again: Now I have keys → Pass

**TDD principle:** Always check before acting.

---

### 4. TDD in Code – Example: `statusOfKeys`

**Step 1 – Write the test first:**

* Test if the `statusOfKeys` function exists.
* Function not implemented → test fails (Red).

**Step 2 – Write minimal code:**

```javascript
function statusOfKeys() {}
```

* Run test → passes (Green).
* **TDD rule:** Write the minimal code to pass the test.

**Step 3 – Receive new requirement:**

* Function receives `keys = true`.
* Must `console.log(keys)`.

**Step 4 – Write new test:**

* Test fails (Red).

**Step 5 – Implement code to pass test:**

* Implement according to requirement → test passes (Green).

**Step 6 – Refactor:**

* Clean up code, adjust indentation, remove extra comments.
* Run tests again to ensure logic is intact.

---

### 5. The 3-Step TDD Cycle

Described in 3 words:

🔴 **Red** → Write a test → must fail first.
🟢 **Green** → Write minimal code to pass the test.
🟡 **Refactor** → Clean code without changing behavior → tests must still pass.

---

### 6. Benefits of TDD

* Reduces regression: prevents new bugs from breaking existing code.
* Ensures requirements are met step by step.
* Enables automated testing (CI/CD).
* Keeps large projects stable when adding features.
* Easy to test multiple input scenarios.
* Tests serve as technical documentation for newcomers.

---

### 7. Summary

* TDD = **Write test → Write code → Refactor**
* Cycle: Red → Green → Refactor
* Write minimal code to pass the test
* Tests prove code meets requirements
* In large projects, tests ensure all parts still work correctly