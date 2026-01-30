/*
1. Click Toggle Color

There is a line of text

There is a Change Color button

Each time you click → the text color changes (e.g. red ↔ blue)


2. Show Number Input

There is a number input field

Display the entered number below

If the input is empty → display “No number”


3. Counter with Reset

There is a number starting from 0

There are Increase and Reset buttons

Increase → increase by 1

Reset → reset back to 0


4. Simple Todo Count

There is a todo list (3–4 items available by default)

Display the total number of todo items

There is a Clear all button → removes all items


5. Enable Checkbox

There is a checkbox

There is a Continue button

When the checkbox is unchecked → the button is disabled

When the checkbox is checked → the button is enabled
*/
import { useState } from "react";

function ToggleColor() {
  const [isRed, setIsRed] = useState(true);
  function clickToggleColor() {
    setIsRed(!isRed);
  }

  const [number, setNumber] = useState("");
  function showNumberInput(e) {
    setNumber(e.target.value);
  }

  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  const [todos, setTodos] = useState([
    "Learn React",
    "Do homework",
    "Read book",
    "Exercise",
  ]);

  function handleClearTodos() {
    setTodos([]);
  }

  function renderTodos() {
    return todos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    });
  }

  const [checked, setChecked] = useState(false);
  function EnableCheckbox() {
    setChecked(!checked);
  }

  return (
    <div>
      <p style={{ color: isRed ? "red" : "green" }}>Toggle Color Text</p>
      <button onClick={clickToggleColor}>Change color</button>

      <input onChange={showNumberInput} value={number} type="number" />
      <p>{number === "" ? "No number" : number}</p>

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      {count}

      <p>Todo count: {todos.length}</p>
      <ul>{renderTodos()}</ul>
      <button onClick={handleClearTodos}>Clear all</button>

      <label>
        <input type="checkbox" checked={checked} onChange={EnableCheckbox} />I
        agree
      </label>
      <br />
      <button disabled={!checked}>Continue</button>
    </div>
  );
}

export default ToggleColor;