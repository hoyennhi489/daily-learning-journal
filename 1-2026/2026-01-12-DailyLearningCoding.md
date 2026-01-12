## TIME AND SPACE COMPLEXITY IN SORTING ALGORITHMS

### 1. What is complexity?

#### 1.1. Time Complexity

Time complexity is used to answer the question:
**How long does an algorithm take to run as the input data size increases?**

* Not measured in seconds
* Measured by the number of comparisons / processing steps
* Represented using Big-O notation

**Simple example**
If the number of elements doubles:

* The algorithm takes twice as long → **O(n)**
* The algorithm takes four times as long → **O(n²)**

#### 1.2. Space Complexity

Space complexity is used to answer:
**How much additional memory does the algorithm need to run?**

It includes:

* Temporary variables
* Auxiliary arrays
* The call stack when using recursion

### 2. What is Big-O?

Big-O describes how fast time or memory usage grows as the input size increases.

| Notation   | Meaning            |
| ---------- | ------------------ |
| O(1)       | Constant growth    |
| O(n)       | Linear growth      |
| O(n²)      | Very fast growth   |
| O(n log n) | Fast and efficient |

### 3. Complexity of Selection Sort

#### 3.1. How it works (review)

Selection Sort:

* In each loop, finds the smallest element
* Moves that element to the front
* Repeats for the remaining elements

#### 3.2. Concrete example

Initial array:
`[5, 3, 4, 1, 2]`

**Round 1:**

* Compare: 5 with 3, 4, 1, 2 → find 1
* Swap 1 with 5

**Round 2:**

* Compare: 3 with 4, 5, 2 → find 2

⇒ Each round must scan almost the entire array.

#### 3.3. Time complexity of Selection Sort

| Case    | Explanation          | Big-O |
| ------- | -------------------- | ----- |
| Best    | Array already sorted | O(n²) |
| Average | Arbitrary array      | O(n²) |
| Worst   | Reversed array       | O(n²) |

**Reason:**
Regardless of whether the array is already sorted or not, the algorithm still compares all elements.
⇒ **Selection Sort is always O(n²).**

#### 3.4. Space complexity of Selection Sort

* Does not create a new array
* Uses only a few variables: `i`, `j`, `min_index`
* The number of variables does not depend on array size

⇒ **Space complexity: O(1)**

### 4. Complexity of Quicksort

#### 4.1. How it works (review)

Quicksort uses the divide-and-conquer approach:

1. Choose an element as the pivot
2. Partition the array:

   * Smaller than pivot → left
   * Larger than pivot → right
3. Repeat for each part

#### 4.2. Illustrative example

Initial array:
`[5, 3, 8, 4, 2, 7]`

Choose `pivot = 4`

* Smaller than 4 → `[3, 2]`
* Larger than 4 → `[5, 8, 7]`

Continue dividing until each subarray has only one element.

### 5. Time complexity of Quicksort

#### 5.1. Worst case – O(n²)

Occurs when:

* The pivot is always the smallest or largest element
* The array is already sorted

Example:
`[1, 2, 3, 4, 5]`

Pivot = 1 → left side empty, right side very large
⇒ Comparisons similar to Selection Sort
⇒ **O(n²)**

#### 5.2. Average case – O(n log n)

* The pivot divides the array fairly evenly
* Each partition reduces the problem size

⇒ This is the most common case in practice.

#### 5.3. Best case – O(n log n)

* The pivot always splits the array into two equal halves

⇒ Very fast and efficient.

#### 5.4. Summary of Quicksort time complexity

| Case    | Big-O      |
| ------- | ---------- |
| Best    | O(n log n) |
| Average | O(n log n) |
| Worst   | O(n²)      |

### 6. Space complexity of Quicksort

Quicksort uses recursion, so:

* Each function call is stored on the call stack
* The number of calls depends on the depth of partitioning

⇒ Average case: **O(log n)**
⇒ Worst case: **O(n)**

### 7. Comparison between Selection Sort and Quicksort

| Criterion             | Selection Sort  | Quicksort      |
| --------------------- | --------------- | -------------- |
| Ease of understanding | Very easy       | More difficult |
| Speed                 | Slow            | Very fast      |
| Time complexity       | O(n²)           | O(n log n)     |
| Space complexity      | O(1)            | O(log n)       |
| Practical use         | Mainly academic | Widely used    |

### 8. Easy-to-remember conclusion

* **Selection Sort**

  * Easy to learn
  * Time-consuming
  * Not suitable for large datasets

* **Quicksort**

  * More complex
  * Very fast
  * Used in real-world applications

⇒ **There is no single algorithm that is best for all situations.**

---

## SEARCHING IN COMPUTER SCIENCE

### 1. What is searching?

Searching is the operation of:
**Finding a specific element in a dataset.**

Examples:

* Finding the number 10 in an array of numbers
* Finding the name “An” in a list of students
* Finding a key in a hash table

Searching is a very basic operation and appears in almost every program.

### 2. What should be considered when searching?

Before writing a searching algorithm, the following questions must be answered:

#### 2.1. What are you searching for?

Examples:

* A specific value (e.g., number 5)
* The maximum value
* The minimum value
* The median value

#### 2.2. What if the value is not found?

If the value does not exist, how should the program handle it?

Common return options:

* Return `-1`
* Return `false`
* Return a message such as “not found”

Returning `null` arbitrarily is discouraged because:

* It may cause program errors
* Tony Hoare (the creator of `null`) called it a “billion-dollar mistake”

#### 2.3. What result should be returned?

If the value appears multiple times:

* Return the first position?
* Or the last position?

This must be clearly defined from the beginning.

### 3. Linear Search

#### 3.1. What is Linear Search?

Linear Search is the simplest searching method.

How it works:

* Start from the first element
* Compare each element with the target value
* Stop when the value is found or when the array ends

#### 3.2. Illustrative example

Array:
`[4, 7, 2, 9, 5]`
Find the number `9`.

Steps:

* Compare 4 with 9 → not equal
* Compare 7 with 9 → not equal
* Compare 2 with 9 → not equal
* Compare 9 with 9 → found

#### 3.3. Complexity of Linear Search

**Best case:**

* The value is at the first position
* **O(1)**

**Worst case:**

* The value is at the end or does not exist
* All elements must be checked
* **O(n)**

#### 3.4. When should Linear Search be used?

Use it when:

* The dataset is small
* The data is not sorted
* A simple and easy-to-implement algorithm is needed

### 4. Binary Search

#### 4.1. Mandatory condition

Binary Search can only be used when the data is already sorted.

Example:
`[1, 3, 5, 7, 9, 11]`

#### 4.2. Main idea

Binary Search does not check each element one by one.
Instead:

* Check the middle element
* Eliminate half of the data each time

#### 4.3. Illustrative example

Sorted list:
`[2, 4, 6, 8, 10, 12]`
Find the number `10`.

**Step 1:**

* Middle element is 6
* 10 > 6 → discard the left half

**Step 2:**

* Consider the right half: `[8, 10, 12]`
* Middle element is 10
* Found

#### 4.4. Complexity of Binary Search

**Best case:**

* Found immediately at the middle
* **O(1)**

**Worst case:**

* The array is halved each time
* After k steps, the size becomes `n / 2^k`
* Time complexity is **O(log n)**

### 5. Comparison between Linear Search and Binary Search

| Criterion            | Linear Search | Binary Search |
| -------------------- | ------------- | ------------- |
| Requires sorted data | No            | Yes           |
| Difficulty           | Easy          | Medium        |
| Speed                | Slow          | Fast          |
| Time complexity      | O(n)          | O(log n)      |
| Large datasets       | Not suitable  | Very suitable |

### 6. Should Binary Search always be used?

Not always. Consider:

* The time required to sort the data
* Whether the data is frequently updated

If:

* The data changes little
* The data is read many times
  → Binary Search is very effective.

If:

* The data changes continuously
  → Re-sorting may be costly.
### 7. Relation to data structures

Some data structures are already ordered:

* Heap
* Binary Tree

These structures allow faster searching without re-sorting each time.

### 8. Summary

* Searching is a fundamental operation in programming
* Linear Search: simple, easy to understand, slow
* Binary Search: fast, efficient, requires sorted data
* Big-O helps estimate algorithm performance
* Always consider the “not found” case

---

## TIME AND SPACE COMPLEXITY IN SEARCHING ALGORITHMS

### 1. General concepts

When evaluating a searching algorithm, two main factors must be considered:

* **Time Complexity**
  How many processing steps the algorithm needs to find the target element as the data size increases.
* **Space Complexity**
  How much additional memory the algorithm requires during execution.

The two most basic searching algorithms are:

* Linear Search
* Binary Search

### 2. Linear Search

#### 2.1. What is Linear Search?

Linear Search is the simplest and most straightforward searching method.

How it works:

* Start from the first element of the list
* Compare each element with the target value
* Stop when the value is found or when the entire list has been checked

#### 2.2. Illustrative example

List of numbers:
`[3, 7, 2, 9, 5]`
Find the value `9`.

Steps:

* Compare 3 with 9 → not equal
* Compare 7 with 9 → not equal
* Compare 2 with 9 → not equal
* Compare 9 with 9 → found

#### 2.3. Time complexity of Linear Search

* **Best case**
  The target element is at the first position.
  No further checks are needed.
  Time complexity: **O(1)**

* **Average case**
  The element is around the middle of the list.
  About half of the elements must be checked.
  Time complexity: **O(n)**

* **Worst case**
  The element does not exist or is at the end of the list.
  All `n` elements must be checked.
  Time complexity: **O(n)**

#### 2.4. Space complexity of Linear Search

* No additional arrays are created
* Only a few temporary variables are used (index, target value)

The additional space used by the algorithm is constant.

However:

* If the input list is included, total memory usage is **O(n)**
* If only extra memory used by the algorithm is considered, it is **O(1)**

In practice, the space complexity of Linear Search is considered **O(1)**.

### 3. Binary Search

#### 3.1. Mandatory condition

Binary Search works only when the list is sorted.

Example of a valid list:
`[2, 5, 8, 12, 15, 20]`

#### 3.2. How Binary Search works

* Choose the middle element of the list
* Compare it with the target value
* If the target is smaller → discard the right half
* If the target is larger → discard the left half
* Repeat the process with the remaining half

Each iteration reduces the search space by half.

#### 3.3. Illustrative example

Sorted list:
`[3, 6, 9, 12, 15, 18]`
Find the number `15`.

**Step 1:**

* Middle element is 12
* 15 > 12 → discard the left half

**Step 2:**

* Consider the list `[15, 18]`
* Middle element is 15
* Found

#### 3.4. Time complexity of Binary Search

* **Best case**
  The target element is at the middle of the list.
  Time complexity: **O(1)**

* **Average case**
  Each iteration eliminates half of the list.
  Time complexity: **O(log n)**

* **Worst case**
  The target element does not exist in the list.
  The search size decreases as:
  `n → n/2 → n/4 → n/8 → …`
  Time complexity: **O(log n)**

#### 3.5. Space complexity of Binary Search

* No new arrays are created
* Only a few variables are used (`low`, `high`, `mid`)

Therefore:

* Additional space complexity is **O(1)**

Note:

* Some references include the input array and state **O(n)**
* In standard algorithm analysis, only extra memory is considered, so it is **O(1)**

### 4. Comparison between Linear Search and Binary Search

| Criterion                 | Linear Search      | Binary Search   |
| ------------------------- | ------------------ | --------------- |
| Requires sorted data      | No                 | Yes             |
| Working method            | Check each element | Halve each step |
| Worst-case time           | O(n)               | O(log n)        |
| Additional space          | O(1)               | O(1)            |
| Efficiency for large data | Low                | High            |

---

## DIVIDE AND CONQUER

### 1. What is Divide and Conquer?

Divide and Conquer is a problem-solving paradigm in computer science that helps solve complex problems by:

* Dividing a large problem into smaller subproblems
* Solving each smaller subproblem
* (If necessary) Combining the results of the subproblems to obtain the final solution

This approach is based on two key ideas:

* **Recursion**
* **Problem decomposition**

### 2. Steps of a Divide and Conquer algorithm

A divide and conquer algorithm consists of **2 mandatory steps** and **1 optional step**.

#### 2.1. Divide

* Split the input data into smaller parts
* Each part is a subproblem similar to the original problem but smaller in size

Example:

* An array of 8 elements → split into two arrays of 4 elements → continue splitting

#### 2.2. Conquer

* Solve each subproblem
* If a subproblem is still large, continue dividing it
* When the problem is small enough (e.g., only one element left), solve it directly

#### 2.3. Combine (optional)

* Combine the results of the subproblems to produce the final result
* Not all divide and conquer algorithms require this step

Examples:

* In **merge sort**, combining is required
* In **binary search**, combining is not needed

### 3. Classic example: Merge Sort

#### 3.1. What is Merge Sort?

Merge Sort is a sorting algorithm that fully applies the divide and conquer paradigm.

Main idea:

* Divide the array into halves
* Sort each half
* Merge the sorted halves together

#### 3.2. How Merge Sort works

Assume the initial array:
`[8, 3, 5, 2]`

**Step 1 – Divide**

* Split into: `[8, 3]` and `[5, 2]`
* Continue splitting:

  * `[8]`, `[3]`, `[5]`, `[2]`

**Step 2 – Conquer**

* Each subarray has only one element → considered “already sorted”

**Step 3 – Combine**

* Merge `[8]` and `[3]` → `[3, 8]`
* Merge `[5]` and `[2]` → `[2, 5]`
* Merge `[3, 8]` and `[2, 5]` → `[2, 3, 5, 8]`

#### 3.3. Meaning of dividing the problem

* Sorting 4 elements is difficult
* Sorting 1 element is very easy
* Breaking the problem down makes it simpler to solve

### 4. Real-life example: Going grocery shopping as a group

Suppose there are:

* 4 people
* 1 very long shopping list

**Inefficient approach:**

* All 4 people walk around the entire supermarket
* Time-consuming and overlapping work

**Divide and conquer approach:**

1. Divide the shopping list into 4 parts
2. Each person is responsible for one part
3. Organize the list by sections (vegetables, meat, drinks, etc.)
4. Each person goes directly to their assigned section

→ Faster, less overlap, more efficient

### 5. Benefits of Divide and Conquer in computing

#### 5.1. Parallelism

* Subproblems can be processed simultaneously
* Each subproblem can:

  * Run on a different thread
  * Run on a different CPU core
  * Run on a different server

Example:

* A large array is divided and processed by multiple CPU cores at the same time

#### 5.2. Better memory management

* Large data can be:

  * Divided into smaller chunks
  * Processed piece by piece

Suitable for:

* Data too large to fit entirely in RAM
* Cloud-based or distributed systems

Example:

* One part of the data is processed on a local server
* Another part is sent to a cloud server for processing

### 6. Summary

* Divide and conquer is a way of thinking for problem solving
* It consists of:

  * Divide (mandatory)
  * Conquer (mandatory)
  * Combine (optional)
* It is based on:

  * Recursion
  * Breaking problems into smaller parts
* Well suited for:

  * Sorting (merge sort, quicksort)
  * Searching (binary search)
  * Large-scale data processing
* Benefits include:

  * Faster execution
  * Easy parallelization
  * Efficient memory management

---

## RECURSION

### 1. What is recursion?

Recursion is a programming technique in which a function calls itself to solve a problem.

* Each call works on a smaller version of the problem
* The process continues until a stopping condition is reached

Compared to loops:

* Loops: repeat using `for`, `while`
* Recursion: repeat by calling the function itself

### 2. Three mandatory requirements of a recursive solution

A recursive program must have **all three components below**; missing any of them can cause infinite recursion.

#### 2.1. Base Case

* The stopping condition
* When this condition is met, the function stops calling itself

Without a base case → infinite calls → **stack overflow**

Example:

* If `n == 0`, stop

#### 2.2. Diminishing Structure

* With each recursive call, the input must become smaller
* This ensures that the base case will eventually be reached

Example:

* `n` decreases: `n → n - 1 → n - 2 → ... → 0`

#### 2.3. Recursive Call

* The function calls itself
* It passes in a reduced version of the input

Example:

* `return x * power(x, n - 1)`

### 3. Example: Computing powers using recursion

Problem: compute ( x^n )

Idea:

* ( x^n = x \times x^{n-1} )
* When `n = 0` → the result is `1`

Analysis using the three requirements:

* Base case: `n == 0`
* Diminishing structure: `n → n - 1`
* Recursive call: the function calls itself

### 4. Call Stack

Each time a recursive function is called:

* A new copy of the function is pushed onto the call stack
* When the function finishes, it is removed from the stack

Example:

* Call `power(2, 3)`
* There are 3 function calls
* 3 stack frames are stored in the call stack

Notes:

* Recursion uses more resources than loops
* But it allows:

  * Keeping track of computation history
  * Solving problems with hierarchical structures

### 5. When is recursion useful?

#### 5.1. Binary Search

* Split the list into two halves
* Compare the middle element
* Call the function again with the appropriate half

Can be implemented using:

* Loops
* Or recursion (more natural and clearer)

#### 5.2. Fibonacci sequence

Definition:

* ( F(0) = 0 )
* ( F(1) = 1 )
* ( F(n) = F(n - 1) + F(n - 2) )

Recursion is suitable because:

* The formula itself is recursive
* The code is short and easy to read

#### 5.3. Hierarchical problems

Examples:

* Tree traversal
* Graph traversal
* Directory structures
* Divide and conquer problems

### 6. Advantages and disadvantages of recursion

**Advantages**

* Concise code
* Easy to read and understand
* Clearly expresses divide and conquer thinking
* Suitable for problems with repetitive structure

**Disadvantages**

* Uses more memory due to the call stack
* Can be slower than loops
* Easy to make mistakes if:

  * The base case is missing
  * The input does not decrease

### 7. Recursion and Divide and Conquer

Recursion is the core tool for implementing divide and conquer:

* Divide a large problem into smaller ones
* Solve each part recursively
* Combine results (if needed)

Examples:

* Merge sort
* Quick sort
* Binary search

### 8. Summary

* Recursion = a function calling itself
* Always requires 3 elements:

  1. Base case
  2. Diminishing input
  3. Recursive call
* Recursion:

  * Is easy to read
  * Is powerful for divide and conquer
  * Uses more resources than loops
* Well suited for:

  * Fibonacci
  * Binary search
  * Trees / graphs
  * Divide and conquer problems

---

## MEMOIZATION & DYNAMIC PROGRAMMING

### 1. Quick review of background knowledge

Before learning **Dynamic Programming (DP)**, we need to recall two important concepts:

#### 1.1. Divide and Conquer

* Divide a large problem into smaller subproblems
* Solve each subproblem
* Combine the results to obtain the final answer

Examples:

* Binary Search
* Merge Sort
* Quick Sort

#### 1.2. Recursion

* A function calls itself
* Avoids using loops
* Based on:

  * Base case (stopping condition)
  * Diminishing input

Examples:

* Fibonacci
* Power calculation
* Tree traversal

---

### 2. What is Dynamic Programming?

Dynamic Programming (DP) is a method for solving problems by:

1. Dividing the problem into subproblems
2. Solving the subproblems
3. Storing the results of subproblems
4. Reusing stored results instead of recomputing them

Main goals:

* Reduce execution time
* Avoid redundant computations

---

### 3. What is Memoization?

Memoization is a technique that:

* Stores the results of subproblems
* Reuses them when the same subproblem appears again

In short:
**Memoization = remembering previously computed results**

Memoization is a core component of Dynamic Programming.

---

### 4. Relationship between the concepts

| Concept             | Meaning                                    |
| ------------------- | ------------------------------------------ |
| Divide and Conquer  | Break a large problem into smaller ones    |
| Recursion           | Solve a problem by calling itself          |
| Memoization         | Store results of subproblems               |
| Dynamic Programming | Combines all three to optimize performance |

**Dynamic Programming = Divide and Conquer + Recursion + Memoization**

---

### 5. Simple example: A 6-digit binary lock

Problem:

* A binary lock has 6 digits
* Each digit has 2 states (0 or 1)
* How many possible combinations are there?

Normal approach:

* ( 2^6 = 64 )

Divide and conquer:

* ( 2^6 = 2^3 \times 2^3 )
* ( 2^3 = 8 )

Without memoization:

* Compute ( 2^3 ) twice

With memoization:

* Compute ( 2^3 = 8 ) once
* Store the result
* Reuse it

→ Fewer computations

---

### 6. Problems suitable for Dynamic Programming

Dynamic Programming works best for problems that:

* Have overlapping subproblems
* Require optimal results

#### 6.1. Fibonacci

Formula:

* ( F(0) = 0 )
* ( F(1) = 1 )
* ( F(n) = F(n - 1) + F(n - 2) )

Problem:

* Recursive Fibonacci repeatedly recalculates the same values

Solution:

* Store computed ( F(n) )
* Reuse it when needed

#### 6.2. Knapsack Problem

Description:

* Items:

  * Flashlight: 1 kg, value 1
  * Water: 2 kg, value 2
  * Tent: 3 kg, value 3
* A backpack with a weight limit
* Choose items such that:

  * Total weight does not exceed the limit
  * Total value is maximized

Characteristics:

* Combination problem
* Optimization problem

Dynamic Programming helps by:

* Storing optimal results for each weight limit
* Avoiding recomputation when increasing capacity from 7 kg to 10 kg

#### 6.3. Real-world applications

* CPU resource allocation
* Job scheduling
* Cost optimization
* Memory optimization
* Path optimization

---

### 7. Steps to solve a Dynamic Programming problem

When facing a DP problem, follow these steps:

**Step 1: Identify the objective function**

* What is the goal?
* Maximize or minimize?
* Example: maximum value, minimum cost

**Step 2: Break into subproblems**

* How can the large problem be decomposed?
* Do the subproblems overlap?

**Step 3: Choose a storage method**

* Array
* Table
* Hash map

**Step 4: Build the solution**

* Recursion + memoization
* Or bottom-up table construction

---

### 8. Conclusion

* Dynamic Programming optimizes problems by:

  * Avoiding redundant calculations
  * Storing intermediate results
* Memoization is the core technique of DP
* DP is especially effective for:

  * Fibonacci
  * Knapsack
  * Optimization problems
* DP is based on:

  * Divide and Conquer
  * Recursion
  * Result storage

---

## GREEDY ALGORITHM

### 1. Core idea of the Greedy Algorithm

A Greedy Algorithm solves problems based on the principle:
**At each step, always choose the best option available at that moment.**

It does not consider the entire long-term picture, only the immediate benefit.

### 2. Relation to Occam’s Razor

Occam’s Razor is a philosophical principle stating:
**The simplest solution is often the best one.**

Greedy algorithms reflect this spirit:

* Simple
* Easy to implement
* Few computations
* Fast results

### 3. Greedy Algorithm vs Dynamic Programming

#### 3.1. Dynamic Programming (DP)

* Solves all subproblems
* Compares multiple possibilities
* Finds the global optimum
* Uses more time and memory

#### 3.2. Greedy Algorithm

* Chooses the best option at each step
* Does not examine all possibilities
* Local optimization
* Does not guarantee a global optimum

#### 3.3. Quick comparison

| Criterion              | Greedy             | Dynamic Programming |
| ---------------------- | ------------------ | ------------------- |
| Complexity             | Low                | High                |
| Ease of implementation | Easy               | Harder              |
| Speed                  | Fast               | Slower              |
| Accuracy               | Not always optimal | Always optimal      |
| Perspective            | Short-term         | Global              |

### 4. Example 1: CPU scheduling programs

Problem:

* A CPU has many programs to run
* Each program has a different execution time
* The CPU can only run a limited number of programs within a time constraint

#### 4.1. Dynamic Programming

* Examine all subsets of programs
* Choose the set such that:

  * Total time does not exceed the limit
  * Efficiency is maximized

→ Optimal result, but computationally expensive

#### 4.2. Greedy Algorithm

* Always choose the shortest-running program first
* Then choose the next shortest

Advantages:

* Very fast
* Easy to implement

Disadvantages:

* May miss better combinations

### 5. Example 2: Knapsack Problem

Greedy approach:

* Always choose the item with the highest value
* Put it into the backpack immediately
* Does not consider whether this choice prevents better combinations later

→ Fast, but not always optimal

### 6. Important example: Shortest path problem

Description:

* A map with nodes: A, B, C, D, E, F, G, H
* Edges have weights (travel costs)
* Find the shortest path from E to F

#### 6.1. Dynamic Programming (or Dijkstra’s algorithm)

* Compute the cost from E to all nodes
* Accumulate costs
* Compare all possible paths

→ Guarantees the shortest path

#### 6.2. Greedy Algorithm

Approach:

1. Start at E
2. Look at all outgoing paths from E
3. Choose the path with the smallest cost
4. Move to the new node
5. Repeat until reaching F

Example:

* From E, costs are: 5, 3, 2, 4, 12
* Choose 2 (go to D)
* From D, there is a path to F
* Total cost = 2 + 5 = 7

Result:

* Very fast solution
* No need to build tables or evaluate all paths

### 7. Drawbacks of Greedy Algorithms

Greedy algorithms are not always correct.

If the graph structure changes:

* For example, the path from G to F has a very low cost
* Greedy may choose the wrong initial direction
* Leading to a suboptimal result

This is the trade-off for simplicity.

### 8. When should Greedy Algorithms be used?

Use greedy algorithms when:

* Fast results are required
* The problem is simple
* The problem has the property that “choosing the locally best option is correct”

Examples:

* Job scheduling
* Choosing the shortest task first
* Some shortest-path problems
* Some scheduling problems

### 9. When should Greedy Algorithms NOT be used?

Do not use greedy algorithms when:

* The problem requires absolute optimality
* Current choices strongly affect future outcomes
* The problem has many complex combinations

→ In such cases, **Dynamic Programming** is the better choice.