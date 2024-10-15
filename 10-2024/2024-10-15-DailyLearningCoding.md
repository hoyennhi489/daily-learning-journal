
**Step 1-3:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
   <meta charset="UTF-8">
   <title>fCC Cat Painting</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body></body>
</html>
```

**Step 4:**
```css
* {
  box-sizing: border-box;
}
```

**Step 5:**
```css
body {
  background-color: #c9d2fc;
}
```

**Step 6:**
```html
<body>
<main>
    <div class="cat-head"></div>
</main>
</body>
```

**Step 7-9:**
```css
.cat-head {
  position: static;
  top: 100px;
  left: 100px;
  background: linear-gradient(#5e5e5e 85%, #45454f 100%);
  width: 205px;
  height: 180px;
  border: 1px solid #000;
  border-radius: 46%;
}
```
- **`background`** should use the `linear-gradient()` function to create a gradient background.
- **`position: static`** is the default value in CSS. When applied, you cannot move the element using `top`, `left`, `right`, or `bottom` properties.

**Step 10:**
```css
  position: relative;
  top: 100px;
  left: 100px;
```
- When you set **`position: relative`** for an element, it will be positioned relative to its original position.

**Step 11:**
```css
  position: absolute;
  top: 100px;
  left: 100px;
```
- When you set **`position: absolute`**, the element is removed from the normal document flow.

**Step 12:**
```html
<div class="box"></div>
```

**Step 13:**
```css
.box {
  width: 200px;
  height: 600px;
  background-color: #000;
  position: absolute;
  top: 800px;
  left: 650px;
}
```

**Step 14:**
```css
  position: fixed;
  top: 100px;
  left: 100px;
```

**Step 15:**
```css
  position: sticky;
  top: 0;
```

**Step 16:**
```css
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
```

**Step 17:** Remove the `div` element with the `box` class.

**Step 18:** Remove the `.box` CSS rule.

**Step 19:**
```html
<div class="cat-head">
  <div class="cat-ears"></div>
</div>
```

**Step 20:**
```html
<div class="cat-ears">
  <div class="cat-left-ear"></div>
  <div class="cat-right-ear"></div>
</div>
```

**Step 21:**
```html
<div class="cat-left-ear">
  <div class="cat-left-inner-ear"></div>
</div>
<div class="cat-right-ear">
  <div class="cat-right-inner-ear"></div>
</div>
```

**Step 22:**
```css
.cat-right-ear {
  height: 100px;
  width: 100px;
  background-color: white;
  border: 35px solid blue;
  border-bottom: 35px solid red;
  border-top: 35px solid red;
}
```

**Step 23:**
```css
.cat-right-ear {
  height: 0;
  width: 0;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-top: 35px solid transparent;
  border-bottom: 35px solid red;
}
```
- This CSS uses a technique to create a triangle by adjusting the `border` property:
  + **`height: 0`** and **`width: 0`**: Set the height and width to 0 so the element doesn’t display as a square or rectangle.
  + **`border-left`** and **`border-right`**: Set to 35px and transparent to make the left and right sides invisible.
  + **`border-top`**: Also set to transparent to hide the top of the shape.
  + **`border-bottom`**: Set to 35px and red, making the bottom border visible and forming a red triangle.

**Step 24-25:**
```css
.cat-left-ear {
  position: absolute;
  top: -26px;
  left: -31px;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 70px solid #5e5e5e;
}
```