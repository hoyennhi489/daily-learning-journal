### **Step 71-73**  
```javascript
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};
```

### **Step 74**  
```javascript
const showAnimation = () => {};
```

### **Step 75-76**  
```javascript
if (parseInt(numberInput.value) === 5) {
    showAnimation();
    return;
}
```

### **Step 77**  
```javascript
const inputInt = parseInt(numberInput.value);
```

### **Step 78**  
```javascript
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
```

### **Step 80-82**  
```javascript
const showAnimation = () => {
  setTimeout(() => {
    console.log("free");
  }, 500);
  setTimeout(() => {
    console.log("Code");
  }, 1000);
  setTimeout(() => {
    console.log("Camp");
  }, 1500);
};
```

### **Step 83-86**  
```javascript
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    addElDelay: 1500
  },
  {
    inputVal: 1,
    addElDelay: 2000
  }
];
```

### **Step 87**  
```javascript
const animationContainer = document.getElementById("animation-container");
```

### **Step 88**  
```javascript
// Clear out your showAnimation() function by removing all of your setTimeout() calls.
```

### **Step 89-96**  
```javascript
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);
  });
};
```

### **Step 97-99**  
```javascript
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
```

### **Step 100**  
```javascript
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  }
```

### **Step 101**  
```javascript
  {
    inputVal: 5,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  }
```

### **Step 102-104**  
```javascript
   setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);
```

### **Step 105-106**  
```javascript
   setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
```

### **Step 107-108**  
```javascript
 setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
```