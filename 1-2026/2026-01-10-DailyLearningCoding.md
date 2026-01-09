# STACK AND QUEUE

## 1. Introduction

In programming, **stack** and **queue** are two fundamental data structures used to store and manage data according to specific rules.

* **Stack**: data is processed following the *Last In – First Out* (LIFO) principle.
* **Queue**: data is processed following the *First In – First Out* (FIFO) principle.

Each programming language may implement these structures differently, but their core concepts and behaviors remain the same.

## 2. Stack

### 2.1. Concept of a Stack

A stack is an **abstract data type**, which means:

* It only defines how data is added and removed
* It does not necessarily have to be built into a programming language

A stack follows the **LIFO (Last In – First Out)** principle
→ The last element added will be the first one removed.

### 2.2. Real-life Example

Imagine a stack of plates:

* Each washed plate is placed on top of the stack
* When taking a plate to use, you always take the top one first

👉 The last plate placed is the first one taken.

### 2.3. Practical Applications of a Stack

A common example is **web browser history**:

* Each visited webpage is pushed onto the stack
* When clicking the “Back” button, the most recently visited page is opened first

### 2.4. Basic Stack Operations

| Operation    | Meaning                                    |
| ------------ | ------------------------------------------ |
| push         | Add an element to the top of the stack     |
| pop          | Remove the top element from the stack      |
| peek         | View the top element (without removing it) |
| count / size | Number of elements in the stack            |

### 2.5. Stack Example in JavaScript (Using an Array)

```javascript
let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // 30
console.log(stack);       // [10, 20]
```

➡️ The array is used as a **container adapter**, with its behavior restricted to function like a stack.

## 3. Queue

### 3.1. Concept of a Queue

A queue is a **linear data structure** that stores elements in the exact order they are added.

A queue follows the **FIFO (First In – First Out)** principle
→ The element added first will be removed first.

### 3.2. Real-life Example

Imagine a line of people waiting to buy tickets:

* People who arrive earlier are served first
* People who arrive later must wait

👉 The order is preserved from beginning to end.

### 3.3. Practical Applications of a Queue

* CPU scheduling
* Print job processing
* Handling requests in server systems

These tasks must be processed in the order they arrive.

### 3.4. Basic Queue Operations

| Operation | Meaning                                      |
| --------- | -------------------------------------------- |
| enqueue   | Add an element to the end of the queue       |
| dequeue   | Remove the element at the front of the queue |
| peek      | View the first element                       |
| size      | Number of elements in the queue              |

### 3.5. Simple Queue Example (Array-based Thinking)

```python
queue = []

queue.append("A")
queue.append("B")
queue.append("C")

print(queue.pop(0))  # A
print(queue)         # ['B', 'C']
```

➡️ The first element added is the first element removed.

## 4. Conclusion

Choosing the appropriate data structure has a significant impact on program performance and design.

* **Stack**: suitable when data needs to be processed in reverse order
* **Queue**: suitable when processing order must be preserved
* **Priority Queue**: suitable when priority is more important than arrival order

Understanding the differences between these data structures helps build more efficient and accurate programs.

---

# TREE IN DATA STRUCTURES

## 1. Introduction

Previously, we explored data structures such as lists, stacks, and queues. Another important data structure is the **tree**.

A tree is a powerful data structure that allows:

* Flexible data insertion
* Fast data searching
* Natural representation of relationships between data

Thanks to its hierarchical structure, trees help reduce processing time and code complexity when extracting information.

## 2. Concept of Trees in Data Structures

### 2.1. What Is a Tree?

A tree is a **non-linear data structure** that resembles a real-life tree.

A tree consists of:

* **Nodes** that store data
* **Edges** that represent connections between nodes

Each node can be:

* A **parent** node
* A **child** node

### 2.2. Illustrative Example

Imagine a family tree:

* Grandparents → parents → children
* Each person is a node
* Blood relationships are the edges

➡️ This is exactly a tree model in real life.

## 3. Important Tree Terminology

### 3.1. Root

* The highest node in the tree
* Has no parent

Example:
In a computer directory structure, the disk directory (C:) is the root.

### 3.2. Child and Parent

* A node below another is a child
* A node above another is a parent

Example:
The **Documents** folder is a child of **C:**.

### 3.3. Sibling

* Nodes that share the same parent
* Exist at the same level

Example:
**Documents** and **Pictures** are both children of **C:**.

### 3.4. Leaf Node

* A node with no children
* Usually located at the end of branches

Example:
A `.txt` file that contains no subfolders.

## 4. Path, Depth, and Height of a Tree

### 4.1. Path

A sequence of nodes connected from one node to another.

Example:
C: → Users → Admin → Desktop

### 4.2. Depth

* The number of edges from the root to a node

Example:
If **Desktop** is 3 edges away from the root → depth = 3.

### 4.3. Height

* The number of edges from the root to the deepest node

Example:
If the deepest branch has 5 edges → height = 5.

### 4.4. Size

* The total number of nodes in the tree

## 5. Common Types of Trees

### 5.1. Binary Tree

* Each node has at most 2 children
* Includes a left child and a right child

### 5.2. Binary Search Tree (BST)

Rules:

* Left child < parent
* Right child > parent

Illustrative example:
Data is inserted in the following order:
23 → 4 → 1 → 30 → 24 → 56

Structure:

```
        23
       /  \
      4    30
     /    /  \
    1    24  56
```

➡️ Searching is fast because the data is ordered.

### 5.3. Other Types of Trees

* B-tree
* B+ tree
* AVL tree
* Quad tree

Each type serves a specific purpose, such as databases, graphics, or tree balancing.

## 6. Tree Traversal

### 6.1. Depth-First Search (DFS)

* Traverses from top to bottom
* Explores an entire branch before backtracking

Example:
Like finishing one chapter of a book before moving to the next.

### 6.2. Breadth-First Search (BFS)

* Traverses level by level
* Visits all nodes at the same level first

Example:
Like calling students’ names row by row in a classroom.

## 7. Practical Applications of Trees

Trees are widely used in practice:

* File systems
* Class hierarchies in Java
* Company organizational structures
* Application menus
* Syntax parsers in compilers

## 8. Advantages of Tree Data Structures

* Clearly represent hierarchical relationships
* Efficient searching and sorting
* Easy to extend
* Flexible data traversal
* Fast insertion and deletion

## 9. Conclusion

Trees are an important and powerful data structure, especially suitable for:

* Hierarchical data
* Parent–child relationships
* Fast and efficient searching

Understanding the structure and behavior of trees is a crucial foundation for technical interviews and advanced programming.

---

# Heap (Data Heap)

## 1. What Is a Heap?

A **heap** is a specialized data structure that has a tree-like form but behaves similarly to a **queue**, with one important difference: **each element has a priority**.

Each element in a heap has:

* A **key value**
* A **priority level** based on the key value

Heaps are commonly used when it is necessary to identify and process the **most important element** in the shortest possible time.

## 2. Min Heap and Max Heap

There are two main types of heaps:

* **Min Heap**
  The element with the smallest key is always located at the root.

* **Max Heap**
  The element with the largest key is always located at the root.

The only difference between these two types is **how priority is defined**. All other operating principles are essentially the same.

In this content, heaps are presented mainly in the form of a **min heap**. All concepts can be reversed to apply to a **max heap**.

## 3. Basic Heap Operations

A heap supports only a limited set of core operations in order to optimize performance.

### For a Min Heap:

* **insert**: add an element
* **find_min**: retrieve the smallest value (without removing it)
* **delete_min**: remove the smallest element

### For a Max Heap:

* **insert**
* **find_max**
* **delete_max**

Some implementations may also include additional operations such as:

* **decrease_key**: change the key value, thereby changing the element’s priority

These operations reflect real-world needs, where an element’s priority may change over time.

## 4. Heap Structure

A heap is typically implemented using a **binary tree** or an **array that simulates a binary tree**.

Key characteristics:

* The element with the highest priority is always at the root
* Child nodes always have larger values (for a min heap) or smaller values (for a max heap) than their parent node

Thanks to this structure:

* Retrieving the highest-priority element takes **O(1)** time
* Inserting or deleting an element takes **O(log n)** time

## 5. Why Heaps Do Not Support Arbitrary Deletion

Heaps do not support deleting arbitrary elements other than the highest-priority one.

Reasons:

* Removing an element from the middle would break the heap structure
* Rebuilding the heap would significantly reduce performance

Heaps are designed for a very specific purpose:

* Retrieve the most important element
* Then move on to the next most important element

If flexible deletion at many positions is required, a different data structure should be used instead of a heap.

## 6. How to Insert an Element into a Min Heap

The insertion process is performed using **propagation (heapify-up)**:

1. The new element is inserted at the last position
2. Compare it with its parent node
3. If it is smaller than the parent, swap their positions
4. Repeat until:

   * There is no parent with a larger value, or
   * The root is reached

The time complexity of this operation is **O(log n)**.

## 7. Practical Applications of Heaps

Because of their ability to prioritize elements, heaps are well suited for problems such as:

* CPU scheduling
* Network routing and packet processing
* Priority queue systems
* Task management based on importance
* Interview scheduling and urgency-based task handling

Heaps allow tasks to be processed automatically in priority order without needing to re-sort the entire dataset.

## 8. Conclusion

A heap is an important data structure that combines characteristics of trees and priority queues.

By:

* Limiting its functionality
* Focusing only on the most important element

Heaps achieve high performance and are especially suitable for scheduling and priority-based problems.

As with all data structures, whether or not to use a heap depends on the problem. A heap is only effective when used for its intended purpose.

---

# GRAPH

## 1. Why Do We Need Graphs?

When solving a problem in computer science, it is important to consider:

* What operations need to be performed on the data?
* Does the data have connections, links, or relationships?

Examples:

* City maps
* Web pages on the Internet
* Friend relationships on social networks
* Relationships between words in a language

→ These problems are not well suited for arrays, lists, or trees, but are ideal for **graphs**.

## 2. What Is a Graph?

A **graph** is a data structure consisting of:

* **Nodes (vertices)**: represent objects (cities, people, web pages, etc.)
* **Edges**: represent relationships or connections between nodes

Graphs allow:

* Storing minimal data
* While still enabling rich inference

Example:

* There is no need to store the distance between Chicago and Boston directly
* The distance can be inferred from edges and their weights

## 3. Weighted Graph and Unweighted Graph

* **Weighted graph**:
  Each edge has a value (weight), such as distance, cost, or time

* **Unweighted graph**:
  Edges only indicate whether a connection exists

In this lecture:

* If values exist between nodes → it is a **weighted graph**

## 4. Directed Graph and Undirected Graph

### Undirected Graph

* No arrows
* Bidirectional relationships
* No ordering

Examples:

* Two-way roads
* Friend relationships

### Directed Graph

* Has arrows
* One-way relationships

Examples:

* One-way streets
* Website A linking to website B

Comparison:

* Undirected graphs are like two-way roads
* Directed graphs are like one-way roads

## 5. Weakly Connected and Strongly Connected

Applied to directed graphs:

* **Weakly connected**:
  Only one-way connections exist
* **Strongly connected**:
  There are paths in both directions between nodes

## 6. Graph and Tree

* **Tree**:

  * Has a root node
  * Has parent–child relationships
  * Has a clear hierarchy

* **Graph**:

  * Has no fixed start or end point
  * Can contain cycles
  * Is more complex than a tree

→ A tree can be considered a simplified form of a graph.

## 7. Neighbor and Adjacent

* **Neighbors**:
  Two nodes directly connected to each other
* **Adjacent**:
  Two nodes that can be connected through another node

## 8. Graph Traversal

Graphs can be traversed similarly to trees in two main ways:

### Breadth-First Search (BFS)

* Traverses level by level
* Visits all nodes at the same level first
* Uses a **Queue (FIFO)**

Process:

1. Choose a starting node
2. Add neighbors to the queue
3. Process nodes sequentially

### Depth-First Search (DFS)

* Explores one branch deeply first
* Then backtracks to explore other branches
* Uses a **Stack (LIFO)**

Process:

1. Push neighbors onto the stack
2. Always process the most recently added node

## 9. Important Applications of Graphs

### Shortest Path

* Finds the shortest path from node A to node B
* Based on edge weights

Applications:

* Google Maps
* Internet packet routing

### Traveling Salesman Problem

* A person must visit multiple nodes
* Each node is visited exactly once
* The total cost is minimized

Applications:

* Delivery services
* Goods distribution
* Network resource optimization

## 10. Conclusion

A graph is a data structure that is:

* Flexible
* Able to store little information while enabling rich inference
* Suitable for data with complex relationships

The decision to use a graph depends on:

* The problem being solved
* The operations that need to be performed on the data

---

# HEAP AND GRAPH IN PROGRAMMING LANGUAGES

## 1. Introduction

In this lesson, two important **non-linear data structures** are discussed: **graphs** and **heaps**.

* **Graphs** allow data to be stored in a way that clearly represents relationships between elements.
* **Heaps** are a specialized form of graphs in which the element at the **root** is given special priority (either the largest or the smallest).

Both structures are widely used in optimization problems, network analysis, and complex data processing.

## 2. Basic Graph Terminology

A **graph** consists of:

* **Nodes (Vertices)**: where data is stored
* **Edges**: connections between two nodes

Characteristics:

* Unlike trees, nodes in a graph are not required to all be connected.
* An edge may carry a **weight**, representing the strength, cost, or distance of a relationship.

Graph classification:

* **Directed graph**: edges have direction, similar to one-way roads
* **Undirected graph**: edges have no direction, similar to two-way roads

## 3. NetworkX Library in Python

**NetworkX** is a third-party Python library used to:

* Model and analyze graphs
* Operate lightweight and be usable in most Python environments

NetworkX supports many types of graphs:

* Directed
* Undirected
* Cyclic
* Acyclic

In addition, NetworkX provides many graph algorithms, including:

### 3.1. Distance Metrics

* Compute distances between two nodes in a graph

### 3.2. Centrality

* Determine how important a node is compared to other nodes

### 3.3. Clique Detection

* A **clique** is a subset of nodes with strong internal connections and few external links.
* Commonly used for:

  * Social network analysis
  * Detecting potential customer groups
  * Analyzing user behavior

NetworkX can be combined with **matplotlib** to visualize graphs and analysis results.
This library is often used at the **back-end layer** to extract insights from data.

## 4. Heap

### 4.1. Concept

A **heap** is a special data structure:

* It can be considered a **graph with constraints**
* It is commonly implemented as a **binary tree**

Characteristics:

* Each node has at most two children
* The root element is:

  * The largest (Max Heap), or
  * The smallest (Min Heap)

### 4.2. Properties and Performance

* Time to access the root element: **O(1)**
* Time to insert an element: **O(log n)**
* Time to remove the root element: **O(log n)**

When:

* The root element is removed
* The next appropriate element is promoted to the root
* The heap automatically re-adjusts to maintain its properties

### 4.3. Heap Implementation in Programming Languages

* Some languages provide built-in heap implementations.
* Languages such as **Kotlin** or **JavaScript** do not have a default heap:

  * Heaps are often simulated using arrays (arrays / lists)
  * Index formulas are used to determine parent–child relationships

The efficiency of a heap depends on:

* The underlying data structure
* The specific implementation in each language

Therefore, it is important to understand how the target language handles heaps before using them in real-world applications.

## 5. Conclusion

* **Graphs** are flexible data structures composed of nodes and edges, enabling the inference of complex relationships from data.
* **Heaps** are a specialized form of graphs that focus on fast retrieval of the largest or smallest element.
* Both structures play a crucial role in modern algorithms and systems.

The choice between using a graph or a heap depends on:

* The problem being solved
* The types of queries and operations required on the data