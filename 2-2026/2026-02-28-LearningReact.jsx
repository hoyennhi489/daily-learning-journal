// 1. Increase / Decrease number button
// - Initial number = 0
// - Increase button (+1)
// - Decrease button (-1)
// - Do not allow it to go below 0

// 2. Show / Hide content
// - Create a "Show" button
// - If hidden, display the text "Hello React"
// - If visible, hide it

// 3. Count characters when typing in input
// - Have an input field
// - When typing, display the number of characters below

// 4. Display a list
// - Given the array ["Apple", "Orange", "Mango"]
// - Use map() to render <li>

// 5. Mini Todo
// - Have an input
// - Have an "Add" button
// - When clicked, add the item to the list below
// - No need to delete yet

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  const fruits = ["Apple", "Orange", "Mango"];

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todoInput !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>React Practice</h1>

      <h2>Exercise 1</h2>
      <p>Number: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      <hr />

      <h2>Exercise 2</h2>
      <button onClick={toggleShow}>Show</button>
      {show && <p>Hello React</p>}

      <hr />

      <h2>Exercise 3</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text.length} characters</p>

      <hr />

      <h2>Exercise 4</h2>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      <h2>Exercise 5</h2>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}