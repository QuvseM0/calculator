let numberA
let numberB
let operator

function add(a,b){return a + b};
function subtract(a,b){return a - b};
function multiply(a,b){return a * b};
function divide(a,b){return a / b};

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
const bckspace = document.querySelector("#bckspace")
const floatButton = document.querySelector(".float")
const numberButton = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator");

let ops = ["+","-","*","/"]
let opSelected = ""
let text = ""
let displayText = ""
let displayValue = 0
let numA = 0
let numB = 0

display.textContent = "0"

numberButton.forEach(element => {
    element.addEventListener("click", e => {
        if(display.textContent === "0" || ops.includes(display.textContent)){display.textContent = ""}
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

floatButton.addEventListener("click", e => {
    text = floatButton.textContent
    while(!display.textContent.includes(".")){
        if(display.textContent === opSelected){
            display.textContent = "0"
            display.textContent += text
        }else{
            display.textContent += text
        }
    }
})

equal.addEventListener("click", e => { 
    let result = operate(numA,opSelected,numB)
    if(!Number.isInteger(result)){
        displayValue = Math.round(result * 100) / 100
    }else{
        displayValue = result
    }
    if(displayValue === Infinity){
        display.textContent = "LIGMA!"
    }else if (isNaN(displayValue)){
        display.textContent = "0"
        displayText = ""
        numA, numB, displayValue = 0    
    }else{
        display.textContent = displayValue
    }
    numA = Number(displayValue)
    numB = 0
    opSelected = ""
})

erease.addEventListener("click", e => {
    display.textContent = "0"
    displayText = ""
    numA, numB, displayValue = 0
})

bckspace.addEventListener("click", e => {
    display.textContent = display.textContent.slice(0, -1)
})

window.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        let result = operate(numA,opSelected,numB)
        if(!Number.isInteger(result)){
            displayValue = Math.round(result * 100) / 100
        }else{
            displayValue = result
        }
        if(displayValue === Infinity){
            display.textContent = "LIGMA!"
        }else if (isNaN(displayValue)){
            display.textContent = "0"
            displayText = ""
            numA, numB, displayValue = 0    
        }else{
            display.textContent = displayValue
        }
        numA = Number(displayValue)
        numB = 0
        opSelected = ""
    }
    if(event.key == "Backspace"){
        display.textContent = "0"
        displayText = ""
        numA, numB, displayValue = 0
    }
    if(event.key == "."){
        text = floatButton.textContent
        while(!display.textContent.includes(".")){
            if(display.textContent === opSelected){
                display.textContent = "0"
                display.textContent += text
            }else{
                display.textContent += text
            }
        }
    }
    if(event.key >= 0 && event.key <= 9){
        if(display.textContent === "0" || ops.includes(display.textContent)){display.textContent = ""}
        let range = [0,1,2,3,4,5,6,7,8,9]
        text = range[event.key]
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
    }
    if(ops.includes(event.key)){
        text = event.key 
        display.textContent = text
        opSelected = text
    }
    }
)

