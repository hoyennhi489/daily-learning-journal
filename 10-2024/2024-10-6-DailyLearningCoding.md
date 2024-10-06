
**Step 26:**
```html
<div class="divider large"></div>
```

**Step 27-28:**
```css
.large {
  height: 10px;
}

.large, .medium {
  background-color: black;
  border: 0;
}
```

**Step 29:**
```html
<div class="calories-info"></div>
```

**Step 30:**
```html
<div class="calories-info">
  <div class="left-container">
    <h2 class="bold small-text">Amount per serving</h2>
  </div>
</div>
```

**Step 31:**
```css
.small-text {
  font-size: 0.85rem;
}
```
- The unit **rem** stands for **root em**, and it depends on the font size of the **html** element.

**Step 32:**
```css
.calories-info h2 {
  margin: 0;
}
```

**Step 33:**
```html
<div class="calories-info">
  <div class="left-container">
    <h2 class="bold small-text">Amount per serving</h2>
    <p>Calories</p>
  </div>
  <span>230</span>
</div>
```

**Step 34:**
```css
.calories-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
```

**Step 35:**
```css
.left-container p {
  margin: -5px -2px;
  font-size: 2em;
  font-weight: 700;
}
```

**Step 36-37:**
```css
.calories-info span {
  font-size: 2.4em;
  font-weight: 700;
  margin: -7px -2px;
}
```

**Step 38:**
```html
<div class="divider medium"></div>
```

**Step 39:**
```css
.medium {
  height: 5px;
}
```

**Step 40:**
```html
<div class="divider medium"></div>
<div class="daily-value small-text">
  <p class="bold right">% Daily Value *</p>
</div>
```

**Step 41:**
```css
.right {
  justify-content: flex-end;
}
```

**Step 42:**
```html
<div class="daily-value small-text">
  <p class="bold right">% Daily Value *
    <div class="divider"></div>
  </p>
</div>
```

**Step 43:**
```html
<div class="daily-value small-text">
  <p class="bold right">% Daily Value *</p>
  <div class="divider"></div>
  <p><span class="bold">Total Fat</span> 8g <span class="bold">10%</span></p>
</div>
```

**Step 44:**
```html
<p><span><span class="bold">Total Fat</span> 8g</span> <span class="bold">10%</span></p>
```

**Step 45-46:**
```html
<p class="indent">Saturated Fat 1g <span class="bold">5%</span></p>
```

**Step 47:**
```css
.indent {
  margin-left: 1em;
}
```

**Step 48:**
```css
.daily-value p {
  border-bottom: 1px solid #888989;
}
```

**Step 49:**
```html
<div class="daily-value small-text">
  <p class="bold right no-divider">% Daily Value *</p> 
  <div class="divider"></div>
  <p><span><span class="bold">Total Fat</span> 8g</span> <span class="bold">10%</span></p>
  <p class="indent no-divider">Saturated Fat 1g <span class="bold">5%</span></p>
</div>
```
