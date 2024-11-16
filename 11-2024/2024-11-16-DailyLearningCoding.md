**Review DOM Manipulation by Building a Rock, Paper, Scissors Game.**

**Step 1:**
```javascript
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
```
- Array: An array is a collection of values that can be accessed by index. In this example, the `options` array contains three strings: "Rock", "Paper", and "Scissors".
- Random function (Math.random()):
  + `Math.random()` returns a random decimal number between 0 and less than 1 (e.g., 0.745).
  + When multiplied by the length of the array (3 in this case), you get a random number from 0 up to, but not including, 3.
- Rounding the number (Math.floor()):
  + `Math.floor()` rounds a number down to the nearest integer.
  Example: `Math.floor(1.7)` returns 1.

**Step 2:**
```javascript
function hasPlayerWonTheRound(player, computer) {
  // Check for player's win conditions
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    return true;
  }
  // If not, return false
  return false;
}

// Check the function
console.log(hasPlayerWonTheRound("Rock", "Scissors")); // true
console.log(hasPlayerWonTheRound("Paper", "Rock")); // true
console.log(hasPlayerWonTheRound("Scissors", "Scissors")); // false
console.log(hasPlayerWonTheRound("Scissors", "Rock")); // false
```
- Conditional statement (if-else): Use a conditional to check the player's win conditions. If any of the conditions are true, return `true`. Otherwise, return `false`.
- Parameters:
  + `player` contains the player's choice (can be "Rock", "Paper", or "Scissors").
  + `computer` contains the computer's choice.
- `&&` (and): All conditions must be true for the expression to return `true`.
- `||` (or): Only one condition needs to be true for the expression to return `true`.

**Step 3:**
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
- Use backticks (`) to create strings with variable values.
Example: `${userOption} beats ${computerResult}`.

**Step 4:**
```javascript
function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
};
```
- `innerText`: Used to change or retrieve the text content of an HTML element.
- Call the `getRoundResults` function: returns the round results message based on the player's and computer's choices.

**Step 5:**
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
- Winning condition: The player or computer wins when reaching 3 points (`playerScore === 3` or `computerScore === 3`).
- Show and hide elements: Use `style.display` to change the visibility of HTML elements:
  + "block": Shows the element.
  + "none": Hides the element.
- Winner announcement:
  + Use `innerText` to update the content of `winnerMsgElement`.
- Ensure correct interface update:
  + When someone wins, prevent further selections by hiding `optionsContainer`.

**Step 6:**
```javascript
function resetGame() {
  // Reset scores
  playerScore = 0;
  computerScore = 0;

  // Update score display
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  // Hide reset game button
  resetGameBtn.style.display = "none";

  // Show options to continue playing
  optionsContainer.style.display = "block";

  // Clear winner message
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}
```
---
**Learn Basic String and Array Methods by Building a Music Player.**

**Step 1:**
```javascript
// Access HTML elements by ID and assign to variables
const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
```

**Step 2:**
```javascript
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
```

**Step 3:**
```javascript
// Create an empty array to store the songs
const allSongs = [];
```

**Step 4-6:**
```javascript
// Array to store a list of songs
const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3"
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3"
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3"
  }
];
```
- A song is represented by an object with the following properties:
  - `id`: A unique identifier for the song.
  - `title`: The song's title.
  - `artist`: The artist performing the song.
  - `duration`: The song's duration (as a string).
  - `src`: The URL pointing to the music file.

**Step 7:**
```javascript
// Create an HTML5 audio element
const audio = new Audio();
```
- **HTML5 Audio Element**:
  + Use `Audio()` to create a new audio element.
  + This element allows you to play music, pause it, change the volume, and perform other actions.

**Step 8:**
```javascript
// Create an empty object to store user data
let userData = {};
```

**Step 9:**
```javascript
// Create a copy of allSongs without modifying the original array
let userData = {
  songs: [...allSongs]
};
```
- **Spread operator (...)**:
  + **Copying an array**: The spread operator copies all elements from the original array into a new array without modifying the original array.
  + **Concatenating arrays**: You can use the spread operator to merge multiple arrays into one.

**Step 10:**
```javascript
// Add current song information to userData
let userData = {
  songs: [...allSongs], // List of songs
  currentSong: null,    // Current song (no song selected yet)
  songCurrentTime: 0    // Current song playtime (in seconds)
};
```
- **currentSong**:
  + This property will store the current song information. When a user selects a song to play, you can assign the corresponding song object from the `songs` list to this property.
- **songCurrentTime**:
  + This property will track the current playtime of the song (in seconds).
  + This time can be updated continuously as the song plays.

**Step 11:**
```javascript
const printGreeting = () => {
  console.log("Hello there!");
};
```
- **Arrow functions**: An arrow function is a concise form of an anonymous function expression.
  + **Anonymous** means the function does not have a name.
  + Arrow functions are always anonymous.
- **Basic syntax**:
  - `() => {}`: The parentheses contain the function parameters (empty if there are no parameters).
  - `=> {}`: The function body.

**Step 12:**
```javascript
const printGreeting = () => {
  console.log('Hello there!'); 
}
printGreeting();
```
- **Calling a function**:
  + You call a function using the variable name assigned to the function (in this case, `printGreeting`).
  + Syntax for calling a function: `functionName();`.

**Step 13:**
```javascript
const printMessage = org => {
  console.log(`${org} is awesome!`);
};
printMessage("freeCodeCamp");
```
- **Parameters in arrow functions**:
  + If there is one parameter, you can omit the parentheses around the parameter, e.g., `org => {...}`.
  + If there are multiple parameters, use parentheses, e.g., `(param1, param2) => {...}`.
- **Template literals**:
  + Use backticks (`) to create template strings.
  + Embed variables into the string using `${variableName}`.

**Step 14:**
```javascript
// Define an arrow function to add two numbers
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

// Call the function and log the result to the console
console.log(addTwoNumbers(3, 4)); // Output: 7
```

**Step 15:**
```javascript
// Arrow function with implicit return
const addTwoNumbers = (num1, num2) => num1 + num2;

// Call the function and log the result to the console
console.log(addTwoNumbers(3, 4)); // Output: 7
```

**Step 16:**
- **Removing the functions** `printGreeting`, `printMessage`, and `addTwoNumbers` after their use.

**Step 17:**
```javascript
// To display the list of songs on the user interface (UI), you need to create a function:
const renderSongs = (array) => {
  
};
```

**Step 18:**
```javascript
const renderSongs = (array) => {
  const songsHTML = array.map();
};
```
- **`map()` method**:
  + Iterates over each element in an array.
  + Returns a new array containing the results of applying a function to each element.

**Step 19:**
```javascript
const songsHTML = array.map((song) => {});
```
- **Parameter `song`**: Represents each song in the array.

**Step 20:**
```javascript
return `<li id="song-${song.id}" class="playlist-song"></li>`;
```