**JAVASCRIPT**

### 36. Lightbox – Switch Image Prev/Next

| Term              | Explanation                                                    |
| ----------------- | -------------------------------------------------------------- |
| **State**         | A variable storing the index of the current image in the list. |
| **Event handler** | A function handling user clicks on Prev/Next.                  |
| **DOM update**    | Change the image in the Lightbox via the `.src` attribute.     |

```html
<!-- HTML -->
<div class="gallery" id="gallery"></div>

<!-- Lightbox Modal -->
<div class="lightbox" id="lightbox">
  <button class="btn prev" id="prevBtn">⟨</button>
  <img id="lightbox-img" src="" alt="Preview" />
  <button class="btn next" id="nextBtn">⟩</button>
</div>
```

```css
/* CSS (add to style) */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox.show {
  display: flex;
}

.lightbox img {
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
  margin: 0 40px;
}

.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0 12px;
  user-select: none;
}

#prevBtn { left: 20px; }
#nextBtn { right: 20px; }
```

```javascript
// JavaScript (app.js)
const imageList = [
  "https://via.placeholder.com/400x250?text=Ảnh+1",
  "https://via.placeholder.com/400x250?text=Ảnh+2",
  "https://via.placeholder.com/400x250?text=Ảnh+3",
  "https://via.placeholder.com/400x250?text=Ảnh+4"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// 1. Render thumbnails
imageList.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.dataset.index = index;
  img.style.cursor = "pointer";
  img.style.margin = "8px";
  gallery.appendChild(img);
});

// 2. Open Lightbox on image click
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    currentIndex = parseInt(e.target.dataset.index, 10);
    showImage(currentIndex);
    lightbox.classList.add("show");
  }
});

// 3. Function to show image by index
function showImage(index) {
  lightboxImg.src = imageList[index];
}

// 4. Prev/Next
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % imageList.length;
  showImage(currentIndex);
});

// 5. Click background to close modal
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});
```

**Remember:**

| Skill                 | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `currentIndex`        | Stores the index of the current image                      |
| `%` modulo operator   | Enables cycling through Prev/Next                          |
| `e.stopPropagation()` | Prevents click on button from being treated as modal click |
| `.dataset.index`      | Retrieves index from clicked image                         |

### 37. Fix CLS (Cumulative Layout Shift)

CLS (Cumulative Layout Shift) is a metric in Core Web Vitals that measures unexpected layout shifts during page loading – for example:

* Slow-loading images or fonts → content pushed down.
* Ads/iframes with no fixed height → cause layout jump.

High CLS → poor user experience.

**Learning goals:**

* Understand the causes of layout shifts.
* Know how to set fixed sizes for images, videos, ads, etc.
* Know how to minimize layout changes using CSS/HTML.

#### 37.1. Common Causes of CLS

| Cause                              | Fix                                               |
| ---------------------------------- | ------------------------------------------------- |
| Image without width/height         | Always add width and height or use `aspect-ratio` |
| Slow-loading web fonts (FOUT/FOIT) | Use `font-display: swap`                          |
| Ads/iframes without frame          | Predefine height/frame                            |
| Suddenly appearing buttons/images  | Reserve space or use `visibility: hidden`         |

#### 37.2. How to Fix CLS

##### 37.2.1. Explicitly define image size

**Bad:**

```html
<img src="hero.jpg" alt="banner">
```

**Good:**

```html
<img src="hero.jpg" alt="banner" width="800" height="400">
```

**Or with CSS:**

```css
img {
  aspect-ratio: 2 / 1;
  width: 100%;
}
```

##### 37.2.2. Use `font-display: swap` for Web Fonts

```css
@font-face {
  font-family: 'MyFont';
  src: url('MyFont.woff2') format('woff2');
  font-display: swap;
}
```

→ This allows the browser to display a system font before the custom font loads → avoids layout shifts.

##### 37.2.3. Predefine size for iframe/ads

```html
<iframe width="600" height="300" src="..." loading="lazy"></iframe>
```

##### 37.2.4. Don’t insert new content that shifts layout

**Bad:**

```javascript
document.body.insertAdjacentHTML("afterbegin", "<div>Loading...</div>");
```

**Good:**

```html
<div class="placeholder" style="height: 80px;">Loading...</div>
```

##### 37.2.5. CLS Testing Tools

Use tools like:

* Lighthouse in Chrome DevTools
* PageSpeed Insights
* Web Vitals Chrome Extension

**Remember:**

| Skill                                  | Description                    |
| -------------------------------------- | ------------------------------ |
| `width`, `height` for images           | Reserves space before loading  |
| `aspect-ratio`                         | CSS alternative to height      |
| `font-display: swap`                   | Show fallback font immediately |
| Reserve space for slow-loading content | Avoid layout shift             |

### 38. Introduction to UI and Flow of Add/Edit Post Page

#### 38.1. UI Overview: Add/Edit Post Page

The Add/Edit Post page is used to:

* Create a new post (Add)
* Edit an existing post (Edit)

Typical UI components:

| UI Component                             | Description             |
| ---------------------------------------- | ----------------------- |
| Post title (Input)                       | Enter title             |
| Short description (Textarea/Input)       | Enter short description |
| Thumbnail image (URL Input or Upload)    | Image for the post      |
| Detailed content (Textarea or Rich Text) | Main content            |
| Save button                              | Submit data             |
| Cancel button (optional)                 | Return to list          |

#### 38.2. Flow

##### 38.2.1. Open Add Post Page

* User clicks “+ Add Post”.
* Page redirects to: `/add.html` (or `/post-form.html?id=add`)
* Form is empty.

##### 38.2.2. Open Edit Post Page

* User clicks "Edit" from the post list.
* Page redirects to: `/edit.html?id=123` (or `/post-form.html?id=123`)
* JavaScript will:

  * Read `id` from URL.
  * Call `fetch()` to get post details from API.
  * Fill form with data for editing.

##### 38.2.3. Submit form

When Save is clicked:

* If Add:

  * Send data via `POST /posts`
* If Edit:

  * Send data via `PUT /posts/:id`

After successful submission:

* Redirect to post list (`index.html`)
* Show notification (toast/snackbar)

##### 38.2.4. Logic to distinguish Add vs Edit in JavaScript:

```javascript
const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

if (postId) {
  // Edit mode
  fetchPostDetails(postId); // load data from API
} else {
  // Add mode
  // form is empty
}
```

##### 38.2.5. Optional: Validate data before submission

* Check that title and description are not empty.
* Validate image URL.
* Show errors near input if needed.

**Expected Results:**

| Action            | Result                       |
| ----------------- | ---------------------------- |
| Click "Add Post"  | Open empty form              |
| Click "Edit"      | Open form with existing data |
| Successful submit | Redirect + show message      |
| Failed submit     | Show form/API errors         |

### 39. Handle Edit Click

**Goal:**

* Attach click event to Edit button on each post.
* Get the correct `postId` of the clicked post.
* Redirect to Edit Post page with URL containing id.

| Concept                | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| Event delegation       | Attach event to parent, handle click using `event.target`. |
| Dataset                | HTML attribute like `data-id`, stores `postId`.            |
| `window.location.href` | Changes URL to redirect.                                   |

**Example UI (HTML output when rendering post):**

```html
<div class="post">
  <div class="post-title">Post Title</div>
  <button class="edit-btn" data-id="123">Edit</button>
</div>
```

**JavaScript: Handle Edit Click Event**

```javascript
const postList = document.getElementById('post-list');

// Use event delegation
postList.addEventListener('click', (event) => {
  const editBtn = event.target.closest('.edit-btn');

  if (editBtn) {
    const postId = editBtn.dataset.id;
    if (postId) {
      // Redirect to edit page with id
      window.location.href = `/post-form.html?id=${postId}`;
    }
  }
});
```

**Explanation:**

* `event.target.closest('.edit-btn')`: Checks if clicked element is the `.edit-btn` or inside it.
* `.dataset.id`: Gets value from `data-id`, which is `postId`.
* `window.location.href`: Redirects to `post-form.html` with id for editing.

**Result:**

* When user clicks Edit → navigates to edit post page with pre-filled data.
* Example URL: `post-form.html?id=123`

### 40. Determine Mode: Add or Edit

**Goal:**

* Distinguish between Add mode (create new post) and Edit mode (update post).
* Automatically adjust UI and logic (fetching data, submitting API) based on the mode.

| Concept           | Explanation                             |
| ----------------- | --------------------------------------- |
| Query string      | Data in URL, e.g., `?id=123`            |
| Add Mode          | No `id` in URL → empty form             |
| Edit Mode         | Has `id` → fetch and show existing data |
| `URLSearchParams` | API to read data from URL               |

**Example: Determine Add/Edit in JavaScript**

```javascript
const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

const isEditMode = Boolean(postId);

if (isEditMode) {
  document.title = 'Edit Post';

  // Fetch post details from API
  fetch(`https://api.example.com/posts/${postId}`)
    .then((res) => res.json())
    .then((data) => {
      // Fill form with data
      document.getElementById('title').value = data.title;
      document.getElementById('description').value = data.description;
      document.getElementById('imageUrl').value = data.imageUrl;
    })
    .catch((err) => {
      console.error('Post not found', err);
    });
} else {
  document.title = 'Add Post';
}
```

**Result:**

* User clicks Edit → form displays existing post data.
* User clicks Add Post → form is empty.
* Same HTML file but behaves differently based on `id`.