// Import useState and useEffect from React
import { useState, useEffect } from "react";

function App() {
  // State to check mood: true = happy, false = sad
  let [isItHappy, setisItHappy] = useState(true);

  // State to count number of clicks
  let [count, setCount] = useState(0);

  // useEffect runs after every component render
  useEffect(() => {
    // When count equals 10, log "gold" to the console
    if (count === 10) {
      console.log("gold");
    }
  });

  // Function to handle Count button click
  function countClick() {
    // If happy, increase count
    if (isItHappy) {
      setCount(count + 1);
    }
    // If sad and count > 0, decrease count
    else if (!isItHappy && count > 0) {
      setCount(count - 1);
    }
  }

  // Change mood state (happy <-> sad)
  function changeMood() {
    setisItHappy(!isItHappy);
  }

  // Log a message to the console
  function Click() {
    console.log("Notification");
  }

  // Show alert in the browser
  function alertClick() {
    alert("You have 1 notification");
  }

  return (
    <div>
      {/* Title */}
      <h1>Hello, Im Nhi</h1>

      {/* Button to log to console */}
      <button onClick={Click}>Click me</button>

      {/* Button to show alert */}
      <button onClick={alertClick}>Alert</button>

      {/* Button to change mood */}
      <button onClick={changeMood}> Change Mood</button>

      {/* Display happy or sad state */}
      {isItHappy ? <div>happy</div> : <div>sad</div>}

      {/* Button to increase/decrease count */}
      <button onClick={countClick}>Count</button>

      {/* Display count value */}
      {count}
    </div>
  );
}

// Export App component
export default App;