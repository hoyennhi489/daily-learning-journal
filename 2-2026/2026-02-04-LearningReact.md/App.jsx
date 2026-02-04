/*
1. Advanced Counter
Create a Counter component with: + -
Do not allow negative numbers
A Reset button to set the value back to 0

2. Basic Todo List
Create a Todo App:
- Add tasks
- Delete tasks
- Display the total number of tasks

3. Toggle Theme
Create a toggle button:
- Light Mode 🌞
- Dark Mode 🌙
Change the CSS class using state

4. Filter List
Given a list of names: ["An", "Bình", "Chi", "Dũng"]
- Search input
- Filter the list as the user types

5. Component Reuse
Create a UserCard component that receives props: name, age, avatar
*/

import { useState } from "react";
import "./App.css";

function UserCard({ name, age, avatar }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <img src={avatar} alt={name} width="80" />
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  function addTodo() {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  const [darkMode, setDarkMode] = useState(false);
  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  const [keyword, setKeyword] = useState("");
  const names = ["An", "Bình", "Chi", "Dũng"];

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );

  const users = [
    {
      id: 1,
      name: "An",
      age: 18,
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: 2,
      name: "Bình",
      age: 19,
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: 3,
      name: "Chi",
      age: 20,
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>

      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>X</button>
          </li>
        ))}
      </ul>
      <p>Tổng số task: {todos.length}</p>

      <div className={darkMode ? "dark" : "light"}>
        <h2>{darkMode ? "Dark Mode 🌙" : "Light Mode 🌞"}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>

      <input
        placeholder="Tìm tên..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>User List</h2>

      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;