'use strict';

function sumOfSquares(numbers) {
    // Используем метод map() для получения массива квадратов каждого элемента
    const squares = numbers.map(number => number * number);

    // Используем метод reduce() для вычисления суммы квадратов
    const sum = squares.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

// Пример использования функции
const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log("Сумма квадратов элементов массива:", result);
