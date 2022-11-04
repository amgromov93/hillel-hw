const symb = prompt('Enter operator +, -, *, /');
const numA = Number(prompt('Write operand A'));
const numB = Number(prompt('Write operand B'));

if (isNaN(numA) || isNaN(numB)) {
    console.log('Wrong number'); 
} else {
    calc(symb);
}

function calc(symb) {
    switch (symb) {
        case '+':
            result = numA + numB;
            break;
        case '-':
            result = numA - numB;
            break;
        case '*':
            result = numA * numB;
            break;
        case '/':
            result = numA / numB;
            break;
        default:
            console.log(`WRONG OPERATOR`);
    }
}

function res() {
    console.log(`${numA} ${symb} ${numB} = ${result}`)
}

res();