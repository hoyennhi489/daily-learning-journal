**JAVASCRIPT**

8. **String:**

* A string (also called a character string) is a sequence of characters.

8.1. **How to Declare**

* Using double quotes (")

```javascript
const name = "Nhi";
```

* Using single quotes (')

```javascript
const name = 'should use single quote';
```

* Using backticks (\`) – Template literals

```javascript
let name = "Nam";
let str3 = `Hello, ${name}`; // => "Hello, Nam"
```

-> You can insert variables or expressions directly into the string using the syntax `${...}`.

* Strings in JavaScript are immutable ⇒ you cannot directly modify a character inside a string.

```javascript
let str = "Hello";
str[0] = "Y";     // ❌ Cannot change
console.log(str); // => "Hello" (remains unchanged)
```

If you want to "change the string," you must create a new string:

```javascript
let str = "Hello";
str = "Y" + str.slice(1);  // => "Yello"
```

* `slice()` is a function used to cut part of a string (or an array), without altering the original string.

```javascript
string.slice(start, end)
```

•  start: The starting position (from 0).
•  end (optional): The ending position (excluding the character at this position).
•  If end is less than start → the result is an empty string.
•  `slice()` does not modify the original string.

8.2. **Primitive Wrapper Object: String**

* String is a "primitive wrapper object," meaning it's a wrapper object for the primitive data type string.
* When working with strings, JavaScript temporarily "wraps" the primitive string into a String object to allow calling methods like `.length`, `.toUpperCase()`, `.charAt()`, etc.
* Note:
  • string (lowercase) is the primitive data type.

```javascript
let str1 = "hello"; // This is a primitive string
console.log(typeof str1); // "string"
```

• String (uppercase) is the constructor function used to create string objects.

```javascript
let str2 = new String("hello"); // Create a String object
console.log(typeof str2); // "object"
```

\=> It’s not recommended to use `new String()` because it creates an object, not a primitive string, which can lead to bugs when comparing:

```javascript
let a = "hello";
let b = new String("hello");

console.log(a == b);  // true (value comparison)
console.log(a === b); // false (type comparison - different)
```

Best practice: Always use primitive strings (`let s = "abc";`) instead of `new String()`.

8.3. **Basic String Operations**

* Check the string length.

```javascript
let str = "Hello";
// .length returns the number of characters in the string
console.log(str.length); // 5
```

* Access characters in the string.

```javascript
let str = "Hello";
// Access the character at index 1 (second position)
console.log(str[1]); // 'e'
// Or use the charAt() method
console.log(str.charAt(1)); // 'e'
```

* Concatenate strings.

```javascript
let first = "Hello";
let second = "World";
// Use the + operator
let result = first + " " + second; // "Hello World"
// Use template literals (backticks and ${})
let result2 = `${first} ${second}`; // "Hello World"
```

* Change case to uppercase/lowercase.

```javascript
let str = "Hello";
// Convert to uppercase
console.log(str.toUpperCase()); // "HELLO"
// Convert to lowercase
console.log(str.toLowerCase()); // "hello"
```

* Slice the string (substring, slice).

```javascript
let str = "JavaScript";
// Get the substring from position 0 to 3 (not including 4)
console.log(str.substring(0, 4)); // "Java"
// Get the substring from position 4 to the end
console.log(str.slice(4)); // "Script"
```

* Search in the string.

```javascript
let str = "Hello world";
// Find the starting position of "world"
console.log(str.indexOf("world")); // 6
// Check if the string contains "Hello"
console.log(str.includes("Hello")); // true
```

* Replace parts of a string.

```javascript
let str = "I love cats";
// Replace "cats" with "dogs"
console.log(str.replace("cats", "dogs")); // "I love dogs"
```

* Split the string into an array.

```javascript
let str = "apple,banana,orange";
// Split the string into an array based on commas
let arr = str.split(","); // ["apple", "banana", "orange"]
console.log(arr);
```

* Remove leading/trailing whitespace from the string.

```javascript
let str = "   Hello world   ";
// .trim() removes leading and trailing whitespace
console.log(str.trim()); // "Hello world"
```

* Iterate over the string.

- Using a for loop:

```javascript
const name = 'Easy Frontend'; // Declare a string 'Easy Frontend'

for (let i = 0; i < name.length; i++) {
  // Loop from index 0 to name.length - 1 (i.e., from the first to the last character)
  console.log(name[i]); 
}
```

* Using a for...of loop:

```javascript
let str = "Hello"; 
// Declare the string str with the value "Hello"

for (let char of str) {
  // The for...of loop directly iterates over each character in the string
  console.log(char); 
}
```

* Using forEach() with split():
  The `split('')` method converts the string into an array of characters, and then you can use forEach() to iterate over the array.

```javascript
let str = "Hello"; 
// Declare the variable str with the string "Hello"

str.split('').forEach(char => {
  // str.split('') converts the string to an array of characters: ["H", "e", "l", "l", "o"]
  // forEach() iterates over each element (character)
  console.log(char); 
});
```

* Check for a substring.

```javascript
const name = 'Easy and Frontend'; 
// Declare the variable name as the string "Easy and Frontend"

// --- startsWith(): check if the string starts with a substring ---
name.startsWith('easy'); // false
// False because it is case-sensitive. "E" ≠ "e"

name.startsWith('Easy'); // true
// True because the string starts with "Easy"

name.startsWith('and'); // false
// False because "and" is not at the start of the string

// --- includes(): check if the string contains a substring ---
name.includes('Easy'); // true
// True because "Easy" is present in the string

name.includes('and'); // true
// True because "and" is in the middle of the string

name.includes('Frontend'); // true
// True because "Frontend" is at the end of the string

// --- endsWith(): check if the string ends with a substring ---
name.endsWith('Frontend'); // true
// True because the string ends with "Frontend"

name.endsWith('and'); // false
// False because "and" is not at the end of the string

name.endsWith('frontend'); // false
// False because it is case-sensitive. "F" ≠ "f"
```

8.4. **Ways to Extract a Substring**
8.4.1. **slice(start, end)**

```javascript
let str = "JavaScript"; 
// Declare the string str with the value "JavaScript"

let result = str.slice(4, 10); 
// Use the slice method to extract a substring starting from index 4 and ending before index 10
// Result is "Script" because "JavaScript" has a length of 10, starting from 4 ("S") to before 10 ("t")
```

* `start` is the starting index (from 0). It can be positive (from the beginning of the string) or negative (from the end of the string).
* `end` is the ending index, but excluding the character at this position.
* If there is no `end`, the method slices from `start` to the end of the string.

8.4.2. **substring(start, end)**

```javascript
let str = "JavaScript"; 
// Declare the string 'str' with the value "JavaScript"

let result = str.substring(4, 10); 
// Get the substring from index 4 to before index 10
// Result is "Script" because "S" starts at position 4, and ends just before the "t" at position 10
```

• Similar to `slice`, but does not accept negative indices.
• If `start > end`, JavaScript will swap them.

```javascript
str.substring(10, 4); // "Script" (automatically swaps 4 and 10)
str.substring(-3);    // treats as 0 → "JavaScript"
```