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

numbers.forEach((button) => {
	button.addEventListener("click", () => {
		if (resultSpan.textContent !== "0") {
			resultSpan.innerHTML += button.innerHTML;
		} else {
			resultSpan.innerHTML = button.innerHTML;
		}
	});
});

clearButton.addEventListener("click", () => {
	resultSpan.innerHTML = "0";
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
