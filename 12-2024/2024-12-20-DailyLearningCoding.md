**Review Algorithmic Thinking by Building a Dice Game.**

### **Step 1:**
```javascript
const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1; 
let rolls = 0; 
```

1. **Select the interface elements:**
   - **Dice:** `listOfAllDice` — All the dice in the game.
   - **Score:** `scoreInputs` (input fields for score) and `scoreSpans` (to display score).
   - **Round:** `roundElement` (round number), `rollsElement` (number of rolls).
   - **Total score:** `totalScoreElement`.
   - **History:** `scoreHistory`.
   - **Buttons:** `rollDiceBtn` (roll dice), `keepScoreBtn` (keep score), `rulesBtn` (show rules).
   - **Rules:** `rulesContainer`.

2. **State variables for the game:**
   - **`diceValuesArr`:** Array to store the dice values.
   - **`isModalShowing`:** Check if the rules modal is open.
   - **`score`:** The current total score.
   - **`round`:** The current round number.
   - **`rolls`:** The number of rolls in the current round.

### **Step 2:**
```javascript
rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing; // Toggle state

  if (isModalShowing) {
    rulesContainer.style.display = "block"; // Show rules
    rulesBtn.textContent = "Hide rules"; // Change button text
  } else {
    rulesContainer.style.display = "none"; // Hide rules
    rulesBtn.textContent = "Show rules"; // Change button text
  }
});
```
- This code toggles the visibility of the rules modal when the `rulesBtn` is clicked. If the modal is shown, the button text is "Hide rules"; if the modal is hidden, the text is "Show rules".

### **Step 3:**
```javascript
const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  };

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};
```
- This function simulates rolling 5 dice. It generates random values between 1 and 6 and updates the displayed values on the dice in the UI.

### **Step 4-5:**
```javascript
const updateStats = () => {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
};

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    rollDice();
    updateStats();
  }
});
```
- `updateStats` updates the number of rolls and the current round on the UI.
- When the `rollDiceBtn` is clicked, it checks if the user has rolled three times in the current round. If not, it increments the roll count and triggers the dice roll and stats update.

### **Step 6:**
```javascript
const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;
  scoreInputs[index].value = score;
  scoreSpans[index].textContent = `, score = ${score}`;
};
```
- This function updates the score input options. It enables the radio button at the specified `index`, sets its value to the `score`, and displays the score next to the corresponding span.

### **Step 7:**
```javascript
const getHighestDuplicates = (arr) => {
  const counts = {};

  for (const num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  let highestCount = 0;

  for (const num of arr) {
    const count = counts[num];
    if (count >= 3 && count > highestCount) {
      highestCount = count;
    }
    if (count >= 4 && count > highestCount) {
      highestCount = count;
    }
  }

  const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

  if (highestCount >= 4) {
    updateRadioOption(1, sumOfAllDice);
  }

  if (highestCount >= 3) {
    updateRadioOption(0, sumOfAllDice);
  }

  updateRadioOption(5, 0);
};
```
- This function checks for the highest duplicates in the rolled dice. If there are 3 or 4 of the same value, it updates the score input options accordingly.

### **Step 8:**
```javascript
const resetRadioOptions = () => {
  scoreInputs.forEach((input) => {
    input.disabled = true;
    input.checked = false;
  });

  scoreSpans.forEach((span) => {
    span.textContent = "";
  });
};
```
- Resets all the radio buttons and their displayed scores.

### **Step 9:**
```javascript
const updateScore = (selectedValue, achieved) => {
  score += parseInt(selectedValue);
  totalScoreElement.textContent = score;

  scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};
```
- Updates the total score with the selected value and displays the action in the score history.

### **Step 10-11:**
```javascript
keepScoreBtn.addEventListener("click", () => {
  let selectedValue;
  let achieved;

  for (const radioButton of scoreInputs) {
    if (radioButton.checked) {
      selectedValue = radioButton.value;
      achieved = radioButton.id;
      break;
    }
  }

  if (selectedValue) {
    rolls = 0;
    round++;
    updateStats();
    resetRadioOptions();
    updateScore(selectedValue, achieved);
    if (round > 6) {
      setTimeout(() => {
        alert(`Game Over! Your total score is ${score}`);
      }, 500);
    }
  } else {
    alert("Please select an option or roll the dice");
  }
});
```
- When the `keepScoreBtn` is clicked, it checks which score option was selected, updates the score, increments the round, and checks if the game is over after 6 rounds.

### **Step 12:**
```javascript
const resetGame = () => {
  diceValuesArr = [0, 0, 0, 0, 0];
  score = 0;
  round = 1;
  rolls = 0;

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });

  totalScoreElement.textContent = score;
  scoreHistory.innerHTML = "";

  rollsElement.textContent = rolls;
  roundElement.textContent = round;

  resetRadioOptions();
};
```
- Resets the game state (dice values, score, rounds, etc.) and updates the UI accordingly.

### **Step 13:**
```javascript
const detectFullHouse = (arr) => {
  const counts = {};

  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  const hasThreeOfAKind = Object.values(counts).includes(3);
  const hasPair = Object.values(counts).includes(2);

  if (hasThreeOfAKind && hasPair) {
    updateRadioOption(2, 25);
  }

  updateRadioOption(5, 0);
};
```
- This function checks if the player has a Full House (3 of one kind and 2 of another). If so, it updates the score option for Full House.