/*
7. Remove Last Item
There is a list with 3–4 items.
There is a **Remove last** button.
Each click → removes the last item in the list.

8. Login / Logout
There are **Login** and **Logout** buttons.
When Login → show “Welcome back”.
When Logout → show “Please log in”.

9. Select Color
There is a dropdown to select a color (red, blue, green).
A text below changes color based on the selection.

10. Disable Button
There is an input and a **Submit** button.
When input is empty → button is disabled.
When input has text → button is enabled.
*/

import { useState } from "react";

function App() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  function removeLast() {
    setItems(items.slice(0, -1));
  }

  function renderTodo(todo) {
    return <li key={todo}>{todo}</li>;
  }

  const [loggedIn, setLoggedIn] = useState(false);

  const [color, setColor] = useState("black");

  function selectColor(e) {
    setColor(e.target.value);
  }

  const [text, setText] = useState("");

  function handleInput(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <button onClick={removeLast}>Remove Last</button>
      <ul>{items.map(renderTodo)}</ul>

      <h2>{loggedIn ? "Welcome back" : "Please log in"}</h2>
      <button onClick={() => setLoggedIn(true)}>Login</button>
      <button onClick={() => setLoggedIn(false)}>Logout</button>

      <select onChange={selectColor}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <p style={{ color }}>This text changes color</p>

      <input onChange={handleInput} />
      <button disabled={text === ""}>Submit</button>
    </div>
  );
}

export default App;