// 1. Counter App
// - Show number starting at 0
// - Increase
// - Decrease
// - Reset
// - Bonus: do not allow number < 0

// 2. Show / Hide Text
// - Toggle button
// - Show or hide paragraph

// 3. Live Input Preview
// - Input field
// - Show text in real time

// 4. Simple Color Changer
// - Buttons: Red, Green, Blue
// - Change background color

// 5. Simple List Renderer
// - Render array list
// - Add Mango button
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [color, setColor] = useState("white");

  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  const handleAddMango = () => {
    setFruits([...fruits, "Mango"]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>1. Counter App</h2>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>

      <hr />

      <h2>2. Show / Hide Text</h2>
      <button onClick={handleToggle}>Toggle</button>
      {isVisible && <p>This is some text.</p>}

      <hr />

      <h2>3. Live Input Preview</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>

      <hr />

      <h2>4. Simple Color Changer</h2>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: color,
          marginBottom: "10px",
        }}
      ></div>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>

      <hr />

      <h2>5. Simple List Renderer</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={handleAddMango}>Add Mango</button>
    </div>
  );
}

export default App;