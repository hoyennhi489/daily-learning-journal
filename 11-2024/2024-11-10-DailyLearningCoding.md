
---

**Step 91:**

```javascript
function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeaponIndex].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon); 
  }
}
```
- The line `inventory.push(newWeapon);` adds the new weapon to the end of the inventory array, ensuring that the player's item list is always updated with the latest weapon they have purchased.

**Step 92-93:**

```javascript
function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeaponIndex].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
  }
}
```
- `text.innerText += " In your inventory you have: ";` adds the string " In your inventory you have: " to the end of `text.innerText` without removing the previous content.
- The `+=` operator allows you to concatenate additional text to the `innerText` variable.

**Step 94:**

```javascript
function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeaponIndex].name;
    text.innerText = "You now have a " + newWeapon + ".";
    inventory.push(newWeapon);
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "You do not have enough gold to buy a weapon.";
  }
}
```

**Step 95:**

```javascript
function buyWeapon() {
  if (currentWeaponIndex < 3) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  }
}
```
- `if (currentWeaponIndex < 3)` checks if the player already has the best weapon. If not, the rest of the code inside the function will run.
- If the player has enough gold, the gold is updated, the new weapon is added to the inventory, and the updated information is displayed on the interface.

**Step 96:**

```javascript
function buyWeapon() {
  if (currentWeaponIndex < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  }
}
```
- `weapons.length - 1` ensures the player can only buy a weapon if they haven't already reached the last weapon in the `weapons` array.
- The code dynamically checks based on the length of the `weapons` array, allowing you to add new weapons in the future without needing to modify the condition.

**Step 97:**

```javascript
let gold = 250;
```

**Step 98-99:**

```javascript
function buyWeapon() {
  if (currentWeaponIndex < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
  }
}
```

**Step 100:**

```javascript
let gold = 50;
```

**Step 101:**

```javascript
function buyWeapon() {
  if (currentWeaponIndex < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}
```

**Step 102-107:**

```javascript
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
  }
}
```
- `gold += 15`: Adds 15 gold to the current amount of gold.
- `goldText.innerText = gold`: Updates the gold amount on the interface.
- `inventory.shift()`: The `shift()` method removes the first element from the inventory array and returns it.
- `let currentWeapon = inventory.shift();`: The first element of the inventory array is assigned to `currentWeapon`, and it is also removed from the inventory.
- `"You sold a "`: This is the starting string for the message.
- `currentWeapon`: This is the variable containing the name of the weapon the player sold, taken from the inventory array after using `shift()`.
- `".":` The period to end the message.
- `text.innerText`: Updates the text content of the element with the message.

**Step 108:**

```javascript
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  }
}
```

**Step 109:**

```javascript
function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}
```

**Step 110:**

```javascript
const monsters = [
  { name: "slime", level: 2, health: 15 },
  { name: "fanged beast", level: 8, health: 60 },
  { name: "dragon", level: 20, health: 300 }
];
```
- `name`: The name of the monster (e.g., "slime", "fanged beast", "dragon").
- `level`: The level of the monster, representing its strength in the game.
- `health`: The health of the monster, which can be tracked and reduced when the monster is attacked.

**Step 111:**

```javascript
function goFight() {
}
```

**Step 112-113:**

```javascript
function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}
```

**Step 114:**

```javascript
function attack() {
}
function dodge() {
}
```

**Step 115:**

```javascript
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says 'Store'."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["

Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  }
];
```

**Step 116-119:**

```javascript
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}
```

**Step 120-127:**

```javascript
function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";

  health -= monsters[fighting].level;  // Monster attacks the player
  monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;  // Player attacks the monster

  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;

  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    defeatMonster();
  }
}
```

**Step 128:**

```javascript
function defeatMonster() {
}

function lose() {
}
```

**Step 129:**

```javascript
function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}
```

**Step 130:**

```javascript
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
}
```
