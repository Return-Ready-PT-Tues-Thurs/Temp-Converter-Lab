const value = document.getElementsByClassName("fahrenheit");
console.log(value);

function convert(value) {
   let celsius = (5/9) * (value - 32);
   return celsius;
}

const myButton = document.getElementById("myButton");
console.log(myButton);
  myButton.addEventListener("click", () => {
        const fToC = convert(value);
        const p = document.createElement("p");
        p.innerHTML("fToC");
        p.appendChild("p");  
    });
