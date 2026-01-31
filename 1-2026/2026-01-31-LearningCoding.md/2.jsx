// 6. Show / Hide Password
// Has a password input
// Has a Show / Hide button
// Click button → show or hide input content

// 7. Character Counter
// Has a text input
// Display the number of characters typed below

// 8. Like Button
// Has a Like button
// Each click → increase like count
// Display total likes

// 9. Select Message
// Has a dropdown with options (A, B, C)
// Display corresponding message below

// 10. Submit Once
// Has a Submit button
// After clicking → button is disabled
// Display “Submitted” message

import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  const [choice, setChoice] = useState("A");

  function handleSelect(e) {
    setChoice(e.target.value);
  }

  function getMessage() {
    if (choice === "A") return "You selected A";
    if (choice === "B") return "You selected B";
    if (choice === "C") return "You selected C";
  }

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div>
      <h3>6. Show / Hide Password</h3>
      <input type={showPassword ? "text" : "password"} />
      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"}
      </button>

      <hr />

      <h3>7. Character Counter</h3>
      <input value={text} onChange={handleTextChange} />
      <p>Characters: {text.length}</p>

      <hr />

      <h3>8. Like Button</h3>
      <button onClick={handleLike}>Like</button>
      <p>Total likes: {likes}</p>

      <hr />

      <h3>9. Select Message</h3>
      <select onChange={handleSelect}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <p>{getMessage()}</p>

      <hr />

      <h3>10. Submit Once</h3>
      <button disabled={submitted} onClick={handleSubmit}>
        Submit
      </button>
      {submitted && <p>Submitted</p>}
    </div>
  );
}

export default App;