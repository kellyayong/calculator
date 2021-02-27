
// operation functions
function add(a,b) {
    let total = a+b;
    console.log('total: ', total);
    return total;
}
function minus(a,b) {
    let total = a-b;
    console.log('total: ', total);
    return total;
} 
function times(a,b) {
    let total = a*b;
    console.log('total: ', total);
    return total;
} 
function divide(a,b) {
    let total = a/b;
    console.log('total: ', total);
    return total;
} 

// Numbers to be operated on
let firstNumber = '';
let nextNumber = '';
let displayNumber = '';

// DOM - number buttons
const numbers = document.querySelectorAll('.number-btn');
numbers.forEach(number => {
    number.addEventListener('click', concatNumbers)
});

function concatNumbers(e) {
    displayNumber += + e.target.innerText;
    console.log('displayNumber: '+displayNumber);
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
    firstNumber = displayNumber;
    displayNumber = 0;
}

// operate function
function operate() {
    switch (operator) {
        case 'plus':
            add(firstNumber,displayNumber);
            if(newOperator!=='equal') {
                operator = newOperator;
            };
            break;
        case 'minus':
            minus(firstNumber,displayNumber);
            if(newOperator!=='equal') {
                operator = newOperator;
            };
            break;
        case 'times':
            times(firstNumber,displayNumber);
            if(newOperator!=='equal') {
                operator = newOperator;
            };
            break;
        case 'divide':
            divide(firstNumber,displayNumber);
            if(newOperator!=='equal') {
                operator = newOperator;
            };
            break;
        case 'equal':
            firstNumber = displayNumber;
            operate();
            break;
    };
}
