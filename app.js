var numbers = document.querySelectorAll(".number");
var resultSpan = document.getElementById("result-span");
numbers.forEach(function (button) {
    button.addEventListener("click", function () {
        if (resultSpan.textContent !== "0") {
            resultSpan.innerHTML += button.innerHTML;
        }
        else {
            resultSpan.innerHTML = button.innerHTML;
        }
    });
});
