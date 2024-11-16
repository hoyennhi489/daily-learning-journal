**Review DOM Manipulation by Building a Rock, Paper, Scissors Game**  

### Step 1:
```javascript
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
```
- **Array**: A collection of values that can be accessed using an index. Here, the `options` array contains three strings: `"Rock"`, `"Paper"`, and `"Scissors"`.
- **Random number (Math.random())**:
  - `Math.random()` returns a random decimal between 0 and less than 1 (e.g., `0.745`).
  - Multiplying this by the array length (3 in this case) gives a random number between 0 and almost 3 (but not including 3).
- **Rounding down (Math.floor())**:
  - `Math.floor()` rounds a number down to the nearest integer.
  Example: `Math.floor(1.7)` returns `1`.

---

### Step 2:
```javascript
function hasPlayerWonTheRound(player, computer) {
  // Check player win conditions
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    return true;
  }
  // Return false otherwise
  return false;
}

// Test the function
console.log(hasPlayerWonTheRound("Rock", "Scissors")); // true
console.log(hasPlayerWonTheRound("Paper", "Rock")); // true
console.log(hasPlayerWonTheRound("Scissors", "Scissors")); // false
console.log(hasPlayerWonTheRound("Scissors", "Rock")); // false
```
- **Conditional Statements (if-else)**:  
  Use `if` to check the win cases for the player. If any condition is true, return `true`; otherwise, return `false`.
- **Parameters**:  
  - `player`: The player’s choice (`"Rock"`, `"Paper"`, or `"Scissors"`).
  - `computer`: The computer’s choice.
- **`&&` (and)**: All conditions must be true for the expression to return `true`.
- **`||` (or)**: At least one condition must be true for the expression to return `true`.

---

### Step 3:
```javascript
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
```
- Use **backticks** (`` ` ``) to create strings with variable values.
  Example: `${userOption} beats ${computerResult}`.

---

### Step 4:
```javascript
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
}
```
- **`innerText`**: Updates or retrieves the text content of an HTML element.
- **Call `getRoundResults`**: Returns the round result message based on the player’s and computer’s choices.

---

### Step 5:
```javascript
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}
```
- **Winning condition**: A player wins if their score reaches 3 (`playerScore === 3` or `computerScore === 3`).
- **Show/hide elements**: Use `style.display` to update the visibility of HTML elements:  
  - `"block"`: Show the element.  
  - `"none"`: Hide the element.
- **Winner message**:
  - Use `innerText` to update the content of `winnerMsgElement`.
- **Ensure proper UI updates**:  
  - When someone wins, disable further selections by hiding `optionsContainer`.

---

### Step 6:
```javascript
function resetGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Update score displays
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  // Hide reset button
  resetGameBtn.style.display = "none";

  // Show options for further play
  optionsContainer.style.display = "block";

  // Clear messages
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}
```