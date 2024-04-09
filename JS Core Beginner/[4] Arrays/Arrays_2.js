'use strict';

function sumOfFirstHalf(numbers) {
    // Находим индекс, до которого нужно брать элементы массива
    const halfIndex = Math.ceil(numbers.length / 2);

    // Берем первую половину элементов массива
    const firstHalf = numbers.slice(0, halfIndex);

    // Вычисляем сумму элементов первой половины
    const sum = firstHalf.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

// Пример использования функции
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = sumOfFirstHalf(numbers);
console.log("Сумма первой половины элементов массива:", result);
