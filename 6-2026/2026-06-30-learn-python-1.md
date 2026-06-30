# 1. Loops: Why Loops?

## 1.1. Why Do We Need Loops?

In programming, there are many situations where we need to perform the same task repeatedly.

For example, suppose we have a list of ingredients:

```python
ingredients = ["milk", "sugar", "vanilla extract", "dough", "chocolate"]
```

Without using loops, we would have to print each element individually with `print()`:

```python
print(ingredients[0])
print(ingredients[1])
print(ingredients[2])
print(ingredients[3])
print(ingredients[4])
```

**Output:**

```text
milk
sugar
vanilla extract
dough
chocolate
```

---

## 1.2. The Limitations of Not Using Loops

With a list containing only five elements, writing five `print()` statements is still manageable.

But imagine if the list contained:

* 10 elements
* 100 elements
* 24,601 elements
* 100,000,000 elements

If we continued writing code like this:

```python
print(ingredients[0])
print(ingredients[1])
print(ingredients[2])
...
print(ingredients[99999999])
```

it would become:

* Extremely time-consuming
* Full of repetitive code
* Easy to make indexing mistakes
* Difficult to maintain and modify

Writing code this way is simply not practical for large datasets.

---

## 1.3. How Loops Solve This Problem

This is exactly why **loops** were created.

Instead of writing dozens, hundreds, or even millions of nearly identical statements, we only need to write the code once.

A loop automatically repeats the same operation for every element in the list.

Example (covered in the next lesson):

```python
for item in ingredients:
    print(item)
```

**Output:**

```text
milk
sugar
vanilla extract
dough
chocolate
```

The result is exactly the same, but the code is much shorter, cleaner, and easier to read.

---

## 1.4. Practice

### Print the Same Sentence Ten Times

To demonstrate how inconvenient programming can be without loops, this exercise asks you to print the following sentence using ten separate `print()` statements:

```text
This can be so much easier with loops!
```

Example:

```python
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
print("This can be so much easier with loops!")
```

**Output:**

```text
This can be so much easier with loops!
This can be so much easier with loops!
This can be so much easier with loops!
This can be so much easier with loops!
This can be so much easier with loops!
This can be so much easier with loops!
This can be so much easier with loops!
This can be so much easier with loops!
This can be so much easier with loops!
This can be so much easier with loops!
```

---

## 1.5. Summary

After completing this lesson, I understand that:

* A **loop** is used to repeat the same task multiple times.
* Without loops, I would have to write the same code repeatedly.
* Repeating many `print()` statements makes programs longer, harder to read, and more prone to errors.
* Loops make programs shorter, easier to maintain, and much more efficient, especially when working with lists or large amounts of data.

---

# 2. Loops: For Loops – Introduction

## 2.1. Introduction to the `for` Loop

After understanding why loops are useful, it's time to learn the first type of loop in Python: the **`for` loop**.

A `for` loop is a type of loop with a predetermined number of iterations (also known as **definite iteration**).

This means:

* We know in advance how many times the loop will run.
* The number of iterations depends on the number of elements in a collection.

In the examples throughout this lesson, the collection is usually a **list**.

Each time the loop runs, it performs an action on one element of the list.

---

## 2.2. Basic Syntax of a `for` Loop

```python
for temporary_variable in collection:
    action
```

Example:

```python
for item in my_list:
    print(item)
```

---

## 2.3. Components of a `for` Loop

A `for` loop consists of several parts.

### 2.3.1. The `for` Keyword

The keyword `for` tells Python that a loop is beginning.

Example:

```python
for ingredient in ingredients:
```

---

### 2.3.2. Temporary Variable

The temporary variable represents the current element being processed by the loop.

Example:

```python
ingredient
```

During each iteration, the value of `ingredient` changes.

---

### 2.3.3. The `in` Keyword

The keyword `in` connects the temporary variable to the collection being iterated over.

Example:

```python
for ingredient in ingredients:
```

This can be read as:

> "Take each element from `ingredients` and temporarily store it in `ingredient`."

---

### 2.3.4. Collection

The collection is the data structure that the loop iterates through.

Example:

```python
ingredients = [
    "milk",
    "sugar",
    "vanilla extract",
    "dough",
    "chocolate"
]
```

Here, `ingredients` is a list.

---

### 2.3.5. Action

The action is the code executed during each iteration.

Example:

```python
print(ingredient)
```

---

## 2.4. Using a `for` Loop with a List

Suppose we have the following list:

```python
ingredients = [
    "milk",
    "sugar",
    "vanilla extract",
    "dough",
    "chocolate"
]
```

Using a `for` loop:

```python
for ingredient in ingredients:
    print(ingredient)
```

**Output:**

```text
milk
sugar
vanilla extract
dough
chocolate
```

---

## 2.5. How the Loop Works

Given the following code:

```python
for ingredient in ingredients:
    print(ingredient)
```

Python executes it as follows:

**Iteration 1**

```python
ingredient = "milk"
```

Output:

```text
milk
```

**Iteration 2**

```python
ingredient = "sugar"
```

Output:

```text
sugar
```

**Iteration 3**

```python
ingredient = "vanilla extract"
```

Output:

```text
vanilla extract
```

The loop continues until every element in the list has been processed.

---

## 2.6. The Temporary Variable Can Have Any Name

The temporary variable does not have to follow a specific naming convention.

For example:

```python
for i in ingredients:
    print(i)
```

or

```python
for item in ingredients:
    print(item)
```

Both loops work exactly the same way.

However, it is considered good practice to choose meaningful variable names.

Instead of:

```python
for x in ingredients:
```

prefer:

```python
for ingredient in ingredients:
```

because `ingredient` clearly describes the data being processed.

---

## 2.7. Indentation in a `for` Loop

Python uses **indentation** to determine which statements belong to the loop.

Correct example:

```python
for ingredient in ingredients:
    print(ingredient)
```

Since `print(ingredient)` is indented, it is part of the loop.

Incorrect example:

```python
for ingredient in ingredients:
print(ingredient)
```

Result:

```text
IndentationError
```

Python raises this error because it cannot determine the body of the loop.

---

## 2.8. Writing a `for` Loop on One Line

Python allows very simple loops to be written on a single line.

Example:

```python
for ingredient in ingredients: print(ingredient)
```

This produces the same result as:

```python
for ingredient in ingredients:
    print(ingredient)
```

However:

* This style should only be used for very simple loops.
* It is not recommended when the loop performs multiple actions because it reduces readability.

---

## 2.9. Practice: Using a `for` Loop

Given the following list:

```python
board_games = [
    "Settlers of Catan",
    "Carcassone",
    "Power Grid",
    "Agricola",
    "Scrabble"
]
```

Original code:

```python
for game in board_games:
print(game)
```

This code is incorrect because it is missing indentation.

Correct version:

```python
for game in board_games:
    print(game)
```

**Output:**

```text
Settlers of Catan
Carcassone
Power Grid
Agricola
Scrabble
```

---

## 2.10. Print Each Element in `sport_games`

Given the list:

```python
sport_games = [
    "football",
    "hockey",
    "baseball",
    "cricket"
]
```

Use:

```python
for sport in sport_games:
    print(sport)
```

**Output:**

```text
football
hockey
baseball
cricket
```

---

## 2.11. Summary

After completing this lesson, I understand that:

* A `for` loop is used to iterate through each element in a collection.
* Its basic syntax is:

```python
for variable in collection:
    action
```

* The temporary variable represents the current element being processed.
* All code inside the loop must be properly indented.
* The temporary variable can have any valid name, but meaningful names improve code readability.
* `for` loops eliminate repetitive code by allowing the same action to be performed on every element in a collection.

---

# 3. Loops: For Loops – Using `range()`

## 3.1. Using a `for` Loop Without a Specific List

In the previous lesson, we learned how to use a `for` loop to iterate through each element in a list.

Example:

```python
ingredients = ["milk", "sugar", "dough"]

for ingredient in ingredients:
    print(ingredient)
```

In this case, we already have a list to iterate over.

However, there are situations where we do not need to work with a specific list.

Instead, we simply want to repeat an action a certain number of times.

For example, suppose we want to print the message:

```text
Learning Loops!
```

six times.

---

## 3.2. Controlling the Number of Iterations with a List

Before learning about `range()`, one way to repeat an action six times would be to create a list containing six elements.

Example:

```python
for temp in [0, 1, 2, 3, 4, 5]:
    print("Learning Loops!")
```

**Output:**

```text
Learning Loops!
Learning Loops!
Learning Loops!
Learning Loops!
Learning Loops!
Learning Loops!
```

However, there is a problem:

* We do not actually care about the values `0`, `1`, `2`, `3`, `4`, and `5`.
* We only want the loop to execute six times.

For this reason, Python provides the `range()` function.

---

## 3.3. Using `range()` with a `for` Loop

The `range()` function generates a sequence of numbers that can be used to control the number of loop iterations.

Example:

```python
six_steps = range(6)
```

This creates the sequence:

```text
0, 1, 2, 3, 4, 5
```

which contains **six values**.

---

## 3.4. Combining `range()` with a `for` Loop

Syntax:

```python
for temp in range(number):
    action
```

Example:

```python
for temp in range(6):
    print("Learning Loops!")
```

**Output:**

```text
Learning Loops!
Learning Loops!
Learning Loops!
Learning Loops!
Learning Loops!
Learning Loops!
```

Explanation:

`range(6)` generates:

```text
0, 1, 2, 3, 4, 5
```

The loop executes once for each value, resulting in six iterations.

---

## 3.5. Tracking the Iteration Number

In the previous example:

```python
for temp in range(6):
    print("Learning Loops!")
```

the temporary variable `temp` is never used.

However, we can use it to determine which iteration the loop is currently on.

Example:

```python
for temp in range(6):
    print("Loop is on iteration number " + str(temp + 1))
```

**Output:**

```text
Loop is on iteration number 1
Loop is on iteration number 2
Loop is on iteration number 3
Loop is on iteration number 4
Loop is on iteration number 5
Loop is on iteration number 6
```

---

## 3.6. Why Use `temp + 1`?

By default, `range()` starts counting from `0`.

For example:

```python
range(6)
```

produces:

```text
0, 1, 2, 3, 4, 5
```

When displaying iteration numbers, however, we usually prefer counting from:

```text
1, 2, 3, 4, 5, 6
```

Therefore, we use:

```python
temp + 1
```

to convert the zero-based index into a one-based iteration number.

---

## 3.7. Practice Using `range()` in a `for` Loop

**Task:**

Use `range()` to print the variable `promise` five times.

Example:

```python
promise = "I will learn Python!"

for temp in range(5):
    print(promise)
```

**Output:**

```text
I will learn Python!
I will learn Python!
I will learn Python!
I will learn Python!
I will learn Python!
```

---

## 3.8. Summary

After completing this lesson, I understand that:

* `range()` generates a sequence of numbers without requiring me to create a list manually.
* The basic syntax is:

```python
for variable in range(number):
    action
```

* `range(6)` produces six values:

```text
0, 1, 2, 3, 4, 5
```

* A `for` loop executes once for each value generated by `range()`.
* The temporary variable can be used to track the current iteration.
* `range()` is especially useful when I want to repeat an action a specific number of times.

---

# 4. Loops: While Loops – Introduction

## 4.1. Introduction to the `while` Loop

In addition to the `for` loop, Python provides another type of loop called the **`while` loop**.

A `while` loop is an example of **indefinite iteration**, meaning that the number of iterations is not known in advance.

This means:

* The loop continues running as long as a condition is `True`.
* When the condition becomes `False`, the loop stops.

Basic syntax:

```python
while condition:
    action
```

Where:

* `while` starts the loop.
* `condition` is the expression being tested.
* `action` is the code executed while the condition remains `True`.

---

## 4.2. A Basic `while` Loop Example

Example:

```python
count = 0

while count <= 3:
    print(count)
    count += 1
```

**Output:**

```text
0
1
2
3
```

---

## 4.3. How a `while` Loop Works

Initially:

```python
count = 0
```

Python checks the condition:

```python
count <= 3
```

Since:

```text
0 <= 3
```

is `True`, the loop begins.

### First Iteration

Current value:

```python
count = 0
```

Output:

```text
0
```

Then:

```python
count += 1
```

which is equivalent to:

```python
count = count + 1
```

Now:

```python
count = 1
```

---

### Subsequent Iterations

Python continues checking:

```python
count <= 3
```

As long as the condition remains `True`, the loop continues executing.

---

### When Does the Loop Stop?

After the final iteration:

```python
count += 1
```

makes:

```python
count = 4
```

Python checks:

```python
4 <= 3
```

Since this is `False`, the loop terminates.

---

## 4.4. The Importance of a Stopping Condition

Every `while` loop must have a way for its condition to eventually become `False`.

Correct example:

```python
count = 0

while count <= 3:
    print(count)
    count += 1
```

Here,

```python
count += 1
```

causes the value of `count` to increase until the condition is no longer satisfied.

If we forget to update the variable:

```python
count = 0

while count <= 3:
    print(count)
```

the condition will always remain `True`.

This creates an **infinite loop**.

An infinite loop can cause a program to freeze because it never stops executing.

---

## 4.5. Indentation in a `while` Loop

Just like a `for` loop, Python uses indentation to determine which statements belong to the loop.

Example:

```python
while count <= 3:
    print(count)
    count += 1
```

Both statements are executed during every iteration.

If the indentation is missing:

```python
while count <= 3:
print(count)
```

Python raises:

```text
IndentationError
```

---

## 4.6. Writing a `while` Loop on One Line

Python allows simple loops to be written on a single line.

Example:

```python
count = 0

while count <= 3: print(count); count += 1
```

The semicolon (`;`) separates multiple statements on the same line.

However, this style should only be used for very simple loops.

---

## 4.7. Comparing `for` and `while` Loops

| **`for` Loop**                                            | **`while` Loop**                                       |
| --------------------------------------------------------- | ------------------------------------------------------ |
| The number of iterations is known in advance.             | The number of iterations is determined by a condition. |
| Commonly used with lists, tuples, strings, and `range()`. | Used when repetition depends on a condition.           |
| Automatically stops after the collection is exhausted.    | Stops when the condition becomes `False`.              |

Example using a `for` loop:

```python
for number in range(5):
    print(number)
```

Example using a `while` loop:

```python
number = 0

while number < 5:
    print(number)
    number += 1
```

Both produce:

```text
0
1
2
3
4
```

---

## 4.8. Practice: Countdown

**Task:**

Create a variable named `countdown` and assign it the value:

```python
10
```

Create a `while` loop that runs while:

```python
countdown >= 0
```

During each iteration:

1. Print the value of `countdown`.
2. Decrease `countdown` by `1`.

Example:

```python
countdown = 10

while countdown >= 0:
    print(countdown)
    countdown -= 1

print("We have liftoff!")
```

**Output:**

```text
10
9
8
7
6
5
4
3
2
1
0
We have liftoff!
```

---

## 4.9. Summary

After completing this lesson, I understand that:

* A `while` loop continues executing as long as its condition is `True`.
* Its basic syntax is:

```python
while condition:
    action
```

* A control variable is usually needed to prevent an infinite loop.
* Variables inside a `while` loop are commonly updated using operators such as:

```python
+=
-=
```

* A `while` loop is most appropriate when the exact number of iterations is unknown, but the stopping condition is known.
* Proper indentation is essential because it defines which statements belong to the loop.

---

# 5. Loops: While Loops - Lists

## 5.1. Using `while` Loops with Lists

In the previous lesson, I learned how to use a `while` loop to repeat code based on a condition.

A `while` loop is not only used for counting numbers.

It can also be used to iterate through each element in a list, similar to a `for` loop.

Example:

```python
ingredients = [
    "milk",
    "sugar",
    "vanilla extract",
    "dough",
    "chocolate"
]
```

Goal:

Print every element in the list:

```
milk
sugar
vanilla extract
dough
chocolate
```

---

## 5.2. The Challenge of Using `while` with Lists

Unlike a `for` loop:

```python
for ingredient in ingredients:
    print(ingredient)
```

Python automatically knows:

* How many elements are in the list.
* When to stop iterating.

However, with a `while` loop, I have to manually control:

* Where to start.
* When to stop.
* How to move to the next element.

---

## 5.3. Using `len()` to Get the Length of a List

First, I need to know how many elements are in the list.

Use:

```python
length = len(ingredients)
```

Result:

```python
length = 5
```

Because the list contains five elements:

```
0      1      2                 3        4
milk  sugar  vanilla extract  dough  chocolate
```

---

## 5.4. Creating an Index Variable

Next, I need a variable to keep track of the current position in the list.

Create:

```python
index = 0
```

Explanation:

* Python lists start at index `0`.
* Initially, I begin with the first element.

---

### 5.5. Creating a `while` Loop to Traverse a List

Complete code:

```python
length = len(ingredients)

index = 0

while index < length:
    print(ingredients[index])
    index += 1
```

---

## 5.6. Step-by-Step Execution

### Get the Length

```python
length = len(ingredients)
```

Result:

```python
length = 5
```

### Start at Index 0

```python
index = 0
```

This means the loop starts with:

```python
ingredients[0]
```

### Check the Condition

```python
while index < length:
```

Initially:

```
0 < 5
```

This is `True`, so the loop runs.

### Print the Current Element

```python
print(ingredients[index])
```

First iteration:

```python
print(ingredients[0])
```

Output:

```
milk
```

### Increase the Index

```python
index += 1
```

Now:

```python
index = 1
```

The loop checks the condition again.

### Remaining Iterations

Second iteration:

```python
ingredients[1]
```

Output:

```
sugar
```

Third iteration:

```python
ingredients[2]
```

Output:

```
vanilla extract
```

Fourth iteration:

```python
ingredients[3]
```

Output:

```
dough
```

Fifth iteration:

```python
ingredients[4]
```

Output:

```
chocolate
```

After that:

```python
index = 5
```

Python checks:

```
5 < 5
```

This is `False`, so the loop stops.

---

## 5.7. Example with Python Topics

Suppose we have this list:

```python
python_topics = [
    "variables",
    "control flow",
    "loops",
    "modules",
    "classes"
]
```

Goal:

Print:

```
I am learning about variables
I am learning about control flow
I am learning about loops
I am learning about modules
I am learning about classes
```

### Get the Length

```python
length = len(python_topics)
```

### Create an Index Variable

```python
index = 0
```

### Write the `while` Loop

```python
while index < length:
    print("I am learning about " + python_topics[index])
    index += 1
```

Output:

```
I am learning about variables
I am learning about control flow
I am learning about loops
I am learning about modules
I am learning about classes
```

---

## 5.8. Comparing `for` Loops and `while` Loops with Lists

| `for` Loop                                  | `while` Loop                                             |
| ------------------------------------------- | -------------------------------------------------------- |
| Automatically iterates through each element | Requires manual index management                         |
| Doesn't need `len()`                        | Usually uses `len()`                                     |
| Shorter and simpler                         | Offers more control                                      |
| Less error-prone                            | Easier to create an infinite loop if written incorrectly |

Example using a `for` loop:

```python
for item in python_topics:
    print(item)
```

Example using a `while` loop:

```python
index = 0

while index < len(python_topics):
    print(python_topics[index])
    index += 1
```

---

## 5.9. Summary

After this lesson, I understand that:

* A `while` loop can be used to iterate through a list, just like a `for` loop.
* When using a `while` loop, I need an `index` variable to track the current position.
* I usually use `len()` to determine the number of elements in the list.
* The loop condition is typically:

```python
index < length
```

* After each iteration, I must increment the index:

```python
index += 1
```

* If I forget to increment the index, the loop may run forever.
* A `while` loop gives me more control over the iteration process.

---

# 6. Loops: Infinite Loops

## 6.1. What Is an Infinite Loop?

In Python, every loop should have:

* A starting point.
* A running condition.
* A stopping point.

If a loop never reaches its stopping condition, it will continue running forever.

This type of loop is called an **infinite loop**.

---

## 6.2. Example of an Infinite Loop

Consider the following code:

```python
my_favorite_numbers = [4, 8, 15, 16, 42]

for number in my_favorite_numbers:
    my_favorite_numbers.append(1)
```

Initially:

```
[4, 8, 15, 16, 42]
```

The list contains five elements.

### What Goes Wrong?

The loop is iterating over:

```python
my_favorite_numbers
```

But inside the loop, a new element is added:

```python
my_favorite_numbers.append(1)
```

After each iteration, the list becomes longer.

Initially:

```
[4, 8, 15, 16, 42]
```

After the first iteration:

```
[4, 8, 15, 16, 42, 1]
```

After the next iteration:

```
[4, 8, 15, 16, 42, 1, 1]
```

The list keeps growing indefinitely.

Because the list never ends, the loop never finishes.

Result:

```
Infinite Loop
```

---

## 6.3. Why Are Infinite Loops Dangerous?

An infinite loop can:

* Cause a program to run forever.
* Consume all available system resources.
* Make the program freeze or become unresponsive.
* Prevent any code after the loop from executing.

For these reasons, infinite loops should be avoided.

---

## 6.4. How to Stop an Infinite Loop

If you accidentally create an infinite loop while running Python locally, you can press:

```
Ctrl + C
```

to stop the program.

In an online coding environment, you may need to:

* Refresh the page to terminate the loop.

---

## 6.5. Example: Copying Students Between Classes

Suppose there are two class lists:

```python
students_period_A = [
    "Alex",
    "Briana",
    "Cheri",
    "Daniele"
]

students_period_B = [
    "Dora",
    "Minerva",
    "Alexa",
    "Obie"
]
```

Goal:

Add every student from Class A to Class B.

---

## 6.6. Code That Creates an Infinite Loop

Incorrect code:

```python
for student in students_period_A:
    students_period_A.append(student)
```

### The Problem

The loop is iterating over:

```python
students_period_A
```

but it is also adding new elements to the same list:

```python
students_period_A.append(student)
```

The list continues to grow.

Initially:

```python
[
    "Alex",
    "Briana",
    "Cheri",
    "Daniele"
]
```

After one iteration:

```python
[
    "Alex",
    "Briana",
    "Cheri",
    "Daniele",
    "Alex"
]
```

Then:

```python
[
    "Alex",
    "Briana",
    "Cheri",
    "Daniele",
    "Alex",
    "Briana"
]
```

The process continues forever.

---

## 6.7. The Correct Solution

If the goal is to add students from Class A to Class B, do **not** modify the list you're currently iterating over.

Instead:

```python
for student in students_period_A:
    students_period_B.append(student)
```

Result:

```python
students_period_B = [
    "Dora",
    "Minerva",
    "Alexa",
    "Obie",
    "Alex",
    "Briana",
    "Cheri",
    "Daniele"
]
```

---

## 6.8. Important Note When Looping Through Lists

While iterating over a list, avoid modifying its size.

For example, avoid:

```python
for item in my_list:
    my_list.append(item)
```

or

```python
for item in my_list:
    my_list.remove(item)
```

Doing so can:

* Change the size of the list during iteration.
* Disrupt the iteration order.
* Create an infinite loop.

---

## 6.9. Summary

After this lesson, I understand that:

* An **infinite loop** is a loop that never ends.
* It usually happens when the stopping condition is never met.
* I should not modify the size of a list while iterating over that same list.
* If I need to add elements, it's usually better to add them to a different list.
* I should always make sure that every loop has a valid stopping condition.

---

# 7. Loops: Loop Control - `break`

## 7.1. The `break` Statement in Loops

In Python, loops can be controlled using **loop control statements**.

One of the most important control statements is:

```python
break
```

The `break` statement is used to:

* Stop a loop immediately.
* Exit the loop before it has processed all the elements.

---

## 7.2. Searching Through a List

Suppose we have a list of items on sale:

```python
items_on_sale = [
    "blue shirt",
    "striped socks",
    "knit dress",
    "red headband",
    "dinosaur onesie"
]
```

I want to check whether the item:

```python
"knit dress"
```

exists in the list.

A simple approach is:

```python
for item in items_on_sale:
    if item == "knit dress":
        print("Found it")
```

Output:

```text
Found it
```

---

## 7.3. The Drawback of Not Using `break`

The code above will:

1. Check:

   ```
   blue shirt
   ```
2. Check:

   ```
   striped socks
   ```
3. Find:

   ```
   knit dress
   ```
4. Print:

   ```
   Found it
   ```

However, the loop will continue checking:

```
red headband
dinosaur onesie
```

This is unnecessary.

If the list contains:

* 1,000 elements
* 100,000 elements

the program will waste time checking elements after the target has already been found.

---

## 7.4. Using `break` to Stop a Loop

Example:

```python
items_on_sale = [
    "blue shirt",
    "striped socks",
    "knit dress",
    "red headband",
    "dinosaur onesie"
]

print("Checking the sale list!")

for item in items_on_sale:
    print(item)

    if item == "knit dress":
        break

print("End of search!")
```

Output:

```text
Checking the sale list!
blue shirt
striped socks
knit dress
End of search!
```

---

## 7.5. How `break` Works

### First Iteration

Check:

```python
item = "blue shirt"
```

Condition:

```python
item == "knit dress"
```

Result:

```text
False
```

The loop continues.

### Second Iteration

Check:

```python
item = "striped socks"
```

The condition is still `False`.

The loop continues.

### Third Iteration

Check:

```python
item = "knit dress"
```

The condition becomes `True`:

```python
if item == "knit dress":
```

Python executes:

```python
break
```

The loop stops immediately.

It never checks:

```
red headband
dinosaur onesie
```

---

## 7.6. Practice: Finding the Dog Breed You Want to Adopt

Suppose we have this list:

```python
dog_breeds_available_for_adoption = [
    "french_bulldog",
    "dalmatian",
    "shihtzu",
    "poodle",
    "collie"
]
```

The breed I'm looking for is:

```python
dog_breed_I_want = "dalmatian"
```

### 7.6.1. Iterate Through the List

Create a loop:

```python
for dog_breed in dog_breeds_available_for_adoption:
    print(dog_breed)
```

Output:

```text
french_bulldog
dalmatian
shihtzu
poodle
collie
```

---

### 7.6.2. Check Whether the Desired Breed Is Found

Add an `if` statement:

```python
if dog_breed == dog_breed_I_want:
    print("They have the dog I want!")
```

---

### 7.6.3. Add `break`

Complete code:

```python
dog_breeds_available_for_adoption = [
    "french_bulldog",
    "dalmatian",
    "shihtzu",
    "poodle",
    "collie"
]

dog_breed_I_want = "dalmatian"

for dog_breed in dog_breeds_available_for_adoption:
    print(dog_breed)

    if dog_breed == dog_breed_I_want:
        print("They have the dog I want!")
        break
```

Output:

```text
french_bulldog
dalmatian
They have the dog I want!
```

---

## 7.7. When Should You Use `break`?

You should use `break` when:

* You've already found the data you're looking for.
* There's no need to continue checking the remaining elements.
* You want to stop the loop when a specific condition is met.

Common examples:

* Searching for a name in a list.
* Finding a product.
* Searching for a number.
* Ending a game when the player wins.

---

## 7.8. Summary

After this lesson, I understand that:

* `break` immediately exits a loop.
* It prevents unnecessary iterations.
* It is commonly used when searching through a list.
* `break` only affects the **innermost loop** that contains it.

Example:

```python
for item in my_list:
    if condition:
        break
```

When `condition` becomes `True`, the loop stops immediately.

---

# 8. Loops: Loop Control - `continue`

## 8.1. The `continue` Statement in Loops

In the previous lesson, I learned that:

```python
break
```

is used to:

* Stop the entire loop.
* Exit the loop immediately.

However, there are situations where I don't want to stop the loop completely.

Instead, I only want to skip the current iteration and move on to the next one.

In that case, I use:

```python
continue
```

---

## 8.2. The Difference Between `break` and `continue`

| `break`                                | `continue`                           |
| -------------------------------------- | ------------------------------------ |
| Stops the entire loop                  | Skips only the current iteration     |
| Doesn't process any remaining elements | Continues with the next element      |
| Exits the loop                         | Returns to the beginning of the loop |

Example using `break`:

```python
for number in numbers:
    if number == 5:
        break
```

When the loop reaches `5`, it ends.

Example using `continue`:

```python
for number in numbers:
    if number == 5:
        continue
```

When the loop reaches `5`, it skips that value but continues with the remaining elements.

---

## 8.3. Example of Using `continue`

Suppose we have this list:

```python
big_number_list = [
    1,
    2,
    -1,
    4,
    -5,
    5,
    2,
    -9
]
```

Goal:

Print only the positive numbers.

Solution:

```python
for i in big_number_list:
    if i <= 0:
        continue

    print(i)
```

---

## 8.4. How `continue` Works

### First Iteration

Value:

```python
i = 1
```

Check:

```python
i <= 0
```

Result:

```text
False
```

Python executes:

```python
print(i)
```

Output:

```text
1
```

### Second Iteration

```python
i = 2
```

Output:

```text
2
```

### Third Iteration

```python
i = -1
```

Check:

```python
-1 <= 0
```

Result:

```text
True
```

Python executes:

```python
continue
```

The loop skips the rest of the current iteration.

Nothing is printed.

The loop then moves on to:

```python
4
```

Final output:

```text
1
2
4
5
2
```

---

## 8.5. Practice: Checking Ages for a Bar

Suppose we have this list:

```python
ages = [
    12,
    38,
    34,
    26,
    21,
    19,
    67,
    41,
    17
]
```

Rules:

* Anyone under 21 is not allowed in.
* Skip those ages.
* Print only ages that are 21 or older.

Code:

```python
for age in ages:

    if age < 21:
        continue

    print(age)
```

Output:

```text
38
34
26
21
67
41
```

---

## 8.6. How This Example Works

### Age 12

Check:

```python
12 < 21
```

Result:

```text
True
```

Python executes:

```python
continue
```

The age is skipped.

### Age 38

Check:

```python
38 < 21
```

Result:

```text
False
```

Python prints:

```text
38
```

### Age 19

Check:

```python
19 < 21
```

Result:

```text
True
```

Python skips this iteration.

---

## 8.7. When Should You Use `continue`?

You should use `continue` when:

* You want to skip special cases.
* You don't want to execute the remaining code in the current iteration.
* You still want the loop to continue processing the remaining elements.

Common examples:

* Skipping negative numbers.
* Ignoring invalid data.
* Skipping people who don't meet certain requirements.
* Filtering data in a list.

---

## 8.8. Summary

After this lesson, I understand that:

* `continue` skips the current iteration.
* The loop continues with the next element.
* It is commonly used together with an `if` statement.

Structure:

```python
for item in my_list:

    if condition:
        continue

    action
```

* If the condition is `True`, the current iteration is skipped.
* If the condition is `False`, the remaining code inside the loop is executed.

---

# 9. Loops: Nested Loops

## 9.1. What Is a Nested Loop?

In Python, one loop can be placed inside another loop.

This is called a:

**Nested Loop**

A nested loop is simply **a loop inside another loop**.

Structure:

```python
for item in collection:

    for sub_item in item:
        action
```

Meaning:

* The **outer loop** iterates through larger elements.
* The **inner loop** iterates through each smaller element inside them.

---

## 9.2. Example: A List of Student Project Teams

Suppose there are three project teams:

```python
project_teams = [
    ["Ava", "Samantha", "James"],
    ["Lucille", "Zed"],
    ["Edgar", "Gabriel"]
]
```

This is a **list containing other lists**.

Structure:

```
project_teams

        Team 1
        |
        Ava
        Samantha
        James


        Team 2
        |
        Lucille
        Zed


        Team 3
        |
        Edgar
        Gabriel
```

---

## 9.3. Using One Loop to Access Each Team

Example:

```python
for team in project_teams:
    print(team)
```

Output:

```
["Ava", "Samantha", "James"]
["Lucille", "Zed"]
["Edgar", "Gabriel"]
```

This loop only accesses each **team**.

---

## 9.4. The Problem When We Want Each Student

Suppose we want to print every student's name.

Desired output:

```
Ava
Samantha
James
Lucille
Zed
Edgar
Gabriel
```

One loop is not enough because:

* The outer loop retrieves each team.
* We need another loop to retrieve each student inside a team.

---

## 9.5. Using a Nested Loop

Code:

```python
for team in project_teams:

    for student in team:
        print(student)
```

---

## 9.6. How a Nested Loop Works

### First iteration of the outer loop

Gets:

```python
team = ["Ava", "Samantha", "James"]
```

The inner loop runs:

```python
for student in team:
```

One by one:

```python
student = "Ava"
```

Prints:

```
Ava
```

Next:

Prints:

```
Samantha
```

Next:

Prints:

```
James
```

---

### Second iteration of the outer loop

Gets:

```python
team = ["Lucille", "Zed"]
```

The inner loop prints:

```
Lucille
Zed
```

---

### Third iteration of the outer loop

Gets:

```python
team = ["Edgar", "Gabriel"]
```

The inner loop prints:

```
Edgar
Gabriel
```

---

## 9.7. Practice: Calculating the Total Number of Ice Cream Scoops Sold

Suppose we have the following data:

```python
sales_data = [
    [12, 17, 22],
    [2, 10, 3],
    [5, 12, 13]
]
```

Meaning:

* Each inner list represents one store.
* The numbers represent the number of ice cream scoops sold.

Example:

**Scoopcademy:**

```
12, 17, 22
```

**Gilberts Creamery:**

```
2, 10, 3
```

**Manny's Scoop Shop:**

```
5, 12, 13
```

### Create a Variable to Store the Total

Initially:

```python
scoops_sold = 0
```

This variable stores the running total.

---

### Loop Through Each Store

```python
for location in sales_data:
    print(location)
```

Output:

```
[12, 17, 22]
[2, 10, 3]
[5, 12, 13]
```

---

### Add a Nested Loop to Calculate the Total

Complete code:

```python
sales_data = [
    [12, 17, 22],
    [2, 10, 3],
    [5, 12, 13]
]

scoops_sold = 0

for location in sales_data:
    print(location)

    for scoops in location:
        scoops_sold += scoops

print(scoops_sold)
```

---

### Understanding the Calculation

Initially:

```python
scoops_sold = 0
```

**Store 1**

```
[12, 17, 22]
```

Running total:

```
0 + 12 = 12
12 + 17 = 29
29 + 22 = 51
```

**Store 2**

```
[2, 10, 3]
```

Continue adding:

```
51 + 2 = 53
53 + 10 = 63
63 + 3 = 66
```

**Store 3**

```
[5, 12, 13]
```

Continue adding:

```
66 + 5 = 71
71 + 12 = 83
83 + 13 = 96
```

Final total:

```
96
```

---

### Output

```
[12, 17, 22]
[2, 10, 3]
[5, 12, 13]
96
```

---

## 9.8. Summary

After this lesson, I understand that:

* A **nested loop** is a loop inside another loop.
* The **outer loop** usually iterates through larger collections.
* The **inner loop** iterates through each element inside them.

Structure:

```python
for outer in collection:

    for inner in outer:
        action
```

Nested loops are commonly used when working with:

* Nested lists
* Tables of data
* Matrices
* Multi-level collections

Example:

```python
for location in sales_data:
    for number in location:
        total += number
```

Nested loops allow me to process every element in a multi-dimensional list.

---

# 10. Loops: List Comprehensions

## 10.1. What Is a List Comprehension?

In Python, I have already learned how to use a `for` loop to create a new list.

For example, suppose I want to create a new list containing double the values of the original list.

The traditional approach is:

```python
numbers = [2, -1, 79, 33, -45]

doubled = []

for number in numbers:
    doubled.append(number * 2)

print(doubled)
```

Output:

```python
[4, -2, 158, 66, -90]
```

This works well, but Python provides a shorter and more elegant way called a:

**List Comprehension**

---

## 10.2. Writing a Loop with a List Comprehension

Instead of writing:

```python
doubled = []

for number in numbers:
    doubled.append(number * 2)
```

I can simply write:

```python
doubled = [num * 2 for num in numbers]
```

The result is exactly the same:

```python
[4, -2, 158, 66, -90]
```

---

## 10.3. The Structure of a List Comprehension

General syntax:

```python
new_list = [expression for element in collection]
```

Where:

* `new_list` is the newly created list.
* `expression` is the operation performed on each element.
* `element` is a temporary variable representing each item.
* `collection` is the original list being iterated over.

---

## 10.4. Understanding the `doubled` Example

Code:

```python
numbers = [2, -1, 79, 33, -45]

doubled = [num * 2 for num in numbers]
```

Python processes it like this:

### Step 1

Take the first element:

```python
num = 2
```

Compute:

```python
num * 2
```

Result:

```
4
```

Add it to the new list.

---

### Step 2

Take the next element:

```python
num = -1
```

Compute:

```
-1 * 2
```

Result:

```
-2
```

---

### Step 3

Continue with the remaining elements:

```
79 * 2 = 158

33 * 2 = 66

-45 * 2 = -90
```

Finally, Python creates:

```python
[4, -2, 158, 66, -90]
```

---

## 10.5. Comparing a `for` Loop and a List Comprehension

### Using a `for` Loop

```python
numbers = [2, -1, 79, 33, -45]

doubled = []

for number in numbers:
    doubled.append(number * 2)
```

Steps involved:

1. Create an empty list.
2. Iterate through each element.
3. Perform the calculation.
4. Append the result to the new list.

### Using a List Comprehension

```python
doubled = [number * 2 for number in numbers]
```

Everything is done in a single line.

---

## 10.6. Practice: Increasing Test Scores

Suppose we have the following scores:

```python
grades = [90, 88, 62, 76, 74, 89, 48, 57]
```

The highest score is:

```
90
```

So every score should receive an extra:

```
10 points
```

---

## 10.7. Creating a New List with a List Comprehension

Code:

```python
scaled_grades = [grade + 10 for grade in grades]
```

Explanation:

* `grade` represents each score in the list.
* `grade + 10` adds ten points.
* The results are stored in a new list called `scaled_grades`.

### Printing the Result

Code:

```python
print(scaled_grades)
```

Output:

```python
[100, 98, 72, 86, 84, 99, 58, 67]
```

---

## 10.8. Summary

After this lesson, I understand that:

* List comprehensions make loops shorter and cleaner.
* They are used to create a new list from an existing one.
* They can replace many common `for` loops.

Structure:

```python
new_list = [expression for element in collection]
```

Example:

```python
numbers = [1, 2, 3]

squared = [num ** 2 for num in numbers]

print(squared)
```

Output:

```python
[1, 4, 9]
```

List comprehensions make Python code concise, readable, and especially useful for quickly transforming data stored in lists.

---

# 11. Loops: List Comprehensions - Conditionals

## 11.1. Using Conditions in List Comprehensions

In the previous lesson, we learned how to use a **list comprehension** to create a new list from an existing one.

For example:

```python
numbers = [2, -1, 79, 33, -45]

doubled = [num * 2 for num in numbers]
```

Output:

```python
[4, -2, 158, 66, -90]
```

Besides processing every element, **list comprehensions** also allow us to add conditions to filter data.

---

## 11.2. List Comprehensions with an `if` Condition

Suppose we only want to double the negative numbers in a list:

```python
numbers = [2, -1, 79, 33, -45]
```

Using a regular `for` loop:

```python
only_negative_doubled = []

for num in numbers:
    if num < 0:
        only_negative_doubled.append(num * 2)

print(only_negative_doubled)
```

Output:

```python
[-2, -90]
```

---

## 11.3. Rewriting It with a List Comprehension

A shorter version is:

```python
negative_doubled = [num * 2 for num in numbers if num < 0]

print(negative_doubled)
```

Output:

```python
[-2, -90]
```

---

## 11.4. List Comprehension Syntax with a Condition

Syntax:

```python
new_list = [expression for element in collection if condition]
```

Where:

* **expression**: the operation to perform.
* **element**: the temporary variable representing each item.
* **collection**: the original list.
* **condition**: the condition used to select elements.

---

## 11.5. How the `negative_doubled` Example Works

Code:

```python
negative_doubled = [num * 2 for num in numbers if num < 0]
```

Python processes it as follows:

**Step 1**

Take the first element:

```python
num = 2
```

Check:

```python
num < 0
```

Result:

```python
False
```

Skip it.

**Step 2**

Take:

```python
num = -1
```

Check:

```python
-1 < 0
```

True.

Compute:

```python
-1 * 2
```

Result:

```python
-2
```

Add it to the new list.

**Step 3**

Continue with:

```python
79
33
```

These do not satisfy the condition, so they are skipped.

**Step 4**

Take:

```python
num = -45
```

Compute:

```python
-45 * 2
```

Result:

```python
-90
```

Final list:

```python
[-2, -90]
```

---

## 11.6. List Comprehensions with `if-else`

Besides filtering with `if`, we can also use **`if-else`** to produce different results.

For example:

* Negative numbers → multiply by 2.
* Positive numbers → multiply by 3.

```python
numbers = [2, -1, 79, 33, -45]

doubled = [
    num * 2 if num < 0 else num * 3
    for num in numbers
]

print(doubled)
```

Output:

```python
[6, -2, 237, 99, -90]
```

---

## 11.7. The Position of `if` and `if-else` in a List Comprehension

This is an important distinction.

**Using only `if`:**

The `if` comes **after** the `for`.

Syntax:

```python
[expression for element in collection if condition]
```

Example:

```python
[num * 2 for num in numbers if num < 0]
```

**Using `if-else`:**

The condition comes **before** the `for`.

Syntax:

```python
[value_if_true if condition else value_if_false for element in collection]
```

Example:

```python
[num * 2 if num < 0 else num * 3 for num in numbers]
```

---

## 11.8. Comparing Three Types of List Comprehensions

**Without a condition:**

```python
no_if = [num * 2 for num in numbers]
```

Every element is processed.

**With only `if`:**

```python
if_only = [num * 2 for num in numbers if num < 0]
```

Only elements that satisfy the condition are included.

**With `if-else`:**

```python
if_else = [
    num * 2 if num < 0 else num * 3
    for num in numbers
]
```

Every element is processed, but the result depends on the condition.

---

## 11.9. Practice: Checking Height Requirements for a Roller Coaster

Height list:

```python
heights = [161, 164, 156, 144, 158, 170, 163, 163, 157]
```

Requirement:

To ride the **Topsy Turvy Tumbletron**, a person must be **taller than 161 cm**.

### Create a List Using a List Comprehension

Code:

```python
can_ride_coaster = [
    height for height in heights if height > 161
]
```

Explanation:

* Iterate through each value in `heights`.
* Check whether `height > 161`.
* If the condition is true, add that height to the new list.

### Print the Result

Code:

```python
print(can_ride_coaster)
```

Output:

```python
[164, 170, 163, 163]
```

---

## 11.12. Summary

After learning **List Comprehensions with Conditionals**, I understand that:

* List comprehensions can be combined with conditions to filter data.
* They can replace many `for` + `if` code blocks.

**Using only `if`:**

```python
new_list = [
    expression
    for element in collection
    if condition
]
```

**Using `if-else`:**

```python
new_list = [
    value1 if condition else value2
    for element in collection
]
```

List comprehensions make Python code shorter, easier to read, and more efficient for processing data in lists..