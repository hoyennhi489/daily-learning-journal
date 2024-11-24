
---

**Step 31**:  
```javascript
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
};
```

**Step 32**:  
```javascript
reset();
```

**Step 33**:  
```javascript
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});
```

**Steps 34-35**:  
```javascript
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});
```

**Step 36**:  
```javascript
const addOrUpdateTask = () => {
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
};
```

**Step 37**:  
```javascript
const updateTaskContainer = () => {
  taskData.forEach(({ id, title, date, description }) => {
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
};
```

**Step 38**:  
```javascript
updateTaskContainer();
reset();
```

**Step 39**:  
```javascript
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addOrUpdateTask();
});
```

**Steps 40-41**:  
```javascript
const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
      <div class="task" id="${id}">
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button onclick="editTask(this)" type="button" class="btn">Edit</button>
        <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
      </div>
    `;
  });
};
```

**Steps 42-44**:  
```javascript
const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
};
```

**Steps 45-50**:  
```javascript
const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  taskForm.classList.toggle("hidden");
};
```

**Step 51**:  
```javascript
if (dataArrIndex === -1) {
  taskData.unshift(taskObj);
} else {
  taskData[dataArrIndex] = taskObj;
}
```

**Step 52**:  
```javascript
const formInputValuesUpdated =
  titleInput.value !== currentTask.title ||
  dateInput.value !== currentTask.date ||
  descriptionInput.value !== currentTask.description;
```

**Step 53**:  
```javascript
if (formInputsContainValues && formInputValuesUpdated) {
  confirmCloseDialog.showModal();
} else {
  reset();
}
```

**Steps 54-59**:  
```javascript
const myTaskArr = [
  { task: "Walk the Dog", date: "22-04-2022" },
  { task: "Read some books", date: "02-11-2023" },
  { task: "Watch football", date: "10-08-2021" },
];

localStorage.setItem("data", JSON.stringify(myTaskArr));

localStorage.clear();

const getTaskArr = localStorage.getItem("data");
console.log(getTaskArr);

const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj);
```

**Step 60**: *Remove the `myTaskArr`.*

**Step 61**:  
```javascript
const addOrUpdateTask = () => {
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer();
  reset();
};
```

**Step 62**:  
```javascript
const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
};
```

**Step 63**:  
```javascript
const taskData = JSON.parse(localStorage.getItem("data")) || [];
```

**Step 64**:  
```javascript
if (taskData.length) {
  updateTaskContainer();
}
```

**Step 65**:  
```javascript
const reset = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
};
```

**Step 66**:  
```javascript
const addOrUpdateTask = () => {
  if (!titleInput.value.trim()) {
    alert("Please provide a title");
    return;
  }

  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };
};
```

**Step 67**:  
```javascript
const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '');
};
```