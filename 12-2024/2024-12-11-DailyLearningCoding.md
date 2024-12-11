**Learn Intermediate OOP by Building a Platformer Game.**

**Step 1-9: Initial setup**
1. **Retrieve elements from the DOM**:
   ```javascript
   const startBtn = document.getElementById("start-btn");
   const canvas = document.getElementById("canvas");
   const startScreen = document.querySelector(".start-screen");
   const checkpointScreen = document.querySelector(".checkpoint-screen");
   const checkpointMessage = document.querySelector(".checkpoint-screen > p");
   ```
   - `startBtn`: The start button of the game.
   - `canvas`: The canvas element, where the game will be rendered.
   - `startScreen`: The initial start screen of the game.
   - `checkpointScreen`: The screen displayed when the player reaches a checkpoint.
   - `checkpointMessage`: The text inside the checkpoint screen.

2. **Set up the canvas**:
   ```javascript
   const ctx = canvas.getContext("2d");
   canvas.width = innerWidth;
   canvas.height = innerHeight;
   ```
   - `ctx`: The 2D rendering context of the canvas.
   - The canvas is sized to fit the entire width (`innerWidth`) and height (`innerHeight`) of the browser window.

3. **Define additional variables**:
   ```javascript
   const gravity = 0.5;
   let isCheckpointCollisionDetectionActive = true;
   ```
   - `gravity`: The gravity value (pulls objects downward).
   - `isCheckpointCollisionDetectionActive`: A boolean used to check if checkpoint collision detection is active.

---
**Step 10-11: Proportional size function**

```javascript
const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
}
```
- This function calculates the size of objects on the screen based on the height of the browser window.
- If the screen height (`innerHeight`) is less than 500px, the size is adjusted proportionally.

---
**Step 12-30: The `Player` class**

**Constructor: Initialize the player**
```javascript
class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }
}
```
- **`position`**: The initial position of the player (`x=10, y=400` scaled proportionally).
- **`velocity`**: The initial velocity (no movement).
- **`width`, `height`**: The size of the player (40x40 pixels, adjusted proportionally).

**`draw` method: Render the player**
```javascript
draw() {
  ctx.fillStyle = "#99c9ff";
  ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}
```
- The player is drawn on the canvas with a light blue color (`#99c9ff`).

**`update` method: Update player state**
```javascript
update() {
  this.draw(); // Draw the player
  this.position.x += this.velocity.x; // Update position on the x-axis
  this.position.y += this.velocity.y; // Update position on the y-axis
```

1. **Falling due to gravity**:
   ```javascript
   if (this.position.y + this.height + this.velocity.y <= canvas.height) {
     if (this.position.y < 0) {
       this.position.y = 0;
       this.velocity.y = gravity;
     }
     this.velocity.y += gravity;
   } else {
     this.velocity.y = 0;
   }
   ```
   - The player falls due to gravity (incrementing `velocity.y`).
   - If the player hits the bottom of the canvas, the vertical velocity is reset to 0.

2. **Restrict horizontal movement**:
   ```javascript
   if (this.position.x < this.width) {
     this.position.x = this.width;
   }
   if (this.position.x >= canvas.width - this.width * 2) {
     this.position.x = canvas.width - this.width * 2;
   }
   ```
   - Prevent the player from going beyond the left edge (must be greater than `this.width`).
   - Prevent the player from exceeding the right edge (must be less than `canvas.width - this.width * 2`).