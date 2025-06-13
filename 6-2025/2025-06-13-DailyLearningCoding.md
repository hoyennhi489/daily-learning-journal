**JAVASCRIPT**

### 41. Initialize Form Values – how to initialize form data depending on Add or Edit mode.

**Goal:**
• Assign default values (empty or pre-filled) to form inputs.
• Ensure the user sees the correct data:
• Empty form for adding a post.
• Pre-filled form for editing a post.

| Concept          | Explanation                                         |
| ---------------- | --------------------------------------------------- |
| Form fields      | Input fields in HTML (`<input>`, `<textarea>`, ...) |
| Default values   | Default values assigned to inputs                   |
| DOM manipulation | Changing values in the DOM using JavaScript         |

**How to initialize the form in JavaScript:**

* **Add mode – assign empty values**

```js
function initFormValues(post) {
  document.getElementById('title').value = post?.title || '';
  document.getElementById('description').value = post?.description || '';
  document.getElementById('imageUrl').value = post?.imageUrl || '';
}
```

If `post` is undefined, all fields will be assigned `''` (empty string).

* **Edit mode – assign data from API**

```js
if (isEditMode) {
  fetch(`https://api.example.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
      initFormValues(post);
    })
    .catch(err => {
      console.error('Error loading post:', err);
    });
} else {
  // Add mode
  initFormValues(); // Assign empty values
}
```

**Sample HTML form:**

```html
<input type="text" id="title" placeholder="Post title" />
<textarea id="description" placeholder="Short description"></textarea>
<input type="text" id="imageUrl" placeholder="Image URL" />
```

**Result:**

| Mode | Form Display       |
| ---- | ------------------ |
| Add  | Empty              |
| Edit | Data from the post |

### 42. Get Form Values on Submit – how to get form data when the user submits.

**Goal:**
• Capture the form’s submit event.
• Retrieve values from input fields (`input`, `textarea`, ...).
• Create a data object to send to the API (or for further logic).

| Concept                  | Explanation                                |
| ------------------------ | ------------------------------------------ |
| Submit event             | Triggered when a form is submitted         |
| `event.preventDefault()` | Prevents the page from reloading on submit |
| DOM value                | Access input values using `.value`         |

**Sample HTML form:**

```html
<form id="postForm">
  <input type="text" id="title" placeholder="Title" />
  <textarea id="description" placeholder="Description"></textarea>
  <input type="text" id="imageUrl" placeholder="Image URL" />
  <button type="submit">Save Post</button>
</form>
```

**JavaScript: Get data on submit**

```js
const form = document.getElementById('postForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  // Get form data
  const formData = {
    title: document.getElementById('title').value.trim(),
    description: document.getElementById('description').value.trim(),
    imageUrl: document.getElementById('imageUrl').value.trim(),
  };

  console.log('User input data:', formData);

  // Send to API or further processing...
});
```

**Result:**
When the user clicks Submit:
• The page does not reload.
• Input data is logged in the console or sent to the API.
• You can access `formData.title`, `formData.description`, etc.

**Tip:** You can use `FormData` for quicker form handling:

```js
const data = new FormData(form);
console.log(data.get('title'));
```

However: to use `FormData`, your inputs need to have `name=""`.

### 43. Client & Server Validation – validating data on both the client and server sides.

**Goal:**
• Understand the difference between client-side and server-side validation.
• Apply validation at the right places to avoid errors and improve security.
• Know how to validate form data with JavaScript before sending it.

#### 43.1. Client-side Validation (in the browser)

| Characteristic    | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| Where is it done? | In the browser (JavaScript)                                 |
| Purpose           | Show errors immediately to the user                         |
| Advantages        | Fast, instant feedback, reduces server load                 |
| Disadvantages     | Can be bypassed by disabling JS or calling the API directly |

**Example: validate before sending**

```js
function validateForm(data) {
  const errors = {};

  if (!data.title || data.title.length < 5) {
    errors.title = "Title must be at least 5 characters.";
  }

  if (!data.imageUrl || !isValidUrl(data.imageUrl)) {
    errors.imageUrl = "Invalid image URL.";
  }

  return errors;
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
```

#### 43.2. Server-side Validation (in the backend)

| Characteristic    | Description                                 |
| ----------------- | ------------------------------------------- |
| Where is it done? | On the server (Node.js, Python, PHP, ...)   |
| Purpose           | Ensure accurate data and prevent attacks    |
| Advantages        | Mandatory, cannot be bypassed               |
| Disadvantages     | Slower response, requires sending a request |

**Example:**

```js
// Send POST data to server
fetch('https://api.example.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
.then(res => res.json())
.then(response => {
  if (response.errors) {
    // Server returned validation errors
    console.error(response.errors);
  } else {
    // Success
    alert('Post saved!');
  }
});
```

### Combine Both:

| Validation Type | Should Use? | Reason                          |
| --------------- | ----------- | ------------------------------- |
| Client-side     | Recommended | Better user experience          |
| Server-side     | Mandatory   | For security and data integrity |

**Summary:**

| Aspect           | Client         | Server         |
| ---------------- | -------------- | -------------- |
| Where it runs    | In the browser | On the backend |
| Response speed   | Fast           | Slower         |
| Can be bypassed? | Yes            | No             |
| Required?        | No             | Yes            |

### 44. HTML5 Form Validation (Built-in) – using HTML attributes to validate user data without JavaScript.

**Goal:**
• Know how to use HTML attributes to validate forms.
• Leverage built-in browser validation (fast, lightweight, easy).
• Prevent form submission without writing JS.

**Example form:**

```html
<form id="postForm">
  <input
    type="text"
    id="title"
    name="title"
    placeholder="Title"
    required
    minlength="5"
    maxlength="100"
  />

  <input
    type="url"
    id="imageUrl"
    name="imageUrl"
    placeholder="Image URL"
    required
  />

  <textarea
    id="description"
    name="description"
    placeholder="Description"
    required
  ></textarea>

  <button type="submit">Save Post</button>
</form>
```

**Common HTML5 validation attributes:**

| Attribute      | Function                               |
| -------------- | -------------------------------------- |
| `required`     | Field must not be empty                |
| `minlength`    | Minimum number of characters           |
| `maxlength`    | Maximum number of characters           |
| `type="email"` | Validates email format                 |
| `type="url"`   | Validates URL format                   |
| `pattern`      | Use regex to validate                  |
| `disabled`     | Disable the input                      |
| `readonly`     | Input is read-only (cannot be changed) |

**User experience:**
• If `required` is missing → browser shows an error.
• If wrong format (e.g., for type="url") → browser shows an error.
• No JavaScript needed — just configure your HTML correctly.

**Summary:**

| Pros                   | Cons                                 |
| ---------------------- | ------------------------------------ |
| Fast, simple           | Cannot handle complex logic          |
| No JavaScript required | Error messages aren't customizable   |
| Great for basic forms  | Not suitable for advanced validation |

### 45. `:valid` & `:invalid` pseudo-classes – validate input using only CSS

**Goal:**
• Understand how `:valid` and `:invalid` work.
• Learn to style inputs based on form validity.
• Improve UX without writing JavaScript.

| Pseudo-class | Meaning                                           |
| ------------ | ------------------------------------------------- |
| `:valid`     | Applied when the field is valid (per HTML5 rules) |
| `:invalid`   | Applied when the field is invalid                 |

**Basic example:**

```html
<form>
  <input type="email" required placeholder="Enter email" />
</form>

<style>
  input:valid {
    border: 2px solid green;
  }

  input:invalid {
    border: 2px solid red;
  }
</style>
```

• When user types a valid email → green border.
• If left empty or invalid → red border.

**Apply to multiple input types:**

```html
<input type="text" required minlength="5" />
<input type="url" required />

<style>
  input:valid {
    background-color: #e6ffe6;
  }

  input:invalid {
    background-color: #ffe6e6;
  }
</style>
```

**Note:**
• `:valid` / `:invalid` only activate after user interaction (or after form.submit()).
• Can be combined with `:focus`, `:not(:placeholder-shown)` to improve UX.