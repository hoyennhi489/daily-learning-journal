
**Steps 22-24:**

```javascript
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1], testArr2[testArr2.length / 2]]);
console.log(evenListMedian);
```

- `testArr1` and `testArr2` are two arrays containing integers.
- To check for even or odd numbers: Use `% 2 === 0` to check for even, and `% 2 !== 0` to check for odd numbers.

**Step 25:**
Remove all test code from the previous steps.


**Steps 26-27:**

```javascript
const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
}
```

1. **Sorting the array:**  
   - The line uses the `toSorted()` method to create a sorted copy of the array.
   - `array.toSorted()` is a new JavaScript method, similar to `array.sort()`, but instead of modifying the original array, it returns a new sorted array.
   - The comparison function `(a, b) => a - b` sorts the elements in ascending order:
     - If `a - b` returns a negative number, `a` comes before `b`.
     - If `a - b` returns a positive number, `b` comes before `a`.
     - If it returns `0`, the positions of `a` and `b` stay the same.

2. **Checking the array length:**  
   - This checks if the length of the sorted array is even or odd.
   - If the length is even (`sorted.length % 2 === 0`), the median is calculated by averaging the two middle elements. The `getMean()` function is used to calculate the average of these two elements.
   - If the length is odd, the median is the middle element, located at `Math.floor(sorted.length / 2)`.


**Step 28:**

```javascript
const calculate = () => {
  const value = document.querySelector('#numbers').value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector('#mean').textContent = mean;
  document.querySelector('#median').textContent = median;
};
```

**Steps 29-31:**

```javascript
const getMode = (array) => {
  const counts = {};
  return array;
}
```

**Step 32:**

```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  console.log(getMode(numbers));

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
}
```

**Steps 33-34:**

```javascript
const getMode = (array) => {
  const counts = {};
  array.forEach(el => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });
  return counts;
}
```

**Step 35:**

```javascript
const getMode = (array) => {
  const counts = {};
  array.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);
  console.log(counts)
  return counts;
}
```

**Step 36:**

```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
}
```

**Steps 37-43:**

```javascript
const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  )[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );
  return mode.join(", ");
}
```

1. **Frequency count:**
   - Uses the `counts` object to store the frequency of each element in the array.
   - `array.forEach((el) => { ... })` loops through each element of the array.
   - For each element `el`, if `counts[el]` exists, it increments its value by 1. If it doesn't exist, it initializes `counts[el]` to 0, then adds 1.
   - For example, if the array is `[1, 2, 2, 3, 3, 3]`, `counts` will be `{ 1: 1, 2: 2, 3: 3 }`.

2. **Check if all elements have the same frequency:**
   - `Object.values(counts)` returns an array of values (frequencies) from the `counts` object.
   - `new Set(...)` creates a Set from that array. Since a Set only keeps unique values, if all frequencies are the same, the Set will have only one element.
   - If `size === 1`, all elements have the same frequency, and the function returns `null` because there is no mode (all numbers are equally frequent).

3. **Find the most frequent element:**
   - `Object.keys(counts)` returns an array of keys from the `counts` object (i.e., the original elements in the array).
   - `.sort((a, b) => counts[b] - counts[a])` sorts the elements based on their frequency (values in `counts`).
   - The first element after sorting (`[0]`) is the most frequent element.

4. **Filter the modes:**
   - After determining the most frequent element (`highest`), filter the elements that have the same frequency as the highest frequency.
   - `Object.keys(counts).filter(...)` returns an array of all elements with the same frequency.
   - If there are multiple elements with the highest frequency, all of them are returned as modes.

5. **Return the result:**  
   The function returns a string of modes, separated by commas and spaces.


**Step 44:**

```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
}
```

**Step 45:**

```javascript
const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}
```

**Step 46:**

```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
}
```

**Step 47-50:**

```javascript
const getVariance = (array) => {
  const mean = getMean(array);
  const differences = array.map(
    el => el - mean
  );
  const squaredDifferences = differences.map(
    el => el ** 2
  );
  const sumSquaredDifferences = squaredDifferences.reduce(
    (acc, el) => acc + el, 0
  );
}
```

**Step 51:**

Remove the variables `differences`, `squaredDifferences`, and `sumSquaredDifferences` (along with their values).

```javascript
const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {

  }, 0);
}
```

**Steps 52-53:**

```javascript
const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}
```

**Step 54:**

```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
}
```

**Step 55:**

```javascript
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}
```

**Step 56:**

```javascript
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.pow(variance, 1/2);
}
```

**Steps 57-58:**

```javascript
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}
```

**Step 59:**

```javascript
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
}
```
