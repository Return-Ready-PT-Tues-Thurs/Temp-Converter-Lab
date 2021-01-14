
function convertFToC(value) {
   let celsius = (5/9) * (value - 32);
   return celsius;
}

function convertCToF(value) {
   let fahrenheit  = celsius - (32/1.8);
   return fahrenheit;
}

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
   let input = document.getElementById("fahrenheit").value;
      const fToC = convertFToC(input);
      console.log(fToC);
      document.getElementById("returnValue").textContent = fToC;
      console.log(fToC);
});






























// document.getElementById('convert').onclick = tempConvert;
// document.getElementById('clear').onclick = clearForm;

// function tempConvert() {
    
//     var fahrenheit = document.getElementById("fahrenheit").value;
//     var celsius = document.getElementById("celsius").value;
  
//   if (fahrenheit != '') {
//         celsius = (parseFloat(fahrenheit) - 32) / 1.8;
//     } else {
//         fahrenheit = (parseFloat(celsius) * 1.8) + 32;
//     }
  


//     document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
//     document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
// }