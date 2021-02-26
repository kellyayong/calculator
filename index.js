
// operation functions
function add(a,b) {
    let total = a+b;
    return total;
}
function minus(a,b) {
    let total = a-b;
    return total;
} 
function times(a,b) {
    let total = a*b;
    return total;
} 
function divide(a,b) {
    let total = a/b;
    return total;
} 

// Numbers to be operated on
let firstNumber = '';
let nextNumber = '';
let numberHolder = '';

// DOM - number buttons
const numbers = document.querySelectorAll('.number-btn');
numbers.forEach(number => {
    number.addEventListener('click', concatNumbers)
});

function concatNumbers(e) {
    numberHolder += + e.target.innerText;
    console.log(numberHolder);
    console.log(e.target.innerText);
    return numberHolder;
}
