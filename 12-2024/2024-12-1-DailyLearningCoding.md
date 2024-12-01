**Learn Basic Algorithmic Thinking by Building a Number Sorter.**

**Step 1:**  
```javascript
const sortButton = document.getElementById("sort");
```

**Step 2-3:**  
```javascript
const sortInputArray = (event) => {
   event.preventDefault();
}
```  
- **`event.preventDefault()`**:  
  - This method is called to prevent the default behavior of an event, in this case, the form submission action triggered when the button is clicked.  
  - The default behavior of a button inside a `<form>` is to submit the form. We want to stop this behavior to handle custom logic instead of refreshing the page.

**Step 4:**  
```javascript
sortButton.addEventListener("click", sortInputArray);
```

**Step 5-10:**  
```javascript
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));
}
```  
- **`document.getElementsByClassName()`**: Returns an `HTMLCollection` containing all elements in the document with the specified class (in this case, `values-dropdown`).  
- **Spread Operator (`...`)**: Used to expand each element of an iterable object (like `HTMLCollection`) into a real array.

**Step 11-14:**  
```javascript
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
}
```  
- **`forEach`**: A method that executes a function on each element of an array.  
- **(num, i):**  
  - `num`: The current element's value.  
  - `i`: The index of the current element.

**Step 15:**  
```javascript
const inputValues = [
  ...document.getElementsByClassName("values-dropdown")
].map((dropdown) => Number(dropdown.value));

updateUI(inputValues);
```

**Step 16-19:**  
```javascript
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.log(array, array[j], array[j + 1]);
    }
  }
}
```

**Step 20:**  
```javascript
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  const sortedValues = bubbleSort(inputValues);

  updateUI(sortedValues);
}
```

**Step 21-24:**  
```javascript
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}
```

**Step 25:**  
```javascript
const selectionSort = (array) => {

}
```

**Step 26:**  
```javascript
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  const sortedValues = selectionSort(inputValues);

  updateUI(sortedValues);
}
```

**Step 27-32:**  
```javascript
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}
```

**Step 33:**  
```javascript
const insertionSort = (array) => {

}
```

**Step 34-40:**  
```javascript
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
}
```

**Step 41:**  
```javascript
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  const sortedValues = inputValues.sort();

  updateUI(sortedValues);
}
```

**Step 42:**  
```html
<option value="10" selected>10</option>
```

**Step 43-44:**  
```javascript
const sortedValues = inputValues.sort((a, b) => {
  return a - b;
});
```

**Step 45:**  
```html
<option value="1" selected>1</option>
```