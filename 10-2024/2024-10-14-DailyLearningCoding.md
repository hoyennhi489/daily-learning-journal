
**Step 31-34:**
```css
span[class~="sr-only"] {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  padding: 0;
  margin: -1px;
}
```
- **clip:** Defines the visible area of the element.
- **clip-path:** Shapes the clip area; here, it is a rectangle (inset).
- **clip: rect(1px, 1px, 1px, 1px);** Crops the element into a small 1px area around it.
- **clip-path: inset(50%);** Hides the element by pushing the visible area inward by 50% from all sides.
- **overflow: hidden;** Hides content that overflows the element's area.
- **white-space: nowrap;** Prevents the text from wrapping.
- **position: absolute;** Positions the element relative to the nearest positioned ancestor.
- **padding: 0;** Removes the padding inside the element.
- **margin: -1px;** Reduces the spacing of the element with surrounding elements by a negative value.

**Step 35:**
```css
h1 {
  max-width: 37.25rem;
  margin: 0 auto;
  padding: 1.5rem 1.25rem;
}
```
- **max-width: 37.25rem;** Limits the maximum width of `h1`.
- **margin: 0 auto;** Centers `h1` horizontally.
- **padding: 1.5rem 1.25rem;** Adds internal spacing to `h1`: 1.5rem top/bottom, 1.25rem left/right.
  + **rem** is a CSS measurement unit, short for "root em."
  + 1 rem equals the default font size of the root element (usually 16px). For example, 1 rem = 16px, 2 rem = 32px.

**Step 36:**
```css
h1 .flex {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
}
```
- **display: flex;** Turns the element into a flex container.
- **flex-direction: column-reverse;** Stacks child elements vertically but in reverse order.
- **gap: 1rem;** Creates a 1 rem gap between child elements.

**Step 37:**
```css
h1 .flex span:first-of-type {
  font-size: 0.7em;
}
```
- **`:first-of-type`** selects the first matching element of its type.
- With reversed span elements, the first selected element may appear as the second element.
- **`span:first-of-type`** selects the first span element in each sibling group.
- **font-size: 0.7em;** Sets the font size of the first span to 70% of the default font size of its parent.

**Step 38:**
```css
h1 .flex span:last-of-type {
  font-size: 1.2em;
}
```
- **`:last-of-type`** selects the last element matching the selector.

**Step 39:**
```css
section {
  max-width: 40rem;
  margin: 0 auto;
  border: 2px solid #d0d0d5;
}
```

**Step 40 - 43:**
```css
#years {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  color: #fff;
  background-color: #0a0a23;
  margin: 0 -2px;
  padding: 0.5rem calc(1.25rem + 2px) 0.5rem 0;
  z-index: 999;
}
```
- **justify-content: flex-end;** Aligns content to the right.
- **position: sticky;** Sets a fixed position when scrolling.
- **top: 0;** Keeps it at the top when scrolling.
- **calc():** A CSS function to calculate values based on other values.
  For example, calculate width using `calc(100% - 20px)` to subtract margin.
- Applied to `#years`:
  + Margin: `0 -2px` (no margin top/bottom, -2px left/right).
  + Padding: `0.5rem calc(1.25rem + 2px) 0.5rem 0` (0.5rem top/bottom, calculated padding right, no padding left).
- **z-index: 999;** Determines the stacking order of the element. A higher value means the element will be on top of elements with lower z-index values. Setting a high z-index ensures that the `#years` element is always visible above other elements on the page, preventing it from being obscured.
  + Adding z-index is crucial for improving the visibility of the element when using `position: sticky`, especially when multiple other elements on the page may overlap.

**Step 44 - 45:**
```css
#years span[class] {
  font-weight: bold;
  width: 4.5rem;
  text-align: right;
}
```
- **span[class]** is an attribute selector in CSS, selecting span elements with a declared class attribute, regardless of the specific class value.
- **font-weight: bold;** Makes the text bold.
- **width: 4.5rem;** Sets the width of the element to 4.5 rem units.
- **text-align: right;** Aligns the text content within the element to the right.

**Step 46:**
```css
span:not(.sr-only) {
  font-weight: normal;
}
```
- Uses **`:not()`** to select elements that do not match the selector. For example, **`span:not(.sr-only)`** will select all span elements that do not have the class `sr-only`, ensuring that previous rules are not overridden.
- **font-weight: normal** means not bold.

**Step 47:**
```css
span[class~="sr-only"] {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  width: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
}
```
- **`!important`** is used to give a CSS property higher priority, regardless of the order or specificity of other rules.
- Adding **`!important`** to the properties in **`span[class~="sr-only"]`** ensures that they are always applied.

**Step 48:**
```css
span {
  font-weight: normal;
}
```

**Step 49 - 50:**
```css
table {
  border-collapse: collapse;
  border: 0;
  width: 100%;
  margin-top: 3rem;
  position: relative;
}
```
- **border-collapse: collapse;** When using this property, all borders between table cells will merge into one. This makes the table look neater as there are no gaps between cells.
- **border: 0;** Completely removes the border of the table, leaving no border around it.
- **position: relative;** Sets the position of the element as relative, meaning it can be moved based on its original position without affecting other elements.

**Step 51 - 52:**
```css
table caption {
  color: #356eaf;
  font-size: 1.3em;
  font-weight: normal;
  position: absolute;
  top: -2.25rem;
  left: 0.5rem;
}
```

**Step 53:**
```css
tbody td {
  min-width: 4rem;
  max-width: 4rem;
  width: 100vw;
}
```
- **vw** is a CSS unit, short for "viewport width." It is based on the width of the viewport (the display area) in the browser.
  + 1 vw is equivalent to 1% of the viewport width.
  + For example, if the viewport width is 1000px, then 1 vw will equal 10px.

**Step 54:**
```css
tbody th {
  width: calc(100% - 12rem);
}
```

**Step 55:**
```css
tr[class="total"] {
  font-weight: bold;
  border-bottom: 4px double #0a0a23;
}
```
- **Selector [attribute="value"]** targets elements with a specific attribute value.

**Step 56:**
```css
tr[class="total"] th {
  text-align: left;
  padding: 0.5rem 0 0.25rem 0.5rem;
}
```

**Step 57:**
```css
tr.total td {
  text-align: right;
  padding: 0 0.25rem; 
}
```
- **`tr.total td`:** Selects all `td` elements within `tr` rows that have the class `total`.

**Step 58:**
```css
tr.total td:nth-of-type(3) {
  padding-right: 0.5rem;
}
```
- **`tr.total td:nth-of-type(3)`:** Selects the third `td` cell in each `tr` row with the class `total`.
- **`padding-right: 0.5rem;`:** Sets the padding on the right side of the third data cell.

**Step 59:**
```css
tr.total:hover {
  background-color: #99c9ff;
}
```
- **`tr.total:hover`:** Selects the `tr` row with the class `total` when the user hovers over it.

**Step 60:**
```css
td[class="current"] {
  font-style: italic;
}
```

**Step 61:**
```css
tr.data {
  background-image: linear-gradient(to bottom, #dfdfe2 1.845rem, white 1.845rem); 
}
```

**Step 62:**
```css
tr.data th {
  text-align: left;
  padding-top: 0.3rem;
  padding-left: 0.5rem;
}
```

**Step 63:**
```css
tr.data th .description {
  display: block;
  font-style: italic;
  font-weight: normal;
  padding: 1rem 0 0.75rem;
  margin-right: -13.5rem;
}
```

**Step 64:** Remove the span rule.

**Step 65:**
```css
tr.data td {
  text-align: right;
  padding: 0.3rem 0.25rem 0;
  vertical-align: top;
}
```
- **`text-align: right;`:** Aligns the content in the cell to the right.
- **`padding: 0.3rem 0.25rem 0;`:** Sets the padding for the data cell, with 0.3rem on the top, 0.25rem on the left and right, and 0 on the bottom.
- **`vertical-align: top;`:** Aligns the content in the data cell to the top.

**Step 66:**
```css
tr.data td:last-of-type {
  padding-right: 0.5rem;
}
```