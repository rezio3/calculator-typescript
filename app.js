var numbers = document.querySelectorAll(".number");
var clearButton = document.querySelector("#clear");
var backspaceButton = document.querySelector("#backspace");
var resultSpan = document.getElementById("result-span");
var addOperator = document.querySelector("#operator-add");
var equalOperator = document.querySelector("#operator-equal");
var subtractOperator = document.querySelector("#operator-subtract");
var multiplyOperator = document.querySelector("#operator-multiply");
var divideOperator = document.querySelector("#operator-divide");
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
    if (operatorActive !== "none") {
        equalsTo();
    }
    operatorActive = "add";
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
});
subtractOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
    operatorActive = "subtract";
});
multiplyOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
    operatorActive = "multiply";
});
divideOperator.addEventListener("click", function () {
    if (operatorActive !== "none") {
        equalsTo();
    }
    firstNumber = +resultSpan.innerHTML;
    clearSpan = true;
    operatorActive = "divide";
});
equalOperator.addEventListener("click", function () {
    equalsTo();
});
function equalsTo() {
    if (operatorActive !== "none") {
        var finalResult = 0;
        secondNumber = +resultSpan.innerHTML;
        if (operatorActive === "add") {
            finalResult = firstNumber + secondNumber;
        }
        else if (operatorActive === "subtract") {
            finalResult = firstNumber - secondNumber;
        }
        else if (operatorActive === "multiply") {
            finalResult = firstNumber * secondNumber;
        }
        else if (operatorActive === "divide") {
            finalResult = firstNumber / secondNumber;
        }
        operatorActive = "none";
        resultSpan.innerHTML = finalResult.toString();
        firstNumber = +resultSpan.innerHTML;
        secondNumber = 0;
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
