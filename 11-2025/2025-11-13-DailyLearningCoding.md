## Adding CSS and JavaScript Libraries to an HTML File

### 1. Introduction

Just like cooking — you can experiment on your own or follow a recipe — in web development, you can:
•	Write all the code yourself from scratch, or
•	Reuse code written by others, such as libraries or frameworks.

This lesson explains:
•	How to add CSS and JavaScript libraries to an HTML file.
•	The meaning of “dependency,” “package manager,” and “bundler.”

---

### 2. The Concept of “Dependency”

•	In an application, the code you write interacts with the APIs of libraries or frameworks.
•	When deploying to a web server, you must include those libraries/frameworks.
•	If they are missing, the application cannot call the required API functions.
•	Therefore, these libraries and frameworks are called *dependencies* — because the application depends on them to work.

→ On the front end, you add them by referencing the CSS or JavaScript files in your HTML file.

---

### 3. Example: Adding the Bootstrap Library

**Step 1: Add CSS**
In the `<head>` section of your HTML, add a `<link>` tag to reference the Bootstrap CSS file:

```html
<link href="bootstrap.css" rel="stylesheet">
```

•	`href` specifies the path to the CSS file.
•	`rel="stylesheet"` indicates that this is a style sheet file (CSS).

**Step 2: Add JavaScript**
In the `<body>` section, add a `<script>` tag to reference the Bootstrap JavaScript file:

```html
<script src="bootstrap.js"></script>
```

**Step 3: Add a Bootstrap Button**
For example, add a button labeled “Click this button”:

```html
<button type="button" class="btn btn-primary">Click this button</button>
```

•	`btn` is the base CSS class.
•	`btn-primary` applies the primary color (usually blue).

**Result:**
The browser displays a pre-styled blue button.

---

### 4. Dependency Tree

•	A library can depend on other libraries.
•	The collection of these dependencies is called a *dependency tree*.
•	Large projects may have hundreds of dependencies — making manual installation time-consuming.

**Solution:** Use a *Package Manager*.

---

### 5. Package Manager

•	A package manager automatically downloads and installs dependencies.
•	Dependencies are also called *packages*.
•	You can specify versions for each package.
•	The package manager will automatically:

* Download the entire dependency tree.
* Ensure all team members use the same library versions.

The most popular front-end package manager is **npm (Node Package Manager)**.

---

### 6. Bundler

•	After downloading all packages, you need to include them in your HTML.
•	But if there are hundreds of JS/CSS files, it becomes inefficient.

→ Use a *bundling tool* to combine everything into one (or a few) files.

**Common bundlers include:**
•	Gulp
•	Webpack

**Bundlers help:**
•	Reduce the number of files to load.
•	Optimize website performance.

---

## Responsive Design

### 1. Introduction

Have you ever wondered why a website can automatically adjust its layout to fit any device — from desktop computers to tablets and smartphones?
The answer is *Responsive Design*.

Responsive Design allows a webpage to automatically resize and rearrange its layout to match the screen size it’s viewed on.
The goal is to provide the best user experience on every device.

---

### 2. Screen and Resolution

•	Each screen (phone, tablet, computer) consists of thousands of pixels — tiny lights that form images.
•	**Resolution** = number of pixels horizontally × vertically.

**Example:** 1920 × 1080 pixels is a common resolution.

**High-Resolution Screens**
•	Some devices (like modern smartphones) have “Retina” or “HD” displays — combining multiple physical pixels into one logical pixel.
•	Result:

* Smoother text, images, and rounded edges.
* Fewer visible pixels.

→ Because of the wide variety of resolutions, *Responsive Design* is essential for correct display across all devices.

---

### 3. The Three Core Techniques of Responsive Design

**3.1. Flexible Grids**
•	Consist of columns, gutters, and margins.
•	Instead of using fixed pixels, use percentage (%) values for sizing.
→ Elements automatically adjust with screen size.

**3.2. Fluid Images**
Use this CSS property:

```css
img {
  max-width: 100%;
}
```

•	The image will shrink when its container narrows,
but won’t stretch beyond its original size — preventing blurriness.
→ The image always fits neatly within its frame.

**3.3. Media Queries**
•	A CSS feature that allows styling based on screen size or orientation.

Example syntax:

```css
@media (max-width: 700px) {
  body {
    background-color: blue;
  }
}
```

Meaning: if the screen is 700px wide or less (like on a phone), the background turns blue.

→ Media Queries enable automatic layout changes for different device types.

---

### 4. Breakpoint

•	A *breakpoint* is the pixel value where the website layout changes to fit the screen.
•	Each breakpoint determines when UI elements shift layout for optimal display.

---

### 5. Types of Grids in Responsive Design

**5.1. Fixed Grid**
•	Columns have fixed widths, but margins are flexible.
•	Content changes only within certain breakpoint ranges.

**5.2. Fluid Grid**
•	Columns have flexible (fluid) widths, while margins and gutters are fixed.
•	Columns expand or contract with the screen → always occupy full width.

**5.3. Hybrid Grid**
•	A combination of fixed and flexible parts.
•	Common in modern frameworks like Bootstrap.

---

### 6. Frameworks Supporting Responsive Design

•	Frameworks like **Bootstrap** provide ready-made CSS rules for various device types (mobile, tablet, desktop).
•	They speed up development and ensure a consistent appearance across screen sizes.

---

### 7. Summary

•	Responsive Design helps websites adapt to all devices.
•	It includes three key techniques:

1. Flexible Grids
2. Fluid Images
3. Media Queries
   •	Breakpoints determine when layouts shift.
   •	There are three types of grids: Fixed, Fluid, and Hybrid.
   •	Frameworks like Bootstrap make applying Responsive Design faster and standardized.

---

## Creating a Simple Website with Bootstrap

### 1. Introduction

•	When designing a website, consider how to organize UI elements and menus effectively.
•	Bootstrap is a collection of prewritten CSS and JavaScript code that allows you to create websites quickly without starting from scratch.
•	Building a site entirely by hand is time-consuming — Bootstrap shortens the process.

---

### 2. Setup and Layout

•	Use an HTML file that links to the Bootstrap library.
•	Start with a basic layout containing:

**1. Container**

* Add a `<div>` with the class `container`.
* It serves as the outer wrapper for Bootstrap’s grid system.

**2. Row**

* Inside the container, add a `<div>` with the class `row`.

**3. Columns**

* Add two `<div>` elements with the class `col`:

  * One column for the food menu.
  * One column for the price table.

---

### 3. Creating the “Our Menu” Column

In the first column:
•	Add a heading: `<h1>Our Menu</h1>`
•	Below the heading, include details for each dish:

* Name: use `<h2>`
* Ingredients: use `<p>`
* Image: use `<img>` with the class `img-fluid`

Example dish 1:

```html
<h2>Falafel</h2>
<p>Chickpea, herbs, and spices</p>
<img src="falafel.jpeg" class="img-fluid">
```

Example dish 2:

```html
<h2>Pasta Salad</h2>
<p>Lettuce, vegetables, and mozzarella</p>
<img src="salad.jpeg" class="img-fluid">
```

•	Class `img-fluid` ensures the image automatically resizes to fit the column without distortion.
•	After adding content, save the file (Ctrl + S or Command + S on Mac) and preview the page.

---

### 4. Creating the Price Table

In the second column:
•	Add a table using the `<table>` tag with the class `table` (styled by Bootstrap).
•	Add rows `<tr>` and cells `<td>` for each dish and price.

Example:

```html
<table class="table">
  <tr>
    <td>Falafel</td>
    <td>$12</td>
  </tr>
  <tr>
    <td>Pasta Salad</td>
    <td>$10</td>
  </tr>
</table>
```

•	Save the file and preview it in Live Preview — the table will appear with Bootstrap’s default styling.

---

### 5. Result

•	The webpage displays two columns:

* Left column: images and dish information.
* Right column: price table.
  •	Images resize automatically (thanks to `img-fluid`).
  •	The table appears neatly formatted (thanks to Bootstrap’s `table` class).

---

## BOOTSTRAP CSS CLASS — INFIXES & MODIFIERS

### 1. Introduction

•	You have been assigned to design a website for **Little Lemon Restaurant**.
•	Main requirement: the website must automatically adapt to various devices, platforms, and screen sizes.
•	You don’t need to redesign it for each device — Bootstrap helps you achieve this using **CSS classes**, **infixes**, and **modifiers**.

---

### 2. Bootstrap and CSS Library

•	Bootstrap is a large CSS library containing many prebuilt classes based on thousands of real-world use cases.
•	Bootstrap classes can be extended using:

* **Infixes** – inserted parts within class names, used for creating responsive layouts.
* **Modifiers** – used to change the style or color of an element.

---

### 3. Infixes — Responsive Breakpoints

Infixes are used to adjust layout according to screen size.
Bootstrap defines six breakpoint levels:

| Name              | Screen Size | Abbreviation         |
| ----------------- | ----------- | -------------------- |
| Extra Small       | < 576px     | (default – no infix) |
| Small             | ≥ 576px     | sm                   |
| Medium            | ≥ 768px     | md                   |
| Large             | ≥ 992px     | lg                   |
| Extra Large       | ≥ 1200px    | xl                   |
| Extra Extra Large | ≥ 1400px    | xxl                  |

**Notes:**
•	There is no infix for *Extra Small* because Bootstrap is **mobile-first**.
•	General syntax: `class="col-{infix}-{number_of_columns}"`

**Example:**

```html
<div class="col-lg-6"></div>
```

→ On large screens (`lg`), the element takes up 6 columns.

---

### 4. Modifiers

Modifiers are used to change an element’s appearance (color, state, etc.).

Example using the **Alert** component:

```html
<div class="alert alert-primary" role="alert">
  A primary alert message!
</div>
```

•	`alert` – the main Bootstrap alert class.
•	`alert-primary` – a modifier that displays the blue (primary) color.

**Common Modifiers**

| Modifier  | Color / Meaning          |
| --------- | ------------------------ |
| primary   | Blue (main)              |
| secondary | Gray                     |
| success   | Green – success          |
| info      | Light blue – information |
| warning   | Yellow – warning         |
| danger    | Red – error              |
| light     | White – light background |
| dark      | Black – dark background  |

Example changing alert color to indicate an error:

```html
<div class="alert alert-danger" role="alert">
  Error: Something went wrong!
</div>
```

---

### 5. Applying Infixes and Modifiers in Code

Example combining both:

```html
<div class="col-lg-6">
  <div class="alert alert-success" role="alert">
    Order placed successfully!
  </div>
</div>
```

→ On large screens, the element takes up 6 columns and shows a green success alert.

---

### 6. Summary

•	**Infixes** → used for responsive layout (adjusting columns based on screen size).
•	**Modifiers** → used to customize color or style of components.

---

## BOOTSTRAP GRID SYSTEM

### 1. Overview

•	When building a responsive website, you need:

* A **responsive grid**, and
* **Responsive breakpoints**.
  •	Bootstrap provides both, helping you design layouts compatible with any device.

---

### 2. Basic Structure of Bootstrap Grid

Bootstrap uses a **12-column grid system**, which can be:
•	**Fluid** – adjusts with the screen, or
•	**Fixed** – has a set width.

The grid system always consists of three key elements:

1. **Container** – the root wrapper holding all content.
2. **Row** – groups columns horizontally.
3. **Column (col)** – contains the main content.

**Example structure:**

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
  </div>
</div>
```

---

### 3. Role of Container

•	Acts as the root element of the grid system.
•	Adds padding and centers content.
•	Its width adjusts according to screen size (breakpoints).

---

### 4. Rows and Columns

•	A `row` contains `col` elements.
•	Each row consists of 12 columns.
•	If you add two columns without specifying widths, Bootstrap automatically divides them equally (6 out of 12 each).

**Example:**

```html
<div class="row">
  <div class="col">Menu</div>
  <div class="col">Prices</div>
</div>
```

→ Two columns, each occupying 6 of 12 available grid units.

---

### 5. Customizing Column Width

To control column width, add a number after `.col-`:

```html
<div class="col-8">Menu</div>
<div class="col-4">Prices</div>
```

→ “Menu” column takes 8 parts, “Prices” takes 4 parts (total = 12).

---

### 6. Responsive Design

Bootstrap allows layouts to change according to screen size.

| Device       | Infix    | Example                  |
| ------------ | -------- | ------------------------ |
| Phone        | col-12   | Column spans full row    |
| Large screen | col-lg-6 | Column spans half of row |

**Example:**

```html
<div class="col-12 col-lg-6">Menu</div>
<div class="col-12 col-lg-6">Prices</div>
```

→ On mobile, columns stack vertically (12 each).
→ On desktop, they display side by side (6 each).

---

### 7. Testing with DevTools

1. Open the website in a browser.
2. Press **F12** to open Developer Tools.
3. Click the **device icon** to enable Device Mode.
4. Select different devices (mobile, tablet, desktop).
   → You’ll see the layout automatically adjust.

---

### 8. Advantages of the Grid System

•	Automatically responsive across all devices.
•	No need for separate CSS per screen size.
•	Saves development time and maintains consistent layout.
•	Ideal for most web projects.

---

### 9. Quick Summary

| Element              | Description                  |
| -------------------- | ---------------------------- |
| container            | Root of grid system          |
| row                  | Divides content into rows    |
| col                  | Divides rows into 12 columns |
| col-n                | Fixed column width           |
| col-{breakpoint}-{n} | Responsive layout            |
| F12 → Device Mode    | Test layout across devices   |

---

## BOOTSTRAP COMPONENTS (BUILT-IN UI ELEMENTS)

### 1. What Are Bootstrap Components?

•	Bootstrap provides a collection of prebuilt **UI elements** and **CSS styles** to help you build websites faster.
•	These include:

* Alerts
* Navigation menus
* Badges, Cards, Tables, etc.
  •	All are collectively called **Bootstrap Components**.

---

### 2. Example Scenario: Updating the Little Lemon Website

Little Lemon wants to:

1. Add a new dish to the menu — *Fried Calamari*.
2. Update the website using Bootstrap components for a more attractive layout and design.

---

### 3. Adding a New Dish to the Menu

**Step 1: Add Title and Description**

```html
<h2>Fried Calamari</h2>
<p>Ingredients: squid and buttermilk</p>
```

**Step 2: Add an Image**

```html
<img src="calamari.jpeg" class="img-fluid" alt="Fried Calamari">
```

•	`img-fluid` ensures the image scales with its parent column.

---

### 4. Using a Badge to Mark “New”

Inside the `<h2>` tag, add a `<span>`:

```html
<h2>
  Fried Calamari
  <span class="badge bg-primary">New</span>
</h2>
```

•	`badge` – creates a small label.
•	`bg-primary` – applies Bootstrap’s primary blue color.
→ Result: The “New” label appears next to the dish name.

---

### 5. Using Cards to Improve Layout

Cards help present content (image, title, description) cleanly and professionally.

**General structure:**

```html
<div class="card">
  <img src="calamari.jpeg" class="card-img-top" alt="Fried Calamari">
  <div class="card-body">
    <h2 class="card-title">Fried Calamari <span class="badge bg-primary">New</span></h2>
    <p class="card-text">Ingredients: squid and buttermilk</p>
  </div>
</div>
```

**Key points:**
•	`card` – main container.
•	`card-img-top` – image at the top.
•	`card-body` – holds the text.
•	`card-title`, `card-text` – format title and description.

---

### 6. Responsive Layout for Mobile and Desktop

Use Bootstrap’s grid system to arrange dishes:

```html
<div class="row">
  <div class="col-12 col-lg-6">
    <!-- Card 1 -->
  </div>
  <div class="col-12 col-lg-6">
    <!-- Card 2 -->
  </div>
</div>
```

•	`col-12`: spans full width on mobile.
•	`col-lg-6`: half-width on desktop.
→ Dishes stack vertically on phones and display side by side on larger screens.

---

### 7. Updating the Price Table

In the “Prices” column, add a new row:

```html
<tr>
  <td>Fried Calamari</td>
  <td>$12</td>
</tr>
```

---

### 8. Adding an Alert for the New Dish

```html
<div class="alert alert-info" role="alert">
  Try our new Fried Calamari!
</div>
```

•	`alert` – creates a message box.
•	`alert-info` – light blue information style.
•	`role="alert"` – improves accessibility for screen readers.
•	Content – customer message.

---

### 9. Final Result

•	The website now has a cleaner and more appealing layout thanks to the card structure.
•	A badge highlights the new dish.
•	An alert message draws customer attention.
•	The site is fully responsive across all devices.

---

### 10. Quick Reference

| Component       | Purpose              | Example Class                          |
| --------------- | -------------------- | -------------------------------------- |
| badge           | Display small labels | badge bg-primary                       |
| card            | Organize dish layout | card, card-body, card-title, card-text |
| img-fluid       | Responsive image     | img-fluid                              |
| alert           | User notification    | alert alert-info                       |
| col-12 col-lg-6 | Responsive layout    | Mobile: 12 cols, Desktop: 6 cols       |

Official Bootstrap documentation:
[https://getbootstrap.com/docs](https://getbootstrap.com/docs)

---

## Topic: Static vs Dynamic Content and Web Server vs Application Server

### 1. Introduction

•	When shopping online, each user receives personalized suggestions.
•	This happens because websites adapt to each user profile through **dynamic content**.
•	In this lesson, you will:

* Differentiate between static and dynamic content.
* Understand the roles of the **Web Server** and **Application Server**.

---

### 2. Static Content

•	Files stored on the server and sent as-is when requested.
•	Examples: images, videos, CSS, JavaScript, HTML files.
•	Do not change based on user or time.
•	Web servers simply deliver these files without processing.

---

### 3. Dynamic Content

•	Generated at the time of request (HTTP request).
•	Changes depending on:

* User information (e.g., profiles, purchase suggestions).
* Real-time factors (e.g., today’s news).
  •	Created by the **Application Server** (back-end), then passed to the **Web Server** for delivery to the browser.
  •	Takes longer to process because it involves logic, database queries, and permissions.

---

### 4. Roles of Web Server and Application Server

•	**Web Server:**

* Delivers static content.
* Acts as the “gateway” for HTTP requests and responses.
* Communicates with the Application Server for dynamic content.

•	**Application Server (Back-end):**

* Handles complex tasks: business logic, database communication, user authentication.
* Generates dynamic content based on Web Server requests.

---

### 5. Example

•	**Static:** You click “Play” to watch a video.
→ The Web Server sends the video file directly to your browser.

•	**Dynamic:** You log in to a course website.
→ The Web Server sends a request to the Application Server to:

* Check your registration.
* Determine which content fits your account.

---

### 6. Performance and Caching

•	Problem: Dynamic content takes time to generate, especially on large sites.
•	Solution: Use **caching** on the Web Server.

* The Web Server stores a copy of previously generated dynamic content.
* On repeated requests, it sends the cached version instead of reprocessing.
* The cache updates periodically or when new interactions occur.

→ Result: Reduced load on the Application Server and faster response times.

---

### 7. Conclusion

•	**Static content:** fast, unchanging, pre-stored.
•	**Dynamic content:** varies by data or user, processed by the Application Server.
•	**Web Server:** delivers content.
•	**Application Server:** processes logic and generates dynamic content.
•	**Caching** optimizes performance between the two.