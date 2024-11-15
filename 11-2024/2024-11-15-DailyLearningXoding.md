
**Step 71-72:**
```javascript
function calculateCalories(e) {
  e.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
  const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
  const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
  const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
  const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
}
```

**Step 73-75:**
```javascript
const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
```
- `getCaloriesFromInputs(breakfastNumberInputs)`: The `getCaloriesFromInputs` function will receive the list of input fields from `breakfastNumberInputs` and return the total calories from all valid values.
- `breakfastCalories`: This variable stores the total calories calculated from the input fields in the `#breakfast` section.

**Step 76:**
```javascript
const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
```

**Step 77:**
```javascript
if (isError) {
    return;
}
```
- `if (isError)`: Checks if the global error flag `isError` is `true`.
- `return`: Ends the function execution immediately if an error is found. This prevents further processing when the data is invalid.

**Step 78: Calculate total consumed calories**
```javascript
const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
```

**Step 79: Calculate remaining calories**
```javascript
const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
```

**Step 80: Determine calorie surplus or deficit**
```javascript
const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";
```

**Step 81:**
```javascript
output.innerHTML = ``;
```

**Step 82:**
```javascript
output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}"></span>
  `;
```

**Step 83:**
```javascript
output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${remainingCalories} Calorie ${surplusOrDeficit}</span>
  `;
```

**Step 84-87:**
```javascript
output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;
```

**Step 88:**
```javascript
output.classList.remove('hide');
```

**Step 89:**
```javascript
calorieCounter.addEventListener("submit", calculateCalories);
```

**Step 90-96:**
```javascript
function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  for (const container of inputContainers) {
    container.innerHTML = '';
  }

  budgetNumberInput.value = '';
  output.innerText = '';
  output.classList.add('hide');
}
```

**Step 97:**
```javascript
// Get reference to the clearButton
const clearButton = document.getElementById('clearButton');

// Add event listener for the button
clearButton.addEventListener('click', clearForm);
```