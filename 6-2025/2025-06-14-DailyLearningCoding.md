**JAVASCRIPT**

### **46. Mobile Keyboard Input – Optimize the keyboard type shown on mobile using `type`, `inputmode`, and `pattern`**

**Goals:**

* Understand how to control the keyboard type on mobile devices.
* Improve user experience during data entry.
* Avoid typing errors (e.g., entering numbers with a letter keyboard).

#### **46.1. Use `type` to suggest the keyboard**

| `type`     | Displayed Keyboard     | Description                              |
| ---------- | ---------------------- | ---------------------------------------- |
| `text`     | Text keyboard          | Default for text inputs                  |
| `email`    | Keyboard with `@`, `.` | For entering email addresses             |
| `url`      | Keyboard with `/`, `.` | For entering URLs                        |
| `tel`      | Numeric keypad         | For phone numbers                        |
| `number`   | Numeric + `-`, `.`     | For general numbers (including decimals) |
| `password` | Text keyboard (masked) | For password entry                       |

```html
<input type="email" placeholder="Enter email" />
<input type="tel" placeholder="Phone number" />
```

#### **46.2. Use `inputmode` for more flexible control**

`inputmode` doesn't affect the data type—just the keyboard appearance.

| `inputmode` | Keyboard Type         |
| ----------- | --------------------- |
| `text`      | Regular text keyboard |
| `decimal`   | Numeric with decimal  |
| `numeric`   | Digits only           |
| `tel`       | Telephone keypad      |
| `email`     | Email keyboard        |
| `url`       | URL keyboard          |

```html
<input type="text" inputmode="numeric" placeholder="Numbers only" />
<input type="text" inputmode="decimal" placeholder="Decimal number" />
```

#### **Compare: `type="number"` vs `inputmode="numeric"`**

| Attribute                           | Behavior                      | Limitations                         |
| ----------------------------------- | ----------------------------- | ----------------------------------- |
| `type="number"`                     | Shows numeric keypad          | Allows invalid characters via paste |
| `type="text" + inputmode="numeric"` | Numeric keypad, more flexible | No built-in number validation       |

#### **Summary:**

| UX Goal            | How to implement                  |
| ------------------ | --------------------------------- |
| Easier email input | `type="email"`                    |
| Phone number input | `type="tel"` or `inputmode="tel"` |
| Digits only        | `inputmode="numeric"`             |
| Decimal input      | `inputmode="decimal"`             |
| URL input          | `type="url"`                      |

### **47. Constraint Validation API – Validate forms with built-in HTML5 rules using JavaScript**

**Goals:**

* Understand what the Constraint Validation API is.
* Learn how to validate a form or input.
* Customize error messages.
* Avoid rewriting rules like `required`, `minlength`, or `type="email"` in JS.

#### **What is the Constraint Validation API?**

It's a set of methods and properties that let you validate inputs/forms based on HTML5 attributes:

```html
<input required minlength="5" type="email" />
```

No need to manually code validation logic—just use the API to check and report errors.

#### **Key properties and methods:**

| API                            | Description                         |
| ------------------------------ | ----------------------------------- |
| `input.validity`               | Returns a validity state object     |
| `input.checkValidity()`        | Returns `true/false` if valid       |
| `form.checkValidity()`         | Validates the entire form           |
| `input.setCustomValidity(msg)` | Sets a custom error message         |
| `form.reportValidity()`        | Shows default browser validation UI |

#### **Basic Example:**

```html
<form id="myForm">
  <input type="email" required id="email" />
  <button type="submit">Submit</button>
</form>
```

```js
const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  alert("Form is valid! Sending data...");
});
```

#### **Custom error message:**

```html
<input id="username" required minlength="5" />
```

```js
const input = document.getElementById("username");

input.addEventListener("input", () => {
  if (input.validity.tooShort) {
    input.setCustomValidity("Name too short! Minimum 5 characters.");
  } else {
    input.setCustomValidity(""); // Clear error if valid
  }
});
```

#### **Common validity states:**

| `validity.xxx`                     | Meaning                            |
| ---------------------------------- | ---------------------------------- |
| `valueMissing`                     | Missing required value             |
| `typeMismatch`                     | Wrong type (e.g., email, URL)      |
| `tooShort` / `tooLong`             | Violates `minlength` / `maxlength` |
| `patternMismatch`                  | Doesn't match `pattern`            |
| `rangeOverflow` / `rangeUnderflow` | Out of range (`min`, `max`)        |
| `stepMismatch`                     | Invalid step size                  |
| `valid`                            | ✅ Input is valid                   |

#### **Summary:**

| Goal                     | Use this                    |
| ------------------------ | --------------------------- |
| Check form validity      | `form.checkValidity()`      |
| Show default error popup | `form.reportValidity()`     |
| Set custom error         | `input.setCustomValidity()` |
| Inspect what went wrong  | `input.validity.xxx`        |

### **48. Custom Error Messages in HTML Form – Replace browser messages with your own**

**Goals:**

* Customize the error message shown to the user.
* Use `setCustomValidity()` correctly.
* Update error messages in real-time with `input` or `blur` events.

#### **How it works:**

```html
<form id="myForm">
  <label>
    Email:
    <input type="email" id="emailInput" required />
    <span class="error" id="emailError"></span>
  </label>
  <button type="submit">Submit</button>
</form>
```

```js
const form = document.getElementById("myForm");
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", () => {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity("Please enter your email.");
    emailError.textContent = "Please enter your email.";
  } else if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("Invalid email format.");
    emailError.textContent = "Invalid email format.";
  } else {
    emailInput.setCustomValidity("");
    emailError.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.reportValidity(); // Still shows the custom message
  }
});
```

#### **Tips:**

* `setCustomValidity('')`: Clear the error.
* Always reset the error string when valid—otherwise, the form won't submit.
* Add CSS for visual cues:

```css
input:invalid {
  border-color: red;
}
.error {
  color: red;
  font-size: 0.9em;
}
```

#### **Summary:**

| Task                     | Use this                                    |
| ------------------------ | ------------------------------------------- |
| Set custom error message | `input.setCustomValidity()`                 |
| Clear error if valid     | `input.setCustomValidity("")`               |
| Know what went wrong     | `input.validity.xxx`                        |
| Display error            | `form.reportValidity()` or manual UI update |

### **49. Yup Basics – Validate data with the Yup library**

**Goals:**

* Learn to create validation schemas with Yup.
* Validate data against schemas.
* Handle Yup errors to show them on the UI.

#### **Install Yup:**

* **NPM:**

```bash
npm install yup
```

* **CDN:**

```html
<script src="https://cdn.jsdelivr.net/npm/yup@1.2.0"></script>
```

#### **Create a schema:**

```js
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup.number().positive("Age must be positive").integer("Age must be an integer"),
});
```

#### **Validate data:**

```js
const formData = {
  name: "Nhi Hồ",
  email: "nhi@example.com",
  age: 20,
};

schema.validate(formData)
  .then(validData => {
    console.log("✅ Valid data:", validData);
  })
  .catch(error => {
    console.log("❌ Errors:", error.errors); // Array of messages
  });
```

#### **Common Yup methods:**

| Type      | Methods                                           |
| --------- | ------------------------------------------------- |
| `string`  | `required()`, `min(n)`, `max(n)`, `email()`       |
| `number`  | `required()`, `positive()`, `integer()`, `min(n)` |
| `boolean` | `oneOf([true])`                                   |
| `array`   | `of(yup.string())`, `min(n)`, `max(n)`            |
| `object`  | `shape({})`, `object({})`                         |

#### **Async validation (with `async/await`):**

```js
try {
  const valid = await schema.validate(formData, { abortEarly: false });
  console.log("✅ Valid!", valid);
} catch (err) {
  console.log("❌ Errors:", err.errors);
}
```

#### **Where to use Yup?**

* In **React** (commonly with Formik)
* In **vanilla JS** to validate before submitting to server

#### **Summary:**

| Task                    | With Yup                |
| ----------------------- | ----------------------- |
| Create schema           | `yup.object({ ... })`   |
| Required field          | `.required("...")`      |
| Email format validation | `.email("...")`         |
| Validate form data      | `schema.validate(data)` |
| Get errors              | `error.errors`          |

### **50. Custom Logic with `.test()` in Yup**

`.test()` lets you define custom validation logic when default methods are not flexible enough.

**Goals:**

* Learn how to use `.test()`.
* Write custom validation logic (e.g., string must not include a keyword).
* Display custom error messages.

#### **Syntax:**

```js
yup.string().test(
  'unique-name',               // Test name
  'Error message if fails',    // Message shown if validation fails
  function (value) {
    return your_condition(value); // true = valid, false = invalid
  }
);
```

#### **Example: Block certain words**

```js
const schema = yup.object({
  title: yup.string()
    .required("Please enter a title")
    .test(
      'no-bad-words',
      'Title must not contain "bad"',
      value => !value?.toLowerCase().includes("bad")
    ),
});
```

```js
await schema.validate({ title: "this is a bad lesson" });
// ❌ Error: Title must not contain "bad"
```

#### **Example: Date must be in the future**

```js
const schema = yup.object({
  date: yup.date()
    .required("Select a date")
    .test(
      'is-future',
      'Date must be in the future',
      value => value && value > new Date()
    ),
});
```

#### **Compare two fields (e.g., password confirmation)**

```js
const schema = yup.object({
  password: yup.string().required(),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
```

Or using `.test()` for deeper control:

```js
confirmPassword: yup.string().test(
  'match-password',
  'Passwords do not match',
  function (value) {
    return value === this.parent.password;
  }
)
```

> `this.parent` gives access to other fields in the same schema.

#### **Async test (e.g., check if username exists on server)**

```js
username: yup.string().test(
  'check-unique',
  'Username already exists',
  async (value) => {
    const exists = await checkUsernameOnServer(value);
    return !exists;
  }
)
```

#### **Recap:**

| When to use `.test()`         | Why?                                   |
| ----------------------------- | -------------------------------------- |
| Need special validation logic | e.g., check for keywords, even numbers |
| Compare fields                | Use `this.parent`                      |
| Call API for validation       | Use `async` function inside `.test()`  |