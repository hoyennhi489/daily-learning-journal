# Applying UX and UI to the Little Lemon Table Reservation Feature

### 1. Background and Problem Statement

The owner of the Little Lemon restaurant has noticed that customers are experiencing many difficulties when trying to reserve a table through the website. Customer frustration stems from the following issues:

* The reservation process is not easy to use
* The table reservation feature is unclear
* The overall experience is poor

These issues directly affect the restaurant’s ability to:

* Plan staffing
* Prepare ingredients
* Reduce reliance on walk-in customers
* Deliver a positive dining experience

The goal of this project is to improve the table reservation feature to enhance user experience and support the restaurant’s business operations.

### 2. The Role of UX and UI in Solving the Problem

Little Lemon’s issues can be addressed by applying UX (User Experience) and UI (User Interface) principles to the existing table reservation feature.

In this lesson, the following will be covered:

* Reviewing previously learned UX and UI principles
* Applying these principles to a real-world scenario
* Redesigning the table reservation experience for the Little Lemon website

### 3. Deliverables of the Lesson

During the learning process, the following outputs will be created:

* A wireframe for the table reservation feature
* Several UI components
* A prototype for the “Reserve a Table” feature using Figma

These designs will serve as the foundation for later development stages.

### 4. User Research: Persona and User Journey Map

Based on prior user research, the project provides:

* A Persona
* A User Journey Map

These materials help to better understand:

* User needs
* Pain points in the reservation process
* Opportunities for improving the experience

### 5. Identified Improvement Opportunities

The User Journey Map highlights several areas for improvement in the reservation feature, including:

* Allowing users to select seating preferences
* Adding an additional notes field
* Sending reservation confirmation emails
* Selecting a date
* Selecting a time
* Selecting the number of guests

These improvements make the reservation experience more complete, clear, and user-friendly.

### 6. Stages in the UX/UI Process

The UX/UI process consists of several stages:

#### 6.1. Planning Stage

This is considered the most important stage of the UX/UI process. It includes:

* Gathering user goals and expectations
* Identifying the problems to be solved
* Defining the overall purpose of the project

#### 6.2. Design Stage

During this stage:

* Data and insights from the planning stage are translated into concrete designs
* Interface structure is created
* Wireframes are sketched
* Designs are prepared for testing and approval

#### 6.3. Development Stage

The development stage includes:

* Coding
* Implementing features
* Product testing

This is where the outcomes of the design stage are brought to life.

#### 6.4. Launch Stage

For a website or mobile application:

* The finished product is released to users
* The table reservation feature becomes officially available

### 7. UX as an Iterative Process

UX does not end after product launch. In reality:

* UX is an ongoing process
* Even after launch, it is necessary to:

  * Collect feedback
  * Test features
  * Improve the experience

This process can continue indefinitely to continuously enhance product quality.

### 8. The Role of UI in User Experience

UI does not follow a fixed process like UX, but it is still extremely important.

* When UI is well designed:

  * Users barely notice it
  * Everything feels natural and smooth
* When UI is poorly designed:

  * The experience becomes frustrating
  * Users tend to leave the website and not return

### 9. Distinguishing UX and UI Through Examples

* **Good UI but poor UX:**
  Visually appealing interface, but difficult to use
* **Good UX but poor UI:**
  Easy to use, but the interface is unattractive

---

# UX & UI Principles

## UX (User Experience)

UX focuses on how users interact with a product, with the goal of creating meaningful, relevant, and satisfying experiences. The UX process typically consists of five main stages:

1. **Empathize**
   Understand users’ needs, emotions, and problems through observation, interviews, personas, and user journey maps.

2. **Define**
   Synthesize research data to clearly identify key problems and pain points to address.

3. **Ideate**
   Propose multiple solutions through brainstorming, sketching, user flows, and mind maps. Maintain open thinking and be ready to iterate.

4. **Prototype**
   Transform wireframes into interactive simulations that closely resemble the real product to test functionality.

5. **Test & Build**
   Test with real users, gather feedback, and refine designs before official implementation.

→ UX is an iterative process that continuously relies on user feedback.

## UI (User Interface)

UI refers to how a product looks and how users directly interact with it. A good UI often “goes unnoticed,” while a poor UI causes immediate frustration.

**Core UI Principle: Consistency**, including:

1. **Visual Consistency**
   Consistent colors, fonts, icons, and buttons across the interface.

2. **Functional Consistency**
   Components behave as expected, following the principle of least surprise.

3. **Consistency with User Expectations**
   Designs align with users’ habits and familiar conventions.

---

## Conclusion

* UX focuses on the overall experience and solving user problems.
* UI focuses on the visual interface and presentation that supports that experience.
* UX and UI complement each other, and placing users at the center is the most important factor in all design decisions.

---

## Semantic Structure

### 1. Semantic HTML

Semantic HTML is the practice of writing HTML using tags with clear, meaningful purposes, which helps:

* Humans understand the structure of a web page
* Screen readers read content accurately
* Search engines understand and index pages more effectively

Semantic HTML is a modern syntax introduced in HTML5.

---

### 2. HTML5 Standards and Page Structure Organization

HTML should be structured according to HTML5 standards in order to:

* Keep code clear and easy to maintain
* Avoid overusing the `<div>` tag
* Correctly represent the role of each content section

HTML5 encourages using semantic tags instead of generic `<div>` elements.

---

### 3. Main Semantic HTML Tags

#### 3.1. `<header>`

Used for the top section of a page or a content section.
Typically contains: headings, logos, introductory content.

#### 3.2. `<nav>`

Used for navigation areas.
Contains links to other sections or pages.

#### 3.3. `<main>`

Contains the main content of the page.
Each page should have only one `<main>` tag.

#### 3.4. `<article>`

Used for independent, self-contained content.
Examples: articles, product cards, blog posts.

#### 3.5. `<aside>`

Used for secondary or supplementary content.
Examples: sidebars, related information.

#### 3.6. `<footer>`

Used for the footer of a page or a content section.
Typically contains: copyright information, policy links, contact details.

---

### 4. HTML4 and HTML5

#### 4.1. HTML4

* Few tags convey content meaning
* Mainly uses `<div>` for layout structure

#### 4.2. HTML5

* Introduces many semantic tags
* Focuses on:

  * Content meaning
  * Accessibility
  * Search engine optimization

---

### 5. Expressive Syntax

HTML5 promotes an expressive syntax that:

* Clearly communicates content intent
* Helps both humans and machines understand page content
* Supports search bots that scan millions of HTML pages

---

### 6. Meta Tags

Meta tags provide information to browsers and search engines.

Examples:

* Charset
* Viewport
* Description

Meta tags are not displayed directly on the webpage.

---

### 7. Open Graph Protocol

Open Graph is a set of meta tags used to:

* Control how a webpage appears when shared on social media
* Display the correct title, description, and image

---

### 8. Project Tracking with Git

Git is used to:

* Track project progress
* Manage code versions
* Ensure a controlled development process

---

## Meta Tags and the Open Graph Protocol

### 1. What Are Meta Tags?

Meta tags are HTML tags used to provide metadata about a webpage.
They are not visible on the interface but are crucial for:

* Technical SEO
* Display behavior on mobile devices
* How content appears when shared

---

### 2. What Is the Open Graph Protocol (OGP)?

The Open Graph Protocol is an internet protocol developed by Facebook to describe webpage content in a structured way.

OGP helps:

* Turn webpages into “rich objects”
* Control how content appears when shared on social media

---

### 3. Relationship Between Meta Tags and Open Graph

* Open Graph tags are a subset of meta tags
* They focus on link preview display when sharing
* OGP works directly within the HTML5 meta tag system

---

### 4. Main Roles of Meta Tags and OGP

* Improve how webpages appear on social media
* Help increase conversion rates through attractive previews
* Reduce incorrect image or content display when sharing links

Poorly formatted meta tags can cause:

* Incorrect image display
* Unwanted content appearing in link previews

---

### 5. Common Open Graph Meta Tags

#### 5.1. Meta description

Summarizes the content of the webpage.

```html
<meta name="description" content="..." />
```

#### 5.2. `og:title`

Defines the title displayed when a link is shared.

```html
<meta name="og:title" content="..." />
```

#### 5.3. `og:description`

Describes the shared content, displayed below the title.

```html
<meta name="og:description" content="..." />
```

#### 5.4. `og:image`

Specifies the image shown in the preview.

```html
<meta name="og:image" content="https://example.com/image.jpg" />
```

---

### 6. Conclusion

* Meta tags provide additional information about a webpage
* Open Graph is a specialized set of meta tags for social sharing
* OGP controls the title, description, and image when a URL is shared

Using meta tags and Open Graph correctly helps webpages appear more professional, consistent, and effective when shared.

---

## Exercise: Adding Meta Tags and Setting Up Open Graph

### Example 1: Meta Description Tag

**Purpose**

* Provides a concise summary of webpage content
* Often displayed on search engine results pages

**Example**

```html
<meta
  name="description"
  content="Little Lemon is a Mediterranean restaurant offering fast and convenient online table reservations."
/>
```

---

### Example 2: Open Graph `og:title` Tag

**Purpose**

* Defines the title displayed when a link is shared on social media
* Usually the brand name or page title

**Example**

```html
<meta
  name="og:title"
  content="Little Lemon – Online Table Reservation"
/>
```

---

### Example 3: Open Graph `og:description` Tag

**Purpose**

* Describes the content shown below the title when sharing a link
* Helps viewers quickly understand what the webpage is about

**Example**

```html
<meta
  name="og:description"
  content="An online table reservation app for Little Lemon restaurant, making bookings quick and easy."
/>
```

---

### Example 4: Open Graph `og:image` Tag

**Purpose**

* Specifies the preview image shown when sharing
* The image should be directly related to the brand or service

**Example**

```html
<meta
  name="og:image"
  content="https://example.com/images/little-lemon-restaurant.jpg"
/>
```

---

### Example 5: Complete Setup in the `<head>` Tag

```html
<head>
  <meta charset="UTF-8" />

  <meta
    name="description"
    content="Little Lemon is a Mediterranean restaurant offering fast and convenient online table reservations."
  />

  <meta
    name="og:title"
    content="Little Lemon – Online Table Reservation"
  />

  <meta
    name="og:description"
    content="An online table reservation app for Little Lemon restaurant, making bookings quick and easy."
  />

  <meta
    name="og:image"
    content="https://example.com/images/little-lemon-restaurant.jpg"
  />
</head>
```

---

### Quick Reminder

* **description**: for search engines
* **og:title**: title when sharing
* **og:description**: description when sharing
* **og:image**: image when sharing

---

## Styling Elements

### 1. Styling Web Pages and Web Apps

CSS is used to:

* Apply the Little Lemon style guide
* Implement layout designs created earlier in the course

In this lesson:

* You will work with CSS in isolation, without React
* Then examine CSS from a React perspective

---

### 2. History of Layout Techniques in CSS

CSS first appeared in the late 1990s, leading to many different approaches to building layouts over time.

---

### 3. Table-based Layouts

#### 3.1. Characteristics

* Uses the `<table>` tag to divide page layout
* Was a common approach in the early days of the web

#### 3.2. Current Status

* Obsolete
* No longer recommended for building layouts

---

### 4. Float-based Layouts

#### 4.1. What Is Float?

`float` is a CSS property.
When an element is floated:

* It is removed from the normal document flow
* It no longer follows the default layout behavior

#### 4.2. Advantages

* Very popular during the 2000s
* Solved some layout problems of that time

#### 4.3. Limitations

* Not designed specifically for layout
* Requires many auxiliary techniques
* Complex syntax and difficult to control

---

### 5. Flexbox (CSS Flexible Layout)

#### 5.1. Origin

* Introduced in the early 2010s
* Intended to replace inefficient earlier layout solutions

#### 5.2. Characteristics

* A one-dimensional layout system
* Arranges elements along:

  * Rows
  * Columns

#### 5.3. Early Limitations

* Specification changed frequently
* Inconsistent browser support

---

### 6. Modern Flexbox

#### 6.1. Maturation Phase

* Second half of the 2010s
* More stable specifications
* Widely supported by browsers

#### 6.2. Current Role

* A critical part of modern CSS
* Should not be underestimated

---

### 7. CSS Grid Layout

#### 7.1. Time of Widespread Adoption

* Around 2018
* When modern browsers fully supported it
* Older browsers gradually lost market share

#### 7.2. Purpose

* Designed specifically for building layouts
* An official part of the CSS specification

#### 7.3. Advantages

* Two-dimensional layout (rows and columns)
* Powerful and flexible
* Suitable for complex layouts

---

### 8. Comparing Flexbox and CSS Grid

#### 8.1. Relationship Between Flexbox and Grid

* CSS Grid does not replace Flexbox
* The two tools complement each other

#### 8.2. Usage Mindset

* Knowing one is good
* Knowing both is best

---

### 9. Choosing the Right Layout Technique

#### 9.1. Why Understand Multiple Techniques?

* To make correct decisions when:

  * Evaluating existing code
  * Deciding whether to keep or refactor a layout

#### 9.2. Role of Experience

* Experience leads to better decisions
* A solid foundation in modern layout techniques is essential

---

### 10. The Right Tool for Each Problem

Each layout technique has strengths and weaknesses.
Understanding them helps to:

* Choose the right tool
* Evaluate whether code meets modern standards

---

### 11. Lesson Focus

This lesson focuses primarily on:

* Building layouts using CSS Grid

CSS Grid is considered:

* A comprehensive tool
* The most flexible solution in modern CSS

---

## CSS Grid – Grid Layout in CSS

### 1. Overview of CSS Grid

CSS Grid is a two-dimensional layout system in CSS that allows elements to be arranged in rows and columns.

It is a modern, flexible, and responsive solution, considered an alternative to:

* Tables
* Certain use cases of Flexbox

CSS Grid is a key part of modern HTML5 and CSS standards.

---

### 2. What Is CSS Grid?

CSS Grid helps to:

* Organize webpage layouts clearly
* Easily control element position and size
* Create complex layouts while keeping CSS clean and readable
* Maintain strong browser compatibility

In Grid:

* Columns represent the vertical axis
* Rows represent the horizontal axis

---

### 3. Activating Grid Layout

#### 3.1. `display: grid`

To use CSS Grid, the parent element must enable grid mode using:

```css
display: grid;
```

You can think of `display: grid` as a switch that turns on grid mode for a container.

---

### 4. Defining Rows and Columns in Grid

#### 4.1. `grid-template-columns`

Used to define the number and size of columns.

#### 4.2. `grid-template-rows`

Used to define the number and size of rows.

**Basic example:**

```css
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 2fr 1fr;
}
```

**Explanation:**

* There are 3 columns, each 100px wide
* There are 2 rows: the first row takes 2 fractions, the second takes 1 fraction

---

### 5. The `fr` Unit

#### 5.1. What Is `fr`?

`fr` (fraction) represents a portion of the remaining available space in a grid.

#### 5.2. Advantages of `fr`

* Enables flexible space distribution
* Ideal for responsive design
* Can be combined with `px`, `%`, and `auto`

**Example:**

```css
grid-template-rows: 2fr 1fr;
```

→ The first row takes twice as much space as the second row.

---

### 6. The `repeat()` Function

#### 6.1. Purpose

The `repeat()` function helps:

* Reduce code repetition
* Write cleaner and more readable CSS

#### 6.2. Syntax

```css
repeat(count, size)
```

#### 6.3. Example

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 2fr 1fr;
}
```

**Explanation:**

* `3` → number of columns
* `100px` → width of each column

---

### 7. The `minmax()` Function

#### 7.1. Purpose

`minmax()` allows you to define:

* A minimum size
* A maximum size

→ This makes layouts more flexible when content changes.

#### 7.2. Syntax

```css
minmax(min, max)
```

#### 7.3. Example

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-auto-rows: minmax(150px, auto);
}
```

**Explanation:**

* Each row is at least 150px tall
* Rows can grow taller if content requires it

---

### 8. Additional Learning Resources

To dive deeper into CSS Grid, consider exploring:

* Grid Cheat Sheets and Flexbox Cheat Sheets
* Grid Template Areas
* Grid Auto Flow
* Grid Alignment (`justify`, `align`)

These topics are commonly covered in advanced HTML & CSS courses.

---

### 9. Conclusion

CSS Grid is a powerful tool for building modern web layouts.

Once you understand:

* `display: grid`
* `grid-template-columns`
* `grid-template-rows`
* `fr`, `repeat()`, `minmax()`

→ You will have a solid foundation to move on to **CSS Grid setup** and **hands-on practice exercises**.

---

## CSS Layout Setup

### 1. Overview

In this lesson, the goal is to build the web interface layout based on the wireframe designed for the **Little Lemon table reservation** feature.

The layout will be created using HTML and CSS, with a focus on building **reusable components** that can be used throughout the web application and in React.

The CSS written in this lesson will serve as a foundation for applying styles to many other parts of the application later on.

---

### 2. What Is Responsive Design?

#### 2.1. Concept of Responsive Design

Responsive Design ensures that:

* The web application displays well on multiple devices
* The interface adapts to different screen sizes
* A consistent user experience is maintained

#### 2.2. Types of Devices to Support

* Mobile phones (small screens)
* Tablets
* Desktop computers (large screens)

---

### 3. Layout Tools in CSS

#### 3.1. Flexbox

* A one-dimensional layout model (row or column)
* Suitable for:

  * Navigation bars
  * Button lists
  * Aligning content horizontally or vertically
* Easy to use and flexible

#### 3.2. CSS Grid

* A two-dimensional layout model (rows and columns)
* Suitable for:

  * Overall page layout
  * Complex layouts
  * Advanced responsive design

#### 3.3. When to Use Flexbox or Grid

* **Flexbox** → simple, linear layouts
* **CSS Grid** → overall layouts with multiple content areas

---

### 4. Little Lemon Application Scenario

Visitors to the Little Lemon website may use a wide range of devices.

Therefore, the requirements are:

* The website must be responsive
* The layout must automatically adapt to screen size
* Content must be displayed clearly and in the correct positions

To achieve this, responsive column layouts should be implemented using **CSS Grid or Flexbox**.

---

### 5. Exercise Instructions

#### Step 1: Set Up CSS Rules

* Base your decisions on the designed wireframe
* Decide whether to use CSS Grid or Flexbox
* Open the project and add the required CSS rules to the CSS file

**Tip:**
If unsure whether to use Grid or Flexbox, refer to:

* Grid & Flexbox Cheat Sheets
* Previous CSS Layout lessons

---

#### Step 2: Apply CSS to HTML Elements

* Open the `index.html` file
* Assign CSS classes to the appropriate HTML elements
* Open the component files created earlier
* Apply CSS rules to each UI component

The goal is to ensure:

* The layout matches the wireframe
* Components are reusable

---

#### Step 3: Test the Layout Display

##### 3.1. Run the Application

```bash
npm start
```

##### 3.2. Open the Browser

Navigate to:

```
http://localhost:3000
```

##### 3.3. Test Responsiveness

* Observe element positioning on the screen
* Use the browser’s Developer Tools
* Switch between mobile, tablet, and desktop views
* Ensure components display correctly at all screen sizes

---

### 6. Topics to Review

To complete the exercise effectively, review the following:

* CSS Website Layout
* CSS Units (`px`, `%`, `fr`, `rem`, etc.)
* Basic Flexbox
* CSS Grid
* Grid & Flexbox Cheat Sheets
* Adding Components in React

---

## Adding Components in React

### 1. Overview

As part of building the project foundation, the next step is adding components.

This lesson focuses on reviewing **basic React concepts**, especially **components**, which are the core of React and the central focus of the **Little Lemon – Reserve a Table** application.

---

### 2. Overview of Concepts from the React Basics Course

The React Basics course covers several important concepts, including:

#### 2.1. React Components

* React components are independent UI building blocks
* Each component is responsible for a specific function or UI section
* Components are usually placed in their own folders within the project

#### 2.2. Using and Styling Components

* Components can be reused multiple times
* CSS or other styling techniques are applied directly to components

#### 2.3. Data, State, and Events

* **Data**: information passed between components
* **State**: data that can change over time
* **Events**: actions (click, submit, etc.) that affect how components render

---

### 3. Additional React Topics

In addition to components, the React Basics course also covers:

* Navigation
* UI updates
* Assets and how to use assets in React
* Creating the first React application

However, in this lesson, **components** are the primary focus.

---

### 4. Why Are Components Important?

Components are:

* An effective approach to designing and building web interfaces
* A tool for breaking UI into manageable parts
* A shared language for discussing and organizing UI

Not only React, but many modern web technologies revolve around the component concept.

---

### 5. History of Components in React

#### 5.1. Pre-Hooks Era

In older versions of React:

* Components were primarily written using JavaScript classes
* There were two main types:

  * **Stateful components**: components with state
  * **Stateless components**: components without state
* Function components existed but could not use state

#### 5.2. The Introduction of Hooks

Hooks are functions that allow:

* Using state inside function components
* Accessing lifecycle-related features

The introduction of Hooks:

* Enabled modern component development
* Reduced reliance on class-based components

---

### 6. Modern React and Functional Components

#### 6.1. Current Trend

* Components are now primarily built as functions
* Class-based components still exist but are rarely used
* In modern React, the term “component” usually implies a functional component

#### 6.2. Writing Functional Components

There are two common approaches:

**ES5 – Function Declaration**

```jsx
function Header() {
  return <h1>Little Lemon</h1>;
}
```

**ES6 – Arrow Function (more common)**

```jsx
const Header = () => {
  return <h1>Little Lemon</h1>;
};
```

Both approaches are valid, with arrow functions considered more modern.

---

### 7. Relationship Between Components, Data, State, and Events

This relationship can be visualized as:

* **Component** → the “vehicle”
* **Data and State** → the “content being transported”
* **Events** → determine when and how components update

Although components are often associated with state and events, this lesson focuses on **setting up components**, not on business logic.

---

### 9. Conclusion

Components are the core of React and the foundation of the entire application.

Understanding:

* What a component is
* How modern React builds components
* Why functional components are preferred

will make React application development clearer, more scalable, and easier to maintain.
