
**Step 38:**

```css
/* BACKGROUND BUILDINGS - "bb" stands for "background building" */

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

/* FOREGROUND BUILDINGS - "fb" stands for "foreground building" */

.fb1 {
  width: 10%;
  height: 60%;
  background-color: var(--building-color4);
}
```

**Step 39:**

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
  --window-color1: black;
}
```

**Step 40:**

```css
.bb1a {
  width: 70%;
  height: 10%;
  background-color: var(--building-color1);
  background: linear-gradient(
      var(--building-color1),
      var(--window-color1)
    );
}
```

- The syntax for linear-gradient is linear-gradient(direction, color1, color2, ...). In this code, you will use the CSS variables --building-color1 and --window-color1 to create a gradient transitioning from the first color to the second.

**Step 41:**

```css
.bb1-window {
  height: 10%;
  background: linear-gradient(
      var(--building-color1),
      var(--window-color1)
    );
}

.bb1a {
  width: 70%;
  background-color: var(--building-color1);
}
```

**Step 42:**

```html
<div class="bb1">
  <div class="bb1a bb1-window"></div>
  <div class="bb1b bb1-window"></div>
  <div class="bb1c bb1-window"></div>
  <div class="bb1d"></div>
</div>
```

**Step 43:**

```css
.bb1a {
  width: 70%;
}

.bb1b {
  width: 80%;
}

.bb1c {
  width: 90%;
}
```

**Steps 44-46:**

```css
.bb1d {
  width: 100%;
  height: 70%;
  background: linear-gradient(
      orange,
      var(--building-color1) 80%,
      var(--window-color1)
    );
}
```

**Step 47:**

```css
.bb1d {
  width: 100%;
  height: 70%;
  background: linear-gradient(
      var(--building-color1) 50%,
      var(--window-color1)
    );
}
```

**Step 48:**

```html
<div class="bb2">
  <div class="bb2a"></div>
  <div class="bb2b"></div>
</div>
```

**Step 49:**

```css
.bb2b {
  width: 100%;
  height: 100%;
}
```

**Step 50:**

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
  --window-color1: black;
  --window-color2: #8cd9b3;
}
```

**Step 51:**

```css
.bb2b {
  width: 10%;
  height: 50%;
  background: linear-gradient(
    var(--building-color2) 0%,
    var(--building-color2) 6%,
    var(--window-color2) 6%,
    var(--window-color2) 9%
  );
}
```

**Step 52:**

```css
.bb2b {
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
      var(--building-color2),
      var(--building-color2) 6%,
      var(--window-color2) 6%,
      var(--window-color2) 9%
    );
}
```

**Step 53:**

```css
.bb2 {
  width: 10%;
  height: 50%;
}
```

**Steps 54-58:**

```css
.bb2a {
  border-bottom: 5vh solid var(--building-color2);
  border-left: 5vw solid transparent;
  border-right: 5vw solid transparent;
}
```

**Step 59:**

```css
:root {
  --building-color1: #aa80ff;
  --building-color2: #66cc99;
  --building-color3: #cc6699;
  --building-color4: #538cc6;
  --window-color1: black;
  --window-color2: #8cd9b3;
  --window-color3: #d98cb3;
}
```
