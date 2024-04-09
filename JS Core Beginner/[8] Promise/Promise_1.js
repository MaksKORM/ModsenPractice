'use strict';

// Функция, имитирующая асинхронную операцию с помощью setTimeout
function asyncOperation(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Выполнена асинхронная операция с параметром:", value);
            resolve(value);
        }, 1000); // Имитация задержки в 1 секунду
    });
}

// Функция для выполнения серии асинхронных операций последовательно
function sequentialAsyncOperations(values) {
    // Создаем промис, который разрешится сразу с пустым значением
    let promiseChain = Promise.resolve();

    // Для каждого значения в массиве values добавляем операцию в цепочку промисов
    values.forEach(value => {
        promiseChain = promiseChain.then(() => asyncOperation(value));
    });

    return promiseChain;
}

// Пример использования функции
const values = [1, 2, 3, 4, 5];
sequentialAsyncOperations(values)
    .then(() => {
        console.log("Все асинхронные операции завершены.");
    })
    .catch(error => {
        console.error("Ошибка:", error);
    });
