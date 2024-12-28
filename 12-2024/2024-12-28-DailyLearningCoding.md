**Learn Asynchronous Programming by Building an fCC Forum Leaderboard.**
**Step 1:**
```javascript
const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
```
- **forumLatest**: This variable stores the API endpoint URL that provides JSON data about the latest forum topics.
- **forumTopicUrl**: This variable stores the base URL to link to specific topics on the freeCodeCamp forum.

**Step 2:**
```javascript
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";
```
- **forumCategoryUrl**: This variable stores the base URL to link to specific categories on the freeCodeCamp forum.
- **avatarUrl**: This variable stores the base URL for user avatars on the freeCodeCamp forum.

**Step 3:**
```javascript
const postsContainer = document.getElementById("posts-container");
```

**Step 4:** Create an asynchronous function to make the API request.
```javascript
const fetchData = async () => {
}
```
- **async**: Used to declare an asynchronous function.
- **fetchData**: This function will make the API request to fetch data and handle the returned result.

**Step 5-9:**
- Add a `try...catch` block to handle errors when making the asynchronous request.
- Use the `await` keyword inside the `try` block to make the API request and store the returned result.
- Use the `.json()` method on the `res` object to parse the API response into usable JSON data.

```javascript
const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
  } catch (err) {
    console.log(err);
  }
};

fetchData();
```
- **try**: This block contains code that might throw an error. If there is no error, the `catch` block is skipped.
- **catch (err)**: If an error occurs in the `try` block, the program jumps to the `catch` block and executes the code there. The `err` parameter contains details about the error.
- **console.error**: Used to print the error to the console, helping with debugging.
- **await**: Pauses the function execution until the Promise is resolved and returns the result.
- **fetch(forumLatest)**: Sends an HTTP GET request to the API URL stored in `forumLatest`.
- **res**: Contains the API response, typically in the form of a Response object.
- **res.json()**: This method reads the response body and parses it into a JSON object.
- **Calling the `fetchData` function**: Starts the process of fetching data from the API and logs the result.

**Step 10:**
```javascript
const showLatestPosts = (data) => {
}
```
- **data**: This parameter will contain the data fetched from the API and will be used to build the page content.

**Step 11:**
```javascript
const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};
```
- **showLatestPosts(data)**: Calls the `showLatestPosts` function and passes the `data` from the API for processing and display.

**Step 12-14:**
```javascript
const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;
  postsContainer.innerHTML = topics.map((item) => { });
};
```
- **const { topic_list, users } = data**: This is JavaScript destructuring syntax, which allows you to extract the `topic_list` and `users` properties from the `data` object and assign them to corresponding variables.
- After destructuring, you can use `topic_list` and `users` directly in the function.
- **topic_list.topics.map((item) => {...})**
  + Iterates over each post in `topic_list.topics` (an array of topics).
  + Uses an arrow function to handle each post (represented by `item`).
- **postsContainer.innerHTML = ...**
  + Assigns the result of the `map()` method to `postsContainer.innerHTML` to display the posts on the page.

**Step 15-17:**
```javascript
postsContainer.innerHTML = topics.map((item) => {
  const {
    id, // ID of the post.
    title, // Post title.
    views, // Number of views of the post.
    posts_count, // Number of posts in the topic.
    slug, // URL slug of the post (used to create a link to the post).
    posters, // Array of names of the poster(s), here we take the first poster.
    category_id, // ID of the category the post belongs to.
    bumped_at, // Time when the post was last bumped.
  } = item;

  return `<tr></tr>`;
}).join("");
```

**Step 18-21:**
```javascript
return `
<tr>
  <td>
    <p class="post-title">${title}</p>
  </td>
  <td></td>
  <td>${posts_count - 1}</td>
  <td>${views}</td>
  <td></td>
</tr>`;
```
- **`<tr>` tag**:
  + Each post (topic) will be placed in a `<tr>` tag to form a row in the table.
- **`<td>` tag**:
  + Title: Displays the post title as a link.
  + Posts count: Shows the number of posts in the topic.
  + Views: Displays the number of views of the post.
  + Category ID: Displays the category ID the post belongs to.
  + Last update time: Displays the last time the post was updated (converted to a readable date-time format).

**Step 22-23:**
```javascript
const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);

  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};
```
- **Calculating time difference**:
  + `currentTime` is the current date and time.
  + `lastPost` is the timestamp passed to the function, converted to a `Date` object.
  + The difference is calculated in milliseconds: `timeDifference = currentTime - lastPost`.
- **Converting to minutes, hours, and days**:
  + `timeDifference` is converted into minutes, hours, and days by dividing and rounding down using `Math.floor()`.
  + Constants `msPerMinute`, `minutesAgo`, `hoursAgo`, and `daysAgo` are used for conversion.
- **Returning the result**:
  + If the difference is less than 60 minutes, it returns time in minutes (`${minutesAgo}m ago`).
  + If less than 24 hours, it returns time in hours (`${hoursAgo}h ago`).
  + If greater than 24 hours, it returns time in days (`${daysAgo}d ago`).

**Step 24:**
```javascript
return `
<tr>
  <td>
    <p class="post-title">${title}</p>
  </td>
  <td></td>
  <td>${posts_count - 1}</td>
  <td>${viewCount(views)}</td>
  <td>${timeAgo(bumped_at)}</td>
</tr>`;
```

**Step 25:** Convert view count into a more readable format (e.g., 1000 to "1k" or 100,000 to "100k").
```javascript
const viewCount = (views) => {
  const thousands = Math.floor(views / 1000);

  if (views >= 1000) {
    return `${thousands}k`;
  }

  return views;
};
```

**Step 26:**
```javascript
return `
<tr>
  <td>
    <p class="post-title">${title}</p>
  </td>
  <td></td>
  <td>${posts_count - 1}</td>
  <td>${viewCount(views)}</td>
  <td>${timeAgo(bumped_at)}</td>
</tr>`;
```

**Step 27-30:**
```javascript
const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};
```
- **category**: The name of the category (e.g., "Career Advice", "Project Feedback", etc.)
- **className**: The CSS class name applied to the category in the UI (e.g., "career", "feedback", etc.)

**Step 31-42:**
```javascript
const forumCategory = (id) => {
  let selectedCategory = {};

  if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];
    selectedCategory.className = className;
    selectedCategory.category = category;
  } else {
    selectedCategory.className = "general";
    selectedCategory.category = "General";
    selectedCategory.id = 1;
  }

  const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
  const linkText = selectedCategory.category;
  const linkClass = `category ${selectedCategory.className}`;

  return `<a href="${url}" class="${linkClass}" target="_blank">
    ${linkText}
  </a>`;
};
```

**Step 43:**
```javascript
return `
<tr>
  <td>
    <p class="post-title">${title}</p>
    ${forumCategory(category_id)}
  </td>
  <td></td>
  <td>${posts_count - 1}</td>
  <td>${viewCount(views)}</td>
  <td>${timeAgo(bumped_at)}</td>
</tr>`;
```

**Step 44-51:**
```javascript
const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);
      if (user) {
        const avatar = user.avatar_template.replace(/{size}/, 30);
        const userAvatarUrl = avatar.startsWith("/user_avatar/")
          ? avatarUrl.concat(avatar)
          : avatar;

        return `<img src="${userAvatarUrl}" alt="${user.name}" />`;
      }
    })
    .join("");
};
```

**Step 52-53:**
```javascript
<td>
  <div class="avatar-container">
    ${avatars(posters, users)}
  </div>
</td>
```
- This is a template literal syntax in JavaScript, which helps insert the result returned from the `avatars(posters, users)` function into the HTML.
- The `avatars` function takes two parameters: `posters` and `users`:
  + **posters**: List of poster information.
  + **users**: List of user information, including avatars.
- The `avatars` function returns a string of `<img>` tags representing user avatars, based on the data from `posters` and `users`.

**Step 54:** Change `<p>` to `<a>`:
```javascript
<td>
  <a class="post-title">${title}</a>
  ${forumCategory(category_id)}
</td>
```

**Step 55:**
```javascript
<td>
  <a class="post-title" target="_blank" href="${forumTopicUrl}${slug}/${id}">${title}</a>
  ${forumCategory(category_id)}
</td>
```