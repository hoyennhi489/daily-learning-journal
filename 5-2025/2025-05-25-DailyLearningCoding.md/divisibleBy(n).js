/*
Curry function: divisibleBy(n)
Write a function divisibleBy(n) so that it can be used as shown below:

function divisibleBy(n) {
  // your code here
}

const isDivisibleByFive = divisibleBy(5);
isDivisibleByFive(5); // true
isDivisibleByFive(4); // false

const isDivisibleByTwo = divisibleBy(2);
isDivisibleByTwo(2); // true
isDivisibleByTwo(3); // false
*/

function divisibleBy(n) {
  return function(x) {
    return x % n === 0;
  };
}