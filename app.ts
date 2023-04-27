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

const equalOperator = document.querySelector(
	"#operator-equal"
)! as HTMLButtonElement;

const operators = document.querySelectorAll(
	".operator"
)! as NodeListOf<HTMLButtonElement>;

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

operators.forEach((operator) => {
	operator.addEventListener("click", (o) => {
		let name = (o.target! as HTMLButtonElement).name;
		let symbol = (o.target! as HTMLButtonElement).innerHTML;
		console.log(symbol);
		operatorActive = name;
		activeOperatorSpan.innerHTML = symbol;
		firstNumber = +resultSpan.innerHTML;
		clearSpan = true;
	});
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
	activeOperatorSpan.innerHTML = "";
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
