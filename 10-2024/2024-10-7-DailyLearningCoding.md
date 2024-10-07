
### Step 50
```css
.daily-value p:not(.no-divider) {
  border-bottom: 1px solid #888989;
}
```
- `p:not(.no-divider)` excludes elements with the class `.no-divider` from this CSS rule.

### Step 51
```html
<div class="daily-value small-text">
  <p class="bold right no-divider">% Daily Value *</p>
  <div class="divider"></div>
  <p><span><span class="bold">Total Fat</span> 8g</span> <span class="bold">10%</span></p>
  <p class="indent no-divider">Saturated Fat 1g <span class="bold">5%</span></p>
  <div class="divider"></div>
</div>
```
- Add an element with the class `.divider` after each `.no-divider` element to create separate dividing lines.

### Step 52-58
```html
<div class="daily-value small-text">
  <p class="bold right no-divider">% Daily Value *</p>
  <div class="divider"></div>
  <p><span><span class="bold">Total Fat</span> 8g</span> <span class="bold">10%</span></p>
  <p class="indent no-divider">Saturated Fat 1g <span class="bold">5%</span></p>
  <div class="divider"></div>
  <p class="indent no-divider"><span><i>Trans</i> Fat 0g</span></p>
  <div class="divider"></div>
  <p><span><span class="bold">Cholesterol</span> 0mg</span> <span class="bold">0%</span></p>
  <p><span><span class="bold">Sodium</span> 160mg</span> <span class="bold">7%</span></p>
  <p><span><span class="bold">Total Carbohydrate</span> 37g</span> <span class="bold">13%</span></p>
  <p class="indent no-divider">Dietary Fiber 4g</p>
  <div class="divider"></div>
  <p class="indent no-divider">Total Sugars 12g</p>
  <div class="divider"></div>
</div>
```
- Use `<i>` to italicize the word "Trans" and use `<span>` to align the text "Trans Fat 0g" within the `<p>` element with the `indent no-divider` class.

### Step 59
```html
<div class="divider double-indent"></div>
```
- Add the `double-indent` class to the last `.divider` element to apply a custom style to it.

### Step 60
```css
.double-indent {
  margin-left: 2em;
}
```

### Step 61-66
```html
<p class="double-indent no-divider">Includes 10g Added Sugars <span class="bold">20%</span></p>
<div class="divider"></div>
<p class="indent no-divider"><span><span class="bold">Protein</span> 3g</span></p>
<div class="divider large"></div>
<p>Vitamin D 2mcg <span>10%</span></p>
<p>Calcium 260mg <span>20%</span></p>
<p>Iron 8mg <span>45%</span></p>
<p class="no-divider">Potassium 235mg <span>6%</span></p>
<div class="divider medium"></div>
<p class="note">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
```

### Step 67-68
```css
.note {
  font-size: 0.6rem;
  margin: 5px 0;
  padding: 0 8px;
  text-indent: -8px;
}
```
- `font-size: 0.6rem;`: Sets the font size of the element to 0.6rem, making the text smaller than the default size.
- `margin: 5px 0;`: Adds 5px of space above and below the `<p>` element, with no space on the left and right.
- `padding: 0 8px;`: Adds 0px of space above and below, and 8px on the left and right, creating space around the content within the element.
- `text-indent: -8px;`: Indents the text to the left by 8px, causing the text to start further left than the containing element.