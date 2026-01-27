/*
1. Toggle Message
Has a Show / Hide button
When Show → display a message
When Hide → the message disappears

2. Text Length Counter
Has an input field
Displays the number of characters typed

3. Basic Todo List
Has an input to enter a task
Has an Add button
Displays the task list below
*/

import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  function toggleMessage() {
    setShow(!show);
  }

  const [counterText, setCounterText] = useState("");
  function textLengthCounter(event) {
    setCounterText(event.target.value);
  }

  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleTodoInput(event) {
    setTodoText(event.target.value);
  }

  function addTodo() {
    if (todoText !== "") {
      setTodos([...todos, todoText]);
      setTodoText("");
    }
  }

  function renderTodo(todo, index) {
    return <li key={index}>{todo}</li>;
  }

  return (
    <div>
      <button onClick={toggleMessage}>{show ? "Hide" : "Show"}</button>
      {show && <p>Hello! This is a message.</p>}

      <h1>Text Length Counter</h1>
      <input onChange={textLengthCounter} value={counterText} />
      <p>Character count: {counterText.length}</p>

      <h1>Todo List Basic</h1>
      <input onChange={handleTodoInput} value={todoText} />
      <button onClick={addTodo}>Add</button>

      <ul>{todos.map(renderTodo)}</ul>
    </div>
  );
}

export default App;