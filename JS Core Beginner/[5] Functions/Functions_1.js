'use strict';

function repeatOperation(operation, interval, repetitions) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;
        if (count === repetitions) {
            clearInterval(intervalId);
        }
    }, interval);
}

// Пример использования функции
function printHello() {
    console.log("Hello, world!");
}

// Выполняем операцию printHello() 5 раз каждую секунду
repeatOperation(printHello, 1000, 5);
