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
___