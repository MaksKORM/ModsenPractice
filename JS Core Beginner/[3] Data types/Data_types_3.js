'use strict';

function sumFirstAndLastDigit(number) {
    // Преобразуем число в строку для удобства работы с цифрами
    const numStr = number.toString();

    // Получаем первую цифру числа
    const firstDigit = parseInt(numStr[0], 10);

    // Получаем последнюю цифру числа
    const lastDigit = parseInt(numStr[numStr.length - 1], 10);

    // Выводим сумму первой и последней цифры в консоль
    console.log('Сумма первой и последней цифры числа:', firstDigit + lastDigit);
}

// Пример использования функции
const num = 12345;
sumFirstAndLastDigit(num); // Выведет 6