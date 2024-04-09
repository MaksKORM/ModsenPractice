'use strict';

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const number = 5;
console.log(`Факториал числа ${number} равен: ${factorial(number)}`);
