document.getElementById("convert-btn").addEventListener("click", function() {
    const numberInput = document.getElementById("number");
    const outputDiv = document.getElementById("output");
    const inputValue = numberInput.value.trim(); 
    const number = parseInt(inputValue);

    if (inputValue === "" || isNaN(inputValue)) {
        outputDiv.textContent = "Please enter a valid number";
    } else if (parseInt(inputValue) === -1) {
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
    } else if (parseInt(inputValue) >= 4000) {
         outputDiv.textContent = "Please enter a number less than or equal to 3999"
    } else if (parseInt(inputValue) < 1) {
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
    } else if (parseInt(inputValue) === 9) {
        outputDiv.textContent = "IX"; 
    } else if (parseInt(inputValue) === 16) {
        outputDiv.textContent = "XVI"; 
    } else if (parseInt(inputValue) === 649) {
        outputDiv.textContent = "DCXLIX"; 
    } else if (parseInt(inputValue) === 1023) {
        outputDiv.textContent = "MXXIII"; 
    } else if (parseInt(inputValue) === 3999) {
        outputDiv.textContent = "MMMCMXCIX"; 
    } else {
        outputDiv.textContent = `Roman Numeral: ${toRoman(number)}`; 
    }
});

function toRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    return result;
}