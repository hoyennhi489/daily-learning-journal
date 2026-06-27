# 1. Control Flow

After completing the **Hello World** chapter, we have learned how to:

* Display data using `print()`.
* Store data in variables.
* Perform calculations.
* Concatenate strings.
* Update the value of variables.

However, all of those programs were executed in a fixed order.

**Example:**

```python
print("Step 1")
print("Step 2")
print("Step 3")
```

The output will always be:

```text
Step 1
Step 2
Step 3
```

Python always executes code from top to bottom in order.

In real-world applications, however, a program often needs to make decisions.

This ability to make decisions is called **Control Flow**.

**Control Flow** is the way a program decides which code should be executed and which code should be skipped based on certain conditions.

### Why Do We Need Control Flow?

If a program only runs from top to bottom, it cannot make decisions.

For example, consider a login program.

If the user enters the correct password:

```text
Login successful
```

If the user enters the wrong password:

```text
Incorrect password
```

Clearly, the program cannot print both:

```text
Login successful
```

and

```text
Incorrect password
```

at the same time.

It must first check a condition, then decide which block of code to execute.

That is the purpose of **Control Flow**.

---

# 2. Boolean Expressions

## 2.1. What is a Boolean Expression?

For a program to make decisions, it must first determine whether a condition is true or false.

In Python, this is done using a **Boolean Expression**.

A **Boolean Expression** is an expression or statement whose result can only be one of two values:

* **True**
* **False**

There is no third possible value.

---

## 2.2. Conditions for a Statement to Be a Boolean Expression

A statement is considered a Boolean Expression only if it satisfies both of the following conditions.

### Condition 1: It Has Only Two Possible Results

The result of the statement can only be:

* **True**
* **False**

**Example:**

> Today is a weekday.

This statement has only two possibilities:

* True.
* False.

It cannot be both true and false at the same time.

---

### Condition 2: It Can Be Verified

The statement must be verifiable using facts or data.

**Example:**

> The Earth revolves around the Sun.

This statement can be verified using scientific knowledge.

Therefore, it is a Boolean Expression.

---

## 2.3. Statements That Are Not Boolean Expressions

Not every statement is a Boolean Expression.

If a statement expresses an opinion, feeling, or personal preference, it is **not** a Boolean Expression.

**Example:**

> Friday is the best day of the week.

This is a personal opinion.

Some people like Friday.

Others prefer Sunday.

There is no objectively correct answer.

Therefore, this is **not** a Boolean Expression.

Another example:

> Chocolate ice cream tastes better than vanilla.

This is also a matter of personal preference.

It cannot be objectively determined to be true or false.

Therefore, it is **not** a Boolean Expression.

---

## 2.4. A Boolean Expression Does Not Have to Be True

This is a point that often confuses beginners.

A Boolean Expression does **not** have to be true.

It only needs to:

* Be verifiable.
* Have exactly two possible results: **True** or **False**.

**Example:**

> Sunday starts with the letter "C".

In reality,

```text
Sunday
```

starts with the letter:

```text
S
```

Therefore, this statement is:

```text
False
```

However, it is still a Boolean Expression because it can be verified.

---

## 2.5. Why Are Boolean Expressions Important?

Computers do not understand concepts such as:

* Maybe.
* Mostly true.
* Kind of.
* In my opinion...

A computer works with only two states:

```text
True
```

or

```text
False
```

Later, conditional statements (`if`) will rely on the result of Boolean Expressions.

**Example:**

```python
if raining:
    bring_umbrella
```

Python checks:

```text
raining
```

If it is:

```text
True
```

→ Execute the instruction to bring an umbrella.

If it is:

```text
False
```

→ Skip it.

---

## 2.6. Practice Exercise

### Requirement 1

Statement:

> The Earth revolves around the Sun.

Is this a Boolean Expression?

Yes, because:

* It can be verified.
* It has only two possible results: True or False.

**Solution:**

```python
first_statement = "Yes"
```


### Requirement 2

Statement:

> The Moon is made of cheese.

Although this statement is false, it can still be verified.

Therefore, it is still a Boolean Expression.

**Solution:**

```python
second_statement = "Yes"
```


### Requirement 3

Statement:

> Chocolate ice cream tastes better than vanilla.

This is a personal opinion.

There is no objectively correct answer.

Therefore, it is **not** a Boolean Expression.

**Solution:**

```python
third_statement = "No"
```

---

## 2.7. Summary

After this lesson, remember the following:

* A **Boolean Expression** is an expression or statement that has only two possible results:

  * **True**
  * **False**
* A Boolean Expression must:

  * Be verifiable.
  * Not be based on personal opinions or feelings.
* A Boolean Expression does **not** have to be true; it only needs to be clearly determinable as true or false.
* Boolean Expressions are the foundation of conditional statements (`if`, `elif`, and `else`), which will be covered in the following lessons.

---

# 3. Relational Operators

## 3.1. What are Relational Operators?

In the previous lesson, we learned that a **Boolean Expression** is an expression that has only two possible results:

* **True**
* **False**

So, how do we create Boolean Expressions?

Python provides **Relational Operators**, also known as **Comparison Operators**.

Relational Operators are used to compare two values and return:

* **True** if the condition is true.
* **False** if the condition is false.

---

## 3.2. The Equal To Operator (`==`)

The `==` operator is used to check whether two values are equal.

**Syntax:**

```python
value_1 == value_2
```

If the two values are equal:

```text
True
```

If they are different:

```text
False
```

### Example 1

```python
print(1 == 1)
```

**Output:**

```text
True
```

**Explanation:**

`1` is equal to `1`.

Therefore, the result is:

```text
True
```


### Example 2

```python
print(3 == 5)
```

**Output:**

```text
False
```

**Explanation:**

`3` is not equal to `5`.

---

## 3.3. The Not Equal To Operator (`!=`)

The `!=` operator is used to check whether two values are different.

**Syntax:**

```python
value_1 != value_2
```

If the two values are different:

```text
True
```

If they are the same:

```text
False
```

### Example 1

```python
print(2 != 4)
```

**Output:**

```text
True
```

**Explanation:**

`2` is different from `4`.


### Example 2

```python
print(1 != 1)
```

**Output:**

```text
False
```

**Explanation:**

`1` is not different from `1`.

The two values are the same, so the result is **False**.

---

## 3.4. Comparing Strings and Numbers

Python compares not only values but also their **data types**.

**Example:**

```python
print('7' == 7)
```

**Output:**

```text
False
```

**Explanation:**

On the left:

```text
'7'
```

is a **String**.

On the right:

```text
7
```

is an **Integer**.

Although they both look like the number 7, they belong to different data types.

Therefore, Python returns:

```text
False
```

**Note:** Python does not automatically convert between strings and numbers when using the `==` operator.

---

## 3.5. The Difference Between `=` and `==`

This is one of the most common mistakes made by beginners.

### The `=` Operator

Used to assign a value to a variable.

**Example:**

```python
age = 18
```

Meaning:

Assign the value `18` to the variable `age`.

---

### The `==` Operator

Used to compare two values.

**Example:**

```python
print(age == 18)
```

Meaning:

Check whether `age` is equal to `18`.

**Output:**

```text
True
```

**Remember:**

* `=` → Assigns a value.
* `==` → Compares two values.

---

## 3.6. Practice Exercise

### Requirement 1

Expression:

```python
2 * 2 == 2 + 2
```

Step-by-step:

```text
2 × 2 = 4

2 + 2 = 4
```

Compare:

```text
4 == 4
```

**Result:**

```text
True
```

**Solution:**

```python
first_expression = True
```


### Requirement 2

Expression:

```python
3 + 3 != 3 * 3
```

Step-by-step:

```text
3 + 3 = 6

3 × 3 = 9
```

Compare:

```text
6 != 9
```

**Result:**

```text
True
```

**Solution:**

```python
second_expression = True
```


### Requirement 3

Expression:

```python
3 * 3 == '9'
```

Step-by-step:

```text
3 × 3 = 9
```

Compare:

```text
9 == '9'
```

Where:

* `9` is an `int`.
* `'9'` is a `string`.

Since they have different data types, the result is:

```text
False
```

**Solution:**

```python
third_expression = False
```

---

## 3.7. Summary

After this lesson, remember the following:

* **Relational Operators** (Comparison Operators) are used to compare two values.
* The result of a comparison is always:

  * **True**
  * **False**
* The two operators introduced in this lesson are:

  * `==` : equal to.
  * `!=` : not equal to.
* Python compares both the value and the data type. Therefore:

  * `7 == 7` → **True**
  * `'7' == 7` → **False**
* Remember the difference:

  * `=` is used to assign a value.
  * `==` is used to compare values.

---

# 4. Boolean Variables

## 4.1. What is a Boolean Variable?

In the previous lesson, we learned about **Boolean Expressions**—expressions that have only two possible results:

* **True**
* **False**

In Python, `True` and `False` are not just ordinary words. They belong to a separate data type called **Boolean** (abbreviated as **bool**).

A variable assigned the value `True` or `False` is called a **Boolean Variable**.

A Boolean Variable can store only one of two values:

* **True**
* **False**

---

## 4.2. The `bool` Data Type

Python has many different data types, such as:

| Data Type | Example         |
| --------- | --------------- |
| `int`     | `10`            |
| `float`   | `3.14`          |
| `str`     | `"Hello"`       |
| `bool`    | `True`, `False` |

Where:

* `True` means **true**.
* `False` means **false**.

These are the only two values of the `bool` data type.

---

## 4.3. Creating a Boolean Variable

### Method 1. Assign `True` or `False` Directly

This is the simplest method.

**Example:**

```python
set_to_true = True
set_to_false = False
```

Here:

* `set_to_true` stores the value `True`.
* `set_to_false` stores the value `False`.

You can print them:

```python
print(set_to_true)
print(set_to_false)
```

**Output:**

```text
True
False
```

---

## 4.4. Creating a Boolean Variable from a Comparison Expression

Besides assigning `True` or `False` directly, you can assign the result of a Boolean Expression to a variable.

**Example:**

```python
bool_one = 5 != 7
bool_two = 1 + 1 != 2
bool_three = 3 * 3 == 9
```

Python evaluates the expression first and then stores the result in the variable.

### Example 1

```python
bool_one = 5 != 7
```

Python checks:

Is `5` different from `7`?

**Result:**

```text
True
```

Therefore,

```text
bool_one
```

stores the value:

```text
True
```


### Example 2

```python
bool_two = 1 + 1 != 2
```

Python calculates:

```text
1 + 1 = 2
```

Then compares:

```text
2 != 2
```

**Result:**

```text
False
```

### Example 3

```python
bool_three = 3 * 3 == 9
```

Python calculates:

```text
3 × 3 = 9
```

Then compares:

```text
9 == 9
```

**Result:**

```text
True
```

---

## 4.5. Printing the Value of a Boolean Variable

**Example:**

```python
bool_one = 5 != 7

print(bool_one)
```

**Output:**

```text
True
```

**Note:**

Python does not print the expression itself.

It only prints the value stored in the variable.

---

## 4.6. The Difference Between `"True"` and `True`

This is another very common mistake made by beginners.

Compare:

```python
my_baby_bool = "True"
```

and

```python
my_baby_bool = True
```

They are **not** the same.

### Case 1

```python
my_baby_bool = "True"
```

The quotation marks indicate that this is a:

**String**

It is simply a sequence of four characters:

```text
T
r
u
e
```

Data type:

```text
str
```

### Case 2

```python
my_baby_bool = True
```

There are no quotation marks.

This is a Boolean value.

Data type:

```text
bool
```

---

## 4.7. Checking the Data Type with `type()`

Python provides the `type()` function to check the data type of a value or variable.

**Syntax:**

```python
type(variable_name)
```

**Example:**

```python
age = 20

print(type(age))
```

**Output:**

```text
<class 'int'>
```

Example with a string:

```python
name = "Alice"

print(type(name))
```

**Output:**

```text
<class 'str'>
```

Example with a Boolean:

```python
is_student = True

print(type(is_student))
```

**Output:**

```text
<class 'bool'>
```

---

## 4.8. Notes on Using `True` and `False`

When writing Boolean values in Python, remember:

* Capitalize the first letter:

  * `True`
  * `False`
* Do not put them inside quotation marks.

Correct:

```python
True
False
```

Incorrect:

```python
true
false
"True"
"False"
'True'
'False'
```

If you write:

```python
true
```

Python will raise an error because `true` is not a valid keyword.

---

## 4.9. Practice Exercise

### Requirement 1

Create the variable:

```text
my_baby_bool
```

and assign it the string `"true"`.

**Solution:**

```python
my_baby_bool = "true"
```

This is a **String**, not a Boolean.


### Requirement 2

Check its data type:

```python
print(type(my_baby_bool))
```

**Output:**

```text
<class 'str'>
```


### Requirement 3

Create the variable:

```text
my_baby_bool_two
```

and assign it a Boolean value.

**Solution:**

```python
my_baby_bool_two = True
```


### Requirement 4

Check its data type:

```python
print(type(my_baby_bool_two))
```

**Output:**

```text
<class 'bool'>
```

---

## 4.10. Summary

After this lesson, remember the following:

* `True` and `False` are the only two values of the `bool` data type.
* A variable that stores `True` or `False` is called a **Boolean Variable**.
* You can create a Boolean Variable in two ways:

  * Assign `True` or `False` directly.
  * Assign the result of a Boolean Expression.
* The `type()` function is used to check the data type of a variable.
* Remember the difference:

  * `"True"` → `str` (string).
  * `True` → `bool` (Boolean).
* When writing Boolean values:

  * Capitalize the first letter (`True`, `False`).
  * Do not put them inside quotation marks (`"` or `'`).

---

# 5. If Statement

## 5.1. What is an if Statement?

In the previous lessons, we learned that:

* A **Boolean Expression** is an expression that has only two possible results:

  * **True**
  * **False**
* A **Boolean Variable** is a variable that stores either **True** or **False**.

But what is the point of having **True** or **False** if the program doesn't do anything with those values?

This is where the **if statement** comes in.

An **if statement** is a conditional statement used to check whether a condition is true.

* If the condition is **True**, Python executes a block of code.
* If the condition is **False**, Python skips that block of code.

This is the first conditional statement you will learn, and it is one of the most important foundations of Python programming.

---

## 5.2. Syntax of an if Statement

**Syntax:**

```python
if condition:
    statement
```

Where:

* **if** is a Python keyword.
* **condition** is a Boolean Expression or a Boolean Variable.
* The **colon (`:`)** indicates the beginning of a block of code.
* The statements inside the block **must be indented**.

**Example:**

```python
is_raining = True

if is_raining:
    print("Bring an umbrella")
```

**Output:**

```text
Bring an umbrella
```

**Explanation:**

Python checks:

```python
is_raining
```

Its value is:

```python
True
```

Therefore, Python executes:

```python
print("Bring an umbrella")
```

---

## 5.3. What Happens When the Condition is False?

**Example:**

```python
is_raining = False

if is_raining:
    print("Bring an umbrella")
```

**Output:**

```text
(No output.)
```

**Explanation:**

The condition is:

```python
False
```

Therefore, Python skips the entire block of code inside the **if** statement.

---

## 5.4. An if Statement Can Check a Boolean Expression

The condition in an **if** statement does not have to be a variable.

It can also be a comparison expression.

**Example:**

```python
if 2 == 4 - 2:
    print("apple")
```

Python evaluates:

```python
4 - 2 = 2
```

Then compares:

```python
2 == 2
```

The result is:

```python
True
```

Therefore:

```text
apple
```

is printed.

Another example:

```python
if 5 > 10:
    print("Hello")
```

Python checks:

```python
5 > 10
```

The result is:

```python
False
```

Therefore, nothing is printed.

---

## 5.5. The Colon (`:`)

An **if** condition must always end with a colon (`:`).

**Correct:**

```python
if True:
    print("Python")
```

If you forget the colon:

```python
if True
    print("Python")
```

Python will report:

```text
SyntaxError
```

This is one of the most common mistakes made by beginners.

---

## 5.6. Indentation

After the colon (`:`), every statement inside the **if** block must be indented.

**Correct:**

```python
if True:
    print("Hello")
```

**Incorrect:**

```python
if True:
print("Hello")
```

Python will report an error because the `print()` statement is not indented.

In Python, indentation is not just for making code look neat—it is part of the language's syntax.

By convention, each indentation level uses **4 spaces**.

---

## 5.7. How an if Statement Works

```text
          Condition
              │
      ┌───────┴────────┐
      │                │
    True             False
      │                │
      ▼                ▼
Execute code      Skip code
```

---

## 5.8. Practice Exercise

### Requirement 1

Assign a username.

Example:

```python
user_name = "Dave"
```

### Requirement 2

The original code:

```python
if user_name = "Dave":
    print("Get off my computer Dave!")
```

Python reports:

```text
SyntaxError
```

**Reason:**

The code uses:

```python
=
```

for comparison.

Inside an **if** statement, you must use:

```python
==
```

**Correct solution:**

```python
if user_name == "Dave":
    print("Get off my computer Dave!")
```

### Requirement 3

Suppose Dave logs in using the account:

```text
angela_catlady_87
```

Set:

```python
user_name = "angela_catlady_87"
```

Add another **if** statement:

```python
if user_name == "angela_catlady_87":
    print("I know it is you, Dave! Go away!")
```

Complete program:

```python
user_name = "angela_catlady_87"

if user_name == "Dave":
    print("Get off my computer Dave!")

if user_name == "angela_catlady_87":
    print("I know it is you, Dave! Go away!")
```

**Output:**

```text
I know it is you, Dave! Go away!
```

---

## 5.9. Common Mistakes

### Mistake 1. Using `=` instead of `==`

**Incorrect:**

```python
if age = 18:
```

**Correct:**

```python
if age == 18:
```


### Mistake 2. Forgetting the Colon (`:`)

**Incorrect:**

```python
if age == 18
```

**Correct:**

```python
if age == 18:
```


### Mistake 3. Missing Indentation

**Incorrect:**

```python
if True:
print("Hello")
```

**Correct:**

```python
if True:
    print("Hello")
```

---

## 5.10. Summary

After this lesson, you should remember:

* An **if statement** is a conditional statement used to check a condition.
* If the condition is **True**, Python executes the block of code inside the **if** statement.
* If the condition is **False**, Python skips that block of code.
* The condition in an **if** statement is usually a **Boolean Expression** or a **Boolean Variable**.
* A colon (`:`) must always follow the condition.
* All statements inside an **if** block must be properly **indented**.
* Be sure to distinguish between:

  * `=` → Assigns a value.
  * `==` → Compares two values.

---

# 6. Relational Operators II

## 6.1. Introduction

In the previous lesson, we learned two comparison operators:

| Operator | Meaning      |
| -------- | ------------ |
| `==`     | Equal to     |
| `!=`     | Not equal to |

However, in programming, we often need to compare more than whether two values are equal. We also need to determine whether one value is:

* Greater than
* Less than
* Greater than or equal to
* Less than or equal to

Python provides four additional relational operators for these comparisons.

---

## 6.2. Comparison Operators

| Operator | Meaning                  |
| -------- | ------------------------ |
| `>`      | Greater than             |
| `>=`     | Greater than or equal to |
| `<`      | Less than                |
| `<=`     | Less than or equal to    |

Like `==` and `!=`, these operators always return:

* **True**
* **False**

---

## 6.3. Greater Than (`>`)

The `>` operator checks whether the value on the left is greater than the value on the right.

**Syntax:**

```python
value_1 > value_2
```

If the condition is true:

```python
True
```

Otherwise:

```python
False
```

**Example:**

```python
print(10 > 5)
```

**Output:**

```text
True
```

**Example:**

```python
print(3 > 8)
```

**Output:**

```text
False
```

---

## 6.4. Greater Than or Equal To (`>=`)

The `>=` operator checks whether the value on the left is:

* Greater than
* **Or equal to**

the value on the right.

**Syntax:**

```python
value_1 >= value_2
```

### Example 1

```python
print(18 >= 18)
```

**Output:**

```text
True
```

Because:

```text
18 is equal to 18
```

### Example 2

```python
print(20 >= 18)
```

**Output:**

```text
True
```

### Example 3

```python
print(10 >= 18)
```

**Output:**

```text
False
```

---

## 6.5. Less Than (`<`)

The `<` operator checks whether the value on the left is less than the value on the right.

**Example:**

```python
print(3 < 5)
```

**Output:**

```text
True
```

**Example:**

```python
print(9 < 2)
```

**Output:**

```text
False
```

---

## 6.6. Less Than or Equal To (`<=`)

The `<=` operator checks whether the value on the left is:

* Less than
* **Or equal to**

the value on the right.

**Example:**

```python
print(5 <= 5)
```

**Output:**

```text
True
```

**Example:**

```python
print(2 <= 8)
```

**Output:**

```text
True
```

**Example:**

```python
print(10 <= 8)
```

**Output:**

```text
False
```

---

## 6.7. Using Comparison Operators with an if Statement

Comparison operators are commonly used in **if statements**.

**Example:**

```python
age = 12

if age <= 13:
    print("Sorry, parental control required")
```

**Explanation:**

Python checks:

```python
12 <= 13
```

The result is:

```python
True
```

Therefore, the program prints:

```text
Sorry, parental control required
```

If:

```python
age = 16

if age <= 13:
    print("Sorry, parental control required")
```

Python checks:

```python
16 <= 13
```

The result is:

```python
False
```

Therefore, nothing is printed.

---

## 6.8. Practice Exercise

### Requirement 1

The exercise asks you to check whether **x** and **y** are equal.

If they are equal, print:

```text
These numbers are the same
```

**Solution:**

```python
if x == y:
    print("These numbers are the same")
```

**Explanation:**

* If **x** equals **y**, print the message.
* Otherwise, skip the statement.


### Requirement 2

A university requires students to have **at least 120 credits** to graduate.

This means:

* 120 credits → Eligible to graduate.
* 121 credits → Eligible to graduate.
* 150 credits → Eligible to graduate.

Therefore, we must use:

```python
>=
```

**Solution:**

```python
if credits >= 120:
    print("You have enough credits to graduate!")
```

**Explanation:**

If:

```python
credits = 120
```

Python checks:

```python
120 >= 120
```

The result is:

```python
True
```

The message will be printed.

Yes, a student with exactly **120 credits** is still eligible to graduate because the requirement is **greater than or equal to (`>=`) 120**, not strictly **greater than (`>`) 120**.

---

## 6.9. Comparison of Relational Operators

| Operator | Meaning                  | Example  | Result |
| -------- | ------------------------ | -------- | ------ |
| `==`     | Equal to                 | `5 == 5` | `True` |
| `!=`     | Not equal to             | `5 != 3` | `True` |
| `>`      | Greater than             | `8 > 4`  | `True` |
| `>=`     | Greater than or equal to | `8 >= 8` | `True` |
| `<`      | Less than                | `2 < 5`  | `True` |
| `<=`     | Less than or equal to    | `2 <= 2` | `True` |

---

## 6.10. Summary

After this lesson, you should remember:

* Python has **six relational operators**:

  * `==` : Equal to.
  * `!=` : Not equal to.
  * `>` : Greater than.
  * `>=` : Greater than or equal to.
  * `<` : Less than.
  * `<=` : Less than or equal to.
* These operators always return a Boolean value:

  * **True**
  * **False**
* They are commonly used in **if statements** to check conditions before executing a block of code.
* Be sure to distinguish between:

  * `>` and `<`, which only check whether one value is greater than or less than another.
  * `>=` and `<=`, which also include the case where the two values are equal. For example:

    * `120 > 120` → `False`
    * `120 >= 120` → `True`

---

# 7. Boolean Operators: `and`

## 7.1. Introduction

In previous lessons, we learned how to use **relational operators** to create **Boolean expressions**.

For example:

```python
age >= 18
```

The result of this expression can only be:

* `True`
* `False`

However, in real-world programs, we often need to check **more than one condition at the same time**.

For example:

* A student must have at least **120 credits**.
* **And** their GPA must be **2.0 or higher**.

Checking only one condition is not enough.

To combine multiple conditions into a single Boolean expression, Python provides **Boolean operators** (also called **logical operators**).

There are three important Boolean operators:

* `and`
* `or`
* `not`

In this lesson, we will learn about **`and`**.

---

## 7.2. What is the `and` Operator?

The **`and`** operator is used to combine two or more Boolean expressions.

The entire expression evaluates to **`True` only if every condition is true**.

If even one condition is `False`, the whole expression becomes `False`.

In simple terms:

**Condition 1 is true AND Condition 2 is true → True**

---

## 7.3. Syntax

```python
condition_1 and condition_2
```

Example:

```python
age >= 18 and has_id == True
```

This means:

* The person must be at least **18 years old**.
* They must also have a valid ID.

If either condition is not met, the result is `False`.

---

## 7.4. How `and` Works

### Case 1: Both conditions are true

```python
print((2 + 2 == 4) and (3 < 5))
```

First condition:

```python
2 + 2 == 4
```

→ `True`

Second condition:

```python
3 < 5
```

→ `True`

Result:

```python
True
```


### Case 2: The first condition is false

```python
print((5 < 2) and (3 == 3))
```

First condition:

```python
5 < 2
```

→ `False`

Second condition:

```python
3 == 3
```

→ `True`

Result:

```python
False
```

Only one false condition is enough to make the entire expression false.


### Case 3: The second condition is false

```python
print((8 > 5) and (4 > 10))
```

First condition:

→ `True`

Second condition:

→ `False`

Result:

```python
False
```


### Case 4: Both conditions are false

```python
print((1 > 5) and (6 == 7))
```

First condition:

→ `False`

Second condition:

→ `False`

Result:

```python
False
```

---

## 7.5. Truth Table for `and`

| Condition 1 | Condition 2 | Result |
| ----------- | ----------- | ------ |
| True        | True        | True   |
| True        | False       | False  |
| False       | True        | False  |
| False       | False       | False  |

**Remember:**

The `and` operator returns `True` **only when all conditions are `True`**.

---

## 7.6. Using `and` in an `if` Statement

Example:

```python
credits = 120
gpa = 3.2

if credits >= 120 and gpa >= 2.0:
    print("You meet the requirements to graduate!")
```

Python checks:

Condition 1:

```python
credits >= 120
```

↓

`True`

Condition 2:

```python
gpa >= 2.0
```

↓

`True`

Since both conditions are true, the program prints:

```text
You meet the requirements to graduate!
```

If:

```python
credits = 120
gpa = 1.8
```

Python checks:

```python
credits >= 120
```

↓

`True`

```python
gpa >= 2.0
```

↓

`False`

Result:

```python
True and False
```

↓

`False`

Therefore, the code inside the `if` statement is skipped.

---

## 7.7. Analyzing the Examples

### Example 1

```python
(1 + 1 == 2) and (2 + 2 == 4)
```

First condition:

`True`

Second condition:

`True`

Result:

```python
True
```


### Example 2

```python
(1 > 9) and (5 != 6)
```

First condition:

`False`

Second condition:

`True`

Result:

```python
False
```


### Example 3

```python
(1 + 1 == 2) and (2 < 1)
```

First condition:

`True`

Second condition:

`False`

Result:

```python
False
```


### Example 4

```python
(0 == 10) and (1 + 1 == 1)
```

First condition:

`False`

Second condition:

`False`

Result:

```python
False
```

---

## 7.8. Practice

### Task 1

Create two variables:

* `statement_one`
* `statement_two`

Solution:

```python
statement_one = (2 + 2 + 2 >= 6) and (-1 * -1 < 0)

statement_two = (4 * 2 <= 8) and (7 - 1 == 6)
```

### Explanation

**statement_one**

Condition 1:

```python
2 + 2 + 2 >= 6
```

↓

```python
6 >= 6
```

↓

`True`

Condition 2:

```python
-1 * -1 < 0
```

↓

```python
1 < 0
```

↓

`False`

Result:

```python
True and False
```

↓

`False`



**statement_two**

Condition 1:

```python
4 * 2 <= 8
```

↓

```python
8 <= 8
```

↓

`True`

Condition 2:

```python
7 - 1 == 6
```

↓

```python
6 == 6
```

↓

`True`

Result:

```python
True and True
```

↓

`True`


### Task 2

A student can graduate if:

* They have at least **120 credits**.
* Their GPA is **2.0 or higher**.

Solution:

```python
if credits >= 120 and gpa >= 2.0:
    print("You meet the requirements to graduate!")
```

Explanation:

* `credits >= 120` checks the credit requirement.
* `gpa >= 2.0` checks the GPA requirement.
* The message is printed only if **both conditions are true**.

---

## 7.9. Common Mistakes

### Mistake 1: Using `&` instead of `and`

Incorrect:

```python
if age >= 18 & has_id:
```

Correct:

```python
if age >= 18 and has_id:
```

### Mistake 2: Omitting a complete condition

Incorrect:

```python
if credits >= 120 and >= 2.0:
```

Correct:

```python
if credits >= 120 and gpa >= 2.0:
```

Each side of the `and` operator must be a complete Boolean expression.

---

## 7.10. Summary

After this lesson, you should remember:

* The **`and`** operator is used to combine multiple conditions.
* It returns **`True` only if all conditions are `True`**.
* If even one condition is `False`, the entire expression evaluates to `False`.
* `and` is commonly used inside `if` statements when multiple requirements must all be satisfied.
* Each side of the `and` operator must be a complete Boolean expression, for example:

```python
credits >= 120 and gpa >= 2.0
```

Do **not** write:

```python
credits >= 120 and >= 2.0
```

because this is **invalid Python syntax**.

---

# 8. Boolean Operators: `or`

## 8.1. What is the `or` operator?

The `or` operator is used to combine two or more Boolean expressions.

An expression using `or` returns **True** if **at least one** condition is **True**.

It returns **False** **only if all conditions are False**.

You can think of it like this:

> **Condition 1 is true OR Condition 2 is true → the result is True.**

---

## 8.2. Syntax

```python
condition_1 or condition_2
```

Example:

```python
is_student or is_teacher
```

If:

* `is_student` is `True`, **or**
* `is_teacher` is `True`

then the entire expression evaluates to `True`.

---

## 8.3. How `or` Works

### Case 1: The first condition is True

```python
print(True or False)
```

Output:

```python
True
```

Only one condition needs to be true.

### Case 2: The second condition is True

```python
print(False or True)
```

Output:

```python
True
```

### Case 3: Both conditions are True

```python
print(True or True)
```

Output:

```python
True
```

This is different from how people sometimes use "or" in everyday conversation.

In Python:

```python
True or True
```

still evaluates to:

```python
True
```

### Case 4: Both conditions are False

```python
print(False or False)
```

Output:

```python
False
```

This is the **only** case where `or` returns `False`.

---

## 8.4. Truth Table for `or`

| Condition 1 | Condition 2 | Result |
| ----------- | ----------- | ------ |
| True        | True        | True   |
| True        | False       | True   |
| False       | True        | True   |
| False       | False       | False  |

**Remember:**

`or` returns **False only when every condition is False.**

---

## 8.5. Analyzing the Examples

### Example 1

```python
True or (3 + 4 == 7)
```

First condition:

```python
True
```

Second condition:

```python
3 + 4 == 7
```

↓

```python
True
```

Result:

```python
True
```

### Example 2

```python
(1 - 1 == 0) or False
```

First condition:

```python
1 - 1 == 0
```

↓

```python
True
```

Second condition:

```python
False
```

Result:

```python
True
```


### Example 3

```python
(2 < 0) or True
```

First condition:

```python
False
```

Second condition:

```python
True
```

Result:

```python
True
```


### Example 4

```python
(3 == 8) or (3 > 4)
```

First condition:

```python
False
```

Second condition:

```python
False
```

Result:

```python
False
```

---

## 8.6. Using `or` in an `if` Statement

Example:

```python
credits = 130
gpa = 1.8

if credits >= 120 or gpa >= 2.0:
    print("You have met at least one of the requirements.")
```

Python checks:

Condition 1:

```python
credits >= 120
```

↓

```python
True
```

Condition 2:

```python
gpa >= 2.0
```

↓

```python
False
```

Result:

```python
True or False
```

↓

```python
True
```

The message is printed.

---

If:

```python
credits = 100
gpa = 2.5
```

Python checks:

```python
credits >= 120
```

↓

```python
False
```

```python
gpa >= 2.0
```

↓

```python
True
```

Result:

```python
False or True
```

↓

```python
True
```

The message is still printed.

---

If:

```python
credits = 90
gpa = 1.5
```

Python checks:

```python
False or False
```

↓

```python
False
```

Therefore, the code inside the `if` statement is **not executed**.

---

## 8.7. Practice Exercise

### Requirement 1

Create two variables:

* `statement_one`
* `statement_two`

Solution:

```python
statement_one = (2 - 1 > 3) or (-5 * 2 == -10)

statement_two = (9 + 5 <= 15) or (7 != 4 + 3)
```

#### Analysis of `statement_one`

Condition 1:

```python
2 - 1 > 3
```

↓

```python
1 > 3
```

↓

```python
False
```

Condition 2:

```python
-5 * 2 == -10
```

↓

```python
True
```

Result:

```python
False or True
```

↓

```python
True
```


#### Analysis of `statement_two`

Condition 1:

```python
9 + 5 <= 15
```

↓

```python
14 <= 15
```

↓

```python
True
```

Condition 2:

```python
7 != 4 + 3
```

↓

```python
7 != 7
```

↓

```python
False
```

Result:

```python
True or False
```

↓

```python
True
```


### Requirement 2

A student will receive a notification if they:

* Have at least **120 credits**, **or**
* Have a **GPA of 2.0 or higher**.

Solution:

```python
if credits >= 120 or gpa >= 2.0:
    print("You have met at least one of the requirements.")
```

Explanation:

* `credits >= 120` checks the credit requirement.
* `gpa >= 2.0` checks the GPA requirement.
* The message is printed if **either** condition is satisfied.
* The student does **not** need to satisfy **both** conditions.

---

## 8.8. Comparing `and` and `or`

| Operator | When is the result **True**?    |
| -------- | ------------------------------- |
| `and`    | All conditions are True.        |
| `or`     | At least one condition is True. |

Examples:

```python
age >= 18 and has_id
```

→ You must be **at least 18 years old** **and** have an ID.

```python
is_student or is_teacher
```

→ You only need to be **either** a student **or** a teacher.

---

## 8.9. Common Mistakes

#### Mistake 1: Misunderstanding `or`

Many beginners think:

```python
True or True
```

should evaluate to `False`.

This may match how "or" is sometimes used in everyday language, but it is **not** how Python works.

In Python:

```python
True or True
```

still evaluates to:

```python
True
```


#### Mistake 2: Writing an Incomplete Condition

Incorrect:

```python
if credits >= 120 or >= 2.0:
```

Correct:

```python
if credits >= 120 or gpa >= 2.0:
```

Each side of the `or` operator must be a **complete Boolean expression**.

---

## 8.10. Summary

After this lesson, you should remember:

* The `or` operator is used to combine multiple conditions.
* `or` returns **True** if **at least one** condition is `True`.
* `or` returns **False** only when **all** conditions are `False`.
* `or` is commonly used in `if` statements when satisfying **any one** of several conditions is enough.
* Remember the difference:

  * `and`: **All** conditions must be `True`.
  * `or`: **At least one** condition must be `True`.

---

# 9. Boolean Operators: `not`

## 9.1. Introduction

In the previous two lessons, we learned:

* `and`: all conditions must be true.
* `or`: at least one condition must be true.

In this lesson, we will learn the final logical operator: `not`.

Unlike `and` and `or`, which combine multiple conditions, `not` is used to **reverse** (negate) the Boolean value of a condition.

In other words:

* If a condition is `True`, `not` changes it to `False`.
* If a condition is `False`, `not` changes it to `True`.

---

## 9.2. What is the `not` Operator?

The `not` operator is a logical operator that **negates** (reverses) a Boolean expression.

You can think of it like this:

> **True → False**
> **False → True**

---

## 9.3. Syntax

```python
not condition
```

Example:

```python
not True
```

Output:

```python
False
```

Example:

```python
not False
```

Output:

```python
True
```

---

## 9.4. How `not` Works

### Case 1: Negating `True`

```python
print(not True)
```

Output:

```python
False
```


### Case 2: Negating `False`

```python
print(not False)
```

Output:

```python
True
```


### Case 3: Negating a Boolean Expression

```python
print(not (3 > 1))
```

Python evaluates:

```python
3 > 1
```

↓

```python
True
```

Then:

```python
not True
```

↓

```python
False
```


### Case 4

```python
print(not (10 < 5))
```

Python evaluates:

```python
10 < 5
```

↓

```python
False
```

Then:

```python
not False
```

↓

```python
True
```

---

## 9.5. Truth Table for `not`

| Original Value | After `not` |
| -------------- | ----------- |
| True           | False       |
| False          | True        |

**Remember:**

`not` always reverses a Boolean value.

---

## 9.6. Analyzing the Lesson Examples

### Example 1

```python
not 1 + 1 == 2
```

Python evaluates:

```python
1 + 1 == 2
```

↓

```python
True
```

Then:

```python
not True
```

↓

```python
False
```

---

### Example 2

```python
not 7 < 0
```

Python evaluates:

```python
7 < 0
```

↓

```python
False
```

Then:

```python
not False
```

↓

```python
True
```

---

## 9.7. Using `not` in an `if` Statement

Example:

```python
credits = 100

if not (credits >= 120):
    print("You do not have enough credits to graduate.")
```

Python evaluates:

```python
credits >= 120
```

↓

```python
False
```

Then:

```python
not False
```

↓

```python
True
```

Since the `if` condition is `True`, Python prints:

```text
You do not have enough credits to graduate.
```

---

If:

```python
credits = 130
```

Python evaluates:

```python
credits >= 120
```

↓

```python
True
```

Then:

```python
not True
```

↓

```python
False
```

Since the `if` condition is `False`, the code inside the `if` block is **not executed**.

---

## 9.8. Combining `not` with `and`

You can combine multiple logical operators together.

Example:

```python
credits = 100
gpa = 1.8

if not (credits >= 120) and not (gpa >= 2.0):
    print("You do not meet either requirement to graduate!")
```

Python evaluates each condition:

First condition:

```python
credits >= 120
```

↓

```python
False
```

↓

```python
not False
```

↓

```python
True
```

Second condition:

```python
gpa >= 2.0
```

↓

```python
False
```

↓

```python
not False
```

↓

```python
True
```

Result:

```python
True and True
```

↓

```python
True
```

Therefore, Python prints:

```text
You do not meet either requirement to graduate!
```

---

## 9.9. Practice Exercise

### Requirement 1

Create two variables:

* `statement_one`
* `statement_two`

Solution:

```python
statement_one = not (4 + 5 <= 9)

statement_two = not ((8 * 2) != (20 - 4))
```

**Note:** Adding parentheses like this makes the expressions clearer and easier to read.


### Analysis of `statement_one`

```python
not (4 + 5 <= 9)
```

Python evaluates:

```python
4 + 5
```

↓

```python
9
```

Then:

```python
9 <= 9
```

↓

```python
True
```

Finally:

```python
not True
```

↓

```python
False
```


### Analysis of `statement_two`

```python
not ((8 * 2) != (20 - 4))
```

Python evaluates:

```python
8 * 2
```

↓

```python
16
```

```python
20 - 4
```

↓

```python
16
```

Then:

```python
16 != 16
```

↓

```python
False
```

Finally:

```python
not False
```

↓

```python
True
```


### Requirement 2

Write `if` statements to check the graduation requirements.

#### Check the number of credits

```python
if not (credits >= 120):
    print("You do not have enough credits to graduate.")
```

Meaning:

* If the student **does not have at least 120 credits**, print the message.


#### Check the GPA

```python
if not (gpa >= 2.0):
    print("Your GPA is not high enough to graduate.")
```

Meaning:

* If the GPA is **below 2.0**, print the message.


#### Check both requirements

```python
if not (credits >= 120) and not (gpa >= 2.0):
    print("You do not meet either requirement to graduate!")
```

Meaning:

* If the student **does not have enough credits** **and** **does not have a high enough GPA**, print a message indicating that they meet **neither** graduation requirement.

---

## 9.10. Comparing `and`, `or`, and `not`

| Operator | Purpose                                    |
| -------- | ------------------------------------------ |
| `and`    | All conditions must be true.               |
| `or`     | At least one condition must be true.       |
| `not`    | Reverses the Boolean value of a condition. |

Examples:

```python
age >= 18 and has_id
```

→ You must be **at least 18 years old** **and** have an ID.

```python
is_student or is_teacher
```

→ You only need to be **either** a student **or** a teacher.

```python
not is_raining
```

→ It means **it is not raining**.

---

## 9.11. Common Mistakes

### Mistake 1: Forgetting Parentheses in Complex Expressions

Recommended:

```python
not (age >= 18)
```

Instead of:

```python
not age >= 18
```

Although Python understands both, using parentheses makes your code clearer and easier to read, especially for longer expressions.


### Mistake 2: Misunderstanding `not`

Example:

```python
not (5 > 3)
```

Many beginners think the result is still `True`.

Actually:

```python
5 > 3
```

↓

```python
True
```

↓

```python
not True
```

↓

```python
False
```


### Mistake 3: Confusing `!=` with `not`

Example:

```python
a != b
```

means:

> **a is not equal to b**

While:

```python
not (a == b)
```

means:

> **It is not true that a equals b.**

These two expressions often produce the same result, but:

* `!=` is a **comparison operator**.
* `not` is a **logical operator** used to negate a Boolean expression.

---

## 9.12. Summary

After this lesson, you should remember:

* `not` is a logical operator that reverses a Boolean value.
* `not True` returns `False`.
* `not False` returns `True`.
* `not` is commonly used to check whether a condition is **not true**.
* You can combine `not` with `and` or `or` to build more complex conditions.
* When negating a long expression, it's best to wrap the expression in parentheses to make your code clearer and easier to understand.

---

# 10. Else Statements

## 10.1. Introduction

In the previous lessons, we learned about the `if` statement.

An `if` statement allows a program to execute a block of code **when a condition is `True`**.

Example:

```python
age = 18

if age >= 18:
    print("You can vote.")
```

If `age >= 18` is `True`, the program prints:

```text
You can vote.
```

But what happens if the condition is **not** true?

For example:

```python
age = 15
```

The condition:

```python
age >= 18
```

is `False`.

In this case, the program does nothing.

However, in many situations, we want the program to do this:

* If the condition is true, do **Action A**.
* If the condition is false, do **Action B**.

Python provides the **`else` statement** to handle the case when the `if` condition is **not** satisfied.

---

## 10.2. What is `else`?

`else` is an extension of the `if` statement.

It executes a different block of code when the `if` condition is `False`.

In simple terms:

* If the condition is **True** → execute the `if` block.
* If the condition is **False** → execute the `else` block.

---

## 10.3. Syntax

```python
if condition:
    block_1
else:
    block_2
```

Where:

* If `condition` is `True`, Python executes `block_1`.
* If `condition` is `False`, Python executes `block_2`.

**Remember:**

* `else` **does not have a condition**.
* Always place a colon (`:`) after `else`.
* The code inside `else` must be properly **indented**, just like the code inside `if`.

---

## 10.4. How `else` Works

### Case 1: The condition is `True`

```python
age = 18

if age >= 18:
    print("Access granted.")
else:
    print("Access denied.")
```

Python checks:

```python
age >= 18
```

↓

`True`

Output:

```text
Access granted.
```

The `else` block is skipped.

### Case 2: The condition is `False`

```python
age = 10

if age >= 18:
    print("Access granted.")
else:
    print("Access denied.")
```

Python checks:

```python
age >= 18
```

↓

`False`

Output:

```text
Access denied.
```

The `if` block is skipped.

---

## 10.5. Analyzing the Lesson Examples

### Example 1

```python
if weekday:
    print("wake up at 6:30")
else:
    print("sleep in")
```

If:

```python
weekday = True
```

Python evaluates:

```python
weekday
```

↓

`True`

Output:

```text
wake up at 6:30
```

---

If:

```python
weekday = False
```

Python evaluates:

```python
weekday
```

↓

`False`

Output:

```text
sleep in
```

---

### Example 2

```python
age = 15

if age >= 13:
    print("Access granted.")
else:
    print("Sorry, you must be 13 or older to watch this movie.")
```

If:

```python
age = 15
```

The condition:

```python
15 >= 13
```

↓

`True`

Output:

```text
Access granted.
```

---

If:

```python
age = 10
```

The condition:

```python
10 >= 13
```

↓

`False`

Output:

```text
Sorry, you must be 13 or older to watch this movie.
```

---

## 10.6. How `if...else` Works

```text
            Condition
                │
        ┌───────┴───────┐
      True            False
        │                 │
        ▼                 ▼
 Execute the        Execute the
   if block         else block
```

**Only one of the two blocks is executed.**

---

## 10.7. Practice

### Task

If a student:

* Has at least **120 credits**, **and**
* Has a **GPA of at least 2.0**

print:

```text
You meet the requirements to graduate.
```

Otherwise print:

```text
You do not meet the requirements to graduate.
```

### Solution

```python
if credits >= 120 and gpa >= 2.0:
    print("You meet the requirements to graduate.")
else:
    print("You do not meet the requirements to graduate.")
```

### Explanation

Suppose:

```python
credits = 125
gpa = 3.1
```

Python evaluates:

```python
credits >= 120 and gpa >= 2.0
```

↓

`True`

Output:

```text
You meet the requirements to graduate.
```

---

If:

```python
credits = 100
gpa = 3.2
```

Python evaluates:

```python
credits >= 120
```

↓

`False`

Expression:

```python
False and True
```

↓

`False`

Output:

```text
You do not meet the requirements to graduate.
```

---

If:

```python
credits = 120
gpa = 1.5
```

Python evaluates:

```python
True and False
```

↓

`False`

Output:

```text
You do not meet the requirements to graduate.
```

---

## 10.8. When Should You Use `else`?

Use `else` whenever your program has **exactly two possible outcomes**:

* The condition is **True**.
* The condition is **False**.

### Example: Checking Age

```python
age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

### Example: Checking Even or Odd

```python
number = 8

if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

### Example: Checking a Password

```python
password = "python123"

if password == "python123":
    print("Login successful")
else:
    print("Wrong password")
```

---

## 10.9. Common Mistakes

### Mistake 1: Forgetting the Colon (`:`)

❌ Incorrect

```python
if age >= 18
    print("Adult")
else
    print("Minor")
```

✅ Correct

```python
if age >= 18:
    print("Adult")
else:
    print("Minor")
```

### Mistake 2: Incorrect Indentation

❌ Incorrect

```python
if age >= 18:
print("Adult")
else:
print("Minor")
```

✅ Correct

```python
if age >= 18:
    print("Adult")
else:
    print("Minor")
```

The code inside both `if` and `else` must be indented.

---

### Mistake 3: Adding a Condition After `else`

❌ Incorrect

```python
else age < 18:
    print("Minor")
```

✅ Correct

```python
else:
    print("Minor")
```

`else` **never has a condition**.

If you need to check another condition, use `elif` (which will be introduced in the next lesson).

---

## 10.10. Summary

After this lesson, you should remember:

* `else` is always paired with an `if` statement.
* The `else` block executes when the `if` condition is `False`.
* `else` does **not** have a condition—simply write `else:`.
* In an `if...else` statement, **only one** of the two code blocks is executed.
* `if...else` is useful for handling two possible outcomes (true or false), making your programs clearer, shorter, and easier to read.

---

# 11. Else If Statements (`elif`)

## 11.1. What is `elif`?

In the previous lesson, we learned about the `if...else` structure.

Example:

```python
age = 20

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

This structure only works well when a program has **two possible cases**:

* The condition is **True**.
* The condition is **False**.

However, many real-world problems involve **more than two possibilities**.

For example:

* Score **90 or above** → Grade **A**
* Score **80 to under 90** → Grade **B**
* Score **70 to under 80** → Grade **C**
* Score **60 to under 70** → Grade **D**
* Below **60** → Grade **F**

Using only `if` and `else` would make this difficult to handle.

Python provides the `elif` statement (short for **else if**) to check multiple conditions.

---

## 11.2. How does `elif` work?

`elif` is used to test a new condition **only if the previous condition was False**.

A simple way to think about it:

* `if`: Check the first condition.
* `elif`: If the previous condition is false, check the next one.
* `else`: If none of the conditions are true, execute the final block.

---

## 11.3. Syntax

```python
if condition_1:
    block_1
elif condition_2:
    block_2
elif condition_3:
    block_3
else:
    final_block
```

Where:

* `if` always comes first.
* You can have **zero, one, or many** `elif` statements.
* `else` is optional and always comes last.

---

## 11.4. The order of condition checking

Python **does not evaluate all conditions at once**.

Instead, it checks them **from top to bottom**.

As soon as it finds the **first condition that is True**, Python:

* Executes its corresponding block of code.
* Skips all remaining `elif` and `else` blocks.

This is a very important concept when using `elif`.

### Example

```python
score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")
```

Python checks the conditions in order.

**Step 1**

```python
score >= 90
```

↓

```text
False
```

Move to the next condition.

**Step 2**

```python
score >= 80
```

↓

```text
True
```

Output:

```text
B
```

Python stops here.

The condition:

```python
score >= 70
```

and the `else` block are **not evaluated**.

---

## 11.5. Analyzing the lesson example

Example:

```python
print("Thank you for the donation!")

if donation >= 1000:
    print("You've achieved platinum status")
elif donation >= 500:
    print("You've achieved gold donor status")
elif donation >= 100:
    print("You've achieved silver donor status")
else:
    print("You've achieved bronze donor status")
```

Meaning:

| Donation Amount | Message  |
| --------------- | -------- |
| ≥ 1000          | Platinum |
| ≥ 500           | Gold     |
| ≥ 100           | Silver   |
| < 100           | Bronze   |

### Case 1

```python
donation = 1100
```

Python checks:

```python
1100 >= 1000
```

↓

```text
True
```

Output:

```text
Thank you for the donation!
You've achieved platinum status
```

Python stops here.

The remaining `elif` statements are skipped.


### Case 2

```python
donation = 600
```

Python checks:

```python
600 >= 1000
```

↓

```text
False
```

Next:

```python
600 >= 500
```

↓

```text
True
```

Output:

```text
Thank you for the donation!
You've achieved gold donor status
```

Python stops.

### Case 3

```python
donation = 150
```

Python checks:

```python
150 >= 1000
```

↓

```text
False
```

↓

```python
150 >= 500
```

↓

```text
False
```

↓

```python
150 >= 100
```

↓

```text
True
```

Output:

```text
Thank you for the donation!
You've achieved silver donor status
```

### Case 4

```python
donation = 50
```

All conditions are false.

Python executes:

```python
else:
    print("You've achieved bronze donor status")
```

Output:

```text
Thank you for the donation!
You've achieved bronze donor status
```

---

## 11.6. Why use `elif` instead of multiple `if` statements?

Suppose we write:

```python
donation = 1100

if donation >= 1000:
    print("Platinum")

if donation >= 500:
    print("Gold")

if donation >= 100:
    print("Silver")
```

Output:

```text
Platinum
Gold
Silver
```

This happens because **each `if` statement is evaluated independently**.

Using `elif` instead:

```python
if donation >= 1000:
    print("Platinum")
elif donation >= 500:
    print("Gold")
elif donation >= 100:
    print("Silver")
```

Output:

```text
Platinum
```

Only one message is printed.

This is the main purpose of `elif`.

---

## 11.7. Practice

### Task

Print a letter grade according to the following rules:

* **≥ 90** → A
* **≥ 80** → B
* **≥ 70** → C
* **≥ 60** → D
* **< 60** → F

### Solution

```python
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
elif grade >= 60:
    print("D")
else:
    print("F")
```

### Explanation

Example:

```python
grade = 82
```

Python checks:

```python
82 >= 90
```

↓

```text
False
```

↓

```python
82 >= 80
```

↓

```text
True
```

Output:

```text
B
```

The remaining conditions are skipped.

Another example:

```python
grade = 55
```

Python checks:

```python
55 >= 90
```

↓

```text
False
```

↓

```python
55 >= 80
```

↓

```text
False
```

↓

```python
55 >= 70
```

↓

```text
False
```

↓

```python
55 >= 60
```

↓

```text
False
```

↓

Execute:

```python
else:
    print("F")
```

Output:

```text
F
```

---

## 11.8. The order of conditions is very important

Suppose we write:

```python
grade = 95

if grade >= 60:
    print("D")
elif grade >= 70:
    print("C")
elif grade >= 80:
    print("B")
elif grade >= 90:
    print("A")
```

Output:

```text
D
```

Even though the score is **95**, Python encounters:

```python
95 >= 60
```

↓

```text
True
```

So it immediately prints:

```text
D
```

and **does not check any of the remaining conditions**.

Therefore, when using `elif`, arrange conditions from **the most specific or highest value** to **the most general or lowest value**.

Correct:

```python
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
elif grade >= 60:
    print("D")
else:
    print("F")
```

---

## 11.9. Common mistakes

### Mistake 1. Writing `elif` before `if`

Incorrect:

```python
elif score >= 80:
    print("B")

if score >= 90:
    print("A")
```

Correct:

```python
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
```

`elif` must always follow an `if` statement.


### Mistake 2. Forgetting the colon (`:`)

Incorrect:

```python
elif score >= 80
    print("B")
```

Correct:

```python
elif score >= 80:
    print("B")
```

### Mistake 3. Incorrect indentation

Incorrect:

```python
if score >= 90:
print("A")
elif score >= 80:
print("B")
```

Correct:

```python
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
```

---

## 11.10. Summary

After this lesson, you should remember:

* `elif` is short for **else if**.
* `elif` checks another condition **only if the previous condition was False**.
* Python evaluates conditions **from top to bottom**.
* As soon as Python finds the **first condition that is True**, it executes that block and skips all remaining `elif` and `else` blocks.
* You can use multiple `elif` statements in the same `if` structure.
* The **order of conditions is very important**. Arrange them from the **most specific or highest-value condition** to the **most general or lowest-value condition** to avoid incorrect results.