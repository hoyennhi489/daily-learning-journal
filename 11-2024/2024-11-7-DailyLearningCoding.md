
---

**Review JavaScript Fundamentals by Building a Gradebook App**

**Step 1:**
average = sum of all scores / total number of scores
Some function calls have been provided for you to test your code.
- You can use a loop to iterate through the `scores` array and add up all the scores.
- You can use the `length` property to get the total number of scores.
```javascript
function getAverage(scores) {
  let sum = 0;

  // Loop through the scores array and sum up all the scores
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  // Calculate the average by dividing the sum by the total number of scores
  let average = sum / scores.length;

  // Return the average result
  return average;
}

// Test the function with provided examples
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // Result: 71.7
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); // Result: 85.4
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100])); // Result: 92.4
```

**Step 2:**
```javascript
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
```
- **if**: Used to check the first condition. If this condition is true, the block of code inside the `if` will execute.
- **else if**: Used to check additional conditions if the first condition is false. You can have multiple `else if` statements to check different conditions.
- **else**: This is the final case that will run if all the previous `if` and `else if` conditions are false. You don't have to include `else`.

**Step 3:**
```javascript
function hasPassingGrade(score) {
  let grade = getGrade(score);
  if (grade !== "F") {
    return true;
  } else {
    return false;
  }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
```
- The `getGrade` function returns the letter grade corresponding to the input score.
- If the letter grade is not "F", the `hasPassingGrade` function returns true; otherwise, it returns false.
- **!==**: The inequality operator checks if two values are different both in value and type. If they are, it returns true; otherwise, false.

**Step 4:**
```javascript
function studentMsg(totalScores, studentScore) {
  // Calculate the class average
  let classAverage = getAverage(totalScores);
  
  // Get the student's letter grade
  let studentGrade = getGrade(studentScore);
  
  // Check if the student passed the course and build the message
  if (studentGrade !== "F") {
    return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You passed the course.";
  } else {
    return "Class average: " + classAverage + ". Your grade: " + studentGrade + ". You failed the course.";
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
```
- **getAverage(totalScores)** will return the class average from the `totalScores` list.
- **getGrade(studentScore)** will return the letter grade of the student based on their score.
- String concatenation (`+`) is used to build the message with the necessary information.
- The `if` statement checks if the student’s grade is "F" (failing), and if so, the message will say "You failed the course"; otherwise, it will say "You passed the course."

---
