**JAVASCRIPT**

**61. Preview image when selecting an image**

**Objective:**

•  When the user selects an image file from `<input type="file">`, display that image on the interface for preview.

•  Apply knowledge of:

+ `input[type="file"]`
+ `FileReader`
+ DOM manipulation

**Simple Example:**

```html
<!-- HTML -->
<h3>Select Avatar Image</h3>
<input type="file" id="image-input" accept="image/*" />

<div id="preview-container">
  <img id="image-preview" src="" alt="Preview Image" style="max-width: 200px; display: none;" />
</div>
```

```js
// JavaScript
const inputFile = document.getElementById('image-input');
const previewImage = document.getElementById('image-preview');

inputFile.addEventListener('change', function () {
  const file = this.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    previewImage.src = e.target.result;
    previewImage.style.display = 'block';
  };

  reader.readAsDataURL(file);
});
```

**Explanation:**

| Component                    | Meaning                                   |
| ---------------------------- | ----------------------------------------- |
| `accept="image/*"`           | Only allow image files to be selected     |
| `FileReader.readAsDataURL()` | Converts the file into a base64 URL       |
| `e.target.result`            | The base64 image URL used as `src`        |
| `style.display = 'block'`    | Displays the image once data is available |

**Remember:**

| Skill                 | Description                       |
| --------------------- | --------------------------------- |
| `change` event        | Triggered when a file is selected |
| `FileReader`          | Reads file into a URL             |
| `img.src`             | Assigns URL to preview image      |
| `display: none/block` | Show/hide the preview image       |

**62. Conditional Validation**

**Objective:**

•  Understand how to validate a form based on the value of other fields.

•  Example:

    •  If “Change password” is selected → require new password input.
    •  If “Subscribe to email” is selected → require email address.

**Common Scenarios:**

| Scenario                    | Validation Condition                       |
| --------------------------- | ------------------------------------------ |
| Checkbox “Change Password”  | If checked → require new password          |
| Radio “Delivery” / “Pickup” | If “Delivery” selected → require address   |
| Dropdown “Role”             | If “Admin” selected → require phone number |

**How to handle with Yup:** Yup supports `.when()` for defining conditional validation.

Example: If `isChangePassword = true`, then `newPassword` is required.

```js
import * as Yup from 'yup';

const schema = Yup.object({
  isChangePassword: Yup.boolean(),
  newPassword: Yup.string().when('isChangePassword', {
    is: true,
    then: schema => schema.required('Please enter a new password'),
    otherwise: schema => schema.notRequired()
  })
});
```

`.when()` takes 2 parts:
+  `is`: the condition
+  `then`: validation if condition is true
+  `otherwise`: validation if condition is false

Example: If "Delivery" is selected, then `address` is required:

```js
const schema = Yup.object({
  shippingMethod: Yup.string().required(),
  address: Yup.string().when('shippingMethod', {
    is: (val) => val === 'delivery',
    then: schema => schema.required('Please enter delivery address'),
    otherwise: schema => schema.notRequired()
  })
});
```

**Combining multiple conditions:**

```js
Yup.string().when(['a', 'b'], ([a, b], schema) => {
  return a && b ? schema.required() : schema;
});
```

**Remember:**

| Skill                    | Description                          |
| ------------------------ | ------------------------------------ |
| `.when()`                | Define validation based on condition |
| `is`                     | Condition to trigger `then()`        |
| `then()` / `otherwise()` | Branch validation logic              |
| `Yup.boolean()`          | For checkboxes                       |
| `Yup.string()`           | For text inputs                      |

**63. Validate File Size**

**Objective:**

    •  Check whether the selected file exceeds the allowed size.
    •  Common when uploading images or documents.
    •  Prevents oversized uploads that could crash the system.

**Vanilla JavaScript Example**:
Limit file size to 1MB:

```html
<input type="file" id="imageInput" />
<div id="errorMessage" style="color: red;"></div>
```

```js
const imageInput = document.getElementById("imageInput");
const errorMessage = document.getElementById("errorMessage");

imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];
  if (!file) return;

  const maxSizeInBytes = 1 * 1024 * 1024; // 1MB

  if (file.size > maxSizeInBytes) {
    errorMessage.textContent = "File exceeds 1MB. Please select a smaller file.";
    imageInput.value = ""; // reset input
  } else {
    errorMessage.textContent = "";
    // continue processing the file...
  }
});
```

**Validate file size with Yup:**
Yup does not support `File` directly, but you can use `.test()` to write custom checks.

```js
import * as Yup from 'yup';

const FILE_SIZE = 2 * 1024 * 1024; // 2MB

const schema = Yup.object({
  image: Yup.mixed()
    .required("Please select an image")
    .test("fileSize", "File must be smaller than 2MB", (value) => {
      return value && value.size <= FILE_SIZE;
    })
});
```

`value.size` is the file size in bytes.

**Note:**

| Situation         | How to handle                        |
| ----------------- | ------------------------------------ |
| No file selected  | Use `.required()` in Yup or JS       |
| File too large    | Use `.test()` with size limit        |
| Invalid file type | Check `file.type` (e.g., image/jpeg) |

**Check file format (bonus):**

```js
Yup.mixed()
  .required("Please select an image")
  .test("fileType", "Only JPG/PNG allowed", (value) => {
    return value && ['image/jpeg', 'image/png'].includes(value.type);
  });
```

**Summary:**

| Skill              | Usage                           |
| ------------------ | ------------------------------- |
| `.size`            | Get file size in bytes          |
| `FileReader`       | Read file content if needed     |
| `Yup.test()`       | Custom check (size, type, etc.) |
| `input.value = ""` | Reset input if file is invalid  |

**64. Submit Form-Data to Upload Image**

**Objective:**
+  Upload image and other form data to server.
+  Use `FormData` in JavaScript to package the data.
+  Use `fetch()` or `axios` to send HTTP requests (POST/PUT).

**HTML: Create a form with file input**

```html
<form id="uploadForm">
  <input type="text" name="title" placeholder="Title" required />
  <input type="file" name="image" accept="image/*" required />
  <button type="submit">Upload</button>
</form>
<div id="status"></div>
```

**JavaScript: Submit using FormData**

```js
const form = document.getElementById("uploadForm");
const status = document.getElementById("status");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // prevent page reload

  const formData = new FormData(form); // auto extracts from <form>

  try {
    const response = await fetch("https://your-api.com/upload", {
      method: "POST",
      body: formData, // send FormData directly
    });

    const result = await response.json();

    if (response.ok) {
      status.textContent = "Upload successful!";
    } else {
      status.textContent = "Error: " + result.message;
    }
  } catch (error) {
    status.textContent = "Error sending data.";
    console.error("Error uploading:", error);
  }
});
```

**What is FormData?**
+  `FormData` is an object used to bundle data (including files) for transmission.
+  Automatically sets `Content-Type` to `multipart/form-data`.

```js
const formData = new FormData();
formData.append("title", "Post A");
formData.append("image", fileInput.files[0]);
```

**When to use FormData?**

| Case                            | Sending method                                          |
| ------------------------------- | ------------------------------------------------------- |
| Only sending JSON text          | `JSON.stringify()` and `Content-Type: application/json` |
| Sending file (image/pdf/video…) | Use `FormData` and DO NOT manually set `Content-Type`   |

**Note when sending images:**
+  Backend must handle `multipart/form-data`.
+  For Node.js + Express → use `multer` to receive file.
+  Validate file existence and correctness before upload.

**Summary:**

| Skill                   | Description                     |
| ----------------------- | ------------------------------- |
| `FormData(formElement)` | Extracts all data from `<form>` |
| `.append(name, value)`  | Add data manually               |
| `fetch(..., { body })`  | Send POST with form-data        |
| `accept="image/*"`      | Restrict to image selection     |


**65. Validation on Change**

**Objective:**
+  Understand how to use `change` or `input` events to validate data.
+  Update error status in real-time as the user types.
+  Provide better UX by avoiding late validation only on submit.

**HTML**

```html
<form id="signupForm">
  <label>Email:
    <input type="email" name="email" required />
    <span class="error email-error"></span>
  </label>
  <br />
  <label>Password:
    <input type="password" name="password" minlength="6" required />
    <span class="error password-error"></span>
  </label>
  <br />
  <button type="submit">Sign Up</button>
</form>
```

**JavaScript: validation on input**

```js
const form = document.getElementById("signupForm");
const emailInput = form.elements["email"];
const passwordInput = form.elements["password"];

emailInput.addEventListener("input", () => {
  const errorSpan = form.querySelector(".email-error");
  if (!emailInput.validity.valid) {
    errorSpan.textContent = "Invalid email.";
  } else {
    errorSpan.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  const errorSpan = form.querySelector(".password-error");
  if (!passwordInput.validity.valid) {
    errorSpan.textContent = "Password must be at least 6 characters.";
  } else {
    errorSpan.textContent = "";
  }
});
```

**Combine with HTML5 validation:**

You can use:
+  `input.validity.valid` → true/false
+  `input.validationMessage` → get default error message

Or use a library like Yup for custom checks:

```js
passwordInput.addEventListener("input", async () => {
  try {
    await yup.string().min(6).validate(passwordInput.value);
    errorSpan.textContent = "";
  } catch (err) {
    errorSpan.textContent = err.message;
  }
});
```

**UX Notes:**
+  Do not show errors when input is still empty.
+  Only show errors after the user has touched or started typing.
+  Consider adding `.touched` class to control visibility.

**Summary:**

| Skill                             | Description                            |
| --------------------------------- | -------------------------------------- |
| `input.addEventListener("input")` | Listen for input                       |
| `validity.valid`                  | Check if valid                         |
| `validationMessage`               | Get default HTML5 error                |
| UX tip                            | Show error only after user interaction |

**66. Remove Post**

**Objective:**
+  Display a list of posts.
+  Attach a delete button to each post.
+  When clicking the delete button → remove the post from the list (UI and/or data).

**HTML**

```html
<body>
  <h1>Post List</h1>
  <div id="post-list"></div>

  <script src="app.js"></script>
</body>
```

**Data and render function**

```js
let posts = [
  { id: 1, title: "Learn Basic JS", content: "Variables, loops, functions..." },
  { id: 2, title: "What is DOM?", content: "Interact with HTML via JS" },
  { id: 3, title: "Events in JS", content: "Listen and handle events" }
];

function renderPostList(postListData) {
  const postList = document.getElementById("post-list");
  postList.innerHTML = ""; // clear old list

  postListData.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.dataset.id = post.id;

    const title = document.createElement("div");
    title.className = "post-title";
    title.textContent = post.title;

    const content = document.createElement("div");
    content.className = "post-content";
    content.textContent = post.content;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Delete";
    removeBtn.className = "remove-btn";

    // Attach delete event
    removeBtn.addEventListener("click", () => {
      handleRemove(post.id);
    });

    postDiv.appendChild(title);
    postDiv.appendChild(content);
    postDiv.appendChild(removeBtn);

    postList.appendChild(postDiv);
  });
}
```

**Delete handler**

```js
function handleRemove(id) {
  // Update data array
  posts = posts.filter(post => post.id !== id);

  // Re-render list
  renderPostList(posts);
}
```

**Result:**
+  Post list is displayed.
+  Each post has a Delete button.
+  When clicked, the post is removed from UI and data.

**Advanced features | Suggestions:**

| Feature               | Suggestion                                         |
| --------------------- | -------------------------------------------------- |
| Confirm before delete | `confirm("Are you sure you want to delete this?")` |
| Delete via API        | `fetch('/api/posts/:id', { method: 'DELETE' })`    |
| Smooth animation      | Use CSS animation or class transitions             |

**Remember:**

| Skill                        | Description               |
| ---------------------------- | ------------------------- |
| `array.filter()`             | Remove item from array    |
| `addEventListener("click")`  | Listen to delete event    |
| `innerHTML = ""` + re-render | Update DOM after deletion |