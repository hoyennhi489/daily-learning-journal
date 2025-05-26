**JAVASCRIPT**

**13.4. ECMAScript 2019**
Full name: ECMAScript 2019
Abbreviation: ES2019
Completion time: June 2019
List of new features:

| No. | Feature                                    | Description                                                    |
| --- | ------------------------------------------ | -------------------------------------------------------------- |
| 1   | Array.prototype.flat() and flatMap()       | Flatten arrays                                                 |
| 2   | Object.fromEntries()                       | Create object from array of entries                            |
| 3   | String.prototype.trimStart() and trimEnd() | Remove whitespace at the start/end of a string                 |
| 4   | Symbol.prototype.description               | Access symbol description                                      |
| 5   | Optional catch binding                     | Allow omitting error variable in catch                         |
| 6   | Stable Array.prototype.sort()              | Preserve order of equal elements                               |
| 7   | Improved Function.prototype.toString()     | Returns function declaration including comments and whitespace |

**13.4.1. Array.prototype.flat() and flatMap()**
`flat(depth)`: Flattens an array to a specified depth.

```js
[1, 2, [3, 4]].flat(0);      // [1, 2, [3, 4]]
[1, 2, [3, 4]].flat(1);      // [1, 2, 3, 4]
[1, 2, [[3], 4]].flat(2);    // [1, 2, 3, 4]
[1, 2, , 4, 5].flat();       // [1, 2, 4, 5] (removes empty slots)
```

`flatMap()`: Similar to `.map()` followed by `.flat(1)`, but more efficient.

```js
[5, 20].flatMap(x => [x, x * 2]); // [5, 10, 20, 40]
```

**13.4.2. Object.fromEntries()**
Creates an object from an array of \[key, value] pairs.

```js
const entries = [['id', 1], ['name', 'Easy Frontend']];
const student = Object.fromEntries(entries);
// { id: 1, name: 'Easy Frontend' }
```

**13.4.3. String.prototype.trimStart() and trimEnd()**
Provides a clear way to remove leading/trailing whitespace.

```js
'  Easy Frontend  '.trimStart(); // 'Easy Frontend  '
'  Easy Frontend  '.trimEnd();   // '  Easy Frontend'
```

**13.4.4. Symbol.prototype.description**
Gets the description of a Symbol.

```js
const sym = Symbol('description goes here');
sym.description; // 'description goes here'
sym.toString();  // 'Symbol(description goes here)'
```

**13.4.5. Optional catch binding**
You can omit the error variable in the `catch` block.

```js
try {
  return JSON.parse(str);
} catch {
  return undefined;
}
```

**13.4.6. Stable Array.prototype.sort()**
Sorting now maintains the relative order of equal elements.

```js
[
  { id: 1, name: 'Alice' },
  { id: 3, name: 'John' },
  { id: 2, name: 'Bob' },
  { id: 4, name: 'Alice' },
].sort((a, b) => a.name.localeCompare(b.name));

/*
[
  { id: 1, name: 'Alice' },
  { id: 4, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'John' }
]
*/
```

**13.4.7. Improved Function.prototype.toString()**
Returns the full source text of the function, including comments and formatting.

```js
function /* this is bar */ bar() {}
bar.toString();
// 'function /* this is bar */ bar() {}'

Math.trunc.toString();
// 'function trunc() { [native code] }'
```

**13.5. ECMAScript 2020**
Full name: ECMAScript 2020
Abbreviation: ES2020
Completion time: June 2020
Highlighted new features:

| #  | Feature                     | Short Description                                        |
| -- | --------------------------- | -------------------------------------------------------- |
| 1  | BigInt                      | New data type to represent large integers                |
| 2  | Dynamic Import              | Dynamically import modules using `import()`              |
| 3  | Nullish Coalescing (??)     | Returns right-hand side if left is null/undefined        |
| 4  | Optional Chaining (?.)      | Safely access deeply nested properties                   |
| 5  | Promise.allSettled()        | Waits for all promises to settle (fulfilled or rejected) |
| 6  | String.prototype.matchAll() | Supports iterating over multiple RegExp matches          |
| 7  | globalThis                  | Unified access to global object                          |
| 8  | Module Namespace Exports    | Export the whole module under a named alias              |
| 9  | Well-defined for-in order   | Standardized for-in loop order                           |
| 10 | import.meta                 | Access metadata about the current module                 |

**13.5.1. BigInt**
Used to handle numbers beyond `Number.MAX_SAFE_INTEGER`.

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MAX_SAFE_INTEGER + 2; // 9007199254740992 (incorrect)

const bigNumber = BigInt("9007199254740993");
console.log(bigNumber + 2n); // 9007199254740995n
```

Note: BigInt cannot be mixed with Number in operations.

**13.5.2. Dynamic Import**
Import modules dynamically inside an async function.

```js
// math.js
export const add = (a, b) => a + b;

// index.js
async function doMath() {
  const math = await import('./math.js');
  console.log(math.add(3, 4)); // 7
}
doMath();
```

**13.5.3. Nullish Coalescing (??)**
Returns right-hand side only when left-hand side is null or undefined.

```js
null ?? 'Default'; // 'Default'
undefined ?? 'Default'; // 'Default'
'' ?? 'Default'; // ''
0 ?? 'Default'; // 0
false ?? 'Default'; // false
```

Compared to `||`, `??` does not treat '', 0, or false as falsy.

**13.5.4. Optional Chaining (?.)**
Safely access deeply nested properties without checking each level.

```js
const student = {
  name: 'Alice',
  address: { city: 'HCMC' },
  hobbies: ['reading'],
  greet() { console.log('Hi'); }
};

student.profile?.name; // undefined  
student.address?.city; // 'HCMC'  
student.hobbies?.[0];  // 'reading'  
student.greet?.();     // 'Hi'  
student.sayBye?.();    // undefined (no error)
```

**13.5.5. Promise.allSettled()**
Waits for all promises to complete, regardless of outcome.

```js
const p1 = Promise.resolve(42);
const p2 = Promise.reject('error');

Promise.allSettled([p1, p2]).then(results => console.log(results));
// [
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'error' }
// ]
```

**13.5.6. String.prototype.matchAll()**
Used to retrieve all regex matches (see more in Regex section).

```js
const str = 'a1 b2 c3';
const regex = /\w\d/g;
const matches = str.matchAll(regex);

for (const match of matches) {
  console.log(match); // ['a1'], ['b2'], ['c3']
}
```

**13.5.7. globalThis**
A unified way to access the global object.

| Environment | Global Object |
| ----------- | ------------- |
| Browser     | window        |
| Node.js     | global        |
| Web Worker  | self          |
| Everywhere  | globalThis    |

```js
console.log(globalThis.setTimeout); // function setTimeout() {...}
```

**13.5.8. Module Namespace Exports**
New way to export the entire module under a name.

```js
// Before ES2020
import * as utils from './utils.mjs';
export { utils };

// ES2020
export * as utils from './utils.mjs';
```

**13.5.9. Well-defined for-in order**
Since ES2020, `for-in` follows a standardized order:

1. Numeric keys (ascending order)
2. String keys (creation order)
3. Symbol keys (creation order)

**13.5.10. import.meta**
Provides metadata about the current module.

```js
console.log(import.meta.url); // Example: 'file:///Users/you/app.js'
```

### 13.6. ECMAScript 2021

**Full name:** ECMAScript 2021
**Abbreviation:** ES2021
**Completion time:** June 2021
**Notable new features:**

| # | Feature                       | Short Description                                      |
| - | ----------------------------- | ------------------------------------------------------ |
| 1 | Logical Assignment Operators  | Concise assignment combined with logical operators     |
| 2 | Numeric Separator             | Underscore makes large numbers easier to read          |
| 3 | String.prototype.replaceAll() | Replace all substrings easily                          |
| 4 | Promise.any()                 | Returns the first fulfilled promise                    |
| 5 | WeakRef and Finalizers        | Work with low-level memory (rarely used for beginners) |

#### 13.6.1. Logical Assignment Operators

Three new assignment operators combined with logical operators:

- `||=` : Assign if current value is falsy
- `&&=` : Assign if current value is truthy
- `??=` : Assign if current value is null or undefined

```javascript
let a = 0;
a ||= 5; // a is falsy → assign a = 5
console.log(a); // 5

let b = 10;
b &&= 20; // b is truthy → assign b = 20
console.log(b); // 20

let c;
c ??= 100; // c is undefined → assign c = 100
console.log(c); // 100
```

Note: `??=` behaves differently from `||=`, because `??=` does not treat `0`, `''`, or `false` as empty values.

#### 13.6.2. Numeric Separator (\_)

Underscore (`_`) makes large numbers easier to read.

```javascript
// Before:
const population = 1000000000;

// With ES2021:
const population = 1_000_000_000; // more readable
```

The `_` does not affect the value, only improves code readability.

#### 13.6.3. String.prototype.replaceAll()

Replace all substrings without using regular expressions.

```javascript
const query = 'page=1&sort=desc&sort=asc';
const clean = query.replaceAll('sort', 'order');
console.log(clean); 
// 'page=1&order=desc&order=asc'
```

Comparison with `replace()`:

| Search value       | `.replace()`        | `.replaceAll()` |
| ------------------ | ------------------- | --------------- |
| String             | Replaces first only | Replaces all    |
| Regex (non-global) | Replaces first only | Throws error    |
| Regex (global `g`) | Both work           | Both work       |

#### 13.6.4. Promise.any()

Returns the first fulfilled result among promises.

```javascript
const p1 = Promise.reject('fail');
const p2 = Promise.resolve('success');
const p3 = new Promise((res) => setTimeout(() => res('slow success'), 100));

Promise.any([p1, p2, p3])
  .then(result => console.log(result)) // 'success'
  .catch(error => console.error(error));
```

→ Different from `Promise.race()` — which returns the first completed result (success or failure).
→ `Promise.any()` only considers the first fulfilled promise.

#### 13.6.5. WeakRef and Finalizers

Features for working with weak memory references, not commonly used by beginners.

```javascript
const obj = { name: 'cache' };
const weak = new WeakRef(obj);

console.log(weak.deref()); // { name: 'cache' } or undefined
```

→ Only use when you understand GC (Garbage Collection). This is usually applied in libraries or memory optimization systems.

### 14. API and Postman

#### 14.1. What is an API?

API (Application Programming Interface) is an interface that allows software systems to talk to each other.

**Example:**
When you visit an e-commerce website and click "Buy Now", your browser sends a request to an order API, and the backend handles the rest like saving the order, sending confirmation emails, etc.

#### 14.2. Consuming an API

"Consuming an API" means sending a request from the frontend (browser or app) to the backend server to get or send data.

Example using `fetch()` in JavaScript to call an API:

```javascript
fetch('https://api.example.com/products')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

#### 14.3. Common request methods

| Method | Purpose                   |
| ------ | ------------------------- |
| GET    | Retrieve data from server |
| POST   | Send new data to server   |
| PUT    | Update a whole record     |
| PATCH  | Update part of the data   |
| DELETE | Delete data from server   |

#### 14.4. Why use Postman?

Postman is a tool that helps you send API requests easily without writing code.

| Reason to use Postman | Description                            |
| --------------------- | -------------------------------------- |
| Quick API testing     | Send requests without writing any code |
| Verify returned data  | Check if API works correctly           |
| Save and share APIs   | Easily share with your team            |
| Automate API testing  | Run multiple API tests at once         |

#### 14.5. Basic steps to use Postman

##### 14.5.1. Install and open Postman

* Visit [https://www.postman.com/downloads/](https://www.postman.com/downloads/) to download
* Log in (required if you want to use cloud features)

##### 14.5.2. Send a simple GET request

* Open Postman
* Select GET method
* Enter URL, e.g. `https://jsonplaceholder.typicode.com/posts`
* Click **Send**
* Response will be a list of posts (JSON)

##### 14.5.3. Send a POST request (with body)

* Choose method: **POST**
* URL: `https://jsonplaceholder.typicode.com/posts`
* Go to **Body** tab > select **raw** > **JSON**
* Paste the data:

```json
{
  "title": "hello",
  "body": "this is a test",
  "userId": 1
}
```

* Click **Send**, and you'll see the response with the created data.

##### 14.5.4. Use environment variables (env vars)

Instead of writing the same URL multiple times, you can use variables:

* Create a **Local** environment
* Set variable `base_url = https://jsonplaceholder.typicode.com`
* In API calls, use `{{base_url}}/posts` instead of the full URL

##### 14.5.5. Running multiple APIs automatically (Runner)

* Create a **Collection** containing multiple APIs
* Run them all at once to test if they work correctly
* Can be used with test cases (e.g. assert status code, check response data...)