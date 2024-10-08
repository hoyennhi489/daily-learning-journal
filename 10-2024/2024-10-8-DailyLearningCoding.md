**Learn Accessibility by Building a Quiz**

Step 1-7:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="freeCodeCamp Accessibility Quiz practice project">
    <link rel="stylesheet" href="styles.css" />
    <title>Accessibility Quiz</title>
  </head>
  <body>
    <header>
      <img id="logo" src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg" alt="freeCodeCamp">
      <h1>HTML/CSS Quiz</h1>
      <nav></nav>
    </header>
    <main></main>
  </body>
</html>
```
- `<nav>`: This tag is used to define the navigation section of the page.

Step 8-9:
```css
#logo {
  width: max(10rem, 18vw);
  background-color: #0a0a23;
  aspect-ratio: 35/4;
  padding: 0.4rem;
}
```
- This makes the image flexible and adaptable to different screen sizes.
- `width: max(10rem, 18vw);`: The width is the maximum value between 10rem and 18vw.
- `background-color: #0a0a23;`: The background color is set to dark blue for better visibility of the logo.
- `aspect-ratio: 35/4;`: The aspect ratio is set to 35:4, helping to maintain width and height proportions.
- `padding: 0.4rem;`: Adds 0.4rem spacing around the text inside the logo.

Step 10:
```css
header {
  height: 50px;
  width: 100%;
  background-color: #1b1b32;
  display: flex;
}
```

Step 11:
```css
h1 {
  color: #f1be32;
  font-size: min(5vw, 1.2em);
}
```

Step 12:
```html
<nav>
  <ul>
    <li><a href="info">INFO</a></li>
    <li><a href="html">HTML</a></li>
    <li><a href="css">CSS</a></li>
  </ul>
</nav>
```

Step 13:
```css
nav > ul {
  display: flex;
  justify-content: space-evenly;
}
```

Step 14-16:
```html
<main>
  <form method="post" action="https://freecodecamp.org/practice-project/accessibility-quiz">
    <section role="region" aria-labelledby="student-info">
      <h2 id="student-info">student-info</h2>
    </section>
    <section role="region" aria-labelledby="html-questions">
      <h2 id="html-questions">html-questions</h2>
    </section>
    <section role="region" aria-labelledby="css-questions">
      <h2 id="css-questions">css-questions</h2>
    </section>
  </form>
</main>
```
- The `role` attribute helps screen readers better understand the purpose of the elements, improving the user experience for those using assistive technology.
- The `aria-labelledby` attribute helps screen readers associate descriptive content with the element, enhancing accessibility for users.

Step 17:
```css
h1, h2 {
  font-family: "Verdana", sans-serif;
}

h2 {
  border-bottom: 4px solid #dfdfe2;
}
```

Step 18:
```html
<ul>
  <li><a href="#student-info">INFO</a></li>
  <li><a href="#html-questions">HTML</a></li>
  <li><a href="#css-questions">CSS</a></li>
</ul>
```
- `<ul>`: The tag creates an unordered list.
- `<li>`: Each of these tags represents an item in the list.
- `<a href="#student-info">`: The anchor tag navigates to the element with the ID of student-info on the same page.

Step 19:
```html
<section role="region" aria-labelledby="student-info">
  <h2 id="student-info">Student Info</h2>
  <div class="info">
    <label></label>
    <input>
  </div>
  <div class="info">
    <label></label>
    <input>
  </div>
  <div class="info">
    <label></label>
    <input>
  </div>
</section>
```

Step 20-21:
```html
<section role="region" aria-labelledby="student-info">
  <h2 id="student-info">Student Info</h2>
  <div class="info">
    <label for="student-name">Name:</label>
    <input type="text" name="student-name" id="student-name" placeholder="e.g. Quincy Larson" />
  </div>
  <div class="info">
    <label for="student-email">Email:</label>
    <input type="email" name="student-email" id="student-email" />
  </div>
  <div class="info">
    <label for="birth-date">Date of Birth:</label>
    <input type="date" name="birth-date" id="birth-date" />
  </div>
</section>
```
