
**Step 46:**
```css
nav ul li a {
  color: #dfdfe2;
}
```

**Step 47:**
```css
nav > ul > li:hover {
  background-color: #dfdfe2;
  color: #1b1b32;
  margin: 0 0.2rem;
  padding: 0.2rem;
  display: block;
  cursor: pointer;
}

li > a {
  color: inherit;
  text-decoration: none;
}
```
- **Hover Effect**: Uses the `:hover` selector to change the background color, text color, and set the cursor to pointer.
  - `nav > ul > li:hover`: Applies changes when hovering over the `li` element inside the `ul` of `nav`. Specifically:
    + `background-color: #dfdfe2;`: Sets the background color of `li` to `#dfdfe2` on hover.
    + `color: #1b1b32;`: Changes the text color to `#1b1b32` on hover.
    + `margin: 0 0.2rem;`: Adds horizontal spacing to the `li`.
    + `padding: 0.2rem;`: Adds space around the content inside the `li`.
    + `display: block;`: Ensures the `li` is displayed as a block.
    + `cursor: pointer;`: Changes the cursor to pointer when hovering.
  - `li > a`: Styles the anchor (`a`) tags within the `li`:
    + `color: inherit;`: The link color inherits from the parent `li` color.
    + `text-decoration: none;`: Removes the default underline from the link.

**Step 48:**
```css
header {
  width: 100%;
  height: 50px;
  background-color: #1b1b32;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;    
  top: 0;    
}
```
- `justify-content: space-between;`: Creates even spacing between child elements.
- `align-items: center;`: Vertically centers the items.
- `position: fixed;`: Keeps the header fixed at the top of the page while scrolling.
- `top: 0;`: Ensures the header is flush at the top of the viewport.
- `width: 100%;`: Sets the header to occupy the full width of the screen.

**Step 49:**
```css
h1 {
  color: #f1be32;
  font-size: min(5vw, 1.2em);
  text-align: center;
}

main {
  padding-top: 50px;
}
```

**Step 50:**
```css
nav > ul {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding-inline-start: 0;
  margin-block: 0;
  height: 100%;
}
```