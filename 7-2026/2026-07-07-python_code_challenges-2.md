# 1. Reading a File

To read the contents of a file in Python, use `open()` together with `with`.

## Syntax

```python
with open("filename.txt") as file_object:
    data = file_object.read()
```

## Explanation

* `open()` → opens the file.
* `with` → automatically closes the file after reading.
* `.read()` → reads the entire contents of the file.

## Example

Suppose `hello.txt` contains:

```text
Hello Python!
```

Read the file:

```python
with open("hello.txt") as file:
    content = file.read()

print(content)
```

## Output

```text
Hello Python!
```

## Example

Given the file `welcome.txt`.

Complete the following tasks:

1. Open `welcome.txt` using `with` and store the file object in the variable `text_file`.
2. Read the entire contents of the file and store them in the variable `text_data`.
3. Print `text_data`.

## Code

```python
with open("welcome.txt") as text_file:
    text_data = text_file.read()

print(text_data)
```

## Code Explanation

```python
with open("welcome.txt") as text_file:
```

Opens `welcome.txt` and stores the file object in `text_file`.

```python
text_data = text_file.read()
```

Reads the entire contents of the file and stores them in `text_data`.

```python
print(text_data)
```

Prints the file contents to the screen.

## Remember

* `open()` → opens a file.
* `with` → automatically closes the file after use.
* `.read()` → reads the entire file.
* This is the standard and safest way to read a file in Python.

---

# 2. Iterating Through Lines

If you want to read a file line by line instead of reading the entire file at once, use `.readlines()`.

## Syntax

```python
with open("filename.txt") as file_object:
    for line in file_object.readlines():
        print(line)
```

## Explanation

* `.readlines()` → reads the entire file and returns a list where each element is one line.
* `for` → loops through each line in the list.

## Example

Suppose `hello.txt` contains:

```text
Hello
Python
World
```

Read the file line by line:

```python
with open("hello.txt") as file:
    for line in file.readlines():
        print(line)
```

## Output

```text
Hello

Python

World
```

**Note:** Each line already contains a newline character (`\n`), so `print()` adds an extra blank line between lines.

## Example

Given the file `how_many_lines.txt`.

Complete the following tasks:

1. Open `how_many_lines.txt` using `with` and store the file object in the variable `lines_doc`.
2. Use a `for` loop to iterate through each line in `lines_doc.readlines()`.
3. Print each line.

## Code

```python
with open("how_many_lines.txt") as lines_doc:
    for line in lines_doc.readlines():
        print(line)
```

## Code Explanation

```python
with open("how_many_lines.txt") as lines_doc:
```

Opens the file and stores the file object in `lines_doc`.

```python
lines_doc.readlines()
```

Reads all the lines in the file and returns a list.

Example:

```python
[
    "Hello\n",
    "Python\n",
    "World\n"
]
```

```python
for line in lines_doc.readlines():
```

Loops through each line in the list.

```python
print(line)
```

Prints each line.

## Remember

* `.read()` → reads the entire file into one string.
* `.readlines()` → reads the entire file into a list, where each element is one line.
* A `for` loop is commonly used to process each line.

---

# 3. Reading a Line

If you only want to read one line from a file, use `.readline()`.

## Syntax

```python
with open("filename.txt") as file_object:
    line = file_object.readline()
```

## Explanation

* `.readline()` → reads the first line of the file.
* Calling `.readline()` again reads the next line.
* After reaching the end of the file, `.readline()` returns an empty string (`""`).

## Example

Suppose `hello.txt` contains:

```text
Hello
Python
World
```

Read the file one line at a time:

```python
with open("hello.txt") as file:
    line1 = file.readline()
    line2 = file.readline()

print(line1)
print(line2)
```

## Output

```text
Hello

Python
```

Each call to `.readline()` reads the next line.

## Example

Given the file `just_the_first.txt`.

Complete the following tasks:

1. Open `just_the_first.txt` using `with` and store the file object in the variable `first_line_doc`.
2. Read the first line and store it in the variable `first_line`.
3. Print `first_line`.

## Code

```python
with open("just_the_first.txt") as first_line_doc:
    first_line = first_line_doc.readline()

print(first_line)
```

## Code Explanation

```python
with open("just_the_first.txt") as first_line_doc:
```

Opens the file and stores the file object in `first_line_doc`.

```python
first_line = first_line_doc.readline()
```

Reads the first line and stores it in `first_line`.

```python
print(first_line)
```

Prints the first line.

## Remember

* `.read()` → reads the entire file into one string.
* `.readlines()` → reads the entire file into a list of lines.
* `.readline()` → reads one line each time it is called.
* After reaching the end of the file, `.readline()` returns `""` (an empty string).

---

# 4. Writing a File

To write data to a file, use `open()` with `"w"` (write mode).

## Syntax

```python
with open("filename.txt", "w") as file_object:
    file_object.write("Content")
```

## Explanation

* `"w"` = write mode.
* If the file does not exist, Python creates a new file.
* If the file already exists, all existing contents are deleted and replaced with the new content.

## Example

```python
with open("hello.txt", "w") as file:
    file.write("Hello Python!")
```

After running the program, `hello.txt` contains:

```text
Hello Python!
```

## Example

Create the file `bad_bands.txt`.

Complete the following tasks:

1. Open `bad_bands.txt` in write mode (`"w"`) and store the file object in the variable `bad_bands_doc`.
2. Use `.write()` to write the name of a band you dislike into the file.

## Code

```python
with open("bad_bands.txt", "w") as bad_bands_doc:
    bad_bands_doc.write("Nickelback")
```

Codecademy only requires writing any band name. You can replace `"Nickelback"` with another band name.

## Code Explanation

```python
with open("bad_bands.txt", "w") as bad_bands_doc:
```

Opens the file in write mode (`"w"`). If the file does not exist, it is created. If it already exists, its previous contents are erased.

```python
bad_bands_doc.write("Nickelback")
```

Writes the string `"Nickelback"` to the file.

## Remember

* `"r"` → Read a file.
* `"w"` → Write to a file (overwrites existing contents).
* `.write("...")` → writes content to the file.
* `with open(...)` automatically closes the file after writing.

---

# 5. Appending to a File

When you open a file using `"w"` (write mode), its existing contents are erased and replaced.

If you only want to add content to the end of the file without losing the existing data, use `"a"` (append mode).

## Syntax

```python
with open("filename.txt", "a") as file:
    file.write("Content to add")
```

If you want to start the new content on a new line, use the newline character `\n`.

```python
file.write("\nHello")
```

## Example

Suppose `dogs.txt` currently contains:

```text
Lucky
Max
```

Run the program:

```python
with open("dogs.txt", "a") as file:
    file.write("\nBuddy")
```

After running, the file becomes:

```text
Lucky
Max
Buddy
```

If you run the program again:

```text
Lucky
Max
Buddy
Buddy
```

This happens because append mode always adds content to the end of the file.

## Exercise

### 1. Open `cool_dogs.txt` in append mode and store the file object in the variable `cool_dogs_file`.

```python
with open("cool_dogs.txt", "a") as cool_dogs_file:
```

**Brief explanation:**

* `"a"` = append mode.
* `cool_dogs_file` is the variable representing the file.

### 2. Add the string `"Air Buddy\n"` to the end of the file.

```python
with open("cool_dogs.txt", "a") as cool_dogs_file:
    cool_dogs_file.write("Air Buddy\n")
```

**Brief explanation:**

* `.write()` is used to write to the file.
* `\n` adds a newline after `"Air Buddy"`.

## Complete Code

```python
with open("cool_dogs.txt", "a") as cool_dogs_file:
    cool_dogs_file.write("Air Buddy\n")
```

## Output

If the file originally contains:

```text
Scooby Doo
Bolt
```

After running the program:

```text
Scooby Doo
Bolt
Air Buddy
```

## Remember

* `"r"` → Read a file.
* `"w"` → Overwrite a file (erases existing contents).
* `"a"` → Append to the end of a file (keeps existing contents).

---

# 6. What's With `with`?

Previously, we always opened files like this:

```python
with open(...) as file:
```

The reason is that `with` automatically closes the file after you're done using it.

Without `with`, you must close the file yourself using `.close()`.

## The old way

```python
file = open("hello.txt")

content = file.read()

file.close()
```

If you forget to call `file.close()`, the file remains open, which may waste system resources or interfere with other programs.

## The modern way

```python
with open("hello.txt") as file:
    content = file.read()
```

When the program exits the `with` block, Python automatically calls:

```python
file.close()
```

You don't need to write it yourself.

## Exercise

Original code:

```python
close_this_file = open("fun_file.txt")

setup = close_this_file.readline()
punchline = close_this_file.readline()

print(setup)
```

Rewrite it using `with`.

## Code

```python
with open("fun_file.txt") as close_this_file:
    setup = close_this_file.readline()
    punchline = close_this_file.readline()

    print(setup)
```

## Code Explanation

```python
with open("fun_file.txt") as close_this_file:
```

* Opens `fun_file.txt`.
* Stores the file object in the variable `close_this_file`.
* Python automatically closes the file when the `with` block ends.

```python
setup = close_this_file.readline()
```

Reads the first line.

```python
punchline = close_this_file.readline()
```

Reads the second line.

```python
print(setup)
```

Prints the first line.

## Remember

| Method        | Need `.close()`? |
| ------------- | ---------------- |
| `open()`      | Yes              |
| `with open()` | No               |

Always prefer:

```python
with open("file.txt") as file:
    ...
```

because it is shorter, safer, and the standard way to work with files in Python.

---

# 7. What Is a CSV File?

CSV stands for **Comma-Separated Values**.

A CSV file is a text file (`.csv`) used to store tabular data.

For example, this table in Excel:

| Name  | Age | City   |
| ----- | --- | ------ |
| Alice | 20  | London |
| Bob   | 25  | Paris  |

When saved as a CSV file, it becomes:

```text
Name,Age,City
Alice,20,London
Bob,25,Paris
```

* Each line is a **record**.
* Columns are separated by commas (`,`).
* The first line usually contains the column names (the **header**).

## Example

Suppose `students.csv` contains:

```text
Name,Age
Alice,20
Bob,25
```

Read the file:

```python
with open("students.csv") as file:
    data = file.read()

print(data)
```

## Output

```text
Name,Age
Alice,20
Bob,25
```

At this point, Python simply treats the CSV file as a text string. It does **not** automatically split it into rows and columns.

## Exercise

### 1. Open `logger.csv` using `with` and store the file object in the variable `log_csv_file`.

```python
with open("logger.csv") as log_csv_file:
```

**Brief explanation:**

Opens the file `logger.csv`.

### 2. Read the entire file and print its contents.

```python
with open("logger.csv") as log_csv_file:
    print(log_csv_file.read())
```

**Brief explanation:**

* `.read()` reads the entire file.
* `print()` displays its contents.

## Complete Code

```python
with open("logger.csv") as log_csv_file:
    print(log_csv_file.read())
```

## Remember

* A `.csv` file is still a text file.
* Columns are separated by commas.
* `.read()` reads the file as one string and does not parse it into a table.
* To work with individual columns in a CSV file, we will use the `csv` module in the following lessons.

---

# 8. Reading a CSV File

In the previous lesson, we used `.read()` to read a CSV file.

```python
with open("users.csv") as file:
    print(file.read())
```

Python simply reads the entire file as a string.

If you want to work with individual columns (Name, Email, Age, etc.), use the `csv` module and `csv.DictReader()`.

## What is `csv.DictReader()`?

`DictReader()` reads each row in a CSV file and converts it into a dictionary.

For example, suppose `users.csv` contains:

```text
Name,Age,City
Alice,20,London
Bob,25,Paris
```

After using `DictReader()`, each row becomes:

```python
{"Name": "Alice", "Age": "20", "City": "London"}
```

The next row becomes:

```python
{"Name": "Bob", "Age": "25", "City": "Paris"}
```

You can access the data using the column names:

```python
row["Name"]
row["Age"]
row["City"]
```

## Example

```python
import csv

with open("users.csv", newline="") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row["Name"])
```

## Output

```text
Alice
Bob
```

## Exercise

### 1. Import the `csv` module.

```python
import csv
```

**Brief explanation:**

Imports the `csv` library for reading CSV files.

### 2. Open `cool_csv.csv` and store the file object in the variable `cool_csv_file`.

```python
with open("cool_csv.csv", newline="") as cool_csv_file:
```

**Brief explanation:**

* Opens the CSV file.
* `newline=""` helps Python read CSV files correctly.

### 3. Use `csv.DictReader()` to read the file and store it in the variable `cool_csv_dict`.

```python
cool_csv_dict = csv.DictReader(cool_csv_file)
```

**Brief explanation:**

Each row in the file becomes a dictionary.

### 4. Print the value in the `"Cool Fact"` column for every row.

```python
for row in cool_csv_dict:
    print(row["Cool Fact"])
```

**Brief explanation:**

* `row` is a dictionary.
* `row["Cool Fact"]` gets the value in the **Cool Fact** column.

## Complete Code

```python
import csv

with open("cool_csv.csv", newline="") as cool_csv_file:
    cool_csv_dict = csv.DictReader(cool_csv_file)

    for row in cool_csv_dict:
        print(row["Cool Fact"])
```

## Remember

* `import csv` → imports the CSV library.
* `csv.DictReader(file)` → converts each row into a dictionary.
* The first row (header) provides the dictionary keys.
* Access data using:

```python
row["Column Name"]
```

Examples:

```python
row["Name"]
row["Age"]
row["Email"]
row["Cool Fact"]
```

---

# 9. Reading Different Types of CSV Files

Normally, CSV files use commas (`,`) to separate values.

Example:

```text
Name,Age,City
Alice,20,London
Bob,25,Paris
```

However, CSV files do not have to use commas.

They may also use:

* `,` (comma)
* `;` (semicolon)
* `@`
* `|`
* Tab (`\t`)

In these cases, you must specify the **delimiter**.

## Example 1: Using `;`

File:

```text
Name;Age;City
Alice;20;London
Bob;25;Paris
```

Read the file:

```python
import csv

with open("people.csv", newline="") as file:
    reader = csv.DictReader(file, delimiter=";")

    for row in reader:
        print(row["Name"])
```

## Output

```text
Alice
Bob
```

## Example 2: Using `@`

File:

```text
Name@Age
Alice@20
Bob@25
```

Read the file:

```python
import csv

with open("people.csv", newline="") as file:
    reader = csv.DictReader(file, delimiter="@")
```

## Exercise

### 1. Import the `csv` module.

```python
import csv
```

**Brief explanation:**

Imports the library for working with CSV files.

### 2. Open `books.csv` and store the file object in the variable `books_csv`.

```python
with open("books.csv", newline="") as books_csv:
```

**Brief explanation:**

Opens the CSV file.

### 3. Create a `DictReader` using `@` as the delimiter and store it in `books_reader`.

```python
books_reader = csv.DictReader(books_csv, delimiter="@")
```

**Brief explanation:**

`delimiter="@"` tells Python that the columns are separated by `@`.

### 4. Create a list named `isbn_list`, iterate through `books_reader`, and add each book's ISBN to the list.

```python
isbn_list = []

for row in books_reader:
    isbn_list.append(row["ISBN"])
```

**Brief explanation:**

* Creates an empty list.
* `row["ISBN"]` gets the value in the **ISBN** column.
* `.append()` adds it to the list.

## Complete Code

```python
import csv

with open("books.csv", newline="") as books_csv:
    books_reader = csv.DictReader(books_csv, delimiter="@")

    isbn_list = []

    for row in books_reader:
        isbn_list.append(row["ISBN"])
```

## Remember

* CSV files can use different delimiters.
* Use `delimiter` to specify the separator.

```python
delimiter=","
delimiter=";"
delimiter="@"
delimiter="|"
```

Read a CSV file:

```python
reader = csv.DictReader(file, delimiter="@")
```

Access data by column name:

```python
row["ISBN"]
row["Name"]
row["Price"]
```

Add data to a list:

```python
my_list.append(value)
```

---

# 10. Writing a CSV File

Besides reading CSV files, Python can also create and write data to them.

We use:

* `csv.DictWriter()` → writes dictionaries to a CSV file.
* `.writeheader()` → writes the column names.
* `.writerow()` → writes one row of data.

## Example

Suppose we have the following data:

```python
students = [
    {"name": "Alice", "age": 20},
    {"name": "Bob", "age": 21}
]
```

Write it to a CSV file:

```python
import csv

with open("students.csv", "w", newline="") as file:
    fields = ["name", "age"]

    writer = csv.DictWriter(file, fieldnames=fields)

    writer.writeheader()

    for student in students:
        writer.writerow(student)
```

The file `students.csv` will contain:

```text
name,age
Alice,20
Bob,21
```

## Exercise

### 1. Import the `csv` module.

```python
import csv
```

**Brief explanation:**

Imports the library for working with CSV files.

### 2. Open `logger.csv` in write mode (`"w"`) and store the file object in `logger_csv`.

```python
with open("logger.csv", "w", newline="") as logger_csv:
```

**Brief explanation:**

* `"w"` opens the file for writing (overwriting existing contents).
* `newline=""` prevents blank lines in the CSV file.

### 3. Create a `DictWriter` named `log_writer`.

```python
log_writer = csv.DictWriter(logger_csv, fieldnames=fields)
```

**Brief explanation:**

* `logger_csv` is the output file.
* `fieldnames=fields` specifies the column names.

### 4. Write the header row.

```python
log_writer.writeheader()
```

**Brief explanation:**

Writes the first row containing the column names.

Example:

```text
time,address,limit
```

### 5. Write each dictionary in `access_log` to the CSV file.

```python
for item in access_log:
    log_writer.writerow(item)
```

**Brief explanation:**

* Loops through each dictionary.
* `.writerow()` writes one row to the CSV file.

## Complete Code

```python
import csv

with open("logger.csv", "w", newline="") as logger_csv:

    log_writer = csv.DictWriter(logger_csv, fieldnames=fields)

    log_writer.writeheader()

    for item in access_log:
        log_writer.writerow(item)
```

## Remember

### Create a `DictWriter`

```python
writer = csv.DictWriter(file, fieldnames=fields)
```

### Write the header

```python
writer.writeheader()
```

### Write one row

```python
writer.writerow(data)
```

### Write multiple rows

```python
for item in data:
    writer.writerow(item)
```

## CSV Writing Workflow

```text
Import csv
      ↓
Open the file ("w")
      ↓
Create a DictWriter
      ↓
writeheader()
      ↓
writerow() for each row
```

## Difference Between `DictReader` and `DictWriter`

| Command            | Purpose                            |
| ------------------ | ---------------------------------- |
| `csv.DictReader()` | Reads a CSV file into dictionaries |
| `csv.DictWriter()` | Writes dictionaries to a CSV file  |
| `.writeheader()`   | Writes the column names            |
| `.writerow()`      | Writes one row of data             |

---

# 11. Reading a JSON File

JSON (**JavaScript Object Notation**) is a very common data storage format.

JSON looks very similar to a Python dictionary.

For example, suppose `message.json` contains:

```json
{
    "name": "Alice",
    "age": 20,
    "text": "Hello!"
}
```

To read a JSON file in Python, use the `json` module.

## Example

```python
import json

with open("message.json") as file:
    data = json.load(file)

print(data["name"])
```

## Output

```text
Alice
```

`json.load()` converts the data in a JSON file into a Python dictionary.

## Exercise

### 1. Import the `json` module.

```python
import json
```

**Brief explanation:**

Imports the library for reading and writing JSON files.

### 2. Open `message.json` and store the file object in the variable `message_json`.

```python
with open("message.json") as message_json:
```

**Brief explanation:**

Opens the file in read mode (the default mode is `"r"`).

### 3. Read the JSON file and store it in the variable `message`.

```python
message = json.load(message_json)
```

**Brief explanation:**

`json.load()` converts the JSON data into a Python dictionary.

Example:

```python
{
    "text": "Hello!",
    "sender": "Alice"
}
```

### 4. Print the value of the `"text"` key.

```python
print(message["text"])
```

**Brief explanation:**

Gets the value associated with the `"text"` key in the dictionary.

## Complete Code

```python
import json

with open("message.json") as message_json:
    message = json.load(message_json)

print(message["text"])
```

## Remember

### Import

```python
import json
```

### Read a JSON file

```python
with open("data.json") as file:
    data = json.load(file)
```

### Access the data

```python
print(data["key"])
```

## JSON Reading Workflow

```text
Import json
      ↓
Open the file
      ↓
json.load(file)
      ↓
Get a dictionary
      ↓
Access values using keys
```

## Comparison of File Reading Methods

| File Type | Library | Reading Function   |
| --------- | ------- | ------------------ |
| TXT       | None    | `.read()`          |
| CSV       | `csv`   | `csv.DictReader()` |
| JSON      | `json`  | `json.load()`      |

---

# 12. Writing a JSON File

Besides reading JSON files, Python can also write data to a JSON file.

To write JSON, use:

```python
json.dump(data, file)
```

* `data` → Python data (dictionary, list, etc.)
* `file` → the file to write to

## Example

```python
import json

student = {
    "name": "Alice",
    "age": 20
}

with open("student.json", "w") as file:
    json.dump(student, file)
```

After running the program, `student.json` contains:

```json
{
    "name": "Alice",
    "age": 20
}
```

## Exercise

### 1. Import the `json` module.

```python
import json
```

**Brief explanation:**

Imports the library for working with JSON files.

### 2. Open `data.json` in write mode and store the file object in `data_json`.

```python
with open("data.json", "w") as data_json:
```

**Brief explanation:**

* `"w"` = write mode.
* If the file does not exist, Python creates it.
* If the file already exists, its contents are overwritten.

### 3. Write `data_payload` to the JSON file.

```python
json.dump(data_payload, data_json)
```

**Brief explanation:**

`json.dump()` converts Python data into JSON format and writes it to the file.

## Complete Code

```python
import json

with open("data.json", "w") as data_json:
    json.dump(data_payload, data_json)
```

## Remember

### Import

```python
import json
```

### Open a file for writing

```python
with open("data.json", "w") as file:
```

### Write data

```python
json.dump(data, file)
```

## JSON Writing Workflow

```text
Import json
      ↓
Open the file ("w")
      ↓
json.dump(data, file)
      ↓
Create a JSON file
```

## Difference Between `json.load()` and `json.dump()`

| Function                | Purpose       |
| ----------------------- | ------------- |
| `json.load(file)`       | JSON → Python |
| `json.dump(data, file)` | Python → JSON |

## Memory Tip

* **load** → Load data **from** a file.
* **dump** → Dump data **into** a file.

---

# Summary Table: Learn Python – Files

| Lesson                          | Purpose                                         | Syntax                                | Remember                                      |
| ------------------------------- | ----------------------------------------------- | ------------------------------------- | --------------------------------------------- |
| **1. Reading a File**           | Read the entire file                            | `file.read()`                         | Returns one string containing the entire file |
| **2. Iterating Through Lines**  | Read each line with a loop                      | `for line in file.readlines():`       | `.readlines()` returns a list of lines        |
| **3. Reading a Line**           | Read one line at a time                         | `file.readline()`                     | Each call reads only one line                 |
| **4. Writing a File**           | Create a new file or overwrite an existing file | `open("file.txt", "w")`               | Existing contents are erased                  |
| **5. Appending to a File**      | Add data to the end of a file                   | `open("file.txt", "a")`               | Keeps the existing contents                   |
| **6. `with` Statement**         | Automatically closes the file                   | `with open(...) as file:`             | No need to call `file.close()`                |
| **7. CSV Files**                | Store tabular data                              | `.csv`                                | Columns are usually separated by commas       |
| **8. Reading CSV**              | Read CSV into dictionaries                      | `csv.DictReader(file)`                | Each row becomes a dictionary                 |
| **9. Different CSV Delimiters** | Read CSV files with other separators            | `csv.DictReader(file, delimiter=';')` | Delimiters can be `;`, `@`, `\t`, etc.        |
| **10. Writing CSV**             | Write dictionaries to a CSV file                | `csv.DictWriter()`                    | Use `writeheader()` before `writerow()`       |
| **11. Reading JSON**            | Read a JSON file                                | `json.load(file)`                     | JSON → Python dictionary/list                 |
| **12. Writing JSON**            | Write Python data as JSON                       | `json.dump(data, file)`               | Python dictionary/list → JSON                 |

---

# File Open Modes

| Mode  | Meaning           |
| ----- | ----------------- |
| `"r"` | Read (default)    |
| `"w"` | Write (overwrite) |
| `"a"` | Append            |

---

# File Reading Methods

| Method         | Result                      |
| -------------- | --------------------------- |
| `.read()`      | Reads the entire file       |
| `.readline()`  | Reads one line              |
| `.readlines()` | Reads all lines into a list |

---

# Libraries to Remember

| Library | Used For                       |
| ------- | ------------------------------ |
| `csv`   | Reading and writing CSV files  |
| `json`  | Reading and writing JSON files |

---

# Commonly Confused Operations

| If You Want To...    | Use                       |
| -------------------- | ------------------------- |
| Read the entire file | `.read()`                 |
| Read one line        | `.readline()`             |
| Read multiple lines  | `.readlines()`            |
| Overwrite a file     | `"w"`                     |
| Append to a file     | `"a"`                     |
| Read a CSV file      | `csv.DictReader()`        |
| Write a CSV file     | `csv.DictWriter()`        |
| Read a JSON file     | `json.load()`             |
| Write a JSON file    | `json.dump()`             |
| Open a file safely   | `with open(...) as file:` |
