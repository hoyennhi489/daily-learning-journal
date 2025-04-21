**JAVASCRIPT**

1. **Writing Comments:**
- Use `//` to comment a single line.
- Use `/* */` to surround and comment multiple lines.
=> Used for: Explaining complex code, writing TODO or FIXME notes, temporarily disabling a piece of code.

2. **Variables**: Used to store data.
- How to declare:
  + `Let` – Used when the value can change.
  ```javascript
  let age = 25;
  age = 26; // OK
  ```
  + `Const` – Used when the value cannot change.
  ```javascript
  const PI = 3.14;
  // PI = 3.1415 => Will throw an error, cannot reassign value
  ```
- How to name variables:
  + Only use letters, numbers, underscore, or dollar sign.
  ```javascript
  let userName;
  let user_age;
  let $price;
  ```
  + Do not start with a number.
  ```javascript
  let 1name = "Nam"; → incorrect
  ```
  + Do not use JavaScript keywords.
  ```javascript
  let let = 5; → incorrect
  ```
  + Case sensitive.
  ```javascript
  let age = 20;
  let Age = 30; // This is a different variable
  ```

- Naming conventions:
  + `camelCase` – standard in JavaScript.
  ```javascript
  let firstName = "Lan";
  let totalAmount = 500;
  ```
  + `UPPER_CASE` – used for constants (`const`).
  ```javascript
  const MAX_SPEED = 120;
  const API_KEY = "abc123";
  ```
  + Avoid vague or unclear names:
  ```javascript
  let x = 1;       // ❌ unclear what x is
  let data = [];   // ❌ "data" is too generic
  let userList = []; // ✅ clear name
  ```

3. **Operators**:
- **Arithmetic Operators**: Used for performing mathematical operations.
  | Operator | Meaning           | Example            |
  |----------|-------------------|--------------------|
  | +        | Addition          | 5 + 3 → 8          |
  | -        | Subtraction       | 5 - 3 → 2          |
  | *        | Multiplication    | 5 * 3 → 15         |
  | /        | Division          | 6 / 2 → 3          |
  | %        | Modulo (remainder)| 5 % 2 → 1          |
  | **       | Exponentiation    | 2 ** 3 → 8         |

- **Assignment Operators**: Used to assign values to variables.
  | Operator | Meaning             | Example             |
  |----------|---------------------|---------------------|
  | =        | Assign              | let x = 10          |
  | +=       | Add and assign      | x += 2 → x = x + 2  |
  | -=       | Subtract and assign | x -= 1              |
  | *=       | Multiply and assign | x *= 3              |
  | /=       | Divide and assign   | x /= 2              |

- **Comparison Operators**: Used to compare values, returns true or false.
  | Operator | Meaning                  | Example                |
  |----------|--------------------------|------------------------|
  | ==       | Loose equality comparison | 5 == "5" → true        |
  | ===      | Strict equality comparison| 5 === "5" → false      |
  | !=       | Not equal                | 5 != 3 → true          |
  | !==      | Strict not equal         | 5 !== "5" → true       |
  | >        | Greater than             | 5 > 3 → true           |
  | <        | Less than                | 2 < 4 → true           |
  | >=       | Greater than or equal to | 3 >= 3 → true          |
  | <=       | Less than or equal to    | 2 <= 3 → true          |

- **Logical Operators**: Used with boolean expressions (true/false).
  | Operator | Meaning          | Example                |
  |----------|------------------|------------------------|
  | &&       | AND              | true && false → false  |
  | !        | NOT              | !true → false          |

4. **Data Types**:
- **Primitive types**:
  | Type        | Example          | Description                       |
  |-------------|------------------|-----------------------------------|
  | String      | "Hello", 'JS'     | Used for text, letters, characters|
  | Number      | 10, 3.14          | Used for numbers (both integers and decimals)|
  | Boolean     | true, false       | Only two values: true or false    |
  | Null        | null              | Represents "nothing" – explicitly assigned as empty|
  | Undefined   | undefined         | A declared variable but not yet assigned a value|
  | BigInt      | 123n              | Used for very large numbers, exceeding the limit of Number|
  | Symbol      | Symbol('id')      | Used to create unique values, typically used in special objects|

- **Reference types**:
  | Type        | Example            | Description                           |
  |-------------|--------------------|---------------------------------------|
  | Object      | { name: "Nam", age: 20 } | Used to store key-value pairs     |
  | Array       | [1, 2, 3]          | Used to store a list of values       |
  | Function    | function() {} or () => {} | Used to define functions (can be stored in variables)|

- Special notes:

  • `typeof null` → "object" (a bug in JS, don't mistake it as an actual object)

  • An array (Array) is actually an object → `typeof [1, 2, 3] === "object"`

  • Use `Array.isArray()` to check precisely if it's an array
  
  • `typeof function() {}` → "function" (JS treats functions as a special type)
