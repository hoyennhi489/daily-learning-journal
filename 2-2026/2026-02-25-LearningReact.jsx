// 1. Create a button that shows an alert when clicked
// - When user clicks the button, show "Hello React"



// 2. Create a counter
// - Show number
// - Button to increase number by 1



// 3. Create an input field
// - Show what user types below it



// 4. Create a button that changes text color
// - Default color is black
// - When click button, change to red



// 5. Create a simple toggle
// - Show text "ON"
// - When click button, switch between ON and OFF
import React, { useState } from "react";

function App() {
  const showAlert = () => {
    alert("Hello React");
  };

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [color, setColor] = useState("black");

  const changeColor = () => {
    setColor("red");
  };

  const [status, setStatus] = useState("ON");

  const toggleStatus = () => {
    if (status === "ON") {
      setStatus("OFF");
    } else {
      setStatus("ON");
    }
  };


  return (
    <div style={{ padding: "20px" }}>

      <h2>1. Alert Button</h2>
      <button onClick={showAlert}>Click Me</button>

      <hr />

      <h2>2. Counter</h2>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>

      <hr />

      <h2>3. Input Preview</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>

      <hr />

      <h2>4. Change Text Color</h2>
      <p style={{ color: color }}>This text changes color</p>
      <button onClick={changeColor}>Change to Red</button>

      <hr />

      <h2>5. Toggle</h2>
      <p>{status}</p>
      <button onClick={toggleStatus}>Toggle</button>

    </div>
  );
}

export default App;