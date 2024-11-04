// JavaScript for calculator functionality
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.value === "=") {
            // Evaluate the expression
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else if (button.value !== "C" && button.value !== "del") {
            // Add button value to display
            display.value += button.value;
        }
    });
});

clearButton.addEventListener("click", () => {
    display.value = "";
});

deleteButton.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
