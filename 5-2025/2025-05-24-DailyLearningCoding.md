**JAVASCRIPT**

### **12.4. IIFE (Immediately Invoked Function Expression)**

• IIFE stands for:
Immediately Invoked Function Expression – A function that is created and executed immediately.
• This is a function expression wrapped in parentheses `()` and invoked immediately with `()` after.
**Syntax:**

```js
(function () {
  console.log('Hello IIFE');
})();
```

Or using arrow function:

```js
(() => {
  console.log('Hello IIFE');
})();
```

**Why use IIFE?**
• Use when you only want to run a function once.
• Helps keep code concise and tidy, no need to name the function.
• Avoids creating variables in the global scope.
• Can be used in React's `useEffect` or other initialization cases.

**When to use IIFE?**

* **Scenario 1: Run a block of code once**

```js
(() => {
  console.log('App started');
})();
```

* **Scenario 2: Call async function inside `useEffect` (React)**

```js
useEffect(() => {
  (async () => {
    const data = await fetchData();
    console.log(data);
  })();
}, []);
```

* **Scenario 3: Quick calculation**

```js
const sum = ((a, b) => a + b)(5, 10);  // sum = 15
```

**IIFE can have parameters or be async**

* With parameters:

```js
((a, b) => {
  console.log(a + b);
})(3, 4);  // 7
```

* Async function:

```js
(async () => {
  await fetchData();
})();
```

**Real-world application:**

```js
// BEFORE
function main() {
    console.log('Easy Frontend');
}
main();

// AFTER
(() => {
    console.log('Easy Frontend');
})();
```

```js
// BEFORE
function App() {
    useEffect(() => {
        async function fetchData() {
            // fetching data
        }
        fetchData();
    }, [])

    return null;
}

// AFTER
function App() {
    useEffect(() => {
        (async () => {
        // fetch data
        })();
    }, []);
    
    return null;
}
```

**Note: Use block scope instead of IIFE if not calling immediately**
Example without IIFE:

```js
{
  let name = 'Easy Frontend';
}
console.log(name); // ReferenceError: name is not defined
```

→ If the goal is just to hide variables from the outer scope, prefer block `{}` instead of IIFE.

**Conclusion:**

| Content       | Remember                                           |
| ------------- | -------------------------------------------------- |
| What is IIFE? | A function that runs immediately after defined     |
| When to use?  | When you want to run once only                     |
| Benefit       | Clean, avoids global variables                     |
| Alternative   | Use block scope `{}` if no need to run immediately |

### **12.5. Closures**

A closure is a function that can "remember" and access variables from its outer scope (parent scope), even after the parent function has finished.
In other words:
• When you define a function inside another, the inner function can access variables from the outer function.
• When the outer function ends, those variables are still "retained" if used by a closure.

**Example:**

```js
function init() {
  var name = 'Mozilla'; // local variable
  function displayName() { // inner function (closure)
    alert(name); // using variable from outer function
  }
  displayName();
}
init();
```

→ `displayName` is a closure because it uses `name` from `init()`, even though `name` is not in its scope.

**Advanced example – Function returns a closure:**

```js
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc(); // still prints 'Mozilla' even though makeFunc has finished
```

→ `makeFunc()` creates `displayName()` and returns it.
→ When `myFunc` is called, it still remembers the variable `name`, even after `makeFunc()` has finished.

**Practical use: Create "private" variables**

```js
function createCounter(initValue = 0) {
  let value = initValue; // private variable
  function increase() {
    value++;
  }
  function decrease() {
    value--;
  }
  function getValue() {
    return value;
  }
  return {
    increase,
    decrease,
    getValue,
  };
}

const counter = createCounter();
counter.increase();
counter.getValue(); // 1
```

→ Variable `value` cannot be accessed directly from outside:

```js
console.log(counter.value); // undefined
```

→ Closure helps create private variables and hide internal data, useful for module or object-oriented programming.

**Conclusion:**

| Content          | Remember                                                                              |
| ---------------- | ------------------------------------------------------------------------------------- |
| What is closure? | Inner function can remember outer function's variables                                |
| When to use?     | When needing to retain data after parent function ends                                |
| Benefit          | Create private variables, hide information, cleaner code                              |
| Importance       | Closures are the foundation for features like counters, event handlers, modules, etc. |

### **12.6. ES6 – Some Notes for Functions**

#### **12.6.1. Default Parameter Value**

When no argument is passed, the parameter will take the default value defined in the function.

```js
function sum(a = 5, b = 10) {
  return a + b;
}

sum(); // 15  
sum(10); // 20  
sum(10, 20); // 30  
sum(undefined, null); // 5 (null → 0, undefined → default)
```

**Remember:** Set default values on the right side, e.g., `(a, b = 10)`

#### **12.6.2. Rest Parameter – Gather many arguments**

Used when you want the function to accept many arguments without knowing how many.

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

sum(1, 2, 3); // 6  
sum(5); // 5  
sum(); // 0
```

→ Use `...` to gather all arguments into an array.

#### **12.6.3. Spread Operator – Spread array into elements**

```js
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

→ Spread `...array` to pass each element as separate arguments.

#### **12.6.4. Arrow Function – Short function syntax**

Shorter syntax, often used with short functions or callbacks.

```js
const sum = (a, b) => a + b;
const sayHello = () => console.log('Hello');
```

→ No own `this`, `arguments`, so not suitable for constructors or functions that require binding `this`.

#### **12.6.5. Constructor Function – Object creation function**

```js
function Student(id, name) {
  this.id = id;
  this.name = name;
  this.sayHello = function () {
    console.log('My name is', this.name);
  };
}

const alice = new Student(1, 'Alice');
alice.sayHello(); // My name is Alice
```

→ Use `new` keyword to create a new object from constructor.

#### **12.6.6. Curry Function – Split multiple parameters**

```js
function sum(x) {
  return function (y) {
    return x + y;
  };
}

sum(1)(2); // 3
```

**Practical use:**

```js
function createIdGenerator(startId = 1) {
  let id = startId;
  return function () {
    return id++;
  };
}

const getNextId = createIdGenerator(100);
getNextId(); // 100  
getNextId(); // 101
```

→ Curry helps retain values across multiple function calls → similar to closure.

**Summary:**

| Feature         | Short meaning                         |
| --------------- | ------------------------------------- |
| Default Params  | Assign default values to parameters   |
| Rest Params     | Gather arguments into an array        |
| Spread Operator | Spread array into individual elements |
| Arrow Function  | Short function, no own `this`         |
| Constructor     | Create new object using `new`         |
| Curry Function  | Split parameters, retain value        |

### **12.7. ES6 – Extended Object Features**

#### **12.7.1. Property Shorthand – Shorten property declaration**

If variable name and key are the same, you can shorten it.

```js
const id = 1;
const name = 'Easy Frontend';

const student = {
  id,    // instead of id: id
  name,  // instead of name: name
  isHero: false
};
```

**Remember:** Put shorthand properties at the top for readability.

#### **12.7.2. Computed Property Name – Create key from variable**

Use when:
• Key contains spaces or special characters
• Key needs to be computed from variable

```js
const key = 'Power';

const student = {
  id: 1,
  name: 'Easy Frontend',
  'hero type': 'iron man',
  [key]: 50,                // student.Power = 50
  [`get${key}`]() {        // student.getPower()
    return 100;
  }
};
```

→ Use `[]` to represent dynamic key name.

#### **12.7.3. Method Properties – Shorthand for method**

```js
const student = {
  // ES5
  sayHello: function () {
    console.log('Hello');
  },

  // ES6
  getPower() {
    return 100;
  }
};
```

→ Write methods shorter and more readable in ES6.

#### **12.7.4. Destructuring – Extract values from object or array**

**Object destructuring:**

```js
const student = { id: 1, name: 'Easy Frontend' };
const { id, name } = student;
```

**Array destructuring:**

```js
const numbers = [5, 10, 15];
const [a, b] = numbers; // a = 5, b = 10
```

**Quick swap:**

```js
let x = 10, y = 20;
[y, x] = [x, y]; // x = 20, y = 10
```

**Rename and set default value:**

```js
const student = { id: 1, name: 'Easy Frontend' };
const { id: studentId, name, age = 18 } = student;

console.log(studentId); // 1  
console.log(age);       // 18 (default)
```

→ If renamed when destructuring, the old variable (id) no longer exists.

#### **12.7.5. Object.assign() – Merge or clone object**

**Merge objects:**

```js
const a = { id: 1 };
const b = { name: 'Easy' };
const c = Object.assign(a, b);

console.log(a); // { id: 1, name: 'Easy' }
console.log(c === a); // true (same reference)
```

**Clone object:**

```js
const student = { id: 1, name: 'Easy Frontend' };

// Clone + override name
const alice = {
  ...student,
  name: 'Alice'
};

// Another way (doesn't change original object)
const bob = Object.assign({}, student, { name: 'Bob' });
```

→ `Object.assign({}, source)` is used to clone object.

**Summary:**

| Feature                | Short meaning                                |
| ---------------------- | -------------------------------------------- |
| Property Shorthand     | When key and variable match, can shorten     |
| Computed Property Name | Create dynamic key from variable             |
| Method Properties      | Shorter method syntax inside object          |
| Destructuring          | Easily extract values, rename, swap, default |
| Object.assign()        | Merge/clone object, override properties      |

### **12.8. `this` in JavaScript**

* `this` = current execution context

- The value of `this` changes depending on where and how the function is called.
- In "strict mode" (`'use strict'`), the behavior of `this` is different than default.

| Where `this` is used            | What `this` refers to                    |
| ------------------------------- | ---------------------------------------- |
| In global context               | `window` (browser) or `global` (Node.js) |
| In normal function (non-strict) | `window` / `global`                      |
| In normal function (strict)     | `undefined`                              |
| In arrow function               | No own `this`, inherits from outer       |
| In object method                | Object that contains the method          |
| In event handler                | HTML element receiving the event         |
| In class                        | The class instance                       |

#### **12.8.1. `this` in global context**

```js
console.log(this); // window (in browser)
this.name = 'Easy Frontend';
console.log(window.name); // 'Easy Frontend'
```

→ In Node.js environment, `this` refers to the global object.

#### **12.8.2. `this` in normal function**

**Non-strict mode:**

```js
function sayHello() {
  console.log(this); // window
}

[1, 2, 3].forEach(function (number) {
  console.log(this); // window
});
```

**Strict mode:**

```js
'use strict';
function sayHello() {
  console.log(this); // undefined
}
```

→ In `'use strict'`, `this` is not automatically bound to window; it's undefined.

#### **12.8.3. `this` in arrow function**

• Arrow functions do not have their own `this`
• `this` is inherited from the nearest enclosing function

```js
const sayHello = () => {
  console.log(this); // window
};

'use strict';
function outerFunc() {
  console.log(this); // undefined
  const inner = () => {
    console.log(this); // also undefined (inherits from outerFunc)
  };
  inner();
}
```

→ Using arrow functions in callbacks is convenient because you don’t need to worry about `this`.

#### **12.8.4. `this` in object method**

```js
const student = {
  name: 'Bob',
  sayHello: function () {
    console.log('My name is', this.name);
  }
};

student.sayHello(); // 'My name is Bob'
```

**Using ES6 syntax:**

```js
const student = {
  name: 'Bob',
  sayHello() {
    console.log('My name is', this.name);
  }
};
```

#### **12.8.5. DO NOT use arrow function for object method**

```js
const student = {
  name: 'Bob',
  sayHello: () => {
    console.log('My name is', this.name);
  }
};

student.sayHello(); // 'My name is undefined'
```

→ Because arrow functions do not have their own `this`, in the above example, `this` does not refer to `student` as expected.