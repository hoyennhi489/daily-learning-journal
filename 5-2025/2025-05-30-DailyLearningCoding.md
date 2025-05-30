**JAVASCRIPT**

**16.17. Create TODO**
Process for creating a TODO:

1. The user fills in the form (e.g., input TODO content)
2. The user clicks Submit
3. Save the TODO data to localStorage
4. Create a new `<li>` element and attach it to the DOM
5. Reset the form (clear the input content)

**Example:**

```html
<!-- html -->
<form id="todoForm">
  <input type="text" id="todoInput" placeholder="Enter todo" />
  <button type="submit">Add</button>
</form>

<ul id="todoList"></ul>
```

```js
// js
const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const todoText = input.value.trim();
  if (!todoText) return;

  // 1. Save to localStorage
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  todoList.push(todoText);
  localStorage.setItem('todoList', JSON.stringify(todoList));

  // 2. Add li to DOM
  const li = document.createElement('li');
  li.textContent = todoText;
  list.appendChild(li);

  // 3. Reset form
  form.reset();
});
```

---

**16.18. Update Todo**

Goal: Learn how to let users edit a todo item, update localStorage, and the DOM interface.
Todo update process:

1. Click the Edit button on the todo item you want to modify.
2. Put the selected todo data into the input form.
3. The user edits the todo content.
4. Submit the form as usual.
5. Save the updated data to localStorage.
6. Update the corresponding `<li>` element in the UI.
7. Reset the form back to add-new state.

**Example:**

```html
<!-- html -->
<form id="todoForm">
  <input type="text" id="todoInput" placeholder="Enter todo" />
  <button type="submit">Save</button>
</form>

<ul id="todoList"></ul>
```

```js
// js
const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

let editIndex = -1;

function renderTodos() {
  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
  list.innerHTML = '';

  todoList.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      input.value = todo;
      editIndex = index;
    });

    li.appendChild(editBtn);
    list.appendChild(li);
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const todoText = input.value.trim();
  if (!todoText) return;

  const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

  if (editIndex >= 0) {
    // update
    todoList[editIndex] = todoText;
    editIndex = -1;
  } else {
    // add new
    todoList.push(todoText);
  }

  localStorage.setItem('todoList', JSON.stringify(todoList));
  form.reset();
  renderTodos();
});

renderTodos();
```

**Explanation:**

* `editIndex`: A variable storing the position of the todo being edited.
* When Edit is clicked, the data is loaded into the form, and `editIndex` is updated.
* When submitting the form:

  * If `editIndex >= 0`, it means we're updating → overwrite the old content.
  * If not, it's adding a new item.
* After form submission:

  * Data is saved to localStorage.
  * The list is re-rendered.
  * The form is reset.

**Note:**

* Only allow editing one todo at a time.
* You can add a "Cancel" button to cancel editing if you want to extend the feature.

---

**16.19. Search Todo**

Goal: Learn how to filter the todo list by user input keyword, by looping through the list and showing/hiding each matching element.

Search process:

* The user types a keyword into the search box.
* Loop through all `<li>` elements containing todos.
* If the content matches the keyword → show (`li.hidden = false`)
* If it doesn't match → hide (`li.hidden = true`)

**Example:**

```html
<!-- html -->
<input type="text" id="searchInput" placeholder="Search todo..." />

<ul id="todoList">
  <!-- li elements will be added here -->
</ul>
```

```js
// js
const searchInput = document.getElementById('searchInput');
const list = document.getElementById('todoList');

// Handle event when user types in the search box
searchInput.addEventListener('input', function () {
  const keyword = searchInput.value.toLowerCase();
  const items = list.querySelectorAll('li');

  items.forEach((li) => {
    const text = li.textContent.toLowerCase();
    li.hidden = !text.includes(keyword);
  });
});
```

**Explanation:**

* Use the `input` event to handle every time the user types.
* Loop through all `<li>` elements in the list.
* `text.includes(keyword)` returns true if the todo contains the keyword.
* If yes, set `li.hidden = false` → show it.
* If not, `li.hidden = true` → hide it.

**Note:**

* `li.hidden` is a quick way to hide/show elements without changing layout.
* Ensure all characters are converted to lowercase to avoid case-sensitivity issues.

---

**16.20. Filter todo by status**

Goal: Help learners know how to show/hide todos based on status:

* All
* Pending
* Completed

**Example:**

```html
<!-- html -->
<select id="statusFilter">
  <option value="all">All</option>
  <option value="pending">Pending</option>
  <option value="completed">Completed</option>
</select>

<ul id="todoList">
  <li data-status="pending">Learn JavaScript</li>
  <li data-status="completed">Build Todo App</li>
  <!-- Add more todos -->
</ul>
```

Each `<li>` element has a `data-status` attribute representing its current status.

```js
// js
const statusFilter = document.getElementById('statusFilter');
const list = document.getElementById('todoList');

statusFilter.addEventListener('change', function () {
  const selectedStatus = statusFilter.value;
  const items = list.querySelectorAll('li');

  items.forEach((li) => {
    const itemStatus = li.getAttribute('data-status');

    li.hidden = selectedStatus !== 'all' && itemStatus !== selectedStatus;
  });
});
```

**Explanation:**

* When the user selects a status from the dropdown, the `change` event is triggered.
* Each `<li>` will be checked:

  * If filter is "all" → always show (`li.hidden = false`)
  * If not "all" → only show items with matching `data-status`
* Non-matching items will be hidden using `li.hidden = true`.

---

**16.21. Persist filters when reloading**

Goal:

* Filters like status, search text, etc., remain unchanged after reload.
* Data is stored in the URL (query params) instead of localStorage.
* Use `history.pushState()` to update the URL without reloading.

**Requirements summary:**

* Filter works correctly
* When filters change → update query params
* When page reloads → read from query params to apply filter
* Loop through each `li`, show/hide based on filter result

**Example:**

```html
<!-- html -->
<input id="searchInput" placeholder="Search..." />
<select id="statusFilter">
  <option value="all">All</option>
  <option value="pending">Pending</option>
  <option value="completed">Completed</option>
</select>

<ul id="todoList">
  <li data-status="pending">Learn JS</li>
  <li data-status="completed">Build App</li>
</ul>
```

```js
// js
// Update URL when filter changes:
function updateQueryParams(params) {
  const url = new URL(window.location);
  for (const key in params) {
    url.searchParams.set(key, params[key]);
  }
  history.pushState({}, '', url);
}

// Get query params to apply filters:
function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    search: urlParams.get('search') || '',
    status: urlParams.get('status') || 'all',
  };
}

// filterTodos() applies both status and search:
function filterTodos(searchText, status) {
  const items = document.querySelectorAll('#todoList li');

  items.forEach((li) => {
    const textMatch = li.textContent.toLowerCase().includes(searchText.toLowerCase());
    const statusMatch = status === 'all' || li.dataset.status === status;
    li.hidden = !(textMatch && statusMatch);
  });
}

// Initialize UI from URL on reload:
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');

const { search, status } = getQueryParams();
searchInput.value = search;
statusFilter.value = status;
filterTodos(search, status);

// Attach filter events:
searchInput.addEventListener('input', () => {
  const newParams = {
    search: searchInput.value,
    status: statusFilter.value,
  };
  updateQueryParams(newParams);
  filterTodos(newParams.search, newParams.status);
});

statusFilter.addEventListener('change', () => {
  const newParams = {
    search: searchInput.value,
    status: statusFilter.value,
  };
  updateQueryParams(newParams);
  filterTodos(newParams.search, newParams.status);
});
```

**Note:**

* Use `history.pushState()` to update the URL without reloading.
* Use `URLSearchParams` to get info from the query string.
* When users reload the page, they still see the correctly filtered result.