**Step 21:**
>The `<li>` tag is used to create an item in an ordered or unordered list.

*For example:*

    <ul>
    <li>milk</li>
    <li>cheese</li>
    </ul>

*Step 21 Result:*

    <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
    </ul>

**Step 22:**
>The `src` attribute (short for "source") in the `<img>` tag is used to specify the path to the image you want to display on your web page.

>The alt attribute in the `<img>` tag is used to provide alternative text for the image.

    <img src="image-url.jpg" alt="Image description">

*Step 22 Result:*

    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"alt="A slice of lasagna on a plate.">


<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">

**Step 23:**
>The `<figure>` tag represents standalone content and allows you to associate an image with a caption.

*Step 23 Result:*

    <figure>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
    </figure>

**Step 24:**
>The `<figcaption>` tag is used to add a caption that describes the image contained within the `<figure>` tag.

*For example:*

    <figure>
      <img src="image.jpg" alt="Image description">
      <figcaption>A cute cat</figcaption>
    </figure>

*Result of step 24:*

    <figure>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
      <figcaption>Cats love lasagna.</figcaption>
    </figure>

<figure>
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
<figcaption>Cats love lasagna.</figcaption>
</figure>

**Step 25:**
>The `<em>` tag is used to emphasize a specific word or phrase.

*Step 25 Result:*

    <figcaption>Cats <em>love</em> lasagna.</figcaption>

<figcaption>Cats <em>love</em> lasagna.</figcaption>

**Step 26:** Add `<h3>`

*Result:*

    <h3>Top 3 things cats hate:</h3>

**Step 27:**
>`<ol>` stands for "ordered list" in HTML. When using this tag, the items in the list will be automatically numbered in order.

*Step 27 Result:*

    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>

<ol>
<li>flea treatment</li>
<li>thunder</li>
<li>other cats</li>
</ol>

**Step 28:** Add `<figure>` tag.

*Step 28 Result:*

    <figure></figure>

**Step 29:** Add `<img>` tag with src attribute.

*Step 29 Result:*

    <figure>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg">
    </figure>

<figure>
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg">
</figure>

**Step 30:** add `alt` attribute in the above `<img>` tag.

*Step 30 Result:*

    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"alt="Five cats looking around a field.">

<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">

**Step 31:** Add the `<figcaption>` tag.

*Step 31 Result:*

    <figure>
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
      <figcaption>Cats hate other cats.</figcaption>
    </figure>

<figure>
<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">
<figcaption>Cats hate other cats.</figcaption>
</figure>

**Step 32:**
>The `<strong>` tag is used to highlight a part of text because it is very important. Usually the text in the `<strong>` tag will be displayed in bold for easy recognition.

*Result:*

    <figcaption>Cats <strong>hate</strong> other cats.</figcaption>

<figcaption>Cats <strong>hate</strong> other cats.</figcaption>

**Step 33-34:** add `<section>` and `<h2>`.

*Result:*

    <section>
      <h2>Cat Form</h2>
    </section>

**Step 35:**
>The `<form>` tag is used to get information from the user such as name, email, and other details.

*Step 35 result:*

    <form></form>

**Step 36:**
>The `action` attribute specifies where the form data should be submitted.

*Here is an example of a `<form>` tag with the `action` attribute:*

    <form action="/submit-url"></form>

*Step 36 result:*

    <form action="https://freecatphotoapp.com/submit-cat-photo"></form>


*Step 37:*
>The `<input>` tag allows you to collect data from a web form in a variety of ways.

>Like the `<img>` tag, the `<input>` tag is a self-closing tag and does not require a closing tag.

*Step 37 Result:*

    <input>

**Step 38:**
>Use the `type` attribute to create different types of input fields such as passwords, reset buttons, or file selector controls.

>To create a text field, use the `type` attribute with the value `text` in the `<input>` tag.

*Step 38 Result:*

    <input type="text">

**Step 39:**
>`Name` Attribute: Names the input fields in the form so that data can be sent and received properly.

*For example:*

    <input type="text" name="name">

*Step 39 Result:*

    <input type="text"name="catphotourl">

**Step 40:**
>`Placeholder` text is used to provide hints about the type of information to enter in the input field.

*Here is an example of an `<input>` tag with the placeholder attribute set to "Ex. Jane Doe":*

    <input type="text" placeholder="Ex. Jane Doe">

*Result of step 40:*

    <input type="text" placeholder="cat photo URL" name="catphotourl">

<input type="text" placeholder="cat photo URL" name="catphotourl">