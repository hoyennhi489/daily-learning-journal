/*
1. SHOW / HIDE TEXT
Goal: Practice useState and click handling.
Requirements:
- Have 1 button.
- Initially, the text is hidden.
- When clicking the button:
  + Show: Hello React
  + Click again: Hide it.
Interface: [ Show / Hide ] Hello React

2. INPUT DISPLAY NAME
Goal: Practice onChange and state.
Requirements:
- Have 1 input field.
- User enters their name.
- Display below: Hello, entered name
Example:
Input: Nhi
Output: Hello, Nhi

3. COUNT CHARACTERS
Goal: Practice string and textarea.
Requirements:
- Have 1 textarea.
- When the user types → count characters.
- Display: Characters: number
Note: Count spaces too.

4. CHANGE BACKGROUND COLOR
Goal: Practice style and state.
Requirements:
- Have 3 buttons: Red, Blue, Green
- Click a button → change background color.
Example: Click Red → red background.

5. CHECKBOX TASK LIST
Goal: Practice array and map.
- Display task list:
  + Learn React
  + Do homework
  + Rest
- Each item has a checkbox.
- When checked:
  + Text is crossed out.
  + Color turns gray.
*/

import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("white");

  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React", done: false },
    { id: 2, name: "Do homework", done: false },
    { id: 3, name: "Rest", done: false },
  ]);

  function toggleShow() {
    setShow(!show);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function changeColor(color) {
    setBgColor(color);
  }

  function handleCheck(id) {
    const newTasks = tasks.map(function (task) {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: bgColor,
      }}
    >
      <h2>1. Show / Hide</h2>

      <button onClick={toggleShow}>Show / Hide</button>

      {show && <p>Hello React</p>}

      <h2>2. Input Name</h2>

      <input type="text" value={name} onChange={handleNameChange} />

      <p>Hello, {name}</p>

      <h2>3. Count Characters</h2>

      <textarea rows="4" value={text} onChange={handleTextChange} />

      <p>Characters: {text.length}</p>

      <h2>4. Change Background</h2>

      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <button onClick={() => changeColor("green")}>Green</button>

      <h2>5. Task List</h2>

      {tasks.map(function (task) {
        return (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleCheck(task.id)}
            />

            <span
              style={{
                marginLeft: "8px",
                textDecoration: task.done ? "line-through" : "none",
                color: task.done ? "gray" : "black",
              }}
            >
              {task.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}