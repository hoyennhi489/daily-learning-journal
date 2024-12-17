
### Step 78-79:
```javascript
if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
  platforms.forEach((platform) => {
    platform.position.x -= 5;
  });
}
```

- **Condition: `keys.rightKey.pressed && isCheckpointCollisionDetectionActive`**:  
   - Checks if the right key is pressed and checkpoint collision detection is active.  

- **`platforms.forEach(...)`**:  
   - Loops through all platforms and moves their `x` position **leftward** by decreasing `platform.position.x` by 5.  
   - This creates the effect of the platforms scrolling to the left as the player moves to the right.  

### Step 80:
```javascript
} else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
  platforms.forEach((platform) => {
    platform.position.x += 5;
  });
}
```

- **Condition: `keys.leftKey.pressed && isCheckpointCollisionDetectionActive`**:  
   - Checks if the left key is pressed and checkpoint collision detection is active.  

- **`platforms.forEach(...)`**:  
   - Loops through all platforms and moves their `x` position **rightward** by increasing `platform.position.x` by 5.  
   - This creates the effect of the platforms scrolling to the right as the player moves to the left.  

### Step 81-92:
```javascript
platforms.forEach((platform) => {
  const collisionDetectionRules = [
    player.position.y + player.height <= platform.position.y,
    player.position.y + player.height + player.velocity.y >= platform.position.y,
    player.position.x >= platform.position.x - player.width / 2,
    player.position.x <= platform.position.x + platform.width - player.width / 3,
  ];

  if (collisionDetectionRules.every((rule) => rule)) {
    player.velocity.y = 0;
    return;
  }

  const platformDetectionRules = [
    player.position.x >= platform.position.x - player.width / 2,
    player.position.x <= platform.position.x + platform.width - player.width / 3,
    player.position.y + player.height >= platform.position.y,
    player.position.y <= platform.position.y + platform.height,
  ];

  if (platformDetectionRules.every((rule) => rule)) {
    player.position.y = platform.position.y + player.height;
    player.velocity.y = gravity;
  }
});
```

1. **`collisionDetectionRules`**:  
   - Defines rules for detecting whether the player is **landing on a platform**.  
   - Conditions include:  
     - Player's bottom edge is above the platform's top edge.  
     - Player's next position (considering velocity) will collide with the platform.  
     - Player is within the horizontal boundaries of the platform.  

2. **`if (collisionDetectionRules.every((rule) => rule))`:**  
   - Checks if **all collision detection rules** are true. If so:  
     - Sets `player.velocity.y` to `0`, stopping downward movement.  

3. **`platformDetectionRules`**:  
   - Defines rules for **general collision with the platform** (e.g., from sides or bottom).  

4. **`if (platformDetectionRules.every((rule) => rule))`:**  
   - If the player is detected colliding with the platform, their position is adjusted:  
     - Sets the player's `y` position to just below the platform's top.  
     - Sets `player.velocity.y` to `gravity` to maintain downward force.  

### Step 93-99:
```javascript
class CheckPoint {
  constructor(x, y, z) {
    this.position = { x, y };
    this.width = proportionalSize(40);
    this.height = proportionalSize(70);
    this.claimed = false;
  }

  draw() {
    ctx.fillStyle = "#f1be32";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  claim() {
    this.width = 0;
    this.height = 0;
    this.position.y = Infinity;
    this.claimed = true;
  }
}
```

1. **`CheckPoint` class**:  
   - Represents a checkpoint object in the game.  

2. **Constructor parameters: `x, y, z`**:  
   - `x` and `y`: Coordinates for the checkpoint's position.  
   - `z`: An optional parameter that could indicate the checkpoint's order or level.  

3. **`this.claimed`**:  
   - Tracks whether the checkpoint has been "claimed" by the player.  

4. **`draw()`**:  
   - Draws the checkpoint as a rectangle filled with the color `#f1be32` (yellow-orange).  

5. **`claim()`**:  
   - When a checkpoint is claimed:  
     - Sets its width and height to `0`.  
     - Moves its position to an unreachable location (`Infinity`).  
     - Marks `claimed` as `true`.  

### Step 100:
```javascript
const checkpointPositions = [
  { x: 1170, y: proportionalSize(80), z: 1 },
  { x: 2900, y: proportionalSize(330), z: 2 },
  { x: 4800, y: proportionalSize(80), z: 3 },
];
```

- Stores predefined positions for checkpoints, including `x`, `y` coordinates and an optional `z` index.  

### Step 101:
```javascript
const checkpoints = checkpointPositions.map(
  (checkpoint) => new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z)
);
```

- Converts `checkpointPositions` into an array of `CheckPoint` objects using `map()`.  

---

### Step 102:
```javascript
checkpoints.forEach((checkpoint) => {
  checkpoint.draw();
});
```

- Draws all checkpoints on the screen.  

### Step 103:
```javascript
checkpoints.forEach((checkpoint) => {
  checkpoint.position.x -= 5;
});
```

- Moves all checkpoints **leftward** by adjusting their `x` position.  

### Step 104:
```javascript
checkpoints.forEach((checkpoint) => {
  checkpoint.position.x += 5;
});
```

- Moves all checkpoints **rightward** by adjusting their `x` position.  

### Step 105-108:
```javascript
const showCheckpointScreen = (msg) => {
  checkpointScreen.style.display = "block";
  checkpointMessage.textContent = msg;
  if (isCheckpointCollisionDetectionActive) {
    setTimeout(() => (checkpointScreen.style.display = "none"), 2000);
  }
};
```

- Displays a checkpoint notification screen with a custom message (`msg`).  
- Hides the screen after **2 seconds** if collision detection is active.  

### Step 109-117:
```javascript
checkpoints.forEach((checkpoint, index, checkpoints) => {
  const checkpointDetectionRules = [
    player.position.x >= checkpoint.position.x,
    player.position.y >= checkpoint.position.y,
    player.position.y + player.height <= checkpoint.position.y + checkpoint.height,
    isCheckpointCollisionDetectionActive,
    player.position.x - player.width <= checkpoint.position.x - checkpoint.width + player.width * 0.9,
    index === 0 || checkpoints[index - 1].claimed === true,
  ];

  if (checkpointDetectionRules.every((rule) => rule)) {
    checkpoint.claim();

    if (index === checkpoints.length - 1) {
      isCheckpointCollisionDetectionActive = false;
      showCheckpointScreen("You reached the final checkpoint!");
      movePlayer("ArrowRight", 0, false);
    } else if (player.position.x >= checkpoint.position.x && player.position.x <= checkpoint.position.x + 40) {
      showCheckpointScreen("You reached a checkpoint!");
    }
  }
});
```

1. **`checkpointDetectionRules`**:  
   - Checks for collision between the player and a checkpoint.  

2. **`index === 0 || checkpoints[index - 1].claimed === true`**:  
   - Ensures the player can only claim a checkpoint if the previous one was already claimed.  

3. **If all rules are true:**  
   - Marks the checkpoint as claimed.  
   - Displays the appropriate notification message.  
   - Stops checkpoint detection if the player reaches the final checkpoint.  