let symb = ['+', '-', '*', '/'],
    operator,
    stroke,
    count = 0,
    number,
    result = 0;
    
while (!symb.includes(operator = prompt(`Enter operator +, -, *, /`)));

do {
    stroke = prompt(`Enter operands count`);
    count = Number(stroke);
} while (count !== parseInt(stroke) || count < 2 || count > 5);

let numbers = [];
for (let i = 1; i <= count; i++) {
    do {
        stroke = prompt(`Enter operand ${i}`);
        number = Number(stroke);
    } while (number !== parseFloat(stroke) || !Number.isFinite(number));
    numbers.push(number);
}

result = numbers[0];
for (let i = 1; i < count; i++) {
    switch (operator) {
        case "+":
            result += numbers[i];
            break;
        case "-":
            result -= numbers[i];
            break;
        case "*":
            result *= numbers[i];
            break;
        case "/":
            result /= numbers[i];
            break;
    }
}

alert(`${numbers.join(` ${operator} `)} = ${result}`);