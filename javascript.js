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
    }
};