# IF…ELSE Exercises

## 1. Check if a Number is a Positive Even Number

**Task**:  
Write a function that checks whether a number is a **positive even number**.

- Return `true` if it is, otherwise return `false`.

### Version 1 – Full Syntax with an Intermediate Variable

```javascript
function isPositiveEvenNumber(n) {
  let isValid; // declare a variable to store the result

  // check if n is greater than 0 and divisible by 2 (positive even number)
  if (n > 0 && n % 2 === 0) {
    isValid = true; // assign true if the condition is met
  } else {
    isValid = false; // assign false if the condition is not met
  }

  return isValid; // return the result
}
```

### Version 2 – Slightly Optimized (Set Default Value)

```javascript
function isPositiveEvenNumber(n) {
  let isValid = false; // default to false

  // if n is a positive even number, update isValid to true
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}
```

### Version 3 – Short Version with Direct Return

```javascript
function isPositiveEvenNumber(n) {
  // directly return the result of the condition
  return n > 0 && n % 2 === 0;
}
```

### Version 4 – Using Arrow Function Syntax

```javascript
const isPositiveEvenNumber = (n) => n > 0 && n % 2 === 0;
```

### Testing:

```javascript
console.log(isPositiveEvenNumber(4)); // true   → positive even number
console.log(isPositiveEvenNumber(5)); // false  → odd number
console.log(isPositiveEvenNumber(-2)); // false  → negative number
console.log(isPositiveEvenNumber(0)); // false  → not a positive number
```

## 2. Classify Student Performance

**Task**:  
Write a function `classifyStudent` that takes a `mark` (score from 0 to 10) and returns a classification based on the following rules:

- mark > 8 → `'Excellence'`
- 7 < mark ≤ 8 → `'Good'`
- 4 ≤ mark ≤ 7 → `'Not Good'`
- mark < 4 → `'Bad'`

### Version 1 – Basic if...else

```javascript
function classifyStudent(mark) {
  let result;

  if (mark > 8) result = "Excellence";
  else if (mark > 7) result = "Good";
  else if (mark >= 4) result = "Not Good";
  else result = "Bad";

  return result;
}
```

### Version 2 – With Input Validation

```javascript
function classifyStudent(mark) {
  // validate the input; mark must be between 0 and 10
  if (mark < 0 || mark > 10) return;

  let result = "Bad"; // default classification

  if (mark > 8) result = "Excellence";
  else if (mark > 7) result = "Good";
  else if (mark >= 4) result = "Not Good";

  return result;
}
```

### Version 3 – Optimized Using if...return

```javascript
function classifyStudent(mark) {
  // validate the input
  if (mark < 0 || mark > 10) return;

  if (mark > 8) return "Excellence";
  if (mark > 7) return "Good";
  if (mark >= 4) return "Not Good";

  return "Bad";
}
```

### Testing:

```javascript
console.log(classifyStudent(9)); // 'Excellence'
console.log(classifyStudent(7)); // 'Not Good'
console.log(classifyStudent(5)); // 'Not Good'
console.log(classifyStudent(2)); // 'Bad'
```

# SWITCH…CASE Exercises

## 1. Classify Student Using switch...case

**Task**:  
Write a function `classifyStudent` that takes a `mark` (0 to 10) and returns a classification:

- mark > 8 → `'Excellence'`
- 7 < mark ≤ 8 → `'Good'`
- 4 ≤ mark ≤ 7 → `'Not Good'`
- mark < 4 → `'Bad'`

### Implementation:

```javascript
function classifyStudent(mark) {
  let result = "";

  switch (mark) {
    case 0:
    case 1:
    case 2:
    case 3:
      result = "Bad";
      break;

    case 4:
    case 5:
    case 6:
      result = "Not Good";
      break;

    case 7:
    case 8:
      result = "Good";
      break;

    case 9:
    case 10:
      result = "Excellence";
      break;

    default:
      result = "Invalid mark!";
      break;
  }

  return result;
}
```

## 2. Return an Error Message Based on Error Code

**Task**:  
Given a server error code, return a corresponding error message:

- `E01` → `'Invalid username or password'`
- `E02` → `'Too many attempts'`
- `E03` → `'Missing data'`
- Other → `'Something went wrong'`

### Implementation:

```javascript
function getErrorMessage(errorCode) {
  let message = "";

  switch (errorCode) {
    case "E01":
      message = "Invalid username or password";
      break;

    case "E02":
      message = "Too many attempts";
      break;

    case "E03":
      message = "Missing data";
      break;

    default:
      message = "Something went wrong";
      break;
  }

  return message;
}
```

### Example Usage:

```javascript
console.log(getErrorMessage("E01")); // 'Invalid username or password'
console.log(getErrorMessage("E02")); // 'Too many attempts'
console.log(getErrorMessage("E03")); // 'Missing data'
console.log(getErrorMessage("XYZ")); // 'Something went wrong'
```
