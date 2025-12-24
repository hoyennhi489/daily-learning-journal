# STEP-BY-STEP PSEUDOCODE

## 1. Introduction

In programming, one of the most important tools that helps programmers think clearly and organize ideas effectively is **pseudocode**. Pseudocode is not code that runs on a computer; instead, it is a way to describe program logic using human-readable language while still maintaining a structure similar to real programming code.

In this lesson, learners will explore:

* What pseudocode is
* Why pseudocode should be used
* When pseudocode should be used
* How to write pseudocode through the FizzBuzz example

## 2. What Is Pseudocode?

Pseudocode is a high-level description of an algorithm or program, written using natural language combined with programming-like structures such as:

* Loops (For, While)
* Conditions (If, Else)
* Sequential processing steps

The purpose of pseudocode is to help humans understand the program’s logical flow without being constrained by the syntax of any specific programming language.

## 3. Why Use Pseudocode?

### 3.1. Visualizing Program Logic

Pseudocode allows programmers to think step by step about how to solve a problem before writing actual code. Each line represents a specific action or decision.

### 3.2. Detecting and Fixing Errors Early

When writing pseudocode, programmers can identify problems related to:

* Processing order
* Inappropriate data structures
* Incorrect logical conditions

Making changes at the pseudocode stage is much cheaper and faster than fixing implemented code.

### 3.3. Supporting Design Changes

**Example:**
If at step 3 the program stores data using an array, but by step 6 fast lookup is required, pseudocode helps reveal that a dictionary (map) would be more suitable. Making this change early avoids cascading effects on later steps.

## 4. When Should Pseudocode Be Written?

Pseudocode should be used in the following situations:

* When learning programming and needing to clearly outline problem-solving steps
* When dealing with complex problems
* When presenting ideas to a team or client
* When writing documentation for future code maintenance
* In programming interviews to demonstrate logical thinking

## 5. How to Write Pseudocode

There is no fixed standard for writing pseudocode. However, pseudocode usually has these characteristics:

* Easy to read and understand
* Independent of programming languages
* Clearly shows sequence, conditions, and loops

Pseudocode can be considered any form of text that describes how a program works.

## 6. Example: The FizzBuzz Challenge

### 6.1. Problem Description

Write a program that loops through numbers from 1 to 40:

* Print **“Fizz”** if the number is divisible by 3
* Print **“Buzz”** if the number is divisible by 5
* Print **“FizzBuzz”** if the number is divisible by both 3 and 5
* Otherwise, print the number itself

### 6.2. Representing the Requirements with Simple Pseudocode

* For each number from 1 to 40
* If divisible by 3
* If divisible by 5
* Else print the number

This approach is flawed because the number 15 satisfies multiple conditions and will produce incorrect output.

### 6.3. Correct Pseudocode with Exclusive Conditions

* For number from 1 to 40

  * If number is divisible by both 3 and 5

    * Print “FizzBuzz”
  * Else if number is divisible by 3

    * Print “Fizz”
  * Else if number is divisible by 5

    * Print “Buzz”
  * Else

    * Print number

Ordering the conditions properly avoids logical errors and ensures correct results.

## 7. Conclusion

Pseudocode is an essential skill not only for beginners but also for experienced software engineers. It helps visualize processing flow, plan clearly, and communicate ideas effectively.

---

# BINARY NUMBERS

## 1. What Are Binary Numbers?

Binary numbers use a base-2 numbering system, consisting of only two digits: 0 and 1. Computers use this system to store and process information because it aligns well with electrical signals (on or off).

## 2. Decimal Number System (Base 10)

Humans are accustomed to the decimal system, which uses digits from 0 to 9.

**Example:**
Counting: 7, 8, 9 → no more digits
Next comes 10 (adding a new digit)

Each position to the left has a value ten times greater than the position to the right.

**Example:**
The number 25 = 2 tens + 5 units

This method of increasing value by position is called a positional number system.

## 3. Binary Number System (Base 2)

The binary system uses only the digits 0 and 1.

**Binary counting example:**

```
0
1
10
11
100
```

**Comparison:**

* Decimal 3 = Binary 11
* Decimal 4 = Binary 100

## 4. Bits and Bytes

* A **bit** is the smallest unit and has a value of 0 or 1
* A **byte** consists of 8 bits

**Examples:**

```
00000000 = 0
00000001 = 1
11111111 = 255
```

## 5. Step-by-Step Binary Counting Example

Counting from 0 to 5 in binary:

| Decimal | Binary |
| ------- | ------ |
| 0       | 0      |
| 1       | 1      |
| 2       | 10     |
| 3       | 11     |
| 4       | 100    |
| 5       | 101    |

When the rightmost bits are filled with 1s, a 1 is added to the left and the following bits reset to 0.

## 6. Binary and Electricity in Computers

Computers use binary because:

* Electricity present → 1
* No electricity → 0

**Examples:**

* Switch on = 1
* Switch off = 0

## 7. Boolean and ASCII

**Boolean:**

* True = 1
* False = 0

**ASCII:**
Each letter, number, and special character is assigned a unique binary code.

**Examples:**

* The letter “A” has its own binary code
* A space character also has its own binary code

## 8. Powers and Number of Combinations

Each bit has two states, so the number of combinations is calculated using powers of 2.

**Examples:**

* 2 bits → 2² = 4 values: 00, 01, 10, 11
* 3 bits → 2³ = 8 values

## 9. Binary Lock Example

A lock has 4 digits, each being either 0 or 1:

* Number of possible codes = 2⁴ = 16

If increased to 5 digits:

* Number of codes = 2⁵ = 32

## 10. How Many Values Does One Byte Have?

One byte has 8 bits, each with 2 possible values:

* 2⁸ = 256 different values

## 11. Conclusion

Although binary numbers use only 0 and 1, positional counting and powers allow computers to represent vast amounts of information. Understanding binary helps explain how computers store data, process information, and operate internally.

---

# WORKING WITH BINARY

## 1. Introduction

Computers operate using 0s and 1s. However, information processing is not limited to storing these numbers—it also involves Boolean logic, truth tables, and logic gates. These concepts form the foundation of electronic circuits and programming.

## 2. What Is Boolean Logic?

Boolean logic works with only two states:

* 0 or 1
* False or True
* Off or On

A Boolean function takes inputs and returns only 0 or 1.

**Examples:**

* Switch off → 0
* Switch on → 1

Although there are only two states, combining them can produce very complex behavior.

## 3. Basic Boolean Functions

### NOT

* One input
* Reverses the input value

**Examples:**

* NOT(0) = 1
* NOT(1) = 0

### OR

* Two inputs
* Output is 1 if at least one input is 1

**Examples:**

* OR(0, 0) = 0
* OR(1, 0) = 1
* OR(1, 1) = 1

### AND

* Two inputs
* Output is 1 only if both inputs are 1

**Examples:**

* AND(0, 1) = 0
* AND(1, 1) = 1

### XOR

* Two inputs
* Output is 1 if inputs are different
* Output is 0 if inputs are the same

**Examples:**

* XOR(0, 1) = 1
* XOR(1, 1) = 0

## 4. Boolean Logic in Programming

Booleans are commonly used in conditional statements and loops.

**Example:**

* Variable `x` has the value `false`
* A loop continues running until `x` becomes `true`

Boolean logic helps programs decide when to continue and when to stop.

## 5. Truth Tables

A truth table lists all possible input combinations and their corresponding outputs for a Boolean function.

**AND Truth Table:**

| A | B | A AND B |
| - | - | ------- |
| 0 | 0 | 0       |
| 0 | 1 | 0       |
| 1 | 0 | 0       |
| 1 | 1 | 1       |

Truth tables make it easy to verify whether logic works correctly.

## 6. Logic Gates

Logic gates are electronic circuits that perform Boolean functions.

Basic gates include:

* AND gate
* OR gate
* NOT gate
* XOR gate

Each gate receives electrical input signals and produces an output of 0 or 1.

## 7. Real-World Logic Gate Examples

**Light example:**

* Two switches connected with AND
  → The light turns on only when both switches are on
* Two switches connected with OR
  → The light turns on when at least one switch is on

## 8. Combining Logic Gates

Logic gates can be connected together to form complex circuits.

**Example:**

* Inputs A, B, and C pass through multiple gates
* After processing, a final output Q is produced

This is how computers build complex operations from very simple rules.

## 9. Conclusion

Boolean logic demonstrates how 0s and 1s can be combined to produce complex results. Through Boolean functions, truth tables, and logic gates, computers can process data, make decisions, and execute programs. Understanding these concepts provides deeper insight into how computers and electronic circuits work.

---

# CPU AND TYPES OF MEMORY IN A COMPUTER

## 1. Review of Previous Knowledge

Previously, I learned that each **byte** consists of **8 bits**.
A **bit** is the smallest unit of computer memory and has only two states: **0** or **1**.

## 2. What Is the CPU and How Does a Computer Work?

In this lesson, I learned about the **CPU (Central Processing Unit)** and the different types of memory in a computer.

A computer operates around the CPU. The CPU is responsible for:

* Receiving data
* Receiving instructions
* Processing data according to those instructions

All information in a computer is represented as bytes (sequences of 0s and 1s), created by small electrical signals.

The CPU processes data extremely fast—faster than the speed at which data can be delivered to it. As a result, the CPU often performs many tasks almost simultaneously by constantly switching between them.

One important principle is:

* **The closer the memory is to the CPU, the faster it can be accessed**
* **Faster memory is usually more expensive, so it is placed closer to the CPU**

## 3. Data Transfer Rate

When discussing memory, it is important to consider the **transfer rate**, which is the speed at which data is transferred from memory to the CPU for processing.

The higher the transfer rate:

* The less time the CPU has to wait for data
* The smoother the computer operates

## 4. Cache Memory

### 4.1. Concept

Cache memory is:

* The fastest type of memory
* The most expensive
* Located very close to the CPU

When the CPU needs to process data:

* It first checks the cache
* If the data is in the cache → it is processed immediately
* If not → the CPU retrieves the data from main memory (slower), then stores it in the cache for processing

### 4.2. Simple Analogy

Cache memory is like:

* Items placed on a study desk

RAM is like:

* Items stored in a drawer

Items on the desk are much faster to access than opening a drawer.

### 4.3. Cache Organization by Priority

Cache is divided into regions:

* Level 1: most frequently used data
* Levels 2, 3, 4…: decreasing importance

This is similar to a subway system:

* The city center is the busiest
* Usage decreases as you move farther away from the center

## 5. Main Memory

Main memory includes:

* **RAM (Random Access Memory)**
* **ROM (Read-Only Memory)**

Main memory only stores the data that the computer is actively using at the current time.

### 5.1. ROM

* Read-only memory
* Pre-programmed at the factory
* Cannot be modified

ROM contains essential information that allows the computer to start up and function properly.

**Example:**
When the computer is powered on, the operating system is loaded using data stored in ROM.

### 5.2. RAM

* Can be read from and written to
* Stores currently running programs and data
* Volatile memory (data is lost when power is turned off)

The larger the RAM capacity:

* The faster the computer runs
* The more applications can be opened at the same time

### 5.3. Example

If opening:

* A web browser
* Word processor
* Music player
* Video player

All of these programs consume RAM.

If too many programs are opened and RAM becomes full → the computer slows down.

## 6. Secondary Memory

Secondary memory is used for:

* Long-term storage
* Slower access than RAM
* Data must be loaded into RAM before the CPU can process it

**Examples:**

* Hard drives
* USB drives
* External hard drives
* Cloud storage

---

# WORKING WITH TIME COMPLEXITY

## Introduction

In this lesson, I am learning how to evaluate the performance of code in Computer Science. When writing programs, it is not enough for the code to work correctly—it must also run efficiently.

To evaluate this, two factors are usually considered:

* **Time**
* **Space**

This lesson focuses on **time complexity**, which measures how many steps a program takes as the input size increases.

## What Is Big-O Notation?

Big-O is a way to estimate:

* How fast or slow code runs as the data size grows

It does not measure time in seconds or minutes.
Instead, it measures the **number of operations**.

Big-O can be compared to using **kilowatt-hours** to measure electricity consumption:

* You do not need to know exactly how long a device runs
* You only need to know how much it consumes

## O(1) – Constant Time

O(1) means:

* The running time does not change
* The number of steps remains the same regardless of input size

### Simple Example

```python
array = [0, 1, 2, 3, 4]
print(array[3])
```

**Explanation:**

* Whether the array has 5 elements or 1 million elements
* Accessing the element at index 3 always takes one step

→ This is **O(1)**

## O(n) – Linear Time

O(n) means:

* The running time grows in proportion to the number of elements
* If the data doubles, the number of steps doubles

### Example

```python
array = [0, 1, 2, 3, 4]

if 5 in array:
    print("Found 5")
```

**Explanation:**

* The array has 5 elements
* Each element must be checked to see if it equals 5
* Total of 5 checks

→ Time complexity is **O(n)**

If the array has 10 elements → 10 checks
It is still **O(n)**, where *n* is the input size.

## O(log n) – Logarithmic Time

O(log n) is:

* Slower than O(1)
* Faster than O(n)

When the input grows very large, the number of steps increases only slightly.

### Intuitive Example: Binary Search

Suppose I play a number guessing game from 1 to 100:

* Guess 50 → too high
* Guess 25 → too high
* Guess 12 → too high

Each guess eliminates half of the remaining possibilities.

It only takes about 6–7 guesses to find the correct number.

Even if:

* The range increases to 1,000 or 10,000

The number of guesses does not increase much.

→ This is **O(log n)**

## O(n²) – Quadratic Time

O(n²) is:

* Very slow
* Commonly occurs with nested loops

### Example

```python
array = [0, 1, 2, 3, 4]
new_array = []

for i in range(len(array)):
    for j in range(len(array)):
        new_array.append(i * j)
```

**Explanation:**

* The array has 5 elements
* The outer loop runs 5 times
* The inner loop also runs 5 times
* Total operations: 5 × 5 = 25

→ Time complexity is **O(n²)**

If the array has 6 elements → 6 × 6 = 36 operations
The cost increases very quickly as *n* grows.

## Quick Comparison of Time Complexities

| Notation | Evaluation          |
| -------- | ------------------- |
| O(1)     | Best                |
| O(log n) | Very good           |
| O(n)     | Acceptable          |
| O(n²)    | Poor for large data |

## Best Case, Worst Case, and Average Case

When evaluating an algorithm, three cases should be considered:

* **Best case:**
  Example: the element is at the beginning of the array → **O(1)**

* **Worst case:**
  The element does not exist → full scan required → **O(n)**

* **Average case:**
  The element is around the middle → **O(n/2)**

Even though it is **O(n/2)**, in Big-O notation it is still considered **O(n)**.

---

# Space Complexity

## 1. Why Do We Need to Care About Space?

When evaluating an algorithm or a data structure, it is not enough to consider only the running time; we must also consider how much memory it consumes.

In practice, there is often a **trade-off between speed and memory**:

* Faster solutions → usually require more memory
* Memory-efficient solutions → may run slower

Choosing the right solution depends on the main priority: **speed or memory efficiency**.

## 2. Example of the Time–Space Trade-off

A **hash table** is a typical example:

* Very fast lookup time: **O(1)**
* But it requires additional memory to store a lookup table for each element

→ **Space complexity: O(n)**

This shows that the algorithm is faster, but at the cost of increased memory usage.

## 3. Big-O Notation for Space

Big-O notation for space works exactly the same as for time:

* **O(1), O(log n), O(n), …**

Here:

* **n** is the size of the input
* Size is usually measured in **bytes**

## 4. Concrete Memory Example (Java)

Assume in Java:

* One integer (`int`) = **4 bytes**

An empty array has:

* Object header: **12 bytes**
* Padding: **4 bytes**

### Case 1: Array of 4 integers

* Data: 4 × 4 = **16 bytes**
* Header + padding: **16 bytes**

→ **Total: 32 bytes**

### Case 2: Array of 8 integers

* Data: 8 × 4 = **32 bytes**
* Header + padding: **16 bytes**

→ **Total: 48 bytes**

As the number of elements increases, memory usage increases **linearly with n**.

## 5. Two Types of Space in Space Complexity

Space complexity consists of two parts:

### 5.1. Input Space

Memory used to store the input data.
Examples:

* Arrays
* Lists
* Strings passed into a function

### 5.2. Auxiliary Space

Temporary memory used during algorithm execution, including:

* Temporary variables
* Additional data structures
* Memory used by function calls (call stack)

## 6. Simple Example: Long Division

When learning long division, it is common to:

* Write intermediate steps on paper

These values exist only temporarily to compute the final result.

→ These temporary written steps are analogous to **auxiliary space**.

Complex algorithms work in a similar way: they require temporary space to perform calculations.

## 7. Calculating Big-O for Space

If the auxiliary space does **not** change as *n* increases:

* It can be ignored when calculating Big-O

We only care about the part that grows with *n*.

**Example:**

* An array grows from 4 to 8 elements
* Auxiliary space remains constant

→ Space complexity is still **O(n)**

## 8. Factors That Increase Memory Usage

The following practices increase memory consumption:

* Creating many unnecessary temporary variables
* Creating new data structures instead of reusing existing ones
* Copying large arrays or data structures
* Using complex data structures when simpler ones are sufficient

These reduce space efficiency.

## 9. Conclusion

* Big-O notation applies to **space** as well as **time**
* There is often a trade-off between speed and memory
* When designing algorithms, it is important to:

  * Be conscious of memory usage
  * Avoid unnecessary copying and allocation
  * Choose data structures that match the goal