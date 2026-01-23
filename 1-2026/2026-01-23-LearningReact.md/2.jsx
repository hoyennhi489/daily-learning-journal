/*
Bài tập react:
1. Say Hello Function
Write a function that takes a name.
It returns "Hello, name!".

2. All Caps
Function takes a word.
Returns the word in ALL CAPS.

3. First Letter
Function takes a string.
Returns just the first letter.

4. Last Item
Function takes an array.
Returns the last item.

5. Array Length
Function takes an array.
Returns how many items are in it.

6. Add To End
Function takes an array and a value.
Returns the array with the value added to the end.

7. Remove First Item
Function takes an array.
Returns the array without the first item.

8. Repeat Word
Function takes a word.
Returns the word repeated 3 times.

9. Contains Item
Function takes an array and a value.
Returns true or false if the value is in the array.

10. Join Words
Function takes an array of words.
Returns them joined into one sentence.
*/

function App() {

  // 1. Take a name and return the string "Hello, name"
  function sayHello(name) {
    return "Hello, " + name;
  }

  // 2. Convert lowercase letters to UPPERCASE
  function allCaps(word) {
    return word.toUpperCase();
  }

  // 3. Get the first character of a string
  function firstLetter(string) {
    return string[0];
  }

  const fruits = ["apple", "banana", "orange"];

  // 4. Get the last item of an array
  // arr.length - 1 is the last index
  function lastItem(arr) {
    return arr[arr.length - 1];
  }

  // 5. Return the number of items in the array
  function arrayLength(arr) {
    return arr.length;
  }

  // 6. Add a value to the end of the array
  // Spread (...) is used to avoid changing the original array
  function addToEnd(arr, value) {
    return [...arr, value];
  }

  // 7. Remove the first item of the array
  // slice(1) gets elements starting from index 1
  function removeFirstItem(arr) {
    return arr.slice(1);
  }

  // 8. Repeat the word 3 times
  function repeatWord(word) {
    return word.repeat(3);
  }

  // 9. Check if the value exists in the array
  // Returns true or false
  function containsItem(arr, value) {
    return arr.includes(value);
  }

  // 10. Join words in an array into a sentence
  // " " is the space between words
  function joinWords(arr) {
    return arr.join(" ");
  }

  return (
    <div>
      <h1>{sayHello("Nhi")}</h1>
      <p>{allCaps("react")}</p>
      <p>{firstLetter("Hello")}</p>
      <p>{lastItem(fruits)}</p>
      <p>{arrayLength(fruits)}</p>
      <p>{addToEnd(fruits, "Mango").join(", ")}</p>
      <p>{removeFirstItem(fruits).join(", ")}</p>
      <p>{repeatWord("Hi")}</p>
      <p>{containsItem(fruits, "banana") ? "true" : "false"}</p>
      <p>{joinWords(["I", "love", "React"])}</p>
    </div>
  );
}

export default App;