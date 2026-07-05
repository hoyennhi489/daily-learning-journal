# 1. Formatting Methods

## 1.1 String Formatting Methods

Python provides several methods for changing the appearance of a string without modifying the original string.

Three commonly used methods are:

* `.lower()`
* `.upper()`
* `.title()`

These methods always return a **new string**.

## 1.2 `.lower()`

Converts all characters in a string to lowercase.

**Example:**

```python
favorite_song = "SmOoTH"

favorite_song_lowercase = favorite_song.lower()

print(favorite_song_lowercase)
```

**Output:**

```text
smooth
```

The original string remains unchanged:

```python
print(favorite_song)
```

**Output:**

```text
SmOoTH
```

## 1.3 `.upper()`

Converts all characters in a string to uppercase.

**Example:**

```python
name = "William Carlos Williams"

print(name.upper())
```

**Output:**

```text
WILLIAM CARLOS WILLIAMS
```

## 1.4 `.title()`

Capitalizes the first letter of every word.

**Example:**

```python
title = "spring storm"

print(title.title())
```

**Output:**

```text
Spring Storm
```

## 1.5 Note

These methods **do not modify the original string**.

**Example:**

```python
title = "spring storm"

title.title()

print(title)
```

**Output:**

```text
spring storm
```

To save the formatted string, assign it to a variable:

```python
title = title.title()
```

or

```python
new_title = title.title()
```

## 1.6 Exercise 1

### Question

Convert `poem_title` to **Title Case** and store the result in `poem_title_fixed`.

Print both `poem_title` and `poem_title_fixed`.

**Solution:**

```python
poem_title_fixed = poem_title.title()

print(poem_title)
print(poem_title_fixed)
```

## 1.7 Exercise 2

### Question

Convert `poem_author` to uppercase and store the result in `poem_author_fixed`.

Print both `poem_author` and `poem_author_fixed`.

**Solution:**

```python
poem_author_fixed = poem_author.upper()

print(poem_author)
print(poem_author_fixed)
```

## 1.8 Key Takeaways

* `.lower()` converts a string to lowercase.
* `.upper()` converts a string to uppercase.
* `.title()` capitalizes the first letter of every word.
* These methods do **not** modify the original string; they return a new one.
* To keep the result, assign it to a variable.

# 2. Splitting Strings

## 2.1 The `.split()` Method

The `.split()` method divides a string into multiple parts and returns them as a **list**.

**Syntax:**

```python
string.split(delimiter)
```

Where:

* `delimiter` is the character or string used to split the text.
* If no argument is provided, Python splits the string at whitespace by default.

## 2.2 Splitting by Whitespace

**Example:**

```python
sentence = "Like seven inches from the midday sun"

words = sentence.split()

print(words)
```

**Output:**

```text
['Like', 'seven', 'inches', 'from', 'the', 'midday', 'sun']
```

Each word becomes an element in the list.

## 2.3 Splitting by a Specific Character

You can specify the delimiter.

**Example:**

```python
data = "apple,banana,orange"

print(data.split(","))
```

**Output:**

```text
['apple', 'banana', 'orange']
```

Another example:

```python
date = "2026-07-05"

print(date.split("-"))
```

**Output:**

```text
['2026', '07', '05']
```

## 2.4 When the Delimiter Is Not Found

If the string does not contain the delimiter, the result is still a list containing a single element.

**Example:**

```python
word = "Python"

print(word.split())
```

**Output:**

```text
['Python']
```

## 2.5 Exercise

### Question

Use `.split()` to create a list named `line_one_words` containing each word from the string `line_one`.

**Solution:**

```python
line_one_words = line_one.split()
```

## 2.6 Key Takeaways

* `.split()` splits a string into a list.
* By default, it splits on whitespace.
* You can specify a delimiter with `.split(delimiter)`.
* The return value is always a list.
* If the delimiter is not found, the list contains only the original string.

# 3. Splitting Strings II

## 3.1 Splitting by a Specific Delimiter

Besides splitting on whitespace, `.split()` can split a string using any delimiter you provide.

**Syntax:**

```python
string.split(delimiter)
```

where `delimiter` is the character or string used to separate the text.

**Example:**

```python
greatest_guitarist = "santana"

print(greatest_guitarist.split("n"))
```

**Output:**

```text
['sa', 'ta', 'a']
```

The string is split at every occurrence of `"n"`.

## 3.2 Splitting on a Character at the End of a String

**Example:**

```python
greatest_guitarist = "santana"

print(greatest_guitarist.split("a"))
```

**Output:**

```text
['s', 'nt', 'n', '']
```

Notice the extra empty string (`''`) at the end.

This happens because the string ends with `"a"`. After the final split, there are no characters remaining, so Python adds an empty string.

Example:

```text
s a n t a n a
          ↑
```

There are no characters after the last `"a"`, so the final element is an empty string.

## 3.3 Using Multiple Characters as a Delimiter

The delimiter does not have to be a single character.

**Example:**

```python
text = "apple--banana--orange"

print(text.split("--"))
```

**Output:**

```text
['apple', 'banana', 'orange']
```

## 3.4 Exercise 1

### Question

Use `.split()` to create a list named `author_names`, where each author's name is stored as a separate element.

**Solution:**

```python
author_names = authors.split(",")
```

## 3.5 Exercise 2

### Question

Create a list named `author_last_names` that contains only the last name of each author.

**Solution:**

```python
author_last_names = []

for author in author_names:
    author_last_names.append(author.split()[-1])
```

## 3.6 Key Takeaways

* `.split(delimiter)` splits a string using the specified character or string.
* If the string ends with the delimiter, the result includes an extra empty string (`''`) at the end.
* The delimiter can consist of one or more characters.
* You can call `.split()` multiple times to process more complex data.
* `split()[-1]` is commonly used to get the last word in a string.

# 4. Joining Strings

## 4.1 Joining Strings with `.join()`

After learning how to split strings using `.split()`, it's time to learn how to combine them using `.join()`.

The `.join()` method works in the opposite way of `.split()`. It joins the elements of a list of strings into a single string, using a specified string as the **delimiter**.

**Syntax:**

```python
'delimiter'.join(list_of_strings)
```

Where:

* `delimiter` is the string used to separate each element.
* `list_of_strings` is the list of strings to join.

**Example:**

```python
words = ['My', 'Spanish', 'Harlem', 'Mona', 'Lisa']

sentence = ' '.join(words)

print(sentence)
```

**Output:**

```text
My Spanish Harlem Mona Lisa
```

Here:

* `' '` (a space) is the delimiter.
* Each word is joined with a space.

If no spaces are used:

```python
print(''.join(words))
```

**Output:**

```text
MySpanishHarlemMonaLisa
```

The words are joined together without any spaces.

## 4.2 Note

* `.join()` only works with a list containing **strings**.
* The string before `.join()` is the delimiter.

**Example using commas:**

```python
items = ["apple", "banana", "orange"]

result = ", ".join(items)

print(result)
```

**Output:**

```text
apple, banana, orange
```

## Exercise

### Question

You are given a list of the words from the first line of Jean Toomer's poem *Reapers*.

Use `.join()` to combine the words into a sentence and store the result in the variable `reapers_line_one`.

**Solution:**

```python
reapers_line_one_words = [
    "Black", "reapers", "with", "the", "sound",
    "of", "steel", "on", "stones"
]

reapers_line_one = " ".join(reapers_line_one_words)
```

**Output:**

```text
Black reapers with the sound of steel on stones
```

# 5. Joining Strings II

## 5.1 Joining Strings with Different Delimiters

In the previous lesson, we used a space (`" "`) to join words into a sentence.

In fact, `.join()` can use **any string** as a delimiter.

For example, using commas:

```python
songs = [
    "Oye Como Va",
    "Smooth",
    "Black Magic Woman",
    "Samba Pa Ti",
    "Maria Maria"
]

songs_csv = ",".join(songs)

print(songs_csv)
```

**Output:**

```text
Oye Como Va,Smooth,Black Magic Woman,Samba Pa Ti,Maria Maria
```

## 5.2 Using the Newline Character (`\n`)

Besides spaces and commas, you can also use the newline character (`\n`) as the delimiter.

**Example:**

```python
lines = [
    "Well I'm from the barrio",
    "You hear my rhythm on your radio",
    "You feel the turning of the world so soft and slow",
    "Turning you 'round and 'round"
]

verse = "\n".join(lines)

print(verse)
```

**Output:**

```text
Well I'm from the barrio
You hear my rhythm on your radio
You feel the turning of the world so soft and slow
Turning you 'round and 'round
```

Each element in the list is printed on its own line.

## 5.3 Note

* `" ".join(list)` → joins elements with spaces.
* `",".join(list)` → joins elements with commas.
* `"\n".join(list)` → joins elements with newlines.
* You can use **any string** as the delimiter.

## Exercise

### Question

You are given the list `winter_trees_lines`, which contains each line of William Carlos Williams' poem *Winter Trees*.

Join all the lines into a single string named `winter_trees_full` so that each line appears on a new line.

Then print the result.

**Solution:**

```python
winter_trees_lines = [
    'All the complicated details',
    'of the attiring and',
    'the disattiring are completed!',
    'A liquid moon',
    'moves gently among',
    'the long branches.',
    'Thus having prepared their buds',
    'against a sure winter',
    'the wise trees',
    'stand sleeping in the cold.'
]

winter_trees_full = "\n".join(winter_trees_lines)

print(winter_trees_full)
```

# 6. `.strip()`

## 6.1 Cleaning Strings with `.strip()`

When working with real-world data, strings often contain unwanted characters such as:

* Leading or trailing spaces.
* Newline characters (`\n`).
* Tab characters (`\t`).

Python provides the `.strip()` method to remove these characters.

**Example:**

```python
featuring = "           rob thomas                 "

print(featuring.strip())
```

**Output:**

```text
rob thomas
```

**Note:**

* `.strip()` only removes whitespace at the beginning and end of the string.
* Spaces inside the string are preserved.

## 6.2 Removing Specific Characters

`.strip()` can also take an argument to remove specific characters from both ends of a string.

**Example:**

```python
featuring = "!!!rob thomas       !!!!!"

print(featuring.strip("!"))
```

**Output:**

```text
rob thomas
```

In this example:

* Only the `!` characters at the beginning and end are removed.
* The trailing spaces remain.

Another example:

```python
text = "***Python***"

print(text.strip("*"))
```

**Output:**

```text
Python
```

## 6.3 Note

* `.strip()` does **not** modify the original string; it returns a new one.
* By default, it removes leading and trailing spaces, tabs (`\t`), and newlines (`\n`).
* If you provide an argument, `.strip()` removes only the specified characters.

## Exercise

### Question

You are given the list `love_maybe_lines`, which contains the lines of the poem *Love, Maybe*, but each line has extra whitespace.

1. Use `.strip()` to remove the leading and trailing whitespace from each line and store the cleaned lines in `love_maybe_lines_stripped`.
2. Use `.join()` to combine the lines into a multi-line string named `love_maybe_full`.
3. Print `love_maybe_full`.

**Solution:**

```python
love_maybe_lines = [
    'Always    ',
    '     in the middle of our bloodiest battles  ',
    'you lay down your arms',
    '           like flowering mines    ',
    '\n',
    '   to conquer me home.    '
]

love_maybe_lines_stripped = []

for line in love_maybe_lines:
    love_maybe_lines_stripped.append(line.strip())

love_maybe_full = "\n".join(love_maybe_lines_stripped)

print(love_maybe_full)
```

**Output:**

```text
Always
in the middle of our bloodiest battles
you lay down your arms
like flowering mines

to conquer me home.
```

# 7. `.replace()`

## 7.1 Replacing Text with `.replace()`

The `.replace()` method is used to replace all occurrences of a substring with a new string.

**Syntax:**

```python
string.replace(old, new)
```

Where:

* `old`: the substring to be replaced.
* `new`: the string that will replace it.

The method returns a **new string**. The original string is not modified.

## 7.2 Examples

Replace spaces with underscores:

```python
with_spaces = "You got the kind of loving that can be so smooth"

with_underscores = with_spaces.replace(" ", "_")

print(with_underscores)
```

**Output:**

```text
You_got_the_kind_of_loving_that_can_be_so_smooth
```

`.replace()` can replace an entire substring, not just a single character.

**Example:**

```python
sentence = "I like cats. Cats are cute."

new_sentence = sentence.replace("cats", "dogs")

print(new_sentence)
```

**Output:**

```text
I like dogs. Cats are cute.
```

**Note:** `.replace()` is **case-sensitive**, so `"Cats"` is not replaced.

## 7.3 Note

* `.replace()` returns a new string.
* The original string remains unchanged.
* It replaces **all** occurrences of the target substring.

## Exercise

### Question

In the following biography of Jean Toomer, every occurrence of `"Tomer"` is missing the second **o**.

Use `.replace()` to replace every `"Tomer"` with `"Toomer"` and store the result in the variable `toomer_bio_fixed`.

**Solution:**

```python
toomer_bio = """
Nathan Pinchback Tomer, who adopted the name Jean Tomer early in his literary career, was born in Washington, D.C. in 1894. Jean is the son of Nathan Tomer was a mixed-race freedman, born into slavery in 1839 in Chatham County, North Carolina. Jean Tomer is most well known for his first book Cane, which vividly portrays the life of African-Americans in southern farmlands.
"""

toomer_bio_fixed = toomer_bio.replace("Tomer", "Toomer")
```

# 8. `.find()`

## 8.1 Finding the Position of a Substring with `.find()`

The `.find()` method is used to locate the **first occurrence** of a substring within a string.

**Syntax:**

```python
string.find(substring)
```

Where:

* `substring` is the text you want to search for.

If the substring is found, `.find()` returns the index of its **first character**.

## 8.2 Examples

Finding a single character:

```python
word = "smooth"

print(word.find("t"))
```

**Output:**

```text
4
```

The character `"t"` is located at index `4`.

Finding a substring:

```python
word = "smooth"

print(word.find("oo"))
```

**Output:**

```text
2
```

The result is `2` because the first character of `"oo"` starts at index `2`.

If the substring is not found:

```python
word = "smooth"

print(word.find("x"))
```

**Output:**

```text
-1
```

`.find()` returns `-1` when the substring does not exist.

## 8.3 Note

* `.find()` returns only the **first occurrence**.
* It returns `-1` if the substring is not found.
* It can search for either a single character or a substring.

## Exercise

### Question

Given the string:

```python
god_wills_it_line_one = "The very earth will disown you"
```

Find the first occurrence of the word `"disown"` and store its position in the variable `disown_placement`.

**Solution:**

```python
god_wills_it_line_one = "The very earth will disown you"

disown_placement = god_wills_it_line_one.find("disown")
```

# 9. `.format()`

## 9.1 Formatting Strings with `.format()`

The `.format()` method is used to insert variable values into a string.

Instead of concatenating multiple strings with the `+` operator, `.format()` makes your code cleaner and easier to read.

**Syntax:**

```python
"String with {}.".format(value)
```

Each pair of curly braces `{}` acts as a placeholder for a value.

## 9.2 Examples

```python
def favorite_song_statement(song, artist):
    return "My favorite song is {} by {}.".format(song, artist)

print(favorite_song_statement("Smooth", "Santana"))
```

**Output:**

```text
My favorite song is Smooth by Santana.
```

The value `"Smooth"` replaces the first `{}`, and `"Santana"` replaces the second `{}`.

You can use multiple placeholders:

```python
name = "Alice"
age = 20

print("{} is {} years old.".format(name, age))
```

**Output:**

```text
Alice is 20 years old.
```

## 9.3 Advantages of `.format()`

Instead of concatenating strings like this:

```python
name = "Alice"

print("Hello " + name + "!")
```

You can write:

```python
name = "Alice"

print("Hello {}!".format(name))
```

When a string contains multiple variables, `.format()` makes the code much cleaner and easier to maintain.

## 9.4 Note

* The number of `{}` placeholders should match the number of arguments passed to `.format()`.
* Values are inserted in the same order as the placeholders appear.

## Exercise

### Question

Write a function `poem_title_card(title, poet)` that uses `.format()` to return a string in the following format:

```text
The poem "[TITLE]" is written by [POET].
```

**Example:**

```python
poem_title_card("I Hear America Singing", "Walt Whitman")
```

**Output:**

```text
The poem "I Hear America Singing" is written by Walt Whitman.
```

**Solution:**

```python
def poem_title_card(title, poet):
    return 'The poem "{}" is written by {}.'.format(title, poet)

print(poem_title_card("I Hear America Singing", "Walt Whitman"))
```

# 10. `.format()` II

## 10.1 Using Keywords in `.format()`

In the previous lesson, values were inserted into a string according to the order of the `{}` placeholders.

**Example:**

```python
"My favorite song is {} by {}.".format(song, artist)
```

This requires the arguments to be passed in the correct order.

Python also allows you to use **keyword arguments**, which make your code more readable.

**Syntax:**

```python
"{name} is {age} years old.".format(name="Alice", age=20)
```

The names inside the curly braces (`{}`) match the keyword arguments passed to `.format()`.

## 10.2 Example

```python
def favorite_song_statement(song, artist):
    return "My favorite song is {song} by {artist}.".format(
        song=song,
        artist=artist
    )

print(favorite_song_statement("Smooth", "Santana"))
```

**Output:**

```text
My favorite song is Smooth by Santana.
```

## 10.3 Argument Order No Longer Matters

When using keyword arguments, you can pass the arguments in **any order**.

**Example:**

```python
def favorite_song_statement(song, artist):
    return "My favorite song is {song} by {artist}.".format(
        artist=artist,
        song=song
    )
```

The output is still:

```text
My favorite song is Smooth by Santana.
```

Using keyword arguments makes your code easier to read and less prone to errors.

## 10.4 Note

* The names inside `{}` must match the keyword names passed to `.format()`.
* Keyword arguments can be provided in any order.
* This approach is recommended when formatting strings with multiple variables.

## Exercise

### Question

The `poem_description()` function currently uses `.format()`, but it needs to be updated to use keyword arguments.

1. Modify the function to use keyword arguments with `.format()`.
2. Call the function with the following values and store the result in `my_beard_description`.

```python
author = "Shel Silverstein"
title = "My Beard"
original_work = "Where the Sidewalk Ends"
publishing_date = "1974"
```

**Solution:**

```python
def poem_description(publishing_date, author, title, original_work):
    poem_desc = "The poem {title} by {author} was originally published in {original_work} in {publishing_date}.".format(
        title=title,
        author=author,
        original_work=original_work,
        publishing_date=publishing_date
    )
    return poem_desc

author = "Shel Silverstein"
title = "My Beard"
original_work = "Where the Sidewalk Ends"
publishing_date = "1974"

my_beard_description = poem_description(
    publishing_date,
    author,
    title,
    original_work
)
```