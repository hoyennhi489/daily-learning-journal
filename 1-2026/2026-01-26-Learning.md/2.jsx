/*
1. Click Counter
Has a number starting from 0
Has an **Increase** button
Each click increases the number by 1

2. Double Counter
Has a number starting from 1
Has a **Double** button
Each click doubles the number

3. Say Hello Input
Has an input field to enter a name
Displays: **Hello, {name}**
If the input is empty → display **Hello!**
*/

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function clickCounter() {
    setCount(count + 1);
  }

  const [number, setNumber] = useState(1);
  function doubleCounter() {
    setNumber(number * 2);
  }

  const [name, setName] = useState("");
  function sayHelloInput(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>1. Click Count</h1>
      <button onClick={clickCounter}>Increase</button>
      {count}

      <h1>2. Double Counter</h1>
      <button onClick={doubleCounter}>Double</button>
      {number}

      <h1>3. Say Hello Input</h1>
      <input onChange={sayHelloInput} />
      {name ? `Hello, ${name}` : "Hello!"}
    </div>
  );
}
export default App;