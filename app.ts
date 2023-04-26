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

const activeOperatorSpan = document.querySelector(
	"#active-operator"
)! as HTMLButtonElement;

const dot = document.querySelector("#dot")! as HTMLButtonElement;

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
				if (resultSpan.innerHTML === "0") {
					resultSpan.innerHTML = button.innerHTML;
				} else {
					resultSpan.innerHTML += button.innerHTML;
				}
			}
		} else {
			if (resultSpan.textContent !== "0") {
				resultSpan.innerHTML += button.innerHTML;
			} else {
				resultSpan.innerHTML = button.innerHTML;
			}
		}
		checkIfResultTooLong();
	});
});

addOperator.addEventListener("click", () => {
	if (operatorActive !== "none") {
		equalsTo();
	}
	operatorActive = "add";
	activeOperatorSpan.innerHTML = "+";
	firstNumber = +resultSpan.innerHTML;
	clearSpan = true;
});

subtractOperator.addEventListener("click", () => {
	if (operatorActive !== "none") {
		equalsTo();
	}
	operatorActive = "subtract";
	activeOperatorSpan.innerHTML = "-";
	firstNumber = +resultSpan.innerHTML;
	clearSpan = true;
});

multiplyOperator.addEventListener("click", () => {
	if (operatorActive !== "none") {
		equalsTo();
	}
	operatorActive = "multiply";
	activeOperatorSpan.innerHTML = "x";
	firstNumber = +resultSpan.innerHTML;
	clearSpan = true;
});

divideOperator.addEventListener("click", () => {
	if (operatorActive !== "none") {
		equalsTo();
	}
	operatorActive = "divide";
	activeOperatorSpan.innerHTML = "/";
	firstNumber = +resultSpan.innerHTML;
	clearSpan = true;
});

dot.addEventListener("click", () => {
	if (resultSpan.innerHTML.indexOf(".") === -1) {
		resultSpan.innerHTML += ".";
	}
});

equalOperator.addEventListener("click", () => {
	equalsTo();
});

function equalsTo() {
	if (operatorActive !== "none") {
		let finalResult: number = 0;
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
	const resultLength: number = resultSpan.innerHTML.length;
	if (resultLength > 12) {
		const newDisplayArr: string[] = resultSpan.innerHTML.split("");
		for (let i: number = resultLength; i > 12; i--) {
			newDisplayArr.pop();
		}
		const newDisplayString: string = newDisplayArr.join("");
		resultSpan.innerHTML = newDisplayString;
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
		const newDisplayArr: string[] = resultSpan.innerHTML.split("");
		if (newDisplayArr.length > 1) {
			newDisplayArr.pop();
			const newDisplayString: string = newDisplayArr.join("");
			resultSpan.innerHTML = newDisplayString;
		} else {
			resultSpan.innerHTML = "0";
		}
	}
});
