# How to Embed Video and Audio into a Webpage Using HTML

Nowadays, streaming music and video online is common, but in the past this was not feasible on the web. With modern HTML, embedding video and audio into a page is simple thanks to the `<video>` and `<audio>` tags.

## 1. Supported Formats

* **Video:** MP4, WebM, OGG
* **Audio:** MP3, WAV, OGG

Not all browsers support the same formats, so it's recommended to provide multiple fallback sources.

## 2. Using the `<video>` Tag

```html
<video>
  <source src="dance.mp4" type="video/mp4">
</video>
```

* `<source>` does not require a closing tag.
* `src` contains the path to the video file.
* `type` specifies the MIME type, e.g., `video/mp4`.

If a format is not supported, the browser will try the next source.

**Common attributes:**

* `width` and `height`: set the player size
* `controls`: display control buttons (play, pause, volume, etc.)

## 3. Using the `<audio>` Tag

```html
<audio>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

**Notes:**

* MP3 files must use MIME type `audio/mpeg`.
* You can add multiple sources for compatibility.
* `controls` enables playback buttons.

## 4. Summary

* `<video>` and `<audio>` tags embed media into HTML pages.
* Each source must have the correct `src` and MIME type.
* Multiple fallback sources can be provided.
* `controls` allow playback manipulation.
* Additional customization is possible via extended attributes.

---

# Using the `<img>` Tag to Display Images on a Webpage

The `<img>` tag embeds images into HTML pages. Images are specified via the `src` attribute.

## 1. Embedding a Basic Image

```html
<img src="photo.png">
```

## 2. Setting Image Size

Width and height can be set using `width` and `height`:

```html
<img src="photo.png" width="640" height="480">
```

Browsers automatically scale the image if values differ from the original size. Example: scaling down by 50%:

```html
<img src="photo.png" width="320" height="240">
```

## 3. Maintaining Aspect Ratio

Set only `width` or `height`; the browser calculates the other automatically:

```html
<img src="photo.png" width="320">
```

## 4. Alternative Text (`alt`)

If the image fails to load due to a broken link or deleted file, the `alt` attribute displays a description:

```html
<img src="photo.png" width="320" alt="My Profile Photo">
```

`alt` also helps assistive technologies, like screen readers, understand the content.

## 5. Using `<figure>` and `<figcaption>` to Describe Images

Standard structure for images with captions:

```html
<figure>
    <img src="photo.png" width="320" alt="My Profile Photo">
    <figcaption>A photo of myself on a beach in 2015</figcaption>
</figure>
```

## 6. Supported Image Formats

* APNG – high-quality animated images
* AVIF – modern, good compression
* GIF – basic animated images
* JPEG/JPG – photographs, good compression
* PNG – high-quality images, supports transparency
* SVG – vector graphics, scalable without quality loss
* WEBP – optimized for the web, good compression

## 7. Conclusion

Images are essential in web design. Using proper `src`, `alt`, appropriate dimensions, and combining with `<figure>`/`<figcaption>` enhances accessibility and user experience.

---

# Adding Audio, Video, Images, and Iframes to a Webpage

## 1. Embedding Audio

* Use the `<audio>` tag to embed sound.
* Important attributes:

  * `src`: path to audio file
  * `type`: file format (`audio/ogg`, `audio/mpeg`, etc.)
  * `controls`: display play/pause buttons
  * `loop`: repeat playback

**Example:**

```html
<audio controls loop>
  <source src="music.ogg" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>
```

## 2. Embedding Video

* Use the `<video>` tag to embed video.
* Important attributes:

  * `src`: path to video file
  * `type`: file format (`video/mp4`, `video/webm`, etc.)
  * `controls`: display video controls
  * `width` and `height`: set dimensions
  * `muted`: mute by default

**Example:**

```html
<video width="320" height="240" controls muted>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

## 3. Embedding Images

* Use the `<img>` tag to add images.
* Important attributes:

  * `src`: image path
  * `width` / `height`: image dimensions
  * `alt`: description (useful for accessibility)

**Example:**

```html
<img src="photo.png" width="320" height="240" alt="My Profile Photo">
```

* Combine with `<figure>` and `<figcaption>` for captions:

```html
<figure>
  <img src="photo.png" width="320" alt="My Profile Photo">
  <figcaption>A photo of myself on a beach in 2015</figcaption>
</figure>
```

* Common image formats: `.apng`, `.avif`, `.gif`, `.jpeg/.jpg`, `.png`, `.svg`, `.webp`

## 4. Embedding Iframes

* The `<iframe>` tag embeds content from another website (videos, maps, social posts, etc.)
* Important attributes:

  * `src`: URL of embedded content
  * `width` / `height`: iframe dimensions
  * `allow`: restrict feature access (e.g., `camera none; microphone none`)
  * `sandbox`: enhance security (limits pop-ups, file downloads, etc.)

**Example:**

```html
<iframe src="https://www.example.com" width="600" height="400" 
        allow="camera none; microphone none" sandbox>
</iframe>
```

> Security tip: only embed content from trusted websites.

---

# The `<iframe>` Tag in HTML

The `<iframe>` tag is an inline frame element that allows embedding an HTML page into another page.
The iframe content runs independently, like a separate browser tab, including HTML, CSS, and JavaScript.

## Important `<iframe>` Attributes

### a. `src`

* Specifies the URL of the page to embed.
  **Example:**

```html
<iframe src="https://example.com"></iframe>
```

### b. `srcdoc`

* Allows embedding inline HTML directly, overriding `src`.
  **Example:**

```html
<iframe srcdoc="<p>My inline html</p>"></iframe>
```

### c. `width` and `height`

* Sets iframe width and height in pixels.
* Default: `width=300`, `height=150`
  **Example:**

```html
<iframe src="example.html" width="400" height="300"></iframe>
```

### d. `name`

* Assign a name to the iframe, can be targeted by links or scripts.
  **Example:**

```html
<iframe src="example.html" name="MyFrame" width="400" height="300"></iframe>
```

### e. `allow`

* Specifies permissions and features for the iframe.
* Common values:

  * `fullscreen` – allow fullscreen
  * `geolocation` – allow location access
  * `camera` – allow camera access
  * `microphone` – allow microphone access

**Example with multiple permissions:**

```html
<iframe src="https://example.com" allow="camera; microphone"></iframe>
```

### f. `sandbox`

* Enhances security by applying restrictions to the iframe.
* Empty (`sandbox=""`) applies all restrictions.
* Common tokens to lift restrictions:

  * `allow-forms` – allow form submission
  * `allow-scripts` – allow running scripts
  * `allow-popups` – allow pop-ups
  * `allow-downloads` – allow file downloads

**Example:**

```html
<iframe src="my_iframe_sandbox.html" sandbox="allow-forms allow-scripts"></iframe>
```

### g. `referrerpolicy`

* Controls HTTP Referrer information sent when loading iframe content.
* Some values:

  * `no-referrer` – do not send Referrer
  * `origin` – send only origin
  * `strict-origin` – send origin only if protocol is compatible

**Example:**

```html
<iframe src="example.html" referrerpolicy="no-referrer"></iframe>
```

### h. `loading`

* Determines whether the iframe loads immediately or lazily:

  * `eager` – load immediately
  * `lazy` – load when iframe appears in viewport

**Example:**

```html
<iframe src="my_iframe_src.html" loading="lazy"></iframe>
```

### i. `title`

* Describes the iframe for accessibility purposes.
  **Example:**

```html
<iframe src="history.html" title="An embedded document about the history of my family"></iframe>
```

---

Dưới đây là bản dịch tiếng Anh đầy đủ và chi tiết nội dung bạn vừa cung cấp:

---

# Embedding iFrames with Security Measures

## 1. Purpose

* Embed content (e.g., promotional images) from another website into your page.
* iFrames allow partners to update images without requiring your intervention.
* Important: you need to minimize security risks when embedding content from external sources.

## 2. Basic `<iframe>` Attributes

* `src`: URL of the embedded content (e.g., image or HTML page)
* `width` and `height`: set the size of the iframe
* `sandbox`: apply security restrictions (block scripts, forms, pop-ups)
* `allow`: specify feature permissions, e.g., camera, microphone, payment
* `title`: describe the iframe for accessibility purposes

## 3. Example of a Secure iFrame

```html
<!-- iFrame embedding a promotional image from a partner -->
<iframe 
    src="placeholder.png" 
    width="320" 
    height="128" 
    sandbox 
    allow="payment 'none'; camera 'none'; microphone 'none'" 
    title="Partner Promotional Image">
</iframe>
```

**Explanation:**

* `src="placeholder.png"`: temporary placeholder image
* `width="320" height="128"`: fixed iframe size
* `sandbox`: restricts JavaScript execution, form submissions, pop-ups, etc.
* `allow="payment 'none'; camera 'none'; microphone 'none'"`: disables payment, camera, and microphone access
* `title`: provides a description for accessibility (screen readers)

## 4. Benefits

* Partners can update images without changing your code.
* Improved security through `sandbox` and `allow`.
* User experience is preserved: images display correctly in position and size.

---

# Understanding Flexbox

## 1. What is Flexbox?

* Like a div or container box, Flexbox is a type of container in CSS.
* Flexbox overcomes limitations of block and inline containers, especially on large web pages.
* It allows items inside the container to grow, shrink, and align flexibly, giving developers better control over layout and styling.

## 2. Basic Flexbox Structure

* Flexbox is one-dimensional: you can align items in a row or column.
* Two axes:

  * **Main axis:** default horizontal row
  * **Cross axis:** perpendicular to the main axis
* Items start from the top-left corner and flow along the main axis.
* Using `flex-direction`, you can switch the main axis from row to column, which changes the cross axis orientation.

## 3. Sample HTML with Flexbox

```html
<div class="flex-container">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
  <div class="box box6">Six</div>
  <div class="box box7">Seven</div>
</div>

<style>
.box {
    background-color: aquamarine;
    border-radius: 5px;
    margin: 2px;
    padding: 10px;
}

.flex-container {
    display: flex;
}
</style>
```

* **Result:** 7 boxes will display in a horizontal row from left to right.

## 4. Alignment Properties in Flexbox

| Property          | Purpose                                            |
| ----------------- | -------------------------------------------------- |
| `justify-content` | Align items along the main axis                    |
| `align-items`     | Align items along the cross axis                   |
| `align-self`      | Align individual items on the cross axis           |
| `align-content`   | Pack and control space between multiple flex lines |

**Example: center items along the main axis:**

```css
.flex-container {
    display: flex;
    justify-content: center; /* Center along main axis */
}
```

## 5. Flex Wrap

* By default, items stretch along the main axis.
* With `flex-wrap: wrap;` items automatically wrap to the next line if there is no space:

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
```

## 6. Flex Direction

* `flex-direction` changes the main axis direction:

  * `row` (default): horizontal
  * `column`: vertical

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}
```

## 7. Cross Axis Alignment (`align-items`)

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end; /* Push items to the end of cross axis */
}
```

* `flex-end` pushes boxes to the right (cross axis is vertical by default).

## 8. Individual Alignment with `align-self`

```css
.box3 {
    background-color: blanchedalmond;
    align-self: center; /* Only box 3 is centered along cross axis */
}
```

* Overrides `align-items` settings.

## 9. Gap Between Items

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 10px; /* Space between items */
}
```

## 10. Advanced Flex Properties

* `flex-grow`: item can grow to fill remaining space
* `flex-shrink`: item can shrink if space is limited
* `flex-basis`: initial size of the item before growing or shrinking

**Shorthand `flex` property:**

```css
.flex-container {
    flex: 0 1 auto; /* flex-grow | flex-shrink | flex-basis */
}
```

**Example: box 3 fills remaining space:**

```css
.box3 {
    background-color: blanchedalmond;
    align-self: center;
    flex: 1 1 auto;
}
```

* If `flex-grow = 1`, all child boxes with the same value will have equal size.
* If values differ, the item with a higher value takes up more space.

---

# CSS Measurement Units

A web page has width and height, and the elements inside it can have fixed or dynamic sizes. CSS provides many units of measurement that allow you to define sizes, spacing, fonts, etc. These units are divided into **Absolute Units** and **Relative Units**.

## 1. Absolute Units

* Do not change across different devices.
* Usually used when fixed size is required, e.g., for print.
* Not suitable for responsive web design because devices and screen sizes vary.

| Unit | Name       | Conversion                |
| ---- | ---------- | ------------------------- |
| Q    | Qunit      | 1Q = 1/40 cm              |
| mm   | Millimeter | 1mm = 1/10 cm             |
| cm   | Centimeter | 1cm ≈ 37.8px = 25.2/64 in |
| in   | Inch       | 1in = 2.54cm = 96px       |
| pc   | Pica       | 1pc = 1/6 in              |
| pt   | Point      | 1pt = 1/72 in             |
| px   | Pixel      | 1px = 1/96 in             |

**Most commonly used:** `px` and `cm`.

## 2. Relative Units

* Calculated based on other elements or viewport size.
* Suitable for responsive design as elements automatically adjust to screen size and other content.

| Unit | Description                                |
| ---- | ------------------------------------------ |
| em   | Font size of the parent element            |
| ex   | Height of the font’s “x” character         |
| ch   | Width of the “0” character of the font     |
| rem  | Font size of the root element (`<html>`)   |
| lh   | Line height of the parent element          |
| rlh  | Line height of the root element (`<html>`) |
| vw   | 1% of viewport width                       |
| vh   | 1% of viewport height                      |
| vmin | 1% of the smaller viewport dimension       |
| vmax | 1% of the larger viewport dimension        |
| %    | Percentage relative to parent element      |

**Most commonly used:** `em`, `rem`, `vw`, `vh`, `%`.

## 3. Other Notes

* Some properties have their own value sets, e.g., colors: `hex (#RRGGBB)`, `rgb()`, `rgba()`, `hsl()`, `hsla()`.
* Choosing the appropriate unit depends on:

  * Context (font, layout, spacing, responsive design)
  * Device and viewport size
  * Design goal (fixed or flexible)

---

# Using Flexbox in CSS for Flexible Layouts

**Introduction:**
Flexbox is a CSS tool for arranging elements inside a container in a flexible way. It is suitable for simple, easily aligned, and responsive layouts, especially when elements need to automatically adjust their position or size based on the browser window.

## 1. Flexbox in a Search Bar

### 1.1 HTML Structure

* Create a `<div>` with a class `container`.
* Inside the container:

  * Search icon
  * Input field
  * Submit button

### 1.2 CSS Structure

* `display: inline-flex` makes the container behave as an inline element.
* Use `overflow` to hide overflowing content.
* Align individual elements (icon, input, button) neatly.

### 1.3 Result

* Elements are grouped together.
* Search bar maintains layout when resizing, without content overflowing.

## 2. Flexbox in a Navigation Bar

### 2.1 HTML Structure

* Create an unordered list (`ul`) with multiple list items (`li`).
* Each item may contain an `<a>` link.

### 2.2 CSS Structure

* Use the universal selector `*` to remove default browser styles.
* Key properties:

  * `flex-flow`: sets container direction and wrap behavior
  * `justify-content`: align items along the main axis (stretch, space-between…)

### 2.3 Result

* Navbar can display horizontally or stack vertically depending on window size.
* Responsive behavior: items stack on small screens, horizontal on wide screens.

## 3. Flexbox in an Image Gallery

### 3.1 HTML Structure

* Create a `<div>` with class `container`.
* Inside, include multiple images (`<img>`).

### 3.2 CSS Structure

* `display: flex` makes the container a flex container.
* `flex-wrap` allows images to wrap when space is insufficient.
* `justify-content: space-between` aligns images evenly along the main axis.
* Remove default margin, padding, and border with `*`.

### 3.3 Result

* Images align in rows when space allows, wrap when narrow.
* Gallery becomes responsive and easy to manage.

## 4. Summary

* Flexbox groups elements in a container.
* Easy to create responsive layouts for search bars, navbars, and image galleries.
* Key properties: `display`, `flex-wrap`, `justify-content`, `align-items`, `overflow`.
* Flexbox allows elements to adapt to screen size without excessive media queries.

---

# Creating Bar Charts with Flexbox

**Introduction:**
Flex Charts are bar charts built with CSS Flexbox.
Bar charts visualize data using rectangular bars proportional to values.
Flexbox allows vertical and horizontal bar charts.

**Key Flex Properties for Charts:**

1. `flex-grow`: how much an element expands relative to others
2. `flex-shrink`: how much an element shrinks relative to others
3. `flex-basis`: initial size of a flexible element

* Shorthand: `flex: 0 1 auto` (flex-grow, flex-shrink, flex-basis)

## 1. Vertical Bar Chart

### 1.1 HTML Structure

* `.row` div as horizontal container.
* Inside `.row`:

  * `.label` for chart label
  * `.container` containing `.dish` data bars
* Add classes for each item: `.pasta`, `.pizza`, `.burrito`

### 1.2 CSS Structure

* `.row`: `display: flex; align-items: stretch;`
* `.label`: set flex ratio for main axis
* `.container`: `display: flex; justify-content: flex-start;`
* `.dish`: `flex-basis` as a percentage to represent data (35%, 50%, 15%)
* Different background colors per bar

### 1.3 Result

* Bars display proportional to values.
* Resizing browser automatically adjusts bar lengths; labels remain fixed.

## 2. Horizontal Bar Chart

### 2.1 HTML Structure

* Create multiple containers for data groups (e.g., male, female)
* Inside each container, bars for each item

### 2.2 CSS Structure

* `.columns` (outer container): `display: flex; flex-direction: column;`
* `.container`: `display: flex; justify-content: flex-start;`
* `.bar`: set `flex-basis` to show proportional data

### 2.3 Result

* Bars stack or row layout depending on `flex-direction`.
* Responsive: bars resize automatically with window.

## 3. Notes for Flex Charts

* Labels remain fixed; bars change with `flex-basis`.
* Main and cross axis: `align-items` and `justify-content` control element placement.
* Colors: use `background-color` per bar for clarity.
* Responsive: charts adapt to screen size.

## 4. Summary

* Flexbox can create both layouts and data visualizations.
* Vertical or horizontal charts can be made using `flex-basis`, `flex-grow`, `flex-shrink`, and axis alignment.
* Flex Charts make data clear, visual, and easy to integrate without complex libraries.

---

# CSS Grid Layouts

## 1. Introduction to Grid Layouts

* Grid layouts organize content and create a visual flow.
* CSS Grid is a two-dimensional layout system (2D), more flexible than Flexbox for large layouts.
* Columns = vertical tracks; Rows = horizontal tracks.
* Gaps between tracks = gutters or gaps.
* Cell = intersection of a row and column.

## 2. Basic HTML Structure

### 2.1 Create HTML File

* File: `index.html`
* Initial content: letters A to E stacked vertically, no CSS yet

### 2.2 Add CSS to Boxes

* Basic properties for boxes inside container to improve display.
* Only visual style changes; not yet a true grid.

## 3. Switch to Grid Layout

### 3.1 Container Setup

* `display: grid;` for container
* Define `grid-template-columns` and `grid-template-rows`
* Example: 3 columns, 2 rows

### 3.2 Using Fractions (`fr`)

* `fr` = fraction (relative portion of grid)
* Allows relative sizing without fixed pixels
* Rows can also use `fr` or pixels

### 3.3 Gap and Background

* `grid-gap` or `gap`: sets spacing between cells
* `background-color`: visual clarity
* Example: `grid-gap: 10px;`

### 3.4 Grid Auto

* `grid-auto-rows` and `grid-auto-columns`: create implicit grid; rows/columns auto-size
* Example: `grid-auto-rows: 100px;`

## 4. Useful CSS Grid Functions

### 4.1 `repeat()`

* Reduces redundancy for repeated rows/columns
* Example: `grid-template-columns: repeat(3, 1fr);`

### 4.2 `minmax()`

* Sets min and max size for rows/columns
* Example: `grid-auto-rows: minmax(150px, auto);`

## 5. Grid Frameworks

* Common layouts: 12-column or 16-column grids
* Divide page into 12 or 16 vertical tracks; easy to adjust specific elements

## 6. Notes on CSS Grid

* CSS Grid organizes content visually and clearly.
* Combining `repeat()` and `minmax()` saves code and increases flexibility.
* Suitable for complex, large-scale, and responsive layouts.

---

# Grid

**Syntax to create a grid:**

```css
selector {
    display: grid; /* or inline-grid */
}
```

**Default properties of a Grid container:**

* `grid-template-rows: none` → Configures elements by rows like a table.
* `grid-template-columns: none` → Configures elements by columns.
* `grid-template-areas: none` → Names and positions areas within the grid.
* `grid-auto-rows: auto` → Default size for rows not explicitly defined.
* `grid-auto-columns: auto` → Default size for columns not explicitly defined.
* `grid-auto-flow: row` → Default placement of elements not explicitly positioned.
* `column-gap: normal` → Gap between columns.
* `row-gap: normal` → Gap between rows.

---

## Container Grid Properties

* `grid-template-columns: measurement units | % units | repeat()` → Defines column names and sizes.
* `grid-template-rows: measurement units | % units | repeat()` → Defines row names and sizes.
* `grid-auto-columns: measurement unit` → Default size for automatically created columns.
* `grid-auto-rows: measurement unit` → Default size for automatically created rows.
* `grid-template: "header header" auto "main right" 75vh "footer footer" 20rem` → Defines named areas and corresponding sizes.

---

## Gaps

* `grid-gap: measurement units` → Gap between rows and columns.
* `grid-column-gap: measurement units` → Gap between columns.
* `grid-row-gap: measurement units` → Gap between rows.

---

## Alignment

* `justify-items: start | center | end | stretch` → Align elements along the inline (horizontal) axis of the cell.
* `align-items: start | center | end | stretch` → Align elements along the block (vertical) axis.
* `place-items: start | stretch` → Shorthand for `justify-items + align-items`.

---

## Justify Content

* `justify-content: start | center | end | stretch | space-between | space-evenly | space-around` → Distribute space along the main axis.
* `align-content: start | center | end | stretch | space-between | space-evenly | space-around` → Distribute space along the cross axis.
* `place-content: center | start` → Shorthand for `justify-content + align-content`.

---

## Auto Placement

* `grid-auto-flow: row | column | dense` → How elements are automatically placed.
* `grid-auto-columns: measurement units` → Default size of auto-created columns.
* `grid-auto-rows: measurement units` → Default size of auto-created rows.

---

## Properties for Grid Items (Child Elements)

* `grid-column: column position` → Define start and end column (e.g., `1/2`).
* `grid-column-start: column start position` → Start column.
* `grid-column-end: column end position` → End column.
* `grid-row: row position` → Define row position.
* `grid-row-start: row start position` → Start row.
* `grid-row-end: row end position` → End row.

---

## Alignment for Grid Items

* `justify-self: start | center | end | stretch` → Align horizontally within the cell.
* `align-self: start | center | end | stretch` → Align vertically within the cell.
* `place-self: start | stretch` → Shorthand for both properties above.

---

# Flexbox

**Syntax to create Flexbox:**

```css
selector {
    display: flex | inline-flex;
}
```

## Container Flexbox Properties

* `flex-direction: row | row-reverse | column | column-reverse` → Determines the direction of child elements:

  * `row`: left → right
  * `row-reverse`: right → left
  * `column`: top → bottom
  * `column-reverse`: bottom → top

* `flex-wrap: wrap | nowrap` → Allow items to wrap to the next line if space is insufficient (`wrap`) or keep in one line (`nowrap`).

* `align-items: flex-start | flex-end | center | stretch` → Align children along the cross axis.

* `justify-content: flex-start | flex-end | center | space-between | space-evenly` → Align children along the main axis:

  * `flex-start`: start of main axis
  * `flex-end`: end of main axis
  * `center`: center
  * `space-between`: first and last items at edges, remaining items evenly spaced
  * `space-evenly`: all items evenly spaced including edges

---

## Flexbox Child Properties

* `flex-grow` → Proportion of element expansion.
* `flex-shrink` → Proportion of element shrinking.
* `flex-basis: auto | measurement unit` → Initial size of element.
* `order` → Order of appearance (default is source order).
* `align-self: start | center | end | stretch` → Align individual element along cross axis.

---

# CSS Grid Layouts – Common Grid Types

## 1. Pancake Stack Layout

* **Idea:** Divide page into 3 sections: header, main, footer stacked vertically.

**HTML:**

```html
<header>Little Lemon</header>
<main>Menu</main>
<footer>About Us</footer>
```

**CSS:**

```css
body {
  display: grid;
  height: 150vh; /* 150% of viewport height */
  grid-template-rows: auto 1fr auto; /* header, main, footer */
}

header, main, footer {
  text-align: center;
  padding: 2em;
}

header { background-color: lightblue; }
main { background-color: lightgreen; }
footer { background-color: lightcoral; }
```

* **Features:**

  * Elements stacked vertically.
  * Layout auto-adjusts when page size changes.

---

## 2. 12-Column Grid Layout (Twelve Span Grid)

* **Idea:** Divide page into 12 equal columns; elements can start at any column and span a specific number of columns.

**HTML:**

```html
<div class="parent">
  <div class="segment span12">Segment 1</div>
  <div class="segment span8">Segment 2</div>
  <div class="segment span4">Segment 3</div>
  <!-- More segments -->
</div>
```

**CSS for container:**

```css
.parent {
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12 equal columns */
  grid-auto-rows: 100px;
}
```

**CSS for segments:**

```css
.segment {
  display: grid;
  place-items: center; /* center content */
  text-align: center;
}

.span12 { grid-column: 1 / span 12; background-color: lightgreen; }
.span8  { grid-column: 5 / span 8; background-color: bisque; }
```

* **Features:**

  * Control start column and span.
  * Useful for newspaper, magazine layouts, or multi-column web pages.
  * Easy to inspect virtual columns using DevTools.

---

## 3. Notes for CSS Grid

* Grid layouts are flexible and suitable for responsive design.
* `repeat()` and `span` reduce redundancy and simplify layout control.
* Multiple layouts can be combined: stacked layout + 12-column layout for complex web design.

---

# CSS Grid Template Areas

## 1. Basic Concept

* **Grid Area:** One or more grid cells grouped together.
* **Grid Template Areas:** Name the areas for easier CSS styling.

**Advantages:**

* Names like `header`, `nav`, `main`, `footer` improve readability.
* Easy to manage layout changes.

---

## 2. Steps to Create Grid Template Areas

1. Define the grid container:

```css
body {
  display: grid;
}
```

2. Set grid size:

```css
body {
  height: 200px;
  grid-template-rows: 50px 100px 50px; /* row heights */
  grid-template-columns: 100px 200px;   /* column widths */
}
```

3. Assign named areas:

```css
body {
  grid-template-areas: 
    "head head"
    "nav  main"
    "footer footer";
}
```

4. Map names to HTML elements:

```css
header { grid-area: head; }
nav    { grid-area: nav; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

---

## 3. Important Principles

* Each row in `grid-template-areas` represents a row.
* Each name in a row represents a column.
* Repeat names if an area spans multiple columns, e.g., `"head head"` → head spans 2 columns.
* Number of rows = number of lines in `grid-template-areas`.
* Number of columns = number of names per line.

---

## 4. Extended Example

```css
grid-template-areas: 
  "head head head"
  "nav  main main"
  "footer footer footer";
```

* head spans 3 columns, nav 1 column, main 2 columns, footer 3 columns.
* Using relative values (`fr`) for `grid-template-columns` and `grid-template-rows` makes areas scale proportionally.

---

# Responsive Web Design

## 1. Basic Concept

* **Goal:** Make websites work well across devices and screen sizes: phones, tablets, desktops, TVs.
* **Idea:** Build interfaces that adapt to different viewports without device-specific code.

**Example:**

* Desktop menu: tab bar at top.
* Mobile menu: collapses into dropdown.

---

## 2. Principles of Responsive Design

1. **Prioritize user experience (UX):**

   * On mobile, place action buttons near bottom for thumb interaction.
   * On desktop, position functions according to larger screens.

2. **Ensure everything “works”:**

   * First make interface usable, then enhance experience.

3. **Consider emotions and experience:**

   * Content should feel friendly and accessible.
   * Design should feel natural when taking photos or viewing content.

4. **Maintain quality:**

   * QA teams test on multiple screen sizes.
   * End-to-end tests ensure features work across sizes.
   * Update design for new devices/technologies (e.g., new iPhone screens).

---

## 3. Design Mindset

* Don’t focus on specific devices; ensure site works across full width range.
* Design flexibly: “walk across a range of dimensions” rather than just “tick boxes”.
* Use CSS techniques: media queries, flexible grids, responsive units (`%`, `vh`, `vw`, `fr`) for adaptable layouts.

---

## 4. Conclusion

Responsive Web Design is not just about “making it run”; it considers UX, emotional experience, and adaptability.

* **Goal:** Website works regardless of screen size or device.
* **Practice:** Resize browser window to see layout adapt automatically.

---

# CSS Selectors – Overview

CSS selectors allow you to select HTML elements or groups of elements to apply styles. There are many types of selectors, each with its own use and purpose.

---

## 1. Basic Selectors (Previously Learned)

| Selector              | Usage                           | Description                                                |
| --------------------- | ------------------------------- | ---------------------------------------------------------- |
| Element/Type Selector | `p { color: red; }`             | Selects all elements of a specific HTML tag (e.g., `<p>`). |
| ID Selector           | `#header { background: blue; }` | Selects a single element with the given `id`.              |
| Class Selector        | `.menu { font-size: 16px; }`    | Selects all elements with the corresponding class.         |

---

## 2. Attribute Selector

* **Syntax:** `[attribute="value"]` or `[attribute*="value"]`
* **Purpose:** Select elements based on attributes and their values.

**Example:**

```html
<a href="meta.html" class="home">Home</a>
<a href="meta-about.html" class="about">About</a>
<a href="meta-careers.html">Careers</a>
```

```css
/* Select all elements with a class */
a[class] { color: green; }

/* Select all elements where href contains "meta" */
a[href*="meta"] { color: green; }

/* Select a specific href */
a[href="meta.html"] { font-weight: bold; }
```

* Very flexible, can be applied to any HTML attribute.

---

## 3. Nth-child & Nth-of-type Selector

* **Syntax:** `element:nth-child(n)` or `element:nth-of-type(n)`
* **Purpose:** Select the nth child element of a parent.

**Example:**

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```css
li:nth-child(2) { color: aqua; }
li:nth-of-type(2) { color: aqua; }
```

* In this example, the 2nd `<li>` is colored aqua.

---

## 4. Star Selector (*)

* **Syntax:** `* { margin: 0; padding: 0; }`
* **Purpose:** Select all elements on the page.
* Often used to reset browser default CSS.

---

## 5. Group Selector (Selector Stacking)

* **Syntax:** `h1, p { color: red; }`
* **Purpose:** Apply the same style to multiple elements at once.
* Saves time and avoids redundant code.

---

## 6. Summary

Common selectors help you target CSS styling specifically:

* Attribute selector → flexible, based on attributes.
* Nth-child / nth-of-type → select element by position in parent.
* Star selector (*) → select all elements, often used for reset.
* Group selector → apply same style to multiple elements.

---

# CSS Selectors and Specificity

When building a website, a single HTML element may have multiple CSS rules applied simultaneously. For example, the text color of a `<p>` tag might conflict between rules. CSS uses **specificity** to determine which rule is ultimately applied.

---

## 1. CSS Conflict Problem

* When multiple rules apply to an element, only one value per property is chosen.
  **Example:**

```html
<p style="color: white;">Hello</p>
```

```css
p { color: blue; }
```

* The `<p>` displays white because inline style has the highest specificity.

---

## 2. Specificity Hierarchy

CSS classifies selectors by priority:

### 2.1 Inline Style

* Applied directly to the element with `style` attribute.
* Highest specificity.
* Example: `<p style="color: white;">`

### 2.2 ID Selector

* Denoted by `#`.
* Example: `#header`
* Second-highest specificity.

### 2.3 Class, Attribute, Pseudo-class

* Includes class, attribute, or pseudo-class selectors.
* Example: `.menu`, `[type="text"]`, `:hover`

### 2.4 Element & Pseudo-element

* Element or pseudo-element selectors have the lowest specificity.
* Example: `div`, `p`, `::after`

---

## 3. How Specificity is Calculated

* CSS uses a point model `(a, b, c, d)`:

| Number | Selector Type                  | Example                            |
| ------ | ------------------------------ | ---------------------------------- |
| a      | Inline style                   | `<p style="color:white;">`         |
| b      | ID selector                    | `#header`                          |
| c      | Class, attribute, pseudo-class | `.menu`, `[type="text"]`, `:hover` |
| d      | Element, pseudo-element        | `div`, `p`, `::after`              |

**Example 1:**

```css
p {}           /* 0 0 0 1 => Points: 1 */
div p {}       /* 0 0 0 2 => Points: 2 */
div p.foo {}   /* 0 0 1 2 => Points: 12 */
```

* Rule `div p.foo {}` is applied because it has the highest points.

**Example 2:**

```css
p#bar {}       /* 0 1 0 1 => Points: 101 */
p.foo {}       /* 0 0 1 1 => Points: 11 */
p.p.foo {}     /* 0 0 2 1 => Points: 21 */
```

* Rule with ID (`#bar`) is applied because it has the highest points.

---

## 4. Key Rules

1. Selector with higher points is applied.
2. If points are equal, the rule appearing later is applied.
3. Use ID selectors when you want to ensure the rule applies.
4. Universal selector (*) has points = 0.

---

## 5. Significance of Specificity

* Explains why CSS “cascades” (rules fall according to priority).
* Helps control style application when multiple rules conflict.
* Understanding specificity is crucial for predicting outcomes and avoiding conflicts in complex CSS.

---

# CSS Combination Selectors

Sometimes you want to apply the same style to multiple elements or groups of elements. CSS allows combining selectors based on relationships between elements. There are **4 main types** of combination selectors:

* Descendant selectors
* Child selectors
* General sibling selectors
* Adjacent sibling selectors

---

## 1. Descendant Selectors

* Select HTML elements nested inside another selector.
* Imagine like a family: select a person, then select all descendants with certain traits.

**Example:**

```html
<div id="blog">
  <h1>Title 1</h1>
  <h1>Title 2</h1>
</div>
```

```css
#blog h1 {
  color: blue;
}
```

* All `<h1>` inside `#blog` will be blue.

---

## 2. Child Selectors

* Select only direct children of a parent element, not grandchildren.
* Syntax: `>` between parent and child.

**Example:**

```css
#blog > h1 {
  color: blue;
}
```

* Only `<h1>` that are direct children of `#blog` are blue.

---

## 3. General Sibling Selectors

* Select all sibling elements of a specific type that follow a reference element.
* Syntax: `~`

**Example:**

```css
h1 ~ p {
  color: blue;
}
```

* All `<p>` elements following `<h1>` will be blue.
* Does not select elements before `<h1>`.

---

## 4. Adjacent Sibling Selectors

* Select only the first immediate sibling after a reference element.
* Syntax: `+`

**Example:**

```css
h1 + p {
  color: blue;
}
```

* Only the `<p>` immediately following `<h1>` will be blue.

---

## 5. Practical Examples with General and Adjacent Sibling

### 5.1 General Sibling Example

**HTML:**

```html
<div>About</div>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<div>Employee</div>
<ul>
  <li>Item A</li>
  <li>Item B</li>
</ul>
```

**CSS:**

```css
div ~ ul {
  background-color: white;
  box-shadow: 1px 1px 3px gray;
}
```

* All `<ul>` following a `<div>` will have white background and shadow.
* `<div>` does not affect `<ul>` that are not following it.

### 5.2 Adjacent Sibling Example

**HTML:**

```html
<img src="image1.jpg">
<p>Caption 1</p>

<img src="image2.jpg">
<div>About</div>
<p>Caption 2</p>
```

**CSS:**

```css
img + p {
  text-align: center;
  font-size: smaller;
}
```

* Only `<p>` immediately after `<img>` are styled, like image captions.

---

## 6. Conclusion

* Combination selectors allow you to select elements based on relationships.
* Saves time and avoids writing many separate CSS rules.
* Types of combination selectors:

  * Descendant (` `)
  * Child (`>`)
  * General Sibling (`~`)
  * Adjacent Sibling (`+`)

---

# CSS Pseudo-class Selectors

Pseudo-class selectors help developers control which elements they select and style.

* Improve web interactivity.
* Allow advanced styling without much effort.
* Also simply called **pseudo-classes**.
* Pseudo-classes are **state-based selectors**, meaning they select elements based on their state (e.g., `hover`, `active`).

---

## 1. Introduction and Basic Syntax

**General syntax:**

```css
selector:pseudo-class {
  /* properties */
}
```

**Common pseudo-classes:**

* `:hover` – when the mouse hovers over an element
* `:active` – when the element is being pressed
* `:focus` – when an element is focused
* `:visited` – when a link has been visited
* `:first-of-type`, `:last-of-type`, `:nth-of-type` – select elements by specific position in a list
* `:empty`, `:checked`, `:disabled`, `:enabled`, `:valid`, `:invalid` – form or element states

---

## 2. User Action States

These pseudo-classes take effect when users interact with elements:

### 2.1 Hover

* Changes style when the mouse moves over an element.

### 2.2 Active

* Changes style when the user presses and holds the element (mouse or keyboard).

### 2.3 Focus

* Styles the focused element (e.g., input, button).

**Example:**

```html
<p class="mypage"><a href="#">Link</a></p>
<div><button class="mybutton">Click me</button></div>
```

```css
.mypage a:hover {
  color: red; /* on hover */
}

.mybutton:active {
  background-color: yellow; /* on press */
}
```

* Pseudo-classes apply to HTML elements or classes.

---

## 3. Form States

* Used for form elements with multiple states:

  * `:disabled / :enabled` – for buttons
  * `:checked / :indeterminate` – for checkboxes
  * `:valid / :invalid` – for inputs like email or phone number

---

## 4. Specific Position-based States

* Select elements based on their order in a list or group:

  * `:first-of-type` – first element
  * `:last-of-type` – last element
  * `:nth-of-type(n)` – nth element
  * `:nth-last-of-type(n)` – nth element from the end

**Example: first-of-type**

```html
<ul>
  <li>Adrian</li>
  <li>Mario</li>
</ul>
```

```css
li:first-of-type {
  color: blue;
}
```

* Only the first `<li>` (Adrian) is blue; Mario is unaffected.

---

## 5. Conclusion

* Pseudo-class selectors enhance interactivity and save time writing CSS.
* You can focus on **user states**, **form states**, or **element position**.
* Exploring and experimenting with pseudo-classes makes a website more professional and dynamic.

---

# CSS Pseudo-element Selectors

Pseudo-elements let you style a specific part of an element **without changing the HTML**.

* For example: style the first letter, first line, selected text, or bullet point.
* Use **two colons (::)** instead of one.

---

## 1. Basic Syntax

```css
selector::pseudo-element {
  property: value;
}
```

> Note: Pseudo-elements always use **two colons (::)**.

---

## 2. Common Pseudo-elements

### 2.1 `::first-letter`

* Styles only the first letter of an element.

**Example:**

```html
<ul>
  <li>Learn CSS</li>
  <li>Practice daily</li>
  <li>Build projects</li>
</ul>
```

```css
li::first-letter {
  color: coral;
  font-size: 1.3em;
  font-weight: bold;
  line-height: 1;
}
```

* The first letter of each list item is highlighted with larger size and color.

---

### 2.2 `::first-line`

* Styles the first line of an element.

```css
ul {
  list-style-type: none;
}

li::first-line {
  color: lightseagreen;
  text-decoration: underline;
  line-height: 1;
}
```

* The first line of each list item is underlined and colored.

> Note: The first line changes when the viewport size changes.

---

### 2.3 `::selection`

* Styles text when a user selects/highlights it.

```css
li::selection {
  color: brown;
  background-color: antiquewhite;
  line-height: 1;
}
```

* When text is selected, the font color and background change.

---

### 2.4 `::marker`

* Styles the bullet points of lists.

```css
li::marker {
  color: cornflowerblue;
  content: '<> ';
  font-size: 1.1em;
}
```

* Bullet points are blue and `< >` are added before the list item.

---

### 2.5 `::before` and `::after`

* Insert content before or after an element **without changing HTML**.
* Can combine with styling.

**Example:**

```html
<p id="tips">Don't rinse your pasta after it is drained.</p>
<p>Slice the tomatoes. Take the extra effort to seed them.</p>
<p id="tips">Peel and seed large tomatoes.</p>
```

```css
#tips::before {
  background: darkkhaki;
  color: darkslategray;
  content: "Tip:";
  padding-left: 3px;
  padding-right: 5px;
  border-radius: 10%;
}

#tips::after {
  content: "!!";
}
```

* "Tip:" is added before each instruction.
* "!!" is added after each instruction.
* `<p>` elements without `id="tips"` are unaffected.

---

## 3. Conclusion

* Pseudo-elements enhance website design without modifying HTML.
* Common examples: `::first-letter`, `::first-line`, `::selection`, `::marker`, `::before`, `::after`.
* You can creatively apply styles to highlight content and make the page visually appealing.

