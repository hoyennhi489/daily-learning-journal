**JAVASCRIPT**

### 31. Refactor: Smart vs Dumb Function

| Function Type  | Main Characteristics                                                               |
| -------------- | ---------------------------------------------------------------------------------- |
| Smart Function | Handles logic such as filtering, pagination, searching, calculating, etc. No UI.   |
| Dumb Function  | Only responsible for rendering. Receives data and renders to DOM. No logic inside. |

**Goal**: Smart handles data, Dumb handles display.

#### Refactor into Smart & Dumb Functions

**Smart Functions (data processing only):**

```js
function filterPosts(posts, keyword) {
  return posts.filter(post =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

function paginatePosts(posts, currentPage, postsPerPage) {
  const start = (currentPage - 1) * postsPerPage;
  return posts.slice(start, start + postsPerPage);
}

function getVisiblePosts(posts, keyword, currentPage, postsPerPage) {
  const filtered = filterPosts(posts, keyword);
  const paginated = paginatePosts(filtered, currentPage, postsPerPage);
  return { filtered, paginated };
}
```

**Dumb Functions (DOM rendering only):**

```js
function renderPosts(postList) {
  const container = document.getElementById("post-list");
  container.innerHTML = "";

  if (postList.length === 0) {
    container.textContent = "No posts found.";
    return;
  }

  postList.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = post.title;
    container.appendChild(div);
  });
}

function renderPagination(totalItems, currentPage, postsPerPage, onPageChange) {
  const container = document.getElementById("pagination");
  container.innerHTML = "";

  const totalPages = Math.ceil(totalItems / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = (i === currentPage) ? "active" : "";
    btn.addEventListener("click", () => onPageChange(i));
    container.appendChild(btn);
  }
}
```

**Coordinator Function: `updateUI()`**

```js
const posts = [ /* list of posts */ ];

const state = {
  keyword: "",
  currentPage: 1,
  postsPerPage: 2,
};

function updateUI() {
  const { filtered, paginated } = getVisiblePosts(
    posts,
    state.keyword,
    state.currentPage,
    state.postsPerPage
  );

  renderPosts(paginated);
  renderPagination(filtered.length, state.currentPage, state.postsPerPage, (newPage) => {
    state.currentPage = newPage;
    updateUI();
  });
}

document.getElementById("search-input").addEventListener("input", (e) => {
  state.keyword = e.target.value;
  state.currentPage = 1;
  updateUI();
});

updateUI();
```

**HTML Template**

```html
<input type="text" id="search-input" placeholder="Search posts..." />
<div id="post-list"></div>
<div id="pagination"></div>
```

**Takeaways**

| Skill                  | Meaning                                      |
| ---------------------- | -------------------------------------------- |
| Smart Function         | Handles logic – easy to test, replace        |
| Dumb Function          | Renders only – clean, flexible for UI change |
| `updateUI()`           | Connects logic (smart) and UI (dumb)         |
| Separation of Concerns | Keeps code clean, modular, and maintainable  |

### 32. Redirect to Post Detail Page on Click

| Concept                | Explanation                                   |
| ---------------------- | --------------------------------------------- |
| Redirect               | Navigating to another URL                     |
| Query String           | Send data via URL like `?id=1`                |
| `window.location.href` | Command in JavaScript to perform the redirect |

**Example:**
Clicking a post sends you to `/post-detail.html?id=2`.

**index.html**

```html
<div id="post-list"></div>
<script src="app.js"></script>
```

**JavaScript (app.js)**

```js
const posts = [
  { id: 1, title: "Basic JavaScript" },
  { id: 2, title: "What is the DOM?" },
  { id: 3, title: "JavaScript Events" }
];

function renderPosts(postList) {
  const container = document.getElementById("post-list");
  container.innerHTML = "";

  postList.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = post.title;

    div.addEventListener("click", () => {
      window.location.href = `post-detail.html?id=${post.id}`;
    });

    container.appendChild(div);
  });
}

renderPosts(posts);
```

**Explanation of Redirect:**

```js
window.location.href = `post-detail.html?id=${post.id}`;
// Navigates browser and passes post ID via query string.
```

**post-detail.html**

```html
<h1>Post Detail</h1>
<div id="post-detail"></div>
<script src="post-detail.js"></script>
```

**post-detail.js**

```js
const posts = [ /* example data */ ];
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get("id"));
const post = posts.find(p => p.id === postId);

const container = document.getElementById("post-detail");
if (post) {
  container.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
  `;
} else {
  container.textContent = "Post not found.";
}
```

**Skills**

| Skill                  | Meaning                                             |
| ---------------------- | --------------------------------------------------- |
| `addEventListener`     | Handle user click events                            |
| `window.location.href` | Navigate to another page                            |
| `URLSearchParams`      | Get data from URL query string                      |
| Page Splitting         | Practice basic routing between list and detail view |

### 33. Fetch API & Display Post Detail

| Concept           | Explanation                            |
| ----------------- | -------------------------------------- |
| `fetch()`         | Call an API from JavaScript            |
| `async/await`     | Syntactic sugar for asynchronous code  |
| `URLSearchParams` | Extract query params from URL          |
| DOM Manipulation  | Insert data into HTML using JavaScript |

**Assumed API Endpoint:**

```
GET https://jsonplaceholder.typicode.com/posts/:id
```

**post-detail.html**

```html
<body>
  <h1>Post Detail</h1>
  <div id="post-detail">Loading...</div>
  <script src="post-detail.js"></script>
</body>
```

**post-detail.js**

```js
function getPostIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function fetchAndRenderPost() {
  const postId = getPostIdFromUrl();
  const postDetailEl = document.getElementById("post-detail");

  if (!postId) {
    postDetailEl.textContent = "No post ID found.";
    return;
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) throw new Error("Unable to fetch post");

    const post = await response.json();

    postDetailEl.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
  } catch (error) {
    postDetailEl.textContent = "Error loading post: " + error.message;
  }
}

fetchAndRenderPost();
```

**Skills**

| Skill                   | Description                       |
| ----------------------- | --------------------------------- |
| `fetch(url)`            | Call API from frontend            |
| `await response.json()` | Parse API response                |
| `URLSearchParams`       | Get parameters from URL           |
| DOM Manipulation        | Insert data into HTML dynamically |

### 34. Lightbox with Event Delegation

| Concept                | Explanation                                                  |
| ---------------------- | ------------------------------------------------------------ |
| Lightbox               | A modal to display a large image when a thumbnail is clicked |
| Event Delegation       | Attach event to parent, catch events from children           |
| `event.target`         | Element that was actually clicked                            |
| `classList.contains()` | Check if element has a specific class                        |

**HTML**

```html
<div class="gallery" id="gallery"></div>
<div class="lightbox" id="lightbox">
  <img id="lightbox-img" src="" alt="Preview" />
</div>
```

**CSS Highlights**

* Small images in `.gallery img`
* Modal `.lightbox` with `display: none` and `position: fixed`

**JavaScript (app.js)**

```js
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];

const gallery = document.getElementById("gallery");

images.forEach(url => {
  const img = document.createElement("img");
  img.src = url;
  img.classList.add("gallery-img");
  gallery.appendChild(img);
});

gallery.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    const imgSrc = event.target.src;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = imgSrc;
    lightbox.style.display = "flex";
  }
});

document.getElementById("lightbox").addEventListener("click", function () {
  this.style.display = "none";
});
```

**Skills**

| Skill            | Description                                       |
| ---------------- | ------------------------------------------------- |
| Event Delegation | Attach listener once for dynamic children         |
| `event.target`   | Determine which image was clicked                 |
| DOM Manipulation | Render, update image `src`, and toggle visibility |
| Lightbox UX      | Create modal-like preview on image click          |

## 35. Lightbox – Displaying a Modal

| Term             | Explanation                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Modal / Lightbox | A dialog box (popup) that appears on top of the main interface, usually used to show detailed content (e.g. image, form, etc.). |
| Overlay          | A semi-transparent background layer behind the modal to highlight the main content.                                             |
| DOM manipulation | Changing HTML dynamically using JavaScript.                                                                                     |

### Basic HTML + CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lightbox Modal</title>
  <style>
    .gallery img {
      width: 120px;
      margin: 8px;
      cursor: pointer;
      border-radius: 4px;
      transition: transform 0.2s;
    }

    .gallery img:hover {
      transform: scale(1.05);
    }

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
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <h2>Image Gallery</h2>
  <div class="gallery" id="gallery">
    <!-- Images will be rendered by JavaScript -->
  </div>

  <!-- Lightbox Modal -->
  <div class="lightbox" id="lightbox">
    <img id="lightbox-img" src="" alt="Preview" />
  </div>

  <script src="app.js"></script>
</body>
</html>
```

### JavaScript (app.js)

```js
// Sample image list
const imageList = [
  "https://via.placeholder.com/400x250?text=Image+1",
  "https://via.placeholder.com/400x250?text=Image+2",
  "https://via.placeholder.com/400x250?text=Image+3",
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// 1. Render thumbnails into gallery
imageList.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});

// 2. Handle click on image => show modal
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const imgSrc = e.target.src;
    lightboxImg.src = imgSrc;
    lightbox.classList.add("show");
  }
});

// 3. Click on overlay to close modal
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});
```

### Key Concepts to Remember

| Skill                      | Description                             |
| -------------------------- | --------------------------------------- |
| `element.classList.add()`  | Add a class to show the modal           |
| `event.target.src`         | Get the image source when it's clicked  |
| `element.addEventListener` | Attach click events to images and modal |
| Basic modal CSS            | Show/hide modal using CSS class         |