# Introduction to Semantic HTML Template for Building Webpages

## 1. The Purpose of Using a Template

Besides programming tools, developers need to build a knowledge base and reusable code snippets. An HTML template helps quickly initialize web projects with a standard structure.

## 2. Directory Structure in the Template

The template consists of three main parts:

**Folders and files**

* `index.html`
* `JS/`

  * `script.js` (empty, used to add JavaScript)
* `CSS/`

  * `styles.css` (empty, used to add CSS)

All JavaScript files should be placed in the `JS` folder, and all CSS files should be placed in the `CSS` folder for easy management.

## 3. Structure of `index.html`

The `index.html` file is pre-set with a standard semantic HTML structure.

### 3.1 Head Section

* `DOCTYPE` and `<html>` tag
* Meta tags optimized for SEO
* Predefined `<title>`, `<description>`, and `<author>` that can be updated as needed
* Open Graph Protocol meta tags for social media link sharing. Comments can be removed and edited when used
* Icon code block for displaying the favicon in the browser tab. Simply change the icon path
* `<link>` to `styles.css` is already included

### 3.2 Body Section

The body contains a semantic structure:

* `<header>` – website title or logo
* `<nav>` – navigation area
* `<main>` – main content
* `<footer>` – copyright or auxiliary links

At the end of the body:

* `<script>` linking to `script.js` in the `JS` folder

## 4. Benefits of Using the Template

* Saves time during project initialization
* Standard semantic structure
* Easy to extend and maintain
* SEO and social media sharing optimized
* Keeps files organized and tidy

## 5. Conclusion

This template should be saved and reused for future web projects to quickly initialize, maintain standards, and facilitate development.

---

# Open Graph Protocol and How to Create Link Previews

## 1. Why Meta Tags Are Needed for Social Media

Social media allows sharing content with friends, family, and partners. When a link is shared, the platform usually generates a preview showing page information before users click.
This preview is created using meta tags in the HTML page.
Meta tags for link sharing are different from traditional SEO meta tags:

* **SEO Meta tags:** serve search engine results
* **Open Graph Meta tags:** serve previews when sharing links

## 2. What is Open Graph Protocol?

Facebook developed the Open Graph Protocol (OGP) in 2010 to improve the link-sharing experience.
OGP allows websites to describe their content so that social media displays accurate information.

## 3. How to Define OGP Meta Tags

Open Graph also uses `<meta>` tags in the head but differs slightly:

* Uses the `property` attribute instead of `name`
* Uses `content` to assign values, like standard meta tags
* All OGP attributes start with `og:` for identification

Example:

```html
<meta property="og:title" content="Introduction to Web Development">
```

## 4. Four Required OGP Properties

Webpages must include at least the following four attributes:

1. `og:title` – title displayed in the preview
2. `og:type` – content type: website, article, video, music, etc.
3. `og:url` – canonical URL of the page
4. `og:image` – image displayed in the preview, the most important factor for click-through

These four attributes allow social media to generate accurate previews for shared links.

**Example for a blog post:**

* Title → `og:title`
* Blog link → `og:url`
* Thumbnail → `og:image`

## 5. Three Common Optional Properties

Besides the four required attributes, there are several optional ones. Three important ones:

1. `og:description` – brief description of the page content
2. `og:locale` – content language and region, e.g.:

   * `en_US` → English, United States
   * `vi_VN` → Vietnamese, Vietnam
3. `og:site_name` – name of the entire website (not the individual page)

Other optional attributes will be covered later.

## 6. Conclusion

Open Graph Protocol helps websites describe content for social media, creating accurate and attractive link previews.
Using correct OGP meta tags can significantly increase link click-through rates.

---

# Introduction to Form Validation in HTML

## 1. Why Form Validation is Necessary

Forms are used to collect user data. However, data is only useful when it is correct and valid. Invalid input, such as a non-existent delivery address, can cause errors and a poor user experience.
Form validation ensures that input data complies with rules set by the developer.

## 2. Two Types of Form Validation

### 2.1 Client-side Validation

* Checks data as it is entered
* Performed by the browser or JavaScript
* Provides immediate feedback
* If valid: form is submitted to the server
* If invalid: browser shows errors and instructions to fix

Example:

```html
<input type="email">
```

Requires a valid email format; otherwise, the browser shows an error.

### 2.2 Server-side Validation

* Checks data after submission to the server
* More secure because it prevents intentional invalid or malicious data
* Can perform complex checks:

  * Compare with database records
  * Check according to business rules

Most websites use both:

* Client-side: fast feedback, improves user experience
* Server-side: protects data and system

## 3. HTML Built-in Validation

HTML provides input types that the browser can automatically validate:

* `email` – valid email
* `tel` – phone number
* `url` – website URL
* `date` – date
* `time` – time
* `number` – number
* `range` – number within min–max
* `color` – color picker

**Important attribute:**

* `required`: field cannot be empty. The browser will warn if a required field is left blank.

## 4. Conclusion

Form validation has two components: client-side and server-side checks. HTML supports many basic validations to reduce input errors and improve data quality and security.

---

# Input Types

1. **Button** – clickable button

```html
<input type="button" value="Say Hi" onclick="alert('Hello!')">
```

2. **Checkbox** – select multiple options

```html
<input type="checkbox" name="fruit" value="Apple"> Apple
<input type="checkbox" name="fruit" value="Banana"> Banana
```

3. **Radio** – select only one option

```html
<input type="radio" name="gender" value="Male"> Male
<input type="radio" name="gender" value="Female"> Female
```

4. **Submit** – submit form

```html
<form>
  <input type="text" name="user">
  <input type="submit" value="Send Form">
</form>
```

5. **Text** – text input

```html
<input type="text" placeholder="Enter username">
```

6. **Password** – hide characters

```html
<input type="password" placeholder="Your password">
```

7. **Date** – date input

```html
<input type="date" min="2000-01-01">
```

8. **Datetime-local** – date + time

```html
<input type="datetime-local" value="2024-05-10T09:30">
```

9. **Email** – email input

```html
<input type="email" placeholder="example@mail.com">
```

10. **File** – file upload

```html
<input type="file" accept=".png,.jpg" multiple>
```

11. **Hidden** – hidden input

```html
<input type="hidden" name="token" value="abc123">
```

12. **Image** – image button

```html
<input type="image" src="send.png" alt="Send">
```

13. **Number** – number input

```html
<input type="number" min="10" max="100" step="5">
```

14. **Range** – slider

```html
<input type="range" min="1" max="100" step="1">
```

15. **Reset** – clear form

```html
<input type="reset" value="Clear">
```

16. **Search** – search field

```html
<input type="search" placeholder="Search...">
```

17. **Time** – time input

```html
<input type="time" value="12:30">
```

18. **Tel** – phone number

```html
<input type="tel" placeholder="+84 123456789">
```

19. **URL** – website address

```html
<input type="url" placeholder="https://example.com">
```

20. **Week** – week picker

```html
<input type="week" value="2024-W15">
```

21. **Month** – month picker

```html
<input type="month" value="2024-06">
```

---

# User Signup Form for Little Lemon

## 1. Objective

Little Lemon restaurant wants to expand its services by accepting online orders. To do this, customers need to create an account on the website. The goal is to create a simple signup form with basic fields and securely submit data to the server.

## 2. Steps to Create the Form

### 2.1 Create Basic HTML Structure

* Create a file: `signup.html`
* Add `<!DOCTYPE html>` and basic tags (`html`, `head`, `body`)
* Add a page title and basic CSS to style the form

### 2.2 Add the `<form>` Tag

Use `<form>` with:

* `action="/submit-signup"`: the server endpoint to process the data
* `method="POST"`: safely send data via HTTP POST

```html
<form action="/submit-signup" method="POST">
    <!-- Input fields will be added here -->
</form>
```

### 2.3 Create Input Fields

**a. First Name**

```html
<div class="form-field">
    <label for="user_first_name">First Name</label>
    <input type="text" id="user_first_name" name="user_first_name" required>
</div>
```

**b. Last Name**

```html
<div class="form-field">
    <label for="user_last_name">Last Name</label>
    <input type="text" id="user_last_name" name="user_last_name" required>
</div>
```

**c. Email**

```html
<div class="form-field">
    <label for="user_email">Email</label>
    <input type="email" id="user_email" name="user_email" required>
</div>
```

**d. Password**

```html
<div class="form-field">
    <label for="user_password">Password</label>
    <input type="password" id="user_password" name="user_password" required>
</div>
```

**e. Confirm Password**

```html
<div class="form-field">
    <label for="user_confirm_password">Confirm Password</label>
    <input type="password" id="user_confirm_password" name="user_confirm_password" required>
</div>
```

### 2.4 Add Submit Button

```html
<div class="form-field">
    <button type="submit">Sign Up</button>
</div>
```

## 3. Detailed Explanation

| Element                  | Function                                                            |
| ------------------------ | ------------------------------------------------------------------- |
| `<form>`                 | Contains all input fields and submits data to the server            |
| `method="POST"`          | Sends data securely, not visible in the URL                         |
| `div.form-field`         | Wraps each input for readability and easy CSS styling               |
| `<label>`                | Describes the input and links via `for=id`, improving accessibility |
| `type="text"`            | Text input                                                          |
| `type="email"`           | Email input, browser validates format automatically                 |
| `type="password"`        | Password input, hides characters on screen                          |
| `required`               | Ensures field must be filled before submitting                      |
| `<button type="submit">` | Submits the form                                                    |

## 4. Complete HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Little Lemon Signup</title>
    <style>
        .form-field { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, button { padding: 8px; width: 100%; max-width: 300px; }
        button { cursor: pointer; }
    </style>
</head>
<body>
    <h1>Sign Up for Little Lemon</h1>

    <form action="/submit-signup" method="POST">
        <div class="form-field">
            <label for="user_first_name">First Name</label>
            <input type="text" id="user_first_name" name="user_first_name" required>
        </div>

        <div class="form-field">
            <label for="user_last_name">Last Name</label>
            <input type="text" id="user_last_name" name="user_last_name" required>
        </div>

        <div class="form-field">
            <label for="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required>
        </div>

        <div class="form-field">
            <label for="user_password">Password</label>
            <input type="password" id="user_password" name="user_password" required>
        </div>

        <div class="form-field">
            <label for="user_confirm_password">Confirm Password</label>
            <input type="password" id="user_confirm_password" name="user_confirm_password" required>
        </div>

        <div class="form-field">
            <button type="submit">Sign Up</button>
        </div>
    </form>
</body>
</html>
```

## 5. Notes

1. Each input has `id` and `name`:

   * `id` links with `<label>` for accessibility
   * `name` is used as the key when submitting data to the server
2. Client-side validation: the browser automatically checks `email` and `required` fields
3. Once the backend is set up, this form allows users to register an account

---

# Client-Side Validation and CSS for Forms

## 1. Objective

When users fill out online forms, errors may occur:

* Empty fields
* Incorrect data format
* Data too long or too short

As a developer, you can use HTML and CSS to:

* Guide users to enter valid data
* Prevent invalid data from being sent to the server, saving resources
* Improve user experience

## 2. Using `required`

* Ensures the user fills in a value
* If empty, the form won’t submit and the browser shows a message

```html
<form>
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
    </div>

    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    </div>

    <div>
        <button type="submit">Login</button>
    </div>
</form>
```

* The browser stops submission and focuses on the first empty required field

## 3. Using `minlength` and `maxlength`

* Controls input length
* Example:

  * Username: 3–12 characters
  * Password: minimum 5 characters

```html
<div>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required minlength="3" maxlength="12">
</div>

<div>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required minlength="5">
</div>
```

* Browser automatically shows an error if input length is invalid

## 4. Displaying Errors with CSS (`:invalid` and `:focus`)

* Use `:invalid` for inputs that fail validation
* Use `:focus` to highlight while typing

```html
<style>
    input:focus:invalid {
        border: 2px solid red;
        background-color: #ffe6e6;
    }

    input:valid {
        border: 2px solid green;
        background-color: #e6ffe6;
    }

    input {
        padding: 8px;
        width: 250px;
        margin-bottom: 10px;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
</style>
```

* Red border indicates invalid input
* Green border indicates valid input
* Provides visual feedback without submitting to the server

## 5. Complete HTML Example with CSS Validation

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login Form Validation</title>
<style>
    input:focus:invalid {
        border: 2px solid red;
        background-color: #ffe6e6;
    }
    input:valid {
        border: 2px solid green;
        background-color: #e6ffe6;
    }
    input {
        padding: 8px;
        width: 250px;
        margin-bottom: 10px;
    }
    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }
    button {
        padding: 8px 16px;
        cursor: pointer;
    }
</style>
</head>
<body>
    <h2>Login Form</h2>
    <form>
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required minlength="3" maxlength="12">
        </div>

        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required minlength="5">
        </div>

        <div>
            <button type="submit">Login</button>
        </div>
    </form>
</body>
</html>
```

**Summary:**

* `required` prevents empty fields
* `minlength` / `maxlength` controls input length
* CSS pseudo-classes `:invalid:focus` and `:valid` highlight inputs visually
* Reduces unnecessary server requests
* Improves user experience

---

# Online Table Booking Form with Radio Buttons

## 1. Objective

Little Lemon wants to allow online table reservations.
Each table has different sizes, and customers can choose indoor or outdoor seating. Since both options are limited, radio buttons are suitable for selecting only one option per group.

## 2. Basic HTML Structure

* Create file: `booking.html`
* Add basic HTML structure with `<html>`, `<head>`, `<body>`, and `<form>`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book a Table - Little Lemon</title>
</head>
<body>
    <h1>Book a Table</h1>
    <form action="/submit-booking" method="POST">
        <!-- Fieldsets and submit button will be added -->
    </form>
</body>
</html>
```

## 3. Create Radio Button Groups with `<fieldset>` and `<legend>`

### 3.1 Table Size

* Options: 2, 4, 6 persons
* Only one selection allowed per group
* Default value: 4 persons

```html
<fieldset id="size">
    <legend>Table Size</legend>
    <label>
        <input type="radio" name="size" value="two"> Two-person table
    </label>
    <label>
        <input type="radio" name="size" value="four" checked> Four-person table
    </label>
    <label>
        <input type="radio" name="size" value="six"> Six-person table
    </label>
</fieldset>
```

### 3.2 Table Location

* Options: Indoors or Outdoors
* Default: Indoors

```html
<fieldset id="location">
    <legend>Table Location</legend>
    <label>
        <input type="radio" name="location" value="indoors" checked> Indoors
    </label>
    <label>
        <input type="radio" name="location" value="outdoors"> Outdoors
    </label>
</fieldset>
```

## 4. Add Submit Button

```html
<div class="form-field">
    <button type="submit">Book Table</button>
</div>
```

## 5. Detailed Explanation

| Element                  | Function                                                                |
| ------------------------ | ----------------------------------------------------------------------- |
| `<fieldset>`             | Groups related radio buttons for clarity                                |
| `<legend>`               | Title for the radio button group                                        |
| `name`                   | Same value for radio buttons in a group, allowing only one selection    |
| `checked`                | Sets default option                                                     |
| `<label>`                | Clicking text selects corresponding radio button, improves UX on mobile |
| `<button type="submit">` | Submits the form                                                        |

## 6. Complete HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book a Table - Little Lemon</title>
    <style>
        form { max-width: 400px; margin: auto; }
        fieldset { margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; cursor: pointer; }
        button { padding: 10px 20px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Book a Table</h1>
    <form action="/submit-booking" method="POST">
        <fieldset id="size">
            <legend>Table Size</legend>
            <label>
                <input type="radio" name="size" value="two"> Two-person table
            </label>
            <label>
                <input type="radio" name="size" value="four" checked> Four-person table
            </label>
            <label>
                <input type="radio" name="size" value="six"> Six-person table
            </label>
        </fieldset>

        <fieldset id="location">
            <legend>Table Location</legend>
            <label>
                <input type="radio" name="location" value="indoors" checked> Indoors
            </label>
            <label>
                <input type="radio" name="location" value="outdoors"> Outdoors
            </label>
        </fieldset>

        <div class="form-field">
            <button type="submit">Book Table</button>
        </div>
    </form>
</body>
</html>
```

## 7. Notes

* Each radio button group has a unique `name` to ensure only one selection per group
* Using `<label>` allows users to click the text to select the radio button, improving UX
* `checked` sets the default selection for the group

---

# Upgraded Table Booking Form for Little Lemon

## 1. Objective

With the opening of new branches, Little Lemon wants to update its table booking form:

* Replace the old "table size" field with "number of people"
* Remove the old "table location" field
* Allow customers to choose a restaurant branch (expandable in the future)
* Add a booking date field with a calendar interface

---

## 2. Steps to Create the Form

### 2.1 Prepare HTML

* Open `booking.html`
* Remove old fields (table size and table location)

```html
<form action="/submit-booking" method="POST">
    <!-- New fields will be added here -->
</form>
```

### 2.2 Add Booking Date Field

* Use `input type="date"` to open a date picker
* Add a label for clarity

```html
<div class="form-field">
    <label for="booking_date">Booking Date</label>
    <input type="date" id="booking_date" name="booking_date" required>
</div>
```

### 2.3 Add Number of People Field

* Use `input type="range"` to create a slider
* Minimum 1 person, maximum 10 people
* Add a descriptive label

```html
<div class="form-field">
    <label for="booking_people">Number of People</label>
    <input type="range" id="booking_people" name="booking_people" min="1" max="10" value="1">
</div>
```

### 2.4 Add Location Field (Restaurant Branch)

* Use `input type="text"` with a `datalist` for a dropdown suggestion
* Easy to expand with more branches in the future

```html
<div class="form-field">
    <label for="booking_location">Location</label>
    <input type="text" id="booking_location" name="booking_location" list="locations" required>
    <datalist id="locations">
        <option value="Downtown">
        <option value="Uptown">
    </datalist>
</div>
```

### 2.5 Add Submit Button

```html
<div class="form-field">
    <button type="submit">Book Table</button>
</div>
```

---

## 3. Complete HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Little Lemon Booking</title>
    <style>
        .form-field { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, button { padding: 8px; width: 100%; max-width: 300px; }
        button { cursor: pointer; }
    </style>
</head>
<body>
    <h1>Book a Table at Little Lemon</h1>

    <form action="/submit-booking" method="POST">
        <!-- Booking Date -->
        <div class="form-field">
            <label for="booking_date">Booking Date</label>
            <input type="date" id="booking_date" name="booking_date" required>
        </div>

        <!-- Number of People -->
        <div class="form-field">
            <label for="booking_people">Number of People</label>
            <input type="range" id="booking_people" name="booking_people" min="1" max="10" value="1">
        </div>

        <!-- Location -->
        <div class="form-field">
            <label for="booking_location">Location</label>
            <input type="text" id="booking_location" name="booking_location" list="locations" required>
            <datalist id="locations">
                <option value="Downtown">
                <option value="Uptown">
            </datalist>
        </div>

        <!-- Submit Button -->
        <div class="form-field">
            <button type="submit">Book Table</button>
        </div>
    </form>
</body>
</html>
```

---

## 4. Detailed Explanation

| Element              | Function                                                                  |
| -------------------- | ------------------------------------------------------------------------- |
| `type="date"`        | Displays a calendar for selecting a date                                  |
| `type="range"`       | Slider to select the number of people                                     |
| `min / max`          | Limits the number of people (1–10)                                        |
| `type="text" + list` | Input combined with a dropdown suggestion (datalist) for branch selection |
| `<datalist>`         | Contains available options, easily expandable for new branches            |
| `label for`          | Improves accessibility and user experience                                |

---

# Submitting HTML Forms to the Server

## 1. Process When Clicking Submit

* Browser sends an HTTP request to the server
* Server receives data, processes it, and returns a response
* Forms can send data via **GET** or **POST**

---

## 2. GET Method

* Data sent in the URL
* Example: `https://example.com/login?username=john&password=1234`
* Pros: easy to test, quick access
* Cons:

  1. URL length limit (~2,000 characters in browser, ~4,096 on server)
  2. Data visible in browser history
  3. Unsafe for sensitive info like passwords or credit cards

**Example GET Form**

```html
<form action="/login" method="GET">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <input type="submit" value="Login">
</form>
```

---

## 3. POST Method

* Data sent in the **HTTP request body**, not visible in URL
* Safer than GET, especially with HTTPS
* Can handle more complex processing (database checks, business logic)

**Example POST Form**

```html
<form action="/login" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <input type="submit" value="Login">
</form>
```

---

## 4. Comparison of GET vs POST

| Criteria          | GET                         | POST                                   |
| ----------------- | --------------------------- | -------------------------------------- |
| Data location     | In URL                      | In request body                        |
| Security          | Not safe                    | Safer, especially with HTTPS           |
| Data length limit | Limited (~2,000 characters) | Large, practically unlimited           |
| Use case          | Queries, search             | Sensitive info, large form submissions |

---

## 5. Notes for Practice

* Use **GET** for simple queries with no sensitive data
* Use **POST** for login, payment, or sending important data
* Always combine **client-side validation** and **server-side validation** to ensure data integrity and security

---

# Differences in HTML Form Display Across Browsers and CSS Standardization

## 1. Problem: Browser Differences

* The same HTML code may render differently in Chrome, Firefox, Edge, Safari
* Differences in input height, border, color, and size
* Even the same browser on Windows vs. Mac may show variations
* Examples:

  * `input type="text"` border thinner in Safari than Chrome
  * Checkbox color differs across Edge, Chrome, Safari

## 2. Solution: Use CSS for Consistency

* CSS can standardize the appearance of form elements
* Use element selectors or attribute selectors to target specific input types

**Example CSS**

```css
/* Text and email inputs */
input[type="text"],
input[type="email"] {
  width: 300px;
  height: 40px;
  font-size: 16px;
  padding: 8px;
  border: 2px solid #333;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Checkbox */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #007BFF; /* standardize check color across browsers */
}

/* Submit button */
input[type="submit"] {
  background-color: #007BFF;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}
```

## 3. Example HTML with Standardized CSS

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label>
    <input type="checkbox" name="subscribe"> Subscribe to newsletter
  </label>

  <input type="submit" value="Send">
</form>
```

* With CSS, text inputs, email inputs, checkboxes, and submit buttons display consistently across Chrome, Firefox, Edge, Safari
* CSS frameworks like **Bootstrap, Tailwind, or Foundation** can save time and ensure consistency