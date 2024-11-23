**Learn localStorage by Building a Todo App**

- **localStorage in JavaScript**:
  + It is a feature of the Web Storage API.
  + Data is stored as key:value pairs and persists even when the user reloads the page or closes the browser.

**Step 1**:
```javascript
const taskForm = document.getElementById('task-form');
const confirmCloseDialog = document.getElementById('confirm-close-dialog');
const openTaskFormBtn = document.getElementById('open-task-form-btn');
```
- **task-form**: A form to add tasks.
- **confirm-close-dialog**: A confirmation dialog before closing the form.
- **open-task-form-btn**: A button to open the task form.

**Step 2**:
```javascript
const closeTaskFormBtn = document.getElementById('close-task-form-btn');
const addOrUpdateTaskBtn = document.getElementById('add-or-update-task-btn');
const cancelBtn = document.getElementById('cancel-btn');
```
- **close-task-form-btn**: A button to close the task form.
- **add-or-update-task-btn**: A button to add or update a task.
- **cancel-btn**: A button to cancel the current action.

**Step 3**:
```javascript
const discardBtn = document.getElementById('discard-btn');
const tasksContainer = document.getElementById('tasks-container');
const titleInput = document.getElementById('title-input');
```
- **discard-btn**: A button to discard the current action (different from the cancel-btn from the previous step; this button can be used to delete data being edited or temporary actions).
- **tasks-container**: The area that contains the list of tasks (displays the tasks).
- **title-input**: The input field for the task title.

**Step 4**:
```javascript
const dateInput = document.getElementById('date-input');
const descriptionInput = document.getElementById('description-input');
```
- **date-input**: The input field for the date (typically using an `<input>` tag with type="date").
- **description-input**: The input field for the task description (it can be an `<input>` or `<textarea>` tag).

**Step 5**:
```javascript
const taskData = []; // Store all tasks
let currentTask = {}; // Track the current task state
```

**Step 6**:
```javascript
openTaskFormBtn.addEventListener("click", function () {
  taskForm.classList.toggle("hidden");
});
```
- **classList.toggle() method**:
  + Used to change the state of a CSS class on an element.
  + If the class does not exist, it will be added.
  + If the class already exists, it will be removed.

**Step 7**:
```javascript
closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});
```

**Step 8**:
```javascript
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
```

**Step 9**:
```javascript
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});
```

**Step 10-29**:
```javascript
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }

  taskData.forEach(({id, title, date, description}) => {
    tasksContainer.innerHTML += `
      <div class="task" id="${id}">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button type="button" class="btn">Edit</button>
        <button type="button" class="btn">Delete</button>
      </div>
    `;
  });

  taskForm.classList.toggle("hidden");
});
```

**Step 30**:
```javascript
const reset = () => {
  // Function to clear input fields
}
```
- The **reset** function clears the input fields:
  + Create a function to handle clearing all values in the input fields, preventing code repetition.

--- 