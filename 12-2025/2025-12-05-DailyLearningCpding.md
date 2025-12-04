# Installing React Router and Creating Basic Navigation for a React App

## 1. Concept of Navigation in SPAs

### 1.1 Problems with Traditional Navigation

* In traditional web apps, clicking a link loads a new HTML page from the server.
* Disadvantages:

  * Full page reload.
  * Lose UI state.
  * Slower user experience.

### 1.2 Navigation in SPA (Single Page Application)

* An SPA has only **one HTML file**.
* When navigating between pages:

  * The browser does **not reload**.
  * Only the routed area changes its content.
* **React Router** enables this mechanism.

---

## 2. Sample App Before Installing React Router

### 2.1 Components

* `Homepage`: displays the title "Welcome to my site."
* `Aboutme`: displays the title "About Me."

### 2.2 Initial Navigation

* The `App` uses `<a>` tags:

```html
<a href="/">Homepage</a>
<a href="/about-me">About Me</a>
```

* Problems:

  * `<a>` triggers full page reload.
  * React cannot mimic a multi-page site.

---

## 3. Installing React Router

### 3.1 Installation Command

```bash
npm i react-router-dom@6
```

### 3.2 Check in package.json

* You should see:

```json
"react-router-dom": "6.3.0"
```

---

## 4. Wrap the App with BrowserRouter

### 4.1 Import in `index.js`

```javascript
import { BrowserRouter } from "react-router-dom";
```

### 4.2 Wrap `<App />` with `<BrowserRouter>`

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

### 4.3 Meaning

* Allows the entire app to use routing.
* Acts as a **framework** for React Router to work.

---

## 5. Declare Routes in `App.js`

### 5.1 Import Routes and Route

```javascript
import { Routes, Route } from "react-router-dom";
```

### 5.2 Create Route for Homepage

```jsx
<Route path="/" element={<Homepage />} />
```

### 5.3 Create Route for About Page

```jsx
<Route path="/about-me" element={<Aboutme />} />
```

### 5.4 Wrap All Routes in `<Routes>`

```jsx
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/about-me" element={<Aboutme />} />
</Routes>
```

### 5.5 Navbar Placement

* Place the navbar **outside** `<Routes>`:

```jsx
<nav>...</nav>
<Routes>...</Routes>
```

* Purpose: navbar remains visible and does not disappear when navigating.

---

## 6. Replace `<a>` Tags with `<Link>`

### 6.1 Import Link

```javascript
import { Link } from "react-router-dom";
```

### 6.2 Convert Each Link

* Homepage:

```jsx
<Link to="/" className="nav-item">Homepage</Link>
```

* About page:

```jsx
<Link to="/about-me" className="nav-item">About Me</Link>
```

### 6.3 Benefits of `<Link>`

* No page reload.
* Keeps React state intact.
* Smooth and fast navigation.

---

## 7. Test Navigation

### 7.1 Test Direct URLs

* `/about-me` → displays `Aboutme`.
* `/` → displays `Homepage`.

### 7.2 Test Navbar Clicks

* Click each button → correct component shows.
* No page reload occurs.

---

## 8. Summary

* React Router allows SPA to mimic multi-page navigation.
* `<BrowserRouter>` creates a routing environment.
* `<Routes>` contains the list of routes.
* `<Route>` defines a page.
* `<Link>` provides SPA-compliant navigation.
* This is the foundation for menus, multi-level navigation, and advanced routing.

---

# Conditional Rendering in React

## 1. Basic Concept

### 1.1 React Dynamically Changes Page Content

* When a React page switches from "Home" to "About Me," it does **not** load a new page. React renders a different component instead.
* Useful but requires clear instructions on which component should be displayed.

### 1.2 State and Props

* **State**: internal component data, can change.
* **Props**: data received from other components, cannot be changed.

---

## 2. Conditional Rendering

### 2.1 Concept

* Conditional Rendering is the ability to display different components based on a condition.
* Example: Based on a state variable, the component displays appropriate content.

### 2.2 How It Works

* When writing render logic in the main component, reference the state of other components.

```jsx
const [toggleSidebar, setToggleSidebar] = React.useState(false);

return (
  <div>
    <button onClick={() => setToggleSidebar(true)}>Show Sidebar</button>
    {toggleSidebar && <Sidebar />}
  </div>
);
```

* Clicking the button sets `toggleSidebar` to `true`, displaying the `<Sidebar />` component.

---

## 3. Using the Ternary Operator

### 3.1 Ternary Syntax

```text
condition ? expression_if_true : expression_if_false
```

* `condition`: the condition to check.
* `expression_if_true`: executed if true.
* `expression_if_false`: executed if false.

### 3.2 Example 1: Display Message Based on Day of the Week

```jsx
function CurrentMessage() {
  const day = new Date().getDay(); // 0 = Sunday, 6 = Saturday

  const Workdays = () => <h1>Get it done!</h1>;
  const Weekends = () => <h1>Get some rest.</h1>;

  return (day >= 1 && day <= 5 ? <Workdays /> : <Weekends />);
}
```

* If day is 1–5 → display `<Workdays />`
* If day is 0 or 6 → display `<Weekends />`

### 3.3 Example 2: Simple Boolean Version

```jsx
function IsItSummerYet() {
  const summer = true;
  return summer ? "Let's go to the beach" : "Stay indoors";
}
```

* `summer = true` → displays "Let's go to the beach"
* `summer = false` → displays "Stay indoors"

---

## 4. Conclusion

* Conditional Rendering allows displaying different components based on state or props.
* The ternary operator is a common, concise way to implement conditions in React.
* When working with events (e.g., click), combining conditional rendering with state enables dynamic and interactive UI.

---

# Applying Conditional Rendering in React

## 1. Basic Concepts

### 1.1 State

* **State** is all the data the application is currently working with, which can affect how components are displayed.

### 1.2 Conditional Rendering

* Conditional Rendering is a technique that allows displaying a component based on a condition, usually depending on the value of state or props.

### 1.3 Element Variables

* **Element variables** help separate conditional logic from render code, making the code cleaner and easier to maintain.

### 1.4 Logical AND Operator (&&)

* The logical AND operator in JSX is used to display an element if the value on the left is `true`.

---

## 2. Example: Productivity App

### 2.1 Requirement

* Display a message based on the current day:

  * Weekdays: "Complete your tasks"
  * Weekends: "Take a little rest"

### 2.2 Method 1: Using `if` directly

```jsx
function CurrentMessage() {
    const day = new Date().getDay(); // 0 = Sunday, 6 = Saturday
    if (day >= 1 && day <= 5) {
        return <Workdays />;
    }
    return <Weekends />;
}
```

### 2.3 Method 2: Receive data via props

```jsx
function CurrentMessage(props) {
    if (props.day >= 1 && props.day <= 5) {
        return <Workdays />;
    }
    return <Weekends />;
}
```

* Allows the component to be flexible, receiving the day value from a parent component or user input.

---

## 3. Conditional Rendering with Element Variables

*Using a `message` variable:*

```jsx
function CurrentMessage({day}) {
    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);
    let message;

    if (weekday) {
        message = <Workdays />;
    } else if (weekend) {
        message = <Weekends />;
    }

    return <div>{message}</div>;
}
```

*Conditional logic is separated from JSX render, making code more readable.*

---

## 4. Conditional Rendering with Logical AND (&&)

### 4.1 Example

```jsx
function LogicalAndExample() {
    const val = prompt('Enter anything other than 0');

    return (
        <div>
            <h1>Please do not enter 0</h1>
            {val &&
                <h2>Yay, you did not enter 0!</h2>
            }
        </div>
    );
}
```

* If `val` is true → `<h2>` displays.
* If `val` is false → nothing is displayed.

### 4.2 Explanation

* `true && <JSX>` → displays JSX
* `false && <JSX>` → ignored, nothing is displayed

*Basic JavaScript example:*

```javascript
true && console.log('This will show');  // Prints 'This will show'
false && console.log('This will never show'); // Prints nothing
```

---

## 5. Conclusion

* Conditional Rendering allows displaying components based on state or props.
* Approaches include:

  * `if/else` in functions
  * Element variables to separate logic and JSX
  * `&&` operator for quick conditional rendering
* This approach makes apps more flexible and code easier to read and maintain.

---

# Conditional Rendering in React: If-Else & Ternary Operator

## 1. Objectives

* Understand how to display different content based on conditions in React.
* Learn to use `if-else` and ternary operators to render components or content.
* Create a component displaying messages based on day and time.

---

## 2. Get Date and Time

```javascript
const time = new Date();
const day = time.toLocaleString('en-US', { weekday: 'long' }).toLowerCase(); // 'monday', 'tuesday'...
const hours = time.getHours();
const morning = hours >= 6 && hours <= 12; // Morning or not
```

* `day` → day name (lowercase)
* `hours` → current hour
* `morning` → true if hour is 6–12

---

## 3. Use If-Else to Create Message

```javascript
let dayMessage = '';

if(day === 'monday') {
    dayMessage = "Happy Monday";
} else if(day === 'tuesday') {
    dayMessage = "Tuesday, 4 days to go";
} else if(day === 'wednesday') {
    dayMessage = "Midweek Wednesday!";
} else if(day === 'thursday') {
    dayMessage = "Almost Friday!";
} else if(day === 'friday') {
    dayMessage = "TGIF!";
} else {
    dayMessage = "Stay calm and have fun!";
}
```

* Monday–Friday → specific messages
* Weekend or other days → general message

---

## 4. Use Ternary Operator to Add Morning Notice

```jsx
return (
    <div>
        <h1>{dayMessage}</h1>
        <h2>{morning ? "Have you had breakfast yet?" : ""}</h2>
    </div>
);
```

* `morning ? "..." : ""` → displays message if morning, empty string otherwise

---

## 5. Example Results

* Today is Monday, 8 AM → displays:

```
Happy Monday
Have you had breakfast yet?
```

* Today is Monday, 7 PM → displays:

```
Happy Monday
```

---

## 6. Conclusion

* `If-else` → readable and clear for complex logic
* Ternary operator → concise, suitable for inline rendering
* Combining both approaches helps create flexible components displaying content based on day, time, state, or props.

---

# Using Assets in React

## 1. What are Assets?

* **Assets** are files needed for the app to function correctly, such as:

  * Images (`.jpg`, `.png`)
  * Video, audio
  * Fonts, CSS
  * Other media files
* Missing assets can cause the app to display incorrectly or fallback to placeholders.

---

## 2. Storing Assets

* **src/assets**:

  * Use when the component needs to import the asset.
* **public**:

  * Use for files that don’t need to be imported (e.g., `favicon.ico`).
  * App will still compile if a file in `public` is missing.

**Rule of thumb:**

* If a component needs the asset → place it in `src/assets`.
* If no import is needed → place it in `public`.

---

## 3. Using Assets in a Component

### 3.1 Method 1: Direct Import

```jsx
import cat from './assets/cat.jpg';

function CatComponent() {
    return (
        <div>
            <img src={cat} alt="A cute cat" />
        </div>
    );
}
```

* `import cat from '...'` → assign a meaningful variable name
* `src={cat}` → use the imported variable as the image source

### 3.2 Method 2: Using `require`

```jsx
function CatComponent() {
    return (
        <div>
            <img src={require('./assets/cat.jpg')} alt="A cute cat" />
        </div>
    );
}
```

* No import at the top of the file is needed
* `require()` is used directly in JSX

---

## 4. Practical Example

* Pet adoption app:

  1. Create folder `src/assets`
  2. Receive pet images from the adoption center
  3. Import or `require` them into components for display

---

## 5. Summary

* Assets make the app lively with images, videos, audio, etc.
* Proper storage (`src/assets` or `public`) helps maintainability
* Use `import` or `require` to add assets into components

---

# Displaying Images in React

### Three main methods:

### 1. Using `import`

```jsx
import rooftops from './assets/images/CentralPark.jpg';

function App() {
  return (
    <div>
      <img src={rooftops} alt="Central Park" height="200" />
    </div>
  );
}
```

* `rooftops` is the variable name assigned to the image
* `height="200"` limits the image height
* `alt` provides a description for accessibility and SEO

### 2. Using `require`

```jsx
function App() {
  return (
    <div>
      <img src={require('./assets/images/CentralPark.jpg')} alt="Central Park" height="200" />
    </div>
  );
}
```

* No prior import needed
* Use relative path directly in JSX

### 3. Using an Internet URL

```jsx
function App() {
  const randomImageURL = "https://source.unsplash.com/random/200x200";

  return (
    <div>
      <img src={randomImageURL} alt="Random" height="200" />
    </div>
  );
}
```

* No local file needed, just a valid URL

---

### Summary Table

| Method  | When to use                         | Syntax                      |
| ------- | ----------------------------------- | --------------------------- |
| import  | Local image, component needs import | `import name from './path'` |
| require | Local image, no import needed       | `src={require('./path')}`   |
| URL     | Image hosted online                 | `src="imageURL"`            |

💡 **Tip:**

* Store local images in `src/assets/images` for easy management
* Always add `alt` text for better user experience

---

# Using Audio & Video in React

## 1. Local Video/Audio with HTML5

```jsx
import React from 'react';
import sampleVideo from './assets/videos/sample.mp4';

function App() {
  return (
    <div>
      <video width="400" controls>
        <source src={sampleVideo} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
}

export default App;
```

* `controls` adds play/pause, volume, fullscreen buttons
* Audio works similarly by using a local audio file as `src`

---

## 2. Embed Video from Third-Party Platforms

* Platforms like YouTube, Vimeo, TikTok provide `iframe` or embed code
* Create a component to easily switch videos via props:

```jsx
function VideoPlayer({ videoId }) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}
```

---

## 3. Using an NPM Package (e.g., `react-player`)

* Makes displaying videos from various sources (local, YouTube, Vimeo) easier
* Install:

```bash
npm install react-player
```

* Usage:

```jsx
import ReactPlayer from 'react-player';

function App() {
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls />
    </div>
  );
}
```

* `controls` shows playback buttons
* URL or other props can be changed dynamically

---

## 4. Choosing the Right Package

* Check update history and number of contributors
* Look at GitHub stars for popularity
* Popular option: `react-player` on GitHub

---

### Summary Table

| Method                       | When to Use                                      |
| ---------------------------- | ------------------------------------------------ |
| HTML5 video/audio            | Basic local video/audio                          |
| Embed from third-party       | Embed YouTube, Vimeo, TikTok, etc.               |
| NPM package (`react-player`) | When needing more features and easier management |

---

This version is concise, clear, and suitable as a reference for using assets, images, audio, and video in React.

---

# Using React Player in React

## 1. Installation

Run the following command in your terminal:

```bash
npm install react-player
```

---

## 2. Import the Package

```javascript
import ReactPlayer from "react-player";
```

---

## 3. Create a Video Component

Example of creating a video player in a React app:

```javascript
import React from "react";
import ReactPlayer from "react-player";

function App() {
  const videoURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <div>
      <h1>React Player Example</h1>
      <ReactPlayer 
        url={videoURL}     // Video link
        playing={false}    // Do not autoplay
        volume={0.5}       // Volume set to 50%
        controls           // Show play/pause and other controls
      />
    </div>
  );
}

export default App;
```

---

## 4. Explanation of Basic Props

* **url**: Video URL (YouTube, Vimeo, or direct video link)
* **playing**: `true` for autoplay, `false` to disable autoplay
* **volume**: Value from 0 to 1 (e.g., 0.5 means 50% volume)
* **controls**: Show video control bar (play, pause, etc.)

---

## 5. Testing

* Save the file and run the app using:

```bash
npm start
```

* Verify that the video displays correctly
* Test play/pause controls and the volume starts at 50%