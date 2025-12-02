# Functional Components, JSX, and Transpiling in React

## 1. React Components and Functions in JavaScript

### 1.1 Concept

* In JavaScript, a **function** is a reusable block of code that can take input, perform a process or calculation, and return output.
* A **React component** works similarly to a JavaScript function:

  * Receives data (**props**)
  * Executes logic
  * Returns the **UI (user interface)**

### 1.2 Types of Components in React

* **Functional components**: work like JavaScript functions.
* **Class components**: similar to classes in JavaScript (to be learned later).
* Every React application must have at least **one component**, called the **root component**, usually `App` in `index.js`.

---

## 2. Creating a Functional Component

### 2.1 Basic Structure

* A functional component is a **JavaScript function** that returns **JSX**.
* Example of a component displaying a heading:

```jsx
// Heading.js
function Heading() {
  const title = "This is some heading text";
  return <h1>{title}</h1>;
}

export default Heading;
```

### 2.2 Notes

* Component names **must start with an uppercase letter** (e.g., `Heading`) so React can distinguish them from normal HTML elements.
* A component **does not run** until it is rendered as JSX inside another component.

### 2.3 Rendering a Component

* Use **self-closing tag syntax** in JSX:

```jsx
// App.js
import Heading from './Heading';

function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}

export default App;
```

* The `Heading` component is inserted into the DOM like an HTML element but retains its own JavaScript logic.

---

## 3. JSX (JavaScript XML)

### 3.1 Concept

* **JSX** is a syntax extension of JavaScript that looks like HTML but can embed JavaScript inside.
* Allows creation of **dynamic UI** by combining HTML + JavaScript.

### 3.2 Using JSX

* Place JSX inside the **return statement** of a functional component.
* To display a JavaScript variable, use **curly brackets `{}`**:

```jsx
const title = "Hello World";
return <h1>{title}</h1>; // Displays "Hello World"
```

* If you do not use `{}`, React treats it as the static string `"title"`.

---

## 4. Rendering and Transpiling

### 4.1 Rendering

* React converts JSX into **DOM fragments** and attaches them to the HTML `<div id="root">`.
* A component only renders when used as a JSX element.

### 4.2 Transpiling

* JSX is **not real HTML**; it must be **transpiled** into standard HTML/JavaScript.
* Tools like **Babel** handle this.
* Transpiling ensures:

  * UI is rendered correctly as HTML
  * JavaScript logic is preserved
  * Allows dynamic and interactive UI

---

## 5. Summary

* Functional components are like reusable JavaScript functions.
* JSX is HTML + JavaScript, enabling dynamic UI creation.
* Components render when called, and JSX is transpiled to HTML for the browser.
* Component names must start with an uppercase letter to distinguish them from HTML elements.

---

# Creating Functional Components in React

## 1. Initialize a React App

1. Open VS Code, create a project folder, and open the integrated terminal.
2. Run:

```bash
npm init react-app .
```

* The `.` means create the app in the current folder.
* This may take a few minutes.

3. After building, run the app:

```bash
npm start
```

* The app runs at `localhost:3000`.
* Basic folders and files appear: `node_modules`, `public`, `src`, `package.json`, etc.

> Note: Initially, we will only work in the `src` folder.

---

## 2. Create a Simple Component

1. Open `App.js`.
2. Delete all code inside `function App` to create an empty component:

```jsx
function App() {
  return null;
}

export default App;
```

* Save the file; the page will display blank because nothing is rendered.

---

## 3. Create a Header Component

1. In the same `App.js`, create a function `Header`:

```jsx
function Header() {
  return <h1>Hello World</h1>;
}
```

* This is JSX—it looks like HTML but is JavaScript.
* `Header` is not displayed yet because it is not rendered from `App`.

2. Render `Header` inside `App`:

```jsx
function App() {
  return <Header />;
}

export default App;
```

* The `<Header />` syntax is like a self-closing HTML tag.
* Save the file → the webpage displays "Hello World".

---

## 4. Separate Components for Reusability

* Currently, `Header` is inside `App.js`.
* For reusability, move `Header` to its **own file**:

```jsx
// Header.js
function Header() {
  return <h1>Hello World</h1>;
}

export default Header;
```

* Then import it in `App.js`:

```jsx
import Header from './Header';

function App() {
  return <Header />;
}

export default App;
```

* Now `Header` can be used multiple times in the app without rewriting code.

---

## 5. Key Concepts Learned

* Functional components are **JavaScript functions** that return JSX.
* Components render when called in JSX of another component.
* JSX combines HTML + JavaScript for dynamic UI.
* Use `export default` to export a component so it can be imported and reused.

---

# Folder and File Structure in a React Project

## 1. Overview

When creating a React app using `npx create-react-app` (or `npm init react-app`), the project has a default folder structure:

* `node_modules/`
* `public/`
* `src/`
* Root files: `.gitignore`, `package.json`, `package-lock.json`, `README.md`

Each folder/file has a role for app functionality, source code management, and resource organization.

---

## 2. Main Folders of a React Project

### 2.1 node_modules/

**Role:**

* Contains all modules and packages required by the project.
* Automatically created when installing packages via npm.
* Contains thousands of files—**do not edit manually**.

**Notes:**

* No need to understand deeply at first.
* Never delete manually unless you plan to run `npm install` again.

---

### 2.2 public/

**Role:**

* Contains assets shown directly to users.

**Important files:**

* `index.html` → most important, React injects the entire app into `<div id="root">`.
* `favicon.ico` → icon in browser tab.
* `logo` → default logo image when app runs.
* `robots.txt` → instructions for web crawlers/SEO.
* `manifest.json` → metadata when the app is installed as a web app.

**Notes:**

* Rarely need to edit except `index.html` or adding static assets.

---

### 2.3 src/ (source)

**Role:**

* Contains all React code, including:

  * Components
  * Styles (CSS)
  * Logic
  * Test files

> You will spend 95% of your time here.

**Default files in src/**

| File               | Role                                    |
| ------------------ | --------------------------------------- |
| index.js           | Main file, renders the app into the DOM |
| App.js             | Root component of the React app         |
| App.css            | CSS for App.js                          |
| index.css          | CSS for the entire app                  |
| App.test.js        | Test file for App component             |
| setupTests.js      | Configuration for testing library       |
| reportWebVitals.js | Measures app performance                |
| logo.svg           | Default logo in the app                 |

**Notes:**

* You can delete most test files, logos, webVitals if you want a “clean” project.
* Must also remove any import statements in App.js and index.js.

---

## 3. Why React Does Not Enforce Folder Structure

* React does **not require a specific file structure**, offering flexibility for any team.
* Common organization example:

```
src/
  components/
  pages/
  hooks/
  contexts/
  assets/
  utils/
```

* Proper folder planning helps:

  * Find files easily
  * Keep code clean and reusable
  * Reduce conflicts in team projects
  * Scale the project for larger apps

---

## 4. Root Files in the Project

### 4.1 .gitignore

* Used for version control
* Specifies which folders/files should **not be pushed to Git** (e.g., node_modules)

### 4.2 README.md

* Project description
* Displayed when uploading to GitHub

### 4.3 package.json

* Contains project information
* Lists dependencies (required libraries)
* Defines scripts (e.g., `start`, `build`, `test`)

### 4.4 package-lock.json

* Records exact versions of all packages
* Ensures reinstalling dependencies runs the correct versions

---

## 5. Summary

**3 main folders:**

* `node_modules` → contains packages, do not touch
* `public` → contains `index.html` and static assets
* `src` → write all React code here

**4 root files:**

* `.gitignore`
* `package.json`
* `package-lock.json`
* `README.md`

**Key point:**

* React does not enforce file structure → you must organize folders wisely for scalability and maintainability.

---

# Modules and Components in React

## 1. Introduction to Component-Based Architecture

* Applications are divided into **self-contained components**.
* Components can be **reused** to build powerful UIs.
* To create a complete React app, you need a collection of components.
* Challenge: With many components, you need a way to locate and integrate them.

---

## 2. Modules in JavaScript

* A **module** is an independent unit of code that can be reused multiple times.
* Modules allow adding, removing, or replacing code **without affecting the program**.
* In React, each component can be placed in a separate file, using JavaScript modules.

### 2.1 Export Syntax

* `export` makes a module available to other modules.
* Every JavaScript file can be considered a module.
* Two types of export:

  1. **Default export**: Use when the function name matches the file name.
  2. **Named export**: Use when the function name differs from the file name.

### 2.2 Import Syntax

* `import` is used to bring modules from another file.
* Syntax:

```javascript
import ComponentName from './ComponentFile';
```

* `./` represents the same directory; file extension is optional.

---

## 3. Difference Between Modules and Components

| Concept   | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| Component | Small part of the UI, e.g., button, header.                          |
| Module    | A collection of components or logic, larger than a single component. |

* Purpose: **Modular programming** splits code into multiple modules, supporting component-based architecture.

---

## 4. Managing Components in React

### 4.1 Folder Organization

* Common practice: put all components in a **components** folder.
* Helps group similar files and manage them efficiently.

### 4.2 Real Example

**Payment page for an e-commerce app:**

1. `Header` → `Header.js`
2. `Payment` → `Main.js`
3. `Sidebar` → `Sidebar.js`

* Components are called and returned to the **root component** `App.js`.

---

## 5. Summary

* Components divide an app into small, independent, reusable parts.
* JavaScript modules are independent units that can be imported/exported in React.
* Difference:

  * **Component** = small UI part
  * **Module** = collection of components or logic
* Components are often placed in a **components folder** for better management.

---

# Props in React

## 1. Introduction to Functional Components

* Functional components are reusable blocks of code, working like JavaScript functions.
* Functions in JavaScript can take parameters to work with dynamic data.
* In React, **props** serve a similar purpose, passing data from one component to another.

---

## 2. Concept of Props

* **Props** is a special object in React, similar to a JavaScript object.
* Can contain various data types: string, number, array, object, function.
* Makes components flexible and **dynamic**, instead of using static data.

### 2.1 Using Props

* Pass data from **parent** to **child** via JSX attributes:

```jsx
<ChildComponent title="Hello World" />
```

* In the child component, access props:

```jsx
function ChildComponent(props) {
    return <h1>{props.title}</h1>;
}
```

* Props are accessed using **dot notation** and must be wrapped in `{}` inside JSX.

---

## 3. Component Hierarchy and Data Flow

### 3.1 Parent-Child Relationship

* **Parent** sends data.
* **Child** receives data.
* The same data can be passed to multiple child components.

### 3.2 One-Way Data Flow

* Props flow **one-way**: parent → child.
* Child **cannot send data back** to the parent via props.
* Other methods (e.g., callbacks) are used for child → parent communication.

---

## 4. Advantages and Limitations of Props

### 4.1 Advantages

* Increases flexibility and reusability.
* Enables **dynamic UI** instead of static content.
* Makes data passing between components simple.

### 4.2 Limitations

* Cannot pass data from child → parent directly.
* Components using props should be **pure functions**, without modifying props.

---

## 5. Example

### 5.1 Parent Component (App.js)

```jsx
function App() {
    return <Header title="Welcome to React!" />;
}
```

### 5.2 Child Component (Header.js)

```jsx
function Header(props) {
    return <h1>{props.title}</h1>;
}
```

* Result: Displays heading **“Welcome to React!”**
* Multiple props can be passed: subtitle, color, onClick function, etc.

---

## 6. Summary

* Props are special objects that pass data **parent → child**.
* Similar to a JavaScript object, can hold multiple data types.
* Props make components flexible, dynamic, and reusable.
* Limitation: data flows one-way, and props should not be modified inside the component.

---

# Props and JSX Analysis in React

## 1. Introduction to JSX

* JSX is **syntactic sugar**: easier-to-read syntax for JavaScript.
* Browsers do not understand JSX directly; it must be **transpiled** to pure JavaScript.
* Tool reference: Babeljs.io.

---

## 2. React.createElement

* After transpiling, JSX becomes `React.createElement`:

```javascript
React.createElement(
  type,     // HTML tag or component
  props,    // object containing props
  children  // content inside the element
)
```

* Example:

```jsx
function App() {
  return <h1>Hello there</h1>;
}
```

Transpiles to:

```javascript
function App() {
  return React.createElement("h1", null, "Hello there");
}
```

### 2.1 Parameters of createElement

1. **type**: HTML tag or component to render ("h1", "div", etc.)
2. **props**: object containing data from parent → child. If none, use `null` or `{}`
3. **children**: content inside the element; can be text or nested elements

---

## 3. Nested Elements

* JSX with nested tags transpiles to **nested React.createElement**:

```jsx
function App() { 
  return (
    <div>
      <h1>Hello there</h1>
    </div>
  )
}
```

Transpiles to:

```javascript
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello there")
  );
}
```

* Principle: the third parameter of `createElement` can be another `createElement`, allowing infinite nesting.

---

## 4. Props Object

* The second parameter (`props`) of `React.createElement` passes data **parent → child**:

```javascript
React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hello there")
);
```

* Props can contain strings, numbers, arrays, objects, or functions.

---

## 5. Children

* The third parameter (`children`) is the content inside the element/component.
* Enables nested structure similar to HTML:

```javascript
React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hello there"),
  React.createElement("p", {}, "Welcome to React!")
);
```

---

## 6. Summary

* JSX is a more readable syntax for React, transpiled to JavaScript.
* `React.createElement(type, props, children)` is the core underlying JSX.
* **Props**: object passing data parent → child.
* **Children**: content inside, can be text or nested elements.
* Understanding transpiling clarifies how props and JSX truly work.

---

# JSX in React

## 1. What is JSX?

* JSX = JavaScript + XML/HTML; allows writing HTML inside JavaScript.
* Goal: **expressiveness** – clear syntax, close to HTML, easy for React to render UI.
* Allows mixing JavaScript, HTML, and CSS in the same component.

---

## 2. JSX Syntax and Expressions

* Any JavaScript inside JSX is wrapped in **curly braces `{}`**:

```jsx
const name = "Anna";
return <h1>Hello, {name}!</h1>;
```

* Can perform calculations, call functions, or access props inside `{}`:

```jsx
<li>{2 + 3}</li>   // Displays 5
<li>{props.color}</li>
```

---

## 3. JSX Rules in return

1. If returning **multiple lines**, wrap in parentheses `()`:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

2. HTML must have **one parent element** (div, section, etc.) or a fragment:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

* Fragment: empty tag, does not create extra div in DOM.

---

## 4. CSS in JSX

* Use `className` instead of `class` (JS reserved word):

```jsx
<div className="header main-header">
  Welcome
</div>
```

* Multiple classes can be applied like normal HTML.

---

## 5. Dynamic Components with JSX

* JSX combines props and variables to create dynamic UI:

```jsx
function Nav(props) {
  return (
    <nav>
      <ul>
        {props.items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </nav>
  );
}
```

* HTML, CSS, and JavaScript can coexist in one component.

---

## 6. Benefits

* Syntax is intuitive and close to HTML, easy to learn.
* Mixing JS and HTML makes components flexible and dynamic.
* Easy to style, pass props, and render complex UI.

---

# Understanding `props.children` in React

## 1. What is `props.children`?

* Every React component automatically receives a special prop called **children**.
* It contains all JSX content or elements placed between the **opening and closing tags** of that component.
* Think of it as a **bag**: it doesn’t matter if you put apples or pears inside—the component can handle it.

---

## 2. Example

**Bag component:**

```jsx
function Bag(props) {
    const bagStyle = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    };

    return (
        <div style={bagStyle}>
            {props.children}  {/* Contents inside the component will render here */}
        </div>
    );
}
```

**Using Bag with Apples or Pears:**

```jsx
<Bag>
    <Apples color="yellow" number="5" />
</Bag>

<Bag>
    <Pears friend="Peter" />
</Bag>
```

* Here, `Apples` and `Pears` become **children** of `Bag`.

---

## 3. Equivalent Syntax

```jsx
<Bag children={<Apples color="yellow" number="5" />} />
<Bag children={<Pears friend="Peter" />} />
```

* Less common, but functionally equivalent to placing content between opening and closing tags.

---

## 4. Flexibility

* `props.children` can contain **multiple JSX elements**:

```jsx
<Trunk>
    <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
    </Bag>
</Trunk>
```

* `Bag` contains **two children**: Apples and Pears.
* `Trunk` contains a single child: Bag.

---

## 5. Modularization Principles

* Avoid creating too many tiny components (one HTML tag per component).
* Avoid placing everything in a single component.
* Optimal: divide the layout into meaningful sections and use `props.children` to wrap internal elements.

---

## 6. Summary

* `props.children` = all JSX elements between a component’s opening and closing tags.
* Enables **flexibility, reusability, and modularity**.
* Allows for clean and manageable layouts.

---

# Styling JSX Elements in React

JSX in React allows combining JavaScript, HTML, and CSS to style elements. There are multiple approaches:

## 1. Traditional CSS (External CSS)

* Add a `<link>` in `index.html` to link a CSS file.
* Use `className` in JSX (instead of `class` in HTML).

Example:

```jsx
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```

CSS:

```css
.promo-section {
    font-weight: bold;
    line-height: 20px;
}
```

---

## 2. Inline Styles

* CSS written directly inside JSX using curly braces `{}`.
* CSS properties use **camelCase** and values must be strings.

Example:

```jsx
function Promo(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{ color: "tomato", fontSize: "40px", fontWeight: "bold" }}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```

* CSS: `font-size` → `fontSize`, `background-color` → `backgroundColor`.

---

## 3. Using JavaScript Variables for Styles

* Store styles in a variable for reuse:

```jsx
function Promo(props) {
    const styles = {
        color: "tomato",
        fontSize: "40px"
    };

    return (
        <div className="promo-section">
            <div>
                <h1 style={styles}>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}
```

* Helps keep the component self-contained and reusable.
* Maintenance can be harder if styles are complex.

---

## 4. Summary of Styling Approaches

| Styling Method      | Advantages                      | Disadvantages                     |
| ------------------- | ------------------------------- | --------------------------------- |
| External CSS        | Easy to manage, separate styles | Need to manage separate CSS file  |
| Inline Styles       | Embedded, self-contained        | Hard to maintain if complex       |
| JavaScript Variable | Reusable, easy to modify        | More complex with many properties |

---

## 5. Practical Example with Sidebar Component

**CSS in `index.css`:**

```css
.aside {
  background-color: #f2f2f2;
  padding: 20px;
  margin: 10px;
}
```

**JS Object in `Sidebar.js`:**

```jsx
const asideStyle = {
  backgroundColor: "#f2f2f2",
  padding: "20px",
  margin: "10px"
};

function Sidebar() {
  return (
    <aside style={asideStyle}>
      <h2>Inline Sidebar</h2>
      <p>Sidebar content.</p>
    </aside>
  );
}
```

* Styles now live **inside the component** and are applied the same way.

---

## 6. Benefits of Inline CSS

* Styles are **component-specific**, can change dynamically with props or state.
* Must use JavaScript objects; properties are camelCase and values are strings.
* Suitable for **small, independent, or dynamic styles**.
* Not suitable for complex styles requiring pseudo-classes or media queries.

---

# JSX and Arrow Functions in React

## 1. Function Declaration

```jsx
function Nav(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    );
}
```

* `Nav` is a React component.
* Receives `props` to render data.
* Returns JSX.

---

## 2. Function Expression

```jsx
const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    );
}
```

* Anonymous function assigned to a variable.
* Works the same as function declaration.

---

## 3. Arrow Function

```jsx
const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    );
}
```

* Shorter syntax.
* If only one parameter, parentheses can be omitted:

```jsx
const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    );
}
```

* If no parameters:

```jsx
const Nav = () => {
    return (
        <ul>
            <li>Home</li>
        </ul>
    );
}
```

---

## 4. Implicit Return

* If JSX has **one line**, `{}` and `return` can be omitted:

```jsx
const Nav = () => <ul><li>Home</li></ul>;
```

* Makes code concise and readable.

---

## 5. Arrow Functions in Other Situations

* Example with arrays:

```jsx
[10, 20, 30].forEach(item => item * 10);
```

* Shorter than ES5:

```jsx
[10, 20, 30].forEach(function(item) {
    return item * 10;
});
```

* Useful for callbacks or inline functions in JSX.

---

## 6. Benefits of Arrow Functions in React

* Shorter, cleaner syntax.
* Supports implicit return for simple components.
* Easy to use in array methods and callbacks.
* Makes React code clean and intuitive.

---

# JSX and Embedded Expressions in React

## 1. What is JSX?

* JSX is an **extension of JavaScript syntax** used in React.
* It allows you to write **HTML inside JavaScript code**.
* When JSX runs, it produces a **React element**, which can be rendered directly in the browser.

Example:

```jsx
const result = <p>Hello World</p>;
```

* The variable `result` contains a React element.
* React will render it as HTML in the browser.

---

## 2. Embedded Expressions

* A key feature of JSX.
* Allows you to insert **the value of a JavaScript variable** or **the result of a function** into HTML.

Example with a variable:

```jsx
const name = "Alice";
const element = <p>Hello, {name}!</p>;
```

* Result: `<p>Hello, Alice!</p>`

Example with a function:

```jsx
function formatName(first, last) {
  return first + " " + last;
}

const element = <p>Hello, {formatName("Alice", "Smith")}!</p>;
```

* Result: `<p>Hello, Alice Smith!</p>`

---

## 3. Embedded Expressions in Attributes

* You can also use embedded expressions in HTML attributes, e.g., the `src` of `<img>`:

```jsx
const url = "https://example.com/profile.jpg";
const element = <img src={url} alt="Profile" />;
```

* Note: no quotes are needed around `{url}`; JSX handles it automatically.

---

## 4. Benefits of JSX with Embedded Expressions

* Combines **HTML and JavaScript** intuitively.
* Easily renders **dynamic data** from variables or functions.
* Makes React code **concise, readable, and flexible**.

---

# Ternary Operator and Function Calls in JSX

## 1. What is the Ternary Operator?

* A shorthand for `if…else` in JavaScript.
* Syntax: `condition ? valueIfTrue : valueIfFalse`

Example:

```javascript
let name = 'Bob';
let greeting = name === 'Bob' ? 'Hello, Bob' : 'Hello, Friend';
console.log(greeting);
```

* If `name` is `'Bob'`, output: `"Hello, Bob"`
* Otherwise: `"Hello, Friend"`

---

## 2. Using Ternary Operator in JSX

* Place the ternary **inside curly braces `{}`** to display dynamic values:

```jsx
function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
}
```

* `Math.random() >= 0.5` returns true or false.
* Displays `"Over 0.5"` if true, `"Under 0.5"` if false.

**Advantage:** Dynamic rendering without verbose `if…else`.

---

## 3. Calling Functions in JSX

* Any JavaScript function that returns a value can be called directly in JSX.

Example with `Math.random()`:

```jsx
function Example2() {
    return (
        <div className="heading">
            <h1>Here's a random number from 1 to 10: {Math.floor(Math.random() * 10) + 1}</h1>
        </div>
    );
}
```

* Generates a random number from 1 to 10.

Example with a separate function:

```jsx
function Example3() {
    const getRandomNum = () => Math.floor(Math.random() * 10) + 1;

    return (
        <div className="heading">
            <h1>Here's a random number from 1 to 10: {getRandomNum()}</h1>
        </div>
    );
}
```

* You can also use function expressions or declarations:

Function expression:

```javascript
const getRandomNum = function() {
    return Math.floor(Math.random() * 10) + 1;
};
```

Function declaration:

```javascript
function getRandomNum() {
    return Math.floor(Math.random() * 10) + 1;
}
```

---

## 4. Conclusion

* JSX is flexible: embed **ternary operators, expressions, or function calls** directly.
* Enables dynamic rendering and concise, readable code.
* Multiple JavaScript expressions can be combined to build smart, flexible UI.

---

# Expressions as Props in JSX

* Props in React can receive **dynamic JavaScript expressions**, not just static values:

  * Ternary operator: `condition ? value1 : value2`
  * Function calls: `myFunction()`
  * Math expressions: `1 + 2 * 3`
  * Variables, booleans, arrays, objects, etc.

### Example 1: Boolean and NOT operator

```jsx
const bool = false;

function Example(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
}

export default function App() { 
    return <Example toggleBoolean={!bool} />;
}
```

* `!bool` inverts `false` to `true`.
* `.toString()` converts boolean to string for display.

**Output:**
`The value of the toggleBoolean prop is: true`

---

### Example 2: Multiple prop types

```jsx
const bool = false;
const str1 = "just";

function Example(props) {
    return (
        <div>
            <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
}

export default function App() {
    return (
        <Example
            toggleBoolean={!bool}
            math={5 + 3 * 2}
            str={str1 + " another string"}
        />
    );
}
```

* `toggleBoolean={!bool}` → inverted boolean (true)
* `math={5 + 3 * 2}` → evaluated numeric expression (11)
* `str={str1 + " another string"}` → string concatenation (`"just another string"`)

**Output:**

```
The value of the toggleBoolean prop is: true
The value of the math prop is: 11
The value of the str prop is: just another string
```

**Note:**

* Any JavaScript expression can be used in props within `{}`.
* Enables **dynamic value passing**.
* Ternary, functions, arrays, objects all work as props.

---

# Embedding Images in React using JSX Expressions

## 1. Prepare Images

1. Place the image (e.g., `avatar.png`) in the `src` folder.
2. Import the image in the React file:

```javascript
import avatar from './avatar.png';
```

---

## 2. Create a Component to Display Image

### 2.1 Component Function

```jsx
function Logo(props) {
  const userPic = <img src={avatar} alt="Avatar" />;
  return userPic;
}
```

* `Logo` is a component receiving props.
* `userPic` is a JSX `<img>` element using the imported `avatar`.
* Component returns `userPic` for rendering.

### 2.2 Render Component in App

```jsx
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Logo />
    </div>
  );
}
```

**Result:**

* Displays "Hello World" header.
* Shows the `avatar.png` image below the header.

---

## 3. Benefits

* **Reusable component:** `Logo` can be imported and used anywhere.
* **Maintainable:** Can split into separate files as app grows.
* **JSX expression:** Embed JavaScript variables in attributes (`src`, `alt`, `className`, etc.).

---

## 4. Extensions

* Add inline styles or CSS:

```jsx
<img src={avatar} alt="Avatar" style={{ width: '100px', borderRadius: '50%' }} />
```

* Import and use multiple images in components.
* Manage assets in `src/assets` or `src/images`.

---

## Summary: Embedding Images in React

1. Import the image.
2. Create a component containing `<img src={...} />`.
3. Render the component in `App` or other parent components.