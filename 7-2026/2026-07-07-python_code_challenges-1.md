# 1. Get A Key

To get a value from a dictionary, use its key.

## Syntax

```python
dictionary[key]
```

## Example

```python
building_heights = {
    "Burj Khalifa": 828,
    "Shanghai Tower": 632
}

print(building_heights["Burj Khalifa"])
```

## Output

```python
828
```

## Note

* You must use the correct key.
* If the key does not exist, Python raises a `KeyError`.

## Example

Given the dictionary:

```python
zodiac_elements = {
    "water": ["Cancer", "Scorpio", "Pisces"],
    "fire": ["Aries", "Leo", "Sagittarius"],
    "earth": ["Taurus", "Virgo", "Capricorn"],
    "air": ["Gemini", "Libra", "Aquarius"]
}
```

Complete the following tasks:

1. Print the list of zodiac signs in the `"earth"` group.
2. Print the list of zodiac signs in the `"fire"` group.

## Code

```python
zodiac_elements = {
    "water": ["Cancer", "Scorpio", "Pisces"],
    "fire": ["Aries", "Leo", "Sagittarius"],
    "earth": ["Taurus", "Virgo", "Capricorn"],
    "air": ["Gemini", "Libra", "Aquarius"]
}

print(zodiac_elements["earth"])
print(zodiac_elements["fire"])
```

## Code Explanation

```python
print(zodiac_elements["earth"])
```

Gets the value of the `"earth"` key.

```python
print(zodiac_elements["fire"])
```

Gets the value of the `"fire"` key.

## Output

```python
['Taurus', 'Virgo', 'Capricorn']
['Aries', 'Leo', 'Sagittarius']
```

## Remember

* `dictionary[key]` → gets the value associated with the key.
* The key must exist in the dictionary.
* A value can be a number, string, list, or another dictionary.

---

# 2. Get an Invalid Key

When you access a key that does not exist in a dictionary using:

```python
dictionary[key]
```

Python raises a:

```python
KeyError
```

## Example

```python
building_heights = {
    "Burj Khalifa": 828
}

print(building_heights["Landmark 81"])
```

## Output

```python
KeyError: 'Landmark 81'
```

To avoid this error, check whether the key exists first using `in`.

## Syntax

```python
if key in dictionary:
    print(dictionary[key])
```

## Example

Given the dictionary:

```python
zodiac_elements = {
    "water": ["Cancer", "Scorpio", "Pisces"],
    "fire": ["Aries", "Leo", "Sagittarius"],
    "earth": ["Taurus", "Virgo", "Capricorn"],
    "air": ["Gemini", "Libra", "Aquarius"]
}
```

Complete the following tasks:

1. Run the program and observe what happens when accessing the `"energy"` key.
2. Use `if` to check whether `"energy"` exists before printing it.
3. Add the `"energy"` key with the value `"Not a Zodiac element"` and print the result.

## Code

```python
zodiac_elements = {
    "water": ["Cancer", "Scorpio", "Pisces"],
    "fire": ["Aries", "Leo", "Sagittarius"],
    "earth": ["Taurus", "Virgo", "Capricorn"],
    "air": ["Gemini", "Libra", "Aquarius"]
}

if "energy" in zodiac_elements:
    print(zodiac_elements["energy"])

zodiac_elements["energy"] = "Not a Zodiac element"

if "energy" in zodiac_elements:
    print(zodiac_elements["energy"])
```

## Code Explanation

```python
if "energy" in zodiac_elements:
```

Checks whether `"energy"` is a key in the dictionary.

```python
print(zodiac_elements["energy"])
```

Prints the value only if the key exists.

```python
zodiac_elements["energy"] = "Not a Zodiac element"
```

Adds the `"energy"` key to the dictionary.

## Output

```python
Not a Zodiac element
```

## Remember

* `dictionary[key]` → gets the value associated with a key.
* If the key does not exist → `KeyError`.
* Use `if key in dictionary:` to check before accessing a key.
* Add a new key using:

```python
dictionary[key] = value
```

---

# 3. Safely Get a Key

When using:

```python
dictionary[key]
```

If the key does not exist, Python raises a `KeyError`.

To avoid this error, use the `.get()` method.

## Syntax

```python
dictionary.get(key)
```

If the key does not exist, the result is:

```python
None
```

You can also specify a default value if the key does not exist.

## Syntax

```python
dictionary.get(key, default_value)
```

## Example

```python
building_heights = {
    "Burj Khalifa": 828,
    "Shanghai Tower": 632
}

print(building_heights.get("Shanghai Tower"))
print(building_heights.get("My House"))
print(building_heights.get("My House", 0))
```

## Output

```python
632
None
0
```

## Example

Given the dictionary:

```python
user_ids = {
    "teraCoder": 100019,
    "pythonGuy": 182921,
    "samTheJavaMaam": 123112,
    "lyleLoop": 102931,
    "keysmithKeith": 129384
}
```

Complete the following tasks:

1. Get the ID of `"teraCoder"` using `.get()`. If it does not exist, return `100000`. Store the result in the variable `tc_id` and print it.
2. Get the ID of `"superStackSmash"` using `.get()`. If it does not exist, return `100000`. Store the result in the variable `stack_id` and print it.

## Code

```python
user_ids = {
    "teraCoder": 100019,
    "pythonGuy": 182921,
    "samTheJavaMaam": 123112,
    "lyleLoop": 102931,
    "keysmithKeith": 129384
}

tc_id = user_ids.get("teraCoder", 100000)
print(tc_id)

stack_id = user_ids.get("superStackSmash", 100000)
print(stack_id)
```

## Code Explanation

```python
tc_id = user_ids.get("teraCoder", 100000)
```

Gets the value of the `"teraCoder"` key. If it does not exist, returns `100000`.

```python
stack_id = user_ids.get("superStackSmash", 100000)
```

Since `"superStackSmash"` does not exist, `.get()` returns the default value `100000`.

## Output

```python
100019
100000
```

## Remember

* `dictionary[key]` → raises `KeyError` if the key does not exist.
* `dictionary.get(key)` → returns `None` if the key does not exist.
* `dictionary.get(key, value)` → returns `value` if the key does not exist.
* `.get()` is a safer way to retrieve values from a dictionary.

---

# 4. Delete a Key

The `.pop()` method is used to:

* Get the value of a key.
* Remove that key from the dictionary at the same time.

## Syntax

```python
dictionary.pop(key)
```

If the key does not exist, Python raises an error.

To avoid this error, provide a default value:

```python
dictionary.pop(key, default_value)
```

If the key does not exist, `.pop()` returns `default_value`.

## Example

```python
raffle = {
    223842: "Teddy Bear",
    872921: "Concert Tickets",
    320291: "Gift Basket"
}

print(raffle.pop(320291, "No Prize"))
print(raffle)
```

## Output

```python
Gift Basket

{
    223842: "Teddy Bear",
    872921: "Concert Tickets"
}
```

## Example

Given the dictionary:

```python
available_items = {
    "health potion": 10,
    "cake of the cure": 5,
    "green elixir": 20,
    "strength sandwich": 25,
    "stamina grains": 15,
    "power stew": 30
}

health_points = 20
```

Complete the following tasks:

1. Add the value of `"stamina grains"` to `health_points` and remove this key from the dictionary. If it does not exist, add `0`.
2. Add the value of `"power stew"` to `health_points` and remove this key. If it does not exist, add `0`.
3. Add the value of `"mystic bread"` to `health_points` and remove this key. If it does not exist, add `0`.
4. Print `available_items` and `health_points`.

## Code

```python
available_items = {
    "health potion": 10,
    "cake of the cure": 5,
    "green elixir": 20,
    "strength sandwich": 25,
    "stamina grains": 15,
    "power stew": 30
}

health_points = 20

health_points += available_items.pop("stamina grains", 0)
health_points += available_items.pop("power stew", 0)
health_points += available_items.pop("mystic bread", 0)

print(available_items)
print(health_points)
```

## Code Explanation

```python
health_points += available_items.pop("stamina grains", 0)
```

* Gets the value of `"stamina grains"` (`15`).
* Adds it to `health_points`.
* Removes `"stamina grains"` from the dictionary.

```python
health_points += available_items.pop("power stew", 0)
```

* Gets the value of `"power stew"` (`30`).
* Adds it to `health_points`.
* Removes `"power stew"` from the dictionary.

```python
health_points += available_items.pop("mystic bread", 0)
```

* `"mystic bread"` does not exist.
* `.pop()` returns `0`.
* No error occurs.

## Output

```python
{
    "health potion": 10,
    "cake of the cure": 5,
    "green elixir": 20,
    "strength sandwich": 25
}

65
```

## Remember

* `dictionary.pop(key)` → gets the value and removes the key.
* `dictionary.pop(key, value)` → returns `value` if the key does not exist.
* `.pop()` both retrieves data and removes it from the dictionary.

---

# 5. Get All Keys

Sometimes you only want to get all the keys in a dictionary.

There are two ways to do this:

## Method 1: Use `list()`

```python
list(dictionary)
```

Returns a list containing all the keys.

## Example

```python
test_scores = {
    "Grace": 80,
    "Jeffrey": 88,
    "Pedro": 98
}

print(list(test_scores))
```

## Output

```python
['Grace', 'Jeffrey', 'Pedro']
```

## Method 2: Use `.keys()`

```python
dictionary.keys()
```

`.keys()` returns a `dict_keys` object containing all the keys in the dictionary.

## Example

```python
test_scores = {
    "Grace": 80,
    "Jeffrey": 88,
    "Pedro": 98
}

print(test_scores.keys())
```

## Output

```python
dict_keys(['Grace', 'Jeffrey', 'Pedro'])
```

It is commonly used to iterate through all the keys.

```python
for student in test_scores.keys():
    print(student)
```

## Output

```python
Grace
Jeffrey
Pedro
```

## Example

Given the following dictionaries:

```python
user_ids = {
    "teraCoder": 100019,
    "pythonGuy": 182921,
    "samTheJavaMaam": 123112,
    "lyleLoop": 102931,
    "keysmithKeith": 129384
}

num_exercises = {
    "functions": 10,
    "syntax": 13,
    "control flow": 15,
    "loops": 22,
    "lists": 19,
    "classes": 18,
    "dictionaries": 18
}
```

Complete the following tasks:

1. Create a variable `users` that contains all the keys from `user_ids`.
2. Create a variable `lessons` that contains all the keys from `num_exercises`.
3. Print `users`.
4. Print `lessons`.

## Code

```python
user_ids = {
    "teraCoder": 100019,
    "pythonGuy": 182921,
    "samTheJavaMaam": 123112,
    "lyleLoop": 102931,
    "keysmithKeith": 129384
}

num_exercises = {
    "functions": 10,
    "syntax": 13,
    "control flow": 15,
    "loops": 22,
    "lists": 19,
    "classes": 18,
    "dictionaries": 18
}

users = user_ids.keys()
lessons = num_exercises.keys()

print(users)
print(lessons)
```

## Code Explanation

```python
users = user_ids.keys()
```

Gets all the keys from `user_ids`.

```python
lessons = num_exercises.keys()
```

Gets all the keys from `num_exercises`.

```python
print(users)
print(lessons)
```

Prints the `dict_keys` objects containing all the keys.

## Output

```python
dict_keys(['teraCoder', 'pythonGuy', 'samTheJavaMaam', 'lyleLoop', 'keysmithKeith'])

dict_keys(['functions', 'syntax', 'control flow', 'loops', 'lists', 'classes', 'dictionaries'])
```

## Remember

* `dictionary.keys()` → gets all the keys.
* The result is a `dict_keys` object.
* It is commonly used with a `for` loop to iterate through the keys.
* To convert it to a list, use:

```python
list(dictionary.keys())
```

Or simply:

```python
list(dictionary)
```

---

# 6. Get All Values

If `.keys()` gets all the keys, then `.values()` gets all the values in a dictionary.

## Syntax

```python
dictionary.values()
```

The result is a `dict_values` object.

## Example

```python
test_scores = {
    "Grace": 80,
    "Jeffrey": 88,
    "Pedro": 98
}

print(test_scores.values())
```

## Output

```python
dict_values([80, 88, 98])
```

You can use `.values()` to iterate through all the values.

```python
for score in test_scores.values():
    print(score)
```

## Output

```python
80
88
98
```

To convert it to a list:

```python
list(test_scores.values())
```

## Example

Given the dictionary:

```python
num_exercises = {
    "functions": 10,
    "syntax": 13,
    "control flow": 15,
    "loops": 22,
    "lists": 19,
    "classes": 18,
    "dictionaries": 18
}
```

Complete the following tasks:

1. Create a variable `total_exercises` and set it to `0`.
2. Iterate through all the values in `num_exercises` and add them to `total_exercises`.
3. Print `total_exercises`.

## Code

```python
num_exercises = {
    "functions": 10,
    "syntax": 13,
    "control flow": 15,
    "loops": 22,
    "lists": 19,
    "classes": 18,
    "dictionaries": 18
}

total_exercises = 0

for value in num_exercises.values():
    total_exercises += value

print(total_exercises)
```

## Code Explanation

```python
total_exercises = 0
```

Creates a variable to store the total number of exercises.

```python
for value in num_exercises.values():
```

Loops through all the values in the dictionary.

```python
total_exercises += value
```

Adds each value to `total_exercises`.

```python
print(total_exercises)
```

Prints the final total.

## Output

```python
115
```

## Remember

* `dictionary.values()` → gets all the values.
* The result is a `dict_values` object.
* It is commonly used with a `for` loop to iterate through the values.
* To convert it to a list:

```python
list(dictionary.values())
```

---

# 7. Get All Items

If you want to get both the keys and values at the same time, use `.items()`.

## Syntax

```python
dictionary.items()
```

The result is a `dict_items` object.

Each element is a tuple:

```python
(key, value)
```

## Example

```python
biggest_brands = {
    "Apple": 184,
    "Google": 141.7,
    "Microsoft": 80
}

print(biggest_brands.items())
```

## Output

```python
dict_items([
    ('Apple', 184),
    ('Google', 141.7),
    ('Microsoft', 80)
])
```

To get each key and value:

```python
for company, value in biggest_brands.items():
    print(company, value)
```

## Output

```python
Apple 184
Google 141.7
Microsoft 80
```

## Example

Given the dictionary:

```python
pct_women_in_occupation = {
    "CEO": 28,
    "Engineering Manager": 9,
    "Pharmacist": 58,
    "Physician": 40,
    "Lawyer": 37,
    "Aerospace Engineer": 9
}
```

Use a `for` loop and `.items()` to print:

```
Women make up [value] percent of [key]s.
```

For example:

```
Women make up 28 percent of CEOs.
```

## Code

```python
pct_women_in_occupation = {
    "CEO": 28,
    "Engineering Manager": 9,
    "Pharmacist": 58,
    "Physician": 40,
    "Lawyer": 37,
    "Aerospace Engineer": 9
}

for occupation, percent in pct_women_in_occupation.items():
    print("Women make up " + str(percent) + " percent of " + occupation + "s.")
```

## Code Explanation

```python
for occupation, percent in pct_women_in_occupation.items():
```

* `.items()` gets both the key and the value.
* `occupation` receives the key.
* `percent` receives the value.

```python
print("Women make up " + str(percent) + " percent of " + occupation + "s.")
```

* `str(percent)` converts the number to a string.
* Concatenates the strings to print the sentence.
* Adds `"s"` to make the occupation plural (CEO → CEOs).

## Output

```python
Women make up 28 percent of CEOs.
Women make up 9 percent of Engineering Managers.
Women make up 58 percent of Pharmacists.
Women make up 40 percent of Physicians.
Women make up 37 percent of Lawyers.
Women make up 9 percent of Aerospace Engineers.
```

## Remember

* `dictionary.keys()` → gets the keys.
* `dictionary.values()` → gets the values.
* `dictionary.items()` → gets both the keys and values.

The most common pattern is:

```python
for key, value in dictionary.items():
    print(key, value)
```

This is the standard way to iterate through an entire dictionary in Python.

---

# Summary

Important dictionary operations:

* `dict[key]` → gets the value associated with a key.
* `.get()` → safely gets a value without raising an error if the key does not exist.
* `.pop()` → gets the value and removes the key from the dictionary.
* `.keys()` → gets all the keys.
* `.values()` → gets all the values.
* `.items()` → gets both keys and values for iteration using a loop.