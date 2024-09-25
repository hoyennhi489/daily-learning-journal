**LEARN HTML FORMS BY BUILDING A REGISTRATION FORM.**

**Step 1:**
```html
<!DOCTYPE html>
```

**Step 2:**
```html
<html lang="en"></html>
```

**Step 3:**
```html
<html lang="en">
  <head></head>
  <body></body>
</html>
```

**Step 4:**
```html
<head>
  <title>Registration Form</title>
  <meta charset="utf-8">
</head>
```

**Step 5:**
```html
<head>
  <meta charset="UTF-8">
  <title>Registration Form</title>
  <link rel="stylesheet" href="styles.css">
</head>
```

**Step 6:**
```html
<body>
  <h1>Registration Form</h1>
</body>
```

**Step 7:**
```html
<body>
  <h1>Registration Form</h1>
  <p>Please fill out this form with the required information.</p>
</body>
```

**Step 8:**
> The `vh` unit is used to set sizes based on the viewport height.
```css
body {
  width: 100%;
  height: 100vh;
}
```

**Step 9:**
```css
body {
  width: 100%;
  height: 100vh;
  margin: 0;
}
```

**Step 10:**
```css
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #1b1b32;
  color: #f5f6f7;
}
```

**Step 11:**
> The `<form>` tag is used to create a form.
> 
> The `action` attribute specifies the URL where the form data will be sent after the user clicks the submit button.
```html
<body>
  <h1>Registration Form</h1>
  <p>Please fill out this form with the required information.</p>
  <form action="https://register-demo.freecodecamp.org"></form>
</body>
```

**Step 12:**
> The `method` attribute specifies how to send form data to the URL specified in the `action` attribute.

> The `method="post"` attribute is used to send form data in the body of the HTTP POST request.
```html
<form action='https://register-demo.freecodecamp.org' method="post"></form>
```

**Step 13:** Create 3 `<fieldset>` elements within the `<form>`.

**Step 14:** Create 4 `<label>` elements within a `<fieldset>`.
```html
<form method="post" action='https://register-demo.freecodecamp.org'>
  <fieldset>
    <label></label>
    <label></label>
    <label></label>
    <label></label>
  </fieldset>
  <fieldset></fieldset>
  <fieldset></fieldset>
</form>
```

**Step 15:**
```html
<fieldset>
  <label>Enter Your First Name:</label>
  <label>Enter Your Last Name:</label>
  <label>Enter Your Email:</label>
  <label>Create a New Password:</label>
</fieldset>
```

**Step 16:**
> The `rem` unit stands for `root em` and is based on the font size of the `<html>` tag.
```css
label {
  display: block;
  margin: 0.5rem 0;
}
```
- Use `display: block` to change the label elements from inline to block, allowing each label to display on a separate line.
- `margin: 0.5rem 0` creates space above and below each `<label>` element.

**Step 17:**
```html
<fieldset>
  <label>Enter Your First Name: <input></label>
  <label>Enter Your Last Name: <input></label>
  <label>Enter Your Email: <input></label>
  <label>Create a New Password: <input></label>
</fieldset>
```

**Step 18:**
> The `for` attribute in the `<label>` tag links it to the `<input>` tag with the same `id`, improving accessibility and user experience.
```html
<fieldset>
  <label for="first-name">Enter Your First Name: <input id="first-name" /></label>
  <label for="last-name">Enter Your Last Name: <input id="last-name" /></label>
  <label for="email">Enter Your Email: <input id="email" /></label>
  <label for="new-password">Create a New Password: <input id="new-password" /></label>
</fieldset>
```

**Step 19:**
> Specifying the `type` attribute for `<input>` elements is crucial for the browser to know what kind of data it should expect. If the type is not specified, the browser defaults to `text`.
```html
<fieldset>
  <label for="first-name">Enter Your First Name: <input type="text" id="first-name" /></label>
  <label for="last-name">Enter Your Last Name: <input type="text" id="last-name" /></label>
  <label for="email">Enter Your Email: <input type="email" id="email" /></label>
  <label for="new-password">Create a New Password: <input type="password" id="new-password" /></label>
</fieldset>
```

**Step 20:**
> Adding an `<input>` with `type="submit"` will create a submit button for the form, allowing users to send the data when they click this button.
```html
<fieldset>
  <label for="first-name">Enter Your First Name: <input id="first-name" type="text" /></label>
  <label for="last-name">Enter Your Last Name: <input id="last-name" type="text" /></label>
  <label for="email">Enter Your Email: <input id="email" type="email" /></label>
  <label for="new-password">Create a New Password: <input id="new-password" type="password" /></label>
</fieldset>
<fieldset></fieldset>
<fieldset></fieldset>
<input type="submit" value="Submit">
```
___