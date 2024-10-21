
**Step 60-61:**
- Define the `.bb3` class with:
  - **Width:** 10%
  - **Height:** 55%
  - **Background:** Using `repeating-linear-gradient` with a 90-degree direction, combining the colors `var(--building-color3)` and `var(--window-color3)` (15% is the spacing between the colors).

```css
.bb3 {
  width: 10%;
  height: 55%;
  background: repeating-linear-gradient(
      90deg,
      var(--building-color3),
      var(--building-color3),
      var(--window-color3) 15%
  );
}
```

**Step 62:**
- Create a div with the class `.bb4` containing three child elements (`.bb4a`, `.bb4b`, `.bb4c`).

```html
<div class="bb4">
  <div class="bb4a"></div>
  <div class="bb4b"></div>
  <div class="bb4c"></div>
</div>
```

**Step 63:**
- Define the child classes of `.bb4`:
  - `.bb4a`: width 3%, height 10%.
  - `.bb4b`: width 80%, height 5%.
  - `.bb4c`: width 100%, height 85%.

```css
.bb4a {
  width: 3%;
  height: 10%;
}

.bb4b {
  width: 80%;
  height: 5%;
}

.bb4c {
  width: 100%;
  height: 85%;
}
```

**Step 64:**
- Update the definition for the `.bb4` class and its child classes to set the background color:
  - `.bb4`: width 11%, height 58%.
  - All child classes (`.bb4a`, `.bb4b`, `.bb4c`) have the background color `var(--building-color4)`.

```css
.bb4 {
  width: 11%;
  height: 58%;
}

.bb4a {
  width: 3%;
  height: 10%;
  background-color: var(--building-color4);
}

.bb4b {
  width: 80%;
  height: 5%;
  background-color: var(--building-color4);
}

.bb4c {
  width: 100%;
  height: 85%;
  background-color: var(--building-color4);
}
```

**Step 65-66:**
- Create the `.building-wrap` class to center the child elements using Flexbox:
  - `display: flex`
  - `flex-direction: column`
  - `align-items: center`

```css
.building-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

- Define the `.bb1` class with a width of 10% and a height of 70%.

```css
.bb1 {
  width: 10%;
  height: 70%;
}
```

**Step 67:**
- Create a div for the `.bb1` class, including four child elements (`.bb1a`, `.bb1b`, `.bb1c`, `.bb1d`).

```html
<div class="bb1 building-wrap">
  <div class="bb1a bb1-window"></div>
  <div class="bb1b bb1-window"></div>
  <div class="bb1c bb1-window"></div>
  <div class="bb1d"></div>
</div>
```

**Step 68:**
- Declare color variables in `:root` for use in the classes.

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
  --window-color1: black;
  --window-color2: #8cd9b3;
  --window-color3: #d98cb3;
  --window-color4: #8cb3d9;
}
```

**Step 69:**
- Create a div for the `.bb4c`, containing four windows.

```html
<div class="bb4c">
  <div class="bb4-window"></div>
  <div class="bb4-window"></div>
  <div class="bb4-window"></div>
  <div class="bb4-window"></div>
</div>
```

**Step 70:**
- Define the style for `.bb4-window` with a width of 18% and a height of 90%, using the color `var(--window-color4)`.

```css
.bb4-window {
  width: 18%;
  height: 90%;
  background-color: var(--window-color4);
}
```

**Step 71:**
- Define the class `.window-wrap` with Flexbox to center and evenly distribute the windows.

```css
.window-wrap {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
```

**Step 72:**
- Create a div for the `.bb4c` and add the class `.window-wrap`.

```html
<div class="bb4c window-wrap">
  <div class="bb4-window"></div>
  <div class="bb4-window"></div>
  <div class="bb4-window"></div>
  <div class="bb4-window"></div>
</div>
```

**Step 73:**
- Create a div for the `.fb1`, including three child elements.

```html
<div class="fb1">
  <div class="fb1a"></div>
  <div class="fb1b"></div>
  <div class="fb1c"></div>
</div>
```

**Step 74:**
- Define the width and height for `.fb1b` and `.fb1c`.

```css
.fb1b {
  width: 60%;
  height: 10%;
}

.fb1c {
  width: 100%;
  height: 80%;
}
```

**Step 75:**
- Add the `building-wrap` class to `.fb1`.

```html
<div class="fb1 building-wrap">
  <div class="fb1a"></div>
  <div class="fb1b"></div>
  <div class="fb1c"></div>
</div>
```

**Step 76:**
- Define the width and height for the `.fb1` class.

```css
.fb1 {
  width: 10%;
  height: 60%;
}
```

**Step 77:**
- Change the background style for `.fb1c` to become transparent.

```css
.fb1c {
  width: 100%;
  height: 80%;
  background: repeating-linear-gradient(
    90deg,
    var(--building-color4) 0%,
    var(--building-color4) 10%,
    transparent 10%,
    transparent 15%
  );
}
```

**Step 78:**
- Combine two gradients for `.fb1c`.

```css
.fb1c {
  width: 100%;
  height: 80%;
  background: repeating-linear-gradient(
    90deg,
    var(--building-color4) 0%,
    var(--building-color4) 10%,
    transparent 10%,
    transparent 15%
  ),
  repeating-linear-gradient(
    var(--building-color4) 0%,
    var(--building-color4) 10%,
    var(--window-color4) 10%,
    var(--window-color4) 90%
  );
}
```

**Step 79-80:**
- Define the style for `.fb1a` with border properties.

```css
.fb1a {
  border-bottom: 7vh solid var(--building-color4);
  border-left: 2vw solid transparent;
  border-right: 2vw solid transparent;
}
```

**Step 81:**
- Create a div for the `.fb2`, containing two child elements.

```html
<div class="fb2">
  <div class="fb2a"></div>
  <div class="fb2b"></div>
</div>
```

**Step 82:**
- Define the width for `.fb2a` and the height for `.fb2b`.

```css
.fb2a {
  width: 100%;
}

.fb2b {
  width: 100%;
  height: 75%;
}
```

**Step 83-84:**
- Add the `window-wrap` class to `.fb2b` with child windows.

```html
<div class="fb2b window-wrap">
  <div class="fb2-window"></div>
  <div class="fb2-window"></div>
  <div class="fb2-window"></div>
</div>
```

**Step 85:**
- Define the width and height for `.fb2-window`.

```css
.fb2-window {
  width: 22%;
  height: 100%;
  background-color: var(--window-color3);
}
```

**Step 86:**
- Define the width and height for the `.fb2` class.

```css
.fb2 {
  width: 15%;
  height: 65%;
}
```

**Step 87:**
- Change the background color for `.fb2a`.

```css
.fb2a {
  height: 20%;
  background-color: var(--building-color1);
}
```

**Step 88:**
- Create a div for the `.

fb3`, including four child elements.

```html
<div class="fb3">
  <div class="fb3a"></div>
  <div class="fb3b"></div>
  <div class="fb3c"></div>
  <div class="fb3d"></div>
</div>
```

**Step 89:**
- Define the width and height for `.fb3a` and `.fb3b`.

```css
.fb3a {
  width: 100%;
  height: 20%;
}

.fb3b {
  width: 100%;
  height: 20%;
}
```

**Step 90:**
- Define the width and height for the `.fb3` class.

```css
.fb3 {
  width: 15%;
  height: 60%;
}
```

**Step 91:**
- Add the `building-wrap` class to `.fb3`.

```html
<div class="fb3 building-wrap">
  <div class="fb3a"></div>
  <div class="fb3b"></div>
  <div class="fb3c"></div>
  <div class="fb3d"></div>
</div>
```

**Step 92:**
- Create a div for `.fb3a` with child windows.

```html
<div class="fb3a window-wrap">
  <div class="fb3-window"></div>
  <div class="fb3-window"></div>
  <div class="fb3-window"></div>
  <div class="fb3-window"></div>
</div>
```

**Step 93:**
- Define the style for `.fb3-window`.

```css
.fb3-window {
  width: 20%;
  height: 100%;
  background-color: var(--window-color1);
}
```

**Step 94:**
- Add the `window-wrap` class to `.fb3a`.

```html
<div class="fb3a window-wrap">
  <div class="fb3-window"></div>
  <div class="fb3-window"></div>
  <div class="fb3-window"></div>
  <div class="fb3-window"></div>
</div>
```

**Step 95:**
- Redefine the color variables in `:root` for use in the classes.

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
  --window-color1: black;
  --window-color2: #8cd9b3;
  --window-color3: #d98cb3;
  --window-color4: #8cb3d9;
}
```

**Step 96:**
- Create a div for the `.fb4`, including two child elements.

```html
<div class="fb4">
  <div class="fb4a"></div>
  <div class="fb4b"></div>
</div>
```

**Step 97:**
- Define the width and height for `.fb4b`.

```css
.fb4b {
  width: 100%;
  height: 70%;
}
```

**Step 98:**
- Change the background color for `.fb4b` and define the background color for `.fb4`.

```css
.fb4 {
  width: 15%;
  height: 70%;
}

.fb4b {
  background-color: var(--window-color4);
}
```

**Step 99:**
- Add windows to the div `.fb4b`.

```html
<div class="fb4b window-wrap">
  <div class="fb4-window"></div>
  <div class="fb4-window"></div>
</div>
```

**Step 100:**
- Define the style for `.fb4-window` with rounded corners.

```css
.fb4-window {
  width: 25%;
  height: 100%;
  background-color: var(--window-color2);
  border-radius: 5px;
}
```