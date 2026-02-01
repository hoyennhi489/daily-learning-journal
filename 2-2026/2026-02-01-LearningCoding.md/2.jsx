// 6. Add To List
// Has an input field to enter text
// Has an "Add" button
// Click "Add" → add item to the list
// After adding → input is cleared

// 7. Remove Item
// The list contains multiple items
// Each item has a "Remove" button
// Click "Remove" → remove that specific item

// 8. Toggle List
// Has a list of items
// Has a "Toggle" button
// Click → hide the entire list
// Click again → show the list

// 9. Select Filter
// Has a dropdown (All / Short / Long)
// The displayed list changes based on the selected option

// 10. Empty State Message
// When the list is empty → display "No items"
// When the list has items → the message disappears


import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const handleAdd = () => {
    if (input.trim() === "") return;

    setItems([...items, input]);
    setInput("");
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const [showList, setShowList] = useState(true);
  const [filter, setFilter] = useState("all");

  const filteredItems = items.filter((item) => {
    if (filter === "short") return item.length <= 5;
    if (filter === "long") return item.length > 5;
    return true;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item..."
      />
      <button onClick={handleAdd}>Add</button>

      <br />
      <br />

      <button onClick={() => setShowList(!showList)}>Toggle List</button>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginLeft: 8 }}
      >
        <option value="all">All</option>
        <option value="short">Short</option>
        <option value="long">Long</option>
      </select>

      <br />
      <br />

      {filteredItems.length === 0 && <p>No items</p>}

      {showList && (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>
              {item}
              <button
                style={{ marginLeft: 6 }}
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;