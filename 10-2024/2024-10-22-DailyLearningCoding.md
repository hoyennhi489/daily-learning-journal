**Step 101: Create Circular Windows**
```css
.fb4-window {
  width: 30%; /* Width of the window is 30% of its parent element */
  height: 10%; /* Height of the window is 10% of its parent element */
  border-radius: 50%; /* Makes the window circular */
  background-color: var(--window-color1); /* Uses color from CSS variable */
  margin: 10%; /* Creates a 10% margin around the window */
}
```
- **Purpose**: Creates circular windows with relative sizes, helping to align and structure the building layout.

**Step 102: Set Flexbox for the Building**
```css
.fb4b {
  width: 100%; /* Width of the building element is 100% of its parent */
  height: 89%; /* Height of the building element is 89% of its parent */
  background-color: var(--building-color1); /* Background color for the building */
  display: flex; /* Sets the display to flexbox */
  flex-wrap: wrap; /* Allows windows to wrap to the next line when necessary */
}
```
- **Purpose**: Uses Flexbox to arrange the windows inside the building flexibly.

**Step 103: Create Borders for the Building**
```css
.fb4a {
  border-top: 5vh solid transparent; /* Top border with 5vh height and transparent color */
  border-left: 8vw solid var(--building-color1); /* Left border with 8vw width and building color */
}
```
- **Purpose**: Creates a border effect for the building, giving it a more 3D appearance.

**Step 104: Define Small Building with Gradient**
```css
.fb5 {
  width: 10%; /* Width of the small building is 10% of its parent */
  height: 33%; /* Height of the small building is 33% of its parent */
  position: relative; /* Allows for position adjustments if needed */
  right: 10%; /* Moves the small building 10% to the right */
  background: repeating-linear-gradient(
    var(--building-color2), /* Main background color */
    var(--building-color2) 5%, /* Up to 5% is the main color */
    transparent 5%, /* After 5%, it transitions to transparent */
    transparent 10% /* Up to 10% remains transparent */
  );
}
```
- **Purpose**: Creates a small building with a gradient background, highlighting architectural details.

**Steps 105-106: Add a Second Gradient Layer**
```css
.fb5 {
  background: repeating-linear-gradient(
      var(--building-color2),
      var(--building-color2) 5%,
      transparent 5%,
      transparent 10%
    ),
    repeating-linear-gradient(
      90deg, /* Horizontal gradient */
      var(--building-color2),
      var(--building-color2) 12%, /* Up to 12% is the main color */
      var(--window-color2) 12%, /* After 12%, it transitions to window color */
      var(--window-color2) 44% /* Up to 44% remains window color */
    );
}
```
- **Purpose**: Creates two gradient layers for the small building, adding depth and detail to the design.

**Steps 107-109: Create Vertical Gradient for Another Building**
```css
.fb6 {
  width: 9%; /* Width of the other building */
  height: 38%; /* Height of the other building */
  background: repeating-linear-gradient(
      90deg, /* Vertical gradient */
      var(--building-color3),
      var(--building-color3) 10%, /* Up to 10% is the main color */
      transparent 10%, /* After 10%, it transitions to transparent */
      transparent 30% /* Up to 30% remains transparent */
    ),
    repeating-linear-gradient(
      var(--building-color3),
      var(--building-color3) 10%, /* Up to 10% is the main color */
      var(--window-color3) 10%, /* After 10%, it transitions to window color */
      var(--window-color3) 30% /* Up to 30% remains window color */
    );
}
```
- **Purpose**: Creates a gradient effect for another building, making it stand out and different.

**Step 110: Set Box-Sizing for All Elements**
```css
* {
  box-sizing: border-box; /* Box sizing includes padding and border in width and height */
}
```
- **Purpose**: Ensures that elements are measured consistently, avoiding size issues when adding padding or borders.

### HTML Structure
```html
<div class="background-buildings sky">
  <div></div>
  <div></div>
  <div class="bb1 building-wrap">
    <div class="bb1a bb1-window"></div>
    <div class="bb1b bb1-window"></div>
    <div class="bb1c bb1-window"></div>
    <div class="bb1d"></div>
  </div>
  <div class="bb2">
    <div class="bb2a"></div>
    <div class="bb2b"></div>
  </div>
  <div class="bb3"></div>
  <div></div>
  <div class="bb4 building-wrap">
    <div class="bb4a"></div>
    <div class="bb4b"></div>
    <div class="bb4c window-wrap">
      <div class="bb4-window"></div>
      <div class="bb4-window"></div>
      <div class="bb4-window"></div>
      <div class="bb4-window"></div>
    </div>
  </div>
  <div></div>
  <div></div>
</div>
```
- **HTML Structure**: These elements represent buildings and windows in the context of a cityscape or landscape. The floors of each building are divided into separate classes.

**Steps 111-115: Sky Background with Gradient**
```css
.sky {
  background: radial-gradient(
    circle closest-corner at 15% 15%, /* Circular gradient starting at 15% horizontal and vertical */
    #ffcf33 0%, /* Bright yellow at the center */
    #ffcf33 20%, /* Keep bright yellow until 20% */
    #ffff66 21%, /* Transition to light yellow at 21% */
    #bbeeff 100% /* Transition to light blue at 100% */
  );
}
```
- **Purpose**: Creates a background for the sky, adding a sense of space to the landscape.

**Steps 116-118: Media Queries for Responsive Design**
```css
@media (max-width: 1000px) {
  :root {
    --building-color1: #000; /* Building color when screen is small */
    --window-color1: #777; /* Window color when screen is small */
  }
  .sky {
    background: radial-gradient(
      circle closest-corner at 15% 15%,
      #ccc 0%, /* Gray at the center */
      #ccc 20%, /* Keep gray until 20% */
      #445 21%, /* Transition to dark blue at 21% */
      #223 100% /* Transition to darker blue at 100% */
    );
  }
}
```
- **Purpose**: Adjusts the colors of elements when the screen size is smaller than 1000px, ensuring a flexible and responsive design across different devices.

### Key Points
- **Use of Flexbox**: Flexbox allows for flexible layouts and easy alignment of elements without complex float properties.
- **Gradients**: Using gradients adds depth and richness to the design, making the buildings and sky look more vibrant.
- **Media Queries**: Help adjust the interface when screen sizes change, ensuring a good user experience on all devices.
