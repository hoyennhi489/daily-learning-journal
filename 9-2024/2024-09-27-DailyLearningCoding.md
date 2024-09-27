
**Step 47:**
> `border-bottom: 3px solid #3b3b4f` creates a thick 3px bottom border with the color `#3b3b4f`, enhancing the separation and clarity of the fieldsets while maintaining aesthetics.
```css
fieldset {
  border: none;
  padding: 2rem 0;
  border-bottom: 3px solid #3b3b4f;
}
```

**Step 48:**
> `border-bottom: none;` removes the bottom border of this element, preventing it from feeling out of place in the layout.
```css
fieldset:last-of-type {
  border-bottom: none;
}
```

**Step 49:**
```css
input, textarea, select {
  margin: 10px 0 0; /* Adds a margin to the top */
  width: 100%; /* Sets the width to fill the container */
}
```

**Step 50:**
```html
<fieldset>
  <legend>Account type (required)</legend>
  <label for="personal-account">
    <input id="personal-account" type="radio" name="account-type" class="inline" checked /> Personal
  </label>
  <label for="business-account">
    <input id="business-account" type="radio" name="account-type" class="inline" /> Business
  </label>
</fieldset>
```

**Step 51:**
```css
.inline {
  width: unset; /* Removes width: 100% for elements with the inline class */
}
```

**Step 52:**
```css
.inline {
  width: unset;
  margin: 0 0.5em 0 0; /* Adds margin to the right */
}
```

**Step 53:**
```css
.inline {
  width: unset;
  margin: 0 0.5em 0 0; /* Adds margin to the right */
  vertical-align: middle; /* Ensures inline elements align vertically in the middle */
}
```
- `vertical-align: middle;` ensures that the `.inline` elements are vertically centered, correcting any issues of them being too high in the line.

**Step 54:**
```css
input, textarea {
  background-color: #0a0a23; /* Sets background color for input and textarea elements */
  border: 1px solid #0a0a23; /* Sets a solid 1px border with color #0a0a23 */
}
```

**Step 55:**
```css
input, textarea {
  background-color: #0a0a23; /* Sets background color */
  border: 1px solid #0a0a23; /* Sets border */
  color: #ffffff; /* Sets text color to white for visibility */
  min-height: 2em; /* Sets a minimum height for the elements */
}
```

**Step 56:**
```css
input, textarea, select {
  min-height: 2em; /* Sets minimum height for all input elements */
}

input, textarea {
  background-color: #0a0a23; /* Sets background color for input and textarea */
  border: 1px solid #0a0a23; /* Sets border for input and textarea */
  color: #ffffff; /* Sets text color to white */
}

select {
  background-color: white; /* Sets background color for select elements */
}
```