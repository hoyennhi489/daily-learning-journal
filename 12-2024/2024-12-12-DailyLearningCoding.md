### **Step 31-32**
```javascript
if (this.position.x < this.width) {
  this.position.x = this.width;
}
```
- Ensures that the player does not move outside the left boundary of the canvas.
- If the player's position (`this.position.x`) is less than the player's width (`this.width`), it sets the position to the limit (`this.width`).

### **Step 33-34**
```javascript
if (this.position.x >= canvas.width - this.width * 2) {
  this.position.x = canvas.width - this.width * 2;
}
```
- Ensures that the player does not move outside the right boundary of the canvas.
- If `this.position.x` exceeds the right boundary (`canvas.width - this.width * 2`), the player's position is adjusted to the limit.

### **Step 35**
```javascript
const player = new Player();
```
- Creates an instance of the `Player` class.
- This instance represents the player in the game.

### **Step 36-38**
```javascript
const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";
  player.draw();
}
```
- The `startGame` function starts the game.
  - Displays the canvas (`canvas.style.display = "block"`).
  - Hides the start screen (`startScreen.style.display = "none"`).
  - Draws the player for the first time by calling the `player.draw()` method.

### **Step 39**
```javascript
startBtn.addEventListener("click", startGame);
```
- Attaches a `click` event to the start button (`startBtn`).
- When the button is clicked, the `startGame` function is executed.

### **Step 40-43**
```javascript
const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
}
```
- The `animate` function creates a loop to update and redraw everything in the game.
  - `requestAnimationFrame(animate)`: Recursively calls itself to create a loop.
  - `ctx.clearRect(...)`: Clears the canvas content before each frame.
  - `player.update()`: Updates the player's state and position.

### **Step 44-45**
```javascript
const keys = {
  rightKey: { pressed: false },
  leftKey: { pressed: false }
};
```
- The `keys` object stores the state of control keys.
  - `rightKey.pressed`: Indicates whether the right arrow key is pressed.
  - `leftKey.pressed`: Indicates whether the left arrow key is pressed.


### **Step 46-49**
```javascript
const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }
}
```
- Updates the player's velocity (`velocity.x`) based on key presses:
  - If the right key (`rightKey.pressed`) is pressed and `position.x` has not exceeded the right boundary, increase velocity positively.
  - If the left key (`leftKey.pressed`) is pressed and `position.x` has not exceeded the left boundary, increase velocity negatively.
  - Otherwise, stop movement (`velocity.x = 0`).

### **Step 50-58**
```javascript
const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }

  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 8;
      break;
    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity;
  }
}
```
- The `movePlayer` function handles the player's movement:
  - If checkpoint collision detection is inactive (`!isCheckpointCollisionDetectionActive`), stop all movement.
  - Handles control keys through a `switch`:
    - `"ArrowLeft"`: Decrease horizontal speed (move left).
    - `"ArrowUp"`, `" "` or `"Spacebar"`: Jump (reduce vertical speed).
    - `"ArrowRight"`: Increase horizontal speed (move right).


### **Step 59-60**
```javascript
window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
});
```
- Listens for `keydown` events on the entire window.
- Calls the `movePlayer` function when a key is pressed.
  - Passes the key (`key`), velocity (`8`), and `pressed` state as `true`.