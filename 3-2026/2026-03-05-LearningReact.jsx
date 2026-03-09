// 1. Create a Counter with Increase, Decrease and Reset buttons
// - Initial value = 0
// - Increase adds 1
// - Decrease subtracts 1
// - Reset sets back to 0



// 2. Create a Toggle Dark Mode
// - Background changes between white and black
// - Text color changes accordingly
// - Button text should change (Dark Mode / Light Mode)



// 3. Create a Live Character Counter
// - Limit input to 30 characters
// - Show "X characters remaining"
// - When remaining <= 5, text turns red



// 4. Create a Todo List with Completed State
// - Add new todo
// - Click todo to mark as completed
// - Completed items should have line-through style
// - Have delete button



// 5. Create a Filtered List
// - Have 3 buttons: All / Even / Odd
// - Display numbers from 1 to 20
// - Filter based on selected button



// 6. Create a Simple Product Cart
// - Display list of products
// - Each product has Add button
// - Show total items count
// - Show total price

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  const [dark, setDark] = useState(false);

  function toggleDark() {
    setDark(!dark);
  }

  const [text, setText] = useState("");

  function handleText(e) {
    if (e.target.value.length <= 30) {
      setText(e.target.value);
    }
  }

  const remaining = 30 - text.length;

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todoInput.trim() !== "") {
      setTodos([
        ...todos,
        { text: todoInput, completed: false }
      ]);
      setTodoInput("");
    }
  }

  function toggleTodo(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }


  const [filter, setFilter] = useState("all");

  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  function getFilteredNumbers() {
    if (filter === "even") {
      return numbers.filter(n => n % 2 === 0);
    }
    if (filter === "odd") {
      return numbers.filter(n => n % 2 !== 0);
    }
    return numbers;
  }

  const products = [
    { id: 1, name: "Book", price: 10 },
    { id: 2, name: "Pen", price: 5 },
    { id: 3, name: "Bag", price: 20 }
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  const totalItems = cart.length;

  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);


  return (
    <div
      style={{
        padding: 20,
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh"
      }}
    >

      <h2>1. Counter</h2>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <h2>2. Dark Mode</h2>
      <button onClick={toggleDark}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <hr />

      <h2>3. Character Counter</h2>
      <input value={text} onChange={handleText} />
      <p style={{ color: remaining <= 5 ? "red" : "inherit" }}>
        {remaining} characters remaining
      </p>

      <hr />

      <h2>4. Todo</h2>
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTodo(index)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>5. Filtered List</h2>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("even")}>Even</button>
      <button onClick={() => setFilter("odd")}>Odd</button>

      <div>
        {getFilteredNumbers().map(n => (
          <span key={n} style={{ marginRight: 10 }}>{n}</span>
        ))}
      </div>

      <hr />

      <h2>6. Product Cart</h2>
      {products.map(product => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      ))}

      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>

    </div>
  );
}