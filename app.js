var zero = document.getElementById("number0");
var one = document.getElementById("number1");
var two = document.getElementById("number2");
var three = document.getElementById("number3");
var four = document.getElementById("number4");
var five = document.getElementById("number5");
var six = document.getElementById("number6");
var seven = document.getElementById("number7");
var eight = document.getElementById("number8");
var nine = document.getElementById("number9");
var resultSpan = document.getElementById("result-span");
one.addEventListener("click", function () {
    if (resultSpan.innerHTML !== "0") {
        resultSpan.innerHTML += "1";
    }
    else {
        resultSpan.innerHTML = "1";
    }
});
