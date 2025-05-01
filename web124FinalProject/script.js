//Create functions for each of the mathematical calculations
function Addition() {
    const input = document.getElementById("num").value;
    const userNumber = Number(input);
    let resultString = "";

    for (let i = 1; i <= 10; i++) {
      let sum = userNumber + i;
      resultString += userNumber + " + " + i + " = " + sum + "<br>";
    }

    document.getElementById("addition").innerHTML = resultString;
  }
  function Subtraction() {
    const input = document.getElementById("num").value;
    const userNumber = Number(input);
    let resultString = "";

    for (let i = 1; i <= 10; i++) {
      let difference = userNumber - i;
      resultString += userNumber + " - " + i + " = " + difference + "<br>";
    }

    document.getElementById("subtraction").innerHTML = resultString;
  }
  function Multiplication() {
    const input = document.getElementById("num").value;
    const userNumber = Number(input);
    let resultString = "";

    for (let i = 1; i <= 10; i++) {
      let product = userNumber * i;
      resultString += userNumber + " x " + i + " = " + product + "<br>";
    }

    document.getElementById("multiplication").innerHTML = resultString;
  }
  function Division() {
    const input = document.getElementById("num").value;
    const userNumber = Number(input);
    let resultString = "";

    for (let i = 1; i <= 10; i++) {
      let sum = (i / userNumber).toFixed(2) ;
      resultString += i + " / " + userNumber + " = " + sum + "<br>";
    }

    document.getElementById("division").innerHTML = resultString;
  }
  //create a function to run the 4 calculations functions
function Calculate(){
    Addition();
    Subtraction();
    Multiplication();
    Division();
}
//using the click function to run the function Calculate
  document.getElementById("calculate").addEventListener('click',Calculate);
 