var numbers = document.querySelectorAll(".number");
var clearButton = document.querySelector("#clear");
var backspaceButton = document.querySelector("#backspace");
var resultSpan = document.getElementById("result-span");
var addOperator = document.querySelector("#operator-add");
var equalOperator = document.querySelector("#operator-equal");
var subtractOperator = document.querySelector("#operator-subtract");
var multiplyOperator = document.querySelector("#operator-multiply");
var divideOperator = document.querySelector("#operator-divide");
var activeOperatorSpan = document.querySelector("#active-operator");
var dot = document.querySelector("#dot");
var firstNumber = 0;
var secondNumber = 0;
var operatorActive = "none";
var clearSpan = false;
numbers.forEach(function (button) {
    button.addEventListener("click", function () {
        if (operatorActive !== "none") {
            if (clearSpan) {
                clearSpan = false;
                resultSpan.innerHTML = "";
                resultSpan.innerHTML += button.innerHTML;
            }
            else {
                if (resultSpan.innerHTML === "0") {
                    resultSpan.innerHTML = button.innerHTML;
                }
                else {
                    resultSpan.innerHTML += button.innerHTML;
                }
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
        checkIfResultTooLong();
    });
});
addOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "add";
    activeOperatorSpan.innerHTML = "+";
    useOperator();
});
subtractOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "subtract";
    activeOperatorSpan.innerHTML = "-";
    useOperator();
});
multiplyOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "multiply";
    activeOperatorSpan.innerHTML = "x";
    useOperator();
});
divideOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "divide";
    activeOperatorSpan.innerHTML = "/";
    useOperator();
});
function useOperator() {
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
}
dot.addEventListener("click", function () {
    if (resultSpan.innerHTML.indexOf(".") === -1) {
        resultSpan.innerHTML += ".";
    }
});
equalOperator.addEventListener("click", function () {
    equalsTo();
});
function equalsTo() {
    if (operatorActive !== "none") {
        var finalResult = 0;
        secondNumber = +resultSpan.innerHTML;
        switch (operatorActive) {
            case "add":
                finalResult = firstNumber + secondNumber;
                break;
            case "subtract":
                finalResult = firstNumber - secondNumber;
                break;
            case "multiply":
                finalResult = firstNumber * secondNumber;
                break;
            case "divide":
                finalResult = firstNumber / secondNumber;
                break;
        }
        operatorActive = "none";
        resultSpan.innerHTML = finalResult.toString();
        firstNumber = +resultSpan.innerHTML;
        secondNumber = 0;
        activeOperatorSpan.innerHTML = "";
    }
    checkIfResultTooLong();
}
function checkIfResultTooLong() {
    var resultLength = resultSpan.innerHTML.length;
    if (resultLength > 12) {
        var newDisplayArr = resultSpan.innerHTML.split("");
        for (var i = resultLength; i > 12; i--) {
            newDisplayArr.pop();
        }
        var newDisplayString = newDisplayArr.join("");
        resultSpan.innerHTML = newDisplayString;
    }
}
clearButton.addEventListener("click", function () {
    resultSpan.innerHTML = "0";
    firstNumber = 0;
    secondNumber = 0;
    operatorActive = "none";
    activeOperatorSpan.innerHTML = "";
    clearSpan = false;
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
