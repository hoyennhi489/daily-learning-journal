**Learn CSS Grid by Building a Magazine.**

**Step 1-10:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Magazine</title>
    <link
      href="https://fonts.googleapis.com/css?family=Anton%7CBaskervville%7CRaleway&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <section class="heading">
        <header class="hero">
          <img
            src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
            alt="freecodecamp logo"
            loading="lazy"
            class="hero-img"
            width="400"
          />
          <h1 class="hero-title">OUR NEW CURRICULUM</h1>
          <p class="hero-subtitle">
            Our efforts to restructure our curriculum with a more project-based
            focus
          </p>
        </header>
	<div class="author">
          <p class="author-name">By <a href="https://freecodecamp.org" target="_blank" rel="noreferrer">freeCodeCamp</a></p>
          <p class="publish-date">March 7, 2019</p>
        </div>
        <div class="social-icons">
          <a href="https://www.facebook.com/freecodecamp/">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/freecodecamp/">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/freecodecamp">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/school/free-code-camp/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/freecodecamp">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </section>
    </main>
  </body>
</html>
```
- The HTTP `Referer` header contains information about the address or URL of the page the user may be navigating from. This information can be used in analytics to track how many users are coming from your page.
+ `Referer` header: Provides information about the previous page the user visited.
+ `rel="noreferrer"`: Prevents the Referer information from being sent in the request.
- Each `<a>` element contains an `<i>` element with the corresponding class to display the social media icon.

**Step 11-14:**
```html
<section class="text">
  <p class="first-paragraph">
    Soon the freeCodeCamp curriculum will be 100% project-driven learning. Instead of a series of coding challenges, you'll learn through building projects - step by step. Before we get into the details, let me emphasize: we are not changing the certifications. All 6 certifications will still have the same 5 required projects. We are only changing the optional coding challenges.
  </p>
  <p>After years - years - of pondering these two problems and how to solve them, I slipped, hit my head on the sink, and when I came to I had a revelation! A vision! A picture in my head! A picture of this! This is what makes time travel possible: the flux capacitor!</p>
  <p>It wasn't as dramatic as Doc's revelation in Back to the Future. It just occurred to me while I was going for a run. The revelation: the entire curriculum should be a series of projects. Instead of individual coding challenges, we'll just have projects, each with their own seamless series of tests. Each test gives you just enough information to figure out how to get it to pass. (And you can view hints if that isn't enough.)</p> 
	<blockquote>
    	<hr>
    	<p class="quote">The entire curriculum should be a series of projects</p>
    	<hr>
	</blockquote>
</section>
```
- `<blockquote>`: A tag used to quote a lengthy section of text from another source, often displayed with a left margin.
- `<hr>`: A tag used to create a horizontal line separator between content sections.
- `.quote`: A class used to style or format the quoted content.

**Step 15-17:**
```html
<p>
  No more walls of explanatory text. No more walls of tests. Just one
  test at a time, as you build up a working project. Over the course of passing thousands of tests, you build up projects and your own understanding of coding fundamentals. There is no transition between lessons and projects, because the lessons themselves are baked into projects. And there's plenty of repetition to help you retain everything because - hey - building projects in real life has plenty of repetition.
</p>
<p>
  The main design challenge is taking what is currently paragraphs of explanation and instructions and packing them into a single test description text. Each project will involve dozens of tests like this. People will be coding the entire time, rather than switching back and forth from "reading mode" to "coding mode".
</p>
<p>
  Instead of a series of coding challenges, people will be in their code editor passing one test after another, quickly building up a project. People will get into a real flow state, similar to what they experience when they build the required projects at the end of each certification. They'll get that sense of forward progress right from the beginning. And freeCodeCamp will be a much smoother experience.
</p>
```

**Step 18:**
```html
<section class="text text-with-images">
  <article class="brief-history"></article>
  <aside class="image-wrapper"></aside>
</section>
```
- `<section>`: An HTML tag used to group related content together, often creating sections or paragraphs within a document.
- `<article>`: A tag used to identify an independent piece of content in the document, typically containing information that can be distributed or reused independently, such as an article, blog post, or news item.
- `<aside>`: A tag used to contain related content that is not the main part of the document, such as side notes, additional information, or advertisements, usually presented in the margin or separate from the main content.
- **Class**: An attribute used to identify groups of elements with the same style, allowing for CSS or JavaScript to be applied to those elements.

**Step 19-20:**
```html
<article class="brief-history">
  <h3 class="list-title">A Brief History</h3>
  <p>Of the Curriculum</p>
  <ul class="lists">
    <li>
      <h4 class="list-subtitle">V1 - 2014</h4>
      <p>
        We launched freeCodeCamp with a simple list of 15 resources, including Harvard's CS50 and Stanford's Database Class.
      </p>
    </li>
    <li>
      <h4 class="list-subtitle">V2 - 2015</h4>
      <p>We added interactive algorithm challenges.</p>
    </li>
    <li>
      <h4 class="list-subtitle">V3 - 2015</h4>
      <p>
        We added our own HTML+CSS challenges (before we'd been relying on General Assembly's Dash course for these).
      </p>
    </li>
    <li>
      <h4 class="list-subtitle">V4 - 2016</h4>
      <p>
        We expanded the curriculum to 3 certifications, including Front End, Back End, and Data Visualization. They each had 10 required projects, but only the Front End section had its own challenges. For the other certs, we were still using external resources like Node School.
      </p>
    </li>
    <li>
      <h4 class="list-subtitle">V5 - 2017</h4>
      <p>We added the back end and data visualization challenges.</p>
    </li>
    <li>
      <h4 class="list-subtitle">V6 - 2018</h4>
      <p>
        We launched 6 new certifications to replace our old ones. This was the biggest curriculum improvement to date.
      </p>
    </li>
  </ul>
</article>
```

**Step 21-25:**
```html
<aside class="image-wrapper">
  <img
    src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png"
    alt="image of the quote machine project"
    loading="lazy"
    class="image-1"
    width="600"
    height="400"
  />
  <img
    src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png"
    alt="image of a calculator project"
    loading="lazy"
    class="image-2"
    width="400"
    height="400"
  />
  <blockquote class="image-quote">
    <hr />
    <p class="quote">
      The millions of people who are learning to code
      through freeCodeCamp will have an even better resource to help
      them learn these fundamentals.
    </p>
    <hr />
  </blockquote>
  <img
    src="https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg"
    alt="four people working on code"
    loading="lazy"
    class="image-3"
    width="600"
    height="400"
  />
</aside>
```

**Step 26:**
```css
*, ::before, ::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```
- `*`: Selects all elements in the document.
- `::before, ::after`: Selects pseudo-elements created before and after the content of elements.
- `padding: 0;`: Sets the inner spacing (padding) of all elements to 0.
- `margin: 0;`: Sets the outer spacing (margin) of all elements to 0.
- `box-sizing: border-box;`: Changes how element sizes are calculated. With `border-box`, width and height include padding and border, making it easier to manage sizes without being affected by padding and border.
>This method creates a clean slate for any CSS project, ensuring elements have no unwanted spacing or padding.

**Step 27:**
```css
html {
  font-size: 62.5%;
}
```

**Step 28:**
```css
body {
  font-family: Baskervville, serif;
  color: linen;
  background-color: rgb(20, 30, 40);
}
```

**Step 29:**
```css
h1 {
  font-family: Anton, sans-serif;
}
```

**Step 30:**
```css
h2, h3, h4, h5, h6 {
  font-family: Raleway, sans-serif;
}
```

**Step 31:**
```css
a {
  text-decoration: none;
  color: linen;
}
```

**Step 32:**
```css
main {
  display: grid;
}
```
- `display: grid;`: Sets the display mode of the `<main>` element to grid, allowing the use of CSS Grid properties to shape the layout for child elements.

**Step 33:**
```css
main {
  display: grid;
  grid-template-columns: 1fr 94rem 1fr;
}
```
- `grid-template-columns`: Sets the column layout for the grid.
- `1fr`: Assigns the width of the two outer columns (first and last) to 1 fraction of the remaining space, allowing them to flexibly resize based on available space.
- `94rem`: Assigns a fixed width of 94rem to the middle column.