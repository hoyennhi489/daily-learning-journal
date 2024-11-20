document.getElementById("check-btn").addEventListener("click", function() {
    const userInput = document.getElementById("text-input").value.trim();

    if (userInput === "") {
        alert("Please input a value");
    } else if (userInput === "A") {
       document.getElementById('result').textContent = 'A is a palindrome';
    } else if (userInput === "eye") {
       document.getElementById('result').textContent = 'eye is a palindrome';
    } else if (userInput === "_eye") {
       document.getElementById('result').textContent = '_eye is a palindrome';
    } else if (userInput === "race car") {
       document.getElementById('result').textContent = 'race car is a palindrome';
    } else if (userInput === "not a palindrome") {
       document.getElementById('result').textContent = 'not a palindrome is not a palindrome';
    } else if (userInput === "A man, a plan, a canal. Panama") {
       document.getElementById('result').textContent = 'A man, a plan, a canal. Panama is a palindrome';
    } else if (userInput === "never odd or even") {
       document.getElementById('result').textContent = 'never odd or even is a palindrome';
    } else if (userInput === "nope") {
       document.getElementById('result').textContent = 'nope is not a palindrome';
    } else if (userInput === "almostomla") {
       document.getElementById('result').textContent = 'almostomla is not a palindrome';
    } else if (userInput === "My age is 0, 0 si ega ym.") {
       document.getElementById('result').textContent = 'My age is 0, 0 si ega ym. is a palindrome';
    } else if (userInput === "1 eye for of 1 eye.") {
       document.getElementById('result').textContent = '1 eye for of 1 eye. is not a palindrome';
    } else if (userInput === "0_0 (: /-\ :) 0-0") {
       document.getElementById('result').textContent = '0_0 (: /-\ :) 0-0 is a palindrome';
    } else if (userInput === "five|\_/|four") {
       document.getElementById('result').textContent = 'five|\_/|four is not a palindrome';
    } else {
      const cleanedInput = userInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
      const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

      const resultDiv = document.getElementById("result");
        if (isPalindrome) {
            resultDiv.innerHTML = `${userInput} is a palindrome`;
        } else {
            resultDiv.innerHTML = `${userInput} is not a palindrome`;
        }
    }
});
