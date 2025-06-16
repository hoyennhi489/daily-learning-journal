**JAVASCRIPT**

**51. Yup – Validate Retype Password**

**Goals:**

* Understand how to use Yup to validate password confirmation.
* Ensure that the `password` and `confirmPassword` fields are the same.
* Apply this in a registration or password change form.

**51.1. Using `oneOf()` with `yup.ref()`**

```js
import * as yup from 'yup';

const schema = yup.object({
  password: yup
    .string()
    .required('Please enter a password')
    .min(6, 'Password must be at least 6 characters'),

  confirmPassword: yup
    .string()
    .required('Please re-enter your password')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
```

`yup.ref('password')` retrieves the value from the `password` field to compare.

**51.2. Use `.test()` instead (advanced and more flexible)**

```js
confirmPassword: yup.string().test(
  'match-password',
  'Passwords do not match',
  function (value) {
    return value === this.parent.password;
  }
)
```

**Complete Example (HTML + JS + Yup):**

```html
<form id="register-form">
  <input name="password" type="password" placeholder="Password" />
  <input name="confirmPassword" type="password" placeholder="Retype Password" />
  <button type="submit">Register</button>
</form>

<script type="module">
import * as yup from 'https://cdn.skypack.dev/yup';

const schema = yup.object({
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    await schema.validate(data, { abortEarly: false });
    alert('Registration successful!');
  } catch (err) {
    err.inner.forEach(error => alert(error.message));
  }
});
</script>
```

**Note:**

| Feature                    | Usage                           |
| -------------------------- | ------------------------------- |
| Compare with another field | `yup.ref('fieldName')`          |
| Advanced customization     | `.test()` with `this.parent`    |
| Detailed error messages    | Access `.message` in `.inner[]` |


**52. Yup – Conditional Validation with `.when()`**

**Goals:**

* Know how to perform conditional validation in Yup.
* Understand `.when()` syntax to change rules based on another field’s value.
* Apply in registration forms, payment methods, options, etc.

**52.1. Introduction to `.when()`**

```js
fieldName: yup.string().when('otherField', (value, schema) => {
  if (value === 'specific value') {
    return schema.required('Required in this case');
  }
  return schema;
});
```

`fieldName` will have different validations depending on `otherField`.

**Example: require `companyName` if `isCompany` is true**

```js
const schema = yup.object({
  isCompany: yup.boolean(),
  companyName: yup.string().when('isCompany', {
    is: true,
    then: schema => schema.required('Please enter company name'),
    otherwise: schema => schema.notRequired()
  })
});
```

**Another example: require `email` if user selects “notify by email”**

```js
const schema = yup.object({
  notifyBy: yup.string().oneOf(['none', 'email', 'sms']),
  email: yup.string().when('notifyBy', {
    is: 'email',
    then: schema => schema.required('Email is required').email('Invalid email'),
    otherwise: schema => schema.notRequired()
  })
});
```

**52.2. Advanced `.when()` with multiple fields**

```js
yup.string().when(['method', 'status'], ([method, status], schema) => {
  if (method === 'card' && status === 'pending') {
    return schema.required('Required when using card and pending');
  }
  return schema;
});
```

**Full Example:**

```js
const schema = yup.object({
  isStudent: yup.boolean(),
  schoolName: yup.string().when('isStudent', {
    is: true,
    then: s => s.required('Please enter school name'),
    otherwise: s => s.notRequired()
  })
});

const formData = {
  isStudent: true,
  schoolName: '',
};

schema.validate(formData).catch(err => {
  console.log(err.errors); // => ['Please enter school name']
});
```

**Summary:**

| Real-world case                  | How to use `.when()`                                  |
| -------------------------------- | ----------------------------------------------------- |
| Select "Company" to show input   | `companyName.when('isCompany', ...)`                  |
| Require email if notify by email | `email.when('notifyBy', { is: 'email', then: ... })`  |
| Multiple fields affect one       | `when(['field1', 'field2'], ([a, b], schema) => ...)` |


**53. Yup – Handle Type Mismatch with `typeError()`**

**Goals:**

* Understand how to catch type mismatch errors in Yup.
* Learn to use `.typeError()` to show clearer messages instead of default confusing ones.
* Apply to fields like number, date, boolean...

**Problem:** By default, Yup ignores fields if the type is incorrect.
**Example:** Declaring `age` as a number (`yup.number()`), but the user enters `"abc"` (string), Yup may not show a clear error or skip validation.

**Solution:** Use `.typeError("Custom message")`

**Syntax:**

```js
yup.number().typeError('Must be a number')
```

**Basic example:**

```js
const schema = yup.object({
  age: yup.number().typeError('Please enter a number')
});

schema.validate({ age: 'abc' }).catch(err => {
  console.log(err.errors); // ['Please enter a number']
});
```

**Example with date:**

```js
const schema = yup.object({
  birthDate: yup.date().typeError('Please enter a valid date')
});
```

Entering `"not-a-date"` → Yup will show a clear error.

**Example with boolean:**

```js
const schema = yup.object({
  agree: yup.boolean().typeError('You must agree')
});
```

Entering wrong type (`"yes"` instead of true/false) → shows proper error.

**Combining with `.required()`:**

```js
const schema = yup.object({
  quantity: yup
    .number()
    .typeError('Must be a number')
    .required('This field is required')
});
```

If input is `"abc"` → Error: Must be a number
If left blank → Error: This field is required

**Summary:**

| Field type | Yup schema                                      |
| ---------- | ----------------------------------------------- |
| Number     | `yup.number().typeError('Must be a number')`    |
| Date       | `yup.date().typeError('Enter a valid date')`    |
| Boolean    | `yup.boolean().typeError('Must be true/false')` |


**54. Apply Yup to a Project for Form Validation**

**Goals:**

* Use the Yup library to validate form data (client-side validation).
* Separate validation logic for reusability.
* Increase data integrity and user experience.
* Can be used with vanilla JS, React, or React Hook Form.

**Step 1: Install Yup**
For simple web project:

```html
<script src="https://cdn.jsdelivr.net/npm/yup@1.2.0/dist/yup.min.js"></script>
```

With npm project:

```bash
npm install yup
```

**Step 2: Create a validation schema**

```js
const postSchema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .min(5, 'Title is too short (minimum 5 characters)'),

  description: yup
    .string()
    .required('Description is required')
    .max(200, 'Description must be under 200 characters'),

  author: yup
    .string()
    .required('Author is required'),

  imageUrl: yup
    .string()
    .url('Image must be a valid URL')
    .required('Image is required')
});
```

**Step 3: Use the schema on form submit**

```js
const form = document.getElementById('postForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    title: form.title.value,
    description: form.description.value,
    author: form.author.value,
    imageUrl: form.imageUrl.value
  };

  try {
    await postSchema.validate(formData, { abortEarly: false });

    // ✅ If valid, proceed with API call or further actions
    console.log('Valid data:', formData);
    // submitToServer(formData);

  } catch (err) {
    // ❌ If errors, display messages
    const errorList = {};
    err.inner.forEach(e => {
      errorList[e.path] = e.message;
    });

    // Show errors in UI
    for (let field in errorList) {
      const errorElement = document.querySelector(`#${field} + .error`);
      if (errorElement) {
        errorElement.textContent = errorList[field];
      }
    }
  }
});
```

Note: `abortEarly: false` helps Yup collect all errors instead of stopping at the first.

**Sample HTML:**

```html
<form id="postForm">
  <input name="title" placeholder="Title" />
  <div class="error"></div>

  <input name="description" placeholder="Description" />
  <div class="error"></div>

  <input name="author" placeholder="Author" />
  <div class="error"></div>

  <input name="imageUrl" placeholder="Image URL" />
  <div class="error"></div>

  <button type="submit">Save Post</button>
</form>
```

**Advantages of using Yup:**

* Separate validation logic → easy to maintain.
* Supports many data types: string, number, date, object, array...
* Includes methods like `.required()`, `.min()`, `.max()`, `.matches()`, `.email()`, `.url()`, `.when()`, `.typeError()`, etc.
* Can reuse schema for both client-side and server-side validation.


**55. Handle Form Submission**

**Goals:**

* Listen for the form's submit event.
* Retrieve values from form fields.
* Validate the data (if needed).
* Send the data to the server or process it as needed.

**Sample HTML:**

```html
<form id="postForm">
  <input name="title" placeholder="Title" />
  <input name="author" placeholder="Author" />
  <input name="imageUrl" placeholder="Image URL" />
  <textarea name="description" placeholder="Description"></textarea>

  <button type="submit">Save Post</button>
</form>
```

**55.1. Handle submit event in JavaScript:**

```js
const form = document.getElementById('postForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  // Get input values
  const formData = {
    title: form.title.value.trim(),
    author: form.author.value.trim(),
    imageUrl: form.imageUrl.value.trim(),
    description: form.description.value.trim(),
  };

  console.log('Form data:', formData);

  // TODO: Validate data
  // TODO: Send data to server or further processing
});
```

**55.2. Additional handling (optional)**

**55.2.1. Simple validation (manual)**

```js
if (!formData.title) {
  alert('Please enter the title');
  return;
}
```

**55.2.2. Send data to server**

```js
fetch('https://your-api.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(response => response.json())
  .then(data => {
    console.log('Post created successfully:', data);
    // redirect or reset form if needed
  })
  .catch(error => {
    console.error('Error submitting:', error);
  });
```

**Summary:**

| Task                          | Meaning                        |
| ----------------------------- | ------------------------------ |
| `e.preventDefault()`          | Prevent page reload            |
| `.value.trim()`               | Remove leading/trailing spaces |
| Check `.required` fields      | Ensure fields are not empty    |
| `.addEventListener('submit')` | Trigger on form submission     |