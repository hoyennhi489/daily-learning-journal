

**Step 51:**
```css
section {
  width: 80%;
  margin: 0 auto 10px auto;
  max-width: 600px;
}
```

**Step 52:**
```css
h2 {
  border-bottom: 4px solid #dfdfe2;
  margin-top: 0px;
  padding-top: 60px;
}
```

**Step 53:**
```css
.info {
  padding: 10px 0 0 5px;
}
```

**Step 54:**
```css
.formrow {
  margin-top: 30px;
  padding: 0px 15px;
}

input {
  font-size: 16px;
}
```

**Step 55:**
```css
.info input {
  width: 50%;
  text-align: left;
}
```

**Step 56:**
```css
.info label {
  width: 10%;
  min-width: 55px;
}
```

**Step 57:**
```css
.info > label, .info > input {
  display: inline-block;
}

.info input {
  width: 50%;
  text-align: left;
}

.info label {
  width: 10%;
  min-width: 55px;
  text-align: right;
}
```

**Step 58:**
```css
.question-block {
  text-align: left;
  display: block;
  width: 100%;
  margin-top: 20px;
  padding-top: 5px;
}
```

**Step 59:**
```css
h3 {
  margin-top: 5px;
  padding-left: 15px;
  font-size: 22px;
}
```

**Step 60:**
```css
.question {
  border: none;
  padding-bottom: 0;
}
```

**Step 61:**
```css
.answers-list {
  list-style: none;
  padding: 0;
}
```

**Step 62:**
```css
button {
  display: block;
  margin: 40px auto;
  width: 40%;
  padding: 15px;
  font-size: 23px;
  background: #d0d0d5;
  border: 3px solid #3b3b4f;
}
```

**Step 63:**
```css
footer {
  background-color: #2a2a40;
  display: flex;
  justify-content: center;
}
```

**Step 64:**
```css
footer,
footer a {
  color: #dfdfe2;
}
```

**Step 65:**
```css
address {
  text-align: center;
  padding: 0.3em;
}
```

**Step 66:**
```css
* {
  scroll-behavior: smooth;
}
```

**Step 67:**
```css
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
```
- The `@media (prefers-reduced-motion: no-preference)` rule combined with `scroll-behavior: smooth` ensures smooth scrolling is applied only when the user has not requested reduced motion.
  - `scroll-behavior: smooth`: Makes page scrolling smooth instead of instant.
  > Smooth scrolling is applied only if the user’s system settings do not request reduced motion, which helps avoid discomfort for users sensitive to motion.

**Step 68:**
```html
<nav>
  <ul>
    <li><a href="#student-info" accesskey="i">INFO</a></li>
    <li><a href="#html-questions" accesskey="h">HTML</a></li>
    <li><a href="#css-questions" accesskey="c">CSS</a></li>
  </ul>
</nav>
```
