const zero = document.getElementById("number0")! as HTMLButtonElement;
const one = document.getElementById("number1")! as HTMLButtonElement;
const two = document.getElementById("number2")! as HTMLButtonElement;
const three = document.getElementById("number3")! as HTMLButtonElement;
const four = document.getElementById("number4")! as HTMLButtonElement;
const five = document.getElementById("number5")! as HTMLButtonElement;
const six = document.getElementById("number6")! as HTMLButtonElement;
const seven = document.getElementById("number7")! as HTMLButtonElement;
const eight = document.getElementById("number8")! as HTMLButtonElement;
const nine = document.getElementById("number9")! as HTMLButtonElement;

const resultSpan = document.getElementById("result-span")! as HTMLSpanElement;

one.addEventListener("click", () => {
	if (resultSpan.innerHTML !== "0") {
		resultSpan.innerHTML += "1";
	} else {
		resultSpan.innerHTML = "1";
	}
});
