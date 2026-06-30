# 1. Introduction to Functions

## 1.1. What is a Function?

As programs become larger, we often need to repeat the same group of steps many times.

For example, in a travel planning application, every time a user wants to find directions, the program needs to:

1. Identify the starting point and destination.
2. Calculate the distance or route.
3. Return the best route.

Instead of writing these steps repeatedly, Python provides **Functions**.

A **function** is a block of code that contains multiple statements and can be called many times without rewriting the code.

---

## 1.2. Benefits of Functions

Functions help:

* Reduce repeated code.
* Make code shorter and easier to read.
* Make code easier to edit and maintain.
* Allow code to be reused multiple times in a program.

Example:

```python
navigation_steps()
```

Whenever we need to perform the navigation steps, we only need to call this function again.

---

## 1.3. Why Do We Need Functions?

Suppose we write a program like this:

```python
print("Setting the Empire State Building as the starting point and Times Square as our destination.")
print("Calculating the total distance between our points.")
print("The best route is by train and will take approximately 10 minutes.")
```

These three lines will run every time a user wants directions.

If there are 100 users, we would need to write or run the same code many times.

A loop is also not the perfect solution because each user may have different starting points and destinations.

Therefore, a **function** is the best way to reuse code.

---

# 2. Defining a Function

## 2.1. What is a Function?

A function is a named block of instructions designed to perform a specific task.

We can call a function many times without rewriting the same code.

---

## 2.2. Syntax

```python
def function_name():
    # Function statements
```

Explanation:

* **def**: keyword used to declare a function.
* **function_name**: the name of the function (should use snake_case style).
* **()**: place where parameters are stored (learned later).
* **:**: ends the function declaration.
* Code inside the function must be indented.

---

## 2.3. Example

```python
def trip_welcome():
    print("Welcome to Tripcademy!")
    print("Let's get you to your destination.")
```

Just defining a function does not make the program run.

The function only executes when it is called.

---

# 3. Calling a Function

## 3.1. What Does Calling a Function Mean?

After defining a function, we need to **call** the function to execute the code inside it.

Syntax:

```python
function_name()
```

A function can only be called after it has been defined.

---

## 3.2. Example

```python
def directions_to_timesSq():
    print("Walk 4 mins to 34th St Herald Square train station.")
    print("Take the Northbound N, Q, R, or W train 1 stop.")
    print("Get off the Times Square 42nd Street stop.")


directions_to_timesSq()
```

Output:

```text
Walk 4 mins to 34th St Herald Square train station.
Take the Northbound N, Q, R, or W train 1 stop.
Get off the Times Square 42nd Street stop.
```

---

## 3.3. Adding More Statements to a Function

We can add multiple statements inside a function.

Example:

```python
def directions_to_timesSq():
    print("Walk 4 mins to 34th St Herald Square train station.")
    print("Take the Northbound N, Q, R, or W train 1 stop.")
    print("Get off the Times Square 42nd Street stop.")
    print("Take lots of pictures!")


directions_to_timesSq()
```

Output:

```text
Walk 4 mins to 34th St Herald Square train station.
Take the Northbound N, Q, R, or W train 1 stop.
Get off the Times Square 42nd Street stop.
Take lots of pictures!
```

---

## 3.4. Practice

```python
def directions_to_timesSq():
    print("Walk 4 mins to 34th St Herald Square train station.")
    print("Take the Northbound N, Q, R, or W train 1 stop.")
    print("Get off the Times Square 42nd Street stop.")
    print("Take lots of pictures!")


# Call the function
directions_to_timesSq()
```

---

# 4. Whitespace & Execution Flow

## 4.1. Whitespace (Indentation)

In Python, indentation determines which statements belong to a function.

Example:

```python
def trip_welcome():
    print("Welcome to Tripcademy!")
    print("Let's get you to your destination.")

print("Woah, look at the weather outside! Don't walk, take the train!")
```

* Indented statements belong to the function body.
* Non-indented statements are outside the function.

---

## 4.2. Execution Flow

Python executes a program from top to bottom.

Example:

```python
def trip_welcome():
    print("Welcome to Tripcademy!")

print("Checking the weather")
trip_welcome()
```

Output:

```text
Checking the weather
Welcome to Tripcademy!
```

The function is defined first but only runs when it is called.

---

## 4.3. Practice

```python
print("Checking the weather for you!")

def weather_check():
    print("Looks great outside! Enjoy your trip.")
    print("False Alarm, the weather changed! There is a thunderstorm approaching. Cancel your plans and stay inside.")

weather_check()
```

---

## 4.4. Removing Indentation

Example:

```python
print("Checking the weather for you!")

def weather_check():
    print("Looks great outside! Enjoy your trip.")

print("False Alarm, the weather changed! There is a thunderstorm approaching. Cancel your plans and stay inside.")

weather_check()
```

Output:

```text
Checking the weather for you!
False Alarm, the weather changed! There is a thunderstorm approaching. Cancel your plans and stay inside.
Looks great outside! Enjoy your trip.
```

Explanation:

Because the `False Alarm...` line is no longer indented, it is not part of the function.

It runs immediately when the program starts, before `weather_check()` is called.

---

# 5. Parameters & Arguments

## 5.1. What is a Parameter?

A **parameter** is a variable created in the function definition to receive input data.

Example:

```python
def trip_welcome(destination):
    print("Welcome to Tripcademy!")
    print("Looks like you're going to " + destination + " today.")
```

Here:

* `destination` is the parameter.
* The function is waiting for a value to be passed in.

---

## 5.2. What is an Argument?

An **argument** is the value passed into a function when calling it.

Example:

```python
trip_welcome("Times Square")
```

Here:

* `"Times Square"` is the argument.
* It is assigned to the parameter `destination`.

Output:

```text
Welcome to Tripcademy!
Looks like you're going to Times Square today.
```

---

## 5.3. Difference Between Parameter and Argument

|                   | Parameter                | Argument                |
| ----------------- | ------------------------ | ----------------------- |
| Where is it used? | When defining a function | When calling a function |
| Example           | destination              | "Central Park"          |

---

## 5.4. Practice

```python
def generate_trip_instructions(location):
    print("Looks like you are planning a trip to visit " + location)
    print("You can use the public subway system to get to " + location)


generate_trip_instructions("Central Park")

generate_trip_instructions("Grand Central Station")
```

Output:

```text
Looks like you are planning a trip to visit Central Park
You can use the public subway system to get to Central Park

Looks like you are planning a trip to visit Grand Central Station
You can use the public subway system to get to Grand Central Station
```

Explanation:

Only the argument changes when calling the function.

The code inside the function stays the same.

This allows the function to be reused for many different locations.

---

# 6. Introduction to Functions

## 6.1. Multiple Parameters

A function can receive multiple parameters.

Structure:

```python
def function_name(parameter1, parameter2):
    # code
```

When calling a function, you must provide enough arguments in the correct order:

```python
function_name(value1, value2)
```

Example:

```python
def trip_welcome(origin, destination):
    print("Welcome to Tripcademy")
    print("Traveling from " + origin)
    print("Going to " + destination)

trip_welcome("Prospect Park", "Atlantic Terminal")
```

Output:

```
Welcome to Tripcademy
Traveling from Prospect Park
Going to Atlantic Terminal
```

---

## 6.2. Exercise: calculate_expenses()

Complete code:

```python
def calculate_expenses(plane_ticket_price, car_rental_rate, hotel_rate, trip_time):

    car_rental_total = car_rental_rate * trip_time

    hotel_total = hotel_rate * trip_time - 10

    trip_total = car_rental_total + hotel_total + plane_ticket_price

    return trip_total


# Step 5: call your function
print(calculate_expenses(200, 100, 100, 5))
```

Output:

```
1190
```

Explanation:

* `car_rental_total = 100 × 5 = 500`
* `hotel_total = 100 × 5 - 10 = 490`
* `trip_total = 500 + 490 + 200 = 1190`

`return` is used to send a result from the function back to the outside.

---

# 7. Types of Arguments

## 3 types of arguments in Functions

Python has 3 types of arguments:

---

### 1. Positional Arguments

→ Values are passed based on the position of the parameters.

Example:

```python
def calculate_taxi_price(miles_to_travel, rate, discount):
    print(miles_to_travel * rate - discount)

calculate_taxi_price(100, 10, 5)
```

Result:

```
100 → miles_to_travel
10 → rate
5 → discount
```

The order matters.

---

### 2. Keyword Arguments

→ Values are passed using parameter names, so the order does not matter.

Example:

```python
calculate_taxi_price(
    rate=10,
    discount=5,
    miles_to_travel=100
)
```

Python understands:

```python
miles_to_travel = 100
rate = 10
discount = 5
```

---

### 3. Default Arguments

→ Give a parameter a default value.

Example:

```python
def calculate_taxi_price(miles_to_travel, rate, discount=10):
    print(miles_to_travel * rate - discount)
```

Calling:

```python
calculate_taxi_price(10, 0.5)
```

Python uses:

```python
discount = 10
```

If you want to change it:

```python
calculate_taxi_price(10, 0.5, 20)
```

Then:

```python
discount = 20
```

---

## Exercise: Create function trip_planner()

Code:

```python
def trip_planner(first_destination, second_destination, final_destination="Codecademy HQ"):
    print("Here is what your trip will look like!")
    print("First, we will stop in " + first_destination + ", then " + second_destination + ", and lastly " + final_destination)
```

---

### Positional arguments

Calling:

```python
trip_planner("France", "Germany", "Denmark")
```

Output:

```
Here is what your trip will look like!
First, we will stop in France, then Germany, and lastly Denmark
```

---

### Changing argument order

```python
trip_planner("Denmark", "France", "Germany")
```

Output:

```
First, we will stop in Denmark, then France, and lastly Germany
```

---

### Keyword arguments

The order does not matter:

```python
trip_planner(
    first_destination="Iceland",
    final_destination="Germany",
    second_destination="India"
)
```

Output:

```
First, we will stop in Iceland, then India, and lastly Germany
```

---

### Using default argument

Only provide 2 values:

```python
trip_planner("Brooklyn", "Queens")
```

Because there is no `final_destination`, Python uses:

```
Codecademy HQ
```

Output:

```
First, we will stop in Brooklyn, then Queens, and lastly Codecademy HQ
```

---

Full code:

```python
def trip_planner(first_destination, second_destination, final_destination="Codecademy HQ"):
    print("Here is what your trip will look like!")
    print("First, we will stop in " + first_destination + ", then " + second_destination + ", and lastly " + final_destination)


trip_planner("France", "Germany", "Denmark")

trip_planner("Denmark", "France", "Germany")

trip_planner(
    first_destination="Iceland",
    final_destination="Germany",
    second_destination="India"
)

trip_planner("Brooklyn", "Queens")
```

---

# 8. Built-in Functions vs User Defined Functions

## 8.1. Two Types of Functions in Python

Python has two types of functions:

* **Built-in Functions**: Functions already available in Python.
* **User Defined Functions**: Functions created by users using `def`.

Examples of Built-in Functions:

```python
print("Hello")

len("Python")

str(123)

max(1, 5, 3)
```

Example of User Defined Function:

```python
def say_hello():
    print("Hello!")
```

---

## 8.2. Common Built-in Functions

### max()

Returns the largest value.

Example:

```python
max(9.75, 15.50, 5.99, 2.00)
```

Output:

```
15.5
```

---

### min()

Returns the smallest value.

Example:

```python
min(9.75, 15.50, 5.99, 2.00)
```

Output:

```
2.0
```

---

### round()

Rounds a number.

Syntax:

```python
round(number, digits)
```

Example:

```python
round(9.75, 1)
```

Output:

```
9.8
```

---

## 8.3. Exercise

Requirements:

* Find the highest price using `max()`
* Find the lowest price using `min()`
* Round `tshirt_price` to 1 decimal place using `round()`

Code:

```python
tshirt_price = 9.75
shorts_price = 15.50
mug_price = 5.99
poster_price = 2.00


max_price = max(tshirt_price, shorts_price, mug_price, poster_price)
print(max_price)


min_price = min(tshirt_price, shorts_price, mug_price, poster_price)
print(min_price)


rounded_price = round(tshirt_price, 1)
print(rounded_price)
```

Output:

```
15.5
2.0
9.8
```

---

# 9. Variable Access (Scope)

## 9.1. What is Scope?

Scope is the area where a variable can be used in a program.

Example:

```python id="r6x3p8"
def trip_welcome(destination):
    print(destination)

print(destination)
```

This is incorrect because `destination` only exists inside the function.

`destination` has scope inside:

```python id="k6d0ry"
trip_welcome()
```

---

## 9.2. Variables Outside a Function

A variable that is outside a function is called a **global variable**.

Example:

```python id="m3j5dt"
budget = 1000

def trip_welcome():
    print(budget)

print(budget)

trip_welcome()
```

Output:

```id="6r3p6u"
1000
1000
```

Because `budget` is outside the function, it can be accessed from different places.

---

## 9.3. Fixing the Exercise

Error:

`favorite_locations` cannot be found because it is inside `print_count_locations()`.

This variable only exists inside that function.

Incorrect:

```python id="c4m6h2"
def print_count_locations():
    favorite_locations = "Paris, Norway, Iceland"
```

Fix: Move the variable outside the function.

Correct code:

```python id="j8u5g9"
favorite_locations = "Paris, Norway, Iceland"


def print_count_locations():
    print("There are 3 locations")


def show_favorite_locations():
    print("Your favorite locations are: " + favorite_locations)


print_count_locations()

show_favorite_locations()
```

Output:

```id="m5h1d7"
There are 3 locations
Your favorite locations are: Paris, Norway, Iceland
```

Remember:

* Variable inside a function → only usable inside that function.
* Variable outside a function → can be used by multiple functions.

---

# 10. Returns

## 10.1. What is return?

`return` is used to send a value back from a function.

Example:

```python id="g4y6s9"
def calculate_exchange_usd(us_dollars, exchange_rate):
    return us_dollars * exchange_rate
```

Calling the function:

```python id="x8m2qa"
new_zealand_exchange = calculate_exchange_usd(100, 1.4)

print(new_zealand_exchange)
```

Output:

```id="p7r2cv"
140.0
```

---

## 10.2. Difference Between print() and return

### print()

Only displays the result.

Example:

```python id="8k0q5b"
def add(a, b):
    print(a + b)

add(2, 3)
```

Output:

```id="xq0t9m"
5
```

The result cannot be stored or reused.

---

### return

Returns a value so it can be used later.

Example:

```python id="d9f3wy"
def add(a, b):
    return a + b


result = add(2, 3)

print(result)
```

Output:

```id="q2x5z0"
5
```

---

## 10.3. Exercise

Requirements:

* Create a function `deduct_expense()`
* Return `budget - expense`
* Create variable `shirt_expense = 9`
* Call the function and store the result
* Print the remaining budget

Code:

```python id="v9k2mw"
current_budget = 3500.75


def print_remaining_budget(budget):
    print("Your remaining budget is: $" + str(budget))


print_remaining_budget(current_budget)



def deduct_expense(budget, expense):
    return budget - expense



shirt_expense = 9


new_budget_after_shirt = deduct_expense(current_budget, shirt_expense)


print_remaining_budget(new_budget_after_shirt)
```

Output:

```id="j5p8hx"
Your remaining budget is: $3500.75
Your remaining budget is: $3491.75
```

---

## 10.4. Summary

* `print()` → displays a result.
* `return` → sends a result back so it can be stored or used later.
* A function with `return` gives back a value when called.

---

# 11. Introduction to Functions — Multiple Returns

## 11.1. What are Multiple Returns?

A function can return multiple values by using commas `,`.

Example:

```python id="h6z0fw"
def get_info():
    return "A", "B", "C"
```

Calling:

```python id="v2k8qn"
x, y, z = get_info()
```

Result:

```python id="3j0r5y"
x = A
y = B
z = C
```

---

## 11.2. Exercise: top_tourist_locations_italy()

Original code:

```python id="a1w5km"
def top_tourist_locations_italy():
    first = "Rome"
    second = "Venice"
    third = "Florence"
```

Add `return`:

```python id="z7c4pv"
def top_tourist_locations_italy():
    first = "Rome"
    second = "Venice"
    third = "Florence"

    return first, second, third
```

---

## 11.3. Receive Returned Values

Create 3 variables:

```python id="u6m2bx"
most_popular1, most_popular2, most_popular3 = top_tourist_locations_italy()
```

---

## 11.4. Print the Results

```python id="w5d9kf"
print(most_popular1)

print(most_popular2)

print(most_popular3)
```

Complete code:

```python id="k3z9qn"
def top_tourist_locations_italy():
    first = "Rome"
    second = "Venice"
    third = "Florence"

    return first, second, third


most_popular1, most_popular2, most_popular3 = top_tourist_locations_italy()


print(most_popular1)

print(most_popular2)

print(most_popular3)
```

Output:

```id="r8c4my"
Rome
Venice
Florence
```

Remember:

* `return` → sends data out of a function.
* A function can return multiple values.
* The order of receiving variables must match the order of the returned values.

---

# 12. Lambda Functions

## 12.1. What is a Lambda Function?

In Python, besides creating functions using `def`, there is another shorter way to create a function called a **lambda function**.

A lambda function is also called an **anonymous function** (a function without a name).

Example:

Normal function:

```python
def square(x):
    return x ** 2
```

Equivalent lambda function:

```python
square_lambda = lambda x: x ** 2
```

Both functions calculate the square of a number.

---

## 12.2. Lambda Syntax

Structure:

```python
lambda parameters: expression
```

Example:

```python
add = lambda a, b: a + b

print(add(3, 5))
```

Output:

```
8
```

Explanation:

* `lambda` → creates a lambda function.
* `a, b` → parameters.
* `a + b` → expression that returns the result.

---

## 12.3. Lambda with One Parameter

Example:

```python
greeting = lambda name: f"Hello, {name}!"

print(greeting("Alice"))
```

Output:

```
Hello, Alice!
```

---

## 12.4. Lambda with `map()`

`map()` is used to apply a function to every element in a list.

Example:

```python
numbers = [1, 2, 3, 4, 5]

squared = list(map(lambda x: x ** 2, numbers))

print(squared)
```

Output:

```
[1, 4, 9, 16, 25]
```

Explanation:

Each number in `numbers` is passed into:

```python
lambda x: x ** 2
```

Process:

```
1 → 1² → 1
2 → 2² → 4
3 → 3² → 9
...
```

---

## 12.5. Lambda with `filter()`

`filter()` is used to select elements based on a condition.

Example:

```python
numbers = [1,2,3,4,5,6,7,8,9,10]

even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

print(even_numbers)
```

Output:

```
[2,4,6,8,10]
```

Explanation:

```python
x % 2 == 0
```

checks whether a number is even.

---

## 12.6. Lambda with `sorted()`

`sorted()` can use lambda to define a custom sorting rule.

Example:

```python
students = [
    ("Alice", 15),
    ("Bob", 12),
    ("Charlie", 20)
]

sorted_students = sorted(
    students,
    key=lambda x: x[1]
)

print(sorted_students)
```

Output:

```
[('Bob', 12), ('Alice', 15), ('Charlie', 20)]
```

Explanation:

```python
x[1]
```

gets the age value and uses it for sorting.

---

## 12.7. Advantages of Lambda

Lambda functions:

* Make code shorter.
* Are useful for small functions.
* Are commonly used with:

  * `map()`
  * `filter()`
  * `sorted()`

---

## 12.8. Limitations of Lambda

Lambda can only contain:

* One expression.
* No multiple lines of code.

Example that is not suitable:

```python
lambda x:
    print(x)
    return x + 1
```

Use `def` instead:

```python
def function(x):
    print(x)
    return x + 1
```

Summary:

| Function   | Purpose                |
| ---------- | ---------------------- |
| `lambda`   | Create short functions |
| `map()`    | Transform each element |
| `filter()` | Filter elements        |
| `sorted()` | Sort using a condition |

---

# 13. Map Functions

## 13.1. What is `map()`?

`map()` is a built-in Python function used to apply a function to every element in an iterable (such as list, tuple, string).

Syntax:

```python
map(function, iterable)
```

Where:

* `function` → the function to apply.
* `iterable` → the data being processed.

---

## 13.2. How `map()` Works

Example:

```python
def double(x):
    return x * 2

numbers = [1, 2, 3, 4, 5]

doubled_numbers = map(double, numbers)

print(list(doubled_numbers))
```

Output:

```
[2, 4, 6, 8, 10]
```

Explanation:

`map()` runs:

```
1 → double(1) → 2
2 → double(2) → 4
3 → double(3) → 6
...
```

---

## 13.3. `map()` with Built-in Functions

Example: Convert strings into integers.

```python
str_nums = ['1', '2', '3']

int_nums = list(map(int, str_nums))

print(int_nums)
```

Output:

```
[1, 2, 3]
```

Here:

```python
int()
```

is applied to each element.

---

Example: Get string lengths.

```python
words = ["apple", "banana", "cherry"]

lengths = list(map(len, words))

print(lengths)
```

Output:

```
[5, 6, 6]
```

---

## 13.4. `map()` with Lambda

This is one of the most common uses.

Example:

```python
numbers = [1,2,3,4,5]

doubled = list(map(lambda x: x * 2, numbers))

print(doubled)
```

Output:

```
[2,4,6,8,10]
```

Explanation:

```python
lambda x: x * 2
```

runs on every number in the list.

---

## 13.5. `map()` with Multiple Lists

`map()` can accept multiple iterables.

Example:

```python
list1 = [1,2,3]

list2 = [10,20,30]

result = list(map(lambda x,y: x+y, list1, list2))

print(result)
```

Output:

```
[11,22,33]
```

Calculation:

```
1 + 10 = 11
2 + 20 = 22
3 + 30 = 33
```

---

## 13.6. Advantages of `map()`

`map()`:

* Makes code shorter.
* Removes the need for writing a `for` loop.
* Works well for processing data.

Example:

Instead of:

```python
numbers = [1,2,3]

result = []

for x in numbers:
    result.append(x * 2)
```

Use:

```python
result = list(map(lambda x: x*2, numbers))
```

---

## 13.7. What Does `map()` Return?

`map()` returns a **map object** (an iterator).

Example:

```python
numbers = [1,2,3]

result = map(lambda x:x*2, numbers)

print(result)
```

Output:

```
<map object>
```

To view the values:

```python
print(list(result))
```

Output:

```
[2,4,6]
```

---

## 13.8. Comparing `map()` and List Comprehension

Using `map()`:

```python
numbers = [1,2,3]

result = list(map(lambda x:x*2, numbers))
```

Using List Comprehension:

```python
result = [x*2 for x in numbers]
```

Both produce the same result.

List comprehension is usually easier to read for simple operations.

---

## Summary

| Function   | Purpose                          |
| ---------- | -------------------------------- |
| `map()`    | Apply a function to each element |
| `filter()` | Filter elements                  |
| `sorted()` | Sort data                        |
| `lambda`   | Create short functions           |

Quick example:

```python
list(map(lambda x: x*2, [1,2,3]))
```

Result:

```
[2,4,6]
```