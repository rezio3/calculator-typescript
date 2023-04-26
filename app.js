var numbers = document.querySelectorAll(".number");
var clearButton = document.querySelector("#clear");
var backspaceButton = document.querySelector("#backspace");
var resultSpan = document.getElementById("result-span");
var addOperator = document.querySelector("#operator-add");
var equalOperator = document.querySelector("#operator-equal");
var firstNumber = 0;
var secondNumber = 0;
var operatorActive = false;
var clearResult = false;
numbers.forEach(function (button) {
    button.addEventListener("click", function () {
        if (operatorActive) {
            if (clearResult) {
                clearResult = false;
                resultSpan.innerHTML = "";
                resultSpan.innerHTML += button.innerHTML;
            }
            else {
                resultSpan.innerHTML += button.innerHTML;
            }
        }
        else {
            if (resultSpan.textContent !== "0") {
                resultSpan.innerHTML += button.innerHTML;
            }
            else {
                resultSpan.innerHTML = button.innerHTML;
            }
        }
    });
});
addOperator.addEventListener("click", function () {
    firstNumber = +resultSpan.innerHTML;
    operatorActive = true;
    clearResult = true;
});
equalOperator.addEventListener("click", function () {
    if (operatorActive) {
        operatorActive = false;
        secondNumber = +resultSpan.innerHTML;
        var finalResult = firstNumber + secondNumber;
        resultSpan.innerHTML = finalResult.toString();
        firstNumber = +resultSpan.innerHTML;
        secondNumber = 0;
    }
});
clearButton.addEventListener("click", function () {
    resultSpan.innerHTML = "0";
});
backspaceButton.addEventListener("click", function () {
    if (resultSpan.textContent !== "0") {
        var newDisplayArr = resultSpan.innerHTML.split("");
        if (newDisplayArr.length > 1) {
            newDisplayArr.pop();
            var newDisplayString = newDisplayArr.join("");
            resultSpan.innerHTML = newDisplayString;
        }
        else {
            resultSpan.innerHTML = "0";
        }
    }
});
