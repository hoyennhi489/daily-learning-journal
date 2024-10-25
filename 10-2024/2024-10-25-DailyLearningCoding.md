### Step 61:
```css
hr {
  margin: 1.5rem 0;
  border: 1px solid rgba(120, 120, 120, 0.6);
}
```

### Step 62-63:
```css
.quote {
  color: #00beef;
  font-size: 2.4rem;
  text-align: center;
  font-family: Raleway, sans-serif;
}
```

### Step 64:
```css
.quote::before {
  content: '" ';
}

.quote::after {
  content: ' "';
}
```

### Step 65-66:
```css
.text-with-images {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 3rem;
  margin-bottom: 3rem;
}
```

### Step 68-69:
```css
.lists {
  list-style-type: none;
  margin-top: 2rem;
}
```

### Step 70:
```css
.lists li {
  margin-bottom: 1.5rem;
}
```

### Step 71:
```css
.list-title, .list-subtitle {
  color: #00beef;
}
```

### Step 72:
```css
.image-wrapper {
  display: grid;
}
```

### Step 73-75:
```css
.image-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, min-content);
  gap: 2rem;
  place-items: center;
}
```

### Step 76:
```css
.image-1, .image-3 {
  grid-column: 1 / -1;
}
```

### Step 77:
```css
@media only screen and (max-width: 720px) {
  .image-wrapper {
    grid-template-columns: 1fr;
  }
}
```

### Step 78:
```css
@media only screen and (max-width: 600px) {
  .text-with-images {
    grid-template-columns: 1fr;
  }
}
```

### Step 79:
```css
@media only screen and (max-width: 550px) {
  .hero-title {
    font-size: 6rem;
  }

  .hero-subtitle, .author, .quote, .list-title {
    font-size: 1.8rem;
  }

  .social-icons {
    font-size: 2rem;
  }

  .text {
    font-size: 1.6rem;
  }
}
```

### Step 80:
```css
@media only screen and (max-width: 420px) {
  .hero-title {
    font-size: 4.5rem;
  }
}
```