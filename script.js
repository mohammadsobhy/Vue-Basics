let message = "Hello";
let count = 0;
let ourInput = "";

// elements
const messageEl = document.getElementById("message");
const counterEl = document.getElementById("counter");
const inputField = document.getElementById("inputField");
const inputText = document.getElementById("inputText");

const addBtn = document.getElementById("add");
const reduceBtn = document.getElementById("reduce");
const resetBtn = document.getElementById("reset");

// initial render
messageEl.textContent = message;
counterEl.textContent = count;

// functions
function addCount(value) {
	count = count + value;
	counterEl.textContent = count;
}

function reduceCount(value) {
	count = count - value;
	counterEl.textContent = count;
}

function resetCount() {
	count = 0;
	counterEl.textContent = count;
}

// events
addBtn.addEventListener("click", () => addCount(1));
reduceBtn.addEventListener("click", () => reduceCount(1));
resetBtn.addEventListener("click", resetCount);

inputField.addEventListener("input", (e) => {
	ourInput = e.target.value;
	inputText.textContent = ourInput;
});
