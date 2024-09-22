
**Step 71:** Add an `<hr>` (horizontal line) element between the `<main>` and `<footer>` elements.

**Step 72:**
>The CSS property `padding` is used to create space inside an element, between the content and the element's border.

>Adding `padding` to the `<body>` element will create extra space around all the content inside the web page, making it feel more spacious.

*Result:*
```css
body {
  background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
  font-family: sans-serif;
  padding: 20px;
}
```

**Step 73:**
>`margin` is the space outside of an element, creating distance between that element and other surrounding elements.

*Result:*
```css
.item p {
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
}
```

**Step 74:** You can add the `font-size` property to adjust the text size for `<p>` elements within elements with the class `item`.

*Result:*
```css
.item p {
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 18px;
}
```

**Step 75:**
- Create the class `bottom-line` and apply `margin-top`:

*Result:*
```css
.bottom-line {
  margin-top: 25px;
}
```

**Step 76:**
- After creating the class, you need to apply this class to the element that needs adjustment.

*Result:*
```html
<hr class="bottom-line">
```

**Step 77:**
>Comments in CSS help annotate the code without affecting the display or functionality of the web page.

*Result:*
```css
/*FOOTER*/
```

**Step 78:**

*Result:*
```css
footer {
  font-size: 14px;
}
```

**Step 79:** Use the type selector to target all `<a>` link elements in the `footer` and change their color.

*Result:*
```css
a {
  color: black;
}
```

**Step 80:**
>The pseudo-class `:visited` targets links that have been visited and allows you to change their styling.

*Result:*
```css
a:visited {
  color: grey;
}
```

**Step 81:**
>The pseudo-class `:hover` targets links when the user hovers over them, allowing you to change their temporary styling.

*Result:*
```css
a:hover {
  color: brown;
}
```

**Step 82:**
>The pseudo-class `:active` targets links when they are being clicked and allows you to change their styling briefly.

*Result:*
```css
a:active {
  color: white;
}
```

**Step 83:**

*Result:*
```css
a:visited {
  color: black;
}

a:hover {
  color: brown;
}

a:active {
  color: brown;
}
```

**Step 84:**

*Result:*
```css
h1 {
  font-size: 40px;
  margin-top: 0;
}
```

**Step 85:**

*Result:*
```css
h1 {
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 15px;
}
```

**Step 86:** Create a new class to adjust the bottom margin for the `<p>` element containing the address.

*Result:*
```css
.address {
  margin-bottom: 5px;
}
```

**Step 87:**

*Result:*
```html
<p class="address">123 Free Code Camp Drive</p>
```

**Step 88:**

*Result:*
```html
<h2>Coffee</h2>
<img src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg" alt="coffee icon">
```

**Step 89:** To change the behavior of the `<img>` element, you can use the following CSS syntax:
```css
img {
    display: block;            /* Set img element to block */
    margin-left: auto;        /* Center it horizontally */
    margin-right: auto;       /* Center it horizontally */
}
```

*Result:*
```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

**Step 90:**

*Result:*
```html
<h2>Desserts</h2>
<img src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg" alt="pie icon">
```

**Step 91:** To add a negative top margin for the `<img>` elements, you can use the following CSS syntax:
```css
img {
    margin-top: -25px;  /* Negative top margin of 25px */
}
```

*Result:*
```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -25px;
}
```
___

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>...</title>
</head>
<body>
    <h1>My lesson on VSS from Freecodecamp is complete, and here are the results of my learning journey:</h1>
    <a href="file:///C:/Users/HP/Desktop/daily-learning-journal/9-2024/2024-09-22-index.html">Open file</a>
    <style>
      h1 {
        font-size: 20px;
      }
      a:hover {
        color: brown
      }
</style>
</body>
</html>



