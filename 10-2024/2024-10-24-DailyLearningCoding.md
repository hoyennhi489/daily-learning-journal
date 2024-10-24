
**Step 34-35:**
```css
main {
  display: grid;
  grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);
  row-gap: 3rem;
}
```
- `row-gap: 3rem;`: Sets the vertical spacing (between rows) to 3rem.

**Step 36:**
```css
.heading {
  grid-column: 2 / 3;
}
```

**Step 37:**
```css
.text {
  grid-column: 2 / 3;
}
```

**Step 38-40:**
```css
.heading {
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.5rem;
}
```

**Step 41-42:**
```css
.hero {
  grid-column: 1 / -1;
  position: relative;
}
```

**Step 43:**
- Remove the temporary `width` attribute.

**Step 44:**
```css
img {
  width: 100%;
  object-fit: cover;
}
```

**Step 45:**
```css
.hero-title {
  text-align: center;
  color: orangered;
  font-size: 8rem;
}
```

**Step 46:**
```css
.hero-subtitle {
  font-size: 2.4rem;
  color: orangered;
  text-align: center;
}
```

**Step 47:**
```css
.author {
  font-size: 2rem;
  font-family: Raleway, sans-serif;
}
```

**Step 48:**
```css
.author-name a:hover {
  background-color: #306203;
}
```

**Step 49:**
```css
.publish-date {
  color: rgba(255, 255, 255, 0.5);
}
```

**Step 50-54:**
```css
.social-icons {
  display: grid;
  font-size: 3rem;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  align-items: center;
}
```
- `grid-auto-flow: column;`: This property will create a new column in the grid as needed to keep social media icons in the same row.

**Step 55-57:**
```css
.text {
  grid-column: 2 / 3;
  font-size: 1.8rem;
  letter-spacing: 0.6px;
  column-width: 25rem;
  text-align: justify;
}
```

**Step 58-59:**
```css
.first-paragraph::first-letter {
  font-size: 6rem;
  color: orangered;
  float: left;
  margin-right: 1rem;
}
```

**Step 60:**
```css
hr {
  margin: 1.5rem 0;
}
```