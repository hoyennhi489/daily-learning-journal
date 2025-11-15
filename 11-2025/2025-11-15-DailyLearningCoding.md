## **EXPLANATION OF FOR LOOPS IN JAVASCRIPT**

When you need to count a sequence of numbers like 1, 2, 3 and then print “Go”, you could manually write each line: `console.log(1)`, `console.log(2)`, and so on. But this becomes very time-consuming if you need to count to 10, 100, or even more. Repeating lines like that is not efficient, so JavaScript provides a more powerful tool: the **for loop**.

---

### **1. What is a for loop?**

A for loop allows you to repeat a block of code multiple times without having to type it over and over. The structure of a for loop has three main parts inside the parentheses:

```js
for (initialization; condition; increment) {
  // repeated code
}
```

---

### **2. The three parts of a for loop**

#### ▶ **Initialization**

This is where you create the counter variable. The counter is often named `i`, but you can use any name.

Example:
`let i = 1;` means you start counting from 1.

#### ▶ **Condition**

The loop runs only when this condition is true. When it becomes false, the loop stops.

Example:
`i <= 3` means the loop continues as long as `i` is less than or equal to 3.

#### ▶ **Increment / Decrement**

After each loop cycle, the value of `i` must change.

* Increase: `i++`
* Decrease: `i--`

If you forget to update the counter, the loop may run forever.

---

### **3. Example: Counting from 1 to 3**

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

console.log("Go");
```

This prints 1, 2, 3, and finally “Go”, using just a few lines of code.

---

### **4. How does the loop end?**

The loop stops when the condition becomes false.

In `i <= 3`:

* i = 1 → true
* i = 2 → true
* i = 3 → true
* i = 4 → false → loop ends

After that, the program continues with the code below the loop.

---

### **5. Counting backwards with a for loop**

You can count down by decreasing the counter:

```js
for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log("Happy New Year!");
```

Here, the loop runs from 10 down to 1. When `i` becomes 0, the condition `i > 0` is false, so the loop stops and prints “Happy New Year!”.

---

### **6. Summary**

A for loop helps you:

* Automate repetitive tasks
* Write cleaner code
* Avoid writing hundreds of identical lines

Just remember the three parts:

1. Starting point
2. Running condition
3. Increase/Decrease of the counter

---

## **EXPLANATION OF WHILE LOOPS IN JAVASCRIPT**

### **1. What is a while loop?**

A while loop is similar to a for loop, but with two important differences:

1. The counter variable must be created **before** entering the loop.
2. Inside the parentheses of `while`, you **only** write the condition (no initialization or increment).

---

### **2. Example of creating the counter before the loop**

```js
let counter = 3;
```

This sets the starting value of the loop.

---

### **3. The condition of a while loop**

You only need to write an expression that returns true or false.

Example:

```js
while (counter > 0) {
  // code runs while counter > 0
}
```

Since 3 > 0, the loop runs.

---

### **4. What happens inside a while loop?**

In this example:

* Print the current value of `counter`
* Decrease `counter` by 1

```js
console.log(counter);
counter = counter - 1;
```

Or shorter:

```js
counter--;
```

---

### **5. How the while loop works (easy explanation)**

If `counter = 3`:

1. Check 3 > 0 → true → run the loop
2. Print 3
3. Decrease counter to 2
4. Check 2 > 0 → true → print 2 → decrease to 1
5. Check 1 > 0 → true → print 1 → decrease to 0
6. Check 0 > 0 → false → loop stops

The loop runs only while the condition is true.

---

### **6. After the loop ends**

Any code written after the closing `}` will run next.

Example:

```js
console.log("Happy New Year!");
```

---

### **7. Full example**

```js
let counter = 3;

while (counter > 0) {
  console.log(counter);
  counter--;
}

console.log("Happy New Year!");
```

**Output:**

```
3
2
1
Happy New Year!
```

---

### **8. Conclusion**

A while loop repeats code based on a condition. Just remember:

* Initialize the variable **before** the loop
* Only the condition is inside the parentheses
* Always update the counter (or the loop will run forever)

---

## **For and While Loop Exercises**

### **1. For loop counting up**

Goal: replicate:

```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
```

Code:

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log('Counting completed!');
```

---

### **2. For loop counting down**

Goal: replicate:

```js
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
```

Code:

```js
for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log('Countdown finished!');
```

---

### **3. While loop counting up**

Goal: replicate:

```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
```

Code:

```js
let counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}

console.log('Counting completed!');
```

---

### **4. While loop counting down**

Goal: replicate:

```js
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
```

Code:

```js
let counter = 5;
while (counter > 0) {
    console.log(counter);
    counter--;
}

console.log('Countdown finished!');
```

---

### **5. While loop counting years**

Goal: replicate:

```js
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
```

Code:

```js
let year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
}
```

---

## **Nested Loops in JavaScript**

### **1. What is a nested loop?**

* A loop inside another loop.
* Outer loop runs first → triggers the inner loop completely each time.
* Useful for multi-layered data (week–day, year–month, class–student…).

---

### **2. Example 1: Weeks and days (2 weeks, 5 days each)**

Goal: print

```
Week 1 → Days 1–5
Week 2 → Days 1–5
```

Code:

```js
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log("Week " + i + " - Day " + j);
    }
}
```

Result: 10 lines printed.

---

### **3. Performance note**

* Nested loops can slow code if too many layers.
* Number of iterations grows exponentially with more loops.
  → Use only when necessary.

---

### **4. Example 2: Summer months for 2 years**

Goal: print:

* 2023 → months 6, 7, 8
* 2024 → months 6, 7, 8

Code:

```js
for (let year = 2023; year < 2025; year++) {
    console.log(year);
    for (let month = 6; month < 9; month++) {
        console.log("---- " + month);
    }
}
```

How it works:

1. year = 2023 → print "2023", inner loop prints 6,7,8
2. year = 2024 → print "2024", inner loop prints 6,7,8

---

### **5. Short variable names (dev style)**

* Outer loop → `i`
* Inner loop → `j`

Example:

```js
for (let i = 2023; i < 2025; i++) {
    console.log(i);
    for (let j = 6; j < 9; j++) {
        console.log("---- " + j);
    }
}
```

---

### **6. Summary**

* Nested loops help iterate multi-level data.
* Powerful but resource-consuming → use wisely.
* Common for matrices, tables, categorization, sorting…

---

## **Exercise: Loops with conditions**

### **Exercise 1: For loop with if-else**

Task: create a for loop from 1 to 10, print medals for 1–3, numbers for the rest.

Code:

```js
for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        console.log("Gold medal");
    } else if (i === 2) {
        console.log("Silver medal");
    } else if (i === 3) {
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}
```

Output:

```
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
```

---

### **Exercise 2: Convert above to switch**

Code:

```js
for (let i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
            break;
    }
}
```