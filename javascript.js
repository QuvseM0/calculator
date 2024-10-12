
function add(a,b){return a + b};
function subtract(a,b){return a - b};
function multiply(a,b){return a * b};
function divide(a,b){return a / b};

let numberA
let numberB
let operator

function operate(nrA,op,nrB){
    switch (op) {
        case "+":
            return add(nrA,nrB)
            break
        case "-":
            return subtract(nrA,nrB)
            break
        case "*":
            return multiply(nrA,nrB)
            break
        case "/":
            return divide(nrA,nrB)
            break
    };
};


const display = document.querySelector("#displayContent")
const erease = document.querySelector(".delete")
const numberButton = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator");

let placeh = "0" 
let ops = ["+","-","*","/"]
let text
let displayText


display.textContent = placeh

numberButton.forEach(element => {
    element.addEventListener("click", e => {
        if(display.textContent === placeh || ops.includes(display.textContent)){display.textContent = ""}
        text = element.textContent
        displayText = display.textContent
        if (display.textContent.length <= 9){
            display.textContent += text
        }else{
            displayText
        }
    })
})

console.log(displayText)

erease.addEventListener("click", e => {
    display.textContent = placeh
})

operatorButton.forEach(element => {
    element.addEventListener("click", e => {
        text = element.textContent
        display.textContent = text
    })
})


