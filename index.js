// 1.	Add an event listener to the button
// 2.	Assign the input value into a variable
// 3.	Create the function to convert the value form Fahrenheit into Celsius 
// 4.	Display result into HTML

document.getElementById("button").addEventListener("click", function() {
    // document.getElementById("demo").innerHTML = "Hello World";
    var input = parseInt(document.getElementById("userInput").value);
    let result = (5/9) * (input - 32);
    let result =
    var number = result;
    document.getElementById("convert").innerHTML = number;
    console.log(result);
  });
  
  ℃=(℉-32)/1.8
  K=((℉-32)/1.8)+273.15