let total = '';
// operation functions
function add(a,b) {
    a = Number(a);
    b = Number(b);
    total = a+b;
    console.log('total: ', total);
    return total;
}
function minus(a,b) {
    a = Number(a);
    b = Number(b);
    total = a-b;
    console.log('total: ', total);
    return total;
} 
function times(a,b) {
    a = Number(a);
    b = Number(b);
    total = a*b;
    console.log('total: ', total);
    return total;
} 
function divide(a,b) {
    a = Number(a);
    b = Number(b);
    total = a/b;
    console.log('total: ', total);
    return total;
} 

// Numbers to be operated on
let firstNumber = '';
let secondNumber = '';
let displayNumber = '';

// function - update display number
function updateDisplay() {
    const divDisplay = document.querySelector('#divDisplay');
    const paraDisplay = document.querySelector('#paraDisplay');
    displayNumber = Number(displayNumber);
    paraDisplay.innerText = displayNumber;
    divDisplay.appendChild(paraDisplay);
}
// function - display total number
function displayTotal() {
    const divDisplay = document.querySelector('#divDisplay');
    const paraDisplay = document.querySelector('#paraDisplay');
    total = Number(total);
    if(isFloat(total)) {
        total = (Math.round(total * 10) / 10).toFixed(1);
    };
    paraDisplay.innerText = total;
    divDisplay.appendChild(paraDisplay);
}

// function - check if number is float
function isFloat(n) {
    return n === +n && n !== (n|0);
}

// function - display error
function displayError() {
    const divDisplay = document.querySelector('#divDisplay');
    const paraDisplay = document.querySelector('#paraDisplay');
    displayNumber = 'ERROR';
    paraDisplay.innerText = displayNumber;
    divDisplay.appendChild(paraDisplay);
    total = Number(total);
    displayNumber = secondNumber;
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
    displayNumber = 0;
    paraDisplay.innerText = displayNumber;
    console.log('cleardisplay ', paraDisplay.innerText);
    displayNumber = '';
    divDisplay.appendChild(paraDisplay);
    operator = 'plus';
}

// DOM - delete button
const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', backSpace);

function backSpace() {
    const divDisplay = document.querySelector('#divDisplay');
    const paraDisplay = document.querySelector('#paraDisplay');
    const paraArray = Array.from(paraDisplay.innerText);
    paraArray.splice(-1,1)
    paraDisplay.innerText = paraArray.join('');
    divDisplay.appendChild(paraDisplay);
    displayNumber = paraDisplay.innerText;
}

// DOM - number buttons
const numbers = document.querySelectorAll('.number-btn');
numbers.forEach(number => {
    number.addEventListener('click', concatNumbers)
});

function concatNumbers(e) {
    displayNumber += e.target.innerText;
    console.log('displayNumber: '+displayNumber);
    updateDisplay();
    return displayNumber;
}

// operator variables - add (default), minus, times, divide
let oldOperator = '';
let operator = '';
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
    secondNumber = displayNumber;
    console.log('2nd=display: '+secondNumber);
    operate();
    displayNumber = 0;
    console.log('displaynumber: '+ displayNumber);
}

function operate() {
    if(operator=='plus') {
        add(firstNumber,secondNumber);
        displayTotal();
        firstNumber = total;
        oldOperator = operator;
        operator = newOperator;
    } else if(operator=='minus') {
        minus(firstNumber,secondNumber);
        displayTotal();
        firstNumber = total;
        oldOperator = operator;
        operator = newOperator;
    } else if(operator=='times') {
        times(firstNumber,secondNumber);
        displayTotal();
        firstNumber = total;
        oldOperator = operator;
        operator = newOperator;
    } else if(operator=='divide') {
        if(secondNumber==0) {
            displayError();
            console.log('total'+total);
            operator = '';
        } else {
            divide(firstNumber,secondNumber);
            displayTotal();
            firstNumber = total;
            oldOperator = operator;
            operator = newOperator;
        }
    } else if(operator=='equal') {
        if(newOperator == 'equal') {
            operator = oldOperator;
            firstNumber = total;
            operate();
        } else {
            if(displayNumber!==0) {
                total = displayNumber;
            }
            firstNumber = total;
            oldOperator = operator;
            operator = newOperator;
        }
    } else if(operator=='') {
        firstNumber = displayNumber;
        oldOperator = operator;
        operator = newOperator;
    }
}

// DOM - point button
const point = document.querySelector('#point');
point.addEventListener('click', addPoint);

function addPoint() {
    const divDisplay = document.querySelector('#divDisplay');
    const paraDisplay = document.querySelector('#paraDisplay');
    const paraArray = Array.from(paraDisplay.innerText);
    if(paraArray.includes('.')) {
        displayNumber = paraDisplay.innerText;
    } else {
        paraArray.push('.');
        paraDisplay.innerText = paraArray.join('');
        divDisplay.appendChild(paraDisplay);
        displayNumber = paraDisplay.innerText; 
    }
}