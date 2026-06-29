# 1. Working with Lists in Python: Adding by Index – `insert()`

## 1.1. The `.insert()` Method in Python Lists

In Python, lists have a method called `.insert()` that allows you to add an element at a specific index in a list.

Unlike `.append()`, which only adds an element to the end of the list, `.insert()` lets you choose exactly where the new element should be placed.

**Syntax:**

```python
list.insert(index, element)
```

Where:

* `index`: the position where the element will be inserted.
* `element`: the value to insert.

**Example:**

```python
my_list.insert(2, "Python")
```

**Explanation:**

* Inserts `"Python"` at index `2`.
* All elements after that position are automatically shifted one position to the right.

---

## 1.2. How `.insert()` Works

To better understand `.insert()`, imagine a line of customers waiting in a store:

```python
store_line = ["Karla", "Maxium", "Martim", "Isabella"]
```

In this list:

* `"Karla"` is at the front of the line.
* Everyone else stands behind her.

**List indexes:**

```
Index:
0          1          2          3
Karla    Maxium     Martim    Isabella
```

Suppose **Maxium** wants to save a place for a friend named **Vikor**, who should stand immediately after Maxium.

The correct insertion position is **index 2**.

Using `.insert()`:

```python
store_line.insert(2, "Vikor")

print(store_line)
```

**Output:**

```python
['Karla', 'Maxium', 'Vikor', 'Martim', 'Isabella']
```

**Explanation:**

* `"Vikor"` is inserted at index `2`.
* `"Martim"` and `"Isabella"` are automatically shifted one position to the right.

---

## 1.3. Important Notes About `.insert()`

### 1.3.1. The Order of Arguments

The `.insert()` method requires exactly **two arguments**:

```python
.insert(index, value)
```

Where:

* The **first argument** must be the index (an integer).
* The **second argument** is the value to insert.

**Example:**

```python
numbers.insert(1, 100)
```

Python interprets this as:

* Insert `100` at index `1`.

---

### 1.3.2. Elements Are Shifted During Insertion

When an element is inserted into a list, every element from the specified index onward is shifted one position to the right.

**Example:**

Initially:

```python
items = ["A", "B", "C"]
```

Insert `"X"` at index `1`:

```python
items.insert(1, "X")
```

**Result:**

```python
["A", "X", "B", "C"]
```

**Before:**

```
0    1    2
A    B    C
```

**After:**

```
0    1    2    3
A    X    B    C
```

---

### 1.3.3. Inserting at the End of a List

If `.insert()` is used to insert an element at the end of a list, no existing elements need to be shifted.

**Example:**

```python
numbers = [1, 2, 3]

numbers.insert(3, 4)

print(numbers)
```

**Output:**

```python
[1, 2, 3, 4]
```

This works because index `3` is the position immediately after the last element.

---

## 1.4. Practice: Using `.insert()`

### 1.4.1. Jiho's Produce

A grocery store called **Jiho's Produce** updates its front window display every week to showcase products that are currently on sale.

Jiho stores the display items in a Python list:

```python
front_display_list = ["Mango", "Filet Mignon", "Chocolate Milk"]

print(front_display_list)
```

**Output:**

```python
['Mango', 'Filet Mignon', 'Chocolate Milk']
```

---

### 1.4.2. Insert `"Pineapple"` at the Beginning

Jiho discovers that **Pineapple** is back in stock.

He wants to place it at the very beginning of the display so customers notice it first.

In a Python list:

* The first element always has index `0`.

Using `.insert()`:

```python
front_display_list.insert(0, "Pineapple")

print(front_display_list)
```

**Output:**

```python
['Pineapple', 'Mango', 'Filet Mignon', 'Chocolate Milk']
```

**Explanation:**

* `"Pineapple"` is inserted at index `0`.
* All existing items are shifted one position to the right.

---

## 1.5. Summary

After learning about `.insert()`, I understand that:

* `.insert()` is used to insert an element at any position in a list.
* Its syntax is:

```python
list.insert(index, value)
```

* List indexes start at `0`.
* When an element is inserted, all following elements automatically shift one position to the right.
* Negative indexes can also be used to insert elements relative to the end of the list.
* You can insert elements at the beginning, middle, or end of a list.

---

# 2. Working with Lists in Python: Removing by Index – `pop()`

## 2.1. The `.pop()` Method in Python Lists

In Python, lists provide a method called `.pop()` that removes an element at a specific index.

Like `.insert()`, `.pop()` works with indexes, but their purposes are opposite:

* `.insert()` adds an element.
* `.pop()` removes an element.

**Syntax:**

```python
list.pop(index)
```

Where:

* `index` is the position of the element to remove.

**Note:**

* The `index` argument is optional.
* If no index is provided, `.pop()` removes the last element in the list.

---

## 2.2. How `.pop()` Works

To better understand `.pop()`, consider a list of topics that might be included in a Computer Science curriculum:

```python
cs_topics = [
    "Python",
    "Data Structures",
    "Balloon Making",
    "Algorithms",
    "Clowns 101"
]
```

Two topics clearly do not belong:

* `"Balloon Making"`
* `"Clowns 101"`

We'll remove them using `.pop()`.

---

## 2.3. Removing the Last Element with `.pop()`

First, remove `"Clowns 101"`.

Since it is already the last element, no index is necessary.

**Code:**

```python
removed_element = cs_topics.pop()

print(cs_topics)
print(removed_element)
```

**Output:**

```python
['Python', 'Data Structures', 'Balloon Making', 'Algorithms']

'Clowns 101'
```

**Explanation:**

* Calling `.pop()` without an index removes the last element in the list.
* `"Clowns 101"` is removed from `cs_topics`.
* `.pop()` returns the removed value.

In this example:

```python
removed_element = cs_topics.pop()
```

The removed value (`"Clowns 101"`) is stored in the variable `removed_element`.

---

## 2.4. Removing an Element by Index

Next, remove `"Balloon Making"`.

Check its index:

```
Index:
0              1              2             3
Python   Data Structures   Balloon Making   Algorithms
```

`"Balloon Making"` is at index `2`.

Use:

```python
cs_topics.pop(2)

print(cs_topics)
```

**Output:**

```python
['Python', 'Data Structures', 'Algorithms']
```

**Explanation:**

* `.pop(2)` removes the element at index `2`.
* You do not need to store the returned value if you will not use it later.

---

## 2.5. Important Notes About `.pop()`

### 2.5.1. `.pop()` Does Not Require an Index

**Example:**

```python
numbers = [1, 2, 3]

numbers.pop()

print(numbers)
```

**Output:**

```python
[1, 2]
```

Since no index is given, Python removes the last element.

---

### 2.5.2. `.pop()` Can Accept an Index

**Example:**

```python
numbers = [1, 2, 3]

numbers.pop(1)

print(numbers)
```

**Output:**

```python
[1, 3]
```

Because:

* Index `1` contains the value `2`.
* The value `2` is removed from the list.

---

### 2.5.3. `.pop()` Returns the Removed Element

**Example:**

```python
numbers = [10, 20, 30]

removed = numbers.pop(1)

print(removed)
```

**Output:**

```python
20
```

This is because `.pop(1)` removes and returns the element at index `1`.

---

### 2.5.4. Errors When Using an Invalid Index

If you specify an index that does not exist, Python raises an error.

```python
numbers = [1, 2, 3]

numbers.pop(5)
```

**Output:**

```python
IndexError
```

Similarly, calling `.pop()` on an empty list also raises an error.

```python
empty_list = []

empty_list.pop()
```

**Output:**

```python
IndexError
```

---

## 2.6. Practice: Using `.pop()`

### 2.6.1. Data Science Topics

I decided to study **Data Science** alongside my Computer Science program.

Here is my list of study topics:

```python
data_science_topics = [
    "Machine Learning",
    "SQL",
    "Pandas",
    "Algorithms",
    "Statistics",
    "Python 3"
]

print(data_science_topics)
```

**Output:**

```python
['Machine Learning', 'SQL', 'Pandas', 'Algorithms', 'Statistics', 'Python 3']
```

---

### 2.6.2. Remove `"Python 3"`

I noticed that **Python 3** overlaps with what I'm already learning in the Computer Science program.

Use `.pop()` to remove it:

```python
data_science_topics.pop()

print(data_science_topics)
```

**Output:**

```python
['Machine Learning', 'SQL', 'Pandas', 'Algorithms', 'Statistics']
```

**Explanation:**

* Since `"Python 3"` is the last element, calling `.pop()` without an index is sufficient.

---

### 2.6.3. Remove `"Algorithms"`

Next, I realized that **Algorithms** is also covered in the Computer Science program.

Determine its index:

```
Index:
0                 1        2          3             4
Machine Learning  SQL    Pandas   Algorithms   Statistics
```

`"Algorithms"` is at index `3`.

Use:

```python
data_science_topics.pop(3)

print(data_science_topics)
```

**Output:**

```python
['Machine Learning', 'SQL', 'Pandas', 'Statistics']
```

---

## 2.7. Summary

After learning about `.pop()`, I understand that:

* `.pop()` removes an element from a list.
* Its syntax is:

```python
list.pop(index)
```

* If no index is provided, `.pop()` removes the last element.
* If an index is provided, `.pop()` removes the element at that position.
* `.pop()` returns the removed value, so it can be stored in a variable.
* Using an invalid index or calling `.pop()` on an empty list raises an `IndexError`.

---

# 3. Working with Lists in Python: Consecutive Lists – `range()`

## 3.1. The `range()` Function in Python

In Python, there are times when we need to create a list containing consecutive numbers.

For example:

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

However, manually typing a long sequence of numbers can be:

* Time-consuming.
* Prone to typing mistakes.

Python provides a much easier way to generate consecutive numbers using the `range()` function.

---

## 3.2. How `range()` Works

The `range()` function generates a sequence of consecutive numbers.

**Syntax:**

```python
range(stop)
```

Where:

* `stop`: the ending value, **which is not included** in the sequence.

**Example:**

```python
my_range = range(10)

print(my_range)
```

**Output:**

```python
range(0, 10)
```

This represents the following numbers:

```python
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

This is because `range(10)` starts at `0` and stops before `10`.

---

## 3.3. `range()` Does Not Create a List Directly

One important thing to remember is that `range()` does **not** create a regular list such as:

```python
[0, 1, 2, 3, 4]
```

Instead, it creates a **range object**.

**Example:**

```python
my_range = range(10)

print(my_range)
```

**Output:**

```python
range(0, 10)
```

Therefore, if you want to use it like a normal list, you need to convert it using the `list()` function.

---

## 3.4. Converting `range()` to a List with `list()`

The `list()` function converts an iterable object into a list.

**Syntax:**

```python
list(object)
```

**Example:**

```python
my_range = range(10)

print(list(my_range))
```

**Output:**

```python
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Now, `range(10)` has been converted into a regular Python list that can be used just like any other list.

---

## 3.5. Practice Using `range()`

### 3.5.1. Create a List from 0 to Before 9

Initially:

```python
number_list = range(3)

print(list(number_list))
```

**Output:**

```python
[0, 1, 2]
```

This is because:

```python
range(3)
```

generates:

```python
0, 1, 2
```

To generate numbers from `0` up to (but not including) `9`:

```python
number_list = range(9)

print(list(number_list))
```

**Output:**

```python
[0, 1, 2, 3, 4, 5, 6, 7, 8]
```

---

### 3.5.2. Create a Range from 0 to 7

Create a range named `zero_to_seven`:

```python
zero_to_seven = range(8)

print(list(zero_to_seven))
```

**Output:**

```python
[0, 1, 2, 3, 4, 5, 6, 7]
```

**Explanation:**

* `range(8)` starts at `0`.
* It stops before `8`.
* Therefore, the last number in the sequence is `7`.

---

## 3.6. Summary

After learning about `range()`, I understand that:

* `range()` is used to generate a sequence of consecutive numbers.
* Its syntax is:

```python
range(stop)
```

* `range()` starts at `0` by default.
* The `stop` value is **not included** in the sequence.

For example:

```python
range(5)
```

generates:

```python
0, 1, 2, 3, 4
```

* `range()` returns a **range object**.
* To convert it into a list, use:

```python
list(range())
```

* `range()` is a fast and convenient way to generate sequences of numbers while avoiding errors from manually entering them.

---

# 4. Working with Lists in Python: The Power of `range()`

## 4.1. Using `range()` with Multiple Arguments

In the previous lesson, we learned that:

```python
range(stop)
```

creates a sequence of numbers that starts at `0` and stops before `stop`.

However, `range()` can also accept additional arguments, allowing you to start from a different number or skip numbers at regular intervals.

**Syntax:**

```python
range(start, stop, step)
```

Where:

* `start`: the starting value.
* `stop`: the ending value (not included).
* `step`: the amount by which the value increases each time.

---

## 4.2. Creating a Range That Starts from a Different Number

If you pass two arguments to `range()`:

```python
range(start, stop)
```

Python generates a sequence that:

* Starts at `start`.
* Stops before `stop`.

**Example:**

```python
my_list = range(2, 9)

print(list(my_list))
```

**Output:**

```python
[2, 3, 4, 5, 6, 7, 8]
```

**Explanation:**

* The sequence starts at `2`.
* It stops before `9`.
* Therefore, the last number is `8`.

---

## 4.3. Using `step` to Skip Numbers

By adding a third argument:

```python
range(start, stop, step)
```

you can specify the interval between consecutive numbers.

**Example:**

```python
my_range2 = range(2, 9, 2)

print(list(my_range2))
```

**Output:**

```python
[2, 4, 6, 8]
```

**Explanation:**

* Start at `2`.
* Increase by `2` each time.

The sequence is:

```text
2 → 4 → 6 → 8 → 10
```

Since `10` is greater than or equal to `9`, it is not included.

---

## 4.4. Skipping Larger Intervals

The `step` value can be any positive integer.

**Example:**

```python
my_range3 = range(1, 100, 10)

print(list(my_range3))
```

**Output:**

```python
[1, 11, 21, 31, 41, 51, 61, 71, 81, 91]
```

**Explanation:**

* Start at `1`.
* Increase by `10` each time.

The sequence is:

```text
1 → 11 → 21 → 31 → 41 → 51 → 61 → 71 → 81 → 91
```

After `91`:

```text
91 + 10 = 101
```

Since `101` is greater than or equal to `100`, the sequence stops.

---

## 4.5. Practice Using `range()` with `step`

### 4.5.1. Create a Range Starting at 5 with a Step of 3

Requirements:

* Start at `5`.
* Increase by `3`.
* Stop before `15`.

**Code:**

```python
range_five_three = range(5, 15, 3)

print(list(range_five_three))
```

**Output:**

```python
[5, 8, 11, 14]
```

**Explanation:**

The sequence is:

```text
5 → 8 → 11 → 14 → 17
```

Since `17` is greater than or equal to `15`, it is not included.

---

### 4.5.2. Create a Range Starting at 0 with a Step of 5

Requirements:

* Start at `0`.
* Increase by `5`.
* Stop before `40`.

**Code:**

```python
range_diff_five = range(0, 40, 5)

print(list(range_diff_five))
```

**Output:**

```python
[0, 5, 10, 15, 20, 25, 30, 35]
```

**Explanation:**

The sequence is:

```text
0 → 5 → 10 → 15 → 20 → 25 → 30 → 35 → 40
```

Since `40` is the stopping value, it is not included in the list.

---

## 4.6. Summary

After learning more about `range()`, I understand that:

* `range()` can accept multiple arguments:

```python
range(start, stop, step)
```

* `start` determines where the sequence begins.
* `stop` determines where the sequence ends (exclusive).
* `step` determines the interval between consecutive numbers.

For example:

```python
range(2, 10, 2)
```

generates:

```python
[2, 4, 6, 8]
```

* The `step` argument makes it easy to generate sequences that skip numbers at regular intervals.

---

# 5. Working with Lists in Python: Length

## 5.1. Finding the Length of a List with `len()`

In Python, there are times when we need to know how many elements a list contains.

The number of elements in a list is called its **length**.

Python provides a built-in function called `len()` to calculate the number of elements in a list.

**Syntax:**

```python
len(list)
```

Where:

* `list`: the list whose length you want to determine.

---

## 5.2. How `len()` Works

When `len()` is used with a list, Python returns the total number of elements in that list.

**Example:**

```python
my_list = [1, 2, 3, 4, 5]

print(len(my_list))
```

**Output:**

```python
5
```

**Explanation:**

The list:

```python
[1, 2, 3, 4, 5]
```

contains **5 elements**, so:

```python
len(my_list)
```

returns:

```python
5
```

---

## 5.3. Finding the Length of a List Containing Multiple Data Types

The `len()` function works with lists containing different types of data.

**Example:**

```python
long_list = [
    1,
    5,
    6,
    7,
    -23,
    69.5,
    True,
    "very",
    "long",
    "list",
    "that",
    "keeps",
    "going.",
    "Let's",
    "practice",
    "getting",
    "the",
    "length"
]

long_list_len = len(long_list)

print(long_list_len)
```

**Output:**

```python
18
```

**Explanation:**

Although the list contains multiple data types, including:

* Integers
* Floating-point numbers
* Boolean values
* Strings

`len()` simply counts the total number of elements in the list.

---

## 5.4. Using `len()` with `range()`

Besides lists, `len()` can also be used with a `range` object.

**Example:**

```python
big_range = range(2, 3000, 10)

big_range_length = len(big_range)

print(big_range_length)
```

**Output:**

```python
300
```

**Explanation:**

```python
range(2, 3000, 10)
```

generates the numbers:

```text
2, 12, 22, 32, ...
```

Each number is **10** greater than the previous one.

Python can calculate the length of a `range` object directly, so there is no need to convert it into a list.

Instead of writing:

```python
len(list(big_range))
```

you can simply write:

```python
len(big_range)
```

---

## 5.5. Changing the Step Size in `range()`

Initially:

```python
big_range = range(2, 3000, 10)
```

This means:

* Start at `2`.
* Stop before `3000`.
* Increase by `10` each time.

For example:

```text
2, 12, 22, 32, 42, ...
```

If you change it to:

```python
big_range = range(2, 3000, 100)
```

Then:

* The interval between numbers becomes larger.
* The total number of elements decreases.

Calculate the new length:

```python
big_range_length = len(big_range)

print(big_range_length)
```

**Output:**

```python
30
```

---

## 5.6. Practice Using `len()`

### 5.6.1. Find the Length of `long_list`

Given the list:

```python
long_list = [
    1, 5, 6, 7, -23, 69.5, True,
    "very", "long", "list",
    "that", "keeps", "going.",
    "Let's", "practice", "getting",
    "the", "length"
]
```

Calculate its length and store the result in a variable:

```python
long_list_len = len(long_list)
```

Verify the result:

```python
print(long_list_len)
```

**Output:**

```python
18
```

---

### 5.6.2. Find the Length of `big_range`

Given:

```python
big_range = range(2, 3000, 10)
```

Create the variable:

```python
big_range_length = len(big_range)
```

Print the result:

```python
print(big_range_length)
```

**Output:**

```python
300
```

---

### 5.6.3. Modify `big_range`

Change the step size from `10` to `100`:

```python
big_range = range(2, 3000, 100)

big_range_length = len(big_range)

print(big_range_length)
```

**Output:**

```python
30
```

**Explanation:**

When the `step` value becomes larger:

* The numbers in the range are spaced farther apart.
* The total number of elements decreases.

---

## 5.7. Summary

After learning about `len()`, I understand that:

* `len()` is used to determine the number of elements in a list or a `range` object.
* Its syntax is:

```python
len(object)
```

* For a list:

```python
my_list = [1, 2, 3]

len(my_list)
```

**Output:**

```python
3
```

* For a `range` object:

```python
len(range(10))
```

**Output:**

```python
10
```

* A `range` object does not need to be converted into a list before using `len()`.
* Increasing the `step` value in `range()` reduces the total number of elements.

---

# 6. Working with Lists in Python: Slicing Lists I

## 6.1. Introduction to List Slicing

In Python, there are times when we do not want to use an entire list but only a portion of it.

Extracting a specific section of a list is called **slicing**.

**Example:**

```python
letters = ["a", "b", "c", "d", "e", "f", "g"]
```

Suppose we want to retrieve the elements from `"b"` through `"f"`.

We can use the slicing syntax:

```python
list[start:end]
```

Where:

* `start`: the index of the first element to include.
* `end`: one position **after** the last element to include.

---

## 6.2. How `start:end` Works

Consider the following list:

```python
letters = ["a", "b", "c", "d", "e", "f", "g"]
```

**Indexes:**

```text
Index:
0    1    2    3    4    5    6
a    b    c    d    e    f    g
```

To retrieve the elements from `"b"` through `"f"`:

* `"b"` is at index `1`, so we start at `1`.
* `"f"` is at index `5`, so we stop before index `6`.

Therefore:

```python
sliced_list = letters[1:6]

print(sliced_list)
```

**Output:**

```python
["b", "c", "d", "e", "f"]
```

**Explanation:**

* Start at index `1`.
* Stop before index `6`.
* The element at index `6` (`"g"`) is not included.

---

## 6.3. Important Notes About Slicing

When using:

```python
list[start:end]
```

Python:

* Includes the element at `start`.
* Excludes the element at `end`.

**Example:**

```python
numbers = [0, 1, 2, 3, 4, 5]

print(numbers[1:4])
```

**Output:**

```python
[1, 2, 3]
```

This is because:

* The slice starts at index `1`.
* It stops before index `4`.

---

## 6.4. Practice Using List Slicing

### 6.4.1. Extract the Beginning of a List

Given the list:

```python
suitcase = ["shirt", "shirt", "pants", "pants", "pajamas", "books"]
```

**Indexes:**

```text
Index:
0        1        2        3        4          5
shirt   shirt   pants   pants   pajamas    books
```

Initial code:

```python
beginning = suitcase[0:4]
```

**Result:**

```python
["shirt", "shirt", "pants", "pants"]
```

**Explanation:**

* Start at index `0`.
* Stop before index `4`.

---

### 6.4.2. Retrieve the First Two Elements

**Task:**

Retrieve the first two elements of `suitcase`.

Use:

```python
beginning = suitcase[0:2]

print(beginning)
```

**Output:**

```python
["shirt", "shirt"]
```

**Explanation:**

* Elements at indexes `0` and `1` are included.
* The element at index `2` is not included.

---

### 6.4.3. Retrieve the Two Middle Elements

We want to extract:

```python
["pants", "pants"]
```

From:

```python
suitcase = ["shirt", "shirt", "pants", "pants", "pajamas", "books"]
```

The two `"pants"` elements are located at:

```text
Index:
0        1        2        3        4          5
shirt   shirt   pants   pants   pajamas    books
```

Required indexes:

* Start at `2`.
* Stop before `4`.

**Code:**

```python
middle = suitcase[2:4]

print(middle)
```

**Output:**

```python
["pants", "pants"]
```

---

## 6.5. Summary

After learning about list slicing, I understand that:

* Slicing is used to extract a portion of a list.
* Its syntax is:

```python
list[start:end]
```

* `start` specifies where the slice begins.
* `end` specifies where the slice stops, but the element at `end` is **not included**.

For example:

```python
letters[1:6]
```

returns:

```python
["b", "c", "d", "e", "f"]
```

* Slicing does **not** modify the original list. Instead, it creates and returns a new list.

---

# 7. Working with Lists in Python: Slicing Lists II

## 7.1. Advanced List Slicing

In the previous lesson, we learned how to extract part of a list using the following syntax:

```python
list[start:end]
```

Python's slicing feature is very flexible. It allows us to:

* Retrieve the first few elements of a list.
* Retrieve the last few elements of a list.
* Retrieve all elements except the last few.

---

## 7.2. Retrieving the First *n* Elements of a List

If you want to retrieve the first few elements of a list, you can omit the `start` index.

**Syntax:**

```python
list[:n]
```

Where:

* Python automatically starts at index `0`.
* The slice stops before index `n`.

**Example:**

```python
fruits = ["apple", "cherry", "pineapple", "orange", "mango"]

print(fruits[:3])
```

**Output:**

```python
['apple', 'cherry', 'pineapple']
```

**Explanation:**

Indexes:

```text
0          1          2           3         4
apple    cherry   pineapple    orange    mango
```

`fruits[:3]` retrieves:

* Index `0`
* Index `1`
* Index `2`

It does **not** include index `3` (`"orange"`).

---

## 7.3. Retrieving the Last *n* Elements of a List

To retrieve elements from the end of a list, use **negative indexes**.

**Syntax:**

```python
list[-n:]
```

Where:

* `-n` specifies the starting position counted from the end of the list.
* Omitting `end` means the slice continues to the end of the list.

**Example:**

```python
fruits = ["apple", "cherry", "pineapple", "orange", "mango"]

print(fruits[-2:])
```

**Output:**

```python
['orange', 'mango']
```

**Explanation:**

Negative indexes:

```text
-5        -4          -3          -2        -1
apple   cherry   pineapple    orange    mango
```

`fruits[-2:]` starts at:

* Index `-2` (`"orange"`)

and continues through the end of the list.

---

## 7.4. Retrieving All Elements Except the Last *n*

You can also retrieve every element except the last few.

**Syntax:**

```python
list[:-n]
```

Where:

* The slice starts at the beginning of the list.
* It stops before the last `n` elements.

**Example:**

```python
fruits = ["apple", "cherry", "pineapple", "orange", "mango"]

print(fruits[:-1])
```

**Output:**

```python
['apple', 'cherry', 'pineapple', 'orange']
```

**Explanation:**

Original list:

```python
['apple', 'cherry', 'pineapple', 'orange', 'mango']
```

`[:-1]` excludes the final element:

```python
'mango'
```

---

## 7.5. Practice with Advanced Slicing

Given the following list:

```python
suitcase = ["shirt", "shirt", "pants", "pants", "pajamas", "books"]
```

Indexes:

```text
0        1        2        3        4          5
shirt   shirt   pants   pants   pajamas    books
```

---

## 7.6. Retrieve the Last Two Elements

**Task:**

Create a list named `last_two_elements` containing the last two elements of `suitcase`.

**Solution:**

```python
last_two_elements = suitcase[-2:]

print(last_two_elements)
```

**Output:**

```python
['pajamas', 'books']
```

**Explanation:**

* `-2` starts at the second-to-last element.
* The slice continues to the end of the list.

---

## 7.7. Retrieve All Elements Except the Last Three

**Task:**

Create a list named `slice_off_last_three` containing all elements except the last three.

**Solution:**

```python
slice_off_last_three = suitcase[:-3]

print(slice_off_last_three)
```

**Output:**

```python
['shirt', 'shirt', 'pants']
```

**Explanation:**

Original list:

```python
['shirt', 'shirt', 'pants', 'pants', 'pajamas', 'books']
```

The last three elements:

```python
['pants', 'pajamas', 'books']
```

are excluded.

---

## 7.8. Summary

After learning advanced slicing, I understand that:

* To retrieve the first `n` elements:

```python
list[:n]
```

Example:

```python
fruits[:3]
```

retrieves the first three elements.

* To retrieve the last `n` elements:

```python
list[-n:]
```

Example:

```python
fruits[-2:]
```

retrieves the last two elements.

* To retrieve all elements except the last `n`:

```python
list[:-n]
```

Example:

```python
fruits[:-1]
```

excludes the last element.

* Slicing always creates a new list and does not modify the original list.

---

# 8. Working with Lists in Python: Counting in a List

## 8.1. Counting Occurrences with `.count()`

In Python, there are times when we need to know how many times a particular element appears in a list.

Python provides the `.count()` method to count the number of occurrences of a specific value.

**Syntax:**

```python
list.count(element)
```

Where:

* `element`: the value whose occurrences you want to count.

---

## 8.2. How `.count()` Works

Suppose we have a list containing the letters in the word **"Mississippi"**:

```python
letters = ["m", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"]
```

To find out how many times `"i"` appears:

```python
num_i = letters.count("i")

print(num_i)
```

**Output:**

```python
4
```

**Explanation:**

In the list:

```python
["m", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"]
```

The letter `"i"` appears at:

* Position `1`
* Position `4`
* Position `7`
* Position `10`

for a total of **4 occurrences**.

---

## 8.3. Storing the Result of `.count()`

Since `.count()` returns an integer, you can store its result in a variable for later use.

**Example:**

```python
num_i = letters.count("i")
```

Now:

```python
num_i = 4
```

You can display the result using:

```python
print(num_i)
```

---

## 8.4. Using `.count()` with Nested Lists

The `.count()` method can also count elements in a nested (two-dimensional) list.

**Example:**

```python
number_collection = [
    [100, 200],
    [100, 200],
    [475, 29],
    [34, 34]
]
```

To determine how many times the list `[100, 200]` appears:

```python
num_pairs = number_collection.count([100, 200])

print(num_pairs)
```

**Output:**

```python
2
```

**Explanation:**

The list:

```python
[
    [100, 200],
    [100, 200],
    [475, 29],
    [34, 34]
]
```

contains the sublist `[100, 200]` **twice**.

---

## 8.5. Practice Using `.count()`

### Class President Election

Mrs. Wilson's class is holding an election for class president.

The list of votes is:

```python
votes = [
    "Jake",
    "Jake",
    "Laurie",
    "Laurie",
    "Laurie",
    "Jake",
    "Jake",
    "Jake",
    "Laurie",
    "Cassie",
    "Cassie",
    "Jake",
    "Jake",
    "Cassie",
    "Laurie",
    "Cassie",
    "Jake",
    "Jake",
    "Cassie",
    "Laurie"
]
```

### Count Jake's Votes

To find out how many students voted for `"Jake"`:

```python
jake_votes = votes.count("Jake")
```

Verify the result:

```python
print(jake_votes)
```

**Output:**

```python
8
```

**Explanation:**

In the `votes` list, the name `"Jake"` appears **8 times**.

---

## 8.6. Summary

After learning about `.count()`, I understand that:

* `.count()` counts the number of occurrences of a specific element in a list.
* Its syntax is:

```python
list.count(element)
```

* The method returns an integer.

Example:

```python
letters.count("i")
```

returns:

```python
4
```

* `.count()` also works with nested lists.
* Since it returns a value, the result can be stored in a variable for later use.

---

# 9. Working with Lists in Python: Sorting Lists I

## 9.1. Sorting a List with `.sort()`

In Python, there are times when we want to arrange the elements in a list in either:

* Ascending order (1, 2, 3, ...)
* Alphabetical order (A, B, C, ...)

Python provides the `.sort()` method to accomplish this.

**Syntax:**

```python
list.sort()
```

This method sorts the **original list in place**.

---

## 9.2. Sorting in Ascending Order

**Example:**

```python
names = ["Xander", "Buffy", "Angel", "Willow", "Giles"]

names.sort()

print(names)
```

**Output:**

```python
['Angel', 'Buffy', 'Giles', 'Willow', 'Xander']
```

**Explanation:**

Original list:

```python
["Xander", "Buffy", "Angel", "Willow", "Giles"]
```

After calling:

```python
names.sort()
```

Python rearranges the elements in alphabetical order:

* Angel
* Buffy
* Giles
* Willow
* Xander

---

## 9.3. Sorting in Descending Order

The `.sort()` method can also sort a list in reverse order.

**Syntax:**

```python
list.sort(reverse=True)
```

**Example:**

```python
names.sort(reverse=True)

print(names)
```

**Output:**

```python
['Xander', 'Willow', 'Giles', 'Buffy', 'Angel']
```

**Explanation:**

Setting `reverse=True` tells Python to sort the list in descending order.

---

## 9.4. Important Notes About `.sort()`

### 9.4.1. `.sort()` Does Not Return a Value

Unlike `.count()` or `.pop()`, the `.sort()` method does **not** return a value.

Instead, it directly modifies the original list.

**Correct usage:**

```python
names.sort()

print(names)
```

---

### 9.4.2. Do Not Assign the Result of `.sort()` to a Variable

**Incorrect example:**

```python
sorted_names = names.sort()

print(sorted_names)
```

**Output:**

```python
None
```

**Explanation:**

`.sort()` always returns `None`.

It simply rearranges the contents of `names`.

After executing:

```python
names.sort()
```

the variable `names` itself contains the sorted list.

---

## 9.5. Practice Using `.sort()`

### 9.5.1. Sort a List of Addresses

Given the list:

```python
addresses = [
    "221 B Baker St.",
    "42 Wallaby Way",
    "12 Grimmauld Place",
    "742 Evergreen Terrace",
    "1600 Pennsylvania Ave",
    "10 Downing St."
]
```

Sort it:

```python
addresses.sort()

print(addresses)
```

**Output:**

```python
[
    '10 Downing St.',
    '12 Grimmauld Place',
    '1600 Pennsylvania Ave',
    '221 B Baker St.',
    '42 Wallaby Way',
    '742 Evergreen Terrace'
]
```

---

### 9.5.2. Sort a List of Names

Initially:

```python
names = ["Ron", "Hermione", "Harry", "Albus", "Sirius"]

# sort(names)
```

The line above causes an error because `sort()` is **not** a standalone function.

The correct approach is:

```python
names.sort()

print(names)
```

**Output:**

```python
['Albus', 'Harry', 'Hermione', 'Ron', 'Sirius']
```

---

### 9.5.3. Why Isn't `sorted_cities` the Sorted List?

Given:

```python
cities = ["London", "Paris", "Rome", "Los Angeles", "New York"]

sorted_cities = cities.sort()

print(sorted_cities)
```

**Output:**

```python
None
```

**Explanation:**

`.sort()` does not return a new list.

Instead, it modifies `cities` directly.

After calling:

```python
cities.sort()
```

the variable `cities` contains the sorted list.

---

### 9.5.4. Sort in Descending Order

Use:

```python
cities.sort(reverse=True)

print(cities)
```

**Output:**

```python
['Rome', 'Paris', 'New York', 'Los Angeles', 'London']
```

**Explanation:**

Python sorts the strings in reverse alphabetical order (Z → A).

---

## 9.6. Summary

After learning about `.sort()`, I understand that:

* `.sort()` is used to sort the elements of a list.
* To sort in ascending order:

```python
list.sort()
```

* To sort in descending order:

```python
list.sort(reverse=True)
```

* `.sort()` modifies the original list **in place**.
* `.sort()` does not return a value, so its result should **not** be assigned to a variable.

For example:

```python
sorted_list = my_list.sort()
```

After this statement:

```python
sorted_list
```

contains:

```python
None
```

# 10. Working with Lists in Python: Sorting Lists II

## 10.1. Sorting a List with `sorted()`

Besides the `.sort()` method, Python also provides a built-in function called `sorted()` for sorting lists.

**Syntax:**

```python
sorted(list)
```

Unlike `.sort()`, `sorted()` does **not** modify the original list. Instead, it returns a **new sorted list**.

---

## 10.2. The Difference Between `.sort()` and `sorted()`

There are two important differences between these two approaches.

### 9.2.1. How They Are Called

`.sort()` is a method of the list object, so it is called after the list name.

**Example:**

```python
names.sort()
```

In contrast, `sorted()` is a built-in Python function, so it is called before the list.

**Example:**

```python
sorted(names)
```

---

### 10.2.2. Do They Modify the Original List?

**`.sort()`**

* Sorts the original list directly.
* Does not create a new list.

**`sorted()`**

* Leaves the original list unchanged.
* Returns a new sorted list.

---

## 10.3. How `sorted()` Works

Given the list:

```python
names = ["Xander", "Buffy", "Angel", "Willow", "Giles"]
```

Create a new sorted list:

```python
sorted_names = sorted(names)

print(sorted_names)
```

**Output:**

```python
['Angel', 'Buffy', 'Giles', 'Willow', 'Xander']
```

**Explanation:**

`sorted()` arranges the elements alphabetically and returns a new list.

---

## 10.4. `sorted()` Does Not Modify the Original List

After executing:

```python
sorted_names = sorted(names)
```

Check the original list:

```python
print(names)
```

**Output:**

```python
['Xander', 'Buffy', 'Angel', 'Willow', 'Giles']
```

Notice that:

* `sorted_names` contains the sorted elements.
* `names` remains unchanged.

This is the biggest difference between `sorted()` and `.sort()`.

---

## 10.5. Practice Using `sorted()`

### 10.5.1. Create a New Sorted List

Given the list:

```python
games = ["Portal", "Minecraft", "Pacman", "Tetris", "The Sims", "Pokemon"]
```

Use `sorted()`:

```python
games_sorted = sorted(games)
```

---

### 10.5.2. Compare `games` and `games_sorted`

Print both lists:

```python
print(games)

print(games_sorted)
```

**Output:**

```python
['Portal', 'Minecraft', 'Pacman', 'Tetris', 'The Sims', 'Pokemon']

['Minecraft', 'Pacman', 'Pokemon', 'Portal', 'Tetris', 'The Sims']
```

**Explanation:**

`games`

* Remains in its original order.

`games_sorted`

* Is a new list arranged in alphabetical order.

---

## 10.6. Comparing `.sort()` and `sorted()`

| Feature                     | `.sort()`     | `sorted()`               |
| --------------------------- | ------------- | ------------------------ |
| Type                        | List method   | Built-in Python function |
| Syntax                      | `list.sort()` | `sorted(list)`           |
| Creates a new list?         | No            | Yes                      |
| Modifies the original list? | Yes           | No                       |
| Return value                | `None`        | A new sorted list        |

---

## 10.7. Summary

After learning about `sorted()`, I understand that:

* `sorted()` is a built-in function used to sort a list.
* Its syntax is:

```python
sorted(list)
```

* `sorted()` returns a **new sorted list**.
* The original list remains unchanged.

**Example:**

```python
numbers = [3, 1, 2]

sorted_numbers = sorted(numbers)
```

**Result:**

```python
numbers
```

```python
[3, 1, 2]
```

```python
sorted_numbers
```

```python
[1, 2, 3]
```

* If you want to preserve the original data while creating a sorted version, use `sorted()`.

---

# Summary of the **Working with Lists in Python** Chapter

After completing this chapter, I have learned the essential operations for working with Python lists.

| **Concept**                     | **Syntax**                  |
| ------------------------------- | --------------------------- |
| Insert an element               | `list.insert(index, value)` |
| Remove an element               | `list.pop(index)`           |
| Generate a sequence of numbers  | `range()`                   |
| Get the length of a list        | `len(list)`                 |
| Slice a list                    | `list[start:end]`           |
| Count occurrences of an element | `list.count(value)`         |
| Sort a list in place            | `list.sort()`               |
| Create a new sorted list        | `sorted(list)`              |
