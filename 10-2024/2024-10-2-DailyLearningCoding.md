**Learn the CSS Box Model by Building a Rothko Painting.**

**Step 1:**
```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body></body>
</html>
```

**Step 2:**
```html
<head>
    <meta charset="UTF-8">
    <title>Rothko Painting</title>
</head>
<body>
    <img src="https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-1.png">
</body>
```

**Step 3:**
>Note: In the CSS box model, each HTML element is viewed as a box with 4 areas: content, padding, border, and margin. The content is the actual element inside the box, such as headings, paragraphs, or images.
  	<img src="https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-2.png">

**Step 4:**
>Note: Padding creates space between the content and the border, while the border is the outline surrounding the element, similar to a cardboard box around the item inside.
	<img src="https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-3.png">

**Step 5:**
>Note: Margin creates space outside of elements, helping to position them on the page, while padding and border are inside the box.

**Step 6:**
```html
<div class="canvas"></div>
```

**Step 7:**
```html
<link rel="stylesheet" href="styles.css"></link>
```

**Steps 8-10 and 21:**
```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
  padding: 1px;
}
```

**Step 11:**
```html
<div class="frame">
  <div class="canvas"></div>
</div>
```
- The `.canvas` element is wrapped by a `<div>` with the class frame, allowing you to apply styles or effects to this frame later in CSS.

**Steps 12-15:**
```css
.frame {
  border: 50px solid black;
  width: 500px;
  padding: 50px;
  margin: 20px auto;
}
```
- 50px: The thickness of the border is 50 pixels.
- `solid`: The border style is solid, meaning there are no gaps or dashed lines.
- `black`: The color of the border is black.
- `width`: Sets the width of this element to 500 pixels, meaning it will remain fixed at 500px.
- `margin: 20px auto;` /* 20px space above and below, automatically centering left and right */

**Step 16:**
```html
<div class="canvas">
    <div class="one"></div> <!-- This is the first rectangle -->
</div>
```

**Steps 17-20:**
```css
.one {
  width: 425px;
  height: 150px;
  background-color: #efb762;
  margin: 20px auto;
}
```

**Step 22:**
- `overflow: hidden;`: This property will hide any content that overflows the size of the .canvas element, ensuring that the size of the canvas remains 500 pixels x 600 pixels.
```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
  overflow: hidden;
}
```

**Step 23:**
```html
<div class="two"></div>
```

**Steps 24-27:**
```css
.two {
  width: 475px;
  height: 200px;
  background-color: #8f0401;
  margin: auto;
}
```

**Step 28:**
```html
<div class="three"></div>
```

**Steps 29-32:**
```css
.three {
  width: 91%;
  height: 28%;
  background-color: #b20403;
  margin: auto;
}
```