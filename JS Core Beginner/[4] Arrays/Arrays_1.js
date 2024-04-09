'use strict';

function increaseNumbersByTenPercent(numbers) {
    // Создаем новый массив для хранения результатов
    const result = [];

    // Перебираем каждый элемент массива
    for (let number of numbers) {
        // Увеличиваем число на 10 процентов и добавляем в новый массив
        const increasedNumber = number * 1.1; // Увеличиваем на 10%
        result.push(increasedNumber);
    }

    return result;
}

// Пример использования функции
const numbers = [10, 20, 30, 40, 50];
const increasedNumbers = increaseNumbersByTenPercent(numbers);
console.log("Исходный массив:", numbers);
console.log("Массив с увеличенными числами на 10%:", increasedNumbers);
