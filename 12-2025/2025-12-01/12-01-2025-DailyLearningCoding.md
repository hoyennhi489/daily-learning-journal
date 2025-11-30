# Pseudo-classes and Web-link States in CSS

## 1. Introduction to Pseudo-classes

### 1.1. What is a Pseudo-class?

A pseudo-class is used to style an HTML element based on its state (for example: when a link has been clicked, when a user hovers over it, when a button is being pressed, etc.).

### 1.2. Applications

* Increase interactivity on a webpage
* Create visual effects when users interact with elements

**Example:**

```css
button:hover {
    background-color: yellow;
}
```

---

## 2. Web-link States

### 2.1. Four Main States of the `<a>` Tag

Pseudo-classes commonly used to style links:

| State                 | Pseudo-class | Meaning                                |
| --------------------- | ------------ | -------------------------------------- |
| Unvisited link        | `:link`      | Default or initial custom color        |
| Visited link          | `:visited`   | Changes color after the user clicks    |
| When hovered          | `:hover`     | Creates effect when preparing to click |
| When active (clicked) | `:active`    | Shows the state while clicking         |

### 2.2. Important Rule: LVHA Order

LVHA = Link → Visited → Hover → Active
If written in the wrong order, some styles may be overridden and not displayed.

**Correct Example:**

```css
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: green; }
a:active { color: black; background-color: white; }
```

---

## 3. Example: pseudo_links.html Page

### 3.1. HTML Structure

```html
<h1>Little Lemon</h1>
<p>Visit our <a href="https://instagram.com">Instagram</a></p>
<p>Some additional text here.</p>
```

### 3.2. CSS Styling by State

```css
a:link { color: blue; }
a:visited { color: violet; }
a:hover { color: green; }
a:active {
    color: white;
    background-color: black;
}
```

### 3.3. Behavior When Running the Page

* Initially, the link displays in blue (`link`)
* On hover → turns green (`hover`)
* While pressing → white text on black background (`active`)
* After visiting → turns violet (`visited`)

---

## 4. Pseudo-class `:hover` for Advanced Effects

### 4.1. Example Using Class `.textual`

**HTML:**

```html
<p class="textual">Lorem ipsum dolor sit amet...</p>
<p class="textual">Another paragraph of text...</p>
<p class="textual">More sample text...</p>
<p class="textual">Last block of placeholder text...</p>
```

**CSS:**

```css
.textual {
    padding: 16px;
    margin-bottom: 12px;
}

.textual:hover {
    box-shadow: 5px 0px 25px black;
}
```

### 4.2. Effect

* Paragraphs appear normal by default
* On hover → a shadow appears around the block
* All paragraphs share the effect because they use the same `.textual` class

---

## 5. Conclusion

* Pseudo-classes help create rich interactive experiences
* Web-link states (`link`, `visited`, `hover`, `active`) are basic but essential tools
* LVHA order must be followed to avoid style overrides
* `:hover` can be applied to any element for strong visual effects

---

# CSS TABLE – SELECTORS & PSEUDO-CLASSES

## 1. Simple Selectors

| Selector Type | Syntax    | Example     | Description                                   |
| ------------- | --------- | ----------- | --------------------------------------------- |
| Element       | `element` | `div {}`    | Selects by tag name                           |
| Class         | `.class`  | `.alpha {}` | Selects all elements with the class           |
| ID            | `#id`     | `#alpha {}` | Selects the element with the corresponding ID |
| Universal     | `*`       | `* {}`      | Selects all elements                          |

---

## 2. Variants of Simple Selectors

| Syntax             | Example          | Description                                  |
| ------------------ | ---------------- | -------------------------------------------- |
| `.class1.class2`   | `.alpha.beta {}` | Element with both classes                    |
| `element.class`    | `p.alpha {}`     | Class on a specific tag                      |
| `element, element` | `p, div {}`      | Select multiple element types                |
| `element element`  | `p div {}`       | Select child elements inside another element |

---

## 3. Descendant / Combinator Selectors

| Syntax              | Example      | Description                               |
| ------------------- | ------------ | ----------------------------------------- |
| `element element`   | `div p {}`   | All `<p>` inside `<div>`                  |
| `element > element` | `div > p {}` | `<p>` is a direct child of `<div>`        |
| `element + element` | `div + p {}` | `<p>` immediately after `<div>`           |
| `element ~ element` | `div ~ p {}` | All `<p>` after `<div>` at the same level |

---

## 4. Attribute Selectors

| Syntax           | Example            | Description                       |
| ---------------- | ------------------ | --------------------------------- |
| `[attr]`         | `[href]`           | Has the attribute                 |
| `[attr="value"]` | `[lang="fr"]`      | Exact value                       |
| `[attr~=value]`  | `[input~=hello]`   | Contains word separated by spaces |
| `[attr^=value]`  | `a[href^="https"]` | Starts with                       |
| `[attr$=value]`  | `a[href$=".docx"]` | Ends with                         |
| `[attr*=value]`  | `a[href*="meta"]`  | Contains substring                |

---

## 5. Pseudo-classes

| Pseudo-class           | Example                 | Description                      |
| ---------------------- | ----------------------- | -------------------------------- |
| `:active`              | `a:active`              | Link being pressed               |
| `:checked`             | `input:checked`         | Input is checked                 |
| `:default`             | `input:default`         | Default value                    |
| `:disabled`            | `input:disabled`        | Input disabled                   |
| `:empty`               | `div:empty`             | No child content                 |
| `:enabled`             | `input:enabled`         | Input enabled                    |
| `:first-child`         | `p:first-child`         | First child of parent            |
| `:first-of-type`       | `p:first-of-type`       | First `<p>` among `<p>` siblings |
| `:focus`               | `input:focus`           | Currently focused                |
| `:fullscreen`          | `:fullscreen`           | Element in fullscreen mode       |
| `:hover`               | `p:hover`               | On mouse hover                   |
| `:invalid`             | `input:invalid`         | Invalid value                    |
| `:last-child`          | `p:last-child`          | Last child                       |
| `:last-of-type`        | `p:last-of-type`        | Last `<p>` among `<p>` siblings  |
| `:link`                | `a:link`                | Unvisited link                   |
| `:not(selector)`       | `:not(div)`             | Not the selector                 |
| `:nth-child(n)`        | `div:nth-child(3)`      | nth child                        |
| `:nth-last-child(n)`   | `div:nth-last-child(3)` | nth child from the end           |
| `:nth-last-of-type(n)` | `p:nth-last-of-type(2)` | 2nd `<p>` from the end           |
| `:nth-of-type(n)`      | `p:nth-of-type(2)`      | 2nd `<p>`                        |
| `:only-of-type`        | `p:only-of-type`        | Only one `<p>` exists            |
| `:only-child`          | `p:only-child`          | Only one child exists            |
| `:optional`            | `input:optional`        | Not required                     |
| `:required`            | `input:required`        | Required input                   |
| `:root`                | `:root`                 | Root element (HTML)              |
| `::selection`          | `::selection`           | Selected text                    |
| `:valid`               | `input:valid`           | Valid input                      |
| `:visited`             | `a:visited`             | Visited link                     |

---

## 6. Pseudo-elements

| Pseudo-element   | Example              | Description                 |
| ---------------- | -------------------- | --------------------------- |
| `::after`        | `p::after`           | Adds content after element  |
| `::before`       | `p::before`          | Adds content before element |
| `::first-letter` | `p::first-letter`    | First letter                |
| `::first-line`   | `p::first-line`      | First line                  |
| `::placeholder`  | `input::placeholder` | Placeholder text            |
| `::marker`       | `::marker`           | List marker                 |

---

# CSS Effects and Animations

## 1. Introduction to Effects

* **Definition of Effect:**
  An effect is a change that occurs as a result of an action or another cause.

* **Animation:**
  Animation is a type of effect that makes a webpage lively by creating time-based moving graphics.

**Examples:**

* Moving an image, changing a button color on hover, or a gallery slider.

---

## 2. History of Animation on the Web

1. **GIFs (1987):**

   * Simple moving images, e.g., a moving airplane.

2. **Flash Animation:**

   * Supports audio, video, and interactive websites.
   * Disadvantage: requires a special browser plugin.

3. **CSS and SVG:**

   * Easy to learn, lightweight, supports basic animations without plugins.

**Example (Simple: move a square to the right):**

```css
.box {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  transition: left 2s;
}
.box:hover {
  left: 200px;
}
```

---

## 3. Animation Libraries and Tools

* **Popular libraries:** jQuery, Pop Motion.

* **Advantages of CSS:**

  * Easy to learn
  * Time-saving
  * Can create good effects

* **Disadvantages:**

  * Advanced libraries may be harder to learn
  * Can increase development time

---

## 4. Common Effects on the Web

### 4.1 Hover Effect

* Changes element appearance on mouse hover.
* Examples: change color, highlight element, add shadow.

```css
.button {
  background-color: blue;
  color: white;
  transition: background 0.3s;
}
.button:hover {
  background-color: green;
}
```

### 4.2 Cursor Effects

* Change the mouse pointer on hover.
* Can add gradients or animation.

```css
.element {
  cursor: pointer;
}
```

### 4.3 Sliding Galleries / Slideshows

* Display images or content in slides.
* Common in portfolios or product showcase pages.

### 4.4 Video Backgrounds

* Videos play in the background of the page to create motion effects.

### 4.5 Parallax Effect

* Creates depth: foreground moves faster than background.

### 4.6 Back to Top Effect

* Button to scroll quickly to the top.
* Often combined with animation to attract attention.

### 4.7 Fullscreen Snapping

* Quickly switch sections when scrolling.
* Provides smooth user experience.

---

## 5. Advantages and Disadvantages of Using Effects

**Advantages:**

* Attract users’ attention
* Highlight important elements
* Increase creativity and website aesthetics
* Support intuitive navigation

**Disadvantages:**

* Excessive use can be distracting
* Increases CSS file size → slower page load on weak networks
* Must be carefully applied to avoid affecting user experience

---

## 6. Conclusion

* Understanding effects and animations helps create lively, user-friendly websites.
* History: GIF → Flash → CSS/SVG.
* Popular effects: hover, cursor change, slideshows, video backgrounds, parallax, back to top, fullscreen snapping.
* CSS: an effective tool to create basic animations, saving time and resources.

---

# CSS Text Effects

## 1. Introduction

* Text on a website can be either engaging or boring.
* Using CSS, text can be highlighted with various effects.

---

## 2. text-overflow

* **Purpose:** Handle content that exceeds container size.
* **Related properties:**

  * `white-space`: Controls whitespace handling.

    * Example: `nowrap` keeps all text on a single line.
  * `text-overflow`: Determines how overflow content is displayed.

**Common values for `text-overflow`:**

1. `ellipsis`: Replace overflow with `…`
2. `clip`: Cut off extra content
3. `hidden`: Hide overflow content
4. `scroll`: Add scroll bar

**Example Ellipsis:**

```css
.texts {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

* On hover, full text can be displayed.

**Example Clip:**

```css
.texts-clip {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
```

---

## 3. Vertical Text

* **Property:** `writing-mode`
* **Common value:** `vertical-rl` (vertical text, right to left)

```html
<p class="vert">12-15 items</p>
```

```css
.vert {
  writing-mode: vertical-rl;
}
```

* Text is displayed vertically.

---

## 4. Word Wrap

* **Purpose:** Control line breaks in long text.
* **Property:** `word-wrap` or `overflow-wrap`
* **Common values:**

  * `break-word`: Break words if they exceed container width
  * `normal`: Default line breaking

```css
.word-example {
  width: 150px;
  word-wrap: break-word;
}
```

* Long words are broken to fit the container.

---

## 5. Text Shadow

* **Purpose:** Add shadow to text, making it stand out.
* **Syntax (shorthand):** `<horizontal offset> <vertical offset> <blur radius> <color>`

**Basic Example:**

```css
.text-shadow {
  text-shadow: 2px 2px 5px gray;
}
```

**Glow Effect Example:**

```css
.glow {
  text-shadow: 0 0 10px blue, 0 0 20px blue;
}
```

* Creates glowing text; color and blur radius can be adjusted.

---

## 6. Conclusion

* CSS can make text dynamic, readable, and visually appealing.
* Important properties:

  * `text-overflow` → handle overflow
  * `writing-mode` → vertical text
  * `word-wrap` → word break
  * `text-shadow` → shadow and glow effects
* Proper use enhances user experience and website aesthetics.

---

# CSS Text Effects Table

### 1. Basic Text Styling Properties

| Property          | Values                                             | Description       | CSS Example                   |
| ----------------- | -------------------------------------------------- | ----------------- | ----------------------------- |
| `text-transform`  | none, uppercase, lowercase, capitalize, full-width | Convert case      | `text-transform: uppercase;`  |
| `font-style`      | normal, italic, oblique                            | Italic or oblique | `font-style: italic;`         |
| `font-weight`     | normal, bold, lighter, 100-900                     | Font thickness    | `font-weight: bold;`          |
| `text-decoration` | none, underline, overline, line-through            | Text decoration   | `text-decoration: underline;` |

### 2. Additional Text Effect Properties

| Property                    | Values                                    | Description              | CSS Example                           |
| --------------------------- | ----------------------------------------- | ------------------------ | ------------------------------------- |
| `text-align`                | left, right, center, justify              | Horizontal alignment     | `text-align: center;`                 |
| `text-align-last`           | left, right, center, justify              | Alignment of last line   | `text-align-last: right;`             |
| `vertical-align`            | baseline, sub, super, top, middle, bottom | Vertical alignment       | `vertical-align: middle;`             |
| `text-decoration-color`     | color                                     | Color of text decoration | `text-decoration-color: red;`         |
| `text-decoration-line`      | underline, overline, line-through         | Decoration type          | `text-decoration-line: line-through;` |
| `text-decoration-style`     | solid, wavy, dotted, dashed               | Decoration style         | `text-decoration-style: wavy;`        |
| `text-decoration-thickness` | auto, from-font, length                   | Thickness of decoration  | `text-decoration-thickness: 2px;`     |
| `text-indent`               | length, percentage                        | First-line indentation   | `text-indent: 20px;`                  |
| `text-justify`              | auto, inter-word, inter-character         | Text justification       | `text-justify: inter-word;`           |
| `direction`                 | ltr, rtl                                  | Text direction           | `direction: rtl;`                     |
| `text-shadow`               | h-offset v-offset blur color              | Text shadow              | `text-shadow: 2px 2px 5px gray;`      |
| `text-underline-position`   | auto, under                               | Underline position       | `text-underline-position: under;`     |

### 3. Overflow and Word Break Properties

| Property                      | Values                                  | Description                  | CSS Example                  |
| ----------------------------- | --------------------------------------- | ---------------------------- | ---------------------------- |
| `text-overflow`               | clip, ellipsis                          | Behavior when text overflows | `text-overflow: ellipsis;`   |
| `word-wrap` / `overflow-wrap` | normal, break-word                      | Word break rules             | `overflow-wrap: break-word;` |
| `word-break`                  | normal, break-all, keep-all, break-word | Long word break rules        | `word-break: break-word;`    |
| `writing-mode`                | horizontal-tb, vertical-lr, vertical-rl | Horizontal or vertical text  | `writing-mode: vertical-rl;` |

**Notes:**

* Basic properties like `text-transform`, `font-weight`, `text-decoration` are essential for quick text effects.
* Combining additional properties like `text-shadow` and `writing-mode` creates vivid visual effects.
* Overflow and word-break properties ensure text remains neat and readable in all layouts.

---

# CSS Basic Animation: transform & transition

## 1. Concept

* **transform:** Changes an element’s position, size, or rotation.

  * Examples: rotate, skew, scale, translate
  * Note: Used alone, the effect happens immediately without smooth animation.

* **transition:** Controls the timing of changes, making `transform` or other property changes occur smoothly.

---

## 2. Basic Syntax

```css
/* transform syntax */
selector {
  transform: rotate(20deg);
  transform: skewX(20deg);
  transform: scale(1.2);
}

/* transition syntax */
selector {
  transition: transform 2s; /* 2-second transition for transform */
}
```

* `transform` values: rotate, scale, skewX, skewY, translateX, translateY…
* `transition` usually includes the property to change (e.g., transform) and duration (e.g., 2s).

---

## 3. Simple Example: Rotate and Skew Letters

**HTML:**

```html
<div class="A">A</div>
<div class="B">B</div>
```

**CSS:**

```css
.A {
  margin: 20px;
  transform: skewX(20deg); /* Skew A */
  transition: transform 5s;
}

.B {
  margin: 20px;
  transform: rotate(20deg); /* Rotate B */
  transition: transform 5s;
}

.A:hover, .B:hover {
  transform: rotate(0deg); /* Change transform on hover */
}
```

* Result: On hover, skewed or rotated letters transition smoothly over 5 seconds.

---

## 4. Advanced Example: Box Rotation, Color Change, and Opacity

**HTML:**

```html
<div class="box"></div>
```

**CSS:**

```css
.box {
  display: grid;
  width: 240px;
  height: 240px;
  margin: 100px auto;
  background-color: rgb(144, 238, 144); /* light green */
  border: 24px solid #228B22; /* dark green */
  border-radius: 12px;
  transition: transform 2s, background-color 2s, opacity 2s;
}

.box:hover {
  transform: rotateZ(60deg); /* Rotate around Z-axis */
  background-color: lightcoral; /* Change background color */
  opacity: 0.5; /* Reduce opacity */
}
```

**Result:** On hover:

* Rotates 60° around the Z-axis
* Background changes from light green to light coral
* Opacity decreases to 50%
* All transitions occur smoothly over 2 seconds

---

## 5. Notes

1. Always combine `transform` with `transition` for smooth effects.
2. Multiple effects can be combined by listing properties in `transition`.
3. Pseudo-classes like `:hover` and `:active` apply effects on user interaction.

---

# Advanced CSS Animation with @keyframes and Animation

## 1. Basic Concepts

* **@keyframes:**
  A CSS rule used to define the steps (keyframes) of an animation.

  * Written with the `@` prefix.
  * Allows specifying the element’s state at different points in the animation.
  * Can use keywords `from` (start) and `to` (end) or percentages (0%, 50%, 100%) to define multiple steps.

* **animation:**
  A property that assigns an animation to an element.

  * Links the animation to a name defined in `@keyframes`.
  * Has multiple sub-properties that can be configured.

---

## 2. Basic Syntax

### Using `from` and `to`

```css
@keyframes example {
  from { width: 50px; }
  to { width: 100px; }
}

.box {
  animation: example 3s infinite;
}
```

* The width changes from 50px → 100px in 3 seconds.
* `infinite` → repeats indefinitely.

### Using Percentages for Intermediate Steps

```css
@keyframes myanimation {
  0% { width: 50px; }
  50% { background-color: aquamarine; height: 20px; }
  100% { width: 100px; }
}
```

* You can change multiple properties at each keyframe.
* Intermediate steps make the animation more dynamic.

---

## 3. Animation Sub-properties

| Property                    | Default | Description                                   |
| --------------------------- | ------- | --------------------------------------------- |
| `animation-name`            | none    | Links to `@keyframes`                         |
| `animation-duration`        | 0s      | Duration of one cycle                         |
| `animation-timing-function` | ease    | Timing function (speed curve)                 |
| `animation-delay`           | 0s      | Delay before start                            |
| `animation-iteration-count` | 1       | Number of repetitions                         |
| `animation-direction`       | normal  | Loop direction (forwards, reverse, alternate) |
| `animation-fill-mode`       | none    | Apply final state rules                       |
| `animation-play-state`      | running | Running/paused state                          |
| `animation-timeline`        | auto    | Animation timeline                            |

* If a sub-property is not defined, the default value is applied.

---

## 4. Example

**HTML:**

```html
<body>
  <div class="box"></div>
</body>
```

**CSS:**

```css
body {
  padding: 30px;
}

.box {
  width: 50px;
  height: 50px;
  background-color: lightcoral;
  animation: myanimation 3s infinite;
}

@keyframes myanimation {
  0% { width: 50px; }
  50% { background-color: aquamarine; height: 20px; }
  100% { width: 100px; }
}
```

**Result:**

* Width increases from 50px → 100px.
* At 50%, background color and height change.
* Animation repeats infinitely for smooth, dynamic motion.

---

## 5. Example: Continuous Clock Animation

**HTML:**

```html
<div class="clock">
  <div class="minutes hand"></div>
  <div class="hours hand"></div>
</div>
```

**CSS:**

```css
.hand {
  /* basic properties: size, color, position */
}

/* Minute hand animation */
.minutes {
  animation: cycle 6s infinite linear;
}

/* Hour hand animation */
.hours {
  animation: cycle 60s infinite linear;
}

/* Define keyframes */
@keyframes cycle {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**Result:**

* Minute hand rotates every 6 seconds.
* Hour hand rotates every 60 seconds.
* Both move smoothly and continuously thanks to `linear` and `infinite`.

---

## 6. Benefits of @keyframes

1. Allows simultaneous control of multiple CSS properties.
2. Supports complex animations with multiple intermediate steps.
3. Can combine with `animation-direction` and `iteration-count` for diverse motion.
4. Enhances creativity and interactivity without JavaScript.

---

# Creating a Bouncing Ball Animation with CSS

## 1. HTML Structure

```html
<body>
  <div id="ball"></div>
</body>
```

* The `<div>` with `id="ball"` represents the ball.

## 2. Basic CSS for the Ball

```css
#ball {
  width: 80px;
  height: 80px;
  border-radius: 50%; /* make it a circle */
  background-color: #62687F; /* ball color */
}
```

* `border-radius: 50%` → circle
* `width` and `height` → ball size
* `background-color` → fill color

## 3. Define Keyframes

```css
@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0); /* start position */
  }
  to {
    transform: translate3d(640px, 0, 0); /* end position */
  }
}
```

* `from` → initial state
* `to` → final state
* `translate3d(x, y, z)` moves the element along X, Y, Z axes

## 4. Assign Animation

```css
#ball {
  animation: bounce 2s linear infinite;
  animation-direction: alternate; /* reverse direction after each cycle */
}
```

* `bounce 2s linear infinite`:

  * `bounce` → matches `@keyframes`
  * `2s` → duration per cycle
  * `linear` → constant speed
  * `infinite` → repeat indefinitely
* `animation-direction: alternate` → reverses motion after each cycle (bouncing effect)

## 5. Timing Function Explanation

* Default `animation-timing-function: ease` → non-uniform speed (slow start, fast middle, slow end)
* Using `linear` → constant speed, similar to JavaScript motion

## 6. Result

* Ball moves 640px left to right
* Reverses direction at the end thanks to `alternate`
* Runs infinitely with `infinite`
* Constant speed ensured by `linear`

## 7. Extensions

* Add intermediate keyframes (`%`) to create complex effects like varying bounce heights, color changes, or size changes.
* CSS animations with keyframes are powerful for smooth motion without JavaScript.

---

# Overview of CSS Preprocessors: Sass, SCSS, and Stylus

## 1. What is a CSS Preprocessor?

* A special compiler that generates CSS from extended syntax.
* Helps to:

  * Reduce CSS code
  * Reuse values across multiple rules
  * Add programming logic (variables, loops, conditions)
* Popular preprocessors: Sass, SCSS, LESS, Stylus, PostCSS
* Requires a compiler to output standard CSS

---

## 2. Sass and SCSS

### 2.1 SCSS (Sassy CSS) – Extended CSS Syntax

* Any valid CSS file is also a valid SCSS file.
* Uses `{}` and `;` like standard CSS.
* File extension: `.scss`

**Example:**

```scss
$font-stack: Arial;
$primary-color: lightblue;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

### 2.2 Indented Sass Syntax

* No `{}` or `;`.
* Uses indentation and newlines to separate blocks.
* File extension: `.sass`

**Example:**

```sass
$font-stack: Arial
$primary-color: lightblue

body
  font: 100% $font-stack
  color: $primary-color
```

---

## 3. Key Features of Sass/SCSS

### 3.1 Variables

* Store reusable values with `$`

```scss
$primary-color: lightblue;
```

### 3.2 Mixin and Include

* Reuse a group of properties

```scss
@mixin some-rules {
  color: lightblue;
  font-size: 25px;
  font-weight: bold;
}

div {
  @include some-rules;
}
```

### 3.3 @import and @extend

* `@import` → import rules from another file
* `@extend` → inherit rules from another selector

---

## 4. Stylus

* Another preprocessor with very concise syntax:

  * No need for `:` or `{}` or `;`

```stylus
body
  font 100% Arial
  color lightblue
```

* Supports functions and math:

```stylus
add(a, b)
  a + b

div
  margin add(10px, 20px)  // result: margin 30px
```

* Variables `$` can be used but are optional.

---

## 5. Benefits of CSS Preprocessors

* Reduce repetitive code and improve maintainability
* Add programming logic to CSS (`if`, loops, functions)
* Integrate well with complex animations and effects
* Easier management for large CSS projects