**JAVASCRIPT**

**16. DOM (Document Object Model)**

**16.1. Overview**

| Name  | Description                                                             |
| ----- | ----------------------------------------------------------------------- |
| DOM   | (Document Object Model) Represents the structure of HTML/XML documents. |
| BOM   | (Browser Object Model) Represents objects provided by the browser.      |
| CSSOM | (CSS Object Model) Represents CSS rules and stylesheets.                |

DOM is not only for browsers — it can also be manipulated in Node.js or other environments.
Useful properties:

```js
navigator.userAgent; // Browser info  
navigator.platform;  // Operating system info  
```

**16.2. Things to know when working with DOM**

| Content            | Short Description                              |
| ------------------ | ---------------------------------------------- |
| DOM Overview       | What is DOM and what is it used for?           |
| DOM Structure      | Node, Element, Attribute,...                   |
| DOM Query          | Using getElementById, querySelector,...        |
| DOM Traversal      | Traverse through parent/child/sibling elements |
| DOM Manipulation   | Add, modify, delete HTML elements              |
| DOM Event Handling | Listen to events like click, keyup,...         |
| Advanced           | Virtual DOM, Shadow DOM                        |

**4 steps when working with DOM:**

| Step                   | Description                                                 |
| ---------------------- | ----------------------------------------------------------- |
| 1. Query element       | Find the element to manipulate (getElementById, ...)        |
| 2. Check element exist | Check if the element exists                                 |
| 3. Manipulate element  | Modify (content, class, style, ...)                         |
| 4. Attach event        | Add event listener (remember to detach if no longer needed) |

```js
// 1. Query element
const title = document.getElementById('pageTitle');

// 2. Check element exist
if (title) {
  // 3. Manipulate element
  title.textContent = 'Easy Frontend';

  // 4. Attach event
  title.addEventListener('click', () => {
    title.style.color = 'red';
  });
}
```

**16.3. DOM Tree**

**16.3.1. Node Data Type**
In DOM, HTML elements are represented by specific objects and classes:

| Class Name        | Description                                               |
| ----------------- | --------------------------------------------------------- |
| EventTarget       | Abstract class of all DOM nodes that can listen to events |
| Node              | Abstract base class for all nodes in DOM                  |
| Element           | Base class for specific DOM elements                      |
| HTMLElement       | Base class for HTML elements (<div>, <p>,...)             |
| HTMLInputElement  | Represents <input> tag                                    |
| HTMLBodyElement   | Represents <body> tag                                     |
| HTMLAnchorElement | Represents <a> tag                                        |

**16.3.2. EventTarget Interface**
`EventTarget` interface allows listening and removing events:

| Method                        | Description                        |
| ----------------------------- | ---------------------------------- |
| addEventListener(type, fn)    | Register an event handler for type |
| removeEventListener(type, fn) | Remove previously registered event |

**16.3.3. Node Interface**
**Common properties**

| Property        | Description                                  |
| --------------- | -------------------------------------------- |
| childNodes      | List of child nodes (including text/comment) |
| firstChild      | First child node or null                     |
| lastChild       | Last child node or null                      |
| previousSibling | Previous sibling node                        |
| nextSibling     | Next sibling node                            |
| nodeName        | Node name (e.g., DIV, #text, BODY,...)       |
| nodeType        | Node type (integer)                          |
| nodeValue       | Node value                                   |
| parentNode      | Parent node                                  |
| parentElement   | Parent element (if exists)                   |
| textContent     | All text within node and descendants         |

**Common methods**

| Method                               | Description                                 |
| ------------------------------------ | ------------------------------------------- |
| insertBefore(newNode, referenceNode) | Insert new node before reference node       |
| appendChild(childNode)               | Add child node to current node              |
| cloneNode(deep)                      | Clone node. deep=true clones entire subtree |
| contains(otherNode)                  | Check if current node contains other node   |
| hasChildNodes()                      | Check if node has children                  |
| removeChild(childNode)               | Remove a child node                         |
| replaceChild(newChild, oldChild)     | Replace old child with new one              |

**nodeType Values**

| Constant Name                      | Value | Description                           |
| ---------------------------------- | ----- | ------------------------------------- |
| Node.ELEMENT\_NODE                 | 1     | Node is an HTML element               |
| Node.ATTRIBUTE\_NODE               | 2     | Node is an attribute                  |
| Node.TEXT\_NODE                    | 3     | Node is a text                        |
| Node.CDATA\_SECTION\_NODE          | 4     | CDATA node                            |
| Node.PROCESSING\_INSTRUCTION\_NODE | 7     | Processing instruction (XML)          |
| Node.COMMENT\_NODE                 | 8     | Node is a comment (<!-- -->)          |
| Node.DOCUMENT\_NODE                | 9     | Node is document                      |
| Node.DOCUMENT\_TYPE\_NODE          | 10    | <!DOCTYPE html> node                  |
| Node.DOCUMENT\_FRAGMENT\_NODE      | 11    | Document fragment not attached to DOM |

**16.4. Document, Element and HTMLElement Interface**

**16.4.1. Document Interface**

**Common properties**

| Property                 | Description                       |
| ------------------------ | --------------------------------- |
| document.documentElement | Returns <html> tag                |
| document.body            | Returns <body> tag                |
| document.head            | Returns <head> tag                |
| document.cookie          | Read/write cookie in HTMLDocument |
| document.title           | Title of current page             |

**Query elements**

| Method                       | Description                       |
| ---------------------------- | --------------------------------- |
| getElementById(id)           | Return element with specified id  |
| getElementsByClassName(name) | Return live NodeList by class     |
| getElementsByTagName(name)   | Return live NodeList by tag       |
| querySelector(selector)      | Return first matching element     |
| querySelectorAll(selector)   | Return static NodeList of matches |

**Create elements**

| Method                 | Description                        |
| ---------------------- | ---------------------------------- |
| createAttribute(name)  | Create an attribute node (Attr)    |
| createElement(tagName) | Create HTML element with given tag |

**16.4.2. Element Interface**

**Basic properties**

| Property  | Description                    |
| --------- | ------------------------------ |
| className | Current class string           |
| classList | Class list as object           |
| innerHTML | HTML content inside element    |
| outerHTML | HTML including current element |
| id        | Element ID                     |

**Element dimensions**

| Property     | Description                       |
| ------------ | --------------------------------- |
| clientHeight | Content height (no border/scroll) |
| clientWidth  | Content width                     |
| clientTop    | Top border thickness              |
| clientLeft   | Left border thickness             |

**Scroll**

| Property     | Description                |
| ------------ | -------------------------- |
| scrollHeight | Total scrollable height    |
| scrollWidth  | Total scrollable width     |
| scrollTop    | Vertical pixels scrolled   |
| scrollLeft   | Horizontal pixels scrolled |

**Traversal**

| Property               | Description                       |
| ---------------------- | --------------------------------- |
| children               | HTMLCollection of direct children |
| firstElementChild      | First child element               |
| lastElementChild       | Last child element                |
| previousElementSibling | Previous sibling element          |
| nextElementSibling     | Next sibling element              |

**Add / Remove / Replace**

| Method                | Description                              |
| --------------------- | ---------------------------------------- |
| before(...nodes)      | Insert nodes before current element      |
| after(...nodes)       | Insert nodes after current element       |
| prepend(...nodes)     | Add nodes to start of current element    |
| append(...nodes)      | Add nodes to end of current element      |
| remove()              | Remove current element from DOM          |
| replaceWith(...nodes) | Replace current element with other nodes |

**Attributes**

| Method                  | Description                           |
| ----------------------- | ------------------------------------- |
| getAttribute(name)      | Get value of attribute                |
| setAttribute(name, val) | Set attribute value                   |
| removeAttribute(name)   | Remove attribute                      |
| hasAttribute(name)      | Check if attribute exists             |
| toggleAttribute(name)   | Toggle attribute presence             |
| attributes              | Return all attributes as NamedNodeMap |

**Query child elements**

| Method                       | Description                 |
| ---------------------------- | --------------------------- |
| getElementsByClassName(name) | Return elements by class    |
| getElementsByTagName(name)   | Return elements by tag name |
| querySelector(selector)      | Return first matching child |
| querySelectorAll(selector)   | Return matching children    |

**Other**

| Method                           | Description                                   |
| -------------------------------- | --------------------------------------------- |
| getBoundingClientRect()          | Return size & position as DOMRect             |
| scroll(), scrollTo(), scrollBy() | Scroll element to absolute or relative coords |

**16.4.3. HTMLElement Interface**

**Special properties**

| Property  | Description                                 |
| --------- | ------------------------------------------- |
| dataset   | Read/write data-\* attributes               |
| hidden    | Hide/show element (boolean)                 |
| innerText | Displayed text (different from textContent) |
| style     | Access inline style                         |
| title     | Tooltip on hover                            |
| tabIndex  | Tab focus order                             |

**Methods**

| Method  | Description               |
| ------- | ------------------------- |
| blur()  | Remove focus from element |
| focus() | Focus the element         |
| click() | Simulate click on element |

**16.5. FIND ELEMENTS IN DOM**

**16.5.1. Find ONE element**

| Usage                            | Description                      | Notes                                 |
| -------------------------------- | -------------------------------- | ------------------------------------- |
| document.getElementById(id)      | Find element by id               | Only on document, returns one or null |
| document.querySelector(selector) | Find first matching CSS selector | Works on document & element           |

Example:

```html
<!-- HTML -->
<h1 id="title">Easy Frontend</h1>
```

```js
// JS
const title = document.getElementById('title');
const title2 = document.querySelector('#title');
```

Note:

* `getElementById` → faster, document only
* `querySelector` → more flexible, works on any element

**16.5.2. Find MULTIPLE elements**

| Usage                  | Find by        | Live? | On element? |
| ---------------------- | -------------- | ----- | ----------- |
| querySelectorAll       | CSS selector   | ❌ No  | ✅ Yes       |
| getElementsByClassName | class name     | ✅ Yes | ✅ Yes       |
| getElementsByTagName   | tag name or \* | ✅ Yes | ✅ Yes       |
| getElementsByName      | name attr      | ✅ Yes | ❌ No        |

Example:

```html
<!-- HTML -->
<ul id="todoList">
  <li>Learn JS</li>
  <li>Learn React</li>
</ul>
```

```js
// JS
const list = document.getElementById('todoList');
const items = list.querySelectorAll('li');
for (const item of items) {
  console.log(item.textContent);
}
```

**16.5.3. QUICK TIPS**

* Larger DOM → slower search
* Always narrow search scope:

```js
const container = document.getElementById('product');
const price = container.querySelector('.price');
```

→ Find parent first, then child.

### 16.6. Traversing the DOM

#### 16.6.1. Basic Concepts

* **Node**: everything in the DOM (element, text, comment, etc.)
* **Element**: HTML tags like `<div>`, `<p>`, `<section>`, etc.
* **Children**: direct child elements
* **Descendants**: all nested child elements (including multiple levels)

Basic DOM tree:

```js
document               // root node
document.documentElement // <html>
document.head             // <head>
document.body             // <body>
```

#### 16.6.2. Node vs Element Comparison

| Property         | Node              | Element                  |
| ---------------- | ----------------- | ------------------------ |
| Parent           | `parentNode`      | `parentElement`          |
| Children         | `childNodes`      | `children`               |
| First child      | `firstChild`      | `firstElementChild`      |
| Last child       | `lastChild`       | `lastElementChild`       |
| Previous sibling | `previousSibling` | `previousElementSibling` |
| Next sibling     | `nextSibling`     | `nextElementSibling`     |

**Reminder**:

* Node includes everything (text, comment, element...).
* Element only refers to HTML tags.


#### 16.6.3. Traverse All Nodes (including text, comment, and elements)

**HTML:**

```html
<body>
  <!-- Page Title -->
  <h1>Easy Frontend</h1>
  <p>Learning DOM is so easy! :P</p>
  <script src="index.js"></script>
</body>
```

**JavaScript:**

```js
console.log(document.body.childNodes);
// [text, comment, text, h1, text, p, text, script, text]
console.log(document.body.firstChild); // text
console.log(document.body.lastChild);  // text
```


#### 16.6.4. Traverse Only Elements (ignore text/comments)

```js
console.log(document.body.children);
// [h1, p, script]
console.log(document.body.firstElementChild); // h1
console.log(document.body.lastElementChild);  // script
```


#### 16.6.5. Difference Between `parentNode` and `parentElement`

| Property        | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `parentNode`    | Always returns the parent node (element or document)                  |
| `parentElement` | Returns the parent only if it is an element, otherwise returns `null` |

```js
document.documentElement.parentNode;    // document
document.documentElement.parentElement; // null
```

**Remember:**

* Use `Element.*` when you're only interested in HTML tags.
* Text nodes are usually whitespace or line breaks between tags.
* The larger the DOM, the slower the traversal — narrow the scope when possible.


### 16.7. Creating Elements in JavaScript

**Initial HTML:**

```html
<div id="app"></div>
```

**Steps to create and add a new element to the DOM:**

```js
const app = document.getElementById('app'); // Get parent element

if (app) {
  // 1. Create new element
  const h1 = document.createElement('h1');

  // 2. Set content or attributes
  h1.textContent = 'Easy Frontend';

  // 3. Append to DOM tree
  app.appendChild(h1);
}
```

**Explanation:**

* `document.createElement('tag')`: creates a new HTML tag (e.g. `<h1>`).
* `element.textContent = '...'`: sets plain text content.
* `parent.appendChild(child)`: inserts child into the parent element.


### 16.8. Compare `textContent`, `innerText`, and `innerHTML`

| Property      | Extracted Content                    | Style-aware? | XSS Risk |
| ------------- | ------------------------------------ | ------------ | -------- |
| `textContent` | All text, including hidden           | No           | No       |
| `innerText`   | Text visible to the user             | Yes          | No       |
| `innerHTML`   | Raw HTML, including tags and scripts | No           | Yes      |

**Dangerous example with `innerHTML`:**

```js
const dangerousText = "<img src='abc' onerror='alert(\"you are hacked!\")' />";
target.innerHTML = dangerousText; // May cause XSS vulnerability
```

**Remember:**

* Use `textContent` for safe plain text manipulation, not style-sensitive.
* Use `innerText` for what the user sees (respects CSS).
* Use `innerHTML` for HTML manipulation — **but be cautious of XSS risks**.


### 16.9. Update Element

#### 16.9.1. `Element.attributes` (Element Attributes)

| Attribute            | Description           |
| -------------------- | --------------------- |
| `Element.id`         | ID of the element     |
| `Element.className`  | Class string          |
| `HTMLElement.hidden` | Hide/show the element |
| `HTMLElement.title`  | Tooltip text on hover |

**Attributes specific to tags:**

* `<a>`: `href`, `rel`, `target`
* `<img>`: `src`, `alt`

**Working with attributes:**

* `getAttribute(name)` – get value
* `hasAttribute(name)` – check existence
* `setAttribute(name, value)` – set value
* `removeAttribute(name)` – remove
* `toggleAttribute(name)` – toggle
* `attributes` – returns all attributes (live collection)


#### 16.9.2. `HTMLElement.dataset` (Custom Data Attributes)

* Allows reading/writing custom `data-*` attributes.
* Use **kebab-case** in HTML (e.g. `data-learning-javascript`)
* Use **camelCase** in JavaScript (e.g. `dataset.learningJavascript`)

```js
const nav = document.getElementById('topnav');
console.log(nav.dataset.test); // 'easy'
nav.dataset.learningJavascript = true; // auto-converts to string "true"
```


### 16.9.3. `Element.classList` (Managing element classes)

| Method                        | Description                                |
| ----------------------------- | ------------------------------------------ |
| `classList`                   | Returns a list of classes (`DOMTokenList`) |
| `classList.add(class1...)`    | Adds one or more classes                   |
| `classList.remove(class1...)` | Removes one or more classes                |
| `classList.contains(class)`   | Checks if the class exists                 |
| `classList.toggle(class)`     | Toggles the class                          |

Example:

```js
const btn = document.querySelector('.btn');
btn.classList.add('active');        // Add class
btn.classList.remove('disabled');   // Remove class
btn.classList.toggle('visible');    // Toggle class
```

**Note:**

* `className` returns the whole class string.
* `classList` provides an object to manage classes more easily and safely.


### 16.9.4. `Element.style` (Access inline styles)

| Property        | Description                         |
| --------------- | ----------------------------------- |
| `element.style` | Access and modify inline CSS styles |

Example:

```js
const box = document.querySelector('.box');
box.style.color = 'red';           // Change text color
box.style.backgroundColor = 'blue'; // Change background
```

**Note:**

* Property names follow camelCase (`backgroundColor`, not `background-color`).
* To read computed styles (including external CSS), use `window.getComputedStyle(element)`.