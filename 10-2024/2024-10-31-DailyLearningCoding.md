
**Step 56:**
```html
<div class="penguin-head">
  <div class="face left"></div>
  <div class="face right"></div>
  <div class="chin"></div>
  <div class="eye left"></div>
  <div class="eye right"></div>
</div>
```

**Step 57-58:**
```css
.eye {
  width: 15%;
  height: 17%;
  background-color: black;
  top: 45%;
  border-radius: 50%;
}
```

**Step 59:**
```css
.eye.left {
  left: 25%;
}
.eye.right {
  right: 25%;
}
```

**Step 60:**
```html
<div class="penguin-head">
  <div class="face left"></div>
  <div class="face right"></div>
  <div class="chin"></div>
  <div class="eye left">
    <div class="eye-lid"></div>
  </div>
  <div class="eye right">
    <div class="eye-lid"></div>
  </div>
</div>
```

**Step 61-62:**
```css
.eye-lid {
  width: 150%;
  height: 100%;
  background-color: var(--penguin-face);
  top: 25%;
  left: -23%;
  border-radius: 50%;
}
```

**Step 63:**
```html
<div class="blush left"></div>
<div class="blush right"></div>
```

**Step 64-65:**
```css
.blush {
  width: 15%;
  height: 10%;
  background-color: pink;
  top: 65%;
  border-radius: 50%;
}
```

**Step 66:**
```css
.blush.left {
  left: 15%;
}
.blush.right {
  right: 15%;
}
```

**Step 67:**
```html
<div class="beak top"></div>
<div class="beak bottom"></div>
```

**Step 68:**
```css
.beak {
  height: 10%;
  background-color: orange;
  border-radius: 50%;
}
```

**Step 69-70:**
```css
.beak.top {
  width: 20%;
  top: 60%;
  left: 40%;
}

.beak.bottom {
  width: 16%;
  top: 65%;
  left: 42%;
}
```

**Step 71-73:**
```html
<div class="shirt">
  <div>💜</div>
  <p>I CSS</p>
</div>
```

**Step 74-78:**
```css
.shirt {
  font: bold 25px Helvetica, sans-serif;
  top: 165px;
  left: 127.5px;
  z-index: 1;
  color: #6a6969;
}

.shirt div {
  font-weight: initial;
  top: 22.5px;
  left: 12px;
}
```

**Step 79:**
```html
<div class="penguin-body">
  <div class="foot left"></div>
  <div class="foot right"></div>
</div>
```

**Step 80-81:**
```css
.foot {
  width: 15%;
  height: 30%;
  background-color: orange;
  top: 85%;
  border-radius: 50%;
}
```

**Step 82:**
```css
:root {
  --penguin-face: white;
  --penguin-picorna: orange;
}

.beak {
  height: 10%;
  background-color: var(--penguin-picorna);
  border-radius: 50%;
}

.foot {
  width: 15%;
  height: 30%;
  background-color: var(--penguin-picorna);
  top: 85%;
  border-radius: 50%;
}
```

**Step 83-84:**
```css
.foot.left {
  left: 25%;
  transform: rotate(80deg);
}

.foot.right {
  right: 25%;
  transform: rotate(-80deg);
}
```

**Step 85:**
```css
.foot {
  width: 15%;
  height: 30%;
  background-color: var(--penguin-picorna);
  top: 85%;
  border-radius: 50%;
  z-index: -1;
}
```

**Step 86:**
```html
<div class="penguin-body">
  <div class="arm left"></div>
  <div class="arm right"></div>
  <div class="foot left"></div>
  <div class="foot right"></div>
</div>
```

**Step 87:**
```css
.arm {
  width: 30%;
  height: 60%;
  background: linear-gradient(90deg, gray, rgb(209, 210, 199));
}
```

**Step 88:**
```css
:root {
  --penguin-face: white;
  --penguin-picorna: orange;
  --penguin-skin: gray;
}

.penguin-head {
  width: 50%;
  height: 45%;
  background: linear-gradient(
    45deg,
    var(--penguin-skin),
    rgb(239, 240, 228)
  );
  border-radius: 70% 70% 65% 65%;
  top: 10%;
  left: 25%;
  z-index: 1;
}

.penguin-body::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 45%;
  background-color: var(--penguin-skin);
  top: 10%;
  left: 25%;
  border-radius: 0% 0% 100% 100%;
  opacity: 70%;
}

.arm {
  width: 30%;
  height: 60%;
  background: linear-gradient(
    90deg,
    var(--penguin-skin),
    rgb(209, 210, 199)
  );
}
```

**Step 89-92:**
```css
.arm.left {
  top: 35%;
  left: 5%;
  transform-origin: top left; 
  transform: rotate(130deg) scaleX(-1);
}

.arm.right {
  top: 0%;
  right: -5%;
  transform: rotate(-45deg);
}
```

**Step 93-94:**
```css
.arm {
  width: 30%;
  height: 60%;
  background: linear-gradient(
    90deg,
    var(--penguin-skin),
    rgb(209, 210, 199)
  );
  border-radius: 30% 30% 30% 120%;
  z-index: -1;
}
```

**Step 95-99:**
```css
@keyframes wave {
  10% {
    transform: rotate(110deg) scaleX(-1);
  }
  20% {
    transform: rotate(130deg) scaleX(-1);
  }
  30% {
    transform: rotate(110deg) scaleX(-1);
  }
  40% {
    transform: rotate(130deg) scaleX(-1);
  }
}
```

**Step 100:**
```css
.arm.left {
  top: 35%;
  left: 5%;
  transform-origin: top left; 
  transform: rotate(130deg) scaleX(-1);
  animation: 3s linear infinite wave;
}
```

**Step 101-102:**
```css
.penguin:active {
  transform: scale(1.5);
  cursor: not-allowed;
}
```

**Step 103:**
```css
.penguin {
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 75px;
  z-index: 4;
  position: relative;
  transition: transform 1s ease-in-out 0ms;
}
```

**Step 104:**
```css
.ground {
  width: 100vw;
  height: 400px;
  background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
  z-index: 3;
  position: absolute;
  margin-top: -58px;
  height: calc(100vh - 300px); 
}
```