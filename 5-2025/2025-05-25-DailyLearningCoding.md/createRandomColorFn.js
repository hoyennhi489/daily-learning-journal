/*
Random color but should be different from the previous color
Write a function createRandomColorFn(colorList) that takes a list of colors and returns a function to randomly select a color from colorList, with the condition that the newly selected color must not be the same as the color chosen immediately before.

If colorList:
- is not an array --> throw an error with the message 'colorList should be an array'
- is an empty array --> throw an error with the message 'colorList should not be empty'
- is an array with only one item --> throw an error with the message 'colorList should have more than one item'

Note: The error messages must be exactly as above, otherwise the unit tests will fail.

Hint: use throw new Error(message) to throw the errors as requested.

Example usage:

const colorList = ['red', 'green'];
const randomColor = createRandomColorFn(colorList);

const currentColor = randomColor();
const nextColor = randomColor();
*/

function createRandomColorFn(colorList) {
  // Check if colorList is an array
  if (!Array.isArray(colorList)) {
    throw new Error('colorList should be an array'); // If not an array, throw the required error
  }

  // Check if the array is empty
  if (colorList.length === 0) {
    throw new Error('colorList should not be empty'); // If empty, throw error
  }

  // Check if the array has fewer than 2 elements
  if (colorList.length === 1) {
    throw new Error('colorList should have more than one item'); // If only one item, throw error
  }

  // Variable to store the previously selected color
  let previousColor = null;

  // Inner function to randomly select a color
  return function randomColor() {
    let newColor;

    // Loop until a color different from the previous one is selected
    do {
      // Randomly pick a color from colorList
      const randomIndex = Math.floor(Math.random() * colorList.length);
      newColor = colorList[randomIndex];
    } while (newColor === previousColor);

    // Update previousColor for the next call
    previousColor = newColor;

    // Return the new color (always different from the previous one)
    return newColor;
  };
}