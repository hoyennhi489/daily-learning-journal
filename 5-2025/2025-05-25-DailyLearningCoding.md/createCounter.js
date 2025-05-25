/*
Implement counter(label = 'default')
Write a function createCounter() that can be used as follows:

const counter = createCounter();

expect(counter.count()).toBe('default: 1');
expect(counter.count()).toBe('default: 2');
expect(counter.count()).toBe('default: 3');

expect(counter.count('easy')).toBe('easy: 1');
expect(counter.count('easy')).toBe('easy: 2');
expect(counter.count('easy')).toBe('easy: 3');

expect(counter.count('frontend')).toBe('frontend: 1');
expect(counter.count('frontend')).toBe('frontend: 2');
counter.resetCount('frontend');
expect(counter.count('frontend')).toBe('frontend: 1');

The createCounter function returns an object with 2 methods:
- count(label): a function that increments the count for the given label, defaulting to "default"
- resetCount(label): a function that resets the count for the given label, defaulting to "default"
*/

function createCounter() {
  // Object to store counts for each label
  const counts = {};

  return {
    // count function accepts a label, default is 'default'
    count(label = 'default') {
      // Initialize count for label if not already set
      if (!counts[label]) {
        counts[label] = 0;
      }
      // Increment count value by 1
      counts[label]++;
      // Return string in the format 'label: count'
      return `${label}: ${counts[label]}`;
    },

    // resetCount function accepts a label, default is 'default'
    resetCount(label = 'default') {
      // Reset count value to 0 for the given label
      counts[label] = 0;
    }
  };
}