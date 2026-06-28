# 1. What is a List?

In programming, we often need to store multiple related pieces of data. Instead of creating many separate variables, Python provides **Lists** to store multiple values inside a single variable.

For example, we need to store the heights of students:

* Noelle is 61 inches tall.
* Ava is 70 inches tall.
* Sam is 67 inches tall.
* Mia is 64 inches tall.

In Python, we can create a List like this:

```python
heights = [61, 70, 67, 64]
```

Here:

* `heights` is the name of the List.
* The values are placed inside square brackets `[]`.
* Each element is separated by a comma `,`.

---

## 1.1. List Creation Syntax

Syntax:

```python
list_name = [element_1, element_2, element_3, ...]
```

Example:

```python
numbers = [10, 20, 30, 40]
```

The List above contains 4 elements:

* 10
* 20
* 30
* 40

---

## 1.2. Characteristics of Lists

A Python List has the following characteristics:

* It starts with `[` and ends with `]`.
* Elements are separated by commas `,`.
* It is recommended to add a space after each comma to make the code easier to read.

Correct example:

```python
heights = [61, 70, 67, 64]
```

This also works but is harder to read:

```python
heights = [61,70,67,64]
```

---

## 1.3. Adding an Element to the End of a List

If we have another student named Chloe whose height is 65 inches, we can simply add the value `65` to the end of the List.

Example:

```python
heights = [61, 70, 67, 64, 65]
```

Now the List contains 5 elements:

```python
[61, 70, 67, 64, 65]
```

---

## 1.4. Elements Must Be Separated by Commas

Every element inside a List must be separated by a comma `,`.

Correct example:

```python
numbers = [1, 2, 3, 4]
```

Incorrect example:

```python
numbers = [1 2 3 4]
```

When running the program, Python will show:

```text
SyntaxError: invalid syntax
```

The reason is that Python does not know where one element ends and another element begins.

---

## 1.5. Examples

### Example 1

```python
fruits = ["Apple", "Banana", "Orange"]

print(fruits)
```

Output:

```text
['Apple', 'Banana', 'Orange']
```


### Example 2

```python
scores = [8, 9, 10, 7]

print(scores)
```

Output:

```text
[8, 9, 10, 7]
```


### Example 3

```python
days = ["Monday", "Tuesday", "Wednesday", "Thursday"]

print(days)
```

Output:

```text
['Monday', 'Tuesday', 'Wednesday', 'Thursday']
```

---

## 1.6. Summary

* A **List** is a data type used to store multiple values inside one variable.
* Lists are created using square brackets `[]`.
* Elements inside a List are separated by commas `,`.
* It is recommended to add spaces after commas to make code easier to read.
* If commas are missing between elements, Python will produce a `SyntaxError`.

---

# 2. What Can a List Contain?

In the previous lesson, we learned that a **List** is used to store multiple values inside a single variable.

Example:

```python
heights = [61, 70, 67, 64]
```

The List above only contains integers (`int`).

However, Lists in Python are not limited to numbers. A List can contain almost any type of data, and it can even contain **different data types inside the same List**.

---

## 2.1. Lists Can Contain Strings

Besides numbers, Lists can also store strings (`str`).

Example:

```python
names = ["Noelle", "Ava", "Sam", "Mia"]
```

Output:

```text
['Noelle', 'Ava', 'Sam', 'Mia']
```

In this List:

* `"Noelle"` is a string.
* `"Ava"` is a string.
* `"Sam"` is a string.
* `"Mia"` is a string.

The entire List contains `str` values.

---

## 2.2. Lists Can Contain Different Data Types

Python allows a List to contain multiple data types at the same time.

Example:

```python
mixed_list = ["Noelle", 61]
```

Output:

```text
['Noelle', 61]
```

In this List:

| Element    | Data Type |
| ---------- | --------- |
| `"Noelle"` | `str`     |
| `61`       | `int`     |

This is completely valid in Python.

---

## 2.3. Lists Can Contain Any Data Type

A List can combine many different data types.

Example:

```python
student = ["Mia", 27, False, 0.5]
```

Each element:

| Value   | Data Type | Meaning          |
| ------- | --------- | ---------------- |
| `"Mia"` | `str`     | Name             |
| `27`    | `int`     | Age              |
| `False` | `bool`    | True/False value |
| `0.5`   | `float`   | Decimal number   |

Python does **not** require all elements in a List to have the same data type.

---

## 2.4. Example: Storing Information About a Student

Example:

```python
sam_height_and_testscore = ["Sam", 67, 85.5, True]
```

Meaning of each element:

| Element | Value   | Data Type |
| ------- | ------- | --------- |
| 1       | `"Sam"` | `str`     |
| 2       | `67`    | `int`     |
| 3       | `85.5`  | `float`   |
| 4       | `True`  | `bool`    |

It can be visualized like this:

```text
sam_height_and_testscore

│
├── "Sam"
├── 67
├── 85.5
└── True
```

---

## 2.5. Examples

### Example 1: List Containing Only Strings

```python
fruits = ["Apple", "Banana", "Orange"]

print(fruits)
```

Output:

```text
['Apple', 'Banana', 'Orange']
```


### Example 2: List Containing Only Numbers

```python
numbers = [10, 20, 30, 40]

print(numbers)
```

Output:

```text
[10, 20, 30, 40]
```


### Example 3: List Containing Multiple Data Types

```python
person = ["Alice", 20, 8.5, True]

print(person)
```

Output:

```text
['Alice', 20, 8.5, True]
```


### Example 4: Adding a String to the End of a List

```python
ints_and_strings = [1, 2, 3, "Hello"]

ints_and_strings.append("Python")

print(ints_and_strings)
```

Output:

```text
[1, 2, 3, 'Hello', 'Python']
```

Note:

In this lesson, the requirement is only to add a string to the end of a List. Later, you will learn more about the `append()` method, which is used to add elements to the end of a List.

---

## 2.6. Summary

* A List does not only store numbers; it can contain many different data types.
* A List can contain:

  * `int` (integer)
  * `float` (decimal number)
  * `str` (string)
  * `bool` (True/False value)
* Elements inside the same List do not have to be the same data type.
* This makes Lists very flexible for storing different types of information related to the same object.

---

# 3. Empty List

A List does not always have to contain data. In Python, you can create an **Empty List**, which is a List that does not contain any elements.

Example:

```python id="m3n8qy"
empty_list = []
```

Here:

* `empty_list` is the name of the List.
* `[]` is an empty List because there are no elements inside it.

---

## 3.1. Syntax for Creating an Empty List

Syntax:

```python id="l9z3sa"
list_name = []
```

Example:

```python id="x7v0kr"
my_empty_list = []
```

Output:

```text id="v5j0qk"
[]
```

The List has been created successfully, but it does not contain any data yet.

---

## 3.2. When Should We Use an Empty List?

You might wonder:

**Why create a List that contains nothing?**

Usually, we create an empty List because we do not have data at the beginning. Later, while the program is running, elements can be added to the List.

Examples:

* A user enters a list of names.
* Reading data from a file.
* Receiving data from the Internet.
* Calculating and storing results.

At first:

```python id="h4p3tu"
students = []
```

Later, the program can add student names into the List.

**Note:** In this lesson, you only need to know how to create an empty List. Methods for adding elements to a List will be learned in the next lesson.

---

## 3.3. An Empty List Is Still a List

Even though it has no elements, an empty List is still a valid List.

Examples:

```python id="v6qk0s"
numbers = []
names = []
scores = []
```

These three variables are all Lists, but they do not contain any data yet.

---

## 3.4. Examples

### Example 1

```python id="z9b2mc"
my_empty_list = []

print(my_empty_list)
```

Output:

```text id="q1cx8w"
[]
```


### Example 2

```python id="f9a3cw"
students = []

print(students)
```

Output:

```text id="q9b0a5"
[]
```


### Example 3

```python id="x8kq7m"
shopping_list = []

print(shopping_list)
```

Output:

```text id="l8v3z1"
[]
```

---

## 3.5. Summary

* An **Empty List** is a List that does not contain any elements.
* Create an empty List using square brackets `[]`.
* Syntax:

```python id="c1f6nr"
list_name = []
```

* Empty Lists are often created first so that data can be added later.
* Even without elements, an empty List is still a valid List in Python.

---

## 4. List Methods

### 4.1. What is a Method?

In Python, each **data type** has built-in functions that are used to work with and manipulate data of that type. These built-in functions are called **methods**.

Examples:

* `str` (string) has methods for processing strings.
* `list` has methods for working with Lists.
* `dict` has methods for working with Dictionaries.

Simply put:

**A method is a built-in function that helps you interact with data.**

---

### 4.2. How to Call a List Method

List methods are called using this syntax:

```python
list_name.method()
```

Where:

* `list_name` is the name of the List.
* `.` is used to access a method.
* `method()` is the name of the method.

Example:

```python
students.append("Anna")
```

Here:

* `students` is the List.
* `append()` is the method.
* `"Anna"` is the data passed into the method.

---

## 4.3. The `.append()` Method

One of the most commonly used List methods is:

```python
.append()
```

### Function:

Adds an element to the **end of a List**.

Example:

```python
append_example = ["This", "is", "an", "example"]

append_example.append("list")

print(append_example)
```

Output:

```python
['This', 'is', 'an', 'example', 'list']
```

Before:

```python
['This', 'is', 'an', 'example']
```

After calling:

```python
append_example.append("list")
```

The List becomes:

```python
['This', 'is', 'an', 'example', 'list']
```

The element `"list"` is added to the end of the List.

---

## 4.4. `.append()` Changes the Existing List

Unlike some operations that create a new List, the `.append()` method directly changes the current List.

Example:

```python
numbers = [1, 2, 3]

numbers.append(4)

print(numbers)
```

Output:

```python
[1, 2, 3, 4]
```

The List `numbers` has been updated.

---

## 4.5. Adding Different Data Types

`.append()` can add any type of data to the end of a List.

### Adding an integer

```python
numbers = [10, 20]

numbers.append(30)

print(numbers)
```

Output:

```python
[10, 20, 30]
```

---

### Adding a string

```python
names = ["Anna", "John"]

names.append("Mike")

print(names)
```

Output:

```python
['Anna', 'John', 'Mike']
```

---

### Adding a Boolean

```python
values = [True]

values.append(False)

print(values)
```

Output:

```python
[True, False]
```

---

### Adding a float

```python
scores = [8.5, 9.0]

scores.append(7.5)

print(scores)
```

Output:

```python
[8.5, 9.0, 7.5]
```

---

## 4.6. Examples

### Example 1

```python
fruits = ["Apple", "Banana"]

fruits.append("Orange")

print(fruits)
```

Output:

```python
['Apple', 'Banana', 'Orange']
```

---

### Example 2

```python
shopping_list = []

shopping_list.append("Milk")
shopping_list.append("Bread")

print(shopping_list)
```

Output:

```python
['Milk', 'Bread']
```

Explanation:

At first, `shopping_list` is an empty List:

```python
[]
```

After two `.append()` calls, the List contains two elements:

```python
['Milk', 'Bread']
```

---

### Example 3

```python
ages = [18, 20]

ages.append(22)

print(ages)
```

Output:

```python
[18, 20, 22]
```

---

# 4.7. Summary

After this lesson, remember:

* A **method** is a built-in function used to manipulate data.
* Each Python data type has its own methods.
* List methods are called using:

```python
list_name.method()
```

* The `.append()` method adds an element to the end of a List.
* `.append()` modifies the existing List instead of creating a new one.

In upcoming lessons, you will learn more useful List methods such as:

* `insert()` → add an element at a specific position.
* `remove()` → remove an element.
* `pop()` → get and remove an element.
* `sort()` → sort a List.
* `reverse()` → reverse the order of elements.

---

# 5. Adding Elements to a List Using `append()`

In the previous lesson, we learned that `.append()` is a List method used to add elements.

In this lesson, we will learn in detail how to use `.append()` to make a List bigger by adding new elements to the end of the List.

---

## 5.1. The `append()` Method

The `.append()` method is used to add one element to the end of a List.

Syntax:

```python
list_name.append(value)
```

Where:

* `list_name` is the List where you want to add an element.
* `append()` is the method.
* `value` is the element you want to add.

---

## 5.2. Adding an Element to an Empty List

Example: Create an empty List:

```python
garden = []
```

Then add `"Tomatoes"`:

```python
garden.append("Tomatoes")

print(garden)
```

Output:

```python
['Tomatoes']
```

Before:

```python
[]
```

After calling:

```python
garden.append("Tomatoes")
```

The List becomes:

```python
['Tomatoes']
```

---

## 5.3. Adding an Element to a List That Already Has Data

If a List already contains elements, `.append()` adds the new element to the end of the List.

Example:

```python
garden = ["Tomatoes", "Grapes", "Cauliflower"]

garden.append("Green Beans")

print(garden)
```

Output:

```python
['Tomatoes', 'Grapes', 'Cauliflower', 'Green Beans']
```

You can visualize it:

Before adding:

```python
['Tomatoes', 'Grapes', 'Cauliflower']
```

↓

`append("Green Beans")`

↓

```python
['Tomatoes', 'Grapes', 'Cauliflower', 'Green Beans']
```

The new element is always placed at the end.

---

## 5.4. `append()` Only Adds One Element Each Time

Each time you call `.append()`, only one element is added to the List.

Example:

```python
orders = []

orders.append("Tulips")
orders.append("Roses")

print(orders)
```

Output:

```python
['Tulips', 'Roses']
```

The process:

Initially:

```python
[]
```

After the first call:

```python
['Tulips']
```

After the second call:

```python
['Tulips', 'Roses']
```

---

## 5.5. `append()` Directly Changes the List

`append()` does not create a new List. It directly modifies the existing List.

Example:

```python
numbers = [1, 2, 3]

numbers.append(4)

print(numbers)
```

Output:

```python
[1, 2, 3, 4]
```

The variable `numbers` is still the same List, but it now contains an additional element.

---

## 5.6. Adding Different Data Types

`append()` can add different types of data.

### Adding a string

```python
flowers = ["Rose"]

flowers.append("Tulip")

print(flowers)
```

Output:

```python
['Rose', 'Tulip']
```


### Adding a number

```python
scores = [80, 90]

scores.append(100)

print(scores)
```

Output:

```python
[80, 90, 100]
```


### Adding a Boolean

```python
values = [True]

values.append(False)

print(values)
```

Output:

```python
[True, False]
```


### Adding a float

```python
prices = [19.99]

prices.append(25.5)

print(prices)
```

Output:

```python
[19.99, 25.5]
```

---

## 5.7. Examples

### Example 1: Adding flowers to a list

```python
orders = ["Sunflowers"]

orders.append("Tulips")
orders.append("Roses")

print(orders)
```

Output:

```python
['Sunflowers', 'Tulips', 'Roses']
```


### Example 2: Adding students

```python
students = ["Anna", "John"]

students.append("Mike")

print(students)
```

Output:

```python
['Anna', 'John', 'Mike']
```


### Example 3: Adding numbers to a List

```python
numbers = []

numbers.append(10)
numbers.append(20)
numbers.append(30)

print(numbers)
```

Output:

```python
[10, 20, 30]
```


### Example 4: Adding scores

```python
scores = [8.5, 9.0]

scores.append(7.5)

print(scores)
```

Output:

```python
[8.5, 9.0, 7.5]
```

---

## 5.8. Important Note

`append()` always adds elements to the **end of the List**.

Example:

```python
letters = ["A", "B", "C"]

letters.append("D")

print(letters)
```

Output:

```python
['A', 'B', 'C', 'D']
```

You cannot use `append()` to insert an element in the middle of a List.

To insert an element at a specific position, we will learn the `insert()` method in the next lesson.

---

## 5.9. Summary

After this lesson, remember:

* `append()` is a method used to add one element to the end of a List.
* Syntax:

```python
list_name.append(value)
```

* Each time you call `append()`, only one element is added.
* `append()` changes the existing List directly and does not create a new List.
* You can use `append()` to add any data type:

  * `int`
  * `float`
  * `str`
  * `bool`
  * and more.

---

# 6. Growing a List: Plus (+)

## 6.1. What is the + operator with Lists?

In the previous lesson, we learned how to add one element to the end of a list using the `.append()` method.

Example:

```python
orders = ["rose", "tulip"]
orders.append("lily")

print(orders)
```

Output:

```
['rose', 'tulip', 'lily']
```

However, if we want to add multiple elements at the same time, calling `.append()` many times can become repetitive.

Python provides the `+` operator to combine (concatenate) two lists together.

---

## 6.2. Syntax

```python
new_list = list_1 + list_2
```

Where:

* `list_1`: the first list.
* `list_2`: the second list.
* `+`: joins the two lists together.
* The result is a new list.

---

## 6.3. Example

```python
items_sold = ["cake", "cookie", "bread"]

items_sold_new = items_sold + ["biscuit", "tart"]

print(items_sold_new)
```

Output:

```
['cake', 'cookie', 'bread', 'biscuit', 'tart']
```

Here:

The original list:

```python
["cake", "cookie", "bread"]
```

is combined with:

```python
["biscuit", "tart"]
```

creating:

```python
["cake", "cookie", "bread", "biscuit", "tart"]
```

---

## 6.4. The + operator does not change the original list

This is very important.

Example:

```python
items_sold = ["cake", "cookie", "bread"]

items_sold_new = items_sold + ["biscuit", "tart"]

print(items_sold)
print(items_sold_new)
```

Output:

```
['cake', 'cookie', 'bread']
['cake', 'cookie', 'bread', 'biscuit', 'tart']
```

We can see:

* `items_sold` stays unchanged.
* `items_sold_new` is a new list containing the combined elements.

Illustration:

```
items_sold
↓
["cake", "cookie", "bread"]

+

["biscuit", "tart"]

↓

items_sold_new
↓
["cake", "cookie", "bread", "biscuit", "tart"]
```

---

## 6.5. The + operator can only join two lists

The `+` operator requires both sides to be lists.

Correct example:

```python
numbers = [1, 2, 3]

new_numbers = numbers + [4]

print(new_numbers)
```

Output:

```
[1, 2, 3, 4]
```

Here:

* `numbers` is a list.
* `[4]` is also a list.

Therefore, the operation is valid.

---

## 6.6. Error when joining a list with a single value

Example:

```python
numbers = [1, 2, 3]

new_numbers = numbers + 4
```

Output:

```
TypeError: can only concatenate list (not "int") to list
```

Reason:

* `numbers` is a list.
* `4` is an integer (`int`), not a list.

Python does not know how to combine:

```python
[1, 2, 3] + 4
```

because they are different data types.

---

## 6.7. How to fix the error

Simply put the value inside square brackets to make it a list.

Wrong:

```python
numbers + 4
```

Correct:

```python
numbers + [4]
```

Example:

```python
numbers = [1, 2, 3]

numbers2 = numbers + [4]

print(numbers2)
```

Output:

```
[1, 2, 3, 4]
```

---

## 6.8. Comparing .append() and +

| .append()                        | + operator                         |
| -------------------------------- | ---------------------------------- |
| Adds one element                 | Combines two lists                 |
| Changes the original list        | Creates a new list                 |
| Does not need a new variable     | Usually assigned to a new variable |
| Added element does not need `[]` | Element must be inside `[]`        |

Example:

### Using `.append()`

```python
flowers = ["rose", "tulip"]

flowers.append("lily")

print(flowers)
```

Output:

```
['rose', 'tulip', 'lily']
```

The original list changes.


### Using +

```python
flowers = ["rose", "tulip"]

new_flowers = flowers + ["lily"]

print(flowers)
print(new_flowers)
```

Output:

```
['rose', 'tulip']
['rose', 'tulip', 'lily']
```

The original list does not change.

---

## 6.9. Combined example

```python
orders = ["rose", "tulip"]

new_orders = ["lilac", "iris"]

orders_combined = orders + new_orders

print(orders)
print(new_orders)
print(orders_combined)
```

Output:

```
['rose', 'tulip']
['lilac', 'iris']
['rose', 'tulip', 'lilac', 'iris']
```

Explanation:

* `orders` stays the same.
* `new_orders` stays the same.
* `orders_combined` is a new list containing all elements from both lists.


## Summary

* The `+` operator is used to concatenate (combine) two lists.
* The result of concatenation is a new list.
* The `+` operator does not modify the original list.
* You can only use `+` between two lists.
* To add one element using `+`, the element must be placed inside square brackets (`[]`).
* If you only need to add one element, `.append()` is usually simpler.
* If you want to combine multiple elements or two lists, use the `+` operator.

---

# 7. Accessing List Elements

## 7.1. What is accessing elements in a List?

After creating a list, we often need to get a specific element inside the list to use it.

Example:

```python
calls = ["Juan", "Zofia", "Amare", "Ezio", "Ananya"]
```

This list contains names of candidates who are called for interviews.

We have:

| Element  | Position (index) |
| -------- | ---------------- |
| "Juan"   | 0                |
| "Zofia"  | 1                |
| "Amare"  | 2                |
| "Ezio"   | 3                |
| "Ananya" | 4                |

To get an element from a list, we use an **index**.

---

## 7.2. What is an index in Python?

An index is the position of an element in a list.

An important point:

Python uses **zero-indexing**.

This means:

* The first element has index `0`.
* The second element has index `1`.
* The third element has index `2`.

Example:

```python
calls = ["Juan", "Zofia", "Amare", "Ezio", "Ananya"]
```

Visualization:

```
Index:     0        1        2        3        4

Value:  Juan    Zofia    Amare    Ezio   Ananya
```

---

## 7.3. How to access an element in a List

Syntax:

```python
list_name[index]
```

Example:

```python
calls = ["Juan", "Zofia", "Amare", "Ezio", "Ananya"]

print(calls[2])
```

Output:

```
Amare
```

Explanation:

* `calls` is the list name.
* `[2]` gets the element with index 2.
* Index 2 contains `"Amare"`.

---

## 7.4. Getting the 3rd element does not use index 3

Many beginners make this mistake:

Want the third element:

Wrong:

```python
print(calls[3])
```

Because:

```python
calls[3]
```

gets the element with index 3:

```
Ezio
```

Correct:

```python
print(calls[2])
```

Because:

* 1st element → index 0
* 2nd element → index 1
* 3rd element → index 2

---

## 7.5. Index must be an integer (int)

When accessing a list, the index must be an integer.

Correct:

```python
calls[2]
```

Because:

```
2
```

is an integer.

Wrong:

```python
calls[2.0]
```

Result:

```
TypeError
```

Because:

```
2.0
```

is a float, not an integer.

---

## 7.6. Using division

Example:

```python
print(calls[4/2])
```

It looks like:

```
4 / 2 = 2
```

But in Python:

```python
4 / 2
```

returns:

```
2.0
```

This is a float.

So Python sees:

```python
calls[2.0]
```

and causes an error.

---

## 7.7. Using int()

To convert a float into an integer, use:

```python
int()
```

Example:

```python
int(5.9)
```

Output:

```
5
```

Python removes the decimal part.

Example:

```python
calls[int(4/2)]
```

Process:

Step 1:

```
4/2
```

Result:

```
2.0
```

Step 2:

```
int(2.0)
```

Result:

```
2
```

Step 3:

```
calls[2]
```

Result:

```
Amare
```

---

## 7.8. Accessing an element that does not exist

Example:

```python
calls = ["Juan", "Zofia", "Amare"]

print(calls[5])
```

The list has:

```
index 0
index 1
index 2
```

But we access:

```
index 5
```

which does not exist.

Python gives:

```
IndexError
```

---

## 7.9. Understanding IndexError

Example:

```python
employees = ["Ana", "Bob", "John", "Mary"]
```

Index:

```
0      1      2       3
```

Values:

```
Ana    Bob    John    Mary
```

If we write:

```python
print(employees[8])
```

Python looks for:

```
index 8
```

but it does not exist.

Result:

```
IndexError: list index out of range
```

---

## 7.10. Fixing IndexError

Choose an existing index.

Wrong:

```python
print(employees[8])
```

Correct:

```python
print(employees[2])
```

Output:

```
John
```

---

## 7.11. Combined example

```python
employees = [
    "Alice",
    "Bob",
    "Charlie",
    "David"
]

employee_four = employees[3]

print(employee_four)
```

Output:

```
David
```

Explanation:

List:

```
Index:      0        1        2        3

Value:   Alice     Bob   Charlie   David
```

The 4th employee:

```
index = 3
```

---

## 7.12. Summary

* Lists store multiple pieces of data in order.
* Every element in a list has an index.
* Python starts indexing from 0.
* Access elements using:

```python
list[index]
```

* Index must be an integer (`int`).
* Use `int()` to convert floats into integers.
* Accessing an index that does not exist causes:

```
IndexError
```

Quick example:

```python
animals = ["cat", "dog", "bird"]

print(animals[0])  # cat
print(animals[1])  # dog
print(animals[2])  # bird
```

Important rule:

**The nth element in a list has index n - 1.**

---

# 8. Accessing List Elements: Negative Index

## 8.1. What is a Negative Index?

In the previous lesson, we learned how to access list elements using positive indexes.

Example:

```python
shopping_list = ["eggs", "butter", "milk", "cucumbers", "juice", "cereal"]
```

Normal index:

| Element     | Index |
| ----------- | ----- |
| "eggs"      | 0     |
| "butter"    | 1     |
| "milk"      | 2     |
| "cucumbers" | 3     |
| "juice"     | 4     |
| "cereal"    | 5     |

To get the last element:

```python
print(shopping_list[5])
```

Output:

```python
cereal
```

However, if the list is very long, we may not know what index the last element has.

Python provides **negative indexes** to solve this problem.

---

## 8.2. How Negative Index Works

Negative indexes start counting from the end of the list.

Rules:

* The last element has index `-1`.
* The element before it has index `-2`.
* Moving toward the beginning makes the number more negative.

Example:

```python
pancake_recipe = ["eggs", "flour", "butter", "milk", "sugar", "love"]
```

| Element  | Positive index | Negative index |
| -------- | -------------- | -------------- |
| "eggs"   | 0              | -6             |
| "flour"  | 1              | -5             |
| "butter" | 2              | -4             |
| "milk"   | 3              | -3             |
| "sugar"  | 4              | -2             |
| "love"   | 5              | -1             |

---

## 8.3. Getting the Last Element Using -1

Example:

```python
pancake_recipe = ["eggs", "flour", "butter", "milk", "sugar", "love"]

print(pancake_recipe[-1])
```

Output:

```python
love
```

Explanation:

`-1` always represents the last element.

---

## 8.4. Comparing Positive and Negative Index

These two methods give the same result:

Method 1:

```python
print(pancake_recipe[5])
```

Output:

```python
love
```

Method 2:

```python
print(pancake_recipe[-1])
```

Output:

```python
love
```

Because:

```
index 5 == index -1
```

---

## 8.5. Why Do We Need Negative Index?

Suppose:

```python
numbers = [10, 20, 30, 40, 50, 60, 70]
```

We want the last element.

Using normal index:

```python
numbers[6]
```

But if the list changes:

```python
numbers = [10,20,30,40,50,60,70,80,90]
```

The last index changes to:

```python
numbers[8]
```

The old code becomes incorrect.

Using negative index:

```python
numbers[-1]
```

Always gets:

```python
90
```

No matter how many elements the list has.

---

## 8.6. Example with shopping_list

List:

```python
shopping_list = [
    "eggs",
    "butter",
    "milk",
    "cucumbers",
    "juice",
    "cereal"
]
```

Positive index:

```
0          1        2          3          4        5
eggs     butter    milk    cucumbers    juice    cereal
```

Negative index:

```
-6        -5       -4        -3        -2       -1
eggs     butter    milk    cucumbers    juice    cereal
```

Getting the last element:

```python
last_element = shopping_list[-1]

print(last_element)
```

Output:

```python
cereal
```

Getting element at index 5:

```python
index5_element = shopping_list[5]

print(index5_element)
```

Output:

```python
cereal
```

---

## 8.7. Practice Exercise

Complete code:

```python
shopping_list = ["eggs", "butter", "milk", "cucumbers", "juice", "cereal"]

last_element = shopping_list[-1]

index5_element = shopping_list[5]

print(index5_element)
print(last_element)
```

Output:

```python
cereal
cereal
```

---

## 8.8. Summary

* Negative index is used to access elements from the end of a list.
* The last element is always:

```python
list[-1]
```

* The second-to-last element:

```python
list[-2]
```

* Negative indexes are useful when we do not know the length of the list.

Example:

```python
animals = ["cat", "dog", "bird"]

print(animals[-1])
```

Output:

```python
bird
```

Remember:

* Positive index counts from the beginning → starts at `0`
* Negative index counts from the end → starts at `-1`

---

# 9. Modifying List Elements

## 9.1. What is Modifying Elements in a List?

In Python, lists are **mutable**.

This means after creating a list, we can still change the values inside it.

Example:

```python
garden = ["Tomatoes", "Green Beans", "Cauliflower", "Grapes"]
```

The list contains:

| Index | Value       |
| ----- | ----------- |
| 0     | Tomatoes    |
| 1     | Green Beans |
| 2     | Cauliflower |
| 3     | Grapes      |

If we want to change `"Cauliflower"` into `"Strawberries"`:

```python
garden[2] = "Strawberries"
```

Result:

```python
["Tomatoes", "Green Beans", "Strawberries", "Grapes"]
```

---

## 9.2. Syntax for Changing List Elements

Formula:

```python
list_name[index] = new_value
```

Where:

* `list_name`: name of the list.
* `index`: position of the element to change.
* `new_value`: new value.

Example:

```python
animals = ["cat", "dog", "bird"]

animals[1] = "fish"

print(animals)
```

Output:

```python
["cat", "fish", "bird"]
```

Explanation:

Before:

```
index 0 → cat
index 1 → dog
index 2 → bird
```

After:

```python
animals[1] = "fish"
```

Now:

```
index 1 → fish
```

---

## 9.3. Changing Elements Using Negative Index

Python allows negative indexes to access elements from the end.

Example:

```python
garden = ["Tomatoes", "Green Beans", "Strawberries", "Grapes"]
```

Negative indexes:

| Index | Value        |
| ----- | ------------ |
| -4    | Tomatoes     |
| -3    | Green Beans  |
| -2    | Strawberries |
| -1    | Grapes       |

To change `"Grapes"`:

```python
garden[-1] = "Raspberries"
```

Result:

```python
["Tomatoes", "Green Beans", "Strawberries", "Raspberries"]
```

---

## Practice Exercise

### Create a customer waiting list

Create a list:

```python
garden_waitlist = ["Jiho", "Adam", "Sonny", "Alisha"]
```

Customer list:

```
0 → Jiho
1 → Adam
2 → Sonny
3 → Alisha
```

### Replace Adam with Calla

Adam is at index 1.

Code:

```python
garden_waitlist[1] = "Calla"
```

Result:

```python
["Jiho", "Calla", "Sonny", "Alisha"]
```

### Replace Alisha with Alex

Alisha is the last element.

You can use:

```python
garden_waitlist[-1] = "Alex"
```

Result:

```python
["Jiho", "Calla", "Sonny", "Alex"]
```


### Complete Code

```python
garden_waitlist = ["Jiho", "Adam", "Sonny", "Alisha"]

garden_waitlist[1] = "Calla"

print(garden_waitlist)

garden_waitlist[-1] = "Alex"

print(garden_waitlist)
```

Output:

```python
['Jiho', 'Calla', 'Sonny', 'Alisha']
['Jiho', 'Calla', 'Sonny', 'Alex']
```

---

## 9.4. Remember

* Lists start from index `0`.
* To modify an element:

```python
list[index] = new_value
```

* Last element:

```python
list[-1]
```

* Lists can be changed after creation (**mutable**).

---

## 10. Shrinking a List: Remove

## 10.1. What is removing an element from a List?

In Python, we can remove an element from a list using the method:

`.remove()`

Syntax:

```python
list_name.remove(value)
```

Where:

* `list_name`: the name of the list.
* `value`: the value that you want to remove.

Example:

```python
shopping_line = ["Cole", "Kip", "Chris", "Sylvana"]

shopping_line.remove("Chris")

print(shopping_line)
```

Output:

```python
["Cole", "Kip", "Sylvana"]
```

The element `"Chris"` has been removed from the list.

---

## 10.2. Which element does remove() delete?

If a list contains multiple identical values, `.remove()` only removes the **first occurrence**.

Example:

```python
shopping_line = ["Cole", "Kip", "Chris", "Sylvana", "Chris"]

shopping_line.remove("Chris")

print(shopping_line)
```

Output:

```python
["Cole", "Kip", "Sylvana", "Chris"]
```

Explanation:

Before:

```
Cole
Kip
Chris      ← removed
Sylvana
Chris      ← remains
```

After using:

```python
shopping_line.remove("Chris")
```

Only the first `"Chris"` is deleted.


## Practice Exercise

### Create `order_list`

Requirement:

Create a list:

```python
order_list = ["Celery", "Orange Juice", "Orange", "Flatbread"]
```

Check:

```python
print(order_list)
```

Output:

```python
['Celery', 'Orange Juice', 'Orange', 'Flatbread']
```


### Remove Flatbread from the list

Use:

```python
order_list.remove("Flatbread")
```

Code:

```python
order_list = ["Celery", "Orange Juice", "Orange", "Flatbread"]

order_list.remove("Flatbread")

print(order_list)
```

Result:

```python
['Celery', 'Orange Juice', 'Orange']
```


### Create a list for the second store

Create:

```python
new_store_order_list = ["Orange", "Apple", "Mango", "Broccoli", "Mango"]
```

Notice:

There are two `"Mango"` values:

```
0 Orange
1 Apple
2 Mango
3 Broccoli
4 Mango
```


### Remove one Mango

Use:

```python
new_store_order_list.remove("Mango")
```

Code:

```python
new_store_order_list = ["Orange", "Apple", "Mango", "Broccoli", "Mango"]

new_store_order_list.remove("Mango")

print(new_store_order_list)
```

Output:

```python
['Orange', 'Apple', 'Broccoli', 'Mango']
```

Only the first `"Mango"` is removed.


### Removing an element that does not exist

Example:

```python
new_store_order_list.remove("Onions")
```

But the list does not contain `"Onions"`.

Python gives an error:

```
ValueError: list.remove(x): x not in list
```

Meaning:

Python cannot remove the value because it does not exist in the list.


### Complete Exercise Code

```python
order_list = ["Celery", "Orange Juice", "Orange", "Flatbread"]

print(order_list)

order_list.remove("Flatbread")

print(order_list)


new_store_order_list = ["Orange", "Apple", "Mango", "Broccoli", "Mango"]

print(new_store_order_list)

new_store_order_list.remove("Mango")

print(new_store_order_list)


new_store_order_list.remove("Onions")
```

---

## 10.3. Remember

* Add an element:

```python
list.append(value)
```

* Remove an element:

```python
list.remove(value)
```

`.remove()`:

* Removes by **value**.
* Removes only the **first occurrence**.
* Causes `ValueError` if the value does not exist.

---

# 11. Two-Dimensional (2D) Lists

## 11.1. What is a 2D List?

In Python, a list can contain other lists inside it.

Example:

Normal list:

```python
heights = [61, 70, 67, 64]
```

This list contains numbers.

But a 2D list:

```python
heights = [
    ["Noelle", 61],
    ["Ava", 70],
    ["Sam", 67],
    ["Mia", 64]
]
```

Each element inside the list is another smaller list.

Structure:

```python
[
 ["Noelle", 61],
 ["Ava", 70],
 ["Sam", 67],
 ["Mia", 64]
]
```

Each sublist represents:

```
[Name, Height]
```

---

## 11.2. Structure of a 2D List

Example:

```python
student = ["Noelle", 61]
```

This is a 1D list.

When we store multiple students:

```python
heights = [
    ["Noelle", 61],
    ["Ava", 70],
    ["Sam", 67],
    ["Mia", 64]
]
```

It becomes a 2D list.

It can be viewed like a table:

| Index | Name   | Height |
| ----- | ------ | ------ |
| 0     | Noelle | 61     |
| 1     | Ava    | 70     |
| 2     | Sam    | 67     |
| 3     | Mia    | 64     |

---

## 11.3. Adding a sublist to a 2D List

Task:

Add student:

```
Vik - 68 inches
```

Original list:

```python
heights = [
    ["Jenny", 61],
    ["Alexus", 70],
    ["Sam", 67],
    ["Grace", 64]
]
```

Use `.append()`:

```python
heights.append(["Vik", 68])
```

Result:

```python
[
 ["Jenny", 61],
 ["Alexus", 70],
 ["Sam", 67],
 ["Grace", 64],
 ["Vik", 68]
]
```

---

## 11.4. Creating a new 2D List

Requirement:

* Aaron is 15 years old.
* Dhruti is 16 years old.

Create:

```python
ages = [
    ["Aaron", 15],
    ["Dhruti", 16]
]
```

Each sublist contains:

```
[Name, Age]
```

---

## 11.5. Complete Exercise Code

```python
heights = [
    ["Jenny", 61],
    ["Alexus", 70],
    ["Sam", 67],
    ["Grace", 64]
]

heights.append(["Vik", 68])

print(heights)


ages = [
    ["Aaron", 15],
    ["Dhruti", 16]
]

print(ages)
```

Output:

```python
[
 ['Jenny', 61],
 ['Alexus', 70],
 ['Sam', 67],
 ['Grace', 64],
 ['Vik', 68]
]


[
 ['Aaron', 15],
 ['Dhruti', 16]
]
```

---

## 11.6. Accessing Elements in a 2D List

Example:

```python
heights = [
    ["Jenny", 61],
    ["Alexus", 70]
]
```

Get `"Jenny"`:

```python
print(heights[0][0])
```

Explanation:

First:

```python
heights[0]
```

Gets the first row:

```python
["Jenny", 61]
```

Then:

```python
[0]
```

Gets the first element:

```python
"Jenny"
```

Output:

```python
Jenny
```

---

## 11.7. Remember

* A list that contains other lists is called a **2D List**.
* Structure:

```python
[
    [data1, data2],
    [data1, data2]
]
```

* Add a new row:

```python
list.append([value1, value2])
```

* Access elements:

```python
list[row][column]
```

Example:

```python
heights[1][0]
```

Meaning:

```
row 1 → column 0
```

→ Get the name of the second student.

---

# 12. Accessing 2D Lists

## 12.1. What is accessing data in a 2D List?

In the previous lesson, we learned that a **2D List** is a list that contains other lists.

Example:

```python
heights = [
    ["Noelle", 61],
    ["Ali", 70],
    ["Sam", 67]
]
```

Structure:

```text
heights

├── index 0 → ["Noelle", 61]
│              ├── index 0 → "Noelle"
│              └── index 1 → 61
│
├── index 1 → ["Ali", 70]
│              ├── index 0 → "Ali"
│              └── index 1 → 70
│
└── index 2 → ["Sam", 67]
               ├── index 0 → "Sam"
               └── index 1 → 67
```

A 2D List has two levels of indexes:

* The first index chooses the inner list.
* The second index chooses the element inside that inner list.

---

## 12.2. Syntax for accessing a 2D List

For a 1D List:

```python
list[index]
```

For a 2D List:

```python
list[row][column]
```

Where:

* `row` → the position of the inner list.
* `column` → the position of the element inside the inner list.

Example:

```python
heights[0][1]
```

Explanation:

Step 1:

```python
heights[0]
```

Gets the first inner list:

```python
["Noelle", 61]
```

Step 2:

```python
[1]
```

Gets the second element:

```python
61
```

Result:

```python
61
```

---

## 12.3. Index table of a 2D List

Given:

```python
heights = [
    ["Noelle", 61],
    ["Ali", 70],
    ["Sam", 67]
]
```

| Value      | Access          |
| ---------- | --------------- |
| `"Noelle"` | `heights[0][0]` |
| `61`       | `heights[0][1]` |
| `"Ali"`    | `heights[1][0]` |
| `70`       | `heights[1][1]` |
| `"Sam"`    | `heights[2][0]` |
| `67`       | `heights[2][1]` |

---

## Practice Exercise

### Create a test score list

Requirement:

| Name   | Score |
| ------ | ----- |
| Jenny  | 90    |
| Alexus | 85.5  |
| Sam    | 83    |
| Ellie  | 101.5 |

Create:

```python
class_name_test = [
    ["Jenny", 90],
    ["Alexus", 85.5],
    ["Sam", 83],
    ["Ellie", 101.5]
]
```

Print:

```python
print(class_name_test)
```

Output:

```python
[
 ['Jenny', 90],
 ['Alexus', 85.5],
 ['Sam', 83],
 ['Ellie', 101.5]
]
```


### Get Sam's score

List:

```python
class_name_test = [
    ["Jenny", 90],
    ["Alexus", 85.5],
    ["Sam", 83],
    ["Ellie", 101.5]
]
```

Sam is at:

```text
row index = 2
```

The score is at:

```text
column index = 1
```

Therefore:

```python
sams_score = class_name_test[2][1]
```

Result:

```python
83
```


### Get Ellie's score using negative index

Ellie is the last element.

Use:

```python
class_name_test[-1][-1]
```

Explanation:

First `-1`:

```python
["Ellie", 101.5]
```

Second `-1`:

```python
101.5
```

Therefore:

```python
ellies_score = class_name_test[-1][-1]
```

Result:

```python
101.5
```


### Complete Code

```python
class_name_test = [
    ["Jenny", 90],
    ["Alexus", 85.5],
    ["Sam", 83],
    ["Ellie", 101.5]
]

print(class_name_test)


sams_score = class_name_test[2][1]

print(sams_score)


ellies_score = class_name_test[-1][-1]

print(ellies_score)
```

Output:

```python
[
 ['Jenny', 90],
 ['Alexus', 85.5],
 ['Sam', 83],
 ['Ellie', 101.5]
]

83

101.5
```

---

## 12.8. Remember

For a 2D List:

```python
list[row][column]
```

Example:

```python
students[2][1]
```

Means:

* Get the third row.
* Get the second element inside that row.

Negative index:

```python
list[-1][-1]
```

→ Gets the last element in a 2D List.

---

# 13. Introduction to Lists

## 13.1. Modifying 2D Lists

In the previous lesson, we learned how to access data in a 2D List:

```python
list[row][column]
```

Example:

```python
class_name_hobbies = [
    ["Jenny", "Breakdancing"],
    ["Alexus", "Photography"],
    ["Grace", "Soccer"]
]
```

Structure:

```python
[
    [Name, Hobby],
    [Name, Hobby],
    [Name, Hobby]
]
```

Each element in the outer list is a sub-list.

---

## 13.2. Changing elements in a 2D List

To change a value:

```python
list[index1][index2] = new_value
```

Example:

Jenny changes her hobby:

From:

```python
"Breakdancing"
```

To:

```python
"Meditation"
```

Code:

```python
class_name_hobbies[0][1] = "Meditation"
```

Explanation:

First:

```python
class_name_hobbies[0]
```

Gets the first row:

```python
["Jenny", "Breakdancing"]
```

Then:

```python
[1]
```

Gets the second element:

```python
"Breakdancing"
```

Replace it with:

```python
"Meditation"
```

Result:

```python
[
 ["Jenny", "Meditation"],
 ["Alexus", "Photography"],
 ["Grace", "Soccer"]
]
```

---

## 13.3. Changing values using Negative Index

Python also allows negative indexes.

Example:

```python
class_name_hobbies[-1][-1] = "Football"
```

Explanation:

First:

```python
[-1]
```

Gets the last list:

```python
["Grace", "Soccer"]
```

Next:

```python
[-1]
```

Gets the last element:

```python
"Soccer"
```

Change it to:

```python
"Football"
```

Result:

```python
[
 ["Jenny", "Meditation"],
 ["Alexus", "Photography"],
 ["Grace", "Football"]
]
```


## Practice Exercise: Create `incoming_class`

Data:

| Name    | Nationality | Grade |
| ------- | ----------- | ----- |
| Kenny   | American    | 9     |
| Tanya   | Ukrainian   | 9     |
| Madison | Indian      | 7     |

Create:

```python
incoming_class = [
    ["Kenny", "American", 9],
    ["Tanya", "Ukrainian", 9],
    ["Madison", "Indian", 7]
]
```

Print:

```python
print(incoming_class)
```

Result:

```python
[
 ['Kenny', 'American', 9],
 ['Tanya', 'Ukrainian', 9],
 ['Madison', 'Indian', 7]
]
```


### Madison moves to grade 8

Original:

```python
["Madison", "Indian", 7]
```

Position:

```text
Madison → row index 2
```

Inside the row:

```text
Name          Nationality     Grade
 0                1             2
```

To change `7` into `8`:

```python
incoming_class[2][2] = 8
```

Code:

```python
incoming_class = [
    ["Kenny", "American", 9],
    ["Tanya", "Ukrainian", 9],
    ["Madison", "Indian", 7]
]

incoming_class[2][2] = 8

print(incoming_class)
```

Output:

```python
[
 ['Kenny', 'American', 9],
 ['Tanya', 'Ukrainian', 9],
 ['Madison', 'Indian', 8]
]
```


### Kenny changes name to Ken using negative index

List:

```python
[
 ['Kenny', 'American', 9],
 ['Tanya', 'Ukrainian', 9],
 ['Madison', 'Indian', 8]
]
```

Negative indexes:

```text
Kenny   = -3
Tanya   = -2
Madison = -1
```

The name is the first element:

```text
column = -3
```

Code:

```python
incoming_class[-3][-3] = "Ken"
```

Result:

```python
[
 ['Ken', 'American', 9],
 ['Tanya', 'Ukrainian', 9],
 ['Madison', 'Indian', 8]
]
```

---

## 13.4. Summary

| Purpose               | Code                 |
| --------------------- | -------------------- |
| Get data from 2D List | `list[i][j]`         |
| Modify data           | `list[i][j] = value` |
| First row             | `0`                  |
| Last row              | `-1`                 |
| First column          | `0`                  |
| Last column           | `-1`                 |

Remember:

```python
list[row][column]
```

Example:

```python
students[2][1]
```

Means:

* Third row.
* Second column.

In a 2D List:

**First choose the row, then choose the position inside that row.**