var numbers = document.querySelectorAll(".number");
var clearButton = document.querySelector("#clear");
var backspaceButton = document.querySelector("#backspace");
var resultSpan = document.getElementById("result-span");
var addOperator = document.querySelector("#operator-add");
var numberDisplayed;
var handleAdd = function () { };
numbers.forEach(function (button) {
    button.addEventListener("click", function () {
        if (resultSpan.textContent !== "0") {
            resultSpan.innerHTML += button.innerHTML;
        }
        else {
            resultSpan.innerHTML = button.innerHTML;
        }
        numberDisplayed = +resultSpan.innerHTML;
    });
});
addOperator.addEventListener("click", function () {
    console.log("plus clicked. Number displayed is: " + resultSpan.innerHTML);
});
clearButton.addEventListener("click", function () {
    resultSpan.innerHTML = "0";
    numberDisplayed = +resultSpan.innerHTML;
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
    numberDisplayed = +resultSpan.innerHTML;
});
