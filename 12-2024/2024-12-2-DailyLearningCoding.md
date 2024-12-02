
**Learn Advanced Array Methods by Building a Statistics Calculator.**

Step 1-8:
```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
}
```

Step 9-14:
```javascript
const getMean = (array) => {
  const sum = array.reduce((acc, el) => acc + el, 0);
  const mean = sum / array.length;
  return mean;
}
```

Step 15: Optimize the getMean function:
```javascript
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
```
- `array.reduce((acc, el) => acc + el, 0)`:
  + `acc`: Accumulator value, starting from 0.
  + `el`: Current element in the array.
  + Each element in the array is added to `acc`.
- The result of `.reduce()` (the sum of the elements) is divided by `array.length` to get the average.

Step 16-17:
```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);

  document.querySelector("#mean").textContent = mean;
}
```
- `.querySelector`: Finds an HTML element using a CSS selector, in this case, `#mean`.
- `.textContent`: Sets the text content to display in the HTML element.

Step 18:
```html
<form onsubmit="calculate(); return false;">
```

Step 19-21:
```javascript
const getMedian = (array) => {
  const sorted = array.sort((a, b) => a - b);
}
```