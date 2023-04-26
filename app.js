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
    });
});
addOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "add";
    activeOperatorSpan.innerHTML = "+";
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
});
subtractOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "subtract";
    activeOperatorSpan.innerHTML = "-";
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
});
multiplyOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "multiply";
    activeOperatorSpan.innerHTML = "x";
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
});
divideOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "divide";
    activeOperatorSpan.innerHTML = "/";
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
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
}
clearButton.addEventListener("click", function () {
    resultSpan.innerHTML = "0";
    firstNumber = 0;
    secondNumber = 0;
    operatorActive = "none";
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
