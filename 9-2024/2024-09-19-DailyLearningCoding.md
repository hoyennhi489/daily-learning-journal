
Day 6 I learned about the next part of Freecodecamp: **"Learn Basic CSS by Building a Cafe Menu."**

`CSS` is a language used to format HTML documents. It describes how HTML elements should be displayed on the screen.

**Step 1:**  
>Declare `DOCTYPE` to inform the browser of the HTML version of the document. 

>The `html` element represents the root element that contains all other elements.

*Result:*  
```html
<!DOCTYPE html>
<html lang="en"></html>
```

**Step 2:**  
>The `<title>` element determines what the browser displays on the title bar. 

>The `<head>` element contains metadata about the document, such as the title and links to files.

*Result:*  
```html
<head>
  <title>Cafe Menu</title>
</head>
```

**Step 3:**  
>The title is one of the elements that provides additional information not displayed on the webpage but is useful for search engines or how the page is displayed.

*Result:*  
```html
<head>
  <meta charset="utf-8">
  <title>Cafe Menu</title>
</head>
```

**Step 4:**  
> The `<body>` element contains all the content displayed on the webpage, such as text, images, and links. It is located below the `<head>` element.

*Result:*  
```html
<body></body>
```

**Step 5:**  
> The `<main>` element contains the main content of the page, helping to distinguish important content from secondary parts.

*Result:*  
```html
<main></main>
```

**Step 6:**  
Add `<h1>`.

*Result:*  
```html
<main>
  <h1>CAMPER CAFE</h1>
</main>
```

**Step 7:**  
Add `<p>` under `<h1>`.

*Result:*  
```html
<main>
  <h1>CAMPER CAFE</h1>
  <p>Est. 2020</p>
</main>
```

**Step 8:**  
Add `<section>`.

*Result:*  
```html
<section></section>
```

**Step 9:**  
Add `<h2>`.

*Result:*  
```html
<section>
  <h2>Coffee</h2>
</section>
```

**Step 10:**  
> The `<style>` element contains CSS to format and style HTML content. It is placed inside the `<head>` element.

*Result:*  
```html
<head>
  <meta charset="utf-8" />
  <title>Cafe Menu</title>
  <style></style>
</head>
```

**Step 11:**  
> You can add styles to an element by specifying them in the `<style>` element and setting properties for it as follows:

```css
element {
  property: value;
}
```

> `text-align` is a CSS property used to align text or content within an element. 

>When set to `center`, the content will be centered horizontally within the containing element.

*Result:*  
```html
<style>
  h1 {
    text-align: center;
  }
</style>
```

**Step 12:**  
*Result:*  
```html
<style>
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
  }
</style>
```

**Step 13:**  
> You can apply the same group of styles to multiple elements by creating a list of selectors. Each selector is separated by a comma as follows:  

```css
selector1, selector2 {
  property: value;
}
```

*Result:*  
```html
<style>
  h1, h2, p {
    text-align: center;
  }
</style>
```

**Step 14:**  
> Note:
- Move CSS styles from the `<style>` tag to a separate CSS file.
- Remove `<style>` tags when moving to a CSS file.
> External CSS File: Place all styles in a separate file for easier management and application across multiple pages or elements in the website.

*Result:*  
```css
h1, h2, p {
  text-align: center;
}
```

**Step 15:**  
> With CSS already in the `styles.css` file above, remove the `<style>` element and all its content.

**Step 16:**  
> External CSS File: This is a file with a `.css` extension containing formatting rules to change the appearance of the webpage. It is usually separated from the HTML file to help organize the code more clearly and maintain it more easily.

> `<link>` tag: Used to link external files, such as CSS files, to the HTML document. It is typically placed inside the `<head>` element of the HTML page.  

> `rel` attribute: Short for "relationship". When linking a CSS file, the value of this attribute should be "stylesheet" to inform the browser that this is a CSS file to use.  

> `href` attribute: This is where you specify the path to the CSS file.

*Result:*  
```html
<link rel="stylesheet" href="styles.css">
```

**Step 17:**  
> To make the webpage look similar on mobile devices as on desktops or laptops, you need to add a meta element with a special content attribute.  

Code: 
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```  

>The `<meta>` tag: Used to provide metadata about the HTML document, such as page description, keywords, or viewport settings on different devices.  

>`name="viewport"` attribute: Sets the viewport for the device, particularly important when designing a mobile-friendly website.  

>`content` attribute:
- `width=device-width`: Sets the width of the webpage to the width of the device, ensuring that the page will not be larger or smaller than the screen size.
- `initial-scale=1.0`: Sets the initial zoom level to 1, meaning the page will be displayed at standard zoom (no zooming in or out).

**Step 18:**  
`body`: This element wraps all the content of the webpage. Changing the `background-color` property for this element changes the background color of the entire page.

`background-color: brown;`: This is a CSS property that changes the background color of the specified element. In this case, the background color of the page will change to brown.

*Result:*  
```css
h1, h2, p {
  text-align: center;
}
body {
  background-color: brown;
}
```

**Step 19:**  
Change the background color of the `body` element to `burlywood` to keep some color but make it easier to read. 

> `burlywood`: This is a light color, similar to light wood, providing a more readable background while still keeping some color.

*Result:*  
```css
body {
  background-color: burlywood;
}
```

**Step 20:**  
> `<div>` is often used to create complex layouts, such as a container block for different sections of a webpage.  

> `id="menu"` attribute: The `id` attribute is unique for each element in the HTML document, allowing you to apply CSS styles or JavaScript to this element. Here, `id="menu"` helps you easily style or interact with this `<div>` block.

*Result:*  
```html
<body>
  <div id="menu">
    <main>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
      <section>
        <h2>Coffee</h2>
      </section>
    </main>
  </div>
</body>
```
