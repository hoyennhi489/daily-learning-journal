
---

**Step 131:**
```javascript
xp += monsters[fighting].level;
```
- `xp += monsters[fighting].level;` is a shorthand way to update the experience points (xp) when the player fights a monster.
- `monsters[fighting].level` retrieves the current monster's level and adds it to the existing xp value.

**Step 132-133:**
```javascript
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
}
```
- The two lines above update the interface to display the new values of gold and xp after the player earns more gold or experience from the battle.
  + `goldText.innerText = gold;` sets the value of `goldText` to the current amount of gold.
  + `xpText.innerText = xp;` sets the value of `xpText` to the current experience points (xp).
- `update(locations[4]);` calls the `update` function with the fifth location in the `locations` array (since arrays are zero-indexed).
  + This takes the player to a different location in the game, completing the event after defeating the monster.

**Step 134-135:**
```javascript
locations.push({
  name: "kill monster",
  "button text": ['Go to town square', 'Go to town square', 'Go to town square'],
  "button functions": [goTown, goTown, goTown],
  text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
});
```

**Step 136:**
```javascript
function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}
```
- `monsterStats.style.display = "none";` hides the element containing the monster's stats.
- When the `update` function is called, the screen updates to no longer display the monster's information, signaling to the player that the monster has been defeated.

**Step 137:**
```javascript
function lose() {
  update(locations[5]);
}
```

**Step 138:**
```javascript
function restart() {
  // Reset variable values when the game restarts
  xp = 0;
  health = 100;
  gold = 50;
  currentWeaponIndex = 0;
  inventory = ["stick"];

  // Update the display to match the new values
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;

  // Return to the town center area
  goTown();
}
```

**Step 139:**
```javascript
locations.push({
  name: "lose",
  "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
  "button functions": [restart, restart, restart],
  text: "You die. &#x2620;"
});
```
- This object represents the "lose" state in the game. When the player loses, the screen displays a message with a skull icon.
- The Unicode symbol `&#x2620;` (skull and crossbones) adds a visual element to the loss message.
- All three buttons display "REPLAY?" and are linked to the `restart` function, allowing the player to restart the game from any button click.

**Step 140:**
```javascript
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
  health -= monsters[fighting].level;
  monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
}
```

**Step 141:**
```javascript
function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}
```
- `innerHTML` allows you to display special HTML characters like ☠ (skull and crossbones) properly within the `text` element.
- The update switches from `text.innerText` to `text.innerHTML` so the content can include HTML (like special character codes).

**Step 142:**
```javascript
function winGame() {
  // Call update and pass locations[6] as an argument
  update(locations[6]);
}
```

**Step 143:**
```javascript
{
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620; "
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
  }
```

**Step 144:**
```javascript
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
}
```

**Step 145-149:**
```javascript
function getMonsterAttackValue(monsterLevel) {
  let hit = monsterLevel + Math.floor(Math.random() * 10) + 1;  // Calculate the attack value
  console.log(hit);  // Log the attack value to the console for checking
  return hit > 0 ? hit : 0;  // Use a conditional operator to ensure the hit value isn't negative
}
```

**Step 150-151:**
```javascript
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
}
```
- `isMonsterHit()` function: You need to define how the `isMonsterHit()` function works. For example, it can be based on the player's attack accuracy or success chance. It will return `true` if the player hits the monster, and `false` if not.
- `if` block: When `isMonsterHit()` returns true, `monsterHealth` will decrease, showing that the monster was hurt by the player's attack.
- `else` block: If `isMonsterHit()` returns false (meaning the player missed), the text will display "You miss."

**Step 152-153:**
```javascript
function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}
```
- `Math.random() > 0.2`: Check if the random number is greater than 0.2 (this is part of the condition).
- `health < 20`: If the player's health is below 20, they will always hit the monster, regardless of the random chance.
- `|| (OR operator)`: If either condition is true, the function returns `true`, meaning the player hits the monster. Otherwise, it returns `false`.
- **Feature**: 
  + The player has an 80% chance to hit the monster if their health is 20 or more.
  + If the player's health is less than 20, they will always hit the monster, regardless of the random chance.


**Step 154-157:**
```javascript
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;    
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 2) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeaponIndex--;
  }
}
```
- **New Feature**: 10% chance for the weapon to break after each attack, if the player has more than one item in their inventory.
- `inventory.pop()` removes the last item from the inventory.
- `currentWeaponIndex--` decreases the index of the current weapon by 1, indicating that the player has lost their weapon.



**Step 158:**
```javascript
function easterEgg() {
  update(locations[7]);
}
```
- The `easterEgg` function will trigger an update to the location that contains the secret game (location 7).



**Step 159:**
```javascript
function pick(guess) {
  // Placeholder for the logic to handle player's guess
}
```
- A placeholder function for handling the player’s pick. The function is likely designed to check if the guess matches the random numbers.



**Step 160:**
```javascript
function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}
```
- These two functions call `pick()` with the player’s guess being either `2` or `8`.



**Step 161:**
```javascript
{
  name: "easter egg",
  "button text": ["2", "8", "Go to town square?"],
  "button functions": [pickTwo, pickEight, goTown],
  text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
}
```
- This is the configuration for the "easter egg" location in the game.
- It prompts the player to pick a number (either 2 or 8), and explains the game mechanics where the player tries to guess a randomly chosen number.



**Step 162-172:**
```javascript
function pick(guess) {
  const numbers = [];  // Initialize an array for random numbers
  while (numbers.length < 10) {
    // Repeat until there are 10 elements in the array
    numbers.push(Math.floor(Math.random() * 11));  // Generate random number between 0 and 10
  }
  
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";  
  // Display the player's choice and the list of random numbers
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";  // Add random number to the text
  }
  
  if (numbers.includes(guess)) {  // Check if the player guessed correctly
    text.innerText += "Right! You win 20 gold!";  
    // If correct, the player wins 20 gold
    gold += 20;
    goldText.innerText = gold;  // Update the gold display
  } else {
    text.innerText += "Wrong! You lose 10 health!";  
    // If incorrect, the player loses 10 health points
    health -= 10;
    healthText.innerText = health;  // Update the health display
    if (health <= 0) {
      lose();  // Trigger the lose function if health reaches 0
    }
  }
}
```
- The `pick()` function generates 10 random numbers between 0 and 10.
- If the player's guess is included in the list, they win 20 gold. If not, they lose 10 health points.
- The function also checks for the condition when the player’s health drops to zero, calling the `lose()` function if needed.



**Step 173:**
```javascript
{
  name: "kill monster",
  "button text": ["Go to town square", "Go to town square", "Go to town square"],
  "button functions": [goTown, goTown, easterEgg],  // Change the third goTown to easterEgg
  text: "The monster screams \"Arg!\" as it dies. You gain experience points and find gold."
}
```
- This is the updated configuration for the "kill monster" location. 
- The third button now triggers the `easterEgg()` function, which leads the player to the secret game after defeating the monster.

---