Dưới đây là bản **dịch sang tiếng Anh** của toàn bộ nội dung:

---

# 1. Modules in Python: Introduction

## 1.1 Exercise

* Import `datetime` from the `datetime` module
* Get the current time
* Print it to the screen

## 1.2 Code

```python
from datetime import datetime

current_time = datetime.now()

print(current_time)
```

## 1.3 Explanation

* `datetime` is a module used for handling dates and times
* `now()` gets the current time
* The result is stored in `current_time` and printed

---

# 2. Modules in Python: Random

## 2.1 Exercise

* Import `random`
* Create a list of 101 random numbers between 1 and 100
* Select one random number from the list
* Print the result

## 2.2 Code

```python
import random

random_list = [random.randint(1, 100) for _ in range(101)]

random_number = random.choice(random_list)

print(random_number)
```

## 2.3 Explanation

* `randint(1, 100)` generates a random integer
* List comprehension creates 101 elements
* `choice()` selects one random element from the list

---

# 3. Modules in Python: Namespaces

## 3.1 Exercise

* Import `matplotlib.pyplot` with alias `plt`
* Import `random`
* Create:

  * `numbers_a = 1 → 12`
  * `numbers_b = 12 random numbers`
* Plot a graph

## 3.2 Code

```python
import matplotlib.pyplot as plt
import random

numbers_a = range(1, 13)

numbers_b = random.sample(range(1000), 12)

plt.plot(numbers_a, numbers_b)

plt.show()
```

## 3.3 Explanation

* `sample()` selects non-repeating random numbers
* `plot()` draws the graph
* `show()` displays it

---

# 4. Modules in Python: Decimals

## 4.1 Exercise

* Import `Decimal`
* Fix floating-point errors:

  * `0.2 + 0.69`
  * `0.53 × 0.65`

## 4.2 Code

```python
from decimal import Decimal

two_decimal_points = Decimal('0.2') + Decimal('0.69')
print(two_decimal_points)

four_decimal_points = Decimal('0.53') * Decimal('0.65')
print(four_decimal_points)
```

## 4.3 Explanation

* `float` has rounding errors
* `Decimal` provides more accurate calculations

---

# 5. Files & Scope

## 5.1 Exercise

* In `library.py`, create a function that returns 3
* In `script.py`, import and call the function

## 5.2 Code

**library.py**

```python
def always_three():
    return 3
```

**script.py**

```python
from library import always_three

print(always_three())
```

## 5.3 Explanation

* Each file is a separate module
* Functions must be imported to be used in another file
* Scope is not shared automatically between files

---

# 6. Review – Highlighted Poems

## 6.1 Exercise

* Split a string by `,`
* Remove extra whitespace
* Split again by `:`
* Extract title, poet, and date
* Print formatted output

## 6.2 Code

```python
highlighted_poems_list = highlighted_poems.split(',')

highlighted_poems_stripped = []
for poem in highlighted_poems_list:
    highlighted_poems_stripped.append(poem.strip())

highlighted_poems_details = []
for poem in highlighted_poems_stripped:
    highlighted_poems_details.append(poem.split(':'))

titles = []
poets = []
dates = []

for item in highlighted_poems_details:
    titles.append(item[0])
    poets.append(item[1])
    dates.append(item[2])

for i in range(len(titles)):
    print("The poem {} was published by {} in {}.".format(
        titles[i], poets[i], dates[i]
    ))
```

## 6.3 Explanation

* `split(',')` separates poems
* `strip()` removes extra whitespace
* `split(':')` separates each piece of information
* Final loop prints formatted results