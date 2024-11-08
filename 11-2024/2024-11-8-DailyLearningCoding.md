
---
**Step 31:**  
```javascript
function goStore() {

}
```
- `function` is the keyword used to declare a function.  
- `goStore` is the name of the function, in this case, `goStore`.  
- `{ }` is the block of code for the function, currently empty because this is a blank function as required.  

**Step 32:**  
```javascript
function goStore() {
  console.log("Going to store.");
}
```
- `console.log("Going to store.");`: Prints the text "Going to store." to the console when the function is called.  

**Step 33:**  
```javascript
function goCave() {
  console.log("Going to cave.");
}
```

**Step 34:**  
```javascript
function fightDragon() {
  console.log("Fighting dragon.");
}
```

**Step 35:** Below is how to add comments in JavaScript to mark the initialization of buttons:  
```javascript
// initialize buttons
```

**Step 36:** Below is how to set the `onclick` property for `button1` to call the `goStore` function when the button is clicked:  
```javascript
button1.onclick = goStore;
```
- `button1.onclick = goStore;`: Uses dot notation to assign the `onclick` property of `button1` to the `goStore` function. When `button1` is clicked, the `goStore` function will be called.  
No need to use `let` or `const` because `button1` has already been declared before.

**Step 37:**  
```javascript
// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
```

**Step 38:**  
```javascript
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
}
```
- `button1.innerText = "Buy 10 health (10 gold)";`: Uses the `innerText` property to change the text of `button1` to "Buy 10 health (10 gold)".  
- When the `goStore` function is called (after the button is clicked), this line will update the text displayed on `button1`.

**Step 39:**  
```javascript
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
}
```

**Step 40-41:**  
```javascript
function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}
```

**Step 42:**  
```javascript
function buyHealth() {

}

function buyWeapon() {

}

function goTown() {

}
```

**Step 43:**  
```javascript
function goTown() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}

function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button2.innerText = "Buy weapon (30 gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}
```

**Step 44:**  
```javascript
function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says Store.";
}
```

**Step 45:**  
```javascript
function goTown() {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}
```
- Surround the word "Store" in the `text.innerText` property with quotation marks. Since the string is already surrounded by quotation marks, you need to escape the quotes around "Store" with a backslash (`\`). With this change, the word "Store" will display correctly in quotation marks in the game interface.

**Step 46:**  
```javascript
function update(location) {

}
```

**Step 47:**  
```javascript
const locations = [];
```
- This variable `locations` is an empty array used to store the locations in your game.

**Step 48-50:**  
```javascript
const cat = {
  name: "Whiskers",
  "Number of legs": 4,
}
console.log(cat)
```

**Step 51:**  
```javascript
console.log(cat.name)
```

**Step 52:**  
```javascript
// Access the "Number of legs" property using bracket notation
console.log(cat["Number of legs"]);  // Output: 4
```

**Step 53:** Delete the `cat` object and the `console.log()` statement.

**Step 54-59:**  
```javascript
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  }
];
```

**Step 60:**  
```javascript
function update(location) {
  button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"Store\".";
}

function goTown() {

}

function goStore() {

}
```
