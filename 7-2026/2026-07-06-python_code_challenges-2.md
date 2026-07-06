# 1. Introduction to Python Dictionaries

A **dictionary** is a data type used to store data as **key-value pairs**.

**Example:**

```python
menu = {
    "avocado toast": 6,
    "carrot juice": 5,
    "blueberry muffin": 2
}
```

In this dictionary:

* `"avocado toast"` is the **key**.
* `6` is the **value**.

You can think of a dictionary as a lookup table:

| Key              | Value |
| ---------------- | ----: |
| avocado toast    |     6 |
| carrot juice     |     5 |
| blueberry muffin |     2 |

## Syntax

```python
dictionary = {
    key1: value1,
    key2: value2,
    key3: value3
}
```

### Notes

* Dictionaries use curly braces `{}`.
* Each item is written as `key: value`.
* Items are separated by commas `,`.
* **Each key must be unique.**

## Example

Suppose you are building a home temperature monitoring system.

The dictionary `sensors` currently stores the temperatures of several rooms:

* living room: **21°C**
* kitchen: **23°C**
* bedroom: **20°C**

A new sensor has been installed in the **pantry**, and it records **22°C**.

### Task

* Add the key-value pair `"pantry": 22` to the `sensors` dictionary.
* Fix the syntax error in the `num_cameras` dictionary.

**Code:**

```python
sensors = {
    "living room": 21,
    "kitchen": 23,
    "bedroom": 20,
    "pantry": 22
}

num_cameras = {
    "backyard": 6,
    "garage": 2,
    "driveway": 1
}

print(sensors)
```

### Explanation

* Add a new item by inserting another `key: value` pair.
* Dictionary items must be separated by commas.
* `print(sensors)` displays the entire dictionary.

### Output

```python
{
    'living room': 21,
    'kitchen': 23,
    'bedroom': 20,
    'pantry': 22
}
```

## Key Takeaways

* A dictionary stores data as `{key: value}`.
* Keys are used to look up data.
* Values are the stored data.
* Every key must be unique.
* Dictionary items are separated by commas.

---

# 2. Make a Dictionary

In a dictionary, **keys and values do not have to be the same data type**.

* Keys can be strings (`str`), integers (`int`), and more.
* Values can be strings, numbers, lists, or even another dictionary.

## Example

### Integer keys and values

```python
subtotal_to_total = {
    20: 24,
    10: 12,
    5: 6
}
```

### List values

```python
students_in_classes = {
    "software design": ["Aaron", "Delila", "Samson"],
    "philosophy": ["Frederica", "Manuel"]
}
```

### Mixed data types

```python
person = {
    "name": "Shuri",
    "age": 18,
    "family": ["T'Chaka", "Ramonda"]
}
```

## Remember

* Keys are usually used to identify data.
* Values can be **any** Python data type.

## Example

You are creating an English-to-Sindarin translation dictionary.

Create a dictionary called `translations` with the following entries:

| English  | Sindarin |
| -------- | -------- |
| mountain | orod     |
| bread    | bass     |
| friend   | mellon   |
| horse    | roch     |

**Code:**

```python
translations = {
    "mountain": "orod",
    "bread": "bass",
    "friend": "mellon",
    "horse": "roch"
}
```

### Explanation

* Create the dictionary using `{}`.
* Each entry is written as `key: value`.
* In this example:

  * The **key** is the English word.
  * The **value** is its Sindarin translation.

### Output

```python
{
    "mountain": "orod",
    "bread": "bass",
    "friend": "mellon",
    "horse": "roch"
}
```

## Key Takeaways

* Dictionaries can store many different data types.
* Keys and values do not need to have the same type.
* Dictionaries are useful for storing relationships, such as:

  * English → Vietnamese
  * Product ID → Price
  * Name → Age
  * Course → Student List

---

# 3. Invalid Keys

In a dictionary, **keys must be immutable** (cannot be changed after creation).

## Valid key types

Some data types that **can** be used as dictionary keys:

* `str`
* `int`
* `float`
* `bool`
* `tuple` (if all of its elements are immutable)

## Invalid key types

Some data types **cannot** be used as dictionary keys:

* `list`
* `dict`
* `set`

### Invalid Example

```python
scores = {
    ["Math", "English"]: 90
}
```

**Output:**

```text
TypeError: unhashable type: 'list'
```

### Why?

* A `list` is **mutable**.
* Dictionary keys must remain unchanged so Python can perform fast lookups.

## Example

You have a dictionary that stores family names and their children.

The original code is incorrect because a list is being used as the key.

Rewrite the dictionary by:

* Using the family name (**string**) as the key.
* Using the list of children as the value.

**Code:**

```python
children = {
    "von Trapp": ["Johannes", "Rosmarie", "Eleonore"],
    "Corleone": ["Sonny", "Fredo", "Michael"]
}
```

### Explanation

* `"von Trapp"` and `"Corleone"` are strings, so they can be dictionary keys.
* The lists of children's names are used as the values.
* The dictionary is now valid and runs without errors.

### Output

```python
{
    "von Trapp": ["Johannes", "Rosmarie", "Eleonore"],
    "Corleone": ["Sonny", "Fredo", "Michael"]
}
```

## Key Takeaways

* Dictionary keys must be **immutable**.
* Values can be **any** data type, including lists and dictionaries.
* If you see the error:

```text
TypeError: unhashable type
```

check whether you are using a `list`, `dict`, or `set` as a dictionary key.

---

# 4. Empty Dictionary

A dictionary does not need to contain data when it is first created.

You can create an **empty dictionary** and add data later.

## Syntax

```python
dictionary_name = {}
```

### Example

```python
student = {}
```

At this point, `student` does not contain any key-value pairs.

## Example

You need to create an empty dictionary that will store data later.

Create a dictionary named `my_empty_dictionary`.

**Code:**

```python
my_empty_dictionary = {}
```

### Explanation

* `{}` creates an empty dictionary.
* The dictionary currently contains no data.
* You can add key-value pairs later.

### Output

```python
{}
```

## Key Takeaways

* `{}` creates an **empty dictionary**.
* `[]` creates an **empty list**.
* Don't confuse these two data types.

---

# 5. Add a Key

After creating a dictionary, you can add a new key-value pair using:

```python
dictionary[key] = value
```

## Example

```python
menu = {
    "oatmeal": 3,
    "juice": 5
}

menu["cheesecake"] = 8
```

**Result:**

```python
{
    "oatmeal": 3,
    "juice": 5,
    "cheesecake": 8
}
```

If the key does not already exist, Python adds it to the dictionary.

## Example

You are keeping track of the number of animals in a zoo.

Complete the following tasks:

* Create an empty dictionary called `animals_in_zoo`.
* Add `"zebras"` with the value `8`.
* Add `"monkeys"` with the value `12`.
* Add `"dinosaurs"` with the value `0` (because there are none).
* Print the entire dictionary.

**Code:**

```python
animals_in_zoo = {}

animals_in_zoo["zebras"] = 8
animals_in_zoo["monkeys"] = 12
animals_in_zoo["dinosaurs"] = 0

print(animals_in_zoo)
```

### Explanation

* `{}` creates an empty dictionary.
* `animals_in_zoo["zebras"] = 8` adds a new key-value pair.
* The following lines add more animals.
* `print()` displays the entire dictionary.

### Output

```python
{
    "zebras": 8,
    "monkeys": 12,
    "dinosaurs": 0
}
```

## Key Takeaways

To add a new item:

```python
dictionary[key] = value
```

* If the key does **not** exist, it is added.
* If the key **already exists**, its value is updated (covered in the next lesson).

---

# 6. Add Multiple Keys

If you want to add multiple key-value pairs at once, use the `.update()` method.

## Syntax

```python
dictionary.update({
    key1: value1,
    key2: value2
})
```

## Example

```python
sensors = {
    "living room": 21,
    "kitchen": 23
}

sensors.update({
    "pantry": 22,
    "patio": 34
})
```

**Result:**

```python
{
    "living room": 21,
    "kitchen": 23,
    "pantry": 22,
    "patio": 34
}
```

## Example

The dictionary `user_ids` already contains two users.

Complete the following tasks:

* Add two new users with a single statement:

  * `"theLooper"` with ID `138475`
  * `"stringQueen"` with ID `85739`
* Print `user_ids`.

**Code:**

```python
user_ids = {
    "teraCoder": 9018293,
    "proProgrammer": 119238
}

user_ids.update({
    "theLooper": 138475,
    "stringQueen": 85739
})

print(user_ids)
```

### Explanation

* `.update()` adds or updates multiple key-value pairs.
* Its argument is another dictionary.
* `print()` displays the updated dictionary.

### Output

```python
{
    "teraCoder": 9018293,
    "proProgrammer": 119238,
    "theLooper": 138475,
    "stringQueen": 85739
}
```

## Key Takeaways

Add a single item:

```python
dictionary[key] = value
```

Add multiple items:

```python
dictionary.update({
    key1: value1,
    key2: value2
})
```

* If a key already exists, `.update()` overwrites its previous value.

---

# 7. Overwrite Values

If a key does **not** exist, Python adds it to the dictionary.

If the key **already exists**, Python **overwrites** the old value with the new one.

## Syntax

```python
dictionary[key] = new_value
```

## Example

```python
menu = {
    "oatmeal": 3,
    "juice": 5
}

menu["oatmeal"] = 5
```

**Result:**

```python
{
    "oatmeal": 5,
    "juice": 5
}
```

The value associated with `"oatmeal"` has been updated from `3` to `5`.

## Example

The dictionary `oscar_winners` is already defined.

Complete the following tasks:

* Add the key `"Supporting Actress"` with the value `"Viola Davis"`.
* Update the value of `"Best Picture"` from `"La La Land"` to `"Moonlight"`.

**Code:**

```python
oscar_winners = {
    "Best Picture": "La La Land",
    "Best Actor": "Casey Affleck",
    "Best Actress": "Emma Stone",
    "Animated Feature": "Zootopia"
}

oscar_winners["Supporting Actress"] = "Viola Davis"
oscar_winners["Best Picture"] = "Moonlight"

print(oscar_winners)
```

### Explanation

* `"Supporting Actress"` does not exist, so it is added.
* `"Best Picture"` already exists, so its value is overwritten with `"Moonlight"`.
* `print()` displays the updated dictionary.

### Output

```python
{
    "Best Picture": "Moonlight",
    "Best Actor": "Casey Affleck",
    "Best Actress": "Emma Stone",
    "Animated Feature": "Zootopia",
    "Supporting Actress": "Viola Davis"
}
```

## Key Takeaways

If the key does **not** exist:

```python
dictionary[key] = value
```

→ A new key-value pair is added.

If the key **already exists**:

```python
dictionary[key] = new_value
```

→ The existing value is overwritten (updated).

---

# 8. Dictionary Comprehensions

A **dictionary comprehension** is a concise way to create a dictionary from two lists.

## Syntax

```python
{key: value for key, value in zip(list1, list2)}
```

* `zip(list1, list2)` pairs elements from the two lists.
* Each pair becomes a `key: value` entry in the dictionary.

## Example

```python
names = ["Anna", "Bob", "Chris"]
scores = [90, 85, 95]

students = {name: score for name, score in zip(names, scores)}

print(students)
```

**Output:**

```python
{'Anna': 90, 'Bob': 85, 'Chris': 95}
```

## Example

Given the following lists:

```python
drinks = ["espresso", "chai", "decaf", "drip"]
caffeine = [64, 40, 0, 120]
```

Complete the following tasks:

1. Create a variable `zipped_drinks` using `zip()` to pair the two lists.
2. Use a dictionary comprehension to create `drinks_to_caffeine`.

**Code:**

```python
drinks = ["espresso", "chai", "decaf", "drip"]
caffeine = [64, 40, 0, 120]

zipped_drinks = zip(drinks, caffeine)

drinks_to_caffeine = {drink: mg for drink, mg in zipped_drinks}

print(drinks_to_caffeine)
```

### Explanation

* `zip(drinks, caffeine)` pairs each drink with its corresponding caffeine amount.
* `drink` becomes the key, and `mg` becomes the value.
* The dictionary comprehension creates a dictionary from these pairs.
* `print()` displays the resulting dictionary.

### Output

```python
{
    'espresso': 64,
    'chai': 40,
    'decaf': 0,
    'drip': 120
}
```

## Key Takeaways

* A dictionary comprehension provides a concise way to create dictionaries.
* `zip()` combines two iterables into pairs.
* Each pair becomes a `key: value` entry.
* The general pattern is:

```python
{key: value for key, value in zip(list1, list2)}
```
