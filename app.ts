const numbers = document.querySelectorAll(
	".number"
)! as NodeListOf<HTMLButtonElement>;

const clearButton = document.querySelector("#clear")! as HTMLButtonElement;
const backspaceButton = document.querySelector(
	"#backspace"
)! as HTMLButtonElement;

const resultSpan: HTMLSpanElement = document.getElementById(
	"result-span"
)! as HTMLSpanElement;

const addOperator = document.querySelector(
	"#operator-add"
)! as HTMLButtonElement;

const equalOperator = document.querySelector(
	"#operator-equal"
)! as HTMLButtonElement;

const subtractOperator = document.querySelector(
	"#operator-subtract"
)! as HTMLButtonElement;
const multiplyOperator = document.querySelector(
	"#operator-multiply"
)! as HTMLButtonElement;

const divideOperator = document.querySelector(
	"#operator-divide"
)! as HTMLButtonElement;

let firstNumber: number = 0;
let secondNumber: number = 0;
let operatorActive: string = "none";
let clearSpan: boolean = false;

numbers.forEach((button) => {
	button.addEventListener("click", () => {
		if (operatorActive !== "none") {
			if (clearSpan) {
				clearSpan = false;
				resultSpan.innerHTML = "";
				resultSpan.innerHTML += button.innerHTML;
			} else {
				resultSpan.innerHTML += button.innerHTML;
			}
		} else {
			if (resultSpan.textContent !== "0") {
				resultSpan.innerHTML += button.innerHTML;
			} else {
				resultSpan.innerHTML = button.innerHTML;
			}
		}
	});
});

addOperator.addEventListener("click", () => {
	if (operatorActive !== "none") {
		equalsTo();
	}
	operatorActive = "add";
	firstNumber = +resultSpan.innerHTML;
	clearSpan = true;
});

subtractOperator.addEventListener("click", () => {
	if (operatorActive !== "none") {
		equalsTo();
	}
	firstNumber = +resultSpan.innerHTML;
	clearSpan = true;
	operatorActive = "subtract";
});

multiplyOperator.addEventListener("click", () => {
	if (operatorActive !== "none") {
		equalsTo();
	}
	firstNumber = +resultSpan.innerHTML;
	clearSpan = true;
	operatorActive = "multiply";
});

divideOperator.addEventListener("click", () => {
	if (operatorActive !== "none") {
		equalsTo();
	}
	firstNumber = +resultSpan.innerHTML;
	clearSpan = true;
	operatorActive = "divide";
});

equalOperator.addEventListener("click", () => {
	equalsTo();
});

function equalsTo() {
	if (operatorActive !== "none") {
		let finalResult: number = 0;
		secondNumber = +resultSpan.innerHTML;
		if (operatorActive === "add") {
			finalResult = firstNumber + secondNumber;
		} else if (operatorActive === "subtract") {
			finalResult = firstNumber - secondNumber;
		} else if (operatorActive === "multiply") {
			finalResult = firstNumber * secondNumber;
		} else if (operatorActive === "divide") {
			finalResult = firstNumber / secondNumber;
		}
		operatorActive = "none";
		resultSpan.innerHTML = finalResult.toString();
		firstNumber = +resultSpan.innerHTML;
		secondNumber = 0;
	}
}

clearButton.addEventListener("click", () => {
	resultSpan.innerHTML = "0";
	firstNumber = 0;
	secondNumber = 0;
	operatorActive = "none";
	clearSpan = false;
});

backspaceButton.addEventListener("click", () => {
	if (resultSpan.textContent !== "0") {
		const newDisplayArr = resultSpan.innerHTML.split("");
		if (newDisplayArr.length > 1) {
			newDisplayArr.pop();
			const newDisplayString = newDisplayArr.join("");
			resultSpan.innerHTML = newDisplayString;
		} else {
			resultSpan.innerHTML = "0";
		}
	}
});
