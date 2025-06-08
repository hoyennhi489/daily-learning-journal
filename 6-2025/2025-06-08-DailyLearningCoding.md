**JAVASCRIPT**

**23. Tree Shaking**
Tree Shaking is a technique used in JavaScript to eliminate unused code from the bundle during production builds.

* Similar to “shaking a tree,” unnecessary branches (code) fall off.
* Helps reduce `.js` file size and improves page load performance.
  Tree Shaking is supported by bundlers such as Webpack, Rollup, Vite, etc.

**23.1. Conditions for Tree Shaking to Work**

* Use ES Modules (`import/export`)
* Do not use CommonJS (`require`, `module.exports`)
* Code must be free of side-effects

**Example:**

```js
// utils.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// main.js
import { add } from './utils.js';

console.log(add(2, 3));
```

⇒ In the above example, if only `add` is used, then when building for production, the `subtract` function will not be included in the final bundle.

**23.2. What is Side-Effect Code?**
A side-effect is any action that affects something outside the scope of a function:

* Logging to the console
* Writing to a file
* Writing cookies or localStorage
* Modifying the DOM
* ...
  Tree shaking does **NOT** remove code with side-effects, because it cannot be sure whether the code is important or not.

**Example (will not be removed):**

```js
console.log('Hello'); // side-effect: output to console
```

**23.3. How to Make Tree Shaking Effective**

* Use ES Modules (`import/export`)
* Avoid `require()`, `eval()`, unclear dynamic imports
* Declare `"sideEffects": false` in `package.json` if your library has no side-effects

```json
{
  "name": "your-lib",
  "sideEffects": false
}
```

Or more specifically:

```json
{
  "sideEffects": ["*.css", "./polyfill.js"]
}
```

**23.4. Tree Shaking in Vite (or Webpack)**

* Vite and Webpack 4+ support tree shaking automatically when building for production (`vite build`, `webpack --mode production`)
* No additional configuration is needed if you use ES Modules and avoid side-effects

**Advantages of Tree Shaking:**

* Reduces `.js` file size
* Speeds up page load time
* Prevents unnecessary code from being included in the app

⇒ Tree shaking is **extremely important** in real-world projects, especially when using large libraries like Lodash, Moment, dayjs, etc.

---

**24. Render Post List**
**Goal:**

* Understand how to store post data in JavaScript.
* Learn how to use loops to render a list to the UI.
* Learn how to use the DOM to add content to HTML.

**Step 1: Prepare Basic HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Post List</title>
  <style>
    .post {
      border: 1px solid #ccc;
      padding: 12px;
      margin: 8px 0;
      border-radius: 6px;
    }
    .post-title {
      font-weight: bold;
      font-size: 1.2em;
    }
    .post-content {
      margin-top: 4px;
    }
  </style>
</head>
<body>
  <h1>Post List</h1>
  <div id="post-list"></div>

  <script src="app.js"></script>
</body>
</html>
```

**Step 2: Create Data and Render with JavaScript**
**File: `app.js`**

```js
// Sample data - can be replaced with API or other sources
const posts = [
  {
    id: 1,
    title: "Learn Basic JavaScript",
    content: "Start with variables, functions, loops, and conditions."
  },
  {
    id: 2,
    title: "What is the DOM?",
    content: "DOM lets you interact with HTML using JavaScript."
  },
  {
    id: 3,
    title: "Events in JavaScript",
    content: "Listen to and handle user events."
  }
];

// Get the post list container
const postList = document.getElementById("post-list");

// Render each post
posts.forEach(post => {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  const title = document.createElement("div");
  title.className = "post-title";
  title.textContent = post.title;

  const content = document.createElement("div");
  content.className = "post-content";
  content.textContent = post.content;

  postDiv.appendChild(title);
  postDiv.appendChild(content);

  postList.appendChild(postDiv);
});
```

**Result:** The page will display a list of 3 posts, each with a title and content, dynamically created using JavaScript.

---

**25. Pagination + Click Event in JavaScript**
**Goal:**

* Paginate the post list
* Bind click events to navigate pages
* Render posts according to the selected page

| Concept              | Explanation                                                    |
| -------------------- | -------------------------------------------------------------- |
| Pagination           | Display a small portion of the list instead of the whole thing |
| Event Binding        | Attach an event (e.g., click) to an HTML element               |
| State (current page) | A variable to keep track of the current page                   |

**Update HTML (add pagination container)**

```html
<body>
  <h1>Post List</h1>
  <div id="post-list"></div>

  <!-- Pagination display -->
  <div id="pagination"></div>

  <script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
  <script src="app.js"></script>
</body>
```

**Logic in `app.js`**

```js
// Pagination configuration
const postsPerPage = 2;
let currentPage = 1;

// Get paginated posts
function getPaginatedPosts(posts, page, limit) {
  const start = (page - 1) * limit;
  return posts.slice(start, start + limit);
}

// Render post list
function renderPosts(postListData) {
  const postList = document.getElementById("post-list");
  postList.innerHTML = "";

  postListData.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const img = document.createElement("img");
    img.src = post.image;
    img.onerror = () => {
      img.src = "https://via.placeholder.com/80x80?text=No+Img";
    };

    const contentDiv = document.createElement("div");
    contentDiv.className = "post-content";

    const title = document.createElement("div");
    title.className = "post-title";
    title.textContent = post.title;

    const desc = document.createElement("div");
    desc.className = "post-desc";
    desc.textContent = truncate(post.description, 80);

    const date = document.createElement("div");
    date.className = "post-date";
    date.textContent = "Published on: " + dayjs(post.createdAt).format("DD/MM/YYYY HH:mm");

    contentDiv.appendChild(title);
    contentDiv.appendChild(desc);
    contentDiv.appendChild(date);

    postDiv.appendChild(img);
    postDiv.appendChild(contentDiv);
    postList.appendChild(postDiv);
  });
}

// Render pagination buttons and bind click events
function renderPagination(posts, currentPage, limit) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(posts.length / limit);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = (i === currentPage) ? "active" : "";

    btn.addEventListener("click", () => {
      currentPage = i;
      const paginated = getPaginatedPosts(posts, currentPage, limit);
      renderPosts(paginated);
      renderPagination(posts, currentPage, limit);
    });

    pagination.appendChild(btn);
  }
}

// Truncate description
function truncate(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

// Initial render
const paginated = getPaginatedPosts(posts, currentPage, postsPerPage);
renderPosts(paginated);
renderPagination(posts, currentPage, postsPerPage);
```

**Result:**

* Each page displays 2 posts.
* Pagination buttons are clickable.
* The active page is highlighted (add CSS to `.active` if needed).

**CSS (add inside `<style>`):**

```css
#pagination {
  margin-top: 16px;
}
#pagination button {
  margin: 0 4px;
  padding: 6px 12px;
  border: none;
  background-color: #eee;
  cursor: pointer;
}
#pagination button.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
```

---

**Summary:**

| Skill                 | Learned                                  |
| --------------------- | ---------------------------------------- |
| `slice()`             | Extract paginated data                   |
| `addEventListener()`  | Handle click events                      |
| DOM Update            | Update content based on the current page |
| State (`currentPage`) | Manage the current logic state           |