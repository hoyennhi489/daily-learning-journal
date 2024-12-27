**Learn Fetch and Promises by Building an fCC Authors Page.**

Step 1:
```javascript
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');
```

Step 2:
```javascript
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json");
```

- **API (Application Programming Interface):**
  - Acts as a bridge that allows applications to communicate and share data with each other.
  - In this project, the API provides author data for FreeCodeCamp News.

- **`fetch` method** allows the code to retrieve data from an API by sending a GET request.
  - Basic syntax: `fetch("URL")`.

- **GET** is a type of HTTP request used to retrieve data from a server without altering it.
  - This request only fetches information without impacting the original data on the server.
  - Commonly used in APIs to retrieve information like articles, users, products, etc.

Step 3:
```javascript
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => console.log(res));
```

- **Promise**:
  - A way to handle asynchronous tasks in JavaScript.
  - Promises have two primary states:
    - **Fulfilled**: The request succeeds and returns a result.
    - **Rejected**: The request fails and returns an error.

- **Response Object**:
  - The result returned when a Promise is fulfilled.
  - Contains information about the HTTP response, including status, headers, and response body.

- **`.then()` method**:
  - Used to handle the result of a Promise when it is fulfilled.
  - Accepts a callback function as a parameter, which processes the data returned by the Promise.

Step 4:
Replace `console.log(res)` with `res.json()`:
```javascript
.then((res) => res.json());
```

- **`.json()` method**:
  - Provided by the Response object.
  - Parses the HTTP response body into a JSON object or array.
  - Returns a Promise containing the JSON data.

- **Implicit Return**:
  - In JavaScript, you can return a value from a function without explicitly writing the `return` keyword if the function is written as a single-expression arrow function.

Step 5:
```javascript
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
```

- **Chaining `.then()`**:
  - You can chain multiple `.then()` methods consecutively.
  - The data returned from a previous `.then()` is passed as a parameter to the next one.

- **Callback with `{ }`**:
  - If the callback has a single line, `{ }` can be omitted.
  - If the callback spans multiple lines, `{ }` is necessary, and you must explicitly return a value (if required).

Step 6:
```javascript
.catch((err) => {
  console.error(`There was an error: ${err}`); // Handles errors, if any.
});
```

- **`.catch()` method**:
  - Used to handle errors in a Promise chain.
  - Triggered if any Promise in the chain is rejected.

- **Template literals**:
  - A modern way to write strings with dynamic values.
  - Use backticks (``) instead of single (`'`) or double (`"`) quotes.
  - Embed variables or expressions using the `${variable/expression}` syntax.

Step 7:
```javascript
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];
```

- **`startingIndex`**: Tracks the starting position for displaying data in the array.
- **`endingIndex`**: Tracks the ending position for displaying data in the array.
- **`authorDataArr`**: Stores the author data retrieved from the API.

Steps 8-13:
```javascript
const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
    </div>
  `;
  });
};
```

- **`.forEach()`**:
  - Iterates through an array, performing an action on each element.

- **Destructuring**:
  - A concise way to extract properties from objects or arrays and assign them to variables.
  - Example: From an object `{ author, image, url, bio }`, you can extract `author`, `image`, `url`, and `bio`.

- **`index` in `.forEach()`**:
  - Represents the index of each element in the array, starting from 0.

- **`innerHTML`**:
  - A DOM property used to get or set the HTML content of an element.

- **Template literals**:
  - Embed dynamic values like `${author}` into the HTML structure.

Steps 14-15:
```javascript
.then((data) => {
  authorDataArr = data; // Assigns data to `authorDataArr` for further use.
  console.log("Author Data Array:", authorDataArr);
});
```

Steps 16-19:
```javascript
.then((data) => {
  authorDataArr = data;
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
});
```

- **`.slice()`**:
  - Creates a sub-array from `authorDataArr` starting at `startingIndex` and ending before `endingIndex`.
  - Ensures only a group of authors (e.g., 8 authors) is displayed at a time.

Steps 20-22:
```javascript
const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;

  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
};
```

Step 23:
```javascript
loadMoreBtn.addEventListener('click', fetchMoreAuthors);
```

Steps 24-25:
```javascript
if (authorDataArr.length <= endingIndex) {
  loadMoreBtn.disabled = true;
  loadMoreBtn.textContent = 'No more data to load';
}
```

Steps 26-27:
```javascript
const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar" />
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author} author page</a>
    </div>
  `;
  });
};
```

Step 28:
```javascript
.catch((err) => {
  authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
});
```

Step 29:
```javascript
loadMoreBtn.style.cursor = "not-allowed";
```