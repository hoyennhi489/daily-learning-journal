Day 3 I learned at Freecodecamp.

The first part I learned was **Learn HTML by Building a Cat Photo App.**

**Step 1:**
I learned about "Closing Tags" and "Opening Tags" in HTML
The first element I learned was the h1 element.

>The h1 element is a heading element and is used for the main heading of a web page.

***For example:***
`<h1>main heading</h1>`

***Result step 1:***
`<h1>CatPhotoApp</h1>`
<h1>CatPhotoApp</h1>

**Step2:**
>In HTML, there are a total of 6 heading tags from h1 to h6.

>The h1 tag represents the most important heading and the h6 tag is the smallest heading.

***Example Code:***

    <h1>most important heading element</h1>

    <h2>second most important heading element</h2>

    <h3>third most important heading element</h3>

    <h4>fourth most important heading element</h4>

    <h5>fifth most important heading element</h5>

    <h6>least important heading element</h6>

***Result step 2:***

    <h1>CatPhotoApp</h1>

    <h2>Cat Photos</h2>

<h1>CatPhotoApp</h1>
<h2>Cat Photos</h2>


**Step 3:**
>The `<p>` tag is used to define a paragraph of text.

***Result step 3:***

`<p>See more cat photos in our gallery.</p>`

**Step 4:**
>In HTML, a comment is a way to insert notes into code without affecting the display of the web page and is often used to explain, highlight or remind parts of the code.

    <!-- This is a comment in HTML -->

***Step 4 result:***

`<!-- TODO: Add link to cat photos -->`

***Step 5:***
>The `<main>` tag helps mark up the main content of the web page.

    <main>
    <h1>The main title of the page</h1>
    <p>A paragraph explaining the content of the page.</p>
    </main>

***Step 5 result:***

    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more cat photos in our gallery.</p>
    </main>

**Step 6:**
>Indenting in HTML is adding space before nested HTML tags to make the code easier to read and organize. Typically, each nesting is indented by two spaces or one tab.

>The `<h1>` and `<p>` tags are indented two spaces from the `<main>` tag.

**Purpose of indentation:** Makes HTML code neater and clearer and makes it easier for you to work with your team.

***Result step 6:***

    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more cat photos in our gallery.</p>
    </main>

**Step 7:**
>Add images to your website using the `<img>` element.

>The `<img>` element has an opening tag without a closing tag.

    <img>

**Step 8:**
>**Src attribute:** Used in the <img> tag to specify the path to the image you want to display.

***Step 8 result:***

    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg">

<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg">

**Step 9:**
>All `<img>` elements should have an alt attribute.

>**alt:** A brief description of the image.

***Step 9 result:***

    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back">

<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back">


**Step 10 - 11:**
>The `<a>` element is used to create links to other web pages or other parts of the same page.

***Syntax:***

    <a href="URL">Link Text</a>

***Where:***

>***href:*** This attribute specifies the URL address that the link will lead to.

>***Link Text:*** This is the text or content that users can click on to open the link.

***Result of step 10-11:***

    <a href="https://freecatphotoapp.com">link to cat pictures</a>

<a href="https://freecatphotoapp.com">link to cat pictures</a>

**Step 12:**
>The `<a>` tag is used to create a link, the href attribute contains the URL.

>You can nest the `<a>` tag in the `<p>` tag to link a piece of text.

***Result of step 12:***

`<p>See more <a href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>`

<p>See more <a href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>

**Step 14:**

>The `target="_blank"` attribute is used to open the link in a new tab or window.

*The basic syntax of the `<a>` tag with the target attribute:*

    <a href="URL" target="_blank">Text</a>

-> This opens the link without leaving the current page.

***Step 14 Result:***

    <p>See more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a> in our gallery.</p>

<p>See more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a> in our gallery.</p>

***Step 15:***

>You can turn any content into a link, not just text, by surrounding it with the `<a>` tag.

*For example, to turn an image into a link:*

    <a href="URL"><img src="image-link.jpg" alt="Description"></a>

***Step 15 Result:***

    <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

<a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

**Step 16:**
>The `<section>` tag is used to group related content within a document.

***Example:***

    <section>
      <h2>Section Title</h2>
      <p>Content of this section...</p>
    </section>

>The `<section>` tag helps make the structure of the webpage clearer and easier to adjust when you need to change or add new content.

***Result of Step 16:***

    <main>
     <h1>CatPhotoApp</h1>
     <section>
       <h2>Cat Photos</h2>
       <!-- TODO: Add link to cat photos -->
       <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
       <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
       </a>
     </section>
    </main>

<main>
  <h1>CatPhotoApp</h1>
  <section>
    <h2>Cat Photos</h2>
    <!-- TODO: Add link to cat photos -->
    <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
    <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
    </a>
  </section>
</main>

**Step 17:** Add New `<Section>`.

***Result:***

    <section></section>

**Step 18:** Add `<h2>` Tag.

***Result:***

    <section>
      <h2>Cat Lists</h2>
    </section>

**Step 19:** Add `<h3>` Tag.

***Result:***

    <section>
      <h2>Cat Lists</h2>
      <h3>Things cats love:</h3>
    </section>

**Step 20:**
>To create an unordered list, use the `<ul>` tag.

***Result:***

    <ul></ul>
 ___
