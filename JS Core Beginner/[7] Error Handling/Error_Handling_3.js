'use strict';

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error('Деление на ноль невозможно');
    }
    return a / b;
}

// Пример использования функции
try {
    const result = divideNumbers(10, 0);
    console.log("Результат деления:", result);
} catch (error) {
    console.error("Ошибка:", error.message);
}
