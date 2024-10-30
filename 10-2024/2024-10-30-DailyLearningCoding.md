
**Learn CSS Transforms by Building a Penguin**

**Step 1:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Penguin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body></body>
</html>
```

**Step 2-5:**
```css
body {
  background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
```
- **linear-gradient**: A linear gradient creates a smooth color transition.
- **margin and padding**: Adjust the outer and inner spacing of an element.
- **width and height**: Define the size of the element.
- **overflow**: Manages how content that exceeds the size of the element is displayed.

**Step 6:**
```html
<body>
  <div class="ground"></div>
</body>
```

**Step 7-9:**
```css
.ground {
  width: 100vw;
  height: 400px;
  background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
  z-index: 3;
  position: absolute;
}
```

**Step 10:**
```html
<body>
  <div class="penguin"></div>
  <div class="ground"></div>
</body>
```

**Step 11-12:**
```css
.penguin {
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 75px;
}
```

**Step 13:**
```html
<body>
  <div class="left-mountain"></div>
  <div class="penguin"></div>
  <div class="ground"></div>
</body>
```

**Step 14-17:**
```css
.left-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
  position: absolute;
  transform: skew(0deg, 44deg);
  z-index: 2; 
}
```
- **transform: skew(x, y)**: A transform function distorts the shape along two axes.
  + **0deg**: No distortion along the x-axis.
  + **44deg**: Distorts the mountain along the y-axis with an angle of 44 degrees.
- **position**: To use z-index, the element must have its position property set (relative, absolute, or fixed).
- **z-index**: Specifies the stacking order of the element. A higher value will sit above an element with a lower value.

**Step 18:**
```css
.left-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
  position: absolute;
  transform: skew(0deg, 44deg);
  z-index: 2;
  margin-top: 100px;
}

.penguin {
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 75px;
}

.ground {
  width: 100vw;
  height: 400px;
  background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
  z-index: 3;
  position: absolute;
  margin: 100px;
  margin-top: -58px;
}
```

**Step 19:**
```html
<body>
  <div class="left-mountain"></div>
  <div class="back-mountain"></div>
  <div class="penguin"></div>
  <div class="ground"></div>
</body>
```

**Step 20-23:**
```css
.back-mountain {
  width: 300px;
  height: 300px;
  background: linear-gradient(rgb(203, 241, 228), rgb(47, 170, 255));
  position: absolute;
  z-index: 1;
  transform: rotate(45deg);
  left: 110px;
  top: 225px;
}
```

**Step 24:**
```html
<body>
  <div class="left-mountain"></div>
  <div class="back-mountain"></div>
  <div class="sun"></div>
  <div class="penguin"></div>
  <div class="ground"></div>
</body>
```

**Step 25-27:**
```css
.sun {
  width: 200px;
  height: 200px;
  background-color: yellow;
  position: absolute;
  border-radius: 50%;
  top: -75px;
  right: -75px;
}
```

**Step 28:**
```html
<div class="penguin">
  <div class="penguin-head"></div>
  <div class="penguin-body"></div>
</div>
```

**Step 29:**
```css
.penguin {
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 75px;
  position: relative;
  z-index: 4;
}
```

**Step 30-31:**
```css
.penguin-head {
  width: 50%;
  height: 45%;
  background: linear-gradient(45deg, gray, rgb(239, 240, 228));
  border-radius: 70% 70% 65% 65%;
}
```

**Step 32-33:**
```css
.penguin-body {
  width: 53%;
  height: 45%;
  background: linear-gradient(
    45deg,
    rgb(134, 133, 133) 0%,
    rgb(234, 231, 231) 25%,
    white 67%
  );
  border-radius: 80% 80% 100% 100%;
}
```

**Step 34:**
```css
.penguin * {
  position: absolute;
}
```

**Step 35:**
```css
.penguin-head {
  width: 50%;
  height: 45%;
  background: linear-gradient(
    45deg,
    gray,
    rgb(239, 240, 228)
  );
  border-radius: 70% 70% 65% 65%;
  top: 10%;
  left: 25%;
}
```

**Step 36:**
```css
.penguin-body {
  width: 53%;
  height: 45%;
  background: linear-gradient(
    45deg,
    rgb(134, 133, 133) 0%,
    rgb(234, 231, 231) 25%,
    white 67%
  );
  border-radius: 80% 80% 100% 100%;
  top: 40%;
  left: 23.5%;
}
```

**Step 37:**
```css
.penguin-head {
  width: 50%;
  height: 45%;
  background: linear-gradient(
    45deg,
    gray,
    rgb(239, 240, 228)
  );
  border-radius: 70% 70% 65% 65%;
  top: 10%;
  left: 25%;
  z-index: 1; 
}
```

**Step 38-42:**
```css
.penguin-body::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 45%;
  background-color: gray;
  top: 10%;
  left: 25%;
  border-radius: 0% 0% 100% 100%;
  opacity: 70%;
}
```
- **opacity: 70%:** Sets the transparency of the element to 30%.

**Step 44:**
```html
<div class="penguin-head">
  <div class="face"></div>
  <div class="face"></div>
</div>
```

**Step 45-47:**
```css
.face {
  width: 60%;
  height: 70%;
  background-color: white;
  border-radius: 70% 70% 60% 60%;
  top: 15%;
}
```

**Step 48:**
```html
<div class="penguin-head">
  <div class="face left"></div>
  <div class="face right"></div>
</div>
```

**Step 49-50:**
```css
.face.left {
  left: 5%;
}
.face.right {
  right: 5%;
}
```

**Step 51:**
```html
<div class="penguin-head">
  <div class="face left"></div>
  <div class="face right"></div>
  <div class="chin"></div>
</div>
```

**Step 52-53:**
```css
.chin {
  width: 90%;
  height: 70%;
  background-color: white;
  top: 25%;
  left: 5%;
  border-radius: 70% 70% 100% 100%;
}
```

**Step 54:**
```css
:root {
  --penguin-face: white;
}
```
- **--penguin-face:** A CSS variable declared in `:root` to be used in multiple places in the stylesheet.

**Step 55:**
```css
.face {
  width: 60%;
  height: 70%;
  background-color: var(--penguin-face);
  border-radius: 70% 70% 60% 60%;
  top: 15%;
}

.chin {
  width: 90%;
  height: 70%;
  background-color: var(--penguin-face);
  top: 25%;
  left: 5%;
  border-radius: 70% 70% 100% 100%;
}
```