'use strict'

function Calculator(base) {
    this.base = base
    
    this.add = function(num) {
        if (!isNaN(num)) {
            this.base += num;
        }
    }
    this.sub = function(num) {
        if (!isNaN(num)) {
            this.base -= num;
        }
    }
    this.set = function(num) {
        if (!isNaN(num)) {
            this.base = num;
        }
    }
    this.get = function() {
        return this.base;
    }
}

const calculator = new Calculator(100);

calculator.add(10); // 110 записывает в this.base (в консоль ничего выводить не нужно)
calculator.add(10); // 120 записывает в this.base (в консоль ничего выводить не нужно)
calculator.sub(20); // 100 записывает в this.base (в консоль ничего выводить не нужно)
calculator.set(20); // 20 записывает в this.base (в консоль ничего выводить не нужно)
calculator.add(40); // 30 записывает в this.base (в консоль ничего выводить не нужно)
calculator.add('qwe'); // игнорируем все что не число и значение 30 не меняется
// calculator.set(70);
console.log(calculator.get()); // 30 возвращаем значение