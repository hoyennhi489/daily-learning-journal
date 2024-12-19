const checkButton = document.getElementById('check-btn');
const userInput = document.getElementById('user-input');
const clearButton = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const validUSPhoneNumber = /^1? ?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

checkButton.addEventListener('click', function() {
  const inputValue = userInput.value.trim();

  if (userInput.value.trim() === '') {
    alert('Please provide a phone number');
  }
  
  if (validUSPhoneNumber.test(inputValue)) {
    resultsDiv.textContent = `Valid US number: ${inputValue}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${inputValue}`;
  }
});

clearButton.addEventListener('click', function() {
  resultsDiv.innerHTML = '';
});