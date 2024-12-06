
### Step 64-67:
```javascript
const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
};
```
- `infixToFunction` is an object mapping operators (like `+`, `-`, `*`, `/`) to functions that perform these operations.
- `"+": (x, y) => x + y` means adding two numbers.
- `"-": (x, y) => x - y` means subtracting two numbers.
- `"*": (x, y) => x * y` means multiplying two numbers.
- `"/": (x, y) => x / y` means dividing two numbers.

---

### Step 68-72:
```javascript
const infixEval = (str, regex) => 
  str.replace(regex, (_match, arg1, operator, arg2) => 
    infixToFunction[operator](parseFloat(arg1), parseFloat(arg2))
  );
```

1. **`str.replace(regex, callback):`**
   - The `replace` method of a string replaces all parts of the string that match the `regex` with the result of the `callback` function.
   - **`regex:`** Defines the pattern to search in the string.
   - **`callback:`** A function that gets called each time a match is found.

2. **Callback parameters:**
   - **`_match:`** The entire substring matching the `regex`. (Unused here, denoted by `_`.)
   - **`arg1:`** The first number in the operation (e.g., `3` in `"3 + 5"`).
   - **`operator:`** The operator (e.g., `+`, `-`, `*`, `/`).
   - **`arg2:`** The second number in the operation (e.g., `5` in `"3 + 5"`).

3. **`parseFloat(arg1)` and `parseFloat(arg2):`**
   - Convert `arg1` and `arg2` (strings) into floating-point numbers for computation.

4. **`infixToFunction[operator]:`**
   - Retrieves the function corresponding to the operator from the `infixToFunction` object (defined earlier).

---

### Step 73-78:
```javascript
const highPrecedence = str => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};
```

1. **`regex:`**
   - The regular expression `/([\d.]+)([*\/])([\d.]+)/` identifies multiplication (`*`) and division (`/`) operations:
     - **`([\d.]+):`** Any number, which could be an integer or decimal (e.g., `3`, `2.5`).
     - **`([*\/]):`** The multiplication (`*`) or division (`/`) operator.
     - **`([\d.]+):`** Another number.

2. **`infixEval(str, regex):`**
   - Uses the previously defined `infixEval` function to compute the first operation matching the `regex` in the string.
   - The result is a new string (`str2`) with the computed operation replaced by its result.

3. **Comparison `str === str2`:**
   - If the input string (`str`) is unchanged after calling `infixEval`, no more multiplication/division operations remain → Return the resulting string.
   - Otherwise, if changes occurred, recursively call `highPrecedence` to process remaining operations.

---

### Step 79-90:
```javascript
const applyFunction = str => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2 = infixEval(noHigh, infix);
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = args => args.split(",").map(parseFloat);
  const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(functionCall, (match, fn, args) => 
    spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) 
      ? apply(fn, args) 
      : match
  );
};
```
1. **Handle Multiplication and Division (High Precedence)**
   - Call the `highPrecedence` function to process multiplication (`*`) and division (`/`) operations first.
   - Result: The string `str` no longer contains multiplication or division operations.

2. **Handle Addition and Subtraction (Lower Precedence)**
   - **`infix`**:
     - A regular expression that identifies addition (`+`) and subtraction (`-`) operations between two numbers.
     - Example: `"10+5"`, `"20-3"`.
  
   - **`infixEval`**:
     - Performs calculations for the identified numbers using the corresponding operator.

3. **Identify and Process Special Functions**
   - **`functionCall`**:
     - A regular expression that identifies special functions in the string (e.g., `SUM(1,2,3)`):
       - `([a-z0-9]*)`: The function name (e.g., `SUM`, `MAX`, etc.) - case insensitive.
       - `\(([0-9., ]*)\)`: Parameters inside parentheses (numbers separated by commas).
       - `(?!.*\()`: Ensures there are no nested functions following this match (negative lookahead).

4. **Convert Parameter List to a Number Array**
   - Converts the parameter string into a number array:
     - Example: `"1, 2, 3"` → `[1, 2, 3]`.

5. **Apply Special Functions**
   - Locate the function in the `spreadsheetFunctions` object (convert the name to lowercase using `toLowerCase()`).
   - Call the corresponding function with the parameter list.

6. **Replace Special Functions in the String**
   - Find all special functions in the string.
   - **If the function exists** in `spreadsheetFunctions`:
     - Calculate the value using `apply(fn, args)` and replace the function with the result.
   - **If the function does not exist**, keep the original string (`match`).