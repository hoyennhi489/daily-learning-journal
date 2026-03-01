//1. Change background color when clicking the button
// - Have a button "Change color"
// - Initial background is white
// - Click -> change to blue
// - Click again -> back to white

//2. Show even / odd number
// - Initial number = 0
// - Have an Increase button
// - If divisible by 2 -> show "Even number"
// - If not divisible -> show "Odd number"

//3. Show / Hide password
// - Have a password input
// - Have a "Show" button
// - Click -> change to text
// - Click again -> back to password

//4. Delete each item in Todo
// - Have a todo list
// - Each item has a "Delete" button
// - Click -> delete the correct item

//5. Count remaining characters
// - Limit to 20 characters
// - Show "Remaining X characters"
// - Do not allow typing more than 20 characters

import { useState } from "react";

export default function App() {
  const [isBlue, setIsBlue] = useState(false);

  function changeColor() {
    setIsBlue(!isBlue);
  }

  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }

  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(["Learn React", "Do homework"]);

  function addTodo() {
    if (todoInput !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  }

  function deleteTodo(indexToDelete) {
    const newTodos = todos.filter((item, index) => index !== indexToDelete);
    setTodos(newTodos);
  }

  const [text, setText] = useState("");

  function handleChange(e) {
    if (e.target.value.length <= 20) {
      setText(e.target.value);
    }
  }

  const remaining = 20 - text.length;

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: isBlue ? "lightblue" : "white",
      }}
    >
      <h1>React Practice</h1>

      <h2>Exercise 1</h2>
      <button onClick={changeColor}>Change Color</button>

      <hr />

      <h2>Exercise 2</h2>
      <p>Number: {number}</p>
      <button onClick={increase}>Increase</button>

      <p>{number % 2 === 0 ? "Even number" : "Odd number"}</p>

      <hr />

      <h2>Exercise 3</h2>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"}
      </button>

      <hr />

      <h2>Exercise 4</h2>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>Exercise 5</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>Remaining {remaining} characters</p>
    </div>
  );
}