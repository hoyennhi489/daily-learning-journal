# Semantic HTML – HTML with Meaning

## 1. Basic Idea

* HTML describes the content of a webpage, but **semantic HTML describes the meaning of that content**.
* Example: Elevator buttons should have numbers so users understand the function of each button.
* Semantic HTML helps:

  * Search engines understand the page content
  * Accessibility software (screen readers) read the page more easily

---

## 2. Common Semantic HTML Tags

| Tag             | Purpose                                                          |
| --------------- | ---------------------------------------------------------------- |
| `<h1>`–`<h6>`   | Headings                                                         |
| `<ul>` / `<ol>` | Lists (unordered / ordered)                                      |
| `<header>`      | Page header, logo, menu                                          |
| `<nav>`         | Navigation menu                                                  |
| `<main>`        | Main content of the page                                         |
| `<article>`     | Self-contained, independent content (article, blog, forum post…) |
| `<section>`     | Content section, should have a heading                           |
| `<footer>`      | Page footer, contact info, social links                          |

---

## 3. Typical Semantic HTML Structure

```html
<body>
  <header>
    <h1>Company Logo</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Article Title</h2>
        <p>Date and Author</p>
      </header>
      <section>
        <h3>Part 1 of the Article</h3>
        <p>Content...</p>
      </section>
      <section>
        <h3>Part 2 of the Article</h3>
        <p>Content...</p>
      </section>
    </article>
  </main>

  <footer>
    <p>Contact information & social links</p>
  </footer>
</body>
```

* `<article>`: A self-contained content block, e.g., blog post or comment.
* `<section>`: Divides content within an article or page.
* Nesting: Semantic tags can be nested if necessary to describe content accurately.

---

## 4. Benefits

* Better accessibility for users with disabilities.
* Search engines understand the content clearly, improving SEO.
* Clear page structure, easier to manage and maintain.

---

## Summary Table of Common HTML Tags by Group

### 1. Sectioning Elements

Used to structure and organize webpage content:

| Tag             | Purpose                                                |
| --------------- | ------------------------------------------------------ |
| `<header>`      | Page or section header, usually containing logo, title |
| `<nav>`         | Navigation menu                                        |
| `<footer>`      | Footer, contains secondary links, copyright, policies  |
| `<main>`        | Main content of the page                               |
| `<aside>`       | Optional content, e.g., sidebar, ads                   |
| `<article>`     | Independent content block, e.g., blog post, product    |
| `<section>`     | Independent content section, often within an article   |
| `<details>`     | Collapsible content section                            |
| `<summary>`     | Summary or caption for `<details>`                     |
| `<h1>` – `<h6>` | Headings, `<h1>` most important, `<h6>` least          |

### 2. Content Elements

Used to format and present content:

| Tag            | Purpose                             |
| -------------- | ----------------------------------- |
| `<p>`          | Paragraph                           |
| `<li>`         | List item                           |
| `<ul>`         | Unordered list                      |
| `<ol>`         | Ordered list                        |
| `<dl>`         | Description list                    |
| `<dt>`         | Term in `<dl>`                      |
| `<dd>`         | Description of `<dt>`               |
| `<hr>`         | Horizontal line to separate content |
| `<figure>`     | Group image and related content     |
| `<figcaption>` | Caption for `<figure>`              |

### 3. Inline Elements

Used for formatting, emphasis, or annotation:

| Tag        | Purpose                        |
| ---------- | ------------------------------ |
| `<a>`      | Link                           |
| `<abbr>`   | Abbreviation                   |
| `<b>`      | Bold text (not emphasized)     |
| `<strong>` | Bold text with importance      |
| `<i>`      | Italic text (terms, stylistic) |
| `<em>`     | Emphasize text                 |
| `<mark>`   | Highlight text                 |
| `<s>`      | Strikethrough text             |
| `<sub>`    | Subscript                      |
| `<sup>`    | Superscript                    |
| `<code>`   | Code text                      |
| `<var>`    | Variable in expression         |
| `<time>`   | Date and time                  |
| `<span>`   | Group content for CSS styling  |

### 4. Embedded Content & Media

| Tag         | Purpose                                        |
| ----------- | ---------------------------------------------- |
| `<img>`     | Image                                          |
| `<picture>` | Image with multiple `<source>`                 |
| `<audio>`   | Embed audio                                    |
| `<video>`   | Embed video                                    |
| `<source>`  | Resource for `<audio>`, `<video>`, `<picture>` |
| `<iframe>`  | Embed another webpage                          |
| `<embed>`   | Embed external application content             |
| `<object>`  | Similar to `<embed>` but uses plugin           |
| `<canvas>`  | 2D/3D graphics drawing                         |
| `<svg>`     | Vector graphics                                |

### 5. Table Elements

| Tag          | Purpose                  |
| ------------ | ------------------------ |
| `<table>`    | Data table               |
| `<thead>`    | Table header             |
| `<tbody>`    | Main table content       |
| `<tfoot>`    | Table footer             |
| `<tr>`       | Table row                |
| `<td>`       | Table cell               |
| `<th>`       | Header cell              |
| `<caption>`  | Table caption            |
| `<colgroup>` | Column group for styling |
| `<col>`      | Define table column      |

---

# Create a Blog Page for The Little Lemon Restaurant with Semantic HTML

**Goal:**
Create a new blog page for The Little Lemon Restaurant website containing multiple blog posts, using semantic HTML to optimize SEO and accessibility.

### 1. Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Little Lemon Blog</title>
</head>
<body>
    <header>
        <!-- Restaurant logo -->
    </header>
    
    <nav>
        <!-- Navigation menu -->
    </nav>
    
    <main>
        <h1>Blog</h1>
        <article>
            <h2>20% off this weekend</h2>
            <p>Content of the first blog post...</p>
        </article>
        <article>
            <h2>Our new menu</h2>
            <p>Content of the second blog post...</p>
        </article>
    </main>
    
    <footer>
        <p>© 2025 The Little Lemon Restaurant</p>
    </footer>
</body>
</html>
```

### 2. Details of Each Element

1. **Header**

   * Used to display the restaurant logo.
   * Example: `<img src="logo.png" alt="Little Lemon Logo">`

2. **Nav**

   * Used to create the navigation menu.
   * Example:

   ```html
   <ul>
       <li><a href="index.html">Home</a></li>
       <li><a href="location.html">Location</a></li>
       <li><a href="blog.html">Blog</a></li>
   </ul>
   ```

3. **Main**

   * Contains the main page content.
   * `<h1>` is the page title.
   * Blog posts are inside `<article>`, each with `<h2>` (title) and `<p>` (content).

4. **Footer**

   * Contains copyright information.
   * Example: `<p>© 2025 The Little Lemon Restaurant</p>`

### 3. Steps to Implement

a. Add details to each element (logo, menu, blog posts).
b. Save the file using Ctrl+S (Windows) or Command+S (Mac).
c. Preview using Live Preview to check layout and display.

### 4. Result

* Semantic blog page, easily understood by search engines.
* Optimized for user experience and accessibility.
* Helps improve business opportunities for the restaurant.

---

# Meta Tags and SEO – How Search Engines Analyze Websites

**SEO (Search Engine Optimization)** is the process of optimizing website content, structure, and presentation to improve ranking on search engines.

### 1. How Search Engines Work

When a search engine bot accesses a website, it:
a. Analyzes the HTML and media content.
b. Follows links to analyze other pages.
c. After scanning the whole site, ranks pages by keywords.
d. Each search engine has its own algorithm (not public).

**Meta tags** influence how search engines evaluate a page.

---

### 2. What Are Meta Tags?

* Meta tags are data describing the webpage (metadata).
* They are placed in the `<head>` section and not displayed in the browser.
* Used to provide information to search engines, browsers, and other platforms.

**Structure:**

```html
<meta name="metadata_name" content="metadata_value">
```

---

### 3. Important Meta Tags

1. **Author** – page author

```html
<meta name="author" content="Author Name or Company">
```

2. **Description** – page summary

* Important for SEO; often appears under the link in search results.

```html
<meta name="description" content="Brief description of the page content.">
```

3. **Keywords** – not recommended

* Previously used for keywords.
* Now ignored or treated as spam.

4. **Robots** – instructs bots how to crawl
   | Value | Meaning |
   |-------|---------|
   | index | Bot allowed to analyze page |
   | follow | Bot allowed to follow links |
   | noindex | Do not index page |
   | nofollow | Do not follow links |

Example:

```html
<meta name="robots" content="index, follow">
```

5. **Viewport** – essential for mobile & SEO

* Ensures correct display on phones, improves user experience.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

### 4. Full Meta Tags Example

```html
<head>
    <meta charset="UTF-8">

    <!-- Basic SEO -->
    <meta name="author" content="Little Lemon Restaurant">
    <meta name="description" content="Learn how search engines analyze web pages and how meta tags improve SEO.">
    
    <!-- Robots -->
    <meta name="robots" content="index, follow">

    <!-- Mobile responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SEO and Meta Tags</title>
</head>
```

### 5. Summary

Important meta tags for SEO:

* `author`
* `description`
* `robots`
* `viewport`

**Meta keywords** are outdated and should not be used.

---

# META TAG CHEAT SHEET

### 1. Common Meta Tags (SEO & Page Description)

| Tag                       | Function                      | Example                                                   |
| ------------------------- | ----------------------------- | --------------------------------------------------------- |
| `meta charset`            | Character encoding            | `<meta charset="UTF-8">`                                  |
| `meta name="description"` | Page description              | `<meta name="description" content="Page description">`    |
| `meta name="title"`       | SEO page title                | `<meta name="title" content="Page title">`                |
| `meta name="author"`      | Page author                   | `<meta name="author" content="Author Name">`              |
| `meta name="language"`    | Page language                 | `<meta name="language" content="english">`                |
| `meta name="robots"`      | Allow crawling                | `<meta name="robots" content="index,follow">`             |
| `meta name="google"`      | Disable sitelinks search box  | `<meta name="google" content="nositelinkssearchbox">`     |
| `meta name="googlebot"`   | Disable automatic translation | `<meta name="googlebot" content="notranslate">`           |
| `meta name="revised"`     | Last updated date             | `<meta name="revised" content="Sunday, July 18th, 2010">` |
| `meta name="rating"`      | Age rating                    | `<meta name="rating" content="safe for kids">`            |
| `meta name="copyright"`   | Copyright                     | `<meta name="copyright" content="Copyright 2024">`        |

### 2. Meta `http-equiv`

| Tag              | Function          | Example                                                |
| ---------------- | ----------------- | ------------------------------------------------------ |
| content-type     | Document format   | `<meta http-equiv="content-type" content="text/html">` |
| Content-Language | Page language     | `<meta http-equiv="Content-Language" content="en">`    |
| refresh          | Auto refresh page | `<meta http-equiv="refresh" content="30">`             |
| Cache-Control    | Cache control     | `<meta http-equiv="Cache-Control" content="no-cache">` |

### 3. Mobile / Responsive Meta Tags

| Tag              | Function                    | Example                                                                  |
| ---------------- | --------------------------- | ------------------------------------------------------------------------ |
| viewport         | Mobile display optimization | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| format-detection | Detect phone numbers        | `<meta name="format-detection" content="telephone=yes">`                 |
| HandheldFriendly | Mobile device compatibility | `<meta name="HandheldFriendly" content="true">`                          |

### 4. Sample Meta Tags to Copy

```html
<meta charset="UTF-8">

<meta name="title" content="Page Title">
<meta name="description" content="Brief page description.">
<meta name="author" content="Author Name">
<meta name="language" content="english">
<meta name="robots" content="index,follow">
<meta name="copyright" content="Copyright 2024">

<meta name="google" content="nositelinkssearchbox">
<meta name="googlebot" content="notranslate">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="HandheldFriendly" content="true">
<meta name="format-detection" content="telephone=yes">
```

---

# Basic HTML Template + Open Graph (OG)

### 1. Folder Structure

| Folder / File   | Function                          |
| --------------- | --------------------------------- |
| index.html      | Main HTML file                    |
| /JS/script.js   | Empty JavaScript file for JS code |
| /CSS/styles.css | Empty CSS file for styling        |

### 2. Template Content (index.html)

* `<head>` already prepared
* SEO meta & title
* Update these 3 tags yourself:

```html
<title>Your Website Title</title>
<meta name="description" content="Short description of your webpage.">
<meta name="author" content="Your Name or Company">
```

### 3. Open Graph (OG) – Social Sharing

**Purpose:**

* Helps Facebook, Zalo, LinkedIn, Twitter display content nicely when sharing links.
* OG does not affect SEO but is important for social media.

**Sample OG block** (usually commented in template; remove comments and edit):

```html
<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Your Page Title">
<meta property="og:description" content="Short description displayed when shared on social media.">
<meta property="og:image" content="https://yourwebsite.com/images/preview.jpg">
<meta property="og:url" content="https://yourwebsite.com/page-url">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
```

**Quick OG Tag Explanation**

| Property       | Function                                       |
| -------------- | ---------------------------------------------- |
| og:title       | Title displayed when shared                    |
| og:description | Short description below title                  |
| og:image       | Preview / thumbnail image                      |
| og:url         | Canonical URL of page                          |
| og:type        | Content type (website, article, product, etc.) |
| og:locale      | Language (e.g., vi_VN for Vietnamese)          |

**Real OG Example**

```html
<!-- Open Graph Example -->
<meta property="og:title" content="Little Lemon Restaurant">
<meta property="og:description" content="Discover delicious dishes and fresh ingredients at Little Lemon Restaurant.">
<meta property="og:image" content="https://littlelemon.com/assets/og-image.jpg">
<meta property="og:url" content="https://littlelemon.com/menu">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
```

### 4. Icon / Favicon

* To show an icon on the browser tab:

```html
<link rel="icon" type="image/png" href="images/favicon.png">
```

### 5. CSS Link

```html
<link rel="stylesheet" href="CSS/styles.css">
```

### 6. `<body>` – Semantic HTML

| Tag    | Function                   |
| ------ | -------------------------- |
| header | Logo, website name         |
| nav    | Navigation                 |
| main   | Main content               |
| footer | Copyright, secondary links |

### 7. JavaScript

* At the end of body:

```html
<script src="JS/script.js"></script>
```

### 8. Benefits of the Template

* Quickly start a project.
* Semantic HTML improves SEO.
* OG ensures beautiful social media sharing.
* Clear management of CSS/JS.