# 1. Hello World

## 1.1. What is Python?

Python is a **programming language**.

A programming language is a tool that allows humans to communicate with computers by writing instructions that the computer can understand and execute.

**Example:**

```python
print("Hello")
```

**Output:**

```text
Hello
```

**Note:** Computers do not understand ordinary Vietnamese or English. They only understand instructions written in programming languages such as Python.

---

## 1.2. Communicating with a Computer Using Python

Just as people use languages to communicate with one another, programmers use Python to "give instructions" to computers.

The instructions sent to a computer are called **commands**.

**Example:**

```python
print("Welcome")
```

**Meaning:**
Displays the word **Welcome** on the screen.

---

## 1.3. What is a Program?

To make a computer execute instructions, we need to write them into a **file**.

**Example:**

```text
hello.py
```

**Contents of the file:**

```python
print("Hello World")
```

A file containing Python statements is called a **program**.

Simply put:

A **program** is a file that contains instructions for a computer to execute.

---

## 1.4. What is a Text File?

A **text file** is a file that contains text.

In Python, source code is usually stored in files with the following extension:

```text
.py
```

**Examples:**

```text
hello.py
calculator.py
game.py
```

These files contain Python source code.

**Example:**

```python
print("Hello")
print("Python")
```

---

## 1.5. Running a Program

After writing a program, we need to **Run** it so the computer can execute the instructions.

When you click **Run**, the computer performs the following steps:

### Step 1. Read the program file

**Example:**

```text
hello.py
```

The computer reads the entire contents of the file.

### Step 2. Translate the Python code

Python translates the statements into a language that the computer can understand.

**Example:**

```python
print("Hello")
```

### Step 3. Execute the instructions

The computer executes the translated instructions.

**Output:**

```text
Hello
```

---

## 1.6. The `print()` Function

In the first lesson, we will learn about the following function:

```python
print()
```

### Function

Used to display output on the screen.

**Example:**

```python
print("Hello World")
```

**Output:**

```text
Hello World
```

**Another example:**

```python
print("Xin chào")
```

**Output:**

```text
Xin chào
```

---

## 1.7. Practice Exercise

**Task:** Change **Codecademy** to your name in the script within the code editor.

**Instructions:**

Given the following code:

```python
print("Hello Codecademy!")
```

Replace **Codecademy** with your own name.

**Example:**

```python
print("Hello Yến Nhi!")
```

Then click **Run**.

**Output:**

```text
Hello Yến Nhi!
```

---

## 1.8. Program Execution Process

```text
Write Python code
        │
        ▼
Save it as a file (.py)
        │
        ▼
Click Run
        │
        ▼
Python reads the program
        │
        ▼
Python translates the program
        │
        ▼
The computer executes the instructions
        │
        ▼
Display the output
```

---

## 1.9. Examples

### Example 1

```python
print("Hello")
```

**Output:**

```text
Hello
```

### Example 2

```python
print("Welcome to Python")
```

**Output:**

```text
Welcome to Python
```

### Example 3

```python
print("I am learning Python")
```

**Output:**

```text
I am learning Python
```

---

## 1.10. Vocabulary to Remember

| Term      | Meaning                                         |
| --------- | ----------------------------------------------- |
| Python    | Programming language                            |
| Program   | A program                                       |
| Command   | An instruction                                  |
| Text File | A text file containing source code              |
| Run       | Execute a program                               |
| `print()` | A function used to display output on the screen |

---

## 1.11. Summary

After this lesson, remember the following:

* Python is a programming language used to communicate with computers.
* The instructions sent to a computer are called **commands**.
* Commands are written in a program file with the **.py** extension.
* When you click **Run**, Python will:

  1. Read the program.
  2. Translate the program into a language the computer can understand.
  3. Execute the instructions.
  4. Display the output on the screen.
* The `print()` function is the first function you learn in Python. It is used to display output on the screen.

---

# 2. Comments

## 2.1. What is a Comment?

A **comment** is text written inside a program that is **not executed** by Python.

In other words, comments are intended for people reading the program, while Python ignores them when the program runs.

In Python, everything that appears after the **#** symbol on the same line is treated as a comment.

**Syntax:**

```python
# This is a comment
```

**Example:**

```python
# This is my first program
print("Hello World")
```

**Output:**

```text
Hello World
```

In the example above, the comment line is not executed. Only the `print("Hello World")` statement is run.

---

## 2.2. Purpose of Comments

Comments make programs easier to read, understand, and maintain during development.

### 2.2.1. Explaining the Purpose of Code

Comments help explain the reason or purpose of a section of code.

**Example:**

```python
# This variable will be used to count the number of times anyone writes a post containing the word persnickety
persnickety_count = 0
```

In the example above, the comment explains that the variable `persnickety_count` is used to count how many times the word **persnickety** appears in posts.

**Note:** You do not need to understand the meaning of variables (`persnickety_count = 0`) yet. This lesson focuses only on how to use comments.

---

### 2.2.2. Helping Others Understand the Program

Comments help readers quickly understand what a section of code does.

**Example:**

```python
# This code will calculate the likelihood that it will rain tomorrow
complicated_rain_calculation_for_tomorrow()
```

In the example above, the comment explains that the code below is used to calculate the probability that it will rain tomorrow.

---

### 2.2.3. Temporarily Ignoring a Line of Code

Comments can be used to temporarily disable a line of code without deleting it.

**Example:**

```python
# useful_value = old_sloppy_code()
useful_value = new_clean_code()
```

In the example above:

* The first line has been commented out, so Python ignores it.
* Only the second line is executed.

This technique is commonly used when testing or debugging a program.

---

## 2.3. Practice Exercise

**Task:**

Documentation is an important step in programming. Write a comment describing the first program you want to write!

**Instructions:**

Write a comment describing the first program you would like to create.

**Example:**

```python
# My first program will print "Hello World".
```

Or:

```python
# This program prints my name.
```

As long as the line begins with the **#** symbol, it is a valid comment.

---

## 2.4. Summary

After this lesson, remember the following:

* A **comment** is a note for people reading the code and is **not executed** by Python.
* In Python, comments begin with the **#** symbol.
* Comments are commonly used to:

  * Explain the purpose of a section of code.
  * Help others understand the program more easily.
  * Temporarily ignore a line of code while testing or debugging.
* Using comments makes programs clearer and easier to maintain.

---

# 3. Print

## 3.1. What is the `print()` Function?

In Python, `print()` is a **function** used to display information on the screen.

In other words, `print()` allows a program to "communicate" with the user by displaying messages or results.

**Syntax:**

```python
print("Content to display")
```

**Example:**

```python
print("Hello World!")
```

**Output:**

```text
Hello World!
```

---

## 3.2. How to Use the `print()` Function

When using `print()`, the content to be displayed must:

* Be placed inside parentheses `()`.
* Be enclosed in either double quotation marks `" "` or single quotation marks `' '`.

**Example:**

```python
print("Hello World!")
```

Or:

```python
print('Hello World!')
```

Both statements produce the same output:

```text
Hello World!
```

---

## 3.3. What is Output?

**Output** is the result displayed after the program executes a `print()` statement.

**Example:**

```python
print("Python")
```

The output displayed on the screen is:

```text
Python
```

In the example above:

* The statement:

```python
print("Python")
```

is called the **source code**.

* The result:

```text
Python
```

is called the **output**.

---

## 3.4. Displaying Output in Codecademy

In the Codecademy learning environment, after clicking **Run**, the program's output is displayed in the **Terminal**.

**Example:**

```python
print("Hello World!")
```

After running the program, the Terminal displays:

```text
Hello World!
```

---

## 3.5. Practice Exercise

**Task:**

Print the distinguished greeting, **Hello world!**

**Instructions:**

Display the following text:

```text
Hello world!
```

**Solution:**

```python
print("Hello world!")
```

**Output:**

```text
Hello world!
```

**Note:** The displayed text must exactly match the required output, including uppercase letters, lowercase letters, and punctuation.

---

## 3.6. Summary

After this lesson, remember the following:

* `print()` is a function used to display information on the screen.
* The content to be displayed must be placed inside parentheses `()` and enclosed in either double quotation marks `" "` or single quotation marks `' '`.
* The result displayed after running a program is called the **output**.
* In Codecademy, the output is displayed in the **Terminal** after the program is run.

---

# 4. Strings

## 4.1. What is a String?

In programming, a **string** is a sequence of characters used to represent text.

A string can contain:

* Letters
* Numbers
* Special characters
* Spaces

**Examples:**

```python
"Hello World!"
"Python"
"12345"
"Xin chào"
```

In the previous lesson, the first string we used was:

```python
"Hello world!"
```

This is a **string**.

---

## 4.2. How to Create a String in Python

In Python, a string must be enclosed in either:

* Double quotation marks `" "`; or
* Single quotation marks `' '`.

**Syntax:**

Using double quotation marks:

```python
"This is a string"
```

Or using single quotation marks:

```python
'This is a string'
```

**Example:**

```python
print("Hello World!")
```

Or:

```python
print('Hello World!')
```

Both statements produce the same output:

```text
Hello World!
```

---

## 4.3. Double Quotes and Single Quotes

Python allows you to use either type of quotation mark to create a string:

* Double quotation marks `" "`
* Single quotation marks `' '`

**Example:**

```python
print("Python")
print('Python')
```

Both programs produce the same output:

```text
Python
```

The important thing is to use the **same type of quotation mark** at both the beginning and the end of the string.

**Correct:**

```python
print("Python")
print('Python')
```

**Incorrect:**

```python
print("Python')
print('Python")
```

The two examples above will cause an error because the opening and closing quotation marks do not match.

---

## 4.4. Consistency

Python does not require you to use either double quotation marks or single quotation marks.

You may choose either style, as long as you use matching quotation marks within the same string.

**Example:**

```python
print("Hello")
```

and

```python
print('Hello')
```

are both valid and produce the same output.

---

## 4.5. Practice Exercise

### Task 1

Print your name using the `print()` function.

**Example:**

```python
print("Yến Nhi")
```

**Output:**

```text
Yến Nhi
```

---

### Task 2

If you are using double quotation marks `" "`, change them to single quotation marks `' '`.

**Example:**

Initially:

```python
print("Yến Nhi")
```

Change it to:

```python
print('Yến Nhi')
```

Run the program again.

**Output:**

```text
Yến Nhi
```

The output remains exactly the same.

This shows that Python treats strings created with double quotation marks and single quotation marks in the same way.

---

## 4.6. Summary

After this lesson, remember the following:

* A **string** is a sequence of characters used to represent text.
* In Python, a string is enclosed in:

  * Double quotation marks `" "`; or
  * Single quotation marks `' '`.
* Both methods are valid and produce the same result.
* The opening and closing quotation marks of a string must be the same type.
* You may use either double quotation marks or single quotation marks, as long as they are used consistently within each string.

---

# 5. Variables

## 5.1. What is a Variable?

A **variable** is a place used to store data so that it can be reused multiple times in a program.

Instead of entering the same value repeatedly, we can store the value in a variable and use it whenever needed.

**Example:**

```python
message_string = "Hello there"

print(message_string)
```

**Output:**

```text
Hello there
```

In the example above:

* `message_string` is the **variable name**.
* `"Hello there"` is the **value** stored in the variable.

---

## 5.2. Creating and Assigning a Value to a Variable

In Python, we use the **`=`** operator to assign a value to a variable.

**Syntax:**

```python
variable_name = value
```

**Example:**

```python
message_string = "Hello there"
```

**Meaning:**

* Create a variable named `message_string`.
* Store the string `"Hello there"` in that variable.

Once a variable has been created, it can be used anywhere in the program.

**Example:**

```python
message_string = "Hello there"

print(message_string)
```

**Output:**

```text
Hello there
```

---

## 5.3. Rules for Naming Variables

When naming variables in Python, follow these rules:

### Variable names cannot contain spaces.

**Correct:**

```python
student_name = "Alice"
```

**Incorrect:**

```python
student name = "Alice"
```

### You can use underscores (`_`).

**Example:**

```python
message_string = "Hello"
student_name = "Alice"
```

Underscores are commonly used to separate words in variable names.

### Variable names cannot begin with a number.

**Incorrect:**

```python
1name = "Alice"
```

**Correct:**

```python
name1 = "Alice"
```

### Variable names may contain numbers after the first character.

**Example:**

```python
cool_variable_5 = "Python"
```

The variable name above is completely valid.

---

## 5.4. Changing the Value of a Variable

A variable is called a **variable** because its value can change while the program is running.

**Example:**

```python
# Greeting
message_string = "Hello there"
print(message_string)

# Farewell
message_string = "Hasta la vista"
print(message_string)
```

**Output:**

```text
Hello there
Hasta la vista
```

In the example above:

* Initially, the variable `message_string` stores the value `"Hello there"`.
* Later, the variable is assigned the new value `"Hasta la vista"`.
* When it is printed the second time, the new value is displayed.

**Note:** When you assign a new value to a variable, the old value is replaced.

---

## 5.5. Practice Exercise

**Task:**

Given the following code:

```python
# We've defined the variable "meal" here to the name of the food we ate for breakfast!
meal = "An english muffin"

# Printing out breakfast
print("Breakfast:")
print(meal)

# Now update meal to be lunch!
meal =

# Printing out lunch
print("Lunch:")
print(meal)

# Now update "meal" to be dinner
meal =

# Printing out dinner
print("Dinner:")
print(meal)
```

**Instructions:**

Update the variable `meal` to store the food for:

* Lunch
* Dinner

**Example:**

```python
meal = "An english muffin"

print("Breakfast:")
print(meal)

meal = "Pizza"

print("Lunch:")
print(meal)

meal = "Steak"

print("Dinner:")
print(meal)
```

**Output:**

```text
Breakfast:
An english muffin
Lunch:
Pizza
Dinner:
Steak
```

---

## 5.6. Summary

After this lesson, remember the following:

* A **variable** is a place used to store data so that it can be reused.
* Use the **`=`** operator to assign a value to a variable.
* A variable can be used multiple times throughout a program.
* The value of a variable can be changed by assigning it a new value.
* When naming variables:

  * Do not include spaces.
  * Do not begin with a number.
  * You may use underscores (`_`).
  * You may include numbers after the first character.

---

# 6. Errors

## 6.1. What is an Error?

While writing a program, we may make mistakes. In Python, these mistakes are called **errors**.

When a program encounters an error, Python will:

* Stop executing the program.
* Display an **error message**.
* Indicate the location of the error with the **`^`** character.

**Example:**

```python
print("Hello"
```

**Output:**

```text
  File "main.py", line 1
    print("Hello"
                 ^
SyntaxError: '(' was never closed
```

The **`^`** character helps identify the location where Python detected the error.

---

## 6.2. Bug and Debugging

If a program contains an error that we did not intend, that error is called a **bug**.

The process of finding and fixing errors in a program is called **debugging**.

Simply put:

* **Bug:** An error in a program.
* **Debugging:** The process of finding and fixing errors.

---

## 6.3. `SyntaxError`

A **`SyntaxError`** is a syntax error.

This error occurs when a program is written in a way that does not follow Python's syntax rules.

Some common causes include:

* Missing parentheses.
* Missing a colon (`:`).
* Using mismatched double or single quotation marks.
* Writing an incorrect statement structure.

**Example:**

```python
print("Hello')
```

**Output:**

```text
SyntaxError
```

**Cause:**

* The string begins with a double quotation mark (`"`).
* But it ends with a single quotation mark (`'`).

The correct code is:

```python
print("Hello")
```

or

```python
print('Hello')
```

---

## 6.4. `NameError`

A **`NameError`** occurs when Python encounters a name that it does not recognize.

A common cause is using a variable that has not been defined or forgetting to put quotation marks around a string.

**Example:**

```python
print(Hello)
```

**Output:**

```text
NameError
```

**Cause:**

Python interprets `Hello` as the name of a variable.

However, since no variable named `Hello` has been created, Python raises a `NameError`.

The correct code is:

```python
print("Hello")
```

or

```python
print('Hello')
```

Now Python understands that `Hello` is a string, not a variable name.

---

## 6.5. Practice Exercise

The task is to fix two errors in the program.

### Error 1: `SyntaxError`

**Incorrect:**

```python
print('Hello")
```

**Correct:**

```python
print("Hello")
```

or

```python
print('Hello')
```


### Error 2: `NameError`

**Incorrect:**

```python
print(Hello)
```

**Correct:**

```python
print("Hello")
```

or

```python
print('Hello')
```

After fixing both errors, the program will run successfully.

---

## 6.6. Summary

After this lesson, remember the following:

* An **error** is a problem that occurs in a program.
* When an error occurs, Python displays an **error message** and indicates the error location with the **`^`** character.
* A **bug** is an unintended error in a program.
* **Debugging** is the process of finding and fixing errors.
* Two common errors in Python are:

  * **`SyntaxError`**: A syntax error caused by violating Python's syntax rules.
  * **`NameError`**: An error that occurs when using a name (usually a variable name) that Python does not recognize.

---

# 7. Numbers

## 7.1. What are Numbers?

In addition to **strings**, Python also supports working with **numbers**.

Numbers are used to store numeric values and perform calculations in a program.

Python has several numeric data types. In this lesson, we will learn about the two most common ones:

* **Integer (`int`)**: Whole numbers.
* **Float**: Decimal numbers.

---

## 7.2. Integer (`int`)

An **integer (`int`)** is a data type used to represent whole numbers, meaning numbers without a decimal part.

Integers include:

* Positive whole numbers.
* Negative whole numbers.
* Zero.

**Examples:**

```python
1
25
0
-10
1000
```

Integers are commonly used to represent values that are counted.

**Examples:**

* The number of people in a room.
* The number of books on a shelf.
* The number of keys on a keyboard.

---

## 7.3. Float

A **float** is a data type used to represent decimal numbers.

**Examples:**

```python
2.5
3.14
0.75
-1.8
100.0
```

Floats are commonly used to represent:

* Values with fractional parts.
* Measurements.
* Average values.

**Examples:**

* A person's height.
* The length of a room.
* A student's average grade.

---

## 7.4. Assigning Numbers to Variables

Just like strings, numbers can also be stored in variables.

**Example:**

```python
an_int = 2
a_float = 2.1
```

In this example:

* `an_int` stores an **int** value.
* `a_float` stores a **float** value.

These variables can then be used throughout the program.

**Example:**

```python
an_int = 2

print(an_int)
```

**Output:**

```text
2
```

---

## 7.5. Literals

Besides storing numbers in variables, we can also use numbers directly in a program.

**Example:**

```python
an_int = 2

print(an_int + 3)
```

**Output:**

```text
5
```

In the example above:

* `an_int` is a variable with the value `2`.
* `3` is written directly in the program.

A value written directly in the code is called a **literal**.

In other words:

* A **variable** stores data.
* A **literal** is a value written directly in the source code.

---

## 7.6. A Note About Floats

In some cases, floating-point numbers (`float`) may not produce completely accurate results.

This happens because of the way computers store decimal numbers in memory.

**Example:**

A calculation may produce:

```text
0.30000000000000004
```

instead of:

```text
0.3
```

This is a normal behavior when working with the `float` data type.

**Note:** You do not need to understand this in detail yet. Later lessons will explain it more thoroughly.

---

## 7.7. Practice Exercise

The task is to create three variables:

* `release_year`: stores the movie's release year (**int**).
* `runtime`: stores the movie's running time (**int**).
* `rating_out_of_10`: stores the movie's rating from 1 to 10 (**float**).

**Example:**

```python
release_year = 2024
runtime = 125
rating_out_of_10 = 8.7
```

In this example:

* `2024` is an **int**.
* `125` is an **int**.
* `8.7` is a **float**.

---

## 7.8. Summary

After this lesson, remember the following:

* Python supports several numeric data types, with **`int`** and **`float`** being the most common.
* An **integer (`int`)** is a whole number without a decimal part.
* A **float** is a decimal number.
* Numbers can be stored in variables just like strings.
* Besides using variables, you can also write numeric values directly in a program. Such values are called **literals**.
* Because of how computers store decimal numbers, floating-point values (`float`) may sometimes produce results that are not completely accurate.

---

# 8. Calculations

## 8.1. Performing Calculations in Python

Besides displaying text and storing data, Python can also perform mathematical calculations.

In fact, computers were created to perform calculations quickly and accurately.

Python supports the following basic arithmetic operators:

| Operator | Operation      | Example  | Result |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `5 + 3`  | `8`    |
| `-`      | Subtraction    | `10 - 4` | `6`    |
| `*`      | Multiplication | `6 * 2`  | `12`   |
| `/`      | Division       | `8 / 2`  | `4.0`  |

---

## 8.2. Addition (`+`)

The `+` operator is used to add two numbers.

**Example:**

```python
print(573 - 74 + 1)
```

**Output:**

```text
500
```

In the calculation above:

* `573 - 74 = 499`
* `499 + 1 = 500`

---

## 8.3. Multiplication (`*`)

The `*` operator is used to multiply two numbers.

**Example:**

```python
print(25 * 2)
```

**Output:**

```text
50
```

---

## 8.4. Division (`/`)

The `/` operator is used to divide one number by another.

**Example:**

```python
print(10 / 5)
```

**Output:**

```text
2.0
```

Notice that the result is `2.0` instead of `2`.

This is because in Python 3, using the `/` operator always produces a value of type **float**, even when the result is a whole number.

**Example:**

```python
print(8 / 4)
```

**Output:**

```text
2.0
```

---

## 8.5. `ZeroDivisionError`

In Python, dividing by zero is not allowed.

If you attempt to divide a number by zero, the program will raise a **`ZeroDivisionError`**.

**Example:**

```python
print(10 / 0)
```

**Output:**

```text
ZeroDivisionError
```

**Note:** Always make sure the divisor is not zero before performing division.

---

## 8.6. Order of Operations

Python follows the standard order of operations used in mathematics.

The basic order is:

1. Parentheses `()`
2. Multiplication `*` and division `/`
3. Addition `+` and subtraction `-`

**Example:**

```python
print(2 + 3 * 4)
```

**Output:**

```text
14
```

**Explanation:**

* Perform the multiplication first:

```text
3 * 4 = 12
```

* Then perform the addition:

```text
2 + 12 = 14
```

If you want the addition to be performed first, use parentheses:

```python
print((2 + 3) * 4)
```

**Output:**

```text
20
```

---

## 8.7. Practice Exercise

**Task:**

Print out the result of this equation:

```text
25 * 68 + 13 / 28
```

**Solution:**

```python
print(25 * 68 + 13 / 28)
```

**Output:**

```text
1700.4642857142858
```

**Explanation:**

Python follows the order of operations:

1. `25 * 68 = 1700`
2. `13 / 28 = 0.4642857142857143`
3. `1700 + 0.4642857142857143 = 1700.4642857142858`

---

## 8.8. Summary

After this lesson, remember the following:

* Python supports the following basic arithmetic operators:

  * `+` : Addition
  * `-` : Subtraction
  * `*` : Multiplication
  * `/` : Division
* In Python 3, using the `/` operator always produces a **float** result.
* Dividing by zero raises a **`ZeroDivisionError`**.
* Python performs calculations according to the standard **order of operations**.

---

# 9. Changing Numbers

## 9.1. Performing Calculations with Variables

In the previous lesson, we learned that numeric values can be stored in variables.

When a variable stores a numeric value (`int` or `float`), we can use that variable in calculations just like using a normal number.

**Example:**

```python id="6pg3f4"
coffee_price = 1.50
number_of_coffees = 4

print(coffee_price * number_of_coffees)
```

**Output:**

```text id="1l3j2b"
6.0
```

In the example above:

* `coffee_price` has the value `1.50`.
* `number_of_coffees` has the value `4`.

Python uses the values of both variables to perform the multiplication:

```text id="n5b3jm"
1.50 × 4 = 6.0
```

---

## 9.2. Performing Calculations Does Not Change Variable Values

When performing calculations with variables, the values of the variables do not automatically change.

**Example:**

```python id="mxyq1o"
coffee_price = 1.50
number_of_coffees = 4

print(coffee_price * number_of_coffees)
print(coffee_price)
print(number_of_coffees)
```

**Output:**

```text id="6b9i5d"
6.0
1.5
4
```

**Explanation:**

* The multiplication creates the result `6.0`.
* However:

  * `coffee_price` still has the value `1.5`.
  * `number_of_coffees` still has the value `4`.

This shows that a calculation only creates a new result; it does not change the values stored in the variables.

---

## 9.3. Updating the Value of a Variable

To change the value of a variable, we must use the assignment operator `=`.

**Example:**

```python id="h5s7fa"
coffee_price = 1.50

coffee_price = 2.00
```

After the second statement, the value of `coffee_price` is no longer `1.50`. It becomes `2.00`.

---

## 9.4. Calculations Use the New Value of a Variable

After updating a variable, all following calculations will use the new value.

**Example:**

```python id="n9x0c5"
coffee_price = 1.50
number_of_coffees = 4

print(coffee_price * number_of_coffees)

coffee_price = 2.00

print(coffee_price * number_of_coffees)
```

**Output:**

```text id="9l6f1z"
6.0
8.0
```

**Explanation:**

First calculation:

```text id="h6xj9b"
1.50 × 4 = 6.0
```

After updating:

```python id="0m0e6v"
coffee_price = 2.00
```

Second calculation:

```text id="l0j7o9"
2.00 × 4 = 8.0
```

The variable `number_of_coffees` does not change, so it still has the value `4`.

---

## 9.5. Practice Exercise

The task is to create a rectangular quilt.

### Requirement 1

Create two variables:

* `quilt_width` with the value `8`.
* `quilt_length` with the value `12`.

**Example:**

```python id="0k4p4k"
quilt_width = 8
quilt_length = 12
```


### Requirement 2

Print the total number of squares needed to make the quilt.

The calculation formula is:

```text id="lyw7r9"
Width × Length
```

**Example:**

```python id="1c6g3j"
print(quilt_width * quilt_length)
```

**Output:**

```text id="2p3q72"
96
```


### Requirement 3

Change the quilt length from `12` to `8`.

**Example:**

```python id="9u5v3s"
quilt_length = 8
```

Then print the number of squares needed again:

```python id="4n3bpx"
print(quilt_width * quilt_length)
```

**Output:**

```text id="z6q5nl"
64
```

This shows that after updating a variable's value, calculations use the new value.

---

## 9.6. Summary

After this lesson, remember the following:

* Variables that store numbers can be used in calculations just like normal numbers.
* Performing a calculation with a variable does not change the variable's value.
* To change the value of a variable, you must use the assignment operator `=`.
* After updating a variable's value, future calculations will use the variable's new value.

---

# 10. Exponents

## 10.1. What is Exponentiation?

Besides operations such as addition, subtraction, multiplication, and division, Python also supports **exponentiation**.

In mathematics, exponentiation is the operation of multiplying a number by itself multiple times.

**Examples:**

* (2^3 = 2 \times 2 \times 2 = 8)
* (5^2 = 5 \times 5 = 25)

In Python, exponentiation is performed using the **`**` operator** (two asterisks).

**Syntax:**

```python id="9w2q4x"
base ** exponent
```

Where:

* **base**: The number being raised to a power.
* **exponent**: The power.

---

## 10.2. Using the `**` Operator

The `**` operator is used to calculate powers.

**Example:**

```python id="0j6y9x"
print(2 ** 10)
```

**Output:**

```text id="7a4g3p"
1024
```

**Explanation:**

```text id="6w6m3o"
2 ** 10

= 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2

= 1024
```


**Example:**

```python id="w9qf0m"
print(8 ** 2)
```

**Output:**

```text id="2c0kqg"
64
```

**Explanation:**

```text id="9q4y4z"
8 ** 2

= 8 × 8

= 64
```

---

**Example:**

```python id="x2n6qv"
print(9 ** 3)
```

**Output:**

```text id="b3q7n8"
729
```

**Explanation:**

```text id="c6t7n2"
9 ** 3

= 9 × 9 × 9

= 729
```

---

## 10.3. Decimal Exponents

In Python, the exponent does not have to be an integer.

You can use a **float** value as an exponent.

**Example:**

```python id="9p3r2w"
print(4 ** 0.5)
```

**Output:**

```text id="q8d5m1"
2.0
```

**Explanation:**

An exponent of `0.5` is equivalent to taking the square root.

```text id="h6m2ks"
4 ** 0.5 = √4 = 2.0
```

**Note:** For now, you only need to know that Python allows decimal numbers to be used as exponents. More advanced concepts about square roots will be learned in mathematics or later lessons.

---

## 10.4. Practice Exercise

### Requirement 1

Use the `**` operator to calculate the number of squares in these quilt sizes:

* `6 × 6`
* `7 × 7`
* `8 × 8`

**Solution:**

```python id="r0x8s2"
# 6x6 quilt
print(6 ** 2)

# 7x7 quilt
print(7 ** 2)

# 8x8 quilt
print(8 ** 2)
```

**Output:**

```text id="m8s4k9"
36
49
64
```

**Explanation:**

* `6 ** 2 = 36`
* `7 ** 2 = 49`
* `8 ** 2 = 64`

### Requirement 2

Given:

* `6` people.
* Each person needs `6` quilts.
* Each quilt has a size of `6 × 6`.

Number of squares needed for one quilt:

```text id="3n8m7p"
6 ** 2 = 36
```

Total number of quilts:

```text id="5k1z9v"
6 × 6 = 36
```

Total number of squares:

```python id="j3f8x0"
print((6 ** 2) * 6 * 6)
```

**Output:**

```text id="k9p2q1"
1296
```

---

## 10.5. Summary

After this lesson, remember the following:

* Python uses the `**` operator to perform exponentiation.
* Syntax:

```python id="5n3v8a"
base ** exponent
```

* Examples:

  * `2 ** 10` → `1024`
  * `8 ** 2` → `64`
  * `9 ** 3` → `729`

* Python also allows the use of floats as exponents. For example, `4 ** 0.5` gives the result `2.0`.

* The `**` operator is useful for calculating square areas, volumes, and other calculations involving powers.

---

# 11. Modulo

## 11.1. What is Modulo?

Besides division (`/`), Python also provides the **modulo operator (`%`)**.

**Modulo** is an operation used to find the **remainder of a division**.

**Syntax:**

```python
dividend % divisor
```

Where:

* `dividend`: The number being divided.
* `divisor`: The number that divides the dividend.

The result of a modulo operation is the **remainder** after performing the division.

---

## 11.2. How the `%` Operator Works

**Example:**

```python
print(29 % 5)
```

**Output:**

```text
4
```

**Explanation:**

```text
29 ÷ 5 = 5 remainder 4
```

Therefore:

```text
29 % 5 = 4
```

**Example:**

```python
print(32 % 3)
```

**Output:**

```text
2
```

**Explanation:**

```text
32 ÷ 3 = 10 remainder 2
```

Therefore:

```text
32 % 3 = 2
```


*** If the division has no remainder, the result is **0**.

**Example:**

```python
print(20 % 5)
```

**Output:**

```text
0
```

**Explanation:**

```text
20 ÷ 5 = 4 remainder 0
```

---

## 11.3. Using Modulo to Check Even and Odd Numbers

A very common use of modulo is **checking whether a number is even or odd**.

### Checking an Even Number

If:

```python
number % 2 == 0
```

then the number is **even**.

**Example:**

```python
print(44 % 2)
```

**Output:**

```text
0
```

Because the remainder is `0`, `44` is an even number.


### Checking an Odd Number

If:

```python
number % 2 == 1
```

then the number is **odd**.

**Example:**

```python
print(45 % 2)
```

**Output:**

```text
1
```

Because the remainder is `1`, `45` is an odd number.

---

## 11.4. The Pattern of Modulo

Observe the following examples:

```python
print(3 % 3)
```

```python
print(4 % 3)
```

```python
print(5 % 3)
```

```python
print(6 % 3)
```

```python
print(7 % 3)
```

**Output:**

```text
0
```

```text
1
```

```text
2
```

```text
0
```

```text
1
```

Explanation:

| Calculation | Remainder |
| ----------- | --------- |
| `3 % 3`     | 0         |
| `4 % 3`     | 1         |
| `5 % 3`     | 2         |
| `6 % 3`     | 0         |
| `7 % 3`     | 1         |

We can see that the remainder repeats in a cycle:

```text
0 → 1 → 2 → 0 → 1 → 2 → ...
```

This is an important characteristic of the modulo operator.

---

## 11.5. Applications of Modulo

Modulo is often used when we want to perform an action **after every n occurrences**.

Example:

A coffee shop wants to give a survey form to **every 7th customer**.

We can check using:

```python
transaction_number % 7
```

If the result is:

```text
0
```

then that customer will receive the survey form.

**Example:**

```python
print(14 % 7)
```

**Output:**

```text
0
```

Customer number **14** will receive the survey form.

---

## 11.6. Practice Exercise

### Requirement 1

The first order has the ID:

```text
269
```

Calculate the remainder when dividing by `10`.

**Example:**

```python
first_order_remainder = 269 % 10

print(first_order_remainder)
```

**Output:**

```text
9
```

Because the remainder is not `0`, the customer **does not receive** a discount coupon.

The result can be stored:

```python
first_order_coupon = "no"
```

### Requirement 2

The second order has the ID:

```text
270
```

Calculate the remainder:

```python
second_order_remainder = 270 % 10

print(second_order_remainder)
```

**Output:**

```text
0
```

Because the remainder is `0`, the customer **receives** a discount coupon.

The result can be stored:

```python
second_order_coupon = "yes"
```

---

## 11.7. Summary

After this lesson, remember the following:

* The `%` operator is called **Modulo**.
* Modulo is used to calculate the remainder of a division.
* If a number divides evenly, the modulo result is **0**.
* Modulo can be used to:

  * Check even and odd numbers.
  * Check whether one number is divisible by another number.
  * Perform an action after every **n** repetitions or every **n** objects.
* Modulo is one of the most commonly used operators in programming.

---

# 12. Concatenation

## 12.1. What is Concatenation?

**Concatenation** is the process of combining two or more strings together to create a new string.

In Python, string concatenation is performed using the **`+` operator**.

**Note:** The `+` operator is not only used for adding numbers; it can also be used to join strings together.

---

## 12.2. Concatenating Two Strings

**Syntax:**

```python id="p8kq0m"
new_string = string1 + string2
```

**Example:**

```python id="k7n4vx"
greeting_text = "Hey there!"
question_text = "How are you doing?"

full_text = greeting_text + question_text

print(full_text)
```

**Output:**

```text id="m8g2yq"
Hey there!How are you doing?
```

You can see that there is no space between the two strings.

This is because Python only joins the contents of the two strings together and does not automatically add spaces.

---

## 12.3. Adding Spaces When Concatenating Strings

If you want a space between two strings, you must add a string containing a space (`" "`).

**Example:**

```python id="x5v3pa"
greeting_text = "Hey there!"
question_text = "How are you doing?"

full_text = greeting_text + " " + question_text

print(full_text)
```

**Output:**

```text id="r2j7mt"
Hey there! How are you doing?
```

In the example above:

```text id="z7w1pn"
" "
```

is a string that contains only one space character.

Python concatenates in this order:

```text id="a5s9kd"
"Hey there!"
+
" "
+
"How are you doing?"
```

Therefore, the output contains a space between the two strings.

---

## 12.4. Concatenating Strings with Numbers

You cannot directly concatenate a string and a number.

**Example:**

```python id="u4m9cp"
age = 10

print("I am " + age)
```

**Output:**

```text id="s8k3yx"
TypeError
```

**Reason:**

* `"I am "` is a string.
* `10` is an integer.

Python does not allow directly joining two different data types.

---

## 12.5. The `str()` Function

To concatenate a number with a string, you need to convert the number into a string using the `str()` function.

**Syntax:**

```python id="w1x7qs"
str(value)
```

**Example:**

```python id="n6m2hz"
birthday_string = "I am "
age = 10
birthday_string_2 = " years old today!"

full_birthday_string = birthday_string + str(age) + birthday_string_2

print(full_birthday_string)
```

**Output:**

```text id="b9y3qp"
I am 10 years old today!
```

In this example:

```python id="q4j7vk"
str(age)
```

converts the value:

```text id="d0v8ml"
10
```

from type `int` into a string:

```text id="f3s2qa"
"10"
```

After that, Python can concatenate the strings together.

---

## 12.6. Printing Numbers with `print()`

If you only want to display strings and numbers on the screen, you do not need to use `str()`.

You can pass multiple arguments to the `print()` function using commas.

**Example:**

```python id="h8q5zs"
birthday_string = "I am "
age = 10
birthday_string_2 = " years old today!"

print(birthday_string, age, birthday_string_2)
```

**Output:**

```text id="p6w4nk"
I am 10  years old today!
```

In the example above:

* `birthday_string` is a string.
* `age` is an integer.
* `birthday_string_2` is a string.

The `print()` function can display multiple data types without needing to convert them using `str()`.

**Note:** When passing multiple arguments separated by commas, `print()` automatically inserts a space between each argument. Therefore, if the original strings already contain spaces at the beginning or end, the output may contain more than one space.

---

## 12.7. Practice Exercise

The task is to concatenate the 6 given strings into one complete string and store it in the variable `message`.

**Example:**

```python id="c7m5qa"
string1 = "The wind, "
string2 = "which had hitherto carried us along with amazing rapidity, "
string3 = "sank at sunset to a light breeze; "
string4 = "the soft air just ruffled the water and "
string5 = "caused a pleasant motion among the trees as we approached the shore, "
string6 = "from which it wafted the most delightful scent of flowers and hay."

message = string1 + string2 + string3 + string4 + string5 + string6

print(message)
```

**Output:**

```text id="x8f3vj"
The wind, which had hitherto carried us along with amazing rapidity, sank at sunset to a light breeze; the soft air just ruffled the water and caused a pleasant motion among the trees as we approached the shore, from which it wafted the most delightful scent of flowers and hay.
```

**Note:** The exercise already includes the necessary spaces inside each string, so there is no need to add `" "` when concatenating.

---

## 12.8. Summary

After this lesson, remember the following:

* Concatenation is the process of joining multiple strings into a new string.
* In Python, the `+` operator is used to concatenate strings.
* Python does not automatically add spaces when concatenating strings.
* You cannot directly concatenate a string with a number.
* To concatenate a number with a string, convert the number into a string using the `str()` function.
* If you only want to display strings and numbers on the screen, you can pass multiple arguments to `print()` using commas without using `str()`.

---

# 13. Plus Equals (`+=`)

## 13.1. What is the `+=` Operator?

In Python, `+=` (read as **plus equals**) is an operator used to update the value of a variable by adding a new value to it.

Instead of writing:

```python id="x0m5kv"
variable = variable + value
```

we can write it more simply:

```python id="q8s1jd"
variable += value
```

These two ways of writing are completely equivalent.

---

## 13.2. Using `+=` with Numbers

Suppose we have a variable that stores the number of miles walked:

```python id="w5p8ra"
number_of_miles_hiked = 12
```

If we walk 2 more miles today, we can update it like this:

```python id="z6h3qp"
number_of_miles_hiked += 2

print(number_of_miles_hiked)
```

**Output:**

```text id="r4x9bn"
14
```

This is equivalent to:

```python id="j2m7qa"
number_of_miles_hiked = number_of_miles_hiked + 2
```

Python performs the following steps:

1. Takes the current value of `number_of_miles_hiked`, which is `12`.
2. Adds `2`.
3. Assigns the result `14` back to the variable.

---

## 13.3. Comparing the Two Ways of Writing

### Normal way

**Example:**

```python id="f8z2mn"
score = 80

score = score + 5

print(score)
```

**Output:**

```text id="s1v7pk"
85
```

---

### Shortened way

**Example:**

```python id="y5c9tx"
score = 80

score += 5

print(score)
```

**Output:**

```text id="p3k8vm"
85
```

The two programs produce the same result.

However, using `+=` is shorter and is used very commonly in Python.

---

## 13.4. Using `+=` with Strings

The `+=` operator is not only used with numbers. It can also be used to concatenate strings.

**Example:**

```python id="v7m4qa"
hike_caption = "What an amazing time to walk through nature!"

hike_caption += " #nofilter"
hike_caption += " #blessed"

print(hike_caption)
```

**Output:**

```text id="c5x9mw"
What an amazing time to walk through nature! #nofilter #blessed
```

Process:

Initially:

```text id="h2q8nb"
"What an amazing time to walk through nature!"
```

After the first statement:

```python id="n7v0ms"
hike_caption += " #nofilter"
```

The variable becomes:

```text id="j6p3za"
"What an amazing time to walk through nature! #nofilter"
```

After the second statement:

```python id="k3w8qp"
hike_caption += " #blessed"
```

The variable becomes:

```text id="d9x4mt"
"What an amazing time to walk through nature! #nofilter #blessed"
```

Each time we use `+=`, the new string is added to the end of the existing string.

---

## 13.5. When Should We Use `+=`?

The `+=` operator is useful when we need to:

* Accumulate scores.
* Add up the number of products.
* Calculate a total price.
* Count the number of repetitions.
* Add more content to a string.

**Example of calculating total price:**

```python id="m4q7vx"
total_price = 0

total_price += 50
total_price += 39
total_price += 20

print(total_price)
```

**Output:**

```text id="w8n2kp"
109
```

---

## 13.6. Practice Exercise

Given:

```python id="a8v2mq"
total_price = 0

new_sneakers = 50.00

total_price += new_sneakers

nice_sweater = 39.00
fun_books = 20.00
```

**Requirement:**

Use `+=` to add the prices of:

* `nice_sweater`
* `fun_books`

**Solution:**

```python id="q4m8vs"
total_price = 0

new_sneakers = 50.00

total_price += new_sneakers

nice_sweater = 39.00
fun_books = 20.00

total_price += nice_sweater
total_price += fun_books

print("The total price is", total_price)
```

**Output:**

```text id="z7p5kn"
The total price is 109.0
```

Calculation process:

```text id="t3v9ma"
Starting value:     0

+ 50.00  =          50.00

+ 39.00  =          89.00

+ 20.00  =         109.00
```

---

## 13.7. Summary

After this lesson, remember the following:

* The `+=` operator is used to update the value of a variable by adding a new value.
* The statement:

```python id="b6x0qn"
x += y
```

is equivalent to:

```python id="n9r3pk"
x = x + y
```

* `+=` can be used with:

  * Numbers to accumulate values.
  * Strings to concatenate additional text.
* `+=` makes code shorter, easier to read, and is used very commonly in Python.

---

# 14. Multi-line Strings

## 14.1. What is a Multi-line String?

Normally, a string in Python is written on a single line.

**Example:**

```python id="u3k9am"
print("Hello World")
```

If you try to write a string that extends across multiple lines using a single quote (`'`) or double quote (`"`), Python will raise a **SyntaxError**.

**Example:**

```python id="x6p2vq"
print("Hello
World")
```

**Output:**

```text id="z8m4nd"
SyntaxError
```

The reason is that Python understands that the string must end on the first line.

To create a string that contains multiple lines, Python provides **Multi-line Strings**.

---

## 14.2. Creating a Multi-line String

To create a multi-line string, use three double quotes (`"""`) or three single quotes (`'''`).

**Syntax:**

Using three double quotes:

```python id="j9q5ws"
"""
Content of line 1
Content of line 2
Content of line 3
"""
```

Or using three single quotes:

```python id="k4m8xp"
'''
Content of line 1
Content of line 2
Content of line 3
'''
```

Both methods have the same meaning.

---

## 14.3. Example of a Multi-line String

**Example:**

```python id="w7v3zn"
leaves_of_grass = """
Poets to come! orators, singers, musicians to come!
Not to-day is to justify me and answer what I am for,
But you, a new brood, native, athletic, continental, greater than before known,
Arouse! for you must justify me.
"""
```

In this example:

* The string starts with `"""`.
* The string ends at the next `"""`.
* Everything between them belongs to the same string, including line breaks.

If we print the string:

```python id="b5m2qa"
print(leaves_of_grass)
```

**Output:**

```text id="n6x8pv"
Poets to come! orators, singers, musicians to come!
Not to-day is to justify me and answer what I am for,
But you, a new brood, native, athletic, continental, greater than before known,
Arouse! for you must justify me.
```

Python keeps the line breaks exactly as they appear in the source code.

---

## 14.4. When Should We Use Multi-line Strings?

Multi-line Strings are useful when storing:

* A poem.
* A song.
* A paragraph.
* A long message.
* Text containing multiple lines.

**Example:**

```python id="m8v1qx"
address = """
123 Nguyen Hue Street
District 1
Ho Chi Minh City
"""
```

When printed:

```python id="q2n7pk"
print(address)
```

**Output:**

```text id="x9k3mv"
123 Nguyen Hue Street
District 1
Ho Chi Minh City
```

---

## 14.5. Multi-line Strings as Comments

If a Multi-line String is not assigned to a variable and is not used in an expression, Python will ignore it.

**Example:**

```python id="a6r4wp"
"""
This is a note.

Python will ignore this section.
"""

print("Hello")
```

**Output:**

```text id="m7q5zs"
Hello
```

Because the multi-line string is not assigned to a variable, it works similarly to a comment.

**Note:** Although Multi-line Strings can be used like comments, according to Python conventions, you should use the `#` symbol for normal comments. Multi-line Strings are mainly used for storing multi-line text.

---

## 14.6. Practice Exercise

The task is to assign the following paragraph to the variable `to_you`:

```text id="p4v8qm"
Stranger, if you passing meet me and desire to speak to me,
  why should you not speak to me?
And why should I not speak to you?
```

**Solution:**

```python id="c9w2sk"
to_you = """
Stranger, if you passing meet me and desire to speak to me,
  why should you not speak to me?
And why should I not speak to you?
"""

print(to_you)
```

**Output:**

```text id="r5m8yx"
Stranger, if you passing meet me and desire to speak to me,
  why should you not speak to me?
And why should I not speak to you?
```

As you can see, Python keeps the line breaks and spaces inside the string.

---

## 14.7. Summary

After this lesson, remember the following:

* A **Multi-line String** is a string that contains multiple lines.
* Use three double quotes (`"""`) or three single quotes (`'''`) to create a multi-line string.
* Python preserves line breaks inside the string.
* Multi-line Strings are suitable for storing long text or text with multiple lines.
* If a Multi-line String is not assigned to a variable or used in an expression, Python ignores it, and it can work similarly to a comment.