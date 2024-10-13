
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
const equal = document.querySelector("#equal")
const numberButton = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator");
const placeh = "0" 

let ops = ["+","-","*","/"]
let opSelected = ""
let text = ""
let displayText = ""
let displayValue = 0
let numA = 0
let numB = 0

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
        if(opSelected == ""){
            numA = Number(displayText + text)
        }else{
            numB = Number(displayText + text)
        }
    })
})

operatorButton.forEach(element => {
    element.addEventListener("click", e => {
        text = element.textContent
        display.textContent = text
        opSelected = text
    })
})

equal.addEventListener("click", e => {
    console.log(displayValue)
    console.log(opSelected)
    displayValue = Math.round(operate(numA,opSelected,numB)).toFixed(0)
    display.textContent = displayValue
    numA = Number(displayValue)
    numB = 0
    opSelected = ""
})

erease.addEventListener("click", e => {
    display.textContent = placeh
    displayText = ""
    numA, numB, displayValue = 0
})



