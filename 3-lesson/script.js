const FIRST_NUMBER_NAME = 'A';
const SECOND_NUMBER_NAME = 'B';

const symb = getSymb();
const numA = getNumber(FIRST_NUMBER_NAME);
const numB = getNumber(SECOND_NUMBER_NAME);

let result = calculate(symb, numA, numB);

if (isNaN(numA) || isNaN(numB)) {
    alert('Wrong operand'); 
} else if (symb !== '+') {
    alert('Wrong operator');
} else {
    calculate();
    showResult(symb, numA, numB, result);
}

function getSymb() {
    return prompt('Enter operator');
}

function getNumber(numName) {
    return Number(prompt(`Write operand ${numName}`));
}

function calculate(operator, a, b) {
    switch (operator) {
        case '+':
            return (a + b);
    }
}

function showResult(operator, a, b, result) {
    alert(`${a} ${operator} ${b} = ${result}`);
}