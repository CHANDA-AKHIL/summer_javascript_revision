let container = document.getElementById("colorPickerContainer");
let spanElement = document.getElementById("selectedColorHexCode");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");

function firstButton() {
    container.style.backgroundColor = "#e0e0e0";
    spanElement.textContent = "#e0e0e0"
}

function secondButton() {
    container.style.backgroundColor = "#6fcf97";
    spanElement.textContent = "#6fcf97"
}

function thirdButton() {
    container.style.backgroundColor = "#56ccf2";
    spanElement.textContent = "#56ccf2"
}

function fourthButton() {
    container.style.backgroundColor = "#bb6bd9";
    spanElement.textContent = "#bb6bd9"
}