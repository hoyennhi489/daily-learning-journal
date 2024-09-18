
**Step 41:**
> The `required` attribute in HTML forces users to fill out a field before they can submit the form. If the field is left empty, the form will not be submitted.

*Result:*
```html
<input type="text" name="catphotourl" placeholder="cat photo URL" required>
```

**Step 42:**
> The `button` tag is used to create a clickable button.

*Result:*
```html
<button>Submit</button>
```

**Step 43:**
> The default behavior of a button is to submit the form, but to make it clear and avoid confusion, always add the `type="submit"` attribute to the button.

*Result:*
```html
<button type="submit">Submit</button>
```

**Step 44:**
> A `radio` button allows users to select one of several options.

*Result:*

```html
<input type="radio"> Indoor
```

**Step 45:**
> The `label` tag is used to associate text with an input element.

*Here is an example of a label tag with a radio button:*
```html
<label><input type="radio"> cat</label>
```
*Result:*
```html
<label><input type="radio"> Indoor</label>
```

**Step 46:**
> The `id` attribute is used to identify specific HTML elements. Each `id` attribute's value must be unique on the entire page.

*Example:*
```html
<input id="email">
```
*Result:*
```html
<label><input type="radio" id="indoor"> Indoor</label>
```

**Step 47:**

*Result:*
```html
<label><input id="outdoor" type="radio"> Outdoor</label>
```

**Step 48:**
> Both `radio` buttons can be selected at the same time. To ensure selecting one `radio` button automatically deselects the other, both buttons must have the `name` attribute with the same value.

*Example:*
```html
<input type="radio" name="meal"> Breakfast
<input type="radio" name="meal"> Lunch
```
*Result:*
```html
<label><input name="indoor-outdoor" id="indoor" type="radio"> Indoor</label>
<label><input name="indoor-outdoor" id="outdoor" type="radio"> Outdoor</label>
```

**Step 49:**
> To ensure the form data is correct when submitted, add a `value` attribute to each radio button. Set the `value` attribute to be the same as the `id` attribute of that button.

*Result:*
```html
<label><input id="indoor" value="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
<label><input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
```

**Step 50:**
> The `fieldset` tag is used to group related input fields and labels together in a web form.

*Result:*
```html
<fieldset>     
  <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
  <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
</fieldset>
```

**Step 51:**
> The `legend` tag acts as a caption for the content within the `fieldset` tag. It provides context to the user about what they should enter in that part of the form.

*Result:*
```html
<fieldset>
  <legend>Is your cat an indoor or outdoor cat?</legend>
  <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
  <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
</fieldset>
```

**Step 52:** Add another `fieldset` tag.

*Result:*
```html
<fieldset></fieldset>
```

**Step 53:** Add a `legend` tag inside the `fieldset`.

*Result:*
```html
<legend>What's your cat's personality?</legend>
```

**Step 54:**
> A checkbox allows users to select multiple options at once. Use the `type="checkbox"` attribute to create a checkbox in the form.

*Result:*
```html
<legend>What's your cat's personality?</legend>
<input type="checkbox"> Loving
```

**Step 55:** Add the `id` attribute.

*Result:*
```html
<input id="loving" type="checkbox"> Loving
```

**Step 56:**
> Another way to associate text with an input element is by placing the text inside a `label` tag and adding a `for` attribute with the same value as the input element's `id` attribute.

*Example:*
```html
<input id="breakfast" type="radio" name="meal" value="breakfast">
```
Example of a `label` tag associated with this input element:
```html
<label for="breakfast">Breakfast</label>
```
*Result:*
```html
<input id="loving" type="checkbox">
<label for="loving">Loving</label>
```

**Step 57:**
> Adding the `name` attribute to checkboxes helps the server process the form data more efficiently, especially when there are multiple checkboxes.

*Result:*
```html
<input name="personality" id="loving" type="checkbox"> <label for="loving">Loving</label>
```

**Step 58:**

*Result:*
```html
<input id="lazy" type="checkbox" name="personality"> <label for="lazy">Lazy</label>
```

**Step 59:**

*Result:*
```html
<input id="energetic" type="checkbox" name="personality"> <label for="energetic">Energetic</label>
```

**Step 60:**
> Similar to radio buttons, form data for selected checkboxes consists of name/value pairs. Adding a `value` attribute to checkboxes and setting it to the same value as the `id` ensures clear and easy-to-process form data.

*Result*
```html
<fieldset>
  <legend>What's your cat's personality?</legend>
  <input id="loving" value="loving" type="checkbox" name="personality"> <label for="loving">Loving</label>
  <input id="lazy" value="lazy" type="checkbox" name="personality"> <label for="lazy">Lazy</label>
  <input id="energetic" value="energetic" type="checkbox" name="personality"> <label for="energetic">Energetic</label>
</fieldset>
```

**Step 61:**
> The `checked` attribute is used to pre-select a checkbox or radio button when the web page is loaded.

*Result:*
```html
<fieldset>
  <legend>Is your cat an indoor or outdoor cat?</legend>
  <label><input checked id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
  <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
</fieldset>
<fieldset>
  <legend>What's your cat's personality?</legend>
  <input checked id="loving" type="checkbox" name="personality" value="loving"> <label for="loving">Loving</label>
  <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
  <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic">Energetic</label>
</fieldset>
```

**Step 62:**
> Add a `<footer>` element after `<main>` to define the footer with information such as author, copyright, and contact.

*Result:*
```html
</main>
<footer></footer>
</body>
```

**Step 63:** Add a `<p>` element inside the `<footer>` element.

*Result:*
```html
<footer>
  <p>No Copyright - freeCodeCamp.org</p>
</footer>
```

**Step 64:**

*Result:*
```html
<p>No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a></p>
```

**Step 65:**
> The `<head>` element is used to contain metadata about the document, such as the title, links to stylesheet files, and scripts.

> Metadata is information about the page but is not directly displayed on the page.

*Result:*
```html
<html>
  <head></head>
  <body>
```

**Step 66:**
> The `<title>` element determines what the browser displays on the title bar or tab for the page.

*Result:*
```html
<head>
  <title>CatPhotoApp</title>
</head>
```

**Step 67:**
> Add the `lang` attribute to the opening `<html>` tag to specify the language of the page.

> The value `en` in the `lang` attribute of the `<html>` tag represents the English language.

*Result:*
```html
<html lang="en">
```

**Step 68:**
> All web pages should start with `<!DOCTYPE html>`.

> `<!DOCTYPE html>` informs the browser that the document is an HTML5 document, the latest version of HTML.

*Result:*
```html
<!DOCTYPE html>
```

**Step 69:**
> The `<meta>` element helps set the behavior of the browser.

> The `<meta>` element is a self-closing element.

> The `charset` attribute in the `<meta>` tag specifies the character encoding that the browser will use to display text on the web page.

> `utf-8` is one of the most common character encodings, supporting most languages in the world, including special characters.

*Example:*
```html
<meta attribute="value">
```
*Result:*
```html
<head>
  <meta charset="utf-8">
  <title>CatPhotoApp</title>
</head>
```
___
*I've completed the first section of Freecodecamp. Here are the results I've learned after the 69 steps I've worked through in the past few days:*


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>CatPhotoApp</title>
  </head>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
          <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
        </figure>
      </section>
      <section>
        <h2>Cat Form</h2>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
          <fieldset>
            <legend>Is your cat an indoor or outdoor cat?</legend>
            <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
            <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
          </fieldset>
          <fieldset>
            <legend>What's your cat's personality?</legend>
            <input id="loving" type="checkbox" name="personality" value="loving" checked> <label for="loving">Loving</label>
            <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
            <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic">Energetic</label>
          </fieldset>
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
    <footer>
      <p>
        No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
      </p>
    </footer>
  </body>
</html>