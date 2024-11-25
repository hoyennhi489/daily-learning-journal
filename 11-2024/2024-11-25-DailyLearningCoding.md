
---

**Learn Recursion by Building a Decimal to Binary Converter**

**Step 1:**  
```javascript
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
```
- The `.getElementById()` method: Used to find and access an HTML element by its ID.
- `<input id="number-input" />`: The field where the user inputs the decimal number.
- `<button id="convert-btn">Convert</button>`: The button to trigger the conversion.
- `<div id="result"></div>`: The area where the result (conversion from decimal to binary) is displayed.

**Step 2-3:**  
```javascript
function checkUserInput() {
 console.log(numberInput.value);
}
```
- A function is used to declare a function.
- The `value` attribute: This contains the current value entered by the user in the `<input>` element.  
  For example, if the user enters the number 42, `numberInput.value` will return "42".
- `console.log(numberInput.value);`: Prints the current value in the input field to the browser’s console.

**Step 4:**  
```javascript
convertBtn.addEventListener("click", checkUserInput);
```
- The `.addEventListener()` method: Used to attach an event listener to an HTML element.

**Step 5-6:**  
```javascript
numberInput.addEventListener("keydown", (e) => {
  console.log(e);
});
```
- The `keydown` event:  
  + Triggered whenever the user presses any key on the keyboard.  
  + We will check which key was pressed (e.g., Enter key) in the following steps.
- Arrow function:  
  Syntax: `() => {}`.
- Attaching the event to `numberInput`: When the `keydown` event occurs, the arrow function is called.
- Parameter `e`:  
  + `e` represents the event object that contains information about the event that just occurred (e.g., type of event, which key was pressed, which element triggered the event).
- Logging the `e` object to the console:  
  + By adding `console.log(e)`, you can check the detailed event information in the browser’s console.

**Step 7-8:** Remove `console.log()` in the callback function.  
```javascript
if(e.key === "Enter") {
    checkUserInput(); // Call the checkUserInput function to log the input field value in the console
}
```
- `e.key` attribute: Returns the name of the key that was pressed (e.g., "Enter", "a", "1").
- `if` statement:  
  + `if (e.key === "Enter")`: Checks if the pressed key is Enter.  
  + If the condition is true, the code inside the `if` block is executed.

**Step 9:**  
```javascript
function checkUserInput() {
  // Check if the input field is empty
  if (numberInput.value === "") {

  }
}
```

**Step 10:**  
```javascript
function checkUserInput() {
  // Check if the input field is falsy (empty, null, undefined, 0, etc.)
  if (!numberInput.value) {

  }
}
```

**Step 11-14:**  
```javascript
if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return; 
  }
  console.log(numberInput.value);
```
- `!numberInput.value`: Checks if the input field value is empty.
- `isNaN(parseInt(numberInput.value))`: Checks if the value of the input field, after being converted to an integer using `parseInt()`, is NaN (Not a Number).
- `parseInt(numberInput.value) < 0`: Checks if the input value is less than 0 (to exclude negative numbers).
- `alert()`: Creates a pop-up dialog with the message you provide.  
  Here, it is used to prompt the user to enter a valid integer greater than or equal to 0.
- `return`: After showing the alert, the function will stop executing with `return` to prevent further processing.

**Step 15:**  
```javascript
const decimalToBinary = (input) => {

};
```

**Step 16:**  
```javascript
decimalToBinary(parseInt(numberInput.value))
```

**Step 17:**  
```javascript
numberInput.value = ""; 
```
- Sets the input field value to an empty string to clear the entered content.

**Step 18:**  
```javascript
function decimalToBinary(decimalNumber) {
  // Temporarily return a binary string
  return "1"; // Binary representation of true is "1"
}
```
- In computer science, these binary digits are called bits, and they are the smallest units of data that computers can process.  
  0 represents false or "off".  
  1 represents true or "on".
- `decimalToBinary(decimalNumber)`: This is the function you will build to convert a decimal number to binary.

**Step 19-20:**  
```javascript
const decimalToBinary = (input) => {
  return "01110110";
};
```

**Step 21-30:**  
```javascript
const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }
};
```
- The `while` loop checks the condition before executing the code block.
- When you set `input = 0` in the loop body, it changes the value of `input` inside the loop, making the condition `input > 0` false in the first iteration.
  This ensures the loop stops after just one iteration without causing an infinite loop.
- `quotient = input / 2`: Creates a `quotient` variable and assigns the result of dividing `input` by 2.
- `Math.floor(input / 2)`: Uses `Math.floor()` to round down the quotient to the nearest integer.
- `input = quotient`: Updates the value of `input` with `quotient` for continued division in the loop.
- `inputs.push(input)`: Adds the value of `input` to the `inputs` array to track the number being divided at each step.

**Step 31-32:**  
```javascript
console.log("Inputs: ", inputs); // Log the inputs array to the console
console.log("Quotients: ", quotients);  // Log the quotients array to the console
console.log("Remainders: ", remainders);  // Log the remainders array to the console
```

**Step 33:**  
```javascript
result.innerText = remainders.reverse().join("");
```

**Step 34-35:**  
```javascript
  if (input === 0) {
    result.innerText = "0";
    return;
  }
```

**Step 36-40:** Remove all code inside the `decimalToBinary` function body.  
```javascript
const decimalToBinary = (input) => {
  let binary = "";
   while (input > 0) {
    binary = input % 2;
    input = Math.floor(input / 2);
  }
  result.innerText = binary;
};
```
