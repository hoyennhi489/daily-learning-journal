**JAVASCRIPT**

5. **Function**: A function is a set of related statements that serve a particular purpose.  
- Declaration format:  
```javascript
function functionName(parameter1, parameter2, ...) {
  // Block of executable statements
  return value; // (optional)
}
```
Example:
```javascript
function calculateSum(a, b) {
  return a + b;
}
let result = calculateSum(3, 5); // Result is 8
console.log(result);
```

- Components in a function:  
  + **Function keyword**  
  + **Function parameters**: It is recommended to have no more than 3 parameters. If more are needed, consider using an object or an array.  
  + **Body (function body)**: The block of code that executes within the function.  
  + **Return**: Returns a value (optional).  

- Naming conventions:  
  + Use verbs, since a function performs a specific task.  
  + Often prefixed with words such as: create, update, add, check, convert, map, get, etc.  
Example:  
```javascript
function addNewStudent() {}
function getAllStudents() {}
function convertNumberToString() {}
function checkIfPositive() {}
function removeTodo() {}
//...
```

- Notes when writing functions:  
  + Each function should perform one task.  
  + Always check the validity of parameters at the beginning of the function.  
  + The return type should be consistent.  
  + It's a good practice to comment on complex logic.  
  + Limit functions to a maximum of 3 parameters.


6. **Boolean**: A primitive data type that only has two values: true or false.

6.1. **Type conversion and Type coercion**: Data conversion  
- The similarity is that both involve converting one data type to another.  
- **Type coercion** refers to implicit type conversion (automatic coercion).  
- **Type conversion** can either be automatic like type coercion or explicit (where you specify the conversion).

**Type Coercion (Automatic type conversion):**
```javascript
const a = 1 + '2'; 
// Result: "12"
// JS automatically converts the number 1 to the string '1', then concatenates with the string '2'

const b = 3 - '2' - 1;
// Result: 0
// JS converts '2' to the number 2, then calculates: 3 - 2 = 1, 1 - 1 = 0

const message = 'JS is easy';
if (message) {
  // Non-empty string is coerced to true
  console.log('Really?'); // Outputs: Really?
}
```

**Type Conversion (Explicit type conversion):**
```javascript
const error = 'Something went wrong!';
const hasError = Boolean(error); 
// true - because non-empty string converts to true

const mark = 9;
const markString = mark.toString(); 
// "9" - converts number to string
// Or: const markString = String(mark);

const type = '1';
const typeId = Number.parseInt(type); 
// 1 - converts string '1' to integer
// Or: const typeId = Number(type);
```

- Common **type conversion** examples:  
| Target Type | Conversion Function | Example | Result |
|-------------|---------------------|---------|--------|
| To string   | String() or .toString() | String(123) | "123" |
| To number   | Number(), parseInt(), parseFloat() | Number('5') | 5 |
| To boolean  | Boolean() | Boolean('hello') | true |

```javascript
String(123)         // "123"
(123).toString()    // "123"

Number("42")        // 42
parseInt("42px")    // 42
parseFloat("3.14")  // 3.14

Boolean(0)          // false
Boolean("hi")       // true
```

- Notes: Some values will always convert to `false` if coerced to boolean:  
```javascript
Boolean("")      // false  
Boolean(0)       // false  
Boolean(null)    // false  
Boolean(undefined) // false  
Boolean(NaN)     // false
```
Values like `""`, `0`, `null`, `undefined`, and `NaN` will convert to `false`. All other values → `true`.