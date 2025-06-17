**JAVASCRIPT**

**56. Add Toast Message Library – Integrating Toast Notifications into the Project**
**Objectives:**
• Display toast-style notifications after user actions: successful save, error, etc.
• Provide a better user experience instead of using `alert()`.
• Easy to integrate into any JavaScript project.

**56.1. Suggested Library: Toastify.js**
Lightweight (\~5KB), framework-independent, easy to use with Vanilla JS.

**Installation (if using an HTML file):**

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
```

**Toast usage example:**

* When a post is saved successfully:

```javascript
Toastify({
  text: "Post saved successfully!",
  duration: 3000,
  close: true,
  gravity: "top", // "top" or "bottom"
  position: "right", // "left", "center", or "right"
  backgroundColor: "#4caf50", // green color
}).showToast();
```

* When there is an error:

```javascript
Toastify({
  text: "Error submitting data!",
  duration: 3000,
  close: true,
  gravity: "top",
  position: "right",
  backgroundColor: "#f44336", // red
}).showToast();
```

**56.2. Integrate after form submission**
Example in `form.addEventListener('submit')`:

```javascript
// Submit successfully
fetch('https://your-api.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
  .then(response => response.json())
  .then(data => {
    Toastify({
      text: "Post published successfully!",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#4caf50"
    }).showToast();
  })
  .catch(error => {
    Toastify({
      text: "Error submitting data!",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#f44336"
    }).showToast();
  });
```

**Summary:**

| Benefit            | Description                            |
| ------------------ | -------------------------------------- |
| Nice notifications | No need to use disruptive `alert()`    |
| UI customization   | Choose color, position, duration       |
| Easy integration   | Works with Vanilla JS, React, Vue, ... |

**57. Prevent Multiple Form Submissions**
**Objective:**
Prevent users from repeatedly clicking the “Submit” button, which may cause:
• Data being submitted multiple times.
• Duplicate posts on the server.
• Unstable UI (e.g., multiple toasts).

**57.1. Common approach: Disable Submit Button Immediately on Submit**

```javascript
const form = document.getElementById('postForm');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch('https://your-api.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!res.ok) throw new Error('Submission failed');

    Toastify({
      text: 'Post published successfully!',
      duration: 3000,
      backgroundColor: '#4caf50',
    }).showToast();
  } catch (error) {
    Toastify({
      text: error.message || 'An error occurred!',
      duration: 3000,
      backgroundColor: '#f44336',
    }).showToast();
  } finally {
    // Re-enable button after process
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit';
  }
});
```

**57.2. Alternative: Use a State Variable**

```javascript
let isSubmitting = false;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (isSubmitting) return; // skip if already submitting
  isSubmitting = true;

  try {
    // Submit data...
  } catch (error) {
    // Handle error...
  } finally {
    isSubmitting = false;
  }
});
```

You can combine both:
• Use `isSubmitting` to avoid logic bugs.
• Use `submitBtn.disabled` to block UI interaction.

**Summary:**

| Prevention Method  | Description                                   |
| ------------------ | --------------------------------------------- |
| Disable button     | Prevent further interaction during processing |
| `isSubmitting` var | Prevent logic from executing repeatedly       |
| Use with toast     | Provide clear feedback to the user            |

**58. Random Image with Picsum.photos**
**Objective:**
• Generate random images for posts without real images.
• Use `picsum.photos` to get free, beautiful, convenient placeholder images.

**58.1. Basic usage**
Simply use the following URL in `img.src`:

```
https://picsum.photos/width/height
```

Example:

```javascript
const img = document.createElement('img');
img.src = 'https://picsum.photos/200/150';
```

Image of size 200x150 will be displayed. Each reload gives a new random image.

**58.2. Fixed image (based on image ID)**

```javascript
img.src = 'https://picsum.photos/id/237/200/150';
```

`id=237` is a cute dog image 🐶
Keeps the same image instead of changing on every load.

**58.3. Random image with JS**
If you want each post to have a random image:

```javascript
const width = 200;
const height = 150;
const randomSeed = Math.floor(Math.random() * 1000); // 0 → 999

img.src = `https://picsum.photos/seed/${randomSeed}/${width}/${height}`;
```

Use `seed` to randomize the image while keeping the layout consistent (to avoid CLS - Cumulative Layout Shift).

**58.4. Combine when displaying a list of posts**

```javascript
posts.forEach(post => {
  const img = document.createElement('img');
  const id = Math.floor(Math.random() * 1000);

  img.src = `https://picsum.photos/seed/${id}/100/100`;
  img.alt = 'Random image';

  postDiv.appendChild(img);
});
```

**Summary:**

| Objective              | Approach                                 |
| ---------------------- | ---------------------------------------- |
| Random image each time | `https://picsum.photos/200/150`          |
| Fixed image by ID      | `https://picsum.photos/id/10/200/150`    |
| Random image with seed | `https://picsum.photos/seed/abc/200/150` |
| Avoid CLS on load      | Use fixed width and height               |

**59. Image Source UI – Interface for Selecting Post Image Source**
**Objective:**
Allow users to select a post image via multiple methods:
• Manually input image URL
• Select random image from Picsum
• (Optional advanced: upload from device)

**Example UI Sketch:**

```html
<label for="imageUrl">Post Image</label>
<div style="display: flex; gap: 8px; align-items: center;">
  <input type="text" id="imageUrl" name="imageUrl" placeholder="https://..." />
  <button type="button" id="randomImageBtn">Random Image</button>
</div>
<img id="imagePreview" src="" alt="Preview" style="margin-top: 8px; max-width: 100%; height: auto;" />
```

**JavaScript handling:**

```javascript
const imageUrlInput = document.getElementById('imageUrl');
const randomImageBtn = document.getElementById('randomImageBtn');
const imagePreview = document.getElementById('imagePreview');

// 1. Update preview when user enters URL
imageUrlInput.addEventListener('input', () => {
  imagePreview.src = imageUrlInput.value;
});

// 2. Select random image from Picsum
randomImageBtn.addEventListener('click', () => {
  const seed = Math.floor(Math.random() * 1000);
  const url = `https://picsum.photos/seed/${seed}/600/400`;

  imageUrlInput.value = url;
  imagePreview.src = url;
});
```

**UX Suggestions:**

| Functionality     | UI/UX Suggestions                        |
| ----------------- | ---------------------------------------- |
| Image preview     | Always show image if URL is valid        |
| Random image      | Auto-generate URL and preview            |
| Error handling    | Show placeholder if image fails to load  |
| Responsive layout | Limit preview width based on screen size |

**Optional extensions:**
• Allow uploading from device (`<input type="file">`)
• Add image picker libraries (Pexels, Unsplash)
• Validate image URL with JS if needed

**60. Show/Hide Control Based on Radio Option**
**Objective:**
• When a radio option is selected, show the corresponding control section.
• Hide other control sections.
• Applies knowledge of:
    • `addEventListener('change')`
    • `querySelectorAll()`
    • `classList.add/remove/toggle()`

**Example:**

```html
<h3>Select Action Type</h3>
<label>
  <input type="radio" name="action" value="edit" /> Edit
</label>
<label>
  <input type="radio" name="action" value="delete" /> Delete
</label>
<label>
  <input type="radio" name="action" value="none" checked /> None
</label>

<div id="edit-controls" class="control hidden">
  <button>Save Edits</button>
</div>

<div id="delete-controls" class="control hidden">
  <button>Confirm Deletion</button>
</div>
```

**CSS:**

```css
.control.hidden {
  display: none;
}
```

**JavaScript:**

```javascript
const radioButtons = document.querySelectorAll('input[name="action"]');
const editControls = document.getElementById('edit-controls');
const deleteControls = document.getElementById('delete-controls');

radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    // Hide all controls
    editControls.classList.add('hidden');
    deleteControls.classList.add('hidden');

    // Show corresponding control
    if (radio.value === 'edit') {
      editControls.classList.remove('hidden');
    } else if (radio.value === 'delete') {
      deleteControls.classList.remove('hidden');
    }
  });
});
```

**Result:**

| Selected Radio | Result                         |
| -------------- | ------------------------------ |
| Edit           | Show "Save Edits" button       |
| Delete         | Show "Confirm Deletion" button |
| None           | No control shown               |