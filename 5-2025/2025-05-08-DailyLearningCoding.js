/* Exercise: Print numbers
   Array exercises
*/ 

// Print numbers from 1 to 10
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
  printNumbers();
  
  
  // Print even numbers [2, 4, 6, 8, 10]
  function printEvenNumbers() {
    for (let i = 2; i <= 10; i++) {
      if (i % 2 === 0) console.log(i);
    }
  }
  printEvenNumbers()
  
  function printEvenNumbers() {
    for (let i = 2; i <= 10; i += 2) {
      console.log(i);
    }
  }
  printEvenNumbers()
  
  
  // Print even numbers less than n
  function printEvenNumbersN() {
    let n = 15;
  
    for (let i = 2; i <= n; i += 2) {
      console.log(i);
    }
  }
  printEvenNumbersN();
  
  function printEvenNumbersN(n) {
    for (let i = 2; i <= n; i += 2) {
      console.log(i);
    }
  }
  printEvenNumbersN(15); // Call the function with n = 15
  
  function printEvenNumbersN(n) {
    for (let i = 1; i < n; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  printEvenNumbersN(15); // Call the function with n = 15
  
  
/* Exercise: Find max
   Write function to find the maximum
*/ 

  // Using Math.max and spread operator ...
  function findMax(arr) {
    if (arr.length === 0) return undefined;
  
    return Math.max(...arr);
  }
  console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
  
  
  // Using a for loop
  function findMax(arr) {
    if (arr.length === 0) return undefined;
  
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
  
  // Using forEach()
  function findMax(arr) {
    if (arr.length === 0) return undefined;
  
    let max = arr[0];
  
    arr.forEach(num => {
      if (num > max) {
        max = num;
      }
    });
    return max;
  }
  console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
  
  
  // Using reduce
  function findMax(arr) {
    if (arr.length === 0) return undefined;
  
    return arr.reduce((max, num) => {
      return num > max ? num : max;
      // If num > max, return num (i.e., num is greater than max)
      // Otherwise, return max (i.e., max is still greater than or equal to num)
    })
  }
  console.log(findMax([3, 7, 2, 9, 5])); // Output: 9
  

/* Exercise: Longest word
   Write a function to find the longest word in an array
*/
  
  // Using for...i
  function findLongestWord(arr) {
    if (arr.length === 0) return undefined;
  
    let longest = arr[0]; // Assume the first word is the longest
  
    for (i = 1; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i]; // Update the longest word if a longer word is found
      }
    }
    return longest;
  }
  console.log(findLongestWord(["apple", "banana", "cherry", "kiwi"])); // Output: "banana"
  
  // Using forEach()
  function findLongestWord(arr) {
    if (arr.length === 0) return undefined;
  
    let longest = arr[0]; // Assume the first word is the longest
  
    arr.forEach(word => {
      if (word.length > longest.length) {
        longest = word;
      }
    });
    return longest;
  }
  console.log(findLongestWord(["apple", "banana", "cherry", "kiwi"])); // Output: "banana"
  
  // Using reduce()
  function findLongestWord(arr) {
    if (arr.length === 0) return undefined;
  
    let longest = arr[0]; // Assume the first word is the longest
  
    return arr.reduce((longest, word) => {
      return word.length > longest.length ? word : longest
    })
  }
  console.log(findLongestWord(["apple", "banana", "cherry", "kiwi"])); // Output: "banana"