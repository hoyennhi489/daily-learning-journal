// 1. Add Unique Item
//  Has an input field to enter text
//  Has an "Add" button
//  If the item already exists → do not add
//  If the item does not exist → add it to the list
//  After adding → clear the input

// 2. Remove Selected Item
//  Has a list of items
//  Click an item → the item becomes selected
//  Has a "Remove Selected" button
//  Click → remove the currently selected item

// 3. Toggle Empty Message
//  Has a list of items
//  Has a "Clear All" button
//  When the list is empty → display "No items"
//  When the list has items → the message disappears

// 4. Length Filter
//  Has a dropdown: All / Short (< 5 characters) / Long (≥ 5 characters)
//  The displayed list changes based on the selected option

// 5. Disable Add Button
//  Has an input field and an "Add" button
//  When the input is empty → the button is disabled
//  When the input has text → the button is enabled

import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleAdd = () => {
    if (items.includes(input)) return;
    setItems([...items, input]);
    setInput("");
  };

  const handleRemoveSelected = () => {
    if (selectedIndex === null) return;
    setItems(items.filter((_, i) => i !== selectedIndex));
    setSelectedIndex(null);
  };

  const handleClearAll = () => {
    setItems([]);
    setSelectedIndex(null);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "Short") return item.length < 5;
    if (filter === "Long") return item.length >= 5;
    return true;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>React Item Manager</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd} disabled={!input}>
        Add
      </button>

      <br />
      <br />

      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Short</option>
        <option>Long</option>
      </select>

      <br />
      <br />

      {items.length === 0 && <p>No items</p>}

      <ul>
        {filteredItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{
              cursor: "pointer",
              background: selectedIndex === index ? "#d0ebff" : "transparent",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <button onClick={handleRemoveSelected}>Remove selected</button>

      <button onClick={handleClearAll}>Clear all</button>
    </div>
  )};
export default App;