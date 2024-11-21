**Learn the Date Object by Building a Date Formatter**

### Step 1:
```javascript
const currentDateParagraph = document.getElementById('current-date');
```

- **The Date object in JavaScript**:
  - Used to work with dates and times.
  - Provides many methods such as retrieving the current date, time, and formatting dates and times.

- **The `.getElementById()` method**:
  - Retrieves an HTML element based on its `id` attribute.

- **`const` (constant variable)**:
  - The value of a `const` variable cannot be changed once assigned.
  - Use `const` for variables that do not need to change, making the code easier to maintain.

---

### Step 2:
```javascript
const dateOptionsSelectElement = document.getElementById("date-options");
```

---

### Step 3:
```javascript
const date = new Date(); // Create a new Date object
console.log(date); // Log the current date and time
```

- **Constructors in JavaScript**:
  - Special functions used to create objects.
  - Built-in constructors include: `Date`, `Array`, `Object`.
  - When calling a constructor, you need to use the `new` keyword.

- **The Date object**:
  - Created with `new Date()`.
  - Retrieves the current date and time or formats dates and times as needed.

- **Example output**:
  ```
  Tue Nov 21 2024 14:15:00 GMT+0700 (Indochina Time)
  ```

---

### Step 4:
```javascript
const date = new Date(); // Create a Date object
const day = date.getDate(); // Get the day of the month
console.log(day); // Log the day as a number
```

- **The `.getDate()` method**:
  - Returns the day (from 1 to 31) of the month from a Date object.
  - This method does not require any input arguments.

---

### Step 5:
```javascript
const date = new Date(); // Create a Date object
const month = date.getMonth() + 1; // Get the month and add 1
console.log(month); // Log the month
```

- **The `.getMonth()` method**:
  - Returns the month as a number from 0 (January) to 11 (December).
  - Add 1 to convert to the conventional format (1 to 12).

---

### Step 6:
```javascript
const date = new Date(); // Create a Date object
const year = date.getFullYear(); // Get the year
console.log(year); // Log the year
```

- **The `.getFullYear()` method**:
  - Returns the current year as an integer or the year from a Date object.
  - Differs from `.getYear()` (which returns the year since 1900 and is no longer recommended).

---

### Step 7:
```javascript
const date = new Date(); // Create a Date object
const hours = date.getHours(); // Get the current hour
console.log(hours); // Log the hour
```

- **The `.getHours()` method**:
  - Returns the hour in a 24-hour format.
  - The returned value ranges from 0 to 23.

- **Note**:
  - To convert to a 12-hour format, you need additional logic:
    ```javascript
    const hours12 = hours % 12 || 12; // Convert to 12-hour format
    const amPm = hours >= 12 ? 'PM' : 'AM';
    console.log(`${hours12} ${amPm}`); // Example: "3 PM"
    ```

---

### Step 8:
```javascript
const date = new Date(); // Create a Date object
const minutes = date.getMinutes(); // Get the current minutes
console.log(minutes); // Log the minutes
```

- **The `.getMinutes()` method**:
  - Returns the minutes of the current hour (or from a Date object).
  - The returned value ranges from 0 to 59.

---

### Step 9:
```javascript
const formattedDate = ``;
```

- **Template literals**:
  - Enclosed by backticks ``.
  - Allows embedding expressions or variables directly into strings using `${expression}`.

- **The `formattedDate` variable**:
  - Will later be used to concatenate day, month, year, hours, minutes, etc., into a string.

- **Example when completed**:
  ```javascript
  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
  ```

---

### Steps 10–13:
```javascript
const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);
```

---

### Step 14:
```javascript
remove console.log(formattedDate);
currentDateParagraph.textContent = formattedDate; // Update text content
```

- **The `textContent` property**:
  - Used to get or set the text content of an HTML element.
  - Updating `textContent` directly changes the element's displayed content on the webpage.

---

### Step 15:
```javascript
dateOptionsSelectElement.addEventListener("change", () => {
    
});
```

- **The `change` event**:
  - Used to detect when the value of an element like `<input>`, `<select>`, or `<textarea>` changes.
  - Example: When a user selects a different option from a dropdown (`<select>`), the `change` event is triggered.

- **The `addEventListener()` method**:
  - Used to attach an event listener to an element.

---

### Step 16:
```javascript
switch (dateOptionsSelectElement.value) {
  
}
```

- **The `switch` statement**:
  - Used to compare the value of an expression with multiple possible values and execute different actions based on the result.

- **How to use a `switch` statement**:
  - The expression in `switch` is compared with the values in each `case`. If there is a match, the code in that case is executed.
  - The `break` keyword stops further comparisons after a match is found and exits the `switch` statement.
  - `default` is the fallback case that is executed if no matches are found.

---

### Step 17:
```javascript
dateOptionsSelectElement.addEventListener("change", () => {
  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate;
  }
```

- **Why add a case for "yyyy-mm-dd"?**
  - When the user selects this format, you want to display the date in the "yyyy-mm-dd" structure, e.g., "2024-11-21".
  - Ensures the `currentDateParagraph` element is updated with the correct date format.

---

### Steps 18–19:
```javascript
const exampleSentence = "selur pmaCedoCeerf".split("");
console.log(exampleSentence);
```

- **The `split()` method**:
  - Splits a string into substrings based on a specified separator and returns them as an array.
  - Example: `"hello world".split(" ")` returns `["hello", "world"]`.

---

### Step 20:
```javascript
const exampleSentence = "selur pmaCedoCeerf".split("").reverse();
console.log(exampleSentence);
```

- **The `reverse()` method**:
  - Reverses the order of elements in an array.
  - This operation modifies the original array in place (in-place).

- **Method chaining**:
  - Allows performing multiple operations in one line without creating intermediate variables.
  - Example: `"hello".split("").reverse();` outputs `["o", "l", "l", "e", "h"]`.

---

### Step 21:
```javascript
const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join("");
console.log(exampleSentence);
```

- **The `join()` method**:
  - Joins the elements of an array into a single string.
  - A separator can be specified; if omitted, the elements are joined with a comma.
  - Example: `["o", "l", "l", "e", "h"].join("")` returns `"olleh"`.

---

### Step 22:
After completing the practice examples and understanding methods like `split`, `reverse`, and `join`, you can remove temporary variables and unnecessary `console.log` statements to make your code cleaner and more readable.

---

### Step 23:
```javascript
switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
}
```

---

### Step 24:
```javascript
switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
    break;
}
```

- **The `break` statement in `switch`**:
  - Stops the execution of the following `case` statements.
  - Prevents unintended execution of subsequent code even when it does not match.

- **How to use `break`**:
  - Add a `break` at the end of each `case` block to ensure only one block is executed.

---

### Step 25:
```javascript
switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
    break;
  case "mm-dd-yyyy-h-mm":
    currentDateParagraph.textContent = ``;
    break;
}
```

---

### Step 26:
```javascript
switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
    break;
  case "mm-dd-yyyy-h-mm":
    currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
    break;
}
```

- **When the user selects "Month, Day, Year, Hours, Minutes"**:
  - The date is displayed in the format `mm-dd-yyyy h Hours m Minutes`.

- **Example output**:
  - If the month is `11`, the day is `21`, the year is `2024`, the hour is `15`, and the minute is `45`, the displayed result will be:
    ```
    11-21-2024 15 Hours 45 Minutes
    ```

---

### Step 27:
```javascript
switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
    break;
  case "mm-dd-yyyy-h-mm":
    currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
    break;
  default:
    currentDateParagraph.textContent = formattedDate;
    break;
}
```

- **The `default` case in `switch`**:
  - Handles scenarios where no other cases match.
  - Ensures that an action is performed even when none of the specified cases match the value of the `switch` expression.

---
