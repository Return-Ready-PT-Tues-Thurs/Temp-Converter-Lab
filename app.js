
let finalValue = document.querySelector('.result');
let button = document.querySelector('button');
button.addEventListener('click', toCelsius);

function toCelsius() {
let fahrenheit = parseFloat(document.querySelector('#inputValue').value);
    let result = (fahrenheit - 32) * 5 / 9;
    //add result to the page
    finalValue.innerHTML = result;
} 