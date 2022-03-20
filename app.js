const numbers = document.querySelectorAll(".number"),
    operators = document.querySelectorAll(".operators div"),
    panel = document.getElementById("panel"),
    clear = document.getElementById("clear"),
    backspace = document.getElementById("backspace"),
    equal = document.getElementById("equal"),
    dot = document.getElementById("dot");


// Whenever a number button is pressed add the corresponding number to the screen
for (let element of numbers) {
    element.addEventListener("click",(numberButton) => {
        panel.innerHTML += numberButton.target.innerHTML;
    })
}

dot.addEventListener("click", () => panel.innerHTML += ".") // Dots are retarded

clear.addEventListener("click", () => panel.innerHTML = "" ) // If C is pressed, clear the panel

// If the arrow button is pressed, delete the last character
backspace.addEventListener("click", () => panel.innerHTML = panel.innerHTML.substring(0,panel.innerHTML.length-1)  )

for (let element of operators) {
    element.addEventListener("click", (operatorButton) => {
        // If there is nothing on the panel and the first pressed button is operator, then add 0 to the beginning
        if (panel.innerHTML.length === 0)
            panel.innerHTML = "0";

        // If the last character is also an operator, then remove the last one
        let lastChar = panel.innerHTML[panel.innerHTML.length-1];
        if ("+-×÷".includes(lastChar))
            panel.innerHTML = panel.innerHTML.substring(0,panel.innerHTML.length-1);

        panel.innerHTML += operatorButton.target.innerHTML;
    })
}

// What happens when the = button is pressed:
equal.addEventListener("click", () => {
    let input = panel.innerHTML; // store the string for future evaluation
    let lastChar = input[input.length-1]; // the last character

    // Check if the last character is an operator
    if ("+-×÷".includes(lastChar)) {
        alert("Can't end with an operator!");
        return ;
    }

    // Transform multiplication crosses × to stars * for correct evaluation
    while (input.indexOf("×") !== -1)
        input = input.substring(0, input.indexOf("×")) + "*" + input.substring(input.indexOf("×")+1);

    // Transform division symbols ÷ to slashes / for correct evaluation
    while (input.indexOf("÷") !== -1)
        input = input.substring(0, input.indexOf("÷")) + "/" + input.substring(input.indexOf("÷")+1);

    panel.innerHTML = eval(input); // evaluate the string and display the result
    // If evaluation fails the initial string is returned
})