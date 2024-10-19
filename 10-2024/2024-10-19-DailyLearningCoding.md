**Step 1-4:**
```html
<!DOCTYPE html>
<html lang="en">    
  <head>
    <meta charset="UTF-8">
    <title>City Skyline</title>
    <link href="styles.css" rel="stylesheet" />
  </head>

  <body>
  </body>
</html>
```

**Step 5-6:**
```css
* {
  border: 1px solid black;
  box-sizing: border-box;
}
```

**Step 7:**
```css
body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}
```
- `overflow: hidden;`: Hides any content that exceeds the size of the body element to prevent a scrollbar from appearing.
- `vh` (viewport height) is a CSS measurement unit representing 1% of the viewport's height (the visible part of the browser). For example:
  + `100vh`: Equal to 100% of the viewport height (full screen height).
  + `50vh`: Equal to 50% of the viewport height (half screen height).

**Step 8:**
```html
<body>
  <div class="background-buildings"></div>
</body>
```

**Step 9:**
```css
.background-buildings {
  width: 100%;
  height: 100%;
}
```

**Step 10-11:**

HTML:
```html
<div class="background-buildings">
  <div class="bb1">
    <div class="bb1a"></div>
    <div class="bb1b"></div>
    <div class="bb1c"></div>
    <div class="bb1d"></div>
  </div>
</div>
```

CSS:
```css
.bb1 {
  width: 10%;
  height: 70%;
}
```

**Step 12:**
```css
.bb1a {
  width: 70%;
  height: 10%;
}

.bb1b {
  width: 80%;
  height: 10%;
}

.bb1c {
  width: 90%;
  height: 10%;
}

.bb1d {
  width: 100%;
  height: 70%;
}
```

**Step 13-14:**
```css
.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  --building-color1: #999;
}
```
- Variables in CSS start with two hyphens (--) following the syntax `--variable-name: value;`.

**Step 15-16:**
```css
.bb1a {
  width: 70%;
  height: 10%;
  background-color: var(--building-color1);
}
.bb1b {
  width: 80%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1c {
  width: 90%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1d {
  width: 100%;
  height: 70%;
  background-color: var(--building-color1);
}
```
- The syntax `var(--variable-name)` is used in CSS to retrieve the value of a previously declared variable and apply it to other CSS properties.

**Step 17:** Change the value of the variable from `#999` to `#aa80ff`.
```css
--building-color1: #aa80ff;
```

**Step 18:**
```html
<div class="bb2"></div>
<div class="bb3"></div>
<div class="bb4"></div>
```

**Step 19:**
```css
.bb2 {
  width: 10%;
  height: 50%;
}

.bb3 {
  width: 10%;
  height: 55%;
}

.bb4 {
  width: 11%;
  height: 58%;
}
```

**Step 20:**
```css
.background-buildings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}
```
### **`align-items:`**
1. **`flex-start`**: Aligns items at the start of the cross axis (top).
2. **`flex-end`**: Aligns items at the end of the cross axis (bottom).
3. **`center`**: Aligns items in the center of the cross axis.
4. **`baseline`**: Aligns items according to the baseline of the text.
5. **`stretch`**: Default; stretches items to occupy the full height of the flex container.

### **`justify-content:`**
1. **`flex-start`**: Aligns items at the start of the main axis (left).
2. **`flex-end`**: Aligns items at the end of the main axis (right).
3. **`center`**: Aligns items in the center of the main axis.
4. **`space-between`**: Distributes items evenly, with no space at the ends.
5. **`space-around`**: Distributes items evenly, creating equal space at the ends.
6. **`space-evenly`**: Distributes items evenly, including space between items and the edges of the container.

**Step 21:**
```html
<div class="background-buildings">
  <div></div>
  <div></div>
  <div class="bb1">
    <div class="bb1a"></div>
    <div class="bb1b"></div>
    <div class="bb1c"></div>
    <div class="bb1d"></div>
  </div>
  <div class="bb2"></div>
  <div class="bb3"></div>
  <div></div>
  <div class="bb4"></div>
  <div></div>
  <div></div>
</div>
```

**Step 22-24:**
```css
.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
}

.bb1a {
  width: 70%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1b {
  width: 80%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1c {
  width: 90%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1d {
  width: 100%;
  height: 70%;
  background-color: var(--building-color1);
}

.bb2 {
  width: 10%;
  height: 50%;
  background-color: var(--building-color2, green);
}

.bb3 {
  width: 10%;
  height: 55%;
  background-color: var(--building-color3, pink);
}
```
- Add a fallback value for a variable in CSS using the syntax `var(--variable-name, fallback-value)`, where the property will use the fallback value if there’s an issue with the variable.

**Step 25:**
```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
}
* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.background-buildings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}

.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```
- Declare variables in CSS should be done in the `:root` selector to ensure they can be used anywhere in the stylesheet.

**Step 26:**
Remove the fallback values:
```css
.bb2 {
  width: 10%;
  height: 50%;
  background-color: var(--building-color2);
}

.bb3 {
  width: 10%;
  height: 55%;
  background-color: var(--building-color3);
}
```

**Step 27:**
```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
}

.bb4 {
  width: 11%;
  height: 58%;
  background-color: var(--building-color4);
}
```

**Step 28:**
```html
<div class="foreground-buildings"></div>
```

**Step 29:**
```css
.foreground-buildings {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
```

**Step 30:**
```html
<div class="foreground-buildings">
  <div class="fb1"></div>
  <div class="fb2"></div>
  <div class="fb3"></div>
  <div class="fb4"></div>
  <div class="fb5"></div>
  <div class="fb6"></div>
</div>
```

**Step 31:**
```css
.fb1 {
  width: 10%;
  height: 60%;
}

.fb2 {
  width: 10%;
  height: 40%;
}

.fb3 {
  width: 10%;
  height: 35%;
}

.fb4 {
  width: 8%;
  height: 45%;
}

.fb5 {
  width: 10%;
  height: 33%;
}

.fb6 {
  width: 9%;
  height: 38%;
}
```

**Step 32:**
```css
.foreground-buildings {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}
```

**Step 33:**
```css
.background-buildings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;  
  position: absolute;
  top: 0;
}

.bb1 {
  width: 10%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bb1a {
  width: 70%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1b {
  width: 80%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1c {
  width: 90%;
  height: 10%;
  background-color: var(--building-color1);
}

.bb1d {
  width: 100%;
  height: 70%;
  background-color: var(--building-color1);
}

.bb2 {
  width: 10%;
  height: 50%;
  background-color: var(--building-color2);
}

.bb3 {
  width: 10%;
  height: 55%;
  background-color: var(--building-color3);
}

.bb4 {
  width: 11%;
  height: 58%;
  background-color: var(--building-color4);
}

.foreground-buildings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
}

.background-buildings, 
.foreground-buildings {
  position: absolute;
  top: 0;
}
```

**Step 34:**
Remove the old declaration of `.foreground-buildings` and all its properties when they are no longer necessary to keep the CSS code clean and easier to manage.

**Step 35:**
```css
.fb1 {
  width: 10%;
  height: 60%;
  background-color: var(--building-color4);
}

.fb2 {
  width: 10%;
  height: 40%;
  background-color: var(--building-color3);
}

.fb3 {
  width: 10%;
  height: 35%;
  background-color: var(--building-color1);
}

.fb4 {
  width: 8%;
  height: 45%;
  background-color: var(--building-color1);
}

.fb5 {
  width: 10%;
  height: 33%;
  background-color: var(--building-color2);
}

.fb6 {
  width: 9%;
  height: 38%;
  background-color: var(--building-color3);
}
```

**Step 36:**
```html
<div class="foreground-buildings">
  <div></div>
  <div></div>
  <div class="fb1"></div>
  <div class="fb2"></div>
  <div></div>
  <div class="fb3"></div>
  <div class="fb4"></div>
  <div class="fb5"></div>
  <div class="fb6"></div>
  <div></div>
  <div></div>
</div>
```

**Step 37:**
```css
.fb4 {
  width: 8%;
  height: 45%;
  background-color: var(--building-color1);
  position: relative;
  left: 10%;
}

.fb5 {
  width: 10%;
  height: 33%;
  background-color: var(--building-color2);
  position: relative;
  right: 10%;
}
```