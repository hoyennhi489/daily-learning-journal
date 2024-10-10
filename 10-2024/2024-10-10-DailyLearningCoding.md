
**Step 39:**
```html
<div class="answer">
  <textarea rows="4" cols="50"></textarea>
</div>
```
- The `textarea` element in HTML is used to create a resizable text input area.
  + `rows="4"`: Sets the height of the textarea to 4 rows.
  + `cols="50"`: Sets the width of the textarea to 50 columns.

**Step 40:**
```html
<div class="question-block">
  <label for="css-textarea">Do you have any questions:</label>
</div>
<div class="answer">
  <textarea id="css-textarea" name="css-questions" rows="5" cols="24"></textarea>
</div>
```

**Step 41:**
```html
<button type="submit">Send</button>
```

**Step 42:**
```html
<footer>
  <address></address>
</footer>
```
- `footer`: Contains auxiliary or related information for the page.
- `address`: Usually contains contact information like the author’s email or address.

**Step 43-44:**
```html
<footer>
  <address>
    <a href="https://freecodecamp.org">freeCodeCamp</a><br />
    San Francisco<br />
    California<br />
    USA
  </address>
</footer>
```
- The `br` tag allows each part of the address to appear on a new line, which is useful for logically presenting address elements.
- The `br` tag is used to insert a line break in the text without creating a new block element.

**Step 45:**
```css
nav > ul > li {
  color: #dfdfe2;
  margin: 0 0.2rem;
  padding: 0.2rem;
  display: block;
}
```
