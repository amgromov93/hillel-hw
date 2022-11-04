'use strict'

function createCalculator(base) {
    const resetNum = base;

    return {
        add: (num) => {
            if (!isNaN(num)){
                base += num;
            }
        },
        sub: (num) => {
            if (!isNaN(num)){
                base -= num;
            }
        },
        mull: (num) => {
            if (!isNaN(num)){
                base /= num;
            }
        },
        set: (num) => {
            base = num;
        },
        reset: () => {
            base = resetNum;
        },
        get: () => {
            return base;
        },
    }
}



const calculator = createCalculator(100);

calculator.add(10); // 110 - это текущее значение base
calculator.add(10); 
calculator.set(20);
calculator.add(10);
calculator.sub(20);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять

calculator.reset();

calculator.add(10);
calculator.add(10); 
calculator.sub(20);
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe');
calculator.add(40);
calculator.add(30); 
calculator.sub(20);
calculator.add('qwe');
calculator.mull(3);
calculator.add(40);


console.log(calculator.get()); // 40