
**Step 21:**
> The `width` property in CSS: This property controls the width of an element on the page.  

> **ID Selector**: You can target and style a specific element by its unique ID using the `#` symbol.  

*For example:* `#cat` will select the element with `id="cat"`.

*Result:*
```css
#menu {
  width: 300px;
}
```

**Step 22:**
> **CSS Comments**: Use `/* */` to comment your code.  

> **Disable Code**: Insert comments to temporarily disable a block of code.  

> **Effect**: Comment out `background-color` to reset the background styling of the `#menu` element.

*Result:*
```css
/*background-color: burlywood;*/
```

**Step 23:**

*Result:*
```css
#menu {
  width: 300px; background: burlywood;
}
```

**Step 24:** Set the `width` of `#menu` to 80%.

*Result:*
```css
#menu {
  width: 80%;
  background-color: burlywood;
}
```

**Step 25:**
> Centering horizontally: Use `margin-left: auto;` and `margin-right: auto;` to center.  

> **Margin**: This is the invisible space around an element.

*Result:*
```css
#menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
```

**Step 26:**
> **Class Selector**: Use a dot (.) before the class name to style multiple elements. 

> Change from `#menu` to `.menu`: Transition from `id` selector to `class` selector for easier reuse.

*Result:*
```css
.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
```

**Step 27:**
> Remove the `id` attribute: Delete the `id` attribute from the div tag.  

> Add `class` attribute: Add `class="menu"` to the opening tag of the `div`.

*Result:*
```html
<div class="menu">
```

**Step 28:**
> You can use an image as the background for the page. 

> Add background image: Use the `background-image` property with the `URL` of the image.

Example:
```css
body {
  background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
}
```

*Result:*
```css
body {
  background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
}
```

**Step 29:**
> Add an `article` element: Create an empty `article` element to list items.  

> Position: Place it right under the Coffee heading.

*Result:*
```html
<h2>Coffee</h2>
<article></article>
```

**Step 30:**
> `Article` elements usually contain multiple elements with related information.

> Add `<p>`.

*Result:*
```html
<article>
  <p>French Vanilla</p>
  <p>3.00</p>
</article>
```

**Step 31:**
> Nest two `<p>` elements: Ensure each article has two `<p>` elements.

*Result:*
```html
<article>
  <p>French Vanilla</p>
  <p>3.00</p>
</article>
<article>
  <p>Caramel Macchiato</p>
  <p>3.75</p>
</article>
<article>
  <p>Pumpkin Spice</p>
  <p>3.50</p>
</article>
<article>
  <p>Hazelnut</p>
  <p>4.00</p>
</article>
<article>
  <p>Mocha</p>
  <p>4.50</p>
</article>
```

**Step 32:**
> Add class `flavor`: Assign the `flavor` class to the `<p>` element containing the flavor.  

> `Class` is an `HTML` attribute used to group elements and apply the same `CSS` style to them.  

> HTML: All three `<p>` tags have `class="flavor"`, meaning they belong to the same group called `"flavor"`.

*Result:*
```html
<article>
  <p class="flavor">French Vanilla</p>
  <p>3.00</p>
</article>
```

**Step 33:**
> Use the `flavor` class to left-align the text using `text-align: left;`.

*Result:*
```css
.flavor {
  text-align: left;
}
```

**Step 34:**
> Add class `price` to the `<p>` element containing the price for styling the price.

*Result:*
```html
<p class="price">3.00</p>
```

**Step 35:**
> Use the `price` class to right-align the text using `text-align: right;`.

*Result:*
```css
.price {
  text-align: right;
}
```

**Step 36:**
> Add class `item` to the `<article>` element to prepare for aligning `flavor` and `price` on the same line.

*Result:*
```html
<h2>Coffee</h2>
<article class="item">
  <p class="flavor">French Vanilla</p>
  <p class="price">3.00</p>
</article>
```

**Step 37:**
> Use the selector `.item p` and set the `display: inline-block` property to align the `flavor` and `price` on the same line.

*Result:*
```css
.item p {
  display: inline-block;
}
```

**Step 38:**
> Add `width: 50%` for the `flavor` and `price` classes to align them correctly.

*Result:*
```css
.flavor {
  text-align: left; 
  width: 50%;
}

.price {
  text-align: right; 
  width: 50%;
}
```

**Step 39:**
> Set `width: 49%` for the `flavor` and `price` classes to align them on the same line.

*Result:*
```css
.flavor {
  text-align: left;
  width: 49%;
}

.price {
  text-align: right;
  width: 49%;
}
```

**Step 40:**
> Move the `<p class="price">` element closer to `<p class="flavor">` in the code without any space to align them correctly on the same line.

*Result:*
```html
<p class="flavor">French Vanilla</p><p class="price">3.00</p>
```

