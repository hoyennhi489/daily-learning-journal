**JAVASCRIPT**

**11. Learning to Write Simple Unit Tests**

**11.1. Overview of Unit Testing**

**Definition:**
Unit Testing is a software testing technique in which the smallest units (functions, methods, classes) of the source code are tested independently to ensure they behave as expected.

**Notes:**

* Unit = the smallest unit in program logic.
* Test = automated check using another piece of code.
* Helps detect bugs early, easy to maintain, easy to refactor.
* Writing Unit Tests is often used in Backend; in Frontend, it depends on the project.

---

**11.2. Setting Up Jest Framework**

Jest is a popular framework for writing Unit Tests for JavaScript/TypeScript. It supports both synchronous and asynchronous tests and has built-in support for assertions, mocks, spies, coverage, etc.

* **Quick installation:**

  ```bash
  npm install --save-dev jest
  ```

* **Configuration (if needed):**

  ```json
  "scripts": {
    "test": "jest"
  }
  ```

* **Install VSCode extensions:**

  * Jest
  * Jest snippets
  * Jest runner

* **Set up Jest for a project:**

```bash
// 1. Initialize npm
npm init

// 2. Install jest as dev dependencies
yarn add --dev jest

// 3. Install Babel packages
yarn add --dev babel-jest @babel/core @babel/preset-env

// 4. Add babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

---

**11.3. Structure of a Unit Test File**

A test file typically includes a setup section, test descriptions (`describe`), and test cases (`it`/`test`). Each test case checks a specific behavior of a function/module.

```js
describe('sum function', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

* `describe()`: groups related tests.
* `it()` or `test()`: describes each test case.
* `expect()`: used to compare results.

---

**11.4. Special Utility Functions**

| Function       | Description                           |
| -------------- | ------------------------------------- |
| `each()`       | Run tests with multiple data sets     |
| `skip()`       | Skip a test case                      |
| `only()`       | Run only that specific test           |
| `todo()`       | Note that the test is not written yet |
| `concurrent()` | Run async tests in parallel           |

**Note:** Using `only()` or `skip()` is very useful when debugging specific tests.

**Example:**

```js
// Function to be tested
const sum = (a, b) => a + b;

// Writing test cases using test.each()
test.each([
  [1, 2, 3],     // 1 + 2 = 3
  [0, 0, 0],     // 0 + 0 = 0
  [-1, 1, 0],    // -1 + 1 = 0
])('sum(%i, %i) = %i', (a, b, expected) => {
  expect(sum(a, b)).toBe(expected);
});

// test.skip(): skip this test
test.skip('this test will be skipped', () => {
  expect(1 + 1).toBe(3);
});

// test.only(): run only this test
test.only('this is the only test that will run', () => {
  expect(2 * 2).toBe(4);
});

// test.todo(): mark the test to be written later
test.todo('should handle empty input');

// test.concurrent(): run async tests in parallel
test.concurrent('async test 1', async () => {
  const result = await Promise.resolve(1);
  expect(result).toBe(1);
});

test.concurrent('async test 2', async () => {
  const result = await Promise.resolve(2);
  expect(result).toBe(2);
});
```

---

**11.5. Common Matchers**

| Matcher        | Meaning                             |
| -------------- | ----------------------------------- |
| `toBe()`       | Strict comparison (`===`)           |
| `toEqual()`    | Deep comparison (object, array)     |
| `toContain()`  | Check element in array/string       |
| `toThrow()`    | Expect a function to throw an error |
| `toBeTruthy()` | Value is truthy                     |
| `toBeFalsy()`  | Value is falsy                      |

**Notes:**

* `toBe()` shouldn't be used for object/array comparisons → use `toEqual()` instead.
* `expect(() => fn()).toThrow()` is used to test thrown errors.

**Examples:**

```js
test('toBe example', () => {
  expect(5 + 5).toBe(10);
});

test('toEqual example', () => {
  const data = { name: 'Alice' };
  expect(data).toEqual({ name: 'Alice' });
});

test('toContain example (array)', () => {
  expect([1, 2, 3]).toContain(2);
});

test('toContain example (string)', () => {
  expect('Hello world').toContain('world');
});

function throwIfNegative(n) {
  if (n < 0) throw new Error('Negative number');
}

test('toThrow example', () => {
  expect(() => throwIfNegative(-1)).toThrow('Negative number');
});

test('toBeTruthy example', () => {
  expect(1).toBeTruthy();
});

test('toBeFalsy example', () => {
  expect(0).toBeFalsy();
});
```

---

**11.6. Write Unit Tests for `classifyStudent`**

* **Goal:** test all classification logic of the `classifyStudentV3` function.

* **Test coverage:**

  * Marks outside 0–10 → `"Invalid mark!"`
  * Marks from 9–10 → `"Excellence"`
  * Marks from 7–8 → `"Good"`
  * Marks from 4–6 → `"Not Good"`
  * Marks from 1–3 → `"Bad"`

* Use `describe()` to group related tests.

* Use `forEach()` to test many values with the same expected result.

```js
import { classifyStudentV3 } from './05-09-main';

describe('classifyStudentV3()', () => {
  test('should return Invalid mark! when n < 0', () => {
    const value = classifyStudentV3(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when n > 10', () => {
    const value = classifyStudentV3(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellence when n > 8', () => {
    expect(classifyStudentV3(9)).toBe('Excellence');
    expect(classifyStudentV3(10)).toBe('Excellence');
  });

  test('should return Good when n in [7-8]', () => {
    expect(classifyStudentV3(7)).toBe('Good');
    expect(classifyStudentV3(8)).toBe('Good');
  });

  test('should return Not Good when n in [4-6]', () => {
    [4, 5, 6].forEach((n) => {
      expect(classifyStudentV3(n)).toBe('Not Good');
    });
  });

  test('should return Bad when n in [1-3]', () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudentV3(n)).toBe('Bad');
    });
  });
});
```

---

**11.7. Write Unit Tests for `checkIfAllEven()`**

* Return false if input is not an array.
* Return false if array is empty.
* Return false if it contains any odd number.
* Return true if all elements are even numbers.

**V1**

```js
describe('checkIfAllEvenV1()', () => {
  test('should return false when not an array', () => {
    expect(checkIfAllEvenV1(1)).toBe(false);
    expect(checkIfAllEvenV1('')).toBe(false);
    expect(checkIfAllEvenV1({})).toBe(false);
    expect(checkIfAllEvenV1(null)).toBe(false);
    expect(checkIfAllEvenV1(undefined)).toBe(false);
  });

  test('should return false when array is empty', () => {
    expect(checkIfAllEvenV1([])).toBe(false);
  });

  test('should return false when array has no even number', () => {
    expect(checkIfAllEvenV1([1, 3, 5, 7])).toBe(false);
  });

  test('should return false when array has some even numbers', () => {
    expect(checkIfAllEvenV1([1, 2, 4, 7])).toBe(false);
  });

  test('should return true when array has all even numbers', () => {
    expect(checkIfAllEvenV1([2, 4, 6, 8])).toBe(true);
  });
});
```

**V2**
(Same as V1 for result comparison)

```js
describe('checkIfAllEvenV2()', () => {
  test('should return false when not an array', () => {
    expect(checkIfAllEvenV2(1)).toBe(false);
    expect(checkIfAllEvenV2('')).toBe(false);
    expect(checkIfAllEvenV2({})).toBe(false);
    expect(checkIfAllEvenV2(null)).toBe(false);
    expect(checkIfAllEvenV2(undefined)).toBe(false);
  });

  test('should return false when array is empty', () => {
    expect(checkIfAllEvenV2([])).toBe(false);
  });

  test('should return false when array has no even number', () => {
    expect(checkIfAllEvenV2([1, 3, 5, 7])).toBe(false);
  });

  test('should return false when array has some even numbers', () => {
    expect(checkIfAllEvenV2([1, 2, 4, 7])).toBe(false);
  });

  test('should return true when array has all even numbers', () => {
    expect(checkIfAllEvenV2([2, 4, 6, 8])).toBe(true);
  });
});
```