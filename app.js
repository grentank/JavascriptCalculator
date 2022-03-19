let numbers = document.querySelectorAll(".number"),
    operators = document.querySelectorAll(".operators div"),
    panel = document.getElementById("panel"),
    clear = document.getElementById("clear"),
    backspace = document.getElementById("backspace"),
    resultDisplayed = false;

for (let element of numbers) {
    element.addEventListener("click",(numberButton) => {
        panel.innerHTML += numberButton.target.innerHTML;
    })
}
