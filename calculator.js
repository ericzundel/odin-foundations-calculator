const buttonElems = document.querySelectorAll(".button");
const displayElem = document.querySelector(".display");
let workingValue = 0;
let computedValue = 0;
let lastOperator = '';

const MULTIPLY = 'multiply';
const DIVIDE = 'divide';
const ADD = 'add';
const SUBTRACT = 'subtract'

Array.from(buttonElems).forEach((elem) => {
    elem.addEventListener('click', (e) => {
        let elem = e.currentTarget;
        let classList = Array.from(elem.classList);
        // console.log(`got click for ${classList}`)

        if (classList.includes('ac')) {
            console.log("AC button pressed");
            computedValue = 0;
            workingValue = 0;
            lastOperator = '';
            displayWorkingValue()
        } else if (classList.includes('sign')) {
            console.log("+/- pressed");
            workingValue = -workingValue;
        } else if (classList.includes('percent')) {
            console.log("percent pressed");
        } else if (classList.includes('divide')) {
            console.log("divide pressed");
            setOperator(DIVIDE);
        } else if (classList.includes('multiply')) {
            console.log("multiply pressed");
            setOperator(MULTIPLY);
        } else if (classList.includes('minus')) {
            console.log("minus pressed");
            setOperator(SUBTRACT);
        } else if (classList.includes('plus')) {
            console.log("plus pressed");
            setOperator(ADD);
        } else if (classList.includes('equals')) {
            console.log("equals pressed");
            if (lastOperator != "") {
                switch (lastOperator) {
                    case ADD:
                        computedValue = computedValue + workingValue;
                        break;
                    case SUBTRACT:
                        computedValue = computedValue - workingValue;
                        break;
                    case DIVIDE:
                        computedValue = computedValue / workingValue;
                        break;
                    case MULTIPLY:
                        computedValue = computedValue * workingValue;
                        break;
                }
                displayComputedValue();
                workingValue = 0;
            }
        } else if (classList.includes('decimal')) {
            console.log("decimal pressed");
        } else if (classList.includes('button0')) {
            console.log("0 pressed");
            workingValue = workingValue * 10 + 0;
            displayWorkingValue();
        } else if (classList.includes('button1')) {
            console.log("1 pressed");
            workingValue = workingValue * 10 + 1;
            displayWorkingValue();
        } else if (classList.includes('button2')) {
            console.log("2 pressed");
            workingValue = workingValue * 10 + 2;
            displayWorkingValue();
        } else if (classList.includes('button3')) {
            console.log("3 pressed");
            workingValue = workingValue * 10 + 3;
            displayWorkingValue();
        } else if (classList.includes('button4')) {
            console.log("4 pressed");
            workingValue = workingValue * 10 + 4;
            displayWorkingValue();
        } else if (classList.includes('button5')) {
            console.log("5 pressed");
            workingValue = workingValue * 10 + 5;
            displayWorkingValue();
        } else if (classList.includes('button6')) {
            console.log("6 pressed");
            workingValue = workingValue * 10 + 6;
            displayWorkingValue();
        } else if (classList.includes('button7')) {
            console.log("7 pressed");
            workingValue = workingValue * 10 + 7;
            displayWorkingValue();
        } else if (classList.includes('button8')) {
            console.log("8 pressed");
            workingValue = workingValue * 10 + 8;
            displayWorkingValue();
        } else if (classList.includes('button9')) {
            console.log("9 pressed");
            workingValue = workingValue * 10 + 9;
            displayWorkingValue();
        }
    });
})

function setOperator(operator) {
    lastOperator = operator;
    computedValue = workingValue;
    workingValue = 0;
    displayComputedValue();
}

function displayWorkingValue() {
    displayElem.textContent = workingValue;
}

function displayComputedValue() {
    displayElem.textContent = computedValue;
}

displayWorkingValue();