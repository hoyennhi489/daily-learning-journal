**JAVASCRIPT**

# 15. Browser and Web APIs

## 15.1. Overview of Browser

### 15.1.1. Introduction

* **What is the Internet?**

  * The Internet is a vast network connecting millions of computers worldwide.
  * It allows devices to exchange information with each other.

* **What is a Browser?**

  * A browser is a software program used to access and display web pages from the Internet.
  * Users use browsers to visit websites through hyperlinks.

* **What is the World Wide Web (WWW)?**

  * The WWW is a system of publicly accessible web pages on the Internet.
  * It consists of:

    * HTTP: HyperText Transfer Protocol
    * URI: Uniform Resource Identifier
    * HTML: HyperText Markup Language

### 15.1.2. Popular Browsers Today

Some popular browsers include:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari
* Opera

## 15.2. Components of a Browser

### 15.2.1. Browser Engine

* The browser engine is the component that connects the user interface with the rendering engine.
* It coordinates the process of displaying web content by communicating between different parts such as the rendering engine, JavaScript engine, etc.

**Common Browser Engines:**

| Engine Name | Used By Browsers          |
| ----------- | ------------------------- |
| Blink       | Chrome, Opera, Edge (new) |
| Gecko       | Firefox                   |
| WebKit      | Safari, iOS browsers      |
| Trident     | Internet Explorer (old)   |

### 15.2.2. Main Components of a Browser

| No. | Component         | Description                                                                              |
| --- | ----------------- | ---------------------------------------------------------------------------------------- |
| 1   | User Interface    | Includes address bar, Home, Back, Forward buttons, bookmarks, etc.                       |
| 2   | Browser Engine    | Receives events from UI, coordinates with memory and rendering engine to display content |
| 3   | Rendering Engine  | Displays content (HTML, CSS); supports other files like PDF, XML via plugins             |
| 4   | Networking        | Handles network requests like HTTP, WebSocket, WebRTC                                    |
| 5   | JavaScript Engine | Executes JavaScript code (V8 in Chrome, SpiderMonkey in Firefox, etc.)                   |
| 6   | UI Backend        | Draws UI elements (checkboxes, dropdowns, etc.) using OS APIs                            |
| 7   | Data Storage      | Stores local data like cookies, cache, localStorage, sessionStorage, IndexedDB           |

### 15.2.3. Rendering Engine

The rendering engine:

* Parses HTML and CSS to build the DOM Tree and CSSOM Tree.
* Combines them to form the Render Tree, then renders content to the screen.
* Manages operations like:

  * **Repaint**: Redraws elements when colors/images change.
  * **Reflow**: Recalculates layout when structure changes (e.g., new elements added).

## 15.3. Web APIs (Browser-provided Application Programming Interfaces)

* Web APIs are functions and objects provided by browsers so JavaScript can interact with the browser or system.
* They allow developers to do tasks like manipulating the DOM, storing data, network communication, drawing graphics, handling clipboard, GPS, and more.

**Popular Web APIs:**

| No. | API Name               | Short Description                            |
| --- | ---------------------- | -------------------------------------------- |
| 1   | Canvas API             | Drawing graphics, games, animations          |
| 2   | Clipboard API          | Working with clipboard (copy/paste)          |
| 3   | Console API            | Logging to browser's console                 |
| 4   | DOM API                | Manipulating HTML structure                  |
| 5   | Fetch API              | Sending asynchronous HTTP requests           |
| 6   | Geolocation API        | Getting user's current location              |
| 7   | HTML Drag and Drop API | Drag-and-drop HTML elements                  |
| 8   | History API            | Navigating URLs via JavaScript               |
| 9   | Server-Sent Events     | One-way communication server → client        |
| 10  | WebSocket API          | Two-way client ↔ server communication        |
| 11  | Service Workers API    | Offline support, caching, push notifications |
| 12  | Storage API            | Local storage: localStorage, sessionStorage  |
| 13  | URL API                | Working with URLs                            |
| 14  | XMLHttpRequest         | Old API to send HTTP requests                |

## 15.4. Browser URL

* A URL (Uniform Resource Locator) is the address of a resource on the Internet, e.g.:
  `https://ezfrontend.com/blog?page=1&limit=10#title`

* JavaScript provides the `URL` object to easily parse and manipulate URLs.

```js
const url = new URL('https://ezfrontend.com/blog?page=1&limit=10#title');
console.log(url);
```

### 15.4.1. URLSearchParams

Used to work with query string (?key=value) in a URL.

```js
const params = new URLSearchParams('?_page=1&_limit=10');

params.get('_page');         // "1"
params.get('_limit');        // "10"
params.get('_order');        // null

params.set('_page', 2);
params.toString();           // "_page=2&_limit=10"

params.append('_page', 3);
params.toString();           // "_page=2&_limit=10&_page=3"

params.has('_page');         // true
params.has('_order');        // false
```

**Methods and descriptions:**

| Method            | Description                                   |
| ----------------- | --------------------------------------------- |
| get(key)          | Get the value of a key                        |
| set(key,value)    | Set or overwrite the value of a key           |
| delete(key)       | Delete a key                                  |
| append(key,value) | Add a new value for a key (allows duplicates) |
| has(key)          | Check if a key exists                         |
| toString()        | Convert to query string                       |

### 15.4.2. Location API

The `window.location` object allows getting or changing the current page URL.

| Purpose                   | Usage                          |
| ------------------------- | ------------------------------ |
| Get current URL           | `window.location.href`         |
| Navigate (can go back)    | `window.location.assign(url)`  |
| Navigate (cannot go back) | `window.location.replace(url)` |

```js
// Get current URL
console.log(window.location.href);

// Navigate without going back
window.location.replace('https://ezfrontend.com');

// Navigate with back ability
window.location.assign('https://ezfrontend.com');
```

### 15.4.3. History API

Used to navigate back and forward in the browser's session history.

```js
// Go back to previous page
window.history.back();

// Go forward to next page (if any)
window.history.forward();
```

## 15.5. What happens when I visit a website?

* User enters a URL in the browser, e.g., [https://ezfrontend.com](https://ezfrontend.com)
* Browser checks cache to avoid reloading resources.
* DNS resolution converts the domain name to an IP address.
* Establishes TCP/IP connection (and SSL/TLS if HTTPS).
* Browser sends an HTTP request to the server.
* Server processes and sends an HTTP response containing HTML and headers.
* Browser receives and parses HTML, simultaneously loading resources like CSS, JS, images...
* Browser builds DOM, CSSOM, and Render Tree.
* Browser performs Reflow & Repaint to display content.
* Executes JavaScript which can update DOM, send requests...
* The web page interface is ready for user interaction.

**Summary:**
"When accessing a website, the browser resolves the domain (DNS), establishes a connection to the server, sends an HTTP request, receives and parses the HTML response, renders the content, executes JavaScript, and finally displays the page to the user."

## 15.6. Console API

Console API is a set of methods that help developers log information, debug, and monitor code execution via the browser’s `console` object.

* **Variants of console.log:**

```js
console.log('LOG: You properly just need to use me and no need to care others');
console.info('INFO: Javascript is easy');
console.debug('DEBUG: Nice');
console.warn('WARN: Be careful');
console.error('ERROR: Something went wrong');
```

* **Logging multiple values:**

```js
const student = { id: 1, name: 'Alice', age: 18 };
const city = { id: 1, name: 'HCMC' };

// Not good
console.log(student);
console.log(city);

// Better
console.log({ student, city });
```

* **Logging with variables:**

```js
const student = { id: 1, name: 'Alice', age: 18 };

console.log(`My student: ${student}`);             // [object Object]
console.log('My student: %o is lazy', student);   // OK
console.log('Name: %s and Age: %i', student.name, student.age); // Good
console.log(`Name: ${student.name} and Age: ${student.age}`);   // Good
```

* **console.assert():** logs only if condition is false

```js
console.assert(1 === 1, 'Will not print because true');
console.assert(1 === 2, 'Will print because condition is false');
```

* **Counting calls with console.count():**

```js
console.count();               // default: 1
console.count('default');      // default: 2
console.count('easy');         // easy: 1
console.countReset('easy');    // reset
console.count('easy');         // easy: 1
```

* **Timing code execution:**

```js
console.time('loop');
for (let i = 0; i < 10000; i++) {
  if (i % 1000 === 0) console.timeLog('loop');
}
console.timeEnd('loop');
```

* **Grouping logs:**

```js
console.group('Group Name');
console.log('Inside group');
console.groupEnd();

console.groupCollapsed('Collapsed Group');
console.log('Inside collapsed group');
console.groupEnd();
```

* **Stack trace:**

```js
function foo() {
  function bar() {
    console.trace(); // Shows call stack
  }
  bar();
}
foo();
```

* **Display table:**

```js
console.table({
  id: 1,
  name: 'Alice',
  age: 18,
  isHero: true,
});

console.table([
  { id: 1, name: 'Alice', age: 18 },
  { id: 2, name: 'Bob', age: 20 }
], ['id', 'name']);
```

* **Styled logs with %c:**

```js
console.log('%cStyled text here', 'color: red; font-weight: bold;');
```

* **Clear console:**

```js
console.clear();
```

## 15.7. Storage API

### 15.7.1. Site Storage

* Each website (origin) has its own separate storage space, inaccessible to other sites.
* Main storage types:

  * localStorage
  * sessionStorage
  * cookies
  * Cache API data
  * IndexedDB
  * Service Worker registrations
  * History state info
  * Notification data
  * ...

### 15.7.2. Storage Interface (Common Storage API)

| Method           | Description                            |
| ---------------- | -------------------------------------- |
| getItem(key)     | Get value by key, returns null if none |
| setItem(key,val) | Set value for key                      |
| removeItem(key)  | Delete item by key                     |
| clear()          | Clear all storage data                 |

### 15.7.3. localStorage

* Stores data persistently on the browser; data survives closing the browser.
* Data persists across sessions.
* In incognito mode, data is cleared when window closes.
* Only stores string data.

**Example:**

```js
localStorage.setItem('name', 'Alice');
console.log(localStorage.getItem('name')); // "Alice"
localStorage.removeItem('name');
localStorage.clear();
```

### 15.7.4. sessionStorage

* Stores data that lasts only for the current tab or window session.
* Data is not shared across tabs (even same domain).
* Only stores string data.

**Example:**

```js
sessionStorage.setItem('token', 'abc123');
console.log(sessionStorage.getItem('token')); // "abc123"
sessionStorage.removeItem('token');
sessionStorage.clear();
```

### 15.7.5. Cookies

| Feature           | Cookies             | localStorage  | sessionStorage          |
| ----------------- | ------------------- | ------------- | ----------------------- |
| Capacity          | \~4 KB              | \~10 MB       | \~5 MB                  |
| Accessible From   | Any window          | Any window    | Current tab only        |
| Lifetime          | Can be set manually | No expiration | Deleted when tab closes |
| Storage Location  | Browser & server    | Browser only  | Browser only            |
| Sent with Request | Yes                 | No            | No                      |

**Notes:**

* **localStorage:** Persistent storage accessible by all tabs.
* **sessionStorage:** Temporary storage within the tab, deleted when the tab closes.
* **cookies:** Small capacity, can send data to the server, commonly used for session authentication.       