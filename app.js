//SELECTORS
var display = document.querySelector("#display");
var clear = document.querySelector("#clear");

var numberButtons = document.querySelectorAll(".number");
var posneg = document.querySelector("#posneg");
var percent = document.querySelector("#percent");
var decimal = document.querySelector("#decimal");

var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var divide = document.querySelector("#divide");
var multiply = document.querySelector("#multiply");
var equals = document.querySelector("#equals");

//VARIABLES
var result = 0;
var val1 = "";
var val2 = "";
var operator = "";
var equation = "";
//NUMBERS

for (var i = 0; i < numberButtons.length; i++) {
  //retrieve textcontent
  numberButtons[i].addEventListener("click", function() {
    //display.textContent = "";
    display.innerHTML = `<h2>${display.textContent + this.textContent}</h2>`;
    if (operator === "") {
      val1 = display.textContent;
    } else {
      val2 = display.textContent;
    }
  });
}

//PLUS
plus.addEventListener("click", function() {
  //display.textContent = "";
  operator = "+";
});

//MINUS
minus.addEventListener("click", function() {
  //display.textContent = "";
  operator = "-";
});

//MULTIPLY
multiply.addEventListener("click", function() {
  //display.textContent = "";
  operator = "*";
});

//DIVIDE
divide.addEventListener("click", function() {
  //display.textContent = "";
  operator = "/";
});

//POSNEG
posneg.addEventListener("click", function() {
  if (Number(display.textContent) >= 0) {
    //empty string converts to 0 - cool
    if (operator === "") {
      val1 = "-" + val1;
      display.innerHTML = `<h2>${val1}</h2>`;
    } else {
      val2 = "-" + val2;
      display.innerHTML = `<h2>${val2}</h2>`;
    }
  } else {
    if (operator === "") {
      val1 = Math.abs(Number(val1)).toString();
      display.innerHTML = `<h2>${val1}</h2>`;
    } else {
      val2 = Math.abs(Number(val2)).toString();
      display.innerHTML = `<h2>${val2}</h2>`;
    }
  }
});

//PERCENT
percent.addEventListener("click", function() {
  val1 = (Number(val1) / 100).toString();
  display.innerHTML = `<h2>${val1}</h2>`;
});

//EQUALS
equals.addEventListener("click", function() {
  calculate();
  display.innerHTML = `<h2>${result}</h2>`;
});

//CLEAR
clear.addEventListener("click", function() {
  display.textContent = "";
  operator = "";
  val1 = "";
  val2 = "";
  equation = "";
  result = 0;
});

function calculate() {
  if (operator === "") {
    result = Number(val1);
  }
  if (operator === "+") {
    result = Number(val1) + Number(val2);
  }
  if (operator === "-") {
    result = Number(val1) - Number(val2);
  }
  if (operator === "*") {
    result = Number(val1) * Number(val2);
  }
  if (operator === "/") {
    result = Number(val1) / Number(val2);
  }
  val1 = result.toString();
  //this makes it work continuosly!!!
}
