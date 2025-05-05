// Exercise 1: Create an object student with name is Easy Frontend and age is 18.

const student = {
    name: 'Easy Frontend',
    age: 18,
};
console.log(student.name);
console.log(student.age);


// Exercise 2: Check if an object is empty (means have no keys)

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));              // true
console.log(isEmpty({ name: "John" })); // false

// Exercise 3: Write a function calcAvgMark(marks) that returns the average mark

function calcAvgMark(marks) {
    const values = Object.values(marks);  // Get all values (marks) from the object
  
    if (values.length === 0) return 0;    // Check if there are no subjects
  
    const total = values.reduce((sum, mark) => sum + mark, 0); // Calculate total marks
    return total / values.length;         // Calculate average mark
}
  
const marks = { math: 10, english: 8, science: 9 };
console.log(calcAvgMark(marks));  // Output: 9

/* 
Exercise 4: Write a function to clone an object without using the spread operator
Write a function cloneObject(obj) to clone a given object obj, and return a new object with all keys of the original object.

Example:
const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);
 
console.log(studentA === studentB); // should be false
console.log(studentB.name); // Bob
console.log(studentB.math); // 9

Note: Do not use Object.assign() or spread operator
*/

function cloneObject(obj) {
    const newObj = {}; // Initialize an empty object to hold the clone

    for (let key in obj) { // Iterate through all properties in obj
        if (obj.hasOwnProperty(key)) { // Only copy own properties (not inherited)
            newObj[key] = obj[key]; // Assign value from obj to newObj
        }
    }

    return newObj; // Return the new object
}

/* 
Exercise 5: Check if two objects are equal
Write a function isEqual(obj1, obj2) that takes two objects and returns true if they have the same number of keys and the values of each key are also equal (using === for comparison), otherwise false.

Example:
console.log(isEqual({}, {})); // true
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' })); // false
console.log(isEqual({ name: 'Bob' }, { name: 'Bob' })); // true
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 })); // false
*/

// isEqual function performs a shallow comparison of two objects
function isEqual(obj1, obj2) {
    // Step 1: Compare the number of keys in both objects
    // If different, they are not equal
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
   
    // Step 2: Iterate through each key in obj1
    for (const key in obj1) {
      // Compare the value of the current key in both objects
      // If not equal, return false
      if (obj1[key] !== obj2[key]) return false;
    }
  
    // If all keys and values are the same, return true
    return true;
}