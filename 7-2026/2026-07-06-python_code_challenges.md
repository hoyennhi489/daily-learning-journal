# 1. Modules in Python

## 1.1 Introduction to Modules in Python

In programming, **code reuse** is very important. Instead of rewriting everything from scratch, we can use code that has already been written.

Python allows us to package code into **modules**.

* **Module**: A file containing functions, classes, and variables that can be reused in multiple programs.
* **Package**: A directory containing multiple related modules.

To use a module or an object inside a module, we typically use:

```python id="8g5k2m"
from module_name import object_name
```

### Example:

```python id="z3k9qp"
from datetime import datetime
```

This imports only the `datetime` object from the `datetime` module instead of importing the entire library.

## The `datetime` Module

The `datetime` module is part of Python’s Standard Library and is used for working with:

* Dates
* Times
* Current date and time

### Example: Get current time

```python id="p2w8fd"
from datetime import datetime

current_time = datetime.now()

print(current_time)
```

**Output (example):**

```text id="v9x2la"
2026-07-05 20:15:36.128394
```

`datetime.now()` returns the current system date and time.

## 1.2 Exercise

* Import `datetime` from the `datetime` module:

```python id="3q8hvn"
from datetime import datetime
```

* Create a variable `current_time` using `datetime.now()`:

```python id="m4kz7s"
current_time = datetime.now()
```

* Print the result:

```python id="q1d8sp"
print(current_time)
```

---

# 2. Modules and Namespaces in Python

When programs become larger and use multiple modules, there is a risk that different modules contain functions with the same name.

Example:

```python id="c8kq1n"
from module_one import greet
from module_two import greet
```

Python would not know which `greet()` function to use.

To solve this, Python uses **namespaces**.

A **namespace** is a system that distinguishes objects (functions, variables, classes) based on where they come from.

### Example:

```python id="9wq2ld"
import random

print(random.randint(1, 10))
```

Here:

* `random` is the namespace.
* `randint()` is a function inside the `random` namespace.

This tells Python exactly where the function comes from.

## Importing Entire Modules

```python id="x7k1pa"
import random
```

All functions must be accessed through the module name:

```python id="v4n9tb"
random.randint(1, 10)
random.choice([1, 2, 3])
```

## Importing a Specific Object

```python id="h2m7zc"
from random import randint
```

Then you can call it directly:

```python id="j9q4lx"
randint(1, 10)
```

No need for `random.` prefix.

## Comparison

### Import full module:

```python id="k2p8mv"
import random

number = random.randint(1, 100)
```

### Import specific function:

```python id="n7v3sd"
from random import randint

number = randint(1, 100)
```

Both are correct, but:

* `import random` is clearer because it shows where the function comes from.
* `from random import randint` is shorter when only a few functions are needed.

---

# 3. Modules, Namespaces, and Aliases

## 3.1 Namespace and `as` (Alias)

When importing a module, Python creates a namespace to organize its functions and variables.

Example:

```python id="b8q1lw"
import random

print(random.randint(1, 10))
```

Here:

* `random` is the namespace.
* `randint()` belongs to that namespace.

## Using Aliases

You can rename a module using `as`:

```python id="f3k9xq"
import random as r

print(r.randint(1, 10))
```

Now `random` is shortened to `r`.

## Warning: Wildcard Import (`*`)

```python id="t6m2np"
from math import *
```

This imports everything from the module, which can cause name conflicts.

### Problem example:

* You define your own `floor()`
* `math` also has `floor()`

→ This creates a naming conflict in the namespace.

---

## 3.2 `random.sample()`

```python id="y7p4sd"
random.sample(list, k)
```

* Selects `k` random elements from a list
* Does **not repeat elements**

### Example:

```python id="z1k8mv"
import random

nums = [1, 2, 3, 4, 5]
print(random.sample(nums, 3))
```

---

## 3.3 Exercise

* Import `pyplot` from `matplotlib` using alias `plt`:

```python id="p9x2qa"
import codecademylib3_seaborn
from matplotlib import pyplot as plt
```

* Import `random`:

```python id="c1v7tb"
import random
```

* Create `numbers_a` from 1 to 12:

```python id="n4q8sd"
numbers_a = range(1, 13)
```

* Create `numbers_b` with 12 random numbers from 0–999:

```python id="x6m3kp"
numbers_b = random.sample(range(1000), 12)
```

* Plot the graph:

```python id="h8q2vn"
plt.plot(numbers_a, numbers_b)
```

* Display the graph:

```python id="k5t9sd"
plt.show()
```

---

# 4. Modules in Python: `decimal`

## 4.1 The Problem with Floating Point Numbers

In Python, the `float` type often produces rounding errors because of how computers store decimal numbers in binary form.

### Example:

```python id="f1k9xv"
two_decimal_points = 0.2 + 0.69
print(two_decimal_points)
```

**Output (may occur):**

```text id="q8m2ld"
0.8899999999999999
```

Another example:

```python id="n3v7sp"
four_decimal_points = 0.53 * 0.65
print(four_decimal_points)
```

These inaccuracies are normal with floating-point arithmetic.

---

## 4.2 Solution: The `decimal` Module

Python provides the `decimal` module for more precise decimal calculations.

```python id="k7p2qa"
from decimal import Decimal
```

### Using `Decimal`

Instead of using floats directly, we pass numbers as **strings** into `Decimal`.

```python id="m9x4tb"
from decimal import Decimal

num1 = Decimal('0.2')
num2 = Decimal('0.69')

result = num1 + num2
print(result)
```

**Output:**

```text id="s3v8ld"
0.89
```

### More precise multiplication

```python id="t6q1np"
from decimal import Decimal

a = Decimal('0.53')
b = Decimal('0.65')

print(a * b)
```

---

## 4.3 Exercise

* Import `Decimal`:

```python id="c8m2vd"
from decimal import Decimal
```

* Fix addition:

```python id="h1q7sp"
two_decimal_points = Decimal('0.2') + Decimal('0.69')
print(two_decimal_points)
```

* Fix multiplication:

```python id="z4k9tb"
four_decimal_points = Decimal('0.53') * Decimal('0.65')
print(four_decimal_points)
```

---

# 5. Modules in Python: Files and Scope

## 5.1 File Scope

In Python, each `.py` file is treated as a separate module.

This means:

* Variables in file A ❌ are not automatically accessible in file B
* Functions in file A ❌ are not automatically accessible in file B

### Example:

* `library.py`
* `script.py`

These files are isolated unless explicitly connected.

---

## 5.2 Example of a Scope Error

If `library.py` contains:

```python id="v2n8qa"
def always_three():
    return 3
```

But in `script.py` you try:

```python id="k5m1sd"
print(always_three())
```

You will get:

```text id="r9x3ld"
NameError: name 'always_three' is not defined
```

### Why?

Python does not know where the function is defined.

---

## 5.3 Fix: Import Between Files

To use code from another file, you must import it explicitly:

```python id="p7q2tb"
from library import always_three
```

Now the function becomes available in the current file.

---

## Key Takeaways

* Each Python file is its own module.
* Variables and functions are not shared automatically between files.
* Use `import` to connect files.
* This system helps keep code organized and avoids naming conflicts.
