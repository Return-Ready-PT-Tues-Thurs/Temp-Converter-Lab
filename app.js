
let finalValue = document.querySelector('.result');
let button = document.querySelector('button');
button.addEventListener('click', toCelsius);

function toCelsius() {
let fahrenheit = parseFloat(document.querySelector('#inputValue').value);
    //store the value to a variable up to 2 decimal
    let result = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    //add result to the page
    finalValue.innerHTML = result;
} 