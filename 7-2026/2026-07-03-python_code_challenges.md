# 1. Introduction to Strings

## 1.1 What Is a String?

A **string** is a data type used to store text, such as letters, words, or sentences.

A string is enclosed in:

* Single quotes `' '`
* Or double quotes `" "`

**Example:**

```python
name = "Alice"
country = 'Vietnam'
```

A string can contain:

* Letters
* Numbers
* Symbols
* Spaces

**Example:**

```python
text = "Hello Python!"
```

## 1.2 Exercise

Create a variable named `favorite_word`, assign it your favorite word, and print it.

**Example:**

```python
favorite_word = "Python"
print(favorite_word)
```

**Output:**

```text
Python
```

---

# 2. They're All Lists!

## 2.1 A String Is Like a List

You can think of a string as a list of characters.

**Example:**

```python
favorite_fruit = "blueberry"
```

Each character has an **index** (position).

| Character | b | l | u | e | b | e | r | r | y |
| --------- | - | - | - | - | - | - | - | - | - |
| Index     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |

## 2.2 Accessing Characters by Index

**Syntax:**

```python
string[index]
```

**Example:**

```python
favorite_fruit = "blueberry"

print(favorite_fruit[0])
```

**Output:**

```text
b
```

Another example:

```python
print(favorite_fruit[1])
```

**Output:**

```text
l
```

**Note:**

* Indexing starts at **0**, not **1**.

## 2.3 An Index Must Be an Integer

A string index must be an **integer**.

**Incorrect:**

```python
print(favorite_fruit[1.5])
```

**Output:**

```text
TypeError: string indices must be integers
```

## 2.4 Exercise

**Step 1:** Create a variable named `my_name` and assign it your name.

**Example:**

```python
my_name = "Alice"
```

**Step 2:** Get the first character and store it in `first_initial`.

```python
first_initial = my_name[0]
```

**Example:**

```python
print(first_initial)
```

**Output:**

```text
A
```

---

# 3. Cut Me a Slice of String

## 3.1 String Slicing

Besides accessing individual characters, Python also allows you to extract a sequence of characters using **string slicing**.

**Syntax:**

```python
string[first_index:last_index]
```

Where:

* `first_index` is the starting position (included).
* `last_index` is the ending position (excluded).

The result is a new string (a **substring**).

**Example:**

```python
favorite_fruit = "blueberry"

print(favorite_fruit[4:6])
```

**Output:**

```text
be
```

**Explanation:**

| Index     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --------- | - | - | - | - | - | - | - | - | - |
| Character | b | l | u | e | b | e | r | r | y |

`[4:6]` selects:

* Index 4 → **b** (included)
* Index 5 → **e** (included)
* Index 6 → **r** (excluded)

Result:

```text
"be"
```

## 3.2 Slicing from the Beginning or to the End

You can omit either index.

### Omitting the Starting Index

If `first_index` is omitted, Python starts from the beginning of the string.

```python
favorite_fruit = "blueberry"

print(favorite_fruit[:4])
```

**Output:**

```text
blue
```

### Omitting the Ending Index

If `last_index` is omitted, Python slices to the end of the string.

```python
favorite_fruit = "blueberry"

print(favorite_fruit[4:])
```

**Output:**

```text
berry
```

## 3.3 Examples

```python
text = "Python"

print(text[0:2])   # Py
print(text[2:4])   # th
print(text[:3])    # Pyt
print(text[3:])    # hon
```

**Output:**

```text
Py
th
Pyt
hon
```

## 3.4 Exercise

### Task 1

Given:

```python
first_name = "Rodrigo"
last_name = "Villanueva"
```

Create a variable named `new_account` using the first **five** characters of `last_name`.

**Answer:**

```python
first_name = "Rodrigo"
last_name = "Villanueva"

new_account = last_name[:5]
```

**Result:**

```text
"Villa"
```

### Task 2

Create a variable named `temp_password` containing the **3rd through 6th characters** of `last_name` (a total of four characters).

**Answer:**

```python
temp_password = last_name[2:6]
```

**Result:**

```text
llan
```

## 3.5 Summary

* A string can be sliced using the syntax `string[start:end]`.
* `start` is **included**.
* `end` is **excluded**.
* You can omit `start` to slice from the beginning of the string.
* You can omit `end` to slice to the end of the string.
* The result of slicing is always a **new string (substring)**.

---

# 4. Concatenating Strings

## 4.1 String Concatenation

In Python, you can combine two or more strings using the `+` operator.

**Example:**

```python
fruit_prefix = "blue"
fruit_suffix = "berries"

favorite_fruit = fruit_prefix + fruit_suffix

print(favorite_fruit)
```

**Output:**

```text
blueberries
```

Here:

* `"blue" + "berries"` → `"blueberries"`

## 4.2 A Note About Spaces

Python does **not** automatically add spaces when concatenating strings.

**Example:**

```python
favorite_fruit = "blueberries"

fruit_sentence = "My favorite fruit is" + favorite_fruit

print(fruit_sentence)
```

**Output:**

```text
My favorite fruit isblueberries
```

The output is missing a space between `"is"` and `"blueberries"`.

To include a space, add it yourself:

```python
fruit_sentence = "My favorite fruit is " + favorite_fruit

print(fruit_sentence)
```

**Output:**

```text
My favorite fruit is blueberries
```

## 4.3 Example

```python
first_name = "John"
last_name = "Smith"

full_name = first_name + " " + last_name

print(full_name)
```

**Output:**

```text
John Smith
```

## 4.4 Exercise

### Task 1

Write a function named `account_generator()` that accepts two parameters:

* `first_name`
* `last_name`

The function should:

* Take the first three characters of `first_name`
* Take the first three characters of `last_name`
* Concatenate them
* Return the new account name

**Answer:**

```python
def account_generator(first_name, last_name):
    return first_name[:3] + last_name[:3]
```

### Task 2

Call the function with the given data and store the result in `new_account`.

**Example:**

```python
first_name = "Rodrigo"
last_name = "Villanueva"

new_account = account_generator(first_name, last_name)

print(new_account)
```

**Output:**

```text
RodVil
```

## 4.5 Summary

* Use the `+` operator to concatenate strings.
* Python does **not** automatically insert spaces when joining strings.
* You can combine **string slicing** and **concatenation** to create new strings.
* The `account_generator()` function uses:

  * `first_name[:3]`
  * `last_name[:3]`
  * `+` to create a new account name.

---

# 5. More and More String Slicing (How Long Is That String?)

## 5.1 The `len()` Function

Python provides many built-in functions for working with strings. One of the most commonly used is `len()`.

The `len()` function returns the length of a string, which is the total number of characters it contains.

**Example:**

```python
favorite_fruit = "blueberry"

length = len(favorite_fruit)

print(length)
```

**Output:**

```text
9
```

The string `"blueberry"` contains **9 characters**.

## 5.2 `len()` Counts Spaces

Spaces are counted as characters too.

**Example:**

```python
fruit_sentence = "I love blueberries"

print(len(fruit_sentence))
```

**Output:**

```text
18
```

## 5.3 Getting the Last Character

Suppose you have:

```python
favorite_fruit = "blueberry"
```

Many beginners try:

```python
last_char = favorite_fruit[len(favorite_fruit)]
```

This causes an error:

```text
IndexError: string index out of range
```

### Why?

`len(favorite_fruit)` returns:

```text
9
```

However, the valid indices are:

| Index     | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --------- | - | - | - | - | - | - | - | - | - |
| Character | b | l | u | e | b | e | r | r | y |

There is **no index 9**.

The last character is always at:

```python
len(string) - 1
```

**Example:**

```python
last_char = favorite_fruit[len(favorite_fruit) - 1]

print(last_char)
```

**Output:**

```text
y
```

## 5.4 Using `len()` with Slicing

You can combine `len()` with string slicing.

**Example:**

```python
favorite_fruit = "blueberry"

length = len(favorite_fruit)

last_chars = favorite_fruit[length - 4:]

print(last_chars)
```

**Output:**

```text
erry
```

**Explanation:**

```text
length = 9
```

```python
favorite_fruit[5:]
```

This slices the string from index **5** to the end.

## 5.5 Example

```python
word = "Programming"

print(len(word))
print(word[len(word)-1])
print(word[len(word)-4:])
```

**Output:**

```text
11
g
ming
```

## 5.6 Exercise

### Task 1

Write a function named `password_generator()` that accepts:

* `first_name`
* `last_name`

The function should:

* Take the last three characters of `first_name`
* Take the last three characters of `last_name`
* Concatenate them
* Return the resulting string

**Answer:**

```python
def password_generator(first_name, last_name):
    return first_name[len(first_name)-3:] + last_name[len(last_name)-3:]
```

### Task 2

Call the function using the given data and store the result in `temp_password`.

**Example:**

```python
first_name = "Rodrigo"
last_name = "Villanueva"

temp_password = password_generator(first_name, last_name)

print(temp_password)
```

**Output:**

```text
goueva
```

## 5.7 Summary

* `len()` returns the number of characters in a string.
* Spaces count as characters.
* The last character is located at index `len(string) - 1`.
* You can combine `len()` with slicing to extract characters from the end of a string.

Examples:

* `string[len(string)-1]` → last character
* `string[len(string)-3:]` → last 3 characters
* `string[len(string)-n:]` → last `n` characters

---

# 6. Negative Indices

## 6.1 Negative Indices

Besides positive indices (`0`, `1`, `2`, ...), Python also supports **negative indices**, which let you access characters starting from the end of a string.

| Negative Index | Meaning                      |
| -------------- | ---------------------------- |
| `-1`           | Last character               |
| `-2`           | Second-to-last character     |
| `-3`           | Third character from the end |
| ...            | ...                          |

**Example:**

```python
favorite_fruit = "blueberry"

print(favorite_fruit[-1])
print(favorite_fruit[-2])
```

**Output:**

```text
y
r
```

## 6.2 Slicing with Negative Indices

Negative indices can also be used with string slicing.

**Example:**

```python
favorite_fruit = "blueberry"

print(favorite_fruit[-3:])
```

**Output:**

```text
rry
```

**Explanation:**

`-3` means "start at the third character from the end and continue to the end of the string."

## 6.3 Comparing with `len()`

The following two statements produce the same result:

```python
favorite_fruit = "blueberry"

print(favorite_fruit[len(favorite_fruit)-3:])
print(favorite_fruit[-3:])
```

**Output:**

```text
rry
rry
```

However, using **negative indices** is shorter and easier to read.

## 6.4 Example

```python
word = "Programming"

print(word[-1])   # g
print(word[-2])   # n
print(word[-4:])  # ming
```

**Output:**

```text
g
n
ming
```

## 6.5 Exercise

Given:

```python
company_motto = "Copeland's Corporate Company helps you capably cope with the constant cacophony of daily life"
```

### Task 1

Get the second-to-last character and store it in `second_to_last`.

**Answer:**

```python
second_to_last = company_motto[-2]
```

### Task 2

Get the last four characters and store them in `final_word`.

**Answer:**

```python
final_word = company_motto[-4:]
```

If you print it:

```python
print(final_word)
```

**Output:**

```text
life
```

## 6.6 Summary

* Python supports **negative indices** for accessing characters from the end of a string.
* `-1` refers to the last character.
* `-2` refers to the second-to-last character.
* Negative indices can also be used with slicing:

  * `string[-3:]` → last 3 characters
  * `string[-4:]` → last 4 characters
* Using negative indices is usually shorter and more readable than using `len()`.

---

# 7. Strings Are Immutable

## 7.1 What Does Immutable Mean?

In the previous lessons, we learned how to:

* Access individual characters in a string.
* Slice strings.
* Concatenate strings.

Whenever you perform these operations, Python does **not** modify the original string. Instead, it creates a **new string**.

This is because strings are **immutable**.

In other words:

* Once a string is created, its individual characters cannot be changed.
* To "modify" a string, you must create a new one.

## 7.2 Mutable vs. Immutable

Python objects can be classified into two categories:

| Concept       | Meaning                          |
| ------------- | -------------------------------- |
| **Mutable**   | Can be changed after creation    |
| **Immutable** | Cannot be changed after creation |

Examples:

* `list` → mutable
* `string` → immutable
* `tuple` → immutable

## 7.3 You Cannot Modify Individual Characters

**Example:**

```python
first_name = "Bob"

first_name[0] = "R"
```

**Output:**

```text
TypeError: 'str' object does not support item assignment
```

**Explanation:**

The string `"Bob"` has already been created, so Python does not allow you to change the character at index `0`.

## 7.4 The Correct Way to "Modify" a String

Instead of modifying a string directly, create a new one by concatenating strings.

**Example:**

```python
first_name = "Bob"

fixed_first_name = "R" + first_name[1:]

print(fixed_first_name)
```

**Output:**

```text
Rob
```

**Explanation:**

```python
first_name[1:]
```

returns:

```text
ob
```

Then:

```text
"R" + "ob"
```

becomes:

```text
"Rob"
```

The original string `"Bob"` remains unchanged.

## 7.5 Example

```python
word = "Python"

new_word = "J" + word[1:]

print(word)
print(new_word)
```

**Output:**

```text
Python
Jython
```

`word` remains unchanged because strings are immutable.

## 7.6 Exercise

Given:

```python
first_name = "Bob"
```

### Task 1

Try running:

```python
first_name[0] = "R"
```

**Output:**

```text
TypeError: 'str' object does not support item assignment
```

### Task 2

Create a new string named `fixed_first_name`.

**Answer:**

```python
fixed_first_name = "R" + first_name[1:]
```

If you print it:

```python
print(fixed_first_name)
```

**Output:**

```text
Rob
```

## 7.7 Summary

* Strings are **immutable**, so individual characters cannot be modified.
* Statements like `string[index] = value` will raise an error.
* To change a string, create a new one using slicing and concatenation.

Examples:

* `word[0] = "A"` → Error
* `"A" + word[1:]` → Creates a new string successfully

# 8. Escape Characters

## 8.1 What Are Escape Characters?

Sometimes you want to include characters in a string that have special meanings in Python, such as:

* Double quotation marks (`"`)
* Single quotation marks (`'`)
* Backslashes (`\`)

To tell Python to treat these as ordinary characters, use an **escape character** by placing a backslash (`\`) before the character.

## 8.2 What Happens Without Escape Characters?

**Example:**

```python
favorite_fruit_conversation = "He said, "blueberries are my favorite!""
```

Python will raise a syntax error because:

* The string starts with a double quotation mark (`"`).
* When Python reaches the next `"`, it assumes the string has ended.

## 8.3 Using the Backslash (`\`)

To include double quotation marks inside a string, use:

```python
favorite_fruit_conversation = "He said, \"blueberries are my favorite!\""

print(favorite_fruit_conversation)
```

**Output:**

```text
He said, "blueberries are my favorite!"
```

Python interprets `\"` as a literal double quotation mark.

## 8.4 Common Escape Characters

| Escape Sequence | Meaning                     |
| --------------- | --------------------------- |
| `\"`            | Double quotation mark (`"`) |
| `\'`            | Single quotation mark (`'`) |
| `\\`            | Backslash (`\`)             |
| `\n`            | New line                    |
| `\t`            | Horizontal tab              |

**Example:**

```python
print("Hello\nWorld")
```

**Output:**

```text
Hello
World
```

Another example:

```python
print("Python\tProgramming")
```

**Output:**

```text
Python    Programming
```

## 8.5 Exercise

### Task

Rob's password is:

```text
theycallme"crazy"91
```

Store this password in a variable named `password` using escape characters.

**Answer:**

```python
password = "theycallme\"crazy\"91"
```

If you print it:

```python
print(password)
```

**Output:**

```text
theycallme"crazy"91
```

## 8.6 Summary

* Escape characters use the backslash (`\`).
* `\"` is used to insert a double quotation mark inside a string.
* Escape characters allow special characters to appear without causing syntax errors.

Common escape sequences include:

* `\"`
* `\'`
* `\\`
* `\n`
* `\t`

# 9. Iterating Through Strings

## 9.1 Iterating Through a String

A string can be viewed as a sequence of characters.

Therefore, you can iterate through each character using a `for` loop or a `while` loop.

**Example:**

```python
def print_each_letter(word):
    for letter in word:
        print(letter)
```

Call the function:

```python
favorite_color = "blue"

print_each_letter(favorite_color)
```

**Output:**

```text
b
l
u
e
```

Here:

* `word` is `"blue"`.
* During each iteration, `letter` stores one character from the string.
* `print(letter)` prints each character.

## 9.2 How a `for` Loop Works

**Example:**

```python
word = "cat"

for letter in word:
    print(letter)
```

Iteration process:

| Iteration | `letter` |
| --------- | -------- |
| 1         | c        |
| 2         | a        |
| 3         | t        |

**Output:**

```text
c
a
t
```

## 9.3 Counting Characters Without Using `len()`

You can create your own version of `len()` by counting each iteration.

**Example:**

```python
def get_length(word):
    count = 0

    for letter in word:
        count += 1

    return count
```

**Explanation:**

```python
count = 0
```

Initializes a counter.

```python
for letter in word:
```

Loops through each character.

```python
count += 1
```

Increases the counter by 1 for every character.

```python
return count
```

Returns the total number of characters.

## 9.4 Example

```python
print(get_length("Python"))
print(get_length("Hello"))
```

**Output:**

```text
6
5
```

## 9.5 Exercise

### Task

Write a function named `get_length()` that:

* Accepts a string as a parameter.
* Returns the number of characters in the string.
* Does **not** use `len()`.

**Answer:**

```python
def get_length(string):
    count = 0

    for letter in string:
        count += 1

    return count
```

**Example:**

```python
print(get_length("Codecademy"))
```

**Output:**

```text
10
```

## 9.6 Summary

* You can iterate through every character in a string using a `for` loop.
* Each iteration processes one character.
* You do not need to know the index to traverse an entire string.
* You can build your own version of `len()` by:

  * Creating a counter variable.
  * Increasing the counter during each iteration.
  * Returning the final count after the loop finishes.

---

# 10. Strings and Conditionals (Part One)

## 10.1 Using Conditionals While Iterating Through a String

Now that you know how to iterate through each character in a string, you can combine a `for` loop with an `if` statement to check each character.

**Example:**

```python
favorite_fruit = "blueberry"
counter = 0

for character in favorite_fruit:
    if character == "b":
        counter += 1

print(counter)
```

**Output:**

```text
2
```

**Explanation**

The string `"blueberry"` is processed one character at a time:

```text
b l u e b e r r y
```

Each time the character `"b"` is found:

```python
counter += 1
```

At the end:

```text
counter = 2
```

## 10.2 Exercise

Write a function:

```python
letter_check(word, letter)
```

The function accepts:

* `word`: the string to search.
* `letter`: the character to look for.

If `letter` appears in `word`:

```python
return True
```

Otherwise:

```python
return False
```

**Solution:**

```python
def letter_check(word, letter):
    for character in word:
        if character == letter:
            return True
    return False
```

**Example**

```python
print(letter_check("apple", "a"))
```

**Output:**

```text
True
```

---

```python
print(letter_check("apple", "z"))
```

**Output:**

```text
False
```

---

```python
print(letter_check("banana", "n"))
```

**Output:**

```text
True
```

## 10.3 Note

* `return` immediately ends the function.
* Therefore, once the first matching character is found, the function returns `True` without checking the remaining characters.

**Example:**

```python
word = "banana"
```

As soon as the first `"n"` is found:

```python
return True
```

The function stops executing.

## 10.4 Key Takeaways

* Use a `for` loop to iterate through each character in a string.
* Use an `if` statement to check a condition.
* Return `True` when the target character is found.
* Return `False` after the loop if the character is not found.
* `return` immediately terminates the function.

# 11. Strings and Conditionals (Part Two)

## 11.1 The `in` Operator

Instead of checking each character with a `for` loop, Python provides the `in` operator to test whether one string appears inside another.

**Syntax:**

```python
substring in string
```

**Return value:**

* `True` if the substring is found.
* `False` if it is not found.

**Example:**

```python
print("e" in "blueberry")
# True

print("a" in "blueberry")
# False
```

## 11.2 Checking an Entire String

The `in` operator is not limited to single characters. It can also search for entire strings.

**Example:**

```python
print("blue" in "blueberry")
# True

print("berry" in "blueberry")
# True

print("melon" in "blueberry")
# False
```

## 11.3 Combining Multiple Conditions

You can combine multiple conditions using `and`, `or`, and `not`.

**Example:**

```python
print("e" in "blueberry" and "e" in "carrot")
# False
```

Because:

* `"e"` is in `"blueberry"` → `True`
* `"e"` is **not** in `"carrot"` → `False`

`True and False` evaluates to `False`.

Another example:

```python
print("e" in "blueberry" and not "e" in "carrot")
# True
```

## 11.4 Exercise 1: The `contains()` Function

### Question

Write a function `contains(big_string, little_string)` that returns `True` if `big_string` contains `little_string`; otherwise, return `False`.

**Solution:**

```python
def contains(big_string, little_string):
    return little_string in big_string
```

## 11.5 Exercise 2: The `common_letters()` Function

### Question

Write a function `common_letters(string_one, string_two)` that returns a list of characters that appear in both strings. Each character should appear only once in the returned list.

**Solution:**

```python
def common_letters(string_one, string_two):
    common = []

    for letter in string_one:
        if letter in string_two and letter not in common:
            common.append(letter)

    return common
```

## 11.6 Key Takeaways

* Use the `in` operator to check whether a character or substring exists inside another string.
* Use `not in` to check whether an element does **not** exist.
* Multiple conditions can be combined using `and`, `or`, and `not`.
* Use `append()` to add elements to a list.
* Combining `in` and `not in` helps eliminate duplicate elements from the result.