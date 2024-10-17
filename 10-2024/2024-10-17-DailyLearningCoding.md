**Learn Responsive Web Design by Building a Piano**:

### Step 1-8:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Piano</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div id="piano">
      <div class="keys">
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>

        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
        <div class="key black--key"></div>
      </div>
    </div>
  </body>
</html>
```

### Step 9:
```css
html {
  box-sizing: border-box;
}
```
- **box-sizing: border-box** helps the width and height to include content, padding, and border.

### Step 10:
```css
*, *::before, *::after {
  box-sizing: inherit;
}
```
- Ensures that all elements and pseudo-elements inherit the box-sizing value from the parent element.

### Step 11-12:
```css
#piano {
  background-color: #00471b;
  width: 992px;
  height: 290px;
  margin: 80px auto;
}
```
- Set the background, size, and position for the piano.

### Step 13-14:
```css
.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
}
```
- Set the background and size for the area containing the piano keys.

### Step 15:
```css
#piano {
  background-color: #00471b;
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
}
```
- Add padding for the piano.

### Step 16-17:
```css
.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
}
```
- **float: left** to arrange the keys horizontally; **position: relative** to adjust the position based on the original position.

### Step 18-20:
```css
.key.black--key::after {
  background-color: #1d1e22;
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
}
```
- Use a pseudo-element to create a black key with an absolute position.

### Step 21:
```html
<div id="piano">
  <img class="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" alt="freeCodeCamp Logo">
</div>
```
- Add a logo to the piano.

### Step 22:
```css
.logo {
  width: 200px;
  position: absolute;
  top: 23px;
}
```
- Set the size and position for the logo.

### Step 23-24:
```css
#piano {
  background-color: #00471b;
  width: 992px;
  height: 290px;
  margin: 80px auto;
  padding: 90px 20px 0 20px;
  position: relative;
  border-radius: 10px;
}
```
- Add border-radius to the piano.

### Step 25:
```css
.key {
  background-color: #ffffff;
  position: relative;
  width: 41px;
  height: 175px;
  margin: 2px;
  float: left;
  border-radius: 0 0 3px 3px;
}
```
- Round the bottom corners of the piano keys.

### Step 26:
```css
.key.black--key::after {
  background-color: #1d1e22;
  content: "";
  position: absolute;
  left: -18px;
  width: 32px;
  height: 100px;
  border-radius: 0 0 3px 3px;
}
```
- Round the bottom corners for the black key.

### Step 27:
```css
@media (max-width: 768px) {
  .card {
    padding: 2rem;
  }
}
```
- Use a media query to adjust padding for elements when the window width is less than or equal to 768px.

### Step 28-30:
```css
@media (max-width: 768px) {
  #piano {
    width: 358px;
  }

  .keys {
    width: 318px;
  }

  .logo {
    width: 150px;
  }
}
```
- Adjust the sizes of the piano, keys, and logo for smaller screens.

### Step 31:
```css
.keys {
  background-color: #040404;
  width: 949px;
  height: 180px;
  padding-left: 2px;
  overflow: hidden;
}
```
- **overflow: hidden** prevents content from overflowing the element.

### Step 32-33:
```css
@media (max-width: 1199px) and (min-width: 769px) {
  #piano {
    width: 675px;
  }
  
  .keys {
    width: 633px;
  }
}
```
- Adjust the sizes for the piano and keys between 769px and 1199px.