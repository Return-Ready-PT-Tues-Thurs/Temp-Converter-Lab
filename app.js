console.log('hello');
let finalValue = document.querySelector('.result');
let button = document.querySelector('button');
button.addEventListener('click', toCelsius);

function addItems(newNode){
    celsius.appendChild(newNode);
}

function toCelsius() 
{
//   var fTemp = fahrenh
let fahrenheit = parseFloat(document.querySelector('#inputValue').value);
    let result = (fahrenheit - 32) * 5 / 9;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
    finalValue.innerHTML = result;

} 