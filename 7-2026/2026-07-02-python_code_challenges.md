# Python Code Challenges: Control Flow

## 1. Not Sum To Ten

**Objective:** Check whether the sum of two numbers is **not** equal to 10.

**Explanation:** Add `num1` and `num2`. If the sum is not equal to 10, assign `True` to `not_ten`; otherwise, assign `False`.

```python
num1 = 3
num2 = 4

if num1 + num2 != 10:
    not_ten = True
else:
    not_ten = False

print(not_ten)
```

---

## 2. Over Budget

**Objective:** Check whether the total expenses exceed the budget.

**Explanation:** Calculate the total expenses and store the result in `total`. If `total` is greater than `budget`, assign `True` to `over_budget`; otherwise, assign `False`.

```python
budget = 500

food_bill = 120
electricity_bill = 80
internet_bill = 40
rent = 300

total = food_bill + electricity_bill + internet_bill + rent

if total > budget:
    over_budget = True
else:
    over_budget = False

print(over_budget)
```

---

## 3. Large Power

**Objective:** Create a function that checks whether `base ** exponent` is greater than `5000`.

**Explanation:** The function takes two parameters, `base` and `exponent`. If `base ** exponent` is greater than `5000`, return `True`; otherwise, return `False`.

```python
def large_power(base, exponent):
    if base ** exponent > 5000:
        return True
    else:
        return False

print(large_power(10, 4))
print(large_power(2, 8))
```

---

## 4. Twice As Large

**Objective:** Create a function that checks whether `num1` is more than twice as large as `num2`.

**Explanation:** Compare `num1` with `2 * num2`. If `num1` is greater than twice `num2`, return `True`; otherwise, return `False`.

```python
def twice_as_large(num1, num2):
    if num1 > 2 * num2:
        return True
    else:
        return False

print(twice_as_large(11, 5))
print(twice_as_large(10, 5))
```

---

## 5. Divisible By Ten

**Objective:** Create a function that checks whether a number is divisible by 10.

**Explanation:** Use the modulo operator (`%`). If `num % 10 == 0`, the number is divisible by 10 and the function returns `True`; otherwise, it returns `False`.

```python
def divisible_by_ten(num):
    if num % 10 == 0:
        return True
    else:
        return False

print(divisible_by_ten(50))
print(divisible_by_ten(37))
```

---

## 6. In Range

**Objective:** Create a function that checks whether a number falls within a given range, including both endpoints.

**Explanation:** If `num >= lower` and `num <= upper`, return `True`; otherwise, return `False`.

```python
def in_range(num, lower, upper):
    if num >= lower and num <= upper:
        return True
    return False

print(in_range(5, 1, 10))
print(in_range(15, 1, 10))
```

---

## 7. Same Name

**Objective:** Create a function that checks whether two names are the same.

**Explanation:** Compare the two strings using the `==` operator. Return `True` if they are equal; otherwise, return `False`.

```python
def same_name(your_name, my_name):
    if your_name == my_name:
        return True
    else:
        return False

print(same_name("Anna", "Anna"))
print(same_name("Anna", "John"))
```

---

## 8. Always False

**Objective:** Create a function that always returns `False` by using a contradictory condition.

**Explanation:** A number cannot be both greater than 0 and less than 0 at the same time. Therefore, the condition is always false, and the function always returns `False`.

```python
def always_false(num):
    if num > 0 and num < 0:
        return True
    else:
        return False

print(always_false(5))
print(always_false(-3))
```

---

## 9. Movie Review

**Objective:** Create a function that returns a movie review based on its rating.

**Explanation:**

* Rating ≤ 5: `"Avoid at all costs!"`
* Rating from 6 up to (but not including) 9: `"This one was fun."`
* Rating ≥ 9: `"Outstanding!"`

```python
def movie_review(rating):
    if rating <= 5:
        return "Avoid at all costs!"
    if rating < 9:
        return "This one was fun."
    return "Outstanding!"

print(movie_review(4))
print(movie_review(7))
print(movie_review(9))
```

---

## 10. Max Number

**Objective:** Create a function that returns the largest of three numbers. If two or more of the largest numbers are equal, return `"It's a tie!"`.

**Explanation:** Compare each number with the other two. If no single number is greater than both of the others, the result is a tie.

```python
def max_num(num1, num2, num3):
    if num1 > num2 and num1 > num3:
        return num1
    elif num2 > num1 and num2 > num3:
        return num2
    elif num3 > num1 and num3 > num2:
        return num3
    else:
        return "It's a tie!"

print(max_num(10, 5, 8))
print(max_num(7, 9, 9))
```

---

# Python Code Challenges: Lists

## 1. Append Size

**Objective:** Create a function that appends the length of a list to the end of the list.

**Explanation:** Use `len()` to get the number of elements in the list, then use `.append()` to add this value to the end of the list and return the updated list.

```python
def append_size(my_list):
    my_list.append(len(my_list))
    return my_list

print(append_size([23, 42, 108]))
print(append_size([1, 23]))
```

---

## 2. Append Sum

**Objective:** Create a function that adds the last two elements of a list and appends the result to the end of the list. Repeat this process three times.

**Explanation:** During each iteration, take the last two elements (`my_list[-1]` and `my_list[-2]`), add them together, and use `.append()` to add the result to the list.

```python
def append_sum(my_list):
    for i in range(3):
        my_list.append(my_list[-1] + my_list[-2])
    return my_list

print(append_sum([1, 1, 2]))
print(append_sum([1, 23]))
```

---

## 3. Larger List

**Objective:** Create a function that returns the last element of the longer list.

**Explanation:** Compare the lengths of the two lists using `len()`. If both lists have the same length, return the last element of the first list.

```python
def larger_list(my_list1, my_list2):
    if len(my_list1) >= len(my_list2):
        return my_list1[-1]
    else:
        return my_list2[-1]

print(larger_list([23, 12, 21], [1, 23]))
print(larger_list([23, 12, 21], [1, 23, 25]))
```

---

## 4. More Than N

**Objective:** Create a function that checks whether an item appears more than `n` times in a list.

**Explanation:** Use the `.count()` method to count how many times the item appears. If the count is greater than `n`, return `True`; otherwise, return `False`.

```python
def more_than_n(my_list, item, n):
    if my_list.count(item) > n:
        return True
    else:
        return False

print(more_than_n([2, 3, 2, 2, 5], 2, 2))
print(more_than_n([1, 2, 3], 2, 2))
```

---

## 5. Combine Sort

**Objective:** Create a function that combines two lists and returns them sorted in ascending order.

**Explanation:** Use the `+` operator to concatenate the two lists, then use `sorted()` to create and return a new sorted list.

```python
def combine_sort(my_list1, my_list2):
    unsorted = my_list1 + my_list2
    sorted_list = sorted(unsorted)
    return sorted_list

print(combine_sort([4, 2, 1], [5, 3]))
print(combine_sort([10, 8], [7, 9]))
```

---

# Python Code Challenges: Loops

## 1. Divisible By Ten

**Objective:** Create a function that counts how many numbers in a list are divisible by 10.

**Explanation:** Iterate through each element in the list using a `for` loop. If a number is divisible by 10, increase the counter by 1. After the loop finishes, return the total count.

```python
def divisible_by_ten(nums):
    count = 0
    for number in nums:
        if number % 10 == 0:
            count += 1
    return count

print(divisible_by_ten([10, 25, 30, 40, 55]))
print(divisible_by_ten([1, 2, 3]))
```

---

## 2. Greetings

**Objective:** Create a list of greetings by adding `"Hello, "` before each name.

**Explanation:** Create an empty list, iterate through each name, concatenate `"Hello, "` with the name, and append the result to the new list.

```python
def add_greetings(names):
    new_list = []
    for name in names:
        new_list.append("Hello, " + name)
    return new_list

print(add_greetings(["Anna", "John", "Mary"]))
```

---

## 3. Delete Starting Even Numbers

**Objective:** Remove even numbers from the beginning of a list until the first odd number is found or the list becomes empty.

**Explanation:** Use a `while` loop. If the first element is even, remove it by slicing the list. Stop when the first element is odd or the list is empty.

```python
def delete_starting_evens(my_list):
    while len(my_list) > 0 and my_list[0] % 2 == 0:
        my_list = my_list[1:]
    return my_list

print(delete_starting_evens([4, 8, 10, 11, 12, 15]))
print(delete_starting_evens([2, 4, 6]))
```

---

## 4. Odd Indices

**Objective:** Create a new list containing the elements at odd indices.

**Explanation:** Use `range()` to iterate over the odd indices (`1, 3, 5, ...`), then append the elements at those positions to a new list.

```python
def odd_indices(my_list):
    new_list = []
    for index in range(1, len(my_list), 2):
        new_list.append(my_list[index])
    return new_list

print(odd_indices([4, 3, 7, 10, 11, -2]))
```

---

## 5. Exponents

**Objective:** Create a list containing every result of each number in `bases` raised to each power in `powers`.

**Explanation:** Use two nested `for` loops. For each base, calculate `base ** power` for every power and append the result to the list.

```python
def exponents(bases, powers):
    new_list = []
    for base in bases:
        for power in powers:
            new_list.append(base ** power)
    return new_list

print(exponents([2, 3, 4], [1, 2, 3]))
print(exponents([5], [2, 3]))
```

---

## 6. Larger Sum

**Objective:** Create a function that returns the list with the larger sum of its elements.

**Explanation:** Calculate the sum of each list using a `for` loop, then compare the two sums. If the sums are equal, return the first list.

```python
def larger_sum(lst1, lst2):
    sum1 = 0
    sum2 = 0

    for number in lst1:
        sum1 += number

    for number in lst2:
        sum2 += number

    if sum1 >= sum2:
        return lst1
    else:
        return lst2

print(larger_sum([1, 9, 5], [2, 3, 4]))
print(larger_sum([1, 2], [1, 2]))
```

---

## 7. Over 9000

**Objective:** Create a function that adds the numbers in a list until the total exceeds 9000.

**Explanation:** Iterate through the list, adding each number to a running total. If the total becomes greater than 9000, use `break` to exit the loop and return the current total.

```python
def over_nine_thousand(lst):
    sum = 0

    for number in lst:
        sum += number
        if sum > 9000:
            break

    return sum

print(over_nine_thousand([8000, 900, 120, 5000]))
print(over_nine_thousand([1000, 2000, 3000]))
```

---

## 8. Max Num

**Objective:** Create a function that finds the largest number in a list.

**Explanation:** Assume the first element is the largest initially. Iterate through the list, updating the maximum value whenever a larger number is found.

```python
def max_num(nums):
    maximum = nums[0]

    for number in nums:
        if number > maximum:
            maximum = number

    return maximum

print(max_num([1, 5, 9, 3]))
print(max_num([-5, -2, -10]))
```

---

## 9. Same Values

**Objective:** Create a function that returns the indices where two lists contain the same value.

**Explanation:** Iterate through each index of the lists. If the elements at the same position are equal, append the index to the result list.

```python
def same_values(lst1, lst2):
    new_lst = []

    for index in range(len(lst1)):
        if lst1[index] == lst2[index]:
            new_lst.append(index)

    return new_lst

print(same_values([5, 1, -10, 3, 3], [5, 10, -10, 3, 5]))
```

---

## 10. Reversed List

**Objective:** Create a function that checks whether the second list is the reverse of the first list.

**Explanation:** Iterate through each index of the first list and compare it with the corresponding mirrored element in the second list. If any pair does not match, return `False`; otherwise, return `True`.

```python
def reversed_list(lst1, lst2):
    for index in range(len(lst1)):
        if lst1[index] != lst2[len(lst2) - 1 - index]:
            return False

    return True

print(reversed_list([1, 2, 3], [3, 2, 1]))
print(reversed_list([1, 2, 3], [1, 2, 3]))
```

---

# Python Code Challenges: Functions

## 1. Tenth Power

**Objective:** Create a function that calculates the tenth power of a number.

**Explanation:** Use the `**` operator to raise `num` to the 10th power and return the result.

```python
def tenth_power(num):
    return num ** 10

print(tenth_power(2))
print(tenth_power(3))
```

---

## 2. Square Root

**Objective:** Create a function that calculates the square root of a number.

**Explanation:** Use the `**` operator with an exponent of `0.5` to calculate the square root and return the result.

```python
def square_root(num):
    return num ** 0.5

print(square_root(25))
print(square_root(81))
```

---

## 3. Win Percentage

**Objective:** Create a function that calculates a team's winning percentage.

**Explanation:** Calculate the total number of games, divide the number of wins by the total number of games, and multiply the result by 100.

```python
def win_percentage(wins, losses):
    total_games = wins + losses
    ratio_won = wins / total_games
    return ratio_won * 100

print(win_percentage(8, 2))
print(win_percentage(15, 5))
```

---

## 4. Average

**Objective:** Create a function that calculates the average of two numbers.

**Explanation:** Add the two numbers together and divide the sum by 2.

```python
def average(num1, num2):
    return (num1 + num2) / 2

print(average(10, 20))
print(average(5, 9))
```

---

## 5. Remainder

**Objective:** Create a function that returns the remainder of `(2 × num1)` divided by `(num2 / 2)`.

**Explanation:** Multiply `num1` by 2, divide `num2` by 2, then use the modulo operator (`%`) to find the remainder.

```python
def remainder(num1, num2):
    return (2 * num1) % (num2 / 2)

print(remainder(15, 14))
print(remainder(9, 6))
```

---

## 6. First Three Multiples

**Objective:** Create a function that prints the first three multiples of a number and returns the third multiple.

**Explanation:** Print `num`, `num * 2`, and `num * 3`, then return `num * 3`.

```python
def first_three_multiples(num):
    print(num)
    print(num * 2)
    print(num * 3)
    return num * 3

print(first_three_multiples(7))
```

---

## 7. Tip

**Objective:** Create a function that calculates the tip amount based on the bill total and tip percentage.

**Explanation:** Multiply `total` by `percentage`, divide by 100, and return the tip amount.

```python
def tip(total, percentage):
    tip_amount = (total * percentage) / 100
    return tip_amount

print(tip(150, 20))
print(tip(80, 15))
```

---

## 8. Bond, James Bond

**Objective:** Create a function that returns a string in the format `"LastName, FirstName LastName"`.

**Explanation:** Concatenate the last name, a comma, the first name, and the last name again using the `+` operator.

```python
def introduction(first_name, last_name):
    return last_name + ", " + first_name + " " + last_name

print(introduction("James", "Bond"))
print(introduction("John", "Smith"))
```

---

## 9. Dog Years

**Objective:** Create a function that calculates a dog's age in dog years.

**Explanation:** Multiply the age by 7, convert the result to a string using `str()`, and concatenate it with the dog's name.

```python
def dog_years(name, age):
    return name + ", you are " + str(age * 7) + " years old in dog years"

print(dog_years("Buddy", 3))
print(dog_years("Max", 5))
```

---

## 10. All Operations

**Objective:** Create a function that performs several arithmetic operations, prints three intermediate results, and returns the final remainder.

**Explanation:** Perform the following calculations in order:

* `a + b`
* `c - d`
* Multiply the two results
* Find the remainder when the product is divided by `a`, then return the remainder.

```python
def lots_of_math(a, b, c, d):
    first = a + b
    second = c - d
    third = first * second
    fourth = third % a

    print(first)
    print(second)
    print(third)

    return fourth

print(lots_of_math(1, 2, 3, 4))
print(lots_of_math(5, 6, 7, 2))
```