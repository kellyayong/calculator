let total = '';
// operation functions
function add(a,b) {
    a = Number(a);
    b = Number(b);
    total = a+b;
    console.log(a+'+'+b);
    console.log('total: ', total);
    return total;
}
function minus(a,b) {
    a = Number(a);
    b = Number(b);
    total = a-b;
    console.log(a+'-'+b);
    console.log('total: ', total);
    return total;
} 
function times(a,b) {
    a = Number(a);
    b = Number(b);
    total = a*b;
    console.log(a+'*'+b);
    console.log('total: ', total);
    return total;
} 
function divide(a,b) {
    a = Number(a);
    b = Number(b);
    total = a/b;
    console.log(a+'/'+b);
    console.log('total: ', total);
    return total;
} 

// function - update display number
function updateDisplay() {
    const divDisplay = document.querySelector('#divDisplay');
    const paraDisplay = document.querySelector('#paraDisplay');
    paraDisplay.innerText = displayNumber;
    console.log('displayNumber: ', paraDisplay.innerText);
    divDisplay.appendChild(paraDisplay);
}
// function - update display number
function displayTotal() {
    const divDisplay = document.querySelector('#divDisplay');
    const paraDisplay = document.querySelector('#paraDisplay');
    paraDisplay.innerText = total;
    console.log('total: ', paraDisplay.innerText);
    divDisplay.appendChild(paraDisplay);
}

// DOM - clear button
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearDisplay);

// function - clear display
function clearDisplay() {
    const divDisplay = document.querySelector('#divDisplay');
    const paraDisplay = document.querySelector('#paraDisplay');
    firstNumber = '';
    secondNumber = '';
    displayNumber = '';
    paraDisplay.innerText = displayNumber;
    console.log('paraDisplay.innerText=displayNumber: ', paraDisplay.innerText);
    divDisplay.appendChild(paraDisplay);
    operator = 'plus';
}

// Numbers to be operated on
let firstNumber = '';
let secondNumber = '';
let displayNumber = '';

// DOM - number buttons
const numbers = document.querySelectorAll('.number-btn');
numbers.forEach(number => {
    number.addEventListener('click', concatNumbers)
});

function concatNumbers(e) {
    displayNumber = displayNumber + e.target.innerText;
    updateDisplay();
    console.log(updateDisplay());
    return displayNumber;
}

// operator variables - add (default), minus, times, divide
let operator = 'plus';
let newOperator = '';

// DOM - operator buttons
const operators = document.querySelectorAll('.operation-btn');
operators.forEach(operator => {
    operator.addEventListener('click', selectOperator);
});

function selectOperator(e) {
    newOperator = e.target.id;
    console.log('operator: '+operator);
    console.log('newOperator: ', newOperator);
    operate();
    console.log(operate());
}

// operate function
function operate() {
    switch (operator) {
        case 'plus':
            console.log('case:plus');
            console.log('1st#,2nd: '+firstNumber,secondNumber);
            secondNumber = displayNumber;
            add(firstNumber,secondNumber);
            displayTotal();
            firstNumber = total;
            displayNumber = '';
            if(newOperator!=='equal') {
                operator = newOperator;
            };
            console.log('op,newOp: '+operator,newOperator);
            break;
        case 'minus':
            console.log('case:minus');
            console.log('1st#,2nd: '+firstNumber,secondNumber);
            secondNumber = displayNumber;
            minus(firstNumber,secondNumber);
            displayTotal();
            firstNumber = total;
            displayNumber = '';
            if(newOperator!=='equal') {
                operator = newOperator;
            };
            console.log('op,newOp: '+operator,newOperator);
            break;
        case 'times':
            console.log('case:times');
            console.log('1st#,2nd: '+firstNumber,secondNumber);
            secondNumber = displayNumber;
            times(firstNumber,secondNumber);
            displayTotal();
            firstNumber = total;
            displayNumber = '';
            if(newOperator!=='equal') {
                operator = newOperator;
            };
            console.log('op,newOp: '+operator,newOperator);
            break;
        case 'divide':
            console.log('case:divide');
            console.log('1st#,2nd: '+firstNumber,secondNumber);
            secondNumber = displayNumber;
            divide(firstNumber,secondNumber);
            displayTotal();
            firstNumber = total;
            displayNumber = '';
            if(newOperator!=='equal') {
                operator = newOperator;
            };
            console.log('op,newOp: '+operator,newOperator);
            break;
        case 'equal':
            console.log('case:equal');
            console.log('1st#,2nd: '+firstNumber,secondNumber);
            secondNumber = displayNumber;
            displayTotal();
            firstNumber = total;
            operate();
            console.log('op,newOp: '+operator,newOperator);
            break;
        case '':
            operator = newOperator;
    };
}
