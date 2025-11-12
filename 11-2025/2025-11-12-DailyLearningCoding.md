**HTML, CSS, and JavaScript – The Three Core Web Technologies**

### 1. Overview

* Every website you see daily is built from three main technologies:

  * **HTML**: creates the content and structure of the page.
  * **CSS**: styles colors, positions, sizes, fonts.
  * **JavaScript**: adds animation, updates data, handles user interaction.
* When combined, they make a website that has content, looks good, and works interactively.

---

### 2. Example 1: Digital Clock

**Files needed:**

* `clock.html` → contains the structure to display hours, minutes, seconds.
* `styles.css` → defines visual style: color, size, position, font.
* `clock.js` → updates the time every second.

**How it works:**

1. HTML displays the basic content (e.g., 00:00:00).
2. CSS makes the clock visually appealing (color, center alignment, size).
3. JavaScript uses the `setInterval()` function to continuously update real time on the interface.

→ **Result:** a fully functioning digital clock that runs automatically.

---

### 3. Example 2: Video Player

**Files needed:**

* `video.html` → contains the `<video>` tag and Play/Pause button.
* `styles.css` → styles the video and button.
* `videoplayer.js` → controls button behavior.

**How it works:**

1. When the page loads, the video is paused.
2. When the user clicks Play, JavaScript:

   * Listens for the button click (event listener).
   * Checks the video status:

     * If paused, plays the video and changes the button to a Stop icon.
     * If playing, pauses the video and changes the button back to Play.

→ JavaScript enables real user interaction on the web page.

---

### 4. Connecting the Three Files

* In both examples:

  * HTML links to CSS (for the appearance).
  * HTML also links to JavaScript (for logic).
* CSS handles the "visible" part.
* JavaScript handles the "interactive and functional" part.
* These three technologies work closely together to create a complete web application.

---

### 5. Quick Summary

* **HTML → Skeleton (content)**
* **CSS → Decoration (style)**
* **JavaScript → Action (logic)**
* Combining all three → a beautiful, content-rich, interactive website.

---

## Distinguishing Web Page, Website, and Web Application

### 1. Web Page (Single Page)

* A single page built with HTML, CSS, and JavaScript.
* Displays static content like text, images, videos.
* Each web page has its own URL and opens in a browser.

→ Example: a company's "About" page.

### 2. Website (Collection of Web Pages)

* A set of multiple web pages linked together (hyperlinks).
* All pages share the same domain name (e.g., wikipedia.org).
* Clicking hyperlinks navigates between pages on the same website.

→ Example: Wikipedia has thousands of web pages under one domain.

**Remember:**

* A hyperlink is a link to "hypertext" content (HTML = HyperText Markup Language).
* Hyperlinks can lead to pages within the same website or to other websites.

### 3. Web Application

* An advanced type of website with high interactivity and dynamic content.
* Users can manipulate, enter data, and receive personalized results.

→ Examples:

* Company website: only displays information (like a brochure).
* Online food ordering app: users select dishes, enter an address → the system responds with personalized data.

**Quick Comparison:**

| Criteria | Website                   | Web Application           |
| -------- | ------------------------- | ------------------------- |
| Purpose  | Provide information       | Allow user interaction    |
| Content  | Same for everyone         | Changes according to user |
| Example  | Company introduction page | Online food ordering app  |

### 4. Quick Notes

* **Web Page →** single page.
* **Website →** collection of web pages under one domain.
* **Web Application →** website with interactive and dynamic content.
* **Main difference:** level of interactivity and dynamic content.

---

## Introduction to Developer Tools

### 1. Concept

* Like opening a car hood to inspect the engine, when the front-end has issues, you can "open" the website with Developer Tools to see problems.
* Most browsers (Chrome, Edge, Firefox) have built-in Developer Tools (DevTools).

### 2. Purpose

Developer Tools allow you to:

* View and inspect HTML, CSS, JavaScript of a page.
* Track HTTP requests/responses between browser and server.
* Analyze performance.
* Check security and debug code.
* Even view the source code of other websites.

### 3. How to Open Developer Tools

* Shortcut keys:

  * Windows: F12
  * Mac: Command + Option + J
* Or right-click → select "Inspect".

### 4. Important Tabs in Developer Tools

| Tab         | Main Function                                                                |
| ----------- | ---------------------------------------------------------------------------- |
| Elements    | View and edit HTML + CSS directly. Hover highlights the element on the page. |
| Console     | Shows JavaScript errors and logs.                                            |
| Sources     | Displays all files (HTML, CSS, JS, images, video) loaded by the page.        |
| Network     | Tracks sending/receiving data (HTTP request & response).                     |
| Performance | Analyzes speed and performance of web application.                           |
| Memory      | Shows which code uses the most resources.                                    |

### 5. Direct Actions in Elements

* Double-click HTML in the Elements tab to edit content directly (e.g., change “Chicken Burger” to “Turkey Burger”).
* Note: changes are temporary and do not affect the actual server content.
* Reloading the page will discard the changes.

### 6. Quick Notes

* Developer Tools = powerful tool to inspect, debug, and temporarily edit web code.
* Helps understand how websites work internally.
* Using DevTools is essential for every Front-End Developer.

---

## Notes on Frameworks and Libraries in Software Development

### Frameworks and Libraries

### 1. Why Use Frameworks and Libraries

* When developing software, you don’t need to start everything from scratch.
* Many problems are already solved by others — packaged as frameworks and libraries.
* Like a carpenter using a ready-made hammer, a programmer uses frameworks/libraries to save time.

### 2. Basic Definitions

| Term      | Simple Explanation                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| Library   | A set of reusable code snippets for specific functions. Call the functions when needed.                            |
| Framework | Provides a predefined structure for an application. You insert your code; the framework controls the program flow. |

### 3. Examples

* **Library:**

  * When users enter an email to register, you can use a library to validate it instead of writing complex rules.
    → Saves time, reduces errors.
* **Framework:**

  * When building an e-commerce site, a framework (React, Angular, Django…) will:

    * Handle HTTP request/response.
    * You only add logic for functions like registration, purchasing, etc.

### 4. Framework and Library Relationship

* Framework may contain multiple libraries.
* Your application can still use additional libraries if needed.
* Summary:

  * Framework = "prebuilt skeleton" (defines structure and flow).
  * Library = "toolkit" (you call when needed).

### 5. Opinionated vs. Unopinionated

| Term          | Meaning                                                                  |
| ------------- | ------------------------------------------------------------------------ |
| Opinionated   | Framework forces you to follow its rules, faster but less flexible.      |
| Unopinionated | Library lets you decide usage, more flexible but more management needed. |

### 6. Pros and Cons

| Tool      | Pros                                                             | Cons                                              |
| --------- | ---------------------------------------------------------------- | ------------------------------------------------- |
| Framework | Reduces development time, built-in structure and best practices. | Less flexible, may conflict with other libraries. |
| Library   | Easy to replace, flexible, high control.                         | Need to select and ensure compatibility manually. |

### 7. Summary

* Frameworks and Libraries save time, reduce errors, accelerate development.
* **Framework →** application skeleton.
* **Library →** individual support tools.
* Use them instead of "reinventing the wheel."

---

## API (Application Programming Interface)

### 1. What is API?

* API is a set of functions and procedures that allows applications to communicate, share data, or features.
* Simply put: an API is a bridge between software systems — letting them “talk” to each other.
* API is considered a "gateway" or "middleware" in software development.

### 2. API Role in Web Development

* Most web and mobile apps use APIs to transfer data.
* APIs allow web clients (websites, apps) to communicate with web servers.
* Essential and friendly tool for programmers.

### 3. Common API Types

| API Type           | Description                                                                                      | Example                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Browser (Web) API  | Built into the browser, extends capabilities and manipulates web content.                        | DOM API, Geolocation API, Fetch API, Canvas API, History API/Web Storage API |
| RESTful (REST) API | Communication between client and server via HTTP. Used to retrieve, create, update, delete data. | GET, POST, PUT, DELETE                                                       |
| Sensor-Based API   | Used in IoT, connects physical devices over a network.                                           | Philips Hue smart lights, NodeBots robots                                    |

### 4. How REST API Works

* **Endpoint:** URL specifying the resource you want to access.
  → Example: `https://api.example.com/users`
* Client sends request → server processes → returns response.
* Response is usually:

  * Full HTML, or
  * JSON (JavaScript Object Notation).

### 5. Benefits of API

* Speeds up software development.
* Reuse existing features.
* Reduce errors, increase connection efficiency.
* Bridges different systems.

### 6. Notes

* **API = bridge between systems and data.**
* Three common types: Browser API – REST API – Sensor API.
* REST API is most commonly used in web development.
* API uses endpoints to communicate and return JSON data.

---

## IDE (Integrated Development Environment)

### 1. What is IDE?

* IDE is software used to build applications.
* Like a text editor, but instead of writing documents, you write code.
* Some IDEs support a single language, others support multiple languages.
* IDE is an essential tool in a programmer's "toolbox."

### 2. Key Features of IDE

* **Syntax Highlighting:** highlights keywords, variables, symbols in different colors for readability and error detection.
* **Error Highlighting:** automatically detects and underlines errors (like spellcheck).
* **Autocomplete:** suggests code completions while typing.
* **IntelliSense:** understands your code; suggests relevant functions/variables.
* **Refactoring:** changes code structure without changing functionality, e.g., rename functions or variables project-wide.

### 3. Advanced Features

* Debugging: step-by-step error checking.
* Collaboration: support teamwork.
* Extensions/Plugins: add extra functionalities to IDE.

### 4. Conclusion

* IDE = central tool for faster, error-free programming.
* Helps write code efficiently, debug easily, manage large projects.
* Popular IDEs: VS Code, Visual Studio, IntelliJ IDEA, PyCharm, Eclipse, NetBeans.

### 5. Quick Summary

1. IDE supports writing, running, and managing code.
2. Features: syntax highlighting, error detection, code suggestions.
3. IntelliSense allows smart suggestions.
4. Refactoring enables project-wide renaming/editing.
5. IDE makes coding faster, more accurate, and professional.

---

## HTML, Tags, and Elements

### 1. What is HTML?

* HTML (HyperText Markup Language) builds the structure of web pages.
* **Hypertext:** text containing links to other text.
* **Markup:** tags and elements defining content.

### 2. HTML Origin

* Invented by Sir Tim Berners-Lee (CERN) in 1991.
* He also created the first website and browser.
* HTML became the global information-sharing standard.

### 3. HTML Structure

* HTML files have `.html` extension.
  → Example: `index.html` is the main page of a website.
* A page contains multiple **elements**.

### 4. Tags and Elements

* **Opening tag:** `<p>`
* **Closing tag:** `</p>`
* **Element = Opening tag + Content + Closing tag**
  → Example: `<p>Hello world!</p>`

### 5. Nested Elements

* Elements can contain other elements.
  → Example: `<p>This is <i>italic</i> text.</p>`

### 6. Self-Closing Elements

* No closing tag.
  → Example: `<br>` (line break), `<img src="image.png" />`

### 7. HTML Standards

* Regulated by W3C (World Wide Web Consortium).
* Current version: HTML5.

### 8. HTML and Browsers

* Browser reads HTML → displays page structure.
* HTML describes content and layout; CSS handles style.

**Summary:**

* HTML = skeleton.
* Tags create elements.
* Opening, closing, or self-closing tags.
* W3C manages standards.
* HTML displays content, CSS styles it, JavaScript adds interactivity.

---

## Creating a Basic HTML Page – Little Lemon

### 1. View HTML Locally

* HTML can open in browsers without a web host.
* Save HTML → open in browser (like "takeaway at home").

### 2. Create HTML File

* Use Visual Studio Code.
* Step 1: Right-click in Explorer → New File → name it `index.html`.
* Step 2: Create basic HTML structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Little Lemon</title>
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

* `<!DOCTYPE html>`: tells browser this is HTML5.
* `<html>`: root element.
* `<head>`: metadata (not displayed).

  * `<title>`: displayed on browser tab.
  * `<meta>`: description, keywords, SEO.
  * Link to CSS if any.
* `<body>`: visible page content.

### 3. Add Basic Content

* Main heading: `<h1>` → e.g., `<h1>Our Menu</h1>`
* Dish names: `<h2>`
  → e.g., `<h2>Falafel</h2>`
* Description: `<p>`
  → e.g., `<p>Chickpea, herbs, and spices</p>`
  → e.g., `<p>Lettuce, vegetables, and mozzarella</p>`

### 4. Test Web Page

* Save file: Ctrl+S (Windows) / Command+S (Mac)
* Open in browser:

  * Windows: Right-click → Reveal in File Explorer → double-click `index.html`
  * Mac/Linux: Finder or File Browser
* Browser shows:

  * Tab title = `<title>`
  * Content displayed according to `<h1>`, `<h2>`, `<p>`

### 5. Summary

* HTML creates page structure: `<head>` = metadata, `<body>` = content.
* Basic tags learned: `<h1>`, `<h2>`, `<p>`, `<title>`, `<meta>`, `<html>`, `<head>`, `<body>`.
* Practice: add more content, open locally in browser.

---

## Summary of Basic HTML Tags

### 1. Headings

* Six levels: `<h1>` → `<h6>`
* `<h1>` = most important, `<h6>` = least important.

```html
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
</body>
```

* Display: large → small.

### 2. Paragraphs

* `<p>` holds text.
* Line breaks in code ignored unless `<br>` used.

```html
<p>
   This paragraph
   contains a lot of lines
   but they are ignored.
</p>
```

### 3. Line Breaks

* `<br>` for line break, no closing tag.

```html
<p>
   This paragraph<br>
   contains a lot of lines<br>
   and they are displayed.
</p>
```

### 4. Text Emphasis

* `<strong>`: important, bold.
* `<b>`: bold, draws attention, not semantic.
* `<em>`: emphasized, italic, semantic.
* `<i>`: italic, for terms, book titles, foreign words.

```html
<p>No matter how much the dog barks: <strong>don't feed him chocolate</strong>.</p>
<p>The three core technologies of the Internet are <b>HTML</b>, <b>CSS</b>, <b>Javascript</b>.</p>
<p>Wake up <em>now</em>!</p>
<p>My favourite book is <i>Dracula</i>.</p>
```

### 5. Lists

* **Unordered List (Bulleted):** `<ul>` + `<li>`

```html
<ul>
   <li>Tea</li>
   <li>Sugar</li>
   <li>Milk</li>
</ul>
```

* **Ordered List (Numbered):** `<ol>` + `<li>`

```html
<ol>
   <li>Rocky</li>
   <li>Rocky II</li>
   <li>Rocky III</li>
</ol>
```

### 6. Divisions

* `<div>`: general container to group content. No visual impact without CSS.
* Can nest `<div>` inside `<div>`.

```html
<div>
   <div>
      <p>This is a paragraph inside a div that’s inside another div</p>
   </div>
</div>
```

* Add CSS:

```html
<style>
   div {
      border: 1px solid black;
      padding: 2px;
   }
</style>
```

### 7. Comments

* For notes, not displayed in browser.

```html
<!-- This is a comment -->
```

---

**Building a Website from Multiple HTML Pages**

1. **Basic Idea**

* A website consists of multiple web pages that are linked together.
* To link pages, use the `<a>` (anchor) tag.
* Main attribute: `href` – specifies the file or URL to link to.
* The text between `<a>` tags is the visible content that acts as a clickable link on the page.

2. **Creating a New Page**
3. In the project folder, create a new file, e.g., `location.html`.
4. Use the standard HTML structure similar to `index.html`.
5. Add new content:

```html
<h1>Our Location</h1>
<p>123 Rome Road, Main Districts, Capital City</p>
```

4. Save the file (Ctrl + S or Cmd + S on Mac).

5. **Adding a Link from the Main Page**

6. Open `index.html`.

7. Below the last paragraph, add an anchor tag `<a>`:

```html
<a href="location.html">Our Location</a>
```

* `href="location.html"`: links to the `location.html` page.
* The text "Our Location" will be displayed on the page and clickable.

4. **Checking the Link**

5. Save the file (Ctrl + S / Cmd + S).

6. Open `index.html` in the browser.

7. The "Our Location" link appears in blue → clicking it opens `location.html`.

8. **Conclusion**

* Use the `<a>` tag to link multiple HTML pages, creating a multi-page website.
* This is the basic step from a single webpage → multi-page website.

---

**Adding Images to a Website with the `<img>` Tag**

1. **Basic Idea**

* A website becomes much more engaging with images, especially for food-related sites.
* In HTML, images are not directly “inserted” but use `<img>` to create a placeholder and link to the image file.
* Important attributes of `<img>`:

  * `src` → path to the image file (source).
  * `width` → width of the image (px).
  * `height` → height of the image (px).
  * `alt` → text description of the image (improves accessibility and SEO).

2. **Example on Little Lemon Page**
3. In the project folder, have two image files:

* `falafel.jpeg`
* `salad.jpeg`

2. Add `<img>` tags to `index.html` or relevant page:

```html
<img src="falafel.jpeg" width="240" height="135" alt="A falafel">
<img src="salad.jpeg" width="240" height="135" alt="A pasta salad">
```

3. **Explanation**

* `src`: specifies the image path.
* `width` and `height`: adjust display size (px).
* `alt`: short description, not displayed on the web, but read by screen readers.
* Save the file and open the page in the browser → images appear correctly with descriptions.

4. **Benefits**

* Enhance user experience with images.
* Improve accessibility for users with disabilities.
* Improve SEO via the `alt` attribute.

---

**Adding a Price Table Using HTML Table**

1. **Basic Idea**

* To display prices or a list of information, HTML provides the `<table>` tag.
* HTML tables are similar to Excel: consist of rows and columns.
* Main elements:

  * `<table>` → create table
  * `<tr>` → table row
  * `<td>` → table data cell
  * `<th>` → table header cell

2. **Example Price Table for Little Lemon**

```html
<table>
  <!-- Header row -->
  <tr>
    <th>Dish</th>
    <th>Price</th>
  </tr>
  
  <!-- Data row 1 -->
  <tr>
    <td>Falafel</td>
    <td>$10</td>
  </tr>

  <!-- Data row 2 -->
  <tr>
    <td>Pasta Salad</td>
    <td>$12</td>
  </tr>
</table>
```

* `<th>` creates column headers: Dish and Price.
* `<td>` contains actual data for each dish and price.

3. **Adding CSS for Better Look**

```html
<style>
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
  }
</style>
```

* Result:

  * Cells have borders
  * Data is clear and readable

4. **Benefits**

* Organize information: dish prices, schedules, product sizes, specs, etc.
* Easy to extend and style using CSS for a nicer look.

---

**HTML Forms – How to Create Web Forms**

1. **Why Forms are Needed**

* Forms are essential for interactive websites:

  * Enter payment info for online shopping.
  * Log in to websites.
  * Send data to a server.
* When users fill out and submit a form, it sends an HTTP request containing the data to the server.

2. **Creating a Basic Form**

```html
<form action="TARGET_URL" method="POST">
  <!-- Form content here -->
</form>
```

* `action` (optional): URL or path to receive form data.
* `method`: way to send data:

  * `GET` → retrieve data from server
  * `POST` → send data to server

3. **Basic Inputs**

* Text input (single line)

```html
<label for="username">User Name:</label>
<input type="text" id="username" name="username">
```

* Password input

```html
<label for="password">Password:</label>
<input type="password" id="password" name="password">
```

* Submit button

```html
<input type="submit" value="Submit">
```

4. **Other Input Types**

* Checkbox (multiple selection)

```html
<input type="checkbox" name="newsletter" value="yes"> Subscribe to newsletter
```

* Radio button (choose 1 option)

```html
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```

* Number input

```html
<input type="number" name="quantity" min="1" max="10">
```

* Email input

```html
<input type="email" name="user_email">
```

* File upload

```html
<input type="file" name="profile_pic">
```

5. **Inputs Without `<input>`**

* Text area (multiple lines)

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>
```

* Select (drop-down list)

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>
```

6. **Summary**

* `<form>` → start form
* `<label>` → create label for input
* `<input>` → multiple types: text, password, checkbox, radio, number, email, file, submit
* `<textarea>` → multi-line input
* `<select>` + `<option>` → drop-down list

7. **Notes**

* Choose proper input types for better UX.
* Forms are used daily: shopping, login, registration, search, etc.

---

**Document Object Model (DOM) – Document Object Model**

1. **What is DOM**

* DOM is the Document Object Model.
* When a browser receives an HTML page, it creates a DOM tree representing the HTML structure.
* DOM is a tree of objects, each corresponding to an HTML element.

2. **DOM Structure**
   Example HTML:

```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div>
      <h1>Hello</h1>
    </div>
    <div>
      <p>Welcome!</p>
    </div>
  </body>
</html>
```

DOM tree:

```
html
 ├─ head
 │   └─ title
 │       └─ text("My Page")
 └─ body
     ├─ div
     │   └─ h1
     │       └─ text("Hello")
     └─ div
         └─ p
             └─ text("Welcome!")
```

* Root: `html`
* Children: `head` and `body`
* Leaf nodes: text inside elements
* Modern websites can have hundreds of elements → more complex DOM.

3. **JavaScript Interacts with DOM**

* JavaScript can access and manipulate the DOM to make web pages dynamic.
* Common actions:

  1. **Update content** – e.g., updating a digital clock.
  2. **Handle user behavior** – e.g., preview video on hover, disable button on login click.
  3. **Add or remove DOM objects** – e.g., add error messages, remove items from a to-do list.
  4. **Animation** – e.g., fade-in page load, popup alerts.
* Popular JS libraries based on DOM: React, jQuery, Vue…

4. **Benefits**

* Allows interactive webpages: users can click, enter data, receive notifications.
* Makes websites dynamic rather than static HTML-only.

5. **Practical Examples**

* Social media:

  * Like button changes color when clicked
  * Notifications appear for new messages
* To-do list:

  * Remove an item when clicked
* Forms:

  * Show errors immediately for invalid input

6. **Summary**

* HTML → DOM → JS manipulates content/display
* DOM is an object tree representing HTML
* JS + DOM = dynamic, interactive web with better user experience

---

## **Web Accessibility – Making the Web Accessible for Everyone**

### 1. Definition

* **Web accessibility** means ensuring that everyone, including people with disabilities, can access, understand, navigate, and interact with websites.
* It’s not only for people who are visually impaired, but also includes:

  * People who are both visually and hearing impaired
  * People with cognitive and neurological difficulties
  * People with motor and speech impairments
* **Goal:** A website should work for all users, just like a building equipped with elevators, ramps, and handrails for people with disabilities.

### 2. History and Standards

* **WAI (Web Accessibility Initiative)** was launched by **W3C** in 1997.
* **Tim Berners-Lee:** “The power of the Web is in its universality – access by everyone regardless of disability.”
* WAI provides international standards for web accessibility.
* In 2016, the **EU Web Accessibility Directive** required that websites and mobile apps of public sector bodies support accessibility for people with disabilities.

### 3. Assistive Technologies

* **Screen readers:** Read website content aloud, helping people with visual impairments or reading/learning difficulties.
* **Speech recognition:** Converts spoken words into commands or text, assisting those who cannot use a keyboard or mouse.
* **Subtitles & video scripts:** Help users who are deaf or hard of hearing.

Using these technologies allows people with disabilities to interact more easily with websites.

### 4. Best Practices to Improve Accessibility

1. **Use proper HTML structure**

   * Text should be placed inside appropriate tags: `<p>`, `<h1>`–`<h6>` …
   * Avoid using multiple `<br>` tags to create space → this causes issues for assistive technologies.

2. **Think about accessibility from the start**

   * It’s much harder to fix later.

3. **ARIA (Accessible Rich Internet Applications)**

   * A technical specification that improves accessibility for complex web applications.
   * Provides techniques for adding information to web elements for assistive technology users.

### 5. Advice

* Think of website design like an architect building a structure — it must include ramps, rails, and elevators so that everyone can use it.
* Accessibility is not just about legal compliance — it’s about creating a better experience for all users.

---

## **CSS – Cascading Style Sheets (Web Design and Styling)**

### 1. HTML vs CSS – The Building Analogy

* **HTML:** The structure or framework of a building — creates the layout of a webpage.
* **CSS:** The paint, wallpaper, lights, furniture, and decor — defines the look and user experience.
* CSS tells the browser how to display HTML elements on the screen.

### 2. Basic CSS Structure

A CSS rule consists of 3 parts:

1. **Selector:** Specifies which HTML elements the style applies to.

   * Example: `h1` → all `<h1>` tags on the page.

2. **Declaration block:**

   * Starts with `{` and ends with `}`.
   * Contains style declarations.

3. **Declaration:**

   * Consists of a **property** and a **value**, ending with a semicolon `;`.
   * Example:

     ```css
     h1 {
       color: purple;
       background-color: gray;
     }
     ```
   * Result: All `<h1>` elements display purple text on a gray background.

### 3. Common Types of Selectors

* **Type selector:** Applies to all HTML elements of the same type (`h1`, `p`, `div`).
* **ID selector:** Applies to a unique element (`#headerOne`).

  * ID selectors have higher specificity than type selectors.

### 4. How to Apply CSS to HTML

1. Create a CSS file (e.g., `style.css`).
2. Link the CSS file to your HTML in the `<head>` section:

   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Write your CSS rules in the file and save.
4. Changes appear instantly if using **Live Preview** in VS Code.

### 5. Summary

* CSS defines how browsers display HTML.
* A CSS rule = selector + declaration block + declaration.
* Selectors determine elements; declaration blocks contain properties and values.
* ID selectors have higher priority than type selectors.
* CSS makes websites visually appealing, intuitive, and user-friendly.

---

## **Common CSS Selectors**

### 1. Element Selector

* Selects all HTML elements of a given type.
* Syntax:

  ```css
  element { property: value; }
  ```
* Example:

  ```html
  <p>Once upon a time...</p>
  <p>In a hidden land...</p>
  ```

  ```css
  p { 
    color: blue; 
  }
  ```
* Result: All `<p>` elements appear in blue.

### 2. ID Selector

* Selects an element by its **unique ID**.
* Syntax:

  ```css
  #id { property: value; }
  ```
* Example:

  ```html
  <span id="latest">New!</span>
  ```

  ```css
  #latest { 
    background-color: purple; 
  }
  ```
* Result: Only the element with `id="latest"` has a purple background.

### 3. Class Selector

* Selects all elements with a specific class.
* Syntax:

  ```css
  .classname { property: value; }
  ```
* Example:

  ```html
  <a class="navigation">Go Back</a>
  <p class="navigation">Go Forward</p>
  ```

  ```css
  .navigation { 
    margin: 2px;
  }
  ```
* Result: Both `<a>` and `<p>` elements with class `navigation` have a margin of 2px.

### 4. Element with Class

* Selects specific elements that have a given class.
* Syntax:

  ```css
  element.classname { property: value; }
  ```
* Example:

  ```html
  <p class="introduction"></p>
  ```

  ```css
  p.introduction { 
    margin: 2px;
  }
  ```
* Result: Only `<p>` elements with class `introduction` get the style.

### 5. Descendant Selector

* Selects elements inside another element.
* Syntax:

  ```css
  ancestor descendant { property: value; }
  ```
* Example:

  ```html
  <div id="blog">
    <h1>Latest News</h1>
    <div>
      <h1>Today's Weather</h1>
      <p>The weather will be sunny</p>
    </div>
    <p>Subscribe for more news</p>
  </div>
  <div>
    <h1>Archives</h1>
  </div>
  ```

  ```css
  #blog h1 {
    color: blue;
  }
  ```
* Result: All `<h1>` elements inside `#blog` are blue, but `<h1>` outside `#blog` are unaffected.

### 6. Child Selector

* Selects **direct child elements** of a parent.
* Syntax:

  ```css
  parent > child { property: value; }
  ```
* Example:

  ```css
  #blog > h1 {
    color: blue;
  }
  ```
* Only `<h1>` directly inside `#blog` is selected; nested ones are not.

### 7. Pseudo-class

* Selects elements based on their **state** (e.g., hover, focus, active).
* Syntax:

  ```css
  element:pseudo-class { property: value; }
  ```
* Example:

  ```css
  a:hover {
    color: orange;
  }
  ```
* When the user hovers over `<a>`, the text turns orange.

---

## **Text and Color in CSS**

### 1. Colors in CSS

CSS supports several ways to define colors for elements.

#### a. RGB (Red, Green, Blue)

* Each color is defined by three values (0–255).

  ```css
  p { 
    color: rgb(255, 0, 0); /* red */
  }
  ```
* `rgb(255, 0, 0)` = red, `rgb(0,0,0)` = black, `rgb(255,255,255)` = white.

#### b. RGBA

* Same as RGB but with an alpha channel (A) for transparency.

  ```css
  p { 
    color: rgba(255, 0, 0, 0.8); /* red with 80% opacity */
  }
  ```

#### c. HSL (Hue, Saturation, Lightness)

* **Hue (H):** color position on the 0–360° wheel (0°=red, 120°=green, 240°=blue).
* **Saturation (S):** intensity (0%=gray, 100%=full color).
* **Lightness (L):** brightness (0%=black, 100%=white).

  ```css
  p { 
    color: hsl(0, 100%, 50%); /* bright red */
  }
  ```

#### d. Hexadecimal (Hex)

* Uses hex RGB values with a `#` prefix.

  ```css
  p { 
    color: #FF0000; /* red */
  }
  ```
* 140 standard color names are also available: `red`, `green`, `blue`, `black`, `white`.

---

### 2. Text in CSS

#### a. Text Color

```css
p { 
  color: red;
}
```

#### b. Font and Size

```css
p { 
  font-family: "Courier New", monospace;
  font-size: 12px;
}
```

#### c. Text Transform

```css
p { 
  text-transform: uppercase; /* all uppercase */
}
```

Common values: `uppercase`, `lowercase`, `capitalize`, `none`.

#### d. Text Decoration

```css
p { 
  text-decoration: underline; /* underline */
}
```

You can customize color, thickness, and style:

```css
p { 
  text-decoration: underline red solid 5px;
}

/* or separated properties */
p { 
  text-decoration-line: underline;
  text-decoration-color: red;
  text-decoration-style: solid;
  text-decoration-thickness: 5px;
}
```

Common `text-decoration-line` values: `underline`, `overline`, `line-through`, `none`.
Common `text-decoration-style` values: `solid`, `double`, `dotted`, `dashed`, `wavy`.

---

## **CSS Box Model**

### 1. Introduction

* When a browser renders an HTML element, each element is wrapped in a rectangular box.
* CSS applies its rules to this box, not directly to the content.
* The goal: to create a clean, readable, and navigable layout — like a well-organized restaurant.

### 2. Structure of the Box Model

Each box includes **4 main parts**:

#### 2.1 Content

* The area containing text, images, videos, etc.
* Dimensions: `content-width` and `content-height`.
* CSS properties:
  `width`, `min-width`, `max-width`, `height`, `min-height`, `max-height`

#### 2.2 Padding

* Space between the content and the border.
* Dimensions: `padding-box-width` and `padding-box-height`.
* Formula:

  ```
  padding-box-width = content-width + padding-left + padding-right
  padding-box-height = content-height + padding-top + padding-bottom
  ```
* Example:

  ```css
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  ```

#### 2.3 Border

* Surrounds the padding and content.
* Types: `solid`, `dashed`, `double`, `dotted`, etc.
* Dimensions: `border-box-width` and `border-box-height`.
* Formula:

  ```
  border-box-width = padding-box-width + border-left + border-right
  border-box-height = padding-box-height + border-top + border-bottom
  ```
* Example:

  ```css
  border-width: thin; /* medium, thick */
  border-style: solid;
  border-color: black;
  ```

#### 2.4 Margin

* Space between this box and surrounding elements.
* Dimensions: `margin-box-width` and `margin-box-height`.
* Formula:

  ```
  margin-box-width = border-box-width + margin-left + margin-right
  margin-box-height = border-box-height + margin-top + margin-bottom
  ```
* Example:

  ```css
  margin-top: 20px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-left: 15px;
  ```

### 3. How to Remember the Box Model

* **Content → You**
* **Padding → Your clothing**
* **Border → Your body outline**
* **Margin → Your personal space**

### 4. Notes and Tips

1. The Box Model is the foundation of all web layouts.
2. Use **shorthand properties** to simplify:

   ```css
   padding: 10px 15px 10px 15px; /* top right bottom left */
   margin: 20px 15px; /* top-bottom right-left */
   border: 2px solid red;
   ```
3. Practice with padding, border, and margin to make your web pages neat and readable.

---

**Document Flow and Block vs Inline Elements**

1. **Document Flow**
   • The browser needs to know the position of HTML elements on the screen.
   • Document Flow is the way the browser calculates the default positioning of elements.
   • By default, most HTML elements fall into two main categories:
2. Block-level elements
3. Inline elements

---

2. **Block-level Elements**
   • Occupy the entire width of their parent element and height based on their content.
   • Each block-level element starts on a new line.
   • Multiple block-level elements stack vertically, like a stack of boxes.
   • Examples:

```html
<div>...</div>  
<form>...</form>  
<h1>...</h1>  
<h2>...</h2>  
<p>...</p>
```

---

3. **Inline Elements**
   • Take up only as much width and height as their content.
   • Do not start on a new line, so multiple inline elements can appear side by side.
   • Examples:

```html
<a>...</a>  
<img src="...">  
<input>  
<label>...</label>  
<b>...</b>  
<i>...</i>  
<em>...</em>  
<span>...</span>
```

---

4. **Illustration Example**

**Initial HTML:**

```html
<div>
  <span>Sentence 1</span>
  <span>Sentence 2</span>
  <span>Sentence 3</span>
</div>
```

• All text appears on the same line because `span` is an inline element.

**Change sentence 2 from `span` → `div`:**

```html
<div>
  <span>Sentence 1</span>
  <div>Sentence 2</div>
  <span>Sentence 3</span>
</div>
```

• Since `div` is a block element, Sentence 2 appears on a new line.
• Sentence 3 also moves to a new line (following the document flow).

---

5. **CSS display Property**
   • You can switch between block and inline with CSS:

```css
#middle {
  display: inline; /* or block */
}
```

• To revert, simply remove or change the value.

---

6. **Important Notes**
   • **Block elements**: Start on a new line and take up the full width of the page.
   • **Inline elements**: Stay within the content line and do not start a new line.

---

### **Alignment in CSS**

1. **Text Alignment**
   • CSS Property: `text-align`
   • Syntax:

```css
p {
  text-align: center; /* left, right, center, justify */
}
```

• Common values:

* `left` → align left (default for left-to-right languages like English)
* `right` → align right (default for right-to-left languages like Arabic)
* `center` → center align
* `justify` → stretch text so all lines are equal in width

---

2. **HTML Element Alignment**
   • More complex because it depends on the box model and document flow.
   • Elements can be aligned center, left, or right using `margin`, `display`, `float`, or `position`.

---

#### 2.1 Centering Block Elements

**HTML:**

```html
<div class="parent">
  <div class="child"></div>
</div>
```

**CSS (for visualization):**

```css
.parent {
  border: 4px solid red; /* parent border */
}

.child {
  width: 50%;
  padding: 20px;
  border: 4px solid green; /* child border */
  margin: auto; /* centers horizontally */
}
```

• Note: Works only with block-level elements such as `div`.

---

#### 2.2 Centering Inline Elements

• Example: images (`img`) are inline by default.
• To center them, convert to block and use `margin: auto`:

```html
<div class="parent">
  <img src="photo.png" class="child">
</div>
```

```css
.child {
  display: block; /* convert to block */
  width: 50%;
  margin-left: auto;
  margin-right: auto; /* center horizontally */
}
```

---

#### 2.3 Align Left/Right Using Float

• The `float` property places an element to the left or right, allowing text to wrap around it.

**HTML & CSS Example:**

```html
<div class="parent">
  <img src="photo.png" class="child">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
</div>
```

```css
.child {
  float: right; /* align to the right */
}
```

• Result: the image is aligned to the right, and text wraps on the left.

---

3. **Notes**
   • `margin: auto` → centers block-level elements.
   • `display: block` → needed for inline elements you want to center.
   • `float` → aligns elements left or right with text wrapping.
   • Advanced alignment using `position` will be covered later.