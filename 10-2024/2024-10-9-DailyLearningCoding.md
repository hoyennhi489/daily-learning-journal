Step 22:
```html
<div class="info">
  <label for="student-name">Name:</label>
  <input type="text" name="student-name" id="student-name" />
</div>
```

Step 23-25:
```html
<section role="region" aria-labelledby="html-questions">
  <h2 id="html-questions">HTML</h2>
  <div class="question-block">
    <h3><span class="sr-only">Question</span>1</h3>
    <fieldset class="question"></fieldset>
  </div>
  <div class="question-block">
    <h3><span class="sr-only">Question</span>2</h3>
    <fieldset class="question"></fieldset>
  </div>
</section>
```
- The `sr-only` class (screen reader only) will make the content visible only to screen readers but not displayed on the regular user interface.

Step 26:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```
- The above is a common pattern to hide text for screen readers without displaying it on the interface.
- The necessary CSS properties will completely hide the text from the user interface while still being accessible to screen readers.

Step 27:
```html
<section role="region" aria-labelledby="html-questions">
  <h2 id="html-questions">HTML</h2>
  <div class="question-block">
    <h3><span class="sr-only"></span>1</h3>
    <fieldset class="question">
      <legend></legend>
      <ul>
        <li>True</li>
        <li>False</li>
      </ul>
    </fieldset>
  </div>
  <div class="question-block">
    <h3><span class="sr-only"></span>2</h3>
    <fieldset class="question">
      <legend></legend>
      <ul>
        <li>True</li>
        <li>False</li>
      </ul>
    </fieldset>
  </div>
</section>
```

Step 28-29:
```html
</section>
<section role="region" aria-labelledby="html-questions">
  <h2 id="html-questions">HTML</h2>
  <div class="question-block">
    <h3><span class="sr-only">Question</span>1</h3>
    <fieldset class="question" name="html-question-one">
      <legend>
        The legend element represents a caption for the content of its parent fieldset element
      </legend>
      <ul class="answers-list">
        <li>
          <label>
            <input type="radio">
          </label>
        </li>
        <li>
          <label>
            <input type="radio">
          </label>
        </li>
      </ul>
    </fieldset>
  </div>
  <div class="question-block">
    <h3><span class="sr-only">Question</span>2</h3>
    <fieldset class="question" name="html-question-two">
      <legend>
        A label element nesting an input element is required to have a for attribute with the same value as the input's id
      </legend>
      <ul class="answers-list">
        <li>
          <label>
            <input type="radio">
          </label>
        </li>
        <li>
          <label>
            <input type="radio">
          </label>
        </li>
      </ul>
    </fieldset>
  </div>
</section>
```

Step 30-33:
```html
<ul class="answers-list">
  <li>
    <label for="q1-a1">
      <input type="radio" id="q1-a1" name="q1" value="true" />
      True
    </label>
  </li>
  <li>
    <label for="q1-a2">
      <input type="radio" id="q1-a2" name="q1" value="false" />
      False
    </label>
  </li>
</ul>
</fieldset>
</div>
<div class="question-block">
  <h3><span class="sr-only">Question</span>2</h3>
  <fieldset class="question" name="html-question-two">
    <legend>
      A label element nesting an input element is required to have a
      for attribute with the same value as the input's id
    </legend>
    <ul class="answers-list">
      <li>
        <label for="q2-a1">
          <input type="radio" id="q2-a1" name="q2" value="true" />
          True
        </label>
      </li>
      <li>
        <label for="q2-a2">
          <input type="radio" id="q2-a2" name="q2" value="false" />
          False
        </label>
      </li>
    </ul>
```

Step 34:
```css
h3::before {
  content: "Question #";
}
```
- The above CSS rule will add the content "Question #" before each `<h3>` element in your document.
- Using the pseudo-element `::before` allows you to add content before an element without changing the HTML.

Step 35-38:
```html
<section role="region" aria-labelledby="css-questions">
  <h2 id="css-questions">CSS</h2>
  <div class="formrow">
    <div class="question-block">
      <label for="selector">Can the CSS margin property accept negative values?</label>
    </div>
    <div class="answer">
      <select name="selector" id="selector" required>
        <option value="">Select an option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>
    <div class="question-block">
      <label>Do you have any questions:</label>
    </div>
    <div class="answer">
    </div>
  </div>
</section>
```
