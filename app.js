let button = document.querySelector('button');
button.addEventListener('click', convert);

let conversionFunction = {
    fahrenheit: {
        fahrenheit: (fahrenheit) => fahrenheit,
        celsius: (fahrenheit) => (((fahrenheit - 32) * 5) / 9).toFixed(2),
        kelvin: (fahrenheit) => (((fahrenheit - 32) * 5) / 9 + 273.15).toFixed(2),
        rankin: (fahrenheit) => (fahrenheit + 459.67).toFixed(2),
      },
      celsius: {
        fahrenheit: (celsius) => ((celsius * 9 /5) + 32).toFixed(2),
        celsius: (celsius) => celsius,
        kelvin: (celsius) => (celsius + 273.15).toFixed(2),
        rankin: (celsius) => ((celsius * 9/5) + 491.67).toFixed(2),
      },
      kelvin: {
        fahrenheit: (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(2),
        celsius: (kelvin) => (kelvin - 273.15).toFixed(2),
        kelvin:  (kelvin) => kelvin,
        rankin:  (kelvin) => (kelvin * 1.8).toFixed(2),
      },
      rankin: {
        fahrenheit: (rankin) => (rankin - 459.67).toFixed(2),
        celsius: (rankin) => ((rankin - 491.67) * 5/9).toFixed(2),
        kelvin: (rankin) => (rankin * 5/9).toFixed(2),
        rankin: (rankin) => rankin,
      },
};

function convert (){
    let convertFrom = (document.querySelector('#temperature').value).toLowerCase();
    console.log(convertFrom);
    let result = (conversionFunction[convertFrom]);
    let inputValue = parseFloat(document.querySelector('#inputValue').value);
    for (let prop in result){

       document.getElementById(prop).innerText = (result[prop](inputValue));

    }
}
