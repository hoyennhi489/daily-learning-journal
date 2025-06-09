**JAVASCRIPT**

**26. Pagination – Event Binding in JavaScript**

| **Term**          | **Explanation**                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pagination**    | A technique used to divide a long list into smaller pages, making it easier for users to follow and speeding up content loading.               |
| **Event Binding** | The process of attaching a handler function (e.g., `onclick`) to an HTML element. When users interact (e.g., click), the function is executed. |
| **State**         | A way to manage current data, such as using a `currentPage` variable to know which page the user is on.                                        |

**Lesson Goals:**
• Understand how to paginate a list of data.
• Learn how to bind click events to page navigation buttons.
• Know how to update the UI when users switch pages.

**General Process:**
• Create the data list (array)
• Configure the number of posts per page (e.g., 2)
• Get paginated data for each page (using `slice`)
• Display the posts in the DOM
• Create page number buttons (pagination)
• Bind click events to the buttons
• On click: update `currentPage`, re-render the post list and pagination buttons

**Basic Example Code:**

```javascript
const postsPerPage = 2;
let currentPage = 1;

const posts = [/* post list */];

// Get paginated posts
function getPaginatedPosts(posts, page, limit) {
  const start = (page - 1) * limit;
  return posts.slice(start, start + limit);
}

// Render posts
function renderPosts(postListData) {
  const postList = document.getElementById("post-list");
  postList.innerHTML = "";

  postListData.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = post.title;
    postList.appendChild(div);
  });
}

// Render pagination
function renderPagination(posts, currentPage, limit) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(posts.length / limit);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = (i === currentPage) ? "active" : "";

    // BIND CLICK EVENT
    btn.addEventListener("click", () => {
      currentPage = i;
      const paginated = getPaginatedPosts(posts, currentPage, limit);
      renderPosts(paginated);
      renderPagination(posts, currentPage, limit);
    });

    pagination.appendChild(btn);
  }
}

// Initial call on page load
const paginated = getPaginatedPosts(posts, currentPage, postsPerPage);
renderPosts(paginated);
renderPagination(posts, currentPage, postsPerPage);
```

**Knowledge Summary**

| **Skill**             | **Description**                        |
| --------------------- | -------------------------------------- |
| `slice()`             | Splits data by page                    |
| `addEventListener()`  | Binds event to button                  |
| DOM manipulation      | Dynamically updates HTML based on data |
| `State (currentPage)` | Manages current page state             |

**27. Pagination – Refetch Data When Changing Pages**

| **Term**               | **Explanation**                                                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Refetch Data**       | The process of sending a new request (using fetch API) to get different data when changes occur (e.g., switching pages). |
| **Dynamic Pagination** | Pagination using data fetched from a server or API, not from a static array.                                             |
| **Trigger**            | When users click a page button → call the API again to fetch data for that page.                                         |

**Lesson Goals:**
• Know how to call an API again when changing pages.
• Display the correct data for each page based on API response.
• Bind click events to change pages and load new data.

**Flow Overview:**
User clicks page 2
→ Handler calls `fetch(...page=2)`
→ Receives data from server
→ Displays page 2 data

**Simulated API Example:**

```html
<body>
  <h1>User List</h1>
  <div id="user-list"></div>
  <div id="pagination"></div>

  <script>
    const usersPerPage = 3;
    let currentPage = 1;

    // Simulate API fetch
    function fetchUsers(page, limit) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const totalUsers = 10;
          const allUsers = Array.from({ length: totalUsers }, (_, i) => ({
            id: i + 1,
            name: `User ${i + 1}`,
          }));

          const start = (page - 1) * limit;
          const paginatedUsers = allUsers.slice(start, start + limit);

          resolve({
            users: paginatedUsers,
            total: totalUsers,
          });
        }, 500); // simulate 500ms delay
      });
    }

    function renderUsers(users) {
      const container = document.getElementById("user-list");
      container.innerHTML = "";

      users.forEach(user => {
        const div = document.createElement("div");
        div.textContent = user.name;
        container.appendChild(div);
      });
    }

    function renderPagination(total, currentPage, limit) {
      const pagination = document.getElementById("pagination");
      pagination.innerHTML = "";

      const totalPages = Math.ceil(total / limit);
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.className = "active";

        btn.addEventListener("click", () => {
          loadPage(i); // Refetch data when changing page
        });

        pagination.appendChild(btn);
      }
    }

    // Main function to load data
    function loadPage(page) {
      currentPage = page;
      fetchUsers(currentPage, usersPerPage).then(data => {
        renderUsers(data.users);
        renderPagination(data.total, currentPage, usersPerPage);
      });
    }

    // Initial load
    loadPage(currentPage);
  </script>
</body>
```

**Knowledge Summary**

| **Skill**                | **Description**                           |
| ------------------------ | ----------------------------------------- |
| `fetch()` or API call    | Fetch dynamic data from server            |
| Server-based Pagination  | Only display necessary data for each page |
| `Promise` and `then()`   | Work with asynchronous data               |
| Click to trigger refetch | Call API every time the page changes      |

**Note:**
• Avoid loading all data at once if the list is large → use pagination with refetch.
• You can integrate with `fetch()` or libraries like Axios when working with real APIs.

**28. Search Posts with Debounce**

| **Term**                 | **Explanation**                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Search**               | Filters a list of posts based on user-entered keywords.                                                                            |
| **Debounce**             | A technique to delay function execution until the user stops typing for a set time (e.g., 300ms), reducing unnecessary processing. |
| **Avoid too many calls** | Calling a function on every keystroke may cause lag or API overload. Debounce improves performance.                                |

**Goals:**
• Understand how debounce works.
• Learn how to combine search and debounce in a JavaScript UI.
• Optimize user experience when searching posts.

**Basic HTML UI:**

```html
<body>
  <h1>Post List</h1>
  <input type="text" id="search-input" placeholder="Search posts..." />
  <div id="post-list"></div>

  <script src="app.js"></script>
</body>
```

**JavaScript with Debounce and Search:**

```javascript
const posts = [
  { id: 1, title: "Basic JavaScript Learning" },
  { id: 2, title: "What is the DOM?" },
  { id: 3, title: "Events in JavaScript" },
  { id: 4, title: "Basic React" },
  { id: 5, title: "Vue and Components" },
];

function renderPosts(data) {
  const container = document.getElementById("post-list");
  container.innerHTML = "";
  if (data.length === 0) {
    container.textContent = "No posts found.";
    return;
  }

  data.forEach(post => {
    const div = document.createElement("div");
    div.textContent = post.title;
    container.appendChild(div);
  });
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function handleSearch(event) {
  const keyword = event.target.value.toLowerCase();
  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(keyword)
  );
  renderPosts(filtered);
}

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", debounce(handleSearch, 300));

// Initial render
renderPosts(posts);
```

**Debounce Explained:**

```javascript
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout); // cancel previous call
    timeout = setTimeout(() => fn(...args), delay); // wait until user stops typing
  };
}
```

• `delay = 300ms`: The `handleSearch` function only runs if the user stops typing for 300ms.
• Prevents continuous execution while typing.

**Knowledge Summary**

| **Skill**     | **Description**                       |
| ------------- | ------------------------------------- |
| `input` event | Capture user input                    |
| `filter()`    | Filter array based on conditions      |
| `debounce()`  | Delay processing to boost performance |
| DOM update    | Display search results                |

**Note:**
• Debounce is essential for search, autocomplete, or API calls on input.
• You can use libraries like Lodash for built-in `_.debounce()` in larger projects.

**29. Refactor – Connect Code into a Clear Structure**

| **Term**                   | **Explanation**                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Refactor**               | Rewriting code to be cleaner and more understandable without changing its functionality.                                   |
| **Make Code Connected**    | Create a unified flow (pipeline), e.g., user searches → filter posts → paginate → render. Avoid having disconnected parts. |
| **Single Source of Truth** | Use a shared state variable for all parts (search, pagination, rendering) to rely on.                                      |

**Problems before refactor:**
• Many separate functions (`renderPosts`, `getFilteredPosts`, `renderPagination`) are not coordinated by a central logic.
• For example: changing `searchKeyword` doesn't automatically update pagination → code is fragmented.

**Goals after refactor:**
• One central controller function: `updateView()`
• Any event (search, page change) only updates state and calls `updateView()`
• Shared state includes: `searchKeyword`, `currentPage`, `postsPerPage`

**Refactored JavaScript (fully connected):**

```javascript
const posts = [
  { id: 1, title: "Basic JavaScript Learning" },
  { id: 2, title: "What is the DOM?" },
  { id: 3, title: "Events in JavaScript" },
  { id: 4, title: "Basic React" },
  { id: 5, title: "Vue and Components" },
  { id: 6, title: "Asynchronous Programming" },
];

const state = {
  searchKeyword: "",
  currentPage: 1,
  postsPerPage: 2,
};

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function getFilteredPosts() {
  return posts.filter(p =>
    p.title.toLowerCase().includes(state.searchKeyword.toLowerCase())
  );
}

function getPaginatedPosts(filteredPosts) {
  const start = (state.currentPage - 1) * state.postsPerPage;
  return filteredPosts.slice(start, start + state.postsPerPage);
}

function renderPosts(postList) {
  const container = document.getElementById("post-list");
  container.innerHTML = "";

  if (postList.length === 0) {
    container.textContent = "No posts available.";
    return;
  }

  postList.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = post.title;
    container.appendChild(div);
  });
}

function renderPagination(totalItems) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalItems / state.postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = (i === state.currentPage) ? "active" : "";
    btn.addEventListener("click", () => {
      state.currentPage = i;
      updateView(); // central call
    });
    pagination.appendChild(btn);
  }
}

function updateView() {
  const filtered = getFilteredPosts();
  const paginated = getPaginatedPosts(filtered);
  renderPosts(paginated);
  renderPagination(filtered.length);
}

document
  .getElementById("search-input")
  .addEventListener("input", debounce((e) => {
    state.searchKeyword = e.target.value;
    state.currentPage = 1;
    updateView();
  }, 300));

// Initial call
updateView();
```

**Corresponding HTML:**

```html
<body>
  <h1>Post List</h1>
  <input type="text" id="search-input" placeholder="Search posts..." />
  <div id="post-list"></div>
  <div id="pagination"></div>
  <script src="app.js"></script>
</body>
```

**Learned Skills**

| **Skill**              | **Meaning**                                       |
| ---------------------- | ------------------------------------------------- |
| Centralized `state`    | Manages shared app data                           |
| `updateView()`         | Connects all steps (search → pagination → render) |
| `debounce()`           | Optimizes performance when typing                 |
| `filter()` + `slice()` | Filters and paginates data                        |
| UI & logic connection  | Clear and extendable code structure               |

**30. Refactor – Smart Function vs Dumb Function**

**Terminology | Explanation**
**Smart Function** | Contains core logic such as filtering, pagination, state management, API calls, etc. It does **not** directly interact with the DOM.
**Dumb Function** | Handles only the UI display, receives input data and renders it to the DOM. It does **not** contain complex logic.
**Objective** | Clearly separate logic and UI, avoiding any mixture of responsibilities.

---

### **Complete Example: Post List with Search and Pagination**

**Smart functions:**

* `filterPosts`
* `paginatePosts`
* `getVisiblePosts`

**Dumb functions:**

* `renderPosts`
* `renderPagination`

### **Smart Functions – Data Only Logic**

```javascript
// Filter posts by keyword
function filterPosts(posts, keyword) {
  return posts.filter(post =>
    post.title.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Paginate data
function paginatePosts(posts, currentPage, postsPerPage) {
  const start = (currentPage - 1) * postsPerPage;
  return posts.slice(start, start + postsPerPage);
}

// Combine filter and pagination
function getVisiblePosts(posts, keyword, currentPage, postsPerPage) {
  const filtered = filterPosts(posts, keyword);
  const paginated = paginatePosts(filtered, currentPage, postsPerPage);
  return { filtered, paginated };
}
```

### **Dumb Functions – UI Rendering Only**

```javascript
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

### **Coordinator – Connecting Smart and Dumb Functions**

```javascript
const posts = [
  { id: 1, title: "Basic JavaScript" },
  { id: 2, title: "DOM manipulation" },
  { id: 3, title: "Event handling" },
  { id: 4, title: "Async/Await" },
  { id: 5, title: "Refactor code" },
  { id: 6, title: "React Components" }
];

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

// Search input
document.getElementById("search-input").addEventListener("input", (e) => {
  state.keyword = e.target.value;
  state.currentPage = 1;
  updateUI();
});

updateUI(); // Initial render
```

### **Required HTML**

```html
<body>
  <input type="text" id="search-input" placeholder="Search posts..." />
  <div id="post-list"></div>
  <div id="pagination"></div>
</body>
```

### **Summary**

| Skill                     | Practical Meaning                                        |
| ------------------------- | -------------------------------------------------------- |
| Smart/Dumb Function Split | Improves code readability, testability, and reusability  |
| Smart: data logic         | Handles filtering, pagination, and other logic           |
| Dumb: UI rendering        | Displays DOM elements from provided data                 |
| Central Coordinator       | `updateUI()` connects logic and UI clearly               |
| Easy to Extend            | Easily change data or UI separately without side effects |