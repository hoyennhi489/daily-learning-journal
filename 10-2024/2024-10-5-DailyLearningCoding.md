
**Learn Typography by Building a Nutrition Label**

### Steps 1-3: Basic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nutrition Label</title>
</head>
<body>
  <h1>Nutrition Facts</h1>
  <p>8 servings per container</p>
  <p>Serving size 2/3 cup (55g)</p>
</body>
</html>
```
- Created a basic HTML document with a title and nutrition information.

### Step 4: Embed Font
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800">
<link rel="stylesheet" href="styles.css">
```
- Embedded the "Open Sans" font from Google Fonts and linked your CSS file.

### Step 5: Set Font for Body
```css
body {
  font-family: "Open Sans", sans-serif;
}
```
- Set the font for the entire page.

### Step 6: Font Size
```css
html {
  font-size: 16px;
}
```
- Set the default font size for the page to 16px.

### Step 7: Wrap Content in a div
```html
<body>
  <div class="label">
    <h1>Nutrition Facts</h1>
    <p>8 servings per container</p>
    <p>Serving size 2/3 cup (55g)</p>
  </div>
</body>
```
- Used a `<div>` tag with the class `label` to wrap the nutrition information.

### Steps 8-10: Design the Label Box
```css
.label {
  border: 2px solid black;
  width: 270px;
  margin: 20px auto;
  padding: 0 7px;
}
```
- Set the border, width, margin, and padding for the nutrition label.

### Step 11: Control Element Size
```css
* {
  box-sizing: border-box;
}
```
- Used `box-sizing: border-box;` to calculate element sizes including padding and border.

### Steps 12-14: Format the Title
```css
h1 {
  font-weight: 800;
  text-align: center;
  margin: -4px 0 -4px 0;
}
```
- Set the weight, center alignment, and adjusted spacing for the title.

### Step 15: Remove Margin for p Tags
```css
p {
  margin: 0;
}
```
- Removed the default margin for `<p>` tags.

### Step 16: Add Divider
```html
<div class="label">
  <h1>Nutrition Facts</h1>
  <div class="divider"></div>
  <p>8 servings per container</p>
  <p>Serving size 2/3 cup (55g)</p>
</div>
```
- Added a divider between the title and information.

### Step 17: Format the Divider
```css
.divider {
  border-bottom: 1px solid #888989;
  margin: 2px 0;
}
```
- Created a dividing line under the title.

### Step 18: Adjust Letter Spacing
```css
h1 {
  font-weight: 800;
  text-align: center;
  margin: -4px 0;
  letter-spacing: 0;
}
```
- Used `letter-spacing` to adjust the spacing between characters in the title.

### Step 19: Highlight Serving Size
```html
<p class="bold">Serving size <span>2/3 cup (55g)</span></p>
```
- Added the class `bold` to the serving size information.

### Step 20: Format Elements
```css
h1 {
  text-align: center;
  margin: -4px 0;
  letter-spacing: 0.15px;
}

.bold {
  font-weight: 800;
}
```
- Updated the formatting for the title and serving size information.

### Steps 21-22: Use the span Tag
```html
<p class="bold">Serving size <span>2/3 cup (55g)</span></p>
```
- Wrapped the serving size information in a `<span>` tag for easier styling.

### Step 23: Align p Tags
```css
p {
  margin: 0;
  display: flex;
  justify-content: space-between;
}
```
- Used Flexbox to align the `<p>` elements.

### Step 24: Create a Logical Structure with header Tag
```html
<div class="label">
  <header>
    <h1 class="bold">Nutrition Facts</h1>
    <div class="divider"></div>
    <p>8 servings per container</p>
    <p class="bold">Serving size <span>2/3 cup (55g)</span></p>
  </header>
</div>
```
- Used the `<header>` tag for clearer organization of content.

### Step 25: Update Title in Header
```css
header h1 {
  text-align: center;
  margin: -4px 0;
  letter-spacing: 0.15px;
}
```
- Set formatting for the title within the header.
