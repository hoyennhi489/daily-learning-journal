// 1. Write a React component that checks
// if a number is Even or Odd

// 2. Create a component that allows users
// to add numbers into an array and display
// the total sum

// 3. Create a textarea that counts characters
// (excluding spaces) in real-time

// 4. Render a list of numbers and add a button
// to find and highlight the largest number

// 5. Build a Mini Todo App with:
// - Add task
// - Delete task
// - Toggle completed

import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = () => {
    if (number === "") return;
    const num = Number(number);
    setResult(num % 2 === 0 ? "Even" : "Odd");
  };

  const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleAddNumber = () => {
    if (inputValue === "") return;
    setNumbers([...numbers, Number(inputValue)]);
    setInputValue("");
  };

  const total = numbers.reduce((sum, num) => sum + num, 0);

  const [text, setText] = useState("");
  const charCount = text.replace(/\s/g, "").length;

  const [list] = useState([3, 7, 2, 9, 5]);
  const [maxNumber, setMaxNumber] = useState(null);

  const handleFindMax = () => {
    const max = Math.max(...list);
    setMaxNumber(max);
  };

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>1. Even / Odd Checker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>
      <p>Result: {result}</p>

      <h2>2. Sum of Array</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add</button>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Sum: {total}</p>

      <h2>3. Character Counter</h2>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>Character count (no space): {charCount}</p>

      <h2>4. Find Max Number</h2>
      <p>
        {list.map((num, index) => (
          <span
            key={index}
            style={{
              marginRight: "10px",
              fontWeight: num === maxNumber ? "bold" : "normal",
              color: num === maxNumber ? "red" : "black",
            }}
          >
            {num}
          </span>
        ))}
      </p>
      <button onClick={handleFindMax}>Find Max</button>
      <p>Max: {maxNumber}</p>

      <h2>5. Mini Todo App</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
