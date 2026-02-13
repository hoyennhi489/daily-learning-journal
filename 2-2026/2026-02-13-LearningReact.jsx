// 1. Create a counter with + and - buttons
// 2. Create a button to show / hide the text "Hello React"
// 3. Enter name and age, display them below
// 4. Create a simple Todo List
// 5. Create a button to switch between light / dark theme

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  const [show, setShow] = useState(false);

  function toggleText() {
    setShow(!show);
  }

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task !== "") {
      setList([...list, { text: task, done: false }]);
      setTask("");
    }
  }

  function toggleTask(index) {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  }

  const [dark, setDark] = useState(false);

  function changeTheme() {
    setDark(!dark);
  }

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <hr />

      <h2>Show / Hide</h2>
      <button onClick={toggleText}>Toggle</button>

      {show && <p>Hello React</p>}

      <hr />

      <h2>Input Form</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <p>Name: {name}</p>
      <p>Age: {age}</p>

      <hr />

      <h2>Todo List</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            style={{
              textDecoration: item.done ? "line-through" : "none",
              color: item.done ? "gray" : "black",
              cursor: "pointer",
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Theme</h2>

      <button onClick={changeTheme}>Switch Theme</button>
    </div>
  );
}

export default App;