
Next section of CSS: **Learning CSS colors by Building a set of colored markers.**

**Step 1:**
> Declare DOCTYPE: An HTML page must start with the declaration `<!DOCTYPE html>`, which helps the browser recognize the type of document being used.

> `<html>` tag: The root element that wraps all the content of the webpage.

> `lang` attribute: Used in the `<html>` tag to specify the primary language of the page. The value `en` indicates English.

*Result:*
```html
<!DOCTYPE html>
<html lang="en"></html>
```

**Step 2:** Add `<head>` and `<body>` elements.

**Step 3:** Add `<title>` inside `<head>`.

**Step 4:** Add `<meta>` tag with the `charset` attribute set to `utf-8`.
```html
<meta charset="utf-8">
```

**Step 5:**
> Multiple `meta` elements: You can add several `meta` elements to provide additional information about the webpage.

> `name="viewport"` attribute: Ensures that the webpage is responsive on different devices by adjusting the display size.

> `content` attribute: Contains values that set the size and scale for the viewport, crucial for optimizing the mobile user experience.
```html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
</head>
```

**Step 6:** Add `<h1>`.

**Step 7:**
> `<link>` tag: Used to link a CSS file to the HTML document.

> `rel` attribute: Specifies the type of link; here it is "stylesheet" to indicate that this file is a stylesheet.

> `href` attribute: Specifies the path to the CSS file you want to link.
```html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Step 8:**
> `text-align`: The property that adjusts how text is aligned within an element.
```css
h1 {
  text-align: center;
}
```

**Step 9:**
> `div` element: Used to group other elements and apply formatting.

> `class` attribute: Allows you to apply CSS styles to multiple elements at once.

> `container`: This class name is often used to hold content and adjust the layout of the page.
```html
<div class="container">
```

**Step 10:**
> Add a new `div` element: Helps organize content and easily apply CSS styles.

> `marker` class: This class name will be used to style colored markers later.
```html
<div class="container">
  <div class="marker"></div>
</div>
```

**Step 11:**
> Add color to the marker: Use the CSS `background-color` property to set the background for the elements.
```css
.marker {
  background-color: red;
}
```

**Step 12:**
```css
.marker {
  background-color: red;
  height: 25px;
  width: 200px;
}
```

**Step 13:**
> Center the element: Use `margin: auto;` to center the element horizontally.

**Step 14:** 
> Add more markers: You will create additional `div` elements to produce different colored markers.
```html
<div class="container">
  <div class="marker"></div>
  <div class="marker"></div>
  <div class="marker"></div>
</div>
```

**Step 15:** Set the `margin` property to `10px auto`.

**Step 16:** Add the `one` class to the first marker `div`.
```html
<div class="marker one"></div>
<div class="marker"></div>
<div class="marker"></div>
```

**Step 17:** Remove the `background-color` property from `.marker`.

**Step 18:** Create a new CSS rule targeting the `one` class and set the `background-color` to red.
```css
.one {
  background-color: red;
}
```

**Step 19:**
```html
<div class="marker one"></div>
<div class="marker two"></div>
<div class="marker three"></div>
```

**Step 20:**
```css
.two {
  background-color: green;
}
.three {
  background-color: blue;
}
```

**Step 21:**
> `RGB` Model: Uses three primary colors `(red, green, blue)` to create other colors.

*Example Code:*
```css
rgb(red, green, blue);
```

> `rgb` function: Allows you to define colors by specifying values for red, green, and blue.
```css
.container {
  background-color: rgb(0, 0, 0);
}
```

**Step 22:**
> `rgb` function: Allows you to specify colors using numeric values from 0 to 255 for the three primary colors.
```css
.one {
  background-color: rgb(255, 0, 0);
}
```

**Step 23:** Use the `rgb` function to set other colors.
```css
.two {
  background-color: rgb(0, 255, 0);
}

.three {
  background-color: rgb(0, 0, 255);
}
```

**Step 24:** Set the green value in the `rgb` function to 127 to reduce its intensity.
```css
.two {
  background-color: rgb(0, 127, 0);
}
```

**Step 25:**
```css
.container {
  background-color: rgb(0, 0, 0);
  padding: 10px 0;
}
```

**Step 26:**
```css
.two {
  background-color: rgb(0, 255, 0);
}
```

**Step 27:**
```css
.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}
```

**Step 28:** Combine pure red and pure green -> yellow.
```css
.one {
  background-color: rgb(255, 255, 0);
}
```

**Step 29:** Combine pure green and pure blue -> cyan.
```css
.two {
  background-color: rgb(0, 255, 255);
}
```

**Step 30:** Combine pure blue and pure red -> magenta.
```css
.three {
  background-color: rgb(255, 0, 255);
}
```

**Step 31:** Combine maximum red and green set to 127 -> orange.
```css
.one {
  background-color: rgb(255, 127, 0);
}
```

**Step 32:** Combine maximum green and blue set to 127 -> spring green.
```css
.two {
  background-color: rgb(0, 255, 127);
}
```

**Step 33:** Combine maximum blue and red set to 127 -> purple.
```css
.three {
  background-color: rgb(127, 0, 255);
}
```

**Step 34:**
- Combine red set to 127 and maximum green -> chartreuse.
```css
.one {
  background-color: rgb(127, 255, 0);
}
```
- Combine green set to 127 and maximum blue -> sky blue.
```css
.two {
  background-color: rgb(0, 127, 255);
}
```
- Combine blue set to 127 and maximum red -> pink.
```css
.three {
  background-color: rgb(255, 0, 127);
}
```

**Step 35:** Adjust the values in the `rgb` function so that the background color of each element is set to pure black.
```css
.one {
  background-color: rgb(0, 0, 0);
}

.two {
  background-color: rgb(0, 0, 0);
}

.three {
  background-color: rgb(0, 0, 0);
}
```

**Step 36:**
- Set the red value to maximum 255 to create pure red.
```css
.one {
  background-color: rgb(255, 0, 0);
}
```
- Set the green and blue values to maximum 255 to create cyan.
```css
.two {
  background-color: rgb(0, 255, 255);
}
```

**Step 37:** In the `h1` rule, use the `rgb` function to set the background color to cyan.
```css
h1 {
  text-align: center;
  background-color: rgb(0, 255, 255);
}
```

**Step 38:**
- In the `.one` rule, use the `rgb` function to set the background color to black.
```css
.one {
  background-color: rgb(0, 0, 0);
}
```
- In the `.two` rule, use the `rgb` function to set the background color to red.
```css
.two {
  background-color: rgb(255, 0, 0);
}
```

**Step 39:** Use the `rgb` function in the `.two` rule to set the background color to black.
```css
.two {
  background-color: rgb(0, 0, 0);
}
```

**Step 40:** In the `h1` rule, remove